/* =========================================================================
   ĐỀ THI THỬ THEO CẤU TRÚC CHÍNH THỨC TỐT NGHIỆP THPT 2026 - MÔN ĐỊA LÍ
   (theo đề tham khảo mã 0909, thời gian 50 phút)
     PHẦN I  : 18 câu trắc nghiệm nhiều phương án (0,25 điểm/câu)  - có câu dùng biểu đồ, bảng số liệu
     PHẦN II : 4 câu Đúng/Sai (mỗi câu 4 ý, tối đa 1 điểm/câu)      - có câu dùng biểu đồ
     PHẦN III: 6 câu trả lời ngắn (0,25 điểm/câu)                   - đáp án là số
   Tổng: 18 x 0,25 + 4 x 1 + 6 x 0,25 = 10 điểm.

   Đề 10: hoàn thiện từ đề tham khảo mã 0909 (các câu gốc giữ nguyên nội dung & thứ tự lựa chọn;
          biểu đồ/bảng số liệu của đề gốc không có trong file Word nên được dựng lại sao cho khớp phương án).
   Đề 11: đề soạn mới cùng cấu trúc.
   LƯU Ý: số liệu biểu đồ/bảng đã làm tròn hoặc mô phỏng, dùng cho ôn tập - cần đối chiếu số liệu chính thức.
========================================================================= */

const dataMocktest2026 = (function () {
    const M = (text, options, answer, explain, extra) => Object.assign({ type: 'mcq', text, options, answer, explain }, extra || {});
    const T = (text, items, explains, extra) => Object.assign({
        type: 'tf', text,
        options: items.map(([t, a], i) => ({ text: t, answer: a, explain: explains[i] }))
    }, extra || {});
    const S = (text, answer, explain, extra) => Object.assign({ type: 'sa', text, answer, explain }, extra || {});
    const NOTE = "Số liệu đã làm tròn, dùng cho ôn tập.";

    /* ============================ ĐỀ 10 (mã 0909) ============================ */
    const de10 = [
        // ---------------- PHẦN I ----------------
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
                series: [
                    { name: "15 – 24 tuổi", values: [7.9, 6.3] },
                    { name: "25 – 49 tuổi", values: [32.3, 33.7] },
                    { name: "Từ 50 tuổi trở lên", values: [14.3, 14.1] }
                ], note: NOTE
            }]
        }),
        M("Quốc gia nào sau đây nằm ở khu vực hạ lưu sông Mê Công?", ["Trung Quốc.", "Mi-an-ma.", "Xin-ga-po.", "Việt Nam."], 3,
            "Hạ lưu sông Mê Công gồm Lào, Thái Lan, Cam-pu-chia và Việt Nam. Trung Quốc và Mi-an-ma ở thượng lưu; Xin-ga-po không nằm trong lưu vực.", { fixed: true }),
        M("Hiện nay, việc đa dạng hóa cơ cấu cây ăn quả ở Đông Nam Bộ có ý nghĩa chủ yếu nào sau đây?", [
            "Sản xuất hàng hóa quy mô lớn, nâng cao chất lượng sản phẩm, đẩy mạnh xuất khẩu.",
            "Hình thành vùng chuyên canh, tạo nhiều việc làm mới, tăng thu nhập cho người dân.",
            "Nâng cao giá trị sản phẩm, sử dụng hợp lí các nguồn tài nguyên, bảo vệ môi trường.",
            "Phát huy các thế mạnh, tạo ra nhiều nông sản hàng hóa, đáp ứng nhu cầu thị trường."
        ], 2, "Đa dạng hóa cơ cấu cây trồng giúp tăng giá trị sản phẩm, khai thác hợp lí đất, nước, khí hậu và hạn chế rủi ro, góp phần bảo vệ môi trường. (Đáp án do người soạn đề xuất, cần đối chiếu đáp án chính thức.)", { fixed: true }),
        M("Đô thị hóa có tác động tích cực nào sau đây đối với lao động ở nước ta?", [
            "Cải thiện chất lượng cuộc sống, tăng cường xuất khẩu lao động.",
            "Giảm áp lực việc làm nông thôn, nâng cao chất lượng lao động.",
            "Thay đổi cơ cấu dân số, thu hút nhiều lao động vào các đô thị.",
            "Tăng số lượng lao động thành thị, mở rộng thị trường tiêu thụ."
        ], 1, "Đô thị hóa chuyển lao động từ nông thôn sang các ngành phi nông nghiệp, giảm sức ép việc làm ở nông thôn và nâng cao trình độ, tác phong lao động. (Đáp án do người soạn đề xuất, cần đối chiếu đáp án chính thức.)", { fixed: true }),
        M("Giải pháp chủ yếu để nâng cao hiệu quả kinh tế của cây công nghiệp ở Trung du và miền núi phía Bắc hiện nay là", [
            "thu hút vốn đầu tư, đẩy mạnh thâm canh, tăng cường chế biến, bảo quản sản phẩm.",
            "phát triển thủy lợi, sử dụng giống mới, đa dạng cây trồng, đẩy mạnh chuyển đổi số.",
            "ứng dụng công nghệ, đẩy mạnh chế biến, xây dựng thương hiệu, mở rộng thị trường.",
            "mở rộng diện tích, nâng cao năng suất, sản xuất chuyên canh, đẩy mạnh xuất khẩu."
        ], 2, "Hiệu quả kinh tế phụ thuộc vào giá trị gia tăng: ứng dụng công nghệ, chế biến sâu, thương hiệu và thị trường. (Đáp án do người soạn đề xuất, cần đối chiếu đáp án chính thức.)", { fixed: true }),
        M("Phần lớn lãnh thổ Liên bang Nga thuộc đới khí hậu nào sau đây?", ["Cận nhiệt đới.", "Ôn đới.", "Nhiệt đới.", "Cận xích đạo."], 1,
            "Liên bang Nga nằm chủ yếu ở vĩ độ trung và cao của bán cầu Bắc nên phần lớn lãnh thổ thuộc đới khí hậu ôn đới.", { fixed: true }),
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
        M("Vùng biển nằm ngoài lãnh hải, hợp với lãnh hải thành vùng biển rộng 200 hải lí tính từ đường cơ sở là", ["vùng nội thủy.", "vùng tiếp giáp lãnh hải.", "vùng đặc quyền kinh tế.", "vùng thềm lục địa."], 2,
            "Vùng đặc quyền kinh tế rộng 200 hải lí tính từ đường cơ sở, bao gồm cả lãnh hải."),
        M("Mùa mưa ở Nam Bộ và Tây Nguyên chủ yếu do hoạt động của loại gió nào sau đây?", ["Gió mùa Đông Bắc.", "Gió mùa Tây Nam.", "Tín phong bán cầu Bắc.", "Gió Tây khô nóng."], 1,
            "Gió mùa Tây Nam từ vịnh Bengal và Nam bán cầu mang ẩm vào gây mưa lớn cho Nam Bộ và Tây Nguyên từ tháng 5 đến tháng 10."),
        M("Đặc điểm nổi bật về cơ cấu dân số của khu vực Đông Nam Á hiện nay là", ["dân số trẻ, đang chuyển sang già hóa.", "dân số già, tỉ lệ người dưới 15 tuổi rất cao.", "dân số giảm nhanh do mức sinh rất thấp.", "dân cư tập trung chủ yếu ở vùng núi cao."], 0,
            "Đông Nam Á có dân số đông, cơ cấu trẻ với lực lượng lao động dồi dào nhưng đang chuyển dần sang giai đoạn già hóa."),
        M("Quốc gia nào sau đây thuộc khu vực Bắc Âu?", ["Thụy Điển.", "Tây Ban Nha.", "Ba Lan.", "I-ta-li-a."], 0,
            "Thụy Điển nằm trên bán đảo Xcan-đi-na-vi, thuộc Bắc Âu; Tây Ban Nha, I-ta-li-a thuộc Nam Âu, Ba Lan thuộc Đông Âu."),
        M("Ngành công nghiệp nào sau đây là ngành trọng điểm của vùng Đông Nam Bộ?", ["Khai thác than.", "Khai thác dầu khí và công nghiệp điện tử.", "Chế biến chè.", "Sản xuất giấy từ nguyên liệu rừng."], 1,
            "Đông Nam Bộ có dầu khí ở thềm lục địa, lao động trình độ cao và hạ tầng tốt nên phát triển mạnh khai thác dầu khí, điện tử, công nghệ cao."),
        M("Tây Nguyên có thế mạnh trồng cây công nghiệp lâu năm chủ yếu nhờ yếu tố tự nhiên nào sau đây?", ["Đất phù sa màu mỡ ven sông.", "Đất ba dan rộng lớn và khí hậu cao nguyên mát mẻ.", "Địa hình đồng bằng thấp, nhiều ngập mặn.", "Đất mặn, đất phèn chiếm diện tích lớn."], 1,
            "Đất ba dan màu mỡ trên các cao nguyên cùng khí hậu cận xích đạo, mát ở độ cao thích hợp cho cà phê, hồ tiêu, cao su."),
        M("Thế mạnh nổi bật về lao động của Đồng bằng sông Hồng là", ["nguồn lao động dồi dào, có trình độ cao và tập trung nhiều cơ sở đào tạo.", "lao động có kinh nghiệm khai thác khoáng sản quy mô lớn.", "lao động thưa thớt nhưng giá rẻ.", "lao động chủ yếu làm nghề đánh bắt xa bờ."], 0,
            "Đồng bằng sông Hồng đông dân, tập trung nhiều trường đại học, viện nghiên cứu nên lao động có chất lượng cao."),
        M("Giải pháp nào sau đây phù hợp nhất để thích ứng với xâm nhập mặn ở Đồng bằng sông Cửu Long?", ["Mở rộng diện tích lúa ba vụ ở vùng ven biển.", "Chuyển đổi cơ cấu cây trồng, vật nuôi và xây dựng hệ thống thủy lợi thích ứng.", "Khai thác nước ngầm với quy mô lớn.", "Xây dựng thêm nhiều khu công nghiệp ở cửa sông."], 1,
            "Chuyển đổi mùa vụ, mô hình lúa – tôm, trữ ngọt và thủy lợi thích ứng giúp giảm thiệt hại do xâm nhập mặn."),
        M("Việc hoàn thiện mạng lưới giao thông ở Tây Nguyên có ý nghĩa chủ yếu nào sau đây?", ["Giảm diện tích rừng tự nhiên.", "Tăng cường liên kết vùng, thúc đẩy giao thương và phát triển kinh tế – xã hội.", "Hạn chế phát triển du lịch.", "Giảm vai trò của các đô thị lớn."], 1,
            "Giao thông thuận lợi giúp Tây Nguyên liên kết với duyên hải và các vùng khác, tiêu thụ nông sản và thu hút đầu tư."),
        M("Bắc Trung Bộ có mùa mưa lệch về thu – đông chủ yếu do tác động kết hợp của nhân tố nào sau đây?", ["Gió Tây khô nóng và địa hình thấp.", "Bão, gió mùa Đông Bắc và hướng địa hình dãy Trường Sơn Bắc.", "Tín phong Đông Bắc và dòng biển lạnh.", "Gió mùa Tây Nam và hoạt động của frông cực."], 1,
            "Vào thu – đông, bão, gió mùa Đông Bắc gặp dãy Trường Sơn Bắc chắn ngang gây mưa lớn cho Bắc Trung Bộ."),

        // ---------------- PHẦN II ----------------
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

        // ---------------- PHẦN III ----------------
        S("Năm 2023, trị giá nhập khẩu hàng hóa và dịch vụ của Thụy Điển là 299,5 tỉ đô la Mỹ, trị giá xuất khẩu là 322,7 tỉ đô la Mỹ. Hãy tính cán cân thương mại của Thụy Điển năm 2023 (đơn vị: tỉ đô la Mỹ, lấy kết quả đến một chữ số thập phân).",
            23.2, "Cán cân thương mại = xuất khẩu – nhập khẩu = 322,7 – 299,5 = 23,2 (tỉ USD).", { unit: "tỉ USD" }),
        S("Năm 2015, sản lượng điện phát ra của nước ta là 157,9 tỉ kWh, năm 2024 là 293,1 tỉ kWh. Hãy cho biết năm 2024 so với năm 2015, sản lượng điện phát ra của nước ta tăng bao nhiêu lần (làm tròn kết quả đến hai chữ số thập phân).",
            1.86, "293,1 : 157,9 ≈ 1,856 → làm tròn 1,86 (lần).", { unit: "lần" }),
        S("Năm 2024, một tỉnh có tỉ suất sinh thô là 17,2‰ và tỉ suất chết thô là 6,5‰. Hãy tính tỉ lệ gia tăng dân số tự nhiên của tỉnh đó (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).",
            1.1, "Gia tăng tự nhiên = (17,2 – 6,5) : 10 = 1,07% → làm tròn 1,1%.", { unit: "%" }),
        S("Năm 2024, dân số nước ta là 101,3 triệu người, diện tích tự nhiên là 331,3 nghìn km². Hãy tính mật độ dân số của nước ta năm 2024 (đơn vị: người/km², làm tròn kết quả đến hàng đơn vị).",
            306, "Mật độ = 101 300 nghìn người : 331,3 nghìn km² ≈ 305,8 → làm tròn 306 người/km².", { unit: "người/km²" }),
        S("Năm 2024, GDP của nước ta (theo giá hiện hành) là 12 847,6 nghìn tỉ đồng, trong đó khu vực dịch vụ đạt 6 508,2 nghìn tỉ đồng. Hãy tính tỉ trọng của khu vực dịch vụ trong GDP (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).",
            50.7, "Tỉ trọng = 6 508,2 : 12 847,6 × 100 ≈ 50,66% → làm tròn 50,7%.", { unit: "%" }),
        S("Năm 2024, diện tích lúa của nước ta là 7,1 triệu ha, sản lượng lúa là 43,5 triệu tấn. Hãy tính năng suất lúa của nước ta năm 2024 (đơn vị: tạ/ha, làm tròn kết quả đến một chữ số thập phân).",
            61.3, "Năng suất = sản lượng : diện tích = 435 triệu tạ : 7,1 triệu ha ≈ 61,27 → làm tròn 61,3 tạ/ha.", { unit: "tạ/ha" })
    ];

    /* ============================ ĐỀ 11 ============================ */
    const de11 = [
        // ---------------- PHẦN I ----------------
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
        M("Quốc gia nào sau đây thuộc khu vực Nam Á và có dân số đông nhất thế giới hiện nay?", ["Ấn Độ.", "Trung Quốc.", "Pa-ki-xtan.", "Băng-la-đét."], 0,
            "Ấn Độ thuộc Nam Á và đã vượt Trung Quốc về quy mô dân số, đứng đầu thế giới."),
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
        M("Vấn đề dân số nổi bật của Liên minh châu Âu (EU) hiện nay là", ["dân số trẻ, gia tăng tự nhiên rất cao.", "dân số đang già hóa, thiếu hụt lao động ở nhiều nước.", "dân cư tập trung chủ yếu ở nông thôn.", "tỉ lệ dân thành thị rất thấp."], 1,
            "Mức sinh thấp, tuổi thọ cao khiến dân số EU già hóa, nhiều nước thiếu lao động và phải thu hút lao động nhập cư."),
        M("Mùa đông lạnh ở Đồng bằng sông Hồng tạo thuận lợi chủ yếu cho việc", ["trồng cây công nghiệp lâu năm nhiệt đới.", "phát triển vụ đông với các cây ưa lạnh.", "nuôi trồng thủy sản nước mặn quanh năm.", "trồng lúa ba vụ trong năm."], 1,
            "Mùa đông lạnh cho phép trồng thêm vụ đông (ngô, khoai tây, rau ôn đới), làm đa dạng cơ cấu cây trồng."),
        M("Trung du và miền núi phía Bắc có thế mạnh nổi bật về", ["khai thác khoáng sản và thủy điện.", "nuôi trồng thủy sản nước lợ.", "trồng lúa nước quy mô lớn.", "công nghiệp dầu khí."], 0,
            "Vùng có nhiều khoáng sản (than, sắt, apatit,…) và sông ngòi dốc, giàu tiềm năng thủy điện."),
        M("Duyên hải Nam Trung Bộ có điều kiện thuận lợi nhất để phát triển ngành nào sau đây?", ["Kinh tế biển (cảng biển, du lịch biển, nuôi trồng và đánh bắt hải sản).", "Khai thác than nâu.", "Trồng cây ăn quả ôn đới.", "Khai thác gỗ quy mô lớn trong rừng đầu nguồn."], 0,
            "Đường bờ biển dài, nhiều vũng vịnh, bãi biển đẹp, ngư trường lớn thuận lợi cho kinh tế biển."),
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
        M("Gió mùa Đông Bắc ảnh hưởng mạnh nhất tới khu vực nào của nước ta?", ["Nam Bộ.", "Tây Nguyên.", "Miền Bắc và Đông Bắc Bắc Bộ.", "Duyên hải Nam Trung Bộ."], 2,
            "Gió mùa Đông Bắc thổi qua miền Bắc và Đông Bắc Bắc Bộ gây mùa đông lạnh, giảm dần khi vào phía nam."),
        M("Cây công nghiệp lâu năm chủ lực của Tây Nguyên là", ["chè và hồi.", "cà phê và hồ tiêu.", "dừa và mía.", "bông và đay."], 1,
            "Tây Nguyên là vùng cà phê lớn nhất cả nước, đồng thời trồng nhiều hồ tiêu, cao su."),
        M("Giải pháp chủ yếu để nâng cao hiệu quả khai thác thủy sản xa bờ là", ["tăng cường khai thác gần bờ.", "hiện đại hóa tàu thuyền, ngư cụ và hoàn thiện dịch vụ hậu cần nghề cá.", "giảm đầu tư cảng cá.", "hạn chế bảo quản sau thu hoạch."], 1,
            "Tàu công suất lớn, ngư cụ hiện đại và hậu cần nghề cá giúp khai thác xa bờ hiệu quả, an toàn và bền vững."),
        M("Hạn chế chủ yếu của quá trình đô thị hóa ở nước ta hiện nay là", ["dân số thành thị giảm.", "áp lực lên hạ tầng, môi trường và nhà ở đô thị.", "thu hẹp thị trường tiêu thụ.", "giảm nhu cầu việc làm."], 1,
            "Đô thị phát triển nhanh gây ùn tắc, ô nhiễm, thiếu nhà ở và quá tải hạ tầng."),
        M("Liên bang Nga nổi tiếng thế giới về tài nguyên khoáng sản nào sau đây?", ["Dầu mỏ và khí tự nhiên.", "Thiếc và bô-xít.", "Kim cương và vàng.", "Phốt phát và muối mỏ."], 0,
            "Nga có trữ lượng dầu mỏ, khí tự nhiên thuộc loại lớn nhất thế giới, là mặt hàng xuất khẩu quan trọng."),
        M("Việt Nam gia nhập Hiệp hội các quốc gia Đông Nam Á (ASEAN) vào năm nào?", ["1967.", "1984.", "1995.", "2007."], 2,
            "Việt Nam trở thành thành viên thứ 7 của ASEAN vào năm 1995."),
        M("Giải pháp nào sau đây góp phần giảm thiệt hại do bão, lũ ở Bắc Trung Bộ?", ["Phá rừng đầu nguồn để lấy đất.", "Hoàn thiện hệ thống cảnh báo, hồ chứa nước và trồng, bảo vệ rừng phòng hộ.", "Xây dựng nhà ở sát cửa sông.", "Giảm đầu tư thủy lợi."], 1,
            "Cảnh báo sớm, hồ chứa điều tiết lũ và rừng phòng hộ giúp giảm tác động của thiên tai."),
        M("Đông Nam Bộ thu hút nhiều lao động nhập cư chủ yếu do", ["kinh tế năng động, nhiều việc làm và thu nhập cao.", "đất nông nghiệp rộng và rẻ.", "khí hậu có mùa đông lạnh.", "hạ tầng giao thông kém phát triển."], 0,
            "Vùng có công nghiệp, dịch vụ phát triển, nhiều khu công nghiệp nên tạo nhiều việc làm."),
        M("Gia tăng dân số cơ học được tính bằng", ["hiệu số giữa tỉ suất sinh thô và tỉ suất chết thô.", "hiệu số giữa tỉ suất nhập cư và tỉ suất xuất cư.", "tổng của tỉ suất sinh và tỉ suất chết.", "tổng của tỉ suất nhập cư và xuất cư."], 1,
            "Gia tăng cơ học = tỉ suất nhập cư – tỉ suất xuất cư; gia tăng tự nhiên = sinh thô – chết thô."),
        M("Phát triển kinh tế tuần hoàn ở nước ta chủ yếu nhằm", ["tăng nhanh khai thác tài nguyên.", "tái sử dụng, tái chế, giảm chất thải và sử dụng hiệu quả tài nguyên.", "giảm vai trò của công nghệ.", "hạn chế xuất khẩu."], 1,
            "Kinh tế tuần hoàn kéo dài vòng đời sản phẩm, giảm chất thải, tiết kiệm tài nguyên và bảo vệ môi trường."),

        // ---------------- PHẦN II ----------------
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
                series: [
                    { name: "Nông, lâm, thủy sản", values: [44.0, 26.5] },
                    { name: "Công nghiệp và xây dựng", values: [22.7, 33.0] },
                    { name: "Dịch vụ", values: [33.3, 40.5] }
                ], note: NOTE
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

        // ---------------- PHẦN III ----------------
        S("Năm 2024, giá trị xuất khẩu hàng hóa của nước ta là 405,5 tỉ USD, giá trị nhập khẩu là 380,8 tỉ USD. Hãy tính cán cân thương mại hàng hóa của nước ta năm 2024 (đơn vị: tỉ USD, lấy kết quả đến một chữ số thập phân).",
            24.7, "Cán cân thương mại = 405,5 – 380,8 = 24,7 (tỉ USD).", { unit: "tỉ USD" }),
        S("Năm 2024, diện tích rừng của nước ta là 14,9 triệu ha, diện tích tự nhiên là 33,1 triệu ha. Hãy tính độ che phủ rừng của nước ta năm 2024 (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).",
            45.0, "Độ che phủ rừng = 14,9 : 33,1 × 100 ≈ 45,0%.", { unit: "%" }),
        S("GDP của nước ta năm 2023 là 433,0 tỉ USD, năm 2024 là 476,3 tỉ USD. Hãy tính tốc độ tăng GDP của nước ta năm 2024 so với năm 2023 (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).",
            10.0, "Tốc độ tăng = (476,3 – 433,0) : 433,0 × 100 = 10,0%.", { unit: "%" }),
        S("Nhiệt độ trung bình tháng 1 của Hà Nội là 16,4 °C, tháng 7 là 28,9 °C. Hãy tính biên độ nhiệt độ năm của Hà Nội (đơn vị: °C, lấy kết quả đến một chữ số thập phân).",
            12.5, "Biên độ nhiệt độ năm = 28,9 – 16,4 = 12,5 (°C).", { unit: "°C" }),
        S("Năm 2024, vùng Đồng bằng sông Cửu Long có số dân là 17,4 triệu người, diện tích là 40,9 nghìn km². Hãy tính mật độ dân số của vùng năm 2024 (đơn vị: người/km², làm tròn kết quả đến hàng đơn vị).",
            425, "Mật độ = 17 400 nghìn người : 40,9 nghìn km² ≈ 425,4 → làm tròn 425 người/km².", { unit: "người/km²" }),
        S("Năm 2024, sản lượng lúa của nước ta là 43,5 triệu tấn, dân số là 101,3 triệu người. Hãy tính sản lượng lúa bình quân đầu người của nước ta năm 2024 (đơn vị: kg/người, làm tròn kết quả đến hàng đơn vị).",
            429, "Bình quân = 43,5 triệu tấn : 101,3 triệu người = 429,4 kg/người → làm tròn 429 kg/người.", { unit: "kg/người" })
    ];

    /* ---- Xáo trộn cố định vị trí đáp án (bỏ qua câu fixed hoặc có chữ số trong lựa chọn) ---- */
    let seed = 20260710;
    const rnd = () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };
    [de10, de11].forEach(arr => arr.forEach(q => {
        if (q.type !== 'mcq' || q.fixed || q.options.some(o => /\d/.test(o))) return;
        const correct = q.options[q.answer], a = q.options.slice();
        for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
        q.options = a; q.answer = a.indexOf(correct);
    }));

    return {
        10: { label: "Đề thi thử số 10 – Cấu trúc 2026 (mã đề 0909)", questions: de10 },
        11: { label: "Đề thi thử số 11 – Cấu trúc 2026", questions: de11 }
    };
})();
