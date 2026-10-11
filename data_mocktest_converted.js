/* =========================================================================
   CÁC ĐỀ THI THỬ ĐÃ CHUYỂN SANG CẤU TRÚC CHÍNH THỨC 2026 (đề số 1, 2, 7, 8, 9)
     PHẦN I  : 18 câu trắc nghiệm (trong đó 2 câu dùng biểu đồ / bảng số liệu)
     PHẦN II : 4 câu Đúng/Sai (đã bỏ nhãn mức độ; có biểu đồ ở một số câu)
     PHẦN III: 6 câu trả lời ngắn (đáp án là số, tính từ số liệu trong đề)
   File này được tạo từ dữ liệu các đề cũ và thay thế hoàn toàn data_mocktest.js
   và data_mocktest_new.js (có thể xoá hai file đó).
   Số liệu biểu đồ/bảng đã làm tròn hoặc mô phỏng, cần đối chiếu số liệu chính thức.
========================================================================= */

const dataMocktestConverted = {
 "1": {
  "label": "Đề thi thử số 1 – Cấu trúc 2026",
  "questions": [
   {
    "type": "mcq",
    "text": "Cho biểu đồ sau:\nNhận xét nào sau đây đúng về sản lượng lúa của một số vùng nước ta năm 2024?",
    "options": [
     "Duyên hải Nam Trung Bộ có sản lượng lúa cao hơn Đồng bằng sông Hồng.",
     "Đồng bằng sông Hồng có sản lượng lúa lớn nhất.",
     "Sản lượng lúa của Đồng bằng sông Cửu Long gấp khoảng 4 lần Đồng bằng sông Hồng.",
     "Tây Nguyên có sản lượng lúa cao hơn Bắc Trung Bộ."
    ],
    "answer": 2,
    "explain": "24,5 : 6,0 ≈ 4,1 lần. Tây Nguyên (1,4) thấp hơn Bắc Trung Bộ (4,2); Đồng bằng sông Cửu Long lớn nhất; Duyên hải Nam Trung Bộ (2,6) thấp hơn Đồng bằng sông Hồng (6,0).",
    "charts": [
     {
      "kind": "bar",
      "title": "Sản lượng lúa của một số vùng ở nước ta năm 2024",
      "unit": "triệu tấn",
      "categories": [
       "Đồng bằng sông Cửu Long",
       "Đồng bằng sông Hồng",
       "Bắc Trung Bộ",
       "Duyên hải Nam Trung Bộ",
       "Tây Nguyên"
      ],
      "series": [
       {
        "name": "Sản lượng lúa",
        "values": [
         24.5,
         6,
         4.2,
         2.6,
         1.4
        ]
       }
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     }
    ]
   },
   {
    "type": "mcq",
    "text": "Khu vực Tây Nam Á nổi tiếng thế giới về tài nguyên nào sau đây?",
    "options": [
     "Quặng sắt.",
     "Gỗ và lâm sản.",
     "Than đá.",
     "Dầu mỏ và khí tự nhiên."
    ],
    "answer": 3,
    "explain": "Tây Nam Á có trữ lượng dầu mỏ và khí tự nhiên thuộc loại lớn nhất thế giới, là nguồn thu ngoại tệ chính của nhiều nước."
   },
   {
    "type": "mcq",
    "text": "Đồng tiền chung của phần lớn các nước thành viên Liên minh châu Âu (EU) là",
    "options": [
     "Đô la Mỹ.",
     "Bảng Anh.",
     "Phrăng Thuỵ Sĩ.",
     "Ơ-rô."
    ],
    "answer": 3,
    "explain": "Ơ-rô là đồng tiền chung được phần lớn các nước thành viên EU sử dụng."
   },
   {
    "type": "mcq",
    "text": "Dãy núi nào sau đây nằm ở khu vực Bắc Trung Bộ nước ta?",
    "options": [
     "Hoàng Liên Sơn.",
     "Trường Sơn Bắc.",
     "Con Voi.",
     "Ngân Sơn."
    ],
    "answer": 1,
    "explain": "Trường Sơn Bắc chạy dọc Bắc Trung Bộ; Hoàng Liên Sơn thuộc Tây Bắc, Con Voi và Ngân Sơn thuộc Bắc Bộ."
   },
   {
    "type": "mcq",
    "text": "Hai trung tâm nội thương lớn nhất nước ta hiện nay là",
    "options": [
     "Biên Hoà và Vũng Tàu.",
     "Hà Nội và Thành phố Hồ Chí Minh.",
     "Cần Thơ và Huế.",
     "Hải Phòng và Đà Nẵng."
    ],
    "answer": 1,
    "explain": "Hà Nội và Thành phố Hồ Chí Minh đông dân, mức sống cao, là đầu mối thương mại lớn nhất cả nước."
   },
   {
    "type": "mcq",
    "text": "Phần lớn lãnh thổ Tây Nam Á có nhiều hoang mạc, sông ngòi thưa thớt chủ yếu do nguyên nhân nào sau đây?",
    "options": [
     "Có lượng mưa rất lớn quanh năm.",
     "Địa hình thấp, bằng phẳng.",
     "Nằm sát cực Bắc.",
     "Khí hậu khô hạn do nằm trong đới nóng và chịu ảnh hưởng của khối khí lục địa."
    ],
    "answer": 3,
    "explain": "Tây Nam Á nằm trong đới nóng, chịu ảnh hưởng khối khí lục địa khô nên khô hạn, nhiều hoang mạc, sông ngòi thưa."
   },
   {
    "type": "mcq",
    "text": "Cho bảng số liệu sau:\nNhận xét nào sau đây đúng về hoạt động nội thương của một số vùng nước ta năm 2024?",
    "options": [
     "Đông Nam Bộ có tổng mức bán lẻ lớn nhất trong các vùng.",
     "Đồng bằng sông Hồng gấp trên 3 lần Đồng bằng sông Cửu Long.",
     "Tây Nguyên có tổng mức bán lẻ cao hơn Đồng bằng sông Cửu Long.",
     "Đồng bằng sông Cửu Long cao hơn Đồng bằng sông Hồng."
    ],
    "answer": 0,
    "explain": "Đông Nam Bộ 1 900 nghìn tỉ đồng là lớn nhất. Tây Nguyên (230) thấp hơn Đồng bằng sông Cửu Long (650); 1 400 : 650 ≈ 2,2 lần, chưa tới 3 lần.",
    "tables": [
     {
      "title": "Tổng mức bán lẻ hàng hóa và doanh thu dịch vụ tiêu dùng của một số vùng năm 2024",
      "unit": "nghìn tỉ đồng",
      "headers": [
       "Vùng",
       "Đông Nam Bộ",
       "Đồng bằng sông Hồng",
       "Đồng bằng sông Cửu Long",
       "Tây Nguyên"
      ],
      "rows": [
       [
        "Tổng mức bán lẻ",
        "1 900",
        "1 400",
        "650",
        "230"
       ]
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     }
    ]
   },
   {
    "type": "mcq",
    "text": "Nguyên nhân chủ yếu thúc đẩy thương mại điện tử ở nước ta phát triển nhanh là",
    "options": [
     "Số lượng chợ truyền thống tăng nhanh.",
     "Giá hàng hoá giảm liên tục.",
     "Dân số nông thôn tăng mạnh.",
     "Sự phát triển của công nghệ thông tin và internet."
    ],
    "answer": 3,
    "explain": "Công nghệ thông tin và internet phát triển là điều kiện nền tảng thúc đẩy thương mại điện tử."
   },
   {
    "type": "mcq",
    "text": "Điều kiện nào sau đây thuận lợi nhất cho sản xuất lúa ở Đồng bằng sông Cửu Long?",
    "options": [
     "Đất feralit chiếm diện tích lớn.",
     "Khí hậu có mùa đông lạnh.",
     "Đất phù sa rộng lớn, địa hình bằng phẳng, nguồn nước dồi dào.",
     "Địa hình đồi núi thấp xen đồng bằng."
    ],
    "answer": 2,
    "explain": "Đất phù sa rộng lớn, địa hình bằng phẳng và nguồn nước dồi dào là điều kiện thuận lợi nhất cho trồng lúa."
   },
   {
    "type": "mcq",
    "text": "Sự phân hoá thiên nhiên theo độ cao ở nước ta tạo nên các đai cao nào sau đây?",
    "options": [
     "Chỉ có một đai nhiệt đới gió mùa.",
     "Đai xích đạo và đai cận cực.",
     "Chỉ có đai cận nhiệt đới và đai ôn đới.",
     "Đai nhiệt đới gió mùa, đai cận nhiệt đới gió mùa trên núi và đai ôn đới gió mùa trên núi."
    ],
    "answer": 3,
    "explain": "Theo độ cao, thiên nhiên nước ta phân hoá thành đai nhiệt đới gió mùa, cận nhiệt đới gió mùa trên núi và ôn đới gió mùa trên núi."
   },
   {
    "type": "mcq",
    "text": "Giải pháp chủ yếu để nâng cao chất lượng sản phẩm du lịch nước ta là",
    "options": [
     "Đa dạng hoá sản phẩm, nâng cao chất lượng dịch vụ và nguồn nhân lực du lịch.",
     "Giảm đầu tư vào cơ sở vật chất.",
     "Hạn chế quảng bá hình ảnh du lịch.",
     "Chỉ tập trung vào một loại hình du lịch."
    ],
    "answer": 0,
    "explain": "Nâng cao chất lượng sản phẩm du lịch cần đa dạng hoá sản phẩm, cải thiện dịch vụ và nguồn nhân lực."
   },
   {
    "type": "mcq",
    "text": "Việc chuyển một phần đất trồng lúa kém hiệu quả sang trồng cây ăn quả ở Đồng bằng sông Cửu Long chủ yếu nhằm mục đích nào sau đây?",
    "options": [
     "Mở rộng đất ở đô thị.",
     "Tăng giá trị sản xuất và thích ứng với biến đổi khí hậu.",
     "Giảm dân số nông thôn.",
     "Giảm hoàn toàn sản xuất nông nghiệp."
    ],
    "answer": 1,
    "explain": "Cây ăn quả cho giá trị cao hơn lúa kém hiệu quả và dễ thích ứng với hạn, mặn hơn."
   },
   {
    "type": "mcq",
    "text": "Phát triển nội thương gắn với chuyển đổi số mang lại tác dụng chủ yếu nào sau đây?",
    "options": [
     "Mở rộng thị trường, giảm chi phí và nâng cao trải nghiệm người tiêu dùng.",
     "Thu hẹp thị trường tiêu thụ.",
     "Làm giảm vai trò của vận tải.",
     "Hạn chế sự cạnh tranh lành mạnh."
    ],
    "answer": 0,
    "explain": "Chuyển đổi số giúp mở rộng thị trường, giảm chi phí và tăng tiện ích cho người tiêu dùng."
   },
   {
    "type": "mcq",
    "text": "Để thu hẹp chênh lệch về hoạt động nội thương giữa các vùng, giải pháp quan trọng nhất là",
    "options": [
     "Tập trung toàn bộ đầu tư vào các đô thị lớn.",
     "Giảm số lượng siêu thị.",
     "Hạn chế phát triển thương mại điện tử.",
     "Đầu tư hạ tầng thương mại, giao thông và nâng cao mức sống dân cư các vùng khó khăn."
    ],
    "answer": 3,
    "explain": "Chênh lệch nội thương xuất phát từ trình độ phát triển và mức sống; cần đầu tư hạ tầng và nâng cao mức sống ở vùng khó khăn."
   },
   {
    "type": "mcq",
    "text": "Liên minh châu Âu (EU) được đánh giá là mô hình liên kết khu vực thành công chủ yếu vì",
    "options": [
     "có thị trường chung, đồng tiền chung, thể chế chặt chẽ và chính sách chung nhiều lĩnh vực.",
     "không có quy định chung nào.",
     "chỉ hợp tác về quân sự.",
     "các nước thành viên hoàn toàn độc lập về kinh tế."
    ],
    "answer": 0,
    "explain": "EU có thị trường chung, đồng tiền chung, thể chế chặt chẽ và chính sách chung nhiều lĩnh vực."
   },
   {
    "type": "mcq",
    "text": "Tỉ lệ dân thành thị ở Tây Ban Nha và Pháp cao hơn Ba Lan chủ yếu do nguyên nhân nào sau đây?",
    "options": [
     "Không có dân cư nông thôn.",
     "Chịu ảnh hưởng của khí hậu lạnh hơn.",
     "Diện tích lãnh thổ nhỏ hơn.",
     "Khác nhau về trình độ phát triển kinh tế và quá trình đô thị hoá."
    ],
    "answer": 3,
    "explain": "Tỉ lệ dân thành thị phụ thuộc vào trình độ phát triển kinh tế và lịch sử đô thị hoá của từng nước."
   },
   {
    "type": "mcq",
    "text": "Gió Tây khô nóng hoạt động ở Bắc Trung Bộ gây ra hậu quả nào đối với sản xuất nông nghiệp?",
    "options": [
     "Gây hạn hán, khô nóng, ảnh hưởng đến sinh trưởng của cây trồng.",
     "Làm tăng độ ẩm đất.",
     "Gây mưa lớn kéo dài.",
     "Làm giảm nhiệt độ mùa hạ."
    ],
    "answer": 0,
    "explain": "Gió Tây khô nóng gây hạn, nóng khô, làm cây trồng sinh trưởng kém."
   },
   {
    "type": "mcq",
    "text": "Việc thúc đẩy nền nông nghiệp xanh ở nước ta chủ yếu nhằm mục đích nào sau đây?",
    "options": [
     "Nâng cao chất lượng nông sản, giảm tác động môi trường và phát triển bền vững.",
     "Mở rộng diện tích đất bằng cách phá rừng.",
     "Giảm xuất khẩu nông sản.",
     "Tăng nhanh việc sử dụng phân bón hoá học."
    ],
    "answer": 0,
    "explain": "Nông nghiệp xanh nâng chất lượng nông sản, giảm tác động môi trường, hướng tới phát triển bền vững."
   },
   {
    "type": "tf",
    "text": "Dựa vào biểu đồ Dân số và GDP của một số quốc gia Tây Nam Á năm 2023 (I-rắc, I-xra-en, A-rập Xê-út, Cô-oét):",
    "options": [
     {
      "text": "a) Năm 2023, dân số và GDP của một số quốc gia Tây Nam Á có sự chênh lệch.",
      "answer": true,
      "explain": "Dân số và GDP/người của I-rắc, I-xra-en, A-rập Xê-út, Cô-oét đều khác nhau rõ rệt trên biểu đồ."
     },
     {
      "text": "b) Năm 2023, Cô-oét có GDP/người cao gấp 2 lần GDP/người của A-rập Xê-út.",
      "answer": false,
      "explain": "Sai: GDP/người của Cô-oét (37.204 USD) chỉ gấp khoảng 1,28 lần A-rập Xê-út (28.932 USD), không phải 2 lần."
     },
     {
      "text": "c) Năm 2023, I-xra-en có GDP/người cao nhất, I-rắc có GDP/người thấp nhất.",
      "answer": true,
      "explain": "Đúng: I-xra-en có GDP/người cao nhất (khoảng 54.200 USD), I-rắc thấp nhất (khoảng 5.900 USD)."
     },
     {
      "text": "d) Nguyên nhân chênh lệch GDP/người của một số quốc gia Tây Nam Á chủ yếu do sự bất ổn định về chính trị và biến động của giá dầu mỏ.",
      "answer": true,
      "explain": "Đúng: bất ổn chính trị và giá dầu mỏ biến động làm kinh tế các nước phát triển không đồng đều, nên GDP/người chênh lệch."
     }
    ],
    "charts": [
     {
      "kind": "bar",
      "title": "Dân số của một số quốc gia Tây Nam Á năm 2023",
      "unit": "triệu người",
      "categories": [
       "I-rắc",
       "I-xra-en",
       "A-rập Xê-út",
       "Cô-oét"
      ],
      "series": [
       {
        "name": "Dân số",
        "values": [
         45.5,
         9.8,
         36.9,
         4.3
        ]
       }
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     },
     {
      "kind": "bar",
      "title": "GDP bình quân đầu người của một số quốc gia Tây Nam Á năm 2023",
      "unit": "USD",
      "categories": [
       "I-rắc",
       "I-xra-en",
       "A-rập Xê-út",
       "Cô-oét"
      ],
      "series": [
       {
        "name": "GDP/người",
        "values": [
         5900,
         54200,
         28932,
         37204
        ]
       }
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     }
    ]
   },
   {
    "type": "tf",
    "text": "Dựa vào biểu đồ Số dân nông thôn và số dân thành thị của một số quốc gia EU năm 2024 (Ba Lan, I-ta-li-a, Tây Ban Nha, Pháp):",
    "options": [
     {
      "text": "a) Năm 2024, tỉ lệ dân nông thôn của I-ta-li-a cao hơn của Pháp 10,2%.",
      "answer": false,
      "explain": "Sai: tỉ lệ dân nông thôn của I-ta-li-a (30,3%) cao hơn Pháp (21,2%) là 9,1 điểm phần trăm, không phải 10,2%."
     },
     {
      "text": "b) Năm 2024, Tây Ban Nha có tỉ lệ dân thành thị lớn nhất, Ba Lan có tỉ lệ dân thành thị nhỏ nhất.",
      "answer": true,
      "explain": "Đúng: Tây Ban Nha có tỉ lệ dân thành thị lớn nhất (80,3%); Ba Lan nhỏ nhất (60,1%)."
     },
     {
      "text": "c) Năm 2024, số dân nông thôn của một số quốc gia EU có sự chênh lệch.",
      "answer": true,
      "explain": "Đúng: tỉ lệ dân nông thôn của các nước chênh lệch rõ (từ 19,7% đến 39,9%)."
     },
     {
      "text": "d) Tỉ lệ dân thành thị của một số quốc gia EU có sự chênh lệch chủ yếu do khác nhau về số lượng đô thị, quy mô nền kinh tế và lịch sử chuyển cư.",
      "answer": true,
      "explain": "Đúng: số lượng đô thị, quy mô nền kinh tế và lịch sử chuyển cư khác nhau làm tỉ lệ dân thành thị chênh lệch."
     }
    ],
    "charts": [
     {
      "kind": "stacked",
      "title": "Cơ cấu dân thành thị và dân nông thôn của một số quốc gia EU năm 2024",
      "unit": "%",
      "categories": [
       "Ba Lan",
       "I-ta-li-a",
       "Tây Ban Nha",
       "Pháp"
      ],
      "series": [
       {
        "name": "Dân thành thị",
        "values": [
         60.1,
         69.7,
         80.3,
         78.8
        ]
       },
       {
        "name": "Dân nông thôn",
        "values": [
         39.9,
         30.3,
         19.7,
         21.2
        ]
       }
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     }
    ]
   },
   {
    "type": "tf",
    "text": "Cho thông tin về đặc điểm tự nhiên của Miền Tây Bắc và Bắc Trung Bộ:",
    "options": [
     {
      "text": "a) Miền Tây Bắc và Bắc Trung Bộ có địa hình đa dạng.",
      "answer": true,
      "explain": "Đúng: miền có núi cao Hoàng Liên Sơn, Trường Sơn Bắc, đồng bằng ven biển hẹp nên địa hình đa dạng."
     },
     {
      "text": "b) Sự phân hoá đa dạng của thiên nhiên trong miền tạo thuận lợi chủ yếu để phát triển sản xuất quanh năm, thâm canh, tăng vụ, hình thành các vùng chuyên canh quy mô lớn.",
      "answer": false,
      "explain": "Sai: sản xuất quanh năm, thâm canh, tăng vụ, vùng chuyên canh quy mô lớn là thuận lợi của vùng đồng bằng, không phải vùng đồi núi."
     },
     {
      "text": "c) Gió Tây khô nóng hoạt động mạnh ở Bắc Trung Bộ vào nửa đầu mùa hạ do Tín phong bán cầu Nam kết hợp với dãy Trường Sơn Bắc.",
      "answer": false,
      "explain": "Sai: gió Tây khô nóng do gió mùa Tây Nam bị biến tính (hiệu ứng phơn) khi vượt dãy Trường Sơn, không phải do Tín phong bán cầu Nam."
     },
     {
      "text": "d) Sự xuất hiện của thành phần loài sinh vật ôn đới trong miền chủ yếu do tác động của hướng địa hình, gió đông bắc và vị trí xa chí tuyến.",
      "answer": false,
      "explain": "Sai: thành phần loài ôn đới chủ yếu do đai cao của địa hình (dãy Hoàng Liên Sơn), không phải do vị trí xa chí tuyến."
     }
    ]
   },
   {
    "type": "tf",
    "text": "Về tình hình sản xuất và ứng phó với biến đổi khí hậu tại Đồng bằng sông Cửu Long:",
    "options": [
     {
      "text": "a) Đồng bằng sông Cửu Long là vùng có diện tích và sản lượng lúa lớn nhất nước ta.",
      "answer": true,
      "explain": "Đúng: Đồng bằng sông Cửu Long có diện tích và sản lượng lúa lớn nhất cả nước."
     },
     {
      "text": "b) Khó khăn lớn nhất trong sản xuất lúa ở Đồng bằng sông Cửu Long là nhiệt độ trung bình năm tăng.",
      "answer": false,
      "explain": "Sai: khó khăn lớn nhất là xâm nhập mặn và thiếu nước ngọt vào mùa khô do biến đổi khí hậu, không phải nhiệt độ trung bình tăng."
     },
     {
      "text": "c) Vùng có sản lượng lúa lớn, chủ yếu do khí hậu cận xích đạo, nguồn nước phong phú, nhiều giống lúa chất lượng cao.",
      "answer": false,
      "explain": "Sai: yếu tố quan trọng nhất là diện tích đất phù sa rộng lớn và địa hình bằng phẳng."
     },
     {
      "text": "d) Giải pháp chủ yếu để sử dụng hiệu quả tài nguyên đất trong sản xuất lúa ở Đồng bằng sông Cửu Long là tăng vụ và chuyển đổi mục đích sử dụng đất.",
      "answer": true,
      "explain": "Đúng: tăng vụ và chuyển đổi mục đích sử dụng đất giúp dùng hiệu quả tài nguyên đất."
     }
    ]
   },
   {
    "type": "sa",
    "text": "Năm 2023, GDP của I-xra-en là 531,0 tỉ USD, dân số là 9,8 triệu người. Hãy tính GDP bình quân đầu người của I-xra-en năm 2023 (đơn vị: USD/người, làm tròn kết quả đến hàng đơn vị).",
    "answer": 54184,
    "explain": "GDP/người = 531,0 tỉ USD : 9,8 triệu người ≈ 54 184 USD/người.",
    "unit": "USD/người"
   },
   {
    "type": "sa",
    "text": "Năm 2024, Pháp có 68,4 triệu dân, trong đó dân thành thị chiếm 78,8%. Hãy tính số dân nông thôn của Pháp (đơn vị: triệu người, làm tròn kết quả đến một chữ số thập phân).",
    "answer": 14.5,
    "explain": "Dân nông thôn = 68,4 × (100 – 78,8)% = 68,4 × 21,2% ≈ 14,5 triệu người.",
    "unit": "triệu người"
   },
   {
    "type": "sa",
    "text": "Nhiệt độ trung bình tháng 1 của một địa điểm là 18,0 °C, tháng 7 là 29,4 °C. Hãy tính biên độ nhiệt độ năm của địa điểm đó (đơn vị: °C, lấy kết quả đến một chữ số thập phân).",
    "answer": 11.4,
    "explain": "Biên độ nhiệt độ năm = 29,4 – 18,0 = 11,4 °C.",
    "unit": "°C"
   },
   {
    "type": "sa",
    "text": "Tổng mức bán lẻ hàng hóa và doanh thu dịch vụ tiêu dùng của nước ta năm 2015 là 3 224 nghìn tỉ đồng, năm 2024 là 6 391 nghìn tỉ đồng. Hãy cho biết năm 2024 so với năm 2015 tăng bao nhiêu lần (làm tròn kết quả đến hai chữ số thập phân).",
    "answer": 1.98,
    "explain": "6 391 : 3 224 ≈ 1,98 lần.",
    "unit": "lần"
   },
   {
    "type": "sa",
    "text": "Năm 2024, diện tích lúa của Đồng bằng sông Cửu Long là 3,9 triệu ha, sản lượng lúa là 24,3 triệu tấn. Hãy tính năng suất lúa của vùng (đơn vị: tạ/ha, làm tròn kết quả đến một chữ số thập phân).",
    "answer": 62.3,
    "explain": "Năng suất = 243 triệu tạ : 3,9 triệu ha ≈ 62,3 tạ/ha.",
    "unit": "tạ/ha"
   },
   {
    "type": "sa",
    "text": "Năm 2024, doanh thu du lịch của nước ta là 840 nghìn tỉ đồng, GDP là 12 847,6 nghìn tỉ đồng. Hãy tính tỉ trọng doanh thu du lịch so với GDP (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).",
    "answer": 6.5,
    "explain": "Tỉ trọng = 840 : 12 847,6 × 100 ≈ 6,5%.",
    "unit": "%"
   }
  ]
 },
 "2": {
  "label": "Đề thi thử số 2 – Cấu trúc 2026",
  "questions": [
   {
    "type": "mcq",
    "text": "Cho biểu đồ sau:\nNhận xét nào sau đây đúng về diện tích cây ăn quả của Đồng bằng sông Cửu Long?",
    "options": [
     "Năm 2024 diện tích gấp 2 lần năm 2015.",
     "Năm 2020 diện tích tăng 20 nghìn ha so với năm 2015.",
     "Giai đoạn 2020 – 2024 diện tích tăng nhanh hơn giai đoạn 2015 – 2020.",
     "Diện tích cây ăn quả tăng liên tục qua các năm."
    ],
    "answer": 3,
    "explain": "Diện tích tăng 290 → 360 → 410 nghìn ha. Giai đoạn 2015 – 2020 tăng 70 nghìn ha (không phải 20); 410 : 290 ≈ 1,4 lần; giai đoạn 2020 – 2024 chỉ tăng 50 nghìn ha, ít hơn giai đoạn trước.",
    "charts": [
     {
      "kind": "bar",
      "title": "Diện tích cây ăn quả của Đồng bằng sông Cửu Long",
      "unit": "nghìn ha",
      "categories": [
       "2015",
       "2020",
       "2024"
      ],
      "series": [
       {
        "name": "Diện tích cây ăn quả",
        "values": [
         290,
         360,
         410
        ]
       }
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     }
    ]
   },
   {
    "type": "mcq",
    "text": "Hiện nay Liên minh châu Âu (EU) có bao nhiêu quốc gia thành viên?",
    "options": [
     "25 quốc gia.",
     "27 quốc gia.",
     "28 quốc gia.",
     "30 quốc gia."
    ],
    "answer": 1,
    "explain": "Sau khi Anh rời EU năm 2020, EU còn 27 quốc gia thành viên."
   },
   {
    "type": "mcq",
    "text": "Trụ sở chính của các cơ quan đầu não Liên minh châu Âu đặt ở thủ đô nào?",
    "options": [
     "Pa-ri.",
     "Bruy-xen.",
     "Béc-lin.",
     "Rô-ma."
    ],
    "answer": 1,
    "explain": "Bruy-xen (Bỉ) là nơi đặt Ủy ban châu Âu và nhiều cơ quan chính của EU."
   },
   {
    "type": "mcq",
    "text": "Vùng đồi núi nước ta phân bố chủ yếu ở phía nào?",
    "options": [
     "Phía đông và đông nam.",
     "Phía nam.",
     "Phía tây và tây bắc.",
     "Ven biển phía đông."
    ],
    "answer": 2,
    "explain": "Đồi núi chiếm 3/4 diện tích, tập trung ở phía tây và tây bắc; đồng bằng ở phía đông và đông nam."
   },
   {
    "type": "mcq",
    "text": "Siêu thị và trung tâm thương mại thuộc hình thức hoạt động nào sau đây của nội thương?",
    "options": [
     "Vận tải hàng hoá.",
     "Sản xuất công nghiệp.",
     "Bán lẻ hàng hoá.",
     "Tín dụng ngân hàng."
    ],
    "answer": 2,
    "explain": "Siêu thị, trung tâm thương mại là hình thức bán lẻ hiện đại, ngày càng phát triển."
   },
   {
    "type": "mcq",
    "text": "Tây Nam Á có vị trí địa chính trị quan trọng chủ yếu do nguyên nhân nào sau đây?",
    "options": [
     "Nằm ở ngã ba của ba châu lục Á, Âu, Phi và có nguồn dầu mỏ lớn.",
     "Nằm hoàn toàn trong vùng hàn đới.",
     "Không có tài nguyên khoáng sản.",
     "Có diện tích lớn nhất thế giới."
    ],
    "answer": 0,
    "explain": "Vị trí ngã ba Á – Âu – Phi cùng dầu mỏ khiến khu vực có ý nghĩa chiến lược về kinh tế và chính trị."
   },
   {
    "type": "mcq",
    "text": "Cho bảng số liệu sau:\nNhận xét nào sau đây đúng về chế độ nhiệt của Lạng Sơn và Sơn La?",
    "options": [
     "Nhiệt độ tháng 1 của Sơn La thấp hơn Lạng Sơn.",
     "Sơn La có nhiệt độ tháng 1 cao hơn và biên độ nhiệt độ năm nhỏ hơn Lạng Sơn.",
     "Biên độ nhiệt độ năm của Sơn La lớn hơn Lạng Sơn.",
     "Lạng Sơn có nhiệt độ tháng 7 thấp hơn Sơn La."
    ],
    "answer": 1,
    "explain": "Biên độ nhiệt: Lạng Sơn 27,4 – 13,2 = 14,2 °C; Sơn La 25,8 – 15,1 = 10,7 °C. Sơn La (Tây Bắc) ấm hơn vào mùa đông và có biên độ nhỏ hơn do dãy Hoàng Liên Sơn chắn gió mùa Đông Bắc.",
    "tables": [
     {
      "title": "Nhiệt độ trung bình tháng 1 và tháng 7 của Lạng Sơn và Sơn La",
      "unit": "°C",
      "headers": [
       "Địa điểm",
       "Tháng 1",
       "Tháng 7"
      ],
      "rows": [
       [
        "Lạng Sơn (Đông Bắc)",
        "13,2",
        "27,4"
       ],
       [
        "Sơn La (Tây Bắc)",
        "15,1",
        "25,8"
       ]
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     }
    ]
   },
   {
    "type": "mcq",
    "text": "Sự khác biệt thiên nhiên giữa vùng núi Đông Bắc và Tây Bắc chủ yếu do nhân tố nào sau đây?",
    "options": [
     "Tác động của dòng biển nóng.",
     "Hướng địa hình, đặc biệt là dãy Hoàng Liên Sơn chắn gió mùa Đông Bắc.",
     "Sự khác nhau về diện tích rừng.",
     "Chênh lệch số dân giữa hai vùng."
    ],
    "answer": 1,
    "explain": "Dãy Hoàng Liên Sơn chắn gió mùa Đông Bắc nên Tây Bắc ấm hơn Đông Bắc."
   },
   {
    "type": "mcq",
    "text": "Đồng bằng ven biển miền Trung nước ta có đặc điểm nổi bật nào sau đây?",
    "options": [
     "Nằm sâu trong nội địa.",
     "Chủ yếu do phù sa sông lớn bồi tụ rộng.",
     "Rộng lớn, bằng phẳng, ít bị chia cắt.",
     "Hẹp ngang, bị chia cắt do núi đâm sát biển."
    ],
    "answer": 3,
    "explain": "Dãy núi đâm ngang ra biển làm đồng bằng ven biển miền Trung nhỏ hẹp và bị chia cắt."
   },
   {
    "type": "mcq",
    "text": "Hoạt động nội thương giữa các vùng nước ta phân hoá chủ yếu do nguyên nhân nào sau đây?",
    "options": [
     "Khác nhau về trình độ phát triển kinh tế và mức sống dân cư.",
     "Khác nhau về hướng địa hình.",
     "Khác nhau về diện tích rừng.",
     "Khác nhau về số lượng sông ngòi."
    ],
    "answer": 0,
    "explain": "Vùng kinh tế phát triển, thu nhập cao có sức mua lớn nên nội thương phát triển mạnh hơn."
   },
   {
    "type": "mcq",
    "text": "Giải pháp nào sau đây góp phần phát triển du lịch xanh ở nước ta?",
    "options": [
     "Xây dựng thêm công trình lớn trong khu bảo tồn.",
     "Hạn chế quản lí khách du lịch.",
     "Bảo vệ môi trường, phát triển du lịch có trách nhiệm và sử dụng năng lượng sạch.",
     "Khai thác tối đa tài nguyên để thu hút khách."
    ],
    "answer": 2,
    "explain": "Du lịch xanh gắn với bảo vệ môi trường, sử dụng tài nguyên hợp lí và có trách nhiệm với cộng đồng."
   },
   {
    "type": "mcq",
    "text": "Việc ứng dụng đặt phòng trực tuyến, tham quan thực tế ảo trong du lịch có tác dụng chủ yếu nào sau đây?",
    "options": [
     "Giảm vai trò của hướng dẫn viên hoàn toàn.",
     "Làm giảm số lượng khách du lịch.",
     "Hạn chế quảng bá điểm đến.",
     "Gia tăng trải nghiệm, thuận tiện cho du khách và mở rộng thị trường."
    ],
    "answer": 3,
    "explain": "Công nghệ số giúp du khách tiếp cận dịch vụ dễ dàng, nâng cao trải nghiệm và mở rộng thị trường."
   },
   {
    "type": "mcq",
    "text": "Giải pháp chủ yếu để sản xuất cây ăn quả ở Đồng bằng sông Cửu Long phát triển bền vững là",
    "options": [
     "áp dụng tiêu chuẩn sản xuất an toàn, truy xuất nguồn gốc và liên kết tiêu thụ.",
     "chỉ xuất khẩu tươi, không chế biến.",
     "tăng sử dụng thuốc bảo vệ thực vật.",
     "mở rộng diện tích trên đất nhiễm mặn."
    ],
    "answer": 0,
    "explain": "Sản xuất an toàn, truy xuất nguồn gốc và liên kết chuỗi giá trị nâng chất lượng, ổn định đầu ra."
   },
   {
    "type": "mcq",
    "text": "Để phát triển nội thương ở khu vực miền núi, nước ta cần ưu tiên giải pháp nào sau đây?",
    "options": [
     "Hoàn thiện hạ tầng giao thông, chợ và mạng lưới phân phối.",
     "Hạn chế buôn bán giữa các vùng.",
     "Giảm sản xuất hàng hoá.",
     "Giảm đầu tư giao thông."
    ],
    "answer": 0,
    "explain": "Hạ tầng giao thông và mạng lưới phân phối là điều kiện để hàng hoá lưu thông ở miền núi."
   },
   {
    "type": "mcq",
    "text": "Việc Anh rời khỏi EU (Brexit) cho thấy điều nào sau đây về liên kết khu vực?",
    "options": [
     "Liên kết khu vực có thể gặp thách thức khi lợi ích quốc gia và lợi ích chung chưa hài hoà.",
     "Liên kết khu vực không có thách thức nào.",
     "EU không còn thị trường chung.",
     "Mọi nước đều muốn rời EU."
    ],
    "answer": 0,
    "explain": "Brexit phản ánh mâu thuẫn giữa lợi ích quốc gia và lợi ích chung trong liên kết khu vực."
   },
   {
    "type": "mcq",
    "text": "Lũ quét, sạt lở đất ở vùng núi Tây Bắc gia tăng chủ yếu do nguyên nhân nào sau đây?",
    "options": [
     "Địa hình bằng phẳng.",
     "Sông ngòi ngắn và ít nước.",
     "Địa hình dốc, mưa lớn tập trung và suy giảm độ che phủ rừng.",
     "Khí hậu khô hạn quanh năm."
    ],
    "answer": 2,
    "explain": "Địa hình dốc kết hợp mưa lớn và mất rừng làm tăng nguy cơ lũ quét, sạt lở."
   },
   {
    "type": "mcq",
    "text": "Mô hình lúa – tôm ở vùng ven biển Đồng bằng sông Cửu Long thể hiện điều gì?",
    "options": [
     "Sự thích ứng với xâm nhập mặn và tận dụng điều kiện tự nhiên để tăng hiệu quả kinh tế.",
     "Sự phụ thuộc hoàn toàn vào thời tiết.",
     "Việc bỏ hoang đất nhiễm mặn.",
     "Giảm đa dạng sinh kế."
    ],
    "answer": 0,
    "explain": "Luân canh lúa – tôm tận dụng nước ngọt mùa mưa và nước lợ mùa khô, thích ứng xâm nhập mặn."
   },
   {
    "type": "mcq",
    "text": "Phát triển du lịch cộng đồng ở miền núi có ý nghĩa chủ yếu nào sau đây?",
    "options": [
     "Hạn chế khách đến thăm.",
     "Tạo sinh kế cho người dân và góp phần bảo tồn văn hoá, môi trường.",
     "Giảm thu nhập của người dân.",
     "Làm mất bản sắc văn hoá địa phương."
    ],
    "answer": 1,
    "explain": "Du lịch cộng đồng đem lại thu nhập trực tiếp cho dân địa phương và khuyến khích gìn giữ văn hoá, môi trường."
   },
   {
    "type": "tf",
    "text": "Cho biểu đồ tổng mức bán lẻ hàng hoá và doanh thu dịch vụ tiêu dùng của nước ta, giai đoạn 2015 – 2024:",
    "options": [
     {
      "text": "a) Giai đoạn 2015 – 2024, tổng mức bán lẻ hàng hoá và doanh thu dịch vụ tiêu dùng của nước ta tăng liên tục.",
      "answer": true,
      "explain": "Đúng: giá trị tăng qua các năm 2015, 2019, 2023, 2024 (3.224 → 4.942 → 6.231 → 6.391 nghìn tỉ đồng)."
     },
     {
      "text": "b) Năm 2019, tổng mức bán lẻ hàng hoá và doanh thu dịch vụ tiêu dùng cao hơn năm 2023.",
      "answer": false,
      "explain": "Sai: năm 2019 (4.942 nghìn tỉ đồng) thấp hơn năm 2023 (6.231 nghìn tỉ đồng)."
     },
     {
      "text": "c) Năm 2024, tổng mức bán lẻ hàng hoá và doanh thu dịch vụ tiêu dùng gấp khoảng 2 lần năm 2015.",
      "answer": true,
      "explain": "Đúng: 6.391 : 3.224 ≈ 1,98, tức gấp khoảng 2 lần."
     },
     {
      "text": "d) Tổng mức bán lẻ tăng chủ yếu do thu nhập và mức sống dân cư tăng, mạng lưới phân phối hiện đại mở rộng và thương mại điện tử phát triển.",
      "answer": true,
      "explain": "Đúng: thu nhập tăng, hệ thống siêu thị – trung tâm thương mại mở rộng và thương mại điện tử phát triển cùng thúc đẩy tăng trưởng bán lẻ."
     }
    ],
    "charts": [
     {
      "kind": "bar",
      "title": "Tổng mức bán lẻ hàng hoá và doanh thu dịch vụ tiêu dùng của Việt Nam, giai đoạn 2015 – 2024",
      "unit": "nghìn tỉ đồng",
      "categories": [
       "2015",
       "2019",
       "2023",
       "2024"
      ],
      "series": [
       {
        "name": "Tổng mức bán lẻ",
        "values": [
         3224,
         4942,
         6231,
         6391
        ]
       }
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     }
    ]
   },
   {
    "type": "tf",
    "text": "Cho thông tin về sự phân hóa đa dạng theo Đông - Tây của thiên nhiên nước ta:",
    "options": [
     {
      "text": "a) Vùng đồi núi phân bố chủ yếu ở phía tây và tây bắc của nước ta.",
      "answer": true,
      "explain": "Đúng: vùng đồi núi phân bố chủ yếu ở phía tây và tây bắc nước ta."
     },
     {
      "text": "b) Sự khác biệt về khí hậu giữa vùng núi Đông Bắc với Tây Bắc chủ yếu do tác động của hướng địa hình kết hợp với dải hội tụ nhiệt đới và gió đông nam.",
      "answer": false,
      "explain": "Sai: khác biệt khí hậu Đông Bắc – Tây Bắc chủ yếu do hướng dãy Hoàng Liên Sơn chắn gió mùa Đông Bắc, không phải do dải hội tụ nhiệt đới và gió đông nam."
     },
     {
      "text": "c) Vùng đồng bằng ven biển nước ta có địa hình thấp, khá bằng phẳng do thường xuyên chịu tác động trực tiếp từ biển và vùng đồi núi liền kề.",
      "answer": false,
      "explain": "Sai: đồng bằng ven biển miền Trung hẹp ngang và bị chia cắt do núi đâm sát biển, không phải thấp và khá bằng phẳng."
     },
     {
      "text": "d) Sự phân hóa của khí hậu theo Đông – Tây tạo thuận lợi chủ yếu để nước ta đổi mới cơ cấu cây trồng, nâng cao chất lượng nông sản đặc sản và phát triển nền nông nghiệp xanh.",
      "answer": true,
      "explain": "Đúng: phân hoá khí hậu Đông – Tây giúp đổi mới cơ cấu cây trồng, nâng cao chất lượng nông sản đặc sản và phát triển nông nghiệp xanh."
     }
    ]
   },
   {
    "type": "tf",
    "text": "Cho biểu đồ số lượt khách du lịch nội địa của nước ta, giai đoạn 2019 – 2024:",
    "options": [
     {
      "text": "a) Năm 2022, số lượt khách du lịch nội địa cao hơn năm 2019.",
      "answer": true,
      "explain": "Đúng: năm 2022 đạt 101,3 triệu lượt, cao hơn năm 2019 (85,0 triệu lượt)."
     },
     {
      "text": "b) Năm 2020 là năm có số lượt khách du lịch nội địa thấp nhất trong giai đoạn.",
      "answer": false,
      "explain": "Sai: năm 2021 (40,0 triệu lượt) mới là năm thấp nhất, năm 2020 là 56,0 triệu lượt."
     },
     {
      "text": "c) Năm 2024, số lượt khách du lịch nội địa gấp khoảng 1,3 lần năm 2019.",
      "answer": true,
      "explain": "Đúng: 110,6 : 85,0 ≈ 1,3, tức gấp khoảng 1,3 lần."
     },
     {
      "text": "d) Số lượt khách nội địa tăng nhanh giai đoạn 2021 – 2024 chủ yếu do dịch bệnh làm tăng nhu cầu đi du lịch xa.",
      "answer": false,
      "explain": "Sai: sau dịch, khách nội địa tăng chủ yếu nhờ kiểm soát dịch bệnh, các chính sách kích cầu, thu nhập và hạ tầng giao thông phát triển, không phải do dịch bệnh làm tăng nhu cầu."
     }
    ],
    "charts": [
     {
      "kind": "bar",
      "title": "Số lượt khách du lịch nội địa của Việt Nam, giai đoạn 2019 – 2024",
      "unit": "triệu lượt",
      "categories": [
       "2019",
       "2020",
       "2021",
       "2022",
       "2023",
       "2024"
      ],
      "series": [
       {
        "name": "Khách nội địa",
        "values": [
         85,
         56,
         40,
         101.3,
         108,
         110.6
        ]
       }
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     }
    ]
   },
   {
    "type": "tf",
    "text": "Về định hướng chuyển đổi và phát triển cây ăn quả tại Đồng bằng sông Cửu Long:",
    "options": [
     {
      "text": "a) Các kĩ thuật canh tác hiện đại được áp dụng trong sản xuất cây ăn quả của vùng chủ yếu nhằm nâng cao năng lực quản lí các sản phẩm đặc thù, phát triển mạng lưới cung ứng nông sản chất lượng cao.",
      "answer": false,
      "explain": "Sai: kĩ thuật canh tác hiện đại nhằm trực tiếp nâng cao năng suất, chất lượng và thích ứng biến đổi khí hậu."
     },
     {
      "text": "b) Đồng bằng sông Cửu Long có cơ cấu cây ăn quả đa dạng.",
      "answer": true,
      "explain": "Đúng: Đồng bằng sông Cửu Long có cơ cấu cây ăn quả đa dạng."
     },
     {
      "text": "c) Sản xuất cây ăn quả của vùng đang phát triển theo hướng nâng cao chất lượng và đảm bảo an toàn cho người tiêu dùng.",
      "answer": true,
      "explain": "Đúng: sản xuất cây ăn quả đang hướng tới chất lượng cao và an toàn cho người tiêu dùng."
     },
     {
      "text": "d) Diện tích cây ăn quả của vùng tăng chủ yếu do áp dụng quy trình chăm sóc theo hướng bền vững, đa dạng hóa cơ cấu cây trồng.",
      "answer": false,
      "explain": "Sai: diện tích tăng chủ yếu do chuyển đổi từ đất trồng lúa kém hiệu quả sang cây ăn quả có giá trị cao hơn."
     }
    ]
   },
   {
    "type": "sa",
    "text": "Năm 2024, Ba Lan có 36,6 triệu dân, tỉ lệ dân nông thôn là 39,9%. Hãy tính số dân nông thôn của Ba Lan (đơn vị: triệu người, làm tròn kết quả đến một chữ số thập phân).",
    "answer": 14.6,
    "explain": "Dân nông thôn = 36,6 × 39,9% ≈ 14,6 triệu người.",
    "unit": "triệu người"
   },
   {
    "type": "sa",
    "text": "Năm 2024, tỉ lệ dân nông thôn của I-ta-li-a là 30,3%, của Pháp là 21,2%. Hãy tính tỉ lệ dân nông thôn của I-ta-li-a cao hơn Pháp bao nhiêu điểm phần trăm (lấy kết quả đến một chữ số thập phân).",
    "answer": 9.1,
    "explain": "30,3 – 21,2 = 9,1 điểm phần trăm.",
    "unit": "điểm %"
   },
   {
    "type": "sa",
    "text": "Năm 2023, I-rắc có GDP là 267 tỉ USD, dân số là 45,5 triệu người. Hãy tính GDP bình quân đầu người của I-rắc (đơn vị: USD/người, làm tròn kết quả đến hàng đơn vị).",
    "answer": 5868,
    "explain": "GDP/người = 267 tỉ USD : 45,5 triệu người ≈ 5 868 USD/người.",
    "unit": "USD/người"
   },
   {
    "type": "sa",
    "text": "Số lượt khách du lịch nội địa của nước ta năm 2019 là 85,0 triệu lượt, năm 2024 là 110,6 triệu lượt. Hãy tính tốc độ tăng của năm 2024 so với năm 2019 (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).",
    "answer": 30.1,
    "explain": "Tốc độ tăng = (110,6 – 85,0) : 85,0 × 100 ≈ 30,1%.",
    "unit": "%"
   },
   {
    "type": "sa",
    "text": "Diện tích cây ăn quả của Đồng bằng sông Cửu Long năm 2015 là 290 nghìn ha, năm 2024 là 410 nghìn ha. Hãy tính tốc độ tăng diện tích của năm 2024 so với năm 2015 (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).",
    "answer": 41.4,
    "explain": "Tốc độ tăng = (410 – 290) : 290 × 100 ≈ 41,4%.",
    "unit": "%"
   },
   {
    "type": "sa",
    "text": "Nhiệt độ trung bình năm ở chân núi là 24,0 °C. Biết cứ lên cao 100 m nhiệt độ giảm 0,6 °C, hãy tính nhiệt độ trung bình năm ở độ cao 1 800 m (đơn vị: °C, lấy kết quả đến một chữ số thập phân).",
    "answer": 13.2,
    "explain": "Nhiệt độ giảm 0,6 × 18 = 10,8 °C nên còn 24,0 – 10,8 = 13,2 °C.",
    "unit": "°C"
   }
  ]
 },
 "7": {
  "label": "Đề thi thử số 7 – Cấu trúc 2026",
  "questions": [
   {
    "type": "mcq",
    "text": "Cho biểu đồ sau:\nNhận xét nào sau đây đúng về mật độ dân số của một số vùng nước ta năm 2024?",
    "options": [
     "Đông Nam Bộ có mật độ dân số thấp hơn Đồng bằng sông Cửu Long.",
     "Tây Nguyên có mật độ dân số cao hơn Trung du và miền núi phía Bắc.",
     "Mật độ dân số của Đồng bằng sông Hồng gấp trên 2 lần Đồng bằng sông Cửu Long.",
     "Đồng bằng sông Cửu Long có mật độ dân số cao nhất."
    ],
    "answer": 2,
    "explain": "1 100 : 425 ≈ 2,6 lần. Tây Nguyên (112) thấp hơn Trung du và miền núi phía Bắc (140); Đông Nam Bộ (780) cao hơn Đồng bằng sông Cửu Long; Đồng bằng sông Hồng cao nhất.",
    "charts": [
     {
      "kind": "bar",
      "title": "Mật độ dân số của một số vùng ở nước ta năm 2024",
      "unit": "người/km²",
      "categories": [
       "Đồng bằng sông Hồng",
       "Đông Nam Bộ",
       "Đồng bằng sông Cửu Long",
       "Trung du và miền núi phía Bắc",
       "Tây Nguyên"
      ],
      "series": [
       {
        "name": "Mật độ dân số",
        "values": [
         1100,
         780,
         425,
         140,
         112
        ]
       }
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     }
    ]
   },
   {
    "type": "mcq",
    "text": "Hệ toạ độ địa lí trên đất liền của nước ta có điểm cực Bắc nằm ở vĩ độ nào?",
    "options": [
     "8°34'B",
     "23°23'B",
     "102°09'Đ",
     "109°28'Đ"
    ],
    "answer": 1
   },
   {
    "type": "mcq",
    "text": "Theo cấu tạo vỏ Trái Đất, ranh giới giữa vỏ Trái Đất và manti được gọi là gì?",
    "options": [
     "Mặt Mô-hô.",
     "Tầng trầm tích.",
     "Mặt đứt gãy.",
     "Mặt phân cách lục địa."
    ],
    "answer": 0
   },
   {
    "type": "mcq",
    "text": "Tổ chức Thương mại Thế giới được viết tắt bằng tiếng Anh là gì?",
    "options": [
     "APEC",
     "IMF",
     "WTO",
     "ASEAN"
    ],
    "answer": 2
   },
   {
    "type": "mcq",
    "text": "Năm 2024, tổng dân số nước ta đạt khoảng bao nhiêu triệu người?",
    "options": [
     "96,5",
     "101,3",
     "86,0",
     "115,2"
    ],
    "answer": 1
   },
   {
    "type": "mcq",
    "text": "Gió Tây ôn đới có đặc điểm nào sau đây?",
    "options": [
     "Thổi từ áp cao cực về áp thấp ôn đới, rất lạnh và khô.",
     "Thổi thay đổi hướng theo chu kì ngày đêm ở vùng ven biển.",
     "Thổi từ áp cao chí tuyến về áp thấp xích đạo, khô hạn quanh năm.",
     "Thổi từ áp cao cận chí tuyến về áp thấp ôn đới, thường có độ ẩm cao, gây mưa."
    ],
    "answer": 3
   },
   {
    "type": "mcq",
    "text": "Cho bảng số liệu sau:\nNhận xét nào sau đây đúng về gia tăng dân số tự nhiên của các vùng năm 2024?",
    "options": [
     "Tây Nguyên có gia tăng dân số tự nhiên cao nhất.",
     "Đồng bằng sông Cửu Long có gia tăng dân số tự nhiên cao hơn Đồng bằng sông Hồng.",
     "Đồng bằng sông Hồng có gia tăng dân số tự nhiên thấp nhất.",
     "Gia tăng dân số tự nhiên của Đồng bằng sông Hồng gấp 2 lần Tây Nguyên."
    ],
    "answer": 0,
    "explain": "Gia tăng tự nhiên = sinh thô – chết thô: Tây Nguyên 12,4‰; Đồng bằng sông Hồng 8,2‰; Đồng bằng sông Cửu Long 6,9‰ (thấp nhất).",
    "tables": [
     {
      "title": "Tỉ suất sinh thô và tỉ suất chết thô của một số vùng năm 2024",
      "unit": "‰",
      "headers": [
       "Vùng",
       "Tỉ suất sinh thô",
       "Tỉ suất chết thô"
      ],
      "rows": [
       [
        "Đồng bằng sông Hồng",
        "14,9",
        "6,7"
       ],
       [
        "Tây Nguyên",
        "18,5",
        "6,1"
       ],
       [
        "Đồng bằng sông Cửu Long",
        "13,8",
        "6,9"
       ]
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     }
    ]
   },
   {
    "type": "mcq",
    "text": "Nguyên nhân chính hình thành nên đai áp thấp xích đạo trên Trái Đất là gì?",
    "options": [
     "Do nhiệt độ cao quanh năm, hơi nước bốc lên mạnh.",
     "Do lực li tâm của Trái Đất lớn nhất ở Xích đạo.",
     "Do sự hạ lún của các mảng kiến tạo.",
     "Do các dòng biển lạnh chảy ngang qua."
    ],
    "answer": 0
   },
   {
    "type": "mcq",
    "text": "Đặc điểm nào chứng tỏ đô thị hoá ở nước ta đang diễn ra nhanh nhưng trình độ chưa cao?",
    "options": [
     "Tỉ lệ dân thành thị rất cao, trên 80%.",
     "Không gian đô thị thu hẹp, chỉ tập trung ở vùng núi.",
     "Tỉ lệ dân thành thị tăng nhưng cơ sở hạ tầng đô thị nhiều nơi còn quá tải.",
     "Toàn bộ dân đô thị đều làm việc trong ngành nông nghiệp."
    ],
    "answer": 2
   },
   {
    "type": "mcq",
    "text": "Nguyên nhân chủ yếu làm cho khí hậu khu vực Tây Nam Á rất khô hạn là do đâu?",
    "options": [
     "Nằm trong đới khí hậu cận nhiệt và nhiệt đới, chịu ảnh hưởng của các khối khí lục địa.",
     "Nằm hoàn toàn ở vùng cực có nhiệt độ thấp.",
     "Có lượng mưa trung bình năm trên 2000mm.",
     "Chịu ảnh hưởng của gió Tây ôn đới quanh năm."
    ],
    "answer": 0
   },
   {
    "type": "mcq",
    "text": "Để giải quyết vấn đề thiếu hụt lao động chuyên môn kĩ thuật cao trong bối cảnh công nghiệp 4.0, giải pháp thiết thực nhất của nước ta là gì?",
    "options": [
     "Hạn chế sự phát triển của khu vực dịch vụ.",
     "Đẩy mạnh xuất khẩu lao động phổ thông.",
     "Tăng tỉ suất sinh thô ở nông thôn.",
     "Đổi mới và nâng cao chất lượng giáo dục, đào tạo nghề gắn với nhu cầu thị trường."
    ],
    "answer": 3
   },
   {
    "type": "mcq",
    "text": "Việc chuyển đổi cơ cấu cây trồng từ lúa nước sang các loại cây ăn quả đặc sản ở Đồng bằng sông Cửu Long hiện nay nhằm mục đích chính là gì?",
    "options": [
     "Phục hồi diện tích rừng nguyên sinh.",
     "Giảm hoàn toàn sản lượng gạo xuất khẩu.",
     "Thích ứng với biến đổi khí hậu (hạn mặn) và nâng cao hiệu quả kinh tế.",
     "Hạn chế sự phát triển của công nghiệp chế biến."
    ],
    "answer": 2
   },
   {
    "type": "mcq",
    "text": "Tác động tiêu cực của toàn cầu hoá kinh tế đối với các nước đang phát triển như Việt Nam là gì?",
    "options": [
     "Không thể thu hút được vốn đầu tư nước ngoài.",
     "Gia tăng khoảng cách giàu nghèo và đối mặt với sự cạnh tranh gay gắt từ các tập đoàn đa quốc gia.",
     "Đóng cửa hoàn toàn với thị trường thế giới.",
     "Lực lượng sản xuất bị đình trệ hoàn toàn."
    ],
    "answer": 1
   },
   {
    "type": "mcq",
    "text": "Khí hậu nhiệt đới ẩm gió mùa đem lại khó khăn lớn nhất nào cho ngành giao thông vận tải nước ta?",
    "options": [
     "Cản trở việc xây dựng đường hầm xuyên núi.",
     "Thường xuyên xảy ra thiên tai (bão, lũ lụt, sạt lở đất) phá huỷ hạ tầng giao thông.",
     "Gây ra hiện tượng sa mạc hoá lấp kín đường sá.",
     "Làm đóng băng các hải cảng vào mùa đông."
    ],
    "answer": 1
   },
   {
    "type": "mcq",
    "text": "Sự khác biệt cơ bản về nguyên nhân tạo mùa khô ở Nam Bộ và mùa đông lạnh ở miền Bắc nước ta là gì?",
    "options": [
     "Cả hai đều do bão nhiệt đới gây ra.",
     "Mùa khô Nam Bộ do Tín phong bán cầu Bắc chi phối, mùa đông miền Bắc do gió mùa Đông Bắc mang khối khí lạnh tràn về.",
     "Mùa khô Nam Bộ do gió Tây Nam, mùa đông miền Bắc do gió Đông Nam.",
     "Mùa khô Nam Bộ do dòng biển lạnh, mùa đông miền Bắc do độ cao địa hình."
    ],
    "answer": 1
   },
   {
    "type": "mcq",
    "text": "Trong bối cảnh biến đổi khí hậu, nước biển dâng, giải pháp mang tính chiến lược lâu dài đối với nền kinh tế vùng Đồng bằng sông Cửu Long là gì?",
    "options": [
     "Di dời toàn bộ dân cư lên vùng Tây Nguyên.",
     "Xây dựng đê bao khép kín toàn bộ đồng bằng để ngăn mặn tuyệt đối.",
     "Phá bỏ toàn bộ diện tích rừng ngập mặn để nuôi tôm.",
     "Chuyển tư duy từ sản xuất nông nghiệp thuần tuý sang kinh tế nông nghiệp thích ứng với tự nhiên (sống chung với lũ/mặn)."
    ],
    "answer": 3
   },
   {
    "type": "mcq",
    "text": "Tại sao nói thể chế của Liên minh châu Âu (EU) có mức độ liên kết chặt chẽ nhất thế giới hiện nay?",
    "options": [
     "Vì EU sử dụng chung một loại ngôn ngữ duy nhất.",
     "Vì EU chỉ hợp tác duy nhất trên lĩnh vực quân sự.",
     "Vì EU đã xoá bỏ hoàn toàn đường biên giới quốc gia, sáp nhập thành một nước duy nhất.",
     "Vì EU có thị trường chung, sử dụng đồng tiền chung và có các cơ quan siêu quốc gia (Nghị viện, Ngân hàng Trung ương) can thiệp sâu vào chính sách của các nước thành viên."
    ],
    "answer": 3
   },
   {
    "type": "mcq",
    "text": "Để giải quyết triệt để tình trạng mất cân bằng giới tính khi sinh (111,4 bé trai/100 bé gái năm 2024), giải pháp căn cơ nhất đối với nước ta là gì?",
    "options": [
     "Nghiêm cấm hoàn toàn việc sinh con thứ hai.",
     "Thay đổi quan niệm, tâm lí xã hội trọng nam khinh nữ và thực hiện nghiêm pháp luật về bình đẳng giới.",
     "Phạt tiền nặng đối với gia đình sinh con trai.",
     "Khuyến khích di cư sang các quốc gia khác."
    ],
    "answer": 1
   },
   {
    "type": "tf",
    "text": "Về đặc điểm thiên nhiên nhiệt đới ẩm gió mùa ở Việt Nam:",
    "options": [
     {
      "text": "a) Nhiệt độ trung bình năm trên cả nước đều trên 20°C (trừ các vùng núi cao).",
      "answer": true
     },
     {
      "text": "b) Chế độ mưa theo mùa làm cho lưu lượng nước các con sông ở nước ta có sự phân chia thành mùa lũ và mùa cạn rõ rệt.",
      "answer": true
     },
     {
      "text": "c) Thiên nhiên nước ta không có sự khác biệt giữa khu vực đồi núi và đồng bằng vì cùng nằm trong đới nóng.",
      "answer": false
     },
     {
      "text": "d) Sự luân phiên hoạt động của gió mùa Đông Bắc và Tín phong bán cầu Bắc là nguyên nhân trực tiếp tạo ra sự đối lập về mùa mưa - khô giữa sườn Đông và Tây dãy Trường Sơn.",
      "answer": true
     }
    ]
   },
   {
    "type": "tf",
    "text": "Về tình hình phát triển kinh tế - xã hội khu vực Đông Nam Á:",
    "options": [
     {
      "text": "a) Khu vực Đông Nam Á hiện nay bao gồm 11 quốc gia thành viên.",
      "answer": true
     },
     {
      "text": "b) Do diện tích đất đồng bằng châu thổ rộng lớn nên tất cả các nước Đông Nam Á đều xuất khẩu lúa gạo đứng đầu thế giới.",
      "answer": false
     },
     {
      "text": "c) Việc hội nhập sâu rộng vào các chuỗi cung ứng toàn cầu giúp các nước Đông Nam Á phát triển mạnh ngành công nghiệp điện tử - tin học.",
      "answer": true
     },
     {
      "text": "d) Sức ép từ quy mô dân số lớn và đô thị hoá tự phát đang là lực cản lớn đối với việc giải quyết các vấn đề môi trường, giao thông đô thị ở nhiều quốc gia trong khu vực.",
      "answer": true
     }
    ]
   },
   {
    "type": "tf",
    "text": "Cho biểu đồ sau về cơ cấu giá trị sản xuất công nghiệp của nước ta, giai đoạn 2015 – 2024:",
    "charts": [
     {
      "kind": "stacked",
      "title": "Cơ cấu giá trị sản xuất công nghiệp của Việt Nam, giai đoạn 2015 – 2024",
      "unit": "%",
      "categories": [
       "2015",
       "2020",
       "2024"
      ],
      "series": [
       {
        "name": "Khai khoáng",
        "values": [
         12,
         9,
         6.5
        ]
       },
       {
        "name": "Chế biến, chế tạo",
        "values": [
         77,
         80,
         82
        ]
       },
       {
        "name": "Sản xuất và phân phối điện, khí đốt, nước",
        "values": [
         11,
         11,
         11.5
        ]
       }
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     }
    ],
    "options": [
     {
      "text": "a) Tỉ trọng nhóm ngành công nghiệp chế biến, chế tạo tăng liên tục trong giai đoạn 2015 – 2024.",
      "answer": true,
      "explain": "Đúng: 77,0% → 80,0% → 82,0%."
     },
     {
      "text": "b) Tỉ trọng nhóm ngành công nghiệp khai khoáng năm 2024 cao hơn năm 2015.",
      "answer": false,
      "explain": "Sai: khai khoáng giảm từ 12,0% (2015) xuống 6,5% (2024)."
     },
     {
      "text": "c) Giai đoạn 2015 – 2024, tỉ trọng nhóm ngành công nghiệp chế biến, chế tạo tăng 5,0 điểm phần trăm.",
      "answer": true,
      "explain": "Đúng: 82,0 – 77,0 = 5,0 điểm phần trăm."
     },
     {
      "text": "d) Nước ta đang chuyển dịch cơ cấu công nghiệp theo hướng tăng mạnh tỉ trọng khai khoáng để xuất khẩu thô lấy ngoại tệ.",
      "answer": false,
      "explain": "Sai: xu hướng chủ yếu là tăng tỉ trọng công nghiệp chế biến, chế tạo, giảm tỉ trọng khai khoáng."
     }
    ]
   },
   {
    "type": "tf",
    "text": "Cho biểu đồ sau về dân số của các vùng ở nước ta năm 2024:",
    "charts": [
     {
      "kind": "bar",
      "title": "Dân số của các vùng ở nước ta năm 2024",
      "unit": "triệu người",
      "categories": [
       "ĐB sông Hồng",
       "TD và MN phía Bắc",
       "BTB và DH miền Trung",
       "Tây Nguyên",
       "Đông Nam Bộ",
       "ĐB sông Cửu Long"
      ],
      "series": [
       {
        "name": "Dân số",
        "values": [
         24.9,
         12.9,
         20.7,
         6.2,
         18.8,
         17.4
        ]
       }
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     }
    ],
    "options": [
     {
      "text": "a) Đồng bằng sông Hồng có số dân đông nhất trong các vùng được thể hiện trên biểu đồ.",
      "answer": true,
      "explain": "Đúng: Đồng bằng sông Hồng 24,9 triệu người, cao nhất."
     },
     {
      "text": "b) Dân số của Tây Nguyên cao hơn dân số của Trung du và miền núi phía Bắc.",
      "answer": false,
      "explain": "Sai: Tây Nguyên (6,2 triệu) thấp hơn Trung du và miền núi phía Bắc (12,9 triệu)."
     },
     {
      "text": "c) Dân số của Đồng bằng sông Hồng gấp khoảng 4 lần dân số của Tây Nguyên.",
      "answer": true,
      "explain": "Đúng: 24,9 : 6,2 ≈ 4,0 lần."
     },
     {
      "text": "d) Giải quyết bài toán phân bố dân cư không đồng đều ở Việt Nam đòi hỏi phải kết hợp đồng bộ phát triển kinh tế vùng sâu, vùng xa với chính sách quy hoạch đô thị vệ tinh hợp lí.",
      "answer": true,
      "explain": "Đúng: phát triển kinh tế vùng khó khăn và quy hoạch đô thị vệ tinh giúp phân bố lại dân cư hợp lí."
     }
    ]
   },
   {
    "type": "sa",
    "text": "Năm 2024, một vùng có tỉ suất sinh thô là 16,2‰ và tỉ suất chết thô là 6,8‰. Hãy tính tỉ lệ gia tăng dân số tự nhiên của vùng đó (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).",
    "answer": 0.9,
    "explain": "Gia tăng tự nhiên = (16,2 – 6,8) : 10 = 0,94% → làm tròn 0,9%.",
    "unit": "%"
   },
   {
    "type": "sa",
    "text": "Năm 2024, Đồng bằng sông Hồng có số dân là 24,9 triệu người, diện tích là 21,3 nghìn km². Hãy tính mật độ dân số của vùng (đơn vị: người/km², làm tròn kết quả đến hàng đơn vị).",
    "answer": 1169,
    "explain": "Mật độ = 24 900 nghìn người : 21,3 nghìn km² ≈ 1 169 người/km².",
    "unit": "người/km²"
   },
   {
    "type": "sa",
    "text": "Giá trị xuất khẩu hàng hóa của nước ta năm 2015 là 162,4 tỉ USD, năm 2024 là 405,5 tỉ USD. Hãy cho biết năm 2024 so với năm 2015 tăng bao nhiêu lần (làm tròn kết quả đến hai chữ số thập phân).",
    "answer": 2.5,
    "explain": "405,5 : 162,4 ≈ 2,50 lần.",
    "unit": "lần"
   },
   {
    "type": "sa",
    "text": "Năm 2024, lực lượng lao động nước ta là 53,0 triệu người, trong đó có 15,0 triệu người đã qua đào tạo. Hãy tính tỉ lệ lao động đã qua đào tạo (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).",
    "answer": 28.3,
    "explain": "Tỉ lệ = 15,0 : 53,0 × 100 ≈ 28,3%.",
    "unit": "%"
   },
   {
    "type": "sa",
    "text": "Năm 2024, GDP của nước ta là 476,3 tỉ USD, dân số là 101,3 triệu người. Hãy tính GDP bình quân đầu người của nước ta (đơn vị: USD/người, làm tròn kết quả đến hàng đơn vị).",
    "answer": 4702,
    "explain": "GDP/người = 476,3 tỉ USD : 101,3 triệu người ≈ 4 702 USD/người.",
    "unit": "USD/người"
   },
   {
    "type": "sa",
    "text": "Năm 2024, nước ta có 101,3 triệu dân, trong đó dân thành thị là 38,9 triệu người. Hãy tính tỉ lệ dân thành thị của nước ta (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).",
    "answer": 38.4,
    "explain": "Tỉ lệ dân thành thị = 38,9 : 101,3 × 100 ≈ 38,4%.",
    "unit": "%"
   }
  ]
 },
 "8": {
  "label": "Đề thi thử số 8 – Cấu trúc 2026",
  "questions": [
   {
    "type": "mcq",
    "text": "Cho biểu đồ sau:\nNhận xét nào sau đây đúng về sản lượng cà phê nhân của nước ta?",
    "options": [
     "Năm 2022 sản lượng tăng 400 nghìn tấn so với năm 2019.",
     "Năm 2019 sản lượng cao hơn năm 2022.",
     "Sản lượng cà phê nhân tăng liên tục.",
     "Năm 2024 sản lượng gấp 2 lần năm 2015."
    ],
    "answer": 2,
    "explain": "Sản lượng tăng 1 450 → 1 680 → 1 780 → 1 800 nghìn tấn. 1 800 : 1 450 ≈ 1,24 lần; năm 2022 chỉ tăng 100 nghìn tấn so với năm 2019.",
    "charts": [
     {
      "kind": "bar",
      "title": "Sản lượng cà phê nhân của Việt Nam",
      "unit": "nghìn tấn",
      "categories": [
       "2015",
       "2019",
       "2022",
       "2024"
      ],
      "series": [
       {
        "name": "Cà phê nhân",
        "values": [
         1450,
         1680,
         1780,
         1800
        ]
       }
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     }
    ]
   },
   {
    "type": "mcq",
    "text": "Phần đất liền của nước ta nằm trong múi giờ số mấy?",
    "options": [
     "Múi giờ số 5.",
     "Múi giờ số 6.",
     "Múi giờ số 7.",
     "Múi giờ số 8."
    ],
    "answer": 2
   },
   {
    "type": "mcq",
    "text": "Dãy núi nào sau đây có đỉnh núi cao nhất nước ta?",
    "options": [
     "Trường Sơn Bắc.",
     "Bạch Mã.",
     "Hoàng Liên Sơn.",
     "Trường Sơn Nam."
    ],
    "answer": 2
   },
   {
    "type": "mcq",
    "text": "Đồng bằng nào sau đây có diện tích lớn nhất nước ta?",
    "options": [
     "Đồng bằng sông Cửu Long.",
     "Đồng bằng Thanh – Nghệ – Tĩnh.",
     "Đồng bằng sông Hồng.",
     "Đồng bằng ven biển Nam Trung Bộ."
    ],
    "answer": 0
   },
   {
    "type": "mcq",
    "text": "Việt Nam là quốc gia có bao nhiêu dân tộc cùng sinh sống?",
    "options": [
     "52 dân tộc.",
     "53 dân tộc.",
     "54 dân tộc.",
     "55 dân tộc."
    ],
    "answer": 2
   },
   {
    "type": "mcq",
    "text": "Thời tiết lạnh ẩm, có mưa phùn ở Bắc Bộ vào nửa sau mùa đông chủ yếu do nguyên nhân nào sau đây?",
    "options": [
     "Gió mùa Đông Bắc đi qua vùng biển làm tăng độ ẩm.",
     "Gió Tây khô nóng hoạt động mạnh.",
     "Hoạt động mạnh của dải hội tụ nhiệt đới.",
     "Tín phong bán cầu Bắc thổi quanh năm."
    ],
    "answer": 0
   },
   {
    "type": "mcq",
    "text": "Cho bảng số liệu sau:\nNhận xét nào sau đây đúng về các quốc gia năm 2023?",
    "options": [
     "Xin-ga-po có dân số đông nhất.",
     "GDP bình quân đầu người của Thái Lan cao hơn Việt Nam.",
     "Việt Nam có GDP lớn nhất.",
     "GDP bình quân đầu người của Xin-ga-po thấp hơn Thái Lan."
    ],
    "answer": 1,
    "explain": "GDP/người: Xin-ga-po ≈ 84,9 nghìn USD; Thái Lan ≈ 7,2 nghìn USD; Việt Nam ≈ 4,3 nghìn USD. Thái Lan có GDP lớn nhất (515 tỉ USD); Việt Nam đông dân nhất.",
    "tables": [
     {
      "title": "GDP và dân số của một số quốc gia Đông Nam Á năm 2023",
      "headers": [
       "Quốc gia",
       "GDP (tỉ USD)",
       "Dân số (triệu người)"
      ],
      "rows": [
       [
        "Xin-ga-po",
        "501",
        "5,9"
       ],
       [
        "Thái Lan",
        "515",
        "71,8"
       ],
       [
        "Việt Nam",
        "430",
        "100,3"
       ]
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     }
    ]
   },
   {
    "type": "mcq",
    "text": "Đặc điểm chung nổi bật của địa hình nước ta là gì?",
    "options": [
     "Đồng bằng chiếm phần lớn diện tích.",
     "Đồi núi thấp chiếm ưu thế.",
     "Núi cao trên 2000 m chiếm phần lớn diện tích.",
     "Cao nguyên chiếm diện tích lớn nhất."
    ],
    "answer": 1
   },
   {
    "type": "mcq",
    "text": "Đô thị hoá ở nước ta những năm gần đây diễn ra nhanh chủ yếu do nguyên nhân nào sau đây?",
    "options": [
     "Các đô thị cổ được bảo tồn nguyên trạng.",
     "Tác động của công nghiệp hoá, hiện đại hoá và chuyển dịch cơ cấu kinh tế.",
     "Chiến tranh làm di dân ồ ạt vào thành phố.",
     "Dân cư nông thôn giảm mạnh do mức sinh thấp."
    ],
    "answer": 1
   },
   {
    "type": "mcq",
    "text": "Nguồn lao động nước ta dồi dào nhưng năng suất lao động còn thấp chủ yếu do nguyên nhân nào sau đây?",
    "options": [
     "Trình độ chuyên môn kĩ thuật và tác phong công nghiệp còn hạn chế.",
     "Lao động chỉ tập trung trong ngành dịch vụ.",
     "Số người trong độ tuổi lao động quá ít.",
     "Thiếu hoàn toàn nguồn lao động nông thôn."
    ],
    "answer": 0
   },
   {
    "type": "mcq",
    "text": "Giải pháp nào sau đây phù hợp nhất để thích ứng với xâm nhập mặn ở Đồng bằng sông Cửu Long?",
    "options": [
     "Khai thác tối đa nước ngầm để tưới tiêu.",
     "Chuyển đổi cơ cấu cây trồng, vật nuôi và xây dựng hệ thống thuỷ lợi thích ứng.",
     "Xây dựng nhiều khu công nghiệp ở vùng cửa sông.",
     "Mở rộng diện tích trồng lúa ba vụ ở vùng ven biển."
    ],
    "answer": 1
   },
   {
    "type": "mcq",
    "text": "Để phát triển kinh tế biển bền vững, nước ta cần chú trọng giải pháp nào sau đây?",
    "options": [
     "Chỉ xuất khẩu hải sản thô.",
     "Khai thác hợp lí tài nguyên gắn với bảo vệ môi trường và chủ quyền biển đảo.",
     "Hạn chế đầu tư vào các ngành dịch vụ biển.",
     "Tăng cường khai thác thuỷ sản gần bờ."
    ],
    "answer": 1
   },
   {
    "type": "mcq",
    "text": "Việc gắn vùng chuyên canh cây công nghiệp ở Tây Nguyên với công nghiệp chế biến chủ yếu nhằm mục đích nào sau đây?",
    "options": [
     "Giảm số lượng lao động trong nông nghiệp.",
     "Hạn chế xuất khẩu nông sản.",
     "Nâng cao giá trị sản phẩm và ổn định đầu ra cho nông sản.",
     "Giảm diện tích rừng tự nhiên."
    ],
    "answer": 2
   },
   {
    "type": "mcq",
    "text": "Yếu tố nào sau đây quyết định hàng đầu đến sự phát triển các ngành công nghiệp công nghệ cao ở nước ta?",
    "options": [
     "Số lượng dân cư đông.",
     "Lực lượng lao động trình độ cao và năng lực khoa học – công nghệ.",
     "Diện tích đất đai rộng lớn.",
     "Nguồn tài nguyên khoáng sản phong phú."
    ],
    "answer": 1
   },
   {
    "type": "mcq",
    "text": "Biến động chính trị ở Tây Nam Á ảnh hưởng mạnh đến kinh tế thế giới chủ yếu vì lí do nào sau đây?",
    "options": [
     "Khu vực có dân số đông nhất thế giới.",
     "Khu vực có trữ lượng và sản lượng dầu mỏ lớn, tác động đến giá năng lượng toàn cầu.",
     "Khu vực có nhiều nước công nghiệp hoá hàng đầu.",
     "Khu vực dẫn đầu thế giới về sản xuất lương thực."
    ],
    "answer": 1
   },
   {
    "type": "mcq",
    "text": "Liên minh châu Âu (EU) có sức mạnh kinh tế lớn chủ yếu nhờ yếu tố nào sau đây?",
    "options": [
     "Các nước hoàn toàn đóng cửa với bên ngoài.",
     "Chỉ dựa vào nguồn tài nguyên thiên nhiên.",
     "Có diện tích lãnh thổ lớn nhất thế giới.",
     "Thị trường chung, đồng tiền chung và mức độ liên kết sâu rộng giữa các nước thành viên."
    ],
    "answer": 3
   },
   {
    "type": "mcq",
    "text": "Đồng bằng sông Hồng có mật độ dân số cao nhất cả nước, vấn đề cấp bách cần giải quyết hiện nay là gì?",
    "options": [
     "Thiếu hoàn toàn nguồn lao động.",
     "Thiếu đất để mở rộng đô thị, thiếu việc làm và áp lực lên môi trường, hạ tầng.",
     "Thiếu thị trường tiêu thụ.",
     "Không có khả năng phát triển công nghiệp."
    ],
    "answer": 1
   },
   {
    "type": "mcq",
    "text": "Chủ trương chuyển từ khai thác thuỷ sản ven bờ sang xa bờ chủ yếu nhằm mục đích nào sau đây?",
    "options": [
     "Giảm tổng sản lượng thuỷ sản của cả nước.",
     "Hạn chế phát triển nuôi trồng thuỷ sản.",
     "Tăng số lượng tàu thuyền nhỏ.",
     "Giảm áp lực lên nguồn lợi ven bờ và góp phần bảo vệ chủ quyền biển đảo."
    ],
    "answer": 3
   },
   {
    "type": "tf",
    "text": "Cho biểu đồ cơ cấu GDP của nước ta theo nhóm ngành, giai đoạn 2010 – 2024:",
    "options": [
     {
      "text": "a) Giai đoạn 2010 – 2024, tỉ trọng nhóm ngành nông, lâm, thuỷ sản trong cơ cấu GDP giảm liên tục.",
      "answer": true
     },
     {
      "text": "b) Năm 2020, tỉ trọng nhóm ngành công nghiệp và xây dựng cao hơn nhóm ngành dịch vụ.",
      "answer": false
     },
     {
      "text": "c) Giai đoạn 2010 – 2024, tỉ trọng nhóm ngành dịch vụ tăng 7,2 điểm phần trăm.",
      "answer": true
     },
     {
      "text": "d) Cơ cấu GDP chuyển dịch chủ yếu do khai thác thêm tài nguyên thiên nhiên và mở rộng diện tích đất nông nghiệp.",
      "answer": false
     }
    ],
    "charts": [
     {
      "kind": "stacked",
      "title": "Cơ cấu GDP của Việt Nam theo nhóm ngành, giai đoạn 2010 – 2024",
      "unit": "%",
      "categories": [
       "2010",
       "2015",
       "2020",
       "2024"
      ],
      "series": [
       {
        "name": "Nông, lâm, thuỷ sản",
        "values": [
         18.9,
         17,
         14.8,
         11.9
        ]
       },
       {
        "name": "Công nghiệp và xây dựng",
        "values": [
         38.2,
         37,
         37.4,
         38
        ]
       },
       {
        "name": "Dịch vụ",
        "values": [
         42.9,
         46,
         47.8,
         50.1
        ]
       }
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     }
    ]
   },
   {
    "type": "tf",
    "text": "Cho biểu đồ GDP bình quân đầu người của một số quốc gia Đông Nam Á năm 2023:",
    "options": [
     {
      "text": "a) Năm 2023, Xin-ga-po có GDP/người cao nhất trong các quốc gia được thể hiện trên biểu đồ.",
      "answer": true
     },
     {
      "text": "b) Năm 2023, GDP/người của Việt Nam cao hơn của Thái Lan.",
      "answer": false
     },
     {
      "text": "c) Năm 2023, GDP/người của Xin-ga-po gấp trên 15 lần của Việt Nam.",
      "answer": true
     },
     {
      "text": "d) Sự chênh lệch GDP/người giữa các quốc gia Đông Nam Á chủ yếu do khác nhau về trình độ phát triển kinh tế, khoa học – công nghệ và chất lượng nguồn lao động.",
      "answer": true
     }
    ],
    "charts": [
     {
      "kind": "bar",
      "title": "GDP bình quân đầu người của một số quốc gia Đông Nam Á năm 2023",
      "unit": "USD",
      "categories": [
       "Xin-ga-po",
       "Thái Lan",
       "In-đô-nê-xi-a",
       "Việt Nam",
       "Phi-líp-pin"
      ],
      "series": [
       {
        "name": "GDP/người",
        "values": [
         84700,
         7170,
         4920,
         4350,
         3900
        ]
       }
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     }
    ]
   },
   {
    "type": "tf",
    "text": "Cho thông tin về vị trí địa lí và phạm vi lãnh thổ của nước ta:",
    "options": [
     {
      "text": "a) Nước ta nằm ở rìa phía đông của bán đảo Đông Dương, gần trung tâm khu vực Đông Nam Á.",
      "answer": true
     },
     {
      "text": "b) Vùng biển Việt Nam có diện tích khoảng 3 triệu km² nằm trong Biển Đông.",
      "answer": false
     },
     {
      "text": "c) Vị trí nằm trong vùng nội chí tuyến bán cầu Bắc là nguyên nhân chủ yếu làm cho nước ta có nền nhiệt độ cao, nhiều ánh nắng.",
      "answer": true
     },
     {
      "text": "d) Đường bờ biển dài, nhiều vịnh nước sâu là cơ sở chủ yếu để phát triển ngành khai thác khoáng sản trên đất liền.",
      "answer": false
     }
    ]
   },
   {
    "type": "tf",
    "text": "Về ngành trồng trọt ở nước ta hiện nay:",
    "options": [
     {
      "text": "a) Lúa là cây lương thực chính, Đồng bằng sông Cửu Long là vùng sản xuất lúa trọng điểm của cả nước.",
      "answer": true
     },
     {
      "text": "b) Cây công nghiệp lâu năm chủ yếu phân bố ở các đồng bằng ven biển miền Trung.",
      "answer": false
     },
     {
      "text": "c) Việc hình thành các vùng chuyên canh cây công nghiệp chủ yếu nhằm giảm tỉ trọng của ngành chăn nuôi.",
      "answer": false
     },
     {
      "text": "d) Ứng dụng công nghệ cao trong trồng trọt góp phần nâng cao giá trị nông sản và thích ứng với biến đổi khí hậu.",
      "answer": true
     }
    ]
   },
   {
    "type": "sa",
    "text": "Năm 2023, GDP của Xin-ga-po là 501,4 tỉ USD, dân số là 5,9 triệu người. Hãy tính GDP bình quân đầu người của Xin-ga-po (đơn vị: USD/người, làm tròn kết quả đến hàng đơn vị).",
    "answer": 84983,
    "explain": "GDP/người = 501,4 tỉ USD : 5,9 triệu người ≈ 84 983 USD/người.",
    "unit": "USD/người"
   },
   {
    "type": "sa",
    "text": "Năm 2023, GDP bình quân đầu người của Xin-ga-po là 84 700 USD, của Việt Nam là 4 350 USD. Hãy cho biết GDP bình quân đầu người của Xin-ga-po gấp bao nhiêu lần của Việt Nam (làm tròn kết quả đến hàng đơn vị).",
    "answer": 19,
    "explain": "84 700 : 4 350 ≈ 19,47 → làm tròn 19 lần.",
    "unit": "lần"
   },
   {
    "type": "sa",
    "text": "Năm 2024, GDP của nước ta là 12 847,6 nghìn tỉ đồng, trong đó dịch vụ chiếm 50,1%. Hãy tính giá trị của khu vực dịch vụ (đơn vị: nghìn tỉ đồng, làm tròn kết quả đến hàng đơn vị).",
    "answer": 6437,
    "explain": "Giá trị dịch vụ = 12 847,6 × 50,1% ≈ 6 437 nghìn tỉ đồng.",
    "unit": "nghìn tỉ đồng"
   },
   {
    "type": "sa",
    "text": "Sản lượng cà phê nhân của nước ta năm 2015 là 1 450 nghìn tấn, năm 2024 là 1 800 nghìn tấn. Hãy tính tốc độ tăng của năm 2024 so với năm 2015 (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).",
    "answer": 24.1,
    "explain": "Tốc độ tăng = (1 800 – 1 450) : 1 450 × 100 ≈ 24,1%.",
    "unit": "%"
   },
   {
    "type": "sa",
    "text": "Năm 2024, dân số thế giới là 8,1 tỉ người, dân số Việt Nam là 101,3 triệu người. Hãy tính tỉ lệ dân số Việt Nam so với dân số thế giới (đơn vị: %, làm tròn kết quả đến hai chữ số thập phân).",
    "answer": 1.25,
    "explain": "Tỉ lệ = 101,3 : 8 100 × 100 ≈ 1,25%.",
    "unit": "%"
   },
   {
    "type": "sa",
    "text": "Năm 2015, giá trị xuất khẩu hàng hóa của nước ta là 162,4 tỉ USD, giá trị nhập khẩu là 165,8 tỉ USD. Hãy cho biết năm 2015 nước ta nhập siêu bao nhiêu tỉ USD (lấy kết quả đến một chữ số thập phân).",
    "answer": 3.4,
    "explain": "Nhập siêu = nhập khẩu – xuất khẩu = 165,8 – 162,4 = 3,4 tỉ USD.",
    "unit": "tỉ USD"
   }
  ]
 },
 "9": {
  "label": "Đề thi thử số 9 – Cấu trúc 2026",
  "questions": [
   {
    "type": "mcq",
    "text": "Cho biểu đồ sau:\nNhận xét nào sau đây đúng về dân số nước ta?",
    "options": [
     "Dân số tăng liên tục qua các năm.",
     "Giai đoạn 2019 – 2024 dân số tăng nhiều hơn giai đoạn 2009 – 2019.",
     "Dân số năm 2024 tăng thêm 13,3 triệu người so với năm 2009.",
     "Năm 2024 dân số gấp 1,5 lần năm 2009."
    ],
    "answer": 0,
    "explain": "Dân số tăng 86,0 → 96,2 → 101,3 triệu người. Giai đoạn 2009 – 2019 tăng 10,2 triệu, nhiều hơn 2019 – 2024 (5,1); 101,3 : 86,0 ≈ 1,18 lần; tăng thêm 15,3 triệu người.",
    "charts": [
     {
      "kind": "bar",
      "title": "Dân số của Việt Nam, năm 2009, 2019 và 2024",
      "unit": "triệu người",
      "categories": [
       "2009",
       "2019",
       "2024"
      ],
      "series": [
       {
        "name": "Dân số",
        "values": [
         86,
         96.2,
         101.3
        ]
       }
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     }
    ]
   },
   {
    "type": "mcq",
    "text": "Đường bờ biển của nước ta dài khoảng bao nhiêu km?",
    "options": [
     "Khoảng 2360 km.",
     "Khoảng 3260 km.",
     "Khoảng 4120 km.",
     "Khoảng 1560 km."
    ],
    "answer": 1
   },
   {
    "type": "mcq",
    "text": "Hệ thống sông nào sau đây có lưu vực lớn nhất ở nước ta?",
    "options": [
     "Sông Hồng.",
     "Sông Mã.",
     "Sông Mê Công.",
     "Sông Đồng Nai."
    ],
    "answer": 2
   },
   {
    "type": "mcq",
    "text": "Loại đất chiếm diện tích lớn nhất ở nước ta là",
    "options": [
     "đất mặn.",
     "đất feralit.",
     "đất phèn.",
     "đất phù sa."
    ],
    "answer": 1
   },
   {
    "type": "mcq",
    "text": "Đảo lớn nhất của nước ta là",
    "options": [
     "Phú Quốc.",
     "Côn Đảo.",
     "Lý Sơn.",
     "Cát Bà."
    ],
    "answer": 0
   },
   {
    "type": "mcq",
    "text": "Biên độ nhiệt năm ở miền Bắc lớn hơn miền Nam chủ yếu do nguyên nhân nào sau đây?",
    "options": [
     "Miền Bắc có diện tích rừng lớn hơn.",
     "Địa hình miền Bắc thấp hơn.",
     "Vị trí gần chí tuyến hơn và chịu tác động mạnh của gió mùa Đông Bắc.",
     "Miền Bắc có nhiều sông hơn."
    ],
    "answer": 2
   },
   {
    "type": "mcq",
    "text": "Cho bảng số liệu sau:\nNhận xét nào sau đây đúng về diện tích cà phê và cao su của hai vùng năm 2024?",
    "options": [
     "Tổng diện tích hai cây ở Đông Nam Bộ lớn hơn Tây Nguyên.",
     "Tây Nguyên có diện tích cà phê lớn hơn Đông Nam Bộ.",
     "Đông Nam Bộ có diện tích cà phê lớn hơn cao su.",
     "Diện tích cao su của Tây Nguyên lớn hơn Đông Nam Bộ."
    ],
    "answer": 1,
    "explain": "Tây Nguyên 640 > Đông Nam Bộ 50 nghìn ha cà phê. Ở Đông Nam Bộ cao su (530) lớn hơn cà phê (50); cao su Tây Nguyên (190) nhỏ hơn Đông Nam Bộ; tổng ở Đông Nam Bộ 580 < Tây Nguyên 830.",
    "tables": [
     {
      "title": "Diện tích cà phê và cao su của Tây Nguyên và Đông Nam Bộ năm 2024",
      "unit": "nghìn ha",
      "headers": [
       "Vùng",
       "Cà phê",
       "Cao su"
      ],
      "rows": [
       [
        "Tây Nguyên",
        "640",
        "190"
       ],
       [
        "Đông Nam Bộ",
        "50",
        "530"
       ]
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     }
    ]
   },
   {
    "type": "mcq",
    "text": "Đồng bằng sông Hồng có mật độ dân số cao chủ yếu do nguyên nhân nào sau đây?",
    "options": [
     "Khí hậu nóng khô quanh năm.",
     "Mới được khai thác gần đây.",
     "Lịch sử khai thác lâu đời, thuận lợi cho sản xuất lúa nước.",
     "Có nhiều khoáng sản quý hiếm."
    ],
    "answer": 2
   },
   {
    "type": "mcq",
    "text": "Cơ cấu dân số vàng tạo thuận lợi chủ yếu nào sau đây cho phát triển kinh tế nước ta?",
    "options": [
     "Nguồn lao động dồi dào và tiềm năng thị trường tiêu thụ lớn.",
     "Dân số giảm nhanh.",
     "Tỉ lệ phụ thuộc rất cao.",
     "Giảm áp lực lên hệ thống y tế do ít người già."
    ],
    "answer": 0
   },
   {
    "type": "mcq",
    "text": "Trung du và miền núi Bắc Bộ có nhiều nhà máy thuỷ điện chủ yếu do nguyên nhân nào sau đây?",
    "options": [
     "Khí hậu khô hạn.",
     "Dân cư đông đúc.",
     "Sông ngòi có độ dốc lớn, nhiều nước và tiềm năng thuỷ điện lớn.",
     "Địa hình bằng phẳng, sông chảy chậm."
    ],
    "answer": 2
   },
   {
    "type": "mcq",
    "text": "Giải pháp chủ yếu để hạn chế thiếu nước tưới vào mùa khô ở Tây Nguyên là",
    "options": [
     "tăng khai thác nước ngầm không kiểm soát.",
     "mở rộng diện tích cây công nghiệp trên sườn dốc.",
     "chuyển toàn bộ sang trồng lúa nước.",
     "xây dựng hồ chứa, áp dụng tưới tiết kiệm nước và bảo vệ rừng đầu nguồn."
    ],
    "answer": 3
   },
   {
    "type": "mcq",
    "text": "Chuyển đổi số trong nông nghiệp ở nước ta có vai trò chủ yếu nào sau đây?",
    "options": [
     "Tăng sử dụng lao động thủ công.",
     "Hạn chế xuất khẩu nông sản.",
     "Giảm vai trò của thị trường.",
     "Nâng cao năng suất, quản lí chất lượng và truy xuất nguồn gốc sản phẩm."
    ],
    "answer": 3
   },
   {
    "type": "mcq",
    "text": "Phát triển năng lượng tái tạo ở Nam Trung Bộ chủ yếu dựa trên lợi thế nào sau đây?",
    "options": [
     "Nguồn nước dồi dào quanh năm.",
     "Địa hình đồng bằng rộng lớn.",
     "Số giờ nắng cao và tiềm năng gió lớn.",
     "Trữ lượng than đá lớn."
    ],
    "answer": 2
   },
   {
    "type": "mcq",
    "text": "Việc tăng cường liên kết vùng ở nước ta nhằm mục đích chủ yếu nào sau đây?",
    "options": [
     "Phát huy thế mạnh, tạo không gian phát triển và nâng cao sức cạnh tranh.",
     "Hạn chế hợp tác giữa các địa phương.",
     "Làm giảm vai trò của từng vùng.",
     "Giảm đầu tư hạ tầng."
    ],
    "answer": 0
   },
   {
    "type": "mcq",
    "text": "Việc Việt Nam gia nhập WTO năm 2007 tác động tích cực chủ yếu nào sau đây?",
    "options": [
     "Chấm dứt hoàn toàn nhập khẩu.",
     "Mở rộng thị trường xuất khẩu và thu hút đầu tư nước ngoài.",
     "Hạn chế cải cách thể chế.",
     "Giảm quan hệ với các nước ASEAN."
    ],
    "answer": 1
   },
   {
    "type": "mcq",
    "text": "Đông Nam Á có vị trí chiến lược quan trọng trên thế giới chủ yếu vì",
    "options": [
     "nằm ở vùng cực, ít dân cư.",
     "nằm giữa hai đại dương, trên các tuyến hàng hải và hàng không quốc tế.",
     "có diện tích lớn nhất châu Á.",
     "không chịu ảnh hưởng của thiên tai."
    ],
    "answer": 1
   },
   {
    "type": "mcq",
    "text": "Hiện tượng El Niño gây hạn hán, xâm nhập mặn ở Đồng bằng sông Cửu Long tác động như thế nào đến sản xuất lúa?",
    "options": [
     "Làm tăng diện tích đất phù sa mới ngay lập tức.",
     "Không ảnh hưởng đến sản xuất.",
     "Gây thiếu nước ngọt, giảm năng suất và thiệt hại mùa vụ.",
     "Làm tăng năng suất và sản lượng lúa."
    ],
    "answer": 2
   },
   {
    "type": "mcq",
    "text": "Thương mại điện tử phát triển nhanh làm thay đổi hoạt động nội thương ở nước ta như thế nào?",
    "options": [
     "Chấm dứt hoạt động của siêu thị.",
     "Làm giảm vai trò của vận tải.",
     "Mở rộng kênh phân phối, thay đổi hành vi mua sắm và giảm phụ thuộc vào cửa hàng truyền thống.",
     "Thu hẹp thị trường tiêu thụ."
    ],
    "answer": 2
   },
   {
    "type": "tf",
    "text": "Cho biểu đồ số lượt khách du lịch quốc tế đến Việt Nam, giai đoạn 2019 – 2024:",
    "options": [
     {
      "text": "a) Năm 2019, số lượt khách quốc tế đến Việt Nam cao hơn năm 2024.",
      "answer": true
     },
     {
      "text": "b) Năm 2020 là năm có số lượt khách quốc tế đến Việt Nam thấp nhất trong giai đoạn.",
      "answer": false
     },
     {
      "text": "c) Số lượt khách quốc tế giảm mạnh giai đoạn 2019 – 2021 chủ yếu do tác động của đại dịch COVID-19 và các hạn chế đi lại.",
      "answer": true
     },
     {
      "text": "d) Số lượt khách quốc tế tăng nhanh giai đoạn 2022 – 2024 chủ yếu do dân số trong nước tăng nhanh.",
      "answer": false
     }
    ],
    "charts": [
     {
      "kind": "line",
      "title": "Số lượt khách du lịch quốc tế đến Việt Nam, giai đoạn 2019 – 2024",
      "unit": "triệu lượt",
      "categories": [
       "2019",
       "2020",
       "2021",
       "2022",
       "2023",
       "2024"
      ],
      "series": [
       {
        "name": "Khách quốc tế",
        "values": [
         18,
         3.8,
         0.2,
         3.7,
         12.6,
         17.5
        ]
       }
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     }
    ]
   },
   {
    "type": "tf",
    "text": "Cho biểu đồ cơ cấu dân số theo nhóm tuổi của Việt Nam, giai đoạn 2009 – 2024:",
    "options": [
     {
      "text": "a) Giai đoạn 2009 – 2024, tỉ trọng nhóm tuổi 0 – 14 giảm liên tục.",
      "answer": true
     },
     {
      "text": "b) Năm 2019, tỉ trọng nhóm tuổi từ 65 trở lên cao hơn nhóm tuổi 0 – 14.",
      "answer": false
     },
     {
      "text": "c) Giai đoạn 2009 – 2024, tỉ trọng nhóm tuổi từ 65 trở lên tăng 2,8 điểm phần trăm.",
      "answer": true
     },
     {
      "text": "d) Quá trình già hoá dân số ở nước ta chủ yếu do mức sinh tăng nhanh trong những năm gần đây.",
      "answer": false
     }
    ],
    "charts": [
     {
      "kind": "stacked",
      "title": "Cơ cấu dân số Việt Nam theo nhóm tuổi, giai đoạn 2009 – 2024",
      "unit": "%",
      "categories": [
       "2009",
       "2019",
       "2024"
      ],
      "series": [
       {
        "name": "0 – 14 tuổi",
        "values": [
         24.5,
         24.3,
         23
        ]
       },
       {
        "name": "15 – 64 tuổi",
        "values": [
         69.1,
         68,
         67.8
        ]
       },
       {
        "name": "Từ 65 tuổi trở lên",
        "values": [
         6.4,
         7.7,
         9.2
        ]
       }
      ],
      "note": "Số liệu đã làm tròn, dùng cho ôn tập."
     }
    ]
   },
   {
    "type": "tf",
    "text": "Về vùng Đông Nam Bộ ở nước ta hiện nay:",
    "options": [
     {
      "text": "a) Đông Nam Bộ là vùng kinh tế năng động, có đóng góp lớn vào GDP của cả nước.",
      "answer": true
     },
     {
      "text": "b) Chè là cây công nghiệp lâu năm chủ lực của vùng.",
      "answer": false
     },
     {
      "text": "c) Công nghiệp của vùng phát triển mạnh chủ yếu do có nguồn nguyên liệu nông sản tại chỗ rất dồi dào.",
      "answer": false
     },
     {
      "text": "d) Phát triển mạng lưới giao thông liên kết vùng và đô thị thông minh góp phần giảm ùn tắc, nâng cao hiệu quả kinh tế của vùng.",
      "answer": true
     }
    ]
   },
   {
    "type": "tf",
    "text": "Về điều kiện phát triển nông nghiệp ở vùng Tây Nguyên:",
    "options": [
     {
      "text": "a) Tây Nguyên là vùng có diện tích trồng cà phê lớn nhất cả nước.",
      "answer": true
     },
     {
      "text": "b) Tây Nguyên là vùng giáp biển, có nhiều cảng biển nước sâu.",
      "answer": false
     },
     {
      "text": "c) Mùa khô kéo dài, thiếu nước tưới là một trong những khó khăn lớn đối với sản xuất nông nghiệp của vùng.",
      "answer": true
     },
     {
      "text": "d) Giải pháp hàng đầu để phát triển cà phê bền vững là mở rộng diện tích bằng cách khai thác rừng đầu nguồn.",
      "answer": false
     }
    ]
   },
   {
    "type": "sa",
    "text": "Dân số nước ta năm 2009 là 86,0 triệu người, năm 2024 là 101,3 triệu người. Hãy cho biết dân số nước ta năm 2024 tăng thêm bao nhiêu triệu người so với năm 2009 (lấy kết quả đến một chữ số thập phân).",
    "answer": 15.3,
    "explain": "101,3 – 86,0 = 15,3 triệu người.",
    "unit": "triệu người"
   },
   {
    "type": "sa",
    "text": "Dân số nước ta năm 2009 là 86,0 triệu người, năm 2024 là 101,3 triệu người. Hãy tính tốc độ tăng dân số của năm 2024 so với năm 2009 (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).",
    "answer": 17.8,
    "explain": "Tốc độ tăng = (101,3 – 86,0) : 86,0 × 100 ≈ 17,8%.",
    "unit": "%"
   },
   {
    "type": "sa",
    "text": "Năm 2024, dân số nước ta là 101,3 triệu người, trong đó nhóm từ 65 tuổi trở lên chiếm 9,2%. Hãy tính số người từ 65 tuổi trở lên (đơn vị: triệu người, làm tròn kết quả đến một chữ số thập phân).",
    "answer": 9.3,
    "explain": "101,3 × 9,2% ≈ 9,3 triệu người.",
    "unit": "triệu người"
   },
   {
    "type": "sa",
    "text": "Số lượt khách quốc tế đến Việt Nam năm 2019 là 18,0 triệu, năm 2024 là 17,5 triệu. Hãy tính số lượt khách năm 2024 bằng bao nhiêu % năm 2019 (làm tròn kết quả đến một chữ số thập phân).",
    "answer": 97.2,
    "explain": "17,5 : 18,0 × 100 ≈ 97,2%.",
    "unit": "%"
   },
   {
    "type": "sa",
    "text": "Năm 2024, diện tích cà phê của cả nước là 710 nghìn ha, trong đó Tây Nguyên có 640 nghìn ha. Hãy tính tỉ trọng diện tích cà phê của Tây Nguyên so với cả nước (đơn vị: %, làm tròn kết quả đến một chữ số thập phân).",
    "answer": 90.1,
    "explain": "640 : 710 × 100 ≈ 90,1%.",
    "unit": "%"
   },
   {
    "type": "sa",
    "text": "Năm 2024, Đông Nam Bộ có số dân là 18,8 triệu người, diện tích là 23,6 nghìn km². Hãy tính mật độ dân số của vùng (đơn vị: người/km², làm tròn kết quả đến hàng đơn vị).",
    "answer": 797,
    "explain": "Mật độ = 18 800 nghìn người : 23,6 nghìn km² ≈ 797 người/km².",
    "unit": "người/km²"
   }
  ]
 }
};
