/* =========================================================================
   APP.JS - LOGIC CHÍNH (gộp dữ liệu, sidebar, làm bài, chấm điểm, đồng hồ)
   Yêu cầu nạp trước: data_khoi10.js, data_khoi11.js, data_khoi12.js,
                      data_extra.js, data_mocktest.js
========================================================================= */

/* ---------- 1. GỘP DỮ LIỆU TỪ CÁC FILE ---------- */
const safe = (v) => (typeof v !== 'undefined' ? v : {});

const appDatabase = {
    khoi10: { ...safe(typeof dataKhoi10 !== 'undefined' ? dataKhoi10 : undefined) },
    khoi11: { ...safe(typeof dataKhoi11 !== 'undefined' ? dataKhoi11 : undefined) },
    khoi12: { ...safe(typeof dataKhoi12 !== 'undefined' ? dataKhoi12 : undefined) },
    mocktest: {}
};

if (typeof dataExtra !== 'undefined') {
    ['khoi11', 'khoi12'].forEach(k => {
        Object.keys(dataExtra[k] || {}).forEach(id => {
            if (appDatabase[k][id]) console.warn(`[Trùng chỉ số] ${k}[${id}] đã tồn tại, bỏ qua dữ liệu bổ sung.`);
            else appDatabase[k][id] = dataExtra[k][id];
        });
    });
}

// Đề thi thử: lấy từ data_mocktest.js, bỏ đề rỗng và đề trùng nội dung với đề trước
(function buildMocktest() {
    const seen = new Set();
    const merged = { ...(typeof dataMocktest !== 'undefined' ? dataMocktest : {}) };
    if (typeof dataExtra !== 'undefined') {
        Object.keys(dataExtra.mocktest || {}).forEach(id => {
            if (!merged[id] || merged[id].length === 0) merged[id] = dataExtra.mocktest[id];
        });
    }
    Object.keys(merged).sort((a, b) => a - b).forEach(id => {
        const arr = merged[id];
        if (!Array.isArray(arr) || arr.length === 0) return;
        const sig = JSON.stringify(arr);
        if (seen.has(sig)) { console.warn(`[Đề trùng] Đề ${id} giống hệt đề trước, đã ẩn.`); return; }
        seen.add(sig);
        appDatabase.mocktest[id] = arr;
    });
})();

/* ---------- 2. TRẠNG THÁI ---------- */
const MOCK_SECONDS = 50 * 60;
let state = { section: null, key: null, questions: [], submitted: false };
let timerId = null;
let secondsLeft = MOCK_SECONDS;
let secondsElapsed = 0;

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ---------- 3. TAB + SIDEBAR ---------- */
const TAB_ACTIVE = 'px-5 py-2 bg-gray-50 text-emerald-800 font-bold rounded-md shadow-sm text-sm transition-colors';
const TAB_IDLE = 'px-5 py-2 bg-white/20 hover:bg-white/90 hover:text-emerald-800 font-semibold rounded-md text-sm transition-colors';

function selectSection(section) {
    stopTimer();
    ['khoi10', 'khoi11', 'khoi12', 'mocktest'].forEach(s => {
        const el = $('tab-' + s);
        if (el) el.className = (s === section) ? TAB_ACTIVE : TAB_IDLE;
    });
    state = { section, key: null, questions: [], submitted: false };
    showScreen('welcome');
    renderSidebar(section);
}

function renderSidebar(section) {
    const box = $('sidebar-container');
    const titles = { khoi10: 'Địa lí 10', khoi11: 'Địa lí 11', khoi12: 'Địa lí 12', mocktest: 'Đề thi thử' };
    $('sidebar-title').textContent = titles[section] || 'Danh mục';
    const data = appDatabase[section] || {};
    const ids = Object.keys(data).sort((a, b) => a - b);
    if (ids.length === 0) {
        box.innerHTML = '<p class="p-4 text-sm text-gray-500">Chưa có dữ liệu.</p>';
        return;
    }
    box.innerHTML = ids.map(id => {
        let label, sub;
        if (section === 'mocktest') {
            const qs = data[id];
            const m = qs.filter(q => q.type === 'mcq').length, t = qs.filter(q => q.type === 'tf').length;
            label = `Đề thi thử số ${id}`;
            sub = `${m} câu trắc nghiệm • ${t} câu Đúng/Sai • 50 phút`;
        } else {
            const ex = data[id].exercises || {};
            label = data[id].title || `Chủ đề ${id}`;
            sub = `${(ex.mcq || []).length} câu trắc nghiệm • ${(ex.tf || []).length} câu Đúng/Sai`;
        }
        return `<button data-id="${id}" onclick="loadTest('${section}','${id}')"
            class="side-item w-full text-left p-3 mb-2 bg-white border border-gray-200 rounded-xl hover:border-emerald-300 hover:bg-emerald-50 transition">
            <div class="font-semibold text-sm text-emerald-900">${esc(label)}</div>
            <div class="text-xs text-gray-500 mt-1">${sub}</div></button>`;
    }).join('');
}

function markActiveSidebar(id) {
    document.querySelectorAll('.side-item').forEach(b => {
        const on = b.dataset.id === String(id);
        b.classList.toggle('bg-emerald-100', on);
        b.classList.toggle('border-emerald-500', on);
    });
}

/* ---------- 4. MÀN HÌNH ---------- */
function showScreen(name) {
    $('welcome-screen').classList.toggle('hidden-element', name !== 'welcome');
    $('test-screen').classList.toggle('hidden-element', name === 'welcome');
    $('result-screen').classList.toggle('hidden-element', name !== 'result');
    $('submit-btn').classList.toggle('hidden-element', name === 'result');
    if (name === 'welcome') $('timer-display').lastChild.textContent = ' 50:00';
}

/* ---------- 5. LOAD ĐỀ + RENDER ---------- */
function loadTest(section, key) {
    stopTimer();
    const data = appDatabase[section][key];
    let qs;
    if (section === 'mocktest') qs = data;
    else qs = [...(data.exercises.mcq || []), ...(data.exercises.tf || [])];

    state = { section, key, questions: qs, submitted: false };
    $('current-test-title').textContent = section === 'mocktest' ? `Đề thi thử số ${key}` : data.title;
    $('current-test-subtitle').lastChild.textContent = section === 'mocktest'
        ? ' Định dạng mới 2026 • Làm bài trong 50 phút'
        : ' Luyện tập theo chủ đề • Không giới hạn thời gian';

    renderQuestions(qs);
    showScreen('test');
    markActiveSidebar(key);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (section === 'mocktest') { secondsLeft = MOCK_SECONDS; startTimer(true); }
    else { secondsElapsed = 0; startTimer(false); }
}

function renderQuestions(qs) {
    let nMcq = 0, nTf = 0;
    $('questions-container').innerHTML = qs.map((q, i) => {
        if (q.type === 'mcq') {
            nMcq++;
            const opts = q.options.map((o, j) => `
                <label class="option-label flex items-start gap-3 p-3 border border-gray-200 rounded-lg" id="opt-${i}-${j}">
                    <input type="radio" name="q${i}" value="${j}" class="mt-1 accent-emerald-600">
                    <span><b>${'ABCD'[j]}.</b> ${esc(o)}</span>
                </label>`).join('');
            return `<div class="question-box border border-gray-200 rounded-2xl p-5" id="qbox-${i}">
                <p class="font-semibold mb-3">Câu ${nMcq}. ${esc(q.text)}</p>
                <div class="grid gap-2 md:grid-cols-2">${opts}</div></div>`;
        }
        nTf++;
        const rows = q.options.map((o, j) => `
            <div class="flex flex-col md:flex-row md:items-center gap-2 p-3 border border-gray-200 rounded-lg" id="opt-${i}-${j}">
                <div class="flex-grow">${esc(o.text)}</div>
                <div class="flex gap-2 flex-shrink-0">
                    <label class="option-label px-4 py-1.5 border border-gray-200 rounded-md"><input type="radio" name="q${i}_${j}" value="true" class="accent-emerald-600"> <span>Đúng</span></label>
                    <label class="option-label px-4 py-1.5 border border-gray-200 rounded-md"><input type="radio" name="q${i}_${j}" value="false" class="accent-emerald-600"> <span>Sai</span></label>
                </div>
            </div>`).join('');
        return `<div class="question-box border border-gray-200 rounded-2xl p-5" id="qbox-${i}">
            <p class="font-semibold mb-3">Câu Đ/S ${nTf}. ${esc(q.text)}</p>
            <div class="space-y-2">${rows}</div></div>`;
    }).join('');
}

/* ---------- 6. ĐỒNG HỒ ---------- */
const fmt = (s) => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
function paintTimer(s) { $('timer-display').lastChild.textContent = ' ' + fmt(s); }

function startTimer(countdown) {
    paintTimer(countdown ? secondsLeft : 0);
    timerId = setInterval(() => {
        if (countdown) {
            secondsLeft--;
            paintTimer(Math.max(secondsLeft, 0));
            if (secondsLeft <= 0) { alert('Hết giờ! Hệ thống tự động nộp bài.'); submitTest(true); }
        } else { secondsElapsed++; paintTimer(secondsElapsed); }
    }, 1000);
}
function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

/* ---------- 7. CHẤM ĐIỂM ----------
   TN nhiều lựa chọn: 0,25 điểm/câu.
   Đúng/Sai: đúng 1 ý = 0,1; 2 ý = 0,25; 3 ý = 0,5; 4 ý = 1,0.
   Điểm hiển thị quy về thang 10 theo tỉ lệ (đề thi thử 24 + 4 câu = đúng 10 điểm). */
const TF_POINTS = [0, 0.1, 0.25, 0.5, 1];

function submitTest(force = false) {
    if (state.submitted || !state.questions.length) return;

    if (!force) {
        let blank = 0;
        state.questions.forEach((q, i) => {
            if (q.type === 'mcq') { if (!document.querySelector(`input[name="q${i}"]:checked`)) blank++; }
            else q.options.forEach((_, j) => { if (!document.querySelector(`input[name="q${i}_${j}"]:checked`)) blank++; });
        });
        if (blank > 0 && !confirm(`Bạn còn ${blank} mục chưa trả lời. Vẫn nộp bài?`)) return;
    }

    stopTimer();
    state.submitted = true;
    let earned = 0, max = 0, right = 0, total = 0;

    state.questions.forEach((q, i) => {
        if (q.type === 'mcq') {
            max += 0.25; total++;
            const sel = document.querySelector(`input[name="q${i}"]:checked`);
            const picked = sel ? Number(sel.value) : -1;
            const okLabel = $(`opt-${i}-${q.answer}`);
            okLabel.classList.add('correct-ans-box'); okLabel.querySelector('span').classList.add('correct-ans-text');
            if (picked === q.answer) { earned += 0.25; right++; }
            else if (picked >= 0) {
                const bad = $(`opt-${i}-${picked}`);
                bad.classList.add('wrong-ans-box'); bad.querySelector('span').classList.add('wrong-ans-text');
            }
        } else {
            max += 1; total++;
            let ok = 0;
            q.options.forEach((o, j) => {
                const sel = document.querySelector(`input[name="q${i}_${j}"]:checked`);
                const row = $(`opt-${i}-${j}`);
                const picked = sel ? sel.value === 'true' : null;
                if (picked === o.answer) { ok++; row.classList.add('correct-ans-box'); }
                else row.classList.add('wrong-ans-box');
                row.insertAdjacentHTML('beforeend',
                    `<div class="text-xs font-bold ${picked === o.answer ? 'text-green-700' : 'text-red-700'} md:ml-2">Đáp án: ${o.answer ? 'Đúng' : 'Sai'}</div>`);
            });
            earned += TF_POINTS[ok];
            if (ok === 4) right++;
        }
    });

    state.questions.forEach((_, i) => document.querySelectorAll(`#qbox-${i} input`).forEach(el => el.disabled = true));

    const score10 = max ? (earned / max) * 10 : 0;
    $('score-display').textContent = `${score10.toFixed(2).replace(/\.?0+$/, '')}/10`;
    showScreen('result');
    $('result-screen').scrollIntoView({ behavior: 'smooth' });
}

function continueAfterResult() {
    const section = state.section;
    selectSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------- 8. KHỞI ĐỘNG ---------- */
document.addEventListener('DOMContentLoaded', () => selectSection('khoi12'));
