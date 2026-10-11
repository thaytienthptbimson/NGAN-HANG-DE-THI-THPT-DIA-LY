/* =========================================================================
   DỮ LIỆU BỔ SUNG (chuyển từ app.js cũ sang, đã xoá thẻ [cite], đánh lại chỉ số chủ đề
   để KHÔNG ghi đè data_khoi11.js / data_khoi12.js)
========================================================================= */

const dataExtra = {
  "khoi11": {
    "3": {
      "title": "Chủ đề 3: Địa lí Khu vực và Quốc gia (Tây Nam Á & EU)",
      "exercises": {
        "tf": [
          {
            "type": "tf",
            "text": "Dựa vào biểu đồ Dân số và GDP của một số quốc gia Tây Nam Á năm 2023 (I-rắc, I-xra-en, A-rập Xê-út, Cô-oét):",
            "options": [
              {
                "text": "a) (Nhận biết) Năm 2023, dân số và GDP của một số quốc gia Tây Nam Á có sự chênh lệch.",
                "answer": true
              },
              {
                "text": "b) (Nhận biết) Năm 2023, Cô-oét có GDP/người cao gấp 2 lần GDP/người của A-rập Xê-út.",
                "answer": false
              },
              {
                "text": "c) (Thông hiểu) Năm 2023, I-xra-en có GDP/người cao nhất, I-rắc có GDP/người thấp nhất.",
                "answer": true
              },
              {
                "text": "d) (Vận dụng) Nguyên nhân chênh lệch GDP/người của một số quốc gia Tây Nam Á chủ yếu do sự bất ổn định về chính trị và biến động của giá dầu mỏ.",
                "answer": true
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
                "text": "a) (Nhận biết) Năm 2024, tỉ lệ dân nông thôn của I-ta-li-a cao hơn của Pháp 10,2%.",
                "answer": false
              },
              {
                "text": "b) (Nhận biết) Năm 2024, Tây Ban Nha có tỉ lệ dân thành thị lớn nhất, Ba Lan có tỉ lệ dân thành thị nhỏ nhất.",
                "answer": true
              },
              {
                "text": "c) (Thông hiểu) Năm 2024, số dân nông thôn của một số quốc gia EU có sự chênh lệch.",
                "answer": true
              },
              {
                "text": "d) (Vận dụng) Tỉ lệ dân thành thị của một số quốc gia EU có sự chênh lệch chủ yếu do khác nhau về số lượng đô thị, quy mô nền kinh tế và lịch sử chuyển cư.",
                "answer": true
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
          }
        ]
      }
    }
  },
  "khoi12": {
    "3": {
      "title": "Chủ đề 3: Địa lí Tự nhiên Việt Nam (Đúng/Sai nâng cao)",
      "exercises": {
        "tf": [
          {
            "type": "tf",
            "text": "Cho thông tin về đặc điểm tự nhiên của Miền Tây Bắc và Bắc Trung Bộ:",
            "options": [
              {
                "text": "a) (Nhận biết) Miền Tây Bắc và Bắc Trung Bộ có địa hình đa dạng.",
                "answer": true
              },
              {
                "text": "b) (Nhận biết) Sự phân hoá đa dạng của thiên nhiên trong miền tạo thuận lợi chủ yếu để phát triển sản xuất quanh năm, thâm canh, tăng vụ, hình thành các vùng chuyên canh quy mô lớn.",
                "answer": false
              },
              {
                "text": "c) (Thông hiểu) Gió Tây khô nóng hoạt động mạnh ở Bắc Trung Bộ vào nửa đầu mùa hạ do Tín phong bán cầu Nam kết hợp với dãy Trường Sơn Bắc.",
                "answer": false
              },
              {
                "text": "d) (Vận dụng) Sự xuất hiện của thành phần loài sinh vật ôn đới trong miền chủ yếu do tác động của hướng địa hình, gió đông bắc và vị trí xa chí tuyến.",
                "answer": false
              }
            ]
          },
          {
            "type": "tf",
            "text": "Cho thông tin về sự phân hóa đa dạng theo Đông - Tây của thiên nhiên nước ta:",
            "options": [
              {
                "text": "a) (Nhận biết) Vùng đồi núi phân bố chủ yếu ở phía tây và tây bắc của nước ta.",
                "answer": true
              },
              {
                "text": "b) (Nhận biết) Sự khác biệt về khí hậu giữa vùng núi Đông Bắc với Tây Bắc chủ yếu do tác động của hướng địa hình kết hợp với dải hội tụ nhiệt đới và gió đông nam.",
                "answer": false
              },
              {
                "text": "c) (Thông hiểu) Vùng đồng bằng ven biển nước ta có địa hình thấp, khá bằng phẳng do thường xuyên chịu tác động trực tiếp từ biển và vùng đồi núi liền kề.",
                "answer": false
              },
              {
                "text": "d) (Vận dụng) Sự phân hóa của khí hậu theo Đông – Tây tạo thuận lợi chủ yếu để nước ta đổi mới cơ cấu cây trồng, nâng cao chất lượng nông sản đặc sản và phát triển nền nông nghiệp xanh.",
                "answer": true
              }
            ]
          }
        ]
      }
    },
    "4": {
      "title": "Chủ đề 4: Địa lí Các ngành Kinh tế",
      "exercises": {
        "tf": [
          {
            "type": "tf",
            "text": "Về hoạt động nội thương và sự phân hóa giữa các vùng ở nước ta hiện nay:",
            "options": [
              {
                "text": "a) (Nhận biết) Đông Nam Bộ và Đồng bằng sông Hồng là hai vùng có hoạt động nội thương phát triển hàng đầu cả nước.",
                "answer": true
              },
              {
                "text": "b) (Nhận biết) Mạng lưới siêu thị, trung tâm thương mại là hình thức bán lẻ hàng hoá ngày càng phát triển trên thị trường trong nước.",
                "answer": true
              },
              {
                "text": "c) (Thông hiểu) Sức mua của người dân tăng, thị hiếu tiêu dùng thay đổi là nguyên nhân chủ yếu thúc đẩy thương mại điện tử phát triển ở nước ta.",
                "answer": false
              },
              {
                "text": "d) (Vận dụng) Sự phân hoá hoạt động nội thương ở nước ta chủ yếu do sự khác nhau về mạng lưới dân cư và chất lượng lao động giữa các vùng.",
                "answer": false
              }
            ]
          },
          {
            "type": "tf",
            "text": "Về thực trạng và định hướng phát triển của ngành du lịch nước ta:",
            "options": [
              {
                "text": "a) (Nhận biết) Giải pháp chủ yếu để nâng cao chất lượng sản phẩm du lịch là phát triển thương hiệu du lịch quốc gia, ứng dụng công nghệ số trong quảng bá và hoàn thiện hệ thống cơ sở dữ liệu du lịch.",
                "answer": false
              },
              {
                "text": "b) (Nhận biết) Ngành du lịch nước ta phát triển nhanh, đóng góp tích cực vào tăng trưởng kinh tế.",
                "answer": true
              },
              {
                "text": "c) (Thông hiểu) Ngành du lịch nước ta thu hút được nhiều khách du lịch quốc tế chủ yếu do có cơ sở hạ tầng hiện đại, nguồn nhân lực chất lượng cao và áp dụng rộng rãi công nghệ trong thanh toán dịch vụ.",
                "answer": false
              },
              {
                "text": "d) (Vận dụng) Du lịch nước ta đang thúc đẩy ứng dụng công nghệ số để hỗ trợ và gia tăng trải nghiệm cho du khách.",
                "answer": true
              }
            ]
          }
        ]
      }
    },
    "5": {
      "title": "Chủ đề 5: Địa lí Các vùng Kinh tế",
      "exercises": {
        "tf": [
          {
            "type": "tf",
            "text": "Về tình hình sản xuất và ứng phó với biến đổi khí hậu tại Đồng bằng sông Cửu Long:",
            "options": [
              {
                "text": "a) (Nhận biết) Đồng bằng sông Cửu Long là vùng có diện tích và sản lượng lúa lớn nhất nước ta.",
                "answer": true
              },
              {
                "text": "b) (Nhận biết) Khó khăn lớn nhất trong sản xuất lúa ở Đồng bằng sông Cửu Long là nhiệt độ trung bình năm tăng.",
                "answer": false
              },
              {
                "text": "c) (Vận dụng) Vùng có sản lượng lúa lớn, chủ yếu do khí hậu cận xích đạo, nguồn nước phong phú, nhiều giống lúa chất lượng cao.",
                "answer": false
              },
              {
                "text": "d) (Vận dụng) Giải pháp chủ yếu để sử dụng hiệu quả tài nguyên đất trong sản xuất lúa ở Đồng bằng sông Cửu Long là tăng vụ và chuyển đổi mục đích sử dụng đất.",
                "answer": true
              }
            ]
          },
          {
            "type": "tf",
            "text": "Về định hướng chuyển đổi và phát triển cây ăn quả tại Đồng bằng sông Cửu Long:",
            "options": [
              {
                "text": "a) (Nhận biết) Các kĩ thuật canh tác hiện đại được áp dụng trong sản xuất cây ăn quả của vùng chủ yếu nhằm nâng cao năng lực quản lí các sản phẩm đặc thù, phát triển mạng lưới cung ứng nông sản chất lượng cao.",
                "answer": false
              },
              {
                "text": "b) (Nhận biết) Đồng bằng sông Cửu Long có cơ cấu cây ăn quả đa dạng.",
                "answer": true
              },
              {
                "text": "c) (Vận dụng) Sản xuất cây ăn quả của vùng đang phát triển theo hướng nâng cao chất lượng và đảm bảo an toàn cho người tiêu dùng.",
                "answer": true
              },
              {
                "text": "d) (Vận dụng) Diện tích cây ăn quả của vùng tăng chủ yếu do áp dụng quy trình chăm sóc theo hướng bền vững, đa dạng hóa cơ cấu cây trồng.",
                "answer": false
              }
            ]
          }
        ]
      }
    }
  },
  "mocktest": {
    "1": [
      {
        "type": "tf",
        "text": "Dựa vào biểu đồ Dân số và GDP của một số quốc gia Tây Nam Á năm 2023 (I-rắc, I-xra-en, A-rập Xê-út, Cô-oét):",
        "options": [
          {
            "text": "a) (Nhận biết) Năm 2023, dân số và GDP của một số quốc gia Tây Nam Á có sự chênh lệch.",
            "answer": true
          },
          {
            "text": "b) (Nhận biết) Năm 2023, Cô-oét có GDP/người cao gấp 2 lần GDP/người của A-rập Xê-út.",
            "answer": false
          },
          {
            "text": "c) (Thông hiểu) Năm 2023, I-xra-en có GDP/người cao nhất, I-rắc có GDP/người thấp nhất.",
            "answer": true
          },
          {
            "text": "d) (Vận dụng) Nguyên nhân chênh lệch GDP/người của một số quốc gia Tây Nam Á chủ yếu do sự bất ổn định về chính trị và biến động của giá dầu mỏ.",
            "answer": true
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
            "text": "a) (Nhận biết) Năm 2024, tỉ lệ dân nông thôn của I-ta-li-a cao hơn của Pháp 10,2%.",
            "answer": false
          },
          {
            "text": "b) (Nhận biết) Năm 2024, Tây Ban Nha có tỉ lệ dân thành thị lớn nhất, Ba Lan có tỉ lệ dân thành thị nhỏ nhất.",
            "answer": true
          },
          {
            "text": "c) (Thông hiểu) Năm 2024, số dân nông thôn của một số quốc gia EU có sự chênh lệch.",
            "answer": true
          },
          {
            "text": "d) (Vận dụng) Tỉ lệ dân thành thị của một số quốc gia EU có sự chênh lệch chủ yếu do khác nhau về số lượng đô thị, quy mô nền kinh tế và lịch sử chuyển cư.",
            "answer": true
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
            "text": "a) (Nhận biết) Miền Tây Bắc và Bắc Trung Bộ có địa hình đa dạng.",
            "answer": true
          },
          {
            "text": "b) (Nhận biết) Sự phân hoá đa dạng của thiên nhiên trong miền tạo thuận lợi chủ yếu để phát triển sản xuất quanh năm, thâm canh, tăng vụ, hình thành các vùng chuyên canh quy mô lớn.",
            "answer": false
          },
          {
            "text": "c) (Thông hiểu) Gió Tây khô nóng hoạt động mạnh ở Bắc Trung Bộ vào nửa đầu mùa hạ do Tín phong bán cầu Nam kết hợp với dãy Trường Sơn Bắc.",
            "answer": false
          },
          {
            "text": "d) (Vận dụng) Sự xuất hiện của thành phần loài sinh vật ôn đới trong miền chủ yếu do tác động của hướng địa hình, gió đông bắc và vị trí xa chí tuyến.",
            "answer": false
          }
        ]
      },
      {
        "type": "tf",
        "text": "Cho thông tin về sự phân hóa đa dạng theo Đông - Tây của thiên nhiên nước ta:",
        "options": [
          {
            "text": "a) (Nhận biết) Vùng đồi núi phân bố chủ yếu ở phía tây và tây bắc của nước ta.",
            "answer": true
          },
          {
            "text": "b) (Nhận biết) Sự khác biệt về khí hậu giữa vùng núi Đông Bắc với Tây Bắc chủ yếu do tác động của hướng địa hình kết hợp với dải hội tụ nhiệt đới và gió đông nam.",
            "answer": false
          },
          {
            "text": "c) (Thông hiểu) Vùng đồng bằng ven biển nước ta có địa hình thấp, khá bằng phẳng do thường xuyên chịu tác động trực tiếp từ biển và vùng đồi núi liền kề.",
            "answer": false
          },
          {
            "text": "d) (Vận dụng) Sự phân hóa của khí hậu theo Đông – Tây tạo thuận lợi chủ yếu để nước ta đổi mới cơ cấu cây trồng, nâng cao chất lượng nông sản đặc sản và phát triển nền nông nghiệp xanh.",
            "answer": true
          }
        ]
      },
      {
        "type": "tf",
        "text": "Về hoạt động nội thương và sự phân hóa giữa các vùng ở nước ta hiện nay:",
        "options": [
          {
            "text": "a) (Nhận biết) Đông Nam Bộ và Đồng bằng sông Hồng là hai vùng có hoạt động nội thương phát triển hàng đầu cả nước.",
            "answer": true
          },
          {
            "text": "b) (Nhận biết) Mạng lưới siêu thị, trung tâm thương mại là hình thức bán lẻ hàng hoá ngày càng phát triển trên thị trường trong nước.",
            "answer": true
          },
          {
            "text": "c) (Thông hiểu) Sức mua của người dân tăng, thị hiếu tiêu dùng thay đổi là nguyên nhân chủ yếu thúc đẩy thương mại điện tử phát triển ở nước ta.",
            "answer": false
          },
          {
            "text": "d) (Vận dụng) Sự phân hoá hoạt động nội thương ở nước ta chủ yếu do sự khác nhau về mạng lưới dân cư và chất lượng lao động giữa các vùng.",
            "answer": false
          }
        ]
      },
      {
        "type": "tf",
        "text": "Về thực trạng và định hướng phát triển của ngành du lịch nước ta:",
        "options": [
          {
            "text": "a) (Nhận biết) Giải pháp chủ yếu để nâng cao chất lượng sản phẩm du lịch là phát triển thương hiệu du lịch quốc gia, ứng dụng công nghệ số trong quảng bá và hoàn thiện hệ thống cơ sở dữ liệu du lịch.",
            "answer": false
          },
          {
            "text": "b) (Nhận biết) Ngành du lịch nước ta phát triển nhanh, đóng góp tích cực vào tăng trưởng kinh tế.",
            "answer": true
          },
          {
            "text": "c) (Thông hiểu) Ngành du lịch nước ta thu hút được nhiều khách du lịch quốc tế chủ yếu do có cơ sở hạ tầng hiện đại, nguồn nhân lực chất lượng cao và áp dụng rộng rãi công nghệ trong thanh toán dịch vụ.",
            "answer": false
          },
          {
            "text": "d) (Vận dụng) Du lịch nước ta đang thúc đẩy ứng dụng công nghệ số để hỗ trợ và gia tăng trải nghiệm cho du khách.",
            "answer": true
          }
        ]
      },
      {
        "type": "tf",
        "text": "Về tình hình sản xuất và ứng phó với biến đổi khí hậu tại Đồng bằng sông Cửu Long:",
        "options": [
          {
            "text": "a) (Nhận biết) Đồng bằng sông Cửu Long là vùng có diện tích và sản lượng lúa lớn nhất nước ta.",
            "answer": true
          },
          {
            "text": "b) (Nhận biết) Khó khăn lớn nhất trong sản xuất lúa ở Đồng bằng sông Cửu Long là nhiệt độ trung bình năm tăng.",
            "answer": false
          },
          {
            "text": "c) (Vận dụng) Vùng có sản lượng lúa lớn, chủ yếu do khí hậu cận xích đạo, nguồn nước phong phú, nhiều giống lúa chất lượng cao.",
            "answer": false
          },
          {
            "text": "d) (Vận dụng) Giải pháp chủ yếu để sử dụng hiệu quả tài nguyên đất trong sản xuất lúa ở Đồng bằng sông Cửu Long là tăng vụ và chuyển đổi mục đích sử dụng đất.",
            "answer": true
          }
        ]
      },
      {
        "type": "tf",
        "text": "Về định hướng chuyển đổi và phát triển cây ăn quả tại Đồng bằng sông Cửu Long:",
        "options": [
          {
            "text": "a) (Nhận biết) Các kĩ thuật canh tác hiện đại được áp dụng trong sản xuất cây ăn quả của vùng chủ yếu nhằm nâng cao năng lực quản lí các sản phẩm đặc thù, phát triển mạng lưới cung ứng nông sản chất lượng cao.",
            "answer": false
          },
          {
            "text": "b) (Nhận biết) Đồng bằng sông Cửu Long có cơ cấu cây ăn quả đa dạng.",
            "answer": true
          },
          {
            "text": "c) (Vận dụng) Sản xuất cây ăn quả của vùng đang phát triển theo hướng nâng cao chất lượng và đảm bảo an toàn cho người tiêu dùng.",
            "answer": true
          },
          {
            "text": "d) (Vận dụng) Diện tích cây ăn quả của vùng tăng chủ yếu do áp dụng quy trình chăm sóc theo hướng bền vững, đa dạng hóa cơ cấu cây trồng.",
            "answer": false
          }
        ]
      }
    ]
  }
};
