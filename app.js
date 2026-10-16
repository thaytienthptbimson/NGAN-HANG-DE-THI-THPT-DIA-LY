/* =========================================================================
   APP.JS - LOGIC CHÍNH ĐỒNG BỘ 6 FILE CƠ BẢN
   Yêu cầu nạp trước: data_khoi10.js, data_khoi11.js, data_khoi12.js, data_mocktest.js
========================================================================= */

const safe = (v) => (typeof v !== 'undefined' ? v : {});

const appDatabase = {
    mocktestMeta: {},
    khoi10: { ...safe(typeof dataKhoi10 !== 'undefined' ? dataKhoi10 : undefined) },
    khoi11: { ...safe(typeof dataKhoi11 !== 'undefined' ? dataKhoi11 : undefined) },
    khoi12: { ...safe(typeof dataKhoi12 !== 'undefined' ? dataKhoi12 : undefined) },
    mocktest: {}
};

(function buildMocktest() {
    const raw = safe(typeof dataMocktest !== 'undefined' ? dataMocktest : undefined);
    const seen = new Set();
    Object.keys(raw).sort((a, b) => Number(a) - Number(b)).forEach(id => {
        const entry = raw[id];
        const arr = Array.isArray(entry) ? entry : (entry && entry.questions ? entry.questions : []);
        if (!Array.isArray(arr) || arr.length === 0) return;
        const sig = JSON.stringify(arr);
        if (seen.has(sig)) return;
        seen.add(sig);
        appDatabase.mocktest[id] = arr;
        if (entry && entry.label) appDatabase.mocktestMeta[id] = entry.label;
    });
})();

const MOCK_SECONDS = 50 * 60;
let state = { section: null, key: null, questions: [], submitted: false };
let timerId = null;
let secondsLeft = MOCK_SECONDS;
let secondsElapsed = 0;

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

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
    const ids = Object.keys(data).sort((a, b) => Number(a) - Number(b));
    if (ids.length === 0) {
        box.innerHTML = '<p class="p-4 text-sm text-gray-500">Chưa có dữ liệu.</p>';
        return;
    }
    box.innerHTML = ids.map(id => {
        let label, sub;
        if (section === 'mocktest') {
            const qs = data[id];
            const m = qs.filter(q => q.type === 'mcq').length;
            const t = qs.filter(q => q.type === 'tf').length;
            const a = qs.filter(q => q.type === 'sa').length;
            label = appDatabase.mocktestMeta[id] || `Đề thi thử số ${id}`;
            sub = `${m} trắc nghiệm • ${t} Đúng/Sai` + (a ? ` • ${a} trả lời ngắn` : '') + ' • 50 phút';
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

function showScreen(name) {
    $('welcome-screen').classList.toggle('hidden-element', name !== 'welcome');$('test-screen').classList.toggle('hidden-element', name === 'welcome');
    $('result-screen').classList.toggle('hidden-element', name !== 'result');$('submit-btn').classList.toggle('hidden-element', name === 'result');
    if (name === 'welcome') $('timer-display').lastChild.textContent = ' 50:00';
}

function loadTest(section, key) {
    stopTimer();
    const data = appDatabase[section][key];
    const qs = section === 'mocktest' ? data : [...(data.exercises.mcq || []), ...(data.exercises.tf || [])];

    state = { section, key, questions: qs, submitted: false };
    $('current-test-title').textContent = section === 'mocktest'
        ? (appDatabase.mocktestMeta[key] || `Đề thi thử số ${key}`)
        : data.title;
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
    const total = { mcq: 0, tf: 0, sa: 0 };
    qs.forEach(q => { total[q.type] = (total[q.type] || 0) + 1; });
    const HEAD = {
        mcq: ['PHẦN I', n => `Thí sinh trả lời từ câu 1 đến câu ${n}. Mỗi câu hỏi thí sinh chỉ chọn một phương án.`],
        tf: ['PHẦN II', n => `Thí sinh trả lời từ câu 1 đến câu ${n}. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.`],
        sa: ['PHẦN III', n => `Thí sinh trả lời từ câu 1 đến câu ${n}. Nhập đáp án là một số (có thể dùng dấu phẩy hoặc dấu chấm thập phân).`]
    };
    const nl = (t) => esc(t).replace(/\n/g, '<br>');
    const cnt = { mcq: 0, tf: 0, sa: 0 };
    let lastType = null;

    $('questions-container').innerHTML = qs.map((q, i) => {
        let head = '';
        if (q.type !== lastType) {
            lastType = q.type;
            const h = HEAD[q.type];
            head = `<div class="pt-2"><h3 class="text-lg font-bold text-emerald-800 uppercase">${h[0]}</h3><p class="text-sm text-gray-600 italic">${h[1](total[q.type])}</p></div>`;
        }
        cnt[q.type]++;
        const n = cnt[q.type];
        const media = renderCharts(q.charts || (q.chart ? [q.chart] : [])) + renderTables(q.tables || []);

        if (q.type === 'mcq') {
            const opts = q.options.map((o, j) => `
                <label class="option-label flex items-start gap-3 p-3 border border-gray-200 rounded-lg" id="opt-${i}-${j}">
                    <input type="radio" name="q${i}" value="${j}" class="mt-1 accent-emerald-600">
                    <span><b>${'ABCD'[j]}.</b> ${esc(o)}</span>
                </label>`).join('');
            return head + `<div class="question-box border border-gray-200 rounded-2xl p-5" id="qbox-${i}">
                <p class="font-semibold mb-3">Câu ${n}. ${nl(q.text)}</p>${media}
                <div class="grid gap-2 md:grid-cols-2">${opts}</div></div>`;
        }
        if (q.type === 'sa') {
            return head + `<div class="question-box border border-gray-200 rounded-2xl p-5" id="qbox-${i}">
                <p class="font-semibold mb-3">Câu ${n}. ${nl(q.text)}</p>${media}
                <div class="flex items-center gap-3">
                    <span class="text-sm text-gray-600">Đáp án:</span>
                    <input type="text" inputmode="decimal" autocomplete="off" name="q${i}" id="sa-${i}" placeholder="Nhập số"
                        class="border border-gray-300 rounded-lg px-3 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                    ${q.unit ? `<span class="text-sm text-gray-500">${esc(q.unit)}</span>` : ''}
                </div></div>`;
        }
        const rows = q.options.map((o, j) => `
            <div class="flex flex-col md:flex-row md:flex-wrap md:items-center gap-2 p-3 border border-gray-200 rounded-lg" id="opt-${i}-${j}">
                <div class="flex-grow">${esc(/^[a-d]\)/.test(o.text) ? o.text : 'abcd'[j] + ') ' + o.text)}</div>
                <div class="flex gap-2 flex-shrink-0">
                    <label class="option-label px-4 py-1.5 border border-gray-200 rounded-md"><input type="radio" name="q${i}_${j}" value="true" class="accent-emerald-600"> <span>Đúng</span></label>
                    <label class="option-label px-4 py-1.5 border border-gray-200 rounded-md"><input type="radio" name="q${i}_${j}" value="false" class="accent-emerald-600"> <span>Sai</span></label>
                </div>
            </div>`).join('');
        return head + `<div class="question-box border border-gray-200 rounded-2xl p-5" id="qbox-${i}">
            <p class="font-semibold mb-3">Câu ${n}. ${nl(q.text.replace(/^Câu\s*\d+\.\s*/, ''))}</p>${media}
            <div class="space-y-2">${rows}</div></div>`;
    }).join('');
}

function renderTables(list) {
    if (!list || !list.length) return '';
    return list.map(t => `
        <figure class="my-4 p-3 bg-white border border-gray-200 rounded-xl overflow-x-auto">
            <figcaption class="text-center font-semibold text-sm text-gray-800 mb-2">${esc(t.title || '')}${t.unit ? ` <span class="font-normal text-gray-500">(Đơn vị: ${esc(t.unit)})</span>` : ''}</figcaption>
            <table class="w-full text-sm border-collapse">
                <thead><tr>${t.headers.map(h => `<th class="border border-gray-300 bg-emerald-50 px-3 py-2 text-center">${esc(h)}</th>`).join('')}</tr></thead>
                <tbody>${t.rows.map(r => `<tr>${r.map((c, k) => `<td class="border border-gray-300 px-3 py-1.5 ${k === 0 ? 'font-medium' : 'text-right'}">${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody>
            </table>
            ${t.note ? `<p class="text-xs text-gray-500 italic mt-1 text-right">${esc(t.note)}</p>` : ''}
        </figure>`).join('');
}

const CHART_COLORS = ['#059669', '#2563eb', '#f59e0b', '#e11d48', '#7c3aed'];
const fmtNum = (v) => Number(v).toLocaleString('vi-VN', { maximumFractionDigits: 1 });

function niceTop(max) {
    if (max <= 0) return { top: 1, step: 0.2 };
    const raw = max / 5, mag = Math.pow(10, Math.floor(Math.log10(raw)));
    const f = raw / mag, nf = f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10;
    const step = nf * mag;
    return { top: step * Math.ceil(max / step - 1e-9), step };
}

function chartSVG(spec) {
    const cats = spec.categories || [], series = spec.series || [], n = cats.length;
    if (!n || !series.length) return '';
    const W = 640, plotW = W - 62 - 18, maxChars = Math.max(6, Math.floor((plotW / n) / 6.6));
    const wrap = (str) => {
        const words = String(str).split(' '), lines = [];
        let cur = '';
        words.forEach(w => {
            if (cur && (cur + ' ' + w).length > maxChars) { lines.push(cur); cur = w; }
            else cur = cur ? cur + ' ' + w : w;
        });
        if (cur) lines.push(cur);
        return lines;
    };
    const catLines = cats.map(wrap), extra = 14 * (Math.max(...catLines.map(l => l.length)) - 1);
    const H = 348 + extra, m = { l: 62, r: 18, t: 34, b: 62 + extra };
    const pw = W - m.l - m.r, ph = H - m.t - m.b;
    const kind = spec.kind || 'bar';
    let maxV = 0;
    if (kind === 'stacked') cats.forEach((_, i) => { maxV = Math.max(maxV, series.reduce((a, s) => a + s.values[i], 0)); });
    else series.forEach(s => s.values.forEach(v => { maxV = Math.max(maxV, v); }));
    const { top, step } = niceTop(maxV);
    const y = (v) => m.t + ph - (v / top) * ph;
    const gw = pw / n;
    let g = '';
    for (let v = 0; v <= top + 1e-9; v += step) {
        g += `<line x1="${m.l}" x2="${W - m.r}" y1="${y(v)}" y2="${y(v)}" stroke="#e5e7eb"/>` +
             `<text x="${m.l - 8}" y="${y(v) + 4}" text-anchor="end" font-size="11" fill="#6b7280">${fmtNum(v)}</text>`;
    }
    g += `<text x="6" y="14" text-anchor="start" font-size="11" font-weight="600" fill="#374151">Đơn vị: ${esc(spec.unit || '')}</text>`;
    g += `<line x1="${m.l}" x2="${W - m.r}" y1="${y(0)}" y2="${y(0)}" stroke="#9ca3af"/>`;

    cats.forEach((c, i) => {
        const cx = m.l + gw * i + gw / 2;
        g += `<text x="${cx}" y="${H - m.b + 18}" text-anchor="middle" font-size="12" fill="#374151">` +
             catLines[i].map((ln, k) => `<tspan x="${cx}" dy="${k === 0 ? 0 : 14}">${esc(ln)}</tspan>`).join('') + `</text>`;
    });

    if (kind === 'bar') {
        const bw = (gw * 0.7) / series.length;
        series.forEach((s, k) => s.values.forEach((v, i) => {
            const x = m.l + gw * i + gw * 0.15 + bw * k;
            g += `<rect x="${x}" y="${y(v)}" width="${bw - 2}" height="${y(0) - y(v)}" fill="${CHART_COLORS[k % 5]}" rx="2"/>` +
                 `<text x="${x + (bw - 2) / 2}" y="${y(v) - 5}" text-anchor="middle" font-size="11" font-weight="600" fill="#111827">${fmtNum(v)}</text>`;
        }));
    } else if (kind === 'stacked') {
        const bw = gw * 0.5;
        cats.forEach((_, i) => {
            let acc = 0;
            series.forEach((s, k) => {
                const v = s.values[i], x = m.l + gw * i + (gw - bw) / 2, y1 = y(acc + v), h = y(acc) - y1;
                g += `<rect x="${x}" y="${y1}" width="${bw}" height="${h}" fill="${CHART_COLORS[k % 5]}"/>`;
                if (h > 16) g += `<text x="${x + bw / 2}" y="${y1 + h / 2 + 4}" text-anchor="middle" font-size="11" font-weight="600" fill="#fff">${fmtNum(v)}</text>`;
                acc += v;
            });
        });
    } else if (kind === 'line') {
        series.forEach((s, k) => {
            const pts = s.values.map((v, i) => [m.l + gw * i + gw / 2, y(v)]);
            g += `<polyline fill="none" stroke="${CHART_COLORS[k % 5]}" stroke-width="2.5" points="${pts.map(p => p.join(',')).join(' ')}"/>`;
            pts.forEach((p, i) => {
                g += `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="${CHART_COLORS[k % 5]}"/>` +
                     `<text x="${p[0]}" y="${p[1] - 9}" text-anchor="middle" font-size="11" font-weight="600" fill="#111827">${fmtNum(s.values[i])}</text>`;
            });
        });
    }

    if (series.length > 1 || kind === 'stacked') {
        let lx = m.l;
        series.forEach((s, k) => {
            g += `<rect x="${lx}" y="${H - 18}" width="12" height="12" fill="${CHART_COLORS[k % 5]}" rx="2"/>` +
                 `<text x="${lx + 17}" y="${H - 8}" font-size="11.5" fill="#374151">${esc(s.name)}</text>`;
            lx += 40 + s.name.length * 6.4;
        });
    }
    return `<svg viewBox="0 0 ${W} ${H}" class="w-full h-auto" role="img" aria-label="${esc(spec.title || 'Biểu đồ')}">${g}</svg>`;
}

function renderCharts(list) {
    if (!list || !list.length) return '';
    return list.map(spec => `
        <figure class="my-4 p-3 bg-white border border-gray-200 rounded-xl overflow-x-auto">
            <figcaption class="text-center font-semibold text-sm text-gray-800 mb-2">${esc(spec.title || '')}</figcaption>
            <div style="min-width:480px">${chartSVG(spec)}</div>
            ${spec.note ? `<p class="text-xs text-gray-500 italic mt-1 text-right">${esc(spec.note)}</p>` : ''}
        </figure>`).join('');
}

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

const TF_POINTS = [0, 0.1, 0.25, 0.5, 1];

function submitTest(force = false) {
    if (state.submitted || !state.questions.length) return;

    if (!force) {
        let blank = 0;
        state.questions.forEach((q, i) => {
            if (q.type === 'mcq') { if (!document.querySelector(`input[name="q${i}"]:checked`)) blank++; }
            else if (q.type === 'sa') { if (!$(`sa-${i}`).value.trim()) blank++; }
            else q.options.forEach((_, j) => { if (!document.querySelector(`input[name="q${i}_${j}"]:checked`)) blank++; });
        });
        if (blank > 0 && !confirm(`Bạn còn ${blank} mục chưa trả lời. Vẫn nộp bài?`)) return;
    }

    stopTimer();
    state.submitted = true;
    let earned = 0, max = 0;

    state.questions.forEach((q, i) => {
        if (q.type === 'mcq') {
            max += 0.25;
            const sel = document.querySelector(`input[name="q${i}"]:checked`);
            const picked = sel ? Number(sel.value) : -1;
            const okLabel = $(`opt-${i}-${q.answer}`);
            okLabel.classList.add('correct-ans-box'); okLabel.querySelector('span').classList.add('correct-ans-text');
            if (q.explain) $(`qbox-${i}`).insertAdjacentHTML('beforeend',
                `<div class="mt-3 text-xs text-gray-700 bg-white/70 border-l-4 border-emerald-400 rounded px-3 py-2">💡 <b>Đáp án ${'ABCD'[q.answer]}.</b> ${esc(q.explain)}</div>`);
            if (picked === q.answer) earned += 0.25;
            else if (picked >= 0) {
                const bad = $(`opt-${i}-${picked}`);
                bad.classList.add('wrong-ans-box'); bad.querySelector('span').classList.add('wrong-ans-text');
            }
        } else if (q.type === 'sa') {
            max += 0.25;
            const inp = $(`sa-${i}`);
            const raw = inp.value.trim().replace(/\s+/g, '').replace(',', '.');
            const v = parseFloat(raw);
            const good = raw !== '' && !isNaN(v) && Math.abs(v - q.answer) <= (q.tol != null ? q.tol : 1e-4);
            if (good) earned += 0.25;
            inp.classList.add(good ? 'correct-ans-box' : 'wrong-ans-box');
            $(`qbox-${i}`).insertAdjacentHTML('beforeend',
                `<div class="mt-3 text-sm font-bold ${good ? 'text-green-700' : 'text-red-700'}">${good ? 'Chính xác!' : 'Chưa đúng.'} Đáp án: ${String(q.answer).replace('.', ',')}${q.unit ? ' ' + esc(q.unit) : ''}</div>` +
                (q.explain ? `<div class="mt-2 text-xs text-gray-700 bg-white/70 border-l-4 border-emerald-400 rounded px-3 py-2">💡 ${esc(q.explain)}</div>` : ''));
        } else {
            max += 1;
            let ok = 0;
            q.options.forEach((o, j) => {
                const sel = document.querySelector(`input[name="q${i}_${j}"]:checked`);
                const row = $(`opt-${i}-${j}`);
                const picked = sel ? sel.value === 'true' : null;
                if (picked === o.answer) { ok++; row.classList.add('correct-ans-box'); }
                else row.classList.add('wrong-ans-box');
                row.insertAdjacentHTML('beforeend',
                    `<div class="text-xs font-bold ${picked === o.answer ? 'text-green-700' : 'text-red-700'} md:ml-2">Đáp án: ${o.answer ? 'Đúng' : 'Sai'}</div>` +
                    (o.explain ? `<div class="w-full basis-full text-xs text-gray-700 bg-white/70 border-l-4 border-emerald-400 rounded px-3 py-2">💡 ${esc(o.explain)}</div>` : ''));
            });
            earned += TF_POINTS[ok];
        }
    });

    state.questions.forEach((_, i) => document.querySelectorAll(`#qbox-${i} input`).forEach(el => el.disabled = true));

    const score10 = max ? (earned / max) * 10 : 0;
    $('score-display').textContent = `${score10.toFixed(2).replace(/\.?0+$/, '')}/10`;
    showScreen('result');
    $('result-screen').scrollIntoView({ behavior: 'smooth' });
}

function continueAfterResult() {
    selectSection(state.section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => selectSection('khoi12'));