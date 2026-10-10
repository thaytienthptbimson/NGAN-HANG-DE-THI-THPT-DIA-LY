/* =========================================================================
   LOGIC HOẠT ĐỘNG GIAO DIỆN & CHẤM ĐIỂM
   Ứng dụng Ôn thi Tốt nghiệp THPT môn Địa Lí 2026
   Bản quyền: Thầy Phạm Văn Tiến (SĐT: 0943.930.787)
========================================================================= */

// Nạp dữ liệu từ các file bên ngoài (nếu file đã load thành công trên trình duyệt)
const appDatabase = {
    khoi10: typeof dataKhoi10 !== 'undefined' ? dataKhoi10 : {},
    khoi11: typeof dataKhoi11 !== 'undefined' ? dataKhoi11 : {},
    khoi12: typeof dataKhoi12 !== 'undefined' ? dataKhoi12 : {},
    mocktest: typeof dataMocktest !== 'undefined' ? dataMocktest : {}
};

// Tự động nạp "Bài kiểm tra" bằng cách trộn MCQ và TF
[appDatabase.khoi10, appDatabase.khoi11, appDatabase.khoi12].forEach(khoi => {
    Object.keys(khoi).forEach(topicId => {
        khoi[topicId].exercises.test = [
            ...(khoi[topicId].exercises.mcq || []),
            ...(khoi[topicId].exercises.tf || [])
        ];
    });
});

/* =========================================================================
   KHAI BÁO BIẾN TOÀN CỤC VÀ LOGIC
========================================================================= */

let currentSection = 'khoi12'; 
let currentTopicId = null;
let currentExerciseType = null; 
let timerInterval = null;
let timeLeft = 0;
let isSubmitted = false;

document.addEventListener('DOMContentLoaded', () => { 
    selectSection('khoi12'); 
});

function selectSection(section) {
    currentSection = section;
    const tabs = ['khoi10', 'khoi11', 'khoi12', 'mocktest'];
    tabs.forEach(t => {
        const tab = document.getElementById('tab-' + t);
        tab.className = t === section 
            ? "px-5 py-2 bg-gray-50 text-emerald-800 font-bold rounded-md shadow-sm text-sm transition-colors"
            : "px-5 py-2 bg-white/20 hover:bg-white/90 hover:text-emerald-800 font-semibold rounded-md text-sm transition-colors";
    });

    let title = section === 'mocktest' ? "NGÂN HÀNG ĐỀ THI THỬ" : `NGÂN HÀNG CÂU HỎI LỚP ${section.replace('khoi', '')}`;
    document.getElementById('sidebar-title').innerText = title;
    
    renderSidebar();
    document.getElementById('test-screen').classList.add('hidden-element');
    document.getElementById('result-screen').classList.add('hidden-element');
    document.getElementById('welcome-screen').classList.remove('hidden-element');
}

function renderSidebar() {
    const container = document.getElementById('sidebar-container');
    container.innerHTML = '';

    if (currentSection.startsWith('khoi')) {
        Object.keys(appDatabase[currentSection]).forEach(topicId => {
            const topic = appDatabase[currentSection][topicId];
            const div = document.createElement('div');
            div.className = 'border-b border-gray-200';
            div.innerHTML = `
                <div class="px-4 py-3 font-bold text-gray-700 cursor-pointer flex justify-between items-center hover:bg-emerald-50" onclick="toggleSidebarMenu('menu-${currentSection}-${topicId}')">
                    <span>${topic.title}</span> <span class="text-[10px] text-gray-400">▼</span>
                </div>
                <div id="menu-${currentSection}-${topicId}" class="flex flex-col bg-white border-t border-gray-100 hidden-element">
                    <button onclick="startTest('${currentSection}', ${topicId}, 'mcq')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-emerald-50">Luyện Trắc nghiệm (Nhiều lựa chọn)</button>
                    <button onclick="startTest('${currentSection}', ${topicId}, 'tf')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-emerald-50">Luyện Đúng/Sai</button>
                    <button onclick="startTest('${currentSection}', ${topicId}, 'test')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-emerald-50 font-semibold text-red-600">Bài kiểm tra Đơn vị</button>
                </div>
            `;
            container.appendChild(div);
        });
    } else {
        const div = document.createElement('div');
        div.className = 'flex flex-col bg-white';
        for (let t = 1; t <= 10; t++) {
            let label = t <= 8 ? `Đề thi thử Tốt nghiệp số ${t}` : `Đề thi thử Tốt nghiệp số ${t} (Đang cập nhật)`;
            div.innerHTML += `<button onclick="startTest('mocktest', null, ${t})" class="text-left px-6 py-4 text-sm hover:bg-emerald-50 border-b border-gray-100 font-semibold text-gray-700">${label}</button>`;
        }
        container.appendChild(div);
    }
}

function toggleSidebarMenu(id) {
    document.getElementById(id).classList.toggle('hidden-element');
}

function startTest(section, topicId, exerciseType) {
    currentSection = section; 
    currentTopicId = topicId; 
    currentExerciseType = exerciseType; 
    isSubmitted = false;

    document.getElementById('welcome-screen').classList.add('hidden-element');
    document.getElementById('result-screen').classList.add('hidden-element');
    document.getElementById('test-screen').classList.remove('hidden-element');
    document.getElementById('submit-btn').classList.remove('hidden-element');
    
    if (section.startsWith('khoi')) {
        let typeStr = exerciseType === 'mcq' ? "Luyện Trắc nghiệm" : (exerciseType === 'tf' ? "Luyện Đúng/Sai" : "Bài kiểm tra Đơn vị");
        document.getElementById('current-test-title').innerText = `${appDatabase[section][topicId].title}`;
        document.getElementById('current-test-subtitle').innerText = typeStr;
        resetTimer(45); 
    } else {
        document.getElementById('current-test-title').innerText = `Đề thi thử Địa Lí HSA/THPT - Đề số ${exerciseType}`;
        document.getElementById('current-test-subtitle').innerText = "Cấu trúc 2026: Phân cấp 4 Mức độ (Nhận biết - Thông hiểu - Vận dụng - Vận dụng cao)";
        resetTimer(50); 
    }
    renderTestContent();
    startTimer();
}

function renderTestContent() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    
    let questions = [];
    if (currentSection.startsWith('khoi')) {
        questions = appDatabase[currentSection][currentTopicId].exercises[currentExerciseType] || [];
    } else {
        questions = appDatabase.mocktest[currentExerciseType] || [];
    }

    if (questions.length === 0) {
        container.innerHTML = `<div class="bg-gray-50 rounded-xl py-12 text-center border-2 border-dashed border-gray-300"><p class="text-gray-500 font-bold text-lg">Đang cập nhật câu hỏi cho phần này...</p></div>`;
        document.getElementById('submit-btn').classList.add('hidden-element'); 
        clearInterval(timerInterval);
        return;
    }

    let html = '';
    let phan1Html = '';
    let phan2Html = '';
    let mcqCounter = 1;
    let tfCounter = 1;

    questions.forEach((q, index) => {
        if (q.type === 'mcq') {
            const labels = ['A', 'B', 'C', 'D'];
            let optionsHtml = '';
            q.options.forEach((opt, oIdx) => {
                optionsHtml += `
                    <label class="option-label flex items-start space-x-2 p-3 rounded-lg border border-gray-200 bg-white w-full cursor-pointer" id="box_q_${index}_opt_${oIdx}">
                        <input type="radio" name="q_${index}" value="${oIdx}" class="mt-0.5 w-5 h-5 text-emerald-600 flex-shrink-0 cursor-pointer">
                        <span class="flex-grow text-gray-800 text-base leading-snug" id="span_q_${index}_opt_${oIdx}">
                            <strong class="text-emerald-800 mr-1">${labels[oIdx]}.</strong> ${opt}
                        </span>
                    </label>
                `;
            });
            phan1Html += `
                <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm mb-5 question-item" data-index="${index}" data-type="mcq" data-ans="${q.answer}">
                    <div class="mb-4"><span class="font-bold text-emerald-700 text-lg">Câu ${mcqCounter}:</span> <span class="text-lg font-medium ml-1">${q.text}</span></div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">${optionsHtml}</div>
                </div>
            `;
            mcqCounter++;
        } 
        else if (q.type === 'tf') {
            let optionsHtml = '';
            q.options.forEach((opt, oIdx) => {
                optionsHtml += `
                    <div class="flex flex-col md:flex-row md:items-center justify-between p-3 rounded-lg border border-gray-200 bg-gray-50 mb-2 tf-option" id="box_q_${index}_tf_${oIdx}" data-ans="${opt.answer}">
                        <span class="flex-grow text-gray-800 mb-2 md:mb-0 md:mr-4"><strong>${['a', 'b', 'c', 'd'][oIdx]})</strong> ${opt.text.replace(/^[a-d]\)\s*/, '')}</span>
                        <div class="flex space-x-4 flex-shrink-0 mt-2 md:mt-0">
                            <label class="flex items-center space-x-1 cursor-pointer">
                                <input type="radio" name="q_${index}_tf_${oIdx}" value="true" class="w-5 h-5">
                                <span class="font-bold text-green-700">Đúng</span>
                            </label>
                            <label class="flex items-center space-x-1 cursor-pointer">
                                <input type="radio" name="q_${index}_tf_${oIdx}" value="false" class="w-5 h-5">
                                <span class="font-bold text-red-700">Sai</span>
                            </label>
                        </div>
                    </div>
                `;
            });
            phan2Html += `
                <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm mb-5 question-item" data-index="${index}" data-type="tf">
                    <div class="mb-4"><span class="font-bold text-emerald-700 text-lg">Câu ${tfCounter}:</span> <span class="text-lg font-medium ml-1 italic text-gray-700">${q.text}</span></div>
                    <div class="flex flex-col">${optionsHtml}</div>
                </div>
            `;
            tfCounter++;
        }
    });

    if(phan1Html !== '') html += `<h3 class="text-xl font-black uppercase text-red-600 mb-4">Phần I: Câu hỏi trắc nghiệm nhiều phương án</h3>${phan1Html}`;
    if(phan2Html !== '') html += `<h3 class="text-xl font-black uppercase text-red-600 mb-4 mt-8">Phần II: Câu trắc nghiệm Đúng/Sai</h3>${phan2Html}`;

    container.innerHTML = html;
}

function submitTest() {
    if(isSubmitted) return;
    clearInterval(timerInterval);
    isSubmitted = true;
    document.getElementById('submit-btn').classList.add('hidden-element');

    let totalScore = 0;
    let maxScore = 0;

    document.querySelectorAll('.question-item').forEach(el => {
        const index = el.getAttribute('data-index');
        const type = el.getAttribute('data-type');
        
        if(type === 'mcq') {
            maxScore += 1; 
            const correctAns = parseInt(el.getAttribute('data-ans'));
            const selected = document.querySelector(`input[name="q_${index}"]:checked`);
            
            document.querySelectorAll(`input[name="q_${index}"]`).forEach(input => input.disabled = true);
            document.getElementById(`box_q_${index}_opt_${correctAns}`).classList.add('correct-ans-box');

            if (selected) {
                const selectedVal = parseInt(selected.value);
                if (selectedVal === correctAns) totalScore += 1;
                else document.getElementById(`box_q_${index}_opt_${selectedVal}`).classList.add('wrong-ans-box');
            }
        } 
        else if (type === 'tf') {
            maxScore += 1; 
            let correctSubCount = 0;
            
            el.querySelectorAll('.tf-option').forEach((tfEl, oIdx) => {
                const correctAns = tfEl.getAttribute('data-ans') === 'true';
                const selected = document.querySelector(`input[name="q_${index}_tf_${oIdx}"]:checked`);
                
                document.querySelectorAll(`input[name="q_${index}_tf_${oIdx}"]`).forEach(input => input.disabled = true);
                
                if(selected) {
                    const selectedVal = selected.value === 'true';
                    if(selectedVal === correctAns) {
                        correctSubCount++;
                        tfEl.classList.add('correct-ans-box');
                    } else {
                        tfEl.classList.add('wrong-ans-box');
                    }
                } else {
                    tfEl.classList.add('wrong-ans-box'); 
                }
            });

            if(correctSubCount === 4) totalScore += 1;
            else if(correctSubCount === 3) totalScore += 0.5;
            else if(correctSubCount === 2) totalScore += 0.25;
            else if(correctSubCount === 1) totalScore += 0.1;
        }
    });

    let finalScore = (totalScore / maxScore) * 10;
    
    document.getElementById('score-display').innerText = `${finalScore.toFixed(1)}/10`;
    document.getElementById('result-screen').classList.remove('hidden-element');
    window.scrollTo({ top: document.getElementById('result-screen').offsetTop - 50, behavior: 'smooth' });
}

function startTimer() {
    timerInterval = setInterval(() => {
        if(timeLeft <= 0) { clearInterval(timerInterval); submitTest(); return; }
        timeLeft--;
        const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        document.getElementById('timer-display').innerText = `${m}:${s}`;
    }, 1000);
}

function resetTimer(minutes) { clearInterval(timerInterval); timeLeft = minutes * 60; document.getElementById('timer-display').innerText = `${minutes}:00`; }
function continueAfterResult() { window.scrollTo({ top: 0, behavior: 'smooth' }); }