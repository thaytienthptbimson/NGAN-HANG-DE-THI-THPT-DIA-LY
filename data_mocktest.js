/* =========================================================================
   DỮ LIỆU ĐỀ THI THỬ ĐỊA LÍ TỐT NGHIỆP THPT (Cấu trúc 4 mức độ)
   Bản quyền thuộc về số ĐT: 0943.930.787
========================================================================= */

const dataMocktest = {};

// Gán dữ liệu đề 1 đến 6 (Giữ nguyên cấu trúc mảng rỗng để phần mềm không báo lỗi nếu gọi)
dataMocktest[1] = []; dataMocktest[2] = []; dataMocktest[3] = []; 
dataMocktest[4] = []; dataMocktest[5] = []; dataMocktest[6] = [];

// ================= DỮ LIỆU ĐỀ THI THỬ SỐ 7 & 8 (THIẾT KẾ THEO 4 MỨC ĐỘ NHẬN THỨC) =================

dataMocktest[7] = [
    // --- PHẦN I: TRẮC NGHIỆM ĐA LỰA CHỌN (24 CÂU) ---
    // Mức độ Nhận biết (6 câu)
    { type: 'mcq', text: "Hệ toạ độ địa lí trên đất liền của nước ta có điểm cực Bắc nằm ở vĩ độ nào?", options: ["8°34'B", "23°23'B", "102°09'Đ", "109°28'Đ"], answer: 1 },
    { type: 'mcq', text: "Theo cấu tạo vỏ Trái Đất, ranh giới giữa vỏ Trái Đất và manti được gọi là gì?", options: ["Mặt phân cách lục địa.", "Mặt đứt gãy.", "Mặt Mô-hô.", "Tầng trầm tích."], answer: 2 },
    { type: 'mcq', text: "Tổ chức Thương mại Thế giới được viết tắt bằng tiếng Anh là gì?", options: ["IMF", "WTO", "APEC", "ASEAN"], answer: 1 },
    { type: 'mcq', text: "Năm 2024, tổng dân số nước ta đạt khoảng bao nhiêu triệu người?", options: ["96,5", "101,3", "86,0", "115,2"], answer: 1 },
    { type: 'mcq', text: "Ngành kinh tế nào đang đóng góp tỉ trọng cao nhất vào cơ cấu GDP của khu vực Mỹ La tinh?", options: ["Nông nghiệp", "Lâm nghiệp", "Công nghiệp và xây dựng", "Dịch vụ"], answer: 3 },
    { type: 'mcq', text: "Trung tâm thương mại lớn nào sau đây đã phát hành và sử dụng đồng tiền chung Ơ-rô?", options: ["ASEAN", "NAFTA", "Liên minh châu Âu (EU)", "MERCOSUR"], answer: 2 },

    // Mức độ Thông hiểu (6 câu)
    { type: 'mcq', text: "Gió Tây ôn đới có đặc điểm nào sau đây?", options: ["Thổi từ áp cao cực về áp thấp ôn đới, rất lạnh và khô.", "Thổi từ áp cao cận chí tuyến về áp thấp ôn đới, thường có độ ẩm cao, gây mưa.", "Thổi từ áp cao chí tuyến về áp thấp xích đạo, khô hạn quanh năm.", "Thổi thay đổi hướng theo chu kì ngày đêm ở vùng ven biển."], answer: 1 },
    { type: 'mcq', text: "Nguyên nhân chính hình thành nên đai áp thấp xích đạo trên Trái Đất là gì?", options: ["Do nhiệt độ cao quanh năm, hơi nước bốc lên mạnh.", "Do các dòng biển lạnh chảy ngang qua.", "Do sự hạ lún của các mảng kiến tạo.", "Do lực li tâm của Trái Đất lớn nhất ở Xích đạo."], answer: 0 },
    { type: 'mcq', text: "Đặc điểm nào chứng tỏ đô thị hoá ở nước ta đang diễn ra nhanh nhưng trình độ chưa cao?", options: ["Tỉ lệ dân thành thị rất cao, trên 80%.", "Không gian đô thị thu hẹp, chỉ tập trung ở vùng núi.", "Tỉ lệ dân thành thị tăng nhưng cơ sở hạ tầng đô thị nhiều nơi còn quá tải.", "Toàn bộ dân đô thị đều làm việc trong ngành nông nghiệp."], answer: 2 },
    { type: 'mcq', text: "Vùng kinh tế nào sau đây có số lượng lao động từ 15 tuổi trở lên đã qua đào tạo cao nhất cả nước?", options: ["Đồng bằng sông Cửu Long", "Đồng bằng sông Hồng", "Bắc Trung Bộ", "Tây Nguyên"], answer: 1 },
    { type: 'mcq', text: "Nguyên nhân chủ yếu làm cho khí hậu khu vực Tây Nam Á rất khô hạn là do đâu?", options: ["Nằm trong đới khí hậu cận nhiệt và nhiệt đới, chịu ảnh hưởng của các khối khí lục địa.", "Nằm hoàn toàn ở vùng cực có nhiệt độ thấp.", "Có lượng mưa trung bình năm trên 2000mm.", "Chịu ảnh hưởng của gió Tây ôn đới quanh năm."], answer: 0 },
    { type: 'mcq', text: "Thành tựu lớn nhất về nông nghiệp của các quốc gia Đông Nam Á là gì?", options: ["Tuyệt đối không sử dụng phân bón hoá học.", "Cơ bản giải quyết được nhu cầu lương thực và trở thành khu vực xuất khẩu gạo lớn.", "Chuyển hoàn toàn sang chăn nuôi bò sữa thay thế trồng lúa.", "Loại bỏ hoàn toàn cây công nghiệp lâu năm."], answer: 1 },

    // Mức độ Vận dụng (6 câu)
    { type: 'mcq', text: "Để giải quyết vấn đề thiếu hụt lao động chuyên môn kĩ thuật cao trong bối cảnh công nghiệp 4.0, giải pháp thiết thực nhất của nước ta là gì?", options: ["Tăng tỉ suất sinh thô ở nông thôn.", "Đẩy mạnh xuất khẩu lao động phổ thông.", "Đổi mới và nâng cao chất lượng giáo dục, đào tạo nghề gắn với nhu cầu thị trường.", "Hạn chế sự phát triển của khu vực dịch vụ."], answer: 2 },
    { type: 'mcq', text: "Việc chuyển đổi cơ cấu cây trồng từ lúa nước sang các loại cây ăn quả đặc sản ở Đồng bằng sông Cửu Long hiện nay nhằm mục đích chính là gì?", options: ["Giảm hoàn toàn sản lượng gạo xuất khẩu.", "Thích ứng với biến đổi khí hậu (hạn mặn) và nâng cao hiệu quả kinh tế.", "Phục hồi diện tích rừng nguyên sinh.", "Hạn chế sự phát triển của công nghiệp chế biến."], answer: 1 },
    { type: 'mcq', text: "Tác động tiêu cực của toàn cầu hoá kinh tế đối với các nước đang phát triển như Việt Nam là gì?", options: ["Không thể thu hút được vốn đầu tư nước ngoài.", "Đóng cửa hoàn toàn với thị trường thế giới.", "Gia tăng khoảng cách giàu nghèo và đối mặt với sự cạnh tranh gay gắt từ các tập đoàn đa quốc gia.", "Lực lượng sản xuất bị đình trệ hoàn toàn."], answer: 2 },
    { type: 'mcq', text: "Khí hậu nhiệt đới ẩm gió mùa đem lại khó khăn lớn nhất nào cho ngành giao thông vận tải nước ta?", options: ["Cản trở việc xây dựng đường hầm xuyên núi.", "Thường xuyên xảy ra thiên tai (bão, lũ lụt, sạt lở đất) phá huỷ hạ tầng giao thông.", "Làm đóng băng các hải cảng vào mùa đông.", "Gây ra hiện tượng sa mạc hoá lấp kín đường sá."], answer: 1 },
    { type: 'mcq', text: "Nguyên nhân chính giúp ngành công nghiệp sản xuất sản phẩm điện tử, vi tính của nước ta phát triển mạnh trong những năm gần đây là gì?", options: ["Nguồn nguyên liệu khoáng sản (bô-xít) dồi dào.", "Thu hút được nguồn vốn FDI lớn và có lực lượng lao động trẻ, chi phí hợp lí.", "Khí hậu mát mẻ quanh năm.", "Chỉ phục vụ tiêu dùng trong vùng nông thôn."], answer: 1 },
    { type: 'mcq', text: "Ý nghĩa lớn nhất của việc hình thành các vùng chuyên canh nông nghiệp quy mô lớn ở nước ta là gì?", options: ["Chỉ để cung cấp lương thực cho khu vực miền núi.", "Xoá bỏ hoàn toàn nền nông nghiệp cổ truyền tự cung tự cấp.", "Tạo khối lượng hàng hoá lớn, chất lượng đồng đều, thuận lợi đưa cơ giới hoá và công nghiệp chế biến vào sản xuất.", "Thu hút toàn bộ lao động thành thị về nông thôn làm nông nghiệp."], answer: 2 },

    // Mức độ Vận dụng cao (6 câu)
    { type: 'mcq', text: "Sự khác biệt cơ bản về nguyên nhân tạo mùa khô ở Nam Bộ và mùa đông lạnh ở miền Bắc nước ta là gì?", options: ["Mùa khô Nam Bộ do gió Tây Nam, mùa đông miền Bắc do gió Đông Nam.", "Mùa khô Nam Bộ do Tín phong bán cầu Bắc chi phối, mùa đông miền Bắc do gió mùa Đông Bắc mang khối khí lạnh tràn về.", "Mùa khô Nam Bộ do dòng biển lạnh, mùa đông miền Bắc do độ cao địa hình.", "Cả hai đều do bão nhiệt đới gây ra."], answer: 1 },
    { type: 'mcq', text: "Trong bối cảnh biến đổi khí hậu, nước biển dâng, giải pháp mang tính chiến lược lâu dài đối với nền kinh tế vùng Đồng bằng sông Cửu Long là gì?", options: ["Xây dựng đê bao khép kín toàn bộ đồng bằng để ngăn mặn tuyệt đối.", "Di dời toàn bộ dân cư lên vùng Tây Nguyên.", "Chuyển tư duy từ sản xuất nông nghiệp thuần tuý sang kinh tế nông nghiệp thích ứng với tự nhiên (sống chung với lũ/mặn).", "Phá bỏ toàn bộ diện tích rừng ngập mặn để nuôi tôm."], answer: 2 },
    { type: 'mcq', text: "Tại sao nói thể chế của Liên minh châu Âu (EU) có mức độ liên kết chặt chẽ nhất thế giới hiện nay?", options: ["Vì EU sử dụng chung một loại ngôn ngữ duy nhất.", "Vì EU có thị trường chung, sử dụng đồng tiền chung và có các cơ quan siêu quốc gia (Nghị viện, Ngân hàng Trung ương) can thiệp sâu vào chính sách của các nước thành viên.", "Vì EU đã xoá bỏ hoàn toàn đường biên giới quốc gia, sáp nhập thành một nước duy nhất.", "Vì EU chỉ hợp tác duy nhất trên lĩnh vực quân sự."], answer: 1 },
    { type: 'mcq', text: "Để giải quyết triệt để tình trạng mất cân bằng giới tính khi sinh (111,4 bé trai/100 bé gái năm 2024), giải pháp căn cơ nhất đối với nước ta là gì?", options: ["Nghiêm cấm hoàn toàn việc sinh con thứ hai.", "Phạt tiền nặng đối với gia đình sinh con trai.", "Thay đổi quan niệm, tâm lí xã hội trọng nam khinh nữ và thực hiện nghiêm pháp luật về bình đẳng giới.", "Khuyến khích di cư sang các quốc gia khác."], answer: 2 },
    { type: 'mcq', text: "Sự sụp đổ của một chuỗi cung ứng linh kiện điện tử tại Đông Nam Á do đại dịch có thể làm đình trệ các nhà máy lắp ráp ô tô tại Hoa Kỳ và châu Âu. Điều này phản ánh rõ nhất hệ quả nào của toàn cầu hoá?", options: ["Sự gia tăng khoảng cách giàu nghèo.", "Sự bùng nổ của thương mại điện tử nội địa.", "Sự phụ thuộc lẫn nhau sâu sắc giữa các nền kinh tế trong các chuỗi giá trị toàn cầu.", "Sự chấm dứt của các tổ chức khu vực."], answer: 2 },
    { type: 'mcq', text: "Quy luật phi địa đới (đai cao) ảnh hưởng như thế nào đến sự phân bố nông nghiệp ở vùng núi Tây Bắc nước ta?", options: ["Chỉ có thể trồng được các loại cây xứ nóng (cao su, cà phê).", "Tạo ra các bề mặt hoang mạc không thể canh tác.", "Cho phép phát triển đa dạng cơ cấu cây trồng từ nhiệt đới (chân núi) đến cận nhiệt và ôn đới (trên cao) như chè, dược liệu, cây ăn quả ôn đới.", "Làm cho toàn bộ vùng núi bị băng tuyết bao phủ quanh năm."], answer: 2 },

    // --- PHẦN II: TRẮC NGHIỆM ĐÚNG/SAI (4 CÂU) ---
    { type: 'tf', text: "Câu 1. Về đặc điểm thiên nhiên nhiệt đới ẩm gió mùa ở Việt Nam:", options: [
        { text: "a) (Nhận biết) Nhiệt độ trung bình năm trên cả nước đều trên 20°C (trừ các vùng núi cao).", answer: true },
        { text: "b) (Thông hiểu) Chế độ mưa theo mùa làm cho lưu lượng nước các con sông ở nước ta có sự phân chia thành mùa lũ và mùa cạn rõ rệt.", answer: true },
        { text: "c) (Vận dụng) Thiên nhiên nước ta không có sự khác biệt giữa khu vực đồi núi và đồng bằng vì cùng nằm trong đới nóng.", answer: false },
        { text: "d) (Vận dụng cao) Sự luân phiên hoạt động của gió mùa Đông Bắc và Tín phong bán cầu Bắc là nguyên nhân trực tiếp tạo ra sự đối lập về mùa mưa - khô giữa sườn Đông và Tây dãy Trường Sơn.", answer: true }
    ]},
    { type: 'tf', text: "Câu 2. Về tình hình phát triển kinh tế - xã hội khu vực Đông Nam Á:", options: [
        { text: "a) (Nhận biết) Khu vực Đông Nam Á hiện nay bao gồm 11 quốc gia thành viên.", answer: true },
        { text: "b) (Thông hiểu) Do diện tích đất đồng bằng châu thổ rộng lớn nên tất cả các nước Đông Nam Á đều xuất khẩu lúa gạo đứng đầu thế giới.", answer: false },
        { text: "c) (Vận dụng) Việc hội nhập sâu rộng vào các chuỗi cung ứng toàn cầu giúp các nước Đông Nam Á phát triển mạnh ngành công nghiệp điện tử - tin học.", answer: true },
        { text: "d) (Vận dụng cao) Sức ép từ quy mô dân số lớn và đô thị hoá tự phát đang là lực cản lớn đối với việc giải quyết các vấn đề môi trường, giao thông đô thị ở nhiều quốc gia trong khu vực.", answer: true }
    ]},
    { type: 'tf', text: "Câu 3. Về sự chuyển dịch cơ cấu kinh tế ở Việt Nam:", options: [
        { text: "a) (Nhận biết) Cơ cấu GDP theo ngành của nước ta đang giảm tỉ trọng nông nghiệp, tăng tỉ trọng công nghiệp và dịch vụ.", answer: true },
        { text: "b) (Thông hiểu) Khu vực kinh tế có vốn đầu tư nước ngoài (FDI) có tỉ trọng đóng góp vào GDP ngày càng tăng do chính sách mở cửa, hội nhập quốc tế.", answer: true },
        { text: "c) (Vận dụng) Trong nội bộ ngành công nghiệp, nước ta đang chuyển dịch theo hướng tăng mạnh tỉ trọng công nghiệp khai khoáng để xuất khẩu thô lấy ngoại tệ.", answer: false },
        { text: "d) (Vận dụng cao) Việc hình thành các khu nông nghiệp công nghệ cao và khu kinh tế ven biển phản ánh quá trình chuyển dịch cơ cấu lãnh thổ nhằm khai thác tối đa lợi thế so sánh của từng vùng.", answer: true }
    ]},
    { type: 'tf', text: "Câu 4. Về đặc điểm phân bố dân cư trên thế giới và Việt Nam:", options: [
        { text: "a) (Nhận biết) Dân cư thế giới phân bố rất không đồng đều, tập trung đông ở các đồng bằng, ven biển.", answer: true },
        { text: "b) (Thông hiểu) Phương pháp chấm điểm thường được dùng trên bản đồ để thể hiện sự phân bố của các điểm dân cư nông thôn.", answer: true },
        { text: "c) (Vận dụng) Ở Việt Nam, Đồng bằng sông Hồng có mật độ dân số thấp hơn nhiều so với khu vực Tây Nguyên.", answer: false },
        { text: "d) (Vận dụng cao) Giải quyết bài toán phân bố dân cư không đồng đều ở Việt Nam đòi hỏi phải kết hợp đồng bộ việc phát triển kinh tế vùng sâu vùng xa với chính sách quy hoạch đô thị vệ tinh hợp lí.", answer: true }
    ]}
];

dataMocktest[8] = [...dataMocktest[7]]; // Placeholder cho đề 8 (có thể tạo cấu trúc tương tự)