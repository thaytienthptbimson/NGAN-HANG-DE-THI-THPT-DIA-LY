/* =========================================================================
   APP.JS - LOGIC CHÍNH HỆ THỐNG ÔN THI TỐT NGHIỆP THPT MÔN ĐỊA LÍ 2026
   Yêu cầu: các file data_*.js phải được nạp TRƯỚC file này (xem index.html)
========================================================================= */

/* ---------- 1. CƠ SỞ DỮ LIỆU ---------- */
// Các file data khai báo dataKhoi10 / dataKhoi11 / dataKhoi12 / dataMocktest.
// Gom lại một chỗ để các hàm bên dưới dùng chung (cùng tham chiếu, nên file
// data_extra.js / data_mocktest_new.js thêm dữ liệu vào các đối tượng này vẫn nhận được).
const appDatabase = {
    khoi10: typeof dataKhoi10 !== 'undefined' ? dataKhoi10 : {},
    khoi11: typeof dataKhoi11 !== 'undefined' ? dataKhoi11 : {},
    khoi12: typeof dataKhoi12 !== 'undefined' ? dataKhoi12 : {},
    mocktest: typeof dataMocktest !== 'undefined' ? dataMocktest : {}
};

/* ---------- 2. HẰNG SỐ & TRẠNG THÁI ---------- */
const MCQ_POINT = 0.25;                 // mỗi câu trắc nghiệm
const TF_POINTS = [0, 0.1, 0.25, 0.5, 1]; // câu Đúng/Sai: đúng 0/1/2/3/4 ý
const UNIT_TEST_MINUTES = 45;           // luyện tập + bài kiểm tra đơn vị
const MOCK_TEST_MINUTES = 50;           // đề thi thử
const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

const TAB_BASE = 'px-3 sm:px-5 py-2 rounded-md text-xs sm:text-sm transition-colors whitespace-nowrap';
const TAB_ACTIVE = 'bg-gray-50 text-emerald-800 font-bold shadow-sm';
const TAB_INACTIVE = 'bg-white/20 hover:bg-white/90 hover:text-emerald-800 font-semibold';
const SECTIONS = ['khoi10', 'khoi11', 'khoi12', 'mocktest'];

let currentSection = 'khoi12';
let currentTopicId = null;
let currentExerciseType = null;
let currentQuestions = [];   // danh sách câu hỏi của bài đang làm (dùng để chấm điểm)
let isTestActive = false;    // true khi đang làm bài và chưa nộp

let timerInterval = null;
let timerEndTime = 0;
let timerTotalSeconds = 0;
let timerSecondsLeft = 0;

/* ---------- 3. HÀM TIỆN ÍCH ---------- */
function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// Xoá tiền tố "Câu 1." có sẵn trong dữ liệu để không bị lặp "Câu 1: Câu 1. ..."
function stripQuestionPrefix(text) {
    return String(text).replace(/^\s*Câu\s*\d+\s*[.:]\s*/i, '');
}

// Xáo trộn Fisher-Yates trên BẢN SAO (không làm thay đổi mảng dữ liệu gốc)
function shuffleArray(list) {
    const arr = list.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function formatNumber(n) {
    return Number(n.toFixed(2)).toLocaleString('vi-VN');
}

function setVisible(id, visible) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden-element', !visible);
}

// Sinh bài kiểm tra 45 phút (lấy ngẫu nhiên 18 MCQ và 4 T/F từ bài học)
function generateRandomTest(mcqList, tfList) {
    const pickedMcq = shuffleArray(mcqList || []).slice(0, 18);
    const pickedTf = shuffleArray(tfList || []).slice(0, 4);
    return [...pickedMcq, ...pickedTf];
}

/* ---------- 4. ĐỒNG HỒ ĐẾM NGƯỢC ---------- */
function formatTime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}

function updateTimerDisplay() {
    const display = document.getElementById('timer-display');
    const box = document.getElementById('timer-box');
    if (display) display.innerText = formatTime(timerSecondsLeft);
    if (box) box.classList.toggle('text-red-300', timerSecondsLeft <= 300);
}

function showIdleTimer() {
    const display = document.getElementById('timer-display');
    const box = document.getElementById('timer-box');
    if (display) display.innerText = '--:--';
    if (box) box.classList.remove('text-red-300');
}

function stopTimer() {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function resetTimer(minutes) {
    stopTimer();
    timerTotalSeconds = minutes * 60;
    timerSecondsLeft = timerTotalSeconds;
    updateTimerDisplay();
}

function startTimer() {
    stopTimer(); // tránh chạy nhiều bộ đếm chồng nhau
    timerEndTime = Date.now() + timerSecondsLeft * 1000;
    timerInterval = setInterval(() => {
        // Tính theo đồng hồ hệ thống để không bị lệch khi tab bị trình duyệt làm chậm
        timerSecondsLeft = Math.max(0, Math.round((timerEndTime - Date.now()) / 1000));
        updateTimerDisplay();
        if (timerSecondsLeft <= 0) {
            stopTimer();
            submitTest(true);
            setTimeout(() => alert('Đã hết giờ làm bài! Hệ thống đã tự động nộp bài của bạn.'), 50);
        }
    }, 1000);
}

/* ---------- 5. MENU SIDEBAR & CHUYỂN KHỐI ---------- */
function toggleSidebarMenu(menuId) {
    const el = document.getElementById(menuId);
    if (el) el.classList.toggle('hidden-element');
}

function updateTabs() {
    SECTIONS.forEach(sec => {
        const tab = document.getElementById('tab-' + sec);
        if (tab) tab.className = TAB_BASE + ' ' + (sec === currentSection ? TAB_ACTIVE : TAB_INACTIVE);
    });
}

function selectSection(section) {
    if (isTestActive && !confirm('Bạn đang làm bài dở. Chuyển mục sẽ hủy bài làm hiện tại. Tiếp tục?')) return;
    isTestActive = false;
    stopTimer();
    currentSection = section;
    currentTopicId = null;
    currentExerciseType = null;
    currentQuestions = [];

    const title = document.getElementById('sidebar-title');
    if (title) {
        title.innerText = section === 'mocktest'
            ? 'Đề thi thử'
            : 'Chuyên đề Địa lí ' + section.replace('khoi', 'Lớp ');
    }
    updateTabs();
    renderSidebar();
    showScreen('welcome');
    showIdleTimer();
}

function renderSidebar() {
    const container = document.getElementById('sidebar-container');
    container.innerHTML = '';

    if (currentSection.startsWith('khoi')) {
        const topics = appDatabase[currentSection] || {};
        const topicIds = Object.keys(topics).sort((a, b) => a - b);

        if (topicIds.length === 0) {
            container.innerHTML = '<div class="p-4 text-sm text-gray-500">Nội dung đang được cập nhật.</div>';
            return;
        }

        topicIds.forEach((topicId, idx) => {
            const topic = topics[topicId];
            const menuId = `menu-${currentSection}-${topicId}`;
            const div = document.createElement('div');
            div.className = 'border-b border-gray-200';
            div.innerHTML = `
                <div class="px-4 py-3 font-bold text-gray-700 cursor-pointer flex justify-between items-center hover:bg-emerald-50" onclick="toggleSidebarMenu('${menuId}')">
                    <span>${escapeHtml(topic.title)}</span> <span class="text-[10px] text-gray-400">▼</span>
                </div>
                <div id="${menuId}" class="flex flex-col bg-white border-t border-gray-100 ${idx === 0 ? '' : 'hidden-element'}">
                    <button onclick="startTest('${currentSection}', '${topicId}', 'mcq')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-emerald-50">Luyện 20 câu Trắc nghiệm</button>
                    <button onclick="startTest('${currentSection}', '${topicId}', 'tf')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-emerald-50">Luyện 20 câu Đúng/Sai</button>
                    <button onclick="startTest('${currentSection}', '${topicId}', 'test')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-emerald-50 font-semibold text-red-600">Bài kiểm tra 45 phút</button>
                </div>
            `;
            container.appendChild(div);
        });
    } else {
        const mock = appDatabase.mocktest || {};
        const items = [];
        // Tạo 20 đề thi
        for (let t = 1; t <= 20; t++) {
            const ready = Array.isArray(mock[t]) && mock[t].length > 0;
            const label = ready ? `Đề thi thử số ${t} (Chuẩn 2026)` : `Đề thi thử số ${t} (Đang cập nhật)`;
            items.push(ready
                ? `<button onclick="startTest('mocktest', null, ${t})" class="text-left px-6 py-4 text-sm hover:bg-emerald-50 border-b border-gray-100 font-semibold text-gray-700">${label}</button>`
                : `<button disabled class="text-left px-6 py-4 text-sm border-b border-gray-100 font-semibold text-gray-400 cursor-not-allowed">${label}</button>`);
        }
        const wrap = document.createElement('div');
        wrap.className = 'flex flex-col bg-white';
        wrap.innerHTML = items.join('');
        container.appendChild(wrap);
    }
}

/* ---------- 6. CHUYỂN MÀN HÌNH ---------- */
function showScreen(name) {
    setVisible('welcome-screen', name === 'welcome');
    setVisible('test-screen', name === 'test' || name === 'result');
    setVisible('result-screen', name === 'result');
    setVisible('submit-wrapper', name === 'test');
}

/* ---------- 7. BẮT ĐẦU BÀI LÀM ---------- */
function buildQuestions(section, topicId, exerciseType) {
    if (section.startsWith('khoi')) {
        const topic = appDatabase[section] && appDatabase[section][topicId];
        if (!topic || !topic.exercises) return [];
        if (exerciseType === 'test') {
            // Sinh bài test ngẫu nhiên không trùng lặp
            return generateRandomTest(topic.exercises.mcq, topic.exercises.tf);
        }
        return (topic.exercises[exerciseType] || []).slice();
    }
    return ((appDatabase.mocktest || {})[exerciseType] || []).slice();
}

function startTest(section, topicId, exerciseType) {
    if (isTestActive && !confirm('Bạn đang làm bài dở. Bắt đầu bài mới sẽ hủy bài làm hiện tại. Tiếp tục?')) return;

    const questions = buildQuestions(section, topicId, exerciseType);
    if (questions.length === 0) {
        alert('Nội dung này đang được cập nhật, vui lòng chọn bài khác.');
        return;
    }

    currentSection = section;
    currentTopicId = topicId;
    currentExerciseType = exerciseType;
    currentQuestions = questions;

    if (section.startsWith('khoi')) {
        const typeStr = exerciseType === 'mcq'
            ? 'Luyện Trắc nghiệm'
            : (exerciseType === 'tf' ? 'Luyện Đúng/Sai' : 'Bài kiểm tra Đơn vị (45 phút)');
        document.getElementById('current-test-title').innerText = appDatabase[section][topicId].title;
        document.getElementById('current-test-subtitle').innerText = typeStr;
        // Bài kiểm tra đơn vị và luyện tập đều có giới hạn 45 phút
        resetTimer(UNIT_TEST_MINUTES);
    } else {
        document.getElementById('current-test-title').innerText = `Đề thi thử Địa Lí HSA/THPT - Đề số ${exerciseType}`;
        document.getElementById('current-test-subtitle').innerText = 'Cấu trúc 2026: Phân cấp 4 Mức độ';
        // Đề thi tốt nghiệp chuẩn là 50 phút
        resetTimer(MOCK_TEST_MINUTES);
    }

    renderTestContent();
    showScreen('test');
    isTestActive = true;
    startTimer();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------- 8. HIỂN THỊ CÂU HỎI ---------- */
function buildImageHtml(q) {
    return q.image
        ? `<div class="mb-4 text-center"><img src="${escapeHtml(q.image)}" alt="Hình minh hoạ câu hỏi" class="max-w-full h-auto mx-auto rounded-lg shadow-sm border border-gray-200"></div>`
        : '';
}

function buildPartHeading(title, description) {
    return `
        <div class="bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg px-4 py-3">
            <h3 class="font-bold text-emerald-900 uppercase tracking-wide">${title}</h3>
            <p class="text-sm text-gray-600 mt-1">${description}</p>
        </div>`;
}

function buildMcqHtml(q, index, number) {
    const optionsHtml = q.options.map((opt, k) => `
        <label class="option-label flex items-start gap-3 p-3 border border-gray-200 rounded-lg bg-white" data-opt="${k}">
            <input type="radio" name="q-${index}" value="${k}" class="mt-1 accent-emerald-600">
            <span class="text-gray-700"><b>${OPTION_LETTERS[k]}.</b> ${escapeHtml(opt)}</span>
        </label>`).join('');

    return `
        <div class="question-box question-item bg-white p-5 rounded-xl border border-gray-200 shadow-sm" data-index="${index}" data-type="mcq">
            <div class="mb-4"><span class="font-bold text-emerald-700 text-lg">Câu ${number}:</span> <span class="text-lg font-medium ml-1 text-gray-800">${escapeHtml(stripQuestionPrefix(q.text))}</span></div>
            ${buildImageHtml(q)}
            <div class="flex flex-col gap-2">${optionsHtml}</div>
        </div>`;
}

function buildTfHtml(q, index, number) {
    const optionsHtml = q.options.map((opt, k) => `
        <div class="tf-row flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 border border-gray-200 rounded-lg bg-white" data-opt="${k}">
            <span class="flex-1 text-gray-700">${escapeHtml(opt.text)}</span>
            <div class="flex gap-2 flex-shrink-0">
                <label class="option-label flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg" data-val="true">
                    <input type="radio" name="q-${index}-${k}" value="true" class="accent-emerald-600"><span>Đúng</span>
                </label>
                <label class="option-label flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg" data-val="false">
                    <input type="radio" name="q-${index}-${k}" value="false" class="accent-emerald-600"><span>Sai</span>
                </label>
            </div>
        </div>`).join('');

    return `
        <div class="question-box question-item bg-white p-5 rounded-xl border border-gray-200 shadow-sm" data-index="${index}" data-type="tf">
            <div class="mb-4"><span class="font-bold text-emerald-700 text-lg">Câu ${number}:</span> <span class="text-lg font-medium ml-1 italic text-gray-700">${escapeHtml(stripQuestionPrefix(q.text))}</span></div>
            ${buildImageHtml(q)}
            <div class="flex flex-col gap-2">${optionsHtml}</div>
        </div>`;
}

function renderTestContent() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';

    // Tách theo dạng câu hỏi nhưng vẫn giữ chỉ số gốc trong currentQuestions để chấm điểm
    const mcqItems = [];
    const tfItems = [];
    currentQuestions.forEach((q, index) => {
        (q.type === 'tf' ? tfItems : mcqItems).push({ q, index });
    });

    let html = '';

    if (mcqItems.length > 0) {
        html += '<div class="space-y-5">';
        html += buildPartHeading(
            'Phần I. Câu trắc nghiệm nhiều phương án lựa chọn',
            `Thí sinh trả lời từ câu 1 đến câu ${mcqItems.length}. Mỗi câu hỏi thí sinh chỉ chọn một phương án.`
        );
        mcqItems.forEach((item, n) => { html += buildMcqHtml(item.q, item.index, n + 1); });
        html += '</div>';
    }

    if (tfItems.length > 0) {
        html += '<div class="space-y-5">';
        html += buildPartHeading(
            'Phần II. Câu trắc nghiệm đúng sai',
            `Thí sinh trả lời từ câu 1 đến câu ${tfItems.length}. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.`
        );
        tfItems.forEach((item, n) => { html += buildTfHtml(item.q, item.index, n + 1); });
        html += '</div>';
    }

    container.innerHTML = html;
}

/* ---------- 9. NỘP BÀI & CHẤM ĐIỂM ---------- */
function markLabel(label, state) {
    const text = label.querySelector('span');
    if (state === 'correct') {
        label.classList.add('correct-ans-box');
        if (text) text.classList.add('correct-ans-text');
    } else if (state === 'wrong') {
        label.classList.add('wrong-ans-box');
        if (text) text.classList.add('wrong-ans-text');
    }
}

function addResultTag(item, html, ok) {
    const tag = document.createElement('div');
    tag.className = 'mt-3 text-sm font-semibold ' + (ok ? 'text-green-700' : 'text-red-700');
    tag.innerHTML = html;
    item.appendChild(tag);
}

function submitTest(auto = false) {
    if (!isTestActive) return;

    const items = document.querySelectorAll('#questions-container .question-item');

    // Đếm số câu/ý chưa trả lời để nhắc người học trước khi nộp
    if (!auto) {
        let unanswered = 0;
        items.forEach(item => {
            if (item.dataset.type === 'mcq') {
                if (!item.querySelector('input:checked')) unanswered++;
            } else {
                item.querySelectorAll('.tf-row').forEach(row => {
                    if (!row.querySelector('input:checked')) unanswered++;
                });
            }
        });
        if (unanswered > 0 && !confirm(`Bạn còn ${unanswered} câu/ý chưa trả lời. Vẫn nộp bài?`)) return;
    }

    stopTimer();
    isTestActive = false;

    let mcqTotal = 0, mcqCorrect = 0;
    let tfTotal = 0, tfStatementsTotal = 0, tfStatementsCorrect = 0, tfEarned = 0;

    items.forEach(item => {
        const q = currentQuestions[Number(item.dataset.index)];

        if (item.dataset.type === 'mcq') {
            mcqTotal++;
            const checked = item.querySelector('input:checked');
            const picked = checked ? Number(checked.value) : -1;

            item.querySelectorAll('label.option-label').forEach(label => {
                const k = Number(label.dataset.opt);
                if (k === q.answer) markLabel(label, 'correct');
                else if (k === picked) markLabel(label, 'wrong');
            });

            const ok = picked === q.answer;
            if (ok) mcqCorrect++;
            addResultTag(
                item,
                ok
                    ? '✓ Chính xác'
                    : (picked === -1 ? '✗ Chưa trả lời' : '✗ Chưa chính xác') + ` — Đáp án đúng: ${OPTION_LETTERS[q.answer]}`,
                ok
            );
        } else {
            tfTotal++;
            let correctCount = 0;

            item.querySelectorAll('.tf-row').forEach(row => {
                const k = Number(row.dataset.opt);
                const expected = String(q.options[k].answer);
                const checked = row.querySelector('input:checked');
                const picked = checked ? checked.value : null;

                tfStatementsTotal++;
                row.querySelectorAll('label.option-label').forEach(label => {
                    if (label.dataset.val === expected) markLabel(label, 'correct');
                    else if (label.dataset.val === picked) markLabel(label, 'wrong');
                });
                if (picked === expected) {
                    correctCount++;
                    tfStatementsCorrect++;
                }
            });

            const points = TF_POINTS[correctCount];
            tfEarned += points;
            addResultTag(item, `Đúng ${correctCount}/4 ý — ${formatNumber(points)} điểm`, correctCount === 4);
        }
    });

    // Khoá bài làm
    document.querySelectorAll('#questions-container input').forEach(input => { input.disabled = true; });
    document.querySelectorAll('#questions-container label.option-label').forEach(label => { label.style.cursor = 'default'; });

    // Điểm quy về thang 10: trắc nghiệm 0,25 điểm/câu; Đúng/Sai tính theo số ý đúng (0,1 - 0,25 - 0,5 - 1)
    const earned = mcqCorrect * MCQ_POINT + tfEarned;
    const maxPoints = mcqTotal * MCQ_POINT + tfTotal * TF_POINTS[4];
    const score10 = maxPoints > 0 ? (earned / maxPoints) * 10 : 0;

    document.getElementById('score-display').innerText = formatNumber(score10) + '/10';

    const detail = [];
    if (mcqTotal > 0) detail.push(`Trắc nghiệm: ${mcqCorrect}/${mcqTotal} câu đúng`);
    if (tfTotal > 0) detail.push(`Đúng/Sai: ${tfStatementsCorrect}/${tfStatementsTotal} ý đúng (${formatNumber(tfEarned)}/${tfTotal} điểm)`);
    detail.push(`Thời gian làm bài: ${formatTime(Math.max(0, timerTotalSeconds - timerSecondsLeft))}`);
    document.getElementById('score-detail').innerText = detail.join(' · ');

    showScreen('result');
    document.getElementById('result-screen').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function continueAfterResult() {
    isTestActive = false;
    stopTimer();
    currentQuestions = [];
    document.getElementById('questions-container').innerHTML = '';
    showScreen('welcome');
    showIdleTimer();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------- 10. KHỞI ĐỘNG ---------- */
// Cảnh báo khi đóng/tải lại trang lúc đang làm bài
window.addEventListener('beforeunload', e => {
    if (isTestActive) {
        e.preventDefault();
        e.returnValue = '';
    }
});

document.addEventListener('DOMContentLoaded', () => selectSection(currentSection));
