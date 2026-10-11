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

// Đề số 10: 18 câu MCQ + 4 câu T/F
dataMocktest[10] = [
    // ===== PHẦN 1: 18 câu trắc nghiệm =====
    { type: 'mcq', text: "Tính chất nhiệt đới ẩm gió mùa của địa hình nước ta thể hiện rõ ở:", options: ["Xâm thực mạnh ở vùng đồi núi, bồi tụ nhanh ở đồng bằng hạ lưu.", "Địa hình băng hà phổ biến.", "Hoang mạc hoá diễn ra mạnh.", "Núi lửa hoạt động liên tục."], answer: 0 },
    { type: 'mcq', text: "Hang Sơn Đoòng thuộc vườn quốc gia nào?", options: ["Cúc Phương.", "Bạch Mã.", "Phong Nha - Kẻ Bàng.", "Yok Đôn."], answer: 2 },
    { type: 'mcq', text: "Vùng núi cao, đồ sộ nhất nước ta là:", options: ["Đông Bắc.", "Trường Sơn Bắc.", "Trường Sơn Nam.", "Tây Bắc."], answer: 3 },
    { type: 'mcq', text: "Hai phụ lưu lớn của sông Hồng là:", options: ["Sông Mã và sông Cả.", "Sông Đà và sông Lô.", "Sông Ba và sông Đồng Nai.", "Sông Tiền và sông Hậu."], answer: 1 },
    { type: 'mcq', text: "Mùa lũ ở các sông vùng Trung Bộ thường vào:", options: ["Thu - đông.", "Mùa xuân.", "Mùa hạ.", "Quanh năm."], answer: 0 },
    { type: 'mcq', text: "Khi chảy vào nước ta, sông Mê Công tách thành hai nhánh chính là:", options: ["Sông Đà và sông Lô.", "Sông Mã và sông Chu.", "Sông Cả và sông La.", "Sông Tiền và sông Hậu."], answer: 3 },
    { type: 'mcq', text: "Dân cư tập trung đông ở đồng bằng và ven biển chủ yếu do:", options: ["Địa hình hiểm trở.", "Thiếu nguồn nước.", "Điều kiện tự nhiên thuận lợi, canh tác lúa nước và giao thông thuận tiện.", "Khí hậu khắc nghiệt."], answer: 2 },
    { type: 'mcq', text: "Vùng có mật độ dân số thấp nhất nước ta là:", options: ["Đồng bằng sông Hồng.", "Tây Nguyên.", "Đông Nam Bộ.", "Đồng bằng sông Cửu Long."], answer: 1 },
    { type: 'mcq', text: "Tập trung dân cư quá đông ở các đô thị lớn gây ra hệ quả nào?", options: ["Áp lực lên hạ tầng, nhà ở, việc làm và môi trường.", "Thừa đất ở.", "Giảm ô nhiễm.", "Hết ùn tắc giao thông."], answer: 0 },
    { type: 'mcq', text: "Cây lúa nước thích hợp với điều kiện:", options: ["Khô lạnh quanh năm.", "Đất cát hoang mạc.", "Nhiệt - ẩm cao, nhiều nước, đất phù sa.", "Núi cao băng giá."], answer: 2 },
    { type: 'mcq', text: "Cây chè phát triển thuận lợi ở vùng có điều kiện:", options: ["Khí hậu nóng khô, đất mặn.", "Khí hậu mát, mưa nhiều, đất feralit trên đồi núi.", "Đồng bằng ngập nước.", "Hoang mạc."], answer: 1 },
    { type: 'mcq', text: "Ba vụ lúa chính ở Đồng bằng sông Cửu Long là:", options: ["Vụ đông, vụ xuân, vụ mùa.", "Vụ ba, vụ bốn, vụ năm.", "Chỉ có vụ mùa.", "Đông xuân, hè thu và thu đông."], answer: 3 },
    { type: 'mcq', text: "Chăn nuôi bò sữa phát triển nhiều ở ven các đô thị lớn chủ yếu vì:", options: ["Gần thị trường tiêu thụ sữa tươi lớn.", "Thiếu đồng cỏ.", "Không cần vận chuyển.", "Không có nhu cầu về sữa."], answer: 0 },
    { type: 'mcq', text: "Nuôi trồng thuỷ sản tăng nhanh nhờ:", options: ["Giảm diện tích mặt nước.", "Mở rộng diện tích nuôi, áp dụng kĩ thuật mới và nhu cầu thị trường lớn.", "Không có thị trường tiêu thụ.", "Cạn kiệt nguồn giống."], answer: 1 },
    { type: 'mcq', text: "Làng nghề thủ công nổi tiếng của Đồng bằng sông Hồng là:", options: ["Dệt thổ cẩm Tây Nguyên.", "Làm nước mắm Phú Quốc.", "Gốm Bát Tràng, lụa Vạn Phúc.", "Đan lát Cà Mau."], answer: 2 },
    { type: 'mcq', text: "Mỏ sắt lớn ở Bắc Trung Bộ là:", options: ["Tòng Bá.", "Quỳ Hợp.", "Sinh Quyền.", "Thạch Khê."], answer: 3 },
    { type: 'mcq', text: "Bắc Trung Bộ có vị trí là cầu nối giữa:", options: ["Miền Bắc và miền Nam, giữa Việt Nam và Lào.", "Đông Nam Á và Nam Á.", "Việt Nam và Nhật Bản.", "Tây Nguyên và Đồng bằng sông Cửu Long."], answer: 0 },
    { type: 'mcq', text: "Cố đô Huế thu hút khách du lịch chủ yếu bởi loại hình:", options: ["Nghỉ dưỡng núi.", "Thể thao mạo hiểm.", "Du lịch văn hoá - lịch sử.", "Du lịch hoang mạc."], answer: 2 },

    // ===== PHẦN 2: 4 câu Đúng/Sai =====
    { type: 'tf', text: "Câu 1. Về địa hình và sông ngòi nước ta:", options: [
        { text: "a) (Nhận biết) Địa hình xâm thực diễn ra mạnh ở vùng đồi núi.", answer: true },
        { text: "b) (Thông hiểu) Sông Hồng có hai phụ lưu lớn là sông Đà và sông Lô.", answer: true },
        { text: "c) (Vận dụng) Khi chảy vào nước ta, sông Mê Công tách thành sông Tiền và sông Hậu.", answer: true },
        { text: "d) (Vận dụng cao) Sông ở Trung Bộ có lũ lên chậm và kéo dài do lưu vực rộng.", answer: false }
    ]},
    { type: 'tf', text: "Câu 2. Về phân bố dân cư nước ta:", options: [
        { text: "a) (Nhận biết) Dân cư tập trung đông ở đồng bằng và ven biển.", answer: true },
        { text: "b) (Thông hiểu) Tây Nguyên có mật độ dân số thấp so với cả nước.", answer: true },
        { text: "c) (Vận dụng) Công nghiệp và dịch vụ phát triển ở đô thị thu hút di cư lao động.", answer: true },
        { text: "d) (Vận dụng cao) Phân bố lại dân cư hợp lí không cần gắn với phân bố lao động và việc làm.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Về cây lương thực và cây công nghiệp:", options: [
        { text: "a) (Nhận biết) Lúa nước thích hợp với điều kiện nhiệt - ẩm cao và đất phù sa.", answer: true },
        { text: "b) (Thông hiểu) Chè được trồng nhiều ở vùng đồi núi có khí hậu mát.", answer: true },
        { text: "c) (Vận dụng) Vùng chuyên canh gắn với công nghiệp chế biến giúp nâng cao giá trị nông sản.", answer: true },
        { text: "d) (Vận dụng cao) Cây công nghiệp lâu năm có chu kì kinh doanh ngắn, hoàn vốn nhanh như cây hằng năm.", answer: false }
    ]},
    { type: 'tf', text: "Câu 4. Cho bảng số liệu giả định về lúa của một vùng: Năm 2010: sản lượng 20,0 triệu tấn, diện tích gieo trồng 4,0 triệu ha. Năm 2020: sản lượng 24,0 triệu tấn, diện tích gieo trồng 3,0 triệu ha. Nhận định sau đúng hay sai?", options: [
        { text: "a) (Nhận biết) Sản lượng lúa năm 2020 cao hơn năm 2010.", answer: true },
        { text: "b) (Thông hiểu) Diện tích gieo trồng lúa năm 2020 thấp hơn năm 2010.", answer: true },
        { text: "c) (Vận dụng) Năng suất lúa năm 2020 là 8,0 tấn/ha.", answer: true },
        { text: "d) (Vận dụng cao) Năng suất lúa năm 2020 tăng 50% so với năm 2010.", answer: false }
    ]}
];

// Đề số 11: 18 câu MCQ + 4 câu T/F
dataMocktest[11] = [
    // ===== PHẦN 1: 18 câu trắc nghiệm =====
    { type: 'mcq', text: "Công nghiệp luyện kim đen ở nước ta phát triển còn hạn chế chủ yếu do:", options: ["Thiếu lao động.", "Không có thị trường.", "Thiếu điện hoàn toàn.", "Thiếu vốn, công nghệ và nguồn nguyên liệu, nhiên liệu trong nước còn hạn chế."], answer: 3 },
    { type: 'mcq', text: "Trung tâm công nghiệp nào sau đây thuộc Đồng bằng sông Hồng?", options: ["Biên Hoà.", "Hải Phòng.", "Vũng Tàu.", "Cần Thơ."], answer: 1 },
    { type: 'mcq', text: "Trung tâm công nghiệp lớn nhất của Đồng bằng sông Cửu Long là:", options: ["Biên Hoà.", "Thủ Dầu Một.", "Vũng Tàu.", "Cần Thơ."], answer: 3 },
    { type: 'mcq', text: "Hồ thuỷ điện Trị An thuộc vùng kinh tế nào?", options: ["Đông Nam Bộ.", "Tây Nguyên.", "Bắc Trung Bộ.", "Trung du và miền núi Bắc Bộ."], answer: 0 },
    { type: 'mcq', text: "Khai thác bô-xit ở Tây Nguyên cần đặc biệt chú ý đến:", options: ["Phá rừng để mở rộng nhanh.", "Xả thải trực tiếp ra sông.", "Bảo vệ rừng, nguồn nước và môi trường.", "Bỏ qua quy hoạch."], answer: 2 },
    { type: 'mcq', text: "Dịch vụ logistics tập trung nhiều ở:", options: ["Vùng núi cao hẻo lánh.", "Các vùng có cảng biển và đô thị lớn như Đông Nam Bộ, Đồng bằng sông Hồng.", "Hải đảo xa bờ.", "Vùng thưa dân."], answer: 1 },
    { type: 'mcq', text: "Du lịch cộng đồng ở các bản làng miền núi dựa chủ yếu vào:", options: ["Công nghiệp nặng.", "Khai thác khoáng sản.", "Văn hoá, ẩm thực, sinh hoạt bản địa và cảnh quan.", "Vận tải biển."], answer: 2 },
    { type: 'mcq', text: "Tuyến cao tốc Bắc - Nam phía Đông góp phần:", options: ["Giảm thời gian vận chuyển và tăng liên kết vùng.", "Giảm lưu thông hàng hoá.", "Thu hẹp thị trường.", "Tăng chi phí logistics."], answer: 0 },
    { type: 'mcq', text: "Cửa khẩu quốc tế Móng Cái thuộc tỉnh nào?", options: ["Lạng Sơn.", "Cao Bằng.", "Lào Cai.", "Quảng Ninh."], answer: 3 },
    { type: 'mcq', text: "Nông nghiệp Đông Nam Bộ có đặc điểm nổi bật là:", options: ["Chuyên canh cây công nghiệp lâu năm, cây ăn quả và chăn nuôi.", "Trồng lúa mì.", "Nuôi bò sữa ôn đới.", "Trồng chè ôn đới."], answer: 0 },
    { type: 'mcq', text: "Tây Nguyên và Đông Nam Bộ gắn bó kinh tế chặt chẽ nhờ:", options: ["Không có giao thông kết nối.", "Cung cấp nguyên liệu cây công nghiệp, lao động và tiêu thụ sản phẩm cho nhau.", "Cùng giáp biển.", "Cùng có đồng bằng châu thổ."], answer: 1 },
    { type: 'mcq', text: "Khu kinh tế ven biển có chức năng chủ yếu là:", options: ["Chỉ phục vụ nông nghiệp.", "Thu hút đầu tư, phát triển công nghiệp, cảng biển và dịch vụ.", "Chỉ bảo tồn rừng.", "Chỉ sản xuất muối."], answer: 1 },
    { type: 'mcq', text: "Ngành thuỷ sản nước ta đang chuyển hướng sang:", options: ["Chỉ khai thác ven bờ.", "Chỉ nuôi nhỏ lẻ.", "Kết hợp khai thác bền vững và nuôi trồng quy mô lớn.", "Bỏ chế biến."], answer: 2 },
    { type: 'mcq', text: "Cây cao su ở Đông Nam Bộ thuận lợi nhờ:", options: ["Đất xám, đất badan; khí hậu nóng ẩm, ít bão.", "Khí hậu lạnh.", "Đất mặn.", "Địa hình núi cao."], answer: 0 },
    { type: 'mcq', text: "Cây điều tập trung nhiều nhất ở vùng:", options: ["Đồng bằng sông Hồng.", "Bắc Trung Bộ.", "Đông Nam Bộ.", "Tây Bắc."], answer: 2 },
    { type: 'mcq', text: "Chợ nổi Cái Răng thuộc thành phố nào?", options: ["Cà Mau.", "Bến Tre.", "Mỹ Tho.", "Cần Thơ."], answer: 3 },
    { type: 'mcq', text: "Phát triển điện gió, điện mặt trời ở Ninh Thuận, Bình Thuận chủ yếu dựa vào:", options: ["Số giờ nắng nhiều và gió mạnh.", "Mưa lớn quanh năm.", "Rừng rậm.", "Băng tuyết."], answer: 0 },
    { type: 'mcq', text: "Giải pháp giảm ô nhiễm không khí ở đô thị là:", options: ["Tăng số lượng xe cá nhân.", "Giảm cây xanh.", "Phát triển giao thông công cộng, kiểm soát khí thải và tăng cây xanh.", "Đốt rác ngoài trời."], answer: 2 },

    // ===== PHẦN 2: 4 câu Đúng/Sai =====
    { type: 'tf', text: "Câu 1. Về công nghiệp luyện kim và công nghiệp nặng:", options: [
        { text: "a) (Nhận biết) Công nghiệp luyện kim đen cần nhiều vốn, công nghệ và nguyên liệu.", answer: true },
        { text: "b) (Thông hiểu) Nhà máy luyện thép thường gắn với nguồn nguyên liệu, nhiên liệu hoặc cảng biển.", answer: true },
        { text: "c) (Vận dụng) Mỏ sắt Thạch Khê có trữ lượng lớn nhưng việc khai thác còn gặp nhiều khó khăn.", answer: true },
        { text: "d) (Vận dụng cao) Nước ta đã tự túc hoàn toàn nguyên liệu cho ngành luyện kim.", answer: false }
    ]},
    { type: 'tf', text: "Câu 2. Về Đông Nam Bộ và Tây Nguyên:", options: [
        { text: "a) (Nhận biết) Đông Nam Bộ là vùng trồng nhiều cao su, điều và hồ tiêu.", answer: true },
        { text: "b) (Thông hiểu) Tây Nguyên có diện tích cà phê lớn.", answer: true },
        { text: "c) (Vận dụng) Hai vùng có mối liên hệ chặt chẽ về nguyên liệu, lao động và thị trường.", answer: true },
        { text: "d) (Vận dụng cao) Tây Nguyên có hệ thống cảng biển lớn nhất cả nước.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Về du lịch nước ta:", options: [
        { text: "a) (Nhận biết) Du lịch cộng đồng dựa vào văn hoá và sinh hoạt bản địa.", answer: true },
        { text: "b) (Thông hiểu) Huế và Hội An là những điểm đến di sản văn hoá nổi tiếng.", answer: true },
        { text: "c) (Vận dụng) Phát triển du lịch cần cân bằng lợi ích kinh tế với bảo tồn văn hoá và môi trường.", answer: true },
        { text: "d) (Vận dụng cao) Du lịch không cần bảo tồn văn hoá vì chỉ cần tối đa hoá lợi nhuận.", answer: false }
    ]},
    { type: 'tf', text: "Câu 4. Cho bảng số liệu giả định về kim ngạch xuất khẩu của một nước (tỉ USD): Năm 2018: tổng 240, trong đó hàng công nghiệp chế biến 192. Năm 2022: tổng 370, trong đó hàng công nghiệp chế biến 315. Nhận định sau đúng hay sai?", options: [
        { text: "a) (Nhận biết) Tổng kim ngạch xuất khẩu năm 2022 lớn hơn năm 2018.", answer: true },
        { text: "b) (Thông hiểu) Tỉ trọng hàng công nghiệp chế biến năm 2018 là 80%.", answer: true },
        { text: "c) (Vận dụng) Tỉ trọng hàng công nghiệp chế biến năm 2022 cao hơn năm 2018.", answer: true },
        { text: "d) (Vận dụng cao) Tổng kim ngạch xuất khẩu năm 2022 gấp hơn 2 lần năm 2018.", answer: false }
    ]}
];

// Đề số 12: 18 câu MCQ + 4 câu T/F
dataMocktest[12] = [
    // ===== PHẦN 1: 18 câu trắc nghiệm =====
    { type: 'mcq', text: "Việt Nam thuận lợi phát triển cảng biển chủ yếu do:", options: ["Đường bờ biển dài, nhiều vũng vịnh kín gió, gần tuyến hàng hải quốc tế.", "Bờ biển thẳng, không có vịnh.", "Nằm xa biển.", "Không có sông lớn."], answer: 0 },
    { type: 'mcq', text: "Xâm nhập mặn ở Đồng bằng sông Cửu Long thường cao điểm vào:", options: ["Mùa mưa lũ.", "Mùa khô (khoảng tháng 12 đến tháng 4).", "Mùa xuân ẩm.", "Quanh năm như nhau."], answer: 1 },
    { type: 'mcq', text: "Gió mùa Đông Bắc suy yếu dần khi đi về phía nam chủ yếu do:", options: ["Nhiệt độ miền Nam thấp.", "Có nhiều hồ lớn.", "Dãy Bạch Mã và khoảng cách xa trung tâm phát sinh gió.", "Địa hình toàn đồng bằng."], answer: 2 },
    { type: 'mcq', text: "Hiện tượng El Niño thường gây ra ở nước ta:", options: ["Mưa lớn kéo dài, lũ lụt.", "Rét đậm kéo dài.", "Nắng nóng, hạn hán, thiếu nước, xâm nhập mặn.", "Tuyết rơi."], answer: 2 },
    { type: 'mcq', text: "Hiện tượng La Niña thường làm cho nước ta:", options: ["Hạn hán nghiêm trọng.", "Mưa nhiều, bão và lũ lụt có xu hướng gia tăng.", "Không có mưa.", "Nóng như hoang mạc."], answer: 1 },
    { type: 'mcq', text: "Độ che phủ rừng là tỉ lệ giữa:", options: ["Diện tích rừng và dân số.", "Diện tích đất nông nghiệp và diện tích rừng.", "Sản lượng gỗ và diện tích rừng.", "Diện tích rừng và diện tích đất tự nhiên."], answer: 3 },
    { type: 'mcq', text: "Bình quân diện tích đất nông nghiệp theo đầu người thấp gây khó khăn chủ yếu cho:", options: ["Phát triển du lịch biển.", "Khai thác dầu khí.", "Mở rộng quy mô sản xuất và cơ giới hoá nông nghiệp.", "Xây dựng cảng biển."], answer: 2 },
    { type: 'mcq', text: "Công nghiệp hỗ trợ có vai trò chủ yếu là:", options: ["Cung cấp linh kiện, nguyên phụ liệu cho các ngành công nghiệp chính.", "Thay thế hoàn toàn công nghiệp chính.", "Chỉ phục vụ nông nghiệp.", "Giảm năng suất lao động."], answer: 0 },
    { type: 'mcq', text: "Tham gia chuỗi giá trị toàn cầu đòi hỏi doanh nghiệp phải:", options: ["Hạ thấp tiêu chuẩn.", "Bỏ qua yêu cầu kĩ thuật.", "Chỉ bán trong nội địa.", "Đáp ứng tiêu chuẩn chất lượng và có lao động tay nghề cao."], answer: 3 },
    { type: 'mcq', text: "Mục tiêu của phát triển kinh tế biển xanh là:", options: ["Khai thác cạn kiệt hải sản.", "Khai thác bền vững, giảm ô nhiễm và bảo vệ hệ sinh thái biển.", "Xả thải ra biển.", "Ngừng mọi hoạt động trên biển."], answer: 1 },
    { type: 'mcq', text: "Kinh tế số tác động mạnh nhất đến lĩnh vực dịch vụ thông qua:", options: ["Giảm sử dụng Internet.", "Hạn chế giao dịch trực tuyến.", "Tăng chi phí giao dịch.", "Thương mại điện tử và thanh toán không dùng tiền mặt."], answer: 3 },
    { type: 'mcq', text: "Vịnh nước sâu nổi tiếng ở Nam Trung Bộ, thuận lợi xây dựng cảng là:", options: ["Hạ Long.", "Vân Phong.", "Bái Tử Long.", "Rạch Giá."], answer: 1 },
    { type: 'mcq', text: "Vấn đề cấp thiết nhất đối với nông nghiệp ở Đồng bằng sông Cửu Long hiện nay là:", options: ["Thích ứng biến đổi khí hậu, xâm nhập mặn và sạt lở.", "Thiếu nhiệt độ.", "Thiếu đất phù sa tuyệt đối.", "Không có kênh rạch."], answer: 0 },
    { type: 'mcq', text: "Mất rừng ở Tây Nguyên dẫn tới hệ quả nào sau đây?", options: ["Tăng đa dạng sinh học.", "Suy giảm nguồn nước, đa dạng sinh học và gia tăng xói mòn.", "Giảm thiên tai.", "Tăng độ phì tự nhiên."], answer: 1 },
    { type: 'mcq', text: "Giải pháp phát triển bền vững ở vùng núi là:", options: ["Chặt phá rừng lấy đất.", "Du canh du cư.", "Giao đất giao rừng, phát triển sinh kế bền vững và trồng rừng.", "Bỏ quy hoạch."], answer: 2 },
    { type: 'mcq', text: "Tăng cường liên kết vùng nhằm:", options: ["Phát huy lợi thế, tránh trùng lặp và nâng cao hiệu quả.", "Tăng trùng lặp ngành nghề.", "Hạn chế trao đổi.", "Đóng cửa thị trường."], answer: 0 },
    { type: 'mcq', text: "Đô thị thông minh có đặc điểm nổi bật là:", options: ["Quản lí thủ công hoàn toàn.", "Không dùng dữ liệu.", "Hạn chế kết nối.", "Ứng dụng công nghệ số trong quản lí giao thông, môi trường và dịch vụ công."], answer: 3 },
    { type: 'mcq', text: "Ý nghĩa lớn nhất của bảo tồn đa dạng sinh học là:", options: ["Giảm nguồn gen.", "Tăng ô nhiễm.", "Duy trì cân bằng sinh thái và nguồn gen cho phát triển lâu dài.", "Giảm diện tích rừng."], answer: 2 },

    // ===== PHẦN 2: 4 câu Đúng/Sai =====
    { type: 'tf', text: "Câu 1. Về các hiện tượng khí hậu cực đoan:", options: [
        { text: "a) (Nhận biết) El Niño thường liên quan đến hạn hán và thiếu nước.", answer: true },
        { text: "b) (Thông hiểu) La Niña thường kéo theo mưa nhiều và nguy cơ lũ lụt.", answer: true },
        { text: "c) (Vận dụng) Xâm nhập mặn ở Đồng bằng sông Cửu Long cao điểm vào mùa khô.", answer: true },
        { text: "d) (Vận dụng cao) El Niño chỉ ảnh hưởng đến khí hậu mà không tác động đến sản xuất nông nghiệp.", answer: false }
    ]},
    { type: 'tf', text: "Câu 2. Về công nghiệp hỗ trợ và chuỗi giá trị:", options: [
        { text: "a) (Nhận biết) Công nghiệp hỗ trợ cung cấp linh kiện, nguyên phụ liệu cho công nghiệp chính.", answer: true },
        { text: "b) (Thông hiểu) Tham gia chuỗi giá trị toàn cầu đòi hỏi tiêu chuẩn kĩ thuật và chất lượng cao.", answer: true },
        { text: "c) (Vận dụng) Phát triển công nghiệp hỗ trợ giúp giảm phụ thuộc vào linh kiện nhập khẩu.", answer: true },
        { text: "d) (Vận dụng cao) Chỉ gia công đơn giản luôn mang lại giá trị gia tăng cao nhất.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Về đô thị và kinh tế số:", options: [
        { text: "a) (Nhận biết) Thương mại điện tử và thanh toán số phát triển nhờ hạ tầng Internet.", answer: true },
        { text: "b) (Thông hiểu) Đô thị thông minh ứng dụng công nghệ số trong quản lí và vận hành.", answer: true },
        { text: "c) (Vận dụng) Chuyển đổi số có thể giúp giảm chi phí giao dịch.", answer: true },
        { text: "d) (Vận dụng cao) Chuyển đổi số chỉ có lợi cho đô thị, không mang lại lợi ích gì cho nông thôn.", answer: false }
    ]},
    { type: 'tf', text: "Câu 4. Cho bảng số liệu giả định về rừng của hai vùng M và N: Vùng M có diện tích tự nhiên 5,0 triệu ha, diện tích rừng 2,5 triệu ha. Vùng N có diện tích tự nhiên 2,0 triệu ha, diện tích rừng 0,5 triệu ha. Nhận định sau đúng hay sai?", options: [
        { text: "a) (Nhận biết) Diện tích rừng của vùng M lớn hơn vùng N.", answer: true },
        { text: "b) (Thông hiểu) Độ che phủ rừng của vùng M là 50%.", answer: true },
        { text: "c) (Vận dụng) Độ che phủ rừng của vùng M cao gấp 2 lần vùng N.", answer: true },
        { text: "d) (Vận dụng cao) Tổng diện tích rừng của hai vùng chiếm 50% tổng diện tích tự nhiên của hai vùng.", answer: false }
    ]}
];

// Đề số 13: 18 câu MCQ + 4 câu T/F
dataMocktest[13] = [
    // ===== PHẦN 1: 18 câu trắc nghiệm =====
    { type: 'mcq', text: "Trong vùng đặc quyền kinh tế, nước ta có quyền chủ quyền về:", options: ["Chỉ quyền đi lại tự do, không được khai thác.", "Thăm dò, khai thác, bảo vệ và quản lí tài nguyên thiên nhiên.", "Cấm mọi tàu thuyền nước ngoài đi qua.", "Không có quyền nào."], answer: 1 },
    { type: 'mcq', text: "Các hệ sinh thái ven biển phổ biến ở nước ta là:", options: ["Rừng ngập mặn, rạn san hô, thảm cỏ biển.", "Hoang mạc, thảo nguyên, băng hà.", "Rừng lá kim, đài nguyên.", "Xavan khô hạn."], answer: 0 },
    { type: 'mcq', text: "Phần lãnh thổ phía Nam của nước ta có khí hậu:", options: ["Ôn đới gió mùa.", "Hàn đới.", "Cận xích đạo gió mùa.", "Hoang mạc."], answer: 2 },
    { type: 'mcq', text: "Nhiệt độ trung bình năm cao nhất thường ở:", options: ["Vùng núi Hoàng Liên Sơn.", "Vùng núi Đông Bắc.", "Cao nguyên Mộc Châu.", "Đồng bằng Nam Bộ."], answer: 3 },
    { type: 'mcq', text: "Lượng mưa trung bình năm lớn thường gặp ở:", options: ["Sườn đón gió của các khối núi cao.", "Thung lũng khuất gió.", "Vùng nội địa sâu, khuất gió.", "Vùng hoang mạc."], answer: 0 },
    { type: 'mcq', text: "Lao động nước ta tập trung nhiều nhất ở khu vực kinh tế:", options: ["Nhà nước.", "Ngoài Nhà nước.", "Có vốn đầu tư nước ngoài.", "Liên doanh nước ngoài."], answer: 1 },
    { type: 'mcq', text: "Tỉ lệ lao động qua đào tạo tăng chủ yếu nhờ:", options: ["Giảm đầu tư giáo dục.", "Hạn chế đào tạo nghề.", "Mở rộng đào tạo nghề, giáo dục và nhu cầu của thị trường lao động.", "Giảm nhu cầu tuyển dụng."], answer: 2 },
    { type: 'mcq', text: "Việc đẩy mạnh xuất khẩu lao động nhằm mục đích chính là:", options: ["Tăng số người thất nghiệp.", "Giảm thu nhập.", "Giảm đầu tư giáo dục.", "Giải quyết việc làm, tăng thu nhập, nâng cao tay nghề."], answer: 3 },
    { type: 'mcq', text: "Cây trồng nào sau đây thuộc nhóm cây công nghiệp hằng năm?", options: ["Mía.", "Cà phê.", "Cao su.", "Hồ tiêu."], answer: 0 },
    { type: 'mcq', text: "Cây ăn quả cận nhiệt là đặc sản của vùng núi Tây Bắc là:", options: ["Sầu riêng.", "Mận, đào, lê.", "Chôm chôm.", "Dừa."], answer: 1 },
    { type: 'mcq', text: "Mô hình nông - lâm kết hợp ở miền núi có lợi ích:", options: ["Làm tăng xói mòn đất.", "Giảm độ che phủ rừng.", "Bảo vệ đất, tăng thu nhập và duy trì độ che phủ rừng.", "Giảm đa dạng sinh kế."], answer: 2 },
    { type: 'mcq', text: "Công nghiệp chế biến thuỷ sản tập trung nhiều ở:", options: ["Vùng núi cao.", "Vùng thưa dân nội địa.", "Vùng hoang mạc.", "Đồng bằng sông Cửu Long và Duyên hải."], answer: 3 },
    { type: 'mcq', text: "Công nghiệp cơ khí - điện tử thường tập trung ở các đô thị lớn vì:", options: ["Gần thị trường, có lao động kĩ thuật và hạ tầng tốt.", "Thiếu lao động.", "Thiếu hạ tầng.", "Xa thị trường."], answer: 0 },
    { type: 'mcq', text: "Cảng hàng không quốc tế lớn nhất ở miền Trung là:", options: ["Phú Bài.", "Đà Nẵng.", "Cam Ranh.", "Phù Cát."], answer: 1 },
    { type: 'mcq', text: "Phát triển giao thông công cộng ở đô thị lớn nhằm:", options: ["Tăng ùn tắc.", "Tăng ô nhiễm.", "Giảm ùn tắc, giảm ô nhiễm và nâng cao chất lượng cuộc sống.", "Giảm nhu cầu đi lại."], answer: 2 },
    { type: 'mcq', text: "Quần thể danh thắng Tràng An thuộc tỉnh nào?", options: ["Quảng Ninh.", "Thanh Hoá.", "Hà Tĩnh.", "Ninh Bình."], answer: 3 },
    { type: 'mcq', text: "Để thu hút đầu tư vào Tây Nguyên, cơ sở hạ tầng cần ưu tiên là:", options: ["Giảm số lượng đường giao thông.", "Hệ thống giao thông kết nối với các vùng và cảng biển.", "Bỏ điện lưới.", "Bỏ viễn thông."], answer: 1 },
    { type: 'mcq', text: "Yếu tố then chốt thúc đẩy chuyển dịch cơ cấu kinh tế theo hướng hiện đại là:", options: ["Giảm đầu tư nghiên cứu.", "Hạn chế công nghệ.", "Ứng dụng khoa học - công nghệ và đổi mới sáng tạo.", "Bảo hộ tuyệt đối thị trường."], answer: 2 },

    // ===== PHẦN 2: 4 câu Đúng/Sai =====
    { type: 'tf', text: "Câu 1. Về vùng biển và hệ sinh thái ven biển:", options: [
        { text: "a) (Nhận biết) Trong vùng đặc quyền kinh tế, nước ta có quyền chủ quyền về thăm dò, khai thác và quản lí tài nguyên.", answer: true },
        { text: "b) (Thông hiểu) Rừng ngập mặn và rạn san hô là các hệ sinh thái ven biển quan trọng.", answer: true },
        { text: "c) (Vận dụng) Rạn san hô là nơi cư trú và sinh sản của nhiều loài hải sản.", answer: true },
        { text: "d) (Vận dụng cao) Phá rừng ngập mặn để nuôi tôm không ảnh hưởng đến khả năng bảo vệ bờ biển.", answer: false }
    ]},
    { type: 'tf', text: "Câu 2. Về khí hậu nước ta:", options: [
        { text: "a) (Nhận biết) Phần lãnh thổ phía Nam có khí hậu cận xích đạo gió mùa.", answer: true },
        { text: "b) (Thông hiểu) Sườn đón gió của các khối núi cao thường có lượng mưa lớn hơn.", answer: true },
        { text: "c) (Vận dụng) Nam Bộ có nền nhiệt cao quanh năm và biên độ nhiệt năm nhỏ.", answer: true },
        { text: "d) (Vận dụng cao) Vùng núi Hoàng Liên Sơn có nhiệt độ trung bình năm cao hơn đồng bằng Nam Bộ.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Về lao động nước ta:", options: [
        { text: "a) (Nhận biết) Lao động nước ta tập trung nhiều nhất ở khu vực ngoài Nhà nước.", answer: true },
        { text: "b) (Thông hiểu) Tỉ lệ lao động qua đào tạo có xu hướng tăng.", answer: true },
        { text: "c) (Vận dụng) Xuất khẩu lao động góp phần giải quyết việc làm và nâng cao tay nghề.", answer: true },
        { text: "d) (Vận dụng cao) Nước ta đã hết tình trạng thiếu lao động chất lượng cao.", answer: false }
    ]},
    { type: 'tf', text: "Câu 4. Cho bảng số liệu giả định về dân số (triệu người) của một vùng: Năm 2015: tổng số 18,0, thành thị 8,1. Năm 2022: tổng số 20,0, thành thị 10,0. Nhận định sau đúng hay sai?", options: [
        { text: "a) (Nhận biết) Dân số của vùng năm 2022 lớn hơn năm 2015.", answer: true },
        { text: "b) (Thông hiểu) Tỉ lệ dân thành thị năm 2015 là 45%.", answer: true },
        { text: "c) (Vận dụng) Tỉ lệ dân thành thị năm 2022 là 50%.", answer: true },
        { text: "d) (Vận dụng cao) Dân số thành thị tăng thêm 3,0 triệu người trong giai đoạn 2015 - 2022.", answer: false }
    ]}
];

// Đề số 14: 18 câu MCQ + 4 câu T/F
dataMocktest[14] = [
    // ===== PHẦN 1: 18 câu trắc nghiệm =====
    { type: 'mcq', text: "Vùng nào sau đây có đường biên giới trên đất liền với cả Trung Quốc và Lào?", options: ["Bắc Trung Bộ.", "Trung du và miền núi Bắc Bộ.", "Đồng bằng sông Hồng.", "Tây Nguyên."], answer: 1 },
    { type: 'mcq', text: "Cửa khẩu quốc tế Lao Bảo nằm trên biên giới Việt Nam với:", options: ["Lào.", "Trung Quốc.", "Cam-pu-chia.", "Thái Lan."], answer: 0 },
    { type: 'mcq', text: "Vùng nào sau đây giáp cả Lào và Cam-pu-chia?", options: ["Bắc Trung Bộ.", "Đông Nam Bộ.", "Tây Nguyên.", "Đồng bằng sông Cửu Long."], answer: 2 },
    { type: 'mcq', text: "Tiểu vùng nào của Trung du và miền núi Bắc Bộ có thế mạnh khai thác than?", options: ["Tây Bắc.", "Đồng bằng ven biển.", "Cao nguyên Tây Nguyên.", "Đông Bắc."], answer: 3 },
    { type: 'mcq', text: "Thế mạnh nổi bật của tiểu vùng Tây Bắc là:", options: ["Công nghiệp ô tô.", "Thuỷ điện, chăn nuôi gia súc, lâm nghiệp và du lịch.", "Nuôi tôm quy mô lớn.", "Khai thác dầu khí."], answer: 1 },
    { type: 'mcq', text: "Đánh bắt và nuôi trồng thuỷ sản ở Duyên hải Nam Trung Bộ thuận lợi nhờ:", options: ["Bờ biển dài, nhiều vũng vịnh và ngư trường lớn.", "Không có đường bờ biển.", "Thiếu nước mặn.", "Địa hình toàn núi cao."], answer: 0 },
    { type: 'mcq', text: "Thiên tai gây khó khăn thường xuyên cho Bắc Trung Bộ là:", options: ["Tuyết rơi.", "Động đất mạnh thường xuyên.", "Bão, lũ, hạn hán và gió Tây khô nóng.", "Sóng thần hằng năm."], answer: 2 },
    { type: 'mcq', text: "Đa dạng hoá cơ cấu cây trồng ở Tây Nguyên nhằm:", options: ["Giảm rủi ro thị trường, nâng cao giá trị và bảo vệ đất.", "Chỉ trồng một loại cây.", "Giảm thu nhập.", "Tăng phá rừng."], answer: 0 },
    { type: 'mcq', text: "Tây Nguyên có tiềm năng thuỷ điện lớn nhờ:", options: ["Sông ngòi cạn nước quanh năm.", "Địa hình bằng phẳng.", "Ít mưa quanh năm.", "Sông có độ dốc lớn, lưu lượng nước dồi dào trên cao nguyên."], answer: 3 },
    { type: 'mcq', text: "Lợi thế nổi bật về vị trí của Đông Nam Bộ là:", options: ["Nằm sâu nội địa, xa biển.", "Xa các tuyến hàng hải quốc tế.", "Giáp Tây Nguyên, Duyên hải và Đồng bằng sông Cửu Long, có cửa ngõ ra Biển Đông.", "Không giáp vùng nào."], answer: 2 },
    { type: 'mcq', text: "Hồ Dầu Tiếng ở Đông Nam Bộ có vai trò chủ yếu là:", options: ["Làm giảm mực nước ngầm.", "Cung cấp nước tưới, điều tiết nước và nuôi trồng thuỷ sản.", "Chỉ để khai thác than.", "Gây khô hạn."], answer: 1 },
    { type: 'mcq', text: "Địa hình Đồng bằng sông Cửu Long có đặc điểm nổi bật là:", options: ["Thấp, bằng phẳng, nhiều vùng trũng và kênh rạch chằng chịt.", "Cao, nhiều đồi núi.", "Có nhiều hang động caxtơ.", "Có nhiều núi lửa."], answer: 0 },
    { type: 'mcq', text: "Rừng ở Đồng bằng sông Cửu Long chủ yếu là:", options: ["Rừng lá kim ôn đới.", "Rừng thưa khô hạn.", "Rừng ngập mặn và rừng tràm.", "Rừng ôn đới núi cao."], answer: 2 },
    { type: 'mcq', text: "Hạn chế lớn của Duyên hải Nam Trung Bộ là:", options: ["Đồng bằng rộng, đất rất màu mỡ.", "Ít thiên tai.", "Nguồn nước dồi dào quanh năm.", "Đồng bằng nhỏ hẹp, đất kém màu mỡ và thiên tai thường xuyên."], answer: 3 },
    { type: 'mcq', text: "Trung du và miền núi Bắc Bộ thuận lợi nuôi trâu, bò chủ yếu nhờ:", options: ["Không có đồng cỏ.", "Nhiều đồng cỏ trên đồi núi và cao nguyên.", "Thiếu thức ăn.", "Khí hậu hoang mạc."], answer: 1 },
    { type: 'mcq', text: "Du lịch ở Bắc Trung Bộ phát triển dựa vào:", options: ["Hoang mạc và băng tuyết.", "Chỉ khai thác khoáng sản.", "Bãi biển, di sản, hang động và giá trị văn hoá - lịch sử.", "Núi lửa hoạt động."], answer: 2 },
    { type: 'mcq', text: "Hoạt động làm tăng giá trị nông sản ở Tây Nguyên là:", options: ["Bán nguyên liệu thô.", "Bỏ chế biến.", "Giảm chất lượng.", "Chế biến sâu và xây dựng thương hiệu."], answer: 3 },
    { type: 'mcq', text: "Vì sao Đồng bằng sông Cửu Long cần chuyển đổi mô hình sản xuất?", options: ["Để thích ứng biến đổi khí hậu và nhu cầu thị trường.", "Vì không có đất.", "Vì hoàn toàn thiếu lao động.", "Vì không có sông."], answer: 0 },

    // ===== PHẦN 2: 4 câu Đúng/Sai =====
    { type: 'tf', text: "Câu 1. Về vị trí biên giới của các vùng:", options: [
        { text: "a) (Nhận biết) Trung du và miền núi Bắc Bộ có biên giới với Trung Quốc và Lào.", answer: true },
        { text: "b) (Thông hiểu) Tây Nguyên có biên giới với Lào và Cam-pu-chia.", answer: true },
        { text: "c) (Vận dụng) Vị trí giáp biên giới tạo điều kiện phát triển kinh tế cửa khẩu.", answer: true },
        { text: "d) (Vận dụng cao) Tây Nguyên có đường bờ biển dài, thuận lợi phát triển kinh tế biển.", answer: false }
    ]},
    { type: 'tf', text: "Câu 2. Về Trung du và miền núi Bắc Bộ:", options: [
        { text: "a) (Nhận biết) Tiểu vùng Đông Bắc có bể than lớn ở Quảng Ninh.", answer: true },
        { text: "b) (Thông hiểu) Tiểu vùng Tây Bắc nổi bật về tiềm năng thuỷ điện.", answer: true },
        { text: "c) (Vận dụng) Vùng thuận lợi chăn nuôi trâu, bò nhờ nhiều đồng cỏ trên đồi núi.", answer: true },
        { text: "d) (Vận dụng cao) Địa hình Tây Bắc thấp và bằng phẳng hơn Đông Bắc.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Về Bắc Trung Bộ và Duyên hải Nam Trung Bộ:", options: [
        { text: "a) (Nhận biết) Hai vùng đều có thế mạnh về du lịch biển và di sản.", answer: true },
        { text: "b) (Thông hiểu) Đồng bằng ở hai vùng nhỏ hẹp, đất nhìn chung kém màu mỡ.", answer: true },
        { text: "c) (Vận dụng) Bão, lũ và hạn hán là những khó khăn chung của hai vùng.", answer: true },
        { text: "d) (Vận dụng cao) Hai vùng có đồng bằng châu thổ rộng lớn tương đương Đồng bằng sông Cửu Long.", answer: false }
    ]},
    { type: 'tf', text: "Câu 4. Cho bảng số liệu giả định về ba vùng X, Y, Z: Vùng X có diện tích 30 nghìn km², dân số 15 triệu người. Vùng Y có diện tích 60 nghìn km², dân số 12 triệu người. Vùng Z có diện tích 50 nghìn km², dân số 5 triệu người. Nhận định sau đúng hay sai?", options: [
        { text: "a) (Nhận biết) Vùng X có mật độ dân số cao nhất trong ba vùng.", answer: true },
        { text: "b) (Thông hiểu) Mật độ dân số của vùng Y là 200 người/km².", answer: true },
        { text: "c) (Vận dụng) Mật độ dân số của vùng X gấp 5 lần vùng Z.", answer: true },
        { text: "d) (Vận dụng cao) Tổng dân số của ba vùng là 40 triệu người.", answer: false }
    ]}
];

// Đề số 15: 18 câu MCQ + 4 câu T/F
dataMocktest[15] = [
    // ===== PHẦN 1: 18 câu trắc nghiệm =====
    { type: 'mcq', text: "Thềm lục địa của nước ta là:", options: ["Vùng biển rộng 12 hải lí tính từ đường cơ sở.", "Phần đáy biển và lòng đất dưới đáy biển kéo dài từ lục địa ra ngoài lãnh hải.", "Vùng nước phía trong đường cơ sở.", "Vùng biển rộng 24 hải lí."], answer: 1 },
    { type: 'mcq', text: "Luật Biển Việt Nam được Quốc hội thông qua vào năm:", options: ["1995.", "2000.", "2012.", "2020."], answer: 2 },
    { type: 'mcq', text: "Rạn san hô ở nước ta tập trung nhiều ở:", options: ["Vùng biển Nam Trung Bộ và các quần đảo ngoài khơi.", "Cửa sông đục phù sa Đồng bằng sông Hồng.", "Vùng núi cao.", "Vịnh Bắc Bộ gần cửa sông lớn."], answer: 0 },
    { type: 'mcq', text: "Hoạt động nào sau đây thuộc ngành kinh tế biển?", options: ["Trồng lúa nước.", "Chăn nuôi gia cầm nội địa.", "Khai thác dầu khí, làm muối, đóng tàu và du lịch biển.", "Trồng chè."], answer: 2 },
    { type: 'mcq', text: "Nghề làm muối ở nước ta thuận lợi nhất ở vùng ven biển:", options: ["Vùng cửa sông nhiều mưa.", "Đồng bằng ven biển mưa quanh năm.", "Vùng núi ven biển.", "Duyên hải Nam Trung Bộ (Cà Ná, Sa Huỳnh)."], answer: 3 },
    { type: 'mcq', text: "Biện pháp bảo vệ nguồn lợi thuỷ sản là:", options: ["Đánh bắt bằng chất nổ.", "Quy định mùa vụ, cấm đánh bắt huỷ diệt và bảo vệ rạn san hô.", "Khai thác tối đa.", "Xả thải trực tiếp ra biển."], answer: 1 },
    { type: 'mcq', text: "Chuyển dịch cơ cấu thành phần kinh tế ở nước ta thể hiện vai trò ngày càng quan trọng của:", options: ["Chỉ khu vực Nhà nước.", "Chỉ kinh tế tự cung tự cấp.", "Khu vực ngoài Nhà nước và có vốn đầu tư nước ngoài.", "Chỉ kinh tế tập thể."], answer: 2 },
    { type: 'mcq', text: "Cơ cấu kinh tế theo lãnh thổ của nước ta chuyển dịch theo hướng:", options: ["Hình thành các vùng kinh tế trọng điểm, khu công nghiệp, khu kinh tế.", "Giảm số lượng vùng kinh tế.", "Xoá bỏ liên kết vùng.", "Chỉ phát triển một vùng."], answer: 0 },
    { type: 'mcq', text: "Hội nhập kinh tế quốc tế đòi hỏi nước ta phải:", options: ["Đóng cửa thị trường.", "Giảm chất lượng sản phẩm.", "Tăng bảo hộ vô điều kiện.", "Nâng cao năng lực cạnh tranh và hoàn thiện thể chế."], answer: 3 },
    { type: 'mcq', text: "Việt Nam trở thành thành viên của APEC vào năm:", options: ["1995.", "1998.", "2007.", "2015."], answer: 1 },
    { type: 'mcq', text: "Công cuộc Đổi mới của nước ta bắt đầu từ năm:", options: ["1975.", "1991.", "2000.", "1986."], answer: 3 },
    { type: 'mcq', text: "Công nghiệp xanh nhằm mục tiêu:", options: ["Tăng phát thải.", "Tăng khai thác tài nguyên bừa bãi.", "Giảm hiệu quả sản xuất.", "Giảm phát thải, tiết kiệm tài nguyên và bảo vệ môi trường."], answer: 3 },
    { type: 'mcq', text: "Biện pháp nâng cao sức cạnh tranh của nông sản xuất khẩu là:", options: ["Đạt tiêu chuẩn chất lượng, truy xuất nguồn gốc và xây dựng thương hiệu.", "Giảm chất lượng sản phẩm.", "Bỏ kiểm dịch.", "Chỉ bán sản phẩm thô."], answer: 0 },
    { type: 'mcq', text: "Thích ứng với biến đổi khí hậu ở đồng bằng ven biển cần:", options: ["Phá rừng ngập mặn.", "Xây công trình thuỷ lợi, đê điều và trồng rừng ngập mặn.", "Bỏ đê điều.", "Xây nhà sát mép nước."], answer: 1 },
    { type: 'mcq', text: "Hệ thống bảo vệ đa dạng sinh học ở nước ta gồm:", options: ["Vườn quốc gia, khu bảo tồn thiên nhiên.", "Khu công nghiệp nặng.", "Khu đô thị mới.", "Cảng biển."], answer: 0 },
    { type: 'mcq', text: "Vai trò quan trọng nhất của giáo dục - đào tạo đối với phát triển kinh tế là:", options: ["Giảm năng suất lao động.", "Hạn chế đổi mới.", "Nâng cao chất lượng nguồn nhân lực.", "Giảm việc làm."], answer: 2 },
    { type: 'mcq', text: "Đô thị hoá bền vững cần gắn với:", options: ["Quy hoạch hợp lí, hạ tầng đồng bộ, bảo vệ môi trường và an sinh xã hội.", "Mở rộng tự phát.", "Bỏ không gian xanh.", "Dồn dân vào trung tâm."], answer: 0 },
    { type: 'mcq', text: "Các nguồn năng lượng sạch gồm:", options: ["Than đá, dầu mỏ.", "Củi đốt, than củi.", "Điện gió, điện mặt trời và thuỷ điện.", "Khí thải công nghiệp."], answer: 2 },

    // ===== PHẦN 2: 4 câu Đúng/Sai =====
    { type: 'tf', text: "Câu 1. Về biển, đảo và kinh tế biển:", options: [
        { text: "a) (Nhận biết) Làm muối, đóng tàu, du lịch biển và khai thác dầu khí là các ngành kinh tế biển.", answer: true },
        { text: "b) (Thông hiểu) Rạn san hô tập trung nhiều ở vùng biển Nam Trung Bộ và các đảo, quần đảo ngoài khơi.", answer: true },
        { text: "c) (Vận dụng) Quy định mùa vụ và cấm đánh bắt huỷ diệt giúp bảo vệ nguồn lợi hải sản.", answer: true },
        { text: "d) (Vận dụng cao) Bảo vệ môi trường biển là việc của các nước khác, nước ta chỉ cần khai thác.", answer: false }
    ]},
    { type: 'tf', text: "Câu 2. Về Đổi mới và hội nhập kinh tế quốc tế:", options: [
        { text: "a) (Nhận biết) Công cuộc Đổi mới của nước ta bắt đầu từ năm 1986.", answer: true },
        { text: "b) (Thông hiểu) Việt Nam là thành viên của APEC từ năm 1998.", answer: true },
        { text: "c) (Vận dụng) Hội nhập đòi hỏi cải cách thể chế và nâng cao năng lực cạnh tranh.", answer: true },
        { text: "d) (Vận dụng cao) Hội nhập quốc tế làm cho khu vực kinh tế trong nước không còn vai trò gì.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Về phát triển bền vững:", options: [
        { text: "a) (Nhận biết) Công nghiệp xanh hướng tới giảm phát thải và tiết kiệm tài nguyên.", answer: true },
        { text: "b) (Thông hiểu) Vườn quốc gia và khu bảo tồn thiên nhiên góp phần bảo vệ đa dạng sinh học.", answer: true },
        { text: "c) (Vận dụng) Đô thị hoá bền vững cần gắn với quy hoạch, hạ tầng và bảo vệ môi trường.", answer: true },
        { text: "d) (Vận dụng cao) Có thể ưu tiên tăng trưởng nhanh và bỏ qua các tiêu chuẩn môi trường.", answer: false }
    ]},
    { type: 'tf', text: "Câu 4. Cho bảng số liệu giả định về cơ cấu lao động của một nước (%): Năm 2010: nông - lâm - thuỷ sản 50; công nghiệp - xây dựng 22; dịch vụ 28. Năm 2022: nông - lâm - thuỷ sản 30; công nghiệp - xây dựng 32; dịch vụ 38. Nhận định sau đúng hay sai?", options: [
        { text: "a) (Nhận biết) Tỉ trọng lao động nông - lâm - thuỷ sản năm 2022 thấp hơn năm 2010.", answer: true },
        { text: "b) (Thông hiểu) Tỉ trọng lao động dịch vụ tăng 10 điểm phần trăm trong giai đoạn 2010 - 2022.", answer: true },
        { text: "c) (Vận dụng) Tỉ trọng lao động công nghiệp - xây dựng tăng 10 điểm phần trăm trong giai đoạn 2010 - 2022.", answer: true },
        { text: "d) (Vận dụng cao) Tỉ trọng lao động nông - lâm - thuỷ sản giảm 30 điểm phần trăm trong giai đoạn 2010 - 2022.", answer: false }
    ]}
];
