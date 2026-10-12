/**
 * DOANTM Platform - Outbound Tourism & International Tours Engine (Light Theme)
 * Features:
 * - Rich International Tours Database (Japan, Korea, China, Thailand, Europe, Bali...)
 * - Comprehensive Tour Articles (Highlights, Day-by-day Itinerary, Inclusions/Exclusions, Visa Guide)
 * - Interactive Booking Engine with Automatic Price Calculation
 * - Live VietQR Bank Transfer Generator (MB Bank / Vietcombank / Custom)
 * - Booking History Tracker (LocalStorage Persistence) & Confirmation Receipt
 */

// 1. DATABASE CÁC TOUR DU LỊCH NƯỚC NGOÀI HIỆN HÀNH
const OUTBOUND_TOURS_DATA = [
  {
    id: "tour-japan-01",
    code: "DOAN-JPN-01",
    title: "Nhật Bản: Tokyo - Núi Phú Sĩ - Làng Cổ Oshino Hakkai - Nagoya - Kyoto - Osaka",
    country: "japan",
    region: "asia",
    duration: "6 Ngày 5 Đêm",
    airline: "Vietnam Airlines (Bay thẳng)",
    departureSchedule: "Thứ 3 & Thứ 7 hàng tuần",
    badge: "TOUR BÁN CHẠY NHẤT",
    badgeColor: "bg-rose-500",
    price: 29990000,
    originalPrice: 33500000,
    rating: 4.9,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Cung đường vàng Nhật Bản ngắm hoa anh đào & lá đỏ, chinh phục trạm dừng núi Phú Sĩ, thưởng thức bò Kobe thượng hạng và tắm suối khoáng Onsen truyền thống.",
    highlights: [
      "Bay thẳng cùng Vietnam Airlines đẳng cấp quốc tế, hành lý ký gửi 46kg/khách.",
      "Check-in Núi Phú Sĩ hùng vĩ, dạo bước làng cổ Oshino Hakkai thanh bình dưới chân núi.",
      "Chiêm bái chùa cổ Sensoji Tokyo, cổng trời Fushimi Inari ngàn cổng đỏ huyền thoại tại Kyoto.",
      "Thưởng thức 01 bữa đại tiệc bò Kobe hoặc Wagyu chuẩn Nhật Bản, trải nghiệm tắm suối nước nóng Onsen truyền thống.",
      "Tặng gói quay Flycam & chụp ảnh kỷ niệm tại danh lam thắng cảnh cố đô Kyoto.",
      "Tỷ lệ đậu Visa Nhật Bản qua DOANTM Travel lên đến 99,8%."
    ],
    itinerary: [
      {
        day: "Ngày 1",
        title: "Hà Nội / TP.HCM - Thủ đô Tokyo sầm uất",
        detail: "Đoàn tập trung tại sân bay quốc tế, làm thủ tục chuyến bay thẳng tới Tokyo. Đến sân bay Narita/Haneda, xe và HDV đưa đoàn về trung tâm Tokyo, tham quan vịnh Odaiba, tượng Nữ thần Tự Do và cầu Rainbow Bridge lung linh về đêm. Nhận phòng khách sạn 4 sao nghỉ ngơi."
      },
      {
        day: "Ngày 2",
        title: "Tokyo - Chùa cổ Asakusa Sensoji - Hoàng Cung Nhật Bản - Núi Phú Sĩ",
        detail: "Tham quan Chùa Sensoji cổ kính nhất Tokyo, tự do mua sắm quà lưu niệm trên phố cổ Nakamise. Chụp ảnh lưu niệm tại Hoàng Cung Tokyo. Buổi chiều khởi hành đi khu vực Núi Phú Sĩ, nhận phòng khách sạn resort suối khoáng Onsen, thưởng thức bữa tối Kaiseki truyền thống và thư giãn tắm khoáng nóng phục hồi sức khỏe."
      },
      {
        day: "Ngày 3",
        title: "Núi Phú Sĩ - Làng cổ Oshino Hakkai - Hồ Kawaguchiko - Nagoya",
        detail: "Chinh phục Trạm số 5 Núi Phú Sĩ (nếu thời tiết cho phép). Thăm làng cổ Oshino Hakkai với những ngôi nhà mái tranh cổ và nguồn nước tuyết tan trong vắt. Khởi hành về thành phố Nagoya bằng tàu cao tốc Shinkansen hiện đại bậc nhất thế giới (trải nghiệm vận tốc 300km/h)."
      },
      {
        day: "Ngày 4",
        title: "Nagoya - Cố đô Kyoto - Đền ngàn cổng Fushimi Inari - Thành phố Osaka",
        detail: "Di chuyển đến Cố đô Kyoto, thăm đền thờ Fushimi Inari Taisha nổi tiếng với hàng nghìn cổng Torii màu đỏ rực rỡ men theo triền núi. Trải nghiệm mặc trang phục Kimono truyền thống chụp ảnh. Chiều đến thành phố ẩm thực Osaka, tự do khám phá phố đi bộ Dotonbori và Shinsaibashi sôi động."
      },
      {
        day: "Ngày 5",
        title: "Osaka - Lâu đài cổ Osaka Castle - Mua sắm Miễn thuế Tax-Free",
        detail: "Tham quan Lâu đài Osaka - biểu tượng quyền lực của tướng quân Toyotomi Hideyoshi với tường thành đá đồ sộ bao quanh. Thưởng thức bữa trưa với món Bò Kobe danh tiếng. Mua sắm thả ga tại các trung tâm thương mại miễn thuế lớn nhất Tây Nhật Bản."
      },
      {
        day: "Ngày 6",
        title: "Sân bay Kansai (Osaka) - Hà Nội / TP.HCM",
        detail: "Sau bữa sáng, xe đưa quý khách ra sân bay quốc tế Kansai làm thủ tục xuất cảnh. Chuyến bay thẳng đưa quý khách trở về Việt Nam. Kết thúc chuyến du xuân đầy ý nghĩa!"
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi quốc tế Vietnam Airlines (đã gồm 10kg xách tay + 46kg ký gửi)",
      "Khách sạn tiêu chuẩn quốc tế 4 sao (2 khách/phòng, lẻ nam/nữ ngủ phòng 3)",
      "Các bữa ăn tiêu chuẩn cao theo lịch trình kèm đại tiệc Bò Kobe",
      "Vé tham quan tất cả các điểm trong chương trình & 01 chặng tàu Shinkansen",
      "Xe du lịch đời mới cao cấp đưa đón suốt tuyến",
      "Hướng dẫn viên tiếng Việt nhiệt tình suốt tuyến từ Việt Nam",
      "Bảo hiểm du lịch quốc tế mức bồi thường tối đa 1.050.000.000 VNĐ",
      "Phí visa nhập cảnh Nhật Bản trọn gói"
    ],
    exclusions: [
      "Tiền Tip cho HDV và lái xe: 7 USD/khách/ngày (~42 USD/tour)",
      "Chi phí cá nhân: điện thoại, giặt là, hành lý quá cước",
      "Chi phí phòng đơn nếu có nhu cầu ở riêng"
    ],
    visaGuide: "Chỉ cần ảnh chụp CCCD, Hộ chiếu còn hạn trên 6 tháng, Giấy tờ chứng minh công việc (Hợp đồng/Xác nhận lương) và Sổ tiết kiệm từ 100-120 triệu đồng. DOANTM Travel hỗ trợ dịch thuật và hoàn thiện hồ sơ trọn gói."
  },
  {
    id: "tour-korea-02",
    code: "DOAN-KOR-02",
    title: "Hàn Quốc: Seoul - Đảo Nami - Đảo Lửa Everland - Tháp Namsan - Cung Điện Gyeongbokgung",
    country: "korea",
    region: "asia",
    duration: "5 Ngày 4 Đêm",
    airline: "Vietjet Air / Bamboo Airways (Bay đêm tiết kiệm ngày)",
    departureSchedule: "Thứ 4 & Thứ 6 hàng tuần",
    badge: "GIÁ CỰC TỐT",
    badgeColor: "bg-blue-600",
    price: 13990000,
    originalPrice: 16500000,
    rating: 4.8,
    reviewsCount: 98,
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Khám phá xứ sở kim chi thơ mộng, dạo bước con đường ngân hạnh đảo Nami, chụp ảnh Hanbok tại cung điện Gyeongbokgung và quẩy hết mình tại công viên Everland.",
    highlights: [
      "Vé máy bay khứ hồi, khách sạn 4 sao trung tâm Seoul.",
      "Check-in Đảo Nami xinh đẹp - phim trường bất hủ 'Bản tình ca mùa đông'.",
      "Thử sức trò chơi tàu lượn bằng gỗ T-Express tại công viên Everland top 10 thế giới.",
      "Tặng vé mặc Hanbok truyền thống chụp ảnh miễn phí tại Cung điện hoàng gia Gyeongbokgung.",
      "Trải nghiệm tự tay làm Kimchi và thưởng thức ẩm thực đường phố Myeongdong.",
      "Hỗ trợ thủ tục Visa Hàn Quốc thủ tục tinh gọn, bao gồm visa điện tử E-group."
    ],
    itinerary: [
      {
        day: "Ngày 1",
        title: "Việt Nam - Seoul (Hàn Quốc)",
        detail: "Quý khách có mặt tại sân bay, làm thủ tục lên chuyến bay đêm đến thủ đô Seoul xinh đẹp. Nghỉ đêm và thư giãn trên máy bay."
      },
      {
        day: "Ngày 2",
        title: "Incheon - Seoul - Đảo Nami lãng mạn",
        detail: "Đến sân bay Incheon, thưởng thức bữa sáng với món Canh sườn bò Hàn Quốc nức tiếng. Xe đưa đoàn đi tham quan Đảo Nami - hòn đảo hình bán nguyệt thơ mộng với những rặng cây thủy sam thẳng tắp. Chiều tối trở về Seoul nhận phòng khách sạn 4 sao."
      },
      {
        day: "Ngày 3",
        title: "Công viên giải trí Everland - Trung tâm Tinh dầu Thông Đỏ",
        detail: "Khám phá Everland - đại công viên giải trí quy mô khủng với khu vườn bốn mùa ngập tràn hoa tươi và vườn thú Safari World hoang dã. Thưởng thức bữa trưa với món Gà nướng Dakgalbi."
      },
      {
        day: "Ngày 4",
        title: "Cung điện Gyeongbokgung - Nhà Xanh - Tháp Namsan - Chợ Myeongdong",
        detail: "Thăm Cung điện Hoàng Gia Gyeongbokgung lộng lẫy, Phủ Tổng thống Nhà Xanh Cheongwadae. Chụp ảnh cầu khóa tình yêu tại Tháp truyền hình N Seoul Tower. Tự do mua sắm mỹ phẩm tại thiên đường mua sắm Myeongdong."
      },
      {
        day: "Ngày 5",
        title: "Lớp học làm Kimchi - Làng cổ Bukchon Hanok - Bay về Việt Nam",
        detail: "Trải nghiệm lớp học muối Kimchi và mặc Hanbok chụp ảnh kỷ niệm. Dạo bước tại làng cổ Bukchon Hanok với hàng trăm ngôi nhà truyền thống hơn 600 năm tuổi. Xe đưa đoàn ra sân bay Incheon đáp chuyến bay về Việt Nam."
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi quốc tế (gồm hành lý xách tay + 20kg ký gửi)",
      "Khách sạn 4 sao chuẩn Hàn Quốc (2 người/phòng)",
      "Các bữa ăn đậm đà hương vị Hàn Quốc: Thịt nướng Samgyeopsal, Lẩu Shabu, Gà hầm sâm Samgyetang...",
      "Vé vào cửa tất cả các danh lam thắng cảnh trong lịch trình",
      "Xe du lịch máy lạnh chất lượng cao suốt hành trình",
      "Bảo hiểm du lịch quốc tế mức cao nhất",
      "Visa nhập cảnh Hàn Quốc trọn gói"
    ],
    exclusions: [
      "Tiền bồi dưỡng hướng dẫn viên và tài xế (6 USD/người/ngày)",
      "Chi tiêu cá nhân ngoài chương trình"
    ],
    visaGuide: "Hộ chiếu còn hạn trên 6 tháng, căn cước công dân, ảnh 3.5x4.5cm nền trắng, hồ sơ công việc và sổ tiết kiệm/sao kê ngân hàng. DOANTM xử lý visa nhanh chóng trong 7-10 ngày."
  },
  {
    id: "tour-china-03",
    code: "DOAN-CHN-03",
    title: "Trung Quốc: Trương Gia Giới - Phượng Hoàng Cổ Trấn - Cầu Kính Thiên Môn Sơn",
    country: "china",
    region: "asia",
    duration: "6 Ngày 5 Đêm",
    airline: "Chuyến bay Charter Thẳng (Không quá cảnh)",
    departureSchedule: "Thứ 4 & Chủ Nhật hàng tuần",
    badge: "HOT DEAL 2026",
    badgeColor: "bg-emerald-600",
    price: 12890000,
    originalPrice: 14500000,
    rating: 4.9,
    reviewsCount: 176,
    image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Ngỡ ngàng trước thị trấn cổ tích 1.300 năm tuổi bên dòng Đà Giang lung linh ánh đèn, chinh phục đỉnh Thiên Môn Sơn 99 khúc cua và cầu kính trong suốt trên mây.",
    highlights: [
      "Bay thẳng chuyên cơ đến Trương Gia Giới, tiết kiệm 12 giờ di chuyển đường bộ.",
      "Nghỉ đêm ngay trung tâm Phượng Hoàng Cổ Trấn, ngắm trọn vẹn vẻ đẹp huyền ảo về đêm.",
      "Chinh phục cáp treo dài nhất thế giới lên đỉnh Thiên Môn Sơn, dạo bước trên sàn kính Skywalk dựng trên vách đá 1.400m.",
      "Du thuyền trên dòng sông Đà Giang ngắm nhà sàn Điếu Cước Lâu cổ kính.",
      "Thưởng thức lẩu cá cay Hồ Nam và ẩm thực cung đình đặc sắc.",
      "Visa đoàn Trung Quốc cực kỳ đơn giản: chỉ cần ảnh hộ chiếu chụp bằng điện thoại!"
    ],
    itinerary: [
      {
        day: "Ngày 1",
        title: "Việt Nam - Trương Gia Giới - Vũ Lăng Nguyên",
        detail: "Đáp chuyến bay thẳng đến sân bay Trương Gia Giới. Xe đưa đoàn về khách sạn nhận phòng nghỉ ngơi, chuẩn bị hành trình khám phá tiên cảnh trần gian."
      },
      {
        day: "Ngày 2",
        title: "Vũ Lăng Nguyên - Cột trụ Avatar Hallelujah - Thang máy Bách Long",
        detail: "Tham quan Vườn quốc gia Trương Gia Giới - nơi lấy cảm hứng cho các dãy núi bay trong siêu phẩm điện ảnh Avatar. Trải nghiệm thang máy ngoài trời Bách Long Thiên cao 330m đạt kỷ lục Guinness."
      },
      {
        day: "Ngày 3",
        title: "Thiên Môn Sơn - 99 khúc cua - Cầu kính Skywalk - Cổng Trời",
        detail: "Đi cáp treo dài hơn 7.400m vượt mây lên đỉnh Thiên Môn Sơn. Thử thách lòng dũng cảm trên con đường kính trong suốt vắt ngang vách núi. Bước lên 999 bậc thang đá chạm tay tới Cổng Trời linh thiêng."
      },
      {
        day: "Ngày 4",
        title: "Trương Gia Giới - Phượng Hoàng Cổ Trấn (Trấn cổ nghìn năm)",
        detail: "Khởi hành đi Phượng Hoàng Cổ Trấn. Đến nơi, quý khách ngỡ ngàng trước vẻ đẹp hoài cổ của những nếp nhà gỗ nghiêng mình soi bóng xuống dòng Đà Giang xanh biếc. Thưởng thức cafe ngắm cổ trấn rực rỡ nghìn ánh đèn đêm."
      },
      {
        day: "Ngày 5",
        title: "Du thuyền Đà Giang - Hồng Kiều - Phố cổ Thạch Bàn",
        detail: "Ngồi thuyền gỗ xuôi dòng Đà Giang ngắm sinh hoạt mộc mạc của người Thổ Gia và người Miêu. Check-in Cầu Hồng Kiều, tháp Vạn Danh, tự do thuê trang phục thiếu nữ Miêu chụp ảnh nghệ thuật."
      },
      {
        day: "Ngày 6",
        title: "Trương Gia Giới - Bay thẳng về Việt Nam",
        detail: "Tự do mua sắm đặc sản trà đen Hồ Nam, ngọc bích và kẹo gừng cổ truyền. Xe đưa đoàn ra sân bay đáp chuyến bay thẳng về Việt Nam. Hẹn gặp lại quý khách!"
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi thẳng + 20kg ký gửi",
      "Khách sạn 4-5 sao địa phương sang trọng",
      "Các bữa ăn chính mang đậm phong vị xứ Hồ Nam",
      "Vé cáp treo Thiên Môn Sơn, thang máy Bách Long, thuyền Đà Giang",
      "Bảo hiểm du lịch quốc tế quyền lợi tối đa",
      "Visa đoàn nhập cảnh Trung Quốc (thủ tục online)"
    ],
    exclusions: [
      "Tiền tip cho lái xe và HDV (5 USD/khách/ngày)",
      "Show diễn thực cảnh 'Rạng Rỡ Tương Tây' (tùy chọn)"
    ],
    visaGuide: "Chỉ cần chụp ảnh trang thông tin Hộ chiếu (còn hạn trên 6 tháng) và file ảnh thẻ 4x6cm nền trắng. Không cần chứng minh tài chính hay công việc."
  },
  {
    id: "tour-thailand-04",
    code: "DOAN-THA-04",
    title: "Thái Lan: Bangkok - Pattaya - Đảo San Hô Coral - Buffet Du Thuyền 5 Sao Sông Chao Phraya",
    country: "thailand",
    region: "southeast-asia",
    duration: "5 Ngày 4 Đêm",
    airline: "Vietnam Airlines / AirAsia (Giờ bay đẹp)",
    departureSchedule: "Khởi hành hàng ngày",
    badge: "SIÊU TIẾT KIỆM",
    badgeColor: "bg-amber-600",
    price: 6990000,
    originalPrice: 8200000,
    rating: 4.8,
    reviewsCount: 220,
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Hành trình vi vu xứ sở Chùa Vàng rực rỡ, tắm biển đảo san hô nước trong vắt, thưởng thức buffet hải sản trên du thuyền sang trọng và xem show Alcazar biểu diễn đỉnh cao.",
    highlights: [
      "Miễn thị thực Visa cho công dân Việt Nam, thủ tục chỉ cần Hộ chiếu.",
      "Tặng 01 bữa đại tiệc Buffet quốc tế trên du thuyền 5 sao ngắm hoàng hôn sông Chao Phraya.",
      "Cano cao tốc đưa ra Đảo San Hô Koh Larn tắm biển và tham gia dù lượn, lặn biển ngắm san hô.",
      "Thưởng thức 01 buổi massage Thái cổ truyền phục hồi sinh lực 60 phút.",
      "Chiêm bái Núi Phật Vàng Khao Chee Chan khắc bằng 999kg vàng 24K rực rỡ.",
      "Tham quan Cafe Máy Bay Boeing 747 độc lạ và chợ nổi 4 miền Pattaya."
    ],
    itinerary: [
      {
        day: "Ngày 1",
        title: "Việt Nam - Bangkok - Thành phố biển Pattaya",
        detail: "Đến sân bay quốc tế Suvarnabhumi Bangkok, xe và HDV đón đoàn khởi hành thẳng đến Pattaya - thành phố biển không ngủ. Thăm Chợ nổi 4 miền và thưởng thức ẩm thực đường phố Thái Lan. Nhận phòng khách sạn 4 sao gần biển."
      },
      {
        day: "Ngày 2",
        title: "Đảo San Hô Koh Larn - Núi Phật Vàng - Show Alcazar",
        detail: "Đi cano cao tốc ra đảo Koh Larn tự do tắm biển và trải nghiệm lặn biển. Chiều thăm Núi Phật Vàng Khao Chee Chan đồ sộ. Tối thưởng thức show diễn nghệ thuật hoành tráng của các vũ công Alcazar / Colosseum."
      },
      {
        day: "Ngày 3",
        title: "Pattaya - Massage Thái cổ truyền - Thành phố Bangkok",
        detail: "Tặng quý khách trải nghiệm 60 phút massage bấm huyệt truyền thống Thái Lan. Đoàn trở về thủ đô Bangkok, ghé thăm trung tâm nghiên cứu rắn độc hoàng gia và chùa Thuyền Wat Yannawa."
      },
      {
        day: "Ngày 4",
        title: "Chùa Phật Vàng - Buffet Du Thuyền Chao Phraya - IconSiam",
        detail: "Viếng thăm Chùa Phật Vàng Wat Traimit tượng vàng nguyên khối 5.5 tấn nặng nhất thế giới. Tự do mua sắm tại IconSiam - trung tâm mua sắm xa hoa bậc nhất Đông Nam Á. Buổi tối tận hưởng tiệc buffet hải sản và nhạc sống trên du thuyền lướt sóng sông Chao Phraya."
      },
      {
        day: "Ngày 5",
        title: "Bangkok - Mua sắm Big C / Central World - Về Việt Nam",
        detail: "Tự do săn đồ giá sỉ và đặc sản Thái Lan tại Central World và siêu thị Big C. Xe đưa đoàn ra sân bay làm thủ tục đáp chuyến bay về Việt Nam."
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi (gồm hành lý xách tay + 20kg ký gửi)",
      "Khách sạn 4 sao tiêu chuẩn tại Bangkok & Pattaya",
      "Ăn uống theo lịch trình bao gồm tiệc buffet du thuyền 5 sao",
      "Vé cano ra đảo, vé các điểm tham quan & show biểu diễn Alcazar",
      "01 xuất massage cổ truyền Thái Lan 60 phút",
      "Xe đưa đón đời mới, HDV tiếng Việt theo đoàn",
      "Bảo hiểm du lịch quốc tế mức cao nhất"
    ],
    exclusions: [
      "Tiền tip HDV và tài xế (5 USD/khách/ngày)",
      "Các trò chơi dù lượn, môtô nước tại đảo san hô (chi phí tự túc)"
    ],
    visaGuide: "Công dân Việt Nam được miễn visa Thái Lan hoàn toàn! Chỉ cần hộ chiếu còn hạn sử dụng tối thiểu 6 tháng tính đến ngày khởi hành."
  },
  {
    id: "tour-europe-05",
    code: "DOAN-EUR-05",
    title: "Châu Âu 3 Nước: Pháp - Thụy Sĩ - Ý (Paris - Núi Tuyết Titlis - Venice - Milan - Rome)",
    country: "europe",
    region: "europe",
    duration: "10 Ngày 9 Đêm",
    airline: "Qatar Airways / Emirates 5 sao hàng đầu thế giới",
    departureSchedule: "Định kỳ 2 chuyến / tháng",
    badge: "ĐẲNG CẤP HOÀNG GIA",
    badgeColor: "bg-purple-600",
    price: 72900000,
    originalPrice: 79000000,
    rating: 5.0,
    reviewsCount: 84,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Giấc mơ châu Âu tráng lệ đưa bạn chiêm ngưỡng tháp Eiffel Paris, đỉnh núi tuyết vĩnh cửu Titlis Thụy Sĩ, ngồi thuyền Gondola lãng mạn tại Venice và đấu trường La Mã Rome.",
    highlights: [
      "Hàng không 5 sao Qatar Airways / Emirates với tiêu chuẩn phục vụ quý tộc.",
      "Hệ thống khách sạn 4 sao chuẩn Châu Âu xuyên suốt lịch trình.",
      "Du thuyền trên dòng sông Seine ngắm toàn cảnh Paris hoa lệ, check-in tháp Eiffel.",
      "Chinh phục đỉnh núi tuyết Titlis (Thụy Sĩ) bằng cáp treo xoay 360 độ ngắm dãy Alps kỳ vĩ.",
      "Trải nghiệm thuyền Gondola độc đáo trên những con kênh xanh biếc của thành phố tình yêu Venice.",
      "Đến với Thành Rome huyền thoại, chiêm ngưỡng Đấu trường La Mã Colosseum và Tòa thánh Vatican.",
      "Cam kết tư vấn và đồng hành visa Schengen tỷ lệ đạt lên đến 98,5%."
    ],
    itinerary: [
      {
        day: "Ngày 1-2",
        title: "Việt Nam - Paris (Cộng hòa Pháp)",
        detail: "Khởi hành chuyến bay 5 sao tới Paris. Đến nơi, đoàn thăm Khải Hoàn Môn Arc de Triomphe, Đại lộ Champs-Élysées danh tiếng, Quảng trường Concorde. Đi du thuyền sông Seine thơ mộng ngắm các công trình kiến trúc cổ kính."
      },
      {
        day: "Ngày 3",
        title: "Paris - Bảo tàng Louvre - Đỉnh tháp Eiffel",
        detail: "Chiêm ngưỡng kiệt tác nàng Mona Lisa tại Bảo tàng Louvre lộng lẫy. Lên tầng 2 Tháp Eiffel phóng tầm mắt ngắm trọn vẹn vẻ kiêu sa của kinh đô ánh sáng. Mua sắm hàng hiệu tại Galeries Lafayette."
      },
      {
        day: "Ngày 4-5",
        title: "Paris - Thụy Sĩ - Thị trấn Engelberg - Núi tuyết Titlis - Thành phố Zurich",
        detail: "Băng qua những cánh đồng thanh bình sang Thụy Sĩ. Đi cáp treo xoay Rotair 360 độ lên đỉnh Titlis cao hơn 3.000m quanh năm tuyết phủ trắng xóa. Dạo quanh hồ Lucerne thơ mộng và cây cầu gỗ Chapel cổ nhất châu Âu."
      },
      {
        day: "Ngày 6-7",
        title: "Thụy Sĩ - Milan - Thành phố trên biển Venice (Ý)",
        detail: "Đến kinh đô thời trang Milan, thăm Nhà thờ Duomo tráng lệ phong cách Gothic. Tiếp tục tới Venice - thành phố xây dựng trên 118 hòn đảo nhỏ. Trải nghiệm ngồi thuyền Gondola truyền thống lướt qua những cây cầu cổ kính."
      },
      {
        day: "Ngày 8-9",
        title: "Venice - Tháp nghiêng Pisa - Thủ đô Rome - Vatican",
        detail: "Chụp ảnh tại Tháp nghiêng Pisa kỳ quan thế giới. Di chuyển về Rome, chiêm bái Tòa thánh Vatican linh thiêng và Đấu trường La Mã Colosseum - biểu tượng của Đế chế La Mã cổ đại."
      },
      {
        day: "Ngày 10",
        title: "Rome - Đáp chuyến bay 5 sao về Việt Nam",
        detail: "Tự do tản bộ tại Quảng trường Tây Ban Nha Piazza di Spagna và ném đồng xu ước nguyện tại đài phun nước Trevi. Xe đưa đoàn ra sân bay Rome Fiumicino đáp chuyến bay về Việt Nam."
      }
    ],
    inclusions: [
      "Vé máy bay quốc tế 5 sao khứ hồi (gồm 30kg hành lý ký gửi)",
      "Khách sạn 4 sao cao cấp tại Pháp, Thụy Sĩ, Ý (kèm bữa sáng buffet)",
      "Các bữa ăn chính kết hợp hài hòa giữa ẩm thực Âu (bò bít tết, mỳ Ý, ốc sên Pháp) và cơm Việt",
      "Vé vào cửa tất cả các điểm: Bảo tàng Louvre, cáp treo Titlis, thuyền Venice, Colosseum...",
      "Xe du lịch hạng sang vận hành theo chuẩn an toàn khắt khe của Liên minh Châu Âu",
      "Bảo hiểm du lịch quốc tế hạn mức toàn cầu cao nhất 1.500.000.000 VNĐ",
      "Lệ phí visa Schengen và dịch thuật hồ sơ công chứng"
    ],
    exclusions: [
      "Tiền tip tài xế và HDV (8-10 EUR/người/ngày)",
      "Chi phí phòng đơn nếu có nhu cầu phát sinh"
    ],
    visaGuide: "Hồ sơ cần hộ chiếu gốc, ảnh 3.5x4.5 nền trắng, hồ sơ nhân thân (CCCD, hộ khẩu/xác nhận cư trú), chứng minh công việc và năng lực tài chính (sổ tiết kiệm/bất động sản). Đội ngũ chuyên gia DOANTM Travel trực tiếp hướng dẫn phỏng vấn 1-1."
  },
  {
    id: "tour-bali-06",
    code: "DOAN-BALI-06",
    title: "Bali (Indonesia): Đảo Khủng Long Nusa Penida - Check-in Cổng Trời Lempuyang - Xích Đu Tử Thần Bali Swing",
    country: "indonesia",
    region: "southeast-asia",
    duration: "4 Ngày 3 Đêm",
    airline: "Vietjet Air (Bay thẳng đến Bali)",
    departureSchedule: "Thứ 5 & Thứ 7 hàng tuần",
    badge: "THIÊN ĐƯỜNG SỐNG ẢO",
    badgeColor: "bg-teal-600",
    price: 9890000,
    originalPrice: 11500000,
    rating: 4.9,
    reviewsCount: 115,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Đắm chìm giữa thiên đường biển đảo Bali, chụp ảnh phản chiếu mây trời tại Cổng Trời Lempuyang, vượt sóng ra đảo khủng long Kelingking và bay lượn trên xích đu giữa rừng nhiệt đới.",
    highlights: [
      "Bay thẳng tới thiên đường nghỉ dưỡng Bali, không mất thời gian chuyển tiếp.",
      "Tàu cao tốc đưa đoàn khám phá đảo Nusa Penida: sống lưng khủng long Kelingking, biển Broken Beach, hồ bơi tự nhiên Angel’s Billabong.",
      "Chụp ảnh siêu phẩm 'Cổng Trời Đền Lempuyang' ngắm đỉnh núi lửa thiêng Agung hùng vĩ.",
      "Tặng vé trải nghiệm xích đu tử thần Bali Swing và tổ chim Bali Nest giữa thung lũng dừa xanh mướt.",
      "Thưởng thức tiệc hải sản nướng trên bãi biển Jimbaran dưới ánh hoàng hôn lãng mạn.",
      "Miễn thị thực Visa cho công dân Việt Nam."
    ],
    itinerary: [
      {
        day: "Ngày 1",
        title: "Việt Nam - Đảo thiên đường Bali - Đền Uluwatu",
        detail: "Đáp chuyến bay thẳng đến sân bay Ngurah Rai Bali. HDV tặng vòng hoa frangipani truyền thống đón quý khách. Thăm đền cổ Uluwatu cheo leo trên vách đá cao 70m nhìn ra biển Ấn Độ Dương. Tối thưởng thức tiệc BBQ hải sản bãi biển Jimbaran."
      },
      {
        day: "Ngày 2",
        title: "Tàu cao tốc ra Đảo Nusa Penida - Sống lưng Khủng Long Kelingking",
        detail: "Lên tàu cao tốc vượt sóng xanh ra đảo ngọc Nusa Penida. Check-in bãi biển Kelingking Beach với vách đá nhô ra biển hình chú khủng long T-Rex kỳ vĩ. Tắm biển tại hồ nước tự nhiên Angel's Billabong và cổng vòm đá vôi Broken Beach."
      },
      {
        day: "Ngày 3",
        title: "Cổng Trời Đền Lempuyang - Cung điện nước Tirta Gangga - Xích đu Bali Swing",
        detail: "Dậy sớm đón bình minh tại Cổng Trời Lempuyang. Thăm Cung điện nước hoàng gia Tirta Gangga với đàn cá Koi rực rỡ bơi lượn dưới chân. Buổi chiều thử cảm giác mạnh bay trên không trung với Bali Swing."
      },
      {
        day: "Ngày 4",
        title: "Phố cổ Ubud - Mua sắm quà lưu niệm - Bay về Việt Nam",
        detail: "Tự do dạo phố nghệ thuật Ubud, mua sắm túi mây đan thủ công, cà phê chồn Kopi Luwak nổi tiếng. Xe đưa đoàn ra sân bay đáp chuyến bay thẳng về Việt Nam."
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi thẳng + hành lý xách tay & 20kg ký gửi",
      "Khách sạn resort 4 sao có hồ bơi phong cách nhiệt đới",
      "Các bữa ăn đặc sản: Vịt nướng giòn Bebek Bengil, BBQ Jimbaran...",
      "Tàu cao tốc khứ hồi Nusa Penida & xe chuyên dụng trên đảo",
      "Vé tham quan, vé Bali Swing và xe đưa đón",
      "Bảo hiểm du lịch quốc tế",
      "Miễn visa Indonesia"
    ],
    exclusions: [
      "Tiền tip HDV và tài xế (5 USD/khách/ngày)",
      "Chi phí các dịch vụ cá nhân"
    ],
    visaGuide: "Miễn visa hoàn toàn cho người mang hộ chiếu Việt Nam còn hạn tối thiểu 6 tháng."
  }
];

// 2. TÀI KHOẢN NGÂN HÀNG NHẬN THANH TOÁN (DỄ DÀNG CẤU HÌNH)
const PAYMENT_CONFIG = {
  bankId: "MB", // Ngân hàng Quân Đội (MB Bank)
  bankName: "Ngân hàng TMCP Quân Đội (MB Bank)",
  accountNumber: "0988123456",
  accountName: "TRAN MINH DOAN",
  hotline: "0988 123 456",
  zalo: "0988123456",
  email: "contact@doantm.vn",
  depositRate: 0.5 // 50% tiền cọc
};

// 3. MAIN CONTROLLER TOURS APP (LIGHT THEME)
class ToursApp {
  constructor() {
    this.tours = OUTBOUND_TOURS_DATA;
    this.currentFilter = "all";
    this.searchKeyword = "";
    this.selectedTour = null;
    this.currentBooking = null;

    this.init();
  }

  init() {
    this.renderToursList();
    this.setupEventListeners();
    this.setupTabs();
    this.checkUrlParams();
  }

  // Lọc tour theo quốc gia / khu vực
  filterTours(category) {
    this.currentFilter = category;
    this.renderToursList();
  }

  // Tìm kiếm tour theo từ khóa
  searchTours(query) {
    this.searchKeyword = query.toLowerCase().trim();
    this.renderToursList();
  }

  renderToursList() {
    const container = document.getElementById("tours-grid-container");
    const countEl = document.getElementById("tours-count-display");
    if (!container) return;

    let filtered = this.tours.filter(tour => {
      const matchFilter = (this.currentFilter === "all") ||
        (this.currentFilter === tour.country) ||
        (this.currentFilter === tour.region);

      const matchSearch = !this.searchKeyword ||
        tour.title.toLowerCase().includes(this.searchKeyword) ||
        tour.shortDesc.toLowerCase().includes(this.searchKeyword) ||
        tour.airline.toLowerCase().includes(this.searchKeyword) ||
        tour.code.toLowerCase().includes(this.searchKeyword);

      return matchFilter && matchSearch;
    });

    if (countEl) {
      countEl.textContent = `${filtered.length} tour du lịch đang mở đăng ký`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center bg-white rounded-3xl border border-slate-200 shadow-sm">
          <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center">
            <i data-lucide="search-x" class="w-8 h-8"></i>
          </div>
          <h3 class="text-lg font-bold text-slate-900">Không tìm thấy tour phù hợp</h3>
          <p class="text-sm text-slate-500 mt-1">Vui lòng thử tìm kiếm bằng từ khóa khác hoặc chọn mục Tất cả.</p>
          <button onclick="window.toursAppInstance.resetFilter()" class="mt-4 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-md shadow-emerald-600/20">
            Xem tất cả tour
          </button>
        </div>
      `;
      if (window.lucide) lucide.createIcons();
      return;
    }

    container.innerHTML = filtered.map(tour => {
      const formattedPrice = tour.price.toLocaleString("vi-VN");
      const formattedOriginalPrice = tour.originalPrice.toLocaleString("vi-VN");
      const discountPercent = Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100);

      return `
        <div class="group bg-white border border-slate-200/90 hover:border-emerald-500/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <div>
            <!-- Tour Image Header -->
            <div class="relative h-56 overflow-hidden">
              <img src="${tour.image}" alt="${tour.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent"></div>
              
              <!-- Badges -->
              <div class="absolute top-3 left-3 flex flex-wrap gap-2">
                <span class="px-2.5 py-1 rounded-full text-[11px] font-bold text-white uppercase tracking-wider ${tour.badgeColor} shadow-md">
                  ${tour.badge}
                </span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/90 backdrop-blur-md text-emerald-700 shadow-sm border border-emerald-100">
                  -${discountPercent}% GIẢM
                </span>
              </div>

              <!-- Tour Code & Schedule -->
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                <span class="font-mono bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[11px] text-zinc-200 border border-white/10">
                  Mã: ${tour.code}
                </span>
                <span class="flex items-center gap-1 font-semibold text-emerald-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-emerald-500/30">
                  <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                  ${tour.duration}
                </span>
              </div>
            </div>

            <!-- Content Body -->
            <div class="p-5 space-y-3">
              <div class="flex items-center gap-2 text-xs text-slate-500">
                <span class="flex items-center text-amber-500 font-bold gap-1">
                  <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-500"></i> ${tour.rating}
                </span>
                <span class="text-slate-300">•</span>
                <span>${tour.reviewsCount} đánh giá</span>
                <span class="text-slate-300">•</span>
                <span class="text-slate-700 font-medium truncate"><i data-lucide="plane-takeoff" class="w-3 h-3 inline mr-1 text-cyan-600"></i>${tour.airline}</span>
              </div>

              <!-- Goholic Partner Pill -->
              <div class="flex items-center gap-1.5 text-[10px] text-sky-800 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200/80 font-bold w-fit">
                <img src="assets/goholic-logo-badge.png" alt="Goholic" class="h-3.5 rounded-sm object-contain" />
                <span>Liên kết bán tour Goholic</span>
              </div>

              <h3 class="font-bold text-base text-slate-900 group-hover:text-emerald-700 transition line-clamp-2 leading-snug">
                ${tour.title}
              </h3>

              <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                ${tour.shortDesc}
              </p>

              <!-- Quick Highlights list -->
              <div class="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                <div class="flex items-center gap-1.5">
                  <i data-lucide="calendar" class="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"></i>
                  <span>Khởi hành: <strong class="text-slate-900 font-semibold">${tour.departureSchedule}</strong></span>
                </div>
                <div class="flex items-center gap-1.5">
                  <i data-lucide="shield-check" class="w-3.5 h-3.5 text-cyan-600 flex-shrink-0"></i>
                  <span>Hỗ trợ trọn gói Visa & Bảo hiểm quốc tế</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Price & Action Footer -->
          <div class="p-5 pt-0">
            <div class="pt-3 border-t border-slate-100 flex items-end justify-between mb-3.5">
              <div>
                <span class="text-[11px] text-slate-400 block font-medium">Giá trọn gói từ:</span>
                <div class="flex items-baseline gap-1.5">
                  <span class="text-xl font-extrabold text-emerald-600">${formattedPrice} đ</span>
                  <span class="text-xs text-slate-400 line-through">${formattedOriginalPrice} đ</span>
                </div>
              </div>
              <span class="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded-md">/ Khách</span>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <button onclick="window.toursAppInstance.openTourDetail('${tour.id}')" class="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition flex items-center justify-center gap-1.5 border border-slate-200">
                <i data-lucide="book-open" class="w-3.5 h-3.5 text-cyan-600"></i>
                <span>Xem bài viết</span>
              </button>
              <button onclick="window.toursAppInstance.openBookingModal('${tour.id}')" class="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition flex items-center justify-center gap-1.5">
                <i data-lucide="credit-card" class="w-3.5 h-3.5"></i>
                <span>Đặt tour ngay</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    if (window.lucide) lucide.createIcons();
  }

  resetFilter() {
    this.currentFilter = "all";
    this.searchKeyword = "";
    const searchInput = document.getElementById("search-tour-input");
    if (searchInput) searchInput.value = "";
    this.updateActiveFilterTab();
    this.renderToursList();
  }

  updateActiveFilterTab() {
    document.querySelectorAll(".tour-filter-btn").forEach(btn => {
      const filter = btn.getAttribute("data-filter");
      if (filter === this.currentFilter) {
        btn.classList.add("bg-emerald-600", "text-white", "border-emerald-600", "shadow-sm");
        btn.classList.remove("bg-white", "text-slate-600", "border-slate-200");
      } else {
        btn.classList.remove("bg-emerald-600", "text-white", "border-emerald-600", "shadow-sm");
        btn.classList.add("bg-white", "text-slate-600", "border-slate-200");
      }
    });
  }

  // Mở màn hình bài viết chi tiết tour
  openTourDetail(tourId) {
    const tour = this.tours.find(t => t.id === tourId);
    if (!tour) return;

    this.selectedTour = tour;
    const modal = document.getElementById("modal-tour-detail");
    if (!modal) return;

    // Cập nhật thông tin vào modal
    document.getElementById("detail-title").textContent = tour.title;
    document.getElementById("detail-code").textContent = `Mã tour: ${tour.code}`;
    document.getElementById("detail-duration").textContent = tour.duration;
    document.getElementById("detail-airline").textContent = tour.airline;
    document.getElementById("detail-schedule").textContent = tour.departureSchedule;
    document.getElementById("detail-price").textContent = `${tour.price.toLocaleString("vi-VN")} đ`;
    document.getElementById("detail-original-price").textContent = `${tour.originalPrice.toLocaleString("vi-VN")} đ`;
    document.getElementById("detail-hero-img").src = tour.image;
    document.getElementById("detail-badge").textContent = tour.badge;
    document.getElementById("detail-short-desc").textContent = tour.shortDesc;

    // Render Highlights
    const highlightsContainer = document.getElementById("detail-highlights-list");
    if (highlightsContainer) {
      highlightsContainer.innerHTML = tour.highlights.map(hl => `
        <li class="flex items-start gap-2.5 text-xs text-slate-700">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"></i>
          <span>${hl}</span>
        </li>
      `).join("");
    }

    // Render Itinerary (Lịch trình từng ngày)
    const itineraryContainer = document.getElementById("detail-itinerary-list");
    if (itineraryContainer) {
      itineraryContainer.innerHTML = tour.itinerary.map(item => `
        <div class="relative pl-6 pb-6 border-l-2 border-emerald-300 last:border-transparent last:pb-0">
          <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          </div>
          <span class="text-[11px] font-bold text-emerald-700 font-mono tracking-wider uppercase">${item.day}</span>
          <h4 class="font-bold text-sm text-slate-900 mt-0.5 mb-1.5">${item.title}</h4>
          <p class="text-xs text-slate-600 leading-relaxed">${item.detail}</p>
        </div>
      `).join("");
    }

    // Render Inclusions / Exclusions
    const incContainer = document.getElementById("detail-inclusions-list");
    if (incContainer) {
      incContainer.innerHTML = tour.inclusions.map(inc => `
        <li class="flex items-start gap-2 text-xs text-slate-700">
          <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"></i>
          <span>${inc}</span>
        </li>
      `).join("");
    }

    const excContainer = document.getElementById("detail-exclusions-list");
    if (excContainer) {
      excContainer.innerHTML = tour.exclusions.map(exc => `
        <li class="flex items-start gap-2 text-xs text-slate-500">
          <i data-lucide="x" class="w-3.5 h-3.5 text-rose-500 flex-shrink-0 mt-0.5"></i>
          <span>${exc}</span>
        </li>
      `).join("");
    }

    // Render Visa guide
    const visaEl = document.getElementById("detail-visa-guide");
    if (visaEl) {
      visaEl.textContent = tour.visaGuide;
    }

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    if (window.lucide) lucide.createIcons();
  }

  closeTourDetail() {
    const modal = document.getElementById("modal-tour-detail");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }

  // Mở màn hình Đặt tour trực tiếp
  openBookingModal(tourId) {
    const tour = this.tours.find(t => t.id === tourId) || this.selectedTour;
    if (!tour) return;

    this.selectedTour = tour;
    this.closeTourDetail();

    const modal = document.getElementById("modal-booking");
    if (!modal) return;

    // Điền thông tin tour đã chọn
    document.getElementById("booking-tour-name").textContent = tour.title;
    document.getElementById("booking-tour-code").textContent = tour.code;
    document.getElementById("booking-tour-price").textContent = `${tour.price.toLocaleString("vi-VN")} đ / khách`;
    document.getElementById("booking-tour-schedule").textContent = tour.departureSchedule;
    document.getElementById("booking-tour-img").src = tour.image;

    // Reset Form Fields
    document.getElementById("book-adults-count").value = 1;
    document.getElementById("book-children-count").value = 0;
    this.updateBookingPriceCalculation();

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    if (window.lucide) lucide.createIcons();
  }

  closeBookingModal() {
    const modal = document.getElementById("modal-booking");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }

  // Tính toán tổng tiền theo số lượng khách & hình thức thanh toán
  updateBookingPriceCalculation() {
    if (!this.selectedTour) return;

    const adults = parseInt(document.getElementById("book-adults-count")?.value || 1, 10);
    const children = parseInt(document.getElementById("book-children-count")?.value || 0, 10);
    const payType = document.querySelector('input[name="payment-type"]:checked')?.value || "deposit";

    const basePrice = this.selectedTour.price;
    const childPrice = Math.round(basePrice * 0.85); // Trẻ em 85% giá người lớn

    const totalPrice = (adults * basePrice) + (children * childPrice);
    let amountToPay = totalPrice;

    if (payType === "deposit") {
      amountToPay = Math.round(totalPrice * PAYMENT_CONFIG.depositRate);
    } else if (payType === "full") {
      // Giảm ngay 200k khi trả 100%
      amountToPay = Math.max(0, totalPrice - 200000);
    }

    document.getElementById("calc-adults-total").textContent = `${(adults * basePrice).toLocaleString("vi-VN")} đ`;
    document.getElementById("calc-children-total").textContent = `${(children * childPrice).toLocaleString("vi-VN")} đ`;
    document.getElementById("calc-total-amount").textContent = `${totalPrice.toLocaleString("vi-VN")} đ`;
    document.getElementById("calc-pay-amount").textContent = `${amountToPay.toLocaleString("vi-VN")} đ`;

    if (payType === "full") {
      document.getElementById("calc-discount-badge")?.classList.remove("hidden");
    } else {
      document.getElementById("calc-discount-badge")?.classList.add("hidden");
    }
  }

  // Xử lý gửi Form Đặt Tour -> Sang bước Chuyển Khoản
  submitBookingForm(event) {
    event.preventDefault();

    const fullName = document.getElementById("book-fullname").value.trim();
    const phone = document.getElementById("book-phone").value.trim();
    const email = document.getElementById("book-email").value.trim();
    const departureDate = document.getElementById("book-date").value;
    const note = document.getElementById("book-note").value.trim();
    const adults = parseInt(document.getElementById("book-adults-count").value || 1, 10);
    const children = parseInt(document.getElementById("book-children-count").value || 0, 10);
    const payType = document.querySelector('input[name="payment-type"]:checked')?.value || "deposit";

    if (!fullName || !phone) {
      alert("Vui lòng nhập đầy đủ Họ tên và Số điện thoại!");
      return;
    }

    const basePrice = this.selectedTour.price;
    const childPrice = Math.round(basePrice * 0.85);
    const totalPrice = (adults * basePrice) + (children * childPrice);
    let amountToPay = (payType === "deposit") ? Math.round(totalPrice * PAYMENT_CONFIG.depositRate) : (totalPrice - 200000);

    // Tạo mã đơn booking duy nhất
    const bookingCode = `TOUR${Math.floor(100000 + Math.random() * 900000)}`;

    this.currentBooking = {
      code: bookingCode,
      createdAt: new Date().toLocaleString("vi-VN"),
      tourId: this.selectedTour.id,
      tourTitle: this.selectedTour.title,
      tourCode: this.selectedTour.code,
      fullName,
      phone,
      email,
      departureDate,
      adults,
      children,
      totalPrice,
      amountToPay,
      payType: (payType === "deposit") ? "Đặt cọc 50%" : "Thanh toán 100%",
      status: "Chờ chuyển khoản"
    };

    // Đóng modal đặt tour & Mở modal Chuyển khoản QR
    this.closeBookingModal();
    this.openPaymentModal(this.currentBooking);
  }

  // Mở màn hình Chuyển khoản VietQR
  openPaymentModal(booking) {
    const modal = document.getElementById("modal-payment-qr");
    if (!modal) return;

    // Cập nhật thông tin ngân hàng & đơn
    document.getElementById("pay-booking-code").textContent = booking.code;
    document.getElementById("pay-booking-title").textContent = booking.tourTitle;
    document.getElementById("pay-customer-name").textContent = booking.fullName;
    document.getElementById("pay-customer-phone").textContent = booking.phone;
    document.getElementById("pay-amount-display").textContent = `${booking.amountToPay.toLocaleString("vi-VN")} đ`;
    document.getElementById("pay-type-badge").textContent = booking.payType;

    document.getElementById("pay-bank-name").textContent = PAYMENT_CONFIG.bankName;
    document.getElementById("pay-account-num").textContent = PAYMENT_CONFIG.accountNumber;
    document.getElementById("pay-account-owner").textContent = PAYMENT_CONFIG.accountName;
    
    // Cú pháp chuyển khoản ngắn gọn chuẩn VietQR: TOUR [MÃ ĐƠN] [SĐT]
    const transferMemo = `${booking.code} ${booking.phone.replace(/[^0-9]/g, '')}`;
    document.getElementById("pay-transfer-memo").textContent = transferMemo;

    // Sinh link VietQR động
    const qrUrl = `https://img.vietqr.io/image/${PAYMENT_CONFIG.bankId}-${PAYMENT_CONFIG.accountNumber}-compact2.png?amount=${booking.amountToPay}&addInfo=${encodeURIComponent(transferMemo)}&accountName=${encodeURIComponent(PAYMENT_CONFIG.accountName)}`;
    const qrImg = document.getElementById("vietqr-image");
    if (qrImg) {
      qrImg.src = qrUrl;
    }

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    if (window.lucide) lucide.createIcons();
  }

  closePaymentModal() {
    const modal = document.getElementById("modal-payment-qr");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }

  // Khách hàng bấm: "Tôi đã chuyển khoản thành công"
  confirmPaymentDone() {
    if (!this.currentBooking) return;

    this.currentBooking.status = "Đã chuyển khoản - Chờ duyệt";
    this.currentBooking.confirmedAt = new Date().toLocaleString("vi-VN");

    // Lưu vào LocalStorage danh sách đơn
    this.saveBookingToStorage(this.currentBooking);

    this.closePaymentModal();
    this.openSuccessModal(this.currentBooking);
  }

  saveBookingToStorage(booking) {
    try {
      const history = JSON.parse(localStorage.getItem("doantm_tour_bookings") || "[]");
      history.unshift(booking);
      localStorage.setItem("doantm_tour_bookings", JSON.stringify(history));
    } catch (e) {
      console.warn("Storage error", e);
    }
  }

  // Mở modal xác nhận thành công
  openSuccessModal(booking) {
    const modal = document.getElementById("modal-booking-success");
    if (!modal) return;

    document.getElementById("succ-booking-code").textContent = booking.code;
    document.getElementById("succ-tour-title").textContent = booking.tourTitle;
    document.getElementById("succ-customer-info").textContent = `${booking.fullName} (${booking.phone})`;
    document.getElementById("succ-amount").textContent = `${booking.amountToPay.toLocaleString("vi-VN")} đ`;
    document.getElementById("succ-departure-date").textContent = booking.departureDate || "Theo lịch mở tour";

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    if (window.lucide) lucide.createIcons();
  }

  closeSuccessModal() {
    const modal = document.getElementById("modal-booking-success");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }

  // Tra cứu đơn đặt tour
  openLookupModal() {
    const modal = document.getElementById("modal-lookup-bookings");
    if (!modal) return;

    this.renderLookupHistory();
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    if (window.lucide) lucide.createIcons();
  }

  closeLookupModal() {
    const modal = document.getElementById("modal-lookup-bookings");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }

  renderLookupHistory() {
    const container = document.getElementById("lookup-history-container");
    if (!container) return;

    const history = JSON.parse(localStorage.getItem("doantm_tour_bookings") || "[]");
    if (history.length === 0) {
      container.innerHTML = `
        <div class="py-8 text-center text-xs text-slate-500">
          <i data-lucide="inbox" class="w-8 h-8 mx-auto mb-2 text-slate-400"></i>
          Bạn chưa có đơn đặt tour nào trên trình duyệt này.
        </div>
      `;
      if (window.lucide) lucide.createIcons();
      return;
    }

    container.innerHTML = history.map(item => `
      <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2 text-xs">
        <div class="flex items-center justify-between">
          <span class="font-mono font-bold text-emerald-700 text-sm">#${item.code}</span>
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            ${item.status}
          </span>
        </div>
        <h5 class="font-bold text-slate-900">${item.tourTitle}</h5>
        <div class="flex justify-between text-slate-600">
          <span>Khách: ${item.fullName} (${item.phone})</span>
          <span>Số tiền: <strong class="text-emerald-700">${item.amountToPay.toLocaleString("vi-VN")} đ</strong></span>
        </div>
        <div class="text-[11px] text-slate-400">Khởi tạo: ${item.createdAt}</div>
      </div>
    `).join("");

    if (window.lucide) lucide.createIcons();
  }

  // Copy text to clipboard utility
  copyText(elementId, toastMessage = "Đã sao chép vào bộ nhớ tạm!") {
    const el = document.getElementById(elementId);
    if (!el) return;
    const text = el.textContent.trim();
    navigator.clipboard.writeText(text).then(() => {
      this.showToast(toastMessage, "success");
    }).catch(() => {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      this.showToast(toastMessage, "success");
    });
  }

  showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-3 rounded-xl shadow-xl text-xs font-semibold transition-all transform duration-300 animate-bounce ${
      type === "success" ? "bg-emerald-600 text-white shadow-emerald-600/30" : "bg-slate-900 text-white"
    }`;
    toast.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i><span>${message}</span>`;
    document.body.appendChild(toast);
    if (window.lucide) lucide.createIcons();

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  setupEventListeners() {
    // Filter Buttons
    document.querySelectorAll(".tour-filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
        this.filterTours(filter);
        this.updateActiveFilterTab();
      });
    });

    // Search Input
    const searchInput = document.getElementById("search-tour-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchTours(e.target.value);
      });
    }

    // Booking Counter buttons
    const adultInput = document.getElementById("book-adults-count");
    const childInput = document.getElementById("book-children-count");

    if (adultInput) {
      adultInput.addEventListener("change", () => this.updateBookingPriceCalculation());
    }
    if (childInput) {
      childInput.addEventListener("change", () => this.updateBookingPriceCalculation());
    }

    // Payment radio type change
    document.querySelectorAll('input[name="payment-type"]').forEach(radio => {
      radio.addEventListener("change", () => this.updateBookingPriceCalculation());
    });

    // Booking form submit
    const bookingForm = document.getElementById("booking-form");
    if (bookingForm) {
      bookingForm.addEventListener("submit", (e) => this.submitBookingForm(e));
    }
  }

  setupTabs() {
    // Tab switching inside Tour Detail modal
    document.querySelectorAll(".detail-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-tab");

        document.querySelectorAll(".detail-tab-btn").forEach(b => {
          b.classList.remove("text-emerald-700", "border-emerald-600");
          b.classList.add("text-slate-500", "border-transparent");
        });
        btn.classList.add("text-emerald-700", "border-emerald-600");
        btn.classList.remove("text-slate-500", "border-transparent");

        document.querySelectorAll(".detail-tab-pane").forEach(pane => {
          pane.classList.add("hidden");
        });
        document.getElementById(`tab-pane-${targetTab}`)?.classList.remove("hidden");
      });
    });
  }

  checkUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const tourId = urlParams.get("tour");
    if (tourId) {
      setTimeout(() => {
        this.openTourDetail(tourId);
      }, 400);
    }
  }
}

// Khởi chạy khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }
  window.toursAppInstance = new ToursApp();
});
