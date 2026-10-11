/* =========================================================================
   DỮ LIỆU 20 ĐỀ THI THỬ ĐỊA LÍ TỐT NGHIỆP THPT 2026
========================================================================= */
const dataMocktest = {};

// Khởi tạo 20 đề trống
for(let i = 1; i <= 20; i++) {
    dataMocktest[i] = [];
}

// Thiết kế Đề số 1 bám sát ma trận 2026 (Phần 1: 18 câu MCQ, Phần 2: 4 câu T/F, Phần 3: 6 câu Trả lời ngắn - Nếu phần mềm có hỗ trợ)
dataMocktest[1] = [
    // 18 câu MCQ (Nhận biết - Thông hiểu - Vận dụng)
    { type: 'mcq', text: "Đặc điểm nào chứng tỏ đô thị hoá ở nước ta đang diễn ra nhanh nhưng trình độ chưa cao?", options: ["Tỉ lệ dân thành thị rất cao, trên 80%.", "Không gian đô thị thu hẹp, chỉ tập trung ở vùng núi.", "Tỉ lệ dân thành thị tăng nhưng cơ sở hạ tầng đô thị nhiều nơi còn quá tải.", "Toàn bộ dân đô thị đều làm việc trong ngành nông nghiệp."], answer: 2 },
    // ... thêm các câu mcq khác

    // 4 câu T/F (Mỗi câu 4 ý a,b,c,d)
    { type: 'tf', text: "Câu 1. Về đặc điểm thiên nhiên nhiệt đới ẩm gió mùa ở Việt Nam:", options: [
        { text: "a) (Nhận biết) Nhiệt độ trung bình năm trên cả nước đều trên 20°C (trừ các vùng núi cao).", answer: true },
        { text: "b) (Thông hiểu) Chế độ mưa theo mùa làm cho lưu lượng nước các con sông phân mùa lũ - cạn.", answer: true },
        { text: "c) (Vận dụng) Thiên nhiên không có sự khác biệt giữa khu vực đồi núi và đồng bằng.", answer: false },
        { text: "d) (Vận dụng cao) Gió mùa Đông Bắc và Tín phong bán cầu Bắc tạo ra sự đối lập mùa mưa - khô giữa 2 sườn Trường Sơn.", answer: true }
    ]}
];