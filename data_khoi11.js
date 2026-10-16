/* --- GỘP BỔ SUNG CHỦ ĐỀ 3 TỪ DATA_EXTRA.JS --- */
dataKhoi11[3] = {
    title: "Chủ đề 3: Địa lí Khu vực và Quốc gia (Tây Nam Á & EU)",
    exercises: {
        mcq: [],
        tf: [
            {
                type: "tf",
                text: "Dựa vào biểu đồ Dân số và GDP của một số quốc gia Tây Nam Á năm 2023 (I-rắc, I-xra-en, A-rập Xê-út, Cô-oét):",
                options: [
                    { text: "a) (Nhận biết) Năm 2023, dân số và GDP của một số quốc gia Tây Nam Á có sự chênh lệch.", answer: true },
                    { text: "b) (Nhận biết) Năm 2023, Cô-oét có GDP/người cao gấp 2 lần GDP/người của A-rập Xê-út.", answer: false },
                    { text: "c) (Thông hiểu) Năm 2023, I-xra-en có GDP/người cao nhất, I-rắc có GDP/người thấp nhất.", answer: true },
                    { text: "d) (Vận dụng) Nguyên nhân chênh lệch GDP/người của một số quốc gia Tây Nam Á chủ yếu do sự bất ổn định về chính trị và biến động của giá dầu mỏ.", answer: true }
                ],
                charts: [
                    { kind: "bar", title: "Dân số của một số quốc gia Tây Nam Á năm 2023", unit: "triệu người", categories: ["I-rắc", "I-xra-en", "A-rập Xê-út", "Cô-oét"], series: [{ name: "Dân số", values: [45.5, 9.8, 36.9, 4.3] }], note: "Số liệu đã làm tròn, dùng cho ôn tập." },
                    { kind: "bar", title: "GDP bình quân đầu người của một số quốc gia Tây Nam Á năm 2023", unit: "USD", categories: ["I-rắc", "I-xra-en", "A-rập Xê-út", "Cô-oét"], series: [{ name: "GDP/người", values: [5900, 54200, 28932, 37204] }], note: "Số liệu đã làm tròn, dùng cho ôn tập." }
                ]
            },
            {
                type: "tf",
                text: "Dựa vào biểu đồ Số dân nông thôn và số dân thành thị của một số quốc gia EU năm 2024 (Ba Lan, I-ta-li-a, Tây Ban Nha, Pháp):",
                options: [
                    { text: "a) (Nhận biết) Năm 2024, tỉ lệ dân nông thôn của I-ta-li-a cao hơn của Pháp 10,2%.", answer: false },
                    { text: "b) (Nhận biết) Năm 2024, Tây Ban Nha có tỉ lệ dân thành thị lớn nhất, Ba Lan có tỉ lệ dân thành thị nhỏ nhất.", answer: true },
                    { text: "c) (Thông hiểu) Năm 2024, số dân nông thôn của một số quốc gia EU có sự chênh lệch.", answer: true },
                    { text: "d) (Vận dụng) Tỉ lệ dân thành thị của một số quốc gia EU có sự chênh lệch chủ yếu do khác nhau về số lượng đô thị, quy mô nền kinh tế và lịch sử chuyển cư.", answer: true }
                ],
                charts: [
                    { kind: "stacked", title: "Cơ cấu dân thành thị và dân nông thôn của một số quốc gia EU năm 2024", unit: "%", categories: ["Ba Lan", "I-ta-li-a", "Tây Ban Nha", "Pháp"], series: [{ name: "Dân thành thị", values: [60.1, 69.7, 80.3, 78.8] }, { name: "Dân nông thôn", values: [39.9, 30.3, 19.7, 21.2] }], note: "Số liệu đã làm tròn, dùng cho ôn tập." }
                ]
            }
        ]
    }
};