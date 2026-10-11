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

// Đề số 2: 18 câu MCQ + 4 câu T/F
dataMocktest[2] = [
    // ===== PHẦN 1: 18 câu trắc nghiệm =====
    { type: 'mcq', text: "Vị trí địa lí nước ta thuận lợi cho phát triển kinh tế biển chủ yếu vì:", options: ["Không có đảo và quần đảo.", "Chỉ giáp biển ở phía bắc.", "Giáp Biển Đông, có đường bờ biển dài và vùng biển rộng.", "Nằm xa các tuyến hàng hải quốc tế."], answer: 2 },
    { type: 'mcq', text: "Ảnh hưởng của Biển Đông làm cho khí hậu nước ta có đặc điểm nào sau đây?", options: ["Khô hạn như vùng hoang mạc.", "Có mùa đông lạnh giá kéo dài.", "Mang tính hải dương, độ ẩm cao, điều hoà hơn.", "Nhiệt độ quanh năm dưới 15°C."], answer: 2 },
    { type: 'mcq', text: "Dạng địa hình chiếm diện tích lớn nhất ở nước ta là:", options: ["Đồng bằng châu thổ.", "Đồi núi thấp.", "Núi cao trên 2000 m.", "Cao nguyên badan."], answer: 1 },
    { type: 'mcq', text: "Hướng núi chủ yếu ở vùng núi Tây Bắc là:", options: ["Vòng cung.", "Đông - tây.", "Tây bắc - đông nam.", "Bắc - nam."], answer: 2 },
    { type: 'mcq', text: "Nhóm đất chiếm diện tích lớn nhất ở nước ta là:", options: ["Đất phù sa.", "Đất mặn.", "Đất phèn.", "Đất feralit."], answer: 3 },
    { type: 'mcq', text: "Mùa mưa ở Nam Bộ và Tây Nguyên thường kéo dài từ:", options: ["Tháng 11 đến tháng 4.", "Tháng 5 đến tháng 10.", "Tháng 1 đến tháng 5.", "Tháng 8 đến tháng 12."], answer: 1 },
    { type: 'mcq', text: "Mưa phùn ở Đồng bằng Bắc Bộ thường xuất hiện vào thời kì nào?", options: ["Giữa mùa hạ.", "Đầu mùa thu.", "Mùa khô ở Nam Bộ.", "Cuối mùa đông."], answer: 3 },
    { type: 'mcq', text: "Các đô thị loại đặc biệt của nước ta là:", options: ["Hà Nội và TP. Hồ Chí Minh.", "Hải Phòng và Đà Nẵng.", "Cần Thơ và Huế.", "Nha Trang và Đà Lạt."], answer: 0 },
    { type: 'mcq', text: "Cơ cấu dân số theo nhóm tuổi của nước ta đang thay đổi theo hướng:", options: ["Nhóm 0 - 14 tuổi tăng nhanh.", "Nhóm 0 - 14 tuổi giảm, nhóm từ 65 tuổi trở lên tăng.", "Nhóm 15 - 64 tuổi giảm liên tục.", "Cơ cấu dân số không thay đổi."], answer: 1 },
    { type: 'mcq', text: "Biện pháp quan trọng để sử dụng hợp lí nguồn lao động ở nước ta là:", options: ["Hạn chế phát triển công nghiệp.", "Giảm đầu tư cho giáo dục.", "Nâng cao chất lượng lao động, đào tạo nghề và phân bố lại lao động hợp lí.", "Khuyến khích tăng nhanh dân số."], answer: 2 },
    { type: 'mcq', text: "Cây công nghiệp lâu năm nào sau đây là thế mạnh của Trung du và miền núi Bắc Bộ?", options: ["Cao su.", "Điều.", "Hồ tiêu.", "Chè."], answer: 3 },
    { type: 'mcq', text: "Hoạt động khai thác thuỷ sản ở nước ta thuận lợi nhờ:", options: ["Vùng biển rộng với nhiều ngư trường lớn.", "Biển ít nguồn lợi hải sản.", "Đường bờ biển ngắn.", "Không có thiên tai trên biển."], answer: 0 },
    { type: 'mcq', text: "Ngành nào sau đây thuộc nhóm công nghiệp năng lượng?", options: ["Dệt may.", "Điện lực.", "Chế biến thuỷ sản.", "Sản xuất giày dép."], answer: 1 },
    { type: 'mcq', text: "Đông Nam Bộ có thế mạnh nổi bật về khai thác tài nguyên nào sau đây?", options: ["Than đá.", "Bô-xit.", "Thiếc.", "Dầu khí ở thềm lục địa."], answer: 3 },
    { type: 'mcq', text: "Tuyến đường sắt quan trọng nhất của nước ta là:", options: ["Hà Nội - Lào Cai.", "Hà Nội - Hải Phòng.", "Hà Nội - Đồng Đăng.", "Hà Nội - TP. Hồ Chí Minh."], answer: 3 },
    { type: 'mcq', text: "Cảng nước sâu Lạch Huyện thuộc thành phố nào?", options: ["Cần Thơ.", "Hải Phòng.", "Đà Nẵng.", "Huế."], answer: 1 },
    { type: 'mcq', text: "Điểm du lịch biển nổi tiếng của vùng Duyên hải Nam Trung Bộ là:", options: ["Sa Pa.", "Mộc Châu.", "Nha Trang.", "Đà Lạt."], answer: 2 },
    { type: 'mcq', text: "Hạn chế chủ yếu của Tây Nguyên trong sản xuất nông nghiệp là:", options: ["Thiếu nước tưới vào mùa khô.", "Thiếu đất đỏ badan.", "Khí hậu lạnh quanh năm.", "Không có diện tích rừng."], answer: 0 },

    // ===== PHẦN 2: 4 câu Đúng/Sai =====
    { type: 'tf', text: "Câu 1. Về dân cư và lao động nước ta:", options: [
        { text: "a) (Nhận biết) Quy mô dân số nước ta lớn, khoảng 100 triệu người.", answer: true },
        { text: "b) (Thông hiểu) Cơ cấu dân số của nước ta đang có xu hướng già hoá.", answer: true },
        { text: "c) (Vận dụng) Tỉ lệ lao động qua đào tạo của nước ta ngày càng tăng.", answer: true },
        { text: "d) (Vận dụng cao) Dân số đông chỉ mang lại thuận lợi tuyệt đối cho phát triển kinh tế, không gây sức ép nào.", answer: false }
    ]},
    { type: 'tf', text: "Câu 2. Về lâm nghiệp và thuỷ sản nước ta:", options: [
        { text: "a) (Nhận biết) Rừng nước ta gồm rừng sản xuất, rừng phòng hộ và rừng đặc dụng.", answer: true },
        { text: "b) (Thông hiểu) Tỉ trọng nuôi trồng trong tổng sản lượng thuỷ sản ngày càng tăng.", answer: true },
        { text: "c) (Vận dụng) Đẩy mạnh đánh bắt xa bờ góp phần bảo vệ chủ quyền vùng biển.", answer: true },
        { text: "d) (Vận dụng cao) Có thể tăng khai thác thuỷ sản ven bờ không giới hạn mà không làm cạn kiệt nguồn lợi.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Về công nghiệp năng lượng của nước ta:", options: [
        { text: "a) (Nhận biết) Than được khai thác chủ yếu ở Quảng Ninh.", answer: true },
        { text: "b) (Thông hiểu) Nhà máy thuỷ điện lớn tập trung trên hệ thống sông Đà và sông Đồng Nai.", answer: true },
        { text: "c) (Vận dụng) Nhiệt điện khí tập trung chủ yếu ở Đông Nam Bộ và Tây Nam Bộ.", answer: true },
        { text: "d) (Vận dụng cao) Nước ta chỉ có thể sản xuất điện từ than đá.", answer: false }
    ]},
    { type: 'tf', text: "Câu 4. Về các vùng kinh tế nước ta:", options: [
        { text: "a) (Nhận biết) Đồng bằng sông Hồng có thủ đô Hà Nội, là trung tâm chính trị của cả nước.", answer: true },
        { text: "b) (Thông hiểu) Đông Nam Bộ là vùng có trình độ phát triển kinh tế cao so với cả nước.", answer: true },
        { text: "c) (Vận dụng) Tây Nguyên là vùng duy nhất của nước ta không giáp biển.", answer: true },
        { text: "d) (Vận dụng cao) Bắc Trung Bộ là vùng trồng cà phê lớn nhất cả nước.", answer: false }
    ]}
];

// Đề số 3: 18 câu MCQ + 4 câu T/F
dataMocktest[3] = [
    // ===== PHẦN 1: 18 câu trắc nghiệm =====
    { type: 'mcq', text: "Đảo lớn nhất của nước ta là:", options: ["Cát Bà.", "Phú Quốc.", "Côn Đảo.", "Lý Sơn."], answer: 1 },
    { type: 'mcq', text: "Rừng ngập mặn phát triển mạnh nhất ở:", options: ["Vùng núi cao Tây Bắc.", "Cao nguyên Tây Nguyên.", "Ven biển Nam Bộ.", "Vùng đồi trung du."], answer: 2 },
    { type: 'mcq', text: "Vườn quốc gia nào sau đây được UNESCO công nhận là Di sản thiên nhiên thế giới?", options: ["Cúc Phương.", "Ba Vì.", "Cát Tiên.", "Phong Nha - Kẻ Bàng."], answer: 3 },
    { type: 'mcq', text: "Cơ cấu GDP của nước ta đang chuyển dịch theo hướng:", options: ["Tăng tỉ trọng nông nghiệp, giảm dịch vụ.", "Giảm tỉ trọng nông nghiệp, tăng công nghiệp và dịch vụ.", "Giảm tỉ trọng công nghiệp, tăng nông nghiệp.", "Giữ nguyên cơ cấu qua các năm."], answer: 1 },
    { type: 'mcq', text: "Đầu tư trực tiếp nước ngoài (FDI) vào nước ta tập trung nhiều nhất ở ngành:", options: ["Nông nghiệp.", "Khai thác thuỷ sản.", "Lâm nghiệp.", "Công nghiệp chế biến, chế tạo."], answer: 3 },
    { type: 'mcq', text: "Hai đối tác thương mại lớn của Việt Nam hiện nay là:", options: ["Lào và Cam-pu-chia.", "Trung Quốc và Hoa Kỳ.", "Mông Cổ và Nê-pan.", "Cu-ba và Bê-la-rút."], answer: 1 },
    { type: 'mcq', text: "Mặt hàng nào sau đây là mặt hàng xuất khẩu chủ lực của nước ta?", options: ["Than bùn và đá xây dựng.", "Điện thoại, máy vi tính và linh kiện điện tử.", "Thuốc lá và rượu bia.", "Phân bón và xi măng."], answer: 1 },
    { type: 'mcq', text: "Ngành công nghiệp nào sau đây sử dụng nhiều lao động, vốn đầu tư ít, thu hồi vốn nhanh?", options: ["Điện hạt nhân.", "Luyện kim đen.", "Dệt may, da giày.", "Hoá dầu."], answer: 2 },
    { type: 'mcq', text: "Các cơ sở chế biến thực phẩm thường đặt gần vùng nguyên liệu chủ yếu nhằm:", options: ["Giảm số lượng lao động cần thiết.", "Tăng khoảng cách tới thị trường.", "Tránh sử dụng điện.", "Giảm chi phí vận chuyển và hạn chế hư hỏng nguyên liệu."], answer: 3 },
    { type: 'mcq', text: "Vùng có mật độ dân số cao nhất cả nước là:", options: ["Đồng bằng sông Hồng.", "Tây Nguyên.", "Trung du và miền núi Bắc Bộ.", "Bắc Trung Bộ."], answer: 0 },
    { type: 'mcq', text: "Loại hình vận tải đảm nhận phần lớn khối lượng hàng hoá xuất, nhập khẩu của nước ta là:", options: ["Đường sắt.", "Đường biển.", "Đường ống.", "Đường bộ."], answer: 1 },
    { type: 'mcq', text: "Yếu tố nào sau đây là tài nguyên du lịch tự nhiên?", options: ["Lễ hội truyền thống.", "Làng nghề.", "Bãi biển, hang động.", "Di tích lịch sử."], answer: 2 },
    { type: 'mcq', text: "Thế mạnh nổi bật của Đồng bằng sông Hồng là:", options: ["Nhiều mỏ bô-xit.", "Trồng cà phê lớn nhất cả nước.", "Diện tích rừng tự nhiên lớn nhất.", "Lao động chất lượng cao, thị trường lớn, có thủ đô Hà Nội."], answer: 3 },
    { type: 'mcq', text: "Biện pháp quan trọng nhất để phát triển nông nghiệp bền vững ở nước ta là:", options: ["Mở rộng đất canh tác bằng cách phá rừng.", "Ứng dụng công nghệ, sử dụng hợp lí đất và nước, bảo vệ môi trường.", "Lạm dụng thuốc bảo vệ thực vật.", "Chỉ trồng một loại cây duy nhất."], answer: 1 },
    { type: 'mcq', text: "Đất đỏ badan ở Tây Nguyên thuận lợi nhất để trồng:", options: ["Lúa nước thâm canh.", "Chè ôn đới.", "Cà phê, cao su, hồ tiêu.", "Mía và bông."], answer: 2 },
    { type: 'mcq', text: "Hạn chế lớn đối với sản xuất ở Đồng bằng sông Cửu Long là:", options: ["Thiếu đất phù sa.", "Ngập lụt, xâm nhập mặn, thiếu nước ngọt vào mùa khô.", "Địa hình núi cao hiểm trở.", "Khí hậu lạnh giá."], answer: 1 },
    { type: 'mcq', text: "Đông Nam Bộ có sức hút đầu tư lớn nhờ:", options: ["Dân số rất ít.", "Không có cảng biển.", "Cơ sở hạ tầng tốt, lao động trình độ cao, thị trường lớn.", "Nhiều núi cao."], answer: 2 },
    { type: 'mcq', text: "Thế mạnh nổi bật của Bắc Trung Bộ là:", options: ["Du lịch biển và di sản, lâm nghiệp, khai khoáng.", "Trồng lúa lớn nhất cả nước.", "Công nghiệp sản xuất ô tô.", "Trồng cây ôn đới quy mô lớn."], answer: 0 },

    // ===== PHẦN 2: 4 câu Đúng/Sai =====
    { type: 'tf', text: "Câu 1. Về kinh tế biển của nước ta:", options: [
        { text: "a) (Nhận biết) Vùng biển nước ta rộng, giàu hải sản, dầu khí và tiềm năng du lịch.", answer: true },
        { text: "b) (Thông hiểu) Dầu khí được khai thác chủ yếu ở thềm lục địa phía nam.", answer: true },
        { text: "c) (Vận dụng) Phát triển cảng biển nước sâu góp phần thúc đẩy thương mại quốc tế.", answer: true },
        { text: "d) (Vận dụng cao) Kinh tế biển của nước ta chỉ gồm hoạt động đánh bắt hải sản.", answer: false }
    ]},
    { type: 'tf', text: "Câu 2. Về hội nhập kinh tế quốc tế của nước ta:", options: [
        { text: "a) (Nhận biết) Việt Nam là thành viên của Tổ chức Thương mại Thế giới (WTO) từ năm 2007.", answer: true },
        { text: "b) (Thông hiểu) Việt Nam đã tham gia nhiều hiệp định thương mại tự do như CPTPP, EVFTA.", answer: true },
        { text: "c) (Vận dụng) Hội nhập mở rộng thị trường cho hàng hoá nhưng cũng làm tăng sức ép cạnh tranh.", answer: true },
        { text: "d) (Vận dụng cao) Hội nhập khiến Việt Nam hoàn toàn phụ thuộc bên ngoài và không có thêm cơ hội phát triển.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Về Đồng bằng sông Cửu Long:", options: [
        { text: "a) (Nhận biết) Đây là vùng sản xuất lúa gạo và nuôi trồng thuỷ sản lớn nhất cả nước.", answer: true },
        { text: "b) (Thông hiểu) Vùng có mạng lưới sông ngòi, kênh rạch chằng chịt.", answer: true },
        { text: "c) (Vận dụng) Biến đổi khí hậu và nước biển dâng làm gia tăng tình trạng xâm nhập mặn.", answer: true },
        { text: "d) (Vận dụng cao) Sản xuất của vùng hoàn toàn không chịu ảnh hưởng của nguồn nước từ thượng nguồn sông Mê Công.", answer: false }
    ]},
    { type: 'tf', text: "Câu 4. Về Tây Nguyên:", options: [
        { text: "a) (Nhận biết) Địa hình gồm các cao nguyên xếp tầng.", answer: true },
        { text: "b) (Thông hiểu) Vùng phát triển mạnh cây công nghiệp lâu năm trên đất badan.", answer: true },
        { text: "c) (Vận dụng) Thiếu nước vào mùa khô là hạn chế đáng kể đối với sản xuất.", answer: true },
        { text: "d) (Vận dụng cao) Tây Nguyên có đường bờ biển dài, thuận lợi xây dựng cảng nước sâu.", answer: false }
    ]}
];

// Đề số 4: 18 câu MCQ + 4 câu T/F
dataMocktest[4] = [
    // ===== PHẦN 1: 18 câu trắc nghiệm =====
    { type: 'mcq', text: "Phần đất liền nước ta kéo dài theo chiều bắc - nam khoảng bao nhiêu vĩ độ?", options: ["Khoảng 10 vĩ độ.", "Khoảng 20 vĩ độ.", "Khoảng 15 vĩ độ.", "Khoảng 25 vĩ độ."], answer: 2 },
    { type: 'mcq', text: "Đặc điểm nào sau đây đúng với Biển Đông?", options: ["Là biển nhỏ, hoàn toàn khép kín.", "Là biển rộng, tương đối kín, nằm trong vùng nhiệt đới gió mùa.", "Nằm ở vùng khí hậu ôn đới.", "Hầu như không có đảo và quần đảo."], answer: 1 },
    { type: 'mcq', text: "Khoáng sản nào sau đây có trữ lượng lớn ở Tây Nguyên?", options: ["Than đá.", "Thiếc.", "Apatit.", "Bô-xit."], answer: 3 },
    { type: 'mcq', text: "Bể than lớn nhất nước ta tập trung ở:", options: ["Quảng Ninh.", "Tây Nguyên.", "Đồng bằng sông Cửu Long.", "Duyên hải Nam Trung Bộ."], answer: 0 },
    { type: 'mcq', text: "Vùng nào ở nước ta có mùa đông lạnh nhất?", options: ["Tây Nguyên.", "Vùng núi Đông Bắc.", "Duyên hải Nam Trung Bộ.", "Đồng bằng sông Cửu Long."], answer: 1 },
    { type: 'mcq', text: "Gió gây thời tiết khô nóng ở đồng bằng ven biển Trung Bộ vào đầu mùa hạ là:", options: ["Gió mùa Đông Bắc.", "Tín phong bán cầu Nam.", "Gió đất.", "Gió Tây khô nóng."], answer: 3 },
    { type: 'mcq', text: "Đặc điểm nổi bật của sông ngòi ở vùng núi nước ta là:", options: ["Độ dốc lớn, tiềm năng thuỷ điện lớn.", "Sông chảy chậm, bồi tụ mạnh.", "Rất ít sông suối.", "Không có thác ghềnh."], answer: 0 },
    { type: 'mcq', text: "Yếu tố nào sau đây góp phần làm tăng tỉ lệ đô thị hoá ở nước ta?", options: ["Giảm đầu tư hạ tầng đô thị.", "Hạn chế di cư nông thôn - thành thị.", "Phát triển công nghiệp, dịch vụ thu hút lao động về đô thị.", "Thu hẹp sản xuất công nghiệp."], answer: 2 },
    { type: 'mcq', text: "Cơ cấu dân số vàng của nước ta có nghĩa là:", options: ["Số người từ 65 tuổi trở lên chiếm tỉ lệ cao nhất.", "Số người trong độ tuổi lao động cao gấp đôi số người phụ thuộc.", "Trẻ em chiếm trên 50% dân số.", "Số người phụ thuộc cao gấp đôi số người trong độ tuổi lao động."], answer: 1 },
    { type: 'mcq', text: "Vùng có tỉ lệ dân thành thị cao nhất cả nước là:", options: ["Tây Nguyên.", "Bắc Trung Bộ.", "Trung du và miền núi Bắc Bộ.", "Đông Nam Bộ."], answer: 3 },
    { type: 'mcq', text: "Ở Đồng bằng sông Hồng, vụ nào sau đây thuận lợi trồng các cây ưa lạnh như khoai tây, su hào?", options: ["Vụ hè thu.", "Vụ đông.", "Vụ mùa.", "Vụ ba."], answer: 1 },
    { type: 'mcq', text: "Cây công nghiệp lâu năm quan trọng nhất ở Đông Nam Bộ là:", options: ["Chè.", "Cà phê.", "Cao su.", "Dừa."], answer: 2 },
    { type: 'mcq', text: "Hình thức tổ chức sản xuất nông nghiệp hiện đại, gắn với chế biến và tiêu thụ là:", options: ["Du canh du cư.", "Quảng canh.", "Tự cung tự cấp.", "Chuỗi liên kết sản xuất - chế biến - tiêu thụ."], answer: 3 },
    { type: 'mcq', text: "Rừng phòng hộ ở nước ta có chức năng chủ yếu là:", options: ["Chắn gió, chắn sóng, chống xói mòn và điều hoà nguồn nước.", "Cung cấp gỗ cho công nghiệp.", "Phục vụ du lịch giải trí là chính.", "Chỉ để chăn thả gia súc."], answer: 0 },
    { type: 'mcq', text: "Nuôi tôm nước lợ phát triển mạnh nhất ở:", options: ["Tây Nguyên.", "Đồng bằng sông Cửu Long.", "Trung du và miền núi Bắc Bộ.", "Bắc Trung Bộ."], answer: 1 },
    { type: 'mcq', text: "Phát triển công nghiệp chế biến nông sản có ý nghĩa lớn nhất là:", options: ["Giảm sản lượng nông sản.", "Làm giảm việc làm ở nông thôn.", "Nâng cao giá trị, kéo dài thời gian bảo quản và mở rộng thị trường.", "Tăng phụ thuộc vào nhập khẩu."], answer: 2 },
    { type: 'mcq', text: "Vấn đề môi trường nổi bật ở các đô thị lớn của nước ta là:", options: ["Ô nhiễm không khí, nước, rác thải và ùn tắc giao thông.", "Thiếu dân cư và lao động.", "Dư thừa diện tích đất ở.", "Khí hậu quá lạnh."], answer: 0 },
    { type: 'mcq', text: "Tài nguyên nào sau đây là tài nguyên không thể phục hồi?", options: ["Rừng.", "Đất.", "Nguồn lợi thuỷ sản.", "Khoáng sản."], answer: 3 },

    // ===== PHẦN 2: 4 câu Đúng/Sai =====
    { type: 'tf', text: "Câu 1. Về đô thị hoá ở nước ta:", options: [
        { text: "a) (Nhận biết) Tỉ lệ dân thành thị của nước ta có xu hướng tăng.", answer: true },
        { text: "b) (Thông hiểu) Đô thị hoá gắn liền với quá trình công nghiệp hoá, hiện đại hoá.", answer: true },
        { text: "c) (Vận dụng) Đô thị hoá nhanh gây áp lực lên hạ tầng và môi trường đô thị.", answer: true },
        { text: "d) (Vận dụng cao) Đô thị hoá không làm thay đổi cơ cấu lao động theo ngành.", answer: false }
    ]},
    { type: 'tf', text: "Câu 2. Về tài nguyên đất và sử dụng đất nông nghiệp:", options: [
        { text: "a) (Nhận biết) Đất feralit ở vùng đồi núi thích hợp trồng cây công nghiệp lâu năm.", answer: true },
        { text: "b) (Thông hiểu) Đất phù sa ở đồng bằng thích hợp trồng cây lương thực và hoa màu.", answer: true },
        { text: "c) (Vận dụng) Đất mặn, đất phèn cần được cải tạo để mở rộng diện tích canh tác.", answer: true },
        { text: "d) (Vận dụng cao) Có thể canh tác liên tục mà không cần bồi dưỡng đất vẫn giữ nguyên độ phì.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Về chăn nuôi ở nước ta:", options: [
        { text: "a) (Nhận biết) Chăn nuôi lợn và gia cầm phát triển mạnh ở các vùng đồng bằng.", answer: true },
        { text: "b) (Thông hiểu) Chăn nuôi theo hướng trang trại, công nghiệp ngày càng phổ biến.", answer: true },
        { text: "c) (Vận dụng) Dịch bệnh là một trong những rủi ro lớn của ngành chăn nuôi.", answer: true },
        { text: "d) (Vận dụng cao) Chăn nuôi hoàn toàn không phụ thuộc vào nguồn thức ăn.", answer: false }
    ]},
    { type: 'tf', text: "Câu 4. Về bảo vệ tài nguyên và môi trường:", options: [
        { text: "a) (Nhận biết) Rừng phòng hộ có tác dụng chắn gió, chắn sóng và chống xói mòn.", answer: true },
        { text: "b) (Thông hiểu) Suy thoái tài nguyên rừng làm gia tăng nguy cơ thiên tai.", answer: true },
        { text: "c) (Vận dụng) Sử dụng tiết kiệm tài nguyên và năng lượng góp phần phát triển bền vững.", answer: true },
        { text: "d) (Vận dụng cao) Bảo vệ môi trường chỉ cản trở phát triển kinh tế, không mang lại lợi ích lâu dài.", answer: false }
    ]}
];

// Đề số 5: 18 câu MCQ + 4 câu T/F
dataMocktest[5] = [
    // ===== PHẦN 1: 18 câu trắc nghiệm =====
    { type: 'mcq', text: "Khu công nghiệp tập trung có đặc điểm nào sau đây?", options: ["Chỉ là một nhà máy đơn lẻ.", "Nằm hoàn toàn trong khu dân cư.", "Có ranh giới địa lí xác định, chuyên sản xuất công nghiệp và dịch vụ công nghiệp.", "Chỉ sản xuất nông nghiệp."], answer: 2 },
    { type: 'mcq', text: "Ngành công nghiệp nào sau đây đòi hỏi trình độ kĩ thuật cao và là ngành mũi nhọn ở nước ta?", options: ["Khai thác than.", "Chế biến gỗ thô.", "Sản xuất vật liệu xây dựng đơn giản.", "Sản xuất sản phẩm điện tử, tin học."], answer: 3 },
    { type: 'mcq', text: "Nhà máy lọc dầu Dung Quất thuộc vùng kinh tế nào?", options: ["Bắc Trung Bộ.", "Duyên hải Nam Trung Bộ.", "Đông Nam Bộ.", "Đồng bằng sông Hồng."], answer: 1 },
    { type: 'mcq', text: "Ngành dịch vụ nào sau đây phát triển nhanh nhờ tiến bộ khoa học - công nghệ?", options: ["Viễn thông và công nghệ thông tin.", "Vận tải bằng sức kéo.", "Buôn bán nhỏ lẻ truyền thống.", "Dịch vụ nông thôn tự cấp."], answer: 0 },
    { type: 'mcq', text: "Vịnh Hạ Long, di sản thiên nhiên thế giới, thuộc tỉnh nào?", options: ["Hải Phòng.", "Thanh Hoá.", "Quảng Ninh.", "Nghệ An."], answer: 2 },
    { type: 'mcq', text: "Vai trò quan trọng nhất của ngành dịch vụ đối với nền kinh tế là:", options: ["Làm giảm GDP.", "Chỉ phục vụ người nước ngoài.", "Hạn chế xuất khẩu hàng hoá.", "Thúc đẩy sản xuất, tạo việc làm và nâng cao đời sống."], answer: 3 },
    { type: 'mcq', text: "Mạng lưới đường bộ nước ta đang phát triển theo hướng:", options: ["Thu hẹp mạng lưới cao tốc.", "Hiện đại hoá, phát triển đường cao tốc và kết nối các vùng.", "Chỉ xây đường ở miền núi.", "Dừng nâng cấp các quốc lộ."], answer: 1 },
    { type: 'mcq', text: "Duyên hải Nam Trung Bộ có thế mạnh nổi bật về:", options: ["Trồng chè quy mô lớn.", "Khai thác than.", "Kinh tế biển: du lịch, cảng biển, thuỷ sản.", "Trồng cây ôn đới."], answer: 2 },
    { type: 'mcq', text: "Trung du và miền núi Bắc Bộ phát triển thuỷ điện thuận lợi vì:", options: ["Sông có độ dốc lớn, lưu lượng nước dồi dào.", "Địa hình bằng phẳng, sông chảy chậm.", "Ít mưa quanh năm.", "Không có sông lớn."], answer: 0 },
    { type: 'mcq', text: "Hạn chế lớn của Đồng bằng sông Hồng là:", options: ["Thiếu lao động.", "Mật độ dân số cao, sức ép lên đất đai và việc làm.", "Không có hệ thống sông ngòi.", "Địa hình chủ yếu là núi cao."], answer: 1 },
    { type: 'mcq', text: "Thương mại điện tử ở nước ta phát triển nhanh nhờ:", options: ["Giảm số người dùng điện thoại.", "Hạn chế vận chuyển hàng hoá.", "Không có thị trường tiêu dùng.", "Hạ tầng Internet và thanh toán số phát triển."], answer: 3 },
    { type: 'mcq', text: "Công nghiệp sản xuất sản phẩm điện tử tập trung nhiều ở:", options: ["Tây Nguyên.", "Bắc Trung Bộ.", "Đồng bằng sông Hồng và Đông Nam Bộ.", "Vùng núi Tây Bắc."], answer: 2 },
    { type: 'mcq', text: "Cơ cấu công nghiệp theo ngành ở nước ta đang chuyển dịch theo hướng:", options: ["Tăng tỉ trọng công nghiệp chế biến, chế tạo.", "Tăng tỉ trọng khai khoáng.", "Giảm tỉ trọng công nghiệp chế biến.", "Chỉ phát triển công nghiệp nhẹ."], answer: 0 },
    { type: 'mcq', text: "Phát triển năng lượng tái tạo ở nước ta có ý nghĩa chủ yếu là:", options: ["Tăng phát thải khí nhà kính.", "Đa dạng nguồn điện, giảm phát thải và bảo vệ môi trường.", "Chỉ để xuất khẩu điện.", "Làm giảm hoàn toàn vai trò của mọi nguồn điện khác."], answer: 1 },
    { type: 'mcq', text: "Du lịch sinh thái ở Đồng bằng sông Cửu Long dựa chủ yếu vào:", options: ["Núi cao và băng tuyết.", "Hoang mạc và đồi cát.", "Sông nước miệt vườn, rừng ngập mặn và chợ nổi.", "Hang động caxtơ lớn."], answer: 2 },
    { type: 'mcq', text: "Thành phố Hồ Chí Minh có vai trò nào sau đây?", options: ["Trung tâm kinh tế, tài chính và dịch vụ lớn nhất cả nước.", "Trung tâm khai thác than lớn nhất.", "Trung tâm trồng chè lớn nhất.", "Vùng núi cao hẻo lánh."], answer: 0 },
    { type: 'mcq', text: "Vùng kinh tế có số dân đông nhất nước ta là:", options: ["Tây Nguyên.", "Đồng bằng sông Hồng.", "Trung du và miền núi Bắc Bộ.", "Bắc Trung Bộ."], answer: 1 },
    { type: 'mcq', text: "Chuyển đổi số trong lĩnh vực dịch vụ giúp:", options: ["Tăng chi phí không cần thiết.", "Giảm khả năng cạnh tranh.", "Hạn chế phát triển thương mại.", "Nâng cao hiệu quả, mở rộng thị trường và cải thiện trải nghiệm khách hàng."], answer: 3 },

    // ===== PHẦN 2: 4 câu Đúng/Sai =====
    { type: 'tf', text: "Câu 1. Về công nghiệp nước ta:", options: [
        { text: "a) (Nhận biết) Công nghiệp điện tử phát triển nhanh nhờ thu hút vốn đầu tư nước ngoài.", answer: true },
        { text: "b) (Thông hiểu) Cơ cấu công nghiệp chuyển dịch theo hướng tăng tỉ trọng chế biến, chế tạo.", answer: true },
        { text: "c) (Vận dụng) Các khu công nghiệp tập trung nhiều ở Đồng bằng sông Hồng và Đông Nam Bộ.", answer: true },
        { text: "d) (Vận dụng cao) Công nghiệp khai khoáng là ngành chiếm tỉ trọng lớn nhất trong cơ cấu công nghiệp.", answer: false }
    ]},
    { type: 'tf', text: "Câu 2. Về thương mại và du lịch:", options: [
        { text: "a) (Nhận biết) Thương mại gồm hai bộ phận là nội thương và ngoại thương.", answer: true },
        { text: "b) (Thông hiểu) Ngoại thương góp phần mở rộng thị trường tiêu thụ cho sản phẩm trong nước.", answer: true },
        { text: "c) (Vận dụng) Phát triển du lịch cần cả tài nguyên du lịch lẫn hạ tầng và dịch vụ.", answer: true },
        { text: "d) (Vận dụng cao) Du lịch hoàn toàn không chịu ảnh hưởng của dịch bệnh và thiên tai.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Về vùng Duyên hải Nam Trung Bộ:", options: [
        { text: "a) (Nhận biết) Vùng có đường bờ biển dài, nhiều vũng vịnh và bãi biển đẹp.", answer: true },
        { text: "b) (Thông hiểu) Vùng có lợi thế phát triển du lịch biển và cảng nước sâu.", answer: true },
        { text: "c) (Vận dụng) Vùng thường chịu ảnh hưởng của bão và hạn hán.", answer: true },
        { text: "d) (Vận dụng cao) Vùng có đồng bằng châu thổ rộng lớn nhất cả nước.", answer: false }
    ]},
    { type: 'tf', text: "Câu 4. Về Trung du và miền núi Bắc Bộ và Đồng bằng sông Hồng:", options: [
        { text: "a) (Nhận biết) Trung du và miền núi Bắc Bộ có nhiều khoáng sản và tiềm năng thuỷ điện.", answer: true },
        { text: "b) (Thông hiểu) Đồng bằng sông Hồng có mật độ dân cư cao.", answer: true },
        { text: "c) (Vận dụng) Hai vùng có thể bổ sung cho nhau về nguyên liệu, lao động và thị trường.", answer: true },
        { text: "d) (Vận dụng cao) Trung du và miền núi Bắc Bộ có mật độ dân số cao nhất cả nước.", answer: false }
    ]}
];

// Đề số 6: 18 câu MCQ + 4 câu T/F
dataMocktest[6] = [
    // ===== PHẦN 1: 18 câu trắc nghiệm =====
    { type: 'mcq', text: "Hai quần đảo lớn thuộc chủ quyền của Việt Nam ở Biển Đông là:", options: ["Lê-dô và Ca-ri-bê.", "Man-đi-vơ và Xê-sen.", "Ha-oai và Gu-am.", "Hoàng Sa và Trường Sa."], answer: 3 },
    { type: 'mcq', text: "Thềm lục địa nước ta có tiềm năng lớn về:", options: ["Than nâu.", "Dầu mỏ và khí đốt.", "Quặng sắt trên cạn.", "Muối mỏ."], answer: 1 },
    { type: 'mcq', text: "Chế độ nhiệt ở miền Nam nước ta có đặc điểm:", options: ["Có mùa đông lạnh dưới 5°C.", "Có tuyết rơi vào mùa đông.", "Nóng quanh năm, biên độ nhiệt năm nhỏ.", "Nhiệt độ thấp quanh năm."], answer: 2 },
    { type: 'mcq', text: "Sông Mê Công bồi đắp nên đồng bằng nào ở nước ta?", options: ["Đồng bằng sông Hồng.", "Đồng bằng Thanh Hoá.", "Đồng bằng Phú Yên.", "Đồng bằng sông Cửu Long."], answer: 3 },
    { type: 'mcq', text: "Sự phân hoá thiên nhiên theo độ cao chủ yếu do:", options: ["Nhiệt độ và độ ẩm thay đổi theo độ cao.", "Hướng chảy của các con sông.", "Diện tích rừng.", "Mật độ dân cư."], answer: 0 },
    { type: 'mcq', text: "Vùng có nguy cơ động đất cao nhất nước ta là:", options: ["Đồng bằng sông Cửu Long.", "Tây Bắc.", "Tây Nguyên.", "Duyên hải Nam Trung Bộ."], answer: 1 },
    { type: 'mcq', text: "Chuyển dịch cơ cấu lao động theo ngành ở nước ta diễn ra theo hướng:", options: ["Tăng tỉ trọng lao động nông - lâm - thuỷ sản.", "Giảm tỉ trọng lao động công nghiệp - xây dựng và dịch vụ.", "Giảm tỉ trọng lao động nông - lâm - thuỷ sản, tăng công nghiệp - xây dựng và dịch vụ.", "Không có sự thay đổi."], answer: 2 },
    { type: 'mcq', text: "Vấn đề việc làm ở nông thôn nước ta gắn liền với:", options: ["Thiếu đất ở.", "Thừa lao động kĩ thuật cao.", "Khan hiếm hàng hoá.", "Tính mùa vụ, tình trạng thiếu việc làm và thu nhập thấp."], answer: 3 },
    { type: 'mcq', text: "Hồ tiêu của nước ta tập trung chủ yếu ở:", options: ["Trung du và miền núi Bắc Bộ.", "Tây Nguyên và Đông Nam Bộ.", "Đồng bằng sông Hồng.", "Duyên hải Bắc Trung Bộ."], answer: 1 },
    { type: 'mcq', text: "Cây ăn quả nhiệt đới nổi tiếng ở Đồng bằng sông Cửu Long là:", options: ["Xoài, bưởi, sầu riêng.", "Táo, lê, đào ôn đới.", "Nho ôn đới.", "Hạt dẻ."], answer: 0 },
    { type: 'mcq', text: "Nhà máy thuỷ điện Yaly nằm trên sông nào?", options: ["Sông Đà.", "Sông Mã.", "Sông Sê San.", "Sông Đồng Nai."], answer: 2 },
    { type: 'mcq', text: "Cửa khẩu quốc tế Lào Cai nằm trên biên giới Việt Nam với:", options: ["Trung Quốc.", "Lào.", "Cam-pu-chia.", "Thái Lan."], answer: 0 },
    { type: 'mcq', text: "Quốc lộ 1 là tuyến đường bộ chạy suốt từ:", options: ["Hà Nội đến Lào Cai.", "Hà Nội đến Hải Phòng.", "Đà Nẵng đến Cần Thơ.", "Lạng Sơn đến Cà Mau."], answer: 3 },
    { type: 'mcq', text: "Phát triển du lịch có tác động tích cực nào sau đây?", options: ["Làm giảm thu nhập của địa phương.", "Tạo việc làm, tăng thu nhập và quảng bá hình ảnh đất nước.", "Giảm giao lưu văn hoá.", "Hạn chế phát triển dịch vụ."], answer: 1 },
    { type: 'mcq', text: "Nguyên nhân chủ yếu gây sạt lở bờ sông ở Đồng bằng sông Cửu Long là:", options: ["Mưa quá ít.", "Gió mùa Đông Bắc mạnh.", "Khai thác cát, thiếu hụt phù sa và dòng chảy thay đổi.", "Địa hình quá cao."], answer: 2 },
    { type: 'mcq', text: "Định hướng phát triển bền vững vùng ven biển là:", options: ["Khai thác tối đa, bỏ qua bảo vệ môi trường.", "Khai thác hợp lí gắn với bảo vệ môi trường biển.", "Chỉ khai thác một loại tài nguyên.", "Ngừng mọi hoạt động kinh tế biển."], answer: 1 },
    { type: 'mcq', text: "Chuyển đổi số trong nông nghiệp thể hiện qua việc:", options: ["Quay lại canh tác thủ công.", "Giảm kết nối với thị trường.", "Bỏ ghi chép quá trình sản xuất.", "Ứng dụng cảm biến, dữ liệu lớn và truy xuất nguồn gốc."], answer: 3 },
    { type: 'mcq', text: "Vườn quốc gia thuộc loại rừng nào sau đây?", options: ["Rừng đặc dụng.", "Rừng sản xuất.", "Rừng trồng thương mại.", "Rừng phòng hộ ven biển."], answer: 0 },

    // ===== PHẦN 2: 4 câu Đúng/Sai =====
    { type: 'tf', text: "Câu 1. Về biển, đảo nước ta:", options: [
        { text: "a) (Nhận biết) Hoàng Sa và Trường Sa là hai quần đảo lớn ở Biển Đông thuộc chủ quyền của Việt Nam.", answer: true },
        { text: "b) (Thông hiểu) Hệ thống đảo có vai trò quan trọng đối với an ninh, quốc phòng.", answer: true },
        { text: "c) (Vận dụng) Khai thác tài nguyên biển phải gắn với bảo vệ môi trường biển.", answer: true },
        { text: "d) (Vận dụng cao) Vùng biển và đảo không có ý nghĩa gì đối với phát triển du lịch.", answer: false }
    ]},
    { type: 'tf', text: "Câu 2. Về sông ngòi và thuỷ điện:", options: [
        { text: "a) (Nhận biết) Trên sông Đà có các nhà máy thuỷ điện lớn như Hoà Bình và Sơn La.", answer: true },
        { text: "b) (Thông hiểu) Sông ngòi miền núi có tiềm năng thuỷ điện lớn do độ dốc cao.", answer: true },
        { text: "c) (Vận dụng) Hồ thuỷ điện có thể góp phần điều tiết lũ và cung cấp nước.", answer: true },
        { text: "d) (Vận dụng cao) Thuỷ điện hoàn toàn không tác động đến dòng chảy và môi trường ở hạ lưu.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Về giao thông vận tải:", options: [
        { text: "a) (Nhận biết) Quốc lộ 1 chạy xuyên suốt chiều dài đất nước.", answer: true },
        { text: "b) (Thông hiểu) Đường sắt Thống Nhất nối Hà Nội với TP. Hồ Chí Minh.", answer: true },
        { text: "c) (Vận dụng) Phát triển cao tốc, cảng biển và sân bay tạo thuận lợi cho liên kết vùng.", answer: true },
        { text: "d) (Vận dụng cao) Giao thông vận tải không ảnh hưởng đến phát triển kinh tế của các vùng.", answer: false }
    ]},
    { type: 'tf', text: "Câu 4. Về nông nghiệp công nghệ cao và chuyển đổi số:", options: [
        { text: "a) (Nhận biết) Ứng dụng công nghệ giúp tăng năng suất cây trồng, vật nuôi.", answer: true },
        { text: "b) (Thông hiểu) Truy xuất nguồn gốc giúp tăng niềm tin của người tiêu dùng.", answer: true },
        { text: "c) (Vận dụng) Liên kết chuỗi giá trị giúp ổn định đầu ra cho nông sản.", answer: true },
        { text: "d) (Vận dụng cao) Nông nghiệp công nghệ cao không cần lao động có trình độ.", answer: false }
    ]}
];

// Đề số 7: 18 câu MCQ + 4 câu T/F
dataMocktest[7] = [
    // ===== PHẦN 1: 18 câu trắc nghiệm =====
    { type: 'mcq', text: "Đường cơ sở dùng để tính chiều rộng lãnh hải của nước ta là đường:", options: ["Biên giới quốc gia trên đất liền.", "Nối các cảng biển lớn với nhau.", "Nối các điểm nhô ra nhất của bờ biển và các đảo ven bờ.", "Bờ biển lúc triều cường cao nhất."], answer: 2 },
    { type: 'mcq', text: "Đường bờ biển nước ta dài khoảng:", options: ["2000 km.", "3260 km.", "5000 km.", "1500 km."], answer: 1 },
    { type: 'mcq', text: "Tính chất gió mùa của khí hậu nước ta thể hiện rõ nhất ở:", options: ["Nhiệt độ không thay đổi quanh năm.", "Mưa phân bố đều quanh năm.", "Không có sự phân mùa.", "Sự thay đổi hướng gió và thời tiết theo mùa."], answer: 3 },
    { type: 'mcq', text: "Tín phong bán cầu Bắc kết hợp với gió mùa Đông Bắc gây mưa lớn vào thu - đông cho:", options: ["Duyên hải miền Trung (sườn đông Trường Sơn).", "Tây Nguyên.", "Đồng bằng sông Cửu Long.", "Vùng núi Tây Bắc."], answer: 0 },
    { type: 'mcq', text: "Đồng bằng ven biển miền Trung nhỏ hẹp, bị chia cắt chủ yếu do:", options: ["Ít mưa quanh năm.", "Địa hình toàn cao nguyên.", "Núi đâm ngang ra biển, sông ngắn và dốc, ít phù sa.", "Bị bão phá huỷ hoàn toàn."], answer: 2 },
    { type: 'mcq', text: "Cao nguyên nào sau đây thuộc Tây Nguyên?", options: ["Mộc Châu.", "Lâm Viên.", "Đồng Văn.", "Tà Phình."], answer: 1 },
    { type: 'mcq', text: "Ngập úng ở Đồng bằng sông Hồng gia tăng chủ yếu do:", options: ["Mưa lớn, triều cường và hệ thống tiêu thoát nước còn hạn chế.", "Ít mưa kéo dài.", "Địa hình đồng bằng cao hơn trước.", "Sông ngòi cạn nước quanh năm."], answer: 0 },
    { type: 'mcq', text: "Nước ta có bao nhiêu dân tộc cùng sinh sống?", options: ["34.", "44.", "64.", "54."], answer: 3 },
    { type: 'mcq', text: "Các dân tộc ít người tập trung chủ yếu ở:", options: ["Các đô thị lớn.", "Vùng đồi núi và Tây Nguyên.", "Các đảo ven bờ.", "Đồng bằng ven biển."], answer: 1 },
    { type: 'mcq', text: "Gia tăng dân số tự nhiên của nước ta hiện nay có xu hướng:", options: ["Tăng nhanh.", "Rất cao.", "Giảm và ở mức thấp.", "Âm liên tục."], answer: 2 },
    { type: 'mcq', text: "Lao động nước ta hiện nay còn hạn chế chủ yếu về:", options: ["Tính cần cù.", "Khả năng tiếp thu.", "Số lượng lao động.", "Trình độ chuyên môn kĩ thuật và tác phong công nghiệp."], answer: 3 },
    { type: 'mcq', text: "Nông nghiệp nhiệt đới của nước ta có thế mạnh nổi bật là:", options: ["Đa dạng cây trồng, vật nuôi nhiệt đới.", "Chỉ trồng được cây ôn đới.", "Không phát triển được cây công nghiệp.", "Chỉ sản xuất được một vụ lúa."], answer: 0 },
    { type: 'mcq', text: "Tỉ trọng chăn nuôi tăng trong cơ cấu nông nghiệp cho thấy:", options: ["Nông nghiệp ngừng phát triển.", "Nông nghiệp đang đa dạng hoá và chuyển dịch cơ cấu.", "Trồng trọt không còn vai trò nào.", "Nhu cầu thực phẩm giảm."], answer: 1 },
    { type: 'mcq', text: "Khai thác thuỷ sản xa bờ cần đầu tư chủ yếu vào:", options: ["Thuyền thúng ven bờ.", "Lưới nhỏ ven bờ.", "Tàu thuyền lớn, trang thiết bị hiện đại.", "Ao hồ nhỏ."], answer: 2 },
    { type: 'mcq', text: "Rừng tự nhiên ở nước ta tập trung nhiều ở:", options: ["Đồng bằng châu thổ.", "Các đô thị.", "Ven biển cát.", "Vùng núi và Tây Nguyên."], answer: 3 },
    { type: 'mcq', text: "Biện pháp chủ yếu để bảo vệ rừng tự nhiên là:", options: ["Khoanh nuôi, bảo vệ nghiêm ngặt và hạn chế khai thác.", "Khai thác gỗ không giới hạn.", "Chuyển hết rừng sang đất ở.", "Đốt rừng lấy đất canh tác."], answer: 0 },
    { type: 'mcq', text: "Sản phẩm thuỷ sản nuôi chủ lực ở Đồng bằng sông Cửu Long là:", options: ["Cá hồi và cá tầm.", "Tôm và cá tra.", "Rong biển ôn đới.", "Cua hoàng đế."], answer: 1 },
    { type: 'mcq', text: "Ngập lụt do triều cường ở TP. Hồ Chí Minh gia tăng một phần do:", options: ["Thiếu mưa kéo dài.", "Dân số giảm mạnh.", "Nước biển dâng, nền đất lún và thoát nước hạn chế.", "Địa hình cao dần."], answer: 2 },

    // ===== PHẦN 2: 4 câu Đúng/Sai =====
    { type: 'tf', text: "Câu 1. Về vị trí địa lí và phạm vi lãnh thổ nước ta:", options: [
        { text: "a) (Nhận biết) Đường bờ biển của nước ta dài khoảng 3260 km.", answer: true },
        { text: "b) (Thông hiểu) Đường cơ sở là đường nối các điểm nhô ra nhất của bờ biển và các đảo ven bờ, dùng để tính chiều rộng lãnh hải.", answer: true },
        { text: "c) (Vận dụng) Vị trí gần trung tâm Đông Nam Á thuận lợi cho giao lưu với các nước trong khu vực.", answer: true },
        { text: "d) (Vận dụng cao) Vì nằm ở rìa phía đông bán đảo Đông Dương nên nước ta không có đường bờ biển.", answer: false }
    ]},
    { type: 'tf', text: "Câu 2. Về thiên nhiên nhiệt đới ẩm gió mùa:", options: [
        { text: "a) (Nhận biết) Chế độ nhiệt - ẩm thuận lợi cho cảnh quan rừng nhiệt đới ẩm phát triển.", answer: true },
        { text: "b) (Thông hiểu) Miền Bắc mưa nhiều vào mùa hạ, còn Duyên hải miền Trung mưa nhiều vào thu - đông.", answer: true },
        { text: "c) (Vận dụng) Mưa nhiều trên địa hình dốc dễ gây xói mòn và sạt lở đất.", answer: true },
        { text: "d) (Vận dụng cao) Thiên nhiên nhiệt đới ẩm gió mùa chỉ mang lại thuận lợi, không gây khó khăn nào.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Về dân cư nước ta:", options: [
        { text: "a) (Nhận biết) Việt Nam có 54 dân tộc, trong đó dân tộc Kinh đông nhất.", answer: true },
        { text: "b) (Thông hiểu) Các dân tộc ít người cư trú chủ yếu ở miền núi và Tây Nguyên.", answer: true },
        { text: "c) (Vận dụng) Gia tăng dân số tự nhiên giảm là kết quả của chính sách dân số và thay đổi nhận thức xã hội.", answer: true },
        { text: "d) (Vận dụng cao) Chất lượng lao động nước ta đã đạt mức cao và đồng đều giữa các vùng.", answer: false }
    ]},
    { type: 'tf', text: "Câu 4. Về nông nghiệp ở Đồng bằng sông Cửu Long:", options: [
        { text: "a) (Nhận biết) Đây là vùng sản xuất lúa lớn nhất cả nước.", answer: true },
        { text: "b) (Thông hiểu) Nuôi tôm, cá tra, cá basa phát triển mạnh.", answer: true },
        { text: "c) (Vận dụng) Chuyển đổi cơ cấu cây trồng, vật nuôi để thích ứng với xâm nhập mặn là xu hướng cần thiết.", answer: true },
        { text: "d) (Vận dụng cao) Chỉ cần phát triển trồng lúa, không cần đa dạng hoá sản phẩm để thích ứng biến đổi khí hậu.", answer: false }
    ]}
];

// Đề số 8: 18 câu MCQ + 4 câu T/F
dataMocktest[8] = [
    // ===== PHẦN 1: 18 câu trắc nghiệm =====
    { type: 'mcq', text: "Công nghiệp chế biến, chế tạo chiếm ưu thế trong cơ cấu công nghiệp của nước ta chủ yếu nhờ:", options: ["Thu hút đầu tư nước ngoài, thị trường lớn và lao động dồi dào.", "Trữ lượng khoáng sản vô tận.", "Không cần vốn đầu tư.", "Nằm xa thị trường thế giới."], answer: 0 },
    { type: 'mcq', text: "Công nghiệp sản xuất xi măng thường phân bố gần:", options: ["Cảng hàng không.", "Vùng nguyên liệu đá vôi.", "Vùng biển sâu.", "Vùng trồng lúa."], answer: 1 },
    { type: 'mcq', text: "Dầu thô ở nước ta được khai thác chủ yếu ở bể trầm tích nào?", options: ["Thổ Chu - Mã Lai.", "Sông Hồng.", "Nam Côn Sơn.", "Cửu Long."], answer: 3 },
    { type: 'mcq', text: "Công nghiệp dệt may phát triển thuận lợi nhờ:", options: ["Giảm sản xuất trong nước.", "Nguồn lao động dồi dào và thị trường xuất khẩu lớn.", "Không cần nguyên liệu.", "Thiếu lao động."], answer: 1 },
    { type: 'mcq', text: "Cảng nước sâu Cái Mép - Thị Vải thuộc vùng kinh tế nào?", options: ["Đồng bằng sông Hồng.", "Đông Nam Bộ.", "Bắc Trung Bộ.", "Đồng bằng sông Cửu Long."], answer: 1 },
    { type: 'mcq', text: "Đường ống ở nước ta chủ yếu vận chuyển:", options: ["Hành khách.", "Gia súc.", "Hàng rời.", "Dầu mỏ và khí."], answer: 3 },
    { type: 'mcq', text: "Nội thương phát triển mạnh nhất ở:", options: ["Vùng núi cao.", "Đảo xa bờ.", "Các đô thị lớn và vùng đông dân.", "Vùng thưa dân."], answer: 2 },
    { type: 'mcq', text: "Cơ cấu hàng xuất khẩu của nước ta chuyển dịch theo hướng:", options: ["Tăng tỉ trọng hàng công nghiệp chế biến, giảm hàng thô.", "Tăng tỉ trọng khoáng sản thô.", "Chỉ xuất khẩu nông sản.", "Không có sự thay đổi."], answer: 0 },
    { type: 'mcq', text: "Sa Pa phát triển du lịch chủ yếu nhờ:", options: ["Bãi biển dài.", "Hoang mạc rộng lớn.", "Khí hậu mát, cảnh quan núi và văn hoá các dân tộc.", "Hang động ngầm lớn."], answer: 2 },
    { type: 'mcq', text: "Phố cổ nào sau đây là di sản văn hoá thế giới ở miền Trung nước ta?", options: ["Đà Lạt.", "Phan Thiết.", "Vũng Tàu.", "Hội An."], answer: 3 },
    { type: 'mcq', text: "Đầu tư trực tiếp nước ngoài (FDI) mang lại tác động tích cực nào đối với nền kinh tế?", options: ["Giảm vốn đầu tư.", "Bổ sung vốn, chuyển giao công nghệ và tạo việc làm.", "Thu hẹp sản xuất.", "Giảm xuất khẩu."], answer: 1 },
    { type: 'mcq', text: "Hiệp định EVFTA là hiệp định thương mại tự do giữa Việt Nam và:", options: ["ASEAN.", "Hoa Kỳ.", "Liên minh châu Âu (EU).", "Nhật Bản."], answer: 2 },
    { type: 'mcq', text: "Bưu chính viễn thông nước ta phát triển theo hướng:", options: ["Số hoá, mở rộng hạ tầng Internet và mạng di động thế hệ mới.", "Thu hẹp mạng lưới.", "Chỉ dùng thư tay.", "Chỉ phục vụ nông thôn."], answer: 0 },
    { type: 'mcq', text: "Cảng hàng không quốc tế Nội Bài thuộc vùng kinh tế nào?", options: ["Bắc Trung Bộ.", "Tây Nguyên.", "Duyên hải Nam Trung Bộ.", "Đồng bằng sông Hồng."], answer: 3 },
    { type: 'mcq', text: "Công nghiệp chế biến ở Đồng bằng sông Cửu Long chủ yếu chế biến:", options: ["Than và quặng.", "Gạo, thuỷ sản và trái cây.", "Dầu thô.", "Gỗ rừng tự nhiên."], answer: 1 },
    { type: 'mcq', text: "Vì sao công nghiệp Đông Nam Bộ phát triển mạnh nhất cả nước?", options: ["Nhiều núi cao hiểm trở.", "Ít dân cư.", "Vị trí thuận lợi, lao động có trình độ, hạ tầng tốt và thu hút đầu tư lớn.", "Không có cảng biển."], answer: 2 },
    { type: 'mcq', text: "Giải pháp chủ yếu nâng cao sức cạnh tranh của hàng xuất khẩu là:", options: ["Giảm chất lượng sản phẩm.", "Chỉ bán cho một thị trường.", "Bỏ xây dựng thương hiệu.", "Nâng cao chất lượng, xây dựng thương hiệu và đa dạng hoá thị trường."], answer: 3 },
    { type: 'mcq', text: "Logistics có vai trò chủ yếu là:", options: ["Kết nối sản xuất - lưu thông, giảm chi phí và thời gian.", "Giảm hoạt động vận chuyển.", "Tăng tồn kho vô ích.", "Hạn chế thương mại."], answer: 0 },

    // ===== PHẦN 2: 4 câu Đúng/Sai =====
    { type: 'tf', text: "Câu 1. Về công nghiệp năng lượng và khai khoáng:", options: [
        { text: "a) (Nhận biết) Dầu thô được khai thác chủ yếu ở thềm lục địa phía nam.", answer: true },
        { text: "b) (Thông hiểu) Công nghiệp sản xuất xi măng gắn với vùng nguyên liệu đá vôi.", answer: true },
        { text: "c) (Vận dụng) Phát triển thuỷ điện và năng lượng tái tạo giúp giảm phụ thuộc vào nhiệt điện than.", answer: true },
        { text: "d) (Vận dụng cao) Công nghiệp khai khoáng không cần quan tâm đến tác động môi trường.", answer: false }
    ]},
    { type: 'tf', text: "Câu 2. Về giao thông vận tải và logistics:", options: [
        { text: "a) (Nhận biết) Đường biển đảm nhận phần lớn hàng hoá xuất, nhập khẩu của nước ta.", answer: true },
        { text: "b) (Thông hiểu) Đường ống chủ yếu vận chuyển dầu mỏ và khí.", answer: true },
        { text: "c) (Vận dụng) Phát triển logistics giúp giảm chi phí và thời gian vận chuyển hàng hoá.", answer: true },
        { text: "d) (Vận dụng cao) Giao thông đường sông không có vai trò gì ở Đồng bằng sông Cửu Long.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Cho bảng số liệu giả định về cơ cấu GDP của một quốc gia đang công nghiệp hoá (%): Năm 2000: ngành A (nông - lâm - thuỷ sản) 25, ngành B (công nghiệp - xây dựng) 35, ngành C (dịch vụ) 40. Năm 2020: ngành A 12, ngành B 38, ngành C 50. Nhận định sau đúng hay sai?", options: [
        { text: "a) (Nhận biết) Tỉ trọng ngành A năm 2020 thấp hơn năm 2000.", answer: true },
        { text: "b) (Thông hiểu) Tỉ trọng ngành C tăng từ 40% lên 50%.", answer: true },
        { text: "c) (Vận dụng) Tỉ trọng ngành B tăng 3 điểm phần trăm trong giai đoạn 2000 - 2020.", answer: true },
        { text: "d) (Vận dụng cao) Tỉ trọng ngành A giảm hơn 15 điểm phần trăm trong giai đoạn 2000 - 2020.", answer: false }
    ]},
    { type: 'tf', text: "Câu 4. Về thương mại, du lịch và hội nhập kinh tế:", options: [
        { text: "a) (Nhận biết) Hà Nội và TP. Hồ Chí Minh là hai trung tâm thương mại, du lịch lớn của cả nước.", answer: true },
        { text: "b) (Thông hiểu) EVFTA là hiệp định thương mại tự do giữa Việt Nam và Liên minh châu Âu.", answer: true },
        { text: "c) (Vận dụng) Đa dạng hoá thị trường xuất khẩu giúp giảm rủi ro phụ thuộc vào một thị trường.", answer: true },
        { text: "d) (Vận dụng cao) Hội nhập quốc tế khiến Việt Nam không còn cần nâng cao chất lượng hàng hoá.", answer: false }
    ]}
];

// Đề số 9: 18 câu MCQ + 4 câu T/F
dataMocktest[9] = [
    // ===== PHẦN 1: 18 câu trắc nghiệm =====
    { type: 'mcq', text: "Vùng nào có thế mạnh về thuỷ điện lớn nhất cả nước?", options: ["Đồng bằng sông Cửu Long.", "Trung du và miền núi Bắc Bộ.", "Duyên hải Nam Trung Bộ.", "Đồng bằng sông Hồng."], answer: 1 },
    { type: 'mcq', text: "Vùng núi Tây Bắc khác vùng núi Đông Bắc ở đặc điểm nào?", options: ["Địa hình thấp, hướng vòng cung.", "Có đồng bằng rộng lớn.", "Địa hình cao hơn, hiểm trở hơn, núi hướng tây bắc - đông nam.", "Không có sông lớn."], answer: 2 },
    { type: 'mcq', text: "Du lịch Đà Lạt phát triển chủ yếu nhờ:", options: ["Khí hậu mát mẻ quanh năm, cảnh quan cao nguyên.", "Bãi biển dài.", "Hoang mạc.", "Hang động caxtơ lớn."], answer: 0 },
    { type: 'mcq', text: "Mũi Cà Mau là điểm cực nào của phần đất liền nước ta?", options: ["Cực Bắc.", "Cực Đông.", "Cực Tây.", "Cực Nam."], answer: 3 },
    { type: 'mcq', text: "Các ngành kinh tế biển chủ yếu của nước ta gồm:", options: ["Chỉ trồng lúa.", "Chỉ khai thác than trên cạn.", "Khai thác, nuôi trồng thuỷ sản, du lịch biển, giao thông vận tải biển, dầu khí.", "Chỉ chăn nuôi trâu bò."], answer: 2 },
    { type: 'mcq', text: "Đảo nào sau đây thuộc vịnh Thái Lan?", options: ["Cát Bà.", "Phú Quốc.", "Lý Sơn.", "Cô Tô."], answer: 1 },
    { type: 'mcq', text: "Nước biển dâng ảnh hưởng nghiêm trọng nhất đến:", options: ["Vùng núi cao Tây Bắc.", "Đồng bằng ven biển thấp như Đồng bằng sông Cửu Long.", "Cao nguyên Tây Nguyên.", "Vùng đồi trung du."], answer: 1 },
    { type: 'mcq', text: "Sử dụng hợp lí tài nguyên nước đòi hỏi:", options: ["Tiết kiệm nước, xử lí nước thải và bảo vệ nguồn nước.", "Xả thải trực tiếp ra sông.", "Khai thác nước ngầm không kiểm soát.", "Lấp hồ, đầm để lấy đất."], answer: 0 },
    { type: 'mcq', text: "Điện mặt trời và điện gió phát triển mạnh ở:", options: ["Duyên hải Nam Trung Bộ, Tây Nguyên và ven biển Nam Bộ.", "Vùng núi cao Tây Bắc.", "Đồng bằng sông Hồng nội địa.", "Trung du Bắc Bộ."], answer: 0 },
    { type: 'mcq', text: "Quy hoạch đô thị bền vững cần chú trọng:", options: ["Mở rộng đô thị không giới hạn.", "Bỏ không gian xanh.", "Dồn toàn bộ dân cư vào khu trung tâm.", "Hạ tầng đồng bộ, cây xanh, giao thông công cộng và giảm ô nhiễm."], answer: 3 },
    { type: 'mcq', text: "Vai trò của các vùng kinh tế trọng điểm là:", options: ["Hạn chế liên kết vùng.", "Giảm đầu tư cho công nghiệp.", "Đầu tàu tăng trưởng, lan toả phát triển cho vùng lân cận.", "Chỉ phát triển nông nghiệp."], answer: 2 },
    { type: 'mcq', text: "Hệ thống đê điều lâu đời là đặc điểm nổi bật ở:", options: ["Tây Nguyên.", "Đồng bằng sông Hồng.", "Duyên hải Nam Trung Bộ.", "Đông Nam Bộ."], answer: 1 },
    { type: 'mcq', text: "Bắc Trung Bộ thường chịu gió Tây khô nóng vào đầu mùa hạ chủ yếu do:", options: ["Dãy Trường Sơn chắn gió mùa Tây Nam, tạo hiệu ứng phơn.", "Gió mùa Đông Bắc mạnh.", "Bão ngoài khơi.", "Dòng biển lạnh ven bờ."], answer: 0 },
    { type: 'mcq', text: "Mở rộng diện tích cây công nghiệp ở Tây Nguyên cần lưu ý:", options: ["Phá rừng để mở rộng nhanh.", "Dùng nước tưới không giới hạn.", "Bảo vệ rừng và sử dụng tiết kiệm nước tưới.", "Bỏ quy hoạch vùng chuyên canh."], answer: 2 },
    { type: 'mcq', text: "Biện pháp ứng phó thiên tai hiệu quả nhất là:", options: ["Bỏ qua cảnh báo.", "Xây nhà trong vùng nguy hiểm.", "Chỉ chờ cứu trợ.", "Dự báo, cảnh báo sớm, quy hoạch dân cư và nâng cao năng lực cộng đồng."], answer: 3 },
    { type: 'mcq', text: "Mô hình lúa - tôm ở Đồng bằng sông Cửu Long có ý nghĩa:", options: ["Làm tăng mặn hoàn toàn.", "Thích ứng với xâm nhập mặn và nâng cao thu nhập.", "Giảm đa dạng sinh kế.", "Chỉ có tác dụng ở miền núi."], answer: 1 },
    { type: 'mcq', text: "Ba trụ cột của phát triển bền vững là:", options: ["Quân sự, chính trị, ngoại giao.", "Thương mại, du lịch, vận tải.", "Nông nghiệp, lâm nghiệp, ngư nghiệp.", "Kinh tế, xã hội, môi trường."], answer: 3 },
    { type: 'mcq', text: "Khu dự trữ sinh quyển thế giới có rừng ngập mặn nổi tiếng gần TP. Hồ Chí Minh là:", options: ["Ba Vì.", "Tam Đảo.", "Cần Giờ.", "Bến En."], answer: 2 },

    // ===== PHẦN 2: 4 câu Đúng/Sai =====
    { type: 'tf', text: "Câu 1. Về Trung du và miền núi Bắc Bộ:", options: [
        { text: "a) (Nhận biết) Vùng có tiềm năng thuỷ điện và khoáng sản lớn.", answer: true },
        { text: "b) (Thông hiểu) Vùng gồm hai tiểu vùng là Đông Bắc và Tây Bắc.", answer: true },
        { text: "c) (Vận dụng) Vùng thuận lợi phát triển cây công nghiệp lâu năm, cây dược liệu và cây ăn quả cận nhiệt, ôn đới.", answer: true },
        { text: "d) (Vận dụng cao) Vùng có điều kiện thuận lợi nhất cả nước để trồng lúa nước thâm canh quy mô lớn.", answer: false }
    ]},
    { type: 'tf', text: "Câu 2. Về ứng phó biến đổi khí hậu và phát triển bền vững:", options: [
        { text: "a) (Nhận biết) Phát triển bền vững dựa trên ba trụ cột: kinh tế, xã hội và môi trường.", answer: true },
        { text: "b) (Thông hiểu) Phát triển năng lượng tái tạo là một giải pháp giảm phát thải khí nhà kính.", answer: true },
        { text: "c) (Vận dụng) Mô hình lúa - tôm giúp thích ứng với tình trạng xâm nhập mặn.", answer: true },
        { text: "d) (Vận dụng cao) Chỉ cần tăng trưởng kinh tế nhanh là đã đủ để bảo đảm phát triển bền vững.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Cho bảng số liệu giả định về diện tích nuôi trồng thuỷ sản của một vùng (nghìn ha): Năm 2015: 800; năm 2020: 900; năm 2023: 1000. Nhận định sau đúng hay sai?", options: [
        { text: "a) (Nhận biết) Diện tích nuôi trồng thuỷ sản năm 2023 là lớn nhất trong ba năm.", answer: true },
        { text: "b) (Thông hiểu) Diện tích nuôi trồng thuỷ sản tăng liên tục trong giai đoạn 2015 - 2023.", answer: true },
        { text: "c) (Vận dụng) Diện tích năm 2023 gấp 1,25 lần diện tích năm 2015.", answer: true },
        { text: "d) (Vận dụng cao) Diện tích năm 2020 tăng 25% so với năm 2015.", answer: false }
    ]},
    { type: 'tf', text: "Câu 4. Về biển, đảo và kinh tế biển:", options: [
        { text: "a) (Nhận biết) Phú Quốc và Cát Bà là các đảo có tiềm năng phát triển du lịch.", answer: true },
        { text: "b) (Thông hiểu) Nước biển dâng ảnh hưởng nặng đến các đồng bằng ven biển thấp.", answer: true },
        { text: "c) (Vận dụng) Khai thác hải sản cần gắn với bảo vệ nguồn lợi, nghiêm cấm đánh bắt huỷ diệt.", answer: true },
        { text: "d) (Vận dụng cao) Rừng ngập mặn ven biển không có tác dụng bảo vệ đê biển.", answer: false }
    ]}
];
