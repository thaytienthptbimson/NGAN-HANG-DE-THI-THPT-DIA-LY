/* =========================================================================
   DỮ LIỆU ĐỊA LÍ KHỐI 10 (Sách Kết nối tri thức)
   Mỗi chủ đề: 20 câu trắc nghiệm (mcq) + 20 câu Đúng/Sai (tf)
   Bản quyền thuộc về số ĐT: 0943.930.787
========================================================================= */

const dataKhoi10 = {
    1: {
        title: "Chủ đề 1: Trái Đất và Thạch quyển",
        exercises: {
            mcq: [
                { level: 'nhan_biet', type: 'mcq', text: "Vỏ Trái Đất được cấu tạo chủ yếu bởi hai tầng đá nào sau đây?", options: ["Tầng trầm tích và tầng macma.", "Tầng granit và tầng badan.", "Tầng đá vôi và tầng đá phiến.", "Tầng macma và tầng biến chất."], answer: 1 },
                { level: 'nhan_biet', type: 'mcq', text: "Theo thuyết kiến tạo mảng, thạch quyển bị gãy vỡ và tách ra thành các mảng kiến tạo di chuyển trên lớp nào?", options: ["Lớp vỏ Trái Đất.", "Lớp nhân ngoài.", "Lớp quánh dẻo của manti.", "Lớp trầm tích đáy đại dương."], answer: 2 },
                { level: 'thong_hieu', type: 'mcq', text: "Hiện tượng dãy Hi-ma-lay-a được hình thành cao và đồ sộ là kết quả của vận động kiến tạo nào?", options: ["Hai mảng đại dương tách xa nhau.", "Mảng lục địa xô húc với mảng đại dương.", "Hai mảng lục địa Ấn Độ - Ô-xtrây-li-a và Âu - Á xô vào nhau.", "Hai mảng lục địa trượt ngang qua nhau."], answer: 2 },
                { level: 'nhan_biet', type: 'mcq', text: "Ngoại lực là lực diễn ra trên bề mặt Trái Đất có nguồn gốc chủ yếu từ đâu?", options: ["Sự phân huỷ các chất phóng xạ trong lòng đất.", "Nguồn năng lượng bức xạ mặt trời.", "Lực hấp dẫn của Mặt Trăng.", "Chuyển động tự quay của Trái Đất."], answer: 1 },
                { level: 'nhan_biet', type: 'mcq', text: "Cấu trúc của Trái Đất gồm các lớp theo thứ tự từ ngoài vào trong là:", options: ["Vỏ Trái Đất, lớp manti, nhân.", "Lớp manti, vỏ Trái Đất, nhân.", "Vỏ Trái Đất, nhân, lớp manti.", "Nhân, lớp manti, vỏ Trái Đất."], answer: 0 },
                { level: 'nhan_biet', type: 'mcq', text: "Thạch quyển bao gồm:", options: ["Toàn bộ lớp manti.", "Vỏ Trái Đất và phần trên cùng của lớp manti.", "Vỏ Trái Đất và nhân ngoài.", "Chỉ lớp vỏ lục địa."], answer: 1 },
                { level: 'thong_hieu', type: 'mcq', text: "Điểm khác nhau cơ bản giữa vỏ lục địa và vỏ đại dương là:", options: ["Vỏ lục địa mỏng hơn và không có tầng granit.", "Vỏ đại dương dày hơn và có tầng granit.", "Cả hai loại vỏ có độ dày như nhau.", "Vỏ lục địa dày hơn và có tầng granit."], answer: 3 },
                { level: 'nhan_biet', type: 'mcq', text: "Mảng kiến tạo nào sau đây chủ yếu là mảng đại dương?", options: ["Mảng Âu - Á.", "Mảng Phi.", "Mảng Thái Bình Dương.", "Mảng Bắc Mỹ."], answer: 2 },
                { level: 'nhan_biet', type: 'mcq', text: "Nội lực có nguồn gốc chủ yếu từ:", options: ["Bức xạ Mặt Trời.", "Lực hấp dẫn của Mặt Trăng.", "Hoạt động của sinh vật.", "Năng lượng bên trong lòng Trái Đất."], answer: 3 },
                { level: 'thong_hieu', type: 'mcq', text: "Vận động theo phương thẳng đứng của vỏ Trái Đất thường dẫn đến hiện tượng nào sau đây?", options: ["Uốn nếp và đứt gãy.", "Núi lửa phun trào.", "Biển tiến, biển thoái.", "Phong hoá đá."], answer: 2 },
                { level: 'nhan_biet', type: 'mcq', text: "Quá trình nào sau đây thuộc ngoại lực?", options: ["Phong hoá.", "Uốn nếp.", "Đứt gãy.", "Động đất."], answer: 0 },
                { level: 'nhan_biet', type: 'mcq', text: "Địa hình nào sau đây do quá trình bồi tụ của sông tạo nên?", options: ["Thung lũng hình chữ V.", "Hẻm vực sâu.", "Thác nước.", "Đồng bằng châu thổ."], answer: 3 },
                { level: 'nhan_biet', type: 'mcq', text: "Cồn cát, đụn cát ở ven biển và hoang mạc chủ yếu là kết quả hoạt động của:", options: ["Gió vận chuyển và bồi tụ cát.", "Sóng biển mài mòn.", "Nước chảy tràn.", "Băng hà di chuyển."], answer: 0 },
                { level: 'van_dung', type: 'mcq', text: "Ở hoang mạc, đá bị nứt vỡ do chênh lệch nhiệt độ ngày đêm lớn là biểu hiện của:", options: ["Phong hoá hoá học.", "Phong hoá sinh học.", "Phong hoá lí học.", "Quá trình bồi tụ."], answer: 2 },
                { level: 'van_dung', type: 'mcq', text: "Địa hình caxtơ với hang động, thạch nhũ hình thành chủ yếu do:", options: ["Gió thổi mài mòn đá granit.", "Nước hoà tan đá vôi.", "Băng hà khoét sâu thung lũng.", "Sóng biển vỗ vào vách đá."], answer: 1 },
                { level: 'thong_hieu', type: 'mcq', text: "Hiện tượng luân phiên ngày và đêm là hệ quả của:", options: ["Trái Đất chuyển động quanh Mặt Trời.", "Trục Trái Đất nghiêng không đổi hướng.", "Trái Đất hình khối cầu và tự quay quanh trục.", "Mặt Trời chuyển động quanh Trái Đất."], answer: 2 },
                { level: 'van_dung', type: 'mcq', text: "Vào ngày 22/6, ở Bắc bán cầu có hiện tượng nào sau đây?", options: ["Ngày dài hơn đêm.", "Ngày ngắn hơn đêm.", "Ngày dài bằng đêm.", "Đêm kéo dài 24 giờ ở mọi nơi."], answer: 0 },
                { level: 'van_dung', type: 'mcq', text: "Ngày 22/6, Mặt Trời lên thiên đỉnh ở vĩ tuyến nào?", options: ["Xích đạo.", "Chí tuyến Bắc (23°27'B).", "Chí tuyến Nam (23°27'N).", "Vòng cực Bắc (66°33'B)."], answer: 1 },
                { level: 'van_dung_cao', type: 'mcq', text: "Ở nơi mảng đại dương xô vào mảng lục địa, mảng đại dương thường bị chìm xuống dưới. Hệ quả địa hình thường thấy là:", options: ["Hình thành sống núi ngầm giữa đại dương.", "Hình thành rãnh sâu đại dương, núi lửa và dãy núi ven lục địa.", "Hình thành đồng bằng châu thổ rộng lớn.", "Hình thành các hoang mạc rộng."], answer: 1 },
                { level: 'van_dung_cao', type: 'mcq', text: "Ở nơi hai mảng kiến tạo tách xa nhau dưới đáy đại dương, hiện tượng nào sau đây thường xảy ra?", options: ["Macma trào lên, tạo vỏ đại dương mới và sống núi ngầm.", "Vỏ đại dương bị nén ép, uốn nếp thành núi cao.", "Vỏ lục địa bị nâng lên rất cao.", "Các mảng đứng yên, không có hoạt động macma."], answer: 0 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về tác động của nội lực và ngoại lực đến địa hình bề mặt Trái Đất:",
                    options: [
                        { text: "a) (Nhận biết) Nội lực sinh ra hiện tượng uốn nếp và đứt gãy làm bề mặt Trái Đất trở nên gồ ghề.", answer: true },
                        { text: "b) (Thông hiểu) Bóc mòn và bồi tụ là hai trong số các quá trình ngoại lực làm biến đổi bề mặt địa hình.", answer: true },
                        { text: "c) (Vận dụng) Sự hình thành các đồng bằng châu thổ rộng lớn như đồng bằng sông Hồng là kết quả độc lập của quá trình nội lực hạ lún.", answer: false },
                        { text: "d) (Vận dụng cao) Nội lực và ngoại lực là hai lực đối nghịch nhau nhưng xảy ra đồng thời, tác động qua lại tạo nên sự đa dạng của địa hình Trái Đất.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về cấu trúc của Trái Đất:",
                    options: [
                        { text: "a) (Nhận biết) Trái Đất gồm ba lớp chính là vỏ Trái Đất, lớp manti và nhân.", answer: true },
                        { text: "b) (Thông hiểu) Lớp manti có độ dày lớn nhất, chiếm phần lớn thể tích Trái Đất.", answer: true },
                        { text: "c) (Vận dụng) Toàn bộ nhân Trái Đất ở trạng thái rắn.", answer: false },
                        { text: "d) (Vận dụng cao) Nhiệt độ và áp suất tăng dần theo độ sâu, tạo nguồn năng lượng cho nội lực.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về vỏ Trái Đất và thạch quyển:",
                    options: [
                        { text: "a) (Nhận biết) Thạch quyển gồm vỏ Trái Đất và phần trên cùng của lớp manti.", answer: true },
                        { text: "b) (Thông hiểu) Vỏ đại dương dày hơn vỏ lục địa.", answer: false },
                        { text: "c) (Vận dụng) Các mảng kiến tạo di chuyển rất chậm, chỉ vài centimet mỗi năm.", answer: true },
                        { text: "d) (Vận dụng cao) Vì các mảng di chuyển chậm nên không thể làm biến đổi lớn địa hình trong thời gian địa chất dài.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về ranh giới các mảng kiến tạo:",
                    options: [
                        { text: "a) (Nhận biết) Nơi hai mảng tách xa nhau dưới đáy đại dương thường hình thành sống núi ngầm.", answer: true },
                        { text: "b) (Thông hiểu) Khi mảng đại dương xô vào mảng lục địa, mảng đại dương thường chìm xuống dưới.", answer: true },
                        { text: "c) (Vận dụng) Vùng ven Thái Bình Dương có nhiều động đất, núi lửa vì nằm ở nơi tiếp xúc của các mảng kiến tạo.", answer: true },
                        { text: "d) (Vận dụng cao) Ở ranh giới hai mảng trượt ngang qua nhau thì không bao giờ xảy ra động đất.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về động đất và núi lửa:",
                    options: [
                        { text: "a) (Nhận biết) Động đất là hiện tượng rung chuyển đột ngột của vỏ Trái Đất.", answer: true },
                        { text: "b) (Thông hiểu) Núi lửa phun trào đưa macma, tro bụi và khí từ lòng đất lên bề mặt.", answer: true },
                        { text: "c) (Vận dụng) Phần lớn núi lửa đang hoạt động trên thế giới tập trung ở vành đai lửa Thái Bình Dương.", answer: true },
                        { text: "d) (Vận dụng cao) Sóng thần chỉ do bão gây ra, không liên quan đến động đất.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về các vận động kiến tạo (nội lực):",
                    options: [
                        { text: "a) (Nhận biết) Vận động theo phương nằm ngang làm đá bị uốn nếp hoặc đứt gãy.", answer: true },
                        { text: "b) (Thông hiểu) Vận động theo phương thẳng đứng làm một khu vực nâng lên hoặc hạ xuống.", answer: true },
                        { text: "c) (Vận dụng) Hiện tượng biển tiến, biển thoái liên quan đến vận động nâng lên, hạ xuống của vỏ Trái Đất.", answer: true },
                        { text: "d) (Vận dụng cao) Dãy Hi-ma-lay-a hình thành chủ yếu do ngoại lực bóc mòn.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về quá trình phong hoá:",
                    options: [
                        { text: "a) (Nhận biết) Phong hoá là quá trình phá huỷ và làm biến đổi đá, khoáng vật tại chỗ.", answer: true },
                        { text: "b) (Thông hiểu) Phong hoá lí học làm đá vỡ vụn nhưng không làm thay đổi thành phần hoá học của đá.", answer: true },
                        { text: "c) (Vận dụng) Ở vùng khí hậu nóng ẩm, phong hoá hoá học và sinh học diễn ra mạnh.", answer: true },
                        { text: "d) (Vận dụng cao) Phong hoá chỉ xảy ra khi vật liệu được vận chuyển đi nơi khác.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về tác động của nước chảy (sông):",
                    options: [
                        { text: "a) (Nhận biết) Xâm thực làm lòng sông và thung lũng bị khoét sâu, mở rộng.", answer: true },
                        { text: "b) (Thông hiểu) Thung lũng hình chữ V thường gặp ở vùng thượng lưu, nơi địa hình dốc.", answer: true },
                        { text: "c) (Vận dụng) Đồng bằng châu thổ ở hạ lưu hình thành chủ yếu nhờ bồi tụ phù sa.", answer: true },
                        { text: "d) (Vận dụng cao) Ở hạ lưu, sông chủ yếu xâm thực sâu mạnh hơn bồi tụ.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về tác động của gió và sóng biển:",
                    options: [
                        { text: "a) (Nhận biết) Gió tạo ra các dạng địa hình như nấm đá, cồn cát.", answer: true },
                        { text: "b) (Thông hiểu) Sóng biển mài mòn chân vách đá, tạo vách biển và hang sóng vỗ.", answer: true },
                        { text: "c) (Vận dụng) Cồn cát ven biển là kết quả vận chuyển và bồi tụ cát của gió.", answer: true },
                        { text: "d) (Vận dụng cao) Gió chỉ có tác dụng bồi tụ mà không có tác dụng mài mòn.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về địa hình caxtơ:",
                    options: [
                        { text: "a) (Nhận biết) Địa hình caxtơ phát triển ở vùng đá vôi.", answer: true },
                        { text: "b) (Thông hiểu) Nước hoà tan đá vôi tạo nên hang động và thạch nhũ.", answer: true },
                        { text: "c) (Vận dụng) Vịnh Hạ Long là ví dụ về địa hình caxtơ ngập nước.", answer: true },
                        { text: "d) (Vận dụng cao) Địa hình caxtơ phát triển mạnh nhất ở vùng đá granit có khí hậu khô lạnh.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về hệ quả chuyển động tự quay của Trái Đất:",
                    options: [
                        { text: "a) (Nhận biết) Trái Đất tự quay quanh trục theo hướng từ tây sang đông.", answer: true },
                        { text: "b) (Thông hiểu) Luân phiên ngày đêm do Trái Đất hình khối cầu và tự quay.", answer: true },
                        { text: "c) (Vận dụng) Các địa điểm nằm ở phía đông có giờ sớm hơn các địa điểm ở phía tây.", answer: true },
                        { text: "d) (Vận dụng cao) Lực Cô-ri-ô-lít làm vật chuyển động ở Bắc bán cầu bị lệch về bên trái.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về hệ quả chuyển động của Trái Đất quanh Mặt Trời:",
                    options: [
                        { text: "a) (Nhận biết) Trục Trái Đất nghiêng một góc 66°33' so với mặt phẳng quỹ đạo.", answer: true },
                        { text: "b) (Thông hiểu) Vào ngày 21/3 và 23/9, ở mọi nơi (trừ hai cực) ngày dài bằng đêm.", answer: true },
                        { text: "c) (Vận dụng) Ngày 22/6, Nam bán cầu có ngày ngắn, đêm dài.", answer: true },
                        { text: "d) (Vận dụng cao) Ở xích đạo, độ dài ngày và đêm chênh lệch rất lớn giữa các mùa.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về khoáng vật và đá:",
                    options: [
                        { text: "a) (Nhận biết) Đá được chia thành ba nhóm chính: macma, trầm tích và biến chất.", answer: true },
                        { text: "b) (Thông hiểu) Đá macma hình thành do macma nguội lạnh và đông cứng.", answer: true },
                        { text: "c) (Vận dụng) Granit là đá trầm tích.", answer: false },
                        { text: "d) (Vận dụng cao) Đá vôi chịu nhiệt độ và áp suất cao có thể biến đổi thành đá hoa.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về các dạng địa hình bề mặt Trái Đất:",
                    options: [
                        { text: "a) (Nhận biết) Đồng bằng là dạng địa hình thấp, bề mặt tương đối bằng phẳng.", answer: true },
                        { text: "b) (Thông hiểu) Cao nguyên có bề mặt tương đối bằng phẳng, sườn dốc, độ cao thường trên 500 m.", answer: true },
                        { text: "c) (Vận dụng) Đồi có đỉnh tròn, sườn thoải, độ cao tương đối thường dưới 200 m.", answer: true },
                        { text: "d) (Vận dụng cao) Địa hình đồng bằng không chịu tác động của ngoại lực.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về giờ trên Trái Đất:",
                    options: [
                        { text: "a) (Nhận biết) Bề mặt Trái Đất được chia thành 24 múi giờ, mỗi múi rộng 15° kinh tuyến.", answer: true },
                        { text: "b) (Thông hiểu) Múi giờ số 0 là múi giờ có kinh tuyến gốc đi qua chính giữa.", answer: true },
                        { text: "c) (Vận dụng) Việt Nam nằm ở múi giờ số 7, sớm hơn giờ GMT 7 giờ.", answer: true },
                        { text: "d) (Vận dụng cao) Khi ở Việt Nam là 12 giờ trưa thì ở múi giờ GMT là 19 giờ.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về băng hà và địa hình do băng hà:",
                    options: [
                        { text: "a) (Nhận biết) Băng hà là khối băng lớn di chuyển chậm trên sườn dốc hoặc thung lũng.", answer: true },
                        { text: "b) (Thông hiểu) Băng hà khoét sâu tạo thung lũng hình chữ U.", answer: true },
                        { text: "c) (Vận dụng) Địa hình băng hà hiện nay chủ yếu gặp ở vùng cực và núi cao.", answer: true },
                        { text: "d) (Vận dụng cao) Băng hà chỉ có tác dụng bồi tụ mà không có tác dụng xâm thực.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về các dãy núi lớn trên thế giới:",
                    options: [
                        { text: "a) (Nhận biết) Hi-ma-lay-a hình thành do hai mảng lục địa xô vào nhau.", answer: true },
                        { text: "b) (Thông hiểu) Dãy An-đét ở Nam Mỹ hình thành do mảng đại dương chìm xuống dưới mảng lục địa.", answer: true },
                        { text: "c) (Vận dụng) Núi uốn nếp trẻ thường cao hơn các dãy núi già đã bị bào mòn lâu đời.", answer: true },
                        { text: "d) (Vận dụng cao) Các dãy núi già hoàn toàn không bị ngoại lực bào mòn.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về chuyển động biểu kiến của Mặt Trời:",
                    options: [
                        { text: "a) (Nhận biết) Ở khu vực nội chí tuyến, mỗi năm Mặt Trời lên thiên đỉnh hai lần.", answer: true },
                        { text: "b) (Thông hiểu) Ngoài khu vực nội chí tuyến, Mặt Trời không bao giờ lên thiên đỉnh.", answer: true },
                        { text: "c) (Vận dụng) Ngày 22/12, Mặt Trời lên thiên đỉnh ở chí tuyến Nam.", answer: true },
                        { text: "d) (Vận dụng cao) Vị trí Mặt Trời lên thiên đỉnh không thay đổi trong năm.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về hình dạng và chuyển động của Trái Đất:",
                    options: [
                        { text: "a) (Nhận biết) Trái Đất có dạng hình khối cầu, hơi dẹt ở hai cực.", answer: true },
                        { text: "b) (Thông hiểu) Trái Đất tự quay một vòng quanh trục hết khoảng 24 giờ.", answer: true },
                        { text: "c) (Vận dụng) Trái Đất chuyển động quanh Mặt Trời hết khoảng 365 ngày 6 giờ.", answer: true },
                        { text: "d) (Vận dụng cao) Trái Đất chuyển động quanh Mặt Trời trên quỹ đạo tròn hoàn hảo với tốc độ không đổi.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về vai trò của thạch quyển đối với con người:",
                    options: [
                        { text: "a) (Nhận biết) Thạch quyển là nơi con người khai thác các loại khoáng sản.", answer: true },
                        { text: "b) (Thông hiểu) Phong hoá đá góp phần hình thành đất.", answer: true },
                        { text: "c) (Vận dụng) Xây dựng công trình ở vùng có đứt gãy hoạt động cần thiết kế chống động đất.", answer: true },
                        { text: "d) (Vận dụng cao) Khai thác khoáng sản không gây ảnh hưởng gì đến môi trường.", answer: false }
                    ]
                }
            ]
        }
    },
    2: {
        title: "Chủ đề 2: Khí quyển và Thuỷ quyển",
        exercises: {
            mcq: [
                { level: 'nhan_biet', type: 'mcq', text: "Giới hạn của tầng đối lưu trong khí quyển có đặc điểm gì?", options: ["Nằm từ độ cao 50 km đến 100 km.", "Là tầng tập trung phần lớn lượng ô-dôn của khí quyển.", "Nằm sát mặt đất, giới hạn từ 8 - 10 km ở cực và 16 - 18 km ở Xích đạo.", "Là tầng phản xạ sóng vô tuyến điện."], answer: 2 },
                { level: 'thong_hieu', type: 'mcq', text: "Gió Tây ôn đới có đặc điểm và hướng thổi như thế nào?", options: ["Thổi từ áp cao cực về áp thấp ôn đới, tính chất lạnh và khô.", "Thổi quanh năm từ áp cao cận chí tuyến về áp thấp ôn đới, mang theo nhiều hơi ẩm.", "Thổi từ áp cao chí tuyến về áp thấp xích đạo, khô và ít mưa.", "Thổi theo mùa giữa lục địa và đại dương."], answer: 1 },
                { level: 'thong_hieu', type: 'mcq', text: "Chế độ nước của một con sông phụ thuộc chủ yếu vào nhân tố nào?", options: ["Độ dốc của địa hình lưu vực.", "Chế độ mưa, nước ngầm hoặc băng tuyết tan cung cấp nước.", "Thảm thực vật dọc hai bên bờ sông.", "Số lượng hồ đầm trên lưu vực."], answer: 1 },
                { level: 'nhan_biet', type: 'mcq', text: "Nguyên nhân chủ yếu sinh ra hiện tượng thuỷ triều trên Trái Đất là gì?", options: ["Sức gió thổi trên bề mặt đại dương.", "Sự chênh lệch nhiệt độ và độ muối của nước biển.", "Động đất và núi lửa ngầm dưới đáy biển.", "Lực hấp dẫn của Mặt Trăng, Mặt Trời cùng với lực li tâm của Trái Đất."], answer: 3 },
                { level: 'nhan_biet', type: 'mcq', text: "Phần lớn các hiện tượng khí tượng như mây, mưa, sấm chớp xảy ra ở tầng nào của khí quyển?", options: ["Tầng bình lưu.", "Tầng đối lưu.", "Tầng giữa.", "Tầng nhiệt."], answer: 1 },
                { level: 'nhan_biet', type: 'mcq', text: "Đặc điểm nổi bật của tầng bình lưu là:", options: ["Là nơi diễn ra hầu hết các hiện tượng thời tiết.", "Có các tầng ion phản hồi sóng vô tuyến.", "Có lớp ô-dôn hấp thụ phần lớn tia tử ngoại.", "Nhiệt độ luôn giảm đều theo độ cao."], answer: 2 },
                { level: 'nhan_biet', type: 'mcq', text: "Trong tầng đối lưu, trung bình cứ lên cao 100 m thì nhiệt độ không khí giảm khoảng:", options: ["0,3°C.", "1,0°C.", "1,5°C.", "0,6°C."], answer: 3 },
                { level: 'nhan_biet', type: 'mcq', text: "Gió Tín phong thổi thường xuyên từ:", options: ["Áp cao cận chí tuyến về áp thấp xích đạo.", "Áp thấp xích đạo về áp cao cận chí tuyến.", "Áp cao cực về áp thấp ôn đới.", "Áp cao cận chí tuyến về áp thấp ôn đới."], answer: 0 },
                { level: 'nhan_biet', type: 'mcq', text: "Gió Đông cực thổi từ áp cao cực về:", options: ["Áp thấp xích đạo.", "Áp cao cận chí tuyến.", "Áp thấp ôn đới.", "Áp cao ôn đới."], answer: 2 },
                { level: 'thong_hieu', type: 'mcq', text: "Gió mùa hình thành chủ yếu do:", options: ["Sự khác nhau về nhiệt độ và khí áp giữa lục địa và đại dương theo mùa.", "Sự quay của Trái Đất quanh trục.", "Hoạt động của các dòng biển nóng, lạnh.", "Sự chênh lệch khí áp giữa xích đạo và cực quanh năm."], answer: 0 },
                { level: 'thong_hieu', type: 'mcq', text: "Vùng xích đạo có mưa nhiều chủ yếu là do:", options: ["Nhiệt độ thấp, ít bốc hơi.", "Nhiệt độ cao, độ ẩm lớn, không khí bị đẩy lên cao rồi ngưng tụ gây mưa.", "Có nhiều núi cao chắn gió.", "Chịu ảnh hưởng của dòng biển lạnh."], answer: 1 },
                { level: 'nhan_biet', type: 'mcq', text: "Đại dương có diện tích lớn nhất thế giới là:", options: ["Đại Tây Dương.", "Ấn Độ Dương.", "Thái Bình Dương.", "Bắc Băng Dương."], answer: 2 },
                { level: 'thong_hieu', type: 'mcq', text: "Nước biển bốc hơi, ngưng tụ thành mây, mưa rơi trên lục địa rồi theo sông chảy về biển là biểu hiện của:", options: ["Vòng tuần hoàn nhỏ của nước.", "Vòng tuần hoàn lớn của nước.", "Quá trình thấm nước.", "Quá trình thuỷ triều."], answer: 1 },
                { level: 'nhan_biet', type: 'mcq', text: "Độ muối trung bình của nước đại dương thế giới khoảng:", options: ["15‰.", "25‰.", "35‰.", "45‰."], answer: 2 },
                { level: 'thong_hieu', type: 'mcq', text: "Dòng biển nóng thường chảy theo hướng nào?", options: ["Từ vĩ độ cao về vĩ độ thấp.", "Từ vĩ độ thấp lên vĩ độ cao.", "Từ lục địa ra đại dương.", "Từ đáy biển lên mặt biển."], answer: 1 },
                { level: 'van_dung', type: 'mcq', text: "Ven bờ tây các lục địa ở vĩ độ ôn đới có khí hậu ôn hoà, mưa nhiều chủ yếu do ảnh hưởng của:", options: ["Gió Tây ôn đới và dòng biển nóng.", "Tín phong và dòng biển lạnh.", "Gió Đông cực và dòng biển lạnh.", "Gió mùa Đông Bắc và dòng biển nóng."], answer: 0 },
                { level: 'nhan_biet', type: 'mcq', text: "Lưu vực sông là:", options: ["Diện tích đất đai cung cấp nước thường xuyên cho một con sông.", "Vùng đất nằm hai bên bờ sông.", "Nơi sông đổ ra biển.", "Toàn bộ các hồ và đầm lầy gần sông."], answer: 0 },
                { level: 'thong_hieu', type: 'mcq', text: "Sóng thần chủ yếu do nguyên nhân nào sau đây gây ra?", options: ["Gió bão mạnh trên biển.", "Lực hấp dẫn của Mặt Trăng.", "Dòng biển nóng.", "Động đất, núi lửa ngầm dưới đáy biển."], answer: 3 },
                { level: 'van_dung', type: 'mcq', text: "Triều cường (thuỷ triều lớn nhất) thường xảy ra vào thời điểm nào?", options: ["Ngày thượng huyền và hạ huyền.", "Ngày trăng tròn và ngày không trăng.", "Chỉ vào mùa hạ.", "Chỉ khi có bão."], answer: 1 },
                { level: 'van_dung_cao', type: 'mcq', text: "Nếu lượng mưa trên lưu vực tăng mạnh trong khi rừng đầu nguồn bị chặt phá, hệ quả nào dễ xảy ra nhất?", options: ["Sông lũ lên chậm, đỉnh lũ thấp.", "Lưu lượng nước sông ổn định quanh năm.", "Sông cạn nước quanh năm.", "Lũ lên nhanh, đỉnh lũ cao, tăng xói mòn đất."], answer: 3 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về các quy luật phân bố nhiệt độ và lượng mưa trên Trái Đất:",
                    options: [
                        { text: "a) (Nhận biết) Nhiệt độ không khí giảm dần từ Xích đạo về hai cực do góc chiếu của tia sáng mặt trời giảm.", answer: true },
                        { text: "b) (Thông hiểu) Lượng mưa trên Trái Đất phân bố đồng đều theo vĩ độ từ Xích đạo về hai cực.", answer: false },
                        { text: "c) (Vận dụng) Cùng một vĩ độ, những địa điểm nằm sâu trong lục địa thường có biên độ nhiệt độ năm lớn hơn các địa điểm ven biển.", answer: true },
                        { text: "d) (Vận dụng cao) Dọc các bờ đại dương, nơi có dòng biển lạnh đi qua thường hình thành các hoang mạc khô hạn do không khí bị lạnh, hơi nước không bốc lên được để gây mưa.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về các tầng của khí quyển:",
                    options: [
                        { text: "a) (Nhận biết) Từ dưới lên, khí quyển gồm tầng đối lưu, tầng bình lưu, tầng giữa, tầng nhiệt và tầng ngoài.", answer: true },
                        { text: "b) (Thông hiểu) Tầng đối lưu chứa phần lớn khối lượng không khí và hơi nước của khí quyển.", answer: true },
                        { text: "c) (Vận dụng) Trong tầng đối lưu, càng lên cao nhiệt độ càng giảm.", answer: true },
                        { text: "d) (Vận dụng cao) Các hiện tượng mây, mưa chủ yếu xảy ra ở tầng bình lưu.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về thành phần của không khí:",
                    options: [
                        { text: "a) (Nhận biết) Không khí gồm chủ yếu là khí ni-tơ (khoảng 78%) và khí ô-xi (khoảng 21%).", answer: true },
                        { text: "b) (Thông hiểu) Hơi nước chiếm tỉ lệ lớn nhất trong thành phần của không khí.", answer: false },
                        { text: "c) (Vận dụng) Khí CO2 tăng cao làm tăng hiệu ứng nhà kính, góp phần làm Trái Đất nóng lên.", answer: true },
                        { text: "d) (Vận dụng cao) Tầng ô-dôn suy giảm làm giảm tia tử ngoại xuống mặt đất nên có lợi cho sinh vật.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về nhiệt độ không khí:",
                    options: [
                        { text: "a) (Nhận biết) Bức xạ Mặt Trời đốt nóng bề mặt đất, bề mặt đất toả nhiệt làm nóng không khí tầng thấp.", answer: true },
                        { text: "b) (Thông hiểu) Nhiệt độ không khí trung bình năm giảm dần từ xích đạo về hai cực.", answer: true },
                        { text: "c) (Vận dụng) Trong cùng một vùng, nhiệt độ trên đỉnh núi thường thấp hơn ở chân núi.", answer: true },
                        { text: "d) (Vận dụng cao) Bề mặt băng tuyết hấp thụ nhiều bức xạ hơn đất trống nên nóng lên nhanh hơn.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về khí áp và gió:",
                    options: [
                        { text: "a) (Nhận biết) Khí áp là sức nén của không khí lên bề mặt Trái Đất.", answer: true },
                        { text: "b) (Thông hiểu) Gió thổi từ nơi có khí áp cao đến nơi có khí áp thấp.", answer: true },
                        { text: "c) (Vận dụng) Càng lên cao, khí áp càng tăng.", answer: false },
                        { text: "d) (Vận dụng cao) Do lực Cô-ri-ô-lít, gió thổi lệch về bên phải ở Bắc bán cầu và lệch về bên trái ở Nam bán cầu.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về các loại gió thường xuyên trên Trái Đất:",
                    options: [
                        { text: "a) (Nhận biết) Gió Tín phong thổi từ áp cao cận chí tuyến về áp thấp xích đạo.", answer: true },
                        { text: "b) (Thông hiểu) Gió Tây ôn đới thổi từ áp thấp ôn đới về áp cao cận chí tuyến.", answer: false },
                        { text: "c) (Vận dụng) Tín phong ở Bắc bán cầu có hướng đông bắc, ở Nam bán cầu có hướng đông nam.", answer: true },
                        { text: "d) (Vận dụng cao) Gió Tây ôn đới thường mang theo nhiều hơi ẩm vào phần bờ tây của các lục địa ôn đới.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về gió mùa:",
                    options: [
                        { text: "a) (Nhận biết) Gió mùa là loại gió có hướng thay đổi theo mùa.", answer: true },
                        { text: "b) (Thông hiểu) Gió mùa thể hiện rõ ở khu vực Nam Á, Đông Nam Á và Đông Á.", answer: true },
                        { text: "c) (Vận dụng) Nguyên nhân chủ yếu là sự khác nhau về nhiệt độ, khí áp giữa lục địa và đại dương theo mùa.", answer: true },
                        { text: "d) (Vận dụng cao) Gió mùa mùa hạ thổi từ lục địa ra đại dương nên gây mưa ít.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về mưa:",
                    options: [
                        { text: "a) (Nhận biết) Mưa hình thành khi hơi nước ngưng kết thành các hạt nước đủ lớn rơi xuống.", answer: true },
                        { text: "b) (Thông hiểu) Khu vực xích đạo mưa nhiều, khu vực cận chí tuyến mưa ít.", answer: true },
                        { text: "c) (Vận dụng) Sườn đón gió của dãy núi thường mưa nhiều hơn sườn khuất gió.", answer: true },
                        { text: "d) (Vận dụng cao) Lượng mưa phân bố đều giữa các lục địa và đại dương.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về các đới khí hậu trên Trái Đất:",
                    options: [
                        { text: "a) (Nhận biết) Khí hậu xích đạo có nhiệt độ cao quanh năm và mưa nhiều.", answer: true },
                        { text: "b) (Thông hiểu) Khí hậu ôn đới có mùa đông lạnh, mùa hạ mát hoặc nóng vừa phải.", answer: true },
                        { text: "c) (Vận dụng) Khí hậu cận nhiệt địa trung hải có mùa hạ nóng khô, mùa đông ấm và có mưa.", answer: true },
                        { text: "d) (Vận dụng cao) Khí hậu cực có nhiệt độ cao quanh năm.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về biến đổi khí hậu:",
                    options: [
                        { text: "a) (Nhận biết) Biến đổi khí hậu là sự thay đổi của khí hậu trong khoảng thời gian dài.", answer: true },
                        { text: "b) (Thông hiểu) Nguyên nhân chủ yếu hiện nay là phát thải khí nhà kính do hoạt động của con người.", answer: true },
                        { text: "c) (Vận dụng) Biểu hiện gồm nhiệt độ toàn cầu tăng, băng tan và mực nước biển dâng.", answer: true },
                        { text: "d) (Vận dụng cao) Biến đổi khí hậu chỉ tác động đến vùng cực, không ảnh hưởng đến các vùng khác.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về nước trên Trái Đất:",
                    options: [
                        { text: "a) (Nhận biết) Nước mặn chiếm phần lớn tổng lượng nước trên Trái Đất.", answer: true },
                        { text: "b) (Thông hiểu) Phần lớn nước ngọt tồn tại dưới dạng băng tuyết.", answer: true },
                        { text: "c) (Vận dụng) Lượng nước ngọt ở sông, hồ mà con người dễ sử dụng chiếm tỉ lệ rất nhỏ.", answer: true },
                        { text: "d) (Vận dụng cao) Nước ngọt chiếm hơn một nửa tổng lượng nước trên Trái Đất.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về vòng tuần hoàn của nước:",
                    options: [
                        { text: "a) (Nhận biết) Bốc hơi, ngưng tụ và mưa là các khâu chính của vòng tuần hoàn nước.", answer: true },
                        { text: "b) (Thông hiểu) Vòng tuần hoàn nhỏ diễn ra khi nước bốc hơi từ biển rồi mưa rơi lại ngay trên biển.", answer: true },
                        { text: "c) (Vận dụng) Phá rừng làm giảm khả năng giữ nước và tăng dòng chảy mặt.", answer: true },
                        { text: "d) (Vận dụng cao) Vòng tuần hoàn lớn của nước không liên quan đến sông ngòi.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về sông và hồ:",
                    options: [
                        { text: "a) (Nhận biết) Hệ thống sông gồm sông chính, phụ lưu và chi lưu.", answer: true },
                        { text: "b) (Thông hiểu) Lưu lượng nước sông là lượng nước chảy qua mặt cắt ngang lòng sông trong một giây.", answer: true },
                        { text: "c) (Vận dụng) Sông có lưu vực rộng và nhiều phụ lưu thường có lượng nước lớn hơn.", answer: true },
                        { text: "d) (Vận dụng cao) Tất cả các hồ đều có nguồn gốc từ băng hà.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về sóng, thuỷ triều và dòng biển:",
                    options: [
                        { text: "a) (Nhận biết) Sóng biển chủ yếu do gió gây ra.", answer: true },
                        { text: "b) (Thông hiểu) Thuỷ triều là sự dao động thường xuyên của mực nước biển do sức hút của Mặt Trăng và Mặt Trời.", answer: true },
                        { text: "c) (Vận dụng) Dòng biển nóng đi qua thường làm tăng nhiệt độ và độ ẩm cho vùng ven bờ.", answer: true },
                        { text: "d) (Vận dụng cao) Triều cường xảy ra vào ngày trăng khuyết (thượng huyền, hạ huyền).", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về nhiệt độ và độ muối của nước biển:",
                    options: [
                        { text: "a) (Nhận biết) Nhiệt độ nước biển nhìn chung giảm dần từ xích đạo về hai cực.", answer: true },
                        { text: "b) (Thông hiểu) Độ muối trung bình của nước đại dương khoảng 35‰.", answer: true },
                        { text: "c) (Vận dụng) Vùng biển có nhiều sông đổ vào thường có độ muối thấp hơn.", answer: true },
                        { text: "d) (Vận dụng cao) Vùng biển nóng, bốc hơi mạnh, ít mưa thường có độ muối thấp.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về nước ngầm:",
                    options: [
                        { text: "a) (Nhận biết) Nước ngầm là nước tồn tại trong các lớp đất, đá dưới mặt đất.", answer: true },
                        { text: "b) (Thông hiểu) Nước ngầm được bổ sung chủ yếu từ nước mưa và nước sông, hồ thấm xuống.", answer: true },
                        { text: "c) (Vận dụng) Khai thác nước ngầm quá mức có thể gây sụt lún đất.", answer: true },
                        { text: "d) (Vận dụng cao) Nước ngầm hoàn toàn không liên quan đến nước sông.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về các khối khí và frông:",
                    options: [
                        { text: "a) (Nhận biết) Khối khí là phần không khí rộng lớn có tính chất tương đối đồng nhất về nhiệt độ và độ ẩm.", answer: true },
                        { text: "b) (Thông hiểu) Khối khí xích đạo có tính chất nóng và ẩm.", answer: true },
                        { text: "c) (Vận dụng) Frông là mặt ngăn cách giữa hai khối khí khác nhau, thường gây thời tiết biến đổi và mưa.", answer: true },
                        { text: "d) (Vận dụng cao) Khối khí cực khô lạnh luôn hình thành trên đại dương.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về sự phân bố khí áp trên Trái Đất:",
                    options: [
                        { text: "a) (Nhận biết) Từ xích đạo về cực lần lượt là đai áp thấp xích đạo, áp cao cận chí tuyến, áp thấp ôn đới và áp cao cực.", answer: true },
                        { text: "b) (Thông hiểu) Đai áp thấp ôn đới nằm ở khoảng vĩ độ 30° của hai bán cầu.", answer: false },
                        { text: "c) (Vận dụng) Gió thổi giữa các đai khí áp tạo nên các loại gió thường xuyên trên Trái Đất.", answer: true },
                        { text: "d) (Vận dụng cao) Sự phân bố lục địa và đại dương làm các đai khí áp bị chia cắt thành các trung tâm khí áp riêng rẽ.", answer: true }
                    ]
                },
                {
                    type: 'tf', text: "Về vai trò của thuỷ quyển đối với con người:",
                    options: [
                        { text: "a) (Nhận biết) Thuỷ quyển cung cấp nước cho sinh hoạt và sản xuất.", answer: true },
                        { text: "b) (Thông hiểu) Ô nhiễm nguồn nước làm suy giảm chất lượng nước và ảnh hưởng đến sức khoẻ.", answer: true },
                        { text: "c) (Vận dụng) Sử dụng nước tiết kiệm và xử lí nước thải góp phần bảo vệ nguồn nước.", answer: true },
                        { text: "d) (Vận dụng cao) Nguồn nước ngọt là vô hạn nên không cần quan tâm bảo vệ.", answer: false }
                    ]
                },
                {
                    type: 'tf', text: "Về các đại dương trên thế giới:",
                    options: [
                        { text: "a) (Nhận biết) Thái Bình Dương là đại dương có diện tích lớn nhất.", answer: true },
                        { text: "b) (Thông hiểu) Bắc Băng Dương là đại dương có diện tích nhỏ nhất trong các đại dương.", answer: true },
                        { text: "c) (Vận dụng) Các đại dương thông với nhau tạo thành đại dương thế giới.", answer: true },
                        { text: "d) (Vận dụng cao) Đại Tây Dương có diện tích lớn hơn Thái Bình Dương.", answer: false }
                    ]
                }
            ]
        }
    }
};
