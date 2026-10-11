// Sinh bài kiểm tra 45 phút (Lấy random 18 MCQ và 4 T/F từ bài học)
function generateRandomTest(mcqList, tfList) {
    const shuffledMcq = mcqList.sort(() => 0.5 - Math.random()).slice(0, 18);
    const shuffledTf = tfList.sort(() => 0.5 - Math.random()).slice(0, 4);
    return [...shuffledMcq, ...shuffledTf];
}

// Cập nhật Render Menu Sidebar
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
                    <button onclick="startTest('${currentSection}', ${topicId}, 'mcq')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-emerald-50">Luyện 20 câu Trắc nghiệm</button>
                    <button onclick="startTest('${currentSection}', ${topicId}, 'tf')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-emerald-50">Luyện 20 câu Đúng/Sai</button>
                    <button onclick="startTest('${currentSection}', ${topicId}, 'test')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-emerald-50 font-semibold text-red-600">Bài kiểm tra 45 phút</button>
                </div>
            `;
            container.appendChild(div);
        });
    } else {
        const div = document.createElement('div');
        div.className = 'flex flex-col bg-white';
        // Tạo 20 đề thi
        for (let t = 1; t <= 20; t++) {
            let label = dataMocktest[t] && dataMocktest[t].length > 0 ? `Đề thi thử số ${t} (Chuẩn 2026)` : `Đề thi thử số ${t} (Đang cập nhật)`;
            div.innerHTML += `<button onclick="startTest('mocktest', null, ${t})" class="text-left px-6 py-4 text-sm hover:bg-emerald-50 border-b border-gray-100 font-semibold text-gray-700">${label}</button>`;
        }
        container.appendChild(div);
    }
}

function startTest(section, topicId, exerciseType) {
    // ... (Giữ nguyên phần đầu của hàm cũ)
    
    if (section.startsWith('khoi')) {
        let typeStr = exerciseType === 'mcq' ? "Luyện Trắc nghiệm" : (exerciseType === 'tf' ? "Luyện Đúng/Sai" : "Bài kiểm tra Đơn vị (45 phút)");
        document.getElementById('current-test-title').innerText = `${appDatabase[section][topicId].title}`;
        document.getElementById('current-test-subtitle').innerText = typeStr;
        // Bài kiểm tra đơn vị là 45 phút, luyện tập có thể cho không giới hạn hoặc 45p
        resetTimer(45); 
    } else {
        document.getElementById('current-test-title').innerText = `Đề thi thử Địa Lí HSA/THPT - Đề số ${exerciseType}`;
        document.getElementById('current-test-subtitle').innerText = "Cấu trúc 2026: Phân cấp 4 Mức độ";
        // Đề thi tốt nghiệp chuẩn là 50 phút
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
        if(currentExerciseType === 'test') {
            // Sinh bài test ngẫu nhiên không trùng lặp
            questions = generateRandomTest(
                appDatabase[currentSection][currentTopicId].exercises.mcq,
                appDatabase[currentSection][currentTopicId].exercises.tf
            );
        } else {
            questions = appDatabase[currentSection][currentTopicId].exercises[currentExerciseType] || [];
        }
    } else {
        questions = appDatabase.mocktest[currentExerciseType] || [];
    }

    // ... (Logic render giữ nguyên)
    
    questions.forEach((q, index) => {
        // Render MCQ...
        if (q.type === 'tf') {
            // Thêm render ảnh biểu đồ nếu có
            let imageHtml = q.image ? `<div class="mb-4 text-center"><img src="${q.image}" class="max-w-full h-auto mx-auto rounded-lg shadow-sm border border-gray-200"></div>` : '';
            
            let optionsHtml = '';
            // ... (Vòng lặp options giữ nguyên)
            
            phan2Html += `
                <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm mb-5 question-item" data-index="${index}" data-type="tf">
                    <div class="mb-4"><span class="font-bold text-emerald-700 text-lg">Câu ${tfCounter}:</span> <span class="text-lg font-medium ml-1 italic text-gray-700">${q.text}</span></div>
                    ${imageHtml}
                    <div class="flex flex-col">${optionsHtml}</div>
                </div>
            `;
            tfCounter++;
        }
    });
    // ...
}