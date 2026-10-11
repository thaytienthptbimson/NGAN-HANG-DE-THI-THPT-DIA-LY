/* =========================================================================
   DỮ LIỆU ĐỊA LÍ KHỐI 12 - CẤU TRÚC MỚI (20 MCQ, 20 T/F)
   Các câu T/F có biểu đồ/bảng số liệu: hiện đang đưa số liệu trực tiếp vào
   phần text. Khi có ảnh biểu đồ, thêm thuộc tính image: "đường_dẫn.jpg".
========================================================================= */
const dataKhoi12 = {
    1: {
        title: "Chủ đề 1: Tự nhiên Việt Nam",
        exercises: {
            mcq: [
                { level: 'nhan_biet', type: 'mcq', text: "Hệ toạ độ địa lí trên đất liền của nước ta nằm trong khoảng vĩ độ nào?", options: ["Từ 8°34'B đến 23°23'B.", "Từ 8°30'B đến 23°23'B.", "Từ 8°34'N đến 23°23'N.", "Từ 102°09'Đ đến 109°28'Đ."], answer: 0 },
                { level: 'nhan_biet', type: 'mcq', text: "Vùng biển của nước ta trong Biển Đông có diện tích khoảng:", options: ["0,5 triệu km².", "1 triệu km².", "2 triệu km².", "3,5 triệu km²."], answer: 1 },
                { level: 'nhan_biet', type: 'mcq', text: "Phần đất liền nước ta nằm trong múi giờ số mấy?", options: ["Múi giờ số 6.", "Múi giờ số 8.", "Múi giờ số 9.", "Múi giờ số 7."], answer: 3 },
                { level: 'nhan_biet', type: 'mcq', text: "Nước ta nằm hoàn toàn trong vùng:", options: ["Ngoại chí tuyến bán cầu Bắc.", "Nội chí tuyến bán cầu Bắc.", "Nội chí tuyến bán cầu Nam.", "Ôn đới bán cầu Bắc."], answer: 1 },
                { level: 'nhan_biet', type: 'mcq', text: "Đường biên giới trên đất liền của nước ta tiếp giáp với các quốc gia nào?", options: ["Trung Quốc, Thái Lan, Cam-pu-chia.", "Lào, Thái Lan, Mi-an-ma.", "Trung Quốc, Lào, Cam-pu-chia.", "Trung Quốc, Mi-an-ma, Lào."], answer: 2 },
                { level: 'nhan_biet', type: 'mcq', text: "Loại gió nào gây mưa lớn cho Nam Bộ và Tây Nguyên vào mùa hạ?", options: ["Gió mùa Đông Bắc.", "Gió Tây khô nóng.", "Tín phong bán cầu Bắc.", "Gió mùa Tây Nam."], answer: 3 },
                { level: 'thong_hieu', type: 'mcq', text: "Tính chất nhiệt đới ẩm gió mùa của thiên nhiên nước ta thể hiện rõ ở:", options: ["Nhiệt độ thấp, mưa ít, khô hạn.", "Nhiệt độ cao, mưa nhiều, độ ẩm lớn và có chế độ gió mùa.", "Lạnh giá quanh năm.", "Nắng nóng, khô quanh năm."], answer: 1 },
                { level: 'thong_hieu', type: 'mcq', text: "Gió mùa Đông Bắc ảnh hưởng chủ yếu đến miền nào của nước ta?", options: ["Miền Bắc và Đông Bắc Bắc Bộ.", "Đồng bằng sông Cửu Long.", "Nam Bộ.", "Tây Nguyên."], answer: 0 },
                { level: 'nhan_biet', type: 'mcq', text: "Địa hình đồi núi chiếm khoảng bao nhiêu diện tích phần đất liền nước ta?", options: ["1/4.", "1/2.", "3/4.", "9/10."], answer: 2 },
                { level: 'nhan_biet', type: 'mcq', text: "Đỉnh núi cao nhất nước ta hiện nay là:", options: ["Phan-xi-păng.", "Ngọc Linh.", "Tây Côn Lĩnh.", "Pu Tha Ca."], answer: 0 },
                { level: 'nhan_biet', type: 'mcq', text: "Đồng bằng có diện tích lớn nhất nước ta là:", options: ["Đồng bằng sông Hồng.", "Đồng bằng sông Cửu Long.", "Đồng bằng Thanh Hoá.", "Đồng bằng Nghệ An."], answer: 1 },
                { level: 'thong_hieu', type: 'mcq', text: "Đai nhiệt đới gió mùa ở miền Bắc nước ta có độ cao dưới khoảng:", options: ["300 - 400 m.", "600 - 700 m.", "900 - 1000 m.", "1500 - 1600 m."], answer: 1 },
                { level: 'thong_hieu', type: 'mcq', text: "Sự phân hoá thiên nhiên theo Bắc - Nam chủ yếu do:", options: ["Sự thay đổi của vĩ độ (góc nhập xạ) và tác động của gió mùa.", "Sự phân bố của các dãy núi theo hướng đông - tây.", "Ảnh hưởng của Biển Đông.", "Hoạt động của con người."], answer: 0 },
                { level: 'nhan_biet', type: 'mcq', text: "Thiên tai nào sau đây thường xảy ra ở vùng núi nước ta khi mưa lớn tập trung?", options: ["Triều cường.", "Lũ quét, sạt lở đất.", "Xâm nhập mặn.", "Sóng thần."], answer: 1 },
                { level: 'nhan_biet', type: 'mcq', text: "Mùa bão ở nước ta thường kéo dài từ:", options: ["Tháng 1 đến tháng 5.", "Tháng 12 đến tháng 4.", "Tháng 6 đến tháng 11.", "Tháng 4 đến tháng 7."], answer: 2 },
                { level: 'van_dung', type: 'mcq', text: "Nguyên nhân chủ yếu gây hạn hán kéo dài ở Ninh Thuận, Bình Thuận là:", options: ["Mưa nhiều quanh năm.", "Mùa khô kéo dài, mưa ít, nhiệt độ cao, địa hình khuất gió.", "Sông ngòi quá dày đặc.", "Chịu ảnh hưởng trực tiếp của gió mùa Đông Bắc."], answer: 1 },
                { level: 'van_dung', type: 'mcq', text: "Biện pháp quan trọng nhất để hạn chế lũ quét ở vùng núi là:", options: ["Xây dựng nhiều khu công nghiệp ven sông.", "Mở rộng đất nông nghiệp trên sườn dốc.", "Bảo vệ, phục hồi rừng đầu nguồn và quy hoạch dân cư hợp lí.", "Khai thác khoáng sản mạnh hơn."], answer: 2 },
                { level: 'thong_hieu', type: 'mcq', text: "Rừng ngập mặn ven biển có vai trò quan trọng nào sau đây?", options: ["Làm tăng tốc độ xâm thực bờ biển.", "Làm giảm đa dạng sinh học.", "Làm tăng độ mặn của đất.", "Chắn sóng, hạn chế xói lở và bảo vệ bờ biển."], answer: 3 },
                { level: 'van_dung_cao', type: 'mcq', text: "Bảo vệ rừng đầu nguồn có ý nghĩa quan trọng đối với đồng bằng hạ lưu chủ yếu vì:", options: ["Làm tăng nhiệt độ vùng hạ lưu.", "Làm tăng lượng mưa ở đồng bằng.", "Giảm diện tích đất nông nghiệp.", "Điều tiết nước sông, giảm lũ lụt, hạn chế xói mòn và bồi lắng."], answer: 3 },
                { level: 'van_dung_cao', type: 'mcq', text: "Xâm nhập mặn ở Đồng bằng sông Cửu Long ngày càng nghiêm trọng chủ yếu do sự kết hợp của:", options: ["Mưa lớn kéo dài và thượng nguồn tăng nước.", "Hạn hán, nước biển dâng và lượng nước từ thượng nguồn sông Mê Công giảm.", "Gió mùa Đông Bắc mạnh lên.", "Địa hình đồng bằng cao hơn."], answer: 1 }
            ],
            tf: [
                // Câu mẫu về biểu đồ cơ cấu lao động (cần ảnh biểu đồ, thuộc chủ đề Dân cư - lao động) - tạm cất lại,
                // khi có ảnh thì chuyển sang chủ đề tương ứng:
                // { level: 'van_dung', type: 'tf', text: "Cho biểu đồ cơ cấu lao động có việc làm phân theo ngành kinh tế của nước ta. Nhận định sau đây đúng hay sai?", image: "link_anh_bieu_do_1.jpg", options: [ ... ] },
                {
                    level: 'van_dung', type: 'tf', text: "Về vị trí địa lí và phạm vi lãnh thổ nước ta:",
                    options: [
                        { text: "a) (Nhận biết) Việt Nam nằm ở rìa phía đông của bán đảo Đông Dương, gần trung tâm khu vực Đông Nam Á.", answer: true },
                        { text: "b) (Thông hiểu) Nằm trong vùng nội chí tuyến nên nước ta có nền nhiệt cao, nhiều ánh nắng.", answer: true },
                        { text: "c) (Vận dụng) Nước ta nằm trong khu vực châu Á gió mùa nên khí hậu có sự đổi hướng gió theo mùa.", answer: true },
                        { text: "d) (Vận dụng cao) Vị trí địa lí của nước ta không thuận lợi cho giao thương quốc tế.", answer: false }
                    ]
                },
                {
                    level: 'van_dung', type: 'tf', text: "Về vùng biển của nước ta:",
                    options: [
                        { text: "a) (Nhận biết) Vùng biển gồm nội thuỷ, lãnh hải, vùng tiếp giáp lãnh hải, vùng đặc quyền kinh tế và thềm lục địa.", answer: true },
                        { text: "b) (Thông hiểu) Lãnh hải nước ta có chiều rộng 12 hải lí.", answer: true },
                        { text: "c) (Vận dụng) Vùng đặc quyền kinh tế rộng 200 hải lí tính từ đường cơ sở.", answer: true },
                        { text: "d) (Vận dụng cao) Thềm lục địa chỉ gồm phần đáy biển nằm trong lãnh hải.", answer: false }
                    ]
                },
                {
                    level: 'van_dung', type: 'tf', text: "Về đặc điểm khí hậu nhiệt đới ẩm gió mùa của nước ta:",
                    options: [
                        { text: "a) (Nhận biết) Nhiệt độ trung bình năm trên 20°C ở hầu hết lãnh thổ (trừ vùng núi cao).", answer: true },
                        { text: "b) (Thông hiểu) Lượng mưa trung bình năm lớn, khoảng 1500 - 2000 mm.", answer: true },
                        { text: "c) (Vận dụng) Độ ẩm không khí cao, thường trên 80%.", answer: true },
                        { text: "d) (Vận dụng cao) Khí hậu nước ta rất ổn định, không biến động giữa các năm.", answer: false }
                    ]
                },
                {
                    level: 'van_dung', type: 'tf', text: "Về gió mùa ở nước ta:",
                    options: [
                        { text: "a) (Nhận biết) Gió mùa mùa đông thổi theo hướng đông bắc.", answer: true },
                        { text: "b) (Thông hiểu) Gió mùa Tây Nam mang nhiều hơi ẩm gây mưa lớn vào mùa hạ.", answer: true },
                        { text: "c) (Vận dụng) Gió mùa Đông Bắc làm cho miền Bắc có mùa đông lạnh.", answer: true },
                        { text: "d) (Vận dụng cao) Gió Tây khô nóng chủ yếu xảy ra ở Nam Bộ.", answer: false }
                    ]
                },
                {
                    level: 'van_dung', type: 'tf', text: "Về địa hình nước ta:",
                    options: [
                        { text: "a) (Nhận biết) Địa hình đồi núi chiếm khoảng 3/4 diện tích đất liền.", answer: true },
                        { text: "b) (Thông hiểu) Đồi núi thấp dưới 1000 m chiếm ưu thế (khoảng 85% diện tích).", answer: true },
                        { text: "c) (Vận dụng) Hướng núi chủ yếu là tây bắc - đông nam và hướng vòng cung.", answer: true },
                        { text: "d) (Vận dụng cao) Địa hình đồng bằng chiếm khoảng 3/4 diện tích đất liền.", answer: false }
                    ]
                },
                {
                    level: 'van_dung', type: 'tf', text: "Về địa hình đồng bằng của nước ta:",
                    options: [
                        { text: "a) (Nhận biết) Đồng bằng sông Hồng và đồng bằng sông Cửu Long là hai đồng bằng châu thổ lớn.", answer: true },
                        { text: "b) (Thông hiểu) Đồng bằng sông Cửu Long có diện tích lớn hơn đồng bằng sông Hồng.", answer: true },
                        { text: "c) (Vận dụng) Các đồng bằng duyên hải miền Trung nhỏ hẹp và bị chia cắt.", answer: true },
                        { text: "d) (Vận dụng cao) Các đồng bằng duyên hải miền Trung hình thành chủ yếu từ phù sa sông Mê Công.", answer: false }
                    ]
                },
                {
                    level: 'van_dung', type: 'tf', text: "Về sông ngòi nước ta:",
                    options: [
                        { text: "a) (Nhận biết) Mạng lưới sông ngòi dày đặc, có nhiều sông nhỏ, ngắn và dốc.", answer: true },
                        { text: "b) (Thông hiểu) Chế độ nước sông theo mùa, có mùa lũ và mùa cạn.", answer: true },
                        { text: "c) (Vận dụng) Sông ngòi giàu phù sa, hàm lượng phù sa lớn.", answer: true },
                        { text: "d) (Vận dụng cao) Phần lớn sông ngòi nước ta chảy ra Ấn Độ Dương.", answer: false }
                    ]
                },
                {
                    level: 'van_dung', type: 'tf', text: "Về đất và sinh vật nước ta:",
                    options: [
                        { text: "a) (Nhận biết) Hai nhóm đất chiếm diện tích lớn là đất feralit và đất phù sa.", answer: true },
                        { text: "b) (Thông hiểu) Đất feralit phân bố chủ yếu ở vùng đồi núi.", answer: true },
                        { text: "c) (Vận dụng) Sinh vật nước ta đa dạng về thành phần loài và hệ sinh thái.", answer: true },
                        { text: "d) (Vận dụng cao) Đất phù sa phân bố chủ yếu ở vùng núi cao.", answer: false }
                    ]
                },
                {
                    level: 'van_dung', type: 'tf', text: "Về sự phân hoá thiên nhiên theo Bắc - Nam:",
                    options: [
                        { text: "a) (Nhận biết) Phần lãnh thổ phía Bắc (từ dãy Bạch Mã trở ra) có mùa đông lạnh.", answer: true },
                        { text: "b) (Thông hiểu) Phần lãnh thổ phía Nam có khí hậu cận xích đạo gió mùa.", answer: true },
                        { text: "c) (Vận dụng) Dãy Bạch Mã là ranh giới khí hậu quan trọng giữa phần lãnh thổ phía Bắc và phía Nam.", answer: true },
                        { text: "d) (Vận dụng cao) Nhiệt độ trung bình năm ở phía Nam thấp hơn phía Bắc.", answer: false }
                    ]
                },
                {
                    level: 'van_dung', type: 'tf', text: "Về sự phân hoá thiên nhiên theo Đông - Tây:",
                    options: [
                        { text: "a) (Nhận biết) Thiên nhiên phân hoá theo chiều đông - tây gồm vùng biển và thềm lục địa, đồng bằng ven biển, vùng đồi núi.", answer: true },
                        { text: "b) (Thông hiểu) Dãy Trường Sơn Bắc làm Đông Trường Sơn mưa vào thu đông còn Tây Nguyên mưa vào mùa hạ.", answer: true },
                        { text: "c) (Vận dụng) Mùa đông ở Đông Bắc lạnh hơn Tây Bắc.", answer: true },
                        { text: "d) (Vận dụng cao) Dãy Hoàng Liên Sơn chắn gió mùa Đông Bắc nên mùa đông ở Tây Bắc ấm hơn vùng Đông Bắc.", answer: true }
                    ]
                },
                {
                    level: 'van_dung', type: 'tf', text: "Về sự phân hoá thiên nhiên theo độ cao:",
                    options: [
                        { text: "a) (Nhận biết) Thiên nhiên có ba đai cao: nhiệt đới gió mùa, cận nhiệt đới gió mùa trên núi và ôn đới gió mùa trên núi.", answer: true },
                        { text: "b) (Thông hiểu) Ở miền Bắc, đai cận nhiệt đới gió mùa trên núi từ độ cao khoảng 600 - 700 m đến 2600 m.", answer: true },
                        { text: "c) (Vận dụng) Càng lên cao, nhiệt độ càng giảm kéo theo sự thay đổi của sinh vật và thổ nhưỡng.", answer: true },
                        { text: "d) (Vận dụng cao) Đai ôn đới gió mùa trên núi xuất hiện ở mọi vùng núi của nước ta.", answer: false }
                    ]
                },
                {
                    level: 'van_dung', type: 'tf', text: "Về bão ở nước ta:",
                    options: [
                        { text: "a) (Nhận biết) Bão thường hoạt động từ tháng 6 đến tháng 11.", answer: true },
                        { text: "b) (Thông hiểu) Bão gây gió mạnh, mưa lớn và nước dâng.", answer: true },
                        { text: "c) (Vận dụng) Bão đổ bộ nhiều vào dải ven biển Bắc Bộ và Trung Bộ.", answer: true },
                        { text: "d) (Vận dụng cao) Bão chỉ gây thiệt hại ở vùng núi, không ảnh hưởng đến ven biển.", answer: false }
                    ]
                },
                {
                    level: 'van_dung', type: 'tf', text: "Về ngập lụt và lũ quét:",
                    options: [
                        { text: "a) (Nhận biết) Ngập lụt ở đồng bằng thường xảy ra khi mưa lớn kết hợp triều cường.", answer: true },
                        { text: "b) (Thông hiểu) Lũ quét xảy ra bất ngờ ở vùng núi có sông suối dốc.", answer: true },
                        { text: "c) (Vận dụng) Mất rừng đầu nguồn làm gia tăng nguy cơ lũ quét và sạt lở đất.", answer: true },
                        { text: "d) (Vận dụng cao) Lũ quét chủ yếu xảy ra ở các đồng bằng châu thổ.", answer: false }
                    ]
                },
                {
                    level: 'van_dung', type: 'tf', text: "Về hạn hán và xâm nhập mặn:",
                    options: [
                        { text: "a) (Nhận biết) Hạn hán thường xảy ra vào mùa khô.", answer: true },
                        { text: "b) (Thông hiểu) Nam Trung Bộ và Tây Nguyên thường có hạn hán kéo dài.", answer: true },
                        { text: "c) (Vận dụng) Xâm nhập mặn ở Đồng bằng sông Cửu Long tăng vào mùa khô.", answer: true },
                        { text: "d) (Vận dụng cao) Xâm nhập mặn không ảnh hưởng đáng kể đến sản xuất nông nghiệp.", answer: false }
                    ]
                },
                {
                    level: 'van_dung', type: 'tf', text: "Về tài nguyên đất và rừng:",
                    options: [
                        { text: "a) (Nhận biết) Diện tích rừng đã tăng nhưng chất lượng rừng nhìn chung còn thấp.", answer: true },
                        { text: "b) (Thông hiểu) Sử dụng đất hợp lí ở vùng đồi núi cần chú ý chống xói mòn.", answer: true },
                        { text: "c) (Vận dụng) Trồng cây theo băng, làm ruộng bậc thang giúp hạn chế xói mòn đất dốc.", answer: true },
                        { text: "d) (Vận dụng cao) Đốt nương làm rẫy là biện pháp giúp bảo vệ rừng.", answer: false }
                    ]
                },
                {
                    level: 'van_dung', type: 'tf', text: "Về tài nguyên khoáng sản nước ta:",
                    options: [
                        { text: "a) (Nhận biết) Nước ta có nhiều loại khoáng sản nhưng phần lớn các mỏ có trữ lượng vừa và nhỏ.", answer: true },
                        { text: "b) (Thông hiểu) Than ở Quảng Ninh, dầu khí ở thềm lục địa phía nam và bô-xit ở Tây Nguyên là các khoáng sản có giá trị.", answer: true },
                        { text: "c) (Vận dụng) Khai thác khoáng sản cần gắn với bảo vệ môi trường.", answer: true },
                        { text: "d) (Vận dụng cao) Khoáng sản là nguồn vô hạn nên có thể khai thác tối đa.", answer: false }
                    ]
                },
                {
                    level: 'van_dung', type: 'tf', text: "Về tài nguyên nước và biển:",
                    options: [
                        { text: "a) (Nhận biết) Tài nguyên nước phong phú nhưng phân bố không đều theo thời gian và không gian.", answer: true },
                        { text: "b) (Thông hiểu) Nước ngầm cũng là nguồn nước quan trọng cho sinh hoạt và sản xuất.", answer: true },
                        { text: "c) (Vận dụng) Biển Đông giàu hải sản và dầu khí.", answer: true },
                        { text: "d) (Vận dụng cao) Tài nguyên biển chỉ cần khai thác, không cần bảo vệ.", answer: false }
                    ]
                },
                {
                    level: 'van_dung', type: 'tf', text: "Về bảo vệ môi trường và ứng phó biến đổi khí hậu:",
                    options: [
                        { text: "a) (Nhận biết) Biểu hiện của biến đổi khí hậu gồm nhiệt độ tăng và mực nước biển dâng.", answer: true },
                        { text: "b) (Thông hiểu) Việt Nam là một trong những nước chịu ảnh hưởng nặng nề của biến đổi khí hậu.", answer: true },
                        { text: "c) (Vận dụng) Trồng rừng ngập mặn và phát triển năng lượng tái tạo góp phần ứng phó biến đổi khí hậu.", answer: true },
                        { text: "d) (Vận dụng cao) Ứng phó biến đổi khí hậu chỉ là trách nhiệm của Chính phủ, người dân không liên quan.", answer: false }
                    ]
                },
                {
                    level: 'van_dung', type: 'tf', text: "Cho bảng số liệu nhiệt độ trung bình (°C, đã làm tròn, mang tính minh hoạ): Hà Nội - tháng 1: 16,4; tháng 7: 28,9. TP. Hồ Chí Minh - tháng 1: 25,8; tháng 7: 27,1. Nhận định sau đúng hay sai?",
                    options: [
                        { text: "a) (Nhận biết) Nhiệt độ tháng 7 của Hà Nội cao hơn TP. Hồ Chí Minh.", answer: true },
                        { text: "b) (Thông hiểu) Chênh lệch nhiệt độ giữa tháng 7 và tháng 1 ở Hà Nội lớn hơn ở TP. Hồ Chí Minh.", answer: true },
                        { text: "c) (Vận dụng) Hà Nội có mùa đông lạnh do ảnh hưởng của gió mùa Đông Bắc.", answer: true },
                        { text: "d) (Vận dụng cao) Nhiệt độ ở TP. Hồ Chí Minh ít biến động trong năm chứng tỏ nơi đây không chịu ảnh hưởng của gió mùa.", answer: false }
                    ]
                },
                {
                    level: 'van_dung', type: 'tf', text: "Cho bảng số liệu về rừng nước ta (số liệu làm tròn): Diện tích rừng (triệu ha): năm 2010: 13,4; năm 2015: 14,1; năm 2020: 14,7. Độ che phủ rừng (%): 39,5; 40,8; 42,0. Nhận định sau đúng hay sai?",
                    options: [
                        { text: "a) (Nhận biết) Diện tích rừng năm 2020 lớn hơn năm 2010.", answer: true },
                        { text: "b) (Thông hiểu) Độ che phủ rừng tăng liên tục trong giai đoạn 2010 - 2020.", answer: true },
                        { text: "c) (Vận dụng) Diện tích rừng tăng thêm khoảng 1,3 triệu ha trong giai đoạn 2010 - 2020.", answer: true },
                        { text: "d) (Vận dụng cao) Diện tích rừng tăng nên chất lượng rừng tự nhiên chắc chắn cũng tăng tương ứng.", answer: false }
                    ]
                }
            ]
        }
    }
};
