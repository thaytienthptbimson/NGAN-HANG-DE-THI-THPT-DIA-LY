/* =========================================================================
   DỮ LIỆU ĐỊA LÍ KHỐI 12 - CẤU TRÚC MỚI (20 MCQ, 20 T/F CÓ BIỂU ĐỒ)
========================================================================= */
const dataKhoi12 = {
    1: {
        title: "Chủ đề 1: Tự nhiên Việt Nam",
        exercises: {
            mcq: [
                // Thầy điền đủ 20 câu MCQ chia theo 4 mức độ
                { level: 'nhan_biet', type: 'mcq', text: "Hệ toạ độ địa lí trên đất liền của nước ta nằm trong khoảng vĩ độ nào?", options: ["Từ 8°34'B đến 23°23'B.", "Từ 8°30'B đến 23°23'B.", "Từ 8°34'N đến 23°23'N.", "Từ 102°09'Đ đến 109°28'Đ."], answer: 0 },
                // ... 19 câu mcq khác
            ],
            tf: [
                // Thầy điền đủ 20 câu T/F, chú ý các câu có biểu đồ
                { 
                    level: 'van_dung', 
                    type: 'tf', 
                    text: "Cho biểu đồ cơ cấu lao động có việc làm phân theo ngành kinh tế của nước ta. Nhận định sau đây đúng hay sai?", 
                    image: "link_anh_bieu_do_1.jpg", // Đường dẫn ảnh biểu đồ
                    options: [
                        { text: "a) (Nhận biết) Số lượng lao động ngành dịch vụ chiếm tỉ trọng cao nhất.", answer: true },
                        { text: "b) (Thông hiểu) Tỉ lệ lao động ngành công nghiệp và xây dựng có xu hướng tăng nhanh do quá trình công nghiệp hóa.", answer: true },
                        { text: "c) (Vận dụng) Quy mô lao động có việc làm của nước ta giảm liên tục qua các năm.", answer: false },
                        { text: "d) (Vận dụng cao) Sự chuyển dịch cơ cấu lao động chậm hơn sự chuyển dịch cơ cấu kinh tế.", answer: true }
                    ]
                },
                // ... 19 câu tf khác
            ]
        }
    }
};