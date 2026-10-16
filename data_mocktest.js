/* =========================================================================
   DATA_MOCKTEST.JS - NGÂN HÀNG ĐỀ THI THỬ TỐT NGHIỆP THPT MÔN ĐỊA LÍ 2026
   Gồm 7 đề hoàn chỉnh (Đề 1 -> Đề 7) theo đúng cấu trúc chính thức 2026:
     - PHẦN I  : 18 câu trắc nghiệm nhiều phương án (0,25 điểm/câu)
     - PHẦN II : 4 câu Đúng/Sai (tối đa 1,0 điểm/câu)
     - PHẦN III: 6 câu trả lời ngắn (0,25 điểm/câu)
   Đã bổ sung 100% lời giải chi tiết (explain) cho mọi câu hỏi và ý Đúng/Sai.
========================================================================= */

const dataMocktest = (function () {
    const M = (text, options, answer, explain, extra) => Object.assign({ type: 'mcq', text, options, answer, explain }, extra || {});
    const T = (text, items, explains, extra) => Object.assign({
        type: 'tf', text,
        options: items.map(([t, a], i) => ({ text: t, answer: a, explain: explains ? explains[i] : '' }))
    }, extra || {});
    const S = (text, answer, explain, unit) => ({ type: 'sa', text, answer, explain, unit });
    const NOTE = "Số liệu đã làm tròn, dùng cho ôn tập.";

    /* ============================ ĐỀ SỐ 1 ============================ */
    const de1 = [
        // PHẦN I
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
        // PHẦN II
        T("Dựa vào biểu đồ Dân số và GDP của một số quốc gia Tây Nam Á năm 2023 (I-rắc, I-xra-en, A-rập Xê-út, Cô-oét):", [
            ["a) Năm 2023, dân số và GDP của một số quốc gia Tây Nam Á có sự chênh lệch.", true],
            ["b) Năm 2023, Cô-oét có GDP/người cao gấp 2 lần GDP/người của A-rập Xê-út.", false],
            ["c) Năm 2023, I-xra-en có GDP/người cao nhất, I-rắc có GDP/người thấp nhất.", true],
            ["d) Nguyên nhân chênh lệch GDP/người của một số quốc gia Tây Nam Á chủ yếu do sự bất ổn định về chính trị và biến động của giá dầu mỏ.", true]
        ], [
            "Đúng: Dân số và GDP/người của I-rắc, I-xra-en, A-rập Xê-út, Cô-oét đều khác nhau rõ rệt trên biểu đồ.",
            "Sai: GDP/người của Cô-oét (37.204 USD) chỉ gấp khoảng 1,28 lần A-rập Xê-út (28.932 USD), không phải 2 lần.",
            "Đúng: I-xra-en có GDP/người cao nhất (54.200 USD), I-rắc thấp nhất (5.900 USD).",
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
            "Đúng: miền có núi cao Hoàng Liên Sơn, Trường Sơn Bắc, sơn nguyên, cao nguyên và đồng bằng ven biển hẹp.",
            "Sai: sản xuất quanh năm, thâm canh, tăng vụ, vùng chuyên canh quy mô lớn là thuận lợi của vùng đồng bằng.",
            "Sai: gió Tây khô nóng do khối khí nhiệt đới ẩm từ Bắc Ấn Độ Dương (gió mùa Tây Nam) vượt dãy Trường Sơn Bắc gây hiệu ứng phơn.",
            "Sai: thành phần loài ôn đới xuất hiện chủ yếu do độ cao địa hình (đai ôn đới gió mùa trên núi ở Hoàng Liên Sơn)."
        ]),
        T("Về tình hình sản xuất và ứng phó với biến đổi khí hậu tại Đồng bằng sông Cửu Long:", [
            ["a) Đồng bằng sông Cửu Long là vùng có diện tích và sản lượng lúa lớn nhất nước ta.", true],
            ["b) Khó khăn lớn nhất trong sản xuất lúa ở Đồng bằng sông Cửu Long là nhiệt độ trung bình năm tăng.", false],
            ["c) Vùng có sản lượng lúa lớn, chủ yếu do khí hậu cận xích đạo, nguồn nước phong phú, nhiều giống lúa chất lượng cao.", false],
            ["d) Giải pháp chủ yếu để sử dụng hiệu quả tài nguyên đất trong sản xuất lúa ở Đồng bằng sông Cửu Long là tăng vụ và chuyển đổi mục đích sử dụng đất.", true]
        ], [
            "Đúng: vùng chiếm hơn 50% diện tích và sản lượng lúa cả nước.",
            "Sai: khó khăn lớn nhất là hạn hán và xâm nhập mặn sâu vào mùa khô.",
            "Sai: nhân tố quyết định quy mô sản lượng lúa lớn nhất là diện tích đất phù sa rộng lớn, màu mỡ kết hợp thâm canh.",
            "Đúng: tăng vụ hợp lí và chuyển đổi đất lúa kém hiệu quả sang cây ăn quả, thuỷ sản giúp nâng cao hiệu quả sử dụng đất."
        ]),
        // PHẦN III
        S("Năm 2023, GDP của I-xra-en là 531,0 tỉ USD, dân số là 9,8 triệu người. Hãy tính GDP bình quân đầu người của I-xra-en năm 2023 (đơn vị: USD/người, làm tròn kết quả đến hàng đơn vị).", 54184, "GDP/người = 531,0 tỉ USD : 9,8 triệu người ≈ 54 184 USD/người.", "USD/người"),
        S("Năm 2024, Pháp có 68,4 triệu dân, trong đó dân thành thị chiếm 78,8%. Hãy tính số dân nông thôn của Pháp (đơn vị: triệu người, làm tròn kết quả đến một chữ số thập phân).", 14.5, "Dân nông thôn = 68,4 × (100 – 78,8)% = 68,4 × 21,2% ≈ 14,5 triệu người.", "triệu người"),
        S("Nhiệt độ trung bình tháng 1 của một địa điểm là 18,0 °C, tháng 7 là 29,4 °C. Hãy tính biên độ nhiệt độ năm của địa điểm đó (đơn vị: °C, lấy kết quả đến một chữ số thập phân).", 11.4, "Biên độ nhiệt độ năm = 29,4 – 18,0 = 11,4 °C.", "°C"),
        S("Tổng mức bán lẻ hàng hóa và doanh thu dịch vụ tiêu dùng của nước ta năm 2015 là 3 224 nghìn tỉ đồng, năm 2024 là 6 391 nghìn tỉ đồng. Hãy cho biết năm 2024 so với năm 2015 tăng bao nhiêu lần (làm tròn kết quả đến hai chữ số thập phân).", 1.98, "6 391 : 3 224 ≈ 1,98 lần.", "lần"),
        S("Năm 2024, diện tích lúa của Đồng bằng sông Cửu Long là 3,9 triệu ha, sản lượng lúa là 24,3 triệu tấn. Hãy tính năng suất lúa của vùng (đơn vị: tạ/ha, làm tròn kết quả đến một chữ số thập phân).", 62.3, "Năng suất = 243 triệu tạ : 3,9 triệu ha ≈ 62,3 tạ/ha.", "tạ/ha"),
        S("Năm 2024, doanh thu du lịch của nước ta là 840 nghìn tỉ đồng, GDP là 12 847,6 nghìn tỉ đồng. Hãy tính tỉ trọng doanh thu du lịch so với GDP (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 6.5, "Tỉ trọng = 840 : 12 847,6 × 100 ≈ 6,5%.", "%")
    ];

    /* ============================ ĐỀ SỐ 2 ============================ */
    const de2 = [
        // PHẦN I
        M("Cho biểu đồ sau:\nNhận xét nào sau đây đúng về diện tích cây ăn quả của Đồng bằng sông Cửu Long?", [
            "Năm 2024 diện tích gấp 2 lần năm 2015.",
            "Năm 2020 diện tích tăng 20 nghìn ha so với năm 2015.",
            "Giai đoạn 2020 – 2024 diện tích tăng nhanh hơn giai đoạn 2015 – 2020.",
            "Diện tích cây ăn quả tăng liên tục qua các năm."
        ], 3, "Diện tích tăng 290 → 360 → 410 nghìn ha. Giai đoạn 2015 – 2020 tăng 70 nghìn ha; 410 : 290 ≈ 1,41 lần; giai đoạn 2020 – 2024 tăng 50 nghìn ha.", {
            charts: [{
                kind: "bar", title: "Diện tích cây ăn quả của Đồng bằng sông Cửu Long", unit: "nghìn ha",
                categories: ["2015", "2020", "2024"],
                series: [{ name: "Diện tích cây ăn quả", values: [290, 360, 410] }], note: NOTE
            }]
        }),
        M("Hiện nay Liên minh châu Âu (EU) có bao nhiêu quốc gia thành viên?", ["25 quốc gia.", "27 quốc gia.", "28 quốc gia.", "30 quốc gia."], 1, "Sau khi Anh rời EU năm 2020, EU có 27 quốc gia thành viên."),
        M("Trụ sở chính của các cơ quan đầu não Liên minh châu Âu đặt ở thủ đô nào?", ["Pa-ri.", "Bruy-xen.", "Béc-lin.", "Rô-ma."], 1, "Bruy-xen (Bỉ) là nơi đặt trụ sở Ủy ban châu Âu và Hội đồng Liên minh châu Âu."),
        M("Vùng đồi núi nước ta phân bố chủ yếu ở phía nào?", ["Phía đông và đông nam.", "Phía nam.", "Phía tây và tây bắc.", "Ven biển phía đông."], 2, "Đồi núi chiếm 3/4 diện tích đất liền, phân bố chủ yếu ở phía tây và tây bắc."),
        M("Siêu thị và trung tâm thương mại thuộc hình thức hoạt động nào sau đây của nội thương?", ["Vận tải hàng hoá.", "Sản xuất công nghiệp.", "Bán lẻ hàng hoá.", "Tín dụng ngân hàng."], 2, "Siêu thị, trung tâm thương mại là loại hình phân phối bán lẻ hiện đại trong nội thương."),
        M("Tây Nam Á có vị trí địa chính trị quan trọng chủ yếu do nguyên nhân nào sau đây?", ["Nằm ở ngã ba của ba châu lục Á, Âu, Phi và có nguồn dầu mỏ lớn.", "Nằm hoàn toàn trong vùng hàn đới.", "Không có tài nguyên khoáng sản.", "Có diện tích lớn nhất thế giới."], 0, "Vị trí ngã ba châu lục Á – Âu – Phi, án ngữ các tuyến hàng hải quốc tế và giàu dầu mỏ làm tăng vị thế địa chính trị."),
        M("Cho bảng số liệu sau:\nNhận xét nào sau đây đúng về chế độ nhiệt của Lạng Sơn và Sơn La?", [
            "Nhiệt độ tháng 1 của Sơn La thấp hơn Lạng Sơn.",
            "Sơn La có nhiệt độ tháng 1 cao hơn và biên độ nhiệt độ năm nhỏ hơn Lạng Sơn.",
            "Biên độ nhiệt độ năm của Sơn La lớn hơn Lạng Sơn.",
            "Lạng Sơn có nhiệt độ tháng 7 thấp hơn Sơn La."
        ], 1, "Biên độ nhiệt Lạng Sơn: 27,4 – 13,2 = 14,2 °C; Sơn La: 25,8 – 15,1 = 10,7 °C. Sơn La ấm hơn vào tháng 1 và biên độ nhiệt nhỏ hơn.", {
            tables: [{
                title: "Nhiệt độ trung bình tháng 1 và tháng 7 của Lạng Sơn và Sơn La", unit: "°C",
                headers: ["Địa điểm", "Tháng 1", "Tháng 7"],
                rows: [["Lạng Sơn (Đông Bắc)", "13,2", "27,4"], ["Sơn La (Tây Bắc)", "15,1", "25,8"]], note: NOTE
            }]
        }),
        M("Sự khác biệt thiên nhiên giữa vùng núi Đông Bắc và Tây Bắc chủ yếu do nhân tố nào sau đây?", ["Tác động của dòng biển nóng.", "Hướng địa hình, đặc biệt là dãy Hoàng Liên Sơn chắn gió mùa Đông Bắc.", "Sự khác nhau về diện tích rừng.", "Chênh lệch số dân giữa hai vùng."], 1, "Dãy Hoàng Liên Sơn chạy hướng tây bắc – đông nam ngăn cản gió mùa Đông Bắc sang Tây Bắc."),
        M("Đồng bằng ven biển miền Trung nước ta có đặc điểm nổi bật nào sau đây?", ["Nằm sâu trong nội địa.", "Chủ yếu do phù sa sông lớn bồi tụ rộng.", "Rộng lớn, bằng phẳng, ít bị chia cắt.", "Hẹp ngang, bị chia cắt do núi đâm sát biển."], 3, "Các nhánh núi Trường Sơn đâm ngang ra sát biển chia cắt đồng bằng ven biển miền Trung thành nhiều đồng bằng nhỏ hẹp."),
        M("Hoạt động nội thương giữa các vùng nước ta phân hoá chủ yếu do nguyên nhân nào sau đây?", ["Khác nhau về trình độ phát triển kinh tế và mức sống dân cư.", "Khác nhau về hướng địa hình.", "Khác nhau về diện tích rừng.", "Khác nhau về số lượng sông ngòi."], 0, "Nội thương phụ thuộc trực tiếp vào quy mô sản xuất hàng hóa, thu nhập và sức mua của dân cư từng vùng."),
        M("Giải pháp nào sau đây góp phần phát triển du lịch xanh ở nước ta?", ["Xây dựng thêm công trình lớn trong khu bảo tồn.", "Hạn chế quản lí khách du lịch.", "Bảo vệ môi trường, phát triển du lịch có trách nhiệm và sử dụng năng lượng sạch.", "Khai thác tối đa tài nguyên để thu hút khách."], 2, "Du lịch xanh gắn với bảo vệ cảnh quan, giảm rác thải nhựa và sử dụng năng lượng tái tạo."),
        M("Việc ứng dụng đặt phòng trực tuyến, tham quan thực tế ảo trong du lịch có tác dụng chủ yếu nào sau đây?", ["Giảm vai trò của hướng dẫn viên hoàn toàn.", "Làm giảm số lượng khách du lịch.", "Hạn chế quảng bá điểm đến.", "Gia tăng trải nghiệm, thuận tiện cho du khách và mở rộng thị trường."], 3, "Chuyển đổi số trong du lịch giúp quảng bá rộng rãi, cá nhân hoá trải nghiệm và thuận tiện khi đặt dịch vụ."),
        M("Giải pháp chủ yếu để sản xuất cây ăn quả ở Đồng bằng sông Cửu Long phát triển bền vững là", ["áp dụng tiêu chuẩn sản xuất an toàn, truy xuất nguồn gốc và liên kết tiêu thụ.", "chỉ xuất khẩu tươi, không chế biến.", "tăng sử dụng thuốc bảo vệ thực vật.", "mở rộng diện tích trên đất nhiễm mặn."], 0, "Áp dụng VietGAP/GlobalGAP, mã số vùng trồng và liên kết chuỗi giúp nông sản đáp ứng tiêu chuẩn xuất khẩu."),
        M("Để phát triển nội thương ở khu vực miền núi, nước ta cần ưu tiên giải pháp nào sau đây?", ["Hoàn thiện hạ tầng giao thông, chợ và mạng lưới phân phối.", "Hạn chế buôn bán giữa các vùng.", "Giảm sản xuất hàng hoá.", "Giảm đầu tư giao thông."], 0, "Giao thông và hạ tầng thương mại giúp kết nối hàng hoá miền núi với đồng bằng và đô thị."),
        M("Việc Anh rời khỏi EU (Brexit) cho thấy điều nào sau đây về liên kết khu vực?", ["Liên kết khu vực có thể gặp thách thức khi lợi ích quốc gia và lợi ích chung chưa hài hoà.", "Liên kết khu vực không có thách thức nào.", "EU không còn thị trường chung.", "Mọi nước đều muốn rời EU."], 0, "Khi chính sách chung về nhập cư, ngân sách và chủ quyền có điểm bất đồng với lợi ích riêng, liên kết khu vực sẽ gặp thách thức."),
        M("Lũ quét, sạt lở đất ở vùng núi Tây Bắc gia tăng chủ yếu do nguyên nhân nào sau đây?", ["Địa hình bằng phẳng.", "Sông ngòi ngắn và ít nước.", "Địa hình dốc, mưa lớn tập trung và suy giảm độ che phủ rừng.", "Khí hậu khô hạn quanh năm."], 2, "Địa hình chia cắt mạnh, sườn dốc, mưa lớn theo mùa kết hợp mất rừng làm đất đá mất kết cấu, gây lũ quét và sạt lở."),
        M("Mô hình lúa – tôm ở vùng ven biển Đồng bằng sông Cửu Long thể hiện điều gì?", ["Sự thích ứng với xâm nhập mặn và tận dụng điều kiện tự nhiên để tăng hiệu quả kinh tế.", "Sự phụ thuộc hoàn toàn vào thời tiết.", "Việc bỏ hoang đất nhiễm mặn.", "Giảm đa dạng sinh kế."], 0, "Mùa mưa rửa mặn trồng lúa, mùa khô tận dụng nước lợ nuôi tôm giúp thích ứng thông minh với biến đổi khí hậu."),
        M("Phát triển du lịch cộng đồng ở miền núi có ý nghĩa chủ yếu nào sau đây?", ["Hạn chế khách đến thăm.", "Tạo sinh kế cho người dân và góp phần bảo tồn văn hoá, môi trường.", "Giảm thu nhập của người dân.", "Làm mất bản sắc văn hoá địa phương."], 1, "Du lịch cộng đồng giúp người dân bản địa có việc làm tại chỗ và có động lực giữ gìn bản sắc văn hoá truyền thống."),
        // PHẦN II
        T("Cho biểu đồ tổng mức bán lẻ hàng hoá và doanh thu dịch vụ tiêu dùng của nước ta, giai đoạn 2015 – 2024:", [
            ["a) Giai đoạn 2015 – 2024, tổng mức bán lẻ hàng hoá và doanh thu dịch vụ tiêu dùng của nước ta tăng liên tục.", true],
            ["b) Năm 2019, tổng mức bán lẻ hàng hoá và doanh thu dịch vụ tiêu dùng cao hơn năm 2023.", false],
            ["c) Năm 2024, tổng mức bán lẻ hàng hoá và doanh thu dịch vụ tiêu dùng gấp khoảng 2 lần năm 2015.", true],
            ["d) Tổng mức bán lẻ tăng chủ yếu do thu nhập và mức sống dân cư tăng, mạng lưới phân phối hiện đại mở rộng và thương mại điện tử phát triển.", true]
        ], [
            "Đúng: tăng từ 3.224 → 4.942 → 6.231 → 6.391 nghìn tỉ đồng.",
            "Sai: năm 2019 (4.942 nghìn tỉ đồng) thấp hơn năm 2023 (6.231 nghìn tỉ đồng).",
            "Đúng: 6.391 : 3.224 ≈ 1,98 lần (gần 2 lần).",
            "Đúng: kinh tế tăng trưởng, đời sống nâng cao cùng sự bùng nổ của bán lẻ hiện đại và thương mại điện tử thúc đẩy doanh thu."
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
            "Đúng: đồi núi chiếm phần lớn diện tích phía tây và tây bắc.",
            "Sai: khác biệt Đông Bắc – Tây Bắc chủ yếu do dãy Hoàng Liên Sơn kết hợp với gió mùa Đông Bắc.",
            "Sai: đồng bằng ven biển miền Trung hẹp ngang và bị chia cắt bởi các dãy núi đâm sát biển.",
            "Đúng: sự đa dạng vi khí hậu giúp phát triển nông sản đặc sản phù hợp từng tiểu vùng sinh thái."
        ]),
        T("Cho biểu đồ số lượt khách du lịch nội địa của nước ta, giai đoạn 2019 – 2024:", [
            ["a) Năm 2022, số lượt khách du lịch nội địa cao hơn năm 2019.", true],
            ["b) Năm 2020 là năm có số lượt khách du lịch nội địa thấp nhất trong giai đoạn.", false],
            ["c) Năm 2024, số lượt khách du lịch nội địa gấp khoảng 1,3 lần năm 2019.", true],
            ["d) Số lượt khách nội địa tăng nhanh giai đoạn 2021 – 2024 chủ yếu do dịch bệnh làm tăng nhu cầu đi du lịch xa.", false]
        ], [
            "Đúng: năm 2022 (101,3 triệu lượt) > năm 2019 (85,0 triệu lượt).",
            "Sai: năm 2021 (40,0 triệu lượt) mới là năm thấp nhất.",
            "Đúng: 110,6 : 85,0 ≈ 1,30 lần.",
            "Sai: giai đoạn 2021 – 2024 tăng nhanh nhờ kiểm soát được dịch bệnh, mở cửa lại nền kinh tế và kích cầu du lịch."
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
            "Sai: kĩ thuật canh tác hiện đại hướng trực tiếp vào nâng cao năng suất, chất lượng nông sản và thích ứng hạn mặn.",
            "Đúng: vùng có nhiều loại cây ăn quả nhiệt đới đặc sản như xoài, sầu riêng, bưởi, nhãn, thanh long, chôm chôm...",
            "Đúng: vùng đẩy mạnh sản xuất theo chuẩn VietGAP, GlobalGAP và hữu cơ.",
            "Sai: diện tích cây ăn quả tăng nhanh chủ yếu do chuyển đổi từ diện tích trồng lúa kém hiệu quả và mở rộng thị trường xuất khẩu."
        ]),
        // PHẦN III
        S("Năm 2024, Ba Lan có 36,6 triệu dân, tỉ lệ dân nông thôn là 39,9%. Hãy tính số dân nông thôn của Ba Lan (đơn vị: triệu người, làm tròn kết quả đến một chữ số thập phân).", 14.6, "Dân nông thôn = 36,6 × 39,9% ≈ 14,6 triệu người.", "triệu người"),
        S("Năm 2024, tỉ lệ dân nông thôn của I-ta-li-a là 30,3%, của Pháp là 21,2%. Hãy tính tỉ lệ dân nông thôn của I-ta-li-a cao hơn Pháp bao nhiêu điểm phần trăm (lấy kết quả đến một chữ số thập phân).", 9.1, "30,3 – 21,2 = 9,1 điểm phần trăm.", "điểm %"),
        S("Năm 2023, I-rắc có GDP là 267 tỉ USD, dân số là 45,5 triệu người. Hãy tính GDP bình quân đầu người của I-rắc (đơn vị: USD/người, làm tròn kết quả đến hàng đơn vị).", 5868, "GDP/người = 267 tỉ USD : 45,5 triệu người ≈ 5 868 USD/người.", "USD/người"),
        S("Số lượt khách du lịch nội địa của nước ta năm 2019 là 85,0 triệu lượt, năm 2024 là 110,6 triệu lượt. Hãy tính tốc độ tăng của năm 2024 so với năm 2019 (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 30.1, "Tốc độ tăng = (110,6 – 85,0) : 85,0 × 100 ≈ 30,1%.", "%"),
        S("Diện tích cây ăn quả của Đồng bằng sông Cửu Long năm 2015 là 290 nghìn ha, năm 2024 là 410 nghìn ha. Hãy tính tốc độ tăng diện tích của năm 2024 so với năm 2015 (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 41.4, "Tốc độ tăng = (410 – 290) : 290 × 100 ≈ 41,4%.", "%"),
        S("Nhiệt độ trung bình năm ở chân núi là 24,0 °C. Biết cứ lên cao 100 m nhiệt độ giảm 0,6 °C, hãy tính nhiệt độ trung bình năm ở độ cao 1 800 m (đơn vị: °C, lấy kết quả đến một chữ số thập phân).", 13.2, "Nhiệt độ giảm 0,6 × 18 = 10,8 °C nên ở 1 800 m còn 24,0 – 10,8 = 13,2 °C.", "°C")
    ];

    /* ============================ ĐỀ SỐ 3 ============================ */
    const de3 = [
        // PHẦN I
        M("Cho biểu đồ sau:\nNhận xét nào sau đây đúng về mật độ dân số của một số vùng nước ta năm 2024?", [
            "Đông Nam Bộ có mật độ dân số thấp hơn Đồng bằng sông Cửu Long.",
            "Tây Nguyên có mật độ dân số cao hơn Trung du và miền núi phía Bắc.",
            "Mật độ dân số của Đồng bằng sông Hồng gấp trên 2 lần Đồng bằng sông Cửu Long.",
            "Đồng bằng sông Cửu Long có mật độ dân số cao nhất."
        ], 2, "1 100 : 425 ≈ 2,59 lần (trên 2 lần). Đồng bằng sông Hồng cao nhất (1 100 người/km²); Tây Nguyên thấp nhất (112 người/km²).", {
            charts: [{
                kind: "bar", title: "Mật độ dân số của một số vùng ở nước ta năm 2024", unit: "người/km²",
                categories: ["Đồng bằng sông Hồng", "Đông Nam Bộ", "Đồng bằng sông Cửu Long", "Trung du và miền núi phía Bắc", "Tây Nguyên"],
                series: [{ name: "Mật độ dân số", values: [1100, 780, 425, 140, 112] }], note: NOTE
            }]
        }),
        M("Hệ toạ độ địa lí trên đất liền của nước ta có điểm cực Bắc nằm ở vĩ độ nào?", ["8°34'B", "23°23'B", "102°09'Đ", "109°28'Đ"], 1, "Điểm cực Bắc trên đất liền nước ta nằm ở vĩ độ 23°23'B tại xã Lũng Cú, huyện Đồng Văn, tỉnh Hà Giang."),
        M("Theo cấu tạo vỏ Trái Đất, ranh giới giữa vỏ Trái Đất và manti được gọi là gì?", ["Mặt Mô-hô.", "Tầng trầm tích.", "Mặt đứt gãy.", "Mặt phân cách lục địa."], 0, "Mặt Mô-hô (Mohorovicic) là bề mặt ranh giới ngăn cách giữa lớp vỏ Trái Đất và lớp manti ở bên dưới."),
        M("Tổ chức Thương mại Thế giới được viết tắt bằng tiếng Anh là gì?", ["APEC", "IMF", "WTO", "ASEAN"], 2, "WTO (World Trade Organization) là tên viết tắt tiếng Anh của Tổ chức Thương mại Thế giới."),
        M("Năm 2024, tổng dân số nước ta đạt khoảng bao nhiêu triệu người?", ["96,5", "101,3", "86,0", "115,2"], 1, "Năm 2024, quy mô dân số Việt Nam đạt khoảng 101,3 triệu người, đứng thứ 3 ở Đông Nam Á."),
        M("Gió Tây ôn đới có đặc điểm nào sau đây?", [
            "Thổi từ áp cao cực về áp thấp ôn đới, rất lạnh và khô.",
            "Thổi thay đổi hướng theo chu kì ngày đêm ở vùng ven biển.",
            "Thổi từ áp cao chí tuyến về áp thấp xích đạo, khô hạn quanh năm.",
            "Thổi từ áp cao cận chí tuyến về áp thấp ôn đới, thường có độ ẩm cao, gây mưa."
        ], 3, "Gió Tây ôn đới thổi quanh năm từ khu áp cao cận chí tuyến về khu áp thấp ôn đới, mang theo nhiều hơi ẩm và gây mưa."),
        M("Cho bảng số liệu sau:\nNhận xét nào sau đây đúng về gia tăng dân số tự nhiên của các vùng năm 2024?", [
            "Tây Nguyên có gia tăng dân số tự nhiên cao nhất.",
            "Đồng bằng sông Cửu Long có gia tăng dân số tự nhiên cao hơn Đồng bằng sông Hồng.",
            "Đồng bằng sông Hồng có gia tăng dân số tự nhiên thấp nhất.",
            "Gia tăng dân số tự nhiên của Đồng bằng sông Hồng gấp 2 lần Tây Nguyên."
        ], 0, "Gia tăng tự nhiên = sinh thô – chết thô: Tây Nguyên = 18,5 – 6,1 = 12,4‰ (cao nhất); ĐB sông Hồng = 8,2‰; ĐB sông Cửu Long = 6,9‰ (thấp nhất).", {
            tables: [{
                title: "Tỉ suất sinh thô và tỉ suất chết thô của một số vùng năm 2024", unit: "‰",
                headers: ["Vùng", "Tỉ suất sinh thô", "Tỉ suất chết thô"],
                rows: [["Đồng bằng sông Hồng", "14,9", "6,7"], ["Tây Nguyên", "18,5", "6,1"], ["Đồng bằng sông Cửu Long", "13,8", "6,9"]], note: NOTE
            }]
        }),
        M("Nguyên nhân chính hình thành nên đai áp thấp xích đạo trên Trái Đất là gì?", ["Do nhiệt độ cao quanh năm, hơi nước bốc lên mạnh.", "Do lực li tâm của Trái Đất lớn nhất ở Xích đạo.", "Do sự hạ lún của các mảng kiến tạo.", "Do các dòng biển lạnh chảy ngang qua."], 0, "Ở Xích đạo nhiệt độ cao quanh năm làm không khí nở ra, bốc lên cao mạnh mẽ nên sức nén xuống bề mặt giảm, tạo đai áp thấp xích đạo."),
        M("Đặc điểm nào chứng tỏ đô thị hoá ở nước ta đang diễn ra nhanh nhưng trình độ chưa cao?", ["Tỉ lệ dân thành thị rất cao, trên 80%.", "Không gian đô thị thu hẹp, chỉ tập trung ở vùng núi.", "Tỉ lệ dân thành thị tăng nhưng cơ sở hạ tầng đô thị nhiều nơi còn quá tải.", "Toàn bộ dân đô thị đều làm việc trong ngành nông nghiệp."], 2, "Tỉ lệ dân thành thị tăng nhưng còn thấp so với thế giới (khoảng 38,4%) và hạ tầng giao thông, cấp thoát nước ở nhiều đô thị còn quá tải."),
        M("Nguyên nhân chủ yếu làm cho khí hậu khu vực Tây Nam Á rất khô hạn là do đâu?", ["Nằm trong đới khí hậu cận nhiệt và nhiệt đới, chịu ảnh hưởng của các khối khí lục địa.", "Nằm hoàn toàn ở vùng cực có nhiệt độ thấp.", "Có lượng mưa trung bình năm trên 2000mm.", "Chịu ảnh hưởng của gió Tây ôn đới quanh năm."], 0, "Tây Nam Á nằm quanh chí tuyến Bắc, chịu sự thống trị của áp cao cận chí tuyến và khối khí lục địa khô nóng nên rất ít mưa."),
        M("Để giải quyết vấn đề thiếu hụt lao động chuyên môn kĩ thuật cao trong bối cảnh công nghiệp 4.0, giải pháp thiết thực nhất của nước ta là gì?", ["Hạn chế sự phát triển của khu vực dịch vụ.", "Đẩy mạnh xuất khẩu lao động phổ thông.", "Tăng tỉ suất sinh thô ở nông thôn.", "Đổi mới và nâng cao chất lượng giáo dục, đào tạo nghề gắn với nhu cầu thị trường."], 3, "Đào tạo nghề và giáo dục đại học gắn kết chặt với doanh nghiệp, công nghệ mới là chìa khoá nâng cao trình độ lao động."),
        M("Việc chuyển đổi cơ cấu cây trồng từ lúa nước sang các loại cây ăn quả đặc sản ở Đồng bằng sông Cửu Long hiện nay nhằm mục đích chính là gì?", ["Phục hồi diện tích rừng nguyên sinh.", "Giảm hoàn toàn sản lượng gạo xuất khẩu.", "Thích ứng với biến đổi khí hậu (hạn mặn) và nâng cao hiệu quả kinh tế.", "Hạn chế sự phát triển của công nghiệp chế biến."], 2, "Cây ăn quả mang lại giá trị kinh tế trên một đơn vị diện tích cao hơn và thích ứng tốt hơn ở những chân đất trồng lúa thiếu nước ngọt."),
        M("Tác động tiêu cực của toàn cầu hoá kinh tế đối với các nước đang phát triển như Việt Nam là gì?", ["Không thể thu hút được vốn đầu tư nước ngoài.", "Gia tăng khoảng cách giàu nghèo và đối mặt với sự cạnh tranh gay gắt từ các tập đoàn đa quốc gia.", "Đóng cửa hoàn toàn với thị trường thế giới.", "Lực lượng sản xuất bị đình trệ hoàn toàn."], 1, "Toàn cầu hoá tạo áp lực cạnh tranh lớn cho doanh nghiệp nội địa và dễ làm gia tăng phân hoá giàu nghèo."),
        M("Khí hậu nhiệt đới ẩm gió mùa đem lại khó khăn lớn nhất nào cho ngành giao thông vận tải nước ta?", ["Cản trở việc xây dựng đường hầm xuyên núi.", "Thường xuyên xảy ra thiên tai (bão, lũ lụt, sạt lở đất) phá huỷ hạ tầng giao thông.", "Gây ra hiện tượng sa mạc hoá lấp kín đường sá.", "Làm đóng băng các hải cảng vào mùa đông."], 1, "Mưa bão, lũ quét và sạt lở đất theo mùa thường xuyên làm hư hỏng cầu cống, đường giao thông và gián đoạn vận tải."),
        M("Sự khác biệt cơ bản về nguyên nhân tạo mùa khô ở Nam Bộ và mùa đông lạnh ở miền Bắc nước ta là gì?", ["Cả hai đều do bão nhiệt đới gây ra.", "Mùa khô Nam Bộ do Tín phong bán cầu Bắc chi phối, mùa đông miền Bắc do gió mùa Đông Bắc mang khối khí lạnh tràn về.", "Mùa khô Nam Bộ do gió Tây Nam, mùa đông miền Bắc do gió Đông Nam.", "Mùa khô Nam Bộ do dòng biển lạnh, mùa đông miền Bắc do độ cao địa hình."], 1, "Từ tháng 11 đến tháng 4, miền Bắc chịu tác động trực tiếp của gió mùa Đông Bắc lạnh, còn Nam Bộ chịu sự thống trị của Tín phong bán cầu Bắc khô nóng."),
        M("Trong bối cảnh biến đổi khí hậu, nước biển dâng, giải pháp mang tính chiến lược lâu dài đối với nền kinh tế vùng Đồng bằng sông Cửu Long là gì?", ["Di dời toàn bộ dân cư lên vùng Tây Nguyên.", "Xây dựng đê bao khép kín toàn bộ đồng bằng để ngăn mặn tuyệt đối.", "Phá bỏ toàn bộ diện tích rừng ngập mặn để nuôi tôm.", "Chuyển tư duy từ sản xuất nông nghiệp thuần tuý sang kinh tế nông nghiệp thích ứng với tự nhiên (sống chung với lũ/mặn)."], 3, "Phát triển kinh tế nông nghiệp thuận thiên (sống chung với lũ, mặn), kết hợp giống chịu mặn, luân canh lúa – thuỷ sản và chế biến sâu là hướng đi chiến lược."),
        M("Tại sao nói thể chế của Liên minh châu Âu (EU) có mức độ liên kết chặt chẽ nhất thế giới hiện nay?", ["Vì EU sử dụng chung một loại ngôn ngữ duy nhất.", "Vì EU chỉ hợp tác duy nhất trên lĩnh vực quân sự.", "Vì EU đã xoá bỏ hoàn toàn đường biên giới quốc gia, sáp nhập thành một nước duy nhất.", "Vì EU có thị trường chung, sử dụng đồng tiền chung và có các cơ quan siêu quốc gia (Nghị viện, Ngân hàng Trung ương) can thiệp sâu vào chính sách của các nước thành viên."], 3, "EU có các định chế siêu quốc gia, đồng tiền chung Euro, tự do lưu thông 4 yếu tố và nhiều chính sách chung sâu rộng."),
        M("Để giải quyết triệt để tình trạng mất cân bằng giới tính khi sinh (111,4 bé trai/100 bé gái năm 2024), giải pháp căn cơ nhất đối với nước ta là gì?", ["Nghiêm cấm hoàn toàn việc sinh con thứ hai.", "Thay đổi quan niệm, tâm lí xã hội trọng nam khinh nữ và thực hiện nghiêm pháp luật về bình đẳng giới.", "Phạt tiền nặng đối với gia đình sinh con trai.", "Khuyến khích di cư sang các quốc gia khác."], 1, "Nâng cao nhận thức xã hội về bình đẳng giới, xoá bỏ định kiến trọng nam khinh nữ kết hợp cấm lựa chọn giới tính thai nhi là giải pháp gốc rễ."),
        // PHẦN II
        T("Về đặc điểm thiên nhiên nhiệt đới ẩm gió mùa ở Việt Nam:", [
            ["a) Nhiệt độ trung bình năm trên cả nước đều trên 20°C (trừ các vùng núi cao).", true],
            ["b) Chế độ mưa theo mùa làm cho lưu lượng nước các con sông ở nước ta có sự phân chia thành mùa lũ và mùa cạn rõ rệt.", true],
            ["c) Thiên nhiên nước ta không có sự khác biệt giữa khu vực đồi núi và đồng bằng vì cùng nằm trong đới nóng.", false],
            ["d) Sự luân phiên hoạt động của gió mùa Đông Bắc và Tín phong bán cầu Bắc là nguyên nhân trực tiếp tạo ra sự đối lập về mùa mưa - khô giữa sườn Đông và Tây dãy Trường Sơn.", true]
        ], [
            "Đúng: do nằm hoàn toàn trong vùng nội chí tuyến nên nền nhiệt trung bình năm đều trên 20°C (trừ vùng núi cao).",
            "Đúng: nước sông nước ta chủ yếu do mưa cung cấp nên chế độ nước sông sát với chế độ mưa theo mùa.",
            "Sai: thiên nhiên nước ta phân hoá sâu sắc theo độ cao và hướng sườn giữa vùng đồi núi với đồng bằng.",
            "Đúng: gió mùa Đông Bắc, Tín phong Đông Bắc kết hợp gió mùa Tây Nam và bức chắn địa hình Trường Sơn tạo nên sự đối lập mùa mưa – khô Đông và Tây Trường Sơn."
        ]),
        T("Về tình hình phát triển kinh tế - xã hội khu vực Đông Nam Á:", [
            ["a) Khu vực Đông Nam Á hiện nay bao gồm 11 quốc gia thành viên.", true],
            ["b) Do diện tích đất đồng bằng châu thổ rộng lớn nên tất cả các nước Đông Nam Á đều xuất khẩu lúa gạo đứng đầu thế giới.", false],
            ["c) Việc hội nhập sâu rộng vào các chuỗi cung ứng toàn cầu giúp các nước Đông Nam Á phát triển mạnh ngành công nghiệp điện tử - tin học.", true],
            ["d) Sức ép từ quy mô dân số lớn và đô thị hoá tự phát đang là lực cản lớn đối với việc giải quyết các vấn đề môi trường, giao thông đô thị ở nhiều quốc gia trong khu vực.", true]
        ], [
            "Đúng: khu vực Đông Nam Á gồm 11 quốc gia (lục địa và hải đảo).",
            "Sai: chỉ một số nước như Thái Lan, Việt Nam xuất khẩu gạo hàng đầu; các nước như Xin-ga-po, Bru-nây, Đông Ti-mo phải nhập khẩu gạo.",
            "Đúng: thu hút FDI từ các tập đoàn công nghệ lớn giúp công nghiệp điện tử – tin học phát triển nhanh.",
            "Đúng: đô thị hoá nhanh chưa đồng bộ với hạ tầng gây ùn tắc giao thông, ô nhiễm môi trường tại các siêu đô thị."
        ]),
        T("Cho biểu đồ sau về cơ cấu giá trị sản xuất công nghiệp của nước ta, giai đoạn 2015 – 2024:", [
            ["a) Tỉ trọng nhóm ngành công nghiệp chế biến, chế tạo tăng liên tục trong giai đoạn 2015 – 2024.", true],
            ["b) Tỉ trọng nhóm ngành công nghiệp khai khoáng năm 2024 cao hơn năm 2015.", false],
            ["c) Giai đoạn 2015 – 2024, tỉ trọng nhóm ngành công nghiệp chế biến, chế tạo tăng 5,0 điểm phần trăm.", true],
            ["d) Nước ta đang chuyển dịch cơ cấu công nghiệp theo hướng tăng mạnh tỉ trọng khai khoáng để xuất khẩu thô lấy ngoại tệ.", false]
        ], [
            "Đúng: tăng từ 77,0% (2015) → 80,0% (2020) → 82,0% (2024).",
            "Sai: khai khoáng giảm từ 12,0% (2015) xuống còn 6,5% (2024).",
            "Đúng: 82,0% – 77,0% = 5,0 điểm phần trăm.",
            "Sai: cơ cấu công nghiệp chuyển dịch theo hướng giảm tỉ trọng khai khoáng, tăng tỉ trọng công nghiệp chế biến, chế tạo có giá trị gia tăng cao."
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
            "Đúng: Đồng bằng sông Hồng đạt 24,9 triệu người, cao nhất cả nước.",
            "Sai: Tây Nguyên (6,2 triệu người) thấp hơn Trung du và miền núi phía Bắc (12,9 triệu người).",
            "Đúng: 24,9 : 6,2 ≈ 4,02 lần.",
            "Đúng: đầu tư hạ tầng, tạo việc làm ở vùng khó khăn và phát triển đô thị vệ tinh giúp giảm áp lực dân số lên các đô thị trung tâm."
        ], {
            charts: [{
                kind: "bar", title: "Dân số của các vùng ở nước ta năm 2024", unit: "triệu người",
                categories: ["ĐB sông Hồng", "TD và MN phía Bắc", "BTB và DH miền Trung", "Tây Nguyên", "Đông Nam Bộ", "ĐB sông Cửu Long"],
                series: [{ name: "Dân số", values: [24.9, 12.9, 20.7, 6.2, 18.8, 17.4] }], note: NOTE
            }]
        }),
        // PHẦN III
        S("Năm 2024, một vùng có tỉ suất sinh thô là 16,2‰ và tỉ suất chết thô là 6,8‰. Hãy tính tỉ lệ gia tăng dân số tự nhiên của vùng đó (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 0.9, "Gia tăng tự nhiên = (16,2 – 6,8) : 10 = 0,94% → làm tròn 0,9%.", "%"),
        S("Năm 2024, Đồng bằng sông Hồng có số dân là 24,9 triệu người, diện tích là 21,3 nghìn km². Hãy tính mật độ dân số của vùng (đơn vị: người/km², làm tròn kết quả đến hàng đơn vị).", 1169, "Mật độ = 24 900 nghìn người : 21,3 nghìn km² ≈ 1 169 người/km².", "người/km²"),
        S("Giá trị xuất khẩu hàng hóa của nước ta năm 2015 là 162,4 tỉ USD, năm 2024 là 405,5 tỉ USD. Hãy cho biết năm 2024 so với năm 2015 tăng bao nhiêu lần (làm tròn kết quả đến hai chữ số thập phân).", 2.5, "405,5 : 162,4 ≈ 2,50 lần.", "lần"),
        S("Năm 2024, lực lượng lao động nước ta là 53,0 triệu người, trong đó có 15,0 triệu người đã qua đào tạo. Hãy tính tỉ lệ lao động đã qua đào tạo (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 28.3, "Tỉ lệ = 15,0 : 53,0 × 100 ≈ 28,3%.", "%"),
        S("Năm 2024, GDP của nước ta là 476,3 tỉ USD, dân số là 101,3 triệu người. Hãy tính GDP bình quân đầu người của nước ta (đơn vị: USD/người, làm tròn kết quả đến hàng đơn vị).", 4702, "GDP/người = 476,3 tỉ USD : 101,3 triệu người ≈ 4 702 USD/người.", "USD/người"),
        S("Năm 2024, nước ta có 101,3 triệu dân, trong đó dân thành thị là 38,9 triệu người. Hãy tính tỉ lệ dân thành thị của nước ta (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 38.4, "Tỉ lệ dân thành thị = 38,9 : 101,3 × 100 ≈ 38,4%.", "%")
    ];

    /* ============================ ĐỀ SỐ 4 ============================ */
    const de4 = [
        // PHẦN I
        M("Cho biểu đồ sau:\nNhận xét nào sau đây đúng về sản lượng cà phê nhân của nước ta?", [
            "Năm 2022 sản lượng tăng 400 nghìn tấn so với năm 2019.",
            "Năm 2019 sản lượng cao hơn năm 2022.",
            "Sản lượng cà phê nhân tăng liên tục.",
            "Năm 2024 sản lượng gấp 2 lần năm 2015."
        ], 2, "Sản lượng cà phê nhân tăng liên tục: 1 450 → 1 680 → 1 780 → 1 800 nghìn tấn. Năm 2024 gấp 1,24 lần năm 2015.", {
            charts: [{
                kind: "bar", title: "Sản lượng cà phê nhân của Việt Nam", unit: "nghìn tấn",
                categories: ["2015", "2019", "2022", "2024"],
                series: [{ name: "Cà phê nhân", values: [1450, 1680, 1780, 1800] }], note: NOTE
            }]
        }),
        M("Phần đất liền của nước ta nằm trong múi giờ số mấy?", ["Múi giờ số 5.", "Múi giờ số 6.", "Múi giờ số 7.", "Múi giờ số 8."], 2, "Toàn bộ lãnh thổ đất liền Việt Nam nằm trong múi giờ thứ 7 (GMT+7) theo hệ thống giờ quốc tế."),
        M("Dãy núi nào sau đây có đỉnh núi cao nhất nước ta?", ["Trường Sơn Bắc.", "Bạch Mã.", "Hoàng Liên Sơn.", "Trường Sơn Nam."], 2, "Dãy Hoàng Liên Sơn có đỉnh Phan-xi-păng cao 3.147,3 m – là đỉnh núi cao nhất Việt Nam và bán đảo Đông Dương."),
        M("Đồng bằng nào sau đây có diện tích lớn nhất nước ta?", ["Đồng bằng sông Cửu Long.", "Đồng bằng Thanh – Nghệ – Tĩnh.", "Đồng bằng sông Hồng.", "Đồng bằng ven biển Nam Trung Bộ."], 0, "Đồng bằng sông Cửu Long có diện tích khoảng 40 nghìn km², là đồng bằng châu thổ lớn nhất nước ta."),
        M("Việt Nam là quốc gia có bao nhiêu dân tộc cùng sinh sống?", ["52 dân tộc.", "53 dân tộc.", "54 dân tộc.", "55 dân tộc."], 2, "Việt Nam có 54 dân tộc anh em cùng sinh sống, trong đó dân tộc Kinh chiếm khoảng 85,3% dân số."),
        M("Thời tiết lạnh ẩm, có mưa phùn ở Bắc Bộ vào nửa sau mùa đông chủ yếu do nguyên nhân nào sau đây?", ["Gió mùa Đông Bắc đi qua vùng biển làm tăng độ ẩm.", "Gió Tây khô nóng hoạt động mạnh.", "Hoạt động mạnh của dải hội tụ nhiệt đới.", "Tín phong bán cầu Bắc thổi quanh năm."], 0, "Vào nửa sau mùa đông, khối khí lạnh phương Bắc di chuyển lệch đông qua biển vào nước ta nên mang theo nhiều hơi ẩm, gây mưa phùn ở ven biển và đồng bằng Bắc Bộ."),
        M("Cho bảng số liệu sau:\nNhận xét nào sau đây đúng về các quốc gia năm 2023?", [
            "Xin-ga-po có dân số đông nhất.",
            "GDP bình quân đầu người của Thái Lan cao hơn Việt Nam.",
            "Việt Nam có GDP lớn nhất.",
            "GDP bình quân đầu người của Xin-ga-po thấp hơn Thái Lan."
        ], 1, "GDP/người của Thái Lan (515 : 71,8 ≈ 7.173 USD) cao hơn Việt Nam (430 : 100,3 ≈ 4.287 USD). Xin-ga-po có GDP/người cao nhất.", {
            tables: [{
                title: "GDP và dân số của một số quốc gia Đông Nam Á năm 2023",
                headers: ["Quốc gia", "GDP (tỉ USD)", "Dân số (triệu người)"],
                rows: [["Xin-ga-po", "501", "5,9"], ["Thái Lan", "515", "71,8"], ["Việt Nam", "430", "100,3"]], note: NOTE
            }]
        }),
        M("Đặc điểm chung nổi bật của địa hình nước ta là gì?", ["Đồng bằng chiếm phần lớn diện tích.", "Đồi núi thấp chiếm ưu thế.", "Núi cao trên 2000 m chiếm phần lớn diện tích.", "Cao nguyên chiếm diện tích lớn nhất."], 1, "Đồi núi chiếm 3/4 diện tích nhưng chủ yếu là đồi núi thấp dưới 1000 m (chiếm khoảng 85% diện tích lãnh thổ), núi cao trên 2000 m chỉ chiếm 1%."),
        M("Đô thị hoá ở nước ta những năm gần đây diễn ra nhanh chủ yếu do nguyên nhân nào sau đây?", ["Các đô thị cổ được bảo tồn nguyên trạng.", "Tác động của công nghiệp hoá, hiện đại hoá và chuyển dịch cơ cấu kinh tế.", "Chiến tranh làm di dân ồ ạt vào thành phố.", "Dân cư nông thôn giảm mạnh do mức sinh thấp."], 1, "Quá trình công nghiệp hoá, hiện đại hoá gắn với phát triển các khu công nghiệp, dịch vụ là động lực chính thúc đẩy đô thị hoá."),
        M("Nguồn lao động nước ta dồi dào nhưng năng suất lao động còn thấp chủ yếu do nguyên nhân nào sau đây?", ["Trình độ chuyên môn kĩ thuật và tác phong công nghiệp còn hạn chế.", "Lao động chỉ tập trung trong ngành dịch vụ.", "Số người trong độ tuổi lao động quá ít.", "Thiếu hoàn toàn nguồn lao động nông thôn."], 0, "Tỉ lệ lao động đã qua đào tạo có bằng cấp, chứng chỉ còn thấp và phân bố chưa hợp lí khiến năng suất lao động chưa cao."),
        M("Giải pháp nào sau đây phù hợp nhất để thích ứng với xâm nhập mặn ở Đồng bằng sông Cửu Long?", ["Khai thác tối đa nước ngầm để tưới tiêu.", "Chuyển đổi cơ cấu cây trồng, vật nuôi và xây dựng hệ thống thuỷ lợi thích ứng.", "Xây dựng nhiều khu công nghiệp ở vùng cửa sông.", "Mở rộng diện tích trồng lúa ba vụ ở vùng ven biển."], 1, "Chuyển đổi cơ cấu mùa vụ, cây trồng chịu mặn, mô hình tôm – lúa kết hợp công trình thuỷ lợi giữ ngọt – ngăn mặn giúp phát triển bền vững."),
        M("Để phát triển kinh tế biển bền vững, nước ta cần chú trọng giải pháp nào sau đây?", ["Chỉ xuất khẩu hải sản thô.", "Khai thác hợp lí tài nguyên gắn với bảo vệ môi trường và chủ quyền biển đảo.", "Hạn chế đầu tư vào các ngành dịch vụ biển.", "Tăng cường khai thác thuỷ sản gần bờ."], 1, "Phát triển tổng hợp kinh tế biển phải đi đôi với bảo vệ môi trường sinh thái biển và giữ vững quốc phòng, chủ quyền biển đảo."),
        M("Việc gắn vùng chuyên canh cây công nghiệp ở Tây Nguyên với công nghiệp chế biến chủ yếu nhằm mục đích nào sau đây?", ["Giảm số lượng lao động trong nông nghiệp.", "Hạn chế xuất khẩu nông sản.", "Nâng cao giá trị sản phẩm và ổn định đầu ra cho nông sản.", "Giảm diện tích rừng tự nhiên."], 2, "Chế biến sâu giúp khắc phục tình trạng xuất khẩu nông sản thô giá thấp, nâng cao giá trị gia tăng và khả năng bảo quản."),
        M("Yếu tố nào sau đây quyết định hàng đầu đến sự phát triển các ngành công nghiệp công nghệ cao ở nước ta?", ["Số lượng dân cư đông.", "Lực lượng lao động trình độ cao và năng lực khoa học – công nghệ.", "Diện tích đất đai rộng lớn.", "Nguồn tài nguyên khoáng sản phong phú."], 1, "Công nghiệp công nghệ cao đòi hỏi hàm lượng chất xám lớn, phụ thuộc trực tiếp vào nhân lực trình độ cao và hạ tầng nghiên cứu – công nghệ."),
        M("Biến động chính trị ở Tây Nam Á ảnh hưởng mạnh đến kinh tế thế giới chủ yếu vì lí do nào sau đây?", ["Khu vực có dân số đông nhất thế giới.", "Khu vực có trữ lượng và sản lượng dầu mỏ lớn, tác động đến giá năng lượng toàn cầu.", "Khu vực có nhiều nước công nghiệp hoá hàng đầu.", "Khu vực dẫn đầu thế giới về sản xuất lương thực."], 1, "Tây Nam Á nắm giữ hơn một nửa trữ lượng dầu mỏ thế giới và nằm trên các tuyến vận chuyển dầu huyết mạch nên xung đột tại đây làm biến động giá năng lượng toàn cầu."),
        M("Liên minh châu Âu (EU) có sức mạnh kinh tế lớn chủ yếu nhờ yếu tố nào sau đây?", ["Các nước hoàn toàn đóng cửa với bên ngoài.", "Chỉ dựa vào nguồn tài nguyên thiên nhiên.", "Có diện tích lãnh thổ lớn nhất thế giới.", "Thị trường chung, đồng tiền chung và mức độ liên kết sâu rộng giữa các nước thành viên."], 3, "Thị trường chung thống nhất và liên kết kinh tế – khoa học sâu rộng giúp EU tối ưu nguồn lực và nâng cao năng lực cạnh tranh."),
        M("Đồng bằng sông Hồng có mật độ dân số cao nhất cả nước, vấn đề cấp bách cần giải quyết hiện nay là gì?", ["Thiếu hoàn toàn nguồn lao động.", "Thiếu đất để mở rộng đô thị, thiếu việc làm và áp lực lên môi trường, hạ tầng.", "Thiếu thị trường tiêu thụ.", "Không có khả năng phát triển công nghiệp."], 1, "Mật độ dân số quá cao (trên 1.100 người/km²) gây sức ép lớn lên vấn đề giải quyết việc làm, nhà ở, hạ tầng giao thông và môi trường."),
        M("Chủ trương chuyển từ khai thác thuỷ sản ven bờ sang xa bờ chủ yếu nhằm mục đích nào sau đây?", ["Giảm tổng sản lượng thuỷ sản của cả nước.", "Hạn chế phát triển nuôi trồng thuỷ sản.", "Tăng số lượng tàu thuyền nhỏ.", "Giảm áp lực lên nguồn lợi ven bờ và góp phần bảo vệ chủ quyền biển đảo."], 3, "Đánh bắt xa bờ vừa bảo vệ và phục hồi nguồn lợi thuỷ sản ven bờ, vừa mang lại sản lượng kinh tế cao và khẳng định chủ quyền trên biển."),
        // PHẦN II
        T("Cho biểu đồ cơ cấu GDP của nước ta theo nhóm ngành, giai đoạn 2010 – 2024:", [
            ["a) Giai đoạn 2010 – 2024, tỉ trọng nhóm ngành nông, lâm, thuỷ sản trong cơ cấu GDP giảm liên tục.", true],
            ["b) Năm 2020, tỉ trọng nhóm ngành công nghiệp và xây dựng cao hơn nhóm ngành dịch vụ.", false],
            ["c) Giai đoạn 2010 – 2024, tỉ trọng nhóm ngành dịch vụ tăng 7,2 điểm phần trăm.", true],
            ["d) Cơ cấu GDP chuyển dịch chủ yếu do khai thác thêm tài nguyên thiên nhiên và mở rộng diện tích đất nông nghiệp.", false]
        ], [
            "Đúng: tỉ trọng nông, lâm, thuỷ sản giảm liên tục từ 18,9% (2010) xuống 11,9% (2024).",
            "Sai: năm 2020 công nghiệp và xây dựng (37,4%) thấp hơn dịch vụ (47,8%).",
            "Đúng: 50,1% – 42,9% = 7,2 điểm phần trăm.",
            "Sai: cơ cấu GDP chuyển dịch theo hướng tích cực chủ yếu do đẩy mạnh công nghiệp hoá, hiện đại hoá và hội nhập kinh tế quốc tế."
        ], {
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
        ], [
            "Đúng: Xin-ga-po đạt 84.700 USD/người, cao nhất trên biểu đồ.",
            "Sai: Việt Nam (4.350 USD) thấp hơn Thái Lan (7.170 USD).",
            "Đúng: 84.700 : 4.350 ≈ 19,5 lần (trên 15 lần).",
            "Đúng: trình độ phát triển kinh tế, năng suất lao động và hàm lượng khoa học – công nghệ quyết định mức thu nhập bình quân đầu người."
        ], {
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
        ], [
            "Đúng: Việt Nam nằm ở rìa đông bán đảo Đông Dương, gần trung tâm Đông Nam Á.",
            "Sai: vùng biển Việt Nam có diện tích khoảng 1 triệu km², còn 3,447 triệu km² là diện tích toàn bộ Biển Đông.",
            "Đúng: vị trí nội chí tuyến có góc nhập xạ lớn và hai lần Mặt Trời lên thiên đỉnh trong năm nên tổng bức xạ lớn, nhiệt độ cao.",
            "Sai: bờ biển dài, nhiều vịnh nước sâu thuận lợi cho giao thông vận tải biển (xây dựng cảng nước sâu) và du lịch biển."
        ]),
        T("Về ngành trồng trọt ở nước ta hiện nay:", [
            ["a) Lúa là cây lương thực chính, Đồng bằng sông Cửu Long là vùng sản xuất lúa trọng điểm của cả nước.", true],
            ["b) Cây công nghiệp lâu năm chủ yếu phân bố ở các đồng bằng ven biển miền Trung.", false],
            ["c) Việc hình thành các vùng chuyên canh cây công nghiệp chủ yếu nhằm giảm tỉ trọng của ngành chăn nuôi.", false],
            ["d) Ứng dụng công nghệ cao trong trồng trọt góp phần nâng cao giá trị nông sản và thích ứng với biến đổi khí hậu.", true]
        ], [
            "Đúng: lúa gạo giữ vai trò chủ đạo trong đảm bảo an ninh lương thực và xuất khẩu.",
            "Sai: cây công nghiệp lâu năm phân bố chủ yếu ở vùng đồi núi và cao nguyên (Tây Nguyên, Đông Nam Bộ, Trung du và miền núi phía Bắc).",
            "Sai: hình thành vùng chuyên canh cây công nghiệp nhằm khai thác thế mạnh tự nhiên, tạo khối lượng nông sản hàng hoá lớn gắn với chế biến và xuất khẩu.",
            "Đúng: công nghệ sinh học, tưới tiết kiệm, nhà màng giúp tăng năng suất, chất lượng và giảm phụ thuộc thời tiết."
        ]),
        // PHẦN III
        S("Năm 2023, GDP của Xin-ga-po là 501,4 tỉ USD, dân số là 5,9 triệu người. Hãy tính GDP bình quân đầu người của Xin-ga-po (đơn vị: USD/người, làm tròn kết quả đến hàng đơn vị).", 84983, "GDP/người = 501,4 tỉ USD : 5,9 triệu người ≈ 84 983 USD/người.", "USD/người"),
        S("Năm 2023, GDP bình quân đầu người của Xin-ga-po là 84 700 USD, của Việt Nam là 4 350 USD. Hãy cho biết GDP bình quân đầu người của Xin-ga-po gấp bao nhiêu lần của Việt Nam (làm tròn kết quả đến hàng đơn vị).", 19, "84 700 : 4 350 ≈ 19,47 → làm tròn 19 lần.", "lần"),
        S("Năm 2024, GDP của nước ta là 12 847,6 nghìn tỉ đồng, trong đó dịch vụ chiếm 50,1%. Hãy tính giá trị của khu vực dịch vụ (đơn vị: nghìn tỉ đồng, làm tròn kết quả đến hàng đơn vị).", 6437, "Giá trị dịch vụ = 12 847,6 × 50,1% ≈ 6 437 nghìn tỉ đồng.", "nghìn tỉ đồng"),
        S("Sản lượng cà phê nhân của nước ta năm 2015 là 1 450 nghìn tấn, năm 2024 là 1 800 nghìn tấn. Hãy tính tốc độ tăng của năm 2024 so với năm 2015 (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 24.1, "Tốc độ tăng = (1 800 – 1 450) : 1 450 × 100 ≈ 24,1%.", "%"),
        S("Năm 2024, dân số thế giới là 8,1 tỉ người, dân số Việt Nam là 101,3 triệu người. Hãy tính tỉ lệ dân số Việt Nam so với dân số thế giới (đơn vị: %, làm tròn kết quả đến hai chữ số thập phân).", 1.25, "Tỉ lệ = 101,3 : 8 100 × 100 ≈ 1,25%.", "%"),
        S("Năm 2015, giá trị xuất khẩu hàng hóa của nước ta là 162,4 tỉ USD, giá trị nhập khẩu là 165,8 tỉ USD. Hãy cho biết năm 2015 nước ta nhập siêu bao nhiêu tỉ USD (lấy kết quả đến một chữ số thập phân).", 3.4, "Nhập siêu = nhập khẩu – xuất khẩu = 165,8 – 162,4 = 3,4 tỉ USD.", "tỉ USD")
    ];

    /* ============================ ĐỀ SỐ 5 ============================ */
    const de5 = [
        // PHẦN I
        M("Cho biểu đồ sau:\nNhận xét nào sau đây đúng về dân số nước ta?", [
            "Dân số tăng liên tục qua các năm.",
            "Giai đoạn 2019 – 2024 dân số tăng nhiều hơn giai đoạn 2009 – 2019.",
            "Dân số năm 2024 tăng thêm 13,3 triệu người so với năm 2009.",
            "Năm 2024 dân số gấp 1,5 lần năm 2009."
        ], 0, "Dân số tăng liên tục từ 86,0 → 96,2 → 101,3 triệu người (tăng thêm 15,3 triệu người giai đoạn 2009 – 2024).", {
            charts: [{
                kind: "bar", title: "Dân số của Việt Nam, năm 2009, 2019 và 2024", unit: "triệu người",
                categories: ["2009", "2019", "2024"],
                series: [{ name: "Dân số", values: [86, 96.2, 101.3] }], note: NOTE
            }]
        }),
        M("Đường bờ biển của nước ta dài khoảng bao nhiêu km?", ["Khoảng 2360 km.", "Khoảng 3260 km.", "Khoảng 4120 km.", "Khoảng 1560 km."], 1, "Đường bờ biển nước ta dài khoảng 3.260 km, kéo dài từ Móng Cái (Quảng Ninh) đến Hà Tiên (Kiên Giang)."),
        M("Hệ thống sông nào sau đây có lưu vực lớn nhất ở nước ta?", ["Sông Hồng.", "Sông Mã.", "Sông Mê Công.", "Sông Đồng Nai."], 2, "Hệ thống sông Mê Công (phần chảy qua Việt Nam gọi là sông Cửu Long) là hệ thống sông có lưu vực và tổng lượng nước lớn nhất."),
        M("Loại đất chiếm diện tích lớn nhất ở nước ta là", ["đất mặn.", "đất feralit.", "đất phèn.", "đất phù sa."], 1, "Do đồi núi chiếm 3/4 diện tích lãnh thổ nên nhóm đất feralit hình thành trên đá mẹ đồi núi chiếm diện tích lớn nhất ở nước ta."),
        M("Đảo lớn nhất của nước ta là", ["Phú Quốc.", "Côn Đảo.", "Lý Sơn.", "Cát Bà."], 0, "Đảo Phú Quốc (tỉnh Kiên Giang) nằm trong vịnh Thái Lan có diện tích khoảng 574 km², là đảo lớn nhất Việt Nam."),
        M("Biên độ nhiệt năm ở miền Bắc lớn hơn miền Nam chủ yếu do nguyên nhân nào sau đây?", ["Miền Bắc có diện tích rừng lớn hơn.", "Địa hình miền Bắc thấp hơn.", "Vị trí gần chí tuyến hơn và chịu tác động mạnh của gió mùa Đông Bắc.", "Miền Bắc có nhiều sông hơn."], 2, "Miền Bắc nằm gần chí tuyến Bắc hơn và chịu ảnh hưởng trực tiếp của gió mùa Đông Bắc làm nhiệt độ mùa đông hạ thấp nên biên độ nhiệt năm lớn."),
        M("Cho bảng số liệu sau:\nNhận xét nào sau đây đúng về diện tích cà phê và cao su của hai vùng năm 2024?", [
            "Tổng diện tích hai cây ở Đông Nam Bộ lớn hơn Tây Nguyên.",
            "Tây Nguyên có diện tích cà phê lớn hơn Đông Nam Bộ.",
            "Đông Nam Bộ có diện tích cà phê lớn hơn cao su.",
            "Diện tích cao su của Tây Nguyên lớn hơn Đông Nam Bộ."
        ], 1, "Tây Nguyên có diện tích cà phê lớn hơn Đông Nam Bộ (640 nghìn ha > 50 nghìn ha). Đông Nam Bộ có thế mạnh số 1 về cao su (530 nghìn ha).", {
            tables: [{
                title: "Diện tích cà phê và cao su của Tây Nguyên và Đông Nam Bộ năm 2024", unit: "nghìn ha",
                headers: ["Vùng", "Cà phê", "Cao su"],
                rows: [["Tây Nguyên", "640", "190"], ["Đông Nam Bộ", "50", "530"]], note: NOTE
            }]
        }),
        M("Đồng bằng sông Hồng có mật độ dân số cao chủ yếu do nguyên nhân nào sau đây?", ["Khí hậu nóng khô quanh năm.", "Mới được khai thác gần đây.", "Lịch sử khai thác lâu đời, thuận lợi cho sản xuất lúa nước.", "Có nhiều khoáng sản quý hiếm."], 2, "Đồng bằng sông Hồng có lịch sử định cư, khai thác lãnh thổ lâu đời gắn với nền văn minh lúa nước và mạng lưới đô thị, công nghiệp dày đặc."),
        M("Cơ cấu dân số vàng tạo thuận lợi chủ yếu nào sau đây cho phát triển kinh tế nước ta?", ["Nguồn lao động dồi dào và tiềm năng thị trường tiêu thụ lớn.", "Dân số giảm nhanh.", "Tỉ lệ phụ thuộc rất cao.", "Giảm áp lực lên hệ thống y tế do ít người già."], 0, "Trong thời kì cơ cấu dân số vàng, nhóm tuổi lao động (15 – 64 tuổi) chiếm tỉ trọng khoảng 2/3 dân số, cung cấp lực lượng lao động và thị trường tiêu thụ lớn."),
        M("Trung du và miền núi Bắc Bộ có nhiều nhà máy thuỷ điện chủ yếu do nguyên nhân nào sau đây?", ["Khí hậu khô hạn.", "Dân cư đông đúc.", "Sông ngòi có độ dốc lớn, nhiều nước và tiềm năng thuỷ điện lớn.", "Địa hình bằng phẳng, sông chảy chậm."], 2, "Hệ thống sông Hồng và sông Đà chảy qua địa hình núi cao dốc lớn, lưu lượng nước dồi dào tạo trữ năng thuỷ điện lớn nhất cả nước."),
        M("Giải pháp chủ yếu để hạn chế thiếu nước tưới vào mùa khô ở Tây Nguyên là", ["tăng khai thác nước ngầm không kiểm soát.", "mở rộng diện tích cây công nghiệp trên sườn dốc.", "chuyển toàn bộ sang trồng lúa nước.", "xây dựng hồ chứa, áp dụng tưới tiết kiệm nước và bảo vệ rừng đầu nguồn."], 3, "Phát triển hệ thống hồ thuỷ lợi, công nghệ tưới nhỏ giọt tiết kiệm nước và giữ rừng đầu nguồn giúp điều tiết và giữ ẩm bền vững."),
        M("Chuyển đổi số trong nông nghiệp ở nước ta có vai trò chủ yếu nào sau đây?", ["Tăng sử dụng lao động thủ công.", "Hạn chế xuất khẩu nông sản.", "Giảm vai trò của thị trường.", "Nâng cao năng suất, quản lí chất lượng và truy xuất nguồn gốc sản phẩm."], 3, "Ứng dụng công nghệ số giúp tự động hoá sản xuất, kiểm soát chất lượng, minh bạch truy xuất nguồn gốc và kết nối trực tiếp thị trường."),
        M("Phát triển năng lượng tái tạo ở Nam Trung Bộ chủ yếu dựa trên lợi thế nào sau đây?", ["Nguồn nước dồi dào quanh năm.", "Địa hình đồng bằng rộng lớn.", "Số giờ nắng cao và tiềm năng gió lớn.", "Trữ lượng than đá lớn."], 2, "Nam Trung Bộ (đặc biệt là Ninh Thuận, Bình Thuận) có tổng số giờ nắng rất cao và tốc độ gió ổn định, thuận lợi phát triển điện mặt trời và điện gió."),
        M("Việc tăng cường liên kết vùng ở nước ta nhằm mục đích chủ yếu nào sau đây?", ["Phát huy thế mạnh, tạo không gian phát triển và nâng cao sức cạnh tranh.", "Hạn chế hợp tác giữa các địa phương.", "Làm giảm vai trò của từng vùng.", "Giảm đầu tư hạ tầng."], 0, "Liên kết vùng giúp kết nối chuỗi cung ứng, sử dụng hiệu quả hạ tầng chung (cảng biển, sân bay) và phát huy lợi thế so sánh của từng địa phương."),
        M("Việc Việt Nam gia nhập WTO năm 2007 tác động tích cực chủ yếu nào sau đây?", ["Chấm dứt hoàn toàn nhập khẩu.", "Mở rộng thị trường xuất khẩu và thu hút đầu tư nước ngoài.", "Hạn chế cải cách thể chế.", "Giảm quan hệ với các nước ASEAN."], 1, "Gia nhập WTO giúp hàng hoá Việt Nam tiếp cận thị trường toàn cầu với mức thuế ưu đãi và thu hút mạnh dòng vốn FDI."),
        M("Đông Nam Á có vị trí chiến lược quan trọng trên thế giới chủ yếu vì", ["nằm ở vùng cực, ít dân cư.", "nằm giữa hai đại dương, trên các tuyến hàng hải và hàng không quốc tế.", "có diện tích lớn nhất châu Á.", "không chịu ảnh hưởng của thiên tai."], 1, "Đông Nam Á là cầu nối lục địa Á – Âu với lục địa Ô-xtrây-li-a, nơi giao thoa tuyến hàng hải quốc tế nối Thái Bình Dương và Ấn Độ Dương (eo biển Ma-lắc-ca)."),
        M("Hiện tượng El Niño gây hạn hán, xâm nhập mặn ở Đồng bằng sông Cửu Long tác động như thế nào đến sản xuất lúa?", ["Làm tăng diện tích đất phù sa mới ngay lập tức.", "Không ảnh hưởng đến sản xuất.", "Gây thiếu nước ngọt, giảm năng suất và thiệt hại mùa vụ.", "Làm tăng năng suất và sản lượng lúa."], 2, "El Niño làm lượng mưa sụt giảm, dòng chảy sông Mê Công suy kiệt khiến nước mặn lấn sâu vào nội đồng, gây thiệt hại diện tích và năng suất lúa."),
        M("Thương mại điện tử phát triển nhanh làm thay đổi hoạt động nội thương ở nước ta như thế nào?", ["Chấm dứt hoạt động của siêu thị.", "Làm giảm vai trò của vận tải.", "Mở rộng kênh phân phối, thay đổi hành vi mua sắm và giảm phụ thuộc vào cửa hàng truyền thống.", "Thu hẹp thị trường tiêu thụ."], 2, "Thương mại điện tử giúp giao dịch xuyên không gian, thúc đẩy thanh toán không tiền mặt và dịch vụ logistics phát triển mạnh."),
        // PHẦN II
        T("Cho biểu đồ số lượt khách du lịch quốc tế đến Việt Nam, giai đoạn 2019 – 2024:", [
            ["a) Năm 2019, số lượt khách quốc tế đến Việt Nam cao hơn năm 2024.", true],
            ["b) Năm 2020 là năm có số lượt khách quốc tế đến Việt Nam thấp nhất trong giai đoạn.", false],
            ["c) Số lượt khách quốc tế giảm mạnh giai đoạn 2019 – 2021 chủ yếu do tác động của đại dịch COVID-19 và các hạn chế đi lại.", true],
            ["d) Số lượt khách quốc tế tăng nhanh giai đoạn 2022 – 2024 chủ yếu do dân số trong nước tăng nhanh.", false]
        ], [
            "Đúng: năm 2019 đạt 18,0 triệu lượt, cao hơn năm 2024 (17,5 triệu lượt).",
            "Sai: năm 2021 (0,2 triệu lượt) mới là năm thấp nhất trên biểu đồ.",
            "Đúng: đại dịch COVID-19 khiến đường bay quốc tế đóng cửa, khách quốc tế giảm sâu.",
            "Sai: khách quốc tế phục hồi nhanh giai đoạn 2022 – 2024 nhờ chính sách mở cửa du lịch sớm, nới lỏng thị thực (e-visa) và xúc tiến quảng bá quốc tế."
        ], {
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
        ], [
            "Đúng: nhóm 0 – 14 tuổi giảm từ 24,5% (2009) → 24,3% (2019) → 23,0% (2024).",
            "Sai: năm 2019 nhóm từ 65 tuổi trở lên (7,7%) thấp hơn nhiều so với nhóm 0 – 14 tuổi (24,3%).",
            "Đúng: 9,2% – 6,4% = 2,8 điểm phần trăm.",
            "Sai: già hoá dân số diễn ra nhanh do mức sinh giảm và tuổi thọ trung bình của người dân ngày càng tăng."
        ], {
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
        ], [
            "Đúng: Đông Nam Bộ là vùng kinh tế phát triển hàng đầu, đóng góp tỉ trọng lớn nhất vào GDP và ngân sách cả nước.",
            "Sai: cây công nghiệp lâu năm chủ lực của Đông Nam Bộ là cao su, điều, hồ tiêu; chè là cây chủ lực của Trung du và miền núi phía Bắc và Lâm Đồng.",
            "Sai: công nghiệp của vùng phát triển mạnh chủ yếu nhờ vị trí thuận lợi, thu hút FDI lớn, cơ sở hạ tầng tốt và nguồn lao động chất lượng cao.",
            "Đúng: các tuyến vành đai, cao tốc, metro và đô thị thông minh giúp giải toả điểm nghẽn hạ tầng và thúc đẩy tăng trưởng."
        ]),
        T("Về điều kiện phát triển nông nghiệp ở vùng Tây Nguyên:", [
            ["a) Tây Nguyên là vùng có diện tích trồng cà phê lớn nhất cả nước.", true],
            ["b) Tây Nguyên là vùng giáp biển, có nhiều cảng biển nước sâu.", false],
            ["c) Mùa khô kéo dài, thiếu nước tưới là một trong những khó khăn lớn đối với sản xuất nông nghiệp của vùng.", true],
            ["d) Giải pháp hàng đầu để phát triển cà phê bền vững là mở rộng diện tích bằng cách khai thác rừng đầu nguồn.", false]
        ], [
            "Đúng: Tây Nguyên chiếm khoảng 90% diện tích cà phê của cả nước.",
            "Sai: Tây Nguyên là vùng duy nhất ở nước ta không giáp biển.",
            "Đúng: mùa khô kéo dài 4 – 5 tháng làm mực nước ngầm hạ thấp, gây thiếu nước tưới nghiêm trọng.",
            "Sai: phát triển cà phê bền vững phải ổn định diện tích, tái canh giống mới, áp dụng công nghệ tưới tiết kiệm và tuyệt đối bảo vệ rừng đầu nguồn."
        ]),
        // PHẦN III
        S("Dân số nước ta năm 2009 là 86,0 triệu người, năm 2024 là 101,3 triệu người. Hãy cho biết dân số nước ta năm 2024 tăng thêm bao nhiêu triệu người so với năm 2009 (lấy kết quả đến một chữ số thập phân).", 15.3, "101,3 – 86,0 = 15,3 triệu người.", "triệu người"),
        S("Dân số nước ta năm 2009 là 86,0 triệu người, năm 2024 là 101,3 triệu người. Hãy tính tốc độ tăng dân số của năm 2024 so với năm 2009 (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 17.8, "Tốc độ tăng = (101,3 – 86,0) : 86,0 × 100 ≈ 17,8%.", "%"),
        S("Năm 2024, dân số nước ta là 101,3 triệu người, trong đó nhóm từ 65 tuổi trở lên chiếm 9,2%. Hãy tính số người từ 65 tuổi trở lên (đơn vị: triệu người, làm tròn kết quả đến một chữ số thập phân).", 9.3, "101,3 × 9,2% ≈ 9,3 triệu người.", "triệu người"),
        S("Số lượt khách quốc tế đến Việt Nam năm 2019 là 18,0 triệu, năm 2024 là 17,5 triệu. Hãy tính số lượt khách năm 2024 bằng bao nhiêu % năm 2019 (làm tròn kết quả đến một chữ số thập phân).", 97.2, "17,5 : 18,0 × 100 ≈ 97,2%.", "%"),
        S("Năm 2024, diện tích cà phê của cả nước là 710 nghìn ha, trong đó Tây Nguyên có 640 nghìn ha. Hãy tính tỉ trọng diện tích cà phê của Tây Nguyên so với cả nước (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 90.1, "640 : 710 × 100 ≈ 90,1%.", "%"),
        S("Năm 2024, Đông Nam Bộ có số dân là 18,8 triệu người, diện tích là 23,6 nghìn km². Hãy tính mật độ dân số của vùng (đơn vị: người/km², làm tròn kết quả đến hàng đơn vị).", 797, "Mật độ = 18 800 nghìn người : 23,6 nghìn km² ≈ 797 người/km².", "người/km²")
    ];

    /* ============================ ĐỀ SỐ 6 (Mã đề 0909) ============================ */
    const de6 = [
        // PHẦN I
        M("Cho biểu đồ sau:\nNhận xét nào sau đây đúng với lực lượng lao động ở nước ta năm 2024 so với năm 2015?", [
            "Tỉ trọng lao động nhóm 15 – 24 tuổi có xu hướng tăng.",
            "Lao động nhóm 25 – 49 tuổi tăng thêm 1,4 triệu người.",
            "Số lượng lao động của các nhóm tuổi đều tăng.",
            "Tỉ trọng lao động nhóm từ 50 tuổi trở lên tăng thêm 3,3%."
        ], 1, "Lao động nhóm 25 – 49 tuổi: 33,7 – 32,3 = 1,4 triệu người. Nhóm 15 – 24 giảm cả số lượng lẫn tỉ trọng; nhóm từ 50 tuổi trở lên giảm số lượng (14,3 → 14,1 triệu).", {
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
        ], 0, "Nuôi trồng tăng 5 700 : 3 532 ≈ 1,61 lần, khai thác tăng 3 900 : 3 049 ≈ 1,28 lần. Tỉ trọng nuôi trồng tăng từ 53,7% lên 59,4%.", {
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
        M("Bắc Trung Bộ có mùa mưa lệch về thu – đông chủ yếu do tác động kết hợp của nhân tố nào sau đây?", ["Gió Tây khô nóng và địa hình thấp.", "Bão, gió mùa Đông Bắc và hướng địa hình dãy Trường Sơn Bắc.", "Tín phong Đông Bắc và dòng biển lạnh.", "Gió mùa Tây Nam và hoạt động của frông cực."], 1, "Vào thu – đông, bão, dải hội tụ nhiệt đới và gió mùa Đông Bắc qua biển gặp dãy Trường Sơn Bắc chắn ngang gây mưa lớn cho Bắc Trung Bộ."),
        // PHẦN II
        T("Cho thông tin sau:\nĐịa hình của miền Tây Bắc và Bắc Trung Bộ gồm núi, cao nguyên, sơn nguyên, đồng bằng ven biển,... Đặc trưng khí hậu của miền là sự giảm sút ảnh hưởng của gió mùa Đông Bắc, nhiệt độ trung bình năm tăng dần và biên độ nhiệt độ năm giảm từ bắc vào nam. Bắc Trung Bộ chịu tác động mạnh của gió Tây khô nóng vào nửa đầu mùa hạ. Sinh vật phổ biến trong miền là các loài nhiệt đới, ngoài ra còn có sinh vật cận nhiệt và ôn đới.", [
            ["a) Sự phân hóa đa dạng của thiên nhiên trong miền tạo thuận lợi chủ yếu để phát triển sản xuất quanh năm, thâm canh, tăng vụ, hình thành các vùng chuyên canh quy mô lớn.", false],
            ["b) Miền Tây Bắc và Bắc Trung Bộ có địa hình đa dạng.", true],
            ["c) Sự xuất hiện của thành phần loài sinh vật ôn đới trong miền chủ yếu do tác động của hướng địa hình, gió đông bắc và vị trí xa chí tuyến.", false],
            ["d) Gió Tây khô nóng hoạt động mạnh ở Bắc Trung Bộ vào nửa đầu mùa hạ do Tín phong bán cầu Nam kết hợp với dãy Trường Sơn Bắc.", false]
        ], [
            "Sai: đây là thuận lợi của vùng đồng bằng; ở miền núi, thiên nhiên đa dạng thuận lợi cho phát triển đa dạng cây trồng, vật nuôi theo đai cao và du lịch.",
            "Đúng: miền có núi cao, cao nguyên, sơn nguyên và đồng bằng ven biển.",
            "Sai: sinh vật ôn đới xuất hiện chủ yếu do đai cao của địa hình (nhất là vùng núi cao Hoàng Liên Sơn).",
            "Sai: gió Tây khô nóng hình thành do khối khí Bắc Ấn Độ Dương (gió mùa Tây Nam đầu hạ) vượt dãy Trường Sơn Bắc bị biến tính."
        ]),
        T("Cho biểu đồ sau về sản lượng điện phát ra của nước ta, giai đoạn 2015 – 2024:", [
            ["a) Năm 2024, sản lượng điện phát ra của nước ta cao nhất trong các năm được thể hiện trên biểu đồ.", true],
            ["b) Giai đoạn 2015 – 2024, sản lượng điện phát ra của nước ta tăng liên tục.", true],
            ["c) Năm 2024, sản lượng điện phát ra của nước ta gấp hơn 2 lần so với năm 2015.", false],
            ["d) Sản lượng điện tăng chủ yếu do thủy điện trên các sông lớn là nguồn điện duy nhất của nước ta.", false]
        ], [
            "Đúng: năm 2024 đạt 293,1 tỉ kWh, cao nhất trong các năm.",
            "Đúng: giá trị tăng qua các năm 2015, 2019, 2022, 2024.",
            "Sai: 293,1 : 157,9 ≈ 1,86 lần, chưa tới 2 lần.",
            "Sai: cơ cấu nguồn điện nước ta đa dạng gồm nhiệt điện, thủy điện, điện mặt trời, điện gió chứ không chỉ có thủy điện."
        ], {
            charts: [{
                kind: 'bar', title: "Sản lượng điện phát ra của Việt Nam, giai đoạn 2015 – 2024", unit: "tỉ kWh",
                categories: ["2015", "2019", "2022", "2024"],
                series: [{ name: "Sản lượng điện", values: [157.9, 244.9, 258.9, 293.1] }], note: NOTE
            }]
        }),
        T("Cho thông tin sau:\nĐông Nam Bộ có đất ba dan, đất xám, khí hậu cận xích đạo nóng ẩm, nguồn nước dồi dào từ hệ thống sông Đồng Nai, hồ Dầu Tiếng, Trị An. Vùng có nhiều loại cây ăn quả như sầu riêng, chôm chôm, bưởi, xoài, mít… và đang đa dạng hóa cơ cấu cây ăn quả gắn với chế biến, xuất khẩu.", [
            ["a) Đông Nam Bộ có đất ba dan, khí hậu cận xích đạo và nguồn nước dồi dào là điều kiện thuận lợi để phát triển nhiều loại cây ăn quả.", true],
            ["b) Cây ăn quả của vùng chủ yếu phân bố ở các khu vực ven biển bị nhiễm mặn.", false],
            ["c) Đa dạng hóa cơ cấu cây ăn quả của vùng chủ yếu nhằm giảm diện tích cây công nghiệp lâu năm.", false],
            ["d) Ứng dụng công nghệ, liên kết chuỗi giá trị và xây dựng thương hiệu góp phần nâng cao giá trị cây ăn quả của vùng.", true]
        ], [
            "Đúng: đất, khí hậu và nguồn nước là các điều kiện tự nhiên thuận lợi cho cây ăn quả.",
            "Sai: cây ăn quả của vùng phân bố trên đất ba dan, đất xám ở vùng bán bình nguyên.",
            "Sai: mục đích chủ yếu là nâng cao giá trị kinh tế, đáp ứng thị trường và sử dụng hợp lí tài nguyên.",
            "Đúng: công nghệ, chuỗi giá trị và thương hiệu giúp nâng cao giá trị gia tăng và sức cạnh tranh."
        ]),
        T("Cho biểu đồ sau về tỉ lệ dân thành thị của nước ta, giai đoạn 2015 – 2024:", [
            ["a) Giai đoạn 2015 – 2024, tỉ lệ dân thành thị của nước ta tăng liên tục.", true],
            ["b) Năm 2019, tỉ lệ dân thành thị của nước ta cao hơn năm 2022.", false],
            ["c) Giai đoạn 2015 – 2024, tỉ lệ dân thành thị của nước ta tăng 4,9 điểm phần trăm.", true],
            ["d) Tỉ lệ dân thành thị tăng chủ yếu do mức sinh ở thành thị cao hơn nhiều so với nông thôn.", false]
        ], [
            "Đúng: tỉ lệ tăng qua các năm 33,5% → 34,4% → 37,1% → 38,4%.",
            "Sai: năm 2019 (34,4%) thấp hơn năm 2022 (37,1%).",
            "Đúng: 38,4 – 33,5 = 4,9 điểm phần trăm.",
            "Sai: tỉ lệ dân thành thị tăng chủ yếu do công nghiệp hóa, dịch vụ phát triển và mở rộng quy mô đô thị."
        ], {
            charts: [{
                kind: 'line', title: "Tỉ lệ dân thành thị của Việt Nam, giai đoạn 2015 – 2024", unit: "%",
                categories: ["2015", "2019", "2022", "2024"],
                series: [{ name: "Dân thành thị", values: [33.5, 34.4, 37.1, 38.4] }], note: NOTE
            }]
        }),
        // PHẦN III
        S("Năm 2023, trị giá nhập khẩu hàng hóa và dịch vụ của Thụy Điển là 299,5 tỉ đô la Mỹ, trị giá xuất khẩu là 322,7 tỉ đô la Mỹ. Hãy tính cán cân thương mại của Thụy Điển năm 2023 (đơn vị: tỉ đô la Mỹ, lấy kết quả đến một chữ số thập phân).", 23.2, "Cán cân thương mại = xuất khẩu – nhập khẩu = 322,7 – 299,5 = 23,2 (tỉ USD).", "tỉ USD"),
        S("Năm 2015, sản lượng điện phát ra của nước ta là 157,9 tỉ kWh, năm 2024 là 293,1 tỉ kWh. Hãy cho biết năm 2024 so với năm 2015, sản lượng điện phát ra của nước ta tăng bao nhiêu lần (làm tròn kết quả đến hai chữ số thập phân).", 1.86, "293,1 : 157,9 ≈ 1,856 → làm tròn 1,86 (lần).", "lần"),
        S("Năm 2024, một tỉnh có tỉ suất sinh thô là 17,2‰ và tỉ suất chết thô là 6,5‰. Hãy tính tỉ lệ gia tăng dân số tự nhiên của tỉnh đó (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 1.1, "Gia tăng tự nhiên = (17,2 – 6,5) : 10 = 1,07% → làm tròn 1,1%.", "%"),
        S("Năm 2024, dân số nước ta là 101,3 triệu người, diện tích tự nhiên là 331,3 nghìn km². Hãy tính mật độ dân số của nước ta năm 2024 (đơn vị: người/km², làm tròn kết quả đến hàng đơn vị).", 306, "Mật độ = 101 300 nghìn người : 331,3 nghìn km² ≈ 305,8 → làm tròn 306 người/km².", "người/km²"),
        S("Năm 2024, GDP của nước ta (theo giá hiện hành) là 12 847,6 nghìn tỉ đồng, trong đó khu vực dịch vụ đạt 6 508,2 nghìn tỉ đồng. Hãy tính tỉ trọng của khu vực dịch vụ trong GDP (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).", 50.7, "Tỉ trọng = 6 508,2 : 12 847,6 × 100 ≈ 50,66% → làm tròn 50,7%.", "%"),
        S("Năm 2024, diện tích lúa của nước ta là 7,1 triệu ha, sản lượng lúa là 43,5 triệu tấn. Hãy tính năng suất lúa của nước ta năm 2024 (đơn vị: tạ/ha, làm tròn kết quả đến một chữ số thập phân).", 61.3, "Năng suất = sản lượng : diện tích = 435 triệu tạ : 7,1 triệu ha ≈ 61,27 → làm tròn 61,3 tạ/ha.", "tạ/ha")
    ];

    /* ============================ XUẤT DỮ LIỆU ============================ */
    return {
        1: { label: "Đề thi thử số 1", questions: de1 },
        2: { label: "Đề thi thử số 2", questions: de2 },
        3: { label: "Đề thi thử số 3", questions: de3 },
        4: { label: "Đề thi thử số 4", questions: de4 },
        5: { label: "Đề thi thử số 5", questions: de5 },
        6: { label: "Đề thi thử số 6 (Mã đề 0909)", questions: de6 }
    };
})();
