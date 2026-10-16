/* =========================================================================
   DATA_MOCKTEST.JS - NGÂN HÀNG ĐỀ THI THỬ TỐT NGHIỆP THPT MÔN ĐỊA LÍ 2026
   Gồm 7 đề hoàn chỉnh (Đề 1, 2, 7, 8, 9, 10, 11) theo cấu trúc 2026:
     - PHẦN I  : 18 câu trắc nghiệm nhiều phương án (0,25 điểm/câu)
     - PHẦN II : 4 câu Đúng/Sai (tối đa 1,0 điểm/câu)
     - PHẦN III: 6 câu trả lời ngắn (0,25 điểm/câu)
========================================================================= */

const dataMocktest = (function () {
    const M = (text, options, answer, explain, extra) => Object.assign({ type: 'mcq', text, options, answer }, explain ? { explain } : {}, extra || {});
    const T = (text, items, explains, extra) => Object.assign({
        type: 'tf', text,
        options: items.map(([t, a], i) => Object.assign({ text: t, answer: a }, explains && explains[i] ? { explain: explains[i] } : {}))
    }, extra || {});
    const S = (text, answer, explain, unit) => ({ type: 'sa', text, answer, explain, unit });
    const NOTE = "Số liệu đã làm tròn, dùng cho ôn tập.";

    /* ============================ ĐỀ 1 ============================ */
    const de1 = [
        M("Cho biểu đồ sau:\nNhận xét nào sau đây đúng về sản lượng lúa của một số vùng nước ta năm 2024?", [
            "Duyên hải Nam Trung Bộ có sản lượng lúa cao hơn Đồng bằng sông Hồng.",
            "Đồng bằng sông Hồng có sản lượng lúa lớn nhất.",
            "Sản lượng lúa của Đồng bằng sông Cửu Long gấp khoảng 4 lần Đồng bằng sông Hồng.",
            "Tây Nguyên có sản lượng lúa cao hơn Bắc Trung Bộ."
        ], 2, "24,5 : 6,0 ≈ 4,1 lần. Tây Nguyên (1,4) thấp hơn Bắc Trung Bộ (4,2); Đồng bằng sông Cửu Long lớn nhất; Duyên hải Nam Trung Bộ (2,6) thấp hơn Đồng bằng sông Hồng (6,0).", {
            charts: [{
                kind: "bar", title: "Sản lượng lúa của một số vùng ở nước ta năm 2024", unit: "triệu tấn",
                categories: ["Đồng bằng sông Cửu Long", "Đồng bằng sông Hồng", "Bắc Trung Bộ", "Duyên hải Nam Trung Bộ", "Tây Nguyên"],
                series: [{ name: "Sản lượng lúa", values: [24.5, 6, 4.2, 2.6, 1.4] }], note: NOTE
            }]
        }),
        M("Khu vực Tây Nam Á nổi tiếng thế giới về tài nguyên nào sau đây?", ["Quặng sắt.", "Gỗ và lâm sản.", "Than đá.", "Dầu mỏ và khí tự nhiên."], 3, "Tây Nam Á có trữ lượng dầu mỏ và khí tự nhiên thuộc loại lớn nhất thế giới, là nguồn thu ngoại tệ chính của nhiều nước."),
        M("Đồng tiền chung của phần lớn các nước thành viên Liên minh châu Âu (EU) là", ["Đô la Mỹ.", "Bảng Anh.", "Phrăng Thuỵ Sĩ.", "Ơ-rô."], 3, "Ơ-rô là đồng tiền chung được phần lớn các nước thành viên EU sử dụng."),
        M("Dãy núi nào sau đây nằm ở khu vực Bắc Trung Bộ nước ta?", ["Hoàng Liên Sơn.", "Trường Sơn Bắc.", "Con Voi.", "Ngân Sơn."], 1, "Trường Sơn Bắc chạy dọc Bắc Trung Bộ; Hoàng Liên Sơn thuộc Tây Bắc, Con Voi và Ngân Sơn thuộc Bắc Bộ."),
        M("Hai trung tâm nội thương lớn nhất nước ta hiện nay là", ["Biên Hoà và Vũng Tàu.", "Hà Nội và Thành phố Hồ Chí Minh.", "Cần Thơ và Huế.", "Hải Phòng và Đà Nẵng."], 1, "Hà Nội và Thành phố Hồ Chí Minh đông dân, mức sống cao, là đầu mối thương mại lớn nhất cả nước."),
        M("Phần lớn lãnh thổ Tây Nam Á có nhiều hoang mạc, sông ngòi thưa thớt chủ yếu do nguyên nhân nào sau đây?", ["Có lượng mưa rất lớn quanh năm.", "Địa hình thấp, bằng phẳng.", "Nằm sát cực Bắc.", "Khí hậu khô hạn do nằm trong đới nóng và chịu ảnh hưởng của khối khí lục địa."], 3, "Tây Nam Á nằm trong đới nóng, chịu ảnh hưởng khối khí lục địa khô nên khô hạn, nhiều hoang mạc, sông ngòi thưa."),
        M("Cho bảng số liệu sau:\nNhận xét nào sau đây đúng về hoạt động nội thương của một số vùng nước ta năm 2024?", [
            "Đông Nam Bộ có tổng mức bán lẻ lớn nhất trong các vùng.",
            "Đồng bằng sông Hồng gấp trên 3 lần Đồng bằng sông Cửu Long.",
            "Tây Nguyên có tổng mức bán lẻ cao hơn Đồng bằng sông Cửu Long.",
            "Đồng bằng sông Cửu Long cao hơn Đồng bằng sông Hồng."
        ], 0, "Đông Nam Bộ 1 900 nghìn tỉ đồng là lớn nhất. Tây Nguyên (230) thấp hơn Đồng bằng sông Cửu Long (650); 1 400 : 650 ≈ 2,2 lần, chưa tới 3 lần.", {
            tables: [{
                title: "Tổng mức bán lẻ hàng hóa và doanh thu dịch vụ tiêu dùng của một số vùng năm 2024", unit: "nghìn tỉ đồng",
                headers: ["Vùng", "Đông Nam Bộ", "Đồng bằng sông Hồng", "Đồng bằng sông Cửu Long", "Tây Nguyên"],
                rows: [["Tổng mức bán lẻ", "1 900", "1 400", "650", "230"]], note: NOTE
            }]
        }),
        M("Nguyên nhân chủ yếu thúc đẩy thương mại điện tử ở nước ta phát triển nhanh là", ["Số lượng chợ truyền thống tăng nhanh.", "Giá hàng hoá giảm liên tục.", "Dân số nông thôn tăng mạnh.", "Sự phát triển của công nghệ thông tin và internet."], 3, "Công nghệ thông tin và internet phát triển là điều kiện nền tảng thúc đẩy thương mại điện tử."),
        M("Điều kiện nào sau đây thuận lợi nhất cho sản xuất lúa ở Đồng bằng sông Cửu Long?", ["Đất feralit chiếm diện tích lớn.", "Khí hậu có mùa đông lạnh.", "Đất phù sa rộng lớn, địa hình bằng phẳng, nguồn nước dồi dào.", "Địa hình đồi núi thấp xen đồng bằng."], 2, "Đất phù sa rộng lớn, địa hình bằng phẳng và nguồn nước dồi dào là điều kiện thuận lợi nhất cho trồng lúa."),
        M("Sự phân hoá thiên nhiên theo độ cao ở nước ta tạo nên các đai cao nào sau đây?", ["Chỉ có một đai nhiệt đới gió mùa.", "Đai xích đạo và đai cận cực.", "Chỉ có đai cận nhiệt đới và đai ôn đới.", "Đai nhiệt đới gió mùa, đai cận nhiệt đới gió mùa trên núi và đai ôn đới gió mùa trên núi."], 3, "Theo độ cao, thiên nhiên nước ta phân hoá thành đai nhiệt đới gió mùa, cận nhiệt đới gió mùa trên núi và ôn đới gió mùa trên núi."),
        M("Giải pháp chủ yếu để nâng cao chất lượng sản phẩm du lịch nước ta là", ["Đa dạng hoá sản phẩm, nâng cao chất lượng dịch vụ và nguồn nhân lực du lịch.", "Giảm đầu tư vào cơ sở vật chất.", "Hạn chế quảng bá hình ảnh du lịch.", "Chỉ tập trung vào một loại hình du lịch."], 0, "Nâng cao chất lượng sản phẩm du lịch cần đa dạng hoá sản phẩm, cải thiện dịch vụ và nguồn nhân lực."),
        M("Việc chuyển một phần đất trồng lúa kém hiệu quả sang trồng cây ăn quả ở Đồng bằng sông Cửu Long chủ yếu nhằm mục đích nào sau đây?", ["Mở rộng đất ở đô thị.", "Tăng giá trị sản xuất và thích ứng với biến đổi khí hậu.", "Giảm dân số nông thôn.", "Giảm hoàn toàn sản xuất nông nghiệp."], 1, "Cây ăn quả cho giá trị cao hơn lúa kém hiệu quả và dễ thích ứng với hạn, mặn hơn."),
        M("Phát triển nội thương gắn với chuyển đổi số mang lại tác dụng chủ yếu nào sau đây?", ["Mở rộng thị trường, giảm chi phí và nâng cao trải nghiệm người tiêu dùng.", "Thu hẹp thị trường tiêu thụ.", "Làm giảm vai trò của vận tải.", "Hạn chế sự cạnh tranh lành mạnh."], 0, "Chuyển đổi số giúp mở rộng thị trường, giảm chi phí và tăng tiện ích cho người tiêu dùng."),
        M("Để thu hẹp chênh lệch về hoạt động nội thương giữa các vùng, giải pháp quan trọng nhất là", ["Tập trung toàn bộ đầu tư vào các đô thị lớn.", "Giảm số lượng siêu thị.", "Hạn chế phát triển thương mại điện tử.", "Đầu tư hạ tầng thương mại, giao thông và nâng cao mức sống dân cư các vùng khó khăn."], 3, "Chênh lệch nội thương xuất phát từ trình độ phát triển và mức sống; cần đầu tư hạ tầng và nâng cao mức sống ở vùng khó khăn."),
        M("Liên minh châu Âu (EU) được đánh giá là mô hình liên kết khu vực thành công chủ yếu vì", ["có thị trường chung, đồng tiền chung, thể chế chặt chẽ và chính sách chung nhiều lĩnh vực.", "không có quy định chung nào.", "chỉ hợp tác về quân sự.", "các nước thành viên hoàn toàn độc lập về kinh tế."], 0, "EU có thị trường chung, đồng tiền chung, thể chế chặt chẽ và chính sách chung nhiều lĩnh vực."),
        M("Tỉ lệ dân thành thị ở Tây Ban Nha và Pháp cao hơn Ba Lan chủ yếu do nguyên nhân nào sau đây?", ["Không có dân cư nông thôn.", "Chịu ảnh hưởng của khí hậu lạnh hơn.", "Diện tích lãnh thổ nhỏ hơn.", "Khác nhau về trình độ phát triển kinh tế và quá trình đô thị hoá."], 3, "Tỉ lệ dân thành thị phụ thuộc vào trình độ phát triển kinh tế và lịch sử đô thị hoá của từng nước."),
        M("Gió Tây khô nóng hoạt động ở Bắc Trung Bộ gây ra hậu quả nào đối với sản xuất nông nghiệp?", ["Gây hạn hán, khô nóng, ảnh hưởng đến sinh trưởng của cây trồng.", "Làm tăng độ ẩm đất.", "Gây mưa lớn kéo dài.", "Làm giảm nhiệt độ mùa hạ."], 0, "Gió Tây khô nóng gây hạn, nóng khô, làm cây trồng sinh trưởng kém."),
        M("Việc thúc đẩy nền nông nghiệp xanh ở nước ta chủ yếu nhằm mục đích nào sau đây?", ["Nâng cao chất lượng nông sản, giảm tác động môi trường và phát triển bền vững.", "Mở rộng diện tích đất bằng cách phá rừng.", "Giảm xuất khẩu nông sản.", "Tăng nhanh việc sử dụng phân bón hoá học."], 0, "Nông nghiệp xanh nâng chất lượng nông sản, giảm tác động môi trường, hướng tới phát triển bền vững."),
        T("Dựa vào biểu đồ Dân số và GDP của một số quốc gia Tây Nam Á năm 2023 (I-rắc, I-xra-en, A-rập Xê-út, Cô-oét):", [
            ["a) Năm 2023, dân số và GDP của một số quốc gia Tây Nam Á có sự chênh lệch.", true],
            ["b) Năm 2023, Cô-oét có GDP/người cao gấp 2 lần GDP/người của A-rập Xê-út.", false],
            ["c) Năm 2023, I-xra-en có GDP/người cao nhất, I-rắc có GDP/người thấp nhất.", true],
            ["d) Nguyên nhân chênh lệch GDP/người của một số quốc gia Tây Nam Á chủ yếu do sự bất ổn định về chính trị và biến động của giá dầu mỏ.", true]
        ], [
            "Dân số và GDP/người của I-rắc, I-xra-en, A-rập Xê-út, Cô-oét đều khác nhau rõ rệt trên biểu đồ.",
            "Sai: GDP/người của Cô-oét (37.204 USD) chỉ gấp khoảng 1,28 lần A-rập Xê-út (28.932 USD), không phải 2 lần.",
            "Đúng: I-xra-en có GDP/người cao nhất (khoảng 54.200 USD), I-rắc thấp nhất (khoảng 5.900 USD).",
            "Đúng: bất ổn chính trị và giá dầu mỏ biến động làm kinh tế các nước phát triển không đồng đều, nên GDP/người chênh lệch."
        ], {
            charts: [
                { kind: "bar", title: "Dân số của một số quốc gia Tây Nam Á năm 2023", unit: "triệu người", categories: ["I-rắc", "I-xra-en", "A-rập Xê-út", "Cô-oét"], series: [{ name: "Dân số", values: [45.5, 9.8, 36.9, 4.3] }], note: NOTE },
                { kind: "bar", title: "GDP bình quân đầu người của một số quốc gia Tây Nam Á năm 2023", unit: "USD", categories: ["I-rắc", "I-xra-en", "A-rập Xê-út", "Cô-oét"], series: [{ name: "GDP/người", values: [5900, 54200, 28932, 37204] }], note: NOTE }
            ]
        }),
        T("Dựa vào biểu đồ Số dân nông thôn và số dân thành thị của một số quốc gia EU năm 2024 (Ba Lan, I-ta-li-a, Tây Ban Nha, Pháp):", [
            ["a) Năm 2024, tỉ lệ dân nông thôn của I-ta-li-a cao hơn của Pháp 10,2%.", false],
            ["b) Năm 2024, Tây Ban Nha có tỉ lệ dân thành thị lớn nhất, Ba Lan có tỉ lệ dân thành thị nhỏ nhất.", true],
            ["c) Năm 2024, số dân nông thôn của một số quốc gia EU có sự chênh lệch.", true],
            ["d) Tỉ lệ dân thành thị của một số quốc gia EU có sự chênh lệch chủ yếu do khác nhau về số lượng đô thị, quy mô nền kinh tế và lịch sử chuyển cư.", true]
        ], [
            "Sai: tỉ lệ dân nông thôn của I-ta-li-a (30,3%) cao hơn Pháp (21,2%) là 9,1 điểm phần trăm, không phải 10,2%.",
            "Đúng: Tây Ban Nha có tỉ lệ dân thành thị lớn nhất (80,3%); Ba Lan nhỏ nhất (60,1%).",
            "Đúng: tỉ lệ dân nông thôn của các nước chênh lệch rõ (từ 19,7% đến 39,9%).",
            "Đúng: số lượng đô thị, quy mô nền kinh tế và lịch sử chuyển cư khác nhau làm tỉ lệ dân thành thị chênh lệch."
        ], {
            charts: [{
                kind: "stacked", title: "Cơ cấu dân thành thị và dân nông thôn của một số quốc gia EU năm 2024", unit: "%",
                categories: ["Ba Lan", "I-ta-li-a", "Tây Ban Nha", "Pháp"],
                series: [{ name: "Dân thành thị", values: [60.1, 69.7, 80.3, 78.8] }, { name: "Dân nông thôn", values: [39.9, 30.3, 19.7, 21.2] }], note: NOTE
            }]
        }),
        T("Cho thông tin về đặc điểm tự nhiên của Miền Tây Bắc và Bắc Trung Bộ:", [
            ["a) Miền Tây Bắc và Bắc Trung Bộ có địa hình đa dạng.", true],
            ["b) Sự phân hoá đa dạng của thiên nhiên trong miền tạo thuận lợi chủ yếu để phát triển sản xuất quanh năm, thâm canh, tăng vụ, hình thành các vùng chuyên canh quy mô lớn.", false],
            ["c) Gió Tây khô nóng hoạt động mạnh ở Bắc Trung Bộ vào nửa đầu mùa hạ do Tín phong bán cầu Nam kết hợp với dãy Trường Sơn Bắc.", false],
            ["d) Sự xuất hiện của thành phần loài sinh vật ôn đới trong miền chủ yếu do tác động của hướng địa hình, gió đông bắc và vị trí xa chí tuyến.", false]
        ], [
            "Đúng: miền có núi cao Hoàng Liên Sơn, Trường Sơn Bắc, đồng bằng ven biển hẹp nên địa hình đa dạng.",
            "Sai: sản xuất quanh năm, thâm canh, tăng vụ, vùng chuyên canh quy mô lớn là thuận lợi của vùng đồng bằng, không phải vùng đồi núi.",
            "Sai: gió Tây khô nóng do gió mùa Tây Nam bị biến tính (hiệu ứng phơn) khi vượt dãy Trường Sơn, không phải do Tín phong bán cầu Nam.",
            "Sai: thành phần loài ôn đới chủ yếu do đai cao của địa hình (dãy Hoàng Liên Sơn), không phải do vị trí xa chí tuyến."
        ]),
        T("Về tình hình sản xuất và ứng phó với biến đổi khí hậu tại Đồng bằng sông Cửu Long:", [
            ["a) Đồng bằng sông Cửu Long là vùng có diện tích và sản lượng lúa lớn nhất nước ta.", true],
            ["b) Khó khăn lớn nhất trong sản xuất lúa ở Đồng bằng sông Cửu Long là nhiệt độ trung bình năm tăng.", false],
            ["c) Vùng có sản lượng lúa lớn, chủ yếu do khí hậu cận xích đạo, nguồn nước phong phú, nhiều giống lúa chất lượng cao.", false],
            ["d) Giải pháp chủ yếu để sử dụng hiệu quả tài nguyên đất trong sản xuất lúa ở Đồng bằng sông Cửu Long là tăng vụ và chuyển đổi mục đích sử dụng đất.", true]
        ], [
            "Đúng: Đồng bằng sông Cửu Long có diện tích và sản lượng lúa lớn nhất cả nước.",
            "Sai: khó khăn lớn nhất là xâm nhập mặn và thiếu nước ngọt vào mùa khô do biến đổi khí hậu, không phải nhiệt độ trung bình tăng.",
            "Sai: yếu tố quan trọng nhất là diện tích đất phù sa rộng lớn và địa hình bằng phẳng.",
            "Đúng: tăng vụ và chuyển đổi mục đích sử dụng đất giúp dùng hiệu quả tài nguyên đất."
        ]),
        S("Năm 2023, GDP của I-xra-en là 531,0 tỉ USD, dân số là 9,8 triệu người. Hãy tính GDP bình quân đầu người của I-xra-en năm 2023 (đơn vị: USD/người, làm tròn kết quả đến hàng đơn vị).", 54184, "GDP/người = 531,0 tỉ USD : 9,8 triệu người ≈ 54 184 USD/người.", "USD/người"),
        S("Năm 2024, Pháp có 68,4 triệu dân, trong đó dân thành thị chiếm 78,8%. Hãy tính số dân nông thôn của Pháp (đơn vị: triệu người, làm tròn kết quả đến một chữ số thập phân).", 14.5, "Dân nông thôn = 68,4 × (100 – 78,8)% = 68,4 × 21,2% ≈ 14,5 triệu người.", "triệu người"),
        S("Nhiệt độ trung bình tháng 1 của một địa điểm là 18,0 °C, tháng 7 là 29,4 °C. Hãy tính biên độ nhiệt độ năm của địa điểm đó (đơn vị: °C, lấy kết quả đến một chữ số thập phân).", 11.4, "Biên độ nhiệt độ năm = 29,4 – 18,0 = 11,4 °C.", "°C"),
        S("Tổng mức bán lẻ hàng hóa và doanh thu dịch vụ tiêu dùng của nước ta năm 2015 là 3 224 nghìn tỉ đồng, năm 2024 là 6 391 nghìn tỉ đồng. Hãy cho biết năm 2024 so với năm 2015 tăng bao nhiêu lần (làm tròn kết quả đến hai chữ số thập phân).", 1.98, "6 391 : 3 224 ≈ 1,98 lần.", "lần"),
        S("Năm 2024, diện tích lúa của Đồng bằng sông Cửu Long là 3,9 triệu ha, sản lượng lúa là 24,3 triệu tấn. Hãy tính năng suất lúa của vùng (đơn vị: tạ/ha, làm tròn kết quả đến một chữ số thập phân).", 62.3, "Năng suất = 243 triệu tạ : 3,9 triệu ha ≈ 62,3 tạ/ha.", "tạ/ha"),
        S("Năm 2024, doanh thu du lịch của nước ta là 840 nghìn tỉ đồng, GDP là 12 847,6 nghìn tỉ đồng. Hãy tính tỉ trọng doanh thu du lịch so với GDP (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 6.5, "Tỉ trọng = 840 : 12 847,6 × 100 ≈ 6,5%.", "%")
    ];

    /* ============================ ĐỀ 2 ============================ */
    const de2 = [
        M("Cho biểu đồ sau:\nNhận xét nào sau đây đúng về diện tích cây ăn quả của Đồng bằng sông Cửu Long?", [
            "Năm 2024 diện tích gấp 2 lần năm 2015.",
            "Năm 2020 diện tích tăng 20 nghìn ha so với năm 2015.",
            "Giai đoạn 2020 – 2024 diện tích tăng nhanh hơn giai đoạn 2015 – 2020.",
            "Diện tích cây ăn quả tăng liên tục qua các năm."
        ], 3, "Diện tích tăng 290 → 360 → 410 nghìn ha. Giai đoạn 2015 – 2020 tăng 70 nghìn ha (không phải 20); 410 : 290 ≈ 1,4 lần; giai đoạn 2020 – 2024 chỉ tăng 50 nghìn ha, ít hơn giai đoạn trước.", {
            charts: [{
                kind: "bar", title: "Diện tích cây ăn quả của Đồng bằng sông Cửu Long", unit: "nghìn ha",
                categories: ["2015", "2020", "2024"],
                series: [{ name: "Diện tích cây ăn quả", values: [290, 360, 410] }], note: NOTE
            }]
        }),
        M("Hiện nay Liên minh châu Âu (EU) có bao nhiêu quốc gia thành viên?", ["25 quốc gia.", "27 quốc gia.", "28 quốc gia.", "30 quốc gia."], 1, "Sau khi Anh rời EU năm 2020, EU còn 27 quốc gia thành viên."),
        M("Trụ sở chính của các cơ quan đầu não Liên minh châu Âu đặt ở thủ đô nào?", ["Pa-ri.", "Bruy-xen.", "Béc-lin.", "Rô-ma."], 1, "Bruy-xen (Bỉ) là nơi đặt Ủy ban châu Âu và nhiều cơ quan chính của EU."),
        M("Vùng đồi núi nước ta phân bố chủ yếu ở phía nào?", ["Phía đông và đông nam.", "Phía nam.", "Phía tây và tây bắc.", "Ven biển phía đông."], 2, "Đồi núi chiếm 3/4 diện tích, tập trung ở phía tây và tây bắc; đồng bằng ở phía đông và đông nam."),
        M("Siêu thị và trung tâm thương mại thuộc hình thức hoạt động nào sau đây của nội thương?", ["Vận tải hàng hoá.", "Sản xuất công nghiệp.", "Bán lẻ hàng hoá.", "Tín dụng ngân hàng."], 2, "Siêu thị, trung tâm thương mại là hình thức bán lẻ hiện đại, ngày càng phát triển."),
        M("Tây Nam Á có vị trí địa chính trị quan trọng chủ yếu do nguyên nhân nào sau đây?", ["Nằm ở ngã ba của ba châu lục Á, Âu, Phi và có nguồn dầu mỏ lớn.", "Nằm hoàn toàn trong vùng hàn đới.", "Không có tài nguyên khoáng sản.", "Có diện tích lớn nhất thế giới."], 0, "Vị trí ngã ba Á – Âu – Phi cùng dầu mỏ khiến khu vực có ý nghĩa chiến lược về kinh tế và chính trị."),
        M("Cho bảng số liệu sau:\nNhận xét nào sau đây đúng về chế độ nhiệt của Lạng Sơn và Sơn La?", [
            "Nhiệt độ tháng 1 của Sơn La thấp hơn Lạng Sơn.",
            "Sơn La có nhiệt độ tháng 1 cao hơn và biên độ nhiệt độ năm nhỏ hơn Lạng Sơn.",
            "Biên độ nhiệt độ năm của Sơn La lớn hơn Lạng Sơn.",
            "Lạng Sơn có nhiệt độ tháng 7 thấp hơn Sơn La."
        ], 1, "Biên độ nhiệt: Lạng Sơn 27,4 – 13,2 = 14,2 °C; Sơn La 25,8 – 15,1 = 10,7 °C. Sơn La (Tây Bắc) ấm hơn vào mùa đông và có biên độ nhỏ hơn do dãy Hoàng Liên Sơn chắn gió mùa Đông Bắc.", {
            tables: [{
                title: "Nhiệt độ trung bình tháng 1 và tháng 7 của Lạng Sơn và Sơn La", unit: "°C",
                headers: ["Địa điểm", "Tháng 1", "Tháng 7"],
                rows: [["Lạng Sơn (Đông Bắc)", "13,2", "27,4"], ["Sơn La (Tây Bắc)", "15,1", "25,8"]], note: NOTE
            }]
        }),
        M("Sự khác biệt thiên nhiên giữa vùng núi Đông Bắc và Tây Bắc chủ yếu do nhân tố nào sau đây?", ["Tác động của dòng biển nóng.", "Hướng địa hình, đặc biệt là dãy Hoàng Liên Sơn chắn gió mùa Đông Bắc.", "Sự khác nhau về diện tích rừng.", "Chênh lệch số dân giữa hai vùng."], 1, "Dãy Hoàng Liên Sơn chắn gió mùa Đông Bắc nên Tây Bắc ấm hơn Đông Bắc."),
        M("Đồng bằng ven biển miền Trung nước ta có đặc điểm nổi bật nào sau đây?", ["Nằm sâu trong nội địa.", "Chủ yếu do phù sa sông lớn bồi tụ rộng.", "Rộng lớn, bằng phẳng, ít bị chia cắt.", "Hẹp ngang, bị chia cắt do núi đâm sát biển."], 3, "Dãy núi đâm ngang ra biển làm đồng bằng ven biển miền Trung nhỏ hẹp và bị chia cắt."),
        M("Hoạt động nội thương giữa các vùng nước ta phân hoá chủ yếu do nguyên nhân nào sau đây?", ["Khác nhau về trình độ phát triển kinh tế và mức sống dân cư.", "Khác nhau về hướng địa hình.", "Khác nhau về diện tích rừng.", "Khác nhau về số lượng sông ngòi."], 0, "Vùng kinh tế phát triển, thu nhập cao có sức mua lớn nên nội thương phát triển mạnh hơn."),
        M("Giải pháp nào sau đây góp phần phát triển du lịch xanh ở nước ta?", ["Xây dựng thêm công trình lớn trong khu bảo tồn.", "Hạn chế quản lí khách du lịch.", "Bảo vệ môi trường, phát triển du lịch có trách nhiệm và sử dụng năng lượng sạch.", "Khai thác tối đa tài nguyên để thu hút khách."], 2, "Du lịch xanh gắn với bảo vệ môi trường, sử dụng tài nguyên hợp lí và có trách nhiệm với cộng đồng."),
        M("Việc ứng dụng đặt phòng trực tuyến, tham quan thực tế ảo trong du lịch có tác dụng chủ yếu nào sau đây?", ["Giảm vai trò của hướng dẫn viên hoàn toàn.", "Làm giảm số lượng khách du lịch.", "Hạn chế quảng bá điểm đến.", "Gia tăng trải nghiệm, thuận tiện cho du khách và mở rộng thị trường."], 3, "Công nghệ số giúp du khách tiếp cận dịch vụ dễ dàng, nâng cao trải nghiệm và mở rộng thị trường."),
        M("Giải pháp chủ yếu để sản xuất cây ăn quả ở Đồng bằng sông Cửu Long phát triển bền vững là", ["áp dụng tiêu chuẩn sản xuất an toàn, truy xuất nguồn gốc và liên kết tiêu thụ.", "chỉ xuất khẩu tươi, không chế biến.", "tăng sử dụng thuốc bảo vệ thực vật.", "mở rộng diện tích trên đất nhiễm mặn."], 0, "Sản xuất an toàn, truy xuất nguồn gốc và liên kết chuỗi giá trị nâng chất lượng, ổn định đầu ra."),
        M("Để phát triển nội thương ở khu vực miền núi, nước ta cần ưu tiên giải pháp nào sau đây?", ["Hoàn thiện hạ tầng giao thông, chợ và mạng lưới phân phối.", "Hạn chế buôn bán giữa các vùng.", "Giảm sản xuất hàng hoá.", "Giảm đầu tư giao thông."], 0, "Hạ tầng giao thông và mạng lưới phân phối là điều kiện để hàng hoá lưu thông ở miền núi."),
        M("Việc Anh rời khỏi EU (Brexit) cho thấy điều nào sau đây về liên kết khu vực?", ["Liên kết khu vực có thể gặp thách thức khi lợi ích quốc gia và lợi ích chung chưa hài hoà.", "Liên kết khu vực không có thách thức nào.", "EU không còn thị trường chung.", "Mọi nước đều muốn rời EU."], 0, "Brexit phản ánh mâu thuẫn giữa lợi ích quốc gia và lợi ích chung trong liên kết khu vực."),
        M("Lũ quét, sạt lở đất ở vùng núi Tây Bắc gia tăng chủ yếu do nguyên nhân nào sau đây?", ["Địa hình bằng phẳng.", "Sông ngòi ngắn và ít nước.", "Địa hình dốc, mưa lớn tập trung và suy giảm độ che phủ rừng.", "Khí hậu khô hạn quanh năm."], 2, "Địa hình dốc kết hợp mưa lớn và mất rừng làm tăng nguy cơ lũ quét, sạt lở."),
        M("Mô hình lúa – tôm ở vùng ven biển Đồng bằng sông Cửu Long thể hiện điều gì?", ["Sự thích ứng với xâm nhập mặn và tận dụng điều kiện tự nhiên để tăng hiệu quả kinh tế.", "Sự phụ thuộc hoàn toàn vào thời tiết.", "Việc bỏ hoang đất nhiễm mặn.", "Giảm đa dạng sinh kế."], 0, "Luân canh lúa – tôm tận dụng nước ngọt mùa mưa và nước lợ mùa khô, thích ứng xâm nhập mặn."),
        M("Phát triển du lịch cộng đồng ở miền núi có ý nghĩa chủ yếu nào sau đây?", ["Hạn chế khách đến thăm.", "Tạo sinh kế cho người dân và góp phần bảo tồn văn hoá, môi trường.", "Giảm thu nhập của người dân.", "Làm mất bản sắc văn hoá địa phương."], 1, "Du lịch cộng đồng đem lại thu nhập trực tiếp cho dân địa phương và khuyến khích gìn giữ văn hoá, môi trường."),
        T("Cho biểu đồ tổng mức bán lẻ hàng hoá và doanh thu dịch vụ tiêu dùng của nước ta, giai đoạn 2015 – 2024:", [
            ["a) Giai đoạn 2015 – 2024, tổng mức bán lẻ hàng hoá và doanh thu dịch vụ tiêu dùng của nước ta tăng liên tục.", true],
            ["b) Năm 2019, tổng mức bán lẻ hàng hoá và doanh thu dịch vụ tiêu dùng cao hơn năm 2023.", false],
            ["c) Năm 2024, tổng mức bán lẻ hàng hoá và doanh thu dịch vụ tiêu dùng gấp khoảng 2 lần năm 2015.", true],
            ["d) Tổng mức bán lẻ tăng chủ yếu do thu nhập và mức sống dân cư tăng, mạng lưới phân phối hiện đại mở rộng và thương mại điện tử phát triển.", true]
        ], [
            "Đúng: giá trị tăng qua các năm 2015, 2019, 2023, 2024 (3.224 → 4.942 → 6.231 → 6.391 nghìn tỉ đồng).",
            "Sai: năm 2019 (4.942 nghìn tỉ đồng) thấp hơn năm 2023 (6.231 nghìn tỉ đồng).",
            "Đúng: 6.391 : 3.224 ≈ 1,98, tức gấp khoảng 2 lần.",
            "Đúng: thu nhập tăng, hệ thống siêu thị – trung tâm thương mại mở rộng và thương mại điện tử phát triển cùng thúc đẩy tăng trưởng bán lẻ."
        ], {
            charts: [{
                kind: "bar", title: "Tổng mức bán lẻ hàng hoá và doanh thu dịch vụ tiêu dùng của Việt Nam, giai đoạn 2015 – 2024", unit: "nghìn tỉ đồng",
                categories: ["2015", "2019", "2023", "2024"],
                series: [{ name: "Tổng mức bán lẻ", values: [3224, 4942, 6231, 6391] }], note: NOTE
            }]
        }),
        T("Cho thông tin về sự phân hóa đa dạng theo Đông - Tây của thiên nhiên nước ta:", [
            ["a) Vùng đồi núi phân bố chủ yếu ở phía tây và tây bắc của nước ta.", true],
            ["b) Sự khác biệt về khí hậu giữa vùng núi Đông Bắc với Tây Bắc chủ yếu do tác động của hướng địa hình kết hợp với dải hội tụ nhiệt đới và gió đông nam.", false],
            ["c) Vùng đồng bằng ven biển nước ta có địa hình thấp, khá bằng phẳng do thường xuyên chịu tác động trực tiếp từ biển và vùng đồi núi liền kề.", false],
            ["d) Sự phân hóa của khí hậu theo Đông – Tây tạo thuận lợi chủ yếu để nước ta đổi mới cơ cấu cây trồng, nâng cao chất lượng nông sản đặc sản và phát triển nền nông nghiệp xanh.", true]
        ], [
            "Đúng: vùng đồi núi phân bố chủ yếu ở phía tây và tây bắc nước ta.",
            "Sai: khác biệt khí hậu Đông Bắc – Tây Bắc chủ yếu do hướng dãy Hoàng Liên Sơn chắn gió mùa Đông Bắc, không phải do dải hội tụ nhiệt đới và gió đông nam.",
            "Sai: đồng bằng ven biển miền Trung hẹp ngang và bị chia cắt do núi đâm sát biển, không phải thấp và khá bằng phẳng.",
            "Đúng: phân hoá khí hậu Đông – Tây giúp đổi mới cơ cấu cây trồng, nâng cao chất lượng nông sản đặc sản và phát triển nông nghiệp xanh."
        ]),
        T("Cho biểu đồ số lượt khách du lịch nội địa của nước ta, giai đoạn 2019 – 2024:", [
            ["a) Năm 2022, số lượt khách du lịch nội địa cao hơn năm 2019.", true],
            ["b) Năm 2020 là năm có số lượt khách du lịch nội địa thấp nhất trong giai đoạn.", false],
            ["c) Năm 2024, số lượt khách du lịch nội địa gấp khoảng 1,3 lần năm 2019.", true],
            ["d) Số lượt khách nội địa tăng nhanh giai đoạn 2021 – 2024 chủ yếu do dịch bệnh làm tăng nhu cầu đi du lịch xa.", false]
        ], [
            "Đúng: năm 2022 đạt 101,3 triệu lượt, cao hơn năm 2019 (85,0 triệu lượt).",
            "Sai: năm 2021 (40,0 triệu lượt) mới là năm thấp nhất, năm 2020 là 56,0 triệu lượt.",
            "Đúng: 110,6 : 85,0 ≈ 1,3, tức gấp khoảng 1,3 lần.",
            "Sai: sau dịch, khách nội địa tăng chủ yếu nhờ kiểm soát dịch bệnh, các chính sách kích cầu, thu nhập và hạ tầng giao thông phát triển, không phải do dịch bệnh làm tăng nhu cầu."
        ], {
            charts: [{
                kind: "bar", title: "Số lượt khách du lịch nội địa của Việt Nam, giai đoạn 2019 – 2024", unit: "triệu lượt",
                categories: ["2019", "2020", "2021", "2022", "2023", "2024"],
                series: [{ name: "Khách nội địa", values: [85, 56, 40, 101.3, 108, 110.6] }], note: NOTE
            }]
        }),
        T("Về định hướng chuyển đổi và phát triển cây ăn quả tại Đồng bằng sông Cửu Long:", [
            ["a) Các kĩ thuật canh tác hiện đại được áp dụng trong sản xuất cây ăn quả của vùng chủ yếu nhằm nâng cao năng lực quản lí các sản phẩm đặc thù, phát triển mạng lưới cung ứng nông sản chất lượng cao.", false],
            ["b) Đồng bằng sông Cửu Long có cơ cấu cây ăn quả đa dạng.", true],
            ["c) Sản xuất cây ăn quả của vùng đang phát triển theo hướng nâng cao chất lượng và đảm bảo an toàn cho người tiêu dùng.", true],
            ["d) Diện tích cây ăn quả của vùng tăng chủ yếu do áp dụng quy trình chăm sóc theo hướng bền vững, đa dạng hóa cơ cấu cây trồng.", false]
        ], [
            "Sai: kĩ thuật canh tác hiện đại nhằm trực tiếp nâng cao năng suất, chất lượng và thích ứng biến đổi khí hậu.",
            "Đúng: Đồng bằng sông Cửu Long có cơ cấu cây ăn quả đa dạng.",
            "Đúng: sản xuất cây ăn quả đang hướng tới chất lượng cao và an toàn cho người tiêu dùng.",
            "Sai: diện tích tăng chủ yếu do chuyển đổi từ đất trồng lúa kém hiệu quả sang cây ăn quả có giá trị cao hơn."
        ]),
        S("Năm 2024, Ba Lan có 36,6 triệu dân, tỉ lệ dân nông thôn là 39,9%. Hãy tính số dân nông thôn của Ba Lan (đơn vị: triệu người, làm tròn kết quả đến một chữ số thập phân).", 14.6, "Dân nông thôn = 36,6 × 39,9% ≈ 14,6 triệu người.", "triệu người"),
        S("Năm 2024, tỉ lệ dân nông thôn của I-ta-li-a là 30,3%, của Pháp là 21,2%. Hãy tính tỉ lệ dân nông thôn của I-ta-li-a cao hơn Pháp bao nhiêu điểm phần trăm (lấy kết quả đến một chữ số thập phân).", 9.1, "30,3 – 21,2 = 9,1 điểm phần trăm.", "điểm %"),
        S("Năm 2023, I-rắc có GDP là 267 tỉ USD, dân số là 45,5 triệu người. Hãy tính GDP bình quân đầu người của I-rắc (đơn vị: USD/người, làm tròn kết quả đến hàng đơn vị).", 5868, "GDP/người = 267 tỉ USD : 45,5 triệu người ≈ 5 868 USD/người.", "USD/người"),
        S("Số lượt khách du lịch nội địa của nước ta năm 2019 là 85,0 triệu lượt, năm 2024 là 110,6 triệu lượt. Hãy tính tốc độ tăng của năm 2024 so với năm 2019 (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 30.1, "Tốc độ tăng = (110,6 – 85,0) : 85,0 × 100 ≈ 30,1%.", "%"),
        S("Diện tích cây ăn quả của Đồng bằng sông Cửu Long năm 2015 là 290 nghìn ha, năm 2024 là 410 nghìn ha. Hãy tính tốc độ tăng diện tích của năm 2024 so với năm 2015 (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 41.4, "Tốc độ tăng = (410 – 290) : 290 × 100 ≈ 41,4%.", "%"),
        S("Nhiệt độ trung bình năm ở chân núi là 24,0 °C. Biết cứ lên cao 100 m nhiệt độ giảm 0,6 °C, hãy tính nhiệt độ trung bình năm ở độ cao 1 800 m (đơn vị: °C, lấy kết quả đến một chữ số thập phân).", 13.2, "Nhiệt độ giảm 0,6 × 18 = 10,8 °C nên còn 24,0 – 10,8 = 13,2 °C.", "°C")
    ];

    /* ============================ ĐỀ 7 ============================ */
    const de7 = [
        M("Cho biểu đồ sau:\nNhận xét nào sau đây đúng về mật độ dân số của một số vùng nước ta năm 2024?", [
            "Đông Nam Bộ có mật độ dân số thấp hơn Đồng bằng sông Cửu Long.",
            "Tây Nguyên có mật độ dân số cao hơn Trung du và miền núi phía Bắc.",
            "Mật độ dân số của Đồng bằng sông Hồng gấp trên 2 lần Đồng bằng sông Cửu Long.",
            "Đồng bằng sông Cửu Long có mật độ dân số cao nhất."
        ], 2, "1 100 : 425 ≈ 2,6 lần. Tây Nguyên (112) thấp hơn Trung du và miền núi phía Bắc (140); Đông Nam Bộ (780) cao hơn Đồng bằng sông Cửu Long; Đồng bằng sông Hồng cao nhất.", {
            charts: [{
                kind: "bar", title: "Mật độ dân số của một số vùng ở nước ta năm 2024", unit: "người/km²",
                categories: ["Đồng bằng sông Hồng", "Đông Nam Bộ", "Đồng bằng sông Cửu Long", "Trung du và miền núi phía Bắc", "Tây Nguyên"],
                series: [{ name: "Mật độ dân số", values: [1100, 780, 425, 140, 112] }], note: NOTE
            }]
        }),
        M("Hệ toạ độ địa lí trên đất liền của nước ta có điểm cực Bắc nằm ở vĩ độ nào?", ["8°34'B", "23°23'B", "102°09'Đ", "109°28'Đ"], 1),
        M("Theo cấu tạo vỏ Trái Đất, ranh giới giữa vỏ Trái Đất và manti được gọi là gì?", ["Mặt Mô-hô.", "Tầng trầm tích.", "Mặt đứt gãy.", "Mặt phân cách lục địa."], 0),
        M("Tổ chức Thương mại Thế giới được viết tắt bằng tiếng Anh là gì?", ["APEC", "IMF", "WTO", "ASEAN"], 2),
        M("Năm 2024, tổng dân số nước ta đạt khoảng bao nhiêu triệu người?", ["96,5", "101,3", "86,0", "115,2"], 1),
        M("Gió Tây ôn đới có đặc điểm nào sau đây?", [
            "Thổi từ áp cao cực về áp thấp ôn đới, rất lạnh và khô.",
            "Thổi thay đổi hướng theo chu kì ngày đêm ở vùng ven biển.",
            "Thổi từ áp cao chí tuyến về áp thấp xích đạo, khô hạn quanh năm.",
            "Thổi từ áp cao cận chí tuyến về áp thấp ôn đới, thường có độ ẩm cao, gây mưa."
        ], 3),
        M("Cho bảng số liệu sau:\nNhận xét nào sau đây đúng về gia tăng dân số tự nhiên của các vùng năm 2024?", [
            "Tây Nguyên có gia tăng dân số tự nhiên cao nhất.",
            "Đồng bằng sông Cửu Long có gia tăng dân số tự nhiên cao hơn Đồng bằng sông Hồng.",
            "Đồng bằng sông Hồng có gia tăng dân số tự nhiên thấp nhất.",
            "Gia tăng dân số tự nhiên của Đồng bằng sông Hồng gấp 2 lần Tây Nguyên."
        ], 0, "Gia tăng tự nhiên = sinh thô – chết thô: Tây Nguyên 12,4‰; Đồng bằng sông Hồng 8,2‰; Đồng bằng sông Cửu Long 6,9‰ (thấp nhất).", {
            tables: [{
                title: "Tỉ suất sinh thô và tỉ suất chết thô của một số vùng năm 2024", unit: "‰",
                headers: ["Vùng", "Tỉ suất sinh thô", "Tỉ suất chết thô"],
                rows: [["Đồng bằng sông Hồng", "14,9", "6,7"], ["Tây Nguyên", "18,5", "6,1"], ["Đồng bằng sông Cửu Long", "13,8", "6,9"]], note: NOTE
            }]
        }),
        M("Nguyên nhân chính hình thành nên đai áp thấp xích đạo trên Trái Đất là gì?", ["Do nhiệt độ cao quanh năm, hơi nước bốc lên mạnh.", "Do lực li tâm của Trái Đất lớn nhất ở Xích đạo.", "Do sự hạ lún của các mảng kiến tạo.", "Do các dòng biển lạnh chảy ngang qua."], 0),
        M("Đặc điểm nào chứng tỏ đô thị hoá ở nước ta đang diễn ra nhanh nhưng trình độ chưa cao?", ["Tỉ lệ dân thành thị rất cao, trên 80%.", "Không gian đô thị thu hẹp, chỉ tập trung ở vùng núi.", "Tỉ lệ dân thành thị tăng nhưng cơ sở hạ tầng đô thị nhiều nơi còn quá tải.", "Toàn bộ dân đô thị đều làm việc trong ngành nông nghiệp."], 2),
        M("Nguyên nhân chủ yếu làm cho khí hậu khu vực Tây Nam Á rất khô hạn là do đâu?", ["Nằm trong đới khí hậu cận nhiệt và nhiệt đới, chịu ảnh hưởng của các khối khí lục địa.", "Nằm hoàn toàn ở vùng cực có nhiệt độ thấp.", "Có lượng mưa trung bình năm trên 2000mm.", "Chịu ảnh hưởng của gió Tây ôn đới quanh năm."], 0),
        M("Để giải quyết vấn đề thiếu hụt lao động chuyên môn kĩ thuật cao trong bối cảnh công nghiệp 4.0, giải pháp thiết thực nhất của nước ta là gì?", ["Hạn chế sự phát triển của khu vực dịch vụ.", "Đẩy mạnh xuất khẩu lao động phổ thông.", "Tăng tỉ suất sinh thô ở nông thôn.", "Đổi mới và nâng cao chất lượng giáo dục, đào tạo nghề gắn với nhu cầu thị trường."], 3),
        M("Việc chuyển đổi cơ cấu cây trồng từ lúa nước sang các loại cây ăn quả đặc sản ở Đồng bằng sông Cửu Long hiện nay nhằm mục đích chính là gì?", ["Phục hồi diện tích rừng nguyên sinh.", "Giảm hoàn toàn sản lượng gạo xuất khẩu.", "Thích ứng với biến đổi khí hậu (hạn mặn) và nâng cao hiệu quả kinh tế.", "Hạn chế sự phát triển của công nghiệp chế biến."], 2),
        M("Tác động tiêu cực của toàn cầu hoá kinh tế đối với các nước đang phát triển như Việt Nam là gì?", ["Không thể thu hút được vốn đầu tư nước ngoài.", "Gia tăng khoảng cách giàu nghèo và đối mặt với sự cạnh tranh gay gắt từ các tập đoàn đa quốc gia.", "Đóng cửa hoàn toàn với thị trường thế giới.", "Lực lượng sản xuất bị đình trệ hoàn toàn."], 1),
        M("Khí hậu nhiệt đới ẩm gió mùa đem lại khó khăn lớn nhất nào cho ngành giao thông vận tải nước ta?", ["Cản trở việc xây dựng đường hầm xuyên núi.", "Thường xuyên xảy ra thiên tai (bão, lũ lụt, sạt lở đất) phá huỷ hạ tầng giao thông.", "Gây ra hiện tượng sa mạc hoá lấp kín đường sá.", "Làm đóng băng các hải cảng vào mùa đông."], 1),
        M("Sự khác biệt cơ bản về nguyên nhân tạo mùa khô ở Nam Bộ và mùa đông lạnh ở miền Bắc nước ta là gì?", ["Cả hai đều do bão nhiệt đới gây ra.", "Mùa khô Nam Bộ do Tín phong bán cầu Bắc chi phối, mùa đông miền Bắc do gió mùa Đông Bắc mang khối khí lạnh tràn về.", "Mùa khô Nam Bộ do gió Tây Nam, mùa đông miền Bắc do gió Đông Nam.", "Mùa khô Nam Bộ do dòng biển lạnh, mùa đông miền Bắc do độ cao địa hình."], 1),
        M("Trong bối cảnh biến đổi khí hậu, nước biển dâng, giải pháp mang tính chiến lược lâu dài đối với nền kinh tế vùng Đồng bằng sông Cửu Long là gì?", ["Di dời toàn bộ dân cư lên vùng Tây Nguyên.", "Xây dựng đê bao khép kín toàn bộ đồng bằng để ngăn mặn tuyệt đối.", "Phá bỏ toàn bộ diện tích rừng ngập mặn để nuôi tôm.", "Chuyển tư duy từ sản xuất nông nghiệp thuần tuý sang kinh tế nông nghiệp thích ứng với tự nhiên (sống chung với lũ/mặn)."], 3),
        M("Tại sao nói thể chế của Liên minh châu Âu (EU) có mức độ liên kết chặt chẽ nhất thế giới hiện nay?", ["Vì EU sử dụng chung một loại ngôn ngữ duy nhất.", "Vì EU chỉ hợp tác duy nhất trên lĩnh vực quân sự.", "Vì EU đã xoá bỏ hoàn toàn đường biên giới quốc gia, sáp nhập thành một nước duy nhất.", "Vì EU có thị trường chung, sử dụng đồng tiền chung và có các cơ quan siêu quốc gia (Nghị viện, Ngân hàng Trung ương) can thiệp sâu vào chính sách của các nước thành viên."], 3),
        M("Để giải quyết triệt để tình trạng mất cân bằng giới tính khi sinh (111,4 bé trai/100 bé gái năm 2024), giải pháp căn cơ nhất đối với nước ta là gì?", ["Nghiêm cấm hoàn toàn việc sinh con thứ hai.", "Thay đổi quan niệm, tâm lí xã hội trọng nam khinh nữ và thực hiện nghiêm pháp luật về bình đẳng giới.", "Phạt tiền nặng đối với gia đình sinh con trai.", "Khuyến khích di cư sang các quốc gia khác."], 1),
        T("Về đặc điểm thiên nhiên nhiệt đới ẩm gió mùa ở Việt Nam:", [
            ["a) Nhiệt độ trung bình năm trên cả nước đều trên 20°C (trừ các vùng núi cao).", true],
            ["b) Chế độ mưa theo mùa làm cho lưu lượng nước các con sông ở nước ta có sự phân chia thành mùa lũ và mùa cạn rõ rệt.", true],
            ["c) Thiên nhiên nước ta không có sự khác biệt giữa khu vực đồi núi và đồng bằng vì cùng nằm trong đới nóng.", false],
            ["d) Sự luân phiên hoạt động của gió mùa Đông Bắc và Tín phong bán cầu Bắc là nguyên nhân trực tiếp tạo ra sự đối lập về mùa mưa - khô giữa sườn Đông và Tây dãy Trường Sơn.", true]
        ]),
        T("Về tình hình phát triển kinh tế - xã hội khu vực Đông Nam Á:", [
            ["a) Khu vực Đông Nam Á hiện nay bao gồm 11 quốc gia thành viên.", true],
            ["b) Do diện tích đất đồng bằng châu thổ rộng lớn nên tất cả các nước Đông Nam Á đều xuất khẩu lúa gạo đứng đầu thế giới.", false],
            ["c) Việc hội nhập sâu rộng vào các chuỗi cung ứng toàn cầu giúp các nước Đông Nam Á phát triển mạnh ngành công nghiệp điện tử - tin học.", true],
            ["d) Sức ép từ quy mô dân số lớn và đô thị hoá tự phát đang là lực cản lớn đối với việc giải quyết các vấn đề môi trường, giao thông đô thị ở nhiều quốc gia trong khu vực.", true]
        ]),
        T("Cho biểu đồ sau về cơ cấu giá trị sản xuất công nghiệp của nước ta, giai đoạn 2015 – 2024:", [
            ["a) Tỉ trọng nhóm ngành công nghiệp chế biến, chế tạo tăng liên tục trong giai đoạn 2015 – 2024.", true],
            ["b) Tỉ trọng nhóm ngành công nghiệp khai khoáng năm 2024 cao hơn năm 2015.", false],
            ["c) Giai đoạn 2015 – 2024, tỉ trọng nhóm ngành công nghiệp chế biến, chế tạo tăng 5,0 điểm phần trăm.", true],
            ["d) Nước ta đang chuyển dịch cơ cấu công nghiệp theo hướng tăng mạnh tỉ trọng khai khoáng để xuất khẩu thô lấy ngoại tệ.", false]
        ], [
            "Đúng: 77,0% → 80,0% → 82,0%.",
            "Sai: khai khoáng giảm từ 12,0% (2015) xuống 6,5% (2024).",
            "Đúng: 82,0 – 77,0 = 5,0 điểm phần trăm.",
            "Sai: xu hướng chủ yếu là tăng tỉ trọng công nghiệp chế biến, chế tạo, giảm tỉ trọng khai khoáng."
        ], {
            charts: [{
                kind: "stacked", title: "Cơ cấu giá trị sản xuất công nghiệp của Việt Nam, giai đoạn 2015 – 2024", unit: "%",
                categories: ["2015", "2020", "2024"],
                series: [{ name: "Khai khoáng", values: [12, 9, 6.5] }, { name: "Chế biến, chế tạo", values: [77, 80, 82] }, { name: "Sản xuất và phân phối điện, khí đốt, nước", values: [11, 11, 11.5] }], note: NOTE
            }]
        }),
        T("Cho biểu đồ sau về dân số của các vùng ở nước ta năm 2024:", [
            ["a) Đồng bằng sông Hồng có số dân đông nhất trong các vùng được thể hiện trên biểu đồ.", true],
            ["b) Dân số của Tây Nguyên cao hơn dân số của Trung du và miền núi phía Bắc.", false],
            ["c) Dân số của Đồng bằng sông Hồng gấp khoảng 4 lần dân số của Tây Nguyên.", true],
            ["d) Giải quyết bài toán phân bố dân cư không đồng đều ở Việt Nam đòi hỏi phải kết hợp đồng bộ phát triển kinh tế vùng sâu, vùng xa với chính sách quy hoạch đô thị vệ tinh hợp lí.", true]
        ], [
            "Đúng: Đồng bằng sông Hồng 24,9 triệu người, cao nhất.",
            "Sai: Tây Nguyên (6,2 triệu) thấp hơn Trung du và miền núi phía Bắc (12,9 triệu).",
            "Đúng: 24,9 : 6,2 ≈ 4,0 lần.",
            "Đúng: phát triển kinh tế vùng khó khăn và quy hoạch đô thị vệ tinh giúp phân bố lại dân cư hợp lí."
        ], {
            charts: [{
                kind: "bar", title: "Dân số của các vùng ở nước ta năm 2024", unit: "triệu người",
                categories: ["ĐB sông Hồng", "TD và MN phía Bắc", "BTB và DH miền Trung", "Tây Nguyên", "Đông Nam Bộ", "ĐB sông Cửu Long"],
                series: [{ name: "Dân số", values: [24.9, 12.9, 20.7, 6.2, 18.8, 17.4] }], note: NOTE
            }]
        }),
        S("Năm 2024, một vùng có tỉ suất sinh thô là 16,2‰ và tỉ suất chết thô là 6,8‰. Hãy tính tỉ lệ gia tăng dân số tự nhiên của vùng đó (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 0.9, "Gia tăng tự nhiên = (16,2 – 6,8) : 10 = 0,94% → làm tròn 0,9%.", "%"),
        S("Năm 2024, Đồng bằng sông Hồng có số dân là 24,9 triệu người, diện tích là 21,3 nghìn km². Hãy tính mật độ dân số của vùng (đơn vị: người/km², làm tròn kết quả đến hàng đơn vị).", 1169, "Mật độ = 24 900 nghìn người : 21,3 nghìn km² ≈ 1 169 người/km².", "người/km²"),
        S("Giá trị xuất khẩu hàng hóa của nước ta năm 2015 là 162,4 tỉ USD, năm 2024 là 405,5 tỉ USD. Hãy cho biết năm 2024 so với năm 2015 tăng bao nhiêu lần (làm tròn kết quả đến hai chữ số thập phân).", 2.5, "405,5 : 162,4 ≈ 2,50 lần.", "lần"),
        S("Năm 2024, lực lượng lao động nước ta là 53,0 triệu người, trong đó có 15,0 triệu người đã qua đào tạo. Hãy tính tỉ lệ lao động đã qua đào tạo (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 28.3, "Tỉ lệ = 15,0 : 53,0 × 100 ≈ 28,3%.", "%"),
        S("Năm 2024, GDP của nước ta là 476,3 tỉ USD, dân số là 101,3 triệu người. Hãy tính GDP bình quân đầu người của nước ta (đơn vị: USD/người, làm tròn kết quả đến hàng đơn vị).", 4702, "GDP/người = 476,3 tỉ USD : 101,3 triệu người ≈ 4 702 USD/người.", "USD/người"),
        S("Năm 2024, nước ta có 101,3 triệu dân, trong đó dân thành thị là 38,9 triệu người. Hãy tính tỉ lệ dân thành thị của nước ta (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 38.4, "Tỉ lệ dân thành thị = 38,9 : 101,3 × 100 ≈ 38,4%.", "%")
    ];

    /* ============================ ĐỀ 8 ============================ */
    const de8 = [
        M("Cho biểu đồ sau:\nNhận xét nào sau đây đúng về sản lượng cà phê nhân của nước ta?", [
            "Năm 2022 sản lượng tăng 400 nghìn tấn so với năm 2019.",
            "Năm 2019 sản lượng cao hơn năm 2022.",
            "Sản lượng cà phê nhân tăng liên tục.",
            "Năm 2024 sản lượng gấp 2 lần năm 2015."
        ], 2, "Sản lượng tăng 1 450 → 1 680 → 1 780 → 1 800 nghìn tấn. 1 800 : 1 450 ≈ 1,24 lần; năm 2022 chỉ tăng 100 nghìn tấn so với năm 2019.", {
            charts: [{
                kind: "bar", title: "Sản lượng cà phê nhân của Việt Nam", unit: "nghìn tấn",
                categories: ["2015", "2019", "2022", "2024"],
                series: [{ name: "Cà phê nhân", values: [1450, 1680, 1780, 1800] }], note: NOTE
            }]
        }),
        M("Phần đất liền của nước ta nằm trong múi giờ số mấy?", ["Múi giờ số 5.", "Múi giờ số 6.", "Múi giờ số 7.", "Múi giờ số 8."], 2),
        M("Dãy núi nào sau đây có đỉnh núi cao nhất nước ta?", ["Trường Sơn Bắc.", "Bạch Mã.", "Hoàng Liên Sơn.", "Trường Sơn Nam."], 2),
        M("Đồng bằng nào sau đây có diện tích lớn nhất nước ta?", ["Đồng bằng sông Cửu Long.", "Đồng bằng Thanh – Nghệ – Tĩnh.", "Đồng bằng sông Hồng.", "Đồng bằng ven biển Nam Trung Bộ."], 0),
        M("Việt Nam là quốc gia có bao nhiêu dân tộc cùng sinh sống?", ["52 dân tộc.", "53 dân tộc.", "54 dân tộc.", "55 dân tộc."], 2),
        M("Thời tiết lạnh ẩm, có mưa phùn ở Bắc Bộ vào nửa sau mùa đông chủ yếu do nguyên nhân nào sau đây?", ["Gió mùa Đông Bắc đi qua vùng biển làm tăng độ ẩm.", "Gió Tây khô nóng hoạt động mạnh.", "Hoạt động mạnh của dải hội tụ nhiệt đới.", "Tín phong bán cầu Bắc thổi quanh năm."], 0),
        M("Cho bảng số liệu sau:\nNhận xét nào sau đây đúng về các quốc gia năm 2023?", [
            "Xin-ga-po có dân số đông nhất.",
            "GDP bình quân đầu người của Thái Lan cao hơn Việt Nam.",
            "Việt Nam có GDP lớn nhất.",
            "GDP bình quân đầu người của Xin-ga-po thấp hơn Thái Lan."
        ], 1, "GDP/người: Xin-ga-po ≈ 84,9 nghìn USD; Thái Lan ≈ 7,2 nghìn USD; Việt Nam ≈ 4,3 nghìn USD. Thái Lan có GDP lớn nhất (515 tỉ USD); Việt Nam đông dân nhất.", {
            tables: [{
                title: "GDP và dân số của một số quốc gia Đông Nam Á năm 2023",
                headers: ["Quốc gia", "GDP (tỉ USD)", "Dân số (triệu người)"],
                rows: [["Xin-ga-po", "501", "5,9"], ["Thái Lan", "515", "71,8"], ["Việt Nam", "430", "100,3"]], note: NOTE
            }]
        }),
        M("Đặc điểm chung nổi bật của địa hình nước ta là gì?", ["Đồng bằng chiếm phần lớn diện tích.", "Đồi núi thấp chiếm ưu thế.", "Núi cao trên 2000 m chiếm phần lớn diện tích.", "Cao nguyên chiếm diện tích lớn nhất."], 1),
        M("Đô thị hoá ở nước ta những năm gần đây diễn ra nhanh chủ yếu do nguyên nhân nào sau đây?", ["Các đô thị cổ được bảo tồn nguyên trạng.", "Tác động của công nghiệp hoá, hiện đại hoá và chuyển dịch cơ cấu kinh tế.", "Chiến tranh làm di dân ồ ạt vào thành phố.", "Dân cư nông thôn giảm mạnh do mức sinh thấp."], 1),
        M("Nguồn lao động nước ta dồi dào nhưng năng suất lao động còn thấp chủ yếu do nguyên nhân nào sau đây?", ["Trình độ chuyên môn kĩ thuật và tác phong công nghiệp còn hạn chế.", "Lao động chỉ tập trung trong ngành dịch vụ.", "Số người trong độ tuổi lao động quá ít.", "Thiếu hoàn toàn nguồn lao động nông thôn."], 0),
        M("Giải pháp nào sau đây phù hợp nhất để thích ứng với xâm nhập mặn ở Đồng bằng sông Cửu Long?", ["Khai thác tối đa nước ngầm để tưới tiêu.", "Chuyển đổi cơ cấu cây trồng, vật nuôi và xây dựng hệ thống thuỷ lợi thích ứng.", "Xây dựng nhiều khu công nghiệp ở vùng cửa sông.", "Mở rộng diện tích trồng lúa ba vụ ở vùng ven biển."], 1),
        M("Để phát triển kinh tế biển bền vững, nước ta cần chú trọng giải pháp nào sau đây?", ["Chỉ xuất khẩu hải sản thô.", "Khai thác hợp lí tài nguyên gắn với bảo vệ môi trường và chủ quyền biển đảo.", "Hạn chế đầu tư vào các ngành dịch vụ biển.", "Tăng cường khai thác thuỷ sản gần bờ."], 1),
        M("Việc gắn vùng chuyên canh cây công nghiệp ở Tây Nguyên với công nghiệp chế biến chủ yếu nhằm mục đích nào sau đây?", ["Giảm số lượng lao động trong nông nghiệp.", "Hạn chế xuất khẩu nông sản.", "Nâng cao giá trị sản phẩm và ổn định đầu ra cho nông sản.", "Giảm diện tích rừng tự nhiên."], 2),
        M("Yếu tố nào sau đây quyết định hàng đầu đến sự phát triển các ngành công nghiệp công nghệ cao ở nước ta?", ["Số lượng dân cư đông.", "Lực lượng lao động trình độ cao và năng lực khoa học – công nghệ.", "Diện tích đất đai rộng lớn.", "Nguồn tài nguyên khoáng sản phong phú."], 1),
        M("Biến động chính trị ở Tây Nam Á ảnh hưởng mạnh đến kinh tế thế giới chủ yếu vì lí do nào sau đây?", ["Khu vực có dân số đông nhất thế giới.", "Khu vực có trữ lượng và sản lượng dầu mỏ lớn, tác động đến giá năng lượng toàn cầu.", "Khu vực có nhiều nước công nghiệp hoá hàng đầu.", "Khu vực dẫn đầu thế giới về sản xuất lương thực."], 1),
        M("Liên minh châu Âu (EU) có sức mạnh kinh tế lớn chủ yếu nhờ yếu tố nào sau đây?", ["Các nước hoàn toàn đóng cửa với bên ngoài.", "Chỉ dựa vào nguồn tài nguyên thiên nhiên.", "Có diện tích lãnh thổ lớn nhất thế giới.", "Thị trường chung, đồng tiền chung và mức độ liên kết sâu rộng giữa các nước thành viên."], 3),
        M("Đồng bằng sông Hồng có mật độ dân số cao nhất cả nước, vấn đề cấp bách cần giải quyết hiện nay là gì?", ["Thiếu hoàn toàn nguồn lao động.", "Thiếu đất để mở rộng đô thị, thiếu việc làm và áp lực lên môi trường, hạ tầng.", "Thiếu thị trường tiêu thụ.", "Không có khả năng phát triển công nghiệp."], 1),
        M("Chủ trương chuyển từ khai thác thuỷ sản ven bờ sang xa bờ chủ yếu nhằm mục đích nào sau đây?", ["Giảm tổng sản lượng thuỷ sản của cả nước.", "Hạn chế phát triển nuôi trồng thuỷ sản.", "Tăng số lượng tàu thuyền nhỏ.", "Giảm áp lực lên nguồn lợi ven bờ và góp phần bảo vệ chủ quyền biển đảo."], 3),
        T("Cho biểu đồ cơ cấu GDP của nước ta theo nhóm ngành, giai đoạn 2010 – 2024:", [
            ["a) Giai đoạn 2010 – 2024, tỉ trọng nhóm ngành nông, lâm, thuỷ sản trong cơ cấu GDP giảm liên tục.", true],
            ["b) Năm 2020, tỉ trọng nhóm ngành công nghiệp và xây dựng cao hơn nhóm ngành dịch vụ.", false],
            ["c) Giai đoạn 2010 – 2024, tỉ trọng nhóm ngành dịch vụ tăng 7,2 điểm phần trăm.", true],
            ["d) Cơ cấu GDP chuyển dịch chủ yếu do khai thác thêm tài nguyên thiên nhiên và mở rộng diện tích đất nông nghiệp.", false]
        ], null, {
            charts: [{
                kind: "stacked", title: "Cơ cấu GDP của Việt Nam theo nhóm ngành, giai đoạn 2010 – 2024", unit: "%",
                categories: ["2010", "2015", "2020", "2024"],
                series: [{ name: "Nông, lâm, thuỷ sản", values: [18.9, 17, 14.8, 11.9] }, { name: "Công nghiệp và xây dựng", values: [38.2, 37, 37.4, 38] }, { name: "Dịch vụ", values: [42.9, 46, 47.8, 50.1] }], note: NOTE
            }]
        }),
        T("Cho biểu đồ GDP bình quân đầu người của một số quốc gia Đông Nam Á năm 2023:", [
            ["a) Năm 2023, Xin-ga-po có GDP/người cao nhất trong các quốc gia được thể hiện trên biểu đồ.", true],
            ["b) Năm 2023, GDP/người của Việt Nam cao hơn của Thái Lan.", false],
            ["c) Năm 2023, GDP/người của Xin-ga-po gấp trên 15 lần của Việt Nam.", true],
            ["d) Sự chênh lệch GDP/người giữa các quốc gia Đông Nam Á chủ yếu do khác nhau về trình độ phát triển kinh tế, khoa học – công nghệ và chất lượng nguồn lao động.", true]
        ], null, {
            charts: [{
                kind: "bar", title: "GDP bình quân đầu người của một số quốc gia Đông Nam Á năm 2023", unit: "USD",
                categories: ["Xin-ga-po", "Thái Lan", "In-đô-nê-xi-a", "Việt Nam", "Phi-líp-pin"],
                series: [{ name: "GDP/người", values: [84700, 7170, 4920, 4350, 3900] }], note: NOTE
            }]
        }),
        T("Cho thông tin về vị trí địa lí và phạm vi lãnh thổ của nước ta:", [
            ["a) Nước ta nằm ở rìa phía đông của bán đảo Đông Dương, gần trung tâm khu vực Đông Nam Á.", true],
            ["b) Vùng biển Việt Nam có diện tích khoảng 3 triệu km² nằm trong Biển Đông.", false],
            ["c) Vị trí nằm trong vùng nội chí tuyến bán cầu Bắc là nguyên nhân chủ yếu làm cho nước ta có nền nhiệt độ cao, nhiều ánh nắng.", true],
            ["d) Đường bờ biển dài, nhiều vịnh nước sâu là cơ sở chủ yếu để phát triển ngành khai thác khoáng sản trên đất liền.", false]
        ]),
        T("Về ngành trồng trọt ở nước ta hiện nay:", [
            ["a) Lúa là cây lương thực chính, Đồng bằng sông Cửu Long là vùng sản xuất lúa trọng điểm của cả nước.", true],
            ["b) Cây công nghiệp lâu năm chủ yếu phân bố ở các đồng bằng ven biển miền Trung.", false],
            ["c) Việc hình thành các vùng chuyên canh cây công nghiệp chủ yếu nhằm giảm tỉ trọng của ngành chăn nuôi.", false],
            ["d) Ứng dụng công nghệ cao trong trồng trọt góp phần nâng cao giá trị nông sản và thích ứng với biến đổi khí hậu.", true]
        ]),
        S("Năm 2023, GDP của Xin-ga-po là 501,4 tỉ USD, dân số là 5,9 triệu người. Hãy tính GDP bình quân đầu người của Xin-ga-po (đơn vị: USD/người, làm tròn kết quả đến hàng đơn vị).", 84983, "GDP/người = 501,4 tỉ USD : 5,9 triệu người ≈ 84 983 USD/người.", "USD/người"),
        S("Năm 2023, GDP bình quân đầu người của Xin-ga-po là 84 700 USD, của Việt Nam là 4 350 USD. Hãy cho biết GDP bình quân đầu người của Xin-ga-po gấp bao nhiêu lần của Việt Nam (làm tròn kết quả đến hàng đơn vị).", 19, "84 700 : 4 350 ≈ 19,47 → làm tròn 19 lần.", "lần"),
        S("Năm 2024, GDP của nước ta là 12 847,6 nghìn tỉ đồng, trong đó dịch vụ chiếm 50,1%. Hãy tính giá trị của khu vực dịch vụ (đơn vị: nghìn tỉ đồng, làm tròn kết quả đến hàng đơn vị).", 6437, "Giá trị dịch vụ = 12 847,6 × 50,1% ≈ 6 437 nghìn tỉ đồng.", "nghìn tỉ đồng"),
        S("Sản lượng cà phê nhân của nước ta năm 2015 là 1 450 nghìn tấn, năm 2024 là 1 800 nghìn tấn. Hãy tính tốc độ tăng của năm 2024 so với năm 2015 (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 24.1, "Tốc độ tăng = (1 800 – 1 450) : 1 450 × 100 ≈ 24,1%.", "%"),
        S("Năm 2024, dân số thế giới là 8,1 tỉ người, dân số Việt Nam là 101,3 triệu người. Hãy tính tỉ lệ dân số Việt Nam so với dân số thế giới (đơn vị: %, làm tròn kết quả đến hai chữ số thập phân).", 1.25, "Tỉ lệ = 101,3 : 8 100 × 100 ≈ 1,25%.", "%"),
        S("Năm 2015, giá trị xuất khẩu hàng hóa của nước ta là 162,4 tỉ USD, giá trị nhập khẩu là 165,8 tỉ USD. Hãy cho biết năm 2015 nước ta nhập siêu bao nhiêu tỉ USD (lấy kết quả đến một chữ số thập phân).", 3.4, "Nhập siêu = nhập khẩu – xuất khẩu = 165,8 – 162,4 = 3,4 tỉ USD.", "tỉ USD")
    ];

    /* ============================ ĐỀ 9 ============================ */
    const de9 = [
        M("Cho biểu đồ sau:\nNhận xét nào sau đây đúng về dân số nước ta?", [
            "Dân số tăng liên tục qua các năm.",
            "Giai đoạn 2019 – 2024 dân số tăng nhiều hơn giai đoạn 2009 – 2019.",
            "Dân số năm 2024 tăng thêm 13,3 triệu người so với năm 2009.",
            "Năm 2024 dân số gấp 1,5 lần năm 2009."
        ], 0, "Dân số tăng 86,0 → 96,2 → 101,3 triệu người. Giai đoạn 2009 – 2019 tăng 10,2 triệu, nhiều hơn 2019 – 2024 (5,1); 101,3 : 86,0 ≈ 1,18 lần; tăng thêm 15,3 triệu người.", {
            charts: [{
                kind: "bar", title: "Dân số của Việt Nam, năm 2009, 2019 và 2024", unit: "triệu người",
                categories: ["2009", "2019", "2024"],
                series: [{ name: "Dân số", values: [86, 96.2, 101.3] }], note: NOTE
            }]
        }),
        M("Đường bờ biển của nước ta dài khoảng bao nhiêu km?", ["Khoảng 2360 km.", "Khoảng 3260 km.", "Khoảng 4120 km.", "Khoảng 1560 km."], 1),
        M("Hệ thống sông nào sau đây có lưu vực lớn nhất ở nước ta?", ["Sông Hồng.", "Sông Mã.", "Sông Mê Công.", "Sông Đồng Nai."], 2),
        M("Loại đất chiếm diện tích lớn nhất ở nước ta là", ["đất mặn.", "đất feralit.", "đất phèn.", "đất phù sa."], 1),
        M("Đảo lớn nhất của nước ta là", ["Phú Quốc.", "Côn Đảo.", "Lý Sơn.", "Cát Bà."], 0),
        M("Biên độ nhiệt năm ở miền Bắc lớn hơn miền Nam chủ yếu do nguyên nhân nào sau đây?", ["Miền Bắc có diện tích rừng lớn hơn.", "Địa hình miền Bắc thấp hơn.", "Vị trí gần chí tuyến hơn và chịu tác động mạnh của gió mùa Đông Bắc.", "Miền Bắc có nhiều sông hơn."], 2),
        M("Cho bảng số liệu sau:\nNhận xét nào sau đây đúng về diện tích cà phê và cao su của hai vùng năm 2024?", [
            "Tổng diện tích hai cây ở Đông Nam Bộ lớn hơn Tây Nguyên.",
            "Tây Nguyên có diện tích cà phê lớn hơn Đông Nam Bộ.",
            "Đông Nam Bộ có diện tích cà phê lớn hơn cao su.",
            "Diện tích cao su của Tây Nguyên lớn hơn Đông Nam Bộ."
        ], 1, "Tây Nguyên 640 > Đông Nam Bộ 50 nghìn ha cà phê. Ở Đông Nam Bộ cao su (530) lớn hơn cà phê (50); cao su Tây Nguyên (190) nhỏ hơn Đông Nam Bộ; tổng ở Đông Nam Bộ 580 < Tây Nguyên 830.", {
            tables: [{
                title: "Diện tích cà phê và cao su của Tây Nguyên và Đông Nam Bộ năm 2024", unit: "nghìn ha",
                headers: ["Vùng", "Cà phê", "Cao su"],
                rows: [["Tây Nguyên", "640", "190"], ["Đông Nam Bộ", "50", "530"]], note: NOTE
            }]
        }),
        M("Đồng bằng sông Hồng có mật độ dân số cao chủ yếu do nguyên nhân nào sau đây?", ["Khí hậu nóng khô quanh năm.", "Mới được khai thác gần đây.", "Lịch sử khai thác lâu đời, thuận lợi cho sản xuất lúa nước.", "Có nhiều khoáng sản quý hiếm."], 2),
        M("Cơ cấu dân số vàng tạo thuận lợi chủ yếu nào sau đây cho phát triển kinh tế nước ta?", ["Nguồn lao động dồi dào và tiềm năng thị trường tiêu thụ lớn.", "Dân số giảm nhanh.", "Tỉ lệ phụ thuộc rất cao.", "Giảm áp lực lên hệ thống y tế do ít người già."], 0),
        M("Trung du và miền núi Bắc Bộ có nhiều nhà máy thuỷ điện chủ yếu do nguyên nhân nào sau đây?", ["Khí hậu khô hạn.", "Dân cư đông đúc.", "Sông ngòi có độ dốc lớn, nhiều nước và tiềm năng thuỷ điện lớn.", "Địa hình bằng phẳng, sông chảy chậm."], 2),
        M("Giải pháp chủ yếu để hạn chế thiếu nước tưới vào mùa khô ở Tây Nguyên là", ["tăng khai thác nước ngầm không kiểm soát.", "mở rộng diện tích cây công nghiệp trên sườn dốc.", "chuyển toàn bộ sang trồng lúa nước.", "xây dựng hồ chứa, áp dụng tưới tiết kiệm nước và bảo vệ rừng đầu nguồn."], 3),
        M("Chuyển đổi số trong nông nghiệp ở nước ta có vai trò chủ yếu nào sau đây?", ["Tăng sử dụng lao động thủ công.", "Hạn chế xuất khẩu nông sản.", "Giảm vai trò của thị trường.", "Nâng cao năng suất, quản lí chất lượng và truy xuất nguồn gốc sản phẩm."], 3),
        M("Phát triển năng lượng tái tạo ở Nam Trung Bộ chủ yếu dựa trên lợi thế nào sau đây?", ["Nguồn nước dồi dào quanh năm.", "Địa hình đồng bằng rộng lớn.", "Số giờ nắng cao và tiềm năng gió lớn.", "Trữ lượng than đá lớn."], 2),
        M("Việc tăng cường liên kết vùng ở nước ta nhằm mục đích chủ yếu nào sau đây?", ["Phát huy thế mạnh, tạo không gian phát triển và nâng cao sức cạnh tranh.", "Hạn chế hợp tác giữa các địa phương.", "Làm giảm vai trò của từng vùng.", "Giảm đầu tư hạ tầng."], 0),
        M("Việc Việt Nam gia nhập WTO năm 2007 tác động tích cực chủ yếu nào sau đây?", ["Chấm dứt hoàn toàn nhập khẩu.", "Mở rộng thị trường xuất khẩu và thu hút đầu tư nước ngoài.", "Hạn chế cải cách thể chế.", "Giảm quan hệ với các nước ASEAN."], 1),
        M("Đông Nam Á có vị trí chiến lược quan trọng trên thế giới chủ yếu vì", ["nằm ở vùng cực, ít dân cư.", "nằm giữa hai đại dương, trên các tuyến hàng hải và hàng không quốc tế.", "có diện tích lớn nhất châu Á.", "không chịu ảnh hưởng của thiên tai."], 1),
        M("Hiện tượng El Niño gây hạn hán, xâm nhập mặn ở Đồng bằng sông Cửu Long tác động như thế nào đến sản xuất lúa?", ["Làm tăng diện tích đất phù sa mới ngay lập tức.", "Không ảnh hưởng đến sản xuất.", "Gây thiếu nước ngọt, giảm năng suất và thiệt hại mùa vụ.", "Làm tăng năng suất và sản lượng lúa."], 2),
        M("Thương mại điện tử phát triển nhanh làm thay đổi hoạt động nội thương ở nước ta như thế nào?", ["Chấm dứt hoạt động của siêu thị.", "Làm giảm vai trò của vận tải.", "Mở rộng kênh phân phối, thay đổi hành vi mua sắm và giảm phụ thuộc vào cửa hàng truyền thống.", "Thu hẹp thị trường tiêu thụ."], 2),
        T("Cho biểu đồ số lượt khách du lịch quốc tế đến Việt Nam, giai đoạn 2019 – 2024:", [
            ["a) Năm 2019, số lượt khách quốc tế đến Việt Nam cao hơn năm 2024.", true],
            ["b) Năm 2020 là năm có số lượt khách quốc tế đến Việt Nam thấp nhất trong giai đoạn.", false],
            ["c) Số lượt khách quốc tế giảm mạnh giai đoạn 2019 – 2021 chủ yếu do tác động của đại dịch COVID-19 và các hạn chế đi lại.", true],
            ["d) Số lượt khách quốc tế tăng nhanh giai đoạn 2022 – 2024 chủ yếu do dân số trong nước tăng nhanh.", false]
        ], null, {
            charts: [{
                kind: "line", title: "Số lượt khách du lịch quốc tế đến Việt Nam, giai đoạn 2019 – 2024", unit: "triệu lượt",
                categories: ["2019", "2020", "2021", "2022", "2023", "2024"],
                series: [{ name: "Khách quốc tế", values: [18, 3.8, 0.2, 3.7, 12.6, 17.5] }], note: NOTE
            }]
        }),
        T("Cho biểu đồ cơ cấu dân số theo nhóm tuổi của Việt Nam, giai đoạn 2009 – 2024:", [
            ["a) Giai đoạn 2009 – 2024, tỉ trọng nhóm tuổi 0 – 14 giảm liên tục.", true],
            ["b) Năm 2019, tỉ trọng nhóm tuổi từ 65 trở lên cao hơn nhóm tuổi 0 – 14.", false],
            ["c) Giai đoạn 2009 – 2024, tỉ trọng nhóm tuổi từ 65 trở lên tăng 2,8 điểm phần trăm.", true],
            ["d) Quá trình già hoá dân số ở nước ta chủ yếu do mức sinh tăng nhanh trong những năm gần đây.", false]
        ], null, {
            charts: [{
                kind: "stacked", title: "Cơ cấu dân số Việt Nam theo nhóm tuổi, giai đoạn 2009 – 2024", unit: "%",
                categories: ["2009", "2019", "2024"],
                series: [{ name: "0 – 14 tuổi", values: [24.5, 24.3, 23] }, { name: "15 – 64 tuổi", values: [69.1, 68, 67.8] }, { name: "Từ 65 tuổi trở lên", values: [6.4, 7.7, 9.2] }], note: NOTE
            }]
        }),
        T("Về vùng Đông Nam Bộ ở nước ta hiện nay:", [
            ["a) Đông Nam Bộ là vùng kinh tế năng động, có đóng góp lớn vào GDP của cả nước.", true],
            ["b) Chè là cây công nghiệp lâu năm chủ lực của vùng.", false],
            ["c) Công nghiệp của vùng phát triển mạnh chủ yếu do có nguồn nguyên liệu nông sản tại chỗ rất dồi dào.", false],
            ["d) Phát triển mạng lưới giao thông liên kết vùng và đô thị thông minh góp phần giảm ùn tắc, nâng cao hiệu quả kinh tế của vùng.", true]
        ]),
        T("Về điều kiện phát triển nông nghiệp ở vùng Tây Nguyên:", [
            ["a) Tây Nguyên là vùng có diện tích trồng cà phê lớn nhất cả nước.", true],
            ["b) Tây Nguyên là vùng giáp biển, có nhiều cảng biển nước sâu.", false],
            ["c) Mùa khô kéo dài, thiếu nước tưới là một trong những khó khăn lớn đối với sản xuất nông nghiệp của vùng.", true],
            ["d) Giải pháp hàng đầu để phát triển cà phê bền vững là mở rộng diện tích bằng cách khai thác rừng đầu nguồn.", false]
        ]),
        S("Dân số nước ta năm 2009 là 86,0 triệu người, năm 2024 là 101,3 triệu người. Hãy cho biết dân số nước ta năm 2024 tăng thêm bao nhiêu triệu người so với năm 2009 (lấy kết quả đến một chữ số thập phân).", 15.3, "101,3 – 86,0 = 15,3 triệu người.", "triệu người"),
        S("Dân số nước ta năm 2009 là 86,0 triệu người, năm 2024 là 101,3 triệu người. Hãy tính tốc độ tăng dân số của năm 2024 so với năm 2009 (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 17.8, "Tốc độ tăng = (101,3 – 86,0) : 86,0 × 100 ≈ 17,8%.", "%"),
        S("Năm 2024, dân số nước ta là 101,3 triệu người, trong đó nhóm từ 65 tuổi trở lên chiếm 9,2%. Hãy tính số người từ 65 tuổi trở lên (đơn vị: triệu người, làm tròn kết quả đến một chữ số thập phân).", 9.3, "101,3 × 9,2% ≈ 9,3 triệu người.", "triệu người"),
        S("Số lượt khách quốc tế đến Việt Nam năm 2019 là 18,0 triệu, năm 2024 là 17,5 triệu. Hãy tính số lượt khách năm 2024 bằng bao nhiêu % năm 2019 (làm tròn kết quả đến một chữ số thập phân).", 97.2, "17,5 : 18,0 × 100 ≈ 97,2%.", "%"),
        S("Năm 2024, diện tích cà phê của cả nước là 710 nghìn ha, trong đó Tây Nguyên có 640 nghìn ha. Hãy tính tỉ trọng diện tích cà phê của Tây Nguyên so với cả nước (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 90.1, "640 : 710 × 100 ≈ 90,1%.", "%"),
        S("Năm 2024, Đông Nam Bộ có số dân là 18,8 triệu người, diện tích là 23,6 nghìn km². Hãy tính mật độ dân số của vùng (đơn vị: người/km², làm tròn kết quả đến hàng đơn vị).", 797, "Mật độ = 18 800 nghìn người : 23,6 nghìn km² ≈ 797 người/km².", "người/km²")
    ];

    /* ============================ ĐỀ 10 (mã 0909) ============================ */
    const de10 = [
        M("Cho biểu đồ sau:\nNhận xét nào sau đây đúng với lực lượng lao động ở nước ta năm 2024 so với năm 2015?", [
            "Tỉ trọng lao động nhóm 15 – 24 tuổi có xu hướng tăng.",
            "Lao động nhóm 25 – 49 tuổi tăng thêm 1,4 triệu người.",
            "Số lượng lao động của các nhóm tuổi đều tăng.",
            "Tỉ trọng lao động nhóm từ 50 tuổi trở lên tăng thêm 3,3%."
        ], 1, "Lao động nhóm 25 – 49 tuổi: 33,7 – 32,3 = 1,4 triệu người. Nhóm 15 – 24 giảm cả số lượng lẫn tỉ trọng; nhóm từ 50 tuổi trở lên giảm số lượng (14,3 → 14,1 triệu) và tỉ trọng gần như không đổi (26,2% → 26,1%).", {
            fixed: true,
            charts: [{
                kind: 'stacked', title: "Lực lượng lao động phân theo nhóm tuổi ở nước ta năm 2015 và năm 2024", unit: "triệu người",
                categories: ["2015", "2024"],
                series: [{ name: "15 – 24 tuổi", values: [7.9, 6.3] }, { name: "25 – 49 tuổi", values: [32.3, 33.7] }, { name: "Từ 50 tuổi trở lên", values: [14.3, 14.1] }], note: NOTE
            }]
        }),
        M("Quốc gia nào sau đây nằm ở khu vực hạ lưu sông Mê Công?", ["Trung Quốc.", "Mi-an-ma.", "Xin-ga-po.", "Việt Nam."], 3, "Hạ lưu sông Mê Công gồm Lào, Thái Lan, Cam-pu-chia và Việt Nam. Trung Quốc và Mi-an-ma ở thượng lưu; Xin-ga-po không nằm trong lưu vực.", { fixed: true }),
        M("Hiện nay, việc đa dạng hóa cơ cấu cây ăn quả ở Đông Nam Bộ có ý nghĩa chủ yếu nào sau đây?", [
            "Sản xuất hàng hóa quy mô lớn, nâng cao chất lượng sản phẩm, đẩy mạnh xuất khẩu.",
            "Hình thành vùng chuyên canh, tạo nhiều việc làm mới, tăng thu nhập cho người dân.",
            "Nâng cao giá trị sản phẩm, sử dụng hợp lí các nguồn tài nguyên, bảo vệ môi trường.",
            "Phát huy các thế mạnh, tạo ra nhiều nông sản hàng hóa, đáp ứng nhu cầu thị trường."
        ], 2, "Đa dạng hóa cơ cấu cây trồng giúp tăng giá trị sản phẩm, khai thác hợp lí đất, nước, khí hậu và hạn chế rủi ro, góp phần bảo vệ môi trường.", { fixed: true }),
        M("Đô thị hóa có tác động tích cực nào sau đây đối với lao động ở nước ta?", [
            "Cải thiện chất lượng cuộc sống, tăng cường xuất khẩu lao động.",
            "Giảm áp lực việc làm nông thôn, nâng cao chất lượng lao động.",
            "Thay đổi cơ cấu dân số, thu hút nhiều lao động vào các đô thị.",
            "Tăng số lượng lao động thành thị, mở rộng thị trường tiêu thụ."
        ], 1, "Đô thị hóa chuyển lao động từ nông thôn sang các ngành phi nông nghiệp, giảm sức ép việc làm ở nông thôn và nâng cao trình độ, tác phong lao động.", { fixed: true }),
        M("Giải pháp chủ yếu để nâng cao hiệu quả kinh tế của cây công nghiệp ở Trung du và miền núi phía Bắc hiện nay là", [
            "thu hút vốn đầu tư, đẩy mạnh thâm canh, tăng cường chế biến, bảo quản sản phẩm.",
            "phát triển thủy lợi, sử dụng giống mới, đa dạng cây trồng, đẩy mạnh chuyển đổi số.",
            "ứng dụng công nghệ, đẩy mạnh chế biến, xây dựng thương hiệu, mở rộng thị trường.",
            "mở rộng diện tích, nâng cao năng suất, sản xuất chuyên canh, đẩy mạnh xuất khẩu."
        ], 2, "Hiệu quả kinh tế phụ thuộc vào giá trị gia tăng: ứng dụng công nghệ, chế biến sâu, thương hiệu và thị trường.", { fixed: true }),
        M("Phần lớn lãnh thổ Liên bang Nga thuộc đới khí hậu nào sau đây?", ["Cận nhiệt đới.", "Ôn đới.", "Nhiệt đới.", "Cận xích đạo."], 1, "Liên bang Nga nằm chủ yếu ở vĩ độ trung và cao của bán cầu Bắc nên phần lớn lãnh thổ thuộc đới khí hậu ôn đới.", { fixed: true }),
        M("Cho bảng số liệu sau:\nCăn cứ vào bảng số liệu trên, nhận xét nào sau đây đúng với gia tăng dân số của tỉnh Thanh Hóa năm 2024?", [
            "Thanh Hóa có gia tăng dân số tự nhiên âm.",
            "Gia tăng dân số thực tế thấp hơn gia tăng dân số tự nhiên.",
            "Tỉ lệ gia tăng dân số thực tế là 0,91%.",
            "Gia tăng dân số cơ học cao hơn gia tăng dân số tự nhiên."
        ], 2, "Gia tăng tự nhiên = 15,4 – 6,5 = 8,9‰; gia tăng cơ học = 5,1 – 4,9 = 0,2‰; gia tăng thực tế = 8,9 + 0,2 = 9,1‰ = 0,91%.", {
            fixed: true,
            tables: [{
                title: "Tỉ suất sinh thô, tỉ suất chết thô, tỉ suất nhập cư, tỉ suất xuất cư của tỉnh Thanh Hóa năm 2024", unit: "‰",
                headers: ["Năm", "Tỉ suất sinh thô", "Tỉ suất chết thô", "Tỉ suất nhập cư", "Tỉ suất xuất cư"],
                rows: [["2024", "15,4", "6,5", "5,1", "4,9"]], note: NOTE
            }]
        }),
        M("Cho bảng số liệu sau:\nNhận xét nào sau đây đúng với sản lượng thủy sản của nước ta năm 2024 so với năm 2015?", [
            "Sản lượng nuôi trồng tăng nhanh hơn sản lượng khai thác.",
            "Sản lượng khai thác tăng nhanh hơn sản lượng nuôi trồng.",
            "Tỉ trọng sản lượng nuôi trồng giảm.",
            "Sản lượng khai thác lớn hơn sản lượng nuôi trồng."
        ], 0, "Nuôi trồng tăng 5 700 : 3 532 ≈ 1,61 lần, khai thác tăng 3 900 : 3 049 ≈ 1,28 lần. Tỉ trọng nuôi trồng tăng từ khoảng 53,7% lên 59,4%; năm 2024 nuôi trồng vẫn lớn hơn khai thác.", {
            tables: [{
                title: "Sản lượng thủy sản của nước ta, năm 2015 và năm 2024", unit: "nghìn tấn",
                headers: ["Năm", "Khai thác", "Nuôi trồng"],
                rows: [["2015", "3 049", "3 532"], ["2024", "3 900", "5 700"]], note: NOTE
            }]
        }),
        M("Vùng biển nằm ngoài lãnh hải, hợp với lãnh hải thành vùng biển rộng 200 hải lí tính từ đường cơ sở là", ["vùng nội thủy.", "vùng tiếp giáp lãnh hải.", "vùng đặc quyền kinh tế.", "vùng thềm lục địa."], 2, "Vùng đặc quyền kinh tế rộng 200 hải lí tính từ đường cơ sở, bao gồm cả lãnh hải."),
        M("Mùa mưa ở Nam Bộ và Tây Nguyên chủ yếu do hoạt động của loại gió nào sau đây?", ["Gió mùa Đông Bắc.", "Gió mùa Tây Nam.", "Tín phong bán cầu Bắc.", "Gió Tây khô nóng."], 1, "Gió mùa Tây Nam từ vịnh Bengal và Nam bán cầu mang ẩm vào gây mưa lớn cho Nam Bộ và Tây Nguyên từ tháng 5 đến tháng 10."),
        M("Đặc điểm nổi bật về cơ cấu dân số của khu vực Đông Nam Á hiện nay là", ["dân số trẻ, đang chuyển sang già hóa.", "dân số già, tỉ lệ người dưới 15 tuổi rất cao.", "dân số giảm nhanh do mức sinh rất thấp.", "dân cư tập trung chủ yếu ở vùng núi cao."], 0, "Đông Nam Á có dân số đông, cơ cấu trẻ với lực lượng lao động dồi dào nhưng đang chuyển dần sang giai đoạn già hóa."),
        M("Quốc gia nào sau đây thuộc khu vực Bắc Âu?", ["Thụy Điển.", "Tây Ban Nha.", "Ba Lan.", "I-ta-li-a."], 0, "Thụy Điển nằm trên bán đảo Xcan-đi-na-vi, thuộc Bắc Âu; Tây Ban Nha, I-ta-li-a thuộc Nam Âu, Ba Lan thuộc Đông Âu."),
        M("Ngành công nghiệp nào sau đây là ngành trọng điểm của vùng Đông Nam Bộ?", ["Khai thác than.", "Khai thác dầu khí và công nghiệp điện tử.", "Chế biến chè.", "Sản xuất giấy từ nguyên liệu rừng."], 1, "Đông Nam Bộ có dầu khí ở thềm lục địa, lao động trình độ cao và hạ tầng tốt nên phát triển mạnh khai thác dầu khí, điện tử, công nghệ cao."),
        M("Tây Nguyên có thế mạnh trồng cây công nghiệp lâu năm chủ yếu nhờ yếu tố tự nhiên nào sau đây?", ["Đất phù sa màu mỡ ven sông.", "Đất ba dan rộng lớn và khí hậu cao nguyên mát mẻ.", "Địa hình đồng bằng thấp, nhiều ngập mặn.", "Đất mặn, đất phèn chiếm diện tích lớn."], 1, "Đất ba dan màu mỡ trên các cao nguyên cùng khí hậu cận xích đạo, mát ở độ cao thích hợp cho cà phê, hồ tiêu, cao su."),
        M("Thế mạnh nổi bật về lao động của Đồng bằng sông Hồng là", ["nguồn lao động dồi dào, có trình độ cao và tập trung nhiều cơ sở đào tạo.", "lao động có kinh nghiệm khai thác khoáng sản quy mô lớn.", "lao động thưa thớt nhưng giá rẻ.", "lao động chủ yếu làm nghề đánh bắt xa bờ."], 0, "Đồng bằng sông Hồng đông dân, tập trung nhiều trường đại học, viện nghiên cứu nên lao động có chất lượng cao."),
        M("Giải pháp nào sau đây phù hợp nhất để thích ứng với xâm nhập mặn ở Đồng bằng sông Cửu Long?", ["Mở rộng diện tích lúa ba vụ ở vùng ven biển.", "Chuyển đổi cơ cấu cây trồng, vật nuôi và xây dựng hệ thống thủy lợi thích ứng.", "Khai thác nước ngầm với quy mô lớn.", "Xây dựng thêm nhiều khu công nghiệp ở cửa sông."], 1, "Chuyển đổi mùa vụ, mô hình lúa – tôm, trữ ngọt và thủy lợi thích ứng giúp giảm thiệt hại do xâm nhập mặn."),
        M("Việc hoàn thiện mạng lưới giao thông ở Tây Nguyên có ý nghĩa chủ yếu nào sau đây?", ["Giảm diện tích rừng tự nhiên.", "Tăng cường liên kết vùng, thúc đẩy giao thương và phát triển kinh tế – xã hội.", "Hạn chế phát triển du lịch.", "Giảm vai trò của các đô thị lớn."], 1, "Giao thông thuận lợi giúp Tây Nguyên liên kết với duyên hải và các vùng khác, tiêu thụ nông sản và thu hút đầu tư."),
        M("Bắc Trung Bộ có mùa mưa lệch về thu – đông chủ yếu do tác động kết hợp của nhân tố nào sau đây?", ["Gió Tây khô nóng và địa hình thấp.", "Bão, gió mùa Đông Bắc và hướng địa hình dãy Trường Sơn Bắc.", "Tín phong Đông Bắc và dòng biển lạnh.", "Gió mùa Tây Nam và hoạt động của frông cực."], 1, "Vào thu – đông, bão, gió mùa Đông Bắc gặp dãy Trường Sơn Bắc chắn ngang gây mưa lớn cho Bắc Trung Bộ."),
        T("Cho thông tin sau:\nĐịa hình của miền Tây Bắc và Bắc Trung Bộ gồm núi, cao nguyên, sơn nguyên, đồng bằng ven biển,... Đặc trưng khí hậu của miền là sự giảm sút ảnh hưởng của gió mùa Đông Bắc, nhiệt độ trung bình năm tăng dần và biên độ nhiệt độ năm giảm từ bắc vào nam. Bắc Trung Bộ chịu tác động mạnh của gió Tây khô nóng vào nửa đầu mùa hạ. Sinh vật phổ biến trong miền là các loài nhiệt đới, ngoài ra còn có sinh vật cận nhiệt và ôn đới.", [
            ["Sự phân hóa đa dạng của thiên nhiên trong miền tạo thuận lợi chủ yếu để phát triển sản xuất quanh năm, thâm canh, tăng vụ, hình thành các vùng chuyên canh quy mô lớn.", false],
            ["Miền Tây Bắc và Bắc Trung Bộ có địa hình đa dạng.", true],
            ["Sự xuất hiện của thành phần loài sinh vật ôn đới trong miền chủ yếu do tác động của hướng địa hình, gió đông bắc và vị trí xa chí tuyến.", false],
            ["Gió Tây khô nóng hoạt động mạnh ở Bắc Trung Bộ vào nửa đầu mùa hạ do Tín phong bán cầu Nam kết hợp với dãy Trường Sơn Bắc.", false]
        ], [
            "Sai: đây là thuận lợi của vùng đồng bằng; ở miền núi, thiên nhiên đa dạng thuận lợi cho phát triển đa dạng cây trồng, vật nuôi theo độ cao và du lịch.",
            "Đúng: miền có núi, cao nguyên, sơn nguyên và đồng bằng ven biển.",
            "Sai: sinh vật ôn đới xuất hiện chủ yếu do đai cao của địa hình (nhất là vùng núi cao Hoàng Liên Sơn), không phải do vị trí xa chí tuyến.",
            "Sai: gió Tây khô nóng hình thành do gió mùa Tây Nam bị biến tính (hiệu ứng phơn) khi vượt dãy Trường Sơn Bắc, không phải do Tín phong bán cầu Nam."
        ]),
        T("Cho biểu đồ sau về sản lượng điện phát ra của nước ta, giai đoạn 2015 – 2024:", [
            ["Năm 2024, sản lượng điện phát ra của nước ta cao nhất trong các năm được thể hiện trên biểu đồ.", true],
            ["Giai đoạn 2015 – 2024, sản lượng điện phát ra của nước ta tăng liên tục.", true],
            ["Năm 2024, sản lượng điện phát ra của nước ta gấp hơn 2 lần so với năm 2015.", false],
            ["Sản lượng điện tăng chủ yếu do thủy điện trên các sông lớn là nguồn điện duy nhất của nước ta.", false]
        ], [
            "Đúng: năm 2024 đạt 293,1 tỉ kWh, cao nhất trong các năm.",
            "Đúng: giá trị tăng qua các năm 2015, 2019, 2022, 2024.",
            "Sai: 293,1 : 157,9 ≈ 1,86 lần, chưa tới 2 lần.",
            "Sai: sản lượng điện tăng chủ yếu do nhu cầu của công nghiệp, đô thị hóa, đời sống tăng và cơ cấu nguồn điện đa dạng (thủy điện, nhiệt điện, năng lượng tái tạo) chứ không chỉ thủy điện."
        ], {
            charts: [{
                kind: 'bar', title: "Sản lượng điện phát ra của Việt Nam, giai đoạn 2015 – 2024", unit: "tỉ kWh",
                categories: ["2015", "2019", "2022", "2024"],
                series: [{ name: "Sản lượng điện", values: [157.9, 244.9, 258.9, 293.1] }], note: NOTE
            }]
        }),
        T("Cho thông tin sau:\nĐông Nam Bộ có đất ba dan, đất xám, khí hậu cận xích đạo nóng ẩm, nguồn nước dồi dào từ hệ thống sông Đồng Nai, hồ Dầu Tiếng, Trị An. Vùng có nhiều loại cây ăn quả như sầu riêng, chôm chôm, bưởi, xoài, mít… và đang đa dạng hóa cơ cấu cây ăn quả gắn với chế biến, xuất khẩu.", [
            ["Đông Nam Bộ có đất ba dan, khí hậu cận xích đạo và nguồn nước dồi dào là điều kiện thuận lợi để phát triển nhiều loại cây ăn quả.", true],
            ["Cây ăn quả của vùng chủ yếu phân bố ở các khu vực ven biển bị nhiễm mặn.", false],
            ["Đa dạng hóa cơ cấu cây ăn quả của vùng chủ yếu nhằm giảm diện tích cây công nghiệp lâu năm.", false],
            ["Ứng dụng công nghệ, liên kết chuỗi giá trị và xây dựng thương hiệu góp phần nâng cao giá trị cây ăn quả của vùng.", true]
        ], [
            "Đúng: đất, khí hậu và nguồn nước là các điều kiện tự nhiên thuận lợi cho cây ăn quả.",
            "Sai: cây ăn quả của vùng phân bố trên đất ba dan, đất xám ở vùng bán bình nguyên, không phải vùng ven biển nhiễm mặn.",
            "Sai: mục đích chủ yếu là nâng cao giá trị, đáp ứng thị trường và sử dụng hợp lí tài nguyên, không phải để giảm diện tích cây công nghiệp.",
            "Đúng: công nghệ, chuỗi giá trị và thương hiệu giúp nâng cao giá trị gia tăng và sức cạnh tranh."
        ]),
        T("Cho biểu đồ sau về tỉ lệ dân thành thị của nước ta, giai đoạn 2015 – 2024:", [
            ["Giai đoạn 2015 – 2024, tỉ lệ dân thành thị của nước ta tăng liên tục.", true],
            ["Năm 2019, tỉ lệ dân thành thị của nước ta cao hơn năm 2022.", false],
            ["Giai đoạn 2015 – 2024, tỉ lệ dân thành thị của nước ta tăng 4,9 điểm phần trăm.", true],
            ["Tỉ lệ dân thành thị tăng chủ yếu do mức sinh ở thành thị cao hơn nhiều so với nông thôn.", false]
        ], [
            "Đúng: tỉ lệ tăng qua các năm 33,5% → 34,4% → 37,1% → 38,4%.",
            "Sai: năm 2019 (34,4%) thấp hơn năm 2022 (37,1%).",
            "Đúng: 38,4 – 33,5 = 4,9 điểm phần trăm.",
            "Sai: tỉ lệ dân thành thị tăng chủ yếu do công nghiệp hóa, di cư từ nông thôn ra thành thị và mở rộng đô thị, không phải do mức sinh ở thành thị cao."
        ], {
            charts: [{
                kind: 'line', title: "Tỉ lệ dân thành thị của Việt Nam, giai đoạn 2015 – 2024", unit: "%",
                categories: ["2015", "2019", "2022", "2024"],
                series: [{ name: "Dân thành thị", values: [33.5, 34.4, 37.1, 38.4] }], note: NOTE
            }]
        }),
        S("Năm 2023, trị giá nhập khẩu hàng hóa và dịch vụ của Thụy Điển là 299,5 tỉ đô la Mỹ, trị giá xuất khẩu là 322,7 tỉ đô la Mỹ. Hãy tính cán cân thương mại của Thụy Điển năm 2023 (đơn vị: tỉ đô la Mỹ, lấy kết quả đến một chữ số thập phân).", 23.2, "Cán cân thương mại = xuất khẩu – nhập khẩu = 322,7 – 299,5 = 23,2 (tỉ USD).", "tỉ USD"),
        S("Năm 2015, sản lượng điện phát ra của nước ta là 157,9 tỉ kWh, năm 2024 là 293,1 tỉ kWh. Hãy cho biết năm 2024 so với năm 2015, sản lượng điện phát ra của nước ta tăng bao nhiêu lần (làm tròn kết quả đến hai chữ số thập phân).", 1.86, "293,1 : 157,9 ≈ 1,856 → làm tròn 1,86 (lần).", "lần"),
        S("Năm 2024, một tỉnh có tỉ suất sinh thô là 17,2‰ và tỉ suất chết thô là 6,5‰. Hãy tính tỉ lệ gia tăng dân số tự nhiên của tỉnh đó (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 1.1, "Gia tăng tự nhiên = (17,2 – 6,5) : 10 = 1,07% → làm tròn 1,1%.", "%"),
        S("Năm 2024, dân số nước ta là 101,3 triệu người, diện tích tự nhiên là 331,3 nghìn km². Hãy tính mật độ dân số của nước ta năm 2024 (đơn vị: người/km², làm tròn kết quả đến hàng đơn vị).", 306, "Mật độ = 101 300 nghìn người : 331,3 nghìn km² ≈ 305,8 → làm tròn 306 người/km².", "người/km²"),
        S("Năm 2024, GDP của nước ta (theo giá hiện hành) là 12 847,6 nghìn tỉ đồng, trong đó khu vực dịch vụ đạt 6 508,2 nghìn tỉ đồng. Hãy tính tỉ trọng của khu vực dịch vụ trong GDP (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 50.7, "Tỉ trọng = 6 508,2 : 12 847,6 × 100 ≈ 50,66% → làm tròn 50,7%.", "%"),
        S("Năm 2024, diện tích lúa của nước ta là 7,1 triệu ha, sản lượng lúa là 43,5 triệu tấn. Hãy tính năng suất lúa của nước ta năm 2024 (đơn vị: tạ/ha, làm tròn kết quả đến một chữ số thập phân).", 61.3, "Năng suất = sản lượng : diện tích = 435 triệu tạ : 7,1 triệu ha ≈ 61,27 → làm tròn 61,3 tạ/ha.", "tạ/ha")
    ];

    /* ============================ ĐỀ 11 ============================ */
    const de11 = [
        M("Cho biểu đồ sau:\nNhận xét nào sau đây đúng với diện tích rừng của nước ta năm 2024 so với năm 2015?", [
            "Diện tích rừng tự nhiên tăng.",
            "Diện tích rừng trồng tăng thêm 0,9 triệu ha.",
            "Tổng diện tích rừng giảm.",
            "Diện tích rừng trồng lớn hơn diện tích rừng tự nhiên."
        ], 1, "Rừng trồng: 4,8 – 3,9 = 0,9 triệu ha. Rừng tự nhiên giảm nhẹ (10,2 → 10,1); tổng diện tích rừng tăng (14,1 → 14,9); rừng trồng vẫn nhỏ hơn rừng tự nhiên.", {
            charts: [{
                kind: 'bar', title: "Diện tích rừng tự nhiên và rừng trồng của nước ta năm 2015 và năm 2024", unit: "triệu ha",
                categories: ["2015", "2024"],
                series: [{ name: "Rừng tự nhiên", values: [10.2, 10.1] }, { name: "Rừng trồng", values: [3.9, 4.8] }], note: NOTE
            }]
        }),
        M("Quốc gia nào sau đây thuộc khu vực Nam Á và có dân số đông nhất thế giới hiện nay?", ["Ấn Độ.", "Trung Quốc.", "Pa-ki-xtan.", "Băng-la-đét."], 0, "Ấn Độ thuộc Nam Á và đã vượt Trung Quốc về quy mô dân số, đứng đầu thế giới."),
        M("Cho bảng số liệu sau:\nNhận xét nào sau đây đúng với hoạt động xuất, nhập khẩu hàng hóa của nước ta?", [
            "Năm 2015, nước ta xuất siêu.",
            "Năm 2024, nước ta xuất siêu.",
            "Giá trị nhập khẩu năm 2024 thấp hơn năm 2015.",
            "Giá trị xuất khẩu tăng chậm hơn giá trị nhập khẩu."
        ], 1, "Năm 2015: 162,4 – 165,8 = –3,4 (nhập siêu); năm 2024: 405,5 – 380,8 = +24,7 (xuất siêu). Xuất khẩu tăng ≈ 2,50 lần, nhập khẩu tăng ≈ 2,30 lần.", {
            tables: [{
                title: "Giá trị xuất khẩu và nhập khẩu hàng hóa của nước ta, năm 2015 và năm 2024", unit: "tỉ USD",
                headers: ["Năm", "Xuất khẩu", "Nhập khẩu"],
                rows: [["2015", "162,4", "165,8"], ["2024", "405,5", "380,8"]], note: NOTE
            }]
        }),
        M("Vấn đề dân số nổi bật của Liên minh châu Âu (EU) hiện nay là", ["dân số trẻ, gia tăng tự nhiên rất cao.", "dân số đang già hóa, thiếu hụt lao động ở nhiều nước.", "dân cư tập trung chủ yếu ở nông thôn.", "tỉ lệ dân thành thị rất thấp."], 1, "Mức sinh thấp, tuổi thọ cao khiến dân số EU già hóa, nhiều nước thiếu lao động và phải thu hút lao động nhập cư."),
        M("Mùa đông lạnh ở Đồng bằng sông Hồng tạo thuận lợi chủ yếu cho việc", ["trồng cây công nghiệp lâu năm nhiệt đới.", "phát triển vụ đông với các cây ưa lạnh.", "nuôi trồng thủy sản nước mặn quanh năm.", "trồng lúa ba vụ trong năm."], 1, "Mùa đông lạnh cho phép trồng thêm vụ đông (ngô, khoai tây, rau ôn đới), làm đa dạng cơ cấu cây trồng."),
        M("Trung du và miền núi phía Bắc có thế mạnh nổi bật về", ["khai thác khoáng sản và thủy điện.", "nuôi trồng thủy sản nước lợ.", "trồng lúa nước quy mô lớn.", "công nghiệp dầu khí."], 0, "Vùng có nhiều khoáng sản (than, sắt, apatit,…) và sông ngòi dốc, giàu tiềm năng thủy điện."),
        M("Duyên hải Nam Trung Bộ có điều kiện thuận lợi nhất để phát triển ngành nào sau đây?", ["Kinh tế biển (cảng biển, du lịch biển, nuôi trồng và đánh bắt hải sản).", "Khai thác than nâu.", "Trồng cây ăn quả ôn đới.", "Khai thác gỗ quy mô lớn trong rừng đầu nguồn."], 0, "Đường bờ biển dài, nhiều vũng vịnh, bãi biển đẹp, ngư trường lớn thuận lợi cho kinh tế biển."),
        M("Cho bảng số liệu sau:\nNhận xét nào sau đây đúng về chế độ nhiệt của ba địa điểm?", [
            "Nhiệt độ tháng 1 giảm dần từ Bắc vào Nam.",
            "Biên độ nhiệt độ năm tăng dần từ Bắc vào Nam.",
            "Nhiệt độ tháng 7 chênh lệch giữa ba địa điểm lớn hơn tháng 1.",
            "Thành phố Hồ Chí Minh có biên độ nhiệt độ năm nhỏ nhất."
        ], 3, "Biên độ nhiệt năm: Hà Nội 12,5 °C; Huế 9,7 °C; TP. Hồ Chí Minh 1,3 °C → giảm dần từ Bắc vào Nam, TP. Hồ Chí Minh nhỏ nhất. Nhiệt độ tháng 1 tăng dần từ Bắc vào Nam; chênh lệch tháng 7 chỉ 2,3 °C, nhỏ hơn tháng 1 (9,4 °C).", {
            tables: [{
                title: "Nhiệt độ trung bình tháng 1 và tháng 7 của một số địa điểm", unit: "°C",
                headers: ["Địa điểm", "Tháng 1", "Tháng 7"],
                rows: [["Hà Nội", "16,4", "28,9"], ["Huế", "19,7", "29,4"], ["TP. Hồ Chí Minh", "25,8", "27,1"]], note: NOTE
            }]
        }),
        M("Gió mùa Đông Bắc ảnh hưởng mạnh nhất tới khu vực nào của nước ta?", ["Nam Bộ.", "Tây Nguyên.", "Miền Bắc và Đông Bắc Bắc Bộ.", "Duyên hải Nam Trung Bộ."], 2, "Gió mùa Đông Bắc thổi qua miền Bắc và Đông Bắc Bắc Bộ gây mùa đông lạnh, giảm dần khi vào phía nam."),
        M("Cây công nghiệp lâu năm chủ lực của Tây Nguyên là", ["chè và hồi.", "cà phê và hồ tiêu.", "dừa và mía.", "bông và đay."], 1, "Tây Nguyên là vùng cà phê lớn nhất cả nước, đồng thời trồng nhiều hồ tiêu, cao su."),
        M("Giải pháp chủ yếu để nâng cao hiệu quả khai thác thủy sản xa bờ là", ["tăng cường khai thác gần bờ.", "hiện đại hóa tàu thuyền, ngư cụ và hoàn thiện dịch vụ hậu cần nghề cá.", "giảm đầu tư cảng cá.", "hạn chế bảo quản sau thu hoạch."], 1, "Tàu công suất lớn, ngư cụ hiện đại và hậu cần nghề cá giúp khai thác xa bờ hiệu quả, an toàn và bền vững."),
        M("Hạn chế chủ yếu của quá trình đô thị hóa ở nước ta hiện nay là", ["dân số thành thị giảm.", "áp lực lên hạ tầng, môi trường và nhà ở đô thị.", "thu hẹp thị trường tiêu thụ.", "giảm nhu cầu việc làm."], 1, "Đô thị phát triển nhanh gây ùn tắc, ô nhiễm, thiếu nhà ở và quá tải hạ tầng."),
        M("Liên bang Nga nổi tiếng thế giới về tài nguyên khoáng sản nào sau đây?", ["Dầu mỏ và khí tự nhiên.", "Thiếc và bô-xít.", "Kim cương và vàng.", "Phốt phát và muối mỏ."], 0, "Nga có trữ lượng dầu mỏ, khí tự nhiên thuộc loại lớn nhất thế giới, là mặt hàng xuất khẩu quan trọng."),
        M("Việt Nam gia nhập Hiệp hội các quốc gia Đông Nam Á (ASEAN) vào năm nào?", ["1967.", "1984.", "1995.", "2007."], 2, "Việt Nam trở thành thành viên thứ 7 của ASEAN vào năm 1995."),
        M("Giải pháp nào sau đây góp phần giảm thiệt hại do bão, lũ ở Bắc Trung Bộ?", ["Phá rừng đầu nguồn để lấy đất.", "Hoàn thiện hệ thống cảnh báo, hồ chứa nước và trồng, bảo vệ rừng phòng hộ.", "Xây dựng nhà ở sát cửa sông.", "Giảm đầu tư thủy lợi."], 1, "Cảnh báo sớm, hồ chứa điều tiết lũ và rừng phòng hộ giúp giảm tác động của thiên tai."),
        M("Đông Nam Bộ thu hút nhiều lao động nhập cư chủ yếu do", ["kinh tế năng động, nhiều việc làm và thu nhập cao.", "đất nông nghiệp rộng và rẻ.", "khí hậu có mùa đông lạnh.", "hạ tầng giao thông kém phát triển."], 0, "Vùng có công nghiệp, dịch vụ phát triển, nhiều khu công nghiệp nên tạo nhiều việc làm."),
        M("Gia tăng dân số cơ học được tính bằng", ["hiệu số giữa tỉ suất sinh thô và tỉ suất chết thô.", "hiệu số giữa tỉ suất nhập cư và tỉ suất xuất cư.", "tổng của tỉ suất sinh và tỉ suất chết.", "tổng của tỉ suất nhập cư và xuất cư."], 1, "Gia tăng cơ học = tỉ suất nhập cư – tỉ suất xuất cư; gia tăng tự nhiên = sinh thô – chết thô."),
        M("Phát triển kinh tế tuần hoàn ở nước ta chủ yếu nhằm", ["tăng nhanh khai thác tài nguyên.", "tái sử dụng, tái chế, giảm chất thải và sử dụng hiệu quả tài nguyên.", "giảm vai trò của công nghệ.", "hạn chế xuất khẩu."], 1, "Kinh tế tuần hoàn kéo dài vòng đời sản phẩm, giảm chất thải, tiết kiệm tài nguyên và bảo vệ môi trường."),
        T("Cho thông tin sau:\nMiền Nam Trung Bộ và Nam Bộ có khí hậu cận xích đạo gió mùa, nền nhiệt độ cao quanh năm, phân hóa thành hai mùa mưa và khô rõ rệt. Mùa khô ở Nam Bộ kéo dài từ tháng 11 đến tháng 4, chịu chi phối chủ yếu của Tín phong bán cầu Bắc.", [
            ["Miền Nam Trung Bộ và Nam Bộ có nền nhiệt độ cao quanh năm, phân hóa thành hai mùa mưa và khô rõ rệt.", true],
            ["Địa hình của miền chủ yếu là núi cao trên 2 000 m chiếm phần lớn diện tích.", false],
            ["Mùa khô ở Nam Bộ chủ yếu do Tín phong bán cầu Bắc chi phối.", true],
            ["Nhiệt độ cao quanh năm nên miền có mùa đông lạnh, thích hợp trồng cây ôn đới trên diện rộng.", false]
        ], [
            "Đúng: khí hậu cận xích đạo gió mùa, nhiệt cao quanh năm, hai mùa mưa – khô rõ.",
            "Sai: miền có đồng bằng, cao nguyên và đồi núi thấp là chủ yếu; núi cao trên 2 000 m chỉ chiếm diện tích nhỏ.",
            "Đúng: trong mùa khô, Tín phong bán cầu Bắc khô, ít mưa chi phối Nam Bộ.",
            "Sai: miền không có mùa đông lạnh; cây ôn đới chỉ trồng được ở vùng núi cao."
        ]),
        T("Cho biểu đồ sau về cơ cấu lao động đang làm việc phân theo khu vực kinh tế của nước ta, năm 2015 và năm 2024:", [
            ["Tỉ trọng lao động khu vực nông, lâm, thủy sản của nước ta giảm trong giai đoạn 2015 – 2024.", true],
            ["Năm 2024, tỉ trọng lao động khu vực công nghiệp và xây dựng cao hơn khu vực dịch vụ.", false],
            ["Giai đoạn 2015 – 2024, tỉ trọng lao động khu vực dịch vụ tăng 7,2 điểm phần trăm.", true],
            ["Cơ cấu lao động chuyển dịch chủ yếu do dân số nông thôn tăng nhanh hơn dân số thành thị.", false]
        ], [
            "Đúng: 44,0% (2015) giảm xuống 26,5% (2024).",
            "Sai: năm 2024 công nghiệp và xây dựng chiếm 33,0%, thấp hơn dịch vụ (40,5%).",
            "Đúng: 40,5 – 33,3 = 7,2 điểm phần trăm.",
            "Sai: cơ cấu lao động chuyển dịch chủ yếu do công nghiệp hóa, hiện đại hóa và phát triển các ngành công nghiệp, dịch vụ."
        ], {
            charts: [{
                kind: 'stacked', title: "Cơ cấu lao động đang làm việc phân theo khu vực kinh tế của Việt Nam", unit: "%",
                categories: ["2015", "2024"],
                series: [{ name: "Nông, lâm, thủy sản", values: [44.0, 26.5] }, { name: "Công nghiệp và xây dựng", values: [22.7, 33.0] }, { name: "Dịch vụ", values: [33.3, 40.5] }], note: NOTE
            }]
        }),
        T("Cho biểu đồ sau về dân số của một số quốc gia Đông Nam Á năm 2023:", [
            ["Năm 2023, In-đô-nê-xi-a là quốc gia đông dân nhất trong các quốc gia được thể hiện trên biểu đồ.", true],
            ["Năm 2023, dân số của Thái Lan cao hơn dân số của Việt Nam.", false],
            ["Năm 2023, dân số của In-đô-nê-xi-a gấp khoảng 8 lần dân số của Ma-lai-xi-a.", true],
            ["Dân số đông là lợi thế duy nhất giúp các quốc gia Đông Nam Á phát triển kinh tế.", false]
        ], [
            "Đúng: In-đô-nê-xi-a có 277,5 triệu người, nhiều nhất.",
            "Sai: Thái Lan (71,8 triệu) thấp hơn Việt Nam (100,3 triệu).",
            "Đúng: 277,5 : 34,3 ≈ 8,1 lần.",
            "Sai: dân số đông chỉ là một lợi thế (lao động, thị trường); phát triển còn phụ thuộc vốn, công nghệ, chất lượng lao động, chính sách…"
        ], {
            charts: [{
                kind: 'bar', title: "Dân số của một số quốc gia Đông Nam Á năm 2023", unit: "triệu người",
                categories: ["In-đô-nê-xi-a", "Phi-líp-pin", "Việt Nam", "Thái Lan", "Ma-lai-xi-a"],
                series: [{ name: "Dân số", values: [277.5, 117.3, 100.3, 71.8, 34.3] }], note: NOTE
            }]
        }),
        T("Cho thông tin sau:\nTrung du và miền núi phía Bắc có địa hình núi cao, khí hậu có mùa đông lạnh, thuận lợi phát triển cây công nghiệp, cây dược liệu, cây ăn quả cận nhiệt và ôn đới. Vùng đang đẩy mạnh liên kết sản xuất, chế biến và xây dựng thương hiệu nông sản đặc sản.", [
            ["Khí hậu có mùa đông lạnh, địa hình núi cao là điều kiện thuận lợi để vùng trồng chè và cây dược liệu.", true],
            ["Cây công nghiệp chủ yếu của vùng là cao su và hồ tiêu.", false],
            ["Vùng chuyên canh chè chủ yếu nhờ mùa đông ấm, không có sương muối.", false],
            ["Gắn trồng cây công nghiệp với chế biến và xây dựng thương hiệu giúp nâng cao giá trị sản phẩm của vùng.", true]
        ], [
            "Đúng: khí hậu cận nhiệt, mùa đông lạnh và địa hình núi cao thích hợp chè, cây dược liệu.",
            "Sai: cao su, hồ tiêu là cây của vùng nhiệt đới nóng ẩm (Đông Nam Bộ, Tây Nguyên); vùng này nổi bật với chè, hồi, quế…",
            "Sai: chè thích hợp khí hậu cận nhiệt, mát; mùa đông lạnh, có sương muối là một trở ngại chứ không phải nguyên nhân chuyên canh.",
            "Đúng: chế biến và thương hiệu nâng cao giá trị gia tăng và sức cạnh tranh của nông sản."
        ]),
        S("Năm 2024, giá trị xuất khẩu hàng hóa của nước ta là 405,5 tỉ USD, giá trị nhập khẩu là 380,8 tỉ USD. Hãy tính cán cân thương mại hàng hóa của nước ta năm 2024 (đơn vị: tỉ USD, lấy kết quả đến một chữ số thập phân).", 24.7, "Cán cân thương mại = 405,5 – 380,8 = 24,7