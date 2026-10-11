/* =========================================================================
   DỮ LIỆU ĐỊA LÍ KHỐI 11 (Sách Kết nối tri thức)
   Mỗi chủ đề: 20 câu trắc nghiệm (mcq) + 20 câu Đúng/Sai (tf)
   Bản quyền thuộc về số ĐT: 0943.930.787
========================================================================= */

const dataKhoi11 = {
    1: {
        title: "Chủ đề 1: Một số vấn đề Kinh tế - Xã hội Thế giới",
        exercises: {
            mcq: [
                { level: 'nhan_biet', type: 'mcq', text: "Chỉ tiêu HDI (Chỉ số phát triển con người) do Liên hợp quốc đưa ra dựa trên các phương diện nào?", options: ["Quy mô dân số, tỉ lệ thất nghiệp và thu nhập.", "Sức khoẻ, học vấn và thu nhập.", "Cơ cấu kinh tế, tuổi thọ và bình đẳng giới.", "Tốc độ đô thị hoá, giáo dục và GNI."], answer: 1 },
                { level: 'nhan_biet', type: 'mcq', text: "Tổ chức nào sau đây được thành lập với mục tiêu thiết lập và duy trì một nền thương mại toàn cầu tự do, thuận lợi và minh bạch?", options: ["Quỹ Tiền tệ Quốc tế (IMF).", "Tổ chức Thương mại Thế giới (WTO).", "Ngân hàng Thế giới (WB).", "Diễn đàn Hợp tác Kinh tế châu Á – Thái Bình Dương (APEC)."], answer: 1 },
                { level: 'thong_hieu', type: 'mcq', text: "Hệ quả tiêu cực lớn nhất của quá trình toàn cầu hoá kinh tế là gì?", options: ["Cản trở sự dịch chuyển của dòng vốn đầu tư.", "Gia tăng sự phân hoá trình độ phát triển kinh tế và khoảng cách giàu nghèo.", "Thu hẹp quy mô của các công ty đa quốc gia.", "Làm giảm chuyên môn hoá trong sản xuất quốc tế."], answer: 1 },
                { level: 'nhan_biet', type: 'mcq', text: "Vấn đề an ninh phi truyền thống nào sau đây liên quan trực tiếp đến việc đảm bảo đầy đủ năng lượng cho phát triển kinh tế - xã hội?", options: ["An ninh mạng.", "An ninh lương thực.", "An ninh năng lượng.", "An ninh hàng hải."], answer: 2 },
                { level: 'nhan_biet', type: 'mcq', text: "Trong cơ cấu GDP của các nước phát triển, ngành nào chiếm tỉ trọng cao nhất?", options: ["Nông nghiệp.", "Công nghiệp.", "Dịch vụ.", "Khai khoáng."], answer: 2 },
                { level: 'nhan_biet', type: 'mcq', text: "Quốc gia nào sau đây thuộc nhóm nước công nghiệp mới (NICs)?", options: ["Ca-na-đa.", "Hàn Quốc.", "Lào.", "Ni-giê-ri-a."], answer: 1 },
                { level: 'thong_hieu', type: 'mcq', text: "Biểu hiện nào sau đây phản ánh rõ nhất toàn cầu hoá kinh tế?", options: ["Các quốc gia đóng cửa thị trường để bảo hộ sản xuất.", "Thương mại thế giới tăng nhanh, các công ty xuyên quốc gia mở rộng hoạt động.", "Dòng vốn đầu tư quốc tế giảm mạnh.", "Mỗi nước tự sản xuất mọi loại hàng hoá."], answer: 1 },
                { level: 'nhan_biet', type: 'mcq', text: "Tổ chức nào sau đây là tổ chức liên kết kinh tế khu vực?", options: ["Liên hợp quốc (UN).", "Tổ chức Y tế Thế giới (WHO).", "Liên minh châu Âu (EU).", "Tổ chức Giáo dục, Khoa học và Văn hoá Liên hợp quốc (UNESCO)."], answer: 2 },
                { level: 'nhan_biet', type: 'mcq', text: "Việt Nam gia nhập Tổ chức Thương mại Thế giới (WTO) vào năm nào?", options: ["1995.", "2000.", "2007.", "2015."], answer: 2 },
                { level: 'nhan_biet', type: 'mcq', text: "Tổ chức OPEC gồm các nước:", options: ["Xuất khẩu dầu mỏ.", "Xuất khẩu lương thực.", "Có nền kinh tế công nghiệp mới.", "Thuộc khu vực châu Âu."], answer: 0 },
                { level: 'thong_hieu', type: 'mcq', text: "Hệ quả xã hội nổi bật của dân số già ở các nước phát triển là:", options: ["Nguồn lao động trẻ dồi dào.", "Tỉ lệ sinh rất cao.", "Thiếu hụt lao động và tăng chi phí y tế, an sinh xã hội.", "Thất nghiệp thanh niên giảm hoàn toàn."], answer: 2 },
                { level: 'thong_hieu', type: 'mcq', text: "Nguyên nhân chủ yếu thúc đẩy quá trình toàn cầu hoá là:", options: ["Sự tăng nhanh dân số thế giới.", "Tiến bộ khoa học - công nghệ, nhất là công nghệ thông tin và giao thông vận tải.", "Sự suy giảm của thương mại quốc tế.", "Sự đóng cửa biên giới các quốc gia."], answer: 1 },
                { level: 'thong_hieu', type: 'mcq', text: "Vấn đề môi trường toàn cầu nào gây ra hiện tượng nước biển dâng?", options: ["Suy giảm tầng ô-dôn.", "Biến đổi khí hậu, nóng lên toàn cầu.", "Ô nhiễm âm thanh.", "Mưa axit."], answer: 1 },
                { level: 'nhan_biet', type: 'mcq', text: "Vấn đề nào sau đây thuộc an ninh phi truyền thống?", options: ["Chạy đua vũ trang bằng vũ khí thông thường.", "Chiến tranh xâm lược lãnh thổ.", "An ninh mạng.", "Tranh chấp biên giới bằng quân sự."], answer: 2 },
                { level: 'thong_hieu', type: 'mcq', text: "Đặc điểm dân số nổi bật của nhiều nước đang phát triển là:", options: ["Tỉ lệ dân số trẻ lớn, gia tăng dân số tự nhiên còn tương đối cao.", "Dân số già, tỉ suất sinh rất thấp.", "Dân số giảm liên tục.", "Tỉ lệ dân thành thị trên 90%."], answer: 0 },
                { level: 'van_dung', type: 'mcq', text: "Giải pháp nào có ý nghĩa quan trọng để giảm phát thải khí nhà kính?", options: ["Tăng sử dụng than đá.", "Chuyển dịch sang năng lượng sạch, năng lượng tái tạo.", "Mở rộng đốt rừng làm nương rẫy.", "Giảm diện tích rừng."], answer: 1 },
                { level: 'van_dung', type: 'mcq', text: "Một quốc gia có GNI/người cao nhưng HDI thấp, nguyên nhân có thể là:", options: ["Giáo dục, y tế phát triển vượt trội.", "Thu nhập được phân phối rất đồng đều.", "Giáo dục, y tế còn hạn chế và thu nhập phân phối chưa đều.", "Tuổi thọ trung bình rất cao."], answer: 2 },
                { level: 'van_dung_cao', type: 'mcq', text: "Một nước đang phát triển muốn tận dụng toàn cầu hoá để rút ngắn khoảng cách phát triển cần ưu tiên:", options: ["Đóng cửa thị trường.", "Phát triển nguồn nhân lực chất lượng cao, đổi mới công nghệ, hội nhập có chọn lọc.", "Chỉ xuất khẩu nguyên liệu thô.", "Giảm đầu tư cho giáo dục."], answer: 1 },
                { level: 'van_dung_cao', type: 'mcq', text: "Vì sao nước phụ thuộc vào xuất khẩu nông sản thô dễ bị tổn thương trước biến động thị trường thế giới?", options: ["Giá nông sản thô biến động mạnh và giá trị gia tăng thấp.", "Giá nông sản luôn tăng ổn định.", "Nông sản thô không cần thị trường.", "Nông sản thô có giá trị gia tăng rất cao."], answer: 0 },
                { level: 'van_dung', type: 'mcq', text: "Các nước đang phát triển thường gặp thách thức nào khi hội nhập sâu vào kinh tế toàn cầu?", options: ["Không có cơ hội mở rộng thị trường.", "Cạnh tranh gay gắt, nguy cơ phụ thuộc bên ngoài.", "Không thể tiếp cận công nghệ mới.", "Không thu hút được đầu tư nước ngoài."], answer: 1 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về sự khác biệt giữa các nhóm nước phát triển và đang phát triển:",
                    options: [
                        { text: "a) (Nhận biết) Các nước phát triển thường có GNI/người rất cao và cơ cấu dân số già.", answer: true },
                        { text: "b) (Thông hiểu) Trong cơ cấu kinh tế của các nước phát triển, nhóm ngành nông, lâm, thuỷ sản luôn chiếm tỉ trọng cao nhất.", answer: false },
                        { text: "c) (Vận dụng) Hầu hết các nước đang phát triển có tốc độ tăng GDP khá cao và đang chuyển dịch cơ cấu theo hướng công nghiệp hoá.", answer: true },
                        { text: "d) (Vận dụng cao) Dân số già ở các nước phát triển tạo ra lợi thế lớn về nguồn lao động giá rẻ để cạnh tranh với các nước đang phát triển.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về các chỉ tiêu đánh giá trình độ phát triển kinh tế - xã hội:",
                    options: [
                        { text: "a) (Nhận biết) GDP là tổng giá trị hàng hoá và dịch vụ cuối cùng được tạo ra trong lãnh thổ một quốc gia trong một năm.", answer: true },
                        { text: "b) (Thông hiểu) HDI càng cao cho thấy chất lượng cuộc sống của người dân nhìn chung càng tốt.", answer: true },
                        { text: "c) (Vận dụng) Quốc gia có GNI/người cao chắc chắn có HDI cao nhất thế giới.", answer: false },
                        { text: "d) (Vận dụng cao) Tăng tỉ trọng ngành dịch vụ trong cơ cấu GDP là một dấu hiệu của trình độ phát triển kinh tế cao.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về nhóm nước công nghiệp mới (NICs):",
                    options: [
                        { text: "a) (Nhận biết) Các nước NICs có quá trình công nghiệp hoá nhanh và tăng trưởng kinh tế cao.", answer: true },
                        { text: "b) (Thông hiểu) Hàn Quốc và Xin-ga-po từng được xếp vào nhóm NICs.", answer: true },
                        { text: "c) (Vận dụng) Nền kinh tế các nước NICs hiện nay phụ thuộc hoàn toàn vào nông nghiệp.", answer: false },
                        { text: "d) (Vận dụng cao) Đẩy mạnh công nghiệp xuất khẩu và đầu tư cho giáo dục giúp NICs rút ngắn khoảng cách phát triển.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về cuộc cách mạng công nghiệp lần thứ tư:",
                    options: [
                        { text: "a) (Nhận biết) Cách mạng công nghiệp lần thứ tư dựa trên trí tuệ nhân tạo, Internet vạn vật và dữ liệu lớn.", answer: true },
                        { text: "b) (Thông hiểu) Cách mạng công nghiệp lần thứ tư làm thay đổi phương thức sản xuất và nhiều ngành nghề.", answer: true },
                        { text: "c) (Vận dụng) Cách mạng công nghiệp lần thứ tư làm giảm nhu cầu đối với lao động chất lượng cao.", answer: false },
                        { text: "d) (Vận dụng cao) Quốc gia thiếu hạ tầng số và nhân lực chất lượng cao dễ tụt hậu trong cuộc cách mạng này.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về toàn cầu hoá kinh tế:",
                    options: [
                        { text: "a) (Nhận biết) Thương mại thế giới phát triển mạnh là một biểu hiện của toàn cầu hoá kinh tế.", answer: true },
                        { text: "b) (Thông hiểu) Các công ty xuyên quốc gia ngày càng có vai trò lớn trong nền kinh tế thế giới.", answer: true },
                        { text: "c) (Vận dụng) Toàn cầu hoá làm cho mọi quốc gia đều hưởng lợi như nhau.", answer: false },
                        { text: "d) (Vận dụng cao) Toàn cầu hoá thúc đẩy chuyên môn hoá và hợp tác sản xuất giữa các nước, hình thành chuỗi giá trị toàn cầu.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về tác động của toàn cầu hoá đối với các nước đang phát triển:",
                    options: [
                        { text: "a) (Nhận biết) Toàn cầu hoá giúp thu hút đầu tư nước ngoài và mở rộng thị trường.", answer: true },
                        { text: "b) (Thông hiểu) Toàn cầu hoá tạo điều kiện tiếp cận khoa học - công nghệ hiện đại.", answer: true },
                        { text: "c) (Vận dụng) Toàn cầu hoá có thể làm gia tăng khoảng cách giàu nghèo và nguy cơ phụ thuộc bên ngoài.", answer: true },
                        { text: "d) (Vận dụng cao) Chỉ cần mở cửa thị trường là các nước đang phát triển tự động rút ngắn được khoảng cách phát triển.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về khu vực hoá kinh tế:",
                    options: [
                        { text: "a) (Nhận biết) Khu vực hoá kinh tế là xu hướng liên kết giữa các quốc gia gần nhau về vị trí địa lí và có nhiều điểm tương đồng.", answer: true },
                        { text: "b) (Thông hiểu) Liên minh châu Âu (EU) và ASEAN là những biểu hiện của khu vực hoá kinh tế.", answer: true },
                        { text: "c) (Vận dụng) Trong các khối liên kết, hàng rào thuế quan giữa các nước thành viên thường được giảm dần.", answer: true },
                        { text: "d) (Vận dụng cao) Khu vực hoá hoàn toàn mâu thuẫn và không thể diễn ra song song với toàn cầu hoá.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về Tổ chức Thương mại Thế giới (WTO):",
                    options: [
                        { text: "a) (Nhận biết) Trụ sở của WTO đặt tại Giơ-ne-vơ (Thuỵ Sĩ).", answer: true },
                        { text: "b) (Thông hiểu) WTO thúc đẩy tự do hoá thương mại và giải quyết các tranh chấp thương mại giữa các nước thành viên.", answer: true },
                        { text: "c) (Vận dụng) Việt Nam là thành viên thứ 150 của WTO, gia nhập vào năm 2007.", answer: true },
                        { text: "d) (Vận dụng cao) Chức năng chính của WTO là cho các nước nghèo vay vốn phát triển.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về các tổ chức tài chính quốc tế:",
                    options: [
                        { text: "a) (Nhận biết) Quỹ Tiền tệ Quốc tế (IMF) hỗ trợ ổn định hệ thống tiền tệ - tài chính toàn cầu.", answer: true },
                        { text: "b) (Thông hiểu) Ngân hàng Thế giới (WB) cung cấp tài chính cho các dự án phát triển.", answer: true },
                        { text: "c) (Vận dụng) IMF và WTO có chức năng hoàn toàn giống nhau.", answer: false },
                        { text: "d) (Vận dụng cao) Các khoản vay có điều kiện có thể ảnh hưởng đến chính sách kinh tế của nước đi vay.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về Liên minh châu Âu (EU):",
                    options: [
                        { text: "a) (Nhận biết) EU là tổ chức liên kết kinh tế - chính trị gồm nhiều quốc gia châu Âu.", answer: true },
                        { text: "b) (Thông hiểu) Đồng tiền chung ơ-rô (Euro) được nhiều nước EU sử dụng.", answer: true },
                        { text: "c) (Vận dụng) Tất cả các quốc gia thành viên EU đều sử dụng đồng ơ-rô.", answer: false },
                        { text: "d) (Vận dụng cao) Thị trường chung giúp hàng hoá, dịch vụ, vốn và lao động lưu thông thuận lợi trong khối.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về OPEC và APEC:",
                    options: [
                        { text: "a) (Nhận biết) OPEC là tổ chức của các nước xuất khẩu dầu mỏ.", answer: true },
                        { text: "b) (Thông hiểu) APEC là diễn đàn hợp tác kinh tế khu vực châu Á - Thái Bình Dương.", answer: true },
                        { text: "c) (Vận dụng) Việt Nam không phải là thành viên của APEC.", answer: false },
                        { text: "d) (Vận dụng cao) Quyết định về sản lượng khai thác của OPEC có thể tác động đến giá dầu thế giới.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về Liên hợp quốc (UN):",
                    options: [
                        { text: "a) (Nhận biết) Liên hợp quốc được thành lập vào năm 1945.", answer: true },
                        { text: "b) (Thông hiểu) Mục tiêu chính của Liên hợp quốc là duy trì hoà bình và an ninh quốc tế.", answer: true },
                        { text: "c) (Vận dụng) Trụ sở của Liên hợp quốc đặt tại Giơ-ne-vơ.", answer: false },
                        { text: "d) (Vận dụng cao) Hội đồng Bảo an Liên hợp quốc có 5 uỷ viên thường trực.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về dân số già:",
                    options: [
                        { text: "a) (Nhận biết) Dân số già là dân số có tỉ lệ người từ 65 tuổi trở lên cao.", answer: true },
                        { text: "b) (Thông hiểu) Nhật Bản là một trong những nước có dân số già hoá nhanh nhất thế giới.", answer: true },
                        { text: "c) (Vận dụng) Dân số già làm tăng áp lực về chi phí y tế và an sinh xã hội.", answer: true },
                        { text: "d) (Vận dụng cao) Dân số già làm cho nguồn lao động trẻ ngày càng dồi dào.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về dân số của các nước đang phát triển:",
                    options: [
                        { text: "a) (Nhận biết) Gia tăng dân số tự nhiên ở nhiều nước đang phát triển thường cao hơn các nước phát triển.", answer: true },
                        { text: "b) (Thông hiểu) Nhiều nước đang phát triển có cơ cấu dân số trẻ.", answer: true },
                        { text: "c) (Vận dụng) Đô thị hoá ở nhiều nước đang phát triển diễn ra nhanh nhưng chưa gắn chặt với công nghiệp hoá.", answer: true },
                        { text: "d) (Vận dụng cao) Dân số đông luôn là bất lợi đối với phát triển kinh tế.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về biến đổi khí hậu toàn cầu:",
                    options: [
                        { text: "a) (Nhận biết) Nhiệt độ trung bình của Trái Đất có xu hướng tăng lên.", answer: true },
                        { text: "b) (Thông hiểu) Nguyên nhân chủ yếu là phát thải khí nhà kính do hoạt động của con người.", answer: true },
                        { text: "c) (Vận dụng) Nước biển dâng đe doạ các vùng ven biển thấp.", answer: true },
                        { text: "d) (Vận dụng cao) Chỉ các nước đang phát triển gây ra phát thải khí nhà kính.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về an ninh lương thực:",
                    options: [
                        { text: "a) (Nhận biết) An ninh lương thực là mọi người luôn có đủ lương thực an toàn, dinh dưỡng để duy trì cuộc sống.", answer: true },
                        { text: "b) (Thông hiểu) Thiên tai, xung đột và biến đổi khí hậu có thể đe doạ an ninh lương thực.", answer: true },
                        { text: "c) (Vận dụng) An ninh lương thực chỉ phụ thuộc vào sản lượng lương thực, không liên quan đến khả năng tiếp cận và phân phối.", answer: false },
                        { text: "d) (Vận dụng cao) Cải thiện thuỷ lợi, giống cây trồng và giảm lãng phí giúp tăng cường an ninh lương thực.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về an ninh nguồn nước:",
                    options: [
                        { text: "a) (Nhận biết) Nước ngọt là tài nguyên hữu hạn.", answer: true },
                        { text: "b) (Thông hiểu) Dân số tăng và ô nhiễm làm gia tăng nguy cơ thiếu nước.", answer: true },
                        { text: "c) (Vận dụng) Các sông quốc tế có thể gây xung đột lợi ích khi nhiều nước cùng khai thác.", answer: true },
                        { text: "d) (Vận dụng cao) Tình trạng thiếu nước chỉ xảy ra ở các nước nghèo.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về an ninh năng lượng:",
                    options: [
                        { text: "a) (Nhận biết) Năng lượng mặt trời, gió và thuỷ điện là các nguồn năng lượng tái tạo.", answer: true },
                        { text: "b) (Thông hiểu) An ninh năng lượng là bảo đảm cung cấp đủ năng lượng ổn định với giá hợp lí.", answer: true },
                        { text: "c) (Vận dụng) Giá dầu biến động ảnh hưởng nhiều đến các quốc gia nhập khẩu dầu mỏ.", answer: true },
                        { text: "d) (Vận dụng cao) Chỉ cần dựa vào dầu mỏ là có thể bảo đảm phát triển bền vững lâu dài.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về các vấn đề an ninh phi truyền thống:",
                    options: [
                        { text: "a) (Nhận biết) Tấn công mạng và tội phạm công nghệ cao là các thách thức an ninh phi truyền thống.", answer: true },
                        { text: "b) (Thông hiểu) Khủng bố quốc tế là một vấn đề an ninh phi truyền thống.", answer: true },
                        { text: "c) (Vận dụng) An ninh phi truyền thống chỉ phát sinh từ chiến tranh giữa các nước lớn.", answer: false },
                        { text: "d) (Vận dụng cao) Giải quyết các vấn đề an ninh phi truyền thống đòi hỏi sự hợp tác quốc tế.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về các vấn đề môi trường toàn cầu:",
                    options: [
                        { text: "a) (Nhận biết) Suy giảm tầng ô-dôn làm tăng lượng tia tử ngoại xuống mặt đất.", answer: true },
                        { text: "b) (Thông hiểu) Ô nhiễm nước, đất và không khí đang gia tăng ở nhiều nơi.", answer: true },
                        { text: "c) (Vận dụng) Mất rừng làm suy giảm đa dạng sinh học.", answer: true },
                        { text: "d) (Vận dụng cao) Chỉ cần giải quyết ô nhiễm ở một quốc gia là đủ giải quyết các vấn đề môi trường toàn cầu.", answer: false }
                    ]
                }
            ]
        }
    },
    2: {
        title: "Chủ đề 2: Khu vực Đông Nam Á & Tây Nam Á",
        exercises: {
            mcq: [
                { level: 'nhan_biet', type: 'mcq', text: "Đặc điểm địa hình nổi bật nhất của khu vực Đông Nam Á hải đảo là gì?", options: ["Gồm các dải đồng bằng châu thổ rộng lớn, phì nhiêu.", "Chủ yếu là núi trẻ với nhiều núi lửa, đồng bằng nhỏ hẹp ven biển.", "Là các khối sơn nguyên đồ sộ xen kẽ hoang mạc.", "Địa hình bằng phẳng, ít bị chia cắt."], answer: 1 },
                { level: 'nhan_biet', type: 'mcq', text: "Năm 2020, khu vực Đông Nam Á có quy mô dân số là bao nhiêu?", options: ["Khoảng 402,5 triệu người.", "Khoảng 525,0 triệu người.", "Khoảng 668,4 triệu người.", "Khoảng 768,0 triệu người."], answer: 2 },
                { level: 'nhan_biet', type: 'mcq', text: "Tài nguyên khoáng sản quan trọng nhất, mang lại nguồn thu ngoại tệ khổng lồ cho các quốc gia Tây Nam Á là gì?", options: ["Than đá và quặng sắt.", "Dầu mỏ và khí tự nhiên.", "Vàng và kim cương.", "Thiếc và bô-xít."], answer: 1 },
                { level: 'nhan_biet', type: 'mcq', text: "Đâu là ba trụ cột chính của Cộng đồng ASEAN được thiết lập năm 2015?", options: ["Chính trị - An ninh, Kinh tế, Văn hoá - Xã hội.", "Kinh tế, Giáo dục, Y tế.", "Ngoại giao, Quân sự, Thương mại.", "Tài chính, Môi trường, Nhân quyền."], answer: 0 },
                { level: 'nhan_biet', type: 'mcq', text: "Quốc gia nào sau đây thuộc Đông Nam Á lục địa?", options: ["Phi-líp-pin.", "In-đô-nê-xi-a.", "Bru-nây.", "Lào."], answer: 3 },
                { level: 'nhan_biet', type: 'mcq', text: "Quốc gia đông dân nhất Đông Nam Á là:", options: ["Việt Nam.", "Phi-líp-pin.", "In-đô-nê-xi-a.", "Thái Lan."], answer: 2 },
                { level: 'nhan_biet', type: 'mcq', text: "Đông Nam Á nằm giữa hai đại dương nào?", options: ["Đại Tây Dương và Ấn Độ Dương.", "Thái Bình Dương và Ấn Độ Dương.", "Thái Bình Dương và Đại Tây Dương.", "Bắc Băng Dương và Ấn Độ Dương."], answer: 1 },
                { level: 'thong_hieu', type: 'mcq', text: "Phần lớn lãnh thổ Đông Nam Á có khí hậu:", options: ["Ôn đới lục địa.", "Hàn đới.", "Nhiệt đới gió mùa và xích đạo.", "Hoang mạc khô nóng."], answer: 2 },
                { level: 'nhan_biet', type: 'mcq', text: "Cây lương thực quan trọng nhất của Đông Nam Á là:", options: ["Lúa mì.", "Lúa gạo.", "Khoai tây.", "Cao lương."], answer: 1 },
                { level: 'thong_hieu', type: 'mcq', text: "In-đô-nê-xi-a và Ma-lai-xi-a nổi bật trên thế giới về sản xuất sản phẩm từ cây nào?", options: ["Cọ dầu.", "Chè.", "Bông.", "Củ cải đường."], answer: 0 },
                { level: 'nhan_biet', type: 'mcq', text: "Khu vực Tây Nam Á nằm ở ngã ba của ba châu lục nào?", options: ["Á, Âu, Phi.", "Á, Âu, Mỹ.", "Á, Phi, Đại Dương.", "Âu, Phi, Mỹ."], answer: 0 },
                { level: 'nhan_biet', type: 'mcq', text: "Tôn giáo phổ biến ở phần lớn các nước Tây Nam Á là:", options: ["Phật giáo.", "Hồi giáo.", "Ấn Độ giáo.", "Thiên Chúa giáo."], answer: 1 },
                { level: 'thong_hieu', type: 'mcq', text: "Đặc điểm khí hậu nổi bật của Tây Nam Á là:", options: ["Nóng ẩm quanh năm, mưa nhiều.", "Lạnh giá quanh năm.", "Khô hạn, hoang mạc và bán hoang mạc chiếm diện tích lớn.", "Ôn hoà, mưa quanh năm."], answer: 2 },
                { level: 'nhan_biet', type: 'mcq', text: "Quốc gia nào ở Tây Nam Á là nước xuất khẩu dầu mỏ hàng đầu thế giới?", options: ["Ả Rập Xê-út.", "Xi-ri.", "Lê-ba-non.", "Gioóc-đa-ni."], answer: 0 },
                { level: 'thong_hieu', type: 'mcq', text: "Yếu tố nào cản trở lớn nhất đến phát triển kinh tế - xã hội của nhiều nước Tây Nam Á?", options: ["Thiếu lao động trẻ.", "Xung đột, bất ổn chính trị kéo dài.", "Thiếu ánh sáng Mặt Trời.", "Nhiệt độ quá thấp."], answer: 1 },
                { level: 'van_dung_cao', type: 'mcq', text: "Vì sao nhiều nước Tây Nam Á đẩy mạnh du lịch, tài chính, công nghệ thay vì chỉ dựa vào dầu mỏ?", options: ["Để giảm phụ thuộc vào dầu mỏ có giá biến động.", "Vì đã cạn kiệt hoàn toàn dầu mỏ.", "Vì dầu mỏ không có giá trị.", "Vì dân số quá ít."], answer: 0 },
                { level: 'van_dung', type: 'mcq', text: "Vì sao Đông Nam Á thuận lợi để phát triển nông nghiệp nhiệt đới?", options: ["Khí hậu nóng ẩm, đất phù sa và đất đỏ badan, nguồn nước dồi dào.", "Khí hậu lạnh khô quanh năm.", "Địa hình toàn núi cao.", "Đất hoang mạc rộng lớn."], answer: 0 },
                { level: 'van_dung', type: 'mcq', text: "Xu hướng chuyển dịch cơ cấu kinh tế của các nước Đông Nam Á là:", options: ["Tăng tỉ trọng nông nghiệp.", "Giảm công nghiệp và dịch vụ.", "Giảm tỉ trọng nông nghiệp, tăng công nghiệp và dịch vụ.", "Chỉ phát triển khai khoáng."], answer: 2 },
                { level: 'van_dung_cao', type: 'mcq', text: "Việc hình thành Cộng đồng Kinh tế ASEAN (AEC) tạo ra thách thức nào cho các doanh nghiệp nhỏ?", options: ["Mất hoàn toàn thị trường nội địa.", "Cạnh tranh gay gắt hơn từ hàng hoá, dịch vụ của các nước trong khối.", "Không được xuất khẩu hàng hoá.", "Phải dùng chung một đồng tiền."], answer: 1 },
                { level: 'nhan_biet', type: 'mcq', text: "Việt Nam gia nhập ASEAN vào năm nào?", options: ["1967.", "1984.", "1995.", "2007."], answer: 2 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về đặc điểm kinh tế - xã hội của khu vực Tây Nam Á:",
                    options: [
                        { text: "a) (Nhận biết) Tây Nam Á là nơi khởi nguồn của ba tôn giáo lớn: Do Thái giáo, Ki-tô giáo và Hồi giáo.", answer: true },
                        { text: "b) (Thông hiểu) Do điều kiện khí hậu nóng ẩm, nông nghiệp trồng lúa nước là ngành kinh tế chủ đạo của mọi quốc gia Tây Nam Á.", answer: false },
                        { text: "c) (Vận dụng) Sự phân bố tài nguyên dầu mỏ không đều là một trong những nguyên nhân gây ra sự chênh lệch trình độ phát triển giữa các nước trong khu vực.", answer: true },
                        { text: "d) (Vận dụng cao) Việc phụ thuộc quá lớn vào xuất khẩu dầu mỏ khiến nền kinh tế Tây Nam Á thiếu ổn định khi giá dầu thế giới biến động, buộc nhiều nước phải chuyển hướng sang kinh tế tri thức.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về vị trí địa lí của khu vực Đông Nam Á:",
                    options: [
                        { text: "a) (Nhận biết) Đông Nam Á nằm ở phía đông nam châu Á, giữa Thái Bình Dương và Ấn Độ Dương.", answer: true },
                        { text: "b) (Thông hiểu) Đông Nam Á gồm hai bộ phận là Đông Nam Á lục địa và Đông Nam Á hải đảo.", answer: true },
                        { text: "c) (Vận dụng) Vị trí cầu nối giữa châu Á và châu Đại Dương cùng các tuyến hàng hải quan trọng như eo biển Ma-lắc-ca tạo lợi thế về giao thương.", answer: true },
                        { text: "d) (Vận dụng cao) Phần lớn lãnh thổ Đông Nam Á nằm trong đới khí hậu ôn đới.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về đặc điểm tự nhiên của khu vực Đông Nam Á:",
                    options: [
                        { text: "a) (Nhận biết) Đông Nam Á lục địa có nhiều dãy núi chạy theo hướng bắc - nam hoặc tây bắc - đông nam xen các thung lũng và đồng bằng.", answer: true },
                        { text: "b) (Thông hiểu) Đông Nam Á hải đảo có nhiều núi lửa và động đất.", answer: true },
                        { text: "c) (Vận dụng) Các sông lớn như Mê Công, Ê-ra-oa-đi bồi đắp nên những đồng bằng châu thổ rộng lớn.", answer: true },
                        { text: "d) (Vận dụng cao) Khu vực Đông Nam Á không chịu ảnh hưởng của gió mùa.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về khí hậu và thiên tai ở Đông Nam Á:",
                    options: [
                        { text: "a) (Nhận biết) Khí hậu Đông Nam Á lục địa mang tính chất nhiệt đới gió mùa, Đông Nam Á hải đảo mang tính chất xích đạo nóng ẩm.", answer: true },
                        { text: "b) (Thông hiểu) Đông Nam Á thường chịu các thiên tai như bão, lũ lụt, hạn hán.", answer: true },
                        { text: "c) (Vận dụng) Đông Nam Á hải đảo có nhiệt độ mát lạnh quanh năm.", answer: false },
                        { text: "d) (Vận dụng cao) Biến đổi khí hậu làm tăng nguy cơ ngập mặn ở các đồng bằng ven biển như Đồng bằng sông Cửu Long.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về dân cư, xã hội Đông Nam Á:",
                    options: [
                        { text: "a) (Nhận biết) Đông Nam Á có dân số đông và cơ cấu dân số trẻ.", answer: true },
                        { text: "b) (Thông hiểu) Nhiều quốc gia Đông Nam Á có nhiều dân tộc, tôn giáo nên văn hoá đa dạng.", answer: true },
                        { text: "c) (Vận dụng) Dân cư phân bố đồng đều trên toàn bộ lãnh thổ khu vực.", answer: false },
                        { text: "d) (Vận dụng cao) Nguồn lao động dồi dào, chi phí thấp là lợi thế thu hút đầu tư nước ngoài.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về nông nghiệp Đông Nam Á:",
                    options: [
                        { text: "a) (Nhận biết) Lúa gạo là cây lương thực quan trọng nhất của khu vực.", answer: true },
                        { text: "b) (Thông hiểu) Cao su, cà phê, hồ tiêu, cọ dầu là các cây công nghiệp quan trọng.", answer: true },
                        { text: "c) (Vận dụng) Thái Lan và Việt Nam nằm trong nhóm các nước xuất khẩu gạo hàng đầu thế giới.", answer: true },
                        { text: "d) (Vận dụng cao) Chăn nuôi chiếm tỉ trọng lớn nhất trong giá trị sản xuất nông nghiệp của khu vực.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về công nghiệp Đông Nam Á:",
                    options: [
                        { text: "a) (Nhận biết) Công nghiệp phát triển nhanh với các ngành điện tử, dệt may, chế biến.", answer: true },
                        { text: "b) (Thông hiểu) Xin-ga-po, Ma-lai-xi-a, Thái Lan là những nước có công nghiệp phát triển hơn trong khu vực.", answer: true },
                        { text: "c) (Vận dụng) Khu vực thu hút nhiều vốn đầu tư nước ngoài và tham gia sâu vào chuỗi giá trị toàn cầu.", answer: true },
                        { text: "d) (Vận dụng cao) Công nghiệp Đông Nam Á chỉ có khai khoáng thô, không có công nghiệp chế biến.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về dịch vụ và du lịch ở Đông Nam Á:",
                    options: [
                        { text: "a) (Nhận biết) Du lịch phát triển nhờ cảnh quan thiên nhiên và di sản văn hoá phong phú.", answer: true },
                        { text: "b) (Thông hiểu) Thái Lan, Xin-ga-po là những nước đón lượng khách du lịch quốc tế lớn.", answer: true },
                        { text: "c) (Vận dụng) Tỉ trọng ngành dịch vụ trong GDP của nhiều nước ngày càng tăng.", answer: true },
                        { text: "d) (Vận dụng cao) Các nước Đông Nam Á không có tuyến vận tải biển quốc tế quan trọng.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về Hiệp hội các quốc gia Đông Nam Á (ASEAN):",
                    options: [
                        { text: "a) (Nhận biết) ASEAN được thành lập năm 1967 tại Băng Cốc.", answer: true },
                        { text: "b) (Thông hiểu) Mục tiêu của ASEAN là duy trì hoà bình, ổn định và thúc đẩy hợp tác phát triển.", answer: true },
                        { text: "c) (Vận dụng) Việt Nam gia nhập ASEAN vào năm 1995.", answer: true },
                        { text: "d) (Vận dụng cao) Một nguyên tắc của ASEAN là các nước thành viên can thiệp vào công việc nội bộ của nhau.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về Cộng đồng Kinh tế ASEAN (AEC):",
                    options: [
                        { text: "a) (Nhận biết) AEC được hình thành vào năm 2015.", answer: true },
                        { text: "b) (Thông hiểu) AEC hướng tới thị trường và cơ sở sản xuất thống nhất, tạo thuận lợi cho lưu chuyển hàng hoá, dịch vụ, vốn.", answer: true },
                        { text: "c) (Vận dụng) AEC mở rộng thị trường cho doanh nghiệp nhưng cũng làm tăng cạnh tranh.", answer: true },
                        { text: "d) (Vận dụng cao) AEC xoá bỏ hoàn toàn mọi khác biệt về thể chế nên các nước dùng chung một đồng tiền.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về tài nguyên thiên nhiên Đông Nam Á:",
                    options: [
                        { text: "a) (Nhận biết) Khu vực giàu khoáng sản như thiếc, dầu mỏ, khí tự nhiên.", answer: true },
                        { text: "b) (Thông hiểu) Rừng nhiệt đới rộng lớn, đa dạng sinh học cao.", answer: true },
                        { text: "c) (Vận dụng) Khai thác tài nguyên quá mức có thể gây suy giảm rừng và ô nhiễm môi trường.", answer: true },
                        { text: "d) (Vận dụng cao) Tài nguyên khoáng sản phân bố đều giữa các nước nên không có chênh lệch về lợi thế.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về vị trí và lãnh thổ khu vực Tây Nam Á:",
                    options: [
                        { text: "a) (Nhận biết) Tây Nam Á nằm ở ngã ba của ba châu lục: Á, Âu, Phi.", answer: true },
                        { text: "b) (Thông hiểu) Khu vực tiếp giáp nhiều biển và vịnh như Biển Đỏ, Địa Trung Hải, vịnh Péc-xích.", answer: true },
                        { text: "c) (Vận dụng) Vị trí nằm trên các tuyến hàng hải quan trọng khiến khu vực có ý nghĩa chiến lược.", answer: true },
                        { text: "d) (Vận dụng cao) Tây Nam Á hoàn toàn không tiếp giáp với biển.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về tự nhiên Tây Nam Á:",
                    options: [
                        { text: "a) (Nhận biết) Khu vực có nhiều sơn nguyên và hoang mạc.", answer: true },
                        { text: "b) (Thông hiểu) Khí hậu chủ yếu là khô nóng.", answer: true },
                        { text: "c) (Vận dụng) Sông ngòi dày đặc, nguồn nước dồi dào trên khắp khu vực.", answer: false },
                        { text: "d) (Vận dụng cao) Thiếu nước là hạn chế lớn đối với nông nghiệp và đô thị ở nhiều nơi.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về dầu mỏ và kinh tế Tây Nam Á:",
                    options: [
                        { text: "a) (Nhận biết) Tây Nam Á có trữ lượng dầu mỏ và khí tự nhiên lớn.", answer: true },
                        { text: "b) (Thông hiểu) Dầu mỏ tập trung nhiều ở khu vực ven vịnh Péc-xích.", answer: true },
                        { text: "c) (Vận dụng) Dầu mỏ là nguồn thu ngoại tệ lớn của nhiều quốc gia trong khu vực.", answer: true },
                        { text: "d) (Vận dụng cao) Mọi quốc gia Tây Nam Á đều giàu tài nguyên dầu mỏ như nhau.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về dân cư - xã hội Tây Nam Á:",
                    options: [
                        { text: "a) (Nhận biết) Phần lớn dân cư theo đạo Hồi.", answer: true },
                        { text: "b) (Thông hiểu) Dân cư tập trung nhiều ở ven biển, thung lũng sông và các ốc đảo.", answer: true },
                        { text: "c) (Vận dụng) Dân cư phân bố đồng đều trên các hoang mạc rộng lớn.", answer: false },
                        { text: "d) (Vận dụng cao) Nhiều nước vùng Vịnh có tỉ lệ đô thị hoá cao nhờ nguồn thu từ dầu mỏ.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về xung đột và bất ổn ở Tây Nam Á:",
                    options: [
                        { text: "a) (Nhận biết) Khu vực có nhiều xung đột sắc tộc, tôn giáo và tranh chấp tài nguyên.", answer: true },
                        { text: "b) (Thông hiểu) Xung đột ảnh hưởng tiêu cực đến phát triển kinh tế và đời sống người dân.", answer: true },
                        { text: "c) (Vận dụng) Xung đột góp phần làm gia tăng làn sóng di cư, tị nạn.", answer: true },
                        { text: "d) (Vận dụng cao) Giá dầu thế giới hoàn toàn không chịu tác động của tình hình chính trị ở Tây Nam Á.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về chuyển dịch kinh tế ở Tây Nam Á:",
                    options: [
                        { text: "a) (Nhận biết) Một số nước đầu tư phát triển công nghiệp lọc - hoá dầu.", answer: true },
                        { text: "b) (Thông hiểu) Một số nước đẩy mạnh du lịch, tài chính, dịch vụ vận tải.", answer: true },
                        { text: "c) (Vận dụng) Mục tiêu đa dạng hoá nền kinh tế là để giảm phụ thuộc vào dầu mỏ.", answer: true },
                        { text: "d) (Vận dụng cao) Hiện nay các nước Tây Nam Á đã hoàn toàn không còn dựa vào xuất khẩu dầu mỏ.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về Biển Đông:",
                    options: [
                        { text: "a) (Nhận biết) Biển Đông là biển rộng nằm ở phía đông nam lục địa châu Á, tiếp giáp với nhiều quốc gia.", answer: true },
                        { text: "b) (Thông hiểu) Biển Đông giàu tài nguyên hải sản và dầu khí.", answer: true },
                        { text: "c) (Vận dụng) Biển Đông có tuyến hàng hải quốc tế quan trọng.", answer: true },
                        { text: "d) (Vận dụng cao) Biển Đông chỉ có ý nghĩa quan trọng đối với một quốc gia ven biển.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "So sánh Đông Nam Á với Tây Nam Á:",
                    options: [
                        { text: "a) (Nhận biết) Đông Nam Á có khí hậu nóng ẩm, còn Tây Nam Á có khí hậu khô nóng là chủ yếu.", answer: true },
                        { text: "b) (Thông hiểu) Đông Nam Á có nhiều vùng trồng lúa nước, còn Tây Nam Á có nhiều khu vực khô hạn.", answer: true },
                        { text: "c) (Vận dụng) Kinh tế Tây Nam Á phụ thuộc nhiều vào dầu mỏ, còn Đông Nam Á có cơ cấu ngành đa dạng hơn.", answer: true },
                        { text: "d) (Vận dụng cao) Cả hai khu vực đều có dân cư tập trung chủ yếu ở các hoang mạc.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về hợp tác giữa Việt Nam và ASEAN:",
                    options: [
                        { text: "a) (Nhận biết) Việt Nam là thành viên của ASEAN.", answer: true },
                        { text: "b) (Thông hiểu) ASEAN là một trong những đối tác kinh tế quan trọng của Việt Nam.", answer: true },
                        { text: "c) (Vận dụng) Hợp tác ASEAN giúp Việt Nam mở rộng thị trường và thu hút đầu tư.", answer: true },
                        { text: "d) (Vận dụng cao) Việt Nam không phải đối mặt với thách thức nào khi hội nhập trong ASEAN.", answer: false }
                    ]
                }
            ]
        }
    }
};
