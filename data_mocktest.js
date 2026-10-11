/* =========================================================================
   DỮ LIỆU 20 ĐỀ THI THỬ ĐỊA LÍ TỐT NGHIỆP THPT 2026
   Mỗi đề: Phần 1 = 18 câu MCQ, Phần 2 = 4 câu Đúng/Sai (mỗi câu 4 ý a,b,c,d)
========================================================================= */
const dataMocktest = {};

// Khởi tạo 20 đề trống
for(let i = 1; i <= 20; i++) {
    dataMocktest[i] = [];
}

// Đề số 1: 18 câu MCQ + 4 câu T/F
dataMocktest[1] = [
    // ===== PHẦN 1: 18 câu trắc nghiệm =====
    { type: 'mcq', text: "Đặc điểm nào chứng tỏ đô thị hoá ở nước ta đang diễn ra nhanh nhưng trình độ chưa cao?", options: ["Tỉ lệ dân thành thị rất cao, trên 80%.", "Không gian đô thị thu hẹp, chỉ tập trung ở vùng núi.", "Tỉ lệ dân thành thị tăng nhưng cơ sở hạ tầng đô thị nhiều nơi còn quá tải.", "Toàn bộ dân đô thị đều làm việc trong ngành nông nghiệp."], answer: 2 },
    { type: 'mcq', text: "Đặc điểm nào sau đây đúng với địa hình nước ta?", options: ["Đồng bằng chiếm 3/4 diện tích lãnh thổ.", "Địa hình thấp dần từ đông sang tây.", "Núi cao trên 2000 m chiếm phần lớn diện tích.", "Đồi núi chiếm 3/4 diện tích, chủ yếu là đồi núi thấp."], answer: 3 },
    { type: 'mcq', text: "Nguyên nhân chủ yếu làm thiên nhiên nước ta mang tính chất nhiệt đới ẩm gió mùa là:", options: ["Nằm trong vùng nội chí tuyến, gần Biển Đông và chịu tác động của gió mùa.", "Nằm ở vùng ôn đới, xa biển.", "Địa hình toàn đồng bằng.", "Có nhiều hoang mạc lớn."], answer: 0 },
    { type: 'mcq', text: "Thiên tai nào thường xuyên gây thiệt hại lớn ở vùng ven biển Trung Bộ vào cuối mùa hạ, đầu mùa thu?", options: ["Bão.", "Sóng thần.", "Động đất.", "Núi lửa."], answer: 0 },
    { type: 'mcq', text: "Đặc điểm dân số nước ta hiện nay là:", options: ["Dân số ít, cơ cấu dân số trẻ.", "Quy mô dân số lớn, có xu hướng già hoá.", "Gia tăng dân số tự nhiên rất cao.", "Dân cư phân bố đồng đều giữa đô thị và nông thôn."], answer: 1 },
    { type: 'mcq', text: "Dân cư nước ta phân bố không đều chủ yếu do:", options: ["Chỉ do điều kiện khí hậu.", "Điều kiện tự nhiên, lịch sử khai thác lãnh thổ và trình độ phát triển kinh tế - xã hội khác nhau.", "Chỉ do chính sách di dân.", "Chỉ do mật độ đường giao thông."], answer: 1 },
    { type: 'mcq', text: "Ưu điểm nổi bật của nguồn lao động nước ta là:", options: ["Có trình độ cao trên 80%.", "Thiếu lao động trẻ.", "Dồi dào, cần cù, có khả năng tiếp thu nhanh khoa học - kĩ thuật.", "Phân bố đều giữa các vùng."], answer: 2 },
    { type: 'mcq', text: "Vùng trồng lúa lớn nhất cả nước là:", options: ["Đồng bằng sông Hồng.", "Đồng bằng sông Cửu Long.", "Duyên hải Nam Trung Bộ.", "Tây Nguyên."], answer: 1 },
    { type: 'mcq', text: "Vùng chuyên canh cà phê lớn nhất cả nước là:", options: ["Tây Nguyên.", "Đông Nam Bộ.", "Trung du và miền núi Bắc Bộ.", "Bắc Trung Bộ."], answer: 0 },
    { type: 'mcq', text: "Điều kiện thuận lợi nhất để phát triển nuôi trồng thuỷ sản ở Đồng bằng sông Cửu Long là:", options: ["Khí hậu lạnh quanh năm.", "Có nhiều núi cao.", "Không có thiên tai.", "Mạng lưới sông ngòi, kênh rạch chằng chịt và diện tích nước lợ, nước mặn ven biển rộng."], answer: 3 },
    { type: 'mcq', text: "Ngành công nghiệp trọng điểm có thế mạnh về nguồn nguyên liệu tại chỗ của nước ta là:", options: ["Chế biến lương thực, thực phẩm.", "Luyện kim đen.", "Sản xuất ô tô.", "Hoá dầu."], answer: 0 },
    { type: 'mcq', text: "Trung tâm công nghiệp lớn nhất cả nước là:", options: ["Hà Nội.", "Hải Phòng.", "TP. Hồ Chí Minh.", "Đà Nẵng."], answer: 2 },
    { type: 'mcq', text: "Nhà máy thuỷ điện có công suất lớn nhất nước ta hiện nay là:", options: ["Hoà Bình.", "Sơn La.", "Yaly.", "Trị An."], answer: 1 },
    { type: 'mcq', text: "Loại hình giao thông vận tải đảm nhận khối lượng vận chuyển hàng hoá lớn nhất nước ta là:", options: ["Đường sắt.", "Đường hàng không.", "Đường bộ.", "Đường ống."], answer: 2 },
    { type: 'mcq', text: "Tài nguyên du lịch nhân văn của nước ta gồm:", options: ["Bãi biển, hang động.", "Di tích lịch sử - văn hoá, lễ hội, làng nghề.", "Núi cao, thác nước.", "Hệ sinh thái rừng ngập mặn."], answer: 1 },
    { type: 'mcq', text: "Vùng kinh tế nào có quy mô GDP lớn nhất cả nước?", options: ["Tây Nguyên.", "Bắc Trung Bộ.", "Đồng bằng sông Cửu Long.", "Đông Nam Bộ."], answer: 3 },
    { type: 'mcq', text: "Thế mạnh nổi bật của Trung du và miền núi Bắc Bộ là:", options: ["Khai thác khoáng sản và thuỷ điện.", "Nuôi tôm quy mô lớn.", "Trồng lúa nước thâm canh lớn nhất cả nước.", "Công nghiệp sản xuất ô tô."], answer: 0 },
    { type: 'mcq', text: "Hạn chế lớn nhất của Bắc Trung Bộ trong phát triển kinh tế là:", options: ["Thiếu hoàn toàn lao động.", "Không có đường bờ biển.", "Thiên tai thường xuyên và cơ sở hạ tầng còn hạn chế.", "Không có tài nguyên du lịch."], answer: 2 },

    // ===== PHẦN 2: 4 câu Đúng/Sai (mỗi câu 4 ý a,b,c,d) =====
    { type: 'tf', text: "Câu 1. Về đặc điểm thiên nhiên nhiệt đới ẩm gió mùa ở Việt Nam:", options: [
        { text: "a) (Nhận biết) Nhiệt độ trung bình năm trên cả nước đều trên 20°C (trừ các vùng núi cao).", answer: true },
        { text: "b) (Thông hiểu) Chế độ mưa theo mùa làm cho lưu lượng nước các con sông phân mùa lũ - cạn.", answer: true },
        { text: "c) (Vận dụng) Thiên nhiên không có sự khác biệt giữa khu vực đồi núi và đồng bằng.", answer: false },
        { text: "d) (Vận dụng cao) Gió mùa Đông Bắc và Tín phong bán cầu Bắc tạo ra sự đối lập mùa mưa - khô giữa 2 sườn Trường Sơn.", answer: true }
    ]},
    { type: 'tf', text: "Câu 2. Về nông nghiệp nước ta:", options: [
        { text: "a) (Nhận biết) Trồng trọt vẫn chiếm tỉ trọng lớn nhất trong cơ cấu giá trị sản xuất nông nghiệp.", answer: true },
        { text: "b) (Thông hiểu) Nước ta là một trong những nước xuất khẩu gạo hàng đầu thế giới.", answer: true },
        { text: "c) (Vận dụng) Ứng dụng công nghệ cao giúp nâng cao năng suất và chất lượng nông sản.", answer: true },
        { text: "d) (Vận dụng cao) Nông nghiệp nước ta hoàn toàn không chịu tác động của biến đổi khí hậu.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Về công nghiệp nước ta:", options: [
        { text: "a) (Nhận biết) Cơ cấu ngành công nghiệp khá đa dạng.", answer: true },
        { text: "b) (Thông hiểu) Công nghiệp chế biến, chế tạo chiếm tỉ trọng lớn nhất trong cơ cấu công nghiệp.", answer: true },
        { text: "c) (Vận dụng) Công nghiệp tập trung chủ yếu ở các đồng bằng, ven biển và đô thị lớn do thuận lợi về hạ tầng và lao động.", answer: true },
        { text: "d) (Vận dụng cao) Khai thác dầu khí của nước ta tập trung chủ yếu ở Tây Nguyên.", answer: false }
    ]},
    { type: 'tf', text: "Câu 4. Về dịch vụ và giao thông vận tải nước ta:", options: [
        { text: "a) (Nhận biết) Ngành dịch vụ chiếm tỉ trọng cao nhất trong cơ cấu GDP.", answer: true },
        { text: "b) (Thông hiểu) Đường bộ đảm nhận khối lượng vận chuyển hàng hoá lớn nhất.", answer: true },
        { text: "c) (Vận dụng) Hà Nội và TP. Hồ Chí Minh là hai trung tâm dịch vụ lớn nhất cả nước.", answer: true },
        { text: "d) (Vận dụng cao) Ngành thương mại chỉ phụ thuộc thị trường trong nước, không có hoạt động xuất nhập khẩu.", answer: false }
    ]}
];
