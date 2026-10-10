/* =========================================================================
   DATABASE ĐỊA LÍ (Cấu trúc đề thi Tốt nghiệp THPT 2026)
   Cấp độ nhận thức: Nhận biết -> Thông hiểu -> Vận dụng
========================================================================= */

const appDatabase = {
    khoi11: {},
    khoi12: {},
    mocktest: {}
};

// ================= DỮ LIỆU LỚP 11 =================
appDatabase.khoi11[1] = {
    title: "Chủ đề: Địa lí Khu vực và Quốc gia (Tây Nam Á & EU)",
    exercises: {
        tf: [
            // Đề 1 - Biểu đồ Tây Nam Á
            { type: 'tf', text: "Dựa vào biểu đồ Dân số và GDP của một số quốc gia Tây Nam Á năm 2023 (I-rắc, I-xra-en, A-rập Xê-út, Cô-oét)[cite: 187]:", options: [
                { text: "a) (Nhận biết) Năm 2023, dân số và GDP của một số quốc gia Tây Nam Á có sự chênh lệch[cite: 187].", answer: true },
                { text: "b) (Nhận biết) Năm 2023, Cô-oét có GDP/người cao gấp 2 lần GDP/người của A-rập Xê-út[cite: 187].", answer: false }, // Thực tế chỉ gấp khoảng 1.28 lần (37.204 USD so với 28.932 USD)[cite: 187].
                { text: "c) (Thông hiểu) Năm 2023, I-xra-en có GDP/người cao nhất, I-rắc có GDP/người thấp nhất[cite: 187].", answer: true },
                { text: "d) (Vận dụng) Nguyên nhân chênh lệch GDP/người của một số quốc gia Tây Nam Á chủ yếu do sự bất ổn định về chính trị và biến động của giá dầu mỏ[cite: 187].", answer: true }
            ]},
            // Đề 2 - Biểu đồ Liên minh châu Âu (EU)
            { type: 'tf', text: "Dựa vào biểu đồ Số dân nông thôn và số dân thành thị của một số quốc gia EU năm 2024 (Ba Lan, I-ta-li-a, Tây Ban Nha, Pháp)[cite: 187]:", options: [
                { text: "a) (Nhận biết) Năm 2024, tỉ lệ dân nông thôn của I-ta-li-a cao hơn của Pháp 10,2%[cite: 187].", answer: false }, // Thực tế cao hơn khoảng 9,1% (30,3% so với 21,2%)[cite: 187].
                { text: "b) (Nhận biết) Năm 2024, Tây Ban Nha có tỉ lệ dân thành thị lớn nhất, Ba Lan có tỉ lệ dân thành thị nhỏ nhất[cite: 187].", answer: true }, // TBN 80,3%; Ba Lan 60,1%[cite: 187].
                { text: "c) (Thông hiểu) Năm 2024, số dân nông thôn của một số quốc gia EU có sự chênh lệch[cite: 187].", answer: true },
                { text: "d) (Vận dụng) Tỉ lệ dân thành thị của một số quốc gia EU có sự chênh lệch chủ yếu do khác nhau về số lượng đô thị, quy mô nền kinh tế và lịch sử chuyển cư[cite: 187].", answer: true }
            ]}
        ]
    }
};

// ================= DỮ LIỆU LỚP 12 =================
appDatabase.khoi12[1] = {
    title: "Chủ đề: Địa lí Tự nhiên Việt Nam",
    exercises: {
        tf: [
            // Đề 1 - Miền Tây Bắc, Bắc Trung Bộ và Nam Trung Bộ, Nam Bộ
            { type: 'tf', text: "Cho thông tin về đặc điểm tự nhiên của Miền Tây Bắc và Bắc Trung Bộ[cite: 187]:", options: [
                { text: "a) (Nhận biết) Miền Tây Bắc và Bắc Trung Bộ có địa hình đa dạng[cite: 187].", answer: true },
                { text: "b) (Nhận biết) Sự phân hoá đa dạng của thiên nhiên trong miền tạo thuận lợi chủ yếu để phát triển sản xuất quanh năm, thâm canh, tăng vụ, hình thành các vùng chuyên canh quy mô lớn[cite: 187].", answer: false }, // Đây là thuận lợi đặc trưng của vùng đồng bằng, không phải vùng đồi núi[cite: 187].
                { text: "c) (Thông hiểu) Gió Tây khô nóng hoạt động mạnh ở Bắc Trung Bộ vào nửa đầu mùa hạ do Tín phong bán cầu Nam kết hợp với dãy Trường Sơn Bắc[cite: 187].", answer: false }, // Do gió mùa Tây Nam bị biến tính khi vượt dãy Trường Sơn[cite: 187].
                { text: "d) (Vận dụng) Sự xuất hiện của thành phần loài sinh vật ôn đới trong miền chủ yếu do tác động của hướng địa hình, gió đông bắc và vị trí xa chí tuyến[cite: 187].", answer: false } // Chủ yếu do đai cao địa hình dãy Hoàng Liên Sơn[cite: 187].
            ]},
            // Đề 2 - Sự phân hóa Đông - Tây
            { type: 'tf', text: "Cho thông tin về sự phân hóa đa dạng theo Đông - Tây của thiên nhiên nước ta[cite: 187]:", options: [
                { text: "a) (Nhận biết) Vùng đồi núi phân bố chủ yếu ở phía tây và tây bắc của nước ta[cite: 187].", answer: true },
                { text: "b) (Nhận biết) Sự khác biệt về khí hậu giữa vùng núi Đông Bắc với Tây Bắc chủ yếu do tác động của hướng địa hình kết hợp với dải hội tụ nhiệt đới và gió đông nam[cite: 187].", answer: false }, // Chủ yếu do tác động của hướng dãy Hoàng Liên Sơn chắn gió mùa Đông Bắc[cite: 187].
                { text: "c) (Thông hiểu) Vùng đồng bằng ven biển nước ta có địa hình thấp, khá bằng phẳng do thường xuyên chịu tác động trực tiếp từ biển và vùng đồi núi liền kề[cite: 187].", answer: false }, // Đồng bằng ven biển miền Trung hẹp ngang và bị chia cắt do núi đâm sát biển[cite: 187].
                { text: "d) (Vận dụng) Sự phân hóa của khí hậu theo Đông – Tây tạo thuận lợi chủ yếu để nước ta đổi mới cơ cấu cây trồng, nâng cao chất lượng nông sản đặc sản và phát triển nền nông nghiệp xanh[cite: 187].", answer: true }
            ]}
        ]
    }
};

appDatabase.khoi12[2] = {
    title: "Chủ đề: Địa lí Các ngành Kinh tế",
    exercises: {
        tf: [
            // Đề 1 - Nội thương và Ngoại thương
            { type: 'tf', text: "Về hoạt động nội thương và sự phân hóa giữa các vùng ở nước ta hiện nay[cite: 187]:", options: [
                { text: "a) (Nhận biết) Đông Nam Bộ và Đồng bằng sông Hồng là hai vùng có hoạt động nội thương phát triển hàng đầu cả nước[cite: 187].", answer: true },
                { text: "b) (Nhận biết) Mạng lưới siêu thị, trung tâm thương mại là hình thức bán lẻ hàng hoá ngày càng phát triển trên thị trường trong nước[cite: 187].", answer: true },
                { text: "c) (Thông hiểu) Sức mua của người dân tăng, thị hiếu tiêu dùng thay đổi là nguyên nhân chủ yếu thúc đẩy thương mại điện tử phát triển ở nước ta[cite: 187].", answer: false }, // Nguyên nhân chủ yếu là sự phát triển của công nghệ thông tin và internet[cite: 187].
                { text: "d) (Vận dụng) Sự phân hoá hoạt động nội thương ở nước ta chủ yếu do sự khác nhau về mạng lưới dân cư và chất lượng lao động giữa các vùng[cite: 187].", answer: false } // Chủ yếu do trình độ phát triển kinh tế và mức sống dân cư[cite: 187].
            ]},
            // Đề 2 - Ngành Du lịch
            { type: 'tf', text: "Về thực trạng và định hướng phát triển của ngành du lịch nước ta[cite: 187]:", options: [
                { text: "a) (Nhận biết) Giải pháp chủ yếu để nâng cao chất lượng sản phẩm du lịch là phát triển thương hiệu du lịch quốc gia, ứng dụng công nghệ số trong quảng bá và hoàn thiện hệ thống cơ sở dữ liệu du lịch[cite: 187].", answer: false }, // Đây là các biện pháp quảng bá và quản lý, không tác động trực tiếp vào cốt lõi nâng cao chất lượng sản phẩm du lịch[cite: 187].
                { text: "b) (Nhận biết) Ngành du lịch nước ta phát triển nhanh, đóng góp tích cực vào tăng trưởng kinh tế[cite: 187].", answer: true },
                { text: "c) (Thông hiểu) Ngành du lịch nước ta thu hút được nhiều khách du lịch quốc tế chủ yếu do có cơ sở hạ tầng hiện đại, nguồn nhân lực chất lượng cao và áp dụng rộng rãi công nghệ trong thanh toán dịch vụ[cite: 187].", answer: false }, // Sức hút chủ yếu nhờ tài nguyên du lịch đa dạng, phong phú và đặc sắc[cite: 187].
                { text: "d) (Vận dụng) Du lịch nước ta đang thúc đẩy ứng dụng công nghệ số để hỗ trợ và gia tăng trải nghiệm cho du khách[cite: 187].", answer: true }
            ]}
        ]
    }
};

appDatabase.khoi12[3] = {
    title: "Chủ đề: Địa lí Các vùng Kinh tế",
    exercises: {
        tf: [
            // Đề 1 - Đồng bằng sông Cửu Long (Lúa / Thủy sản)
            { type: 'tf', text: "Về tình hình sản xuất và ứng phó với biến đổi khí hậu tại Đồng bằng sông Cửu Long[cite: 187]:", options: [
                { text: "a) (Nhận biết) Đồng bằng sông Cửu Long là vùng có diện tích và sản lượng lúa lớn nhất nước ta[cite: 187].", answer: true },
                { text: "b) (Nhận biết) Khó khăn lớn nhất trong sản xuất lúa ở Đồng bằng sông Cửu Long là nhiệt độ trung bình năm tăng[cite: 187].", answer: false }, // Khó khăn lớn nhất là xâm nhập mặn và thiếu nước ngọt mùa khô do biến đổi khí hậu[cite: 187].
                { text: "c) (Vận dụng) Vùng có sản lượng lúa lớn, chủ yếu do khí hậu cận xích đạo, nguồn nước phong phú, nhiều giống lúa chất lượng cao[cite: 187].", answer: false }, // Yếu tố quan trọng nhất là diện tích đất phù sa rộng lớn và địa hình bằng phẳng[cite: 187].
                { text: "d) (Vận dụng) Giải pháp chủ yếu để sử dụng hiệu quả tài nguyên đất trong sản xuất lúa ở Đồng bằng sông Cửu Long là tăng vụ và chuyển đổi mục đích sử dụng đất[cite: 187].", answer: true }
            ]},
            // Đề 2 - Đồng bằng sông Cửu Long (Cây ăn quả)
            { type: 'tf', text: "Về định hướng chuyển đổi và phát triển cây ăn quả tại Đồng bằng sông Cửu Long[cite: 187]:", options: [
                { text: "a) (Nhận biết) Các kĩ thuật canh tác hiện đại được áp dụng trong sản xuất cây ăn quả của vùng chủ yếu nhằm nâng cao năng lực quản lí các sản phẩm đặc thù, phát triển mạng lưới cung ứng nông sản chất lượng cao[cite: 187].", answer: false }, // Áp dụng kĩ thuật hiện đại nhằm trực tiếp nâng cao năng suất, chất lượng và thích ứng biến đổi khí hậu[cite: 187].
                { text: "b) (Nhận biết) Đồng bằng sông Cửu Long có cơ cấu cây ăn quả đa dạng[cite: 187].", answer: true },
                { text: "c) (Vận dụng) Sản xuất cây ăn quả của vùng đang phát triển theo hướng nâng cao chất lượng và đảm bảo an toàn cho người tiêu dùng[cite: 187].", answer: true },
                { text: "d) (Vận dụng) Diện tích cây ăn quả của vùng tăng chủ yếu do áp dụng quy trình chăm sóc theo hướng bền vững, đa dạng hóa cơ cấu cây trồng[cite: 187].", answer: false } // Diện tích tăng chủ yếu do chuyển đổi cơ cấu từ đất trồng lúa kém hiệu quả sang cây ăn quả mang lại giá trị cao hơn[cite: 187].
            ]}
        ]
    }
};

// ================= DỮ LIỆU ĐỀ THI THỬ MÔN ĐỊA LÍ =================
appDatabase.mocktest[1] = [
    ...appDatabase.khoi11[1].exercises.tf,
    ...appDatabase.khoi12[1].exercises.tf,
    ...appDatabase.khoi12[2].exercises.tf,
    ...appDatabase.khoi12[3].exercises.tf
];
