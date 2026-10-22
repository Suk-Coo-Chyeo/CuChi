import { Article, LocationPoint, MediaItem, TeamMember, VerificationSource } from '../types';

export const OFFICIAL_SOURCES: VerificationSource[] = [
  {
    id: 'src-1',
    name: 'Cổng thông tin điện tử UBND Huyện Củ Chi',
    organization: 'Ủy ban Nhân dân Huyện Củ Chi, TP. Hồ Chí Minh',
    url: 'https://cuchi.hochiminhcity.gov.vn',
    publishDate: '2026-01-15',
    verifiedDate: '2026-10-18',
    supportedFacts: [
      'Thông tin đơn vị hành chính, địa giới, dân số và cơ cấu kinh tế địa phương',
      'Định hướng phát triển du lịch sinh thái nông nghiệp và làng nghề truyền thống'
    ]
  },
  {
    id: 'src-2',
    name: 'Khu Di tích Lịch sử Địa đạo Củ Chi',
    organization: 'Ban Quản lý Di tích Lịch sử Địa đạo Củ Chi',
    url: 'http://diadaocuchi.com.vn',
    publishDate: '2023-12-10',
    verifiedDate: '2026-10-19',
    supportedFacts: [
      'Tổng chiều dài hệ thống địa đạo hơn 250km được đào trong kháng chiến chống Mỹ và chống Pháp',
      'Cấu trúc 3 tầng địa đạo chịu được bom pháo và hệ thống bếp Hoàng Cầm không khói',
      'Khu Đền Tưởng niệm Liệt sĩ Bến Dược khắc tên 44.752 liệt sĩ hy sinh vì Tổ quốc'
    ]
  },
  {
    id: 'src-3',
    name: 'Sở Du lịch Thành phố Hồ Chí Minh',
    organization: 'Trung tâm Xúc tiến Du lịch TP.HCM (Visit HCMC)',
    url: 'https://visithcmc.vn',
    publishDate: '2026-03-20',
    verifiedDate: '2026-10-19',
    supportedFacts: [
      'Hành trình du lịch đường sông Sài Gòn đi Củ Chi',
      'Làng nghề Bánh tráng Phú Hòa Đông và đan lát mây tre Thái Mỹ',
      'Đặc sản ẩm thực Bò tơ Củ Chi và củ mì luộc chấm muối mè'
    ]
  },
  {
    id: 'src-4',
    name: 'Cục Di sản Văn hóa Việt Nam',
    organization: 'Bộ Văn hóa, Thể thao và Du lịch',
    url: 'http://dsvh.gov.vn',
    publishDate: '2015-12-23',
    verifiedDate: '2026-10-15',
    supportedFacts: [
      'Địa đạo Củ Chi được xếp hạng Di tích Quốc gia Đặc biệt theo Quyết định số 2367/QĐ-TTg ngày 23/12/2015'
    ]
  }
];

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'dia-dao-cu-chi-huyen-thoai-dat-thep',
    title: 'ĐỊA ĐẠO CỦ CHI — HUYỀN THOẠI TRONG LÒNG ĐẤT THÉP',
    subtitle: 'Kỳ quan quân sự dài hơn 250km biểu tượng cho ý chí kiên cường của quân dân Củ Chi',
    category: 'history',
    categoryName: 'Lịch sử & Truyền thống',
    summary: 'Hệ thống địa đạo Củ Chi là một công trình quân sự kỳ vĩ độc nhất vô nhị, dài hơn 250km xuyên lòng đất với 3 tầng ngầm liên hoàn, phòng họp, bệnh xá và bếp Hoàng Cầm.',
    content: [
      'Địa đạo Củ Chi được hình thành từ thời kỳ kháng chiến chống thực dân Pháp (khoảng năm 1946–1948) tại xã Tân Phú Trung và Phước Vĩnh An, ban đầu chỉ là những hầm trú ẩn đơn lẻ của từng tổ du kích.',
      'Đến thời kỳ kháng chiến chống Mỹ cứu nước, từ năm 1961 đến 1965, trước sự tàn phá dữ dội của bom pháo và chất độc hóa học, quân và dân Củ Chi đã biến các đoạn hầm riêng lẻ thành một "thành phố ngầm" liên hoàn khắp các xã phía bắc huyện, nổi bật là cụm Bến Dược (xã Phú Mỹ Hưng) và cụm Bến Đình (xã Nhuận Đức).',
      'Địa đạo gồm 3 tầng sâu khác nhau: Tầng 1 cách mặt đất 3m chịu được đạn pháo và xe tăng, tầng 2 sâu khoảng 6m chịu được bom cỡ nhỏ, và tầng 3 sâu từ 8 đến 12m tuyệt đối an toàn. Lòng địa đạo chỉ vừa một người cúi khom chui lọt, có các lỗ thông hơi ngụy trang tài tình như những tổ mối hoặc gốc cây rừng.',
      'Tại đây, các chiến sĩ đã sáng chế và áp dụng sáng tạo bếp Hoàng Cầm — loại bếp nấu ban ngày khói được dẫn qua nhiều đường rãnh và lọc qua đất xốp, tỏa ra như sương mù sát mặt đất, máy bay trinh sát đối phương không thể phát hiện.',
      'Với những chiến công hiển hách và sức chịu đựng phi thường, ngày 17/9/1967, tại Đại hội Anh hùng và Chiến sĩ thi đua toàn miền Nam, Ủy ban Trung ương Mặt trận Dân tộc Giải phóng miền Nam Việt Nam đã trao tặng Củ Chi danh hiệu vẻ vang: "ĐẤT THÉP THÀNH ĐỒNG".'
    ],
    coverImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Cửa ngầm địa đạo được ngụy trang bằng nắp gỗ phủ lá khô giữa rừng chồi Củ Chi',
    imageCredit: 'Tư liệu Khu Di tích Lịch sử Địa đạo Củ Chi',
    author: 'Trần Đức Lương (Lớp 12A5)',
    locationId: 'loc-1',
    sources: [OFFICIAL_SOURCES[1], OFFICIAL_SOURCES[3]],
    tags: ['Địa đạo', 'Đất thép thành đồng', 'Bến Dược', 'Bến Đình', 'Di tích Quốc gia đặc biệt'],
    status: 'verified',
    updatedAt: '2026-10-18',
    featured: true,
    highlights: [
      'Tổng chiều dài công trình: hơn 250km qua nhiều xã',
      'Độ sâu 3 tầng liên hoàn: từ 3m đến 12m',
      'Danh hiệu vinh danh: Đất Thép Thành Đồng (17/9/1967)',
      'Xếp hạng: Di tích Quốc gia Đặc biệt (2015)'
    ]
  },
  {
    id: 'art-2',
    slug: 'den-tuong-niem-liet-si-ben-duoc',
    title: 'ĐỀN BẾN DƯỢC — KHẮC GHI 44.752 ANH HÙNG LIỆT SĨ',
    subtitle: 'Nơi hội tụ linh khí thiêng liêng bên dòng sông Sài Gòn lịch sử',
    category: 'history',
    categoryName: 'Lịch sử & Truyền thống',
    summary: 'Đền Tưởng niệm Liệt sĩ Bến Dược là công trình văn hóa - tâm linh quy mô lớn tọa lạc bên bờ sông Sài Gòn, nơi khắc tên 44.752 người con ưu tú đã ngã xuống trên chiến trường Sài Gòn - Chợ Lớn - Gia Định.',
    content: [
      'Đền Bến Dược được khởi công xây dựng vào ngày 19/5/1993 nhân kỷ niệm ngày sinh Chủ tịch Hồ Chí Minh và khánh thành giai đoạn 1 vào ngày 19/12/1995. Ngôi đền uy nghiêm hướng ra bờ sông Sài Gòn lộng gió thuộc xã Phú Mỹ Hưng.',
      'Kiến trúc đền mang đậm phong cách truyền thống Nam Bộ với tam quan lợp ngói đỏ, cổng vào đề dòng đại tự "Đền Tưởng Niệm Liệt Sĩ Bến Dược", tiếp đến là nhà văn bia khắc bài văn bia bất hủ do cố giáo sư, Anh hùng Lao động Trần Văn Giàu soạn thảo.',
      'Bên trong chính điện, tượng Bác Hồ được đúc bằng đồng đặt trang trọng tại vị trí trung tâm. Bao quanh gian thờ là bức tường hoa cương lớn khắc họ tên, quê quán, năm sinh và năm hy sinh của 44.752 liệt sĩ.',
      'Đền Bến Dược không chỉ là nơi tri ân những người con đã hiến dâng tuổi thanh xuân cho độc lập dân tộc, mà còn là địa chỉ đỏ giáo dục truyền thống yêu nước sâu sắc cho thế hệ trẻ học sinh, sinh viên cả nước.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Khuôn viên thanh tịnh và cổng tam quan Đền Tưởng niệm Liệt sĩ Bến Dược',
    imageCredit: 'Ban Quản lý Di tích Địa đạo Củ Chi',
    author: 'Trần Đức Lương & Phan Khánh Linh (Lớp 12A5)',
    locationId: 'loc-2',
    sources: [OFFICIAL_SOURCES[1]],
    tags: ['Đền Bến Dược', 'Tri ân liệt sĩ', 'Giáo sư Trần Văn Giàu', 'Sông Sài Gòn'],
    status: 'verified',
    updatedAt: '2026-10-18',
    featured: true,
    highlights: [
      'Khởi công: 19/5/1993, khánh thành: 19/12/1995',
      'Số lượng liệt sĩ được khắc tên: 44.752 liệt sĩ',
      'Tác giả bài văn bia: Cố Giáo sư Trần Văn Giàu'
    ]
  },
  {
    id: 'art-3',
    slug: 'lang-banh-trang-phu-hoa-dong',
    title: 'LÀNG NGHỀ BÁNH TRÁNG PHÚ HÒA ĐÔNG — HƯƠNG GẠO TRĂM NĂM',
    subtitle: 'Nét tinh hoa ẩm thực đất Củ Chi bay xa khắp năm châu bốn biển',
    category: 'culture',
    categoryName: 'Văn hóa & Đời sống',
    summary: 'Trải qua hơn một thế kỷ thăng trầm, làng nghề bánh tráng Phú Hòa Đông vẫn giữ vững lửa nghề, biến hạt gạo quê hương thành những mẻ bánh tráng mỏng dẻo, thơm lừng.',
    content: [
      'Nằm bên dòng kênh râm mát của xã Phú Hòa Đông, nghề tráng bánh đã xuất hiện từ cuối thế kỷ 19. Thuở xưa, mỗi gia đình đều có chiếc lò đất nung, nồi hơi tráng bằng vải căng và những phiên giên đan bằng tre phơi bánh dọc theo bờ rào.',
      'Bánh tráng Phú Hòa Đông nổi tiếng bởi độ dẻo dai tự nhiên, không bị chua, khi nhúng nước cuốn thịt luộc rau rừng không rách, khi nướng lại giòn rụm và thơm nồng mùi gạo mới.',
      'Bí quyết nằm ở khâu chọn gạo nàng thơm hoặc gạo sóc trắng ngâm đúng độ, xay mịn bằng cối đá, nêm một chút muối tinh và kỹ thuật tráng bánh đều tay của các nghệ nhân lão thành.',
      'Ngày nay, bên cạnh phương pháp tráng thủ công truyền thống phục vụ khách du lịch trải nghiệm, nhiều hộ sản xuất đã đầu tư máy tráng tự động và lò sấy nhiệt kín, xuất khẩu bánh tráng sang hơn 30 quốc gia như Mỹ, Nhật Bản, Hàn Quốc và châu Âu.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Nghệ nhân tráng từng lớp bánh mỏng đều tay trên nồi hơi truyền thống tại Phú Hòa Đông',
    imageCredit: 'Tạp chí Du lịch TP.HCM',
    author: 'Trần Hà Phụng Nhi (Lớp 12A5)',
    locationId: 'loc-4',
    sources: [OFFICIAL_SOURCES[0], OFFICIAL_SOURCES[2]],
    tags: ['Bánh tráng', 'Phú Hòa Đông', 'Làng nghề truyền thống', 'Ẩm thực Việt'],
    status: 'verified',
    updatedAt: '2026-10-17',
    featured: true,
    highlights: [
      'Lịch sử hình thành: hơn 100 năm',
      'Đặc trưng: dẻo dai tự nhiên, thơm mùi gạo mới, cuốn không rách',
      'Thị trường tiêu thụ: nội địa và xuất khẩu trên 30 quốc gia'
    ]
  },
  {
    id: 'art-4',
    slug: 'dac-san-am-thuc-bo-to-cu-chi',
    title: 'BÒ TƠ CỦ CHI — VỊ NGỌT TINH TÚY ĐỒNG QUÊ',
    subtitle: 'Món ngon nức tiếng chinh phục thực khách bốn phương với lớp da giòn sần sật và thớ thịt mềm ngọt',
    category: 'cuisine',
    categoryName: 'Ẩm thực & Đặc sản',
    summary: 'Bò tơ Củ Chi từ lâu đã trở thành một thương hiệu ẩm thực trứ danh. Thịt bò tơ non mềm, da mỏng giòn nướng vàng rộm cuốn bánh tráng rau rừng chấm mắm nêm đậm đà.',
    content: [
      'Nhắc đến ẩm thực Củ Chi, không thể không nhắc đến bò tơ. Bò được chọn làm thịt là loại bê non thả đồng khoảng 5 đến 6 tháng tuổi, trọng lượng từ 50 đến 60kg, khi đó thịt có màu trắng hồng, thớ mịn, mềm ngọt và thơm mùi sữa mẹ.',
      'Điểm đặc trưng nhất của bò tơ Củ Chi là phần da mỏng tanh và lớp mỡ mỏng không gây ngấy. Khi nướng mọi than hồng hoặc quay nguyên con, lớp da phồng giòn rụm trong khi bên trong thịt vẫn giữ được nước ngọt mọng.',
      'Món ăn được ưa chuộng bậc nhất là Bò tơ luộc cuộn rau rừng: từng lát thịt luộc vừa chín tới cuộn cùng bánh tráng Phú Hòa Đông, đọt cóc, lá lụa, quế vị, sao nhái, chấm vào chén mắm nêm cá cơm nguyên chất giã ớt sả thơm nức.',
      'Ngoài ra, các quán bò tơ gia truyền dọc Quốc lộ 22 còn phục vụ bò tơ nướng y, bò nhúng giấm, lẩu đuôi bò và cháo lòng bò nóng hổi sưởi ấm những buổi chiều ngoại ô.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Bò tơ nướng than hồng thơm phức cuốn cùng rau rừng và bánh tráng Củ Chi',
    imageCredit: 'Sở Du lịch TP.HCM',
    author: 'Trần Hà Phụng Nhi & Nguyễn Thị Quỳnh Như (Lớp 12A5)',
    locationId: 'loc-8',
    sources: [OFFICIAL_SOURCES[2]],
    tags: ['Bò tơ', 'Món ngon Củ Chi', 'Bò tơ Xuân Đào', 'Rau rừng', 'Mắm nêm'],
    status: 'verified',
    updatedAt: '2026-10-18',
    featured: true,
    highlights: [
      'Độ tuổi bò đạt chuẩn: 5 - 6 tháng tuổi',
      'Đặc sản đi kèm: Rau rừng sông Sài Gòn, mắm nêm chua ngọt',
      'Món ăn tiêu biểu: Bò luộc cuốn bánh tráng, bò tơ nướng y'
    ]
  },
  {
    id: 'art-5',
    slug: 'cu-mi-hap-nuoc-cot-dua-mon-an-khang-chien',
    title: 'CỦ MÌ NƯỚC CỐT DỪA — TỪ MÓN ĂN KHÁNG CHIẾN ĐẾN ĐẶC SẢN NỨC TIẾNG',
    subtitle: 'Món ăn thắm đượm tình đồng chí dưới hầm sâu nay là kỷ niệm ngọt ngào khó quên của du khách',
    category: 'cuisine',
    categoryName: 'Ẩm thực & Đặc sản',
    summary: 'Trong những năm tháng gian khổ chống giặc, củ khoai mì là lương thực chính nuôi sống chiến sĩ. Ngày nay, củ mì hấp nước cốt dừa chấm muối mè là món quà không thể thiếu của Củ Chi.',
    content: [
      'Trong thời kỳ chiến tranh ác liệt, khi các nguồn tiếp tế lương thực bị cắt đứt, những luống khoai mì trên vùng đất đỏ cằn cỗi đã trở thành nguồn lương thảo chủ lực cho lực lượng cách mạng Củ Chi.',
      'Củ mì được chế biến thành nhiều món: mì luộc chấm muối ớt, mì nướng tro, mì bào sợi hấp lá dứa, hoặc phơi khô xay thành bột làm bánh.',
      'Ngày nay, khi đến thăm địa đạo Bến Dược hay Bến Đình, du khách sau khi trải nghiệm chui hầm sẽ được thưởng thức một đĩa củ mì nóng hổi, bốc khói nghi ngút, rưới nước cốt dừa béo ngậy và rắc vừng muối mè rang thơm.',
      'Vị bùi bùi, dẻo ngọt của tinh bột khoai mì hòa cùng vị béo ngậy của nước dừa xiêm và mặn ngọt của muối mè tạo nên một dư vị mộc mạc mà thấm đẫm ân tình lịch sử.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Củ mì dẻo bùi hấp nóng hổi chấm muối mè vừng thơm nức mũi',
    imageCredit: 'Khu Di tích Địa đạo Củ Chi',
    author: 'Nguyễn Thị Quỳnh Như (Lớp 12A5)',
    sources: [OFFICIAL_SOURCES[1], OFFICIAL_SOURCES[2]],
    tags: ['Khoai mì', 'Ẩm thực kháng chiến', 'Muối mè', 'Nước cốt dừa'],
    status: 'verified',
    updatedAt: '2026-10-16',
    featured: false,
    highlights: [
      'Ý nghĩa: Lương thực cứu đói cách mạng thời chiến tranh',
      'Cách chế biến: Hấp cùng nước cốt dừa tươi và lá dứa thơm',
      'Gia vị kèm theo: Muối mè vừng rang vàng'
    ]
  },
  {
    id: 'art-6',
    slug: 'nong-trang-xanh-green-noen-va-du-lich-sinh-thai',
    title: 'NÔNG TRANG XANH GREEN NOEN — MẢNH XANH NÔNG NGHIỆP CỦ CHI',
    subtitle: 'Điểm hẹn sinh thái ngập tràn sắc hoa, nấm ăn công nghệ cao và trang trại dê cừu thân thiện',
    category: 'nature',
    categoryName: 'Thiên nhiên & Cảnh quan',
    summary: 'Nằm tại ấp Bến Đinh, xã An Nhơn Tây, Nông trang Xanh Green Noen là mô hình trang trại nông nghiệp công nghệ cao kết hợp du lịch trải nghiệm sinh thái trong lành bậc nhất Củ Chi.',
    content: [
      'Với quy mô hơn 20 hecta, Nông trang Xanh Green Noen được xây dựng theo mô hình trang trại Nhật Bản và Hàn Quốc, tách biệt hoàn toàn khỏi sự ồn ào của nhịp sống đô thị.',
      'Khu nông trang nổi bật với khu nuôi trồng hơn 30 loại nấm ăn và nấm dược liệu như nấm linh chi, nấm bào ngư, nấm mối đen trong nhà lạnh kiểm soát nhiệt độ nghiêm ngặt.',
      'Ngoài ra, du khách còn được tự tay thu hoạch dưa lưới Nhật Bản ngọt lịm, hái rau hữu cơ thủy canh, vắt sữa bò tươi và cho đàn cừu, dê, hươu sao ăn cỏ trên thảo nguyên xanh mướt.',
      'Đây là không gian lý tưởng cho các buổi học tập ngoại khóa của học sinh, giúp các bạn trẻ tìm hiểu quy trình sản xuất nông nghiệp sạch và hòa mình vào thiên nhiên khoáng đạt.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Thảo nguyên xanh mướt và đàn cừu thân thiện tại Green Noen Củ Chi',
    imageCredit: 'Trung tâm Du lịch Sinh thái Củ Chi',
    author: 'Nguyễn Tường Lam (Lớp 12A5)',
    locationId: 'loc-6',
    sources: [OFFICIAL_SOURCES[0], OFFICIAL_SOURCES[2]],
    tags: ['Nông nghiệp xanh', 'Green Noen', 'An Nhơn Tây', 'Trải nghiệm sinh thái'],
    status: 'verified',
    updatedAt: '2026-10-15',
    featured: false,
    highlights: [
      'Diện tích: hơn 20 hecta nông nghiệp công nghệ cao',
      'Đặc điểm: Trồng nấm sạch, vườn dưa lưới và nông trại gia súc thân thiện',
      'Phù hợp: Du lịch trải nghiệm sinh thái, dã ngoại cuối tuần'
    ]
  },
  {
    id: 'art-7',
    slug: 'vuon-trai-cay-trung-an-ven-song-sai-gon',
    title: 'VƯỜN TRÁI CÂY TRUNG AN — PHÙ SA NẶNG HẠT, TRÁI NGỌT ĐẦU CÀNH',
    subtitle: 'Thưởng ngoạn miệt vườn ven sông với chôm chôm, măng cụt và sầu riêng sum suê trái ngọt',
    category: 'nature',
    categoryName: 'Thiên nhiên & Cảnh quan',
    summary: 'Được bồi đắp bởi nguồn phù sa màu mỡ từ con sông Sài Gòn, xã Trung An sở hữu những miệt vườn cây trái trĩu quả quanh năm, là điểm dã ngoại xanh mát của Củ Chi.',
    content: [
      'Chỉ cách trung tâm TP.HCM khoảng 40km, xã Trung An được mệnh danh là "vương quốc cây trái" vùng đất thép. Nhờ hệ thống kênh rạch chằng chịt dẫn nước phù sa từ sông Sài Gòn, đất đai nơi đây luôn trù phú, tươi tốt.',
      'Mỗi độ từ tháng 5 đến tháng 8 âm lịch hàng năm, Trung An vào mùa trái chín rộ nhất. Những vườn chôm chôm chín đỏ rực cả một góc trời, xen lẫn những chùm măng cụt tím thẫm mọng nước, mít tố nữ thơm lừng và dâu da ngọt thanh.',
      'Khách tham quan có thể mua vé vào vườn tự tay bẻ trái chín ăn ngay tại gốc, mắc võng nằm dưới bóng râm mát rượi nghe gió sông thổi vào và thưởng thức món gà thả vườn nấu cháo môn lươn đồng đặc sắc.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Chùm chôm chôm chín mọng ngọt lịm trong vườn sinh thái Trung An Củ Chi',
    imageCredit: 'Hội Nông dân Xã Trung An, Củ Chi',
    author: 'Phan Khánh Linh (Lớp 12A5)',
    locationId: 'loc-7',
    sources: [OFFICIAL_SOURCES[0], OFFICIAL_SOURCES[2]],
    tags: ['Vườn trái cây', 'Trung An', 'Sông Sài Gòn', 'Miệt vườn Nam Bộ'],
    status: 'verified',
    updatedAt: '2026-10-14',
    featured: false,
    highlights: [
      'Thời điểm lý tưởng: Tháng 5 – Tháng 8 (mùa trái cây chín rộ)',
      'Loại quả chủ lực: Măng cụt, chôm chôm, dâu da, mít nghệ',
      'Trải nghiệm: Hái trái tại vườn, thưởng thức ẩm thực đồng quê'
    ]
  },
  {
    id: 'art-8',
    slug: 'lang-nghe-dan-lat-may-tre-thai-my',
    title: 'LÀNG NGHỀ ĐAN LÁT THÁI MỸ — TÀI HOA BÀN TAY NGHỆ NHÂN',
    subtitle: 'Nghề thủ công mỹ nghệ mộc mạc gìn giữ cốt cách thôn dã Nam Bộ',
    category: 'culture',
    categoryName: 'Văn hóa & Đời sống',
    summary: 'Xã Thái Mỹ nằm ở vùng giáp ranh tỉnh Tây Ninh, nổi tiếng với nghề đan lát mây tre lá truyền thống. Từ những nan tre mộc mạc, bàn tay nghệ nhân tạo nên những sản phẩm gia dụng và mỹ nghệ tinh xảo.',
    content: [
      'Nghề đan lát ở Thái Mỹ đã có từ thế kỷ 19, gắn liền với cuộc sống mưu sinh của nhiều thế hệ nông dân. Từ cọng tre, cọng trúc, sợi mây lấy từ rừng gò, người thợ Thái Mỹ đã khéo léo chuốt vót, phơi nắng rồi đan thành thúng, mủng, xảo, bồ, rế, giỏ xách.',
      'Trong thời kỳ kháng chiến, người thợ đan lát Thái Mỹ còn bí mật đan những chiếc giỏ ngụy trang, phên tre gia cố vách hầm địa đạo giúp bộ đội ẩn nấp an toàn.',
      'Ngày nay, sản phẩm đan lát Thái Mỹ không chỉ phục vụ đời sống nông nghiệp mà đã vươn lên thành hàng thủ công mỹ nghệ trang trí nội thất cao cấp và đồ lưu niệm cho du khách quốc tế.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Sản phẩm mây tre đan lát thủ công tinh tế mộc mạc tại xã Thái Mỹ',
    imageCredit: 'UBND Xã Thái Mỹ, Củ Chi',
    author: 'Nguyễn Tường Lam (Lớp 12A5)',
    locationId: 'loc-5',
    sources: [OFFICIAL_SOURCES[0]],
    tags: ['Đan lát', 'Thái Mỹ', 'Mây tre đan', 'Thủ công mỹ nghệ'],
    status: 'verified',
    updatedAt: '2026-10-12',
    featured: false,
    highlights: [
      'Nguyên liệu chính: Tre gai, trúc, mây rừng tự nhiên',
      'Sản phẩm tiêu biểu: Thúng, bồ, xảo mây tre, đèn thủ công mỹ nghệ',
      'Ý nghĩa: Lưu giữ bản sắc văn hóa làng quê Nam Bộ'
    ]
  }
];

export const INITIAL_LOCATIONS: LocationPoint[] = [
  {
    id: 'loc-1',
    name: 'Địa đạo Bến Dược Củ Chi',
    category: 'history',
    categoryName: 'Lịch sử & Di tích',
    shortDescription: 'Căn cứ Khu ủy và Bộ Tư lệnh Quân khu Sài Gòn - Gia Định với đường hầm nguyên bản.',
    fullDescription: 'Địa đạo Bến Dược là khu căn cứ đầu não được phục dựng và bảo tồn nguyên trạng. Nơi đây tái hiện chân thực đời sống sinh hoạt, cứu chữa thương binh và hội họp dưới lòng đất kiên cố.',
    lat: 11.1444,
    lng: 106.4631,
    address: 'Ấp Phú Hiệp, Xã Phú Mỹ Hưng, Huyện Củ Chi, TP. Hồ Chí Minh',
    coverImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
    openingHours: '07:00 – 17:00 hằng ngày',
    ticketPrice: '35.000 VNĐ (Khách Việt Nam) / 125.000 VNĐ (Khách quốc tế)',
    sources: [OFFICIAL_SOURCES[1], OFFICIAL_SOURCES[3]],
    verifiedDate: '2026-10-18',
    status: 'verified',
    articleSlug: 'dia-dao-cu-chi-huyen-thoai-dat-thep'
  },
  {
    id: 'loc-2',
    name: 'Đền Tưởng niệm Liệt sĩ Bến Dược',
    category: 'history',
    categoryName: 'Lịch sử & Di tích',
    shortDescription: 'Đền thiêng khắc tên 44.752 liệt sĩ hy sinh trên chiến trường Sài Gòn - Chợ Lớn - Gia Định.',
    fullDescription: 'Công trình kiến trúc tưởng niệm tôn nghiêm với cổng tam quan, nhà bia khắc văn bia của cố Giáo sư Trần Văn Giàu và tháp 9 tầng cao 39m vút lên trời xanh.',
    lat: 11.1462,
    lng: 106.4645,
    address: 'Bên bờ sông Sài Gòn, Xã Phú Mỹ Hưng, Huyện Củ Chi, TP. Hồ Chí Minh',
    coverImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    openingHours: '07:30 – 17:00 hằng ngày',
    ticketPrice: 'Miễn phí vào viếng đền',
    sources: [OFFICIAL_SOURCES[1]],
    verifiedDate: '2026-10-18',
    status: 'verified',
    articleSlug: 'den-tuong-niem-liet-si-ben-duoc'
  },
  {
    id: 'loc-3',
    name: 'Địa đạo Bến Đình Củ Chi',
    category: 'history',
    categoryName: 'Lịch sử & Di tích',
    shortDescription: 'Căn cứ Huyện ủy Củ Chi nằm bên sông Sài Gòn, gần trung tâm thành phố hơn.',
    fullDescription: 'Nằm tại xã Nhuận Đức, Bến Đình là căn cứ của Huyện ủy Củ Chi trong những năm tháng chống càn quét khốc liệt. Nơi đây có trường bắn thể thao quốc phòng và hệ thống bẫy hầm phong phú.',
    lat: 11.0561,
    lng: 106.5273,
    address: 'Xã Nhuận Đức, Huyện Củ Chi, TP. Hồ Chí Minh (Cách Bến Dược khoảng 13km)',
    coverImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    openingHours: '07:30 – 17:00 hằng ngày',
    ticketPrice: '35.000 VNĐ / vé tham quan',
    sources: [OFFICIAL_SOURCES[1]],
    verifiedDate: '2026-10-18',
    status: 'verified',
    articleSlug: 'dia-dao-cu-chi-huyen-thoai-dat-thep'
  },
  {
    id: 'loc-4',
    name: 'Làng nghề Bánh tráng Phú Hòa Đông',
    category: 'culture',
    categoryName: 'Văn hóa & Làng nghề',
    shortDescription: 'Làng nghề bánh tráng thủ công trăm năm nổi tiếng dẻo thơm khắp cả nước.',
    fullDescription: 'Tập trung hàng trăm hộ gia đình làm nghề tráng bánh truyền thống kết hợp công nghệ hiện đại. Du khách có thể tận mắt xem và thử tự tay tráng bánh.',
    lat: 11.0542,
    lng: 106.5925,
    address: 'Tỉnh lộ 15, Xã Phú Hòa Đông, Huyện Củ Chi, TP. Hồ Chí Minh',
    coverImage: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    openingHours: '06:00 – 18:00 hằng ngày',
    ticketPrice: 'Miễn phí tham quan lò bánh',
    sources: [OFFICIAL_SOURCES[0], OFFICIAL_SOURCES[2]],
    verifiedDate: '2026-10-17',
    status: 'verified',
    articleSlug: 'lang-banh-trang-phu-hoa-dong'
  },
  {
    id: 'loc-5',
    name: 'Làng nghề Mây tre đan Thái Mỹ',
    category: 'culture',
    categoryName: 'Văn hóa & Làng nghề',
    shortDescription: 'Làng nghề đan lát thủ công mỹ nghệ mộc mạc giàu truyền thống.',
    fullDescription: 'Nơi sản xuất các vật dụng tre nứa tinh xảo từ bàn tay khéo léo của các nghệ nhân cao niên xã Thái Mỹ.',
    lat: 10.9835,
    lng: 106.4217,
    address: 'Xã Thái Mỹ, Huyện Củ Chi, TP. Hồ Chí Minh',
    coverImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    openingHours: '08:00 – 17:00 hằng ngày',
    ticketPrice: 'Miễn phí tham quan',
    sources: [OFFICIAL_SOURCES[0]],
    verifiedDate: '2026-10-17',
    status: 'verified',
    articleSlug: 'lang-nghe-dan-lat-may-tre-thai-my'
  },
  {
    id: 'loc-6',
    name: 'Nông trang Xanh Green Noen',
    category: 'nature',
    categoryName: 'Thiên nhiên & Sinh thái',
    shortDescription: 'Trang trại nông nghiệp hữu cơ công nghệ cao kết hợp dã ngoại sinh thái.',
    fullDescription: 'Trải rộng hơn 20 hecta với khu nuôi trồng nấm ăn, vườn dưa lưới mát lành, đồi cừu xinh xắn và các hoạt động trải nghiệm làm nông dân thực thụ.',
    lat: 11.1092,
    lng: 106.5188,
    address: 'Ấp Bến Đinh, Xã An Nhơn Tây, Huyện Củ Chi, TP. Hồ Chí Minh',
    coverImage: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80',
    openingHours: '08:00 – 17:30',
    ticketPrice: '50.000 VNĐ / Người lớn',
    sources: [OFFICIAL_SOURCES[0], OFFICIAL_SOURCES[2]],
    verifiedDate: '2026-10-18',
    status: 'verified',
    articleSlug: 'nong-trang-xanh-green-noen-va-du-lich-sinh-thai'
  },
  {
    id: 'loc-7',
    name: 'Vườn cây ăn trái Trung An',
    category: 'nature',
    categoryName: 'Thiên nhiên & Sinh thái',
    shortDescription: 'Vựa trái cây miệt vườn ven sông Sài Gòn với chôm chôm, măng cụt trĩu cành.',
    fullDescription: 'Khu vực tập trung nhiều nhà vườn sinh thái thoáng mát đón gió sông, nơi du khách vừa thưởng thức trái chín vừa đắm chìm trong không gian thanh bình.',
    lat: 11.0664,
    lng: 106.6358,
    address: 'Đường Sông Lu, Xã Trung An, Huyện Củ Chi, TP. Hồ Chí Minh',
    coverImage: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80',
    openingHours: '07:00 – 18:00',
    ticketPrice: '30.000 – 50.000 VNĐ (tùy mùa vụ và nhà vườn)',
    sources: [OFFICIAL_SOURCES[0], OFFICIAL_SOURCES[2]],
    verifiedDate: '2026-10-18',
    status: 'verified',
    articleSlug: 'vuon-trai-cay-trung-an-ven-song-sai-gon'
  },
  {
    id: 'loc-8',
    name: 'Quán Bò Tơ Xuân Đào Củ Chi',
    category: 'cuisine',
    categoryName: 'Ẩm thực & Đặc sản',
    shortDescription: 'Địa chỉ ẩm thực bò tơ Củ Chi gia truyền nổi danh dọc tuyến Quốc lộ 22.',
    fullDescription: 'Nơi phục vụ các món bò tơ luộc cuốn rau rừng, bò nướng y than hoa, lẩu bò tơ thơm lừng với chất lượng thịt bò mềm ngọt chuẩn vị truyền thống.',
    lat: 10.9702,
    lng: 106.5054,
    address: 'Khu phố 2, Quốc lộ 22, Thị trấn Củ Chi, Huyện Củ Chi, TP. Hồ Chí Minh',
    coverImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    openingHours: '08:30 – 21:00 hằng ngày',
    ticketPrice: '150.000 – 300.000 VNĐ / người',
    sources: [OFFICIAL_SOURCES[2]],
    verifiedDate: '2026-10-18',
    status: 'verified',
    articleSlug: 'dac-san-am-thuc-bo-to-cu-chi'
  },
  {
    id: 'loc-9',
    name: 'Khu du lịch Một Thoáng Việt Nam',
    category: 'places',
    categoryName: 'Địa điểm tham quan',
    shortDescription: 'Không gian văn hóa tái hiện kiến trúc và làng nghề 3 miền đất nước.',
    fullDescription: 'Quần thể văn hóa rộng 22,5 hecta bên sông Bến Đình tái hiện nhà rường Huế, nhà sàn Tây Nguyên, nhà ba gian Bắc Bộ và các làng nghề dệt lụa, gốm sứ cổ truyền.',
    lat: 11.1345,
    lng: 106.5028,
    address: 'Ấp Ngã Tư, Xã An Nhơn Tây, Huyện Củ Chi, TP. Hồ Chí Minh',
    coverImage: 'https://images.unsplash.com/photo-1508672019048-805b876b67e2?auto=format&fit=crop&w=800&q=80',
    openingHours: '08:00 – 17:00 cuối tuần & ngày lễ',
    ticketPrice: '100.000 VNĐ / vé tham quan',
    sources: [OFFICIAL_SOURCES[0], OFFICIAL_SOURCES[2]],
    verifiedDate: '2026-10-18',
    status: 'verified'
  },
  {
    id: 'loc-10',
    name: 'Đình Thần Tân An Hội',
    category: 'places',
    categoryName: 'Địa điểm tham quan',
    shortDescription: 'Di tích kiến trúc nghệ thuật đình làng cổ kính trung tâm huyện Củ Chi.',
    fullDescription: 'Đình làng được xây dựng từ đầu thế kỷ 19, được triều vua Tự Đức phong sắc thần năm 1852. Nơi đây lưu giữ nhiều hiện vật chạm khắc gỗ quý giá và các lễ hội Kỳ Yên rực rỡ.',
    lat: 10.9723,
    lng: 106.4952,
    address: 'Tỉnh lộ 8, Thị trấn Củ Chi, Huyện Củ Chi, TP. Hồ Chí Minh',
    coverImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    openingHours: 'Mở cửa ngày rằm, mùng một và lễ hội Kỳ Yên',
    ticketPrice: 'Miễn phí',
    sources: [OFFICIAL_SOURCES[0]],
    verifiedDate: '2026-10-17',
    status: 'verified'
  }
];

export const INITIAL_MEDIA_GALLERY: MediaItem[] = [
  {
    id: 'med-1',
    title: 'Cửa hầm bí mật Địa đạo Củ Chi',
    url: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80',
    type: 'image',
    category: 'Lịch sử',
    caption: 'Du khách trải nghiệm khám phá cửa hầm ngụy trang tinh vi tại Địa đạo Bến Dược',
    source: 'Tư liệu Ban Quản lý Khu Di tích Lịch sử Địa đạo Củ Chi',
    credit: 'Khu Di tích Địa đạo Củ Chi',
    verifiedDate: '2026-10-18'
  },
  {
    id: 'med-2',
    title: 'Toàn cảnh Đền Bến Dược bên sông Sài Gòn',
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80',
    type: 'image',
    category: 'Lịch sử',
    caption: 'Kiến trúc đền tưởng niệm uy nghiêm với ngói đỏ truyền thống và cây xanh rợp bóng',
    source: 'Sở Du lịch Thành phố Hồ Chí Minh',
    credit: 'Visit HCMC',
    verifiedDate: '2026-10-18'
  },
  {
    id: 'med-3',
    title: 'Phơi bánh tráng tại Phú Hòa Đông',
    url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',
    type: 'image',
    category: 'Văn hóa',
    caption: 'Những liếp bánh tráng phơi nối dài dưới nắng vàng ngoại ô Củ Chi',
    source: 'Hội Nông dân Xã Phú Hòa Đông',
    credit: 'UBND Xã Phú Hòa Đông',
    verifiedDate: '2026-10-17'
  },
  {
    id: 'med-4',
    title: 'Thịt bò tơ cuốn bánh tráng rau rừng',
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    type: 'image',
    category: 'Ẩm thực',
    caption: 'Đĩa bò tơ cuốn bánh tráng kèm rau sông Củ Chi và chén mắm nêm thơm nồng',
    source: 'Hiệp hội Ẩm thực TP. Hồ Chí Minh',
    credit: 'Sở Du lịch TP.HCM',
    verifiedDate: '2026-10-18'
  },
  {
    id: 'med-5',
    title: 'Củ mì luộc chấm muối mè kháng chiến',
    url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
    type: 'image',
    category: 'Ẩm thực',
    caption: 'Món củ mì hấp nước cốt dừa dân dã nhưng đậm sâu ký ức lịch sử',
    source: 'Khu Di tích Địa đạo Củ Chi',
    credit: 'Khu Di tích Củ Chi',
    verifiedDate: '2026-10-16'
  },
  {
    id: 'med-6',
    title: 'Nông trại sinh thái Green Noen',
    url: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1000&q=80',
    type: 'image',
    category: 'Thiên nhiên',
    caption: 'Cảnh quan thảo nguyên thanh bình cùng đàn dê cừu tại Green Noen An Nhơn Tây',
    source: 'Nông trang Xanh Green Noen',
    credit: 'Ban Quản trị Green Noen',
    verifiedDate: '2026-10-15'
  },
  {
    id: 'med-7',
    title: 'Miệt vườn cây trái Trung An trĩu cành',
    url: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=1000&q=80',
    type: 'image',
    category: 'Thiên nhiên',
    caption: 'Vườn chôm chôm chín đỏ rực đón du khách trải nghiệm ngày hè',
    source: 'Trung tâm Khuyến nông Củ Chi',
    credit: 'Hội Làm vườn Xã Trung An',
    verifiedDate: '2026-10-18'
  },
  {
    id: 'med-8',
    title: 'Sản phẩm mây tre đan lát mỹ nghệ Thái Mỹ',
    url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80',
    type: 'image',
    category: 'Văn hóa',
    caption: 'Các sản phẩm mây tre thủ công tinh xảo của nghệ nhân lão làng Thái Mỹ',
    source: 'Hợp tác xã Mây Tre Thái Mỹ',
    credit: 'UBND Xã Thái Mỹ',
    verifiedDate: '2026-10-17'
  }
];

export const CLASS_12A5_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: 'Trần Đức Lương',
    role: 'Trưởng nhóm & Nghiên cứu Lịch sử - Di tích',
    bio: 'Chịu trách nhiệm tổng hợp tư liệu lịch sử, khảo sát di tích Địa đạo Củ Chi và Đền Bến Dược, liên hệ đối chiếu các cổng thông tin văn hóa chính thức.',
    tasks: ['Khảo sát thực địa Địa đạo Bến Dược & Bến Đình', 'Tổng hợp số liệu 44.752 liệt sĩ và bài văn bia', 'Điều phối tiến độ nghiên cứu của nhóm 12A5']
  },
  {
    id: 2,
    name: 'Trần Hà Phụng Nhi',
    role: 'Biên tập viên Văn hóa & Ẩm thực truyền thống',
    bio: 'Chuyên nghiên cứu sâu về các làng nghề truyền thống Bánh tráng Phú Hòa Đông, nghề đan lát mây tre và các phong vị ẩm thực đặc sắc như Bò tơ, củ mì Củ Chi.',
    tasks: ['Phỏng vấn nghệ nhân làng bánh tráng Phú Hòa Đông', 'Biên soạn nội dung chuyên mục Ẩm thực & Đặc sản', 'Xây dựng hồ sơ tư liệu văn hóa làng quê']
  },
  {
    id: 3,
    name: 'Phan Khánh Linh',
    role: 'Chuyên viên Bản đồ số & Tọa độ địa lý',
    bio: 'Phụ trách đo đạc, kiểm chứng tọa độ GPS thực tế của các địa danh văn hóa trên nền bản đồ Leaflet OpenStreetMap và đồng bộ dữ liệu tham quan.',
    tasks: ['Xác thực tọa độ 10 điểm di tích và văn hóa tiêu biểu', 'Tích hợp hệ thống bản đồ tương tác Leaflet', 'Thiết lập bộ lọc phân loại di tích khoa học']
  },
  {
    id: 4,
    name: 'Nguyễn Tường Lam',
    role: 'Thiết kế Giao diện Retro Editorial & Thư viện Media',
    bio: 'Chịu trách nhiệm ngôn ngữ thị giác phong cách Retro Vintage kết hợp báo chí tư liệu, bố cục bất đối xứng, bảng màu chuẩn và quản lý thư viện hình ảnh thực tế.',
    tasks: ['Thiết kế hệ thống typography Bebas Neue & Bodoni Moda', 'Xây dựng màn hình poster loading lớp 12A5', 'Biên tập và thẩm định bản quyền kho hình ảnh tư liệu']
  },
  {
    id: 5,
    name: 'Nguyễn Thị Quỳnh Như',
    role: 'Kiểm định Tư liệu & Tích hợp Trợ lý AI',
    bio: 'Phụ trách quy trình kiểm duyệt nguồn tham khảo, gán nhãn trạng thái bài viết và tích hợp Trợ lý AI Củ Chi với bộ lọc phạm vi câu hỏi nghiêm ngặt.',
    tasks: ['Xây dựng kho kiến thức RAG phục vụ Trợ lý AI Củ Chi', 'Thiết lập hàng rào chống bịa đặt và từ chối ngoài phạm vi', 'Quản lý bảng đối chiếu nguồn dẫn chứng UBND & Di tích']
  },
  {
    id: 6,
    name: 'Trần Anh',
    role: 'Biên tập viên Đa phương tiện & Khảo sát Thực địa',
    bio: 'Chịu trách nhiệm ghi hình, thu thập hình ảnh tư liệu thực tế tại các di tích lịch sử và hỗ trợ đồng bộ dữ liệu thuyết trình của nhóm 12A5.',
    tasks: ['Chụp ảnh và ghi hình thực địa tại Địa đạo Bến Dược', 'Khảo sát thực tế các làng nghề truyền thống Củ Chi', 'Hỗ trợ kỹ thuật trình chiếu báo cáo chuyên đề']
  }
];

export const CUCHI_STATS = {
  area: '434,77 km²',
  population: 'Gần 500.000 người (Theo Niên giám thống kê TP.HCM)',
  administrativeUnits: '1 Thị trấn Củ Chi và 20 xã ngoại thành',
  tunnelLength: 'Hơn 250 km đường hầm dưới lòng đất',
  martyrsHonored: '44.752 Anh hùng Liệt sĩ được ghi danh tại Đền Bến Dược',
  heroicTitle: 'Đất Thép Thành Đồng (Phong tặng 17/9/1967)',
  specialNationalMonument: 'Di tích Quốc gia đặc biệt (Quyết định năm 2015)'
};
