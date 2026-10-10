/* =========================================================================
   ĐỀ THI THỬ MỚI (số 8 và 9) - Cấu trúc: 24 câu TNNLC + 4 câu Đúng/Sai
   Phần Đúng/Sai bám sát đề mẫu: mỗi câu 4 ý
     a) Nhận biết  b) Nhận biết  c) Thông hiểu  d) Vận dụng
   Câu có biểu đồ: khai báo trong trường `charts` (app.js tự vẽ SVG).
   LƯU Ý: số liệu biểu đồ đã làm tròn, dùng cho mục đích ôn tập;
          nên đối chiếu Niên giám thống kê/SGK trước khi dùng chính thức.
========================================================================= */

const mq = (text, options, answer) => ({ type: 'mcq', text, options, answer });
const tfq = (text, items, charts) => {
    const q = { type: 'tf', text, options: items.map(([t, a]) => ({ text: t, answer: a })) };
    if (charts) q.charts = charts;
    return q;
};

const dataMocktestNew = {};

/* ============================ ĐỀ SỐ 8 ============================ */
dataMocktestNew[8] = [
    // ---------- PHẦN I: 24 câu trắc nghiệm nhiều lựa chọn ----------
    // Nhận biết
    mq("Phần đất liền của nước ta nằm trong múi giờ số mấy?", ["Múi giờ số 5.", "Múi giờ số 6.", "Múi giờ số 7.", "Múi giờ số 8."], 2),
    mq("Dãy núi nào sau đây có đỉnh núi cao nhất nước ta?", ["Trường Sơn Bắc.", "Hoàng Liên Sơn.", "Bạch Mã.", "Trường Sơn Nam."], 1),
    mq("Đồng bằng nào sau đây có diện tích lớn nhất nước ta?", ["Đồng bằng sông Hồng.", "Đồng bằng sông Cửu Long.", "Đồng bằng Thanh – Nghệ – Tĩnh.", "Đồng bằng ven biển Nam Trung Bộ."], 1),
    mq("Việt Nam là quốc gia có bao nhiêu dân tộc cùng sinh sống?", ["52 dân tộc.", "53 dân tộc.", "54 dân tộc.", "55 dân tộc."], 2),
    mq("Hiệp hội các quốc gia Đông Nam Á (ASEAN) được thành lập vào năm nào?", ["1961.", "1967.", "1975.", "1995."], 1),
    mq("Đại dương nào sau đây có diện tích lớn nhất thế giới?", ["Đại Tây Dương.", "Ấn Độ Dương.", "Thái Bình Dương.", "Bắc Băng Dương."], 2),

    // Thông hiểu
    mq("Thời tiết lạnh ẩm, có mưa phùn ở Bắc Bộ vào nửa sau mùa đông chủ yếu do nguyên nhân nào sau đây?", ["Gió Tây khô nóng hoạt động mạnh.", "Gió mùa Đông Bắc đi qua vùng biển làm tăng độ ẩm.", "Hoạt động mạnh của dải hội tụ nhiệt đới.", "Tín phong bán cầu Bắc thổi quanh năm."], 1),
    mq("Đặc điểm chung nổi bật của địa hình nước ta là gì?", ["Đồng bằng chiếm phần lớn diện tích.", "Đồi núi thấp chiếm ưu thế.", "Núi cao trên 2000 m chiếm phần lớn diện tích.", "Cao nguyên chiếm diện tích lớn nhất."], 1),
    mq("Đô thị hoá ở nước ta những năm gần đây diễn ra nhanh chủ yếu do nguyên nhân nào sau đây?", ["Dân cư nông thôn giảm mạnh do mức sinh thấp.", "Tác động của công nghiệp hoá, hiện đại hoá và chuyển dịch cơ cấu kinh tế.", "Các đô thị cổ được bảo tồn nguyên trạng.", "Chiến tranh làm di dân ồ ạt vào thành phố."], 1),
    mq("Nguồn lao động nước ta dồi dào nhưng năng suất lao động còn thấp chủ yếu do nguyên nhân nào sau đây?", ["Số người trong độ tuổi lao động quá ít.", "Trình độ chuyên môn kĩ thuật và tác phong công nghiệp còn hạn chế.", "Thiếu hoàn toàn nguồn lao động nông thôn.", "Lao động chỉ tập trung trong ngành dịch vụ."], 1),
    mq("Khu vực hải đảo Đông Nam Á có nhiều núi lửa và động đất chủ yếu do nguyên nhân nào sau đây?", ["Nằm ở nơi tiếp xúc của các mảng kiến tạo, thuộc vành đai lửa Thái Bình Dương.", "Có khí hậu xích đạo nóng ẩm quanh năm.", "Có nhiều sông lớn bồi đắp phù sa.", "Chịu tác động mạnh của gió mùa Tây Nam."], 0),
    mq("Giao thông đường biển nước ta có điều kiện thuận lợi để phát triển chủ yếu nhờ yếu tố nào sau đây?", ["Đường bờ biển dài, nhiều vũng vịnh nước sâu và gần tuyến hàng hải quốc tế.", "Địa hình đồng bằng rộng lớn, bằng phẳng.", "Mạng lưới sông ngòi ngắn và dốc.", "Khí hậu không có bão."], 0),

    // Vận dụng
    mq("Giải pháp nào sau đây phù hợp nhất để thích ứng với xâm nhập mặn ở Đồng bằng sông Cửu Long?", ["Mở rộng diện tích trồng lúa ba vụ ở vùng ven biển.", "Chuyển đổi cơ cấu cây trồng, vật nuôi và xây dựng hệ thống thuỷ lợi thích ứng.", "Khai thác tối đa nước ngầm để tưới tiêu.", "Xây dựng nhiều khu công nghiệp ở vùng cửa sông."], 1),
    mq("Để phát triển kinh tế biển bền vững, nước ta cần chú trọng giải pháp nào sau đây?", ["Tăng cường khai thác thuỷ sản gần bờ.", "Khai thác hợp lí tài nguyên gắn với bảo vệ môi trường và chủ quyền biển đảo.", "Hạn chế đầu tư vào các ngành dịch vụ biển.", "Chỉ xuất khẩu hải sản thô."], 1),
    mq("Việc gắn vùng chuyên canh cây công nghiệp ở Tây Nguyên với công nghiệp chế biến chủ yếu nhằm mục đích nào sau đây?", ["Giảm diện tích rừng tự nhiên.", "Nâng cao giá trị sản phẩm và ổn định đầu ra cho nông sản.", "Giảm số lượng lao động trong nông nghiệp.", "Hạn chế xuất khẩu nông sản."], 1),
    mq("Yếu tố nào sau đây quyết định hàng đầu đến sự phát triển các ngành công nghiệp công nghệ cao ở nước ta?", ["Nguồn tài nguyên khoáng sản phong phú.", "Lực lượng lao động trình độ cao và năng lực khoa học – công nghệ.", "Diện tích đất đai rộng lớn.", "Số lượng dân cư đông."], 1),
    mq("Giải pháp nào sau đây phù hợp để thích ứng với xu hướng già hoá dân số ở nước ta?", ["Khuyến khích tăng mạnh mức sinh ở thành thị.", "Hoàn thiện hệ thống an sinh xã hội, y tế và chính sách lao động phù hợp.", "Giảm đầu tư cho giáo dục.", "Hạn chế người cao tuổi tham gia lao động."], 1),
    mq("Việc phát triển các tuyến cao tốc Bắc – Nam có ý nghĩa chủ yếu nào sau đây?", ["Giảm vai trò của giao thông đường sắt.", "Tăng cường liên kết vùng, giảm chi phí vận tải và thúc đẩy phát triển kinh tế.", "Thu hẹp không gian đô thị.", "Hạn chế phát triển du lịch."], 1),

    // Vận dụng cao
    mq("Biến động chính trị ở Tây Nam Á ảnh hưởng mạnh đến kinh tế thế giới chủ yếu vì lí do nào sau đây?", ["Khu vực có dân số đông nhất thế giới.", "Khu vực có trữ lượng và sản lượng dầu mỏ lớn, tác động đến giá năng lượng toàn cầu.", "Khu vực dẫn đầu thế giới về sản xuất lương thực.", "Khu vực có nhiều nước công nghiệp hoá hàng đầu."], 1),
    mq("Liên minh châu Âu (EU) có sức mạnh kinh tế lớn chủ yếu nhờ yếu tố nào sau đây?", ["Có diện tích lãnh thổ lớn nhất thế giới.", "Thị trường chung, đồng tiền chung và mức độ liên kết sâu rộng giữa các nước thành viên.", "Chỉ dựa vào nguồn tài nguyên thiên nhiên.", "Các nước hoàn toàn đóng cửa với bên ngoài."], 1),
    mq("Đồng bằng sông Hồng có mật độ dân số cao nhất cả nước, vấn đề cấp bách cần giải quyết hiện nay là gì?", ["Thiếu đất để mở rộng đô thị, thiếu việc làm và áp lực lên môi trường, hạ tầng.", "Thiếu hoàn toàn nguồn lao động.", "Không có khả năng phát triển công nghiệp.", "Thiếu thị trường tiêu thụ."], 0),
    mq("Chủ trương chuyển từ khai thác thuỷ sản ven bờ sang xa bờ chủ yếu nhằm mục đích nào sau đây?", ["Giảm tổng sản lượng thuỷ sản của cả nước.", "Giảm áp lực lên nguồn lợi ven bờ và góp phần bảo vệ chủ quyền biển đảo.", "Hạn chế phát triển nuôi trồng thuỷ sản.", "Tăng số lượng tàu thuyền nhỏ."], 1),
    mq("Gió Tây khô nóng ở Bắc Trung Bộ vào đầu mùa hạ chủ yếu do nguyên nhân nào sau đây?", ["Gió mùa Đông Bắc suy yếu.", "Gió mùa Tây Nam vượt dãy Trường Sơn, gây hiệu ứng phơn.", "Bão và áp thấp nhiệt đới hoạt động liên tục.", "Dòng biển nóng chảy sát bờ."], 1),
    mq("Chuyển dịch cơ cấu kinh tế theo hướng kinh tế xanh ở nước ta chủ yếu nhằm mục tiêu nào sau đây?", ["Tăng nhanh khai thác tài nguyên để xuất khẩu.", "Phát triển bền vững, giảm phát thải và sử dụng hiệu quả tài nguyên.", "Hạn chế hội nhập quốc tế.", "Giảm vai trò của công nghệ."], 1),

    // ---------- PHẦN II: 4 câu Đúng/Sai ----------
    // Câu 1 - Biểu đồ cơ cấu GDP (cột chồng)
    tfq("Câu 1. Cho biểu đồ cơ cấu GDP của nước ta theo nhóm ngành, giai đoạn 2010 – 2024:", [
        ["a) (Nhận biết) Giai đoạn 2010 – 2024, tỉ trọng nhóm ngành nông, lâm, thuỷ sản trong cơ cấu GDP giảm liên tục.", true],
        ["b) (Nhận biết) Năm 2020, tỉ trọng nhóm ngành công nghiệp và xây dựng cao hơn nhóm ngành dịch vụ.", false],
        ["c) (Thông hiểu) Giai đoạn 2010 – 2024, tỉ trọng nhóm ngành dịch vụ tăng 7,2 điểm phần trăm.", true],
        ["d) (Vận dụng) Cơ cấu GDP chuyển dịch chủ yếu do khai thác thêm tài nguyên thiên nhiên và mở rộng diện tích đất nông nghiệp.", false]
    ], [{
        kind: 'stacked', title: "Cơ cấu GDP của Việt Nam theo nhóm ngành, giai đoạn 2010 – 2024", unit: "%",
        categories: ["2010", "2015", "2020", "2024"],
        series: [
            { name: "Nông, lâm, thuỷ sản", values: [18.9, 17.0, 14.8, 11.9] },
            { name: "Công nghiệp và xây dựng", values: [38.2, 37.0, 37.4, 38.0] },
            { name: "Dịch vụ", values: [42.9, 46.0, 47.8, 50.1] }
        ],
        note: "Số liệu đã làm tròn, dùng cho ôn tập."
    }]),

    // Câu 2 - Biểu đồ GDP/người ĐNA (cột)
    tfq("Câu 2. Cho biểu đồ GDP bình quân đầu người của một số quốc gia Đông Nam Á năm 2023:", [
        ["a) (Nhận biết) Năm 2023, Xin-ga-po có GDP/người cao nhất trong các quốc gia được thể hiện trên biểu đồ.", true],
        ["b) (Nhận biết) Năm 2023, GDP/người của Việt Nam cao hơn của Thái Lan.", false],
        ["c) (Thông hiểu) Năm 2023, GDP/người của Xin-ga-po gấp trên 15 lần của Việt Nam.", true],
        ["d) (Vận dụng) Sự chênh lệch GDP/người giữa các quốc gia Đông Nam Á chủ yếu do khác nhau về trình độ phát triển kinh tế, khoa học – công nghệ và chất lượng nguồn lao động.", true]
    ], [{
        kind: 'bar', title: "GDP bình quân đầu người của một số quốc gia Đông Nam Á năm 2023", unit: "USD",
        categories: ["Xin-ga-po", "Thái Lan", "In-đô-nê-xi-a", "Việt Nam", "Phi-líp-pin"],
        series: [{ name: "GDP/người", values: [84700, 7170, 4920, 4350, 3900] }],
        note: "Số liệu đã làm tròn, dùng cho ôn tập."
    }]),

    // Câu 3 - Thông tin văn bản
    tfq("Câu 3. Cho thông tin về vị trí địa lí và phạm vi lãnh thổ của nước ta:", [
        ["a) (Nhận biết) Nước ta nằm ở rìa phía đông của bán đảo Đông Dương, gần trung tâm khu vực Đông Nam Á.", true],
        ["b) (Nhận biết) Vùng biển Việt Nam có diện tích khoảng 3 triệu km² nằm trong Biển Đông.", false],
        ["c) (Thông hiểu) Vị trí nằm trong vùng nội chí tuyến bán cầu Bắc là nguyên nhân chủ yếu làm cho nước ta có nền nhiệt độ cao, nhiều ánh nắng.", true],
        ["d) (Vận dụng) Đường bờ biển dài, nhiều vịnh nước sâu là cơ sở chủ yếu để phát triển ngành khai thác khoáng sản trên đất liền.", false]
    ]),

    // Câu 4 - Thông tin văn bản
    tfq("Câu 4. Về ngành trồng trọt ở nước ta hiện nay:", [
        ["a) (Nhận biết) Lúa là cây lương thực chính, Đồng bằng sông Cửu Long là vùng sản xuất lúa trọng điểm của cả nước.", true],
        ["b) (Nhận biết) Cây công nghiệp lâu năm chủ yếu phân bố ở các đồng bằng ven biển miền Trung.", false],
        ["c) (Thông hiểu) Việc hình thành các vùng chuyên canh cây công nghiệp chủ yếu nhằm giảm tỉ trọng của ngành chăn nuôi.", false],
        ["d) (Vận dụng) Ứng dụng công nghệ cao trong trồng trọt góp phần nâng cao giá trị nông sản và thích ứng với biến đổi khí hậu.", true]
    ])
];

/* ============================ ĐỀ SỐ 9 ============================ */
dataMocktestNew[9] = [
    // ---------- PHẦN I: 24 câu trắc nghiệm nhiều lựa chọn ----------
    // Nhận biết
    mq("Đường bờ biển của nước ta dài khoảng bao nhiêu km?", ["Khoảng 2360 km.", "Khoảng 3260 km.", "Khoảng 4120 km.", "Khoảng 1560 km."], 1),
    mq("Hệ thống sông nào sau đây có lưu vực lớn nhất ở nước ta?", ["Sông Hồng.", "Sông Mê Công.", "Sông Mã.", "Sông Đồng Nai."], 1),
    mq("Loại đất chiếm diện tích lớn nhất ở nước ta là", ["đất phù sa.", "đất feralit.", "đất mặn.", "đất phèn."], 1),
    mq("Đảo lớn nhất của nước ta là", ["Cát Bà.", "Lý Sơn.", "Phú Quốc.", "Côn Đảo."], 2),
    mq("Trung tâm kinh tế – tài chính lớn nhất cả nước hiện nay là", ["Hà Nội.", "Thành phố Hồ Chí Minh.", "Đà Nẵng.", "Cần Thơ."], 1),
    mq("Cây công nghiệp lâu năm có diện tích lớn nhất ở Tây Nguyên là", ["chè.", "cao su.", "cà phê.", "hồ tiêu."], 2),

    // Thông hiểu
    mq("Biên độ nhiệt năm ở miền Bắc lớn hơn miền Nam chủ yếu do nguyên nhân nào sau đây?", ["Địa hình miền Bắc thấp hơn.", "Vị trí gần chí tuyến hơn và chịu tác động mạnh của gió mùa Đông Bắc.", "Miền Bắc có diện tích rừng lớn hơn.", "Miền Bắc có nhiều sông hơn."], 1),
    mq("Đồng bằng sông Hồng có mật độ dân số cao chủ yếu do nguyên nhân nào sau đây?", ["Mới được khai thác gần đây.", "Lịch sử khai thác lâu đời, thuận lợi cho sản xuất lúa nước.", "Có nhiều khoáng sản quý hiếm.", "Khí hậu nóng khô quanh năm."], 1),
    mq("Cơ cấu dân số vàng tạo thuận lợi chủ yếu nào sau đây cho phát triển kinh tế nước ta?", ["Giảm áp lực lên hệ thống y tế do ít người già.", "Nguồn lao động dồi dào và tiềm năng thị trường tiêu thụ lớn.", "Tỉ lệ phụ thuộc rất cao.", "Dân số giảm nhanh."], 1),
    mq("Trung du và miền núi Bắc Bộ có nhiều nhà máy thuỷ điện chủ yếu do nguyên nhân nào sau đây?", ["Địa hình bằng phẳng, sông chảy chậm.", "Sông ngòi có độ dốc lớn, nhiều nước và tiềm năng thuỷ điện lớn.", "Khí hậu khô hạn.", "Dân cư đông đúc."], 1),
    mq("Các nhà máy chế biến nông sản thường được xây dựng gần vùng nguyên liệu chủ yếu vì", ["nông sản dễ hư hỏng, cần giảm chi phí và thời gian vận chuyển.", "đất đai ở đó rẻ nhất cả nước.", "gần các trung tâm du lịch lớn.", "thiếu lao động ở đô thị."], 0),
    mq("Du lịch biển phát triển mạnh ở duyên hải miền Trung chủ yếu do nguyên nhân nào sau đây?", ["Có nhiều bãi biển đẹp, tài nguyên du lịch biển phong phú.", "Khí hậu lạnh quanh năm.", "Không chịu ảnh hưởng của bão.", "Có nhiều mỏ khoáng sản."], 0),

    // Vận dụng
    mq("Giải pháp chủ yếu để hạn chế thiếu nước tưới vào mùa khô ở Tây Nguyên là", ["mở rộng diện tích cây công nghiệp trên sườn dốc.", "xây dựng hồ chứa, áp dụng tưới tiết kiệm nước và bảo vệ rừng đầu nguồn.", "tăng khai thác nước ngầm không kiểm soát.", "chuyển toàn bộ sang trồng lúa nước."], 1),
    mq("Chuyển đổi số trong nông nghiệp ở nước ta có vai trò chủ yếu nào sau đây?", ["Tăng sử dụng lao động thủ công.", "Nâng cao năng suất, quản lí chất lượng và truy xuất nguồn gốc sản phẩm.", "Giảm vai trò của thị trường.", "Hạn chế xuất khẩu nông sản."], 1),
    mq("Phát triển năng lượng tái tạo ở Nam Trung Bộ chủ yếu dựa trên lợi thế nào sau đây?", ["Nguồn nước dồi dào quanh năm.", "Số giờ nắng cao và tiềm năng gió lớn.", "Trữ lượng than đá lớn.", "Địa hình đồng bằng rộng lớn."], 1),
    mq("Việc tăng cường liên kết vùng ở nước ta nhằm mục đích chủ yếu nào sau đây?", ["Làm giảm vai trò của từng vùng.", "Phát huy thế mạnh, tạo không gian phát triển và nâng cao sức cạnh tranh.", "Hạn chế hợp tác giữa các địa phương.", "Giảm đầu tư hạ tầng."], 1),
    mq("Phát triển dịch vụ logistics có ý nghĩa chủ yếu nào sau đây đối với kinh tế nước ta?", ["Làm tăng chi phí vận chuyển.", "Giảm chi phí lưu thông, nâng cao sức cạnh tranh của hàng hoá.", "Giảm hoạt động xuất nhập khẩu.", "Thu hẹp thị trường nội địa."], 1),
    mq("Hệ quả nào sau đây thường gặp khi đô thị hoá diễn ra quá nhanh, thiếu quy hoạch?", ["Môi trường được cải thiện đáng kể.", "Ô nhiễm, ùn tắc giao thông và quá tải hạ tầng đô thị.", "Giá nhà ở giảm mạnh.", "Dân cư nông thôn tăng nhanh."], 1),

    // Vận dụng cao
    mq("Việc Việt Nam gia nhập WTO năm 2007 tác động tích cực chủ yếu nào sau đây?", ["Chấm dứt hoàn toàn nhập khẩu.", "Mở rộng thị trường xuất khẩu và thu hút đầu tư nước ngoài.", "Giảm quan hệ với các nước ASEAN.", "Hạn chế cải cách thể chế."], 1),
    mq("Đông Nam Á có vị trí chiến lược quan trọng trên thế giới chủ yếu vì", ["nằm ở vùng cực, ít dân cư.", "nằm giữa hai đại dương, trên các tuyến hàng hải và hàng không quốc tế.", "có diện tích lớn nhất châu Á.", "không chịu ảnh hưởng của thiên tai."], 1),
    mq("Hiện tượng El Niño gây hạn hán, xâm nhập mặn ở Đồng bằng sông Cửu Long tác động như thế nào đến sản xuất lúa?", ["Làm tăng năng suất và sản lượng lúa.", "Gây thiếu nước ngọt, giảm năng suất và thiệt hại mùa vụ.", "Không ảnh hưởng đến sản xuất.", "Làm tăng diện tích đất phù sa mới ngay lập tức."], 1),
    mq("Thương mại điện tử phát triển nhanh làm thay đổi hoạt động nội thương ở nước ta như thế nào?", ["Thu hẹp thị trường tiêu thụ.", "Mở rộng kênh phân phối, thay đổi hành vi mua sắm và giảm phụ thuộc vào cửa hàng truyền thống.", "Làm giảm vai trò của vận tải.", "Chấm dứt hoạt động của siêu thị."], 1),
    mq("Vùng kinh tế trọng điểm có vai trò chủ yếu nào sau đây trong phát triển kinh tế cả nước?", ["Chỉ sản xuất nông sản xuất khẩu.", "Dẫn dắt, lan toả và thúc đẩy phát triển các vùng khác.", "Hạn chế thu hút đầu tư nước ngoài.", "Chỉ đóng góp về an ninh quốc phòng."], 1),
    mq("Việc đẩy mạnh sản xuất và tiêu dùng năng lượng sạch ở nước ta chủ yếu nhằm mục đích nào sau đây?", ["Tăng lượng khí thải nhà kính.", "Đảm bảo an ninh năng lượng, giảm ô nhiễm và ứng phó biến đổi khí hậu.", "Giảm đầu tư vào khoa học – công nghệ.", "Hạn chế phát triển công nghiệp."], 1),

    // ---------- PHẦN II: 4 câu Đúng/Sai ----------
    // Câu 1 - Biểu đồ đường: khách quốc tế
    tfq("Câu 1. Cho biểu đồ số lượt khách du lịch quốc tế đến Việt Nam, giai đoạn 2019 – 2024:", [
        ["a) (Nhận biết) Năm 2019, số lượt khách quốc tế đến Việt Nam cao hơn năm 2024.", true],
        ["b) (Nhận biết) Năm 2020 là năm có số lượt khách quốc tế đến Việt Nam thấp nhất trong giai đoạn.", false],
        ["c) (Thông hiểu) Số lượt khách quốc tế giảm mạnh giai đoạn 2019 – 2021 chủ yếu do tác động của đại dịch COVID-19 và các hạn chế đi lại.", true],
        ["d) (Vận dụng) Số lượt khách quốc tế tăng nhanh giai đoạn 2022 – 2024 chủ yếu do dân số trong nước tăng nhanh.", false]
    ], [{
        kind: 'line', title: "Số lượt khách du lịch quốc tế đến Việt Nam, giai đoạn 2019 – 2024", unit: "triệu lượt",
        categories: ["2019", "2020", "2021", "2022", "2023", "2024"],
        series: [{ name: "Khách quốc tế", values: [18.0, 3.8, 0.2, 3.7, 12.6, 17.5] }],
        note: "Số liệu đã làm tròn, dùng cho ôn tập."
    }]),

    // Câu 2 - Biểu đồ cột chồng: cơ cấu dân số theo nhóm tuổi
    tfq("Câu 2. Cho biểu đồ cơ cấu dân số theo nhóm tuổi của Việt Nam, giai đoạn 2009 – 2024:", [
        ["a) (Nhận biết) Giai đoạn 2009 – 2024, tỉ trọng nhóm tuổi 0 – 14 giảm liên tục.", true],
        ["b) (Nhận biết) Năm 2019, tỉ trọng nhóm tuổi từ 65 trở lên cao hơn nhóm tuổi 0 – 14.", false],
        ["c) (Thông hiểu) Giai đoạn 2009 – 2024, tỉ trọng nhóm tuổi từ 65 trở lên tăng 2,8 điểm phần trăm.", true],
        ["d) (Vận dụng) Quá trình già hoá dân số ở nước ta chủ yếu do mức sinh tăng nhanh trong những năm gần đây.", false]
    ], [{
        kind: 'stacked', title: "Cơ cấu dân số Việt Nam theo nhóm tuổi, giai đoạn 2009 – 2024", unit: "%",
        categories: ["2009", "2019", "2024"],
        series: [
            { name: "0 – 14 tuổi", values: [24.5, 24.3, 23.0] },
            { name: "15 – 64 tuổi", values: [69.1, 68.0, 67.8] },
            { name: "Từ 65 tuổi trở lên", values: [6.4, 7.7, 9.2] }
        ],
        note: "Số liệu đã làm tròn, dùng cho ôn tập."
    }]),

    // Câu 3 - Thông tin văn bản: Đông Nam Bộ
    tfq("Câu 3. Về vùng Đông Nam Bộ ở nước ta hiện nay:", [
        ["a) (Nhận biết) Đông Nam Bộ là vùng kinh tế năng động, có đóng góp lớn vào GDP của cả nước.", true],
        ["b) (Nhận biết) Chè là cây công nghiệp lâu năm chủ lực của vùng.", false],
        ["c) (Thông hiểu) Công nghiệp của vùng phát triển mạnh chủ yếu do có nguồn nguyên liệu nông sản tại chỗ rất dồi dào.", false],
        ["d) (Vận dụng) Phát triển mạng lưới giao thông liên kết vùng và đô thị thông minh góp phần giảm ùn tắc, nâng cao hiệu quả kinh tế của vùng.", true]
    ]),

    // Câu 4 - Thông tin văn bản: Tây Nguyên
    tfq("Câu 4. Về điều kiện phát triển nông nghiệp ở vùng Tây Nguyên:", [
        ["a) (Nhận biết) Tây Nguyên là vùng có diện tích trồng cà phê lớn nhất cả nước.", true],
        ["b) (Nhận biết) Tây Nguyên là vùng giáp biển, có nhiều cảng biển nước sâu.", false],
        ["c) (Thông hiểu) Mùa khô kéo dài, thiếu nước tưới là một trong những khó khăn lớn đối với sản xuất nông nghiệp của vùng.", true],
        ["d) (Vận dụng) Giải pháp hàng đầu để phát triển cà phê bền vững là mở rộng diện tích bằng cách khai thác rừng đầu nguồn.", false]
    ])
];

/* ============================ ĐỀ SỐ 1 (THEO ĐỀ MẪU) ============================
   Phần II lấy nguyên 4 câu Đúng/Sai của đề mẫu (có biểu đồ ở câu 1 và câu 2):
     Câu 1: Tây Nam Á (biểu đồ dân số, GDP/người)   - Địa lí 11
     Câu 2: Tự nhiên Miền Tây Bắc và Bắc Trung Bộ    - Địa lí 12
     Câu 3: Nội thương                                - Địa lí 12
     Câu 4: Đồng bằng sông Cửu Long (lúa)             - Địa lí 12
   (Bốn câu "Đề 2" của mẫu: EU, phân hoá Đông–Tây, Du lịch, cây ăn quả ĐBSCL
    vẫn nằm trong các chủ đề luyện tập và có thể dùng cho đề số 2.)
================================================================================= */
const cloneQ = (q) => JSON.parse(JSON.stringify(q));
const sampleTF = (typeof dataExtra !== 'undefined') ? {
    tayNamA: dataExtra.khoi11[3].exercises.tf[0],
    tuNhien: dataExtra.khoi12[3].exercises.tf[0],
    noiThuong: dataExtra.khoi12[4].exercises.tf[0],
    lua: dataExtra.khoi12[5].exercises.tf[0]
} : null;

dataMocktestNew[1] = [
    // ---------- PHẦN I: 24 câu trắc nghiệm nhiều lựa chọn ----------
    // Nhận biết
    mq("Khu vực Tây Nam Á nổi tiếng thế giới về tài nguyên nào sau đây?", ["Than đá.", "Dầu mỏ và khí tự nhiên.", "Quặng sắt.", "Gỗ và lâm sản."], 1),
    mq("Đồng tiền chung của phần lớn các nước thành viên Liên minh châu Âu (EU) là", ["Đô la Mỹ.", "Bảng Anh.", "Ơ-rô.", "Phrăng Thuỵ Sĩ."], 2),
    mq("Dãy núi nào sau đây nằm ở khu vực Bắc Trung Bộ nước ta?", ["Hoàng Liên Sơn.", "Trường Sơn Bắc.", "Con Voi.", "Ngân Sơn."], 1),
    mq("Hai trung tâm nội thương lớn nhất nước ta hiện nay là", ["Hải Phòng và Đà Nẵng.", "Hà Nội và Thành phố Hồ Chí Minh.", "Cần Thơ và Huế.", "Biên Hoà và Vũng Tàu."], 1),
    mq("Vùng nào sau đây là vựa lúa lớn nhất cả nước?", ["Đồng bằng sông Hồng.", "Đồng bằng sông Cửu Long.", "Bắc Trung Bộ.", "Duyên hải Nam Trung Bộ."], 1),
    mq("Quốc gia nào sau đây thuộc khu vực Tây Nam Á?", ["Cô-oét.", "Lào.", "Ấn Độ.", "Thái Lan."], 0),

    // Thông hiểu
    mq("Phần lớn lãnh thổ Tây Nam Á có nhiều hoang mạc, sông ngòi thưa thớt chủ yếu do nguyên nhân nào sau đây?", ["Khí hậu khô hạn do nằm trong đới nóng và chịu ảnh hưởng của khối khí lục địa.", "Địa hình thấp, bằng phẳng.", "Nằm sát cực Bắc.", "Có lượng mưa rất lớn quanh năm."], 0),
    mq("Nguyên nhân chủ yếu thúc đẩy thương mại điện tử ở nước ta phát triển nhanh là", ["Sự phát triển của công nghệ thông tin và internet.", "Số lượng chợ truyền thống tăng nhanh.", "Dân số nông thôn tăng mạnh.", "Giá hàng hoá giảm liên tục."], 0),
    mq("Điều kiện nào sau đây thuận lợi nhất cho sản xuất lúa ở Đồng bằng sông Cửu Long?", ["Đất phù sa rộng lớn, địa hình bằng phẳng, nguồn nước dồi dào.", "Địa hình đồi núi thấp xen đồng bằng.", "Khí hậu có mùa đông lạnh.", "Đất feralit chiếm diện tích lớn."], 0),
    mq("Sự phân hoá thiên nhiên theo độ cao ở nước ta tạo nên các đai cao nào sau đây?", ["Chỉ có một đai nhiệt đới gió mùa.", "Đai nhiệt đới gió mùa, đai cận nhiệt đới gió mùa trên núi và đai ôn đới gió mùa trên núi.", "Chỉ có đai cận nhiệt đới và đai ôn đới.", "Đai xích đạo và đai cận cực."], 1),
    mq("Cơ cấu cây ăn quả của Đồng bằng sông Cửu Long đa dạng chủ yếu do nguyên nhân nào sau đây?", ["Khí hậu cận xích đạo, đất phù sa màu mỡ và nguồn nước phong phú.", "Địa hình núi cao, khí hậu lạnh.", "Đất đai nghèo dinh dưỡng.", "Lượng mưa rất thấp."], 0),
    mq("Du lịch nước ta thu hút nhiều khách quốc tế chủ yếu nhờ yếu tố nào sau đây?", ["Tài nguyên du lịch đa dạng, phong phú và đặc sắc.", "Có chi phí du lịch cao nhất khu vực.", "Không có sự cạnh tranh từ các nước khác.", "Chỉ có tài nguyên du lịch nhân văn."], 0),

    // Vận dụng
    mq("Giải pháp chủ yếu để nâng cao chất lượng sản phẩm du lịch nước ta là", ["Giảm đầu tư vào cơ sở vật chất.", "Đa dạng hoá sản phẩm, nâng cao chất lượng dịch vụ và nguồn nhân lực du lịch.", "Hạn chế quảng bá hình ảnh du lịch.", "Chỉ tập trung vào một loại hình du lịch."], 1),
    mq("Việc chuyển một phần đất trồng lúa kém hiệu quả sang trồng cây ăn quả ở Đồng bằng sông Cửu Long chủ yếu nhằm mục đích nào sau đây?", ["Tăng giá trị sản xuất và thích ứng với biến đổi khí hậu.", "Giảm hoàn toàn sản xuất nông nghiệp.", "Mở rộng đất ở đô thị.", "Giảm dân số nông thôn."], 0),
    mq("Phát triển nội thương gắn với chuyển đổi số mang lại tác dụng chủ yếu nào sau đây?", ["Thu hẹp thị trường tiêu thụ.", "Mở rộng thị trường, giảm chi phí và nâng cao trải nghiệm người tiêu dùng.", "Làm giảm vai trò của vận tải.", "Hạn chế sự cạnh tranh lành mạnh."], 1),
    mq("Để thu hẹp chênh lệch về hoạt động nội thương giữa các vùng, giải pháp quan trọng nhất là", ["Tập trung toàn bộ đầu tư vào các đô thị lớn.", "Đầu tư hạ tầng thương mại, giao thông và nâng cao mức sống dân cư các vùng khó khăn.", "Hạn chế phát triển thương mại điện tử.", "Giảm số lượng siêu thị."], 1),
    mq("Việc đa dạng hoá nền kinh tế là yêu cầu cấp thiết đối với các quốc gia Tây Nam Á vì", ["dầu mỏ là nguồn tài nguyên hữu hạn và giá dầu thường biến động.", "khu vực không có tài nguyên thiên nhiên.", "dân số khu vực quá ít.", "các nước không tham gia thương mại quốc tế."], 0),
    mq("Hướng phát triển nông nghiệp phù hợp ở vùng đồi núi Tây Bắc nhằm bảo vệ môi trường là", ["Đốt nương làm rẫy trên sườn dốc.", "Trồng cây phù hợp độ dốc, bảo vệ rừng và chống xói mòn đất.", "Mở rộng canh tác lúa nước trên đỉnh núi.", "Chặt rừng để mở rộng đồng cỏ."], 1),

    // Vận dụng cao
    mq("Liên minh châu Âu (EU) được đánh giá là mô hình liên kết khu vực thành công chủ yếu vì", ["các nước thành viên hoàn toàn độc lập về kinh tế.", "có thị trường chung, đồng tiền chung, thể chế chặt chẽ và chính sách chung nhiều lĩnh vực.", "chỉ hợp tác về quân sự.", "không có quy định chung nào."], 1),
    mq("Tỉ lệ dân thành thị ở Tây Ban Nha và Pháp cao hơn Ba Lan chủ yếu do nguyên nhân nào sau đây?", ["Khác nhau về trình độ phát triển kinh tế và quá trình đô thị hoá.", "Diện tích lãnh thổ nhỏ hơn.", "Không có dân cư nông thôn.", "Chịu ảnh hưởng của khí hậu lạnh hơn."], 0),
    mq("Gió Tây khô nóng hoạt động ở Bắc Trung Bộ gây ra hậu quả nào đối với sản xuất nông nghiệp?", ["Làm tăng độ ẩm đất.", "Gây hạn hán, khô nóng, ảnh hưởng đến sinh trưởng của cây trồng.", "Làm giảm nhiệt độ mùa hạ.", "Gây mưa lớn kéo dài."], 1),
    mq("Việc thúc đẩy nền nông nghiệp xanh ở nước ta chủ yếu nhằm mục đích nào sau đây?", ["Tăng nhanh việc sử dụng phân bón hoá học.", "Nâng cao chất lượng nông sản, giảm tác động môi trường và phát triển bền vững.", "Mở rộng diện tích đất bằng cách phá rừng.", "Giảm xuất khẩu nông sản."], 1),
    mq("Khi giá dầu thế giới giảm mạnh, nền kinh tế Cô-oét chịu ảnh hưởng chủ yếu như thế nào?", ["Thu ngân sách và xuất khẩu giảm, nền kinh tế kém ổn định.", "Thu ngân sách tăng nhanh.", "Không bị ảnh hưởng vì không xuất khẩu dầu.", "Dân số tăng nhanh."], 0),
    mq("Hiệp định EVFTA giữa Việt Nam và EU tác động tích cực chủ yếu nào sau đây đến kinh tế nước ta?", ["Làm giảm quan hệ thương mại với các đối tác khác.", "Mở rộng thị trường xuất khẩu sang EU và thu hút đầu tư, công nghệ.", "Chấm dứt nhập khẩu hàng hoá.", "Hạn chế phát triển công nghiệp chế biến."], 1),

    // ---------- PHẦN II: 4 câu Đúng/Sai (theo đề mẫu) ----------
    ...(sampleTF ? [cloneQ(sampleTF.tayNamA), cloneQ(sampleTF.tuNhien), cloneQ(sampleTF.noiThuong), cloneQ(sampleTF.lua)] : [])
];

/* ---------- Xáo trộn vị trí đáp án (cố định, không đổi mỗi lần tải) ----------
   Bỏ qua các câu có lựa chọn chứa chữ số (số liệu/thứ tự tự nhiên). */
(function shuffleFixed() {
    let seed = 20261010;
    const rnd = () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };
    Object.keys(dataMocktestNew).forEach(id => {
        dataMocktestNew[id].forEach(q => {
            if (q.type !== 'mcq' || q.options.some(o => /\d/.test(o))) return;
            const correct = q.options[q.answer];
            const arr = q.options.slice();
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(rnd() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            q.options = arr;
            q.answer = arr.indexOf(correct);
        });
    });
})();
