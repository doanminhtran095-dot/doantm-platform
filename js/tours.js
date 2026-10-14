/**
 * DOANTM Travel x Goholic Travel - Official Affiliate Tour Platform
 * Dữ liệu đồng bộ 100% từ Trang chủ & Danh sách Tour Goholic Travel (https://goholictravel.com/)
 * Bao gồm:
 * - Toàn bộ 26 Tour Du Lịch Nước Ngoài (6 Tour Nổi Bật Trang Chủ + 20 Tour Quốc Tế)
 * - Đầy đủ Bài viết giới thiệu, Những trải nghiệm đặc biệt, Chương trình chi tiết từng ngày, Giá bao gồm / Không bao gồm, Thư viện ảnh thực tế
 * - 3 Bài viết Chuyên mục Trải Nghiệm Du Lịch (Travel Blog)
 * - Hệ thống Đặt Tour & Thanh toán chuyển khoản VietQR tự động của đối tác liên kết DOANTM
 */

// 1. DANH SÁCH 26 TOUR QUỐC TẾ CHÍNH THỨC CỦA GOHOLIC TRAVEL
const OUTBOUND_TOURS_DATA = [
  {
    "id": "goholic-tour-01",
    "code": "GH-01",
    "title": "KHÁM PHÁ HÀN QUỐC MÙA ĐÔNG – BUSAN – SEOUL",
    "url": "https://goholictravel.com/tour/kham-pha-han-quoc-mua-dong-busan-seoul/",
    "country": "han-quoc",
    "countryName": "Hàn Quốc",
    "region": "han-quoc",
    "departureFrom": "TP.HCM",
    "startDate": "2025-12-31",
    "departureSchedule": "2025-12-31",
    "duration": "5 ngày 4 đêm",
    "durationCategory": "5-7-days-tour",
    "month": "thang-12",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "FEATURED TOUR",
    "badgeColor": "bg-[#f8af22]",
    "isFeatured": true,
    "price": 55890000,
    "priceDisplay": "55.890.000đ",
    "originalPrice": 62600000,
    "rating": 5.0,
    "reviewsCount": 127,
    "image": "https://goholictravel.com/wp-content/uploads/2025/09/han-quoc-1200x675.jpg",
    "gallery": [
      "https://goholictravel.com/wp-content/uploads/2025/09/rb8nsgsjhqaawuf7aalrsdyplna259.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/09/0718-0428-hongdae-street-seoul.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/09/59bb26f5-edbf-46cc-84ac-dfc73cebb1ad-1702378253644-38c0100c5a4c4f254c432e011c2fecf8.webp",
      "https://goholictravel.com/wp-content/uploads/2025/09/cheonggyecheon-stream-korea.webp",
      "https://goholictravel.com/wp-content/uploads/2025/09/99-1.jpg"
    ],
    "headMeta": [
      "5 ngày 4 đêm",
      "Nhóm: từ 11 Khách",
      "Tân Sơn Nhất",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "❄️ Hàn Quốc mùa đông – Bản tình ca của tuyết trắng",
    "introText": "❄️ Hàn Quốc mùa đông – Bản tình ca của tuyết trắng\n\nMỗi độ đông về, Hàn Quốc khoác lên mình tấm áo tuyết trắng tinh khôi, biến xứ sở Kim Chi thành thiên đường lãng mạn. Đến đây, du khách sẽ được dạo bước trên Đảo Nami huyền thoại như trong bộ phim “Bản tình ca mùa đông”, thả mình vào những đường trượt tuyết sôi động ở các resort hiện đại, hay đơn giản là nhâm nhi một bát canh kim chi nóng hổi trong cái lạnh se sắt.\n\nKhông chỉ có tuyết, mùa đông Hàn Quốc còn rực rỡ với ánh đèn lễ hội cuối năm, những khu chợ đêm nhộn nhịp, phố mua sắm Myeongdong, Hongdae tràn ngập sắc màu. Sự hòa quyện giữa cảnh quan thiên nhiên, văn hóa truyền thống và nhịp sống hiện đại khiến Hàn Quốc mùa đông trở thành giấc mơ tuyết trắng mà ai cũng muốn một lần trải nghiệm.",
    "highlights": [
      "Khách sạn 5* trung tâm",
      "Hành trình No Shopping",
      "Kết hợp 2 thành phố đẹp nhất Hàn Quốc – Busan biển xanh và Seoul hiện đại, mang đến trải nghiệm đa sắc thái.",
      "Chùa Haedong Yonggungsa – ngôi chùa ven biển độc đáo nhất Hàn Quốc, view hướng biển ấn tượng.",
      "Bãi biển Haeundae & Capsule Train – tận hưởng cảnh biển mùa đông lãng mạn.",
      "Làng Gamcheon sắc màu & Cầu kính Songdo – góc check-in “triệu like” cho giới trẻ.",
      "Di chuyển KTX cao tốc Busan – Seoul – chỉ gần 3 giờ trải nghiệm “tàu siêu tốc” hiện đại bậc nhất Hàn Quốc.",
      "Suối nhân tạo Cheonggyecheon giữa lòng Seoul – nơi lý tưởng để dạo bước, chụp ảnh.",
      "Đảo Nami mùa đông – khung cảnh lãng mạn trong phim “Bản tình ca mùa đông”.",
      "Trải nghiệm mùa đông Hàn Quốc"
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1: TP.HCM – BUSAN",
        "title": "TP.HCM – BUSAN",
        "detail": "Đêm trước ngày bay\nHDV Goholic đón đoàn tại sân bay Quốc tế Tân Sơn Nhất để làm thủ tục đáp chuyến bay đến Busan - thành phố cảng lớn nhất Hàn Quốc, được mệnh danh là “trái tim hướng ra biển Đông” của xứ kim chi. ( đoàn nghỉ đêm trên máy bay ).\nBuổi sáng : Đáp Busan, đoàn làm thủ tục nhập cảnh, dùng bữa sáng sau đó bắt đầu hành trình tham quan :\nBãi biển Haeundae - bãi biển nổi tiếng nhất Hàn Quốc, được mệnh danh là “thiên đường biển” của Busanvà là điểm đến không thể bỏ qua khi ghé thăm thành phố cảng xinh đẹp này.\nTrải nghiệm tàu sky capsule - hệ thống tàu điện độc đáo, với những cabin rực rỡ sắc màu, di chuyển trên tuyến đường ray dài 2km nối giữa ga Mipo và Cheongsapo, qua lớp kính trong suốt của cabin, bạn có thể phóng tầm mắt toàn cảnh đại dương xanh thẳm và vẻ đẹp thơ mộng của bãi biển Haeundae.\nChùa Haedong Yonggungsa(còn gọi là Chùa Long Cung bên bờ biển) là một trong những ngôi chùa nổi tiếng và đẹp nhất ở Busan, được xây dựng từ năm 1376 dưới triều vua Goryeo, gắn liền với truyền thuyết về rồng biển phù hộ cho quốc thái dân an.\nĐoàn dùng bữa trưa tại nhà hàng sau đó về khách sạn nhận phòng nghỉ ngơi\nBuổi chiều : đoàn nghỉ ngơi, tự do dạo phố.\nBuổi tối : Xe và HDV đón đoàn đi dùng bữa tối sau đó đoàn tự do khám phá phố Gwangbok-dong là khu phố mua sắm sầm uất nhất Busan, nằm gần chợ Jagalchi và khu Nampo-dong nổi tiếng. Đây là nơi hội tụ giữa không khí hiện đại và nét văn hóa địa phương."
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: BUSAN – SEOUL",
        "title": "BUSAN – SEOUL",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn sau đó khởi hành đi tham quan:\nLàng văn hóa Gamcheon - được mệnh danh là“Santorini của Hàn Quốc”, Gamcheon nằm trên sườn núi với hàng trăm ngôi nhà nhỏ đầy màu sắc xếp tầng tầng lớp lớp. Con ngõ nhỏ được trang trí bởi các bức tranh tường, tác phẩm nghệ thuật đường phố sáng tạo, tượng chú bé B612 hay cá heo ngộ nghĩnh – điểm check-in không thể bỏ lỡ.\nCầu kính Songdo (Songdo Skywalk) - nằm sát biển Songdo, đây làcầu kính trên biển dài nhất Hàn Quốc, uốn lượn theo đường cong mềm mại. Du khách có thể đi bộ trên sàn kính trong suốt, nhìn thấy sóng biển xanh biếc vỗ ngay dưới chân.\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng, sau đó di chuyển ra ga tàu cao tốc để về Seoul ( thời gian di chuyển 2h50’)\nBuổi chiều : Đến Seoul, đoàn tham quan :\nCheonggyecheon là một dòng suối nhân tạo dài hơn 11 km, chảy uốn lượn ngay giữa trung tâm Seoul. Đây từng là con suối cũ bị lấp đi, nhưng sau dự án tái thiết đô thị, nó được khôi phục và trở thành biểu tượng xanh của thủ đô Hàn Quốc.\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng sau đó về nhận phòng khách sạn, tự do khám phá Seoul về đêm"
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: NAMI - TRƯỢT TUYẾT",
        "title": "NAMI - TRƯỢT TUYẾT",
        "detail": "Buổi sáng : Đoàn thức dậy, dùng bữa sáng, thưởng thức không khí trong lành của mùa đông Hàn Quốc.\nSau đó, đoàn khởi hành đến đảo Nami - nổi tiếng khắp thế giới nhờ khung cảnh thơ mộng và là bối cảnh trong bộ phim đình đám “Bản Tình Ca Mùa Đông”.\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng sau đó di chuyển đến khu trượt tuyết.\nBuổi chiều : Đoàn vui chơi với các hoạt động trong khu trượt tuyết: trượt tuyết, trượt ván…\nBuổi tối : Đoàn trở về khách sạn nghỉ ngơi. Tự do khám phá chợ đêm Myeongdong - khu phố sầm uất bậc nhất ở Seoul, nổi tiếng với những dãy cửa hàng mỹ phẩm, thời trang, phụ kiện luôn sáng đèn đến tận khuya."
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: CITY TOUR SEOUL",
        "title": "CITY TOUR SEOUL",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn sau đó bắt đầu khám phá Seoul:\nCung điện Gyeongbok - cung điện lớn nhất và nổi tiếng nhất của triều đại Joseon (1392–1910), được xây dựng vào năm 1395 tại thủ đô Seoul. Đây từng là trung tâm chính trị, văn hóa và là nơi ở chính của hoàng gia.\nTại đây, đoàn có thể trải nghiệm mặc trang phục truyền thống và chụp ảnh trong cung điện ( chi phi tự túc)\nBuổi trưa : Đoàn ăn trưa tại nhà hàng sau đó tham quan :\nBukchon Hanok Village - khu phố cổ nổi tiếng nằm giữa cung điện Gyeongbokgung, cung điện Changdeokgung và đền thờ Jongmyo. Nơi đây có hàng trăm ngôi nhà Hanok truyền thống được bảo tồn nguyên vẹn, tái hiện không gian sống của giới quý tộc và quan lại thời Joseon.\nTọa lạc trên núi Namsan giữa lòng Seoul, Namsan Tower không chỉ là đài quan sát hiện đại mà còn là một trong những điểm đến lãng mạn bậc nhất Hàn Quốc, đoàn có thể phóng tầm mắt ngắm toàn cảnh thủ đô Seoul rực rỡ ánh đèn, đặc biệt đẹp vào mùa đông khi thành phố khoác lên mình sắc trắng tuyết.\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng, sau đó khám phá phố Hongdae nổi tiếng là khu phố nghệ thuật, âm nhạc và thời trang của giới trẻ Hàn Quốc. Đây là nơi bạn có thể cảm nhận trọn vẹn nhịp sống trẻ trung, sáng tạo và năng động của Seoul."
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: SEOUL – TP.HCM",
        "title": "SEOUL – TP.HCM",
        "detail": "Buổi sáng : Đoàn thức dậy, dùng bữa sáng tại khách sạn.\nTự do khám phá Seoul buổi sáng.\nBuổi trưa : Đoàn làm thủ tục trả phòng, ăn trưa sau đó tham quan :\nThư viện Starfield (Starfield Library)– điểm check-in nổi tiếng bậc nhất ở Seoul. Nằm ngay trong COEX Mall (Gangnam), thư viện Starfield khiến du khách choáng ngợp với kệ sách cao 13 mét cùng hàng chục nghìn cuốn sách nhiều ngôn ngữ. Không gian mở, ngập tràn ánh sáng tự nhiên, vừa hiện đại vừa nghệ thuật.\nSau đó, đoàn di chuyển ra sân bay để làm thủ tục bay về lại TP. Hồ Chí Minh\nĐáp TP. Hồ Chí Minh, kết thúc chương trình, Goholic chia tay và hẹn gặp lại đoàn ở hành trình kế tiếp"
      }
    ],
    "inclusions": [
      "Vé máy bay quốc tế khứ hồi TP HCM – Busan, Seoul – TP.HCM hãng Vietnam airlines",
      "Chặng tàu cao tốc từ Busan – Seoul",
      "Visa nhập cảnh Hàn Quốc cho cả doand",
      "Tất cả các chi phí vé vào cửa cho tất cả các địa điểm du lịch được liệt kê trong hành trình, đồ và dụng cụ trượt tuyết",
      "Hướng dẫn viên địa phương và trưởng đoàn đi cùng từ Việt Nam",
      "Xe du lịch 25 chỗ suốt hành trình, ngày làm việc 12 tiếng và không quá 21:00",
      "Khách sạn 5* Quốc tế trung tâm. Tiêu chuẩn 2 khách/phòng. Trẻ em ngủ cùng phụ huynh.",
      "Phí dịch vụ & Thuế chính phủ;",
      "Các thỏa thuận bao gồm phí lập kế hoạch, xử lý, vận hành và liên lạc.",
      "Nước uống được cung cấp trong suốt chuyến đi",
      "Bảo hiểm du lịch.",
      "Tặng sim Data"
    ],
    "exclusions": [
      "Ăn uống các bữa theo hành trình",
      "Tiền tip cho hướng dẫn viên và tài xế: 30 USD/khách/ Tour",
      "Các chi phí cá nhân không được nêu trong mục Bao gồm.",
      "Phụ thu phòng đơn nếu quý khách có nhu cầu ngủ riêng (phụ thu 650$ /khách/tour)"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-02",
    "code": "GH-02",
    "title": "KHÁM PHÁ CÁP NHĨ TÂN",
    "url": "https://goholictravel.com/tour/kham-pha-cap-nhi-tan/",
    "country": "china",
    "countryName": "Trung Quốc",
    "region": "china",
    "departureFrom": "TP.HCM/HÀ NỘI",
    "startDate": "2025-12-23",
    "departureSchedule": "2025-12-23",
    "duration": "6 ngày 5 đêm",
    "durationCategory": "5-7-days-tour",
    "month": "thang-01,thang-12",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "FEATURED TOUR",
    "badgeColor": "bg-[#31c0cc]",
    "isFeatured": true,
    "price": 44890000,
    "priceDisplay": "44.890.000đ",
    "originalPrice": 50300000,
    "rating": 5.0,
    "reviewsCount": 134,
    "image": "https://goholictravel.com/wp-content/uploads/2025/09/cap-nhi-tan-1200x675.jpg",
    "gallery": [
      "https://goholictravel.com/wp-content/uploads/2025/09/unnamed-43-3-png-large.webp",
      "https://goholictravel.com/wp-content/uploads/2025/09/ngo-ngang-truoc-ve-dep-cua-nha-tho-saint-sophia-tai-cap-nhi-tan-1.png",
      "https://goholictravel.com/wp-content/uploads/2025/09/ve-giam-gia-volga-manor-o-cap-nhi-tan-trung-quoc.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/09/xuexiang-chinas-snow-town-china-43qk.webp"
    ],
    "headMeta": [
      "6 ngày 5 đêm",
      "Nhóm: 15 - 20 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Thả hồn trongThế giới băng đăng lớn nhất thế giới, chiêm ngưỡng những công trình điêu khắc từ băng kỳ vĩ, lung linh dưới ánh đèn sắc màu.",
    "introText": "Thả hồn trongThế giới băng đăng lớn nhất thế giới, chiêm ngưỡng những công trình điêu khắc từ băng kỳ vĩ, lung linh dưới ánh đèn sắc màu.\n\nTrải nghiệmLàng Hương Tuyết – nơi bạn có thể chơi trượt tuyết, ném tuyết, thưởngthức những bữa ăn nóng hổi giữa trời đông giá lạnh.\n\nTrekking xuyên rừng tuyết: lạc bước giữa khung cảnh trắng xóa, tận hưởng sự kì ảo mà thiên nhiên mùa đông ban tặng.\n\nChinh phục motor tuyết xuyên rừng: cảm giác phấn khích băng qua những con đường tuyết phủ, phiêu lưu như trong phim.\n\nNgựa kéo cổ tích ở làng tuyết: trở về tuổi thơ trong khung cảnh thần tiên, ngồi xe ngựa rung leng keng chuông nhỏ giữa khung cảnh tuyết trắng.\n\nTặng sim Internet",
    "highlights": [
      "Khám pháLàng Cốc Tuyết – khung cảnh tuyết phủ trắng xóa, những ngôi nhà gỗ nhỏ xinh như bước ra từ truyện cổ tích.",
      "Trải nghiệm 2 đêm homestay ở 2 làng tuyết đẹp nhất thế giới",
      "Khám phá công viên Nga Volga Manor",
      "Khách sạn trung tâm Cáp Nhĩ Tân",
      "Thưởng thức ẩm thực phong cách Nga tại nhà hàng Tatoc nổi tiếng"
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1: TP HCM/HÀ NỘI – CÁP NHĨ TÂN",
        "title": "TP HCM/HÀ NỘI – CÁP NHĨ TÂN",
        "detail": "KHỞI HÀNH ĐẾN CÁP NHĨ TÂN\nTrưởng đoàn Goholic đón hành khách tại ga đi sân bay quốc tế Tân Sơn Nhất/ Nội Bài . Đoàn đáp chuyến bay đến với thành phố băng tuyết Cáp Nhĩ Tân.\nĐáp Cáp Nhĩ Tân,đoàn làm thủ tục nhập cảnh, sau đó di chuyển đến nhà hàng dùng bữa trưa.\nSau bữa trưa, đoàn trở về khách sạn nhận phòng nghỉ ngơi.\nBuổi chiều : Xe và hướng dẫn viên đón đoàn đi dạo phố và ghé cửa hàng mua thêm đồ lạnh cần thiết.\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng, sau đó tự do dạo phố, khám phá Cáp Nhĩ Tân về đêm"
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: KHÁM PHÁ CÁP NHĨ TÂN",
        "title": "KHÁM PHÁ CÁP NHĨ TÂN",
        "detail": "Buổi sáng: Đoàn thức dậy dùng bữa sáng sau đó bắt đầu hành trình khám phá Cáp Nhĩ Tân.\nCông viên Zhaolin (Triệu Lâm) là một trong những điểm đến nổi bật nhất khi du lịch Cáp Nhĩ Tân – thành phố băng tuyết của Trung Quốc. Nơi đây được biết đến như cái nôi của Lễ hội đèn lồng băng – một sự kiện nghệ thuật mùa đông rực rỡ, có lịch sử từ năm 1963.\nNhà thờ Thánh Sophia (Saint Sophia Cathedral) là công trình kiến trúc tôn giáo nổi tiếng nhất của Cáp Nhĩ Tân, đồng thời là biểu tượng văn hóa của thành phố băng tuyết này, biểu tượng kiến trúc châu Âu giữa lòng Cáp Nhĩ Tân, được xây dựng từ năm 1907\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng sau đó tiếp tục chương trình\nSông băng Tùng Hoa - gắn liền với sự sống, văn minh vùng Đông Bắc Trung Quốc. Dòng sông uốn lượn chảy qua nhiều khu vực khác nhau mang đến phong cảnh hùng vĩ, tráng lệ. Mùa đông đến mặt sông đóng băng tạo nên cảnh quan thiên nhiên kỳ thú hấp dẫn\nCông viên Băng Đăng - điểm đến nổi tiếng bậc nhất mỗi mùa đông. Đây là công viên băng lớn nhất thế giới, được xây dựng hoàn toàn từ băng lấy từ sông Tùng Hoa và tuyết trắng. Nơi đây còn là “linh hồn” của Lễ hội Băng Tuyết Cáp Nhĩ Tân, được mệnh danh là một trong “bốn lễ hội băng tuyết lớn nhất thế giới”.\nBuổi Tối: Đoàn dùng bữa tối tại nhà hàng, tự do khám phá thành phố Cáp Nhĩ Tân về đêm."
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: CÁP NHĨ TÂN – LÀNG CỐC TUYẾT ( 280km – 5 tiếng )",
        "title": "CÁP NHĨ TÂN – LÀNG CỐC TUYẾT ( 280km – 5 tiếng )",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng tại khách sạn, làm thủ tục trả phòng sau đó khởi hành đi đến làng Cốc tuyết – Làng Cốc tuyết nằm ở khu vực núi Trường Bạch với không gian yên bình và những căn nhà gỗ xinh đẹp.\nTrên đường đi, đoàn ngắm nhìn khung cảnh tuyết trắng xoá hai bên đường, với nét đẹp quyến rũ như bức tranh cổ tích.\nBuổi chiều : Đến làng Cốc tuyết, đoàn nhận phòng homestay nghỉ ngơi.\nTự do dạo quanh làm, thưởng thức không gian yên bình, nhẹ nhàng trong làng tuyết.\nBuổi tối : Đoàn dùng bữa tối sau đó nghỉ ngơi"
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: LÀNG CỐC TUYẾT – Trekking – LÀNG HƯƠNG TUYẾT",
        "title": "LÀNG CỐC TUYẾT – Trekking – LÀNG HƯƠNG TUYẾT",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng tại homestay với các món ăn dân dã vùng Đông Bắc. Sau đó khởi hành đến làng Hương Tuyết - điểm đến mùa đông nổi tiếng nhất ở Đông Bắc Trung Quốc, một trong những nơi đẹp như cổ tích khi mùa tuyết phủ trắng.\nTrải nghiệm xe ngựa kéo từ làng Cốc tuyết vào bìa rừng.\nTrekking 3 km trong rừng với khung cảnh tuyết trắng xoá như lạc vào khu rừng cổ tích, ( đường bằng phẳng dễ đi )\nTrải nghịêm motor tuyết xuyên qua những tán cây rừng tuyệt đẹp của mùa đông Đông Bắc\nBuổi trưa : Đến làng Hương tuyết, đoàn nhận phòng homestay nghỉ ngơi và dùng bữa trưa.\nBuổi chiều : Đoàn tự do khám phá làng Hương tuyết với các hoạt động hấp dẫn :\nSân trượt Tuyết Song Phong (xe ngựa trượt tuyến chưa bao gồm, chi phí tự túc - Phí 150\nRMB/khách/con ngựa kéo). Đây là cơ sở huyến luyện sân trượt tuyết của Quân Đội Giải Phóng Quân Trung Quốc.\nTự do tham gia các trò chơi phao tuyết, trượt Tuyết ở Làng - nơi đã từng tổ chức Thế Vận hội Mùa Đông trên thế giới.\nBuổi tối : Đoàn thưởng thức bữa tối đặc sản của Nông Gia và thưởng thức rượu thuốc ngâm từ Nhân Sâm cùng thuốc Bắc trong không khí ấm áp của homestay\nKhi làng tuyết lên đèn, chìm vào không gian huyền ảo như cổ tích, cả ngôi làng sẽ rực rỡ dưới ánh đèn cùng hàng tuyết rơi."
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: LÀNG HƯƠNG TUYẾT – CÁP NHĨ TÂN ( 280km – 5 tiếng )",
        "title": "LÀNG HƯƠNG TUYẾT – CÁP NHĨ TÂN ( 280km – 5 tiếng )",
        "detail": "Buổi sáng: Đoàn thức dậy, dùng bữa sáng, thưởng thức không khí của làng tuyết.\nTự do vui chơi, khám phá các hoạt động trong làng tuyết như : hắt nước sôi, chụp ảnh, vui chơi với những chú chó Husky và trải nghiệm xe chó kéo do chính những chú chó Husky, Seribia kéo, thưởng thức các món ăn vặt trong làng tuyết.\nBuổi trưa : Đoàn làm thủ tục trả phòng, dùng bữa trưa sau đó di chuyển về Cáp Nhĩ Tân.\nĐến Cáp Nhĩ Tân, đoàn dùng bữa tối tại nhà hàng Tatoc nổi tiếng với ẩm thực mang đặc trưng hương vị nước Nga.\nNhận phòng khách sạn và tự do khám phá Cáp Nhĩ Tân về đêm."
      },
      {
        "day": "NGÀY 6",
        "fullDayTitle": "NGÀY 6: CÁP NHĨ TÂN – TP HCM/ HÀ NỘI",
        "title": "CÁP NHĨ TÂN – TP HCM/ HÀ NỘI",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng tại khách sạn, sau đó tự do nghỉ ngơi, dạo phố Cáp Nhĩ Tân.\nĐến trưa, đoàn làm thủ tục trả phòng sau đó di chuyển đến tham quan : Công viên Nga Volga Manor - một điểm du lịch đặc sắc ở ngoại ô thành phố Cáp Nhĩ Tân, mang đậm phong cách Nga giữa lòng Đông Bắc Trung Quốc diện tích 600.000 m², được xây dựng mô phỏng kiến trúc và cảnh quan vùng sông Volga (Nga). Toàn bộ công viên là sự kết hợp của kiến trúc Nga cổ điển, nhà gỗ, nhà thờ, cung điện, tượng điêu khắc, cùng cảnh quan vườn hoa và hồ nước rộng lớn.\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng sau đó di chuyển ra sân bay làm thủ để bay về Việt Nam.\nĐáp Việt Nam, kết thúc chương trình khám phá mùa đông Cáp Nhĩ Tân.\nGoholic chia tay và hẹn gặp lại đoàn trong hành trình khác."
      }
    ],
    "inclusions": [
      "Vé máy bay quốc tế khứ hồi Tp HCM/ Hà Nội – Cáp Nhĩ Tân – TP.HCM/ Hà Nội",
      "Visa nhập cảnh Trung Quốc dành cho cả đoàn.",
      "Xe 29 – 45 chỗ hiện đại",
      "Tất cả các chi phí vé vào cửa cho tất cả các địa điểm du lịch được liệt kê trong hành trình : xe ngựa kéo, motor tuyết, vé vào làng tuyết",
      "Các bữa ăn đặc sắc vùng Đông Bắc Trung Quốc + 1 bữa ăn tại nhà hàng Tatoc nổi tiếng ( nếu không đặt được chỗ sẽ đổi qua nhà hàng băng )",
      "Hướng dẫn viên địa phương và trưởng đoàn đi từ Việt Nam",
      "Khách sạn: 4 * trung tâm và 2 đêm ở làng Cốc tuyết và làng Hương tuyết (02 khách/phòng- phòng 3 người trường hợp đi lẻ nam hoặc nữ)",
      "Phí dịch vụ & Thuế chính phủ",
      "Các thỏa thuận bao gồm phí lập kế hoạch, xử lý, vận hành và liên lạc.",
      "Nước uống được cung cấp trong suốt chuyến đi",
      "Bảo hiểm du lịch.",
      "Quà tặng từ Goholic sim Internet…"
    ],
    "exclusions": [
      "Tiền tip cho hướng dẫn viên và tài xế: 50$ USD/khách/ Tour",
      "Các chi phí cá nhân không được nêu trong mục Bao gồm.",
      "Phụ thu phòng đơn nếu quý khách có nhu cầu ngủ riêng (phụ thu 500$/khách/tour)"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-03",
    "code": "GH-03",
    "title": "KHÁM PHÁ JAKARTA – JOGJA – HÀNH TRÌNH TÌM VỀ DI SẢN",
    "url": "https://goholictravel.com/tour/kham-pha-jakarta-jogja-hanh-trinh-tim-ve-di-san/",
    "country": "indonesia",
    "countryName": "Indonesia",
    "region": "indonesia",
    "departureFrom": "TP.HCM/HÀ NỘI",
    "startDate": "2026-02-01",
    "departureSchedule": "2026-02-01",
    "duration": "5 ngày 4 đêm",
    "durationCategory": "5-7-days-tour",
    "month": "thang-02",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "FEATURED TOUR",
    "badgeColor": "bg-emerald-600",
    "isFeatured": true,
    "price": 27890000,
    "priceDisplay": "27.890.000đ",
    "originalPrice": 31200000,
    "rating": 5.0,
    "reviewsCount": 141,
    "image": "https://goholictravel.com/wp-content/uploads/2025/09/jakata-1200x675.jpg",
    "gallery": [
      "https://goholictravel.com/wp-content/uploads/2025/09/1bf0eafe-3166-4028-a185-ff79cc9201ce-1724662961971-793de842cc30fb2a05bc4f3995446cdc.webp",
      "https://goholictravel.com/wp-content/uploads/2025/09/blethrow-merapi1-1.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/09/taman-sari-water-castle-yogyakarta.webp",
      "https://goholictravel.com/wp-content/uploads/2025/09/berkeliling-sambil-memotret-di-pasar-beringharjo-1-600x400@2x.webp"
    ],
    "headMeta": [
      "5 ngày 4 đêm",
      "Nhóm: 15 - 20 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Prambanan – quần thể đền thờ ấn độ giáo lớn nhất Indonesia.",
    "introText": "Prambanan – quần thể đền thờ ấn độ giáo lớn nhất Indonesia.\n\nTrung tâm lịch sử Yogyakarta: tham quan cung điện của hồi vương Yogyakarta.\n\nTận mắt chứng kiến núi lửa Merapi, ngọn núi lửa còn hoạt động với dòng dung nham chảy đỏ.\n\nTặng sim Internet.",
    "highlights": [
      "Tour NO Shopping.",
      "Khách sạn 4 sao toàn hành trình.",
      "Khám phá 3 di sản thế giới Unesco công nhận trong một hành trình.",
      "Khám phá Borobudur – kiệt tác kiến trúc phật giáo Java, ngôi chùa lớn nhất thế giới."
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1: KHỞI HÀNH TỚI JAKARTA (Ăn trưa, ăn tối)",
        "title": "KHỞI HÀNH TỚI JAKARTA (Ăn trưa, ăn tối)",
        "detail": "Buổi sáng: hướng dẫn viên Goholic đón đoàn tại sân bay Quốc tế Tân Sơn Nhất/Nội Bài 03 tiếng trước giờ bay để làm thủ tục check in và khởi hành tới thủ đô Jakarta.\nBuổi trưa: đáp sân bay Soekarno-Hatta (Jakarta), đoàn làm thủ tục nhập cảnh. Sau đó, hướng dẫn viên địa phương đón đoàn di chuyển tới nhà hàng dùng bữa trưa.\nSau bữa trưa, đoàn khởi hành tham quan:\nNhà thờ Hồi giáo Istiqlal ở Jakarta, nhà thờ Hồi giáo lớn nhất Indonesia với sức chứa 200.000 người. Đây không chỉ là nhà thờ Hồi giáo lớn nhất Đông Nam Á mà còn là một biểu tượng về tự do và đoàn kết tôn giáo.\nBuổi tối: đoàn dùng bữa tối tại nhà hàng địa phương, sau đó di chuyển về nhận phòng khách sạn nghỉ ngơi."
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: JAKARTA - YOGYAKARTA (Ăn sáng, trưa, tối)",
        "title": "JAKARTA - YOGYAKARTA (Ăn sáng, trưa, tối)",
        "detail": "Buổi sáng: đoàn dùng bữa sáng tại khách sạn, làm thủ tục trả phòng, sau đó khởi hành đi tham quan:\nTaman Mini Indonesia Indah: công viên văn hóa rộng hơn 100 ha này được thiết kế như một Indonesia thu nhỏ, nơi du khách có thể khám phá sự đa dạng về văn hóa, kiến trúc và thiên nhiên của cả xứ sở vạn đảo.\nBuổi trưa: đoàn dùng bữa trưa tại nhà hàng địa phương, sau đó di chuyển ra sân bay Soekarno-Hatta (Jakarta) làm thủ tục bay đến Yogyakarta (thời gian bay 01 tiếng).\nXe đón đoàn tại sân bay, sau đó di chuyển về trung tâm thành phố thành phố Yogyakarta. (45km - 90 phút), nhận phòng khách sạn nghỉ ngơi.\nBuổi tối: đoàn dùng bữa tối tại nhà hàng, tự do khám phá thành phố Yogyakarta về đêm."
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: YOGYAKARTA - MERAPI - YOGYAKARTA (Ăn sáng, trưa, tối)",
        "title": "YOGYAKARTA - MERAPI - YOGYAKARTA (Ăn sáng, trưa, tối)",
        "detail": "Buổi sáng: đoàn dùng bữa sáng tại khách sạn, sau đó khởi hành đi tham quan:\nTrung tâm lịch sử của Yogyakarta, nơi nổi tiếng với sự giao thoa giữa truyền thống Hoàng gia và đời sống hiện đại sôi động. Đây được coi là trái tim văn hóa Java, và là nơi được UNESCO công nhận là Di sản Thế giới vào năm 2023.\nKraton Ngayogyakarta, một cung điện do Quốc vương Hamengkubuwono I xây dựng vào năm 1756. Cung điện này có những phong tục và truyền thống riêng vẫn được bảo tồn cho đến ngày nay.\nCung điện nước Taman Sari, là tàn tích một khu vườn hoàng gia cũ của Vương quốc Hồi giáo Yogyakarta ở Indonesia, được xây dựng vào giữa thế kỷ 18 như một nơi nghỉ ngơi, xưởng làm việc và khu vực phòng thủ cho hoàng gia.\nBuổi trưa: đoàn dùng bữa trưa tại nhà hàng địa phương, sau đó tiếp tục chương trình tham quan:\nNúi lửa Merapi: trải nghiệm khung cảnh thiên nhiên tuyệt đẹp của Núi Merapi, ngọn núi lửa hoạt động mạnh nhất của Indonesia, nơi hàng nghìn người dân sinh sống trong các ngôi làng trên sườn núi ở độ cao 1.700 mét. Đắm mình trong bầu không khí thanh bình và nếu may mắn, bạn thậm chí có thể nhìn thấy dòng dung nham chảy từ đỉnh núi.\nChợ Beringharjo: khu chợ truyền thống của người dân địa phương. Tại đây, du khách có thể mua sắm đồ lưu niệm, trải nghiệm một chút ẩm thực địa phương.\nBuổi tối: đoàn dùng bữa tối, sau đó quay trở lại khách sạn nghỉ ngơi hoặc tự do khám phá thành phố về đêm."
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: YOGYAKARTA - BOROBUDUR - PRAMBANAN - YOGYAKARTA (Ăn sáng, trưa, tối)",
        "title": "YOGYAKARTA - BOROBUDUR - PRAMBANAN - YOGYAKARTA (Ăn sáng, trưa, tối)",
        "detail": "Buổi sáng: đoàn dùng bữa sáng tại khách sạn, sau đó di chuyển đến Borobudur (43km/90 phút).\nBorobudur: ngôi đền Phật giáo tráng lệ, được coi là ngôi đền lớn nhất thế giới, Borobudur là biểu tượng của kiến trúc Java. Phản ánh lịch sử của khu vực, là minh chứng của cả thời kỳ hoàng kim và suy tàn của vương Quốc.Quần thể Borobudur đã được UNESCO công nhận là Di sản Thế giới vào năm 1991.\nQuần thể Prambanan: quần thể đền Hindu lớn nhất Indonesia, được xây dựng vào thế kỷ IX, quần thể này nổi bật với những ngọn tháp chạm khắc tinh xảo với những phù điêu kể lại sử thi Ramayana huyền bí. Đây cũng là nơi được UNESCO công nhận là Di sản Thế giới.\nBuổi trưa: đoàn dùng bữa tại nhà hàng địa phương, sau đó di chuyển trở về Yogyakarta để tự do tận hưởng phần còn lại của buổi chiều.\nBuổi tối: đoàn sẽ dùng bữa tối và trở về khách sạn nghỉ ngơi sớm, sẵn sàng cho chuyến bay vào sáng hôm sau."
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: YOGYAKARTA - VIỆT NAM (Ăn sáng, trưa)",
        "title": "YOGYAKARTA - VIỆT NAM (Ăn sáng, trưa)",
        "detail": "Đoàn thức dậy trước 5:00 sáng, sau đó di chuyển đến Sân bay Quốc tế YOGYAKARTA (40km / 90 phút).\nĐoàn dùng bữa sáng tại sân bay trước khi khởi hành.\nChuyến bay về Tp. Hồ Chí Minh sẽ quá cảnh tại Singapore.\nChuyến bay về Hà Nội sẽ quá cảnh tại Jakarta.\nKết thúc chuyến đi, hướng dẫn viên Goholic cùng đoàn làm thủ tục nhập cảnh, nhận lại hành lý và hẹn gặp lại đoàn trong hành trình tiếp theo."
      }
    ],
    "inclusions": [
      "Vé máy 3 chặng: SGN/HAN – JAKARTA | JAKARTA – YOGYAKARTA | YOGYAKARTA – SGN/HAN.",
      "Xe đưa đón hiện đại có máy lạnh, nhiên liệu, tài xế, bãi đậu xe và phí cầu đường.",
      "Khách sạn 4 sao suốt hành trình. Tiêu chuẩn 2 khách/phòng (Phòng 3 được bố trí khi lẻ nam/nữ).",
      "Các bữa ăn theo chương trình, mang đậm phong cách ẩm thực địa phương.",
      "Hướng dẫn viên địa phương.",
      "Trưởng đoàn đi cùng từ Việt Nam.",
      "Tất cả phí vào cửa các điểm tham quan chính.",
      "2 chai nước suối/người/ngày",
      "Sim Internet",
      "Bảo hiểm du lịch (50.000 USD)"
    ],
    "exclusions": [
      "Tiền tip cho hướng dẫn viên và tài xế: 30USD/khách/tour.",
      "Các chi phí cá nhân không được nêu trong mục Bao gồm.",
      "Phụ thu phòng đơn nếu quý khách có nhu cầu ngủ riêng (phụ thu 200 USD/khách/tour)"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-04",
    "code": "GH-04",
    "title": "TÂY AN – LẠC DƯƠNG ĐẠI ĐƯỜNG BẤT DẠ THÀNH",
    "url": "https://goholictravel.com/tour/tay-an-lac-duong-dai-duong-bat-da-thanh/",
    "country": "china",
    "countryName": "Trung Quốc",
    "region": "china",
    "departureFrom": "TP.HCM/HÀ NỘI",
    "startDate": "2025-10-12",
    "departureSchedule": "2025-10-12",
    "duration": "7 ngày 6 đêm",
    "durationCategory": "5-7-days-tour",
    "month": "thang-10,thang-11,thang-12",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "FEATURED TOUR",
    "badgeColor": "bg-rose-600",
    "isFeatured": true,
    "price": 33490000,
    "priceDisplay": "33.490.000đ",
    "originalPrice": 37500000,
    "rating": 5.0,
    "reviewsCount": 148,
    "image": "https://goholictravel.com/wp-content/uploads/2025/09/tayan-lacduong-1-1200x675.jpg",
    "gallery": [
      "https://goholictravel.com/wp-content/uploads/2025/09/legendofcamelbellsinxianshow.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/09/31b7eff222876b7a04043be57bd8bc5c-big-goose-pagoda-1.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/09/overhead-view-of-grand-tang-dynasty-ever-bright-city.webp",
      "https://goholictravel.com/wp-content/uploads/2025/09/bronze-chariots-horses.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/09/daming-palace-national-heritage-park-danfeng-gate-01-1.jpg"
    ],
    "headMeta": [
      "7 ngày 6 đêm",
      "Nhóm: 15 - 20 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Hành trình khám phá Tây An – Lạc Dương – Khai Phong kết hợp Núi Hoa Sơn là hành trình khám phá ba cố đô trứ danh của Trung Hoa, nơi kết tinh lịch sử nghìn năm và văn hóa rực rỡ. Tại Tây An – kinh đô thời nhà Đường, du khách chiêm ngưỡng tượng binh mã dũng cảm, thăm tháp Đại Nhạn, thành cổ Minh và trải nghiệm show diễn “Đà Lĩnh Truyền Kỳ”. Đặc biệt, hành trình chinh phục Núi Hoa Sơn hiểm trở – một trong Ngũ Nhạc nổi tiếng, sẽ mang đến cảm giác hồi hộp và kỳ vĩ giữa thiên nhiên hùng tráng. Tiếp nối, Lạc Dương đưa bạn đến với Long Môn Thạch Quật kỳ vĩ và chùa Bạch Mã – tổ đình Phật giáo Trung Hoa. Kết thúc tại Khai Phong, nơi tái hiện hình ảnh “Khai Phong phủ”, tháp Sắt nghìn năm và hơi thở cổ kính của một kinh thành phồn hoa thuở trước. Đây là hành trình lý tưởng cho những ai yêu lịch sử, văn hóa và thiên nhiên Trung Hoa.",
    "introText": "Hành trình khám phá Tây An – Lạc Dương – Khai Phong kết hợp Núi Hoa Sơn là hành trình khám phá ba cố đô trứ danh của Trung Hoa, nơi kết tinh lịch sử nghìn năm và văn hóa rực rỡ. Tại Tây An – kinh đô thời nhà Đường, du khách chiêm ngưỡng tượng binh mã dũng cảm, thăm tháp Đại Nhạn, thành cổ Minh và trải nghiệm show diễn “Đà Lĩnh Truyền Kỳ”. Đặc biệt, hành trình chinh phục Núi Hoa Sơn hiểm trở – một trong Ngũ Nhạc nổi tiếng, sẽ mang đến cảm giác hồi hộp và kỳ vĩ giữa thiên nhiên hùng tráng. Tiếp nối, Lạc Dương đưa bạn đến với Long Môn Thạch Quật kỳ vĩ và chùa Bạch Mã – tổ đình Phật giáo Trung Hoa. Kết thúc tại Khai Phong, nơi tái hiện hình ảnh “Khai Phong phủ”, tháp Sắt nghìn năm và hơi thở cổ kính của một kinh thành phồn hoa thuở trước. Đây là hành trình lý tưởng cho những ai yêu lịch sử, văn hóa và thiên nhiên Trung Hoa.",
    "highlights": [
      "Đoàn nhỏ chất lượng cao (10 - 15 khách/đoàn), chăm sóc tận tình chu đáo.",
      "Hành trình No Shopping 100% – Trải nghiệm trọn vẹn văn hóa và cảnh sắc bản địa.",
      "Khởi hành từ TP.HCM/HÀ NỘI với phương tiện Hàng Không.",
      "Trưởng đoàn Goholic Travel & đội ngũ hỗ trợ DOANTM đồng hành xuyên suốt chuyến đi."
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1: TP.HCM/HÀ NỘI – TÂY AN",
        "title": "TP.HCM/HÀ NỘI – TÂY AN",
        "detail": "HDV đón đoàn tại sân bay Quốc tế Tân Sơn Nhất/ Nội Bài để làm thủ tục bay đến Tây An .\nĐoàn ăn nhẹ trên máy bay\nĐến Tây An, đoàn làm thủ tục nhập cảnh, di chuyển đến nhà hàng dùng bữa trưa sau đó về khách sạn nhận phòng nghi ngơi.\nBuổi chiều, đoàn tham quan :\nTháp Đại Nhạn - là một công trình Phật giáo nổi tiếng tại thành phố Tây An, một trong những biểu tượng lịch sử – văn hóa tiêu biểu của cố đô Trường An thời nhà Đường. Đây là nơi đại sư Huyền Trang (玄奘) – nhân vật lịch sử nổi tiếng, nguyên mẫu của Đường Tăng trong Tây Du Ký – đã dịch kinh Phật sau chuyến thỉnh kinh từ Ấn Độ.\nSau đó, đoàn dùng bữa tối tại nhà hàng\nBuổi tối : Đoàn dạo phố đêm Đại Đường bất dạ thành - một tác phẩm nghệ thuật sống động tái hiện lại thời kỳ hoàng kim của triều đại nhà Đường – một trong những triều đại thịnh vượng nhất trong lịch sử Trung Hoa. Vào thời kỳ đó, Trường An (ngày nay là Tây An) được xem là trung tâm văn hóa, chính trị và kinh tế của thế giới phương Đông,\nTự do dạo phố Tây An về đêm"
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: BINH MÃ DŨNG – HOA SƠN",
        "title": "BINH MÃ DŨNG – HOA SƠN",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn sau đó di chuyển đi tham quan :\nBinh Mã Dũng - một trong những công trình kiến trúc lớn và phức tạp nhất thời cổ đại. Đội quân đất nung bao gồm khoảng 8,000 bức tượng chiến binh, 130 xe ngựa với 520 ngựa kéo và 150 kỵ binh. Mục đích chính của Binh Mã Dũng là để bảo vệ linh hồn của Tần Thủy Hoàng ở thế giới bên kia. Đội quân tượng đất nung này được chôn cùng lăng mộ với hy vọng rằng chúng sẽ giúp Hoàng đế bảo vệ mình khỏi các thế lực thù địch và tiếp tục cai quản thế giới ngầm như khi còn sống.\nBảo tàng Xe ngựa đồng là một phần quan trọng nằm trong khu di chỉ Lăng Tần Thủy Hoàng, đây là nơi trưng bày các mẫu xe ngựa bằng đồng quy mô gần như thật, được phát hiện ngay gần khu vực Binh Mã Dũng nổi tiếng.\nSau đó, đoàn dùng bữa trưa tại nhà hàng và di chuyển về thành phố Hoa Âm - cửa ngõ chính để lên núi Hoa Sơn – một trong Ngũ Nhạc nổi tiếng của Trung Hoa.\nĐến Hoa Âm, đoàn nhận phòng khách sạn nghỉ ngơi\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng sau đó tự do khám phá thành phố Hoa Âm về đêm"
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: NÚI HOA SƠN – TÂY AN",
        "title": "NÚI HOA SƠN – TÂY AN",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng tại khách sạn sau đó di chuyển đến núi Hoa Sơn\nNúi Hoa Sơn là một trong những ngọn núi Trung Quốc ấn tượng có vị trí tại tỉnh Thiểm Tây. Đây là một trong những ngọn núi có gắn liền với cội nguồn văn hóa Trung Hoa và được mệnh danh là một trong Ngũ Sơn.\nĐoàn đi cáp treo lên và xuống tuyến Bắc của Hoa Sơn, chinh phục ngọn núi thiêng với các đền thờ cổ kính đặt trên những vách đá kỳ vĩ đã tồn tại hàng trăm năm và các công trình lịch sử.\nBuổi trưa : Đoàn trở về thành phố Hoa Âm dùng bữa trưa sau đó di chuyển về lại Tây An\nĐến Tây An, đoàn về khách sạn nhận phòng nghỉ ngơi\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng sau đó thưởng thức show diễn “ Đà linh truyền kì ” -một trong những di sản biểu diễn truyền thống được đánh giá cao ở Tây An, tái hiện lại hình ảnh Con đường Tơ lụa huyền thoại trên sân khấu xoay 360 độ. ( Ghế ngồi khu vực VIP )."
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: TÂY AN - LẠC DƯƠNG",
        "title": "TÂY AN - LẠC DƯƠNG",
        "detail": "Buổi sáng : Đoàn thức dậy, dùng bữa sáng sau đó bắt đầu hành trình tham quan :\nMinh Tường Thànhđược biết đến là một trong những hệ thống phòng thủ quân sự cổ đại lâu đời nhất trên thế giới. Nơi đây chính là công trình khổng lồ với vật liệu làm bằng đất, xếp từng lớp vô cùng hoành tráng. Bạn tìm thấy cơ hội chiêm ngưỡng nét thiết kế độc đáo cũng sự vững mạnh khó nơi nào có được.\nCung điện Đại Minh là một quần thể cung điện hoàng gia thời nhà Đường, tọa lạc ở phía đông bắc thành Trường An .Đây là nơi ở của các hoàng đế nhà Đường trong hơn 220 năm và được xem là một trong những cung điện hoàng gia lớn nhất thế giới.\nSau đó, đoàn dùng bữa trưa tại nhà hàng và di chuyển về Lạc Dương bằng tàu cao tốc ( vé tàu khoang hạng nhất )\nLạc Dương là một trong tứ đại cổ đô nổi tiếng của Trung Quốc, cùng với Tây An, Nam Kinh và Bắc Kinh. Thành phố thuộc tỉnh Hà Nam, nằm bên bờ sông Lạc Thủy, từng là kinh đô của 13 triều đại, bao gồm nhà Chu, Hán, Ngụy, Tùy, Đường… với lịch sử kéo dài hơn 3.000 năm.\nĐến Lạc Dương, đoàn viếng thăm lăng mộ Võ tướng Quan Văn Trường hay còn gọi là Quan Công - Lăng mộ của ông tại Lạc Dương là nơi linh thiêng, được nhiều người dân Trung Quốc kính trọng. Đây là điểm dừng chân tuyệt vời để tìm hiểu thêm về văn hóa Tam Quốc và sự tôn kính của người dân dành cho vị anh hùng này.\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng. Sau đó khám phá cổ thành Lạc Dương, khám phá văn hoá và ẩm thực phố cổ"
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: LONG MÔN THẠCH ĐỘNG – ĐĂNG PHONG",
        "title": "LONG MÔN THẠCH ĐỘNG – ĐĂNG PHONG",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại nhà hàng sau đó di chuyển đến :\n- Long Môn thạch động là kho tàng nghệ thuật tạc khắc hang động Phật Giáo của Trung Quốc, thuộc địa phận tỉnh Hà Nam, cách thành phố Lạc Dương khoảng 12km về phía nam. Hang động trải qua gần 400 năm xây dựng, tính đến ngày nay thì di tích này đã có hơn 1.500 năm lịch sử. Long Môn là một quần thể lớn với 2.345 hang động và hốc đá nhân tạo. Đặc biệt, nơi đây còn được gọi là “rừng bia cổ đại” khi sở hữu gần 2.800 bia đá, chữ khắc cùng 100.000 tượng Phật.\nTham quan chùa Bạch Mã - ngôi chùa Phật giáo đầu tiên tại Trung Quốc, được xây từ năm 68 SCN dưới thời Hán Minh Đế, được coi là “Tổ đình Phật giáo Trung Quốc”.\nSau đó, đoàn dùng bữa trưa tại nhà hàng và di chuyển về thành phố Đăng Phong – nơi người xưa tin rằng là trung tâm của Trời - Đất, là điểm giao thoa giữa Trời - Đất - Người. Nnổi tiếng toàn cầu nhờ là cái nôi của Phật giáo Thiếu Lâm, Đạo giáo Trung Hoa, và văn hóa Trung Nguyên cổ đại. Đây cũng là nơi tọa lạc Thiếu Lâm Tự, ngọn núi Tùng Sơn (Songshan), và nhiều công trình cổ được UNESCO công nhận là Di sản Thế giới.\nĐến Đăng Phong, đoàn nhận phòng khách sạn nghỉ ngơi"
      },
      {
        "day": "NGÀY 6",
        "fullDayTitle": "NGÀY 6: THIẾU LÂM TỰ - KHAI PHONG PHỦ",
        "title": "THIẾU LÂM TỰ - KHAI PHONG PHỦ",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng sau đó di chuyển đi tham quan :\nThiếu Lâm tự - xâu dựng năm 495 (thời Bắc Ngụy), do nhà vua Hiếu Văn Đế xây dựng để cung thỉnh Bồ Đề Đạt Ma– tổ thứ 28 của Thiền tông Ấn Độ – truyền đạo tại Trung Quốc, được coi là cái nôi của Thiền tông Phật giáo Trung Hoa và võ thuật Thiếu Lâm nằm trên núi Tùng Sơn. Với lịch sử hơn 1.500 năm, Thiếu Lâm Tự đã trở thành biểu tượng của sự kết hợp giữa tôn giáo và võ thuật, đồng thời là điểm đến tâm linh và văn hóa độc đáo. ( Bao gồm xe điện )\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng sau đó di chuyển về Khai Phong một thành phố hơn 2700 năm tuổi, từng là kinh đô của nhiều triều đại như Bắc Tống và nhà Kim. Với diện tích hơn 60 mẫu Anh và diện tích xây dựng lên đến 13.600 mét vuông\nKhai Phong Phủ - được xây dựng vào thời Bắc Tống hơn 1000 năm trước và được tái thiết vào thời nhà Thanh, đây là một trong những phủ quan trọng nhất trong lịch sử Trung Quốc và gắn liền với những câu chuyện xử án của vị quan thanh liêm Bao Thanh Thiên ( Bao Chửng ). Phủ Khai Phong được biết đến với quy mô độc nhất vô nhị trong số các cơ quan chính phủ qua các triều đại trước đây.\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng, nghỉ ngơi hoặc tự do khám phá Khai Phong về đêm."
      },
      {
        "day": "NGÀY 7",
        "fullDayTitle": "NGÀY 7: KHAI PHONG - TRỊNH CHÂU - VIỆT NAM",
        "title": "KHAI PHONG - TRỊNH CHÂU - VIỆT NAM",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn sau đó tham quan :\nCông viên Tháp Sắt ở Khai Phong, hay còn gọi là Chùa Hữu Quốc (佑国寺), là một điểm tham quan nổi tiếng, nằm ở phía đông bắc thành phố Khai Phong, tỉnh Hà Nam, Trung Quốc. Tháp Sắt, công trình chính của công viên, được xây dựng từ năm 1049 dưới thời Bắc Tống và nổi tiếng với kiến trúc độc đáo, được làm từ gạch tráng men màu nâu sẫm, tạo nên vẻ ngoài như làm bằng sắt.\nSau đó, đoàn dùng bữa trưa tại nhà hàng rồi di chuyển về thành phố Trịnh Châu để làm thủ tục đáp chuyến bay về Việt Nam\nVề đến Việt Nam, Goholic chia tay và hẹn gặp lại đoàn"
      }
    ],
    "inclusions": [
      "Vé máy bay quốc tế khứ hồi Hà Nội/ TP.HCM – Tây An, Trịnh Châu – TP.HCM/ Hà Nội",
      "Vé tàu hạng nhất từ Tây An đến Lạc Dương",
      "Xe du lịch 35 chỗ cho đoàn 15 khách",
      "Visa nhập cảnh Trung Quốc dành cho cả đoàn",
      "Tất cả các chi phí vé vào cửa cho tất cả các địa điểm du lịch được liệt kê trong hành trình;",
      "Show diễn Đà linh truyền kì",
      "Các bữa ăn theo chương trình với các món ẩm thực đặc sắc",
      "Hướng dẫn viên địa phương",
      "Khách sạn tiêu chuẩn 4* quốc tế ở các thành phố,2 khách /phòng. Phòng 3 khi lẻ nam/nữ",
      "Phí dịch vụ & Thuế chính phủ;",
      "Các thỏa thuận bao gồm phí lập kế hoạch, xử lý, vận hành và liên lạc.",
      "Nước uống được cung cấp trong suốt chuyến đi",
      "Bảo hiểm du lịch.",
      "Quà tặng sim điện thoại."
    ],
    "exclusions": [
      "Tiền tip cho hướng dẫn viên và tài xế: 42 USD/khách/ Tour",
      "Các chi phí cá nhân không được nêu trong mục Bao gồm.",
      "Phụ thu phòng đơn nếu quý khách có nhu cầu ngủ riêng (phụ thu 000.000 VNĐ/khách/tour)"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-05",
    "code": "GH-05",
    "title": "KHÁM PHÁ TRUNG HOA 16N15Đ",
    "url": "https://goholictravel.com/tour/kham-pha-trung-hoa-16n15d/",
    "country": "china",
    "countryName": "Trung Quốc",
    "region": "china",
    "departureFrom": "TP.HCM",
    "startDate": "2025-10-13",
    "departureSchedule": "2025-10-13",
    "duration": "16 ngày 15 đêm",
    "durationCategory": "7-days-tour",
    "month": "thang-10,thang-11",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "FEATURED TOUR",
    "badgeColor": "bg-amber-500",
    "isFeatured": true,
    "price": 65890000,
    "priceDisplay": "65.890.000đ",
    "originalPrice": 73800000,
    "rating": 5.0,
    "reviewsCount": 155,
    "image": "https://goholictravel.com/wp-content/uploads/2025/09/trungquoc-1200x675.jpg",
    "gallery": [
      "https://goholictravel.com/wp-content/uploads/2025/09/shanghai-tower-gensler-dezeen-ban.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/09/suzhou-hanshan-temple.webp",
      "https://goholictravel.com/wp-content/uploads/2025/09/gubeiwatertownandsimataigreatwalldaytour-klooksingapore.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/09/02454-big.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/09/images-1.jpg"
    ],
    "headMeta": [
      "16 ngày 15 đêm",
      "Nhóm: 10 - 12 Khách",
      "Tân Sơn Nhất",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Toàn bộ hành trình đều No Shop – không đưa khách vào những điểm mua sắm của tour",
    "introText": "Toàn bộ hành trình đều No Shop – không đưa khách vào những điểm mua sắm của tour\n\nLưu trú khách sạn 4 5* trong lòng Ô Trấn, 5*Cổ Bắc thuỷ trấn, khu the Bund Thượng Hải và các khách sạn 4* gần trung tâm các nơi đến\n\nTặng Sim data trong quá trình tham gia hành trình.\n\nTham quan các điểm đến đặc biệt, chọn lọc mỗi hành trình\n\nChương trình thoải mái, thiết kế riêng, linh động về thời gian\n\nCác nhà hàng được chọn lọc kĩ và nâng cấp các bữa ăn so với các tour thông thường",
    "highlights": [
      "Thưởng thức ẩm thực đặc sắc vùng Giang Nam và Hoa Bắc, Hồ Nam",
      "Bay thẳng từ Hà Nội đến với thành phố Bắc Kinh và từ Thượng Hải – Hà Nội",
      "Thưởng thức bữa ăn tại nhà hàng Michelin",
      "Trải nghiệm tàu cao tốc Bắc Kinh – Tây An"
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1: HÀ NỘI – BẮC KINH",
        "title": "HÀ NỘI – BẮC KINH",
        "detail": "Khởi hành đi Bắc Kinh ( chuyến bay đêm):\nTrưởng đoàn đón hành khách tại ga đi sân bay quốc tế Nội Bài trước 3 giờ khởi hành.\nChuyến bay dự kiến của Vietnam Airlines VNA HAN – PEK 00:25 – 05:00\nBuổi sáng : Đến Bắc Kinh, đoàn làm thủ tục nhập cảnh sau đó di chuyển đến nhà hàng dùng bữa sáng và bắt đầu chương trình tham quan :\nDi Hoà Viên : được xem là công viên hoàng gia lớn nhất và được bảo tồn tốt nhất của Trung Quốc, từng là nơi nghỉ mát mùa hè của các hoàng đế nhà Thanh. Được UNESCO công nhận là Di sản Thế giới năm 1998, nơi đây không chỉ là kiệt tác kiến trúc cổ mà còn là minh chứng sống động cho nghệ thuật làm vườn phong cách Trung Hoa cổ điển.\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng sau đó di chuyển về khách sạn nhận phòng nghỉ ngơi\nBuổi chiều: Đoàn tham quan :\nThiên Đàn là một quần thể kiến trúc cổ đặc sắc được xây dựng từ năm 1420 dưới triều vua Minh Thành Tổ. Đây là nơi các hoàng đế Trung Hoa thời Minh và Thanh cử hành nghi lễ tế Trời, cầu mưa thuận gió hòa, mùa màng tốt tươi.\nSau đó, đoàn di chuyển đến nhà hàng dùng bữa tối, thưởng thức đặc sản nổi tiếng vịt quay Bắc Kinh sau đó về khách sạn nghỉ ngơi ."
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: THIÊN AN MÔN – TỬ CẤM THÀNH",
        "title": "THIÊN AN MÔN – TỬ CẤM THÀNH",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn sau đó bắt đầu hành trình khám phá Bắc Kinh :\nThiên An Môn : \"Cổng Hòa Bình Trời ban\", được xây dựng vào năm 1420dưới triều Minh Thành Tổ, ban đầu gọi là Thừa Thiên Môn. Đây từng là cổng chính phía nam của Hoàng thành dẫn vào Tử Cấm Thành.\nTử Cấm Thành, còn gọi là Cố Cung, là một trong những công trình kiến trúc và di sản văn hóa vĩ đại nhất của Trung Quốc. Đây là nơi sinh sống của các hoàng đế Trung Hoaqua các triều đại Minh và Thanh, đồng thời là trung tâm quyền lực và văn hóa trong suốt hơn 500 năm.\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng sau đó về khách sạn nghỉ ngơi\nBuổi chiều : đoàn dạo phố Hutong , tên gọi dành cho những con ngõ nhỏ, dài và hẹp len lỏi giữa các khu dân cư cổ ở Bắc Kinh. Hình thành từ thời Nguyên – Minh – Thanh, các phố Hutong phản ánh cấu trúc xã hội, đời sống sinh hoạt và văn hóa của người dân thủ đô xưa.\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng, thưởng thức Kinh Kịch - một biểu tượng đặc sắc của văn hóa Trung Hoa, kết hợp giữa ca hát, diễn xuất, động tác hình thể, võ thuật và hóa trang."
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: THẬP TAM LĂNG – VẠN LÝ TRƯỜNG THÀNH – CỔ BẮC THUỶ TRẤN",
        "title": "THẬP TAM LĂNG – VẠN LÝ TRƯỜNG THÀNH – CỔ BẮC THUỶ TRẤN",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại nhà hàng, làm thủ tục trả phòng sau đó di chuyển tham quan:\nThập Tam Lăng là quần thể 13 lăng mộ của các hoàng đế triều Minh (1368–1644), cùng với lăng của hoàng hậu, phi tần và các thành viên hoàng thất khác, là quần thể lăng mộ hoàng gia lớn nhất và bảo tồn tốt nhất ở Trung Quốc.\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng sau đó tham quan :\nVạn Lý Trường Thành là hệ thống tường thành quân sự cổ dài nhất thế giới, được xây dựng để bảo vệ Trung Quốc khỏi các cuộc xâm lược từ phương Bắc bởi vì Hoàng Đế nổi tiếng Trung Hoa – Tần Thuỷ Hoàng.\nBuổi tối : Đoàn di chuyển về Cổ Bắc thuỷ trấn, nhận phòng khách sạn nghỉ ngơi sau đó dùng bữa tối tại nhà hàng."
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: CỔ BẮC THUỶ TRẤN – TÂY AN",
        "title": "CỔ BẮC THUỶ TRẤN – TÂY AN",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn sau đó tham quan Cổ Bắc Thủy Trấn nằm ở làng Simatai, quận Miyun, Bắc Kinh, ngay dưới chân Vạn Lý Trường Thành Tư Mã Đài. Đây là điểm nghỉ dưỡng nổi tiếng tại Bắc Kinh sở hữu lối kiến ​​trúc cổ phương Bắc, được xây dựng dọc hai bên hồ nước, so với Lệ Giang thì càng xứng với tên gọi “Venice Phương Đông” hơn.\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng sau đó làm thủ tục trả phòng, di chuyển vào trung tâm Bắc Kinh để đi chuyến tàu cao tốc đến Tây An.\nChuyến tàu dự kiến :\nBuổi tối : Đến Tây An, đoàn ăn tối tại nhà hàng sau đó di chuyển về khách sạn nhận phòng nghỉ ngơi."
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: BINH MÃ DŨNG – MỘ TẦN THUỶ HOÀNG – PHỐ HỒI GIÁO",
        "title": "BINH MÃ DŨNG – MỘ TẦN THUỶ HOÀNG – PHỐ HỒI GIÁO",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng tại khách sạn sau đó bắt đầu hanh trình khám phá cố đô Tây An :\nBinh Mã Dũng – đội quân đất nung bảo bệ Tần Thuỷ Hoàng ở thế giới bên kia, làmột trong những di tích khảo cổ học quan trọng và nổi tiếng nhất thế giới, được ví như “kỳ quan thứ 8”. Tổng diện tích khai quật hơn 20.000 m², với hơn 8.000 tượng binh sĩ, ngựa chiến, xe ngựa…\nLăng mộ của Tần Thủy Hoàng (259–210 TCN) – vị hoàng đế đầu tiên thống nhất Trung\nHoa vào năm 221 TCN, lập ra triều đại nhà Tần. Đây là quần thể lăng mộ hoành tráng, quy mô lớn, được xây dựng trong hơn 38 năm với hơn 700.000 nhân công tham gia, một trong những công trình lăng mộ lớn và bí ẩn nhất thế giới cổ đại ( khu lăng mộ này hiện tại vẫn chưa được khai quật và mở cửa tham quan nên chỉ có thể ngắm từ bên ngoài )\nBuổi trưa : Đoàn di chuyển đến nhà hàng dùng bữa trưa, nghỉ ngơi sau đó tham quan phố Hồi Giáo - khu dân cư truyền thống của cộng đồng người Hồi (Hui) ở Tây An, có lịch sử từ thời nhà Đường (thế kỷ 7–10).\nTháp chuông Tây An - xây dựng từ năm 1384(thời nhà Minh), tháp chuông Tây An là một trong những tháp chuông cổ lớn nhất và được bảo tồn tốt nhất ở Trung Quốc.\nBuổi tối: Đoàn dùng bữa tối tại nhà hàng sau đó khám phá Tây An, thưởng thức show diễn “ Đà linh truyền kì ” của đạo diễn Trương Nghê Mưu"
      },
      {
        "day": "NGÀY 6",
        "fullDayTitle": "NGÀY 6: TÂY AN – NÚI HOA SƠN",
        "title": "TÂY AN – NÚI HOA SƠN",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn sau đó di chuyển đến núi Hoa Sơn tham quan :\nNúi Hoa Sơn là một trong Ngũ Nhạc danh sơn - 5 ngọn núi linh thiêng nhất Trung Quốc, đại diện cho Phương Tây (Tây Nhạc ). Nổi tiếng với cảnh sắc hùng vĩ, vách đá dựng đứng, đường núi hiểm trở và những con đường mòn \"thót tim\". Là điểm hành hương của các đạo sĩ Đạo giáo xưa kia, đồng thời là nơi thu hút hàng triệu du khách mỗi năm. ( Di chuyển bằng cáp treo )\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng sau đó di chuyển về Tây An. Về đến Tây An, đoàn về khách sạn nghỉ ngơi.\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng sau đó tự do khám phá , dạo phố cổ về đêm. Khám phá Tây An bất dạ thành – tái hiện lại cảnh thành cổ Tây An nhà Đường với hàng quán buôn bán sần uất."
      },
      {
        "day": "NGÀY 7",
        "fullDayTitle": "NGÀY 7: TÂY AN – TRƯƠNG GIA GIỚI",
        "title": "TÂY AN – TRƯƠNG GIA GIỚI",
        "detail": "Buổi sáng : Đoàn thức dậy dùng bữa sáng tại nhà hàng, sau đó tham quan :\nTháp Đại Nhạn ( Đại Yến Tháp)là một trong những biểu tượng văn hóa – lịch sử nổi tiếng nhất của thành phố Tây An, gắn liền với Phật giáo, con đường tơ lụa và nhà sư Huyền Trang, được xây dựng năm 652 dưới triều Đường Cao Tông, thời nhà Đường. Tháp do nhà sư Huyền Trang chủ trì xây dựng, dùng để lưu giữ kinh Phật và xá lợi mang từ Ấn Độ về sau chuyến thỉnh kinh dài 17 năm.\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng sau đó di chuyển ra sân bay để làm thủ tục bay về Trương Gia Giới.\nChuyến bay dự kiến 14:35 – 16:05\nĐáp sân bay Trương Gia Giới, đoàn lấy hành lý sau đó di chuyển về khách sạn nghỉ ngơi.\nBuổi tối : Đoàn dùng bữa tối tại khách sạn, tự do nghỉ ngơi, dạo phố đêm."
      },
      {
        "day": "NGÀY 8",
        "fullDayTitle": "NGÀY 8: THIÊN MÔN SƠN – PHƯỢNG HOÀNG CỔ TRẤN",
        "title": "THIÊN MÔN SƠN – PHƯỢNG HOÀNG CỔ TRẤN",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn, làm thủ tục trả phòng sau đó di chuyển đến Thiên Môn Sơn\nThiên Môn Sơn :điểm du lịch huyền thoại và ngoạn mục nhất của Trương Gia Giới,\nnổi tiếng với cảnh quan thiên nhiên kỳ vĩ, cáp treo dài nhất thế giới và con đường “thót tim” treo giữa vách đá.\nTrải nghiệm :\nCáp treo Thiên Môn Sơn – Dài nhất thế giới, dài 7.455 m, với độ chênh lệch cao 1.279 m.\nCon đường uốn lượn như rồng, gồm 99 khúc cua gắt, nối từ chân núi lên cổng trời.\nCổng trời “ Thiên Môn động “ biểu tượng của Thiên Môn Sơn – nơi “trời đất giao hòa”, được xem là cánh cổng nối giữa trần gian và thiên giới.\n“ Đi trên mây “ với con đường bằng kính uốn lượn quanh vách đá ở độ cao 1.400m\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng sau đó tiếp tục chương trình\nBuổi chiều : Đoàn di chuyển bằng cáp treo xuống núi, sau đó về Phượng Hoàng cổ trấn.\nĐến Phượng Hoàng cổ trấn, đoàn nhận phòng khách sạn nghỉ ngơi.\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng sau đó tự do khám phá Phượng Hoàng cổ trấn về đêm."
      },
      {
        "day": "NGÀY 9",
        "fullDayTitle": "NGÀY 9: PHƯỢNG HOÀNG CỔ TRẤN",
        "title": "PHƯỢNG HOÀNG CỔ TRẤN",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn sau đó khám phá Phượng Hoàng Cổ Trấn là một trong những điểm du lịch nổi tiếng nhất ở Trung Quốc, đặc biệt nổi bật với vẻ đẹp cổ kính, thiên nhiên tuyệt mỹ và văn hóa truyền thống đặc sắc. Trấn nằm ở phía Tây Nam tỉnh Hồ Nam, thuộc khu tự trị Tương Tây, được mệnh danh là \"viên ngọc của Trung Quốc\".\nKhám phá :\nPhố cổ Phượng Hoàng - nơi những ngôi nhà cổ bằng gỗ với kiến trúc đặc trưng của các triều đại Minh, Thanh. Các cửa hàng nhỏ, quán trà và các gian hàng bán đồ thủ công mỹ nghệ tạo nên một không gian yên bình và cổ kính.\nCầu Hồng Kiều - ây cầu nổi tiếng, được xây dựng từ thời nhà Minh. Cầu được làm từ gỗ và có mái ngói uốn cong, rất đặc trưng cho kiến trúc cổ Trung Hoa.\nSông Tương Giangchảy xuyên qua Phượng Hoàng Cổ Trấn, tạo nên một cảnh quan lãng mạn và hữu tình. Bạn có thể du thuyền trên sông để ngắm cảnh Phượng Hoàng từ góc nhìn khác, hoặc đi bộ dọc theo bờ sông, ngắm nhìn các quán trà và cửa hàng ven đường.\nTham quan các ngôi đền cổ như đền Thiên Tổ, đền Hoa Sơn hay các bảo tàng dân tộc Miêu trong phố cổ, tìm hiểu lối sống của người dân tộc Miêu.\nHay hoá thân thành các cô gái, chàng trai trong bộ trang phục dân tộc Miêu và chụp ảnh bên dòng sông Tương Giang thơ mộng.\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng trong phố cổ sau đó về khách sạn nghỉ ngơi.\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng, tự do dạo phố cổ về đêm."
      },
      {
        "day": "NGÀY 10",
        "fullDayTitle": "NGÀY 10: PHƯỢNG HOÀNG CỔ TRẤN – VŨ LĂNG NGUYÊN",
        "title": "PHƯỢNG HOÀNG CỔ TRẤN – VŨ LĂNG NGUYÊN",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn sau đó làm thủ tục trả phòng, di chuyển về Vũ Lăng Nguyên - một khu vực thiên nhiên kỳ vĩ nằm ở Trương Gia Giới, tỉnh Hồ Nam, Trung Quốc, nổi tiếng với những dãy núi đá vôi cao chót vót, các cảnh quan hùng vĩ và những rừng cây xanh tươi. Đây là khu vực đã được UNESCO công nhận là Di sản Thiên nhiên Thế giới từ năm 1992.\nĐến Vũ Lăng Nguyên , đoàn dùng bữa trưa tại nhà hàng sau đó đoàn tham quan công viên rừng quốc gia -Trương Gia Giới (Zhangjiajie National Forest Park) là một trong những kỳ quan thiên nhiên nổi tiếng của Trung Quốc, thu hút du khách bởi cảnh quan hùng vĩ và độc đáo.\nTrải nghiệm đi thang máy Bách Long - Là thang máy ngoài trời cao nhất, nhanh nhất và có tải trọng lớn nhất thế giới, được mệnh danh là \"Thang máy số 1 thế giới\".\nViên Gia Giới - hay còn gọi là núi Avatar , được biết đến là nguồn cảm hứng cho bộ phim \"Avatar\", với những cột đá sa thạch cao vút, tạo nên cảnh quan kỳ vĩ.\nBuổi chiều : Đoàn di chuyển về khách sạn nhận phòng nghỉ ngơi.\nBuổi tối : Đoàn dùng cơm tối tại nhà hàng sau đó tự do dạo phố, hoặc xem show diễn Rạng rỡ Tương Tây hoặc Thiên cổ tình ( chi phí tự túc )."
      },
      {
        "day": "NGÀY 11",
        "fullDayTitle": "NGÀY 11: HỒ BẢO PHONG – TRƯƠNG GIA GIỚI – THƯỢNG HẢI",
        "title": "HỒ BẢO PHONG – TRƯƠNG GIA GIỚI – THƯỢNG HẢI",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn, làm thủ tục trả phòng sau đó di chuyển đến :\nHồ Bảo Phong là một điểm đến nổi bật tại khu thắng cảnh Vũ Lăng Nguyên, Trương Gia Giới, Trung Quốc. Với vẻ đẹp sơn thủy hữu tình, nơi đây được mệnh danh là “nàng thơ” giữa lòng Trương Gia Giới, thu hút du khách bởi khung cảnh thiên nhiên thơ mộng và trải nghiệm du ngoạn độc đáo. Đoàn trải nghiệm ngồi thuyền, ngắm phong cảnh nên thơ, hữu tình 2 bên hồ.\nBuổi trưa : đoàn dùng bữa trưa tại nhà hàng sau đó di chuyển ra sân bay để bay về Thượng Hải.\nChuyến bay dự kiến : 14:25 – 16:40\nĐến Thượng Hải, đoàn lấy hành lý sau đó di chuyển về Tô Châu.\nĐến Tô Châu, đoàn làm thủ tục nhận phòng khách sạn, dùng bữa tối sau đó nghỉ ngơi"
      },
      {
        "day": "NGÀY 12",
        "fullDayTitle": "NGÀY 12: TÔ CHÂU – CHUYẾT CHÍNH VIÊN – HÀN SƠN TỰ - HÀNG CHÂU",
        "title": "TÔ CHÂU – CHUYẾT CHÍNH VIÊN – HÀN SƠN TỰ - HÀNG CHÂU",
        "detail": "Buổi sáng : Đoàn thức dậy dùng bữa sáng, làm thủ tục trả phòng sau đó tham quan :\nChuyết Chính Viên - một trong những khu vườn cổ điển nổi tiếng nhất tại Tô Châu, Trung Quốc. Được xây dựng vào thế kỷ XVI dưới thời nhà Minh, khu vườn này không chỉ là biểu tượng của nghệ thuật vườn cảnh Giang Nam mà còn được UNESCO công nhận là Di sản Thế giới vào năm 1997.\nHàn Sơn Tự ­- một trong những ngôi chùa Phật giáo cổ kính và nổi tiếng nhất tại Tô Châu, Trung Quốc, được xây dựng vào thế kỷ VI dưới thời nhà Lương, ban đầu có tên là Diệu Lợi Phổ Minh Tháp Viện. Tên gọi \"Hàn Sơn Tự\" được đặt theo tên của thiền sư Hàn Sơn, một nhà sư và thi sĩ nổi tiếng từng tu hành tại đây\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng sau đó di chuyển đến Hàng Châu nhận phòng khách sạn nghỉ ngơi.\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng, dạo phố cổ Hà Phường với những gian hàng mua sắm nhộn nhịp, đặc sắc."
      },
      {
        "day": "NGÀY 13",
        "fullDayTitle": "NGÀY 13: MIẾU NHẠC PHI – TÂY HỒ - Ô TRẤN",
        "title": "MIẾU NHẠC PHI – TÂY HỒ - Ô TRẤN",
        "detail": "Buổi sáng : Đoàn thức dậy dùng bữa sáng, làm thủ tục trả phòng sau đó tham quan :\nMiếu Nhạc Phi - một di tích lịch sử nổi tiếng tại Hàng Châu, Trung Quốc, nằm gần bờ Tây Hồ thơ mộng. Được xây dựng vào năm 1221 dưới thời Nam Tống, miếu thờ vị tướng Nhạc Phi – biểu tượng của lòng trung nghĩa và tinh thần yêu nước trong lịch sử Trung Hoa.​\nDạo thuyền trên Tây Hồ thơ mộng ở Hàng Châu là một trải nghiệm không thể bỏ qua khi đến thăm thành phố này. Đây là cách tuyệt vời để cảm nhận vẻ đẹp thơ mộng, trữ tình và đầy thi vị của một trong những thắng cảnh nổi tiếng nhất Trung Quốc.\nBuổi trưa : Đoàn thưởng thức bữa trưa với món mì heo Đông Pha nổi tiếng sau đó di chuyển về Ô Trấn - một trong những cổ trấn nổi tiếng và đẹp nhất Trung Quốc, nằm ở tỉnh Chiết Giang, trong tam giác du lịch Thượng Hải – Hàng Châu – Tô Châu với lịch sử hơn 1.300 năm.\nĐến Ô Trấn, đoàn nhận phòng khách sạn trong lòng cổ trấn – đây là một trải nghiệm vô cùng độc đáo để đoàn có thể dạo bước, thưởng trà và ngắm nhìn thuỷ trấn xinh đẹp cùng những công trình hơn 1300 năm.\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng, tự do khám phá Ô Trấn về đêm"
      },
      {
        "day": "NGÀY 14",
        "fullDayTitle": "NGÀY 14: Ô TRẤN – THƯỢNG HẢI",
        "title": "Ô TRẤN – THƯỢNG HẢI",
        "detail": "Buổi sáng : Đoàn thức dậy dùng bữa sáng tại nhà hàng, dạo bước trong Ô Trấn buôi sáng, ngắm nhìn chợ sáng, tham quan tháp Bạch Liên, miếu Nguyệt Lão, phường dệt vải…hay đơn giản ngồi thưởng thức ly trà ấm nóng bên dòng sông thanh bình…\nBuổi trưa : Đoàn làm thủ tục trả phòng, dùng bữa trưa sau đó di chuyển về Thượng Hải.\nĐến Thượng Hải, đoàn làm thủ tục nhận phòng khách sạn nghỉ ngơi\nBuổi chiều : Đoàn dạo phố, cafe, ngắm nhìn những kiến trúc độc đáo của Thượng Hải phồn hoa.\nTrải nghiệm du thuyền sông Hoàng Phố - ngắm nhìn thành phố Thượng Hải về đêm ( chi phí tự túc )"
      },
      {
        "day": "NGÀY 15",
        "fullDayTitle": "NGÀY 15: CITY TOUR THƯỢNG HẢI",
        "title": "CITY TOUR THƯỢNG HẢI",
        "detail": "Buổi sáng : Đoàn thức dậy dùng bữa sáng sau đó bắt đầu khám phá thành phố Thượng Hải :\nBến Thượng Hải: Khu tô giới xa hoa những năm cuối TK19 – đầu TK 20. Quý khách có thể lựa chọn trải nghiệm du thuyền trên sông Hoàng Phố (chi phí tự túc), chiêm ngưỡng bức tranh một Thượng Hải về đêm với các tòa nhà kiến trúc hai bên bờ sông, khu phố Đông – phố Tây.\nDu khách sẽ đến với một trong những địa điểm đặc trưng nhất tại Thượng Hải với cà phê Rei, phố Bắc Kinh, phố Tứ Xuyên, Hồng Khẩu, sông Tô Châu hiền hoà bên kiến trúc nhà thờ đậm chất Tây Phương.\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng với món mì cua lông, tiểu long bao…nổi tiếng xứ Giang Nam, sau đó tham quan\nChợ Dự Viên: con phố nhộn nhịp trong tiếng rao hàng của người dân điạ phương bao quanh miếu Thành Hoàng và là một trong những địa điểm sầm uất nhất tại Thượng Hải\nMinh Châu hoàn đảo: địa điểm check in biểu tượng của Thượng Hải – tháp truyền hình Đông Phương Minh Châu.\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng Michelin với các món ăn đặc sắc Trung Hoa, dạo phố Nam Kinh sau đó về khách sạn nghỉ ngơi."
      },
      {
        "day": "NGÀY 16",
        "fullDayTitle": "NGÀY 16: THƯỢNG HẢI – TP. HỒ CHÍ MINH",
        "title": "THƯỢNG HẢI – TP. HỒ CHÍ MINH",
        "detail": "Buổi sáng : Đoàn thức dậy, dùng bữa sáng tại nhà hàng, tự do nghỉ ngơi hoặc có thể đến với phố Tân Thiên Địa - một khu phố giải trí, mua sắm và ẩm thực cao cấp nằm ngay trung tâm Thượng Hải, nổi tiếng với sự pha trộn hoàn hảo giữa nét kiến trúc cổ kính của Shikumen (nhà đá cổ Thượng Hải) và phong cách hiện đại phương Tây.\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng sau đó di chuyển ra sân bay để làm thủ tục check in chuyến bay về Hà Nội\nChuyến bay dự kiến của Vietnam airlines : VNA 15:10 – 18:40\nVề đến Việt Nam, chia tay và hẹn gặp lại đoàn."
      }
    ],
    "inclusions": [
      "Tàu cao tốc Bắc Kinh – Tây An",
      "Visa nhập cảnh Trung Quốc dành cho cả đoàn",
      "Tất cả các chi phí vé vào cửa cho tất cả các địa điểm du lịch được liệt kê trong hành trình;",
      "Các bữa ăn theo chương trình:Các bữa ăn đặc sản Trung Hoa từ 70 – 80 tệ/ bữa, vịt quay Bắc Kinh 120 tệ/bữa, Michelin 150 tệ/bữa, bữa ăn trong cổ trấn 100 tệ/bữa, BBQ, hotpot…và các bữa ăn đặc sắc tại các điểm đến",
      "Xe du lịch đời mới 29 chỗ ngồi rộng rãi, thoải mái",
      "Hướng dẫn viên địa phương và trưởng đoàn Việt Nam theo suốt chuyến đi, nhiệt tình, kiến thức tốt, chụp ảnh đẹp.",
      "Khách sạn: 4 – 5* sao cho toàn hành trình tiêu chuẩn 02 khách/phòng được chọn lọc nằm trung tâm, trong cổ trấn, vị trí thuận lợi để dạo phố đêm hay di chuyển đến các điểm tham quan.",
      "Phí dịch vụ & Thuế chính phủ;",
      "Các thỏa thuận bao gồm phí lập kế hoạch, xử lý, vận hành và liên lạc.",
      "Nước uống được cung cấp trong suốt chuyến đi",
      "Bảo hiểm du lịch.",
      "Quà tặng sim điện thoại sử dụng data suốt hành trình"
    ],
    "exclusions": [
      "Vé máy bay khứ hồi TP.HCM – Bắc Kinh, Thượng Hải – TP.HCM, Tây An – Trương Gia Giới, Trương Gia Giới – Thượng Hải",
      "Tiền tip cho hướng dẫn viên và tài xế: 96$/khách/tour",
      "Các show diễn về đêm",
      "Các chi phí cá nhân không được nêu trong mục Bao gồm",
      "Phụ thu phòng đơn nếu quý khách có nhu cầu ngủ riêng (phụ thu VNĐ/khách/tour)"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-06",
    "code": "GH-06",
    "title": "KHÁM PHÁ ĐÔNG JAVA – BROMO",
    "url": "https://goholictravel.com/tour/kham-pha-dong-java-brom/",
    "country": "indonesia",
    "countryName": "Indonesia",
    "region": "indonesia",
    "departureFrom": "TP.HCM",
    "startDate": "2025-10-03",
    "departureSchedule": "2025-10-03",
    "duration": "6 ngày 5 đêm",
    "durationCategory": "5-7-days-tour",
    "month": "",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "FEATURED TOUR",
    "badgeColor": "bg-cyan-600",
    "isFeatured": true,
    "price": 25490000,
    "priceDisplay": "25.490.000đ",
    "originalPrice": 28500000,
    "rating": 5.0,
    "reviewsCount": 162,
    "image": "https://goholictravel.com/wp-content/uploads/2025/09/bromo-1200x675.jpg",
    "gallery": [
      "https://goholictravel.com/wp-content/uploads/2025/09/tanah-lot-temple-1024x683.webp",
      "https://goholictravel.com/wp-content/uploads/2025/09/tumpak-sewu-waterfalls-east-java-indonesia-the-mandagies-37.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/09/arts-center-museum-bali-800x530.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/09/tourriengnhieungaynuibromovaijenvoihuongdandangonngu.jpg"
    ],
    "headMeta": [
      "6 ngày 5 đêm",
      "Nhóm: 7 - 11 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Vé máy bay quốc tế khứ hồi TP HCM – BALI – TP HCM.",
    "introText": "Vé máy bay quốc tế khứ hồi TP HCM – BALI – TP HCM.\n\nVé máy bay nội địa khứ hồi: SURABAYA – BALI\n\nHành lý: 1 kiện 07kg xách tay và hành lý ký gửi 20kg.\n\nLưu trú: 02 khách/phòng (phòng Twin/Double). Phòng được bố trí khi lẻ nam, nữ\n\n2 Đêm resort 5* tại Bali\n\nĂn uống\n\nCác bữa ăn chính Set menu\n\nNước uống 2chai/ngày\n\nHướng dẫn viên/ Trưởng đoàn công ty Goholic\n\nHDV địa phương suốt tuyết và tại các điểm đến\n\nVé tham quan du lịch trọn gói theo chương trình\n\nXe jeep vào khu vực núi lửa Bromo\n\nBảo hiểm Du lịch trọn gói\n\nNước suôi hằng ngày (02chai/khách/ngày)\n\nVé vào tất cả các điểm thăm quan\n\nThẻ tên hành lý ghi dấu tên và hành trình",
    "highlights": [
      "Xe di chuyển theo hành trình",
      "Khách sạn 3* sao ( khách sạn tốt nhất tại điểm đến",
      "Bữa sáng điểm tâm chọn món và buffet sáng tại khách sạn"
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1: TP HCM - BALI",
        "title": "TP HCM - BALI",
        "detail": "Buổi Sáng:\nHDV đón khách tại điểm hẹn lúc 4:00 AM tại ga quốc tế, cảng hàng không Tân Sơn Nhất để bay đến DPS - Bali.\nChuyến bay thẳng Vietjet| SGN - DPS| 7:05 AM -11:50 AM\nBuổi Trưa:\nĐoàn nhập cảnh Indo, ăn trưa tại nhà hàng địa phương và di chuyển về khách sạn cách sân bay 1,5 tiếng di chuyển.\nĐoàn ghé tham quan đền Tanah Lot, một ngôi đền linh thiêng và là biểu tương của Bali, để ngắm hoàng hôn.\nSau đó về resort nhận phòng nghỉ ngơi\nBuổi Tối: Đoàn ăn tối và nghỉ ngơi"
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: BALI – BANYUWANGI",
        "title": "BALI – BANYUWANGI",
        "detail": "Buổi Sáng:\nĐoàn thức dậy và ăn sáng lúc 7:00 AM\n9:30 Đoàn check out và di chuyển đến phà để qua Bayuwangi\nBuổi Trưa: Đoàn ăn trưa tại Banyuwangi và di chuyển về khách sạn nhận phòng nghỉ ngơi\nBuổi Tối: Đoàn ăn tối và nghỉ ngơi sớm để bắt đầu hành trình chinh phục hồ Axit Kawah Ijen vào ngày hôm sau"
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: KHÁM PHÁ HỒ AXIT KAWAH IJEN",
        "title": "KHÁM PHÁ HỒ AXIT KAWAH IJEN",
        "detail": "Buổi Sáng:\nĐoàn thức dậy vào 00:00 AM, check out sau đó xe đón đoàn đến chân núi Kawah Ijen – 1h đi xe.\n2:00 AM Đoàn nhận Breafast Box\nHDV sẽ phổ biến quy tắc và sau đó cả đoàn sẽ hiking lên miệng hồ Axit Kawah Ijen - 5km (Khoảng 1h30p).\nĐón bình minh trên HỒ AXIT LỚN NHẤT THẾ GIỚI - KAWAH IJEN\nĐoàn hiking xuống núi và về lại khách sạn.\nBuổi Trưa: Ăn trưa tại nhà hàng địa phương.\nBuổi Tối:\nĐoàn di chuyển đến làng Lumajang để nhận phòng nghỉ ngơi\nĂn tối tại nhà hàng địa phương"
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: CHINH PHỤC THÁC NGÀN DÒNG TUMPAK SEWU",
        "title": "CHINH PHỤC THÁC NGÀN DÒNG TUMPAK SEWU",
        "detail": "Buổi Sáng:\n8:00 AM xe đưa thác ngàn dòng Tumpak Sewu hay còn được gọi là Coban Sewu, với độ cao lên đến 120 m, Tupak Sewu được xếp vào danh sách những ngọn thác cao nhất Indonesia. Không những thế, hơn ngàn dòng nước trắng xóa hòa cùng thiên nhiên hùng vĩ sẽ mang đến cho du khách trải nghiệm độc đáo khi đứng cả trên và trong lòng thác.\nĐoàn về khách sạn tắm rửa và check out\nBuổi Trưa: 12:00 Đoàn ăn trưa tại nhà hàng địa phương và di chuyển đến Probolinggo\nBuổi Tối: Đoàn nhận phòng, ăn tối và nghỉ ngơi"
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: CHIÊM NGƯỠNG QUẦN THỂ NÚI LỬA BROMO",
        "title": "CHIÊM NGƯỠNG QUẦN THỂ NÚI LỬA BROMO",
        "detail": "Buổi Sáng:\nXe Jeep sẽ đưa đoàn đến khu vực lòng chảo núi lửa Bromo để chiêm ngưỡng dải ngân hà huyền ảo.\nĐoàn đón bình minh và ăn sáng trên đồi Kingkong.\nNúi lửa Bromo - là một trong những ngọn núi lửa còn hoạt động tại phía đông Java, được đặc theo tên của vị thần Sáng Tạo Brahma, trong Hindu giáo. Nằm ở độ cao trên 2300m, khu vực này mát mẻ quanh năm, cảnh vật trù phú. Từ chân núi lửa quý khách có thể trèo lên 256 bậc thang để tận mặt chứng kiến lòng núi lửa vẫn đang sôi sục ngày đêm.\nBuổi Trưa: Đoàn quay về khách sạn, tắm rửa và check out để di chuyển ra sân bay Surabaya, bay về lại Bali | 17:05 – 19:05\nBuổi Tối:\nĐoàn đáp chuyến bay đến Bali, di chuyển về khách sạn nhận phòng ăn tối tại khu phố vui nhộn bậc nhất Bali là Kuta.\nDu khách tự do khám phá Bali về đêm"
      },
      {
        "day": "NGÀY 6",
        "fullDayTitle": "NGÀY 6: BALI – VIỆT NAM",
        "title": "BALI – VIỆT NAM",
        "detail": "Buổi Sáng:\nĐoàn ăn sáng tại khách sạn\nTự do khám phá Bali\nĐoàn check-out khách sạn\nĂn trưa tại nhà hàng địa phương\nDi chuyển đến sân bay quốc tế Denpasa đón chuyến bay DPS\nSGN| 15:30 - 20:30\nBuổi Tối:\nĐoàn đến sân bay quốc tế Tân Sơn Nhất, nhận hành lý, chào tạm biệt những người bạn đồng hành và hẹn ngày gặp lại."
      }
    ],
    "inclusions": [
      "Vé máy bay quốc tế khứ hồi TP HCM – BALI – TP HCM.",
      "Vé máy bay nội địa khứ hồi: SURABAYA – BALI",
      "Hành lý: 1 kiện 07kg xách tay và hành lý ký gửi 20kg.",
      "Xe di chuyển theo hành trình",
      "Lưu trú: 02 khách/phòng (phòng Twin/Double). Phòng được bố trí khi lẻ nam, nữ",
      "Khách sạn 3* sao ( khách sạn tốt nhất tại điểm đến",
      "2 Đêm resort 5* tại Bali",
      "Ăn uống",
      "Bữa sáng điểm tâm chọn món và buffet sáng tại khách sạn",
      "Các bữa ăn chính Set menu",
      "Nước uống 2chai/ngày",
      "Hướng dẫn viên/ Trưởng đoàn công ty Goholic",
      "HDV địa phương suốt tuyết và tại các điểm đến",
      "Vé tham quan du lịch trọn gói theo chương trình",
      "Xe jeep vào khu vực núi lửa Bromo",
      "Bảo hiểm Du lịch trọn gói",
      "Nước suôi hằng ngày (02chai/khách/ngày)",
      "Vé vào tất cả các điểm thăm quan",
      "Thẻ tên hành lý ghi dấu tên và hành trình"
    ],
    "exclusions": [
      "Các chi phí cá nhân",
      "Tiền Tip cho Tour Leader, Hướng dẫn viên và Lái xe: 50 USD/khách/tour.",
      "Phụ thu phòng đơn 350 USD/khách – nếu quý khách có nhu cầu ngủ riêng phòng",
      "Chi phí cưỡi ngựa tại Bromo, đi xe kéo tại Ijen và các chi phí phát sinh cá nhân suốt chuyến đi"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-07",
    "code": "GH-07",
    "title": "KHÁM PHÁ MA – RỐC XỨ NGHÌN LẺ MỘT ĐÊM",
    "url": "https://goholictravel.com/tour/kham-pha-ma-roc-xu-nghin-le-mot-dem/",
    "country": "maroc",
    "countryName": "Ma-rốc",
    "region": "maroc",
    "departureFrom": "TP.HCM/HÀ NỘI",
    "startDate": "2025-10-14",
    "departureSchedule": "2025-10-14",
    "duration": "14 ngày 13 đêm",
    "durationCategory": "7-days-tour",
    "month": "thang-10",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "TOUR MA-RỐC",
    "badgeColor": "bg-[#f8af22]",
    "isFeatured": false,
    "price": 78590000,
    "priceDisplay": "78.590.000đ",
    "originalPrice": 88000000,
    "rating": 4.9,
    "reviewsCount": 169,
    "image": "https://goholictravel.com/wp-content/uploads/2025/09/thumnailmaroc-1200x675.jpg",
    "gallery": [
      "https://goholictravel.com/wp-content/uploads/2025/09/chouara-tannery-154-marokko-handybilder-2018-fes-27347707917.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/09/8-6399d341002d4s-0.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/09/2401-bou-inania-madrasa-court-north-elevation-1662.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/09/pramod-kumar-sharma-ayq6hnpbgl0-unsplash.jpg"
    ],
    "headMeta": [
      "14 ngày 13 đêm",
      "Nhóm: 8 - 10 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Phương tiện vận chuyển suốt chương trình xe 30 chỗ",
    "introText": "Phương tiện vận chuyển suốt chương trình xe 30 chỗ\n\nEvisa nhập cảnh Ma – Rốc\n\nLưu trú: 02 khách/phòng (phòng Twin/Double). Phòng được được bố trí khi lẻ nam, nữ\n\nCác bữa trưa 15– 20Eur\n\nCác bữa tối tại nhà hàng được tuyển chọn : 20 – 60Eur, Rick cafe 40Eur, Chez Ali 60Eur, China restauran 25Eur, Palais la Medina & show 40Eur\n\nCác bữa ăn trưa theo phong vị ẩm thực Morocco và quốc tế\n\nHướng dẫn viên/Trưởng đoàn công ty Goholic\n\nHDV địa phương tại các điểm đến\n\nVé tham quan du lịch trọn gói theo chương trình ((Nhà thờ Hồi giáo Hassan II/Volubilis /Bou Inania Madrasa/Medersa Attarine/Hãng phim Atlas/Cung điện Bahia/Vườn Majorelle/Lăng mộ Saadiant)\n\nBảo hiểm du lịch trọn gói\n\nNước suối (02 chai/1 khách/1 ngày)",
    "highlights": [
      "Ăn uống:Bữa sáng tại khách sạn.",
      "Xe 4X4 chuyên dụng di chuyển ở sa mạc…",
      "1 chuyến trải nghiệm cưỡi lạc đà và trải nghiệm trên sa mạc của làng du mục"
    ],
    "itinerary": [
      {
        "day": "ĐÊM 00",
        "fullDayTitle": "ĐÊM 00: HÀ NỘI - CASABLANCA",
        "title": "HÀ NỘI - CASABLANCA",
        "detail": "Đoàn có mặt tại sân bay Quốc tế Nội Bài/ Tân Sơn Nhất trước 3 tiếng để làm thủ tục check in để bay đến thành phố Casablanca – trung tâm kinh tế và thương mại của Ma- Rốc\nĐoàn quá cảnh tại sân bay Istanbul – Thổ Nhĩ Kỳ"
      },
      {
        "day": "NGÀY 01",
        "fullDayTitle": "NGÀY 01: CASABLANCA ( ăn tối )",
        "title": "CASABLANCA ( ăn tối )",
        "detail": "Đến sân bay quốc tế Mohamed V (Morocco). Đoàn làm thủ tục nhập cảnh, gặp gỡ HDV địa phương và tài xế. Đoàn di chuyển về thành phố Casablanca (30km từ sân bay) nhận phòng khách sạn nghỉ ngơi.\nBuổi tối: Đoàn dùng bữa tối tại khách sạn, tự do khám phá Casblanca về đêm."
      },
      {
        "day": "NGÀY 02",
        "fullDayTitle": "NGÀY 02: CASABLANCA",
        "title": "CASABLANCA",
        "detail": "Buổi sáng: Đoàn dung bữa sáng tại khách sạn, làm thủ tục trả phòng, sau đó HDV và tài xế đón đoàn đi tham quan:\nNhà thờ Hồi giáo Hassan II: Thánh đường Hồi giáo lớn thứ hai trên thế giới, làm bằng đá hoa cương với những hoa văn trang trí kiểu Ả Rập vương giả tuyệt đẹp với toà tháp cao nhất thế giới.\nQuảng trường Mohamed V - trái tim hành chính và biểu tượng kiến trúc của thành phố Casablanca, Maroc 🇲.\nKhu ven biển La Corniche - một trong những điểm dừng chân đẹp và nổi tiếng nhất của thành phố Casablanca, Maroc .Đây là nơi lý tưởng để ngắm biển Đại Tây Dương, tản bộ thư giãn, và trải nghiệm một Casablanca hiện đại, trẻ trung hơn bên cạnh những nét truyền thống.\nBuổi trưa: Đoàn dùng bữa trưa tại nhà hàng địa phương sau đó khám phá khu phố cổ Habous - được người Pháp xây dựng vào những năm 1920, nhưng vẫn giữ đậm phong cách kiến trúc Hồi giáo Maroc. Đây là khu phố cổ mang vẻ đẹp của pha trộn giữ kiến trúc Pháp và vẻ đẹp Ả Rập\nSau đó, đoàn di chuyển về khách sạn nghỉ ngơi\nBuổi tối: Đoàn dùng bữa tối lãng mạn ở Rick’s cafe nơi được thiết kế để tái tạo lại bối cảnh thực tế của quán bar nổi tiếng do Humphrey Bogart và Ingrid Bergman tạo ra trong bộ phim kinh điển Casablanca ."
      },
      {
        "day": "NGÀY 03",
        "fullDayTitle": "NGÀY 03: RABAT – CHEFCHAOUEN",
        "title": "RABAT – CHEFCHAOUEN",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng tại khách sạn và và làm thủ tục trả phòng.\nSau đó, đoàn di chuyển về thủ đô Rabat - thủ đô hành chính của Ma – Rốc nhộn nhịp và đầy sắc màu với những nét kiến trúc mang dán dấp của Châu Âu.\nĐến Rabat, đoàn dùng bữa trưa tại nhà hàng địa phương với ẩm thực phong vị Ma Rốc.\nSau bữa trưa, đoàn tham quan\nCung điện Hoàng gia Mechouar - Mechouar là một khu phức hợp nguy nga kiên cố nằm ở trung tâm của thành phố cổ. Đó là trụ sở quyền lực của triều đại Zayyanid (hay ‘Abd al-Wadid), và là lâu đài cho phép các vị vua của Tlemcen rút lui trong thời kỳ khó khan ( check in bên ngoài)\nLăng mộ của Mohamed V và Hassn II: cũng là lăng mộ hoàng gia Ma – Rốc. Lăng mộ được xây dựng kiến trúc Alaouite trang trí công phu và mái ngói xanh. Toàn bộ vật liệu đắt tiền được sử dụng để phô trương sự giàu có và ngợi ca vị vua vĩ đại nhất của lịch sử Ma-rốc. Công trình được thiết kế và chỉ đạo xây dựng bởi kiến trúc sư người Việt Nam Eric Võ Công vào năm 1954, trở thành kỳ quan của Thành phố.\n- Pháo đài Udayas, hay còn gọi là Kasbah of the Udayas, là một pháo đài lịch sử nằm ở Rabat, Maroc. Nó được xây dựng vào thế kỷ 12 bởi Vương triều Almohad và hiện là một Di sản Thế giới được UNESCO công nhận.\nBuổi trưa: Đoàn dùng bữa trưa tại nhà hàng bên bờ biển\nSau bữa trưa, xe đưa đoàn đến Chefchaouen – còn được mệnh danh là Viên Ngọc Xanh của Ma – Rốc, là một trong những địa điểm du lịch nổi tiếng nhất của đất nước này.\nChuyến xe đưa đoàn xuyên ra những cảnh đẹp của dãy núi Rif.\nĐến Chefchaoue – đoàn dùng bữa trưa sau đó nhận phòng khách sạn nghỉ ngơi.\nKhách sạn Casa Hassan là một riad (bed & breakfast) tuyệt đẹp nằm ngay trung tâm phố cổ Chefchaouen – thành phố \"Xanh ngọc\" nổi tiếng ở miền Bắc Maroc. Với vị trí thuận lợi và lối kiến trúc vô cùng có gu, đây là một trải nghiệm đắc biệt mà Goholic thiết kế cho đoàn trong hành trình khám phá xứ sở nghìn lẻ một đêm.\nBuổi tối : Đoàn dùng bữa tối tại khách sạn, trong không gian ấm cúng và xinh đẹp. Sau đó, tự do dạo phố cổ vể đêm"
      },
      {
        "day": "NGÀY 04",
        "fullDayTitle": "NGÀY 04: KHÁM PHÁ CHEFCHAOUEN",
        "title": "KHÁM PHÁ CHEFCHAOUEN",
        "detail": "Buổi sáng : Đoàn thức dậy dùng bữa sáng, thưởng thức không khí yên bình của thành phố xinh đẹp sau đó bắt đầu hành trình khám phá những điạ điểm check in, những ngõ nhỏ được trang trí xinh đẹp, tìm hiểu cuộc sống của người dân sống tại Chefchaouen.\nDạo quanh Medina (khu phố cổ) với những con hẻm nhỏ, bậc thang quanh co, tường nhà và cửa gỗ sơn màu xanh lam dịu mát.\nTham quan Kasbah cổ, một pháo đài nằm ngay trung tâm quảng trườngPlaza Uta el-Hammam. Có vườn yên tĩnh, bảo tàng nhỏ trưng bày ảnh cũ về Chefchaouen và tháp canh để ngắm toàn cảnh Medina từ trên cao.\nMua sắm sản phẩm thủ công mỹ nghệ ở những cửa hàng nhỏ trong phố cổ như :thảm len, vải dệt thủ công, đèn lồng, gốm, túi da– đều mang màu sắc và hoa văn Berber truyền thống.\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng với kiến trúc tuyệt đẹp casa Aladin trong phố cổ, sau đó về khách sạn nghỉ ngơi\nBuổi chiều : Đoàn tự do dạo phố, thưởng thức cafe ở những quán cafe xinh đẹp trong phố cổ\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng trong phố cổ"
      },
      {
        "day": "NGÀY 05",
        "fullDayTitle": "NGÀY 05: CHEFCHAOUEN – VOLUBILIS – FES",
        "title": "CHEFCHAOUEN – VOLUBILIS – FES",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn, trả phòng, sau đó đưaxe đưa đoàn di chuyển đi tham quan Volubilis một trong những di tích La Mã cổ đại nổi tiếng và được bảo tồn tốt nhất tại Maroc. Sau đó, đoàn dùng bữa trưa tại nhà hàng và tiếp tục di chuyển đến FES - thành phố cổ kính và giàu bản sắc văn hóa bậc nhất Maroc, thường được ví như \"trái tim linh hồn của vương quốc Maroc\". Đây là điểm đến lý tưởng cho những ai yêu thích lịch sử, kiến trúc Hồi giáo, thủ công mỹ nghệ và trải nghiệm bản địa đích thực.\nĐến Fes, đoàn nhận phòng khách sạn nghỉ ngơi.\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng. tự do khám phá FES về đêm"
      },
      {
        "day": "NGÀY 06",
        "fullDayTitle": "NGÀY 06: KHÁM PHÁ FES",
        "title": "KHÁM PHÁ FES",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn, sau đó bắt đầu hành trình khám phá Fes– thủ đô văn hóa và cũng là cố đô lâu đời của Ma Rốc. Đây cũng là nơi mà Hồi giáo được du nhập và phát triển thành quốc giáo như ngày nay.\nTrường tôn giáo Bou Inania Madrasa, ngôi trường Hồi giáo lâu đời có lịch sử hơn 600 năm tuổi, đồng thời cũng là một Thánh đường Hồi giáo vô trùng tráng lệ, kiệt tác kiến trúc Hồi giáo thời Trung Cổ.\nĐại giáo đường Al Quaraouiyine– ngôi trường đại học cổ nhất thế giới còn hoạt động, là trung tâm học thuật lớn của thế giới Hồi giáo thời Trung Cổ, giảng dạy về thần học, luật Hồi giáo, toán học, thiên văn, y học\nĐoàn thưởng thức bữa trưa với các món ẩm thực đặt trưng của địa phương, sau đó tiếp tục tham quan:\nPhố cổ (Medina)– khu phố cổ lâu đời nhất của thành phố Fès, đồng thời là Medina cổ rộng lớn và phức tạp nhất còn tồn tại ở thế giới Hồi giáo với hơn 9.000 con hẻm nhỏ được xây dựng từ thế kỉ thứ 8.\nKhu thuộc da truyền thống– nằm trong phố cổ,nơi bạn chiêm ngưỡng kỹ thuật nhuộm da bằng phương pháp cổ xưa và duy nhất còn tồn tại cho đến ngày nay.\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng Palais la Medina và thưởng thức âm nhạc cũng như những điệu nhảy truyền thống từ các vũ công. Sau đó, tự do tham quan và khám phá thành phố Fes về đêm."
      },
      {
        "day": "NGÀY 07",
        "fullDayTitle": "NGÀY 07: FES – IFRANE",
        "title": "FES – IFRANE",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng tại khách sạn, tự do nghỉ ngơi, thưởng thức không khí trong lành buổi sáng ở Fes.\nSau đó, đoàn trả phòng, xe và HDV đón quý khách và khởi hành đến Ifrane, đây là một thị trấn miền núi xinh đẹp nằm trên dãy Atlas, do sự khác biệt hẳn so với lối kiến trúc truyền thống, Ifrane có phong cách thành phố Châu Âu và chính vì vậy thường được ví như Thuỵ Sĩ của Ma-rốc. Đoàn dừng chân trên đường, hít thở không khí trong lành và nhìn ngắm thiên nhiên của vùng núi Atlas.\nĐến Ifrane, đoàn nhận phòng phòng sạn nghỉ ngơi.\nBuổi chiều : Đoàn tự do nghỉ ngơi, thưởng thức không khí yên bình, mát mẻ và ngắm nhìn vẻ đẹp của vùng đất “ Thuỵ Sĩ của Ma - Rốc “\nBuổi tối : Đoàn dùng bữa tối tại khách sạn và nghỉ ngơi"
      },
      {
        "day": "NGÀY 08",
        "fullDayTitle": "NGÀY 08: IFRANE - MERZOUGA",
        "title": "IFRANE - MERZOUGA",
        "detail": "Buổi sáng : Đoàn thức dậy dùng bữa sáng, sau đó bắt đầu hành trình khám phá Merzouga là lối vào vào sa mạc Sahara lớn nhất thế giới, nơi nổi tiếng với đồi cát Erg Chebbi – những đụn cát cao đến 150m, đổi màu theo ánh nắng mặt trời.\nDi chuyển bằng xe địa hình 4WD đến sa mạc Merzouga– khởi đầu cho hành trình khám phá sa mạc Sahara mượt mà và đậm chất bản địa.\nCưỡi lạc đà băng qua những đồi cát vàng óng ánh, tận hưởng hoàng hôn kỳ diệu giữa lòng Sahara– một khung cảnh huyền ảo khó quên.\nBuổi tối : Đoàn nghỉ đêm tại trại sa mạc truyền thống, với bầu trời sao rực rỡ, tiếng trống Berber, và bữa tối kiểu Maroc bên ánh lửa trại với bầu trời đầy sao."
      },
      {
        "day": "NGÀY 09",
        "fullDayTitle": "NGÀY 09: MERZOUGA",
        "title": "MERZOUGA",
        "detail": "Buổi sáng : Đoàn thức dậy sớm để trải nghiệm cưỡi lạc đà đón bình minh trên những cồn cát sa mạc. Đây là một trong những trải nghiệm thú vị nhất trong hành trình và mang đâm chất địa phương.\nHành trình một ngày khám phá linh hồn sa mạc Maroc\nLắc lư giữa đại mạc trên lưng lạc đà, chậm rãi băng qua những đụn cát vàng mênh mông – cảm nhận nhịp thở hoang dã của Sahara.\nVút qua sa mạc bằng xe jeep, băng qua những con đường cát đỏ đầy thách thức, nơi chỉ có gió, trời và bạn.\nDừng chân tại làng người Berber bản địa – những người con của sa mạc. Ở đó, bạn không chỉ được nghe chuyện đời mà còn tự tay nướng bánh mì sa mạc dưới cát nóng, mộc mạc mà kỳ diệu.\nKhép lại hành trình bằng việc ghé làng Gnaoua – nơi những giai điệu trống mê hoặc vang lên, hòa quyện cùng vũ điệu tâm linh cổ xưa, đưa bạn chạm vào chiều sâu văn hóa của người du mục.\nBuổi tối : Đoàn dùng bữa tối bên ánh nến, đốt lửa trại, thưởng thức bữa tối sa mạc với các món nướng cát của sa mạc, ngắm bầu trời sao hùng vĩ bên người thương và chìm đắm trong nhưng điệu âm nhạc của ngừơi dân du mục trên sa mạc và HDV kể những câu chuyện thú vị trên hành trình con đường tơ lụa ở xứ sở nghìn lẻ một đêm."
      },
      {
        "day": "NGÀY 10",
        "fullDayTitle": "NGÀY 10: MERZOUGA - DADES",
        "title": "MERZOUGA - DADES",
        "detail": "Buổi sáng : Đoàn thức dậy dùng bữa sáng, thưởng thức ly trà bạc hà thơm ngon và hít thở không khí trong lành của Sahara.\nSau đó, đoàn chia tay Sahara , băng qua hẻm núi Todra Gorge hùng vĩ – nơi những vách đá dựng đứng cao đến 300m, cực kỳ ấn tượng cho những ai yêu thích thiên nhiên để đến thung lũng Dades – vùng đất nổi tiếng với cảnh quan đá sa thạch ngoạn mục và những con đường uốn lượn như dải lụa giữa núi đá.\nĐoàn vừa di chuyển và dừng chân chụp ảnh .\nĐoàn dùng bữa trưa tại nhà hàng địa phương và tiếp tục cuộc hành trình đến Dades\nBuổi chiều: đến Dades, đoàn nhận phòng khách sạn, ăn tối và nghỉ ngơi."
      },
      {
        "day": "NGÀY 11",
        "fullDayTitle": "NGÀY 11: DADES - MARRAKECH",
        "title": "DADES - MARRAKECH",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn và làm thủ tục trả phòng.\nSau đó, xe và HDV đón và đưa đoàn di chuyển về Marrakesh - một trong bốn thành phố hoàng gia nổi tiếng nhất Maroc, và cũng là thủ phủ du lịch sôi động, quyến rũ và đầy màu sắc của đất nước Bắc Phi này. Thành phố được mệnh danh là “ thành phố đỏ “ và từng là kinh đô của nhiều thời đại.\nĐoàn đi qua Ait Ben Haddou một dạng ngôi làng kiên cố với những ngôi nhà bằng đất sét được xây dựng sát nhau tạo thành một pháo đài vững chắc. Ait Ben Haddou là tiêu biểu cho kiến trúc xây dựng ở miền nam Ma-rốc, có lịch sử xây dựng từ Thế kỷ XVII và được UNESCO công nhận là Di sản Thế giới năm 1987.\nChụp ảnh tại Kelaa des Mgoune – Được biết đến là thành phố hoa hồng đẹp nhất Morocco.\nĂn trưa tại nhà hàng địa phương.\nĐoàn dừng chân chụp hình check – in tại Tizi-n-Tichka (2260m) để ngắm nhìn toàn cảnh dãy High Atlas từ trên cao với những cung đường uốn lượn qua các dãy núi vô cùng ấn tượng.\nBuổi chiều : Đến Marrakech, nhận phòng nghỉ ngơi và dùng bữa tối tại nhà hàng Trung Quốc với những món ăn Trung Hoa đặc sắc."
      },
      {
        "day": "NGÀY 12",
        "fullDayTitle": "NGÀY 12: MARRAKECH",
        "title": "MARRAKECH",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn, sau đó tài xế và HDV sẽ đưa đoàn đia tham quan Marrakech – một trong 4 cố đô hoàng gia Morocco (cùng với Mekes, Fes và Rabat).\nĐoàn đến tham quan các địa điểm:\nVườn Majorelle (Majorelle Garden)là một trong những điểm đến nổi tiếng và quyến rũ nhất tại Marrakesh. Khu vườn này được thiết kế bởi họa sĩ người Pháp Jacques Majorelle vào những năm 1920, sau đó được nhà thiết kế huyền thoại Yves Saint Laurent mua lại và trùng tu vào thập niên 1980.\nNhà thờ Hồi giáo Koutoubia (tham quan và chụp ảnh từ bên ngoài), đây là thánh đường lớn nhất Thành phố, được xây dựng từ thế kỷ XII, nay là biểu tượng du lịch của Thành phố.\nLăng mộ Saadian được xây dựng từ cuối thế kỷ XVI, và tiếp tục được sử dụng chôn cất hoàng thân qua các thời kì. Ngày nay, lăng mộ được khách du lịch ưa thích tham quan vì ý nghĩa lịch sử và văn hoá chôn cất đặc trưng của người bản địa.\nCung điện Bahia, Cung điện được xây dựng từ thế kỉ thứ 19, tên gọi mang ý nghĩa là ‘Sáng chói” đã từng được kì vọng là Cung điện vĩ đại nhất.\nBuổi chiều : Đoàn khám phá quảng trường Djemaa El Fna huyền diệu. Quảng trường trung tâm và đồng thời cũng là nơi họp chợ nổi tiếng, UNESCO công nhận Djemma El Fna là kiệt tác của Di sản Thế giới (a Masterpiece of World Heritage) năm 2001. Không chỉ bày bán các hàng hoá và món ăn địa phương, ngôi chợ còn có nhiều hoạt động đặc trưng cho văn hoá dân gian của người Ả Rập như: biểu diễn thôi miên rắn hổ mang, vẽ hanna, biểu diễn nhạc cụ dân tộc…\nBuổi tối : Đoàn thưởng thức bữa tối tại nhà hàng Chez Ali là một trong những địa điểm ăn tối kết hợp biểu diễn truyền thống nổi tiếng nhất ở Marrakech, Maroc – nơi du khách có thể vừa thưởng thức ẩm thực Maroc đậm đà, vừa xem show diễn Fatasia sống động với ngựa, nhạc và vũ điệu truyền thống tại sân khẩu ngoài trời"
      },
      {
        "day": "NGÀY 13",
        "fullDayTitle": "NGÀY 13: MARRAKECH – HÀ NỘI/TP.HCM",
        "title": "MARRAKECH – HÀ NỘI/TP.HCM",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn , tự do nghỉ ngơi, dạo phố Marrakesh.\nĐến trưa, đoàn làm thủ tục trả phòng, di chuyển đến nhà hàng dùng bữa trưa sau đó di chuyển ra sân bay để bay về Hà Nội/TP.HCM\nĐoàn transit tại sân bay Istanbul, Thổ Nhĩ Kỳ"
      },
      {
        "day": "NGÀY 14",
        "fullDayTitle": "NGÀY 14: HÀ NỘI/ TP.HCM",
        "title": "HÀ NỘI/ TP.HCM",
        "detail": "Buổi chiều : về đến Việt Nam, kết thúc chuyến du lịch tốt đẹp.\nHDV Goholic gửi lời chào và cảm ơn đến quý đoàn. Chúc quý đoàn thật nhiều sức khỏe và hẹn gặp lại ở những chương trình du lịch tiếp theo."
      }
    ],
    "inclusions": [
      "Phương tiện vận chuyển suốt chương trình xe 30 chỗ",
      "Evisa nhập cảnh Ma – Rốc",
      "Lưu trú: 02 khách/phòng (phòng Twin/Double). Phòng được được bố trí khi lẻ nam, nữ",
      "Ăn uống:Bữa sáng tại khách sạn.",
      "Các bữa trưa 15– 20Eur",
      "Các bữa tối tại nhà hàng được tuyển chọn : 20 – 60Eur, Rick cafe 40Eur, Chez Ali 60Eur, China restauran 25Eur, Palais la Medina & show 40Eur",
      "Các bữa ăn trưa theo phong vị ẩm thực Morocco và quốc tế",
      "Hướng dẫn viên/Trưởng đoàn công ty Goholic",
      "HDV địa phương tại các điểm đến",
      "Vé tham quan du lịch trọn gói theo chương trình ((Nhà thờ Hồi giáo Hassan II/Volubilis /Bou Inania Madrasa/Medersa Attarine/Hãng phim Atlas/Cung điện Bahia/Vườn Majorelle/Lăng mộ Saadiant)",
      "Xe 4X4 chuyên dụng di chuyển ở sa mạc…",
      "1 chuyến trải nghiệm cưỡi lạc đà và trải nghiệm trên sa mạc của làng du mục",
      "Bảo hiểm du lịch trọn gói",
      "Nước suối (02 chai/1 khách/1 ngày)"
    ],
    "exclusions": [
      "Các khoản không được liệt kê trong mục “Bao gồm”",
      "Phụ thu phòng đơn: (Áp dụng cho khách yêu cầu ở riêng 1 phòng :1450$/tour ( gói cao cấp ) và",
      "Các chi phí cá nhân khác",
      "Tiền Tip cho Hướng dẫn viên và tài xế (đề xuất 10 usd/khách/ngày * 14 ngày)"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-08",
    "code": "GH-08",
    "title": "KHÁM PHÁ NỀN VĂN MINH AI CẬP – GIẢI MÃ NHÂN SƯ",
    "url": "https://goholictravel.com/tour/kham-pha-nen-van-minh-ai-cap-giai-ma-nhan-su/",
    "country": "ai-cap",
    "countryName": "Ai Cập",
    "region": "ai-cap",
    "departureFrom": "TP.HCM/HÀ NỘI",
    "startDate": "",
    "departureSchedule": "",
    "duration": "12 ngày 11 đêm",
    "durationCategory": "7-days-tour",
    "month": "thang-11",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "TOUR AI CẬP",
    "badgeColor": "bg-[#31c0cc]",
    "isFeatured": false,
    "price": 93890000,
    "priceDisplay": "93.890.000đ",
    "originalPrice": 105200000,
    "rating": 4.9,
    "reviewsCount": 176,
    "image": "https://goholictravel.com/wp-content/uploads/2025/09/aicapthumnail-1200x675.jpg",
    "gallery": [
      "https://goholictravel.com/wp-content/uploads/2025/09/pexels-photo-3522880.jpeg",
      "https://goholictravel.com/wp-content/uploads/2025/09/1117259721-alexandria.webp",
      "https://goholictravel.com/wp-content/uploads/2025/09/salt-lake-in-siwa-oasis-trips-in-egypt.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/09/tai-xuong.avif",
      "https://goholictravel.com/wp-content/uploads/2025/09/wonderful-pictures-of-qaitbay-citadel.jpg"
    ],
    "headMeta": [
      "12 ngày 11 đêm",
      "Nhóm: 15 - 20 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Bay hãng hàng không Qatar Airlines/ Emirates 5*",
    "introText": "Bay hãng hàng không Qatar Airlines/ Emirates 5*\n\nSiwa Oasis: dạo bước trong thành cổ Shali, tắm tại suối Cleopatra, ngắm hoàng hôn huyền bí trên hồ muối Siwa.\n\nAlexandria – thành phố Địa Trung Hải: tham quan Thư viện Alexandria, Pháo đài Qaitbay và dấu tích La Mã cổ đại.\n\nDu thuyền 5 sao trên sông Nile: tận hưởng dịch vụ sang trọng khi xuôi dòng từAswan đến Luxor, tham quan đền Philae, Kom Ombo, Edfu, Luxor & Karnak.\n\nBiển Đỏ Hurghada: nghỉ dưỡng tại resort 5*, lặn biển, ngắm san hô và tận hưởng không khí biển Đỏ rực rỡ.\n\nCưỡi lạc đà tại Kim Tự Tháp\n\nDạo bước ở chợ cổ El – Khalili xinh đẹp",
    "highlights": [
      "Khách sạn tiêu chuẩn 5 sao và boutique hotel xinh đẹp ở Siwa",
      "Sahara Adventure: trải nghiệm xe Jeep xuyên sa mạc, cắm trại đêm giữa thiên nhiên kỳ vĩ",
      "Cairo & Giza: chiêm ngưỡng Kim tự tháp Giza, tượng Nhân Sư, khám phá Bảo tàng Ai Cập và chợ Khan El-Khalili sầm uất.",
      "Trải nghiệm văn hóa & ẩm thực Ai Cập: từ các buổi múa bụng truyền thống trên du thuyền đến những bữa ăn địa phương đầy hương vị."
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1: TP HCM/HÀ NỘI – CAIRO (Ăn nhẹ, tối)",
        "title": "TP HCM/HÀ NỘI – CAIRO (Ăn nhẹ, tối)",
        "detail": "KHỞI HÀNH ĐẾN CAIRO\nTrưởng đoàn Goholic đón hành khách tại ga đi sân bay quốc tế Tân Sơn Nhất/ Nội Bài . Đoàn cùng nhau làm thủ tục tại sân bay, khởi hành chuyến bay đến với thành phố Cairo - Ai Cập ( đoàn ăn nhẹ trên máy bay )\nHướng dẫn viên địa phương vào đón đoàn tại sân bay Cairo.\nĐến nơi, đoàn làm thủ tục nhập cảnh, sau đó dùng bữa tối rồi di chuyển về khách sạn nhận phòng nghỉ ngơi, hoặc tự do tham quan Cairo buổi tối."
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: CAIRO - ỐC ĐẢO SIWA(Ăn sáng, trưa, tối)",
        "title": "CAIRO - ỐC ĐẢO SIWA(Ăn sáng, trưa, tối)",
        "detail": "Buổi Sáng: đoàn dùng bữa sáng tại khách sạn, làm thủ tục trả phòng và bắt đầu hành trình tới Siwa.\nBuổi trưa: đoàn dùng bữa trưa tại nhà hàng địa phương trên đường đi, sau đó tiếp tục hành trình đến Siwa.\nBuổi chiều: đoàn đến Siwa, tham quan pháo đài cổ Shali – ược xây dựng vào thế kỷ 13 ngay trung tâm ốc đảo Siwa, bằng vật liệu độc đáo gọi là kershef (hỗn hợp muối, đất sét và thạch cao). Đây từng là nơi sinh sống và bảo vệ của cả cộng đồng cư dân Siwa trước những biến động thời gian và khí hậu khắc nghiệt sa mạc.\nBuổi tối: đoàn dùng bữa tại nhà hàng địa phương và nghỉ ngơi."
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: HỒ MUỐI SIWA - SA MẠC SAHARA (Ăn sáng, trưa, tối)",
        "title": "HỒ MUỐI SIWA - SA MẠC SAHARA (Ăn sáng, trưa, tối)",
        "detail": "Buổi sáng: Đoàn dùng điểm tâm sáng và khởi hành đi tham quan.\nHồ muối Siwa: điểm nhấn kỳ diệu giữa sa mạc Sahara, nổi bật với mặt nước xanh ngọc trong vắt. Nơi đoàn có thể ngâm mình trong làn nước mát lạnh và tỷ lệ muối cao nên sẽ có rất tốt cho da, thả mình trôi tự do trên biển muối xinh đẹp (mang theo bikini và khăn tắm).\nTắm hồ tắm của Cleopatra: giếng nước khoáng trong xanh giữa ốc đảo Siwa, gắn liền với truyền thuyết Nữ hoàng Cleopatra, nơi đoàn có thể ngâm mình thư giãn, tận hưởng làn nước mát lành giữa sa mạc Sahara và thưởng thức trà bạc hà thơm ngon\nBuổi Trưa: Đoàn dùng cơm tại nhà hàng địa phương, sau đó về khách sạn soạn đồ để di chuyển vào Sahara\nBuổi chiều : Chuẩn bị cho hành trình safari trên cát tiến sâu vào Sahara trên những chiếc xe Jeep 4x4 chuyên dụng.\nTham gia các hoạt động như trượt cát và thám hiểm sa mạc, ngắm nhìn các cồn cát thay đổi hình dáng và màu sắc bên đường, đoàn cũng dừng chân tại một số ốc đảo nhỏ cũng như dừng chân để thưởng thức loại trà của người Berber tại một địa điểm để ngắm hoàng hôn trong hành trình safari bằng xe Jeep.\nTrong thời gian đó, các đầu bếp sẽ chuẩn bị bữa tối với Thịt Cừu nướng và gà nướng kiểu người Bebber.\nBuổi tối: Dùng bữa tối dưới ánh sao và xung quanh đống lửa , cùng trò chuyện và ngắm dải ngân hà tuyệt đẹp - Nghỉ đêm trên sa mạc với trải nghiệm đầy thú vị."
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: SIWA - ALEXANDRIA (Ăn sáng, trưa, tối)",
        "title": "SIWA - ALEXANDRIA (Ăn sáng, trưa, tối)",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng và đón bình minh trên sa mạc Sahara huyền thoại. Sau đó quay về khách sạn, làm thủ tục trả phòng và khởi hành về thành phố biển Alexandria - Nằm bên bờ Địa Trung Hải, Alexandria được mệnh danh là “viên ngọc xanh” của Ai Cập\nBuổi trưa: Đoàn dừng chân dùng bữa tại nhà hàng địa phương, sau đó tiếp tục hành trình.\nBuổi chiều : Đoàn đến Alexandria, nhận phòng nghỉ ngơi và hẹn giờ ăn tối.\nSau bữa tối, đoàn tự do tham quan Alexandria về đêm."
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: ALEXANDRIA - CAIRO (Ăn sáng, trưa, tối)",
        "title": "ALEXANDRIA - CAIRO (Ăn sáng, trưa, tối)",
        "detail": "Buổi sáng: Quý khách dùng bữa sáng tại khách sạn, làm thủ tục trả phòng và bắt đầu hành trình tham quan.\nThư viện Alexandria: Thư viện phổ cập đầu tiên của nhân loại, hiện nay thư viện có hơn 8 triệu đầu sách và thu hút hàng ngàn nhà khoa học trên thế giới về nghiên cứu.\nPháo đài Citadelle Qaitbay: một trong những thành lũy bảo vệ quan trọng không những của Ai Cập mà còn của cả eo biển Địa Trung Hải từ thế kỷ XV.\nBuổi trưa: đoàn dùng bữa trưa tại nhà hàng địa phương, sau đó khởi hành về lại Cairo.\nBuổi chiều: đoàn đến Cairo, đoàn dạo chợ cổ đoàn tham quan và Khám phá chợ cổ EL Khalili và khu phố cổ với những vật phẩm đặc sắc, chợ được xây dựng từ thế kỉ 14 và là chợ cổ nhất Ai Cập."
      },
      {
        "day": "NGÀY 6",
        "fullDayTitle": "NGÀY 6: CAIRO - ASWAN - DU THUYỀN SÔNG NILE (Ăn Sáng, Trưa, tối)",
        "title": "CAIRO - ASWAN - DU THUYỀN SÔNG NILE (Ăn Sáng, Trưa, tối)",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng tại khách sạn. Sau đó, di chuyển ra sân bay và làm thủ tục đáp chuyến bay đến Aswan. (Thời gian bay khoảng 01 giờ).\nĐến Aswan, đoàn bắt đầu hành trình khám phá Aswan:\nĐập nước thủy điện Aswan – High Dam: Con đập được xây dựng từ những năm 60 của thế kỉ XX, mang ý nghĩ về đời sông và kinh tế dành cho cư dân tại Thượng Ai Cập. Nó là phương tiện kiểm soát những cơn lũ đến từ thượng nguồn của sông Nile, và thúc đẩy nông nghiệp của đồng bằng thượng lưu sông Nile.\nĐền thờ Philae – đền thời nữ thần Isis – nữ thần tình yêu và hôn nhân trong thần thoại Ai Cập. Ngôi đền có kiến trúc tinh xảo, được xem là một trong những di sản cuối cùng của tôn giáo Ai Cập cổ đại, đoàn di chuyển bằng thuyền đến Đền, ngắm cảnh đôi bờ sông Nile cùng các đền thờ hùng vĩ.\nSau đó đoàn di chuyển về du thuyền, check in nhận phòng và dùng bữa trưa buffet trên du thuyền 5*xuôi sông Nile – trải nghiệm hành trình sang trọng trên dòng sông huyền thoại, kết nối Aswan và Luxor, thư giãn trong tiện nghi cao cấp, khám phá những đền đài kỳ vĩ như Philae, Kom Ombo, Edfu và Karnak.\nBuổi chiều :\nTrải nghiệm thuyền buồm truyền thống (Felucca) của người dân Aswan – Felucca . Bạn sẽ được lênh đênh trên dòng sông Nile huyền thoại bằng chiếc thuyền gỗ buồm trắng truyền thống. Đây là cách tuyệt vời để ngắm hoàng hôn, tận hưởng làn gió mát và cảm nhận nhịp sống chậm rãi của Ai Cập.\nTham quan làng cổ Nubian - một trong những nền văn minh lâu đời nhất, là nơi người Nubia sinh sống, cư ngụ ở Bờ Tây Sông Nile trong suốt 8.000 năm.\nBuổi tối : Đoàn trở về du thuyền và tận hưởng bữa tối trên du thuyền sông Nile."
      },
      {
        "day": "NGÀY 7",
        "fullDayTitle": "NGÀY 7: DU THUYỀN SÔNG NILE – KOM OMBO – EDFU (Ăn Sáng, Trưa, tối)",
        "title": "DU THUYỀN SÔNG NILE – KOM OMBO – EDFU (Ăn Sáng, Trưa, tối)",
        "detail": "Buổi sáng: đoàn ăn sáng, nghỉ ngơi trên du thuyền, ngắm nhìn cảnh vật và cuộc sống người dân dọc theo dòng sông Nile.\nBuổi trưa :Đoàn dùng bữa trưa tại du thuyền và khởi hành đến tham quan cụm đền Kom Ombo - quần thể đền thờ duy nhất ở Ai Cập được xây dựng để thờ hai vị thần cùng lúc: thần cá sấu Sobek (thần sinh sản và sức mạnh) và thần chim ưng Horus (thần bầu trời và chiến thắng). Ngôi đền nổi bật với kiến trúc đối xứng hiếm có, mỗi bên dành riêng cho một vị thần, cùng nhiều bức chạm khắc tinh xảo về y học và tôn giáo Ai Cập cổ.\nBuổi tối: Du khách quay lại du thuyền dùng cơm tối và di chuyển đến Edfu. Ngủ đêm trên du thuyền."
      },
      {
        "day": "NGÀY 8",
        "fullDayTitle": "NGÀY 8: DU THUYỀN SÔNG NILE – LUXOR (Ăn Sáng, Trưa, tối)",
        "title": "DU THUYỀN SÔNG NILE – LUXOR (Ăn Sáng, Trưa, tối)",
        "detail": "Buổi sáng: Đoàn thức dậy sớm vào lúc 05:00, di chuyển bằng xe ngựa di chuyển đến Đền thờ Horus. Ngôi đền của một trong những vị thần biểu tượng trong thần thoại Ai Cập cổ - chủ nhân của “Con mắt Horus”. Đây là một trong những ngôi đền lớn và được bảo tồn tốt nhất của Ai Cập cổ đại, nổi bật với những bức phù điêu kể lại trận chiến giữa Horus và thần ác Seth.\n08:30 Đoàn trở về du thuyền, dùng bữa sáng sau đó tiếp tục theo du thuyền di chuyển đến Luxor – bảo tàng ngoài trời lớn nhất thế giới, được xây dựng trên nền tảng của thành cổ Thebes – thủ đô huy hoàng của Ai Cập cổ đại. Nơi đây sở hữu vô số di sản vĩ đại như quần thể đền Karnak, đền Luxor, Thung lũng các vị Vua & Hoàng hậu cùng những lăng mộ pharaoh huyền thoại.\nBuổi trưa: Đoàn nghỉ ngơi và tận hưởng không gian bên bờ sông Nile và thưởng thức trà chiều trên boong tàu\nBuổi chiều : Đoàn đến với thành phố Luxor ,tham quan cụm đền Luxor :\nĐền Luxor– nằm ngay trung tâm thành phố Luxor, được xây dựng để tôn vinh thần Amun, thần Mut và thần Khonsu. Đây là nơi diễn ra lễ hội tôn giáo lớn nhất thời cổ đại – Opet Festival.\nQuần thể đền Karnak– cách đền Luxor khoảng 3 km, là quần thể tôn giáo lớn nhất Ai Cập cổ đại, với Đại sảnh Hypostyle nổi tiếng có 134 cột đá khổng lồ\nSau đó đoàn đến với chợ Luxor, dạo quanh chợ và mua sắm một số đồ lưu niệm tại Luxor.\nBuổi tối: Quý khách dùng cơm tối trên du thuyền và nghỉ đêm."
      },
      {
        "day": "NGÀY 9",
        "fullDayTitle": "NGÀY 9: LUXOR - HURGHADA (Ăn Sáng, Trưa, tối)",
        "title": "LUXOR - HURGHADA (Ăn Sáng, Trưa, tối)",
        "detail": "Buổi sáng: Bình minh trên sông Nile luôn là một trong những khoảnh khắc đắt giá nhất của chuyến đi.\nĐặc biệt, ngắm bình minh trên sông Nile bằng KHINH KHÍ CẦU là một trong những trải nghiệm khó quên nhất khi đến với Ai Cập (Chi phí tự túc, khoảng 120$/người).\nSau đó, đòan trở về du thuyền dùng bữa sáng, check out và tiếp tục hành trình khám phá\nThung lũng các vị Vua– Kho báu vĩnh hằng của Ai Cập cổ đại\nNằm ở bờ Tây sông Nile, đối diện Luxor, Thung lũng các Vị Vua (Valley of the Kings) là quần thể lăng mộ nơi an nghỉ của hơn 60 Pharaoh và quý tộc Ai Cập thời Tân Vương quốc (1550–1070 TCN). Đây là nơi tìm thấy những lăng mộ nổi tiếng như của Tutankhamun, Ramses II, với những bức tranh tường rực rỡ mô tả hành trình sang thế giới bên kia.\nColossi of Memnon (Tượng Memnon) – hai pho tượng đá khổng lồ, cao khoảng 18 mét, được dựng từ thế kỷ 14 TCN. Chúng từng canh giữ lối vào đền thờ Amenhotep III, một trong những công trình vĩ đại nhất Ai Cập cổ đại (nay chỉ còn lại tàn tích).\nTrung tâm chế biến thạch cao tại Luxor Ai Cập & đá Alabaster – một nghề thủ công truyền thống có từ thời Ai Cập cổ đại.\nBuổi trưa: Đoàn dùng cơm trưa tại nhà hàng địa phương sau đó di chuyển về Hurghada, một thành phố nằm bên bờ biển đỏ.\nBuổi tối: Đến Hurghada, đoàn dùng bữa tối tại nhà hàng sau đó về khách sạn nhận phòng nghỉ ngơi."
      },
      {
        "day": "NGÀY 10",
        "fullDayTitle": "NGÀY 10: HURGHADA – SEA TOUR – CAIRO (Ăn Sáng, Trưa, tối)",
        "title": "HURGHADA – SEA TOUR – CAIRO (Ăn Sáng, Trưa, tối)",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng buffet tại khách sạn sau đó lên tàu di chuyển đến khu vực Biển đỏ, vùng biển độc nhất nối kênh đào Suez và khu vực Trung Đông. Tại đây, du khách sẽ trải nghiệm các hoạt động lặn biển, tắm biển…\nBuổi trưa: Đoàn di chuyển về resort dùng bữa trưa, làm thủ tục trả phòng sau đó di chuyển vào trung tâm thành phố Hurghada dạo phố, uống café, vui chơi…\nBuổi chiều: Đoàn di chuyển ra sân bay, làm thủ tục bay về lại Cairo. Nghỉ đêm tại Cairo"
      },
      {
        "day": "NGÀY 11",
        "fullDayTitle": "NGÀY 11: CITY TOUR CAIRO (Ăn Sáng, Trưa, tối)",
        "title": "CITY TOUR CAIRO (Ăn Sáng, Trưa, tối)",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng và đón bình minh trên sa mạc bên đại Kim Tự Tháp Giza.\n08:00 Đoàn sẽ di chuyển bằng lạc đà để đến với đại Kim Tử Tháp Giza – công trình hàng ngàn năm tuổi của người Ai Cập cổ đại và là biểu tượng của văn minh và trí tuệ loài người. Đi sâu vào bên trong Kim Tự Tháp khám phá những cấu trúc đặc sắc và những lối đi bí hiểm chỉ dành cho những trái tim dũng cảm.\nĐại Nhân Sư – được xem là linh vật canh giữ Kim Tự Tháp, có niên đại hơn 4000 năm tuổi và cũng là nhân chứng cho sự phát triển thăng trầm của nhân loại trong hàng ngàn năm qua.\nBuổi trưa: Đoàn về dùng cơm trưa sau khi tham quan những kiệt tác của nhân loại.\nBảo tàng Ai Cập chứa hơn 160.000 mảnh ghép lịch sử pharaon, mỗi mảnh được coi là một kiệt tác với câu chuyện riêng bao gồm cả những bảo vật thuộc vềvị Vua Tutankhamen tráng lệ.\nBuổi chiều: Đoàn di chuyển ra sân bay để làm thủ tục bay về lại Việt Nam, dùng bữa tối nhẹ tại sân bay."
      },
      {
        "day": "NGÀY 12",
        "fullDayTitle": "NGÀY 12: HOME SWEET HOME",
        "title": "HOME SWEET HOME",
        "detail": "Đoàn về đến Việt Nam, làm thủ tục nhập cảnh, lấy hành lý.\nHướng dẫn viên GOHOLIC gởi lời chào và lời cảm ơn tới các thành viên, và hẹn gặp lại ở những hành trình tiếp theo."
      }
    ],
    "inclusions": [
      "Vé máy bay quốc tế khứ hồi Tp HCM/ Hà Nội – Cairo – TP.HCM/ Hà Nội",
      "Visa nhập cảnh Ai Cập dành cho cả đoàn.",
      "Du thuyền 5 sao trên sông Nile trong 03 đêm.",
      "Tất cả các chi phí vé vào cửa cho tất cả các địa điểm du lịch được liệt kê trong hành trình.",
      "Tất cả các bữa ăn chính được liệt kê trong chương trình.",
      "Xe du lịch đời mới 45 chỗ",
      "Hướng dẫn viên địa phương và trưởng đoàn đi từ Việt Nam",
      "Khách sạn: 5* sao cho toàn hành trình tiêu chuẩn (02 khách/phòng- phòng 3 người trường hợp đi lẻ nam hoặc nữ)",
      "Phí dịch vụ & Thuế chính phủ",
      "Các thỏa thuận bao gồm phí lập kế hoạch, xử lý, vận hành và liên lạc.",
      "Nước uống được cung cấp trong suốt chuyến đi",
      "Bảo hiểm du lịch."
    ],
    "exclusions": [
      "Tiền tip cho hướng dẫn viên và tài xế: 120 USD/khách/ Tour",
      "Các chi phí cá nhân không được nêu trong mục Bao gồm.",
      "Phụ thu phòng đơn nếu quý khách có nhu cầu ngủ riêng (phụ thu 600 USD VNĐ/khách/tour)"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-09",
    "code": "GH-09",
    "title": "KHÁM PHÁ ĐẾ CHẾ OTTOMAN – VƯƠNG TRIỀU RỰC RỠ",
    "url": "https://goholictravel.com/tour/kham-pha-de-che-ottoman-vuong-trieu-ruc-ro/",
    "country": "tho-nhi-ky",
    "countryName": "Thổ Nhĩ Kỳ",
    "region": "tho-nhi-ky",
    "departureFrom": "TP.HCM/HÀ NỘI",
    "startDate": "2025-11-15",
    "departureSchedule": "2025-11-15",
    "duration": "9 ngày 8 đêm",
    "durationCategory": "7-days-tour",
    "month": "thang-11,thang-12,thang-02,thang-04",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "TOUR THỔ NHĨ KỲ",
    "badgeColor": "bg-emerald-600",
    "isFeatured": false,
    "price": 79890000,
    "priceDisplay": "79.890.000đ",
    "originalPrice": 89500000,
    "rating": 4.9,
    "reviewsCount": 183,
    "image": "https://goholictravel.com/wp-content/uploads/2025/09/tho-nhi-ky-1200x675.jpg",
    "gallery": [
      "https://goholictravel.com/wp-content/uploads/2025/09/pexels-benan-sude-156926722-13597448.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/09/upload-a96b1f133dd6458aa49d3b3729985e1d-master.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/09/kaymakli-underground-city-7.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/09/argos-header.jpg"
    ],
    "headMeta": [
      "10 ngày 9 đêm",
      "Nhóm: 8 - 10 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Đi thuyền trên Bosphorus: chiêm ngưỡng cảnh đẹp hai bờ Âu – Á, ngắm cầu Bosphorus rực sáng về đêm.",
    "introText": "Đi thuyền trên Bosphorus: chiêm ngưỡng cảnh đẹp hai bờ Âu – Á, ngắm cầu Bosphorus rực sáng về đêm.\n\nTắm bùn khoáng & suối nước nóng Pamukkale: thư giãn tại “Lâu đài Bông” độc đáo.\n\nTham quan xưởng gốm Avanos & mua thảm thủ công: tận mắt chứng kiến nghệ nhân làm gốm, dệt thảm truyền thống.\n\nẨm thực Thổ Nhĩ Kỳ: kebab, baklava, kumpir ở Ortaköy, cà phê Thổ Nhĩ Kỳ nguyên bản.",
    "highlights": [
      "Khám phá Istanbul: tham quan Hagia Sophia, The Blue Mosque, Cung điện Topkapi, dạo chơi ở Grand Bazaar nhộn nhịp.",
      "Bay khinh khí cầu ở Cappadocia: trải nghiệm ngắm bình minh trên thung lũng đá kỳ ảo – biểu tượng của du lịch Thổ Nhĩ Kỳ.",
      "Ở khách sạn hang đá Cappadocia: ngủ trong không gian đá tufa huyền bí nhưng tiện nghi hiện đại.",
      "Trải nghiệm văn hóa Sufi: xem múa xoay Dervishes tại Tu viện Mevlana (Konya).",
      "Khám phá các thành phố cổ: Ephesus, Pergamon, Hierapolis… – dấu ấn nền văn minh Hy-La.",
      "Thưởng thức rượu vang trái cây ở làng Şirince: nếm thử hương vị vang lựu, vang đào độc đáo."
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1: TP.HCM/HÀ NỘI - ISTANBUL",
        "title": "TP.HCM/HÀ NỘI - ISTANBUL",
        "detail": "Trưởng đoàn Goholic đón đoàn tại ga quốc tế sân bay Tân Sơn Nhất/ Nội Bài để làm thủ tục check – in chuyến bay đến Istanbul. Đoàn nghỉ đêm trên máy bay.\nChuyến bay dự kiến :\nTừ TP.HCM: SGN – IST 22:15 – 05:30\nTừ Hà Nội: HAN – IST 22:30 – 05:40"
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: ISTANBUL – CANAKKALE ( 320km – 4 giờ )",
        "title": "ISTANBUL – CANAKKALE ( 320km – 4 giờ )",
        "detail": "Buổi sáng : Đáp sân bay Istanbul, làm thủ tục nhập cảnh vào Thổ Nhĩ Kỳ, dùng bữa sáng sau đó tham quan\nBlue Mosque - còn gọi là Đền thờ Sultan Ahmed, là một trong những công trình kiến trúc Hồi giáo nổi tiếng và ấn tượng nhất tại Istanbul, Thổ Nhĩ Kỳ. Ngôi đền được xây dựng từ năm 1609 đến 1616 dưới thời Sultan Ahmed I, với mục đích thể hiện quyền lực và lòng mộ đạo của triều đại Ottoman.\nHippodrome – Trường đua ngựa cổ Constantinople, nằm ở khu vực Sultanahmet (Istanbul ngày nay), từng là trung tâm chính trị, xã hội và giải trí của Constantinople (thủ đô Byzantine). Được xây dựng từ thế kỷ 3 dưới thời Hoàng đế La Mã Septimius Severus và mở rộng vào thế kỷ 4 bởi Hoàng đế Constantine Đại đế, nơi đây từng có sức chứa hơn 100.000 khán giả để xem các cuộc đua ngựa và xe ngựa.\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng. Sau đó di chuyển về Canakkale, để đến với Thành cổ Troy (Canakkale),\nĐến Troy, đoàn sẽ chiêm ngưỡng một trong những di sản nổi tiếng của thế giới\nCon ngựa thành Troy nổi tiếng trong trường ca Iliad. Tác phẩm điêu khắc con ngựa thành Troy dựa trên câu chuyện thần thoại nổi tiếng rằng người Hy Lạp đã.\nSau đó, đoàn di chuyển về khách sạn nhận phòng nghỉ ngơi.\nBuổi tối : Đoàn dùng bữa tối, tự do khám phá Canakkale"
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: CANAKKALE – KUSADASI (405km – 5,5 giờ)",
        "title": "CANAKKALE – KUSADASI (405km – 5,5 giờ)",
        "detail": "Buổi sáng : Sau bữa sáng, đoàn làm thủ tục trả phòng khách sạn để bắt đầu hành trình đến Kusadasi.\nĐoàn tham quan :\nThành cổ Pergamon(di chuyển bằng cáp treo) nằm tại tỉnh Izmir, Thổ Nhĩ Kỳ, từng là một trong những trung tâm văn hóa, chính trị và tôn giáo quan trọng nhất của Đế chế Hy Lạp và La Mã cổ đại. Nơi đây nổi tiếng với Thư viện Pergamon– từng lưu giữ hơn 200.000 bản thảo, chỉ sau Alexandria – cùng những công trình kiến trúc đồ sộ như:\nĐền thờ Zeus(Altar of Zeus) – kiệt tác điêu khắc, hiện phần lớn được lưu giữ tại Bảo tàng Pergamon ở Berlin.\nNhà hát Pergamon– được xây dựng trên sườn núi dốc, có sức chứa khoảng 10.000 khán giả, là một trong những nhà hát dốc nhất thế giới cổ đại.\nĐền Athena, Đền Trajan và khu Acropolis– thể hiện sự hùng vĩ của văn minh Hy-La.\nBuổi trưa : Đoàn ăn trưa tại nhà hàng địa phương sau đó tiếp tục hành trình.\nTrên đường đi, đoàn thưởng ngoạn vẻ đẹp của bãi biển Aegean, với những cây Ô liu được trồng trên hòn đảo giữa Hy Lạp và Thổ Nhĩ Kỳ.\nLàng cổ Şirince – Nét đẹp yên bình của Thổ Nhĩ Kỳ- ngôi làng nhỏ xinh đẹp nằm trên sườn đồi, cách thành phố Selçuk (Izmir) khoảng 8 km. Ngôi làng nổi tiếng với những ngôi nhà cổ kiểu Hy Lạp – Ottoman nằm san sát trên triền núi, đường làng lát đá, không gian yên bình và không khí trong lành.\nĐoàn tiếp tục hành trình đến Kusadasi, dừng chân để tham quan cửa hàng bán dầu olive và cửa hàng chế tác đèn Thổ Nhĩ Kỳ nổi tiếng.\nBuổi tối : Đoàn ăn tối, nhận phòng khách sạn và nghỉ đêm tại Kusadasi."
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: KUSADASI - SELCUK– PAMUKKALE ( 420km – 6giờ )",
        "title": "KUSADASI - SELCUK– PAMUKKALE ( 420km – 6giờ )",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng và trả phòng khách sạn, sau đó tham quan :\nThành phố cổ đại Ephesus - một trong những di chỉ La Mã ấn tượng nhất Thổ Nhĩ Kỳ, nổi tiếng với Thư viện Celsus tráng lệ, Đại Nhà hát 25.000 chỗ ngồi và tàn tích Đền Artemis – kỳ quan thế giới cổ đại. Được UNESCO công nhận là Di sản Thế giới, Ephesus mang đến hành trình ngược dòng thời gian khám phá văn minh Hy – La huy hoàng.\nTham quan Đền Artemisthờ nữ thần săn bắn, con gái thần Zeus – Một trong 7 kỳ quan thế giới cổ đại. Đền từng có quy mô tráng lệ với hơn 100 cột đá cẩm thạch cao 18 mét, là trung tâm tín ngưỡng quan trọng của người Hy Lạp – La Mã.\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng, sau đó đoàn khởi hành đi Pamukkale thành phố nằm ở phía Tây – Nam Thổ Nhĩ Kỳ. Nơi đây được Unesco công nhận là di sản Thế Giới với vẻ đẹp mê hồn của những dòng suối khoáng nóng chảy lộ thiên từ hàng ngàn năm trước, tạo nên những hồ nước xanh biếc trên nền đá trắng, là những kỳ quan thiên nhiên kỳ vĩ có một không hai trên Thế giới.\nTham quan những vết tích còn sót lại của Thành phố Thần thánh Hierapolis - Di sản văn hóa thế giới (Unesco công nhận năm 1988).\nCheck in Lâu Đài Bông - nổi tiếng với những tầng thềm đá vôi trắng muốt hình thành từ dòng suối nước khoáng giàu canxi, trông như một “lâu đài” phủ bông khổng lồ.\nBuổi tối : Đoàn dùng bữa tối và trải nghiệm tắm khoáng nóng tại khách sạn, thư giãn và trị liệu sau một ngày."
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: PAMUKKALE – KONYA (400km – 5 giờ)",
        "title": "PAMUKKALE – KONYA (400km – 5 giờ)",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng và trả phòng khách sạn, sau đó tham quan :\nThành phố cổ đại Ephesus - một trong những di chỉ La Mã ấn tượng nhất Thổ Nhĩ Kỳ, nổi tiếng với Thư viện Celsus tráng lệ, Đại Nhà hát 25.000 chỗ ngồi và tàn tích Đền Artemis – kỳ quan thế giới cổ đại. Được UNESCO công nhận là Di sản Thế giới, Ephesus mang đến hành trình ngược dòng thời gian khám phá văn minh Hy – La huy hoàng.\nTham quan Đền Artemisthờ nữ thần săn bắn, con gái thần Zeus – Một trong 7 kỳ quan thế giới cổ đại. Đền từng có quy mô tráng lệ với hơn 100 cột đá cẩm thạch cao 18 mét, là trung tâm tín ngưỡng quan trọng của người Hy Lạp – La Mã.\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng, sau đó đoàn khởi hành đi Pamukkale thành phố nằm ở phía Tây – Nam Thổ Nhĩ Kỳ. Nơi đây được Unesco công nhận là di sản Thế Giới với vẻ đẹp mê hồn của những dòng suối khoáng nóng chảy lộ thiên từ hàng ngàn năm trước, tạo nên những hồ nước xanh biếc trên nền đá trắng, là những kỳ quan thiên nhiên kỳ vĩ có một không hai trên Thế giới.\nTham quan những vết tích còn sót lại của Thành phố Thần thánh Hierapolis - Di sản văn hóa thế giới (Unesco công nhận năm 1988).\nCheck in Lâu Đài Bông - nổi tiếng với những tầng thềm đá vôi trắng muốt hình thành từ dòng suối nước khoáng giàu canxi, trông như một “lâu đài” phủ bông khổng lồ.\nBuổi tối : Đoàn dùng bữa tối và trải nghiệm tắm khoáng nóng tại khách sạn, thư giãn và trị liệu sau một ngày."
      },
      {
        "day": "NGÀY 6",
        "fullDayTitle": "NGÀY 6: KONYA – CAPPADOCIA (240km – 3,5 giờ) KHÁCH SẠN HANG ĐÁ",
        "title": "KONYA – CAPPADOCIA (240km – 3,5 giờ) KHÁCH SẠN HANG ĐÁ",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng và trả phòng khách sạn, khởi hành tới thành phố Cappadocia, tham quan:\nThành phố ngầm Kaymakli- một trong số 40 thành phố lớn và sâu nhất tại khu vực Cappadocia - nơi đây người ta đã tìm thấy một hệ thống thành ph ngầm với đầy đủ nhà cửa, nhà thờ, nơi cất trữ lương thực nằm ẩn sâu trong hang đá.\nBuổi trưa : Đoàn ăn trưa tại nhà hàng địa phương.\nSau đó, tiếp tục đến tham quan mua sắm tại nhà máy thảm thủ công truyền thống của Thổ Nhĩ Kỳ - đã tồn tại hơn 2.000 năm. Mỗi tấm thảm là một tác phẩm nghệ thuật độc đáo, được dệt hoàn toàn bằng tay từ len, cotton hoặc lụa tơ tằm, với họa tiết tinh xảo phản ánh tín ngưỡng, phong tục và đời sống của người dân địa phương.\nBuổi chiều : Đoàn về nhận phòng khách sạn nghỉ ngơi.\nTrải nghiệm khách sạn hang đá, được cải tạo từ các hang động tự nhiên và nhà đá tufa cổ xưa. Lưu trú tại đây, du khách sẽ cảm nhận được không gian huyền bí, ấm áp vào mùa đông và mát mẻ vào mùa hè, nhưng vẫn đầy đủ tiện nghi hiện đại.\nBuổi tối : Đoàn thưởng thức bữa tối tại nhà hàng địa phương và thưởng thức chương trình biểu diễn múa truyền thống Thổ Nhĩ Kỳ trong nhà hàng hang đá."
      },
      {
        "day": "NGÀY 7",
        "fullDayTitle": "NGÀY 7: KHÁM PHÁ CAPPADOCIA",
        "title": "KHÁM PHÁ CAPPADOCIA",
        "detail": "Buổi sáng : Vào buổi sáng sớm, đoàn sẽ trải nghiệm ngắm bình minh trên khinh khí cầu tại Cappadocia – được biết đến là một trong những địa điểm du lịch khinh khí cầu đẹp nhất thế giới. (Tuỳ thuộc vào tình hình thời tiết, chi phí tự túc)\nSau đó, đoàn khởi hành về lại khách sạn ăn sáng.\nSau bữa sáng, đoàn bắt đầu khám phá thành phố Cappadocia và tham quan:\nBảo tàng ngoài trời Goreme: Được UNESCO công nhận là di sản thế giới, là một quần thể các nhà thờ và tu viện nằm trong hang đá tự nhiên, được xây dựng từ thế kỉ thứ VI đến thế kỉ thứ VIII bởi những người Ki Tô giáo.\nLàng cổ Avanos – Xứ sở gốm sứ Cappadocia- một ngôi làng cổ bên bờ sông Kızılırmak ở Cappadocia, nổi tiếng với nghệ thuật gốm sứ truyền thống đã tồn tại hơn 4.000 năm.\nThung lũng Uchisar - một trong những thung lũng đẹp nhất Cappadocia, nổi bật với Uçhisar Castle – pháo đài đá tự nhiên cao nhất vùng. (photostop )\nPigeon Valley(Thung lũng Bồ Câu) nổi tiếng với những vách đá mềm được người dân xưa đục khoét làm chuồng nuôi bồ câu. Pigeon Valley thu hút du khách bởi cảnh quan ngoạn mục với đá vôi kỳ thú, đường mòn trekking thơ mộng và góc nhìn toàn cảnh tuyệt đẹp ra Cappadocia.\nBuổi tối : Đoàn dùng bữa tối tại khách sạn và nghỉ ngơi, dạo phố"
      },
      {
        "day": "NGÀY 8",
        "fullDayTitle": "NGÀY 8: CAPPADOCIA – ISTANBUL ( Bay nội địa ) LANG THANG BAZAAR Ở ISTANBUL",
        "title": "CAPPADOCIA – ISTANBUL ( Bay nội địa ) LANG THANG BAZAAR Ở ISTANBUL",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn, nhâm nhi cafe và thưởng thức không khí trong lành tại Cappadocia\nSau đó,xe và HDV đưa đoàn ra sân bay để đáp chuyến bay về Istanbul, chuyến bay dự kiến:\nTK 2003 NAVIST HK12 10:40 – 12:20\nSau bữa trưa, chúng ta bắt đầu khám phá Khu trung tâm của Thành phố Istanbul Sultan Ahmet Area, được xem là khu di tích quan trọng nơi lưu giữ những giá trị văn hóa và lịch sử từ thời Byzantine và Ottoman. Khu di tích bao gồm nhiều Công trình nổi bật như:\nVương Cung Thánh Đường Hagia Sophia (đã bao gồm vé vào bên trong)- Nhà thờ Hồi Giáo lớn nhất phía Đông La Mã cổ đại được xây dựng vào thế kỷ VI. Hagia Sophia là một trong những di tích lịch sử nổi tiếng và mang tính biểu tượng nhất của Istanbul.\nBuổi chiều, Đoàn tham quan:\nCung điện Topkapi Palace (đã bao gồm vé vào bên trong)– nơi ở và làm việc của hoàng đế Ottoman, có thể chứa đến 4000 người phục vụ cho Hoàng Cung điện là một thành phần của quần thể lịch sử tại Istanbul được Unessco công nhận là di sản thế giới từ năm 1985.\nBuổi tối : Đoàn dùng bữa tối và nghỉ đêm ở Istanbul."
      },
      {
        "day": "NGÀY 9",
        "fullDayTitle": "NGÀY 9: CITY TOUR ISTANBUL – SÂN BAY",
        "title": "CITY TOUR ISTANBUL – SÂN BAY",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn, sau đó đoàn di chuyển tham quan trải nghiệm:\nDu thuyền Bosphorus Cruise(khoảng 1 giờ) – thưởng ngoạn cảnh quan hai bên bờ eo biển, những cung điện nguy nga tráng lệ dọc hai bên sông. Đoàn chụp những bức hình lưu niệm với Cung điện Rumeli và Anatolia xinh đẹp.\nRumeli Hisarı (Rumeli Fortress) - pháo đài nổi tiếng do Sultan Mehmed II cho xây dựng năm 1452, ngay trước khi chinh phục Constantinople. Nằm trên bờ châu Âu của Bosphorus, đối diện với Anadolu Hisarı ở bờ châu Á.Từ đây, đoàn có thể ngắm cảnh Bosphorus tuyệt đẹp, đi dạo trên các bức tường thành và khám phá dấu ấn lịch sử Ottoman.\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng, sau đó tham quan :\nTham quan và thỏa sức mua sắm tại ngôi chợ Grand Bazaar – ngôi chợ 500 năm tuổi, với hơn 4000 gian hàng bày bán tất cả mọi thứ từ áo quần, trang sức, thực phẩm, thủ công mỹ nghệ...\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng, sau đó di chuyển ra sân bay để check in chuyến bay về lại Việt Nam.\nChuyến bay dự kiến của hàng không Turkish Airlines:\nVề TP.HCM: IST – SGN 02:50 – 16:30\nVề Hà Nội : IST – HAN 02:35 – 15:30"
      },
      {
        "day": "NGÀY 10",
        "fullDayTitle": "NGÀY 10: ĐÁP VIỆT NAM",
        "title": "ĐÁP VIỆT NAM",
        "detail": "Buổi chiều : Đáp Việt Nam, kết thúc chương trình khám phá Thổ Nhĩ Kỳ.\nGoholic chia tay và hẹn gặp lại đoàn trong những hành trình tiếp theo."
      }
    ],
    "inclusions": [
      "Vé máy bay quốc tế khứ hồi Tuskish airlines, bay thẳng đến Istanbul.",
      "Vé máy bay nội địa từ Cappadocia – Istanbul",
      "Evisa nhập cảnh Thổ Nhĩ Kỳ, thủ tục đơn giản",
      "Xe 27 chỗ suốt hành trình",
      "Các bữa ăn theo chương trình đặc sắc và trải nghiệm bữa ăn trong nhà hàng hang đá, xem show múa bụng truyền thống",
      "Khách sạn 5* suốt hành trình và 2 đêm khách sạn hang đá tại Cappadocia ( 2 khách/phòng, phòng 3 được sắp xếp khi lẻ nam/nữ)",
      "Tất cả các điểm tham quan được nêu trong chương trình",
      "Hướng dẫn viên địa phương và trưởng đoàn Việt Nam theo suốt chuyến đi, nhiệt tình, kiến thức tốt, chụp ảnh đẹp.",
      "Phí dịch vụ & Thuế chính phủ",
      "Các thỏa thuận bao gồm phí lập kế hoạch, xử lý, vận hành và liên lạc.",
      "Nước uống được cung cấp trong suốt chuyến đi",
      "Bảo hiểm du lịch"
    ],
    "exclusions": [
      "Các chi phí không được nêu trong phần bao gồm",
      "Tiền tip cho hướng dẫn viên và tài xế: 100$/khách/tour",
      "Chi phí bay khinh khí cầu hoặc các dịch vụ ngoài chương trình",
      "Phụ thu phòng đơn nếu quý khách có nhu cầu ngủ riêng (phụ thu VNĐ/khách/tour)"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-10",
    "code": "GH-10",
    "title": "BẮC CƯƠNG – LANG THANG MIỀN THẢO NGUYÊN",
    "url": "https://goholictravel.com/tour/bac-cuong/",
    "country": "china",
    "countryName": "Trung Quốc",
    "region": "china",
    "departureFrom": "TP.HCM/HÀ NỘI",
    "startDate": "2025-07-12",
    "departureSchedule": "2025-07-12",
    "duration": "10 ngày 9 đêm",
    "durationCategory": "7-days-tour",
    "month": "thang-05,thang-06,thang-07,thang-08",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "TOUR TRUNG QUỐC",
    "badgeColor": "bg-rose-600",
    "isFeatured": false,
    "price": 60800000,
    "priceDisplay": "60.800.000đ",
    "originalPrice": 68100000,
    "rating": 4.9,
    "reviewsCount": 190,
    "image": "https://goholictravel.com/wp-content/uploads/2025/07/web-bac-cuong-559x220.jpg",
    "gallery": [
      "https://goholictravel.com/wp-content/uploads/2025/07/Screenshot-2025-07-02-at-11.36.49.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/07/Screenshot-2025-07-02-at-11.36.56.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/07/Screenshot-2025-07-02-at-11.37.05.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/07/Screenshot-2025-07-02-at-11.37.13.jpg"
    ],
    "headMeta": [
      "10 ngày 9 đêm",
      "Nhóm: 10 - 14 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Chinh phục thảo nguyên Tân Cương với cảnh sắc ngoạn mục: làng gỗ Hòa Mộc – Hemu, hồ Kanas huyền thoại, thảo nguyên Kalajun & Nalati.",
    "introText": "Chinh phục thảo nguyên Tân Cương với cảnh sắc ngoạn mục: làng gỗ Hòa Mộc – Hemu, hồ Kanas huyền thoại, thảo nguyên Kalajun & Nalati.\n\nGhé thăm vườn hoa Lavender đẹp thứ ba thế giới (sau Pháp và Nhật).\n\nThành phố Tekes có quy hoạch hình bát quái độc đáo.",
    "highlights": [
      "Trải nghiệm đường cao tốc xuyên sa mạc S21, Vịnh Ngũ Sắc, và Ma Quỷ Thành Karamay.",
      "Trải nghiệm: cưỡi ngựa, du thuyền hồ Kanas, bay trực thăng, mặc đồ truyền thống, chợ Grand Bazaar sầm uất của người Duy Ngô Nhĩ."
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1: TP HCM – URUMQI",
        "title": "TP HCM – URUMQI",
        "detail": "Đoàn có mặt tại sân bay Tân Sơn Nhất đáp chuyến bay đi Trung Quốc.\nChuyến bay transit ở Quảng Châu/ Thành Đô.\nĐoàn đến Urumqi, nghỉ đêm tại khách sạn ở Urumqi.\nTP HCM - Quảng Châu: CZ6090 SGNCAN 02:35 06:30\nQuảng Châu - Urumqi: CZ8072 CANURC 08:15 13:30\nhoặc\nTP HCM – Thành Đô: 3U3904 SGNTFU 08:30 13:05\nThành Đô – Urumqi: 3U6517 TFUURC 19:05 22:40\n* Do điều kiện tự nhiên sẽ ảnh hưởng đến lịch bay vì thế tuỳ vào tình hình thực tế Goholic sẽ chọn đường bay phù hợp, giúp quý khách có những trải nghiệm tốt nhất"
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: URUMQI - DESERT HIGHWAY S21 - VỊNH NGŨ SẮC – BURQIN",
        "title": "URUMQI - DESERT HIGHWAY S21 - VỊNH NGŨ SẮC – BURQIN",
        "detail": "Buổi sáng: Đoàn dùng điểm tâm sáng tại khách sạn. Sau bữa sáng đoàn sẽ lên xe bắt đầu hành trình khám phá Tân Cương diệu kỳ\nĐoàn di chuyển trên Đường cao tốc S21 xuyên sa mạc đầu tiên ở Tân Cương dài 343 km băng qua sa mạc Gurbantunggut lớn thứ hai của Trung Quốc. Trên đường di chuyển đoàn sẽ ngắm nhìn con đường xuyên sa mạc này, việc xây dựng các tuyến đường cao tốc xuyên sa mạc là một trong những kỳ tích củangành kỹ thuật Trung Quốc.\nBuổi Trưa: Đoàn dùng bữa trưa trên đường di chuyển.\nBuổi chiều: Đoàn tiếp tục hành trình đến Vịnh Ngũ Sắc nằm ở Burqin. Tại đây đoàn sẽ được ngắm nhìn những bãi đá khổng lồ nhiều màu sắc và hình dáng độc đáo nằm giữa một rừng cây xanh, nơi có dòng sông Irtysh chảy xuyên qua. (Sông Irtysh bắt nguồn từ dãy núi Altay ở Tân Cương, chảy theo hướng Tây bắc đi qua Kazakhstan đến Ngavới chiều dài 4.248km).\nBuổi tối: Đoàn dùng buổi tối và nghỉ đêm tại Burqin"
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: BURQIN – HOÀ MỘC",
        "title": "BURQIN – HOÀ MỘC",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng, sau đó di chuyển tham quan đến với làng Hemu ( làng Hoà Mộc)\nTham quan làng Hemu: Làng Hòa Mộc với những ngôi nhà gỗ truyền thống và cảnh quan tự nhiên tuyệt đẹp, mỗi con đường trong làng đều chứa đựng một chất riêng biệt, từ những bức tường gỗ cổ kính, những con sông êm đềm chảy qua, đến những đồi cỏ xanh mơn mởn nằm vây quanh. Vẻ đẹp của làng Hòa Mộc Tân Cương không chỉ là sự hài hòa giữa con người và thiên nhiên mà còn là sự kết hợp tinh tế giữa văn hóa truyền thống và sự hiện đại.\nNgắm nhìn dòng sông Hoà Mộc, quý khách sẽ có cơ hội tận hưởng những phút giấy tự do và thoáng đãng tại một trong những ngôi làng đẹp nhất xứ Trung. Sự yên bình của ngôi làng sẽ tạo cho bạn một cảm giác thư giãn tuyệt đối với không khí vô cùng trong lành.\nQuý khách sẽ được tận hưởng cảm giác đứng trên đài quan sát, phóng tầm mắt ra xa ngắm nhìn toàn cảnh làng Hemu.\nBuổi trưa: Ăn trưa tại làng Hemu\nBuổi chiều: Trải nghiệm: Cưỡi ngựa, bay trực thăng,..( chi phí tự túc )\nBuổi tối: Đoàn dùng cơm tối và nghỉ đêm tại làng Hemu"
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: HEMU – KANAS - BURQIN",
        "title": "HEMU – KANAS - BURQIN",
        "detail": "Buổi sáng: Quý khách dùng điểm tâm sáng sau đó bắt đầu chuyến tham quan Khu bảo tồn thiên nhiên Kanas.\nKhu thắng cảnh Kanas nằm ở phần giữa của dãy núi Altay-Bắc Cương, khu vực biên giới giữa Trung Quốc tiếp giáp với Kazakhstan, Nga và Mông Cổ. Đoàn dùng xe bus trung chuyểntiến sâu vào bên trong, thời gian di chuyển khoảng 45 phút/chiều. Đến Làng Kanas đoàn sẽ thăm quan nhà của người Tuva và xem biểu diễn nhạc cụ truyền thống, hát cổ họng Tuva (hay Khoomei), đoàn uống trà thưởng thức bánh ngọt.\nBuổi trưa: Ăn trưa tại Kanas với những món ăn đặc trưng truyền thống địa phương.\nSau bữa trưa đoàn tiếp tục tham quan Hồ Kanas, Quan Ngư Đình (nơi quan sát quái vật trong hồ, là góc đẹp nhất để ngắm toàn cảnh hồ Kanas). Đoàn lên xe bus trung chuyển di chuyển quay trở lại khu vực cổng chính, trên đường đi tham quan vịnh Thần Tiên, vịnh Mặt Trăng và vịnh Ngọa Long.\nTrải nghiệm: Thăm nhà người Tuva, xem biểu diễn truyền thống, ngồi du thuyền hồ Kanass (chi phí tự túc)\nBuổi tối: Đoàn về lại khách sạn tại Burqin nhận phòng và dùng cơm tối. Du khách nghỉ ngơi sau chuyến đi dài.\nVịnh Mặt Trăng Kanas\nHồ Kanas\nChương trình biểu diễn người Tuva\nQuan ngư đình"
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: BURQIN – MA QUỶ THÀNH – MỎ DẦU KARAMAY – KHUÊ ĐỒN",
        "title": "BURQIN – MA QUỶ THÀNH – MỎ DẦU KARAMAY – KHUÊ ĐỒN",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng và khởi hành đến Thành phố Quỷ thuộc địa phận Karamay\nThành phố Quỷ: Nơi đây chủ yếu là địa hình Yadan - một dạng địa hình độc đáo do gió bào mòn trongmôi trường khô cằn thành nhiều hình dạng khác nhau. Đoàn sẽngồi xe chuyên dụng nội khu để di chuyển và ngắm nhìn toàn bộ Thành phố Quỷ. Ngoài những ngọn đồi cao thấp, lớn nhỏ haynhững khuôn mặt quỷ đáng sợ thì điểm cuốn hút nhất ở Thành phố Quỷ chính là các lâu đài hệt như trong phim cổ xưa. Đây là kết quả qua hàng triệu, hàng nghìn năm được tạo nên từ gió, cát kết hợp với khí hậu khô. Đoàn dùng tàu hoả để tăng tính trảinghiệm tại ma Quỷ Thành.\nBuổi trưa: Ăn trưa trên đường di chuyển\nTham quan Mỏ dầu Karamay trên đường di chuyểnBuổi tối: Đoàn ăn tối và nghỉ đêm tại Khuê Đồn.\nBuổi tối: Đoàn ăn tối và nghỉ đêm tại Khuê Đồn."
      },
      {
        "day": "NGÀY 6",
        "fullDayTitle": "NGÀY 6: KHUÊ ĐỒN – HỒ SAYRAM – VƯỜN LAVENDER –CẦU GUOZIGOU – LÀNG KAZANQI – Y NINH",
        "title": "KHUÊ ĐỒN – HỒ SAYRAM – VƯỜN LAVENDER –CẦU GUOZIGOU – LÀNG KAZANQI – Y NINH",
        "detail": "Buổi Sáng: Sau bữa sáng. Đoàn trả phòng di chuyển đến Hồ Sayram\nHồ Sayram: Được mệnh danh là “Giọt nước mắt cuối cùng của Đại Tây Dương”. Nằm ở phía tây dãyThiên Sơn ở độ cao hơn 2000m so với mực nước biển, Sayram là hồ trên núi lớn và cao nhất ở TânCương, hồ trong xanh được bao quanh bởi đồng cỏ xanh tươi và những đỉnh núi cao phủ đầy tuyết trắng.Trong tiếng Kazak, Sayram có nghĩa là \"phước lành\". Hồ được hình thành từ khoảng 70 triệu năm trước,do sự dịch chuyển của dãy Himalaya.\nTham quan vườn hoa Lavender: đây là nơi trồng hoa oải hương lớn thứ ba sau Provence của Pháp vàFurano của Nhật Bản, cũng là khu vực sản xuất hoa oải hương chính duy nhất ở Trung Quốc và đượcmệnh danh là \"Quê hương của hoa oải hương ở Trung Quốc\". ( Tùy thuộc vào tình hình thực tế, dự kiến hoa sẽ nở vào tháng 6&7)\nBuổi trưa: Ăn trưa trên đường di chuyển\nTrên đường di chuyển, xe sẽ đi qua khu vực Cầu Guozigou, xe đi chậm để cho đoànngắm nhìn và có thể tìm vị trí thích hợp để dừng xe cho đoàn xuống chụp ảnh.\nTham quan Phố cổ Kazanqi “ Nơi có những ngôi nhà màu xanh da trời”\nTrải nghiệm: Ngồi xe ngựa, ăn kem ( chi phí tự túc )\nBuổi tối: Đoàn ăn tối và nghỉ đêm tại Y Ninh\nCầu Guozigou\nCánh đồng hoa Lavender\nHồ Sayram\nHồ Sayram"
      },
      {
        "day": "NGÀY 7",
        "fullDayTitle": "NGÀY 7: Y NINH – THẢO NGUYÊN KALAJUN – TEKES",
        "title": "Y NINH – THẢO NGUYÊN KALAJUN – TEKES",
        "detail": "Buổi Sáng: Sau bữa sáng đoàn di chuyển đến Kalajun\nKalajun - Hẻm núi thảo nguyên Kuokesu là một trong 5 khu du lịch nổi tiếng ở Kalajun. Bắt nguồn từgiữa dãy núi Thiên Sơn, được hình thành bởi sự tương tác của các chuyển động địa chất và nước tuyết tan trên dãy núi Thiên Sơn trong hàng trăm triệu năm, nằm ở phía nam của Tekes. Cảnh quan chủ yếu là địa hình hẻm núi, đồng cỏ, núi tuyết, thảo nguyên. Đứng trên cao nhìn xuống hẻm núi có thể phóng tầm mắt bao quát toàn bộ hẻm núi. Cảnh quan chủ yếu là địa hình hẻm núi, đồng cỏ, núi tuyết, thảo nguyên... ( bao gồm bus nội khu, không bao gồm xe điện dịch vụ ). Đoàn tự dodạo chơi chụp ảnh.\nTrải nghiệm: Cưỡi ngựa, chụp ảnh cùng cừu con ( chi phí tự túc )\nBuổi trưa: Ăn trưa trên đường di chuyển\nBuổi tối: Quý khách ăn tối và nghỉ đêm tại Tekes “Thành phố hình bát quái”"
      },
      {
        "day": "NGÀY 8",
        "fullDayTitle": "NGÀY 8: TEKES - THẢO NGUYÊN NATALI - NATALI/YNINH",
        "title": "TEKES - THẢO NGUYÊN NATALI - NATALI/YNINH",
        "detail": "Buổi sáng: Sau bữa sáng đoàn di chuyển đến Thảo nguyên Nalati\nThảo nguyên Nalati thuộc Yili, nằm sâu trong dãy núi Thiên Sơn cao hơn 1800m so với mực nước biển. Theo ngôn ngữ dân tộc Duy Ngô Nhĩ, Nalati có nghĩa là \"Nơi đầu tiênnhìn thấy mặt trời\". Nalati là nơi sinh sống của người dân tộc thiểu số Kazakhstan từ xưa tới nay.\nĐoàn di chuyển bằng xe bus nộikhu đến Đồng cỏ Kongzhong -là một trong ba đồng cỏ đẹp nhất của Nalati. Du khách ngắm nhìn núi tuyết, rừng thông, đồi và đồng cỏ bát ngát, ngắm nhìn những đàn ngựa dê cừu dọc ven đường đi\nTrải nghiệm: Mặc đồ truyền thống Nalati ( chi phí tự túc )\nBuổi trưa: Dùng bữa trưa trên đường di chuyển\nBuổi tối: Đoàn ăn tối và nghỉ ngơi tại Natali hoặc Y Ninh."
      },
      {
        "day": "NGÀY 9",
        "fullDayTitle": "NGÀY 9: NALATI/ Y NINH – MÁY BAY HOẶC TÀU CAO TỐC URUMQI",
        "title": "NALATI/ Y NINH – MÁY BAY HOẶC TÀU CAO TỐC URUMQI",
        "detail": "Buổi Sáng: Sau bữa sáng đoàn sẽ di chuyển về lại thành phố đến Urumqi - thủ phủ khu tự trị Tân Cương.\nĐoàn đáp chuyến bay nội địa có thời gian bay là 1 giờ về lại thủ phủ Urumqi (Ô Lỗ Mộc Tề). Trong trường hợp thời tiết xấu hoặc huỷ chuyến bay vì nhiều lý do khác nhau (Vì Tân Cương là một vùng đấtrộng lớn và có sự biến đổi về thời tiết rất lớn nên việc thay đổi và huỷ chuyến đôi khi sẽ xảy ra, vì an toàn và đảm bảo chương trình du lịch cho quý khách, Goholic xin được chủ động có phương án thay thế và kịp thời)\nBuổi trưa: Ăn trưa trên đường di chuyển hoặc tại Urumqi.\nBuổi Chiều: Tuỳ thuộc vào lịch bay của hãng hàng không, nếu có đủ thời gian công ty sẽ sắp xếp cho đoàn đi Tham quan Khu chợ lớn - Grand Bazar.\nGrand Bazaar tại thành phố Ürümqi, với diện tích xây dựng gần100.000 mét vuông và 3.000 cửa hàng. Đây hiện là khu chợ lớn nhất ở Trung Quốc, với hoạt động biểu diễn văn hóa Duy Ngô Nhĩ nhiều nhất. Phong cách kiến trúc của Grand Bazaar rất tráng lệ và đậm chất Hồi giáo, phản ánh những đặc điểm độc đáo của các vùng phía Tây. Nhiều loại đồ lưu niệm dân tộc tinh tế tràn ngập. Đến Grand Bazaar giống như đi dạo qua một khu chợ ở Trung Á, nơi bạn có thể cảm nhận đầy đủ sự quyến rũ của các dân tộc thiểu số.\nBuổi Tối: Ăn tối và nghỉ đêm tại Ürümqi."
      },
      {
        "day": "NGÀY 10",
        "fullDayTitle": "NGÀY 10: URUMQI - TP HCM/HN",
        "title": "URUMQI - TP HCM/HN",
        "detail": "Buổi sáng: Đoàn khởi hành về Việt Nam. Chuyến bay transit ở Quảng Châu/ Thành Đô và Về lại Tp Hồ Chí Minh/ Hà Nội.\nChuyến bay dự kiến:\nUrumqi – Thành Đô: 3U6518 URC TFU 07:55 – 11:25\nThành Đô – Urumqi: 3U3903 TFU SGN 19:35 – 22:20\nHoặc\nIrumqi - Quảng Châu:CZ6883 URC CAN 12:50 - 18:00\nQuảng Châu – TP HCM:CZ367 CAN SGN 20:15 - 22:00\nBuổi tối: Đoàn về đến sân bay và nhập cảnh lấy hành lý. HDV xin được gửi lời chào tạm biệt và cám ơn quý du khách. Xin được gửi lời chúc tốt đẹp và hạnh phúc đến cả đoàn"
      }
    ],
    "inclusions": [
      "Vé máy bay khứ hồi",
      "Vé chuyến bay nội địa",
      "Chuyến tàu hoả chuyến bay nội địa",
      "Visa nhập cảnh TRUNG QUỐC theo đoàn",
      "Giấy thông hành",
      "Xe di chuyển theo hành trình",
      "Lưu trú: 02 khách/phòng (phòng Twin/Double). Phòng được được bố trí khi lẻ nam, nữ.Khách sạn 4",
      "Ăn uống:Bữa sáng điểm tâm chọn món và buffet sáng tại khách sạn.",
      "Các bữa ăn chính Set menu",
      "Nước uống 2 chai/ngày.",
      "Hướng dẫn viên/Trưởng đoàn công ty Goholic.",
      "HDV địa phương tại các điểm đến",
      "Vé tham quan du lịch trọn gói theo chương trình.",
      "Bình oxy cho các tường hợp khẩn cấp",
      "Bảo hiểm du lịch trọn gói",
      "Nước suối hằng ngày (02 chai / 1 khách / 1 ngày)",
      "Vé vào Bảo tàng và tất cả các vé thăm quan thắng cảnh",
      "Quà tặng lưu niệm của vùng."
    ],
    "exclusions": [
      "Chi phí các dịch vụ không được liệt kê trong phần Bao gồm.",
      "Phụ thu phòng đơn: (Áp dụng cho khách yêu cầu ở riêng 1 phòng)",
      "VAT",
      "Các chi phí cá nhân",
      "Tiền Tip cho Tour Leader, Hướng dẫn viên và Lái xe (tối thiểu 100 usd/khách/tour)",
      "Phụ thu phòng đơn 500 USD/khách – nếu quý khách có nhu cầu ngủ phòng riêng hoặc không có khách ghép chung"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-11",
    "code": "GH-11",
    "title": "TÂY TẠNG – CHẠM ĐẾN GIẤC MƠ",
    "url": "https://goholictravel.com/tour/tay-tang-cham-den-giac-mo/",
    "country": "china",
    "countryName": "Trung Quốc",
    "region": "china",
    "departureFrom": "TP.HCM/HÀ NỘI",
    "startDate": "2025-07-19",
    "departureSchedule": "2025-07-19",
    "duration": "8 ngày 7 đêm",
    "durationCategory": "7-days-tour",
    "month": "thang-10,thang-11,thang-05,thang-06,thang-07,thang-08",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "TOUR TRUNG QUỐC",
    "badgeColor": "bg-amber-500",
    "isFeatured": false,
    "price": 61990000,
    "priceDisplay": "61.990.000đ",
    "originalPrice": 69400000,
    "rating": 4.9,
    "reviewsCount": 197,
    "image": "https://goholictravel.com/wp-content/uploads/2025/07/web-taytang-1200x675.jpg",
    "gallery": [],
    "headMeta": [
      "8 ngày 7 đêm",
      "Nhóm: 15 - 20 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Ngắm Everest từ 3 góc độ khác nhau.",
    "introText": "Ngắm Everest từ 3 góc độ khác nhau.",
    "highlights": [
      "Check-in các tu viện cổ, hồ thiêng, đèo tuyết, sông băng vĩnh cửu.",
      "Thưởng thức trà bơ, trải nghiệm văn hóa Tạng nguyên bản."
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1: TP HCM – THÀNH ĐÔ",
        "title": "TP HCM – THÀNH ĐÔ",
        "detail": "Buổi Sáng: Hướng dẫn viên Goholic đón quý khách tại cột số 5 ga đi quốc tế, sân bay quốc tế TÂN SƠN NHẤT đáp chuyến bay 3U3904 từ 07:50 đến 12:30 đến với thành phố Thành Đô – Tứ Xuyên – Trung Quốc.\nĐáp chuyến bay thẳng đến với sân bay Thiên Phủ - thành phố Thành Đô tỉnh Tứ Xuyên. Đoàn tiếp tục đáp chuyến bay nội địa đến Đoàn đáp chuyến bay từ Thành Đô đến san bay Gongar Lhasa.\nHướng dẫn viên địa phương vào đón đoàn bằng tiếng Tạng “Tashi Delek !!!” – Kính gửi đến quý khách phương xa sự CÁT TƯỜNG và HẠNH PHÚC bằng những chiếc khắn Khanta – mang ý nghĩ AN LẠC và kính chúc đến đoàn sự BÌNH AN.\nĐoàn về lại khách sạn nhận phòng và nghỉ ngơi"
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: KHÁM PHÁ LHASA",
        "title": "KHÁM PHÁ LHASA",
        "detail": "Buổi sáng: Quý khách dùng điểm tâm sáng tại khách sạn và bắt đầu chuyến tham Lhasa – thành phố của Chư Thiên.\nTu Viện Sera (Sắc Nhạ): Tu viên được thành lập năm 1419 bởi vị vua Lama Jamchen Choje Sakya Yeshe theo lời thỉnh cầu của Đại Sư Tsongkhapa. Hiện nay Sera Monastery là 1 trong 6 tu viện lớn nhất của Hoàng Mạo Giáo (Gelugpa) tại Tây Tạng. Tham quan Vườn Tranh Biện là nơi các tăng sinh tổ chức những cuộc tranh biện vào buổi chiều. Tại đây Quý khách có thể tự do quan sát và chụp ảnh trong khu vườn.\nLàng Dadong: Ngồi làng cổ truyền cuat người Tạng. Nó chứa đựng nhưunxg giá trị văn hóa và những dấu tích phát triển của con người theo thời gian. Đến đây bạn còn có thể tìm hiểu về nếp sống của người dân địa phương thông qua những hoạt động hằng ngày của họ tại một gia đình đáng yêu của người dân xứ Tạng.\nNhà in Kinh Dege nằm ở phía đông Tây Tạng là nhà in lớn nhất của Tây Tạng và là nơi lưu giữ hơn 300.000 bản khắc cổ. Nhờ nhà in này, văn hóa Tây Tạng đã được kế thừa và bảo vệ từ thế hệ này sang thế hệ khác. Văn hóa Tây Tạng có từ hàng trăm năm trước. Phần lớn văn hóa chữ viết của Tây Tạng đã được bảo tồn cho thế hệ hiện đại ngày nay.\nBuổi tối: Đoàn cùng cơm và nghỉ ngơi tại khách sạn."
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: LHASA – POTALA",
        "title": "LHASA – POTALA",
        "detail": "Buổi Sáng: Du khách dùng bữa sáng tại khách sạn và tận hưởng không khí buồi sớm của thủ phủ Lhasa.\nHành trình đến vùng đất Chư Thiên của du khách được bắt đầu từ một trong những ngôi tự viện đầu tiên tại Tây Tạng – ĐẠI CHIÊU TỰ. Ngôi cổ tự gắn liền với con đường hoành dương Phật giáo của công chúa Trì Tôn và công chúa Văn Thành khi đến với vương quốc Thổ Phồn.\nĐại điện Potala: Công trình được khởi công xây dựng bởi Đức Đạt-lai Lạt-ma thứ 5 vào năm 1645. là một bảo tàng lịch sử, một Di sản thế giới được UNESCO công nhận từ năm 1994. Tên của nó được đặt theo ngọn núi Potalaka là nơi ở huyền thoại của Quán Thế Âm Bồ Tát.\nThưởng thức trà Tây Tạng cùng với những thức uống truyền thống của người Tạng tại Lhasa\nBuổi tối: Đoàn cùng cơm và nghỉ ngơi tại khách sạn."
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: HỒ YAMDROK – ĐÈO GAMBALA – SÔNG BĂNG KAROLA - SHIGATSE",
        "title": "HỒ YAMDROK – ĐÈO GAMBALA – SÔNG BĂNG KAROLA - SHIGATSE",
        "detail": "Buổi Sáng: Sau bữa sáng tại khách sạn. Đoàn trả phòng.\nĐoàn khởi hành đi Shigatse, là trung tâm thứ hai của Tây Tạng theo con đường Lhasa – hồ Yamdrok – Gyantse – Shigatse là 1 trong những cung đường vàng đẹp nhất trong chuyến hành trình.\nTrên đường đi, ghé tham quan:\nĐèo Gambala, phóng tầm mắt ngút ngàn ngắm hồ Yamdrok\nHồ Yamdrok, nằm ở độ cao 4441m, được coi là 1 trong 4 hồ thiêng nhất toàn Tây Tạng\nVượt lên đèo Karola cao 4960m, tham quan sông băng vĩnh cửu Karola\nSau bữa trưa, đoàn sẽ đến thị trấn Gyantse (Trấn Giang Tử) – điểm dừng quan trọng trên cung đường thăm thú Tsang nằm ở độ cao 4000m. Nghe thuyết minh về lịch sử Tây Tạng và cuộc chiến Gyantse giữa người Tạng và người Anh, còn được biết đến là cuộc chiến trên bộ cao nhất trong lịch sử loài người (gần 5.000m).\nSau khi rời Trấn Giang Tử (Gyantse), đoàn sẽ vượt 90km đường đến với Nhật Khách Tắc (Shigatse) nằm ở độ cao trung bình 3900m so với mực nước biển, là thủ phủ của Tsang và cũng là thành phố lớn thứ 2 sau Lhasa.\nTối: Ăn tối và Nghỉ đêm tại Shigatse."
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: SHIGATSE – TRẠI CĂN CỨ EVEREST",
        "title": "SHIGATSE – TRẠI CĂN CỨ EVEREST",
        "detail": "Buổi Sáng: Ăn sáng tại khách sạn và khỏi hành đến với hành trình “những giấc mơ” Trại Căn Cứ Everest. Quý khách sẽ đi trên đoạn đường đặc biệt của dãy Himalaya Everest.\nĐèo Gyatsola (5280m). Tại điểm quan sát đèo Gyatsola, bạn sẽ có cái nhìn đầu tiên về đỉnh Everest. Ẩn mình sau dãy núi, Everest giống như một bông sen mới chớm nở, một khung cảnh ven đường quyến rũ.\nKhu bảo tồn thiên nhiên quốc gia Núi Everest, quý khách sẽ được ngắm nhìn toàn cảnh dãy Himalaya tại Đèo Gawula (5198m). Ở góc nhìn này, bạn sẽ ngạc nhiên trước đội hình hùng vĩ của 5 đỉnh núi cao nhất dãy Himalaya, trong đó có đỉnh Everest đứng đầu. Đây là cái nhìn thứ hai của bạn về Everest.\nEverest Base Camp, đỉnh núi Everest hình kim tự tháp màu trắng khổng lồ sừng sững sừng sững trước mắt bạn. Khi ngày chuyển sang hoàng hôn, hãy chứng kiến ​​sắc vàng của mặt trời tỏa ánh sáng ấm áp lên mặt phía bắc của Everest.\nBuổi tối: Quý khách nhận phòng và nghỉ ngơi tại khách sạn."
      },
      {
        "day": "NGÀY 6",
        "fullDayTitle": "NGÀY 6: TRẠI CĂN CỨ EVEREST - SHIGATSE",
        "title": "TRẠI CĂN CỨ EVEREST - SHIGATSE",
        "detail": "Hôm nay là ngày rất đặc biệt của cả đoàn.\nSáng: Quý khách sẽ đến trạm Căn Cứ Everest Base Camp.\nTu viện Rongbuk là tu viện của giáo phái Nyingma của Phật giáo Tây Tạng. Tu viện được xây dựng vào năm 1902 ở vị trí cách Lhasa khoảng 700km về phía tây nam và cách Kathmandu, Nepal, khoảng 360km về phía đông bắc.\nĐiểm quan sát Dinggye Xilin. Bạn không chỉ có thể nhìn thấy lại sườn phía đông hùng vĩ của đỉnh Everest cao chót vót mà còn có thể nhìn thấy đỉnh núi cao thứ tư thế giới, Núi Lhotse, đứng ở độ cao 8.516 mét. về đến Shigatse.\nTối: Đoàn về đến Shigatse và nhận phòng nghỉ ngơi tại khách sạn sau một chặng đi dài"
      },
      {
        "day": "NGÀY 7",
        "fullDayTitle": "NGÀY 7: SHIGATSE – LHASA",
        "title": "SHIGATSE – LHASA",
        "detail": "Sáng: Du khách dùng bữa sáng tại khách sạn và tận hưởng không khí buổi sớm của Shigatse.\nTu viện Tashilhunpo:. Đây là ngôi nhà tâm linh của người dân Tây Tạng ở Shigatse, nơi có bức tượng Phật Di Lặc lớn nhất thế giới. Vào bên trong, bạn sẽ thấy các nhà sư đội mũ vàng và mặc áo choàng đỏ đang di chuyển quanh chùa. Tu viện Tashilhunpo, cùng với ba tu viện lớn khác là bốn Đại tu viện quan trọng của Phật giáo Tây Tạng, trở thành một trong những điểm hành hương quan trọng không thể bỏ qua khi tới Shigatse.\nTiếp theo, đoàn sẽ quay trở lại Lhasa dọc theo sông Yarlung Tsangpo , dòng sông mẹ của người dân Tây Tạng trên đường cao tốc Northen Friendship Highway, con đường vàng nối từ Cực Đông (Thượng Hải) sang cực Tây (Tây Tạng) của Trung Quốc.\nĐến Lhasa . Tận hưởng thời gian thư giãn tự do lang thang qua Phố Barkhor, nơi bạn có thể mua quà để mang về cho gia đình.\nTối: Đoàn dùng cơm tối và tự do nghỉ ngơi mua sắm tại Lhasa."
      },
      {
        "day": "NGÀY 8",
        "fullDayTitle": "NGÀY 8: LHASA – THÀNH ĐÔ – TP HCM",
        "title": "LHASA – THÀNH ĐÔ – TP HCM",
        "detail": "Sáng: Du khách dùng bữa sáng tại khách sạn và tận hưởng không khí buổi sớm của thủ phủ Lhasa.\nĐoàn dùng bữa sáng và đến với sân bay Lạp Tát trở về với Thành Đô. Chia tay với vùng đất đầy bí ẩn, chia tay với các tu viện nghìn năm tuổi, chia tay với khí trời Tây Tạng và lòng của những vị lữ khách vẫn còn xao xuyến và đầy đặn những cảm xúc khó tả\nĐoàn đến sân bay về Thành Đô trên chuyến bay 3U6632 11:20 Đến 13:20.\nDu Khách đến với sân bay Thiên Phủ Thành Đô và về lại Việt Nam trên chuyến bay 3U3903 Từ 19:30 đến 22:20"
      }
    ],
    "inclusions": [
      "Vé máy bay khứ hồi BAY THẲNG TPHCM – Thành Đô, Thành Đô – TPHCM",
      "Ve máy bay nội địa Thành Đô – Lhasa Gonggar – Thành Đô",
      "Visa nhập cảnh TRUNG QUỐC theo đoàn",
      "Giấy thông hành vào TÂY TẠNG",
      "Xe di chuyển theo hành trình",
      "Lưu trú: 02 khách/phòng (phòng Twin/Double). Phòng được được bố trí khi lẻ nam, nữ.Khách sạn 4 sao tại Nyingchi, Lhasa, Shigatse và Thành Đô",
      "Ăn uống:Bữa sáng điểm tâm chọn món và buffet sáng tại khách sạn.",
      "Các bữa ăn chính Set menu",
      "Nước uống 2 chai/ngày.",
      "Hướng dẫn viên/Trưởng đoàn công ty Goholic.",
      "HDV địa phương tại các điểm đến",
      "Vé tham quan du lịch trọn gói theo chương trình.",
      "Bình oxy cho các tường hợp khẩn cấp",
      "Bảo hiểm du lịch trọn gói",
      "Nước suối hằng ngày (02 chai / 1 khách / 1 ngày)",
      "Vé vào Bảo tàng và tất cả các vé thăm quan thắng cảnh",
      "Quà tặng lưu niệm vùng Himalayas."
    ],
    "exclusions": [
      "Chi phí các dịch vụ không được liệt kê trong phần Bao gồm.",
      "Phụ thu phòng đơn: (Áp dụng cho khách yêu cầu ở riêng 1 phòng)",
      "VAT",
      "Các chi phí cá nhân",
      "Tiền Tip cho Tour Leader, Hướng dẫn viên và Lái xe (tối thiểu 100 usd/khách/tour)",
      "Phụ thu phòng đơn 400 USD/khách – nếu quý khách có nhu cầu ngủ phòng riêng hoặc không có khách ghép chung."
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-12",
    "code": "GH-12",
    "title": "THANH HẢI – CAM TÚC BƯỚC CHÂN VẠN DẶM",
    "url": "https://goholictravel.com/tour/thanh-hai-cam-tuc-buoc-chan-van-dam/",
    "country": "china",
    "countryName": "Trung Quốc",
    "region": "china",
    "departureFrom": "TP.HCM",
    "startDate": "2025-08-02",
    "departureSchedule": "2025-08-02",
    "duration": "8 ngày 7 đêm",
    "durationCategory": "7-days-tour",
    "month": "thang-10,thang-07,thang-08",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "TOUR TRUNG QUỐC",
    "badgeColor": "bg-cyan-600",
    "isFeatured": false,
    "price": 49900000,
    "priceDisplay": "49.900.000đ",
    "originalPrice": 55900000,
    "rating": 4.9,
    "reviewsCount": 204,
    "image": "https://goholictravel.com/wp-content/uploads/2025/08/web-Thanhhaicamtuc-559x220.jpg",
    "gallery": [
      "https://goholictravel.com/wp-content/uploads/2025/08/di-weng-5lbgmd27oow-unsplash.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/07/china-2550684-1280.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/07/dai-dia-chi-tu-2.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/07/jason-zhao-hpwiqvobqco-unsplash.jpg"
    ],
    "headMeta": [
      "8 ngày 7 đêm",
      "Nhóm: 15 - 20 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Ghé Hang Mạc Cao – báu vật Phật giáo với hàng ngàn bức họa cổ.",
    "introText": "Ghé Hang Mạc Cao – báu vật Phật giáo với hàng ngàn bức họa cổ.\n\nThăm Hồ Thanh Hải, Hồ muối Chaka với xe lửa xuyên mặt hồ.\n\nTu viện Kumbum & bảo tàng Tây Tạng lưu giữ văn hóa Phật giáo Kim Cương Thừa.",
    "highlights": [
      "Hành trình theo Con đường Tơ Lụa cổ đại, kết hợp sa mạc, hồ muối, cao nguyên.",
      "Check-in Nguyệt Nha Tuyền giữa sa mạc, cưỡi lạc đà đón hoàng hôn.",
      "Khám phá Núi Ngũ Sắc Đan Hà – “núi cầu vồng” độc đáo tại Trương Dịch.",
      "Trải nghiệm tiệc nướng sa mạc, phố Hồi giáo Tây Ninh, phố đêm Sa Châu."
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1: TP HCM – ĐÔN HOÀNG",
        "title": "TP HCM – ĐÔN HOÀNG",
        "detail": "Buổi sáng: Đoàn sẽ đáp chuyến bay đến với thành phố Đôn Hoàng – Được mệnh danh là thủ phủ di sản phía tây Cam Túc.\nChuyến bay: 3U3904 SGNTFU 0750 1225\nChuyến bay: 3U6357 TFUDNH 1805 2030\nBuổi tối: Hướng dẫn viên địa phương đoán đoàn tại sân bay quốc tế Đôn Hoàng và gửi lời chào nồng nhiệt từ sa mạc Gobi đến với những vị khách đến từ Việt Nam. Đoàn dùng cơm và về lại khách sạn nhận phòng và nghỉ ngơi sau chuyến bay dài.\nThành phố Đôn Hoàng – Di sản rực rỡ trên Con Đường Tơ Lụa. Đôn Hoàng là một thành phố ốc đảo nằm ở rìa sa mạc Takla Makan. So với các thành phố khác ở Trung Quốc, đây là một thành phố tương đối nhỏ. Dân số của thành phố chỉ hơn 100.000 người một chút. Tuy nhiên, hàng năm, thành phố này đón tiếp hàng triệu du khách ghé thăm. Vào thời cổ đại, thành phố là một trong những ngã ba trung chuyển quan trọng trên Con đường tơ lụa vĩ đại. Đây là nơi mà con đường đoàn lữ hành được chia thành Đường phía Bắc, chạy qua vùng đất Uygur và Kyrgyzstan và Đường phía Nam chạy qua Tây Tạng và Afghanistan."
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: ĐÔN HOÀNG – HANG MẠC CAO – NGUYỆT NHA TUYỀN",
        "title": "ĐÔN HOÀNG – HANG MẠC CAO – NGUYỆT NHA TUYỀN",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng đầu tiên tại Đôn Hoàng và khởi hành đến với di sản văn hoá Thế Giới, nơi minh chứng sự giao thoa rực rỡ của nền văn hoá từ Đông sang Tây – Hệ Thống Hang Động Mạc Cao Đôn Hoàng.\nMạc Cao Đôn Hoàng: Được xây dựng lần đầu tiên vào năm 366 sau Công nguyên và đại diện cho thành tựu vĩ đại của nghệ thuật Phật giáo từ thế kỷ thứ 4 đến thế kỷ 14. 492 hang động hiện đang được bảo tồn, chứa khoảng 45.000 mét vuông tranh tường và hơn 2.000 tác phẩm điêu khắc được sơn. Các tác phẩm bích hoạ độc đáo tại hang Mạc Cao là nguồn cảm hứng cho nghệ thuận đương đại một cách bất tận với những gam màu sắc vô cùng huyền ảo ẩn chứa tài nghệ hàng ngàn năm của cổ nhân.\nĐoàn tiếp tục đến với một trong những cảnh sắc đặc biệt của Đôn Hoàng đó chính là Nguyệt Nha Tuyền và Minh Sa Sơn. Có hình dạng như một vầng trăng lưỡi liềm, suối đã tồn tại trong hơn 2.000 năm, tạo nên sự tương phản nổi bật với những cồn cát sa mạc xung quanh. Theo truyền thống, đây là điểm dừng chân quan trọng trên Con đường tơ lụa, cung cấp nước và nơi nghỉ ngơi cho các thương nhân và du khách.\nBuổi Tối: Đoàn về dùng cơm tối và nhận phòng nghỉ ngơi. Đây là một buổi tối dành tặng cho quý du khách đến với tiệc tối Hoá Thân Thành Lữ Khách trên con đường Tơ Lụa dùng tiệc tối sa mạc và cưỡi lạc đà đón hoàng hôn Gobi. Quý khách sẽ có thời gian thư giãn dạo chơi tại chợ đêm Sa Châu – tên gọi đầu tiên của Đôn Hoàng với hàng quán sầm uất và rất nhiều món ăn mang phong vị địa phương.\n“Gặp Lại Đôn Hoàng” là một chương trình biểu diễn kết hợp cảnh với sự thay đổi và di chuyển liên tục của du khách tham gia vào chương trình. M sự kết hợp đa diện với những. mảnh kiến trúc độc đáo từ Hang Mạc Cao, bích hoạ, cổ vật, lối sống, tập quán, văn hoá,…gặp Lại Đôn Hoàng chắc chắn là một điểm nhấn độc đáo cho chuyến đi của chính bạn. (Chi phí tự túc)"
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: ĐÔN HOÀNG – TRƯƠNG DỊCH",
        "title": "ĐÔN HOÀNG – TRƯƠNG DỊCH",
        "detail": "Buổi sáng: Quý đoàn dùng bữa sáng tại khách sạn và khởi hành đến với thành phố Trương Dịch. Trên đường đi quý khách sẽ tự tay vé nên bức tranh thiên nhiên tuyệt mỹ của chính mình bằng sự đối lập của màu sắc và thuỷ mặc.\nGia Dục Quan - Thiên Hạ Đệ Nhất Hùng Quan (Cửa quan ải lớn nhất trong thiên hạ): là một trong những điểm dừng chân quan trọng của Con đường Tơ Lụa lịch sử. được xây dựng vào năm 1372, là một trong những cửa ải quan trọng của Vạn Lý Trường Thành, có vai trò chiến lược không chỉ trong việc phòng thủ mà còn trong giao thương trên Con đường Tơ Lụa – con đường lịch sử đã gắn kết các nền văn hóa và thương mại giữa phương Đông và phương.\nĐại Địa Chi Tử - Vô Giới: Tại sa mạc Gobi này, Đổng Thư Băng, phó khoa Mỹ thuật của Đại học Thanh Hoa. đã xây dựng một trục tọa độ nghệ thuật kết hợp giữa truyền thống và đổi mới, nghệ thuật và công nghệ giữa vùng hoang dã rộng lớn với các tác phẩm \"Con của Trái đất\", \"Vô biên\". Những tác phẩm này không chỉ vượt qua ranh giới giữa nghệ thuật điêu khắc và nghệ thuật sắp đặt mà còn tạo nên một không gian độc đáo tại giao điểm của nền văn hóa phương Đông và phương Tây, tỏa sáng rực rỡ với ngôn ngữ nghệ thuật và tác động thị giác độc đáo.\nBuổi tối: Đoàn đến với thành phố Trương Dịch cùng cơm và nghỉ ngơi tại khách sạn."
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: TRƯƠNG DỊCH – ĐAN HÀ – THANH HẢI",
        "title": "TRƯƠNG DỊCH – ĐAN HÀ – THANH HẢI",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng và đến với tỉnh Thanh Hải và bước vào cảnh cửa tự nhiên của cao nguyên lớn nhất Thế Giới.\nĐịa Mạo Đan Hà - “Núi bảy màu”: tại thành phố Trương Dịch, tỉnh Cam Túc, Trung Quốc nằm trong khu vực đồi núi, với hình dáng độc đáo, màu sắc sặc sỡ và vẻ đẹp hùng vĩ. Hay còn gọi là Thất Thải Đan hà – đây là một dạng địa mạo độc đáo với tùng vệt màu sắc được in trên vách núi nhưng những mảnh lụa rực rỡ vắt qua bầu trời xanh ngắt của Con Đường Tơ Lụa huyền thoại.\nĐây chính là loại hình địa mạo riêng có ở một số địa phương của Trung Quốc, được UNESCO vinh danh là di sản thiên nhiên thế giới năm 2010. Nằm ở tỉnh Cam Túc, miền tây bắc Trung Quốc, công viên địa chất Trương Dịch với địa mạo Đan Hà nổi bật và độc đáo, được UNESCO công nhận là công viên địa chất thế giới năm 2020.\nHồ Thanh Hải – trái tim của cao nguyên và tỉnh Thanh Hải: còn được gọi là Kokonor và Hồ Thanh Hải, là hồ nước mặn và hồ nội địa lớn nhất Trung Quốc với vẻ đẹp thiên nhiên quyến rũ và vô số loài chim. Hẳng năm vào mùa hè khaongr tháng 7 tháng 8 những cánh đồng hoa cải dầu rực rỡ sắc vàng nở bung rực rỡ với những cánh hoa đung đưa trong con gió dịu mát của hồ. Khu thắng cảnh còn có những ngọn núi phủ tuyết ngoạn mục (bao gồm cả Dãy núi Tangula và Dãy núi Côn Luân) bao quanh cũng như sự pha trộn văn hóa của một số sắc dân thiểu số Trung Quốc (như Tây Tạng, Mông Cổ và Hồi).\nBuổi tối: Đoàn nghỉ ngơi tại Thanh Hải và dùng cơm tối với những món ăn địa phương vô cùng đặc sắc."
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: THANH HẢI – HỒ MUỐI SÁT NHĨ HÃN (QARHAN) – CÁCH NHĨ MỘC",
        "title": "THANH HẢI – HỒ MUỐI SÁT NHĨ HÃN (QARHAN) – CÁCH NHĨ MỘC",
        "detail": "Buổi Sáng: Sau bữa sáng tại khách sạn đoàn trả phòng và đến với thành phố lớn thứ 2 tại tỉnh Thanh Hải và vượt qua các con đèo trên 4000m so với mực nước biển cùng cảnh quan vô cùng ngoạn mục của của ngõ Hymalaya.\nHồ Muối Sát Nhĩ Hãn (Qarhan): Hồ muối lớn thứ hai thế giới và lớn nhất Trung Quốc với cả muối rắn và muối lỏng. Lớp phủ muối dày 15-18 mét tạo thành một cây cầu muối tự nhiên. Tổng chiều dài của cây cầu là 32 km, có thể đạt tới 10 ngàn zhang. Con đường bằng phẳng và trơn tru trên cầu, và cảnh quan của núi và hồ, đẹp đến mức có thể được gọi là \"vô song trên thế giới\".\nHoa Muối Ngàn Đảo: Đây là một công trình được kết tinh từ muối tạo ra một bông hoa khổng lồ giữa một hồ muối xanh ngắt màu ngọc bích. Công trình như một đài phun nước tự nhien tạo ra những dòng thác của muối trắng xoá như lạc vào chốn bồng lai.\nBuổi tối: Ăn tối và Nghỉ đêm tại Cách Nhĩ Mộc.\nCách Nhĩ Mộc: Golmud là một thành phố cấp huyện thuộc Châu tự trị dân tộc Mông Cổ và Tạng Hải Tây , tỉnh Thanh Hải. Nó nằm ở trung tâm và một phần phía tây của tỉnh Thanh Hải và vùng đất phía sau của cao nguyên Thanh Hải-Tây Tạng . Địa hình trong khu vực này rất phức tạp và có thể được chia thành hai phần: cao nguyên lưu vực và chân phía bắc của dãy núi Tanggula. Vào thời kỳ đầu, bộ tộc Thổ Dục Hồn của người Liêu Đông Tiên Ti di chuyển đến vùng Cam Túc-Thanh Hải và thành lập Vương quốc Thổ Dục Hồn, một chính phủ liên minh tập trung vào người Tiên Ti và các thủ lĩnh của nhiều người Khương. Khu vực Golmud trở thành lãnh thổ của Vương quốc Tuyuhun. Vào năm 663 sau Công nguyên , Thổ Phiên đã tiêu diệt Vương quốc Tuyuhun và chiếm đóng lãnh thổ cũ của Tuyuhun. Từ đó trở đi, những người du mục ở khu vực Golmud dần dần trở thành người Tây Tạng ."
      },
      {
        "day": "NGÀY 6",
        "fullDayTitle": "NGÀY 6: CÁCH NHĨ MỘC – HỒ MUỐI CHAKA – THỊ TRẤN CHAKA",
        "title": "CÁCH NHĨ MỘC – HỒ MUỐI CHAKA – THỊ TRẤN CHAKA",
        "detail": "Buổi Sáng: Ăn sáng tại khách sạn và khỏi hành về lại thị trấn Chaka trên con đường tuyệt đẹp quốc lộ G6 và G109.\nHồ Muối Chaka Đây là một mỏ muối quan trọng ở Thanh Hải với nguồn tài nguyên muối dồi dào. Với làn nước trong xanh như pha lê, lớp muối trắng và những ngọn núi phủ tuyết xung quanh, quang cảnh thiên đường thu hút hàng triệu du khách và nhiếp ảnh gia đến đây mỗi năm. Các danh lam thắng cảnh xung quanh hồ bao gồm Khu danh lam thắng cảnh Hồ muối Chaka và Sky No.1 mới phát triển ở bờ hồ phía tây.\nChuyến xe lửa lên bầu trời: Một hành trình thật sự đáng yêu cho chuyến xe lửa chầm chậm băng qua mặt hồ muối đến với những cảnh sắc đặc trưng với những áng mây trắng bồng bềnh trên nền trời xanh thẳm.\nHồ muối Chaka cũng nổi tiếng với các tác phẩm điêu khắc muối, và các tác phẩm điêu khắc tiêu biểu nhất là Tác phẩm điêu khắc muối của Thành Cát Tư Hãn , Tác phẩm điêu khắc muối của Dân tộc Tĩnh Pha , Tác phẩm điêu khắc muối của Cuộc gặp gỡ tại Hồ Ngọc và Tác phẩm điêu khắc muối của Ngô Tiên . Những tác phẩm điêu khắc này thật tráng lệ, thể hiện sự tôn trọng và vinh danh nhà lãnh đạo vĩ đại của Mông Cổ \"Thành Cát Tư Hãn\", các nhóm dân tộc Tĩnh Pha.\nBuổi tối: Quý khách nhận phòng và nghỉ ngơi tại khách sạn"
      },
      {
        "day": "NGÀY 7",
        "fullDayTitle": "NGÀY 7: CHAKA – TU VIỆN KUMBUM – BẢO TÀNG TÂY TẠNG – TÂY NINH",
        "title": "CHAKA – TU VIỆN KUMBUM – BẢO TÀNG TÂY TẠNG – TÂY NINH",
        "detail": "Buổi sáng: Quý khách dùng bữa sáng tại khách sạn và trả phòng về lại với thành phố Tây Ninh - tỉnh lị của tỉnh Thanh Hải\nTu viện Kumbum: được thành lập vào năm 1583 trong một thung lũng hẹp gần làng Lusar ở vùng Amdo lịch sử của Tây Tạng. Tu viện Kumbum là nơi ở của hơn 800 nhà sư và là một quần thể kiến ​​trúc tuyệt đẹp, rực rỡ sắc màu. Đây chính là nơi sinh của đại sư Tông Khách Ba – vị tổ sư của phái Gelungpa (Phaí Mũ Vàng) và là nhà cải cách Phật Giáo Mật Tông Kim Cương Thừa vô cùng nổi tiếng.\nBảo tàng văn hoá Tây Tạng – Thanh Hải: Dân tộc Tạng tại Thanh Hải là một nhóm dân tốc cốt yếu với lối sông du mục và văn hoá lâu đời. Nay chính là nơi lưu giữ và trưng bày những giá trị vô cùng rực rỡ của đời sống du mục và sự giao thoa văn hoá giữa các nhóm dân tộc. Điểm nhấn của bảo tàng là \"Thangka vĩ đại\" dài 618 mét, không có bức tranh nào sánh bằng trên thế giới. Cần đến ba mươi bảy năm để 400 học sinh và nghệ sĩ tái hiện toàn bộ Phật giáo: các vị thần, biểu tượng, lịch sử và giáo lý của đạo Phật. Chỉ riêng tác phẩm này cũng xứng đáng được ghé thăm Tây Ninh.\nPhố Hồi Giáo Tây Ninh Thanh Hải: Thanh Hải còn là nơi sinh sống của dân tộc Hồi với các Thánh Đường Hồi Giáo vô cùng tráng lệ, xung quanh đó chính là các con phố mang đậm tính chất văn hoá với những món ăn đường phố vô cùng hấp dẫn. Quý khách có cơ hội thưởng thức ẩm thực địa phương như: cưu nướng xiêng, bánh bao thịt dê nướng, mì bò sate,…\nBuổi tối: Đoàn về đến Tây Ninh và nhận phòng nghỉ ngơi tại khách sạn sau một chặng đi dài."
      },
      {
        "day": "NGÀY 8",
        "fullDayTitle": "NGÀY 8: TÂY NINH – TP HCM",
        "title": "TÂY NINH – TP HCM",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng tại khách sạn và nghỉ ngơi cho chuyến hành trình về lại Việt Nam.\nBuổi Trưa: Đoàn ra trở lại sân bay Tào Gia Bảo – Tây Ninh và đáp chuyến bay về lại Thành Phố Hồ Chí Minh.\nChuyến bay dự kiến:\nChuyến bay nội địa: CZ3250 XNNCAN 11:10 – 14:35\nChuyến bay quốc tế: CZ367 CANSGN 20:15 – 22:00\nBuổi Tối: Đoàn về đến Việt Nam, HDV chào tạm biệt và hẹn gặp lại quý khách lần sau, chúc cho cả đoàn luôn dồi dào sức khoẻ, thật nhiều niềm vui và hạnh phúc !!!"
      }
    ],
    "inclusions": [
      "Vé máy bay khứ hồiChuyến đi: TP HCM –Thành Đô – Đôn Hoàng",
      "Chuyến về: Tây Ninh –Quảng Châu – TPHCM",
      "Visa nhập cảnh TRUNG QUỐC theo đoàn",
      "Giấy thông hành",
      "Xe di chuyển theo hành trình",
      "Lưu trú: 02 khách/phòng (phòng Twin/Double). Phòng được được bố trí khi lẻ nam, nữ.Khách sạn 4 sao và 3 sao tại hồ Thanh Hải",
      "Ăn uống:Bữa sáng điểm tâm chọn món và buffet sáng tại khách sạn.",
      "Các bữa ăn chính Set menu",
      "Nước uống 2 chai/ngày.",
      "Hướng dẫn viên/Trưởng đoàn công ty Goholic.",
      "HDV địa phương tại các điểm đến",
      "Vé tham quan du lịch trọn gói theo chương trình.",
      "Tiệc nướng sa mạc",
      "Bảo hiểm du lịch trọn gói",
      "Nước suối hằng ngày (02 chai / 1 khách / 1 ngày)",
      "Vé vào Bảo tàng và tất cả các vé thăm quan thắng cảnh",
      "Quà tặng lưu niệm"
    ],
    "exclusions": [
      "Chi phí các dịch vụ không được liệt kê trong phần Bao gồm.",
      "Phụ thu phòng đơn: (Áp dụng cho khách yêu cầu ở riêng 1 phòng)",
      "VAT",
      "Các chi phí cá nhân",
      "Tiền Tip cho Tour Leader, Hướng dẫn viên và Lái xe (tối thiểu 56USD/khách/tour)",
      "Phụ thu phòng đơn 15.000.000 VNĐ/khách – nếu quý khách có nhu cầu ngủ phòng riêng hoặc không có khách ghép chung."
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-13",
    "code": "GH-13",
    "title": "PAKISTAN IRAN – CON ĐƯỜNG TƠ LỤA & CON ĐƯỜNG DI SẢN BA TƯ",
    "url": "https://goholictravel.com/tour/pakistan-iran/",
    "country": "iran",
    "countryName": "Iran & Pakistan",
    "region": "iran",
    "departureFrom": "TP.HCM/HÀ NỘI",
    "startDate": "2025-10-19",
    "departureSchedule": "2025-10-19",
    "duration": "16 ngày 15 đêm",
    "durationCategory": "7-days-tour",
    "month": "thang-10,thang-03,thang-04",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "TOUR IRAN & PAKISTAN",
    "badgeColor": "bg-[#f8af22]",
    "isFeatured": false,
    "price": 117000000,
    "priceDisplay": "117.000.000đ",
    "originalPrice": 131000000,
    "rating": 4.9,
    "reviewsCount": 211,
    "image": "https://goholictravel.com/wp-content/uploads/2025/07/web-pakistan-1200x675.jpg",
    "gallery": [
      "https://goholictravel.com/wp-content/uploads/2025/07/z6768226397744_82ed3a77e0806357205ff9f8ca448342.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/07/z6768226497497_f9eeb5d68bc0ad612ba8afb5a68ef7b3.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/07/z6768226497383_30fd4b044eb9e14c8683e53a26bf5899.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/07/z6768226450559_ea858698be80b3fe4c9c4f6a7d11528f.jpg"
    ],
    "headMeta": [
      "16 ngày 15 đêm",
      "Nhóm: 10 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Hành trình liên quốc gia: Pakistan – Iran.",
    "introText": "Hành trình liên quốc gia: Pakistan – Iran.\n\nTham quan pháo đài Baltit, hồ Attabad xanh ngọc, sống cùng người Hunza trường thọ.\n\nIran: khám phá Tehran, Persepolis – thủ đô huyền thoại của Đế chế Ba Tư, Isfahan (nửa thế giới), Shiraz (nhà thờ Hồi giáo hồng), Yazd (trung tâm Zoroastrian), Kashan, Pasargadae,…\n\nThăm di sản UNESCO, bảo tàng thảm Ba Tư, đền lửa, lăng mộ Cyrus Đại đế.",
    "highlights": [
      "Ngắm hoa anh đào Hunza, khám phá đèo Karakoram, cầu treo Hussaini."
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1: HÀ NỘI/HỒ CHÍ MINH – ISLAMABAD",
        "title": "HÀ NỘI/HỒ CHÍ MINH – ISLAMABAD",
        "detail": "HDV đón quý khách tại Trung Tâm Nhà Hát Lớn Hà Nội/ Tân Sơn Nhất\nĐáp chuyến bay đi Islamabad, chuyến bay transit ở Bangkok, Thailand.\nChuyến bay HANBKK lúc 10:35- 12:30\nChuyến bay BKKISB lúc 18:45 – 22:20\nQuý khách dùng bữa sáng và bữa tối trên máy bay.\nDùng bữa trưa trong khu vực nhà hàng phục vụ tại sân bay Thailand\n22:30: Máy bay hạ cánh xuống thủ đô Islamabad, Pakistan.\nXe và HDV đón đoàn về khách sạn, nghỉ đêm tại khách sạn 3* khu vực gần sân bay."
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: ISLAMABAD – GILGIT - DI TÍCH CON ĐƯỜNG TƠ LỤA – THUNG LŨNG HUNZA",
        "title": "ISLAMABAD – GILGIT - DI TÍCH CON ĐƯỜNG TƠ LỤA – THUNG LŨNG HUNZA",
        "detail": "Sáng sớm: Đoàn sẽ khởi hành đi Gilgit bằng máy bay nội địa Pakistan.\nGilgit là cửa ngõ để vào vùng Hunza và phía Bắc Pakistan.\nGhi chú: Nếu chuyến bay bị huỷ do thời tiết xấu hoặc bất khả kháng, Goholic sẽ chủ động trung chuyển quý khách bằng đường bộ lên Hunza. Các điểm tham quan khác sẽ được bố trí bổ sung phù hợp và hấp dẫn nhất.\nKhởi hành vào thung lũng Gojal (phía trên Hunza), Dọc đường, đoàn sẽ dừng tham quan ở điểm giao nhau của các lục địa Continental collides, di chỉ khảo cổ Con đường tơ lụa Ancient Silk Road, Rakaposhi viewpoint.\nĐoàn đến Điểm quan sát ngọn núi Rakaposhi(cao hơn 7000m). Rakaposhinằm trong dãy Karakoram, cao 7788m so với mực nước biển, là núi cao thứ 27 trên thế giới và thứ12 ởPakistan. Rakaposhi có nghĩa là Núi tuyết trắng theo tiếng Pakistan, có còn có tên khác là Dumani nghĩa là Mother of Mist” hoặc “Mother of Clouds”.\nSau khi ăn trưa, đoàn di chuyển tới Karimabad. Tại đây, đoàn sẽ ở tại khách sạn có view đẹp nhất khu vực là khách sạn Eagle’s Nest ở đỉnh Duiker. Ngắm hoàng hôn trên đỉnh Duiker.\nĂn tối và nghỉ đêm ở khu vực Hunza."
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: NGẮM HOA ANH ĐÀO VÀ THĂM CÁC DI TÍCH, PHÁO ĐÀI Ở THUNG LŨNG HUNZ",
        "title": "NGẮM HOA ANH ĐÀO VÀ THĂM CÁC DI TÍCH, PHÁO ĐÀI Ở THUNG LŨNG HUNZ",
        "detail": "Ngày hôm nay, đoàn sẽ di chuyển lên vùng Thượng Hunza, đoàn sẽ dừng tham quan ở Hunza Ancient Rock và hồ Attabad Lake với màu xanh mê hoặc.\nBắt đầu khám phá Hunza và khu vực lân cận của Hunza.\nTham quan Pháo đài Baltit nằm trên ngọn đồi nhỏ ngay phía trước Karimabad, được thành lập vào thế kỷ thứ 8 CN, nó đã được UNESCO Thế giới công nhận là di sản văn hoá thế giới từ năm 2004.\nTham quan Pháo đài Altit cũng là một pháo đài khác ở Hunza.\nToạ lạc trên một đồi cao, được bao bọc bởi con song Indus rộng lớn. Đây là nơi phòng thủ của do các vị Sultan (người đứng đầu) xây nên để trấn thủ vùng đất Hunza ngày xưa.\nMùa hoa anh đào ở Thung lũng Nagar – bao gồm 7 ngôi làng trù phú, màu mỡ được thiên nhiên nuôi dưỡng, bao bọc bên những dãy núi trùng điệp. Hopar Valley nằm ở độ cao khoảng 2.438m, nổi tiếng với nhiều địa danh như Rush Lake, đỉnh Bwaltar, Kapldongs, đỉnh Shaltar, Hispar Muztagh, Spantik, Barpu, Bualtar và sông băng vĩnh cửu. Vì đa dạng địa hình và phù hợp để khám phá nên nơi này thường xuyên đón du khách tới chiêm ngưỡng khung cảnh tuyệt tác thiên nhiên ban tặng.\nMùa hoa anh đào ở Thung lũng Hopper, thuộc thung lũng Nagar – nơi nổi tiếng với dòng sông Băng Hopper trắng xoá và hùng vĩ dưới chân ngọn Spantik..\nĂn tối và nghỉ đêm ở Hunza."
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: RẶNG PASSU – CAO TỐC KARAKORAM",
        "title": "RẶNG PASSU – CAO TỐC KARAKORAM",
        "detail": "Hôm nay là ngày tiến vào cao tốc Karakoram và các thắng cảnh ven cao tốc Karakoram. Đường cao tốc Karakoram là đường quốc lộ dài 1.300 km kéo dài từ Hasan Abdal ở tỉnh Punjab của Pakistan đến đèo Khunjerab ở Gilgit-Baltistan.\nMùa hoa anh đào ở Passu cũng đẹp không kém Hunza\nDạo chơi ở cầu treo Hussani Cầu treo Hussaini bắt qua sông Borith xinh đẹp, vì là cầu dây văng bằng dây thừng khá lỏng lẻo nên khi đi qua nó sẽ lắc theo chiều gió. Có tuổi thọ hơn 100 tuổi, Cầu treo Hussaini được làm từ dây thừng và ván gỗ.\nNgắm dãy núi hùng vĩ Passu Coin soi bóng xuống dòng sông Borith.\nChiều: Ghé trường học địa phương ở Passu, chụp hình và tặng quà với các em nhỏ ở Passu.\nThăm hỏi bí quyết “sống lâu” của dân tộc ở Hunza – được xem là dân tộc trường thọ nhất trên thế giới.\nGhé Vườn Táo/Vườn Lê/Vườn Nho (theo mùa) , hái trái cây và thưởng thức hoa quả organic địa phương.\nĂn tối và nghỉ đêm ở Passu"
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: PASSU – BESHAM",
        "title": "PASSU – BESHAM",
        "detail": "Hôm nay, cả đoàn sẽ chia tay Hunza để về Besham.\nSau khi ăn sáng, khởi hành về BESHAM.\nTrên đường ghé thung lũng và làng Palas, Kohistan có động vật hoang dã đáng kinh ngạc, đây là vùng còn khá khoang sơ và là khu bảo tồn nhiều động vật quý hiếm ở Pakistan như Hươu Himalayas, lợn rừng Himalayas...\nChiều tối đến khách sạn.\nNghỉ đêm ở Besham."
      },
      {
        "day": "NGÀY 6",
        "fullDayTitle": "NGÀY 6: BESHAM – ISLAMABAD",
        "title": "BESHAM – ISLAMABAD",
        "detail": "Sau bữa sáng, đoàn tiếp tục khởi hành về Islamabad.\nIslamabad được thành lập vào thập niên 1960, sau đó đóng vai trò là thủ đô của Pakistan, thay thế cho thủ đô cũ Karachi. Kể từ khi thành lập, Islamabad liên tục thu hút nhiều dân cư trên khắp lãnh thổ Pakistan, khiến cho thành phố trở thành một trong những vùng hiện đại nhất của quốc gia này.\nThủ đô của Pakistan có dân số 2,01 triệu người. Islamabad là thành phố lớn thứ 9 của Pakistan. Sự lộng lẫy của Islamabad, có thể cạnh tranh với các thủ đô khác trên thế giới. Islamabad rất phát triển và điều đó được nhìn thấy từ mọi khía cạnh của thành phố. Islamabad nổi tiếng là thành phố xanh, sạch, mát mẻ, yên bình, tráng lệ và đô thị hóa nhất ở Pakistan.\nTham quan bảo tàng Texila ở Islamabad\nDùng bữa tối kiểu nhà hàng người Hoa ở Islamabd."
      },
      {
        "day": "NGÀY 7",
        "fullDayTitle": "NGÀY 7: KHÁM PHÁ THỦ ĐÔ ISLAMABAD",
        "title": "KHÁM PHÁ THỦ ĐÔ ISLAMABAD",
        "detail": "Thăm nhà thờ Hồi giáo Shah Faisal là một nhà thờ Hồi giáo tại Islamabad, Pakistan. Đây là nhà thờ Hồi giáo lớn nhất Nam Á và là một trong những nhà thờ Hồi giáo lớn nhất thế giới, công trình tương tự xếp thứ nhì là Nhà thờ Hồi giáo Hassan II ở Casablanca, Maroc.\nTự do mua sắm tại trung tâm thương mại gần sân bay.\nDùng bữa tối chia tay và đưa đoàn ra sân bay.Chia tay Pakistan –đất nước xinh đẹp.\nRa sân bay để đáp chuyến bay khuya đi Iran.\nChuyến bay dự kiến transit ở Doha.\nĐến Iran vào ngày hôm sau (ngày thứ 08 trong hành trình)"
      },
      {
        "day": "NGÀY 8",
        "fullDayTitle": "NGÀY 8: ISLAMABAD - KHÁM PHÁ TEHRAN",
        "title": "ISLAMABAD - KHÁM PHÁ TEHRAN",
        "detail": "Sáng: Đến phi trường Imam Khomeini,\nHDV đưa đoàn về khách sạn – nghỉ ngơi tại Tehran.\nTham quan Di sản Thế giới, Cung điện Golestan xa hoa (Một Di sản Thế giới đã được UNESCO công nhận). Được xây dựng dưới triều đại Qajar, lên nắm quyền vào cuối những năm 1700, khu phức hợp có tường bao quanh tuyệt đẹp này tập trung vào một khu vườn kiểng với những hồ bơi yên tĩnh. Nhiều yếu tố mà bạn sẽ ngưỡng mộ ngày nay, có từ thế kỷ 19 khi các kiến trúc sư và nghệ nhân Qajari địa phương đang tìm cách kết hợp phong cách Ba Tư truyền thống với các yếu tố có nguồn gốc phương Tây và Nga. Các tòa nhà cung điện là một trong những tòa nhà lâu đời nhất ở Tehran hiện đại và chúng vẫn được coi là thành tựu đỉnh cao của thời đại Qajar.\nDạo quanh Tehran Bazaar, cách Cung điện Golestan vài bước chân. Đi dọc theo con đường Bazaar, chúng tôi đến Timche Akbarian. Timche Akbarian có từ thời Qajar (gần 260 năm tuổi) khi mục đích chính của nó là để đổi tiền. Sau đó nó được phát triển thành ngân hàng đầu tiên của Iran và được điều hành chủ yếu bởi những người Do Thái, những cư dân nổi tiếng của khu phố Oudlajan. Cho đến ngày nay, không có ngân hàng hay quầy trao đổi tiền nhưng nơi này đã được khôi phục một cách tinh vi thành Dizi Sara và quán trà, nơi có trà trong những chiếc cốc mỏng và cùng với mía.\nThưởng thức món đặc sản Iran Dizi chắc chắn là một trong những món ăn truyền thống và ngon nhất của Iran. Ăn nó có một phong tục đặc biệt. Dizi là một món hầm của người Lưỡng Hà thường được làm với thịt cừu, đậu gà, đậu trắng, hành tây, khoai tây, cà chua, nghệ và chanh khô. Tất cả mọi thứ được trộn và nấu cùng nhau.\nTham quan Bảo tàng Quốc gia Iran, nơi bạn có thể nhìn thấy những vật phẩm lịch sử tuyệt vời từ 5000 năm trước Công nguyên cho đến sự ra đời của Hồi giáo ở Iran, cho thấy một lịch sử ngắn gọn của đất nước chúng ta.\nBảo tàng Thảm Ba Tư rực rỡ được sưu tầm từ khắp nơi trên đất nước và đại diện cho nghệ thuật và kỹ năng phi thường trong nhiều thế kỷ.\nBữa ăn: 03 bữa | Khách sạn: 4*"
      },
      {
        "day": "NGÀY 9",
        "fullDayTitle": "NGÀY 9: TEHRAN – KASHAN – CỐ ĐÔ BA TƯ ISFAHAN",
        "title": "TEHRAN – KASHAN – CỐ ĐÔ BA TƯ ISFAHAN",
        "detail": "Khởi hành đi Kashan, một thị trấn ban đầu nổi tiếng với hàng dệt may và sản xuất gốm sứ, nhưng giờ đây được biết đến nhiều hơn với Fin Garden, khu chợ rộng lớn và các cửa hàng hammam truyền thống\nVườn Fin (Di sản Thế giới được UNESCO công nhận) là điểm dừng chân đầu tiên của chúng tôi; một khu vườn Ba Tư thư giãn và ấn tượng về thị giác với các kênh nước đều đi qua một gian hàng trung tâm. Ngoài ra còn có cơ hội mua một ít nước hoa hồng, một đặc sản địa phương, bên ngoài địa điểm.\nSau đó, bạn sẽ đến thăm Nhà truyền thống Boroujerdi.Nó được xây dựng cách đây khoảng 130 năm dưới triều đại Qajar (1857) bởi kiến trúc sư nổi tiếng người Iran Ustad Ali Maryam. Chủ sở hữu là Haj Seyed Hasan Natanzi, một thương gia nổi tiếng, người hầu hết giao dịch với người dân thành phố Boroujerd. Đó là lý do tại sao ngôi nhà được gọi là Boroujerd’s House.\nGoholic mời bạn thăm khu vực chợ, một khu phức hợp rộng rãi với đầy đủ các phòng tắm hammam và nhà thờ Hồi giáo; một phòng tắm hammam đã được chuyển đổi thành một quán trà truyền thống, nơi chúng tôi sẽ dừng chân cho những ai cần nghỉ ngơi mua sắm.\nTiếp tục hành trình đến Isfahan, là thủ đô của Đế chế Safavid vào thế kỷ 17, Isfahan là một trong những thành phố vĩ đại nhất thế giới - nổi bật về mặt kiến trúc, giàu có ngoài sức tưởng tượng và quyền lực chính trị với những người Châu Âu, Ottoman, Ấn Độ và Trung Quốc đến triều đình - trái tim của một Ba Tư rộng lớn Đế chế trải dài từ sông Euphrates ở Iraq ngày nay đến sông Oxus ở Afghanistan. Thật vậy, sự hùng vĩ của nó đã truyền cảm hứng cho câu tục ngữ có vần, Isfahan nesf e jahan (Isfahan là một nửa của Thế giới).\nBữa ăn: 03 bữa | Khách sạn: 4* tại Isfahan"
      },
      {
        "day": "NGÀY 10",
        "fullDayTitle": "NGÀY 10: KHÁM PHÁ CỐ ĐÔ BA TƯ ISFAHAN",
        "title": "KHÁM PHÁ CỐ ĐÔ BA TƯ ISFAHAN",
        "detail": "Thăm Quảng trường Imam.\nĐịa điểm có từ thế kỷ 17 này là một trong những không gian công cộng lớn nhất trên thế giới. Tại quảng trường này, bạn sẽ tham quan Nhà thờ Hồi giáo Shah thế kỷ 17, được tôn kính như một kiệt tác của kiến trúc Hồi giáo và dễ dàng được nhận ra bởi công trình bằng ngói tráng lệ cũng như những mái vòm và tháp cao vút. Bạn cũng sẽ tham quan Nhà thờ Hồi giáo Sheikh Lotfollah, còn được gọi là Nhà thờ Hồi giáo Quý bà, vì nó được xây dựng cho hậu cung của Shah, nổi tiếng với trần nhà hình vòm màu sắc rực rỡ, nơi ánh sáng tạo ra hình ảnh của một con công. Trong Cung điện Ali Qapu, bạn sẽ ngạc nhiên trước những căn phòng âm nhạc tuyệt đẹp và ban công nơi các vị vua Safavid ngồi để thưởng thức các trận đấu polo đang diễn ra ở quảng trường bên dưới.\nKhu chợ thủ công Qeisarieh Bazaar. Với hàng trăm nhà cung cấp địa phương chuyên về nghệ thuật và thủ công truyền thống, đây là một nơi tuyệt vời để mua sắm đồ gốm, men, đồ trang sức và các trò chơi trên bàn được khảm tinh xảo.\nCung điện Chehel Sotun. Nằm trong một công viên có cảnh quan và rừng cây trước hồ bơi phản chiếu yên tĩnh, gian hàng duyên dáng này được Shah Abbas II xây dựng để giải trí và chiêu đãi triều đình. Bước qua một cổng vòm với hai mươi cột gỗ mảnh mai, bạn sẽ khám phá những sảnh cao vút được tô điểm bằng những bức bích họa, tranh vẽ và tranh khảm; Sảnh Gương đặc biệt ngoạn mục.\nTại khu phố Armenia của thành phố, bạn sẽ tìm hiểu sâu hơn về lịch sử phức tạp của khu vực khi đến thăm một số nhà thờ, bao gồm cả Nhà thờ Vank thế kỷ 17 với nội thất được trang trí lộng lẫy và sự pha trộn độc đáo giữa các yếu tố kiến trúc Hồi giáo và Châu Âu."
      },
      {
        "day": "NGÀY 11",
        "fullDayTitle": "NGÀY 11: ISFAHAN – YAZD",
        "title": "ISFAHAN – YAZD",
        "detail": "Ghé thăm cầu cổ Shahrestan có từ thế kỷ 14 gợi lên những cầu máng dẫn nước vĩ đại nhất của La Mã cổ đại và là cây cầu lâu đời nhất ở Iran.\nChia tay Isfahan, khởi hành đi Na’in, một cộng đồng cổ có nguồn gốc từ thế kỷ thứ 8. Chúng tôi sẽ đến thăm nhà thờ Hồi giáo Jame của Naien. Hành trình vượt biển của bạn tiếp tục đến thị trấn nhỏ Meybod, nơi ấn tượng đầu tiên của bạn có thể là kiến trúc đơn sắc nổi bật bằng gạch sa mạc. Nhưng nằm dọc theo một tuyến đường thương mại cổ xưa, Meybod cũng cung cấp một số địa điểm hấp dẫn để tham quan bao gồm cả đoàn lữ hành của nó. Được xây dựng theo phong cách Safavid điển hình, nhà trọ cổ trên sa mạc này có hiên, lối đi rợp bóng mát và gần 100 phòng - một số phòng hiện được sử dụng làm xưởng thủ công. Tại nhà băng địa phương, bạn sẽ tìm hiểu về cấu trúc bằng đất sét dày và khoang ngầm cho phép cư dân địa phương có đá và thực phẩm dự trữ trước khi làm lạnh - ngay cả trong mùa hè nắng nóng gay gắt của sa mạc!\nTiếp tục đến Yazd – ăn tối và nghỉ đêm taị Yard."
      },
      {
        "day": "NGÀY 12",
        "fullDayTitle": "NGÀY 12: KHÁM PHÁ YAZD",
        "title": "KHÁM PHÁ YAZD",
        "detail": "Yazd là một trong những thị trấn có người sinh sống liên tục lâu đời nhất của Iran. Hình bóng của nó được chấm phá bởi những ngọn tháp và những tháp gió được thiết kế khéo léo để đón những làn gió sa mạc thổi vào những ngôi nhà mát mẻ trong những tháng hè nóng nực. Yazd cũng là trung tâm của cộng đồng Zoroastrian của Iran, là nơi bạn sẽ bắt đầu chuyến tham quan trong ngày.\nTại Tower of Silence, bạn sẽ tìm hiểu về một trong những truyền thống của tôn giáo tiền Hồi giáo cổ xưa này. Cho đến giữa những năm 1900, người chết được vận chuyển đến tòa tháp này, nơi họ bị bỏ lại để phân hủy và bị chim ăn thịt. Truyền thống Zoroastrian coi thi thể người quá cố là “ô uế” và quá trình hóa thân này ngăn cản sự tiếp xúc với lửa hoặc đất - cả hai đều được coi là linh thiêng.\nTham quan đền lửa Zoroastrian vẫn còn hoạt động, bạn sẽ thấy một ngọn lửa được cho là đã cháy trong 1.500 năm qua. Đây là một địa điểm hành hương quan trọng cho các tín đồ và tại đây, hướng dẫn viên chuyên nghiệp của chúng tôi sẽ cung cấp thêm thông tin chi tiết về một trong những tôn giáo độc thần lâu đời nhất trên thế giới.\nĐến Quảng trường Amir Chakhmaq, bạn sẽ thấy một Hussainiya rất ấn tượng - một hội trường tổ chức các buổi lễ tưởng niệm người Shia. Với ba tầng của hốc tường, tất cả đều cân đối hoàn hảo, mặt tiền của nó là một trong những địa danh được chụp ảnh nhiều nhất của thành phố.\nĐịa điểm tiếp theo để tham quan là Nhà thờ Hồi giáo Thứ Sáu, được xây dựng vào năm 1324, nơi bạn có thể ngắm nhìn những tháp cao nhất trong cả nước.\nTrong số nhiều di tích lịch sử khác được nhìn thấy ở Yazd là những ngôi nhà cổ xinh đẹp và Vườn Dowlat Abad. Đứng bên hồ bơi phản chiếu dài của khu vườn, bạn sẽ được rợp bóng mát bởi những cây bách cổ thụ. Trước mắt bạn là một gian hàng hình lục giác có từ thế kỷ 18 với cửa sổ kính màu tuyệt đẹp và tháp gió duyên dáng - cao nhất ở Iran. Xung quanh là cây ăn quả ra hoa và các loại cây cảnh, cây xanh khác.\nBữa ăn: 03 bữa | Khách sạn: 3-4* tại Isfahan"
      },
      {
        "day": "NGÀY 13",
        "fullDayTitle": "NGÀY 13: YAZD – SHIRAZ",
        "title": "YAZD – SHIRAZ",
        "detail": "Hôm nay, chúng tôi có một ngày lái xe để đến được điểm đến của chúng tôi là Shiraz; Tốt hơn hết là bạn nên dự trữ những quả chà là và hạt hồ trăn mua ở địa phương và dễ tìm thấy cho chuyến hành trình.\nĐầu tiên, bạn sẽ đến thăm Pasargadae, Di sản Thế giới được UNESCO công nhận, Lăng mộ của Đại đế Cyrus và là thủ đô cũ của Đế chế Achaemenid. Chúng tôi sẽ dành một chút thời gian để khám phá trang web và mặc dù không nổi bật như Persepolis, có một góc nhìn tuyệt vời để chúng tôi có thể nhìn bao quát khu vực này và khu vực xung quanh.\nTừ đây, Đoàn sẽ khởi hành đến Naqsh-e-Rustam, Necropolis nơi chôn cất Darius và những người kế vị của ông. Được chạm khắc vào một bên vách đá, địa điểm này thật phi thường về độ lớn và tham vọng tuyệt đối và không gây thất vọng ngay cả sau Persepolis đầy ấn tượng.\nSau đó, Đoàn sẽ có một số điểm dừng trên đường đến thăm Thành phố huyền thoại Persepolis, thủ đô cũ của Darius Đại đế được thành lập vào năm 512 trước Công nguyên. Không có công trình xây dựng nào ấn tượng hơn trong thế giới cổ đại hơn Persepolis, có lẽ ngoại trừ Karnak ở Ai Cập. Darius đã xây dựng sân thượng, Apadana (đại sảnh dành cho khán giả), Tachana (cung điện), và những bậc thang Tượng đài; con trai ông, Xerxes, đã thêm Hậu cung và Đại sảnh 100 cột. Alexander Đại đế tiến vào Persepolis vào tháng 1 năm 330 trước Công nguyên và sau đó thực hiện một hành động tàn phá dã man phi thường mà ngày nay vẫn khiến các nhà sử học hoang mang, đốt cháy thành phố hùng vĩ xuống đất. Mặc dù vẫn còn bóng dáng trước đây của nó, những cây cột cao vút, bậc thang và tác phẩm điêu khắc của Persepolis vẫn còn, nhưng có lẽ ấn tượng nhất là những bức phù điêu dọc địa điểm, kể về câu chuyện của các thống đốc và vua cổ đại đã đến Persepolis để tỏ lòng thành kính với Các hoàng đế Ba Tư.\nTiếp tục đến Shiraz và nhận phòng khách sạn, nghỉ đêm ở Shiraz.\nBữa ăn: 03 bữa | Khách sạn: 3-4* tại Shiraz."
      },
      {
        "day": "NGÀY 14",
        "fullDayTitle": "NGÀY 14: KHÁM PHÁ SHIRAZ, VỀ LẠI TEHRAN",
        "title": "KHÁM PHÁ SHIRAZ, VỀ LẠI TEHRAN",
        "detail": "Sau bữa sáng, bạn sẽ tham quan Nhà thờ Hồi giáo Nasir-al-Mulk (Nhà thờ Hồi giáo màu hồng), cách Vakil Bazaar vài bước chân. Nó được xây dựng theo lệnh của Mirza Hassan Ali Nasir-al Mulk (một trong những lãnh chúa của Vương triều Qajar); mất 12 năm để hoàn thành nó vào năm 1888. Nội thất của nó cho thấy một kiệt tác thiết kế tuyệt đẹp với màu sắc tuyệt đẹp. Đây là không gian mà ánh sáng và sự thờ cúng hòa quyện vào nhau. Nhà thờ Hồi giáo trở nênsống động với ánh bình minh và màu sắc nhảy múa suốt cả ngày như những cơn gió xoáy Dervishes. Nó phản chiếu trên mặt đất, những bức tường, những mái vòm và những ngọn thápcao chót vót. Nó thậm chí còn phản chiếu đến du khách như thể một quả bóng đầy màu sắc bị tia nắng đầu tiên chiếu vào và đã phát nổ thành hàng ngàn con bướm xung quanh. Tiếp tục chuyến khám phá của bạn ở Shiraz tại Vườn Narenjestan thơm mùi cam tuyệt đẹp, được xây dựng vào thế kỷ 19 trong Vương triều Qajar.\nSau đó, bạn sẽ đến thăm Thành Karim Khan, được xây dựng dưới triều đại Zand. Bạn sẽ có thời gian để khám phá và mua sắm trong Vakil Bazaar nhộn nhịp, nơi có hàng trăm cửa hàng, những khoảng sân xinh đẹp và thậm chí là một đoàn lữ hành cổ. Bạn sẽ kết thúc chuyến thăm của mình trong một không gian yên bình trong vườn-mộ Sa’di và vườn-mộ Hafez, hai trong số những nhà thơ xuất sắc nhất của chúng ta để cảm nhận hương vị của Văn học Ba Tư .\nTối: Bạn đáp chuyến bay"
      },
      {
        "day": "NGÀY 15",
        "fullDayTitle": "NGÀY 15: TEHRAN – HÀ NỘI",
        "title": "TEHRAN – HÀ NỘI",
        "detail": "Tự do mua sắm và nghỉ ngơi tại Tehran.\nĐáp chuyến bay về lại Tp. Hồ Chí Minh.\nTransit ở Doha/Dubai\n3 QR 499 IKADOH DK1 2245 0020\n4 QR 976 DOHHAN DK1 0235 1320"
      },
      {
        "day": "NGÀY 16",
        "fullDayTitle": "NGÀY 16: VỀ ĐỀN VIỆT NAM",
        "title": "VỀ ĐỀN VIỆT NAM",
        "detail": "Chuyến bay QR976 0235 1320 khởi hành về Hà Nội.\nChuyến bay QR971 02:35 - 14:25 Tp. Hồ Chí Minh.\nKết thúc chương trình tham quan PAKISTAN - IRAN\nTạm Biệt Con Đường Tơ Lụa & Xứ sở Ba Tư xinh đẹp."
      }
    ],
    "inclusions": [
      "Vé máy bay Hà Nội (Ho Chi Minh) – Islamabad.",
      "Vé máy bay nội địa Pakistan: Islamabad – Gilgit.",
      "Vé máy bay Islamabad – Tehran.",
      "Vé máy bay nội địa 01 chặng từ Shiraz – Tehran.",
      "Vé máy bay Islamabad – Hà Nội (Ho Chi Minh)",
      "Thuế phi trường 3 nước, thuế an ninh, phụ phí xăng dầu (thuế theo vé máy bay có thể thay đổi tăng phí theo thông báo của hàng không).",
      "Visa IRAN",
      "Visa Pakistan",
      "Xe vận chuyển theo hành trình tour.",
      "Khách sạn tiêu chuẩn 2 khách/phòng (trường hợp khách lẻ sẽ ngủ ghép phòng 3 hoặc phụ thu phòng đơn).",
      "Các khách sạn 4 sao và 3 sao,",
      "Ăn các bữa chính theo chương trình,",
      "Ăn sáng buffet tại khách sạn",
      "Các bữa ăn chính tiêu chuẩn, thay đổi theo thực đơn địa phương",
      "Nước uống: 02 chai 500 ml/người/ngày.",
      "Trưởng đoàn nói tiếng Việt và hỗ trợ thuyết minh điểm đến theo đoàn suốt tuyến.",
      "Hướng dẫn viên tại",
      "Vé tham quan tại các điểm được liệt kê trong chương trình.",
      "Bảo hiểm du lịch toàn cầu được bảo vệ tối đa 50.000 USD/người/trường hợp.",
      "Thuế giá trị gia tăng.",
      "Quà tặng Goholic cuối chương trình."
    ],
    "exclusions": [
      "Các mục không được nêu trong phần bao gồm",
      "Tiền tip cho hướng dẫn viên và tài xế: 08 USD/khách/ ngày x 16 ngày tour.",
      "Các chi phí cá nhân không được nêu trong mục Bao gồm.",
      "Phụ thu phòng đơn nếu quý khách có nhu cầu ngủ riêng (phụ thu 780 usd/khách/tour)"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-14",
    "code": "GH-14",
    "title": "INDONESIA – KHÁM PHÁ BALI HÒN NGỌC PHƯƠNG NAM",
    "url": "https://goholictravel.com/tour/indonesia/",
    "country": "indonesia",
    "countryName": "Indonesia",
    "region": "indonesia",
    "departureFrom": "TP.HCM",
    "startDate": "2025-07-23",
    "departureSchedule": "2025-07-23",
    "duration": "5 ngày 4 đêm",
    "durationCategory": "5-7-days-tour",
    "month": "thang-06",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "TOUR INDONESIA",
    "badgeColor": "bg-[#31c0cc]",
    "isFeatured": false,
    "price": 17890000,
    "priceDisplay": "17.890.000đ",
    "originalPrice": 20000000,
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "https://goholictravel.com/wp-content/uploads/2025/06/web-indonesia-1200x675.jpg",
    "gallery": [],
    "headMeta": [
      "5 ngày 4 đêm",
      "Nhóm: 15 - 20 Khách",
      "Tân Sơn Nhất",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Bali, được mệnh danh là “hòn đảo của các vị thần”, nổi tiếng với những bãi biển cát trắng mịn, rừng nhiệt đới xanh mướt, ruộng bậc thang tuyệt đẹp và nền văn hóa Hindu đặc sắc.",
    "introText": "Bali, được mệnh danh là “hòn đảo của các vị thần”, nổi tiếng với những bãi biển cát trắng mịn, rừng nhiệt đới xanh mướt, ruộng bậc thang tuyệt đẹp và nền văn hóa Hindu đặc sắc.\n\nHành trình 5 ngày 4 đêm sẽ đưa bạn đến những địa danh nổi bật như Ubud – trung tâm văn hóa nghệ thuật, Kuta vui nhộn, và đảo Nusa Penida với những bãi biển hoang sơ và cảnh quan ngoạn mục.\n\nThiết kế riêng cho đoàn với những điểm độc đáo ở Bali",
    "highlights": [
      "Tham quan kết hợp nghỉ dưỡng",
      "Trải nghiệm 1 đêm tại đảo Nusa Penida",
      "Khám phá nền văn hoá Hindu độc đáo qua các ngôi đền"
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1: TP.HCM – BALI",
        "title": "TP.HCM – BALI",
        "detail": "Sáng: HDV Goholic đón đoàn tại sân bay Quốc tế Tân Sơn Nhất trước giờ khởi hành 3 tiếng để làm thủ tục check in đến sân bay I Gusti Ngurah Rai .\nĐến Bali, đoàn làm thủ tục check in sau đó di chuyển đến nhà hàng dùng bữa trưa.\nSau bữa trưa, đoàn di chuyển về khách sạn nhận phòng nghỉ ngơi\nChiều : Đoàn tham quan :\nĐền Tanah Lot - một trong những biểu tượng văn hóa và tâm linh nổi bật nhất của đảo Bali, Indonesia. Tanah Lot nổi tiếng là một trong những địa điểm ngắm hoàng hôn đẹp nhất ở Bali. Ánh nắng chiều buông xuống, phản chiếu lên mặt biển và ngôi đền, tạo nên một bức tranh thiên nhiên tuyệt đẹp.\nTối : Đoàn dùng bữa tối tại nhà hàng sau đó tự do khám phá Kuta về đêm với không khí nhộn nhịp, náo nhiệt, đầy màu sắc."
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: KUTA – NUSA PENIDA ISLAND",
        "title": "KUTA – NUSA PENIDA ISLAND",
        "detail": "Sáng : Đoàn dùng bữa sáng tại khách sạn, sau đó làm thủ tục trả phòng, di chuyển ra bến cảng Sanur để lên tàu ra đảo Nusa Penida (khoảng 40 phút ).\nĐảo Nusa Penida là một viên ngọc quý nằm ở phía đông nam đảo Bali, Indonesia, nổi tiếng với vẻ đẹp hoang sơ, những bãi biển tuyệt đẹp và cảnh quan thiên nhiên hùng vĩ. Là hòn đảo lớn nhất trong ba đảo Nusa (bao gồm Nusa Lembongan và Nusa Ceningan), Nusa Penida mang đến cho du khách trải nghiệm yên bình, tách biệt khỏi sự nhộn nhịp của Bali.\nĐến đảo, xe sẽ đón và đưa đoàn về homestay cất hành lý, thay đồ sau đó bắt đầu hành trình khám phá đảo :\nKelingking Beach: Được mệnh danh là \"bãi biển khủng long\" nhờ hình dáng vách đá độc đáo, nơi đây nổi tiếng với cảnh quan ngoạn mục và là điểm \"sống ảo\" lý tưởng.\nAngel’s Billabong: Hồ bơi tự nhiên nằm giữa các tảng đá, tạo nên một bể bơi vô cực độc đáo với làn nước trong vắt.\nBroken Beach (Pasih Uug): Vòm đá tự nhiên tạo thành một vịnh nhỏ, nơi sóng biển tràn vào qua một lỗ hổng lớn, tạo nên khung cảnh kỳ vĩ.\nCrystal Bay: Địa điểm lý tưởng để lặn biển và ngắm hoàng hôn, nổi tiếng với rạn san hô phong phú và cơ hội gặp gỡ cá mặt trăng (Mola Mola)\nTrưa : Đoàn dùng bữa trưa tại nhà hàng địa phương trên đảo, sau đó tiếp tục khám phá đảo hoặc trở về homestay nghỉ ngơi.\nTối : Đoàn dùng bữa tối tại nhà hàng, nghỉ ngơi trên đảo."
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: NUSA PENIDA – UBUD",
        "title": "NUSA PENIDA – UBUD",
        "detail": "Sáng: Đoàn thức dậy, dùng bữa sáng, tự do thưởng thức không khí trong lành buổi sáng trên đảo.\n09:00 Đoàn trả phòng, sau đó di chuyển ra cảng để làm thủ tục trở về đảo lớn Bali.\nĐến Bali, xe đón và đưa đoàn về Ubud ăn trưa và nhận phòng khách sạn nghỉ ngơi.\nUbud là trái tim văn hóa và nghệ thuật của đảo Bali, Indonesia, nổi bật với vẻ đẹp thiên nhiên tươi đẹp, di sản tâm linh phong phú và bầu không khí yên bình giữa rừng nhiệt đới và ruộng bậc thang xanh mướt. Đây là điểm đến lý tưởng cho những ai muốn khám phá văn hóa bản địa, thư giãn với yoga, thiền định và tận hưởng sự hòa quyện giữa thiên nhiên và nghệ thuật.\nChiều : Đoàn di chuyển đi tham quan đền Besakih - gồm 23 ngôi đền riêng biệt nhưng liên kết với nhau, được xây dựng trên sáu tầng bậc thang dọc theo sườn núi. Được sử dụng làm nơi thờ cúng từ năm 1284, khi những người chinh phục từ Java đầu tiên định cư ở Bali. Đến thế kỷ 15, Besakih trở thành đền thờ nhà nước của triều đại Gelgel hùng mạnh.\nTối : Đoàn dùng bữa tối tại nhà hàng sau đó di chuyển về khách sạn nghỉ ngơi."
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: KHÁM PHÁ UBUD",
        "title": "KHÁM PHÁ UBUD",
        "detail": "Sáng: Đoàn dùng bữa sáng tại khách sạn sau đó bắt đầu hành trình khám phá Ubud :\nRuộng bậc thang Tegalalang - điểm đến nổi bật tại Ubud, Bali, nổi tiếng với những thửa ruộng bậc thang xanh mướt và hệ thống tưới tiêu truyền thống Subak – một di sản văn hóa được UNESCO công nhận. Đoàn có thể trải nghiệm đu dây (swing), chụp ảnh tại các điểm \"Love Bali\", hoặc thưởng thức cà phê tại các quán ven đường với tầm nhìn tuyệt đẹp.\nTrưa : Đoàn dùng bữa trưa tại Kintamani với view núi và hồ tuyệt đẹp của Ubud sau đó di chuyển đến :\nĐền Tirta Empul là một trong những ngôi đền Hindu linh thiêng và nổi tiếng nhất tại Bali, Indonesia, đặc biệt được biết đến với suối nước thánh và nghi lễ thanh tẩy Melukat.\nỞ đây, đoàn có thể trải nghiệm nghi lễ thanh tẩy Melukat là nghi lễ thanh tẩy truyền thống của người Bali, nhằm gột rửa những năng lượng tiêu cực và mang lại sự cân bằng cho tâm hồn. Tại Tirta Empul, nghi lễ này được thực hiện trong các hồ nước thánh với 30 vòi phun, mỗi vòi có ý nghĩa riêng biệt.\nChiều : Đoàn về khách sạn nghỉ ngơi và dùng cơm tối. Tự do khám phá phố đêm Ubud"
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: UBUB – BALI – TP.HCM",
        "title": "UBUB – BALI – TP.HCM",
        "detail": "Sáng: Đoàn thức dậy, dùng bữa sáng\nTự do nghỉ ngơi, thưởng thức cafe trong không khí trong lành của Ubud buổi sáng hoặc đắm mình trong dòng nước mát lạnh của hồ bơi.\nTrưa : Đoàn làm thủ tục trả phòng, di chuyển ra sân bay để làm thủ tục check in bay về lại TP.HCM.\nDùng bữa trưa nhẹ tại sân bay\nTối: Về đến Việt Nam, HDV Goholic chào tạm biệt đoàn và chúc cho đoàn luôn bình an và hạnh phúc !!!"
      }
    ],
    "inclusions": [
      "Vé máy bay quốc tế khứ hồi TP HCM – Bali Vietjet 7kg xách tay + 20kg kí gửi",
      "Tất cả các chi phí vé vào cửa cho tất cả các địa điểm du lịch được liệt kê trong hành trình;",
      "Các bữa ăn theo chương trình với các món đặc sản địa phương",
      "Hướng dẫn viên địa phương và trưởng đoàn đi cùng từ Việt Nam",
      "Xe du lịch 14 chỗ suốt hành trình",
      "Khách sạn 4* ở Kuta, resort 3* ở Ubud và homestay/cottage ở đảo",
      "Kuta : diamond hotel/the one legian/ Brits hotel *4…",
      "Nusa Penida : Maskot Cottage / Rama Cottage…",
      "Ubud : Evitel Ubud*3 …",
      "Phí dịch vụ & Thuế chính phủ;",
      "Các thỏa thuận bao gồm phí lập kế hoạch, xử lý, vận hành và liên lạc.",
      "Nước uống được cung cấp trong suốt chuyến đi",
      "Bảo hiểm du lịch."
    ],
    "exclusions": [
      "Tiền tip cho hướng dẫn viên và tài xế: 30 USD/khách/ Tour",
      "Các chi phí cá nhân không được nêu trong mục Bao gồm.",
      "Phụ thu phòng đơn nếu quý khách có nhu cầu ngủ riêng (phụ thu 2.800.000 VNĐ/khách/tour)"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-15",
    "code": "GH-15",
    "title": "MALAYSIA – SẮC MÀU SABAH",
    "url": "https://goholictravel.com/tour/malaysia/",
    "country": "malaysia",
    "countryName": "Malaysia",
    "region": "malaysia",
    "departureFrom": "TP.HCM",
    "startDate": "2025-07-23",
    "departureSchedule": "2025-07-23",
    "duration": "5 ngày 4 đêm",
    "durationCategory": "5-7-days-tour",
    "month": "thang-10,thang-11,thang-12,thang-06,thang-07,thang-08,thang-09",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "TOUR MALAYSIA",
    "badgeColor": "bg-emerald-600",
    "isFeatured": false,
    "price": 18890000,
    "priceDisplay": "18.890.000đ",
    "originalPrice": 21200000,
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "https://goholictravel.com/wp-content/uploads/2025/06/web-Malaysia-1200x675.jpg",
    "gallery": [],
    "headMeta": [
      "5 ngày 4 đêm",
      "Nhóm: 15 - 20 Khách",
      "Tân Sơn Nhất",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Kota Kinabalu (KK) — Thủ phủ bang Sabah, nằm bên bờ Vịnh Tusan, đảo Borneo – Kota Kinabalu (gọi tắt là KK) là điểm đến kết hợp hài hòa giữa nhịp sống đô thị và vẻ đẹp thiên nhiên hoang sơ.",
    "introText": "Kota Kinabalu (KK)\n\nThủ phủ bang Sabah, nằm bên bờ Vịnh Tusan, đảo Borneo – Kota Kinabalu (gọi tắt là KK) là điểm đến kết hợp hài hòa giữa nhịp sống đô thị và vẻ đẹp thiên nhiên hoang sơ.\n\nĐến với Kota Kinabalu, bạn sẽ được trải nghiệm biển đảo, ẩm thực và nhịp sống sôi động; trong khi Kundasang quyến rũ h bởi không khí se lạnh, cảnh quan cao nguyên và văn hóa bản địa đậm chất vùng cao.\n\nChuyến đi giúp bạn gần gũi với thiên nhiên và chữa lành tâm hồn sau những ngày làm việc và những lo toan của cuộc sống.",
    "highlights": [
      "Thủ phủ bang Sabah, nằm bên bờ Vịnh Tusan, đảo Borneo – Kota Kinabalu (gọi tắt là KK) là điểm đến kết hợp hài hòa giữa nhịp sống đô thị và vẻ đẹp thiên nhiên hoang sơ.",
      "Đến với Kota Kinabalu, bạn sẽ được trải nghiệm biển đảo, ẩm thực và nhịp sống sôi động; trong khi Kundasang quyến rũ h bởi không khí se lạnh, cảnh quan cao nguyên và văn hóa bản địa đậm chất vùng cao.",
      "Chuyến đi giúp bạn gần gũi với thiên nhiên và chữa lành tâm hồn sau những ngày làm việc và những lo toan của cuộc sống."
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1: TP.HCM – KOTA KINABALU",
        "title": "TP.HCM – KOTA KINABALU",
        "detail": "Sáng: HDV Goholic đón đoàn tại sân bay Quốc tế Tân Sơn Nhất trước giờ khởi hành 3 tiếng để làm thủ tục check in đến Kota Kinabalu\nĐến Kota Kinabalu, đoàn làm thủ tục nhập cảnh, xe ô tô đón đoàn tại sân bay. Sau đó, đoàn dùng bữa tối tại Roof Top có view hoàng hôn.\nĐoàn về khách sạn nhận phòng nghỉ ngơi.\nTự do khám phá Khu China Town về đêm"
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: THAM QUAN ĐẢO MANUKAN VÀ SAPI",
        "title": "THAM QUAN ĐẢO MANUKAN VÀ SAPI",
        "detail": "Sáng : Đoàn dùng bữa sáng tại khách sạn\nChuẩn bị đồ bơi, khăn tắm, nón đi biển, kem chống nắng,…\n8:00 – Xe đón tại khách sạn đến cảng tàu,lên tàu, hành trình 20 phút đưa đoàn đến hòn đảo đầu tiên trong chương trình Sapi Island.\nĐảo Sapi có hình dạng như một ngôi sao, có bãi biển cát trắng và nước trong vắt. Đây là một trong hai hòn đảo phát triển và nổi tiếng bậc nhất của công viên hải dương Tunku Abdul (TARP).\nỞ đây, đoàn tự do tắm biển, hoà mình trong dòng nước xanh mát của biển cả\nĐoàn tiếp tục hành trình đến đảo Manukan Island để dùng bữa trưa.\nSau đó tiếp tục tự do tắm mình trong làn nước trong suốt của biển. Và tham gia các hoạt động thể thao biển như chèo thuyền kayak, dù lượn, moto nước, đi bộ dưới biển,…(chi phí tự túc).\nChiều : Đoàn di chuyển vể khách sạn nghỉ ngơi và dùng bữa tối"
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: JESSELTON – MARI MARI – TAMPARULI – KUNDASANG",
        "title": "JESSELTON – MARI MARI – TAMPARULI – KUNDASANG",
        "detail": "Sáng: Đoàn thức dậy, dùng bữa sáng, tự do thưởng thức không khí trong lành\n8:00 – Đoàn di chuyến đến Jesselton. Chụp bên ngoài Nhà thờ Hồi giáo và San-ch’ing.\nDi chuyển đến làng văn hoá Mari Mari – Được tọa lạc trên đảo Borneo là một bảo tàng sống của các dân tộc thiểu số nơi giới thiệu kiến thức về lịch sử, văn hóa, truyền thống của 5 bộ tộc: Kadazan-Dusun, Rungus, Lundayeh, Bajau và Murut.\nLàng có thiên nhiên thanh bình mang lại cho bạn cảm giác như đang trở về thời tiền sử, quên đi sự hối hả tất bật của cuộc sống thường ngày. Hiểu hơn về lịch sử khu vực, thu về hành trang những kiến thức của nền văn hóa đặc sắc.\nThưởng thức những tiết mục lôi cuốn và thu hút chính là phần trình diễn nhảy múa truyền thống kết hợp đa dạng các loại nhạc cụ dân gian cổ xưa.\nTrưa : Đoàn dùng Buffet trưa tại nhà hàng địa phương.\nTiếp tục hành trình 30 phút đến với thị trấn Tamparuli, xuyên qua những cánh đồng lúa và hoa màu trù phú vùng ngoại ô. Trải nghiệm đi trên cây cầu treo nổi tiếng “Jambatan Tamparuli” và đắm chìm trong vẻ đẹp của thị trấn nhỏ này.\nTham quan Trang trại nuôi bò sữa Desa Cow Farm, được ví như New Zealand thu nhỏ ở Sabah. Nơi đây cung cấp gần một triệu lít sữa bò tươi hàng năm. Quý khách có thể ngắm nhìn những đàn bò tự do ăn cỏ trên cánh đồng rộng lớn, cho bò con ăn. Cùng tìm hiểu quy trình chế biến sữa, thưởng thức sữa tươi và sữa chua được sản xuất ngay tại trang trại.\nĐoàn đến Kundasang, nhận phòng khu resort trên núi.\nTối : Đoàn dùng bữa tối tại nhà hàng và nghỉ ngơi"
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: KUNDASANG – RANAU – KOTA KINABALU",
        "title": "KUNDASANG – RANAU – KOTA KINABALU",
        "detail": "Sáng: Đoàn dùng bữa sáng tại khách sạn sau đó làm thủ tục trả phòng.\nĐoàn di chuyển đến suối nước nóng Poring Hot Spring. Đây là khu bảo tồn thiên nhiên giữa rừng rậm nhiệt đới.\nTrưa : Sau bữa trưa, đoàn tự do tắm suối nóng trong những bồn tắm mở kiểu Nhật. Ngâm mình trong dòng nước suối nóng giàu khoáng chất thiên nhiên, bao quanh là cảnh quan vườn tuyệt đẹp, mang lại cảm giác nghỉ ngơi và thư giãn. Ngoài ra còn có một hồ nước lạnh gần đó cho những du khách thích ngâm nước lạnh.\nĐoàn tiếp tục tham quan cầu treo The Canopy Treetop Walk. Cây cầu dài 170m treo lơ lửng ở độ cao 60m trên những khu rừng rậm xanh tốt. Băng qua khu rừng nhiệt đới hàng trăm triệu năm tuổi, ngắm nhìn cảnh vật và âm thanh của những sinh vật rừng\nTrải nghiệm spa cá ở Marakau và tận hưởng cảm giác đặc biệt khi bị cá cắn vào chân.\nSau đó, dọc đường đoàn ghé thưởng thức đặc sản lợn rừng nướng.\nChiều : Đoàn khởi hành về lại thành phố Kota Kinabalu, dùng bữa tối và nhận phòng khách sạn nghỉ ngơi"
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: KOTA KINABALU – TP.HCM",
        "title": "KOTA KINABALU – TP.HCM",
        "detail": "Sáng: Đoàn thức dậy, dùng bữa sáng.\nTự do nghỉ ngơi, thưởng thức cafe trong không khí trong lành của biển đảo buổi sáng sau đó làm thủ tục trả phòng và di chuyển ra sân bay. ( đoàn ăn nhẹ tại sân bay )\nVề đến Việt Nam, HDV Goholic chào tạm biệt đoàn và chúc cho đoàn luôn bình an và hạnh phúc !!!"
      }
    ],
    "inclusions": [
      "Vé máy bay quốc tế khứ hồi TP HCM – Bali Air Asiat 7kg xách tay + 20kg kí gửi.",
      "Tất cả các chi phí vé vào cửa cho tất cả các địa điểm du lịch được liệt kê trong hành trình.",
      "Các bữa ăn theo chương trình với các món đặc sản địa phương.",
      "Hướng dẫn viên địa phương và trưởng đoàn đi cùng từ Việt Nam.",
      "Xe du lịch 16 – 35 chỗ suốt hành trình;",
      "Khách sạn /resort 4* tiêu chuẩn 2-3 khách/phòng: Kinabalu pine resort ở Kudasang và Promenade Hotel Kota Kinabalu hoặc tương đương…",
      "Phí dịch vụ & Thuế chính phủ;",
      "Các thỏa thuận bao gồm phí lập kế hoạch, xử lý, vận hành và liên lạc.",
      "Nước uống được cung cấp trong suốt chuyến đi.",
      "Bảo hiểm du lịch."
    ],
    "exclusions": [
      "Tiền tip cho hướng dẫn viên và tài xế: 30 USD/khách/ Tour",
      "Các chi phí cá nhân không được nêu trong mục Bao gồm.",
      "Phụ thu phòng đơn nếu quý khách có nhu cầu ngủ riêng (phụ thu 2.800.000 VNĐ/khách/tour)"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-16",
    "code": "GH-16",
    "title": "SRILANKA – KHÁM PHÁ TÍCH LAN – XỨ THUẦN PHẬT",
    "url": "https://goholictravel.com/tour/srilanka/",
    "country": "srilanka",
    "countryName": "Sri Lanka",
    "region": "srilanka",
    "departureFrom": "TP.HCM/HÀ NỘI",
    "startDate": "2025-10-18",
    "departureSchedule": "2025-10-18",
    "duration": "8 ngày 7 đêm",
    "durationCategory": "7-days-tour",
    "month": "thang-01,thang-10,thang-11,thang-12,thang-02,thang-03,thang-04",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "TOUR SRI LANKA",
    "badgeColor": "bg-rose-600",
    "isFeatured": false,
    "price": 46590000,
    "priceDisplay": "46.590.000đ",
    "originalPrice": 52200000,
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "https://goholictravel.com/wp-content/uploads/2025/06/web-srilanka-1200x675.jpg",
    "gallery": [],
    "headMeta": [
      "8 ngày 7 đêm",
      "Nhóm: 15 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Viếng thăm các công trình Phật giáo nổi tiếng, linh thiêng",
    "introText": "Viếng thăm các công trình Phật giáo nổi tiếng, linh thiêng\n\nChiêm bái xá lợi Răng của Đức Phật Thích Ca tại chùa Răng Phật\n\nSafari xuyên rừng ngập mặn sông Madu Ganga",
    "highlights": [
      "Trải nghiệm chuyến tàu xuyên rừng và các cánh đồng trà độc đáo",
      "Thưởng thức show Kandy Cultural Dance là một chương trình Nghệ thuật, Múa & Di sản Văn hóa Sri Lanka đặc sắc",
      "Khám phá pháo đài Sigiriya: Kỳ quan của thế giới cổ đại",
      "Khám phá làng Sigiriya với các hoạt động độc đáo : đạp xe, chèo thuyền, ngồ xe bò kéo, tìm hiểu cuộc sống người dân trong làng",
      "Trải nghiệm thả rùa con về biển"
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1: TP HCM/HÀ NỘI - COLOMBO – NEGOMBO",
        "title": "TP HCM/HÀ NỘI - COLOMBO – NEGOMBO",
        "detail": "Đoàn có mặt tại sân bay Tân Sơn Nhất/Nội Bài để đáp chuyến đi đến Columno – thủ đô của Srilanka. (chuyến bay dự kiến quá cảnh ở Kuala lumpur hoặc Bangkok)\nĐến sân bay Colombo, hướng dẫn viên và xe đưa quý khách đến Negombo nhận phòng nghỉ ngơi.\nNegombo là một làng chài nổi tiếng phía Bắc của Colombo, với một hệ thống kênh đào do người Hà Lan xây dựng. Đây là nơi ngư dân gặp gỡ trao đổi sản vật trên những chiếc thuyền màu sắc của họ. Du khách có thể tham gia các tour tham quan trên biển hoặc kênh đào bằng thuyền. Từ tháng mười một đến tháng tư hàng năm, ngôi làng cổ kính này trở nên náo nhiệt hơn với các thiết bị lặn và đường phố ở hai bên của các khách sạn được tô điểm với cửa hàng lưu niệm, nhà hàng.\nNghỉ đêm tại Negombo."
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: NEGOMBO - ANURADHAPURA - DAMBULLA",
        "title": "NEGOMBO - ANURADHAPURA - DAMBULLA",
        "detail": "Buổi sáng: Đoàn dùng điểm tâm sáng tại khách sạn. Sau bữa ăn sáng, đoàn khởi hành đi tham quan Cố đô Anuradhapura, thành phố được xây dựng từ thế kỷ thứ 5 trước công nguyên với nhiều di tích cổ xưa đặc biệt là các di sản văn hoá Thế Giới như:\nĐền đá Isurumuniya nổi tiếng với nhiều tranh vẽ và chạm khắc Phật trên đá được xây dựng bởi vua Devanampiya Tissa.\nCây Bồ Đề (Sri Maha Bodi) linh thiêng được trồng cách đây 2.200 năm, và được lấy giống từ cây Bồ Đề nơi Đức Phật Thích Ca thành đạo tại Ấn Độ.\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng sau đó đi tham quan :\nCung điện Brazen Palace được xây dựng từ thế kỷ thứ III trước Công nguyên để làm nơi yên nghỉ của các nhà sư. Hiện nay, chỉ còn lại 1.600 cột đá vốn là nền của một kiến trúc chín tầng với 9.000 phòng, mái của cung điện được lợp bằng đồng, do đó có tên là Cung điện Đồng.\nĐồi Mihintale (Hill of Mahinda), cái nôi của Phật giáo Sri Lanka. Theo truyền thuyết, con trai của Hoàng đế A Dục của Ấn Độ đã đến Sri Lanka vào ngày trăng tròn của tháng Poson (tháng Sáu) và gặp Vua Devanampiyatissa và rao giảng giáo lý cho vua và người dân của mình. Đồi Mihinatale từ đó đã trở thành điểm linh thiêng của các tín đồ Phật giáo Sri Lanka. Tham quan, Mihintale, du khách sẽ trải qua 1.840 bậc thang để lên tới đỉnh, tại đây du khách có thể thưởng ngoạn cảnh quang thiên nhiên hùng vĩ.\nSau đó, di chuyển đến Dambulla dùng bữa tối và nhận phòng khách sạn nghỉ ngơi.\nBuổi tối: Đoàn nghỉ ngơi, khám phá Dambulla về đêm"
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: DAMBULLA - POLONNARUWA – DAMBULLA (140KM – 3 giờ",
        "title": "DAMBULLA - POLONNARUWA – DAMBULLA (140KM – 3 giờ",
        "detail": "Gal Viharaya\nBuổi sáng: Đoàn dùng bữa sáng tại khách sạn sau đó di chuyển đến Polonnaruwa.\nPolonnaruwa - một thành phố hoàng gia cổ xưa từ thế kỉ thứ 10, được UNESCO cộng nhận là di tích văn hoá thế giới, đây là thủ đô thứ hai của Sri Lanka sau khi Anuradhapura bị phá hủy vào năm 993.\nKhám phá :\nQuần thể Cung điện Hoàng gia - (Vejayanta Pasada) là một trong những di sản lịch sử nổi bật nhất của Sri Lanka, được xây dựng bởi Vua Parakramabahu I (1153-1186). Cung điện này từng là cung điện lớn nhất Sri Lanka, bao gồm 1000 phòng và 7 tầng. Tuy nhiên, sau khi Polonnaruwa bị xâm lược bởi Kalinga Magha vào năm 1215, cung điện bị phá hủy nặng nề, chỉ còn lại tàn tích của 3 tầng.\nGal Viharaya – kỳ quan Phật giáo tạc vào vách đá ở Sri Lanka - còn có tên gọi là đền đá, Gal Viharaya vốn là một phần của một tự viện được Parakramabahu Đại đế (1153-1186) của vương quốc Tích Lan cho xây dựng trong thời kỳ trị vì của mình.\nGal Viharaya được coi là một trong những kỳ quan Phật giáo cổ xưa và độc đáo bậc nhất thế giới\nBuổi chiều : Đoàn trở về Dambulla , ăn tối và về khách sạn nghỉ ngơi."
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: DAMBULLA – SIGIRIYA – DAMBUALLA – 40KM (1 giờ )",
        "title": "DAMBULLA – SIGIRIYA – DAMBUALLA – 40KM (1 giờ )",
        "detail": "Buổi sáng : Đoàn thức dậy dùng bữa sáng, sau đó khởi hành đến Sigiriya.\nKhám phá pháo đài Sigiriya: Kỳ quan của thế giới cổ đại - còn được gọi là \"Pháo đài Sư tử\", là một kiệt tác kiến trúc được Vua Kashyapa I được xây dựng vào thế kỷ thứ 5 tại Sri Lanka. Nằm trên đỉnh một ngọn đá granite , Sigiriya có độ cao khoảng 180 mét so với mặt đất và 350 mét so với mực nước biển, và được bao quanh bởi rừng xanh thẳm.\nĐược UNESCO công nhận là Di sản Thế giới, Sigiriya mời gọi chúng ta khám phá một trong những kỳ quan cổ đại lớn nhất của thế giới, nơi mỗi viên đá, mỗi bức tranh đều kể lại một câu chuyện của một nền văn minh cổ xưa.\nBuổi trưa : Đoàn ăn trưa tại nhà hàng sau đó khám phá làng Sigiriya với các hoạt động độc đáo :\nTrải nghiệm ngồi xe bò kéo đi quanh làng, ngắm nhìn cuộc sống của dân làng và đi qua các cánh đồng lúa\nĐi bộ thăm các thuở ruộng bậc thang, tận hưởng bầu không khí trong lành\nTrải nghiệm ngồi thuyền Catamaran truyền thống trên hồ\nGhé thăm nhà dân làng, trò chuyện cùng người dân, học làm các món ăn truyền thống hoặc có thể thuê xe đạp và đạp quanh làng\nThăm các làng nghề truyền thống của làng như dệt thổ cẩm, làm gốm...\nBuổi chiều : Đoàn trở về Dambualla, dùng bữa tối và nghỉ ngơi"
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: DAMBULLA – MATALE – KANDY – 80KM (02 giờ)",
        "title": "DAMBULLA – MATALE – KANDY – 80KM (02 giờ)",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng tại nhà hàng, làm thủ tục trả phòng sau đó di chuyển về Kandy\nTrên đường đi, đoàn ghé tham quan Vườn gia vị ở Matale - Thị trấn nhỏ này nổi tiếng với khí hậu mát mẻ và những loại gia vị thơm nức. Tại vườn, đoàn sẽ tìm hiểu quy trình chế biến công phu để Sri Lanka trở thành nơi sản xuất một trong những loại gia vị ngon nhất thế giới.\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng sau đó tiếp tục di chuyển đến Kandy - một thành phố lớn ở miền trung Sri Lanka.\nỞ đây, thành phố nằm trên cao nguyên, được bao quanh bởi những dãy núi – nơi có các đồn điền trà và rừng mưa đa dạng sinh học. Trung tâm thành phố là hồ Kandy (còn gọi là hồ Bogambara), rất thích hợp để đi dạo. Kandy nổi tiếng với các di tích Phật giáo linh thiêng, trong đó có Đền Răng Phật (Temple of the Tooth Relic), được tổ chức đại lễ Esala Perahera thường niên long trọng.\nĐến Kandy, đoàn tham quan thành phố Kandy, bao gồm: hồ Kandy, chợ địa phương, xưởng Batik, điểm ngắm cảnh Upper Lake và Bảo tàng Đá quý.\nSau đó, đoàn thưởng thức show Kandy Cultural Dance là một chương trình Nghệ thuật, Múa & Di sản Văn hóa Sri Lanka đặc sắc mà bất cứ du khách nào đến thăm thành phố lịch sử Kandy cũng không thể bỏ qua.\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng sau đó nhận phòng khách sạn nghỉ ngơi"
      },
      {
        "day": "Ngày 6",
        "fullDayTitle": "Ngày 6: KANDY – NUWARA ELIYA – 80KM (02 giờ 40’)",
        "title": "KANDY – NUWARA ELIYA – 80KM (02 giờ 40’)",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn sau đó di chuyển đi tham quan :\nChùa Răng Phật - nằm gần cung điện hoàng gia Sri Lanka, lưu giữ xá lợi răng Phật Thích Ca Mâu Ni được đem về từ Ấn Độ khoảng 1.600 năm trước. Vương quốc Kandy (thế kỷ 15–19) sở hữu một phần xá lợi răng Phật, được coi là báu vật thiêng liêng bảo chứng cho quyền lực và đoàn kết dân tộc.\nĐoàn ăn trưa tại nhà hàng sau đó, đoàn khởi hành đến Nuwara Eliya bằng tàu - đây là một trong những hành trình đường sắt đẹp nhất trên thế giới.\nTàu sẽ di chuyển trong vòng 4 giờ đồng hồ sẽ đi qua các khu trồng trà tươi tốt và quang cảnh núi non trùng điệp. Vì thế khi nhắc đến những thứ cần trải nghiệm khi đến Sri Lanka trải nghiệm đi tàu luôn được nhắc đến đầu tiên.\nĐoànsẽ được tận mắt nhìn thấy được những kiến trúc cổ kính của đường ray, của toa tàu mang đậm chất thời Anh thuộc bên cạnh đó còn nhìn ngắm được vẻ đẹp xung quanh của thiên nhiên hùng vĩ.\nNuwara Eliya – nơi được mệnh danh“Tiểu Anh quốc” bởi không khí mát mẻ, đầy cây xanh và kiến trúc mang đậm dấu ấn thuộc địa, Nuwara Eliya (trong tiếng Sinhala có nghĩa là “Thành phố Ánh sáng”) là một ngôi làng đẹp như tranh vẽ bên bờ hồ.\nTrên đường đến Nuwara Eliya, bạn sẽ đi qua những cánh đồng chè xanh mướt trải dài.\nBuổi tối : Đến Nuwara Eliya ,đoàn dùng bữa tối và trở về khách sạn nhận phòng nghỉ ngơi"
      },
      {
        "day": "Ngày 7",
        "fullDayTitle": "Ngày 7: NUWARA ELIYA – BENTOTA – 210km (5 giờ 20’)",
        "title": "NUWARA ELIYA – BENTOTA – 210km (5 giờ 20’)",
        "detail": "Buổi sáng :Đoàn dùng bữa sáng tại khách sạn sau đó làm thủ tục trả phòng để di chuyển về Bentota.\nBuổi trưa : Đến Benbota, đoàn dùng bữa trưa tại nhà hàng sau đó bắt đầu hành trình khám phá Bentota - nơi đây mang vẻ đẹp hòa quyện giữa biển xanh mênh mông và đầm lầy rừng ngập mặn, tạo nên không gian vừa lãng đãng, vừa sôi động.\nĐoàn trải nghiệm Dạo thuyền sông Madu Ganga: Safari xuyên rừng ngập mặn, ngắm dơi ăn quả, bồ nông mắt xanh, cá sấu ẩn mình.\nTham quan Trại bảo tồn rùa ,bạn sẽ hiểu cách nơi đây bảo tồn trứng rùa và chăm sóc những con rùa bị thương. Thậm chí bạn còn có cơ hội thả những chú rùa mới nở trở về biển, tạo nên một trải nghiệm trọn vẹn và đầy ý nghĩa.\nBuổi tối : Đoàn trở về khách sạn nghỉ ngơi, dùng bữa tối, tự do dạo biển, hít thở không khí biển Bantota trong lành."
      },
      {
        "day": "Ngày 8",
        "fullDayTitle": "Ngày 8: BENTOTA – COLOMBO – AIRPORT – 100KM (3 giờ)",
        "title": "BENTOTA – COLOMBO – AIRPORT – 100KM (3 giờ)",
        "detail": "Buổi sáng : Đoàn thức dậy dùng bữa sáng, hít thở không khí biển.\nSau bữa sáng, đoàn di chuyển về Colombo - thủ đô của Sri Lanka, một thành phố cảng với di sản thực dân phong phú ở bờ Tây, là điểm giao thoa của nhiều chủng tộc, tôn giáo và văn hóa. Colombo thể hiện cả vẻ đẹp lộng lẫy lẫn những góc tối của đất nước: những biệt thự, vườn tược xanh mướt, nhà hàng sang trọng và trung tâm mua sắm đầy thương hiệu cao cấp đứng xen kẽ bên cạnh các khu ổ chuột đô thị.\nVề đến Colombo , đoàn dùng bữa trưa sau đó khám phá Colombo :\nDạo công viên bờ biển Galle Face Green siêu lãng mạn, thưởng thức không khí biển trong lành\nCheck in với Quảng trường Độc lập - Independence Square, là một biểu tượng lịch sử quan trọng, đánh dấu ngày đất nước giành được độc lập khỏi Anh quốc vào năm 1948.\nViếng chùa Gangaramaya - một ngôi cổ tự Phật giáo lớn và nổi tiếng nằm ở thủ đô Colombo, Sri Lanka. Được xây dựng vào năm 1890, ngôi chùa này là điểm đến không thể bỏ qua của du khách thập phương và Phật tử.\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng sau đó di chuyển ra sân bay để làm thủ tục bay về Việt Nam.\nĐáp sân bay, kết thúc chương trình khám phá Srilanka. Goholic cảm ơn quý khách đã tin tưởng đồng hành."
      }
    ],
    "inclusions": [
      "Vé máy bay quốc tế khứ hồi từ TP.HCM/Hà Nội – Colombo (Srilanka)",
      "Evisa nhập cảnh Srilanka",
      "Tất cả các chi phí vé vào cửa và các hoạt động trải nghiệm được nêu trong chương trình",
      "Các bữa ăn theo chương trình với các món ăn đặc sắc, trải nghiệm ẩm thực địa phương",
      "Xe du lịch đời mới 20 – 35 chỗ ngồi",
      "Hướng dẫn viên địa phương và trưởng đoàn Việt Nam",
      "Khách sạn 4-5 sao suốt hành trình, 2 khách/phòng. Phòng 3 sẽ được sắp xếp khi lẻ nam/nữ",
      "Phí dịch vụ & Thuế chính phủ;",
      "Các thỏa thuận bao gồm phí lập kế hoạch, xử lý, vận hành và liên lạc",
      "Nước uống được cung cấp trong suốt chuyến đi",
      "Bảo hiểm du lịch",
      "Quà tặng sim điện thoại"
    ],
    "exclusions": [
      "Tiền tip cho hướng dẫn viên và tài xế: 80 USD/khách/ Tour",
      "Các chi phí cá nhân không được nêu trong mục Bao gồm",
      "Phụ thu phòng đơn nếu quý khách có nhu cầu ngủ riêng (phụ thu 320$ /khách/tour)"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-17",
    "code": "GH-17",
    "title": "IRAN – LẦN THEO DẤU VẾT ĐẾ CHẾ BA TƯ HÙNG MẠNH",
    "url": "https://goholictravel.com/tour/iran/",
    "country": "iran",
    "countryName": "Iran & Pakistan",
    "region": "iran",
    "departureFrom": "TP.HCM/HÀ NỘI",
    "startDate": "2025-08-18",
    "departureSchedule": "2025-08-18",
    "duration": "10 Days",
    "durationCategory": "7-days-tour",
    "month": "thang-10,thang-11,thang-12,thang-06,thang-07,thang-08,thang-09",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "TOUR IRAN & PAKISTAN",
    "badgeColor": "bg-amber-500",
    "isFeatured": false,
    "price": 85900000,
    "priceDisplay": "85.900.000đ",
    "originalPrice": 96200000,
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "https://goholictravel.com/wp-content/uploads/2025/06/web-iran-1200x675.jpg",
    "gallery": [
      "https://goholictravel.com/wp-content/uploads/2025/06/iran.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/06/iran1.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/06/iran2.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/06/iran3.jpg"
    ],
    "headMeta": [
      "10 ngày 9 đêm",
      "Nhóm: 15 - 20 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Thăm nơi sinh ra nguồn gốc của câu chuyện cổ 1001 đêm nổi tiếng",
    "introText": "Thăm nơi sinh ra nguồn gốc của câu chuyện cổ 1001 đêm nổi tiếng\n\nTìm hiểu văn hoá Iran với các nghệ thuật truyền thống: Gốm sứ, gạch men, ốp lát, kiến trúc, thảm len, khăn choàng…\n\nThăm Cung điện Golestan và chợ Lớn Bazzar\n\nTham quan Bảo tàng Iran với các cổ vật độc nhất vô nhị ghi dấu văn hoá Ba Tư cổ\n\nThăm thành cổ của tôn giáo độc thần lâu đời nhất thế giới: Yazd với Bái hoả giáo\n\nThăm các thánh đường nổi tiếng nhất: Thánh đường Hồi giáo Shah, Thánh đường Jame, Thánh đường Hồng\n\nThăm các kiến trúc độc đáo điển hình: Nhà tắm Sultan Amir Ahmad, nhà cổ Borujerdi\n\nThăm các Vườn Ba Tư cổ: Vườn Fin và vườn Dowlad Abad\n\nViếng thăm mộ của Alexandre Rhodes – cha đẻ chữ Quốc ngữ Việt Nam\n\nHướng dẫn viên nhiệt tình suốt tuyến đi cùng đoàn từ Việt Nam",
    "highlights": [
      "Khám phá một mảnh của văn minh Lưỡng Hà: Đế chế Ba Tư hùng mạnh nhất lịch sử loài người",
      "Một hành trình khám phá trọn vẹn đất nước Iran với các thành phố: Tehran – Kashan – Isfahan – Yazd – Kerman – Shiraz",
      "Khám phá thành cổ Isfahan với vẻ đẹp chứa đựng cả “một nửa thế giới”",
      "Khách sạn tiêu chuẩn 4* tiện nghi"
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1: HÀ NỘI/TP HCM – TEHRAN",
        "title": "HÀ NỘI/TP HCM – TEHRAN",
        "detail": "Đầu HN: 21h30: Xe và HDV đón quý khách tại điểm hẹn (rạp xiếc TW 67 Trần Nhân Tông) ra sân bay quốc tế Nội Bài làm thủ tục đón chuyến bay EK395 lúc 01h30 của hãng Emirates đến Dubai lúc 05h05, sau đó tiếp tục bắt chuyến bay EK2373 lúc 07h00 để đến Iran (thời gian transit 01h55’) Đầu HCM: 21h00: HDV đón quý khách tại sân bay quốc tế Tân Sơn Nhất làm thủ tục đón chuyến bay EK393 lúc 23h50 của hãng Emirates đến Dubai lúc 04h50, sau đó tiếp tục bắt chuyến bay EK2373 lúc 07h00 để đến Iran (thời gian transit 02h10’) Quý khách nghỉ đêm trên máy bay."
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2:TEHRAN: BẢO TÀNG QUỐC GIA – CUNG GOLESTAN – CHỢ LỚN BAZAAR (ĂN SÁNG/TRƯA/TỐI)",
        "title": "TEHRAN: BẢO TÀNG QUỐC GIA – CUNG GOLESTAN – CHỢ LỚN BAZAAR (ĂN SÁNG/TRƯA/TỐI)",
        "detail": "Chợ Lớn Bazaa\nCung điện Golestan\nSáng 08h45: Quý khách đến sân bay Imam Khomeini, làm thủ tục nhập cảnh sau đó xe và HDV địa phương đưa quý khách tham quan thủ đô Tehran – Thành phố lớn nhất Iran và lớn thứ hai thế giới Hồi giáo chỉ sau Cairo của Ai Cập. Tehran là trái tim, cũng là biểu tượng cho sự giao thoa văn hoá giữa hiện đại và cổ kính. · Tham quan Cung điện Golestan: Được xây dựng dưới triều đại Safavid trong hơn 200 năm bao gồm 17 lâu đài, tòa nhà cùng với nhiều bức tranh tường tuyệt đẹp với lối kiến trúc kết hợp giữa phong cách châu Âu cùng Ba Tư “nhóng nhánh”. Đặc biệt là Golestan có cả một tòa\nnhà được gắn những tấm kính phản chiếu lung linh, hoặc những ô cửa sổ màu sắc lát đá rực rỡ với nhiều màu sắc nổi bật theo phong cách đối lập, tạo nên một khung cảnh vô cùng phá cách để “checkin”. Trưa: Đoàn ăn trưa tại nhà hàng. Chiều: Quý khách mua sắm với Chợ Lớn Bazaar: Nằm ngay con đường bao quanh cung Golestan. Đây là khu chợ lớn nhất Tehran với rất nhiều Trung tâm thương mại lớn, Chợ truyền thống, Hàng quán hai bên đường, thậm chí là những con ngõ nhỏ lắt léo mang phong cách “Phiên chợ Ba Tư”. Ở đây quý khách có thể tìm kiếm những mặt hàng đặc sắc chỉ Iran mới có như Thảm dệt tay, Gốm sứ, Khăn choàng, Nhuỵ hoa nghệ tây, các đặc sản địa phương… Tối: Quý khách ăn tối tại nhà hàng và nghỉ đêm tại khách sạn."
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: TEHRAN - KASHAN - ISFAHAN (ĂN SÁNG/TRƯA/TỐI)",
        "title": "TEHRAN - KASHAN - ISFAHAN (ĂN SÁNG/TRƯA/TỐI)",
        "detail": "Phòng tắm Sultan Amir Ahmad\nVòm trần nhà cổ của Borujerdi\nSáng: Quý khách dùng bữa sáng tại khách sạn sau đó khởi hành đi Kashan (250KM ~ 03H) – Thủ phủ của tỉnh Isfahan, nơi mà theo một số lời kể, Ba nhà thông thái đã từ đây lần theo dấu vết các ngôi sao để đến được Bethlehem và chào mừng sự Giáng sinh của Chúa Jesus. Ngày nay Kashan vẫn là địa điểm nổi tiếng với các làng nghề gốm và dệt thảm truyền thống, đặc biệt là những khu vườn Ba Tư quyến rũ đầy hấp dẫn. Tham quan: · Vườn Fin Ba Tư: Với diện tích lên đến 23.000m2 theo cấu trúc thành luỹ vây tháp tròn điển hình, vườn Fin còn được dẫn nước từ khu đồi phía sau tạo thành nhiều hồ nước cùng đài phun mà không cần dùng đến bơm cơ học. Đây cũng là khu vườn lâu đời nhất tại Iran khi được hoàn thành vào năm 1590 và đã từng được công nhận Di sản thế giới Unesco 2012. · Phòng tắm Sultan Amir Ahmad: Không chỉ La Mã mới có những nhà tắm tuyệt đẹp được ghi dấu ấn, mà Iran cũng có rất nhiều các nhà tắm với kiến trúc tinh xảo. Điển hình là nhà tắm Sultan Amir Ahmad với mái vòm độc đáo và nhiều cửa sổ tròn nhỏ, cho phép ánh sáng tự nhiên xuyên qua tạo hiệu ứng chiếu sáng ấn tượng. Các bức tường được trang trí bằng gạch men xanh lam, vàng và ngọc bích kết hợp cùng hoa văn thạch cao đặc trưng cho nghệ thuật Ba\nTư thời kỳ Safavid. · Nhà cổ Borujerdi: Di tích nhà cổ quan trọng nhất của Iran, Borujerdi có mái vòm lớn như che khuất đường chân trời. Được xây dựng vào năm 1857 bởi kiến trúc sư Ustad Ali Maryam cho vợ của một thương gia giàu có, ngôi nhà có nội thất lẫn ngoại thất cực kỳ hoàn hảo, trang trí bằng các loại phù điêu, chạm khắc và các bức bích họa bởi hoạ sĩ hoàng gia trong suốt 18 năm. Trưa: Ăn trưa tại nhà hàng địa phương sau đó tiếp tục di chuyển đến Thành cổ Isfahan (250KM ~ 03H) – Từng là một trong các thành cổ lớn nhất thế giới ngang với Athens hay Rome, vượt qua cả Istanbul và được Unesco công nhận là Di sản Thế giới, Isfahan còn có một cái tên khác: “Một nửa thế giới” vì người ta tin rằng chỉ vỏn vẹn trong một toà thành lại có thể mang theo vẻ đẹp của cả nửa thế giới. Isfahan cũng nổi tiếng với các công trình kỳ công mang màu xanh dương đặc trưng, như gói gọn cả bầu trời. · Ngang qua Sa mạc Qom có ngôi làng Abyaneh đặc biệt với những mái ngói đỏ hồng. Ngôi làng này còn được coi là làng cổ nhất Iran với một hệ văn hoá hoàn toàn khác biệt so với những người Iranian khác. Họ có ngôn ngữ riêng, văn hoá riêng cùng trang phục riêng hoàn toàn, thậm chí cấu trúc của ngôi làng có thể khiến quý khách liên tưởng đến những ngôi làng cổ xưa của người Kurd ở Thổ Nhĩ Kỳ. Tối: Quý khách ăn tối tại nhà hàng và nghỉ đêm tại khách sạn."
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: THÀNH CỔ ISFAHAN (ĂN SÁNG/ TRƯA/ TỐI)",
        "title": "THÀNH CỔ ISFAHAN (ĂN SÁNG/ TRƯA/ TỐI)",
        "detail": "Chợ cổ Isfahan\nCung điện Ali Qapu\nThánh đường Iman\nSáng: Đoàn dùng bữa sáng tại khách sạn sau đó bắt đầu chuyến tham quan thành cổ Isfahan với: · Quảng trường trung tâm lớn (Quảng trường Naqsh-e Jahan): Cái tên có nghĩa \"Hình ảnh thế giới\" trong tiếng Ba Tư. Được bao quanh bởi các tòa nhà có mục đích sử dụng và phong cách kiến trúc khác nhau, quảng trường tạo thành một khu phức hợp khổng lồ cùng với khu chợ chính của Isfahan. Đây là một trong những điểm thu hút du lịch chính của Isfahan, và cũng từng được Unesco công nhận Di sản thế giới. · Thánh đường Hồi giáo Shah: Nằm gọn bên trong Quảng trường trung tâm lớn, được coi là kiệt tác kiến trúc khiến người Hồi giáo tự hào với thế giới và được in trên đồng tiền 20.000Rial. Trần cùng các bức tường thánh đường được khảm bởi những viên gạch gốm bảy màu (xanh đậm, xanh nhạt, trắng, đen, vàng, xanh lá cây, vàng chanh). Phía trong mái vòm còn\ncó một “tảng đá thanh âm”, chỉ cần đứng ở vị trí này thì dù nói chuyện với mức âm lượng rất nhỏ, hoặc chỉ là vỗ tay thì âm thanh cũng sẽ lan toả khắp mọi ngóc ngách trong toàn Thánh đường. Trưa: Quý khách ăn trưa tại nhà hàng. Chiều: Tiếp tục tham quan: · Cung điện Ali Qapu: Nơi ở của Abbas đại đế, cung điện có tổng cộng6 tầng với nhiều tháp canh để phòng vệ và quan sát xung quanh. · Lăng mộ Alexandre Rhodes (mất ngày 5/11/1660 tại Isfahan): Nhà truyền giáo Bồ Đào Nha, người có công lao đặc biệt với việc phát triển Công giáo La Mã tại Việt Nam. Ông cũng chính là “cha đẻ” chữ Quốc ngữ ngày nay, giúp cho hệ thống ký tự của người Việt chuyển từ chữ tượng hình sang chữ Latin. · Chợ Isfahan: Chính xác là nơi diễn ra những “Phiên chợ Ba Tư” cổ ngày xưa với lịch sử thuộc dạng lâu đời nhất ở Trung Đông. Chợ Isfahan nổi bật với các cửa chợ hình vòm và ngõ ngách lắt léo. Rất thích hợp cho những “pô” ảnh thật xịn. Tối: Quý khách ăn tối tại nhà hàng và nghỉ đêm tại khách sạn."
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: YAZD (ĂN SÁNG/ TRƯA/ TỐI)",
        "title": "YAZD (ĂN SÁNG/ TRƯA/ TỐI)",
        "detail": "Ngọn lửa đã cháy suốt 1500 năm ở Đền thờ Hoả giáo\nCột tháp Thánh đường hồi giáo Jame\nSáng: Đoàn ăn sáng, sau đó di chuyển đến Yazd (280km ~ 04H) – Được mệnh danh “Thành phố của các Di sản” khi chính bản thân Yazd cũng được Unesco công nhận Di sản thế giới. Yazd hiện đang là thành phố cổ xưa nhất vẫn còn có người sinh sống với lịch sử kéo dài hơn 5000 năm. Đến Yazd, đoàn tham quan: · Đền thờ Hoả giáo: Bái Hoả giáo – tôn giáo độc thần lâu đời nhất trên thế giới với truyền thống thờ Lửa và Ánh sáng. Quý khách tham quan Ngọn lửa thiêng – được duy trì cháy trong suốt hơn một nghìn năm qua (Trong truyện Ỷ thiên Đồ long ký của Kim Dung, Minh giáo chính là giáo phái có nguồn gốc từ Ba Tư, ông cũng đặt giả thuyết triều đại nhà Minh chính là lấy tên từ “Minh” giáo này) Trưa: Ăn trưa tại nhà hàng.\nChiều: Quý khách tiếp tục tham quan: · Thánh đường hồi giáo Jame (Thánh đường ngày thứ Sáu): Được xây dựng từ thế kỷ 12 trên nền một ngôi đền Hoả giáo. Nơi đây cũng sở hữu những cột tháp cao nhất Iran với phong cách Ba Tư cổ pha trộn Gothic của phương Tây. · Vườn Dowlad Abad: Nổi tiếng với kiến trúc tháp đón gió hoạt động như một bộ điều tiết tự nhiên khi mà không khí nóng được hút lên tháp, dẫn xuống chân rồi lại thoát ra theo lối cũ để làm mát toàn bộ toà nhà. · Quận Fahadan: Một trong những khu phố đẹp nhất ở Yazd, được biết đến với những ngôi nhà cổ bằng đất nung và những con phố hẹp, uốn lượn. Tối: Quý khách ăn tối tại nhà hàng và nghỉ đêm tại khách sạn."
      },
      {
        "day": "Ngày 6",
        "fullDayTitle": "Ngày 6: KERMAN – KHU PHỨC HỢP KHAN (ĂN SÁNG/ TRƯA/TỐI)",
        "title": "KERMAN – KHU PHỨC HỢP KHAN (ĂN SÁNG/ TRƯA/TỐI)",
        "detail": "Đỉnh vòm nhà tắm\nMột lối đi trong khu chợ khu Khan\nSáng: Quý khách dùng bữa sáng, sau đó di chuyển tới Kerman (350KM ~ 04H) – một trong những thành phố cổ kính và giàu văn hóa nhất của Iran, nổi bật với kiến trúc truyền thống, lịch sử phong phú và vai trò quan trọng trong các tuyến thương mại cổ đại, và là điểm dừng chân quan trọng trên Con đường tơ lụa. Trưa: Ăn trưa sau đó tham quan: · Khu phức hợp Khan: Được xây dựng từ năm 1596, có thể coi đây là một dạng “Tổ hợp chung cư cao cấp” thời cổ đại hoàn chỉnh với hệ thống Quảng trường, nhà ở, trung tâm thương mại được xây dựng và trang trí đẹp mắt, phản ánh sự đa dạng và phong phú của kiến trúc Ba Tư cổ đại: o Quảng trường Ganjali Khan: Trung tâm khu phức hợp, được bao quanh bởi các dãy cửa hàng và hành lang mái vòm. o Chợ Ganjali Khan: Nằm liền kề quảng trường, chợ này là một phần quan trọng trong mạng lưới thương mại Kerman.\no Nhà tắm Ganjali Khan: Một công trình nổi bật với các bức tranh tường và gạch men tinh xảo, hiện nay được chuyển đổi thành bảo tàng nhân học. o Trường học: Một trung tâm giáo dục quan trọng trong khu phức hợp. o Nhà thờ Hồi giáo Ganjali Khan: Nằm ở phía đông bắc của quảng trường, nổi bật với các trang trí thạch cao và cửa gỗ chạm khắc tinh xảo. o Xưởng đúc tiền: Được xây dựng vào năm 1598 và hoàn thành vào năm 1625, hiện nay là bảo tàng tiền tệ trưng bày các đồng tiền từ các triều đại khác nhau. o Bể chứa nước: Cung cấp nước cho khu phức hợp và cư dân xung quanh. Tối: Quý khách ăn tối tại nhà hàng và nghỉ đêm tại khách sạn."
      },
      {
        "day": "Ngày 7",
        "fullDayTitle": "Ngày 7: KERMAN – SHIRAZ (ĂN SÁNG/TRƯA/TỐI)",
        "title": "KERMAN – SHIRAZ (ĂN SÁNG/TRƯA/TỐI)",
        "detail": "Cung điện Bahram\nCổng kinh Koran\nSáng: Đoàn dùng bữa sáng tại khách sạn, sau đó di chuyển tới Shiraz (450KM ~ 06h) - Một trong những thành phố cổ kính, văn hóa và thi vị nhất Iran, mệnh danh “Thành thị Hoa hồng”. Nơi đây còn được biết đến như “quê hương của rượu vang”, và rượu vang xuất hiện khắp trong các vần thơ cổ như một biểu tượng của sự thăng hoa cảm xúc: “Hãy mang đến chén rượu Shiraz, cho ta quên đi trần gian buồn bã.” Sau này theo luật Hồi giáo cấm bia rượu, người Shiraz đành dùng nước quả lựu và syrup hoa hồng thay cho rượu vang, như một cách giữ lại bản sắc của mình. Trưa: Ăn trưa tại nhà hàng. Chiều: Quý khách tham quan: · Cổng Kinh Koran: Có tên này vì hai bản chép tay Kinh Koran từng được đặt trong một gian phòng nhỏ phía trên cổng. Người ta tin rằng tất cả ai đi qua cánh cổng đều sẽ được bảo vệ và ban phước lành trên hành trình của mình. · Cung điện Bahram: Công trình kiến trúc cổ của đế chế Sassanid được xây dựng vào thế kỷ thứ 5 dưới triều đại vua Bahram 5. Cung Bahram là minh chứng cho sự phát triển vượt bậc của kiến trúc Ba Tư cổ đại. Tối: Quý khách ăn tối tại nhà hàng và nghỉ đêm tại khách sạn"
      },
      {
        "day": "Ngày 8",
        "fullDayTitle": "Ngày 8: SHIRAZ (ĂN SÁNG/TRƯA/TỐI)",
        "title": "SHIRAZ (ĂN SÁNG/TRƯA/TỐI)",
        "detail": "Chợ truyền thống Vaki\nKhi ánh nắng chiếu xuyên qua thánh đường Hồng\nSáng: Sau bữa sáng, quý khách tham quan: · Vườn Eram: Eram trong tiếng Ả Rập có ý nghĩa thiên đường, vì vậy nơi đây còn có tên gọi khác là Vườn Địa Đàng. Là một trong những ví dụ điển hình nhất của vườn Ba Tư cổ và được UNESCO công nhận Di sản Thế giới vào năm 2011. · Lăng mộ Hefez: Nơi yên nghỉ của Hafez, một trong những nhà thơ vĩ đại và được yêu mến nhất trong lịch sử văn học Ba Tư. · Thánh đường Nasir al-Mulk (Thánh đường Hồi giáo Hồng): Một trong những kiến trúc độc đáo nhất với tường và gạch màu hồng cùng hoạ tiết hoa hồng. Phía bên trong, mỗi khi ánh nắng chiếu vào xuyên qua những ô cửa kính màu tạo thành vô số mảng màu rực r Trưa: Quý khách ăn trưa tại nhà hàng. Chiều: Tiếp tục tham quan: · Thành cổ Karim Khan: Công trình phòng thủ nổi bật ở trung tâm thành phố Shiraz. Đây từng là nơi ở của vua Karim Khan Zand, người sáng lập triều đại Zand (thế kỷ 18), và cũng là trung tâm hành chính và quân sự của vương quốc. · Thánh đường Vakil: Kiến trúc điển hình của Hồi giáo thời Zand, nổi bật bởi sự hoành tráng, hài hòa và nghệ thuật chạm khắc đá. Điểm đặc biệt là 48 cột đá cẩm thạch xoắn ốc được điêu khắc tinh xảo, tạo nên một không gian huyền bí và nhịp nhàng. · Chợ Vakil: Khu chợ sầm uất bậc nhất Shiraz với các mặt hàng truyền thống như Thảm dệt, gia vị, vải vóc, đồ thủ công mỹ nghệ, đồ cổ và trang sức… Tối: Quý khách ăn tối tại nhà hàng và nghỉ đêm tại khách sạn."
      },
      {
        "day": "Ngày 9",
        "fullDayTitle": "Ngày 9:SHIRAZ – TEHRAN – HÀ NỘI/TP HCM (ĂN SÁNG/TRƯA/TỐI)",
        "title": "SHIRAZ – TEHRAN – HÀ NỘI/TP HCM (ĂN SÁNG/TRƯA/TỐI)",
        "detail": "Cầu Tabiat\nSáng: Quý khách ăn sáng sau đó di chuyển ra sân bay đáp chuyến bay nội địa quay về thủ đô Tehran. Ăn trưa tại nhà hàng. Chiều: Quý khách tham quan Bảo tàng Quốc gia Iran: Nơi trưng bày và lưu trữ quan trọng nhất của Iran. Hoàn thành từ năm 1937 với hơn 3 triệu cổ vật giá trị từ các thời kỳ xa xưa trong đó bao gồm bộ sưu tập Ba Tư đặc sắc. Thậm chí nơi đây đã từng kết hợp cùng với bảo tàng Louvre của Pháp và Bảo tàng Anh để cho ra đời triển lãm kết hợp các cổ vật. · Cầu Tabiat: Cây cầu dành cho người đi bộ lớn nhất và đẹp nhất ở Tehran. Tên “Tabiat” có nghĩa là “Thiên nhiên”, và đúng như tên gọi, cây cầu này là biểu tượng của sự kết nối giữa con người với môi trường tự nhiên. · Tháp Azadi: Còn được gọi với tên Tòa tháp \"Cổng vào Iran\", là một trong những biểu tượng kiến trúc quan trọng và độc đáo của thủ đô Tehran. Tối: Đoàn đón chuyến bay EK980 lúc 18h20 về Dubai, sau đón tiếp tục đón chuyến bay EK394 lúc 03h30 để về Hà Nội (thời gian transit 6h20’), hoặc chuyến bay EK364 lúc 04h00 để về TP HCM (thời gian transit 07h00’)"
      },
      {
        "day": "Ngày 10",
        "fullDayTitle": "Ngày 10: HÀ NỘI/TP HCM",
        "title": "HÀ NỘI/TP HCM",
        "detail": "13h15 về đến TP HCM, hoặc 14h55 về đến Hà Nội xe và HDV đưa quý khách về điểm hẹn ban đầu, kết thúc chuyến đi tốt đẹp và đầy kỷ niệm. Hẹn gặp quý khách ở những chương trình kế tiếp"
      }
    ],
    "inclusions": [
      "● Vé máy bay chặng Hà Nội/TP HCM – Dubai – Tehran – Dubai – Hà Nội/TP HCM",
      "● Vé nội địa chặng Shiraz – Tehran",
      "● Khách sạn tiêu c",
      "● Các bữa ăn theo chương trình",
      "● Nước uống theo nhu cầu",
      "● Phương tiện vận chuyển phục vụ tham quan theo chương trình",
      "● Phí tham quan và vé vào cửa các nơi theo chương trình",
      "● Hướng dẫn viên từ Việt Nam và hướng dẫn viên địa phương phục vụ suốt tuyến.",
      "● Bảo hiểm du lịch quốc tế",
      "● Quà tặng du lịch"
    ],
    "exclusions": [
      "● Chi phí làm hộ chiếu.",
      "● Chi phí làm visa tái nhập cảnh Việt Nam đối với khách Việt kiều, ngoại kiều.",
      "● Hành lý quá cước trên các chuyến bay.",
      "● Các chi phí cá nhân như điện thoại, Internet, giặt ủi, thức ăn nước uống trong phòng KS",
      "● Các dịch vụ sản phẩm không đề cập trong chương trình.",
      "● Tiền bồi dưỡng cho HDV Việt Nam và nước ngoài: 10$/ngày/khác"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-18",
    "code": "GH-18",
    "title": "BẮC KINH – GIẤC MỘNG HOÀNG THÀNH",
    "url": "https://goholictravel.com/tour/bac-kinh/",
    "country": "china",
    "countryName": "Trung Quốc",
    "region": "china",
    "departureFrom": "TP.HCM",
    "startDate": "2025-10-17",
    "departureSchedule": "2025-10-17",
    "duration": "5 ngày 4 đêm",
    "durationCategory": "5-7-days-tour",
    "month": "thang-10,thang-11,thang-12,thang-06,thang-07,thang-08,thang-09",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "TOUR TRUNG QUỐC",
    "badgeColor": "bg-cyan-600",
    "isFeatured": false,
    "price": 26890000,
    "priceDisplay": "26.890.000đ",
    "originalPrice": 30100000,
    "rating": 4.9,
    "reviewsCount": 151,
    "image": "https://goholictravel.com/wp-content/uploads/2025/06/bac-kinh-1200x675.jpg",
    "gallery": [],
    "headMeta": [
      "5 ngày 4 đêm",
      "Nhóm: 15 - 20 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Chinh phục Vạn lý trường thành — Tặng Sim data Internet trong quá trình tham gia hành trình.",
    "introText": "Chinh phục Vạn lý trường thành\n\nTặng Sim data Internet trong quá trình tham gia hành trình.",
    "highlights": [
      "Hành trình No Shopping",
      "Bay thẳng từ TP.HCM đến Bắc Kinh",
      "Khách sạn 4* trung tâm thủ đô Bắc Kinh",
      "Trải nghiệm khách sạn 5* trung tâm Cổ Bắc thuỷ trấn",
      "Khám phá Cổ Bắc thuỷ trấn thơ mộng",
      "Khám phá Tử Cấm Thành – đắm chìm trong vẻ đẹp quyền lực của Cố cung ngàn năm",
      "Thưởng thức ẩm thực đặc sắc xứ Kinh Bắc",
      "Thưởng thức show diễn “Chỉ Có Hồng Lâu Mộng – Kịch Trường Huyễn Thành”"
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1: TP.HCM - BẮC KINH",
        "title": "TP.HCM - BẮC KINH",
        "detail": "Buổi sáng : HDV Goholic dón đoàn tại sân bay Quốc tế Tân Sơn Nhất để làm thủ tục check in đáp chuyến bay đến Bắc Kinh - Thủ đô nghìn năm của Trung Quốc. ( đoàn ăn sáng nhẹ trên máy bay )\nĐáp Bắc Kinh, đoàn làm thủ tục nhập cảnh sau đó di chuyển đến nhà hàng dùng bữa trưa.\nBuổi chiều : Đoàn tham quan:\nThiên Đàn - quần thể kiến trúc cung đình được xây dựng từ đời Minh (1420) để Hoàng đế dâng lễ cầu mùa màng. Thiên Đàn là một Di sản Văn hóa hế giới được UNESCO công nhận và bảo tồn,D là một trong những nơi có cấu tạo kiến trúc và là đỉnh cao trong nghệ thuật sắp đặt Trung Hoa cổ đại.\nDạo phố Vương Phủ Tỉnh - một trong những con phố náo nhiệt và đông đúc nhất tại Bắc Kinh, Trung Quốc. Là một trong 4 khu vực trung tâm quan trọng tại Bắc Kinh với bề dày lịch sử lâu đời. Được xây dựng từ thời nhà Minh đến thời nhà Thanh mới hoàn thành xong. Vương Phủ Tỉnh là biểu tượng của sự thịnh vượng và quyền lực của giới quý tộc lúc bấy giờ.\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng, tự do khám phá Bắc Kinh về đêm"
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: BẮC KINH - TỬ CẤM THÀNH",
        "title": "BẮC KINH - TỬ CẤM THÀNH",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn sau đó bắt đầu hành trình khám phá Bắc Kinh:\nThiên An Môn : \"Cổng Hòa Bình Trời ban\" - được xây dựng vào năm 1420 dưới triều Minh Thành Tổ, ban đầu gọi là Thừa Thiên Môn. Đây từng là cổng chính phía nam của Hoàng thành dẫn vào Tử Cấm Thành.\nTử Cấm Thành, còn gọi là Cố Cung, là một trong những công trình kiến trúc và di sản văn hóa vĩ đại nhất của Trung Quốc. Đây là nơi sinh sống của các hoàng đế Trung Hoa qua các triều đại Minh và Thanh, đồng thời là trung tâm quyền lực và văn hóa trong suốt hơn 500 năm.\nBạn có thể hoá thân thành Hoàng hậu, Hoàng Quý phi...trong trang phục nhà Thanh ( chi phí tự túc)\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng sau đó về khách sạn nghỉ ngơi\nBuổi chiều : đoàn dạo phố Hutong , tên gọi dành cho những con ngõ nhỏ, dài và hẹp len lỏi giữa các khu dân cư cổ ở Bắc Kinh. Hình thành từ thời Nguyên – Minh – Thanh, các phố Hutong phản ánh cấu trúc xã hội, đời sống sinh hoạt và văn hóa của người dân thủ đô xưa.\nSau đó, Thưởng thức show diễn đặc sắc “Chỉ Có Hồng Lâu Mộng - Kịch Trường Huyễn Thành” chính là nơi biến giấc mơ ấy thành hiện thực. Diễn ra tại nhà hát kịch lớn nhất tỉnh Hà Bắc, đây là một trong những trải nghiệm văn hóa đặc sắc không thể bỏ lỡ khi ghé thăm vùng đất này."
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: BẮC KINH – DI HOÀ VIÊN",
        "title": "BẮC KINH – DI HOÀ VIÊN",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng tại khách sạn và khởi hành đến Di Hoà Viên– cung điện mùa hè\n• Di Hoà Viên - được xây dựng vào năm Càn Long thứ 15 đời nhà Thanh (1750), Đây cũng là khu vườn\nhoàng gia được bảo tồn hoàn chỉnh nhất và được gọi là Bảo tàng Vườn Hoàng gia. Cung điện Mùa hè\nlà sự kết hợp hoàn hảo giữa cảnh quan thiên nhiên bao bọc bởi núi non và nước cùng kiến trúc cung điện hoàng gia.\nBuổi trưa : đoàn ăn trưa tại nhà hàng. Sau bữa trưa, đoàn tham quan :\n• Chùa Đàm Giá: Đàm Giá tự được xây dựng dưới triều đại nhà Kim (265– 420) với tuổi đời khoảng 1.700 năm. Vớivẻ đẹp thanh tịnh, công trình kiến trúc mang nhiều giá trị lịch sử, văn hóa, Đàm Giá tự trở thành danh thắng quan trọng, thu hút đông đảo Phật tử và du khách từ khắp nơi kéo về.\n• Hồ Đồng phố: Đại diện cho một yếu tố văn hóa quan trọng của thành phố Bắc Kinh. Nhờ lịch sử lâu đời của Bắc Kinh và vị thế là thủ đô của sáu triều đại, hầu như mọi hutong đều có giai thoại riêng, và một số thậm chí còn gắn liền với các sự kiện lịch sử.\nBuổi tối: Đoàn dùng bữa tối tại nhà hàng với đặc sản vịt quay Bắc Kinh nổi tiếng. Và về lại khách sạn nghỉ ngơi tận hưởng không gian về đêm ở Bắc Kinh"
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: BẮC KINH – VẠN LÝ TRƯỜNG THÀNH",
        "title": "BẮC KINH – VẠN LÝ TRƯỜNG THÀNH",
        "detail": "Buổi Sáng: Đoàn dùng bữa sáng tại khách sạn và khởi hành đến với Vạn Lý Trường Thành– công trình duy nhất của nhân loại được thấy từ mặt trăng.\nVạn Lý Trường Thành: Vào khoảng năm 220 trước Công nguyên, dưới thời Tần Thủy Hoàng, các phần được nối lạivới nhau để tạo thành một hệ thống phòng thủ thống nhất Việc xây dựng tiếp tục cho đến thời nhà Minh (1368–1644),từ đó Vạn Lý Trường Thành trở thành công trình quân sự lớn nhất thế giới. Tầm quan trọng về mặt lịch sử và chiến lược của nó chỉ được sánh ngang với ý nghĩa về mặt kiến trúc\nCáp Treo Bát Đạt Lĩnh: Du khách sẽ đến với một trong những đoạn Vạn Lý Trường Thành đẹp nhất bằng cáp treo xuyên qua rừng cây xanh xánh vào mùa Xuân Hè, rừng cây thay lá vàng đượm vào mùa Thu và tĩnh mịt sương giá vào mùa Đông tĩnh mịch\nĐoàn dùng bữa trưa sau đó khởi hành về Cổ Bắc thuỷ trấn và nhận phòng khách sạn nghỉ ngơi\nCổ Bắc thuỷ trấn - Ẩn mình bên sườn núi, ngay dưới chân phần Trường Thành Tư Mã đài, Cổ Bắc Thủy Trấn hòa quyện nét cổ kính của miền Bắc Trung Hoa với hơi thở thơ mộng của dòng sông uốn lượn. Những ngôi nhà gạch trát vôi trắng, mái ngói âm dương tối màu san sát nhau, được điểm xuyết bằng khung cửa gỗ chạm khắc tinh xảo.\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng trong cổ trấn, nghỉ ngơi hoặc tự do dạo cổ trấn, đắm mình trong không gian cổ kính xinh đẹp."
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: BẮC KINH – TP HỒ CHÍ MINH",
        "title": "BẮC KINH – TP HỒ CHÍ MINH",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn, tự do dạo chơi trong cổ trấn\nBuổi trưa : Đoàn làm thủ tục trả phòng, trở về lại trung tâm Bắc Kinh, tham quan :\nCông viên Bắc Hải - nằm trên một hòn đảo nhỏ ở trung tâm thủ đô Bắc Kinh, phía tây bắc Tử Cấm Thành. Đây là một trong những khu vườn hoàng gia lâu đời nhất tại Trung Quốc, thường được ví von là “viên ngọc xanh giữa lòng thành phố”. Công viên được xây dựng cách đây hàng nghìn năm, trải qua các triều đại Nguyên, Minh và Thanh.\nBuổi chiều: Đoàn dùng bữa chiều nhẹ tại nhà hàng sau đó khởi hành ra sân bay và đáp chuyến bay về lại TP Hồ Chí Minh\nVề đến Việt Nam, HDV chào tạm biệt đoàn và chúc cho đoàn luôn bình an và hạnh phúc !!!"
      }
    ],
    "inclusions": [
      "Vé máy bay quốc tế khứ hồi TP HCM – Bắc Kinh",
      "Visa nhập cảnh Trung Quốc dành cho cả đoàn",
      "Tất cả các chi phí vé vào cửa cho tất cả các địa điểm du lịch được liệt kê trong hành trình;",
      "Các bữa ăn theo chương trình:Các bữa ăn đặc sản Trung Hoa…",
      "Hướng dẫn viên địa phương",
      "Khách sạn: 4 sao trung tâm thủ đô và 5* ở Cổ Bắc thuỷ trấn 2 khách /phòng. Phòng 3 khi lẻ nam/nữ",
      "Phí dịch vụ & Thuế chính phủ;",
      "Các thỏa thuận bao gồm phí lập kế hoạch, xử lý, vận hành và liên lạc.",
      "Nước uống được cung cấp trong suốt chuyến đi",
      "Bảo hiểm du lịch.",
      "Quà tặng sim điện thoại."
    ],
    "exclusions": [
      "Tiền tip cho hướng dẫn viên và tài xế: 30 USD/khách/ Tour",
      "Các chi phí cá nhân không được nêu trong mục Bao gồm.",
      "Phụ thu phòng đơn nếu quý khách có nhu cầu ngủ riêng (phụ thu 6.000.000 VNĐ/khách/tour)"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-19",
    "code": "GH-19",
    "title": "THANH HẢI CAM TÚC – BƯỚC CHÂN VẠN DẶM",
    "url": "https://goholictravel.com/tour/thanh-hai-cam-tuc/",
    "country": "china",
    "countryName": "Trung Quốc",
    "region": "china",
    "departureFrom": "TP.HCM",
    "startDate": "2025-07-05",
    "departureSchedule": "2025-07-05",
    "duration": "8 ngày 7 đêm",
    "durationCategory": "7-days-tour",
    "month": "thang-10,thang-11,thang-12,thang-06,thang-07,thang-08,thang-09",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "TOUR TRUNG QUỐC",
    "badgeColor": "bg-[#f8af22]",
    "isFeatured": false,
    "price": 53900000,
    "priceDisplay": "53.900.000đ",
    "originalPrice": 60400000,
    "rating": 4.9,
    "reviewsCount": 158,
    "image": "https://goholictravel.com/wp-content/uploads/2025/08/web-Thanhhaicamtuc-559x220.jpg",
    "gallery": [],
    "headMeta": [
      "8 ngày 7 đêm",
      "Nhóm: 15 - 20 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Vé máy bay khứ hồi — Chuyến đi: TP HCM –Thành Đô – Đôn Hoàng",
    "introText": "Vé máy bay khứ hồi\n\nChuyến đi: TP HCM –Thành Đô – Đôn Hoàng\n\nChuyến về: Tây Ninh –Quảng Châu – TPHCM\n\nVisa nhập cảnh TRUNG QUỐC theo đoàn\n\nGiấy thông hành\n\nLưu trú: 02 khách/phòng (phòng Twin/Double). Phòng được được bố trí khi lẻ nam, nữ.\n\nĂn uống:\n\nCác bữa ăn chính Set menu\n\nNước uống 2 chai/ngày.\n\nHướng dẫn viên/Trưởng đoàn công ty GOHOLIC.\n\nHDV địa phương tại các điểm đến\n\nTiệc nướng sa mạc\n\nNước suối hằng ngày (02 chai / 1 khách / 1 ngày)\n\nVé vào Bảo tàng và tất cả các vé thăm quan thắng cảnh\n\nQuà tặng lưu niệm",
    "highlights": [
      "Xe di chuyển theo hành trình",
      "Khách sạn 4 sao và 3 sao tại hồ Thanh Hải",
      "Bữa sáng điểm tâm chọn món và buffet sáng tại khách sạn."
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1:TP HCM – ĐÔN HOÀNG (Ăn tối)",
        "title": "TP HCM – ĐÔN HOÀNG (Ăn tối)",
        "detail": "Buổi sáng: Đoàn sẽ đáp chuyến bay đến với thành phố Đôn Hoàng – Được mệnh danh là thủ phủ di sản phía tây Cam Túc.\nChuyến bay: 3U3904 SGNTFU 0750 1225\nChuyến bay: 3U6357 TFUDNH 1805 2030\nBuổi tối: Hướng dẫn viên địa phương đoán đoàn tại sân bay quốc tế Đôn Hoàng và gửi lời chào nồng nhiệt từ sa mạc Gobi đến với những vị khách đến từ Việt Nam. Đoàn dùng cơm và về lại khách sạn nhận phòng và nghỉ ngơi sau chuyến bay dài.\nThành phố Đôn Hoàng – Di sản rực rỡ trên Con Đường Tơ Lụa. Đôn Hoàng là một thành phố ốc đảo nằm ở rìa sa mạc Takla Makan. So với các thành phố khác ở Trung Quốc, đây là một thành phố tương đối nhỏ. Dân số của thành phố chỉ hơn 100.000 người một chút. Tuy nhiên, hàng năm, thành phố này đón tiếp hàng triệu du khách ghé thăm. Vào thời cổ đại, thành phố là một trong những ngã ba trung chuyển quan trọng trên Con đường tơ lụa vĩ đại. Đây là nơi mà con đường đoàn lữ hành được chia thành Đường phía Bắc, chạy qua vùng đất Uygur và Kyrgyzstan và Đường phía Nam chạy qua Tây Tạng và Afghanistan"
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: ĐÔN HOÀNG – HANG MẠC CAO - NGUYỆT NHA TUYỀN (Ăn sáng, trưa, tối)",
        "title": "ĐÔN HOÀNG – HANG MẠC CAO - NGUYỆT NHA TUYỀN (Ăn sáng, trưa, tối)",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng đầu tiên tại Đôn Hoàng và khởi hành đến với di sản văn hoá Thế Giới, nơi minh chứng sự giao thoa rực rỡ của nền văn hoá từ Đông sang Tây – Hệ Thống Hang Động Mạc Cao Đôn Hoàng.\nMạc Cao Đôn Hoàng: Được xây dựng lần đầu tiên vào năm 366 sau Công nguyên và đại diện cho thành tựu vĩ đại của nghệ thuật Phật giáo từ thế kỷ thứ 4 đến thế kỷ 14. 492 hang động hiện đang được bảo tồn, chứa khoảng 45.000 mét vuông tranh tường và hơn 2.000 tác phẩm điêu khắc được sơn. Các tác phẩm bích hoạ độc đáo tại hang Mạc Cao là nguồn cảm hứng cho nghệ thuận đương đại một cách bất tận với những gam màu sắc vô cùng huyền ảo ẩn chứa tài nghệ hàng ngàn năm của cổ nhân.\nĐoàn tiếp tục đến với một trong những cảnh sắc đặc biệt của Đôn Hoàng đó chính là Nguyệt Nha Tuyền và Minh Sa Sơn. Có hình dạng như một vầng trăng lưỡi liềm, suối đã tồn tại trong hơn 2.000 năm, tạo nên sự tương phản nổi bật với những cồn cát sa mạc xung quanh. Theo truyền thống, đây là điểm dừng chân quan trọng trên Con đường tơ lụa, cung cấp nước và nơi nghỉ ngơi cho các thương nhân và du khách.\nBuổi Tối: Đoàn về dùng cơm tối và nhận phòng nghỉ ngơi. Đây là một buổi tối dành tặng cho quý du khách đến với tiệc tối Hoá Thân Thành Lữ Khách trên con đường Tơ Lụa dùng tiệc tối sa mạc và cưỡi lạc đà đón hoàng hôn Gobi. Quý khách sẽ có thời gian thư giãn dạo chơi tại chợ đêm Sa Châu – tên gọi đầu tiên của Đôn Hoàng với hàng quán sầm uất và rất nhiều món ăn mang phong vị địa phương.\n“Gặp Lại Đôn Hoàng” là một chương trình biểu diễn kết hợp cảnh với sự thay đổi và di chuyển liên tục của du khách tham gia vào chương trình. M sự kết hợp đa diện với những. mảnh kiến trúc độc đáo từ Hang Mạc Cao, bích hoạ, cổ vật, lối sống, tập quán, văn hoá,…gặp Lại Đôn Hoàng chắc chắn là một điểm nhấn độc đáo cho chuyến đi của chính bạn. (Chi phí tự túc)"
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: ĐÔN HOÀNG – TRƯƠNG DỊCH (Ăn Sáng, Trưa, Tối)",
        "title": "ĐÔN HOÀNG – TRƯƠNG DỊCH (Ăn Sáng, Trưa, Tối)",
        "detail": "Buổi sáng: Quý đoàn dùng bữa sáng tại khách sạn và khởi hành đến với thành phố Trương Dịch. Trên đường đi quý khách sẽ tự tay vé nên bức tranh thiên nhiên tuyệt mỹ của chính mình bằng sự đối lập của màu sắc và thuỷ mặc.\nGia Dục Quan - Thiên Hạ Đệ Nhất Hùng Quan (Cửa quan ải lớn nhất trong thiên hạ): là một trong những điểm dừng chân quan trọng của Con đường Tơ Lụa lịch sử. được xây dựng vào năm 1372, là một trong những cửa ải quan trọng của Vạn Lý Trường Thành, có vai trò chiến lược không chỉ trong việc phòng thủ mà còn trong giao thương trên Con đường Tơ Lụa – con đường lịch sử đã gắn kết các nền văn hóa và thương mại giữa phương Đông và phương.\nĐại Địa Chi Tử - Vô Giới: Tại sa mạc Gobi này, Đổng Thư Băng, phó khoa Mỹ thuật của Đại học Thanh Hoa. đã xây dựng một trục tọa độ nghệ thuật kết hợp giữa truyền thống và đổi mới, nghệ thuật và công nghệ giữa vùng hoang dã rộng lớn với các tác phẩm \"Con của Trái đất\", \"Vô biên\". Những tác phẩm này không chỉ vượt qua ranh giới giữa nghệ thuật điêu khắc và nghệ thuật sắp đặt mà còn tạo nên một không gian độc đáo tại giao điểm của nền văn hóa phương Đông và phương Tây, tỏa sáng rực rỡ với ngôn ngữ nghệ thuật và tác động thị giác độc đáo.\nBuổi tối: Đoàn đến với thành phố Trương Dịch cùng cơm và nghỉ ngơi tại khách sạn."
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: TRƯƠNG DỊCH - ĐAN HÀ – THANH HẢI – (Ăn sáng, trưa, tối)",
        "title": "TRƯƠNG DỊCH - ĐAN HÀ – THANH HẢI – (Ăn sáng, trưa, tối)",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng và đến với tỉnh Thanh Hải và bước vào cảnh cửa tự nhiên của cao nguyên lớn nhất Thế Giới.\nĐịa Mạo Đan Hà - “Núi bảy màu”: tại thành phố Trương Dịch, tỉnh Cam Túc, Trung Quốc nằm trong khu vực đồi núi, với hình dáng độc đáo, màu sắc sặc sỡ và vẻ đẹp hùng vĩ. Hay còn gọi là Thất Thải Đan hà – đây là một dạng địa mạo độc đáo với tùng vệt màu sắc được in trên vách núi nhưng những mảnh lụa rực rỡ vắt qua bầu trời xanh ngắt của Con Đường Tơ Lụa huyền thoại.\nĐây chính là loại hình địa mạo riêng có ở một số địa phương của Trung Quốc, được UNESCO vinh danh là di sản thiên nhiên thế giới năm 2010. Nằm ở tỉnh Cam Túc, miền tây bắc Trung Quốc, công viên địa chất Trương Dịch với địa mạo Đan Hà nổi bật và độc đáo, được UNESCO công nhận là công viên địa chất thế giới năm 2020.\nHồ Thanh Hải – trái tim của cao nguyên và tỉnh Thanh Hải: còn được gọi là Kokonor và Hồ Thanh Hải, là hồ nước mặn và hồ nội địa lớn nhất Trung Quốc với vẻ đẹp thiên nhiên quyến rũ và vô số loài chim. Hẳng năm vào mùa hè khaongr tháng 7 tháng 8 những cánh đồng hoa cải dầu rực rỡ sắc vàng nở bung rực rỡ với những cánh hoa đung đưa trong con gió dịu mát của hồ. Khu thắng cảnh còn có những ngọn núi phủ tuyết ngoạn mục (bao gồm cả Dãy núi Tangula và Dãy núi Côn Luân) bao quanh cũng như sự pha trộn văn hóa của một số sắc dân thiểu số Trung Quốc (như Tây Tạng, Mông Cổ và Hồi).\nBuổi tối: Đoàn nghỉ ngơi tại Thanh Hải và dùng cơm tối với những món ăn địa phương vô cùng đặc sắc."
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: THANH HẢI -HỒ MUỐI SÁT NHĨ HÃN (QARHAN) - CÁCH NHĨ MỘC (Ăn sáng, trưa, tối)",
        "title": "THANH HẢI -HỒ MUỐI SÁT NHĨ HÃN (QARHAN) - CÁCH NHĨ MỘC (Ăn sáng, trưa, tối)",
        "detail": "Buổi Sáng: Sau bữa sáng tại khách sạn đoàn trả phòng và đến với thành phố lớn thứ 2 tại tỉnh Thanh Hải và vượt qua các con đèo trên 4000m so với mực nước biển cùng cảnh quan vô cùng ngoạn mục của của ngõ Hymalaya.\nHồ Muối Sát Nhĩ Hãn (Qarhan): Hồ muối lớn thứ hai thế giới và lớn nhất Trung Quốc với cả muối rắn và muối lỏng. Lớp phủ muối dày 15-18 mét tạo thành một cây cầu muối tự nhiên. Tổng chiều dài của cây cầu là 32 km, có thể đạt tới 10 ngàn zhang. Con đường bằng phẳng và trơn tru trên cầu, và cảnh quan của núi và hồ, đẹp đến mức có thể được gọi là \"vô song trên thế giới\".\nHoa Muối Ngàn Đảo: Đây là một công trình được kết tinh từ muối tạo ra một bông hoa khổng lồ giữa một hồ muối xanh ngắt màu ngọc bích. Công trình như một đài phun nước tự nhien tạo ra những dòng thác của muối trắng xoá như lạc vào chốn bồng lai.\nBuổi tối: Ăn tối và Nghỉ đêm tại Cách Nhĩ Mộc.\nCách Nhĩ Mộc: Golmud là một thành phố cấp huyện thuộc Châu tự trị dân tộc Mông Cổ và Tạng Hải Tây , tỉnh Thanh Hải. Nó nằm ở trung tâm và một phần phía tây của tỉnh Thanh Hải và vùng đất phía sau của cao nguyên Thanh Hải-Tây Tạng . Địa hình trong khu vực này rất phức tạp và có thể được chia thành hai phần: cao nguyên lưu vực và chân phía bắc của dãy núi Tanggula. Vào thời kỳ đầu, bộ tộc Thổ Dục Hồn của người Liêu Đông Tiên Ti di chuyển đến vùng Cam Túc-Thanh Hải và thành lập Vương quốc Thổ Dục Hồn, một chính phủ liên minh tập trung vào người Tiên Ti và các thủ lĩnh của nhiều người Khương. Khu vực Golmud trở thành lãnh thổ của Vương quốc Tuyuhun. Vào năm 663 sau Công nguyên , Thổ Phiên đã tiêu diệt Vương quốc Tuyuhun và chiếm đóng lãnh thổ cũ của Tuyuhun. Từ đó trở đi, những người du mục ở khu vực Golmud dần dần trở thành người Tây Tạng ."
      },
      {
        "day": "Ngày 6",
        "fullDayTitle": "Ngày 6: CÁCH NHĨ MỘC – HỒ MUỐI CHAKA - THỊ TRẤN CHAKA (Ăn sáng, trưa, tối)",
        "title": "CÁCH NHĨ MỘC – HỒ MUỐI CHAKA - THỊ TRẤN CHAKA (Ăn sáng, trưa, tối)",
        "detail": "Buổi Sáng: Ăn sáng tại khách sạn và khỏi hành về lại thị trấn Chaka trên con đường tuyệt đẹp quốc lộ G6 và G109.\nHồ Muối Chaka Đây là một mỏ muối quan trọng ở Thanh Hải với nguồn tài nguyên muối dồi dào. Với làn nước trong xanh như pha lê, lớp muối trắng và những ngọn núi phủ tuyết xung quanh, quang cảnh thiên đường thu hút hàng triệu du khách và nhiếp ảnh gia đến đây mỗi năm. Các danh lam thắng cảnh xung quanh hồ bao gồm Khu danh lam thắng cảnh Hồ muối Chaka và Sky No.1 mới phát triển ở bờ hồ phía tây.\nChuyến xe lửa lên bầu trời: Một hành trình thật sự đáng yêu cho chuyến xe lửa chầm chậm băng qua mặt hồ muối đến với những cảnh sắc đặc trưng với những áng mây trắng bồng bềnh trên nền trời xanh thẳm.\nHồ muối Chaka cũng nổi tiếng với các tác phẩm điêu khắc muối, và các tác phẩm điêu khắc tiêu biểu nhất là Tác phẩm điêu khắc muối của Thành Cát Tư Hãn , Tác phẩm điêu khắc muối của Dân tộc Tĩnh Pha , Tác phẩm điêu khắc muối của Cuộc gặp gỡ tại Hồ Ngọc và Tác phẩm điêu khắc muối của Ngô Tiên . Những tác phẩm điêu khắc này thật tráng lệ, thể hiện sự tôn trọng và vinh danh nhà lãnh đạo vĩ đại của Mông Cổ \"Thành Cát Tư Hãn\", các nhóm dân tộc Tĩnh Pha.\nBuổi tối: Quý khách nhận phòng và nghỉ ngơi tại khách sạn."
      },
      {
        "day": "Ngày 7",
        "fullDayTitle": "Ngày 7: CHAKA – TU VIỆN KUMBUM - BẢO TÀNG TÂY TẠNG – TÂY NINH (Ăn sáng, trưa, tối)",
        "title": "CHAKA – TU VIỆN KUMBUM - BẢO TÀNG TÂY TẠNG – TÂY NINH (Ăn sáng, trưa, tối)",
        "detail": "Buổi sáng: Quý khách dùng bữa sáng tại khách sạn và trả phòng về lại với thành phố Tây Ninh - tỉnh lị của tỉnh Thanh Hải\nTu viện Kumbum: được thành lập vào năm 1583 trong một thung lũng hẹp gần làng Lusar ở vùng Amdo lịch sử của Tây Tạng. Tu viện Kumbum là nơi ở của hơn 800 nhà sư và là một quần thể kiến ​​trúc tuyệt đẹp, rực rỡ sắc màu. Đây chính là nơi sinh của đại sư Tông Khách Ba – vị tổ sư của phái Gelungpa (Phaí Mũ Vàng) và là nhà cải cách Phật Giáo Mật Tông Kim Cương Thừa vô cùng nổi tiếng.\nBảo tàng văn hoá Tây Tạng – Thanh Hải: Dân tộc Tạng tại Thanh Hải là một nhóm dân tốc cốt yếu với lối sông du mục và văn hoá lâu đời. Nay chính là nơi lưu giữ và trưng bày những giá trị vô cùng rực rỡ của đời sống du mục và sự giao thoa văn hoá giữa các nhóm dân tộc. Điểm nhấn của bảo tàng là \"Thangka vĩ đại\" dài 618 mét, không có bức tranh nào sánh bằng trên thế giới. Cần đến ba mươi bảy năm để 400 học sinh và nghệ sĩ tái hiện toàn bộ Phật giáo: các vị thần, biểu tượng, lịch sử và giáo lý của đạo Phật. Chỉ riêng tác phẩm này cũng xứng đáng được ghé thăm Tây Ninh.\nPhố Hồi Giáo Tây Ninh Thanh Hải: Thanh Hải còn là nơi sinh sống của dân tộc Hồi với các Thánh Đường Hồi Giáo vô cùng tráng lệ, xung quanh đó chính là các con phố mang đậm tính chất văn hoá với những món ăn đường phố vô cùng hấp dẫn. Quý khách có cơ hội thưởng thức ẩm thực địa phương như: cưu nướng xiêng, bánh bao thịt dê nướng, mì bò sate,…\nBuổi tối: Đoàn về đến Tây Ninh và nhận phòng nghỉ ngơi tại khách sạn sau một chặng đi dài."
      },
      {
        "day": "Ngày 8",
        "fullDayTitle": "Ngày 8: TÂY NINH – TP HCM (Ăn sáng)",
        "title": "TÂY NINH – TP HCM (Ăn sáng)",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng tại khách sạn và nghỉ ngơi cho chuyến hành trình về lại Việt Nam.\nBuổi Trưa: Đoàn ra trở lại sân bay Tào Gia Bảo – Tây Ninh và đáp chuyến bay về lại Thành Phố Hồ Chí Minh.\nChuyến bay dự kiến:\nChuyến bay nội địa: CZ3250 XNNCAN 11:10 – 14:35\nChuyến bay quốc tế: CZ367 CANSGN 20:15 – 22:00\nBuổi Tối: Đoàn về đến Việt Nam, HDV chào tạm biệt và hẹn gặp lại quý khách lần sau, chúc cho cả đoàn luôn dồi dào sức khoẻ, thật nhiều niềm vui và hạnh phúc !!!"
      }
    ],
    "inclusions": [
      "Vé máy bay khứ hồi",
      "Chuyến đi: TP HCM –Thành Đô – Đôn Hoàng",
      "Chuyến về: Tây Ninh –Quảng Châu – TPHCM",
      "Visa nhập cảnh TRUNG QUỐC theo đoàn",
      "Giấy thông hành",
      "Xe di chuyển theo hành trình",
      "Lưu trú: 02 khách/phòng (phòng Twin/Double). Phòng được được bố trí khi lẻ nam, nữ.",
      "Khách sạn 4 sao và 3 sao tại hồ Thanh Hải",
      "Ăn uống:",
      "Bữa sáng điểm tâm chọn món và buffet sáng tại khách sạn.",
      "Các bữa ăn chính Set menu",
      "Nước uống 2 chai/ngày.",
      "Hướng dẫn viên/Trưởng đoàn công ty GOHOLIC.",
      "HDV địa phương tại các điểm đến",
      "Tiệc nướng sa mạc",
      "Nước suối hằng ngày (02 chai / 1 khách / 1 ngày)",
      "Vé vào Bảo tàng và tất cả các vé thăm quan thắng cảnh",
      "Quà tặng lưu niệm"
    ],
    "exclusions": [
      "Chi phí các dịch vụ không được liệt kê trong phần Bao gồm.",
      "Phụ thu phòng đơn: (Áp dụng cho khách yêu cầu ở riêng 1 phòng)",
      "VAT",
      "Các chi phí cá nhân",
      "Tiền Tip cho Tour Leader, Hướng dẫn viên và Lái xe (tối thiểu 56USD/khách/tour)",
      "Phụ thu phòng đơn 15.000.000 VNĐ/khách – nếu quý khách có nhu cầu ngủ phòng riêng hoặc không có khách ghép chung."
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-20",
    "code": "GH-20",
    "title": "Tranh Vân Du Ký 8N7D",
    "url": "https://goholictravel.com/tour/tranh-van-du-ky-8n7d/",
    "country": "china",
    "countryName": "Trung Quốc",
    "region": "china",
    "departureFrom": "TP.HCM",
    "startDate": "2025-07-01",
    "departureSchedule": "2025-07-01",
    "duration": "8 ngày 7 đêm",
    "durationCategory": "7-days-tour",
    "month": "thang-10,thang-11,thang-12,thang-06,thang-07,thang-08,thang-09",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "TOUR TRUNG QUỐC",
    "badgeColor": "bg-[#31c0cc]",
    "isFeatured": false,
    "price": 29890000,
    "priceDisplay": "29.890.000đ",
    "originalPrice": 33500000,
    "rating": 4.9,
    "reviewsCount": 165,
    "image": "https://goholictravel.com/wp-content/uploads/2025/06/thanh-van-du-ky-1200x675.jpg",
    "gallery": [],
    "headMeta": [
      "8 ngày 7 đêm",
      "Nhóm: 15 - 20 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Check in Cam Hải Tử, Bạch Thuỷ Hà, Lam Nguyệt Cốc.",
    "introText": "Check in Cam Hải Tử, Bạch Thuỷ Hà, Lam Nguyệt Cốc.\n\nNgắm nhìn sự hùng vĩ của Khe Hổ Nhảy\n\nCheck in Đền Tùng Tán Lâm Tự\n\nThành Cổ Độc Khắc Tông\n\nĐạp xe quanh Hồ Nhĩ Hải\n\nDạo bước Sa khê cổ trấn\n\nTặng sim 5G",
    "highlights": [
      "Chinh phục đỉnh Băng Xuyên 4.600m và thưởng thức show Ấn tượng Lệ Giang trên núi tuyết",
      "Khám phá thành cổ Lệ Giang, Bạch Sa cổ trấn",
      "Khách sạn trung tâm, cổ trấn với lối kiến trúc cổ tuyệt chọn lọc.",
      "Khám phá ẩm thực vùng đất Vân Nam.",
      "HÀNH TRÌNH “NO SHOPPING”",
      "Khách sạn 4* với lối kiến trúc cổ độc đáo nằm ngay phố cổ"
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1:TP HCM – CÔN MINH ( ăn nhẹ )",
        "title": "TP HCM – CÔN MINH ( ăn nhẹ )",
        "detail": "Hướng dẫn viên Goholic đón đoàn tại sân bay Quốc tế Tân Sơn Nhất trước 3 tiếng trước giờ bay để làm thủ tục bay đến Côn Minh, thủ phủ của tỉnh Vân Nam. ( đoàn ăn nhẹ tại sân bay )\nChuyến bay dự kiến từ TP. HCM : SGN – KMG MU 1930 – 23:30\nĐáp Côn Minh, đoàn làm thủ tục nhập cảnh sau đó di chuyển về trung tâm TP.Côn Minh nhận phòng khách sạn nghỉ ngơi\nKhách sạn dự kiến : https://www.trip.com/hotels/kunming-hotel-detail-6445994/hna-business-hotel-kunming-airport/"
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: CÔN MINH – ĐẠI LÝ (Ăn sáng, trưa, tối)",
        "title": "CÔN MINH – ĐẠI LÝ (Ăn sáng, trưa, tối)",
        "detail": "Buổi sáng : đoàn dùng bữa sáng tại khách sạn sau đó di chuyển đến Đại Lý.\nĐến Đại Lý, đoàn dùng bữa trưa tại nhà hàng sau đó di chuyển đến tham quan :\nChùa Sùng Thánh – Tam tháp Đại Lý ( bối cảnh trong bộ phim Thiên Long Bát Bộ ) được xây dựng từ thời vương quốc Đại Lý của người dân tộc Bạch (937-1253). Ngôi chùa này không chỉ là một công trình tôn giáo mà còn là trung tâm giáo dục, văn hóa và chính trị của các triều đại xưa. Sùng Thánh Tự còn nổi tiếng trong lịch sử khi có 9 vị vua Đại Lý xuất gia làm Tăng, điều này càng làm tăng thêm sự linh thiêng và uy tín của chùa.\nHồ Nhĩ Hải – bối cảnh trong bộ phim Đi đến nơi có gió, một trong tứ đại mỹ quan theo cách gọi “phong – hoa – tuyết – nguyệt” ở Đại Lý. Sau đó, đoàn di chuyển về thành cổ Đại Lý, nhận phòng khách sạn nghỉ ngơi.\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng, tự do khám phá phố cổ Đại Lý về đêm.\nKhách sạn dự kiến : https://www.trip.com/hotels/dali-hotel-detail-435948/regent-hotel/?locale=en_xx"
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3:ĐẠI LÝ – SHANGRILA (Ăn sáng, trưa, tối)",
        "title": "ĐẠI LÝ – SHANGRILA (Ăn sáng, trưa, tối)",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn sau đó làm thủ tục trả phòng và bắt đầu hành trình tham quan :\nKhe Hổ Khiêu - Hổ nhảy (Tiger Leaping Gorge): thẳng cảnh thiên nhiên kỳ thú này là một hẻm núi sâu, dài và hẹp nhất thế giới. Nơi đây dòng sông Trường Giang bị chặn bởi hai dãy núi cao Ngọc Long (5600m) và Habar (5396m), đột ngột thót nhỏ lại một đoạn dài 16km, chiều sâu tính từ đỉnh núi xuống đáy hẻm là gần 3900m.\nSau đó, đoàn dùng bữa trưa tại nhà hàng rồi di chuyển lên Shangrila, nhận phòng khách sạn nghỉ nghơi\nBuổi chiều : Thành cổ DuKeZong (Thành cổ Ánh Trăng) - Nơi tập trung sinh sống lâu đời của người Tạng có tuổi đời trên 1.300 năm được bảo tồn tốt nhất ở Trung Quốc,chiêm ngưỡng hàng trăm căn nhà kiểu Tây Tạng cổ xưa được gìn giữ cẩn thận, được những người Tạng hiếu khách giới thiệu những nét văn hóa đặc trưng của người Tạng\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng, tự do khám phá phố cổ về đêm.\nKhách sạn dự kiến :https://hk.trip.com/hotels/shangri-la-hotel-detail-23817695/the-5th-meteorite-grace-hotel/"
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: SHANGRILA – LỆ GIANG (Ăn sáng, trưa)",
        "title": "SHANGRILA – LỆ GIANG (Ăn sáng, trưa)",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại nhà hàng sau đó di chuyển đi tham quan :\nĐền Songzanlin ( Tùng Tán Lâm Tự ): hình ảnh thu nhỏ của Cung điện Potala (Tây Tạng) nằm trên độ cao 3200m, nơi tập trung những nét văn hóa tiêu biểu của người Tạng, được xây dựng từ năm 1679 bởi vị Lạt ma thứ 5, hiện được bảo tồn nguyên vẹn.\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng sau đó di chuyển về Lệ Giang.\nĐến Lệ Giang, đoàn tham quan :\nBạch Sa cổ trấn : là một trong những thị trấn cổ lâu đời nhất của Lệ Giang. Từng là trung tâm kinh tế, chính trị và văn hóa trước thời nhà Minh, vì thế nơi đây vẫn còn lưu giữ rất nhiều công trình kiến trúc cổ có giá trị và ý nghĩa về văn hóa cũng như lịch sử.\nThành cổ Lệ Giang : còn được gọi là Thành cổ Đại Nghiêm – được UNESCO cấp chứng nhận Di sản văn hoá thế giới năm 1997. Thành cổ Lệ Giang xây dựng cách đây hơn 800 năm, là một di sản văn hóa thế giới với phong cảnh đẹp đẽ, được mệnh danh là \"Venice của Phương Đông\", nơi đây nhà nhà đều có suối chảy xinh xắn.\nBuổi tối : Dùng bữa tối tại nhà hàng sau đó tự do khám phá cổ trấn Lệ Giang về đêm.\nKhách sạn dự kiến : https://www.trip.com/hotels/lijiang-hotel-detail-437683/xiangtai-hotel/?locale=en_xx"
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: NÚI TUYẾT NGỌC LONG (Ăn sáng, trưa, tối)",
        "title": "NÚI TUYẾT NGỌC LONG (Ăn sáng, trưa, tối)",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn, sau đó di chuyển đến cáp treo núi tuyết Ngọc Long.\nNúi Tuyết Ngọc Long cách trung tâm phố cổ Lệ Giang về phía Bắc, quanh năm tuyết phủ trắng bao phủ một khu vực rộng lớn giống như con rồng lớn nên được gọi là “Ngọc Long”. Nơi đây còn được so sánh với “Thụy Sĩ Á Đông” như rặng Pyrenes (ngọn núi nổi tiếng tại biên giới Pháp và Thụy Sỹ). Đoàn đi cáp treo lớn lên núi với độ cao 4600m lên đỉnh Băng Xuyên và chụp ảnh lưu niệm .\nXXDùng bữa trưa tại nhà hàng trong núi tuyết Ngọc Long sau đó tiếp tục tham quan :\nCam Hải Tử, Sông Bạch Thuỷ Hà, Lam Nguyệt Cốc, Ngọc Thuỷ Trại ... với xe điện trong khu thắng cảnh. ( bao gồm vé xe điện )\nThưởng thức show diễn “ Ấn tượng Lệ Giang “ trên núi tuyết với sự góp mặt của hơn 500 diễn viên và không gian ngoài trời hoành tráng.\nLưu ý : Trường hợp cáp lên đỉnh núi Ngọc Long sửa chữa, thời tiết xấu hoặc mùa cao điểm không thể đi cáp lớn lên núi 4500m đoàn chuyển sang đi cáp Vân Tam Bình (Gồm xe điện di chuyển tới Vân Tam Bình)\nBuổi Chiều : Đoàn di chuyển về khách sạn nghỉ ngơi, tự do khám phám Lệ Giang\nBuổi tối : Dùng bữa tối tại nhà hàng sau đó tự do khám phá cổ trấn Lệ Giang về đêm hoặc có thể đăng kí xem show Lệ Giang thiên cổ tình ( bao gồm )\nKhách sạn dự kiến : https://www.trip.com/hotels/lijiang-hotel-detail-437683/xiangtai-hotel/?locale=en_xxttps://www.trip.com/hotels/lijiang-hotel-detail-437683/xiangtai-hotel/?locale=en_xx"
      },
      {
        "day": "Ngày 6",
        "fullDayTitle": "Ngày 6: LỆ GIANG – CÔN MINH (Ăn Sáng, Trưa, tối )",
        "title": "LỆ GIANG – CÔN MINH (Ăn Sáng, Trưa, tối )",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn sau đó làm thủ tục trả phòng, di chuyển đến Sa Khê cổ trấn – cổ trấn duy nhất còn nguyên vẹn nằm trên con đường “ Trà mã cổ đạo ” và cũng là bối cảnh trong bộ phim “ đi đến nơi có gió ” nổi tiếng .\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng trong cổ trấn sau đó di chuyển về lại Lệ Giang.\nBuổi chiều : Đoàn tự do khám phá phổ cổ Lệ Giang, tự do thưởng thức ẩm thực phố cổ. Đây là bữa tối tự túc để đoàn có cơ hội thưởng thức ẩm thực đường phố của Lệ Giang"
      },
      {
        "day": "Ngày 7",
        "fullDayTitle": "Ngày 7: LỆ GIANG – CÔN MINH (Ăn Sáng, Trưa, tối )",
        "title": "LỆ GIANG – CÔN MINH (Ăn Sáng, Trưa, tối )",
        "detail": "Buổi sáng : Buổi sáng, đoàn dùng bữa sáng tại khách sạn sau đó di chuyển ra ga tàu cao tốc, trải nghiệm tàu cao tốc về Côn Minh.\nChuyến tàu dự kiến : 08:10 – 12:03 ( 4 tiếng )\nBuổi trưa : Đến Côn Minh, đoàn dùng bữa trưa tại nhà hàng với đặc sản Bún qua cầu sau đó tham quan :\nPhố Nam Bình, phố Kim Mã – con phố đi bộ sầ uất của Côn Minh với các món ăn và các thương hiệu mua sắm, quà lưu niệm nổi tiếng\nBuổi tối : đoàn dùng bữa tối tại nhà hàng với món đặc sản lẩu nấm Vân Nam sau đó về khách sạn nghỉ ngơi.\nKhách sạn dự kiến : https://www.trip.com/hotels/kunming-hotel-detail-114656931/langxi-hotel/"
      },
      {
        "day": "Ngày 8",
        "fullDayTitle": "Ngày 8: CÔN MINH – TP.HCM ( Ăn sáng , trưa )",
        "title": "CÔN MINH – TP.HCM ( Ăn sáng , trưa )",
        "detail": "Buổi sáng : Đoàn thức dậy dùng bữa sáng sau đó di chuyển đi tham quan :\nHồ Điền Trì – được mệnh danh là viên ngọc Minh Châu của Côn Minh và ngắm chim hải âu. Hồ Điền Trì có hình dạng lượn sóng, với kích thước khoảng 39km chiều dài và 13km chiều rộng được bao quanh bởi các dãy núi từ các hướng khác nhau với bốn ngọn đồi này tạo nên một phong cảnh tuyệt đẹp như trong tranh vẽ, khiến du khách không thể không mê mẩn và thích thú khi đến đây.\nSau đó, đoàn trở về khách sạn nhận phòng nghỉ ngơi, tự do dạo phố, shopping trên các con phố tập nập\nBuổi trưa : Đoàn làm thủ tục trả phòng sau đó di chuyển đến nhà hàng dùng bữa trưa\nSau bữa trưa, đoàn di chuyển ra sân bay để làm thủ tục bay về TP.HCM\nChuyến bay dự kiến : KMG – SGN 16:25 – 18:30\nVề đến TP.HCM, Goholic chia tay và hẹn gặp lại đoàn"
      }
    ],
    "inclusions": [
      "Vé máy bay quốc tế khứ hồi Tp HCM – Côn Minh– TP.HCM",
      "Visa nhập cảnh Trung Quốc dành cho cả đoàn.",
      "Chuyến tàu cao Lệ Giang – Côn Minh",
      "Tất cả các chi phí vé vào cửa cho tất cả các địa điểm du lịch được liệt kê trong hành trình;",
      "Các bữa ăn đặc sắc Trung Hoa : lẩu bò Yak, lẩu nấm Vân Nam, lẩu cá hồi, 1 bữa bún qua cầu…các bữa ăn chất lượng 12 – 14 món/bữa",
      "Xe du lịch đời mới 45 chỗ",
      "Hướng dẫn viên địa phương và trưởng đoàn đi từ Việt Nam",
      "Khách sạn: 4* sao cho toàn hành trình tiêu chuẩn (02 khách/phòng- phòng 3 người trường hợp đi lẻ nam hoặc nữ), các khách sạn trung tâm, kiến trúc cổ kính",
      "Phí dịch vụ & Thuế chính phủ",
      "Các thỏa thuận bao gồm phí lập kế hoạch, xử lý, vận hành và liên lạc.",
      "Nước uống được cung cấp trong suốt chuyến đi",
      "Bảo hiểm du lịch.",
      "Quà tặng từ GOHOLIC nón, sim Internet…"
    ],
    "exclusions": [
      "Tiền tip cho hướng dẫn viên và tài xế: 42USD/khách/ Tour",
      "Các chi phí cá nhân không được nêu trong mục Bao gồm.",
      "Phụ thu phòng đơn nếu quý khách có nhu cầu ngủ riêng (phụ thu 6.000.000 VNĐ/khách/tour)"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-21",
    "code": "GH-21",
    "title": "Đường tàu Thanh Tạng",
    "url": "https://goholictravel.com/tour/duong-tau-thanh-tang/",
    "country": "china",
    "countryName": "Trung Quốc",
    "region": "china",
    "departureFrom": "TP.HCM",
    "startDate": "2025-06-20",
    "departureSchedule": "2025-06-20",
    "duration": "10 ngày 9 đêm",
    "durationCategory": "7-days-tour",
    "month": "thang-10,thang-11,thang-12,thang-06,thang-07,thang-08,thang-09",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "TOUR TRUNG QUỐC",
    "badgeColor": "bg-emerald-600",
    "isFeatured": false,
    "price": 66890000,
    "priceDisplay": "66.890.000đ",
    "originalPrice": 74900000,
    "rating": 4.9,
    "reviewsCount": 172,
    "image": "https://goholictravel.com/wp-content/uploads/2025/06/thanh-tang-1200x675.jpg",
    "gallery": [],
    "headMeta": [
      "10 ngày 9 đêm",
      "Nhóm: 15 - 20 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Bạn thân mến, — Hãy tưởng tượng một chuyến hành trình đưa bạn từ những thảo nguyên xanh mướt đến vùng đất cao nguyên huyền bí, nơi được mệnh danh là “Nóc nhà thế giới”. Chuyến tàu Thanh Tạng (Qinghai-Tibet Railway) là cánh cổng mở ra vùng đất Tây Tạng – nơi thiên nhiên và tâm linh hòa quyện, một hành trình không đơn thuần đi du lịch, mà còn là sự khám phá chính mình. Đây sẽ là chuyến đi mang đến cho bạn những trải nghiệm độc đáo và kỳ diệu, từ phong cảnh ngoạn mục đến những giá trị văn hóa và tâm linh sâu sắc của vùng đất cao nhất thế giới.",
    "introText": "Bạn thân mến,\n\nHãy tưởng tượng một chuyến hành trình đưa bạn từ những thảo nguyên xanh mướt đến vùng đất cao nguyên huyền bí, nơi được mệnh danh là “Nóc nhà thế giới”. Chuyến tàu Thanh Tạng (Qinghai-Tibet Railway) là cánh cổng mở ra vùng đất Tây Tạng – nơi thiên nhiên và tâm linh hòa quyện, một hành trình không đơn thuần đi du lịch, mà còn là sự khám phá chính mình. Đây sẽ là chuyến đi mang đến cho bạn những trải nghiệm độc đáo và kỳ diệu, từ phong cảnh ngoạn mục đến những giá trị văn hóa và tâm linh sâu sắc của vùng đất cao nhất thế giới.\n\nChuyến tàu Thanh Tạng (Qinghai-Tibet Railway) được mệnh danh là tuyến đường sắt cao nhất và dài nhất thế giới, nối liền thành phố Thanh Hải (Qinghai) với thủ phủ Lhasa của Tây Tạng. Với chiều dài khoảng 1.956 km, hành trình này không chỉ là một kiệt tác kỹ thuật mà còn là một trải nghiệm độc đáo đưa bạn qua những vùng đất hoang sơ và kỳ diệu của cao nguyên Tây Tạng.\n\nChuyến tàu Thanh Tạng không chỉ là một phương tiện di chuyển, mà còn là một hành trình trải nghiệm văn hóa, khám phá thiên nhiên và hòa mình vào vẻ đẹp kỳ diệu của Tây Tạng. Đây là cơ hội để bạn chiêm ngưỡng “nóc nhà thế giới”, tìm lại sự bình yên trong tâm hồn và cảm nhận những giá trị sâu sắc của cuộc sống.\n\nSau hành trình dài trên chuyến tàu Thanh Tạng, bạn sẽ đặt chân đến Tây Tạng – nơi được mệnh danh là “nóc nhà thế giới”. Đây là vùng đất của những ngọn núi hùng vĩ, những hồ nước thiêng liêng và các công trình kiến trúc mang đậm dấu ấn tâm linh.\n\nCung điện Potala là biểu tượng của Tây Tạng, từng là nơi ở của các đời Đạt Lai Lạt Ma. Với kiến trúc uy nghiêm trên đỉnh đồi Marpo Ri, Potala không chỉ là một di sản văn hóa mà còn là nơi lưu giữ những giá trị tâm linh sâu sắc. Đây là trung tâm tâm linh của Phật giáo Tây Tạng, nơi thu hút hàng ngàn Phật tử hành hương mỗi năm. Tu viện được xây dựng từ thế kỷ thứ 7, mang đậm phong cách kiến trúc Tây Tạng cổ kính.\n\nHồ Yamdrok và Namtso: Hai hồ nước nổi tiếng nhất Tây Tạng với vẻ đẹp huyền bí và thiêng liêng. Hồ Yamdrok với làn nước xanh ngọc bích, còn hồ Namtso được biết đến như một “hồ trời” giữa cao nguyên bao la.\n\nTrại căn cứ Everest (Everest Base Camp)\n\nĐối với những ai yêu thích mạo hiểm, trại căn cứ Everest là điểm đến không thể bỏ qua. Từ đây, bạn có thể ngắm nhìn đỉnh Everest hùng vĩ – ngọn núi cao nhất thế giới. Bạn không quên đảnh lễ ở Tu viện Rongbuk linh thiêng gần đó. Tu viện Rongbuk cũng là tu viện nằm ở độ cao cao nhất trên thế giới.",
    "highlights": [
      "Hãy tưởng tượng một chuyến hành trình đưa bạn từ những thảo nguyên xanh mướt đến vùng đất cao nguyên huyền bí, nơi được mệnh danh là “Nóc nhà thế giới”. Chuyến tàu Thanh Tạng (Qinghai-Tibet Railway) là cánh cổng mở ra vùng đất Tây Tạng – nơi thiên nhiên và tâm linh hòa quyện, một hành trình không đơn thuần đi du lịch, mà còn là sự khám phá chính mình. Đây sẽ là chuyến đi mang đến cho bạn những trải nghiệm độc đáo và kỳ diệu, từ phong cảnh ngoạn mục đến những giá trị văn hóa và tâm linh sâu sắc của vùng đất cao nhất thế giới.",
      "Chuyến tàu Thanh Tạng (Qinghai-Tibet Railway) được mệnh danh là tuyến đường sắt cao nhất và dài nhất thế giới, nối liền thành phố Thanh Hải (Qinghai) với thủ phủ Lhasa của Tây Tạng. Với chiều dài khoảng 1.956 km, hành trình này không chỉ là một kiệt tác kỹ thuật mà còn là một trải nghiệm độc đáo đưa bạn qua những vùng đất hoang sơ và kỳ diệu của cao nguyên Tây Tạng.",
      "Chuyến tàu Thanh Tạng không chỉ là một phương tiện di chuyển, mà còn là một hành trình trải nghiệm văn hóa, khám phá thiên nhiên và hòa mình vào vẻ đẹp kỳ diệu của Tây Tạng. Đây là cơ hội để bạn chiêm ngưỡng “nóc nhà thế giới”, tìm lại sự bình yên trong tâm hồn và cảm nhận những giá trị sâu sắc của cuộc sống.",
      "Sau hành trình dài trên chuyến tàu Thanh Tạng, bạn sẽ đặt chân đến Tây Tạng – nơi được mệnh danh là “nóc nhà thế giới”. Đây là vùng đất của những ngọn núi hùng vĩ, những hồ nước thiêng liêng và các công trình kiến trúc mang đậm dấu ấn tâm linh.",
      "Cung điện Potala là biểu tượng của Tây Tạng, từng là nơi ở của các đời Đạt Lai Lạt Ma. Với kiến trúc uy nghiêm trên đỉnh đồi Marpo Ri, Potala không chỉ là một di sản văn hóa mà còn là nơi lưu giữ những giá trị tâm linh sâu sắc. Đây là trung tâm tâm linh của Phật giáo Tây Tạng, nơi thu hút hàng ngàn Phật tử hành hương mỗi năm. Tu viện được xây dựng từ thế kỷ thứ 7, mang đậm phong cách kiến trúc Tây Tạng cổ kính.",
      "Hồ Yamdrok và Namtso: Hai hồ nước nổi tiếng nhất Tây Tạng với vẻ đẹp huyền bí và thiêng liêng. Hồ Yamdrok với làn nước xanh ngọc bích, còn hồ Namtso được biết đến như một “hồ trời” giữa cao nguyên bao la.",
      "Trại căn cứ Everest (Everest Base Camp)",
      "Đối với những ai yêu thích mạo hiểm, trại căn cứ Everest là điểm đến không thể bỏ qua. Từ đây, bạn có thể ngắm nhìn đỉnh Everest hùng vĩ – ngọn núi cao nhất thế giới. Bạn không quên đảnh lễ ở Tu viện Rongbuk linh thiêng gần đó. Tu viện Rongbuk cũng là tu viện nằm ở độ cao cao nhất trên thế giới."
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1:TP HCM – TÂY NINH",
        "title": "TP HCM – TÂY NINH",
        "detail": "Buổi sáng: Đoàn có mặt tại sân bay Tân Sơn Nhất trước 3 tiếng trước giờ khởi hành, để làm thủ tục check in đáp chuyến bay đến với thành phố Tây Ninh – tỉnh lỵ của tỉnh Thanh Hải và quá cảnh tại sân bay Quảng Châu. Chuyến bay dự kiến :\nChuyến bay quốc tế: CZ3050 SGNCAN 11:45 - 14:35\nChuyến bay nội địa: CZ6241 CANXNN 16:35 – 19:40\nBuổi tối: Đến Tây Ninh, đòan làm thủ tục nhập cảnh, sau đó di chuyển về khách sạn’ nhận phòng và nghỉ ngơi sau chuyến bay dài tại thành phố Tây Ninh."
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: Chuyến tàu Thanh Tạng (Ăn sáng, trưa, tối trên tàu )",
        "title": "Chuyến tàu Thanh Tạng (Ăn sáng, trưa, tối trên tàu )",
        "detail": "Buổi sáng: Đoàn dùng điểm tâm sáng tại khách sạn và nghỉ ngơi tại Tây Ninh.\nBuổi chiều: Sau khi dùng bữa trưa, đoàn di chuyển ra ga tàu,tiếp tục cuộc hành trình đến với thành phố của Chư Thiên – Lhasa.\nChuyến tàu dự kiến Z8981 12:50 – 10:20 Hôm sau (Thời gian tàu chạy là 21g30p – 1.956km)\nTrên chuyến tàu, đoàn sẽ đi qua những điểm đến và chiêm ngưỡng những phong cảnh ngoạn mục của khu vực Amdo thuộc cao nguyên Thanh Tạng.\nHành trình đi xuyên qua hồ nước đẹp nhất Trung Quốc – hồ Thanh Hải, và khu vực không người rộng lớn với khu bảo tồn thiên nhiên Thế Giới – Khả Khả Tây Lý từng xuất hiện trong tập truyện vô cùng nổi tiếng “Mật mã Tây Tạng”.\nToàn bộ cung đường đều có độ cao trung bình trên 4000m so với mực nước biển, với hệ thống Oxi cho cả đoàn tàu , quý khách có thể dễ dàng hoạt động và tận hưởng được cảnh đẹp của vùng cao nguyên Thanh Tạng tại con đèo Tanggula cao 5.072m.\nĐoàn sẽ tự do nghỉ ngơi và chiêm ngưỡng cảnh đẹp trên chuyến tàu Tây Ninh – Lhasa (Thanh Hải – Tây Tạng)."
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: ĐẾN VỚI LHASA (Ăn sáng trên tàu, trưa, tối)",
        "title": "ĐẾN VỚI LHASA (Ăn sáng trên tàu, trưa, tối)",
        "detail": "Buổi sáng: Đoàn đến với thành phố của ánh sáng, thành phố của Chư Thiên, đích đến của Văn Thành Công Chúa trong hành trình đến với cao nguyên Thanh Tạng.\nKết thúc chuyến tàu Thanh Tạng Z8981 12:50 – 10:20. Du khách có mặt tại ga tàu Lhasa.\nHướng dẫn viên địa phương chào đón đoàn với lời chào an lành: “Tashi Delek !!!” – Câu chào bình an và cát tường bằng tiếng Tạng, cùng với chiếc khăn Khanta theo truyền thống dân tộc Tạng. Một lần nữa xin được chào mừng cả đoàn đã đến với Thủ Phủ Lhasa (Lạp Tát) sau chuyến hành trình dài của vùng cao nguyên Thanh Tạng.\nBuổi chiều: Đoàn di chuyển trung tâm thành phố, nhận phòng và nghỉ ngơi.\nĐây là khoảng thời gian quan trọng nhất trong cả chuyến đi, quý khách cần nghỉ ngơi thật tốt và thích nghi dần với độ cao cũng như về điều kiện khí hậu của Tây Tạng – Vùng đất cao nhất Thế Giới.\nBuổi tối: Đoàn dùng cơm tối và và nghỉ ngơi để cơ thể thích nghi với độ cao tại Tây Tạng. Nghỉ đêm tại Lhasa (Khách sạn 4 sao)\nLời khuyên từ chúng tôi:\nUống thuốc chống say độ cao trước 72h\nUống liên tục 6 ngày\n01 viên/lần x 2 lần/ngày, sau bữa ăn\nĂn kèm nhiều Chuối và Táo\nUống nhiều nước, không dùng các chất kích thích như bia rượu, cafe"
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: LHASA – KHÁM PHÁ CÁC TU VIỆN CỔ (Ăn Sáng, Trưa, Tối) Di chuyển trong trung tâm thành phố Lhasa",
        "title": "LHASA – KHÁM PHÁ CÁC TU VIỆN CỔ (Ăn Sáng, Trưa, Tối) Di chuyển trong trung tâm thành phố Lhasa",
        "detail": "Buổi sáng: Quý khách dùng điểm tâm sáng tại khách sạn và bắt đầu chuyến tham quan Lhasa – thành phố của Chư Thiên.\nTu Viện Sera (Sắc Nhạ): Tu viên được thành lập năm 1419 bởi vị vua Lama Jamchen Choje Sakya Yeshe theo lời thỉnh cầu của Đại Sư Tsongkhapa. Hiện nay Sera Monastery là 1 trong 6 tu viện lớn nhất của Hoàng Mạo Giáo (Gelugpa) tại Tây Tạng. Tham quan Vườn Tranh Biện là nơi các tăng sinh tổ chức những cuộc tranh biện vào buổi chiều. Tại đây Quý khách có thể tự do quan sát và chụp ảnh trong khu vườn.\nLàng Dadong: Ngôi làng cổ truyền của người Tạng. Nó chứa đựng những giá trị văn hóa và những dấu tích phát triển của con người theo thời gian. Đến đây bạn còn có thể tìm hiểu về nếp sống của người dân địa phương thông qua những hoạt động hàng ngày của họ tại một gia đình truyền thống của người dân xứ Tạng.\nNhà in Kinh Dege nằm ở phía đông Tây Tạng là nhà in lớn nhất của Tây Tạng và là nơi lưu giữ hơn 300.000 bản khắc cổ. Nhờ nhà in này, văn hóa Tây Tạng đã được kế thừa và bảo vệ từ thế hệ này sang thế hệ khác. Văn hóa Tây Tạng có từ hàng trăm năm trước. Phần lớn văn hóa chữ viết của Tây Tạng đã được bảo tồn cho thế hệ hiện đại ngày nay.\nBuổi tối: Đoàn dùng cơm và nghỉ ngơi tại khách sạn."
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: LHASA – DẤU ẤN VĂN THÀNH (Ăn sáng, trưa, tối) Di chuyển trong trung tâm thành phố Lhasa",
        "title": "LHASA – DẤU ẤN VĂN THÀNH (Ăn sáng, trưa, tối) Di chuyển trong trung tâm thành phố Lhasa",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng tại khách sạn và đến với những địa điểm đặc trưng, được xem như là trái tim của đất Tạng.\nViếng Đại Chiêu Tự -ngôi cổ tự ngàn năm thu hút khách hành hương nhiều nhất ở Tây Tạng, gắn liền với con đường hoành dương Phật giáo của công chúa Trì Tôn và công chúa Văn Thành khi đến với vương quốc Thổ Phồn.\nBuổi chiều: Du khách đến với trái tim của Tây Tạng đại cung điện Potala.\nĐại điện Potala: Công trình được khởi công xây dựng bởi Đức Đạt-lai Lạt-ma thứ 5 vào năm 1645. Là một bảo tàng lịch sử, một Di sản thế giới được UNESCO công nhận từ năm 1994. Tên của nó được đặt theo ngọn núi Potalaka là nơi ở huyền thoại của Quán Thế Âm Bồ Tát.\nCả đoàn sẽ tận hưởng một ngày tại Lhasa với những quán cà phê độc đáo,những dãy phố cổ huyên náo và những điều thật sự đáng yêu tại vùng đất Tây Tạng.\nBuổi tối: Đoàn nghỉ ngơi tại trung tâm Lhasa và dùng cơm tối."
      },
      {
        "day": "Ngày 6",
        "fullDayTitle": "Ngày 6:LHASA – HỒ THIÊN YAMDROK – SHIGATSE (Ăn sáng, trưa, tối) Di chuyển từ Lhasa đến Shigatse 08 – 10 tiếng.",
        "title": "LHASA – HỒ THIÊN YAMDROK – SHIGATSE (Ăn sáng, trưa, tối) Di chuyển từ Lhasa đến Shigatse 08 – 10 tiếng.",
        "detail": "Buổi Sáng: Sau bữa sáng tại khách sạn. Đoàn trả phòng và khởi hành đi Shigatse, là trung tâm thứ hai của Tây Tạng theo con đường Lhasa – hồ Yamdrok – Gyantse – Shigatse là 1 trong những cung đường vàng đẹp nhất trong chuyến hành trình.\nTrên đường đi, ghé tham quan:\nĐèo Gambala, phóng tầm mắt ngút ngàn ngắm hồ Yamdrok\nHồ Yamdrok, nằm ở độ cao 4441m, được coi là 1 trong 4 hồ thiêng nhất toàn Tây Tạng\nVượt lên đèo Karola cao 4960m, tham quan sông băng vĩnh cửu Karola\nSau bữa trưa, đoàn sẽ đến thị trấn Gyantse (Trấn Giang Tử) – điểm dừng quan trọng trên cung đường thăm thú Tsang nằm ở độ cao 4000m. Nghe thuyết minh về lịch sử Tây Tạng và cuộc chiến Gyantse giữa người Tạng và người Anh, còn được biết đến là cuộc chiến trên bộ cao nhất trong lịch sử loài người (gần 5.000m).\nSau khi rời Trấn Giang Tử (Gyantse), đoàn sẽ vượt 90km đường đến với Nhật Khách Tắc (Shigatse) nằm ở độ cao trung bình 3800m so với mực nước biển, là thủ phủ của Tsang và cũng là thành phố lớn thứ 2 sau Lhasa.\nBuổi tối: Ăn tối và Nghỉ đêm tại Shigatse."
      },
      {
        "day": "Ngày 7",
        "fullDayTitle": "Ngày 7: SHIGATSE – TRẠI CĂN CỨ EVEREST Di chuyển từ Shigatse đến EBC từ 9 – 11 tiếng",
        "title": "SHIGATSE – TRẠI CĂN CỨ EVEREST Di chuyển từ Shigatse đến EBC từ 9 – 11 tiếng",
        "detail": "Buổi Sáng: Ăn sáng tại khách sạn và khởi hành đến với hành trình “những giấc mơ” Trại Căn Cứ Everest. Quý khách sẽ đi trên đoạn đường đặc biệt của dãy Hy Mã Lạp Sơn, check in :\nĐèo Gyatsola (5280m). Tại điểm quan sát đèo Gyatsola, bạn sẽ có cái nhìn đầu tiên về đỉnh Everest. Ẩn mình sau dãy núi, Everest giống như một bông sen mới chớm nở, một khung cảnh ven đường quyến rũ.\nKhu bảo tồn thiên nhiên quốc gia Núi Everest, quý khách sẽ được ngắm nhìn toàn cảnh dãy Himalaya tại Đèo Gawula (5198m). Ở góc nhìn này, bạn sẽ ngạc nhiên trước đội hình hùng vĩ của 5 đỉnh núi cao nhất dãy Himalaya, trong đó có đỉnh Everest đứng đầu. Đây là cái nhìn thứ hai của bạn về Everest.\nEverest Base Camp, nơi dừng chân của các nhà leo núi để chính phục đỉnh núi Everest. Nhìn từ xa, đỉnh Everest như hình kim tự tháp màu trắng khổng lồ sừng sững trước mắt bạn. Khi ngày chuyển sang hoàng hôn, hãy chứng kiến ​​sắc vàng của mặt trời tỏa ánh sáng ấm áp lên mặt phía bắc của Everest.\nTu viện Rongbuk là tu viện của giáo phái Nyingma của Phật giáo Tây Tạng. Tu viện được xây dựng vào năm 1902 ở vị trí cách Lhasa khoảng 700km về phía tây nam và cách Kathmandu, Nepal, khoảng 360km về phía đông bắc.\nBuổi tối: Quý khách nhận phòng và nghỉ ngơi tại khách sạn"
      },
      {
        "day": "Ngày 8",
        "fullDayTitle": "Ngày 8: TRẠI CĂN CỨ EVEREST – SHIGATSE (Ăn sáng, trưa, tối) Di chuyển từ EBC về Shigatse từ 9 – 11 tiếng",
        "title": "TRẠI CĂN CỨ EVEREST – SHIGATSE (Ăn sáng, trưa, tối) Di chuyển từ EBC về Shigatse từ 9 – 11 tiếng",
        "detail": "Hôm nay là ngày rất đặc biệt của cả đoàn.\nBuổi sáng: Quý khách sẽ đến trạm Căn Cứ Everest Base Camp.\nĐiểm quan sát Dinggye Xilin: Bạn không chỉ có thể nhìn thấy lại sườn phía đông hùng vĩ của đỉnh Everest cao chót vót mà còn có thể nhìn thấy đỉnh núi cao thứ tư thế giới, Núi Lhotse, đứng ở độ cao 8.516 mét.\nVề đến Shigatse: Tu viện Tashilhunpo - Đây là ngôi nhà tâm linh của người dân Tây Tạng ở Shigatse, nơi có bức tượng Phật Di Lặc lớn nhất thế giới. Vào bên trong, bạn sẽ thấy các nhà sư đội mũ vàng và mặc áo choàng đỏ đang di chuyển quanh chùa. Tu viện Tashilhunpo, cùng với ba tu viện lớn khác là bốn Đại tu viện quan trọng của Phật giáo Tây Tạng, trở thành một trong những điểm hành hương quan trọng không thể bỏ qua khi tới Shigatse.\nBuổi tối: Đoàn về đến Shigatse và nhận phòng nghỉ ngơi tại khách sạn sau một chặng đi dài."
      },
      {
        "day": "Ngày 9",
        "fullDayTitle": "Ngày 9: SHIGATSE – LHASA (Ăn sáng, trưa, tối) Di chuyển từ Shigatse đến Lhasa từ 04 tiếng",
        "title": "SHIGATSE – LHASA (Ăn sáng, trưa, tối) Di chuyển từ Shigatse đến Lhasa từ 04 tiếng",
        "detail": "Buổi Sáng: Ăn sáng tại khách sạn và trở về với thành phố Lhasa\nBuổi Chiều: Xe đưa đoàn về lại thủ phủ Lhasa và nghỉ ngơi sau chuyến đi dài. Đoàn sẽ tự do mua sắm tại chợ địa phương những món pháp khí và những món đồ lưu niệm xinh xắn.\nChợ Barkhor được biết đến là khu quảng trường của người Tây Tạng ở Lhasa, là linh hồn của thủ phủ Lhasa. Chợ nằm ở những con đường hẹp và một quảng trường công cộng. Là nơi đã bảo tồn lối sống truyền thống và thành phố cổ này. Chợ Barkhor là một con đường hành hương duy nhất quanh Đền Jokhang. Người Tây Tạng gọi đó là \"con đường thánh\".\nBuổi Tối: Ăn tối và nghỉ đêm tại Lhasa"
      },
      {
        "day": "Ngày 10",
        "fullDayTitle": "Ngày 10: LHASA – TP HCM (Ăn sáng, trưa) Di chuyển ra sân bay 1 tiếng – 1 tiếng 30 phút",
        "title": "LHASA – TP HCM (Ăn sáng, trưa) Di chuyển ra sân bay 1 tiếng – 1 tiếng 30 phút",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng tại khách sạn, tự do nghỉ ngơi, thưởng thức không khí yên bình của đất trời Tây Tạng\nBuổi Trưa: Đoàn khởi hành di chuyển ra sân bay Gongar Lhasa và đáp chuyến bay về lại Thành Phố Hồ Chí Minh, quá cảnh tại Quảng Châu/Thành Đô/Côn Minh.\nChuyến bay dự kiến:\nChuyến bay nội địa: CZ3464 Z LXACAN 15:00 - 2035\nChuyến bay quốc tế: CZ6089 Z CANSGN 23:25 – 01:35+1\nHoặc\nChuyến bay nội địa: MU9696 LXAKMG 12:00 – 14:30\nChuyến bay quốc tế: CZ6089 Z CANSGN 16:00 – 18:10\nVề đến TP.HCM, kết thúc hành trình khám phá vùng đất thiêng"
      }
    ],
    "inclusions": [
      "Vé máy bay khứ hồi TP HCM – TÂY NINH/LHASA – TPHCM",
      "Chuyến tàu hoả Tây Ninh – Lhasa",
      "Vé máy bay nội địa",
      "Visa nhập cảnh TRUNG QUỐC theo đoàn",
      "Giấy thông hành vào TÂY TẠNG",
      "Xe di chuyển theo hành trình",
      "Lưu trú: 02 khách/phòng (phòng Twin/Double). Phòng 3 được được bố trí khi lẻ nam, nữ.Khách sạn 4 sao trung tâm suốt hành trình",
      "Ăn uống:Bữa sáng điểm tâm chọn món và buffet sáng tại khách sạn.",
      "Các bữa ăn chính Set menu 12 – 14 món đặc sắc, ưu tiên trải nghiệm ẩm thực địa phương",
      "Nước uống 2 chai/ngày.",
      "Hướng dẫn viên/Trưởng đoàn công ty GOHOLIC.",
      "HDV địa phương tại các điểm đến",
      "Vé tham quan du lịch trọn gói theo chương trình.",
      "Bình oxy cho các tường hợp khẩn cấp",
      "Bảo hiểm du lịch trọn gói",
      "Vé vào Bảo tàng và tất cả các vé thăm quan thắng cảnh",
      "Quà tặng lưu niệm vùng Himalayas.",
      "Tặng sim data internet trong suốt hành trình"
    ],
    "exclusions": [
      "Chi phí các dịch vụ không được liệt kê trong phần Bao gồm.",
      "Phụ thu phòng đơn: (Áp dụng cho khách yêu cầu ở riêng 1 phòng)",
      "VAT",
      "Các chi phí cá nhân",
      "Tiền Tip cho Tour Leader, Hướng dẫn viên và Lái xe (tối thiểu 100 usd/khách/tour)"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-22",
    "code": "GH-22",
    "title": "KHÁM PHÁ TỨ XUYÊN SẮC THU CỬU TRẠI",
    "url": "https://goholictravel.com/tour/kham-pha-tu-xuyen-sac-thu-cuu-trai/",
    "country": "china",
    "countryName": "Trung Quốc",
    "region": "china",
    "departureFrom": "TP.HCM/HÀ NỘI",
    "startDate": "2025-10-01",
    "departureSchedule": "2025-10-01",
    "duration": "6 ngày 5 đêm",
    "durationCategory": "5-7-days-tour",
    "month": "thang-10,thang-11,thang-12,thang-06,thang-07,thang-08",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "TOUR TRUNG QUỐC",
    "badgeColor": "bg-rose-600",
    "isFeatured": false,
    "price": 25590000,
    "priceDisplay": "25.590.000đ",
    "originalPrice": 28700000,
    "rating": 4.9,
    "reviewsCount": 179,
    "image": "https://goholictravel.com/wp-content/uploads/2025/06/sac-thu-cuu-trai-1200x675.jpg",
    "gallery": [],
    "headMeta": [
      "6 ngày 5 đêm",
      "Nhóm: 15 - 20 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Chiêm ngưỡng “Thiên đường nơi hạ giới” Cửu Trại Câu.",
    "introText": "Chiêm ngưỡng “Thiên đường nơi hạ giới” Cửu Trại Câu.\n\nCheck – in Quãng trường Ngưỡng Thiên Oa – nổi tiếng với bức tượng gấu trúc khổng lồ đang selfie.\n\nGhé thăm “Gấu Trúc siêu đáng yêu” được mệnh danh là “Quốc Bảo” của Trung Quốc.\n\nCheck in Chung Thư Các – chuỗi thư viện nổi tiếng của Trung Quốc với lối kiến trúc độc\n\nđáo và không gian ấn tượng.\n\nTặng sim Internet.",
    "highlights": [
      "Bay thẳng Hồ Chí Minh/ Hà Nội– Thành Đô – Hồ Chí Minh/ Hà Nôị, hàng không Tứ Xuyên.",
      "Hành trình No Shopping",
      "Khách sạn tiêu chuẩn 4 sao và 2 đêm 5* ở Cửu Trại Câu",
      "Trải nghiệm tàu cao tốc hiện đại nhất Trung Quốc, tiết kiệm thời gian đến Cửu Trại Câu.",
      "Thưởng thức “lẩu Tứ Xuyên” và xem biểu diễn show Xuyên kịch",
      "Thưởng thức bữa “Tiệc Tạng” của người dân tộc Tạng tại cao nguyên Cửu Trại",
      "Khám phá Vũ Hầu Từ và phố cổ Cẩm Lý",
      "Trải nghiệm cáp treo và khám phá núi Thanh Thành"
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1:TP HCM/HÀ NỘI – THÀNH ĐÔ (Ăn nhẹ, tối)",
        "title": "TP HCM/HÀ NỘI – THÀNH ĐÔ (Ăn nhẹ, tối)",
        "detail": "KHỞI HÀNH ĐẾN THÀNH ĐÔ\nTrưởng đoàn Goholic đón hành khách tại ga đi sân bay quốc tế Tân Sơn Nhất/ Nội Bài . Đoàn đáp chuyến bay đến với thành phố Thành Đô – Trung Quốc ( đoàn ăn nhẹ trên máy bay )\nHướng dẫn viên địa phương vào đón đoàn tại sân bay Thiên Phủ - thành phố Thành Đô.\nĐến, đoàn sẽ tham quan điểm đến đầu tiên trong cuộc hành trình của chính mình.\nVũ Hầu Từ: quần thể đền thờ nổi tiếng và cổ kính bậc nhất Trung Hoa, được xây dựng để tưởng niệm Gia Cát Lượng (Khổng Minh) – vị quân sư kiệt xuất của thời Tam Quốc, được phong tước hiệu “Vũ Hầu”.\nPhố cổ Cẩm Lý: con phố mang trong mình yếu tố thương mại cổ nhất có từ thời Tây Thục, được công nhận là di sản văn hóa Quốc Gia đầu tiên vào năm 1961. Đây cũng là nơi có những di tích lịch sử tưởng nhớ những người nổi tiếng như: Lưu Bị, Gia Cát Lượng.\nBuổi tối: Đoàn thưởng thức “Lẩu Tứ Xuyên” và xem biểu diễn Xuyên kịch biến diện đặc sắc trong văn hoá của vùng đất Tứ Xuyên.\nSau đó, Quý khách về khách sạn làm thủ tục nhận phòng và nghỉ đêm."
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: THÀNH ĐÔ - CỬU TRẠI CÂU (Ăn sáng, trưa, tối)",
        "title": "THÀNH ĐÔ - CỬU TRẠI CÂU (Ăn sáng, trưa, tối)",
        "detail": "Buổi Sáng: Đoàn dùng bữa sáng tại khách sạn và khởi hành ra ga Thành Đô Đông để trải nghiệm tàu cao tốc thế hệ mới hiện đại bậc nhất Trung Quốc từ Thành Đô đến ga Tùng Phan tiết kiệm hơn 5 giờ ngồi xe buýt để đến với Cửu Trại.\nĐến Tùng Phan, đoàn di chuyển đến nhà hàng dùng bữa trưa sau đó di chuyển đi tham quan :\nThành cổ Tùng Phan (chụp ảnh bên ngoài): điểm du lịch lý thú của dân tộc Tạng – Nơi Công Chúa Văn Thành đời Đường dừng chân đợi vua Tây Tạng đến đón về nước.\nMâu Ni Câu : một thác nước, thắng cảnh thiên nhiên nằm tại huyện Tùng Phan, Châu tự trị dân tộc Tạng A Bá, tỉnh Tứ Xuyên – cách Cửu Trại Câu khoảng 36km. Nơi đây được mệnh danh là “viên ngọc thô” giữa núi non Tứ Xuyên, mang trong mình vẻ đẹp hoang sơ, thanh tịnh và ma mị, gợi liên tưởng đến một chốn thần tiên ẩn mình nơi hẻo lánh.\nSau đó, đoàn di chuyển về khách sạn nhận phòng nghỉ ngơi\nBuổi Tối: Đoàn thưởng thức “ Tiệc Tạng ” với những món ăn đặc sắc của người Tây Tạng như lẩu bò Yak, bò Yak nướng…và giao lưu nhảy múa cùng những chàng trai, cô gái Tạng."
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3:CỬU TRẠI CÂU – CHỐN BỒNG LAI GIỮA NHÂN GIAN (Ăn sáng, trưa, tối)",
        "title": "CỬU TRẠI CÂU – CHỐN BỒNG LAI GIỮA NHÂN GIAN (Ăn sáng, trưa, tối)",
        "detail": "Buổi sáng: Đoàn dùng điểm tâm sáng và khởi hành đến với đệ nhất danh thắng Trung Hoa – Cửu Trại Câu. Quý khách chuyển sang ngồi xe du lịch sinh thái công cộng nội khu tham quan:\nKhu du lịch thắng cảnh Cửu Trại Câu được mệnh danh là “Thiên đường nơi hạ giới”. Nằm trong khu vực Châu tự trị dân tộc Tạng A Bá và dân tộc Khương. Đây là vùng núi non hùng vĩ ở độ cao 4.000m so với mặt nước biển. Quý khách sẽ chiêm ngưỡng những rừng thông trùng điệp và hàng trăm ghềnh thác, hồ nước đa sắc và những thác nước nhiều tầng vô cùng hùng vĩ – được UNESCO công nhận là di sản văn hóa thế giới, nơi đây cũng chính là bối cảnh được chọn để quay Hoa Quả Sơn trong phim Tây Du Ký.\nBuổi Trưa: Đoàn dùng cơm trưa trong khu di tích, sau đó tiếp thục tham quan:\nCác hồ nước được hình thành từ núi đá vôi trầm tích, mỗi hồ là một vẻ đẹp riêng, được tự nhiên sắp đặt thành những khung cảnh đẹp đến mê hồn: Hồ Ngũ Hoa, Hồ Ngọa Hổ, bể Ngũ Sắc – biến chuyển màu sắc theo chuyển hóa của tự nhiên, Thác nước Trân Châu, Thác Nặc Nhật Lãng…\nBuổi tối: Đoàn dùng cơm tối và về lại khách sạn. Hoặc có thể đăng ký xem show biểu diễn ca múa nhạc “Cửu Trại Thiên Cổ Tình” vô cùng hoành tráng (chi phí tự túc 380RMB)."
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: CỬU TRẠI CÂU – ĐÔ GIANG YỂN (Ăn sáng, trưa, tối)",
        "title": "CỬU TRẠI CÂU – ĐÔ GIANG YỂN (Ăn sáng, trưa, tối)",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng tại khách sạn sau đó di chuyển đến ga Tùng Phan/ ga Hoàng Long để về Thành Đô.\nĐến Thành Đô, đoàn dùng bữa trưa tại nhà hàng sau đó di chuyển về Đô Giang Yển.\nĐến Đô Giang Yển, đoàn tham quan :\nQuảng trường Ngưỡng Thiên Oa (Yingxiu Square) là một điểm đến nổi bật tại thành phố Đô Giang Yển. Nơi đây nổi tiếng với bức tượng gấu trúc khổng lồ mang tên Selfie Panda, do nghệ sĩ người Hà Lan Florentijn Hofman thiết kế.\nCheck in cầu Nam Kiều : một công trình kiến trúc cổ kính và đầy chất thơ, phản ánh sâu sắc nét đẹp văn hóa và nghệ thuật truyền thống Trung Hoa. Cầu được xây dựng từ thời nhà Minh, từng là con đường huyết mạch nối liền các tuyến thương mại và hành hương cổ xưa.\nBuổi tối: Đoàn dùng bữa tối và về khách sạn làm thủ tục nhận phòng và nghỉ đêm tại Đô Giang Yển.\nĐô Giang Yển – Viên ngọc cổ xưa bên chân núi Thanh Thành - là một thành phố cấp huyện trực thuộc thành phố Thành Đô, tỉnh Tứ Xuyên, Trung Quốc. Nổi tiếng là nơi hội tụ giữa thiên nhiên, lịch sử và kỹ thuật cổ đại, Đô Giang Yển từ lâu đã trở thành điểm đến không thể bỏ qua trên hành trình khám phá Tứ Xuyên."
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: ĐÔ GIANG YỂN – THÀNH ĐÔ (Ăn sáng, trưa, tối)",
        "title": "ĐÔ GIANG YỂN – THÀNH ĐÔ (Ăn sáng, trưa, tối)",
        "detail": "Buổi sáng: Quý khách dùng bữa sáng tại khách sạn, làm thủ tục trả phòng. Sau đó, khởi hành tham quan núi Thanh Thành:\nNúi Thanh Thành – bao gồm cáp treo khứ hồi. Ngọn núi này nổi tiếng với những ngôi đền cổ, chùa Đạo giáo ẩn mình trong rừng cây xanh mát cùng những con đường mòn uốn lượn quanh co, tạo nên không gian yên bình, huyền bí.\nNét quyến rũ của núi Thanh Thành chính là sự giao hòa giữa thiên nhiên và tâm linh, khiến bất cứ ai cũng cảm thấy nhẹ nhàng và thư thái khi ghé thăm. Vào mùa xuân, khắp núi Thanh Thành ngập tràn trong sắc hoa đào và hoa mận, tạo nên không gian thơ mộng và dịu mát. Mùa thu là thời điểm rừng cây chuyển màu, biến ngọn núi thành một bức tranh sặc sỡ đầy quyến rũ với sắc vàng, đỏ và cam xen kẽ.\nSau khi tham quan núi Thanh Thành, đoàn dùng bữa trưa tại nhà hàng sau đó tiếp tục check in :\nChung Thư Các bạn sẽ phải trầm trồ bởi cảm giác “không gian vô cực” như trong phim Harry Potter. Những chiếc cầu thang nối tiếp nhau tạo hình zic-zac, các tầng sảnh cao xếp chồng và thang gỗ dẫn đến các giá sách khổng lồ càng khiến du khách ghé thăm phải thán phục.\nSau đó, đoàn di chuyển về lại thành phố Thành Đô, đến Thành Đô đoàn dùng cơm tối và nhận phòng nghỉ ngơi tại thành phố Thành Đô và tự do dạo phố hoặc đến với một trong những khu phố đêm nổi bậc nhất – Lan Quế Phường."
      },
      {
        "day": "Ngày 6",
        "fullDayTitle": "Ngày 6:THÀNH ĐÔ – TP HCM/ HÀ NỘI (Ăn Sáng, Trưa, tối)",
        "title": "THÀNH ĐÔ – TP HCM/ HÀ NỘI (Ăn Sáng, Trưa, tối)",
        "detail": "Buổi sáng: Sau khi ăn sáng tại khách sạn, quý khách làm thủ tục trả phòng, sau đó đi tham quan:\nCông viên gấu trúc - Nơi đây được coi như là ngôi nhà thiên đường dành cho gấu trúc - loài động vật đáng yêu đang trên đà tuyệt chủng. Ngày nay, số lượng gấu trúc trên Trái Đất chỉ còn lại rất ít ỏi, chúng sớm có nguy cơ tuyệt chủng trong tương lai gần. Theo như các thống kê gần đây, số lượng gấu trúc cho đến thời điểm này còn lại chỉ còn lại 1864 cá thể.\nBuổi trưa: Quý khách dùng cơm trưa, sau đó đi tham quan:\nĐường Xuân Hy: con phố thương mại nhộn nhịp nhất miền trung và miền tây Trung Quốc, có hơn 700 cửa hàng khác nhau trên con đường sầm uất này. Ngoài ra, nơi đây còn là nơi hội tụ nhiều món ăn đường phố nổi tiếng nhất của địa phương.\nThái Cổ Lý: con phố náo nhiệt hiện đại với nhiều thương hiệu xa xỉ cùng với những thiết kế mang đậm màu sắc truyền thống Trung Hoa cổ điển\nBuổi tối: Quý khách khởi hành ra sân bay để đáp chuyến bay từ Thành Đô về TP Hồ Chí Minh/ Hà Nội ( ăn nhẹ tại sân bay )\nĐến sân bay Tân Sơn Nhất/ Nội Bài, đoàn làm thủ tục nhập cảnh lấy hành lý.\nTrưởng đoàn tạm biệt quý khách, kết thúc chương trình khám phá Tứ Xuyên - Cửu Trại Câu 6 ngày 5 đêm."
      }
    ],
    "inclusions": [
      "Vé máy bay quốc tế khứ hồi Tp HCM/ Hà Nội – Thành Đô – TP.HCM/ Hà Nội",
      "Visa nhập cảnh Trung Quốc dành cho cả đoàn.",
      "Chuyến tàu cao tốc khứ hồi Thành Đô – Tùng Phan/ Hoàng Long – Thành Đô",
      "Tất cả các chi phí vé vào cửa cho tất cả các địa điểm du lịch được liệt kê trong hành trình;",
      "Các bữa ăn đặc sắc Trung Hoa : Tiệc Tạng, lẩu Tứ Xuyên, BBQ…các bữa ăn chất lượng 10 – 12 món/bữa",
      "Xe du lịch đời mới 45 chỗ",
      "Hướng dẫn viên địa phương và trưởng đoàn đi từ Việt Nam",
      "Khách sạn: 4 – 5* sao cho toàn hành trình tiêu chuẩn (02 khách/phòng- phòng 3 người trường hợp đi lẻ nam hoặc nữ)",
      "Phí dịch vụ & Thuế chính phủ",
      "Các thỏa thuận bao gồm phí lập kế hoạch, xử lý, vận hành và liên lạc.",
      "Nước uống được cung cấp trong suốt chuyến đi",
      "Bảo hiểm du lịch.",
      "Quà tặng từ GOHOLIC nón, sim Internet…"
    ],
    "exclusions": [
      "Tiền tip cho hướng dẫn viên và tài xế: 36 USD/khách/ Tour",
      "Các chi phí cá nhân không được nêu trong mục Bao gồm.",
      "Phụ thu phòng đơn nếu quý khách có nhu cầu ngủ riêng (phụ thu 6.000.000 VNĐ/khách/tour)"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-23",
    "code": "GH-23",
    "title": "Tranh Vân Du Ký",
    "url": "https://goholictravel.com/tour/tranh-van-du-ky/",
    "country": "china",
    "countryName": "Trung Quốc",
    "region": "china",
    "departureFrom": "TP.HCM",
    "startDate": "2025-07-01",
    "departureSchedule": "2025-07-01",
    "duration": "7 ngày 6 đêm",
    "durationCategory": "5-7-days-tour",
    "month": "thang-10,thang-11,thang-12,thang-06,thang-07,thang-08,thang-09",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "TOUR TRUNG QUỐC",
    "badgeColor": "bg-amber-500",
    "isFeatured": false,
    "price": 27690000,
    "priceDisplay": "27.690.000đ",
    "originalPrice": 31000000,
    "rating": 4.9,
    "reviewsCount": 186,
    "image": "https://goholictravel.com/wp-content/uploads/2025/06/thanh-van-du-ky-1200x675.jpg",
    "gallery": [],
    "headMeta": [
      "7 ngày 6 đêm",
      "Nhóm: 15 - 20 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Check in Cam Hải Tử, Bạch Thuỷ Hà, Lam Nguyệt Cốc.",
    "introText": "Check in Cam Hải Tử, Bạch Thuỷ Hà, Lam Nguyệt Cốc.\n\nNgắm nhìn sự hùng vĩ của Khe Hổ Nhảy\n\nCheck in Đền Tùng Tán Lâm Tự\n\nThành Cổ Độc Khắc Tông\n\nĐạp xe quanh Hồ Nhĩ Hải\n\nDạo bước Sa khê cổ trấn\n\nTặng sim 5G",
    "highlights": [
      "Chinh phục đỉnh Băng Xuyên 4.600m và thưởng thức show Ấn tượng Lệ Giang trên núi tuyết",
      "Khám phá thành cổ Lệ Giang, Bạch Sa cổ trấn",
      "Khách sạn trung tâm, cổ trấn với lối kiến trúc cổ tuyệt chọn lọc.",
      "Khám phá ẩm thực vùng đất Vân Nam.",
      "HÀNH TRÌNH “NO SHOPPING”",
      "Khách sạn 4* với lối kiến trúc cổ độc đáo nằm ngay phố cổ"
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1:TP HCM – CÔN MINH ( ăn nhẹ )",
        "title": "TP HCM – CÔN MINH ( ăn nhẹ )",
        "detail": "Hướng dẫn viên Goholic đón đoàn tại sân bay Quốc tế Tân Sơn Nhất trước 3 tiếng trước giờ bay để làm thủ tục bay đến Côn Minh, thủ phủ của tỉnh Vân Nam. ( đoàn ăn nhẹ tại sân bay )\nChuyến bay dự kiến từ TP. HCM : SGN – KMG MU 1930 – 23:30\nĐáp Côn Minh, đoàn làm thủ tục nhập cảnh sau đó di chuyển về trung tâm TP.Côn Minh nhận phòng khách sạn nghỉ ngơi\nKhách sạn dự kiến : https://www.trip.com/hotels/kunming-hotel-detail-6445994/hna-business-hotel-kunming-airport/"
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: CÔN MINH – ĐẠI LÝ (Ăn sáng, trưa, tối)",
        "title": "CÔN MINH – ĐẠI LÝ (Ăn sáng, trưa, tối)",
        "detail": "Buổi sáng : đoàn dùng bữa sáng tại khách sạn sau đó di chuyển đến Đại Lý.\nĐến Đại Lý, đoàn dùng bữa trưa tại nhà hàng sau đó di chuyển đến tham quan :\nChùa Sùng Thánh – Tam tháp Đại Lý ( bối cảnh trong bộ phim Thiên Long Bát Bộ ) được xây dựng từ thời vương quốc Đại Lý của người dân tộc Bạch (937-1253). Ngôi chùa này không chỉ là một công trình tôn giáo mà còn là trung tâm giáo dục, văn hóa và chính trị của các triều đại xưa. Sùng Thánh Tự còn nổi tiếng trong lịch sử khi có 9 vị vua Đại Lý xuất gia làm Tăng, điều này càng làm tăng thêm sự linh thiêng và uy tín của chùa.\nHồ Nhĩ Hải – bối cảnh trong bộ phim Đi đến nơi có gió, một trong tứ đại mỹ quan theo cách gọi “phong – hoa – tuyết – nguyệt” ở Đại Lý. Sau đó, đoàn di chuyển về thành cổ Đại Lý, nhận phòng khách sạn nghỉ ngơi.\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng, tự do khám phá phố cổ Đại Lý về đêm.\nKhách sạn dự kiến : https://www.trip.com/hotels/dali-hotel-detail-435948/regent-hotel/?locale=en_xx"
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3:ĐẠI LÝ – SHANGRILA (Ăn sáng, trưa, tối)",
        "title": "ĐẠI LÝ – SHANGRILA (Ăn sáng, trưa, tối)",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn sau đó làm thủ tục trả phòng và bắt đầu hành trình tham quan :\nKhe Hổ Khiêu - Hổ nhảy (Tiger Leaping Gorge): thẳng cảnh thiên nhiên kỳ thú này là một hẻm núi sâu, dài và hẹp nhất thế giới. Nơi đây dòng sông Trường Giang bị chặn bởi hai dãy núi cao Ngọc Long (5600m) và Habar (5396m), đột ngột thót nhỏ lại một đoạn dài 16km, chiều sâu tính từ đỉnh núi xuống đáy hẻm là gần 3900m.\nSau đó, đoàn dùng bữa trưa tại nhà hàng rồi di chuyển lên Shangrila, nhận phòng khách sạn nghỉ nghơi\nBuổi chiều : Thành cổ DuKeZong (Thành cổ Ánh Trăng) - Nơi tập trung sinh sống lâu đời của người Tạng có tuổi đời trên 1.300 năm được bảo tồn tốt nhất ở Trung Quốc,chiêm ngưỡng hàng trăm căn nhà kiểu Tây Tạng cổ xưa được gìn giữ cẩn thận, được những người Tạng hiếu khách giới thiệu những nét văn hóa đặc trưng của người Tạng\nBuổi tối : Đoàn dùng bữa tối tại nhà hàng, tự do khám phá phố cổ về đêm.\nKhách sạn dự kiến :https://hk.trip.com/hotels/shangri-la-hotel-detail-23817695/the-5th-meteorite-grace-hotel/"
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: SHANGRILA – LỆ GIANG (Ăn sáng, trưa)",
        "title": "SHANGRILA – LỆ GIANG (Ăn sáng, trưa)",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại nhà hàng sau đó di chuyển đi tham quan :\nĐền Songzanlin ( Tùng Tán Lâm Tự ): hình ảnh thu nhỏ của Cung điện Potala (Tây Tạng) nằm trên độ cao 3200m, nơi tập trung những nét văn hóa tiêu biểu của người Tạng, được xây dựng từ năm 1679 bởi vị Lạt ma thứ 5, hiện được bảo tồn nguyên vẹn.\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng sau đó di chuyển về Lệ Giang.\nĐến Lệ Giang, đoàn tham quan :\nBạch Sa cổ trấn : là một trong những thị trấn cổ lâu đời nhất của Lệ Giang. Từng là trung tâm kinh tế, chính trị và văn hóa trước thời nhà Minh, vì thế nơi đây vẫn còn lưu giữ rất nhiều công trình kiến trúc cổ có giá trị và ý nghĩa về văn hóa cũng như lịch sử.\nThành cổ Lệ Giang : còn được gọi là Thành cổ Đại Nghiêm – được UNESCO cấp chứng nhận Di sản văn hoá thế giới năm 1997. Thành cổ Lệ Giang xây dựng cách đây hơn 800 năm, là một di sản văn hóa thế giới với phong cảnh đẹp đẽ, được mệnh danh là \"Venice của Phương Đông\", nơi đây nhà nhà đều có suối chảy xinh xắn.\nBuổi tối : Dùng bữa tối tại nhà hàng sau đó tự do khám phá cổ trấn Lệ Giang về đêm.\nKhách sạn dự kiến : https://www.trip.com/hotels/lijiang-hotel-detail-437683/xiangtai-hotel/?locale=en_xx"
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: NÚI TUYẾT NGỌC LONG (Ăn sáng, trưa, tối)",
        "title": "NÚI TUYẾT NGỌC LONG (Ăn sáng, trưa, tối)",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn, sau đó di chuyển đến cáp treo núi tuyết Ngọc Long.\nNúi Tuyết Ngọc Long cách trung tâm phố cổ Lệ Giang về phía Bắc, quanh năm tuyết phủ trắng bao phủ một khu vực rộng lớn giống như con rồng lớn nên được gọi là “Ngọc Long”. Nơi đây còn được so sánh với “Thụy Sĩ Á Đông” như rặng Pyrenes (ngọn núi nổi tiếng tại biên giới Pháp và Thụy Sỹ). Đoàn đi cáp treo lớn lên núi với độ cao 4600m lên đỉnh Băng Xuyên và chụp ảnh lưu niệm .\nXXDùng bữa trưa tại nhà hàng trong núi tuyết Ngọc Long sau đó tiếp tục tham quan :\nCam Hải Tử, Sông Bạch Thuỷ Hà, Lam Nguyệt Cốc, Ngọc Thuỷ Trại ... với xe điện trong khu thắng cảnh. ( bao gồm vé xe điện )\nThưởng thức show diễn “ Ấn tượng Lệ Giang “ trên núi tuyết với sự góp mặt của hơn 500 diễn viên và không gian ngoài trời hoành tráng.\nLưu ý : Trường hợp cáp lên đỉnh núi Ngọc Long sửa chữa, thời tiết xấu hoặc mùa cao điểm không thể đi cáp lớn lên núi 4500m đoàn chuyển sang đi cáp Vân Tam Bình (Gồm xe điện di chuyển tới Vân Tam Bình)\nBuổi Chiều : Đoàn di chuyển về khách sạn nghỉ ngơi, tự do khám phám Lệ Giang\nBuổi tối : Dùng bữa tối tại nhà hàng sau đó tự do khám phá cổ trấn Lệ Giang về đêm hoặc có thể đăng kí xem show Lệ Giang thiên cổ tình ( chi phí tự túc )\nKhách sạn dự kiến : https://www.trip.com/hotels/lijiang-hotel-detail-437683/xiangtai-hotel/?locale=en_xx"
      },
      {
        "day": "Ngày 6",
        "fullDayTitle": "Ngày 6: LỆ GIANG – CÔN MINH (Ăn Sáng, Trưa, tối )",
        "title": "LỆ GIANG – CÔN MINH (Ăn Sáng, Trưa, tối )",
        "detail": "Buổi sáng : Đoàn dùng bữa sáng tại khách sạn sau đó làm thủ tục trả phòng, di chuyển đến Sa Khê cổ trấn – cổ trấn duy nhất còn nguyên vẹn nằm trên con đường “ Trà mã cổ đạo ” và cũng là bối cảnh trong bộ phim “ đi đến nơi có gió ” nổi tiếng .\nBuổi trưa : Đoàn dùng bữa trưa tại nhà hàng sau đó di chuyển ra ga tàu cao tốc, trải nghiệm tàu cao tốc về Côn Minh.\nĐến Côn Minh, đoàn dùng bữa tối tại nhà hàng với món đặc sản lẩu nấm Vân Nam sau đó về khách sạn nghỉ ngơi.\nKhách sạn dự kiến : https://www.trip.com/hotels/kunming-hotel-detail-114656931/langxi-hotel/"
      },
      {
        "day": "Ngày 7",
        "fullDayTitle": "Ngày 7: CÔN MINH – TP.HCM ( Ăn sáng , trưa )",
        "title": "CÔN MINH – TP.HCM ( Ăn sáng , trưa )",
        "detail": "Buổi sáng : Đoàn thức dậy dùng bữa sáng sau đó di chuyển đi tham quan :\nHồ Điền Trì – được mệnh danh là viên ngọc Minh Châu của Côn Minh và ngắm chim hải âu. Hồ Điền Trì có hình dạng lượn sóng, với kích thước khoảng 39km chiều dài và 13km chiều rộng được bao quanh bởi các dãy núi từ các hướng khác nhau với bốn ngọn đồi này tạo nên một phong cảnh tuyệt đẹp như trong tranh vẽ, khiến du khách không thể không mê mẩn và thích thú khi đến đây.\nSau đó, đoàn trở về khách sạn nhận phòng nghỉ ngơi, tự do dạo phố, shopping trên các con phố tập nập\nBuổi trưa : Đoàn làm thủ tục trả phòng sau đó di chuyển đến nhà hàng dùng bữa trưa\nSau bữa trưa, đoàn di chuyển ra sân bay để làm thủ tục bay về TP.HCM\nChuyến bay dự kiến : KMG – SGN 16:25 – 18:30\nVề đến TP.HCM, Goholic chia tay và hẹn gặp lại đoàn"
      }
    ],
    "inclusions": [
      "Vé máy bay quốc tế khứ hồi Tp HCM – Côn Minh– TP.HCM",
      "Visa nhập cảnh Trung Quốc dành cho cả đoàn.",
      "Chuyến tàu cao Lệ Giang – Côn Minh",
      "Tất cả các chi phí vé vào cửa cho tất cả các địa điểm du lịch được liệt kê trong hành trình;",
      "Các bữa ăn đặc sắc Trung Hoa : lẩu bò Yak, lẩu nấm Vân Nam, lẩu cá hồi, 1 bữa bún qua cầu…các bữa ăn chất lượng 12 – 14 món/bữa",
      "Xe du lịch đời mới 45 chỗ",
      "Hướng dẫn viên địa phương và trưởng đoàn đi từ Việt Nam",
      "Khách sạn: 4* sao cho toàn hành trình tiêu chuẩn (02 khách/phòng- phòng 3 người trường hợp đi lẻ nam hoặc nữ)",
      "Phí dịch vụ & Thuế chính phủ",
      "Các thỏa thuận bao gồm phí lập kế hoạch, xử lý, vận hành và liên lạc.",
      "Nước uống được cung cấp trong suốt chuyến đi",
      "Bảo hiểm du lịch.",
      "Quà tặng từ GOHOLIC nón, sim Internet…"
    ],
    "exclusions": [
      "Tiền tip cho hướng dẫn viên và tài xế: 42USD/khách/ Tour",
      "Các chi phí cá nhân không được nêu trong mục Bao gồm.",
      "Phụ thu phòng đơn nếu quý khách có nhu cầu ngủ riêng (phụ thu 6.000.000 VNĐ/khách/tour)"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-24",
    "code": "GH-24",
    "title": "TRƯƠNG GIA THỚI PHƯỢNG HOÀNG CỔ TRẤN",
    "url": "https://goholictravel.com/tour/truong-gia-thoi-phuong-hoang-co-tran/",
    "country": "china",
    "countryName": "Trung Quốc",
    "region": "china",
    "departureFrom": "TP.HCM",
    "startDate": "2025-06-08",
    "departureSchedule": "2025-06-08",
    "duration": "5 ngày 4 đêm",
    "durationCategory": "5-7-days-tour",
    "month": "thang-10,thang-11,thang-12,thang-06,thang-07,thang-08,thang-09",
    "transport": "Hàng không Bay thẳng Vietjet Air",
    "airline": "Hàng không Bay thẳng Vietjet Air",
    "badge": "TOUR TRUNG QUỐC",
    "badgeColor": "bg-cyan-600",
    "isFeatured": false,
    "price": 17390000,
    "priceDisplay": "17.390.000đ",
    "originalPrice": 19500000,
    "rating": 4.9,
    "reviewsCount": 193,
    "image": "https://goholictravel.com/wp-content/uploads/2025/06/truonggiagioi-1200x675.jpg",
    "gallery": [
      "https://goholictravel.com/wp-content/uploads/2025/06/tianzi-mountain.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/06/co-gai.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/06/phuong-hoang-co-tran.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/06/phuong-hoang-co-tran2.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/06/phuong-hoang-co-tran1.jpg"
    ],
    "headMeta": [
      "5 ngày 4 đêm",
      "Nhóm: 15 - 20 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Visa đoàn đơn giản chỉ Hình + Hộ Chiếu. — Chinh phục Thiên Môn Sơn bằng hệ thống cáp treo dài nhất Châu Á (7200m)",
    "introText": "Visa đoàn đơn giản chỉ Hình + Hộ Chiếu.\n\nChinh phục Thiên Môn Sơn bằng hệ thống cáp treo dài nhất Châu Á (7200m)\n\nDạo bước trên con đường thủy tinh được lát bằng kính.\n\nĐộng Thiên Môn – hay còn được gọi là cổng trời.\n\nPhượng Hoàng cổ trấn hơn ba trăm năm tuổi với: Tháp Vạn Dân, Cầu Đá Nhảy, Hồng Kiều, … được xem là biểu tượng nổi tiếng của cổ trấn.\n\nDạo thuyền ngắm nhìn phố cổ Phượng Hoàng trên dòng Đà Giang.\n\nDạo Thuyền Hồ Bảo Phong ngắm cảnh thiên nhiên hùng vĩ.",
    "highlights": [
      "Hàng không: Bay thẳng Vietjet Air",
      "Khám phá Mặc Nhung Miêu Trại của dân tộc Miêu Tương Tây"
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1: TP. HỒ CHÍ MINH ✈ TRƯƠNG GIA GIỚI(Ăn nhẹ)",
        "title": "TP. HỒ CHÍ MINH ✈ TRƯƠNG GIA GIỚI(Ăn nhẹ)",
        "detail": "12:30 Quý khách tập trung cột 12 cổng D2 sân bay quốc tế Tân Sơn Nhất, trưởng đoàn đón đoàn làm thủ tục đáp chuyến bay đi Trương Gia Giới trên chuyến bay VJ2552 SGN DYG 15:45 – 20:30.\nTới sân bay Trương Gia Giới, Sau khi làm thủ tục nhập cảnh, hướng dẫn địa phương đón đoàn đưa về khách sạn. Nhận phòng và tự do nghỉ ngơi tại Trương Gia Giới."
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: TRƯƠNG GIA GIỚI (Ăn sáng, trưa, tối)",
        "title": "TRƯƠNG GIA GIỚI (Ăn sáng, trưa, tối)",
        "detail": "Sáng: Đoàn dùng bữa sáng tại khách sạn.\nSau đó đoàn khởi hành di chuyển lên khu phong cảnh Thiên Môn Sơn – nơi sơn thủy hữu tình, như tranh thủy mặc. Quý khách chinh phục núi bằng hệ thống cáp treo dài nhất Châu Á (dài 7,200m).\nLên đến đỉnh núi, đoàn đi tham quan Đài Lăng Tiêu.\nQuý khách men theo Con Đường Vách Đá – con đường cao ngất của đỉnh Thiên Môn dài hàng trăm mét, dạo buớc trên Con Đường Thủy Tinh được lát bằng kính. Tại đây, quý khách có thể ngắm nhìn cảnh núi non trùng trùng điệp điệp ngay dưới chân ở độ cao 1,430m, cảm nhận cảm giác như đi trên mây.\nVượt qua 999 bậc thang bằng đá để chiêm ngưỡng Động Thiên Môn – hay còn được gọi là cổng trời, có hình bán nguyệt và cao tới 131m, vốn là một lỗ khổng lồ được Mẹ Thiên nhiên “tạc” trong lòng núi.\nTrưa: Đoàn xuống núi, dùng bữa trưa tại nhà hàng địa phương.\nChiều: Tham quan 72 Kỳ Lầu được xây dựng dựa trên truyền thuyết ở khu vực Vũ Lăng Sơn những câu chuyện về 9 cung, 18 làng và tòa nhà 72 tầng kỳ lạ đã truyền tai nhau rất nhiều. Và tòa nhà 72 tầng được nhắc đến trong câu"
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: TRƯƠNG GIA GIỚI  PHƯỢNG HOÀNG CỔ TRẤN (Ăn sáng, trưa, tối)",
        "title": "TRƯƠNG GIA GIỚI  PHƯỢNG HOÀNG CỔ TRẤN (Ăn sáng, trưa, tối)",
        "detail": "Sáng:Đoàn dùng bữa sáng tại khách sạn, sau đó làm thủ tục trả phòng và khởi hành đi tham quan :\nVũ Di Sơn: là một trong những khu thắng cảnh tự nhiên và văn hóa nổi tiếng nhất của tỉnh Phúc Khiến, Đây là một di sản thế giới được UNESCO công nhận vào năm 1999, tìm hiểu về trà Đại hồng bào và tản bộ trong phố cổ Vũ Di.\nCửu Khúc Khê – “Dải lụa xanh giữa rừng đỏ” và trải nghiệm đặc sắc: “Trúc bè du ngoạn Cửu Khúc”, ngồi trên bè tre truyền thống, do người lái chèo bằng sào gỗ, đưa đi theo dòng suối qua các khúc quanh – vừa ngắm cảnh, vừa nghe kể chuyện địa danh, thơ ca, truyền thuyết và ngắm núi Vũ Di.\nVũ Di Cung - dấu ấn lịch sử ngàn năm, cung điện cổ kính nhất vùng Vũ Di, mang đậm dấu ấn của Đạo giáo, đồng thời là nơi lưu giữ di sản văn hóa – tư tưởng Nho học Tống Nho, đặc biệt gắn liền với danh sĩ Chu Hy (Zhu Xi).\nPhố cổ Phỏng Tống: khu phố tái hiện lại phong cách kiến trúc và đời sống triều đại nhà Tống (960–1279), nằm trong quần thể danh thắng Vũ Di Sơn, tỉnh Phúc Kiến, Trung Quốc. Đây là điểm tham quan mang đậm màu sắc hoài cổ, kết hợp văn hóa – ẩm thực – thương mại truyền thống.\nChiều đoàn khởi hành đến với Cát Tiên Thôn ( khoảng 2 tiếng đi xe)\nCát Tiên Thôn - còn được gọi là Cát Điền Thôn, là một ngôi làng cổ yên bình, thơ mộng, nằm trong khu vực Vũ Di Sơn, tỉnh Phúc Kiến, Trung Quốc. Đây là một điểm đến hấp dẫn cho những ai yêu thích nét đẹp làng quê truyền thống, văn hóa trà đạo và trải nghiệm đời sống bản địa giữa thiên nhiên hoang sơ. Bao quanh là núi non đá đỏ, rừng tre, suối trong và ruộng trà bậc thang, tạo nên khung cảnh thơ mộng, an nhiên.\nTối: Đoàn thưởng thức bữa tối, nhận phòng resort trên núi Cát Tiên sơn và trải nghiệm một đêm ngủ giữa thiên nhiên núi rừng.\nÔ trấn thơ mộng (ảnh sưu tầm)"
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: PHƯỢNG HOÀNG CỔ TRẤN  VŨ LĂNG NGUYÊN (Ăn sáng, trưa, tối)",
        "title": "PHƯỢNG HOÀNG CỔ TRẤN  VŨ LĂNG NGUYÊN (Ăn sáng, trưa, tối)",
        "detail": "Sáng : Đoàn dùng bữa sáng tại khách sạn, trả phòng. Sau đó, di chuyển tới Vũ Lăng Nguyên - Trương Gia Giới.\nĐoàn ghé thăm Mặc Nhung Miêu Trại là một trong những ngôi làng cổ tuyệt đẹp với những bậc thang, bờ tường hay nếp nhà làm bằng đá vững chãi trầm mặc. Không chỉ choáng ngợp trước kiến trúc độc đáo, bạn còn được hòa mình vào trong nhịp sống từ từ êm ả của tộc người Miêu nơi đây.\nTrưa : Đoàn dùng bữa trưa tại nhà hàng địa phương mang phong cách dân tộc Miêu Tương Tây và có cơ hội tìm hiểu phong tục chặn cửa đón khách. Đây là nét đẹp văn hóa đặc trưng của người dân tộc Miêu bản địa.\nXe đón đoàn đi tham quan cửa hiệu trưng bày thuốc bắc. Tìm hiểu về văn hóa Đông y của địa phương\nThưởng thức và tìm hiểu về đặc sản trà đen của địa phương.\nChiều: Đoàn di chuyển về Vũ Lăng Nguyên, Trương Gia Giới nhận phòng và nghỉ ngơi tại khách sạn 5 sao tại đây.\nTối: Đoàn cùng nhau dùng bữa tối tại nhà hàng địa phương, sau đó quý khách có thể xem show biểu diễn nổi tiếng THIÊN CỔ TÌNH, với dàn diễn viên trình diễn bằng ca múa nói về quá trình hình thành và phát triển của Trương Gia Giới từ thời kỳ cổ đại (Chi Phí Tự Túc) hoặc tự do tham quan phố đi bộ Khê Bố, một trong những phố cổ nổi tiếng sầm uất của khu thắng cảnh Vũ Lăng Nguyên thuộc thành phố Trương Gia Giới"
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: TRƯƠNG GIA GIỚI ✈ TP. HỒ CHÍ MINH (Ăn sáng, trưa, tối)",
        "title": "TRƯƠNG GIA GIỚI ✈ TP. HỒ CHÍ MINH (Ăn sáng, trưa, tối)",
        "detail": "Sáng : Sau khi dùng bữa sáng tại khách sạn, trả phòng. Xe và hướng dẫn đón đoàn đi tham quan:\nNgồi thuyền dạo hồ Bảo Phong ngắm cảnh thiên nhiên hùng vĩ, nghe những bài dân ca của những dân tộc Thổ Gia sống dọc theo hai bờ sông biểu diển trên những chòi gỗ.\nĐoàn ghé thăm cửa hàng trưng bày trang sức, chu sa.\nTrưa: Đoàn dùng bữa trưa tại nhà hàng địa phương.\nTham quan tự do cầu Kính ĐẠI HIỆP CỐC có tổng chiều dài 430m, chiều dài mặt cầu 375m, rộng 6m, nằm giữa thung lũng ở Trương Gia Giới, thiên đường du lịch của Trung Quốc (Chi Phí Tự Túc).\nTham quan cửa hàng trưng bày tơ lụa truyền thống của địa phương.\nTối: Đoàn dùng bữa tối tại nhà hàng địa phương, xe và hướng dẫn đón đoàn đưa ra sân bay, làm thủ tục xuất cảnh đáp chuyến bay VJ2553 DYG SGN 21:30 – 01:00 bay về TP.HCM.\nĐến sân bay quốc tế Tân Sơn Nhất, Trưởng Đoàn chia tay quý khách – kết thúc chuyến tham quan đầy thú vị.\nChia tay Quý khách và kết thúc chương trình. Hẹn gặp lại quý khách!"
      }
    ],
    "inclusions": [
      "Vé máy bay (bay thẳng không quá cảnh) khứ hồi Tp. Hồ Chí Minh – Trương Gia Giới",
      "Lệ phí sân bay, bảo hiểm an ninh hàng không, phụ phí xăng, dầu (có thể thay đổi tùy thuộc vào thời điểm xuất vé)",
      "Visa Trung Quốc – Visa đoàn (đi và về cùng đoàn) (Nếu quý khách mang quốc tịch nước ngoài. Vui lòng tự xin visa trước khi tham gia đoàn)",
      "Khách sạn tiêu chuẩn: 1 đêm 5 sao tại Vũ Lăng Nguyên và 4 sao các đêm còn lại (2 người/ phòng , trường hợp lẻ nam/nữ sẽ ghép phòng 3)",
      "Xe vận chuyển phục vụ theo chương trình",
      "Ăn các bữa theo chương trình",
      "Phí tham quan tại các điểm (vé vào cửa 1 lần)",
      "HDV địa phương và Trưởng đoàn Việt Nam theo suốt hành trình.",
      "Bảo hiểm du lịch mức cao nhất là 30,000USD/khách (không chịu trách nhiệm với du khách tách khỏi đoàn)"
    ],
    "exclusions": [
      "Hộ chiếu (còn thời hạn trên 06 tháng)",
      "Tiền bồi dưỡng (Tip) cho hướng dẫn viên và tài xế địa phương 30USD",
      "Nước uống tự gọi trong bữa ăn, điện thoại, giặt ủi, thuốc uống cá nhân…",
      "Chi phí cá nhân của khách ngoài chương trình.",
      "Hành lý quá cước theo quy định của Hàng không",
      "Phụ thu phòng đơn: 3,500,000VNĐ/khách.",
      "Visa tái nhập Việt Nam đối với khách mang quốc tịch nước ngoài: 55USD/khách",
      "Thuế GTGT 10% ( vui lòng báo trước khi xuất vé máy bay )"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-25",
    "code": "GH-25",
    "title": "TÔ HÀNG MỘNG CẢNH GIANG NAM HỮU TÌNH",
    "url": "https://goholictravel.com/tour/to-hang-mong-canh-giang-nam-huu-tinh/",
    "country": "china",
    "countryName": "Trung Quốc",
    "region": "china",
    "departureFrom": "TP.HCM/HÀ NỘI",
    "startDate": "2025-06-18",
    "departureSchedule": "2025-06-18",
    "duration": "5 ngày 4 đêm",
    "durationCategory": "5-7-days-tour",
    "month": "thang-10,thang-11,thang-12,thang-06,thang-07,thang-08,thang-09",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "TOUR TRUNG QUỐC",
    "badgeColor": "bg-[#f8af22]",
    "isFeatured": false,
    "price": 22890000,
    "priceDisplay": "22.890.000đ",
    "originalPrice": 25600000,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://goholictravel.com/wp-content/uploads/2025/06/to-hang-mong-canh-1200x675.jpg",
    "gallery": [
      "https://goholictravel.com/wp-content/uploads/2025/06/1742373584_800x600-seo-pr_1.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/06/tour-giang-nam-trung-quoc-3.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/06/tour-giang-nam-trung-quoc-4.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/06/tour-giang-nam-trung-quoc-9.jpg"
    ],
    "headMeta": [
      "5 ngày 4 đêm",
      "Nhóm: 15 - 20 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Hành trình không shopping. — Hành trình trọn vẹn 5 ngày 5 đêm",
    "introText": "Hành trình không shopping.\n\nHành trình trọn vẹn 5 ngày 5 đêm\n\nĐến với Châu Trang cổ trấn – thuỷ trấn được mệnh danh là, thuỷ trấn yên bình nhất Trung Quốc\n\nThưởng ngoạn trên thuyền với thập cảnh Tây Hồ – Hàng Châu\n\nTặng Sim data Internet trong quá trình tham gia hành trình.",
    "highlights": [
      "Hành trình No ShoppingTrải nghiệm khách sạn 5 sao Ô Trấn, nghỉ đêm tại trung tâm thuỷ trấn.",
      "Thưởng thức ẩm thực đặc sắc vùng Giang Nam của Trung Quốc, thưởng thức mì cua lông nổi tiếng",
      "Trải nghiệm 1 bữa ăn tại nhà hàng được chấm sao Michelin ở Thượng Hải",
      "Khách sạn tiêu chuẩn 4 sao chất lượng.",
      "Bay thẳng từ TP HCM/Hà Nội đến với thành phố Thượng Hải/ Hàng Châu"
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1: THƯỢNG HẢI – TÔ CHÂU",
        "title": "THƯỢNG HẢI – TÔ CHÂU",
        "detail": "Sáng: Đáp Thượng Hải, đoàn làm thủ tục nhập cảnh, vệ sinh cá nhân và dùng bữa sáng nhẹ tại sân bay sau đó khởi hành đến với Tô Châu, khám phá:\nChuyết Chính Viên: Di sản thế giới Tô Châu Viên Lâm đồng thời là một trong số những vườn nổi Tô Châu nổi tiếng nhất. Nó nằm tại số 178 phố Đông Bắc, quận Cô Tô. Với diện tích 78 mẫu (5,2 hecta; 13 mẫu Anh) nó là khu vườn lớn nhất Tô Châu và được một số người coi là khu vườn đẹp nhất miền Nam Trung Quốc.\nVẻ đẹp cổ điển Tô Châu qua hồ nước, đá non bộ và kiến trúc.\nTrưa : Đoàn dùng bữa trưa tại nhà hàng với những món ăn đặc sắc vùng đất Tô Châu sau đó di chuyển về Châu Trang nhận phòng khách sạn nghỉ ngơi.\nBuổi chiều, đoàn tham quan :\nChâu Trang cổ trấn: nằm tại tỉnh Giang Tô, Trung Quốc với lịch sử hơn 1.700 năm. Với hệ thống kênh rạch đan xen, những cây cầu đá uốn cong duyên dáng và các ngôi nhà cổ kính bên dòng nước, Châu Trang mang đến một vẻ đẹp yên bình và lãng mạn. Du khách có thể thả mình trên những chiếc thuyền nhỏ, ngắm nhìn cảnh sắc cổ xưa, thưởng thức đặc sản địa phương và cảm nhận hơi thở của lịch sử qua từng góc phố, từng ngôi nhà.\nTối: Quý khách ăn tối tại Châu Trang sau đó tự do khám phá phổ cổ về đêm."
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: TÔ CHÂU - HÀNG CHÂU",
        "title": "TÔ CHÂU - HÀNG CHÂU",
        "detail": "Tây Hồ Trung Quốc\nBuổi sáng: Đoàn dùng điểm tâm sáng và khởi hành đến với thành phố Hàng Châu tỉnh Chiết Giang.\nMiếu Nhạc Phi: Ngôi miếu được thành lập từ thời nhà Tống, được xây nên bằng lòng yếu mến và tôn sùng khí thái của danh tướng Nhạc Phi – danh tướng duy nhất đánh bại nhà Kim giúp quân Tống chiếm lại thành Khai Phong.\nThưởng ngoạn Tây Hồ: Đoàn sẽ tham quan những cảnh sắc đầy tính thơ và nổi tiếng như: Tam Đàm Ấn Nguyệt, Đoạn Kiều, Trường Kiều, Lôi Phong Tháp…\nĐoàn sẽ có cơ hội đến với hàng cây Ngô Đồng lãng mạn nhất Chiết Giang, đắm mình trong khung cảnh đầy chất thơ trong tiếng gió vi vu, hương thơm diệu nhẹ của hoa sen và hoa quí. Hay nhẹ nhàng dạo bước trên những chiếc cầu nhỏ cong, bắt ngang Tây Hồ với Tô Đê tận hưởng không khí bốn mùa phân minh của vùng đất Giang Nam.\nĐoàn có thể đăng kí xem show Tống Thành thiên cổ tình – một trong những show diễn nổi tiếng của đạo diễn Trương Nghệ Mưu, các diễn viên sẽ dẫn dắt khán giả đi qua ngàn năm lịch sử vùng đất Giang Nam với sân khâu hoành tráng và đặc sắc ( chi phí tự túc 380rmb/vé )\nBuổi tối: Quý khách thưởng thức bữa tối tại nhà hàng . Nhận phòng - nghỉ đêm tại Khách Sạn 4*"
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: HÀNG CHÂU – Ô TRẤN",
        "title": "HÀNG CHÂU – Ô TRẤN",
        "detail": "Sáng: Đoàn dùng bữa sáng tại khách sạn sau đó bắt đầu hành trình của ngày mới :\nLinh Ẩn Tự Hàng Châu : Với hơn 1.600 năm lịch sử, đây là một trong mười ngôi chùa Phật giáo cổ lớn nhất Trung Quốc, được mệnh danh là “Nam Thiếu Lâm – Bắc Linh Ẩn”. Tên “Linh Ẩn” có nghĩa là “ẩn mình nơi linh thiêng”, phản ánh vị trí chùa nằm sâu trong núi, giữa rừng cây và mây khói bảng lảng quanh năm.\nSau đó đoàn di chuyển đến Ô Trấn, dùng bữa trưa tại nhà hàng rồi check in để vào Ô Trấn, nhận phòng khách sạn nghỉ ngơi.\nBuổi chiều, đoàn bắt đầu khám phá Ô Trấn, trải nghiệm ngồi thuyền ngắm nhìn Ô Trấn thơ mộng, bình yên để quên đi cuộc sống vội vã…\nThuỷ trấn cổ điển Giang Nam – Ô Trấn: Đoàn sẽ tham quan và đắm mình trong không gian cổ kính của những dãy phố đặc sắc với kiến trúc lâu đời bên cạnh những con kênh đào len lõi trong từng ngõ ngách của phố cổ. Bạn có thể thuê trang phục truyền thống và thưởng thức trà hoa nơi không gian cổ kính. (Xưởng vải, tháp Bạch Liên, ủ tương,...)\nTối: Đoàn nhận phòng khách sạn ở trong lòng Ô Trấn, sau đó tự do khám phá ăm thực Ô Trấn về đêm (ăn tối tự túc).\nÔ trấn thơ mộng (ảnh sưu tầm)"
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: Ô TRẤN – THƯỢNG HẢI",
        "title": "Ô TRẤN – THƯỢNG HẢI",
        "detail": "Sáng: Đoàn dùng bữa sáng, tự do thưởng thức trà nóng và bánh ngọt tại Ô Trấn , ngắm nhìn cuộc sống cổ trấn buổi sáng sớm với không khí yên bình\nTrưa : Đoàn làm thủ tục trả phòng, dùng bữa trưa tại nhà hàng sau đó khởi hành về lại Thượng Hải tham quan:\nNam Kinh lộ: khu mua sắm sầm uất nhất Thượng Hải. thu hút du khách từ khắp mọi nơi bởi vẻ đẹp hiện đại, tráng lệ và nhịp sống hối hả. Đại lộ bắt đầu từ The Bund ở phía Đông và kéo dài tới Đường Yan'an ở phía Tây, là “cầu nối” giữa hai quận quan trọng của Thượng Hải là Quận Hoàng Phố và Quận Tĩnh An.\nThượng Hải về đêm\nTối: Đoàn dùng cơm tối tại nhà hàng nổi tiếng được chấm sao Michelin và nhận phòng nghỉ ngơi tại thành phố Thượng Hải xa hoa và lộng lẫy."
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: THƯỢNG HẢI – TP HCM/ HÀ NỘI",
        "title": "THƯỢNG HẢI – TP HCM/ HÀ NỘI",
        "detail": "Sáng: Đoàn dùng bữa sáng và khởi hành về lại Thượng Hải.\nBến Thượng Hải: Khu tô giới xa hoa những năm cuối TK19 – đầu TK 20. Quý khách có thể lựa chọn trải nghiệm du thuyền trên sông Hoàng Phố (chi phí tự túc), chiêm ngưỡng bức tranh một Thượng Hải về đêm với các tòa nhà kiến trúc hai bên bờ sông, khu phố Đông – phố Tây.\nDu khách sẽ đến với một trong những địa điểm đặc trưng nhất tại Thượng Hải với cà phê Rei, phố Bắc Kinh, phố Tứ Xuyên, Hồng Khẩu, sông Tô Châu hiền hoà bên kiến trúc nhà thờ đậm chất Tây Phương.\nTrưa : Dùng bữa trưa tại chợ Dự Viên với các món nổi tiếng như Tiểu long bao, mì cua lông…\nChợ Dự Viên: con phố nhộn nhịp trong tiếng rao hàng của người dân điạ phương bao quanh miếu Thành Hoàng và là một trong những địa điểm sầm uất nhất tại Thượng Hải\nMinh Châu hoàn đảo: địa điểm check in biểu tượng của Thượng Hải – tháp truyền hình Đông Phương Minh Châu.\nTối: Đoàn dùng bữa tối tại nhà hàng và khởi hành về lại sân bay Phố Đông - Thượng Hải và đáp chuyến bay về lại TP HCM / HÀ NỘI\nVề đến Việt Nam, HDV chào tạm biệt đoàn và chúc cho đoàn luôn bình an và hạnh phúc !!!"
      }
    ],
    "inclusions": [
      "Vé máy bay quốc tế khứ hồi TP HCM/ Hà Nội – Thượng Hải",
      "Visa nhập cảnh Trung Quốc dành cho cả đoàn",
      "Tất cả các chi phí vé vào cửa cho tất cả các địa điểm du lịch được liệt kê trong hành trình;",
      "Các bữa ăn theo chương trình:Các bữa ăn đặc sản Trung Hoa, nhà hàng Michelin, mì cua lông…",
      "Xe du lịch đời mới",
      "Hướng dẫn viên địa phương",
      "Khách sạn: 4 sao ở các thành phố và 5* ở Ô Trấn 2 khách /phòng. Phòng 3 khi lẻ nam/nữ",
      "Phí dịch vụ & Thuế chính phủ;",
      "Các thỏa thuận bao gồm phí lập kế hoạch, xử lý, vận hành và liên lạc.",
      "Nước uống được cung cấp trong suốt chuyến đi",
      "Bảo hiểm du lịch.",
      "Quà tặng sim điện thoại."
    ],
    "exclusions": [
      "Tiền tip cho hướng dẫn viên và tài xế: 30 USD/khách/ Tour",
      "Các chi phí cá nhân không được nêu trong mục Bao gồm.",
      "Phụ thu phòng đơn nếu quý khách có nhu cầu ngủ riêng (phụ thu 6.000.000 VNĐ /khách /tour)"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  },
  {
    "id": "goholic-tour-26",
    "code": "GH-26",
    "title": "GIANG TÂY PHÚC KIẾN",
    "url": "https://goholictravel.com/tour/giang-tay-phuc-kien/",
    "country": "china",
    "countryName": "Trung Quốc",
    "region": "china",
    "departureFrom": "TP.HCM/HÀ NỘI",
    "startDate": "2025-10-14",
    "departureSchedule": "2025-10-14",
    "duration": "6 ngày 5 đêm",
    "durationCategory": "5-7-days-tour",
    "month": "thang-10,thang-11",
    "transport": "Hàng Không",
    "airline": "Hàng Không",
    "badge": "TOUR TRUNG QUỐC",
    "badgeColor": "bg-[#31c0cc]",
    "isFeatured": false,
    "price": 28890000,
    "priceDisplay": "28.890.000đ",
    "originalPrice": 32400000,
    "rating": 4.9,
    "reviewsCount": 207,
    "image": "https://goholictravel.com/wp-content/uploads/2022/09/giangtay-1200x675.jpg",
    "gallery": [
      "https://goholictravel.com/wp-content/uploads/2025/08/VU-NU-CHAU.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/06/Vong-Tien-Coc.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/06/Vu-Di-Son.jpg",
      "https://goholictravel.com/wp-content/uploads/2025/08/75285275de22452e8f01ad85cddfc523.png"
    ],
    "headMeta": [
      "6 ngày 5 đêm",
      "Nhóm: 16 - 20 Khách",
      "Tân Sơn Nhất / Nội Bài",
      "Trẻ em 2t+, người lớn, người cao tuổi"
    ],
    "shortDesc": "Chiêm ngưỡng các công trình kiến trúc Thổ Lâu – Di sản văn hoá Thế Giới tại tỉnh Phúc Kiến độc đáo ở Trung Quốc.",
    "introText": "Chiêm ngưỡng các công trình kiến trúc Thổ Lâu – Di sản văn hoá Thế Giới tại tỉnh Phúc Kiến độc đáo ở Trung Quốc.\n\nCáp treo tham quan núi Cát Tiên huyền ảo.\n\nLạc vào xứ sở thần tiên Vọng Tiên Cốc.\n\nNgắm nhìn thôn Vụ Nguyên Hoàng Lĩnh – ngôi làng đẹp nhất Trung Quốc mùa thu",
    "highlights": [
      "Tour bay thẳng TP HCM/ HÀ NỘI– HẠ MÔN",
      "Trải nghiệm đi bè tre trôi sông ở Vũ Di Sơn – “Trúc bè du ngoạn Cửu Khúc”,",
      "Trải nghiệm ở resort ở Cát Tiên Sơn, ngắm nhìn tiên nhân giữa khung cảnh thiên nhiên huyền bí",
      "Thưởng thức bữa ăn lẩu và Phật nhảy tường cao cấp",
      "Một đêm tự do thưởng thức ẩm thực Phúc Kiến như: ôc xà cừ, mì xào, vịt hầm, bánh bao đỏ, bánh ú Bá Trạng,…"
    ],
    "itinerary": [
      {
        "day": "NGÀY 1",
        "fullDayTitle": "NGÀY 1: TP.HCM/ HÀ NỘI - HẠ MÔN – NAM TĨNH",
        "title": "TP.HCM/ HÀ NỘI - HẠ MÔN – NAM TĨNH",
        "detail": "Sáng: Trưởng đoàn Goholic đón hành khách tại ga đi sân bay quốc tế Tân Sơn Nhất/ Nội Bài trước giờ khởi hành 3 tiếng để làm thủ tục check in chuyến bay đến với thành phố Hạ Mộn – Trung Quốc.\nĐáp Hạ Môn, đoàn làm thủ tục nhập cảnh sau đó di chuyển đến nhà hàng dùng bữa trưa.\nSau bữa trưa, đoàn di chuyển về Nam Tĩnh - được mệnh danh là “Vương quốc Thổ Lâu”, bởi nơi đây sở hữu hơn 15.000 căn thổ lâu, trong đó nổi bật nhất là “Tứ Thốn Thổ Lâu quần thể” (Tianluokeng Tulou Cluster) – với kiến trúc 1 vuông 4 tròn độc đáo, nhìn từ trên cao như một \"đĩa bánh\" khổng lồ giữa núi rừng.\nĐến Nam Tĩnh, đoàn nhận phòng khách sạn nghỉ ngơi\nTối: Đoàn dùng bữa tối tại nhà hàng và tự do khám phá Vương Quốc Thổ Lâu về đêm"
      },
      {
        "day": "NGÀY 2",
        "fullDayTitle": "NGÀY 2: TÔ CHÂU - HÀNG CHÂU",
        "title": "TÔ CHÂU - HÀNG CHÂU",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng tại khách sạn sau đó bắt đầu hành trình tham quan:\nVân Thủy Dao thổ lâu: có nghĩa là “Nơi nước và mây cùng thì thầm”, từng là bối cảnh chính trong bộ phim nổi tiếng “Vân Thủy Dao”, là một trong những công trình kiến trúc độc đáo và có giá trị lịch sử tại tỉnh Phúc Kiến, Trung Quốc. Đây là khu vực nổi tiếng với các tòa nhà Thổ Lâu, một loại nhà ở truyền thống của người Khách Gia, mang đậm nét văn hóa và lịch sử đặc sắc.\nBuổi trưa: đoàn dùng bữa trưa và khởi hành đi tàu cao tốc đến Vũ Di Sơn (khoảng 3 tiếng). Chuyến tàu dự kiến: D2114 14:06 – 17:44\nBuổi tối:Đoàn dùng cơm tối sau đó nhận phòng nghỉ ngơi tại Vũ Di Sơn\nVũ Di Sơn - là một danh thắng nổi tiếng thuộc tỉnh Phúc Kiến, được UNESCO công nhận là Di sản Thiên nhiên và Văn hóa Thế giới, nổi bật với cảnh sắc núi non kỳ vĩ, văn hóa trà đạo và di tích Nho giáo – Đạo giáo cổ xưa.\nĐây cũng là quê hương của Trà Đại Hồng Bào, là nơi linh thiêng của trà đạo Trung Hoa, nơi sản sinh ra loại trà Ô Long huyền thoại từng được coi là báu vật tiến vua."
      },
      {
        "day": "NGÀY 3",
        "fullDayTitle": "NGÀY 3: VŨ DI SƠN – CÁT TIÊN THÔN",
        "title": "VŨ DI SƠN – CÁT TIÊN THÔN",
        "detail": "Sáng:Đoàn dùng bữa sáng tại khách sạn, sau đó làm thủ tục trả phòng và khởi hành đi tham quan :\nVũ Di Sơn: là một trong những khu thắng cảnh tự nhiên và văn hóa nổi tiếng nhất của tỉnh Phúc Khiến, Đây là một di sản thế giới được UNESCO công nhận vào năm 1999, tìm hiểu về trà Đại hồng bào và tản bộ trong phố cổ Vũ Di.\nCửu Khúc Khê – “Dải lụa xanh giữa rừng đỏ” và trải nghiệm đặc sắc: “Trúc bè du ngoạn Cửu Khúc”, ngồi trên bè tre truyền thống, do người lái chèo bằng sào gỗ, đưa đi theo dòng suối qua các khúc quanh – vừa ngắm cảnh, vừa nghe kể chuyện địa danh, thơ ca, truyền thuyết và ngắm núi Vũ Di.\nVũ Di Cung - dấu ấn lịch sử ngàn năm, cung điện cổ kính nhất vùng Vũ Di, mang đậm dấu ấn của Đạo giáo, đồng thời là nơi lưu giữ di sản văn hóa – tư tưởng Nho học Tống Nho, đặc biệt gắn liền với danh sĩ Chu Hy (Zhu Xi).\nPhố cổ Phỏng Tống: khu phố tái hiện lại phong cách kiến trúc và đời sống triều đại nhà Tống (960–1279), nằm trong quần thể danh thắng Vũ Di Sơn, tỉnh Phúc Kiến, Trung Quốc. Đây là điểm tham quan mang đậm màu sắc hoài cổ, kết hợp văn hóa – ẩm thực – thương mại truyền thống.\nChiều đoàn khởi hành đến với Cát Tiên Thôn ( khoảng 2 tiếng đi xe)\nCát Tiên Thôn - còn được gọi là Cát Điền Thôn, là một ngôi làng cổ yên bình, thơ mộng, nằm trong khu vực Vũ Di Sơn, tỉnh Phúc Kiến, Trung Quốc. Đây là một điểm đến hấp dẫn cho những ai yêu thích nét đẹp làng quê truyền thống, văn hóa trà đạo và trải nghiệm đời sống bản địa giữa thiên nhiên hoang sơ. Bao quanh là núi non đá đỏ, rừng tre, suối trong và ruộng trà bậc thang, tạo nên khung cảnh thơ mộng, an nhiên.\nTối: Đoàn thưởng thức bữa tối, nhận phòng resort trên núi Cát Tiên sơn và trải nghiệm một đêm ngủ giữa thiên nhiên núi rừng."
      },
      {
        "day": "NGÀY 4",
        "fullDayTitle": "NGÀY 4: CÁT TIÊN THÔN – VỌNG TIÊN CỐC – THƯỢNG NHIÊU",
        "title": "CÁT TIÊN THÔN – VỌNG TIÊN CỐC – THƯỢNG NHIÊU",
        "detail": "Sáng: Đoàn dùng bữa sáng tại khách sạn, sau đó bắt đầu hành trình tham quan:\nNúi Cát Tiên – Tiên cảnh giữa mây trời Giang Tây tương truyền đây là nơi Cát Huyền thời Đông Hán tu luyện thành tiên , có giá trị tự nhiên ngoạn mục, vừa là thánh địa Đạo giáo lâu đời, gắn liền với truyền thuyết tu tiên và những công trình cổ kính trên đỉnh núi. ( đã bao gồm vé cáp treo 2 chiều).\nTrưa: sau bữa trưa, đoàn tiếp tục di chuyển đi đến thế giới tiên hiệp - Vọng Tiên Cốc ( khoảng 2 tiếng đi xe)\nVọng Tiên Cốc: tên gọi \"Vọng Tiên Cốc\" có nghĩa là \"thung lũng ngắm tiên,\" gắn liền với những truyền thuyết cổ xưa về các vị tiên thường hiện ra trong thung lũng này. Cái tên này cũng phần nào thể hiện vẻ đẹp huyền ảo và cảm giác thanh tịnh mà nơi đây mang lại cho du khách.\nĐoàn trải nghiệm hoá thân thành các vị tiên nhân giữa không gian đẹp huyền ảo của thiên nhiên\nSau đó, đoàn tiếp tục di chuyển đi Thượng Nhiêu ( khoảng 1 tiếng) - nghĩa là “trên vùng đất trù phú” – phản ánh vị trí và tài nguyên thiên nhiên phong phú. Là trung tâm kinh tế – du lịch – văn hóa phía Đông Bắc Giang Tây, cửa ngõ kết nối sang Phúc Kiến (Vũ Di Sơn), Chiết Giang (Nghĩa Ô, Hàng Châu), và An Huy. Thành phố này vừa mang nét trầm mặc cổ kính, vừa hiện đại năng động với giao thông phát triển (đường sắt cao tốc đi Bắc Kinh, Thượng Hải, Hàng Châu, Phúc Kiến…)."
      },
      {
        "day": "NGÀY 5",
        "fullDayTitle": "NGÀY 5: THƯỢNG NHIÊU - VỤ NGUYÊN - HOÀNG LĨNH – VỤ NỮ CHÂU",
        "title": "THƯỢNG NHIÊU - VỤ NGUYÊN - HOÀNG LĨNH – VỤ NỮ CHÂU",
        "detail": "Sáng: Đoàn dùng bữa sáng tại khách sạn sau đó khởi hành đến với Vụ Nguyên Hoàng Lĩnh\nĐến Vụ Nguyên Hoàng Lĩnh đoàn ăn trưa và tham quan:\nVụ Nguyên - Hoàng Lĩnh ẩn mình giữa vùng núi Giang Tây, là bức tranh hoàn mỹ của mùa thu Trung Hoa. Với những ngôi nhà cổ kính mang đậm kiến trúc Huệ Châu, làng trở nên huyền ảo giữa biển lá đỏ và vàng. Mỗi góc phố, mỗi cánh đồng đều toát lên vẻ đẹp cổ tích, như một giấc mơ thời gian của ngôi nhà cổ được xây dựng trên địa hình đồi núi, tạo nên khung cảnh \"làng treo\" ấn tượng.\nSau đó, đoàn tiếp tục khởi hành đi Vụ Nữ Châu ( khoảng 50p) - Cung điện trên mây” của Giang Tây\nVị trí: Nằm ở phía đông bắc huyện Vụ Nguyên, Vụ Nữ Châu được bao quanh bởi núi non hùng vĩ và sông nước hữu tình, tạo nên một bức tranh thủy mặc tuyệt đẹp. Tên gọi: Tên gọi \"Vụ Nữ Châu\" bắt nguồn từ truyền thuyết về nàng Vụ Nữ bay về trời, mang đậm dấu ấn văn hóa và lịch sử của vùng đất Huy Châu. Khu vực này nổi bật với kiến trúc cổ mang phong cách Huy Châu, với những ngôi nhà gỗ truyền thống, mái ngói cong vút và các họa tiết chạm khắc tinh xảo.\nTối: Đoàn đến Vụ Nữ Châu, ăn tối và tự do tham quan Vụ Nữ Châu về đêm cùng với các màn trình diễn đặc sắc như biểu diễn Hỏa hồ, pháo hoa sắt, chèo thuyền, ... :\nPháo hoa sắt: Trình diễn pháo hoa sắt là một kỹ năng truyền thống cổ xưa và ngoạn mục có nguồn gốc từ miền bắc Trung Quốc, nguồn gốc xuất phát từ nghề rèn, ban đầu là một quá trình đúc, nay nó đã được phát triển thành một buổi biểu diễn nghệ thuật trực quan ấn tượng. Vào ban đêm, những người biểu diễn sẽ bắn sắt nóng chảy vào không trung để tạo thành những tia lửa rực rỡ, rực rỡ như pháo hoa trên bầu trời đêm."
      },
      {
        "day": "Ngày 6",
        "fullDayTitle": "Ngày 6: VỤ NỮ CHÂU – HẠ MÔN – TP.HCM/HÀ NỘI",
        "title": "VỤ NỮ CHÂU – HẠ MÔN – TP.HCM/HÀ NỘI",
        "detail": "Buổi sáng: Đoàn dùng bữa sáng tại khách sạn, sau đó làm thủ tục trả phòng đi tàu về lại Hạ Môn ( khoảng 3 tiếng 50 phút).\nChuyến tàu dự kiến: G5023 0910 1251. Đến Hạ Môn, đoàn tự do mua sắm tại khu phố đi bộ Trung Sơn – con phố mua sắm sầm uất nhất tại Hạ Môn trước khi khởi hành về Việt Nam.\nBuổi chiều : Đoàn di chuyển ra sân bay để làm thủ tục check in bay về lại Việt Nam\nVề đến sân bay Tân Sơn Nhất/ Nội Bài, HDV chào tạm biệt đoàn và chúc cho đoàn luôn bình an và hạnh phúc !!!"
      }
    ],
    "inclusions": [
      "Vé máy bay quốc tế khứ hồi TP HCM /Hà Nội– Hạ Môn",
      "Visa nhập cảnh Trung Quốc dành cho cả đoàn.",
      "Tàu cao tốc 2 chặng",
      "Tất cả các chi phí vé vào cửa cho tất cả các địa điểm du lịch được liệt kê trong hành trình;",
      "Các bữa ăn theo chương trình:Các bữa ăn đặc sản Trung Hoa",
      "Xe du lịch đời mới",
      "Hướng dẫn viên địa phương và trưởng đoàn từ Việt Nam",
      "Khách sạn: 4 và 5*sao cho toàn hành trình tiêu chuẩn 02 khách/phòng",
      "Phí dịch vụ & Thuế chính phủ;",
      "Các thỏa thuận bao gồm phí lập kế hoạch, xử lý, vận hành và liên lạc.",
      "Nước uống được cung cấp trong suốt chuyến đi",
      "Bảo hiểm du lịch.",
      "Sim data internet"
    ],
    "exclusions": [
      "Tiền tip cho hướng dẫn viên và tài xế: 36 USD/khách/ Tour",
      "Các chi phí cá nhân không được nêu trong mục Bao gồm.",
      "Phụ thu phòng đơn nếu quý khách có nhu cầu ngủ riêng (phụ thu 8.000.000 VNĐ/khách/tour)"
    ],
    "visaGuide": "Tour thuộc hệ thống lữ hành chất lượng cao Goholic Travel – Thỏa chí xê dịch (10 - 15 khách/đoàn • Dịch vụ cao cấp • Tour No Shopping). Khi đăng ký qua đối tác liên kết DOANTM, quý khách được hỗ trợ tư vấn thủ tục hồ sơ Visa trọn gói, hướng dẫn chi tiết từ A-Z và hưởng đầy đủ chính sách bảo trợ chất lượng từ Goholic Travel."
  }
];

// 2. DANH SÁCH BÀI VIẾT TRAVEL BLOG GOHOLIC TRAVEL
const GOHOLIC_BLOG_POSTS = [
  {
    "id": "blog-vit-quay-bac-kinh",
    "title": "VỊT QUAY BẮC KINH – CÂU CHUYỆN ĐẰNG SAU MÓN ĂN QUỐC HỒN QUỐC TÚY",
    "date": "04/11/2025",
    "category": "Tours",
    "image": "https://goholictravel.com/wp-content/uploads/2025/11/thumbnail-vit-quay-bac-kinh.jpg",
    "url": "https://goholictravel.com/vit-quay-bac-kinh-cau-chuyen-mon-an-quoc-hon-quoc-tuy/",
    "excerpt": "Vịt quay Bắc Kinh không chỉ là một món ăn, nó là biểu tượng ẩm thực của một quốc gia, một câu chuyện lịch sử gói gọn trong từng thớ thịt. Ngay từ cái nhìn đầu tiên vào món vịt quay vàng óng, bóng bẩy, được người đầu bếp tài hoa thái lát ngay tại bàn, thực khách đã biết rằng mình đang tham gia vào một nghi thức ẩm thực có niên đại hơn 600 năm. Với kiến trúc cổ kính của Tử Cấm Thành làm nền, hình ảnh đầu bếp đang tỉ mỉ chuẩn bị món ăn trước đĩa thịt vịt đã thái lát tinh xảo, tất cả đều gợi lên sự trang trọng, cầu kỳ của một món ăn đã vượt qua cả những món sơn hào hải vị khác để trở thành ‘quốc hồn quốc túy’ của Trung Hoa.",
    "blocks": [
      {
        "tag": "p",
        "text": "Tour Trong Nước Tour Nuớc Ngoài Tour theo yêu cầu Blogs du lịch Liên hệ VỊT QUAY BẮC KINH – CÂU CHUYỆN ĐẰNG SAU MÓN ĂN QUỐC HỒN QUỐC TÚY goholictravel_bpq7uu Tháng 11 4, 2025 6:13 chiều No Comments Vịt quay Bắc Kinh không chỉ là một món ăn, nó là biểu tượng ẩm thực của một quốc gia, một câu chuyện lịch sử gói gọn trong từng thớ thịt. Ngay từ cái nhìn đầu tiên vào món vịt quay vàng óng, bóng bẩy, được người đầu bếp tài hoa thái lát ngay tại bàn, thực khách đã biết rằng mình đang tham gia vào một nghi thức ẩm thực có niên đại hơn 600 năm. Với kiến trúc cổ kính của Tử Cấm Thành làm nền, hình ảnh đầu bếp đang tỉ mỉ chuẩn bị món ăn trước đĩa thịt vịt đã thái lát tinh xảo, tất cả đều gợi lên sự trang trọng, cầu kỳ của một món ăn đã vượt qua cả những món sơn hào hải vị khác để trở thành ‘quốc hồn quốc túy’ của Trung Hoa."
      },
      {
        "tag": "p",
        "text": "I. Nguồn Gốc Vương Giả Và Hành Trình Ra Phố"
      },
      {
        "tag": "p",
        "text": "Gốc gác của Vịt quay Bắc Kinh bắt nguồn từ thời Nhà Nguyên (thế kỷ 13), khi nó là món ăn thượng hạng của Hoàng tộc, gọi là ‘Thiên Nga Bách Vị’. Mãi đến thời nhà Minh, đặc biệt là dưới triều Hoàng đế Vĩnh Lạc, khi thủ đô được dời về Bắc Kinh vào năm 1421, món ăn này mới theo chân các đầu bếp cung đình lên kinh đô mới. Chính vì vậy, món Vịt quay Bắc Kinh mang trong mình hơi thở vương giả và những câu chuyện từ thời đại hoàng kim của các triều đại Trung Hoa. Xuất thân từ bữa tiệc hoàng gia, Vịt quay Bắc Kinh mang theo hương vị vương giả từ thời Nhà Minh."
      },
      {
        "tag": "p",
        "text": "Sự nổi tiếng thực sự của Vịt quay Bắc Kinh bắt đầu khi món ăn này thoát khỏi tường thành cấm cung để đến với công chúng. Nhà hàng Bianyifang nổi tiếng với phương pháp quay lò kín truyền thống. Tuy nhiên, chính nhà hàng Quanjude, ra đời vào năm 1864, mới là nơi đã cách mạng hóa món ăn này với sự đổi mới mang tính cách mạng: Phương pháp quay lò mở, treo vịt trên cao và sử dụng củi từ cây ăn quả."
      },
      {
        "tag": "p",
        "text": "II. Nghệ Thuật Thái Thịt Và Nghi Thức Thưởng Thức"
      },
      {
        "tag": "p",
        "text": "Món vịt quay hoàn hảo đòi hỏi sự tinh tế tuyệt đối trong khâu trình bày và chế biến. Ngay sau khi ra lò, con vịt phải được thái ngay lập tức trước mặt thực khách, một nghi thức thể hiện sự tôn trọng và kỹ năng bậc thầy của người đầu bếp. Da giòn tan, thịt thơm lừng! Bí mật nằm ở loại gỗ quý (táo, lê) dùng để quay trong lò mở của Quanjude. Chính những loại gỗ này đã tạo nên hương thơm đặc trưng không thể nhầm lẫn, cùng với kỹ thuật quay lửa lớn, giúp tạo ra lớp da vịt giòn, mỏng như pha lê, là điểm nhấn quan trọng nhất của món ăn."
      },
      {
        "tag": "p",
        "text": "Một đầu bếp bậc thầy phải thái được khoảng 108 đến 120 lát thịt từ một con vịt, mỗi lát phải có cả thịt và một miếng da giòn rụm. Đây không chỉ là kỹ thuật mà còn là một màn trình diễn nghệ thuật."
      },
      {
        "tag": "p",
        "text": "Thưởng thức Vịt quay Bắc Kinh cũng là một nghệ thuật: Thịt và da vịt được cuộn trong lớp bánh tráng mỏng như lụa (bánh bía), cùng với dưa chuột tươi giòn, hành lá xanh non và nước sốt đậu ngọt đặc trưng. Sự hòa quyện hoàn hảo của vị ngọt béo của thịt, vị giòn tan của da, vị tươi mát của rau củ và vị đậm đà của nước sốt đã tạo nên một bản giao hưởng hương vị kinh điển, làm say đắm bất kỳ thực khách khó tính nào."
      },
      {
        "tag": "p",
        "text": "III. Sứ Giả Văn Hóa Trên Bàn Tiệc Ngoại Giao"
      },
      {
        "tag": "p",
        "text": "Vượt ra ngoài vai trò là một món ăn ngon, Vịt quay Bắc Kinh còn mang một ý nghĩa sâu sắc hơn. Nó không chỉ đại diện cho ẩm thực Trung Hoa mà còn là biểu tượng trong các sự kiện quốc tế và trở thành một “sứ giả ngoại giao” trên trường thế giới. Kể từ những năm 1970, món ăn này thường xuyên xuất hiện trong các bữa tiệc cấp nhà nước để chiêu đãi các nhà lãnh đạo thế giới, bao gồm Tổng thống Mỹ Richard Nixon và Ngoại trưởng Henry Kissinger. Từ bàn tiệc ngoại giao cấp cao, Vịt quay Bắc Kinh đã trở thành ‘sứ giả ẩm thực’ kết nối Trung Quốc với thế giới, góp phần xây dựng các mối quan hệ văn hóa và ngoại giao quan trọng."
      },
      {
        "tag": "p",
        "text": "Vịt quay Bắc Kinh không chỉ thỏa mãn vị giác mà còn kể về lịch sử, truyền thống và sự tự hào của người Trung Quốc. Đó là một bữa tiệc của nghệ thuật, của kỹ thuật và của thời gian, một trải nghiệm ẩm thực mà bạn phải thử để thực sự hiểu về văn hóa quốc hồn quốc túy này. Món ăn này là minh chứng sống động cho sự tinh hoa của ẩm thực Trung Hoa, mãi mãi giữ vững vị trí độc tôn trong lòng du khách và người dân bản địa."
      },
      {
        "tag": "p",
        "text": "Hoặc để lại số điện thoại, chúng tôi sẽ gọi lại cho bạn sau ít phút !"
      }
    ]
  },
  {
    "id": "blog-phuong-hoang-co-tran",
    "title": "PHƯỢNG HOÀNG CỔ TRẤN – CHỐN CỔ TÍCH CỦA TRUYỀN THUYẾT VÀ GIAI THOẠI KỲ BÍ",
    "date": "04/11/2025",
    "category": "Tours",
    "image": "https://goholictravel.com/wp-content/uploads/2025/11/thumbnail-phuong-hoang-co-tran.jpg",
    "url": "https://goholictravel.com/phuong-hoang-co-tran/",
    "excerpt": "Phượng Hoàng cổ trấn không chỉ là một điểm đến, nó là một giấc mơ bước ra từ huyền thoại, nơi thời gian dường như ngừng lại để kể những câu chuyện nghìn năm. Ngay khi đặt chân đến đây, giữa khung cảnh những mái nhà rêu phong soi bóng xuống dòng Đà Giang êm đềm, bạn sẽ hiểu vì sao nơi này lại được mệnh danh là ‘Hành trình đẹp nhất Trung Hoa’. Khác với sự ồn ào và hối hả của đô thị hiện đại, Phượng Hoàng trầm mặc, giữ trọn vẹn vẻ đẹp của hơn 1.300 năm lịch sử. Dòng Đà Giang hiền hòa chảy qua, ôm ấp những ngôi nhà sàn cổ kính, nơi mỗi góc nhỏ đều thì thầm một khúc tình ca lãng mạn.",
    "blocks": [
      {
        "tag": "p",
        "text": "Tour Trong Nước Tour Nuớc Ngoài Tour theo yêu cầu Blogs du lịch Liên hệ PHƯỢNG HOÀNG CỔ TRẤN – CHỐN CỔ TÍCH CỦA TRUYỀN THUYẾT VÀ GIA THOẠI KỲ BÍ goholictravel_bpq7uu Tháng 11 4, 2025 6:10 chiều No Comments Phượng Hoàng cổ trấn không chỉ là một điểm đến, nó là một giấc mơ bước ra từ huyền thoại, nơi thời gian dường như ngừng lại để kể những câu chuyện nghìn năm. Ngay khi đặt chân đến đây, giữa khung cảnh những mái nhà rêu phong soi bóng xuống dòng Đà Giang êm đềm, bạn sẽ hiểu vì sao nơi này lại được mệnh danh là ‘Hành trình đẹp nhất Trung Hoa’. Khác với sự ồn ào và hối hả của đô thị hiện đại, Phượng Hoàng trầm mặc, giữ trọn vẹn vẻ đẹp của hơn 1.300 năm lịch sử. Dòng Đà Giang hiền hòa chảy qua, ôm ấp những ngôi nhà sàn cổ kính, nơi mỗi góc nhỏ đều thì thầm một khúc tình ca lãng mạn."
      },
      {
        "tag": "p",
        "text": "I. Kiến Trúc Rêu Phong và Hơi Thở Của Thời Gian"
      },
      {
        "tag": "p",
        "text": "Phần lớn vẻ đẹp mê hoặc của cổ trấn đến từ kiến trúc độc đáo, đặc biệt là những ngôi nhà sàn (Điếu Cước Lâu) nằm san sát bên bờ sông Đà Giang. Chúng được xây dựng từ thời nhà Minh và nhà Thanh, không chỉ để chống lũ mà còn là biểu tượng sống động của sự hòa hợp giữa con người và thiên nhiên. Buổi sáng sớm, khi lớp sương mờ còn lãng đãng bao phủ những mái nhà ngói âm dương, toàn bộ cổ trấn hiện lên như một bức tranh thủy mặc, huyền ảo và đầy chất thơ. Những con thuyền gỗ nhỏ nhẹ nhàng lướt trên mặt sông, mang theo hơi thở của một cuộc sống bình dị và yên ả."
      },
      {
        "tag": "p",
        "text": "Trung tâm của cổ trấn là Cầu Hồng Kiều (Hongqiao Bridge) – một công trình kiến trúc cổ kính, vừa vững chãi vừa lãng mạn. Cây cầu không chỉ là huyết mạch giao thông quan trọng mà còn là nơi giao thoa văn hóa, nơi người dân các dân tộc Miêu, Thổ Gia tụ họp, trao đổi hàng hóa và chia sẻ những câu chuyện đời thường. Nó sừng sững bắc qua dòng sông, là điểm nhấn không thể thiếu trong mọi góc nhìn về Phượng Hoàng."
      },
      {
        "tag": "p",
        "text": "II. Người Miêu: Linh Hồn Bất Diệt Của Phượng Hoàng"
      },
      {
        "tag": "p",
        "text": "Phượng Hoàng cổ trấn không chỉ có kiến trúc cổ kính, mà còn là cái nôi của nền văn hóa độc đáo. Đây là quê hương của người dân tộc Miêu (Miao) và Thổ Gia (Tujia), những người đã thổi hồn và giữ gìn nét văn hóa đặc sắc, làm cho cổ trấn thêm phần huyền ảo. Mang trong mình dòng máu cổ xưa, người Miêu gìn giữ những phong tục tập quán truyền thống, từ ẩm thực đến trang phục, tô điểm cho Phượng Hoàng thêm phần rực rỡ."
      },
      {
        "tag": "p",
        "text": "Trang phục Miêu tộc là một tác phẩm nghệ thuật di động đầy màu sắc và tinh xảo. Phụ nữ Miêu diện những bộ trang phục thêu thùa công phu, đặc biệt là những bộ trang sức bạc lấp lánh, được chế tác tỉ mỉ. Người Miêu tin rằng bạc không chỉ là vật trang sức mà còn là lá bùa hộ mệnh, có khả năng xua đuổi tà ma và mang lại may mắn. Mỗi bộ trang phục không chỉ là quần áo mà còn là một câu chuyện, là lịch sử, là niềm tự hào của cả dân tộc, được truyền từ đời này sang đời khác."
      },
      {
        "tag": "p",
        "text": "III. Cuộc Sống Bình Dị Giữa Lòng Huyền Thoại"
      },
      {
        "tag": "p",
        "text": "Dù đã trở thành một điểm đến nổi tiếng toàn cầu, Phượng Hoàng cổ trấn vẫn giữ được nhịp sống chậm rãi và bình dị. Dạo bước trên những con phố lát đá cổ kính, bạn sẽ thấy người dân địa phương bán những món quà lưu niệm thủ công tinh xảo, thưởng thức các món ăn dân dã và cảm nhận sự thân thiện mộc mạc từ những nụ cười hiền lành. Mỗi con ngõ nhỏ, mỗi bước chân qua, cổ trấn đều kể một câu chuyện về cuộc sống giản dị mà sâu sắc của người dân bản địa."
      },
      {
        "tag": "p",
        "text": "Khi màn đêm buông xuống, Phượng Hoàng Cổ Trấn lột xác hoàn toàn, biến thành một nàng công chúa lộng lẫy và huyền ảo. Hàng ngàn chiếc đèn lồng được thắp sáng, ánh sáng lung linh phản chiếu xuống mặt sông Đà Giang, tạo nên một cảnh tượng kỳ ảo đến nghẹt thở. Cả cổ trấn bừng sáng trong ánh đèn, làm nổi bật những mái nhà, cây cầu và những con thuyền trôi nhẹ. Đó là một vẻ đẹp vừa cổ điển vừa lãng mạn, mời gọi du khách đắm chìm vào không gian đầy mê hoặc."
      },
      {
        "tag": "p",
        "text": "Phượng Hoàng cổ trấn là nơi truyền thuyết và thực tại hòa quyện, là một viên ngọc quý giữa lòng Trung Hoa. Hãy một lần đến đây, để dòng Đà Giang kể cho bạn nghe những câu chuyện tình ca, và để ngọn lửa văn hóa Miêu tộc sưởi ấm tâm hồn bạn. Chắc chắn, đó sẽ là một hành trình vượt thời gian, đầy ắp những kỷ niệm và cảm xúc mà bạn không bao giờ quên."
      },
      {
        "tag": "p",
        "text": "Hoặc để lại số điện thoại, chúng tôi sẽ gọi lại cho bạn sau ít phút !"
      }
    ]
  },
  {
    "id": "blog-tau-hoa-kandy-ella",
    "title": "HÀNH TRÌNH TÀU HỎA KANDY – ELLA: CUNG ĐƯỜNG SẮT ĐẸP NHẤT THẾ GIỚI",
    "date": "04/11/2025",
    "category": "Travel",
    "image": "https://goholictravel.com/wp-content/uploads/2025/11/thumbnail-sri-lanka.jpg",
    "url": "https://goholictravel.com/hanh-trinh-tau-hoa-kandy-ella/",
    "excerpt": "Nếu có một chuyến tàu nào xứng đáng với danh hiệu “Cung đường sắt đẹp nhất thế giới”, thì đó chính là hành trình Kandy – Ella ở Sri Lanka. Tuyến đường sắt này, được xây dựng từ thời thuộc địa Anh với mục đích ban đầu là vận chuyển chè, giờ đây đã trở thành một trong những trải nghiệm du lịch đáng khao khát nhất châu Á. Hành trình kéo dài khoảng 7 giờ đồng hồ là một thước phim quay chậm về thiên nhiên hùng vĩ của Sri Lanka: từ những ngọn núi phủ sương mù huyền ảo, những khu rừng rậm rạp xanh thẳm, đến bạt ngàn đồi chè xanh mướt ngút tầm mắt. Mỗi khung cửa sổ của đoàn tàu đều là một bức tranh sống động, thay đổi liên tục theo từng dặm đường.",
    "blocks": [
      {
        "tag": "p",
        "text": "Tour Trong Nước Tour Nuớc Ngoài Tour theo yêu cầu Blogs du lịch Liên hệ HÀNH TRÌNH TÀU HỎA KANDY – ELLA: CUNG ĐƯỜNG SẮT ĐẸP NHẤT THẾ GIỚI goholictravel_bpq7uu Tháng 11 4, 2025 6:08 chiều No Comments Nếu có một chuyến tàu nào xứng đáng với danh hiệu “Cung đường sắt đẹp nhất thế giới”, thì đó chính là hành trình Kandy – Ella ở Sri Lanka. Tuyến đường sắt này, được xây dựng từ thời thuộc địa Anh với mục đích ban đầu là vận chuyển chè, giờ đây đã trở thành một trong những trải nghiệm du lịch đáng khao khát nhất châu Á. Hành trình kéo dài khoảng 7 giờ đồng hồ là một thước phim quay chậm về thiên nhiên hùng vĩ của Sri Lanka: từ những ngọn núi phủ sương mù huyền ảo, những khu rừng rậm rạp xanh thẳm, đến bạt ngàn đồi chè xanh mướt ngút tầm mắt. Mỗi khung cửa sổ của đoàn tàu đều là một bức tranh sống động, thay đổi liên tục theo từng dặm đường."
      },
      {
        "tag": "p",
        "text": "I. Màu Xanh Bất Tận Của ‘Vùng Đất Chè’"
      },
      {
        "tag": "p",
        "text": "Tuyến đường đi qua cao nguyên trung tâm của Sri Lanka, một vùng đất được mệnh danh là ‘Tea Country’ (Vùng đất chè). Ngay từ lúc khởi hành tại Kandy, bạn đã được chiêm ngưỡng những đồn điền chè trải dài bất tận, nơi những công nhân hái chè (đa số là phụ nữ gốc Tamil) cần mẫn làm việc, tạo nên những chấm phá đầy màu sắc trên nền xanh của lá chè. Đoàn tàu màu xanh biếc êm đềm lướt qua những sườn đồi, tạo nên sự tương phản hoàn hảo với màu xanh thẳm của đồi chè, khắc họa nên một khung cảnh đậm chất điện ảnh, mang theo những câu chuyện của Sri Lanka huyền thoại."
      },
      {
        "tag": "p",
        "text": "Sự kỳ vĩ của cung đường không chỉ nằm ở cảnh quan thiên nhiên mà còn ở kiến trúc công trình. Tuyến đường uốn lượn qua những cây cầu đá cổ kính, len lỏi qua các đường hầm tối tăm và chạy dọc theo những vách núi dựng đứng, tất cả đều thể hiện sự tài tình của kỹ thuật xây dựng dưới thời kỳ Victoria. Cung đường này không chỉ là một tuyến giao thông mà còn là một tác phẩm nghệ thuật kỹ thuật, hòa mình hoàn hảo vào thiên nhiên."
      },
      {
        "tag": "p",
        "text": "II. Cầu Vòm 9 Nhịp: Dấu Ấn Kiêu Hãnh Giữa Đại Ngàn"
      },
      {
        "tag": "p",
        "text": "Điểm nhấn nổi tiếng nhất, và cũng là biểu tượng của hành trình này, chính là Cầu Vòm 9 Nhịp (Nine Arch Bridge), một kiệt tác kiến trúc gần thị trấn Ella. Cây cầu được xây dựng hoàn toàn bằng đá và gạch vào năm 1921, không hề sử dụng thép hay bê tông cốt thép, là minh chứng hùng hồn cho kỹ thuật xây dựng truyền thống và sự bền vững với thời gian."
      },
      {
        "tag": "p",
        "text": "Giữa bạt ngàn đồi chè xanh ngát, Cầu Vòm 9 Nhịp hiện ra như một kỳ quan, nơi thời gian dường như ngưng đọng. Khi đoàn tàu màu xanh từ từ băng qua 9 vòm bán nguyệt, giữa màu xanh thẳm của đồi chè và những ngọn núi bao la, đó là khoảnh khắc mà mọi du khách đều muốn ghi lại. Khung cảnh này gói gọn tất cả vẻ đẹp lãng mạn, lịch sử và sự giao hòa giữa con người với thiên nhiên của Sri Lanka."
      },
      {
        "tag": "p",
        "text": "III. Khoảnh Khắc Tự Do Tuyệt Đối Trên Tàu"
      },
      {
        "tag": "p",
        "text": "Điều khiến hành trình Kandy – Ella trở nên đặc biệt không phải là sự tiện nghi sang trọng, mà là trải nghiệm độc đáo và gần gũi với thiên nhiên. Du khách thường chọn ngồi ở cửa sổ, thậm chí là đứng ở cửa toa tàu, để cảm nhận trọn vẹn làn gió núi mát lạnh phả vào mặt, ngắm nhìn cảnh vật tươi đẹp trôi qua một cách chân thực nhất. Hành trình không chỉ là đến đích, mà còn là những khoảnh khắc bay bổng, hòa mình vào vẻ đẹp diệu kỳ của Kandy – Ella."
      },
      {
        "tag": "p",
        "text": "Việc thò người ra khỏi cửa sổ, hít thở không khí trong lành của đồi núi và ngắm nhìn những đồn điền chè trải dài bất tận là một trải nghiệm tự do không thể tìm thấy ở bất kỳ nơi nào khác. Đó là lúc bạn cảm thấy mình thực sự hòa làm một với thiên nhiên hùng vĩ của Sri Lanka, tận hưởng sự an yên và thư thái tuyệt đối. Những nụ cười rạng rỡ trên khuôn mặt du khách, thể hiện sự hạnh phúc và phấn khích tột độ, chính là minh chứng cho sức hút không thể chối từ của cung đường này."
      },
      {
        "tag": "p",
        "text": "Hành trình tàu hỏa Kandy – Ella là một chuyến phiêu lưu đầy cảm xúc, đưa bạn qua những đồn điền chè xanh, những ngọn núi huyền bí, và kết thúc bằng sự chiêm ngưỡng kỳ quan kiến trúc độc đáo. Đây không chỉ là một chuyến đi đơn thuần, mà là một trải nghiệm để bạn sạc lại năng lượng, tìm thấy sự bình yên và trân trọng những vẻ đẹp thô sơ, kỳ vĩ của thế giới. Hãy để chuyến tàu xanh Kandy – Ella dẫn lối bạn đến với những ký ức không thể nào quên."
      },
      {
        "tag": "p",
        "text": "Hoặc để lại số điện thoại, chúng tôi sẽ gọi lại cho bạn sau ít phút !"
      }
    ]
  }
];

// 3. CẤU HÌNH TÀI KHOẢN NGÂN HÀNG NHẬN ĐẶT CỌC / THANH TOÁN (ĐỐI TÁC LIÊN KẾT DOANTM)
const PAYMENT_CONFIG = {
  bankId: "TCB",
  bankName: "Techcombank (TCB)",
  accountNumber: "5930073169",
  accountName: "Trần Minh Đoàn",
  accountNameQr: "TRAN MINH DOAN",
  hotline: "039 6611 633",
  goholicHotline: "039 6611 633 - 0903 779 759",
  zalo: "0396611633",
  email: "info@goholictravel.com",
  address: "290C/23 Dương Bá Trạc, Phường Chánh Hưng, TP.HCM",
  depositRate: 0.5,
  defaultPlatformDiscount: 500000, // Mặc định giảm giá mua tour qua nền tảng DOANTM: 500.000 đồng
  vouchers: {
    "DOANTM": { discount: 500000, desc: "Giảm thêm 500.000đ ưu đãi độc quyền DOANTM" },
    "DOANTM500": { discount: 500000, desc: "Giảm thêm 500.000đ ưu đãi đối tác DOANTM" },
    "GOHOLIC500": { discount: 500000, desc: "Giảm thêm 500.000đ từ Goholic Travel" },
    "DOANTMVIP": { discount: 1000000, desc: "Giảm thêm 1.000.000đ khách hàng VIP DOANTM" },
    "VIP1000": { discount: 1000000, desc: "Giảm thêm 1.000.000đ Voucher VIP" },
    "DOANTM200": { discount: 200000, desc: "Giảm thêm 200.000đ mã giới thiệu DOANTM" },
    "GOHOLIC": { discount: 300000, desc: "Giảm thêm 300.000đ ưu đãi Goholic Travel" }
  }
};

// 4. MAIN CONTROLLER TOURS APP
class ToursApp {
  constructor() {
    this.tours = OUTBOUND_TOURS_DATA;
    this.blogs = GOHOLIC_BLOG_POSTS;
    this.currentFilter = "all";
    this.durationFilter = "";
    this.monthFilter = "";
    this.searchKeyword = "";
    this.selectedTour = null;
    this.currentBooking = null;
    this.appliedVoucherCode = "";
    this.appliedVoucherDiscount = 0;

    this.init();
  }

  init() {
    this.renderToursList();
    this.renderBlogsList();
    this.setupEventListeners();
    this.setupTabs();
    this.checkUrlParams();
  }

  filterTours(category) {
    this.currentFilter = category;
    const destSelect = document.getElementById("filter-destination-select");
    if (destSelect) {
      destSelect.value = (category === "all" || category === "featured") ? "" : category;
    }
    this.updateActiveFilterTab();
    this.renderToursList();
  }

  searchTours(query) {
    this.searchKeyword = query.toLowerCase().trim();
    this.renderToursList();
  }

  applyAdvancedFilters() {
    const searchInput = document.getElementById("search-tour-input");
    const destSelect = document.getElementById("filter-destination-select");
    const durSelect = document.getElementById("filter-duration-select");
    const monthSelect = document.getElementById("filter-month-select");

    if (searchInput) this.searchKeyword = searchInput.value.toLowerCase().trim();
    if (destSelect) {
      this.currentFilter = destSelect.value || "all";
      this.updateActiveFilterTab();
    }
    if (durSelect) this.durationFilter = durSelect.value || "";
    if (monthSelect) this.monthFilter = monthSelect.value || "";

    this.renderToursList();
  }

  renderToursList() {
    const container = document.getElementById("tours-grid-container");
    const countEl = document.getElementById("tours-count-display");
    if (!container) return;

    let filtered = this.tours.filter(tour => {
      let matchCategory = true;
      if (this.currentFilter === "featured") {
        matchCategory = tour.isFeatured === true;
      } else if (this.currentFilter !== "all") {
        matchCategory = (tour.country === this.currentFilter) || (tour.region === this.currentFilter);
      }

      const matchDuration = !this.durationFilter || (tour.durationCategory && tour.durationCategory.includes(this.durationFilter));
      const matchMonth = !this.monthFilter || (tour.month && tour.month.includes(this.monthFilter));

      const matchSearch = !this.searchKeyword ||
        tour.title.toLowerCase().includes(this.searchKeyword) ||
        tour.shortDesc.toLowerCase().includes(this.searchKeyword) ||
        tour.introText.toLowerCase().includes(this.searchKeyword) ||
        tour.departureFrom.toLowerCase().includes(this.searchKeyword) ||
        tour.countryName.toLowerCase().includes(this.searchKeyword) ||
        tour.code.toLowerCase().includes(this.searchKeyword);

      return matchCategory && matchDuration && matchMonth && matchSearch;
    });

    if (countEl) {
      countEl.textContent = `Hiển thị ${filtered.length} / ${this.tours.length} hành trình chính thức từ Goholic Travel`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center bg-white rounded-3xl border border-slate-200 shadow-sm">
          <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center">
            <i data-lucide="search-x" class="w-8 h-8"></i>
          </div>
          <h3 class="text-lg font-bold text-slate-900">Không tìm thấy hành trình phù hợp</h3>
          <p class="text-sm text-slate-500 mt-1">Vui lòng thử chọn Điểm đến / Tháng khởi hành khác hoặc bấm Xem tất cả Tour.</p>
          <button onclick="window.toursAppInstance.resetFilter()" class="mt-4 px-5 py-2.5 rounded-xl bg-[#31c0cc] hover:bg-[#28a8b3] text-white text-xs font-bold shadow-md transition">
            Xem tất cả 26 Tour Goholic
          </button>
        </div>
      `;
      if (window.lucide) lucide.createIcons();
      return;
    }

    container.innerHTML = filtered.map(tour => {
      return `
        <div class="group bg-white border border-slate-200/90 hover:border-[#31c0cc] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <div>
            <!-- Hình ảnh Tour chuẩn Goholic Travel -->
            <div class="relative aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer" onclick="window.toursAppInstance.openTourDetail('${tour.id}')">
              <img src="${tour.image}" alt="${tour.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition"></div>
              
              <!-- Nhãn Liên kết DOANTM x Goholic -->
              <div class="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-slate-800 shadow-md border border-slate-200/80">
                <img src="assets/goholic-logo-badge.png" alt="Goholic" class="h-3.5 rounded-sm object-contain" />
                <span class="text-[#0f4c5c]">Goholic</span>
                <span class="text-slate-300">✕</span>
                <span class="text-emerald-600 font-extrabold">DOANTM</span>
              </div>

              ${tour.isFeatured ? `
                <div class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#f8af22] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                  Nổi Bật
                </div>
              ` : `
                <div class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                  ${tour.countryName}
                </div>
              `}
            </div>

            <!-- Phần thông tin thẻ Tour giống y hệt bố cục Goholic Travel -->
            <div class="p-5">
              <!-- Tiêu đề Tour in hoa đậm -->
              <h3 onclick="window.toursAppInstance.openTourDetail('${tour.id}')" class="font-extrabold text-[15px] sm:text-base text-slate-900 group-hover:text-[#29aab4] transition line-clamp-2 min-h-[2.75rem] leading-snug cursor-pointer uppercase">
                ${tour.title}
              </h3>

              <!-- Khối thông tin Xuất phát / Ngày KH / Thời gian / Phương tiện & Giá màu đỏ bên phải -->
              <div class="mt-3 pt-3 border-t border-slate-100 flex items-end justify-between gap-2">
                <div class="space-y-1.5 text-[12.5px] text-slate-600">
                  <div class="flex items-center gap-2">
                    <i data-lucide="map-pin" class="w-3.5 h-3.5 text-slate-700 flex-shrink-0"></i>
                    <span>Xuất phát: <strong class="text-slate-900 font-bold">${tour.departureFrom}</strong></span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i data-lucide="calendar" class="w-3.5 h-3.5 text-slate-700 flex-shrink-0"></i>
                    <span>Ngày khởi hành: <strong class="text-slate-900 font-bold">${tour.startDate || 'Liên hệ'}</strong></span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i data-lucide="clock" class="w-3.5 h-3.5 text-slate-700 flex-shrink-0"></i>
                    <span>Thời gian: <strong class="text-slate-900 font-bold">${tour.duration}</strong></span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i data-lucide="plane" class="w-3.5 h-3.5 text-slate-700 flex-shrink-0"></i>
                    <span>Phương tiện: <strong class="text-slate-900 font-bold">${tour.transport}</strong></span>
                  </div>
                </div>

                <!-- Giá tiền màu đỏ nổi bật góc phải dưới giống ảnh mẫu Goholic -->
                <div class="text-right flex-shrink-0 pb-0.5">
                  <span class="text-lg sm:text-[19px] font-extrabold text-[#e30925] tracking-tight block leading-none">
                    ${tour.priceDisplay}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- 2 Nút thao tác: Xem chi tiết lịch trình & Đặt tour ngay -->
          <div class="px-5 pb-5 pt-1">
            <div class="grid grid-cols-2 gap-2.5 pt-3 border-t border-slate-100">
              <button onclick="window.toursAppInstance.openTourDetail('${tour.id}')" class="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition flex items-center justify-center gap-1.5 border border-slate-200/80">
                <i data-lucide="file-text" class="w-3.5 h-3.5 text-[#29aab4]"></i>
                <span>Lịch trình chi tiết</span>
              </button>
              <button onclick="window.toursAppInstance.openBookingModal('${tour.id}')" class="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#31c0cc] to-emerald-600 hover:from-[#28a8b3] hover:to-emerald-700 text-white text-xs font-bold shadow-sm transition flex items-center justify-center gap-1.5">
                <i data-lucide="calendar-check" class="w-3.5 h-3.5"></i>
                <span>Đặt tour ngay</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    if (window.lucide) lucide.createIcons();
  }

  renderBlogsList() {
    const blogContainer = document.getElementById("goholic-blogs-grid");
    if (!blogContainer) return;

    blogContainer.innerHTML = this.blogs.map(blog => `
      <article onclick="window.toursAppInstance.openBlogModal('${blog.id}')" class="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-[#31c0cc] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between">
        <div>
          <div class="relative aspect-[16/9] overflow-hidden bg-slate-100">
            <img src="${blog.image}" alt="${blog.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div class="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#31c0cc] text-white text-[10px] font-bold uppercase tracking-wider shadow">
              ${blog.category}
            </div>
          </div>
          <div class="p-5 space-y-2.5">
            <div class="flex items-center gap-2 text-xs text-slate-500">
              <i data-lucide="calendar" class="w-3.5 h-3.5 text-[#f8af22]"></i>
              <span>${blog.date}</span>
              <span>•</span>
              <span class="text-[#29aab4] font-semibold">Goholic Travel Blog</span>
            </div>
            <h3 class="font-extrabold text-base text-slate-900 group-hover:text-[#29aab4] transition line-clamp-2 leading-snug">
              ${blog.title}
            </h3>
            <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed">
              ${blog.excerpt}
            </p>
          </div>
        </div>
        <div class="px-5 pb-5 pt-2">
          <span class="inline-flex items-center gap-1.5 text-xs font-bold text-[#29aab4] group-hover:translate-x-1 transition-transform">
            <span>Đọc toàn bộ bài viết</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </span>
        </div>
      </article>
    `).join("");

    if (window.lucide) lucide.createIcons();
  }

  openBlogModal(blogId) {
    const blog = this.blogs.find(b => b.id === blogId);
    if (!blog) return;

    const modal = document.getElementById("modal-blog-detail");
    if (!modal) return;

    document.getElementById("blog-detail-img").src = blog.image;
    document.getElementById("blog-detail-category").textContent = blog.category;
    document.getElementById("blog-detail-date").textContent = blog.date;
    document.getElementById("blog-detail-title").textContent = blog.title;
    document.getElementById("blog-detail-source-link").href = blog.url;

    const contentBox = document.getElementById("blog-detail-content");
    if (contentBox) {
      contentBox.innerHTML = blog.blocks.map(b => {
        if (b.tag === "h2" || b.tag === "h3" || b.tag === "h4") {
          return `<h4 class="text-base sm:text-lg font-extrabold text-slate-900 pt-3">${b.text}</h4>`;
        }
        return `<p class="text-sm text-slate-700 leading-relaxed">${b.text}</p>`;
      }).join("");
    }

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    if (window.lucide) lucide.createIcons();
  }

  closeBlogModal() {
    const modal = document.getElementById("modal-blog-detail");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }

  resetFilter() {
    this.currentFilter = "all";
    this.durationFilter = "";
    this.monthFilter = "";
    this.searchKeyword = "";
    const searchInput = document.getElementById("search-tour-input");
    const destSelect = document.getElementById("filter-destination-select");
    const durSelect = document.getElementById("filter-duration-select");
    const monthSelect = document.getElementById("filter-month-select");
    if (searchInput) searchInput.value = "";
    if (destSelect) destSelect.value = "";
    if (durSelect) durSelect.value = "";
    if (monthSelect) monthSelect.value = "";
    this.updateActiveFilterTab();
    this.renderToursList();
  }

  updateActiveFilterTab() {
    document.querySelectorAll(".tour-filter-btn").forEach(btn => {
      const filter = btn.getAttribute("data-filter");
      if (filter === this.currentFilter) {
        btn.classList.add("bg-[#31c0cc]", "text-white", "border-[#31c0cc]", "shadow-sm");
        btn.classList.remove("bg-white", "text-slate-700", "border-slate-200");
      } else {
        btn.classList.remove("bg-[#31c0cc]", "text-white", "border-[#31c0cc]", "shadow-sm");
        btn.classList.add("bg-white", "text-slate-700", "border-slate-200");
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

    document.getElementById("detail-title").textContent = tour.title;
    document.getElementById("detail-code").textContent = `Mã: ${tour.code} • Xuất phát: ${tour.departureFrom}`;
    document.getElementById("detail-duration").textContent = tour.duration;
    document.getElementById("detail-airline").textContent = tour.transport;
    document.getElementById("detail-schedule").textContent = `${tour.startDate || 'Liên hệ'} (Từ ${tour.departureFrom})`;
    document.getElementById("detail-price").textContent = tour.priceDisplay;
    document.getElementById("detail-original-price").textContent = "";
    document.getElementById("detail-hero-img").src = tour.image;
    document.getElementById("detail-badge").textContent = tour.countryName;

    // Render Intro Text (preserve paragraphs)
    const descEl = document.getElementById("detail-short-desc");
    if (descEl) {
      const paragraphs = (tour.introText || tour.shortDesc || "").split(/\n+/).filter(Boolean);
      descEl.innerHTML = paragraphs.map(p => `<p class="mb-2.5 leading-relaxed text-slate-700">${p}</p>`).join("");
    }

    // Render Head Meta pills if container exists
    const metaBox = document.getElementById("detail-head-meta");
    if (metaBox) {
      const metas = tour.headMeta && tour.headMeta.length ? tour.headMeta : [tour.duration, "10 - 15 khách/đoàn", tour.departureFrom, "Tour No Shopping"];
      metaBox.innerHTML = metas.map(m => `
        <span class="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-1.5">
          <i data-lucide="sparkles" class="w-3.5 h-3.5 text-[#31c0cc]"></i>
          <span>${m}</span>
        </span>
      `).join("");
    }

    // Render Gallery if available
    const galleryWrap = document.getElementById("detail-gallery-wrap");
    const galleryGrid = document.getElementById("detail-gallery-grid");
    if (galleryWrap && galleryGrid) {
      if (tour.gallery && tour.gallery.length > 0) {
        galleryWrap.classList.remove("hidden");
        galleryGrid.innerHTML = tour.gallery.slice(0, 6).map(imgUrl => `
          <a href="${imgUrl}" target="_blank" rel="noopener" class="block aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 group">
            <img src="${imgUrl}" alt="${tour.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" loading="lazy" />
          </a>
        `).join("");
      } else {
        galleryWrap.classList.add("hidden");
      }
    }

    // Render Highlights ("Những trải nghiệm đặc biệt")
    const highlightsContainer = document.getElementById("detail-highlights-list");
    if (highlightsContainer) {
      highlightsContainer.innerHTML = tour.highlights.map(hl => `
        <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-[#31c0cc] flex-shrink-0 mt-0.5"></i>
          <span>${hl}</span>
        </li>
      `).join("");
    }

    // Render Itinerary ("Chương trình chi tiết" từng ngày)
    const itineraryContainer = document.getElementById("detail-itinerary-list");
    if (itineraryContainer) {
      if (tour.itinerary && tour.itinerary.length > 0) {
        itineraryContainer.innerHTML = tour.itinerary.map(item => {
          const lines = (item.detail || "").split(/\n+/).filter(Boolean);
          return `
            <div class="relative pl-6 pb-6 border-l-2 border-[#31c0cc]/40 last:border-transparent last:pb-0">
              <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-[#31c0cc] flex items-center justify-center">
                <span class="w-1.5 h-1.5 rounded-full bg-[#31c0cc]"></span>
              </div>
              <span class="text-xs font-extrabold text-[#29aab4] uppercase tracking-wider block">${item.fullDayTitle || (item.day + ': ' + item.title)}</span>
              <div class="mt-2 space-y-1.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/70">
                ${lines.map(l => `<p>${l}</p>`).join("")}
              </div>
            </div>
          `;
        }).join("");
      } else {
        itineraryContainer.innerHTML = `<p class="text-xs text-slate-500">Vui lòng liên hệ Hotline để nhận file lịch trình chi tiết từng ngày của chuyến đi.</p>`;
      }
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
        <li class="flex items-start gap-2 text-xs text-slate-600">
          <i data-lucide="x" class="w-3.5 h-3.5 text-rose-500 flex-shrink-0 mt-0.5"></i>
          <span>${exc}</span>
        </li>
      `).join("");
    }

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

  openBookingModal(tourId) {
    const tour = this.tours.find(t => t.id === tourId) || this.selectedTour;
    if (!tour) return;

    this.selectedTour = tour;
    this.closeTourDetail();

    const modal = document.getElementById("modal-booking");
    if (!modal) return;

    document.getElementById("booking-tour-name").textContent = tour.title;
    document.getElementById("booking-tour-code").textContent = `${tour.code} • ${tour.departureFrom}`;
    document.getElementById("booking-tour-price").textContent = `${tour.priceDisplay} / khách`;
    document.getElementById("booking-tour-schedule").textContent = `Khởi hành: ${tour.startDate || 'Liên hệ'}`;
    document.getElementById("booking-tour-img").src = tour.image;

    const dateInput = document.getElementById("book-date");
    if (dateInput && tour.startDate && /^\d{4}-\d{2}-\d{2}$/.test(tour.startDate)) {
      dateInput.value = tour.startDate;
    }

    document.getElementById("book-adults-count").value = 1;
    document.getElementById("book-children-count").value = 0;

    // Reset mã Voucher nhập thêm (Ưu đãi mặc định -500.000đ của nền tảng DOANTM luôn được áp dụng tự động)
    this.appliedVoucherCode = "";
    this.appliedVoucherDiscount = 0;
    const voucherInput = document.getElementById("book-voucher-code");
    if (voucherInput) voucherInput.value = "";
    const feedbackMsg = document.getElementById("voucher-feedback-msg");
    if (feedbackMsg) {
      feedbackMsg.textContent = "";
      feedbackMsg.classList.add("hidden");
    }

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

  applyVoucherCode() {
    const voucherInput = document.getElementById("book-voucher-code");
    const feedbackMsg = document.getElementById("voucher-feedback-msg");
    if (!voucherInput || !feedbackMsg) return;

    const rawCode = voucherInput.value.trim().toUpperCase();
    feedbackMsg.classList.remove("hidden", "text-emerald-600", "text-red-600", "text-slate-500");

    if (!rawCode) {
      this.appliedVoucherCode = "";
      this.appliedVoucherDiscount = 0;
      feedbackMsg.textContent = "Đã gỡ mã Voucher nhập thêm. Ưu đãi mặc định -500.000đ qua DOANTM vẫn được giữ nguyên.";
      feedbackMsg.classList.add("text-slate-500");
      this.updateBookingPriceCalculation();
      return;
    }

    const voucherInfo = PAYMENT_CONFIG.vouchers && PAYMENT_CONFIG.vouchers[rawCode];
    if (voucherInfo) {
      this.appliedVoucherCode = rawCode;
      this.appliedVoucherDiscount = voucherInfo.discount;
      feedbackMsg.innerHTML = `✓ Áp dụng mã <strong>${rawCode}</strong> thành công: ${voucherInfo.desc} (-${voucherInfo.discount.toLocaleString("vi-VN")} đ)`;
      feedbackMsg.classList.add("text-emerald-600", "font-semibold");
    } else {
      this.appliedVoucherCode = "";
      this.appliedVoucherDiscount = 0;
      feedbackMsg.innerHTML = `✕ Mã Voucher <strong>${rawCode}</strong> không hợp lệ hoặc đã hết hạn. (Gợi ý mã: <strong>DOANTM500</strong>, <strong>GOHOLIC500</strong>, <strong>DOANTMVIP</strong>)`;
      feedbackMsg.classList.add("text-red-600", "font-semibold");
    }

    this.updateBookingPriceCalculation();
  }

  updateBookingPriceCalculation() {
    if (!this.selectedTour) return;

    const adults = parseInt(document.getElementById("book-adults-count")?.value || 1, 10);
    const children = parseInt(document.getElementById("book-children-count")?.value || 0, 10);
    const payType = document.querySelector('input[name="payment-type"]:checked')?.value || "deposit";

    const basePrice = this.selectedTour.price;
    const childPrice = Math.round(basePrice * 0.85);

    const grossTotal = (adults * basePrice) + (children * childPrice);
    const platformDiscount = PAYMENT_CONFIG.defaultPlatformDiscount || 500000;
    const voucherDiscount = this.appliedVoucherDiscount || 0;

    // Tổng giá trị tour sau khi trừ mặc định 500.000đ qua nền tảng DOANTM và mã Voucher (nếu có)
    const totalPrice = Math.max(0, grossTotal - platformDiscount - voucherDiscount);
    let amountToPay = totalPrice;

    if (payType === "deposit") {
      amountToPay = Math.round(totalPrice * PAYMENT_CONFIG.depositRate);
    } else if (payType === "full") {
      amountToPay = Math.max(0, totalPrice - 200000);
    }

    document.getElementById("calc-adults-total").textContent = `${(adults * basePrice).toLocaleString("vi-VN")} đ`;
    document.getElementById("calc-children-total").textContent = `${(children * childPrice).toLocaleString("vi-VN")} đ`;

    const platformDiscountEl = document.getElementById("calc-platform-discount");
    if (platformDiscountEl) {
      platformDiscountEl.textContent = `-${platformDiscount.toLocaleString("vi-VN")} đ`;
    }

    const voucherBadge = document.getElementById("calc-voucher-badge");
    const voucherCodeLabel = document.getElementById("calc-voucher-code-label");
    const voucherAmountEl = document.getElementById("calc-voucher-amount");
    if (voucherBadge) {
      if (voucherDiscount > 0 && this.appliedVoucherCode) {
        voucherBadge.classList.remove("hidden");
        if (voucherCodeLabel) voucherCodeLabel.textContent = this.appliedVoucherCode;
        if (voucherAmountEl) voucherAmountEl.textContent = `-${voucherDiscount.toLocaleString("vi-VN")} đ`;
      } else {
        voucherBadge.classList.add("hidden");
      }
    }

    document.getElementById("calc-total-amount").textContent = `${totalPrice.toLocaleString("vi-VN")} đ`;
    document.getElementById("calc-pay-amount").textContent = `${amountToPay.toLocaleString("vi-VN")} đ`;

    if (payType === "full") {
      document.getElementById("calc-discount-badge")?.classList.remove("hidden");
    } else {
      document.getElementById("calc-discount-badge")?.classList.add("hidden");
    }
  }

  submitBookingForm(event) {
    event.preventDefault();

    const fullName = document.getElementById("book-fullname").value.trim();
    const phone = document.getElementById("book-phone").value.trim();
    const email = document.getElementById("book-email").value.trim();
    const departureDate = document.getElementById("book-date").value || this.selectedTour.startDate;
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
    const grossTotal = (adults * basePrice) + (children * childPrice);
    const platformDiscount = PAYMENT_CONFIG.defaultPlatformDiscount || 500000;
    const voucherDiscount = this.appliedVoucherDiscount || 0;
    const totalPrice = Math.max(0, grossTotal - platformDiscount - voucherDiscount);

    let amountToPay = (payType === "deposit")
      ? Math.round(totalPrice * PAYMENT_CONFIG.depositRate)
      : Math.max(0, totalPrice - 200000);

    const bookingCode = `GH${Math.floor(100000 + Math.random() * 900000)}`;

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
      note,
      adults,
      children,
      grossTotal,
      platformDiscount,
      voucherCode: this.appliedVoucherCode || null,
      voucherDiscount,
      totalPrice,
      amountToPay,
      payType: (payType === "deposit") ? "Đặt cọc 50%" : "Thanh toán 100%",
      status: "Chờ chuyển khoản"
    };

    this.closeBookingModal();
    this.openPaymentModal(this.currentBooking);
  }

  openPaymentModal(booking) {
    const modal = document.getElementById("modal-payment-qr");
    if (!modal) return;

    document.getElementById("pay-booking-code").textContent = booking.code;
    document.getElementById("pay-booking-title").textContent = booking.tourTitle;
    document.getElementById("pay-customer-name").textContent = booking.fullName;
    document.getElementById("pay-customer-phone").textContent = booking.phone;
    document.getElementById("pay-amount-display").textContent = `${booking.amountToPay.toLocaleString("vi-VN")} đ`;
    document.getElementById("pay-type-badge").textContent = booking.payType;

    document.getElementById("pay-bank-name").textContent = PAYMENT_CONFIG.bankName;
    document.getElementById("pay-account-num").textContent = PAYMENT_CONFIG.accountNumber;
    document.getElementById("pay-account-owner").textContent = PAYMENT_CONFIG.accountName;

    // Định dạng ngày (ngày/tháng/năm) từ thông tin khách đã chọn
    let formattedDate = booking.departureDate || "";
    if (/^\d{4}-\d{2}-\d{2}$/.test(formattedDate)) {
      const [yyyy, mm, dd] = formattedDate.split("-");
      formattedDate = `${dd}/${mm}/${yyyy}`;
    } else if (!formattedDate || formattedDate === "Liên hệ") {
      const now = new Date();
      const dd = String(now.getDate()).padStart(2, "0");
      const mm = String(now.getMonth() + 1).padStart(2, "0");
      const yyyy = now.getFullYear();
      formattedDate = `${dd}/${mm}/${yyyy}`;
    }

    // Nội dung chuyển tiền setup sẵn: (họ tên) chuyển tiền tour (tên tour), SĐT (số điện thoại), ngày (ngày tháng năm)
    const transferMemo = `${booking.fullName} chuyển tiền tour ${booking.tourTitle}, SĐT ${booking.phone}, ngày ${formattedDate}`;
    document.getElementById("pay-transfer-memo").textContent = transferMemo;

    const qrAccountName = PAYMENT_CONFIG.accountNameQr || PAYMENT_CONFIG.accountName;
    const qrUrl = `https://img.vietqr.io/image/${PAYMENT_CONFIG.bankId}-${PAYMENT_CONFIG.accountNumber}-compact2.png?amount=${booking.amountToPay}&addInfo=${encodeURIComponent(transferMemo)}&accountName=${encodeURIComponent(qrAccountName)}`;
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

  confirmPaymentDone() {
    if (!this.currentBooking) return;

    this.currentBooking.status = "Đã chuyển khoản - Chờ duyệt";
    this.currentBooking.confirmedAt = new Date().toLocaleString("vi-VN");

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

  openSuccessModal(booking) {
    const modal = document.getElementById("modal-booking-success");
    if (!modal) return;

    document.getElementById("succ-booking-code").textContent = booking.code;
    document.getElementById("succ-tour-title").textContent = booking.tourTitle;
    document.getElementById("succ-customer-info").textContent = `${booking.fullName} (${booking.phone})`;
    document.getElementById("succ-amount").textContent = `${booking.amountToPay.toLocaleString("vi-VN")} đ`;
    document.getElementById("succ-departure-date").textContent = booking.departureDate || "Theo lịch khởi hành";

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
          <span class="font-mono font-bold text-[#29aab4] text-sm">#${item.code}</span>
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            ${item.status}
          </span>
        </div>
        <h5 class="font-bold text-slate-900">${item.tourTitle}</h5>
        <div class="flex justify-between text-slate-600">
          <span>Khách: ${item.fullName} (${item.phone})</span>
          <span>Số tiền: <strong class="text-[#e30925]">${item.amountToPay.toLocaleString("vi-VN")} đ</strong></span>
        </div>
        <div class="text-[11px] text-slate-400">Khởi tạo: ${item.createdAt}</div>
      </div>
    `).join("");

    if (window.lucide) lucide.createIcons();
  }

  copyText(elementId, toastMessage = "Đã sao chép vào bộ nhớ tạm!") {
    const el = document.getElementById(elementId);
    if (!el) return;
    const text = el.textContent.trim();
    navigator.clipboard.writeText(text).then(() => {
      this.showToast(toastMessage, "success");
    }).catch(() => {
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
    document.querySelectorAll(".tour-filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
        this.filterTours(filter);
      });
    });

    const searchInput = document.getElementById("search-tour-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchTours(e.target.value);
      });
    }

    ["filter-destination-select", "filter-duration-select", "filter-month-select"].forEach(selId => {
      const el = document.getElementById(selId);
      if (el) {
        el.addEventListener("change", () => this.applyAdvancedFilters());
      }
    });

    const adultInput = document.getElementById("book-adults-count");
    const childInput = document.getElementById("book-children-count");
    if (adultInput) adultInput.addEventListener("change", () => this.updateBookingPriceCalculation());
    if (childInput) childInput.addEventListener("change", () => this.updateBookingPriceCalculation());

    document.querySelectorAll('input[name="payment-type"]').forEach(radio => {
      radio.addEventListener("change", () => this.updateBookingPriceCalculation());
    });

    const bookingForm = document.getElementById("booking-form");
    if (bookingForm) {
      bookingForm.addEventListener("submit", (e) => this.submitBookingForm(e));
    }
  }

  setupTabs() {
    document.querySelectorAll(".detail-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-tab");

        document.querySelectorAll(".detail-tab-btn").forEach(b => {
          b.classList.remove("text-[#29aab4]", "border-[#31c0cc]");
          b.classList.add("text-slate-500", "border-transparent");
        });
        btn.classList.add("text-[#29aab4]", "border-[#31c0cc]");
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

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }
  window.toursAppInstance = new ToursApp();
});
