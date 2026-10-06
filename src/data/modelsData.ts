import { BusinessModel } from '../types';
import { Language } from './translations';
import mekongBowlImg from '../assets/images/mekong_bowl_concept_1791280031822.jpg';
import wrapAndRunImg from '../assets/images/wrap_and_run_concept_1791280049644.jpg';
import bepLanhImg from '../assets/images/bep_lanh_bento_concept_1791280064327.jpg';
import smartPantryImg from '../assets/images/smart_pantry_fridge_1791280081042.jpg';

export const BUSINESS_MODELS_VI: BusinessModel[] = [
  {
    id: 'mekong-bowl',
    name: 'MEKONG BOWL',
    tagline: 'Tô Khỏe Chuẩn Vị Tây — 0 Phút Chờ, 0 Đồng Ship',
    format: 'B2B2C Smart Pantry & Cloud Kitchen',
    painPointSolved: 'Triệt tiêu hoàn toàn phí giao hàng (15.000đ - 20.000đ) và thời gian chờ đợi giờ cao điểm trưa (30 - 45 phút).',
    targetSlot: 'Bữa trưa văn phòng (11:30 - 13:00)',
    brandConcept: {
      name: 'Mekong Modern Green',
      description: 'Hiện đại, tươi mát, cân bằng giữa vẻ thanh lịch công sở và tính mộc mạc trù phú của vùng đồng bằng sông nước Cửu Long.',
      primaryColors: [
        { name: 'Xanh Lá Sen', hex: '#166534', desc: 'Đại diện cho sức khỏe, rau củ hữu cơ và sự thư thái' },
        { name: 'Đỏ Mắm Me', hex: '#991b1b', desc: 'Kích thích vị giác, biểu trưng cho vị đậm đà độc bản miền Tây' },
        { name: 'Vàng Thốt Nốt', hex: '#ca8a04', desc: 'Ngọt thanh tự nhiên, ấm áp, ánh hào quang sông nước' }
      ],
      packaging: 'Tô giấy Kraft phân hủy sinh học chống thấm dầu tự nhiên kèm đai giấy in mã QR dinh dưỡng & nguồn gốc nông sản.',
      packagingDetails: [
        'Giấy Kraft nâu Nhật Bản 350gsm tráng lớp PLA bắp tự hủy trong 90 ngày',
        'Nắp giấy dập gân kín khí, giữ nhiệt tốt trên 45 phút',
        'Đai giấy ôm thân (Belly band) in QR check Calo, Macro và nông trại xuất xứ (An Giang, Phong Điền)',
        'Kèm thìa đũa gỗ sồi dùng 1 lần bọc giấy tiệt trùng'
      ],
      coreValues: ['Dinh Dưỡng Khoa Học (~450 kcal)', 'Vị Miền Tây Đậm Đà', 'Tiện Lợi Tối Cực (0 Phút Chờ)']
    },
    image: mekongBowlImg,
    keyProducts: [
      {
        name: 'Cơm Gạo Lứt Gà Nướng Sốt Mắm Me Thốt Nốt',
        calories: 450,
        price: 45000,
        cogs: 13500,
        description: 'Gạo lứt đỏ dẻo An Giang, ức gà nạc nướng lò ướp mắm me chua ngọt thanh từ mật thốt nốt Bảy Núi, cà chua cherry, dưa leo giòn và rau muống non luộc chấm sốt.',
        ingredients: ['Gạo lứt dẻo An Giang', 'Ức gà nạc 150g', 'Sốt mắm me thốt nốt ít mặn', 'Cà chua cherry Cần Thơ', 'Rau muống sạch Phong Điền'],
        localFlavor: 'Vị chua thanh của me chín hòa quyện ngọt ấm thốt nốt, xóa tan cảm giác khô nhạt của gạo lứt truyền thống.',
        tags: ['Best-Seller', 'Calo Chuẩn 450', 'Giàu Đạm Nạc']
      },
      {
        name: 'Bún Ngũ Sắc Tôm Thịt Sốt Tương Hạt Kho Quẹt',
        calories: 420,
        price: 48000,
        cogs: 14800,
        description: 'Bún tươi ngũ sắc làm từ rau củ tự nhiên (gấc, lá cẩm, hoa đậu biếc), tôm thẻ Cà Mau hấp giòn ngọt, thịt thăn heo xé sợi, dưa leo, rau thơm Nam Bộ chấm sốt tương hột kho quẹt giảm 40% muối.',
        ingredients: ['Bún ngũ sắc củ dền & lá cẩm', 'Tôm thẻ sinh thái 4 con', 'Thăn heo nạc luộc xé', 'Rau thơm miền Tây', 'Sốt tương hột lên men'],
        localFlavor: 'Món ăn thanh mát xua tan cái nắng oi nồng Cần Thơ, hậu vị béo bùi từ tương đậu lên men cổ truyền.',
        tags: ['Giải Nhiệt Nắng Nóng', 'High Fiber', 'Không Dầu Mỡ']
      },
      {
        name: 'Cá Basa Áp Chảo Sốt Tiêu Lốt & Cơm Hạt Sen',
        calories: 470,
        price: 46000,
        cogs: 14000,
        description: 'Phi lê cá basa sông Tiền áp chảo thơm lừng với sốt tiêu lốt cay thơm nồng ấm, ăn cùng cơm gạo lứt trộn hạt sen Đồng Tháp và bông cải xanh.',
        ingredients: ['Phi lê cá basa tươi', 'Tiêu lốt rừng', 'Gạo lứt tím than', 'Hạt sen tươi', 'Bông cải xanh'],
        localFlavor: 'Vị cay dịu đặc biệt của tiêu lốt kích thích tiêu hóa trong phòng máy lạnh, loại bỏ hoàn toàn mùi tanh của cá.',
        tags: ['Omega-3', 'Ấm Bụng Giờ Trưa', 'Hạt Sen Đồng Tháp']
      }
    ],
    unitEconomics: {
      retailPriceRange: '42.000đ – 48.000đ',
      avgPrice: 45000,
      cogsPercentage: 30.5,
      cogsCost: 13725,
      grossMarginPercentage: 69.5,
      dailyVolumeEst: 220,
      monthlyRevenueEst: 257400000,
      monthlyGrossProfitEst: 178893000,
      breakevenDays: 45,
      capitalNeeded: '120.000.000đ (Bếp trung tâm Cloud Kitchen + 3 Tủ thông minh Smart Fridge)'
    },
    operationalHighlights: [
      'Bếp trung tâm Cloud Kitchen đặt tại hẻm xe máy rộng trục Mậu Thân / Nguyễn Văn Cừ (tiết kiệm 65% chi phí thuê mặt bằng).',
      'Ký gửi trực tiếp vào Tủ Lạnh Đóng Tươi (Fresh Smart Fridge) tại pantry các tòa nhà SHB, IDICO, A-Connection trước 11:00 AM.',
      'Nhân viên văn phòng chỉ cần quét mã QR ZaloPay / VietQR mở tủ lấy đồ ăn, hâm microwave 60 giây ngay tại pantry.',
      'Mô hình Gói Tuần Năng Lượng (5 ngày trưa 200.000đ, chỉ 40k/bữa) thu tiền trước, giảm 95% rác thải thực phẩm tồn đọng.'
    ],
    keyMessages: [
      {
        angle: 'Khẩu vị & Trải nghiệm (Local Taste)',
        slogan: 'ĐẬM ĐÀ VỊ TÂY – DÁNG CHUẨN MỖI NGÀY',
        sampleCopy: 'Ăn ngon chuẩn vị mắm me, kho quẹt mà vẫn nhẹ bụng thon gọn, không lo béo mỡ công sở.',
        channel: 'TikTok Review, Reels & Mini-tasting sampling tại Pantry các tòa nhà'
      },
      {
        angle: 'Hiệu suất ca chiều (Productivity)',
        slogan: 'BỮA TRƯA NHẸ BỤNG – TỈNH TÁO CHIỀU TƯƠI',
        sampleCopy: 'Carbs phức hợp giải phóng chậm từ gạo lứt dẻo An Giang giúp giữ đường huyết ổn định, tạm biệt cơn uể oải sụp mí 14:30.',
        channel: 'Standee & Màn hình quảng cáo TVC thang máy các tòa cao ốc Ninh Kiều'
      }
    ]
  },
  {
    id: 'wrap-and-run',
    name: 'WRAP & RUN',
    tagline: 'Bữa Ăn Cầm 1 Tay — Cứu Tinh Điểm Trũng 14:30',
    format: 'Pop-up Kiosk 5m² & Energy Dip Grab-and-Go',
    painPointSolved: 'Khai thác triệt để "điểm trũng năng lượng 14:30 PM" (ngủ gục vì tụt đường huyết) và bữa sáng hối hả không kịp ăn của dân công sở.',
    targetSlot: 'Sáng vội (06:45 - 08:15) & Xế chiều tỉnh táo (14:00 - 15:30)',
    brandConcept: {
      name: 'Neo-Mekong Streetwise',
      description: 'Năng động, nhanh nhẹn, đậm chất đường phố công sở hiện đại với sắc màu bắt mắt tiếp thêm năng lượng tức thì.',
      primaryColors: [
        { name: 'Vàng Xoài Keo', hex: '#eab308', desc: 'Kích hoạt năng lượng tươi mới, tươi vui, biểu tượng trái cây miền Tây' },
        { name: 'Xám Than Đô Thị', hex: '#334155', desc: 'Chuyên nghiệp, góc cạnh, hòa hợp nhịp sống công sở văn phòng' },
        { name: 'Trắng Sữa Gạo', hex: '#f8fafc', desc: 'Thanh sạch, tối giản, cân bằng cảm giác thị giác' }
      ],
      packaging: 'Ống xé công thái học (Tear-off Tube) 2 tầng: Cầm ăn 1 tay không chạm tay vào thức ăn, vừa gõ bàn phím vừa nạp năng lượng.',
      packagingDetails: [
        'Ống giấy tròn cứng tráng màng thực phẩm chống rỉ sốt',
        'Đường răng cưa xé giữa thân (Tear-strip): Xé tầng 1 ăn nửa trên, xé tầng 2 ăn trọn vẹn',
        'Có khe cắm khăn giấy ướt hữu cơ đi kèm',
        'Dung tích vừa vặn túi xách hoặc hộc xe máy SH/Lead'
      ],
      coreValues: ['Cầm 1 Tay Tiện Lợi (One-Handed)', 'Chỉ Số GI Thấp (Không Tích Mỡ)', 'Đánh Bại Cơn Buồn Ngủ Chiều']
    },
    image: wrapAndRunImg,
    keyProducts: [
      {
        name: 'Wrap Bánh Tráng Gạo Lứt Bò Áp Chảo Sốt Tiêu Cần Thơ',
        calories: 380,
        price: 42000,
        cogs: 13000,
        description: 'Bánh tráng gạo lứt dẻo dai cuốn thăn bò áp chảo mềm mọng quyện sốt tiêu đen Cần Thơ cay nồng nhẹ, xà lách giòn, rau mầm và xoài keo bào chua thanh.',
        ingredients: ['Bánh tráng gạo lứt mềm', 'Thăn bò mềm 110g', 'Sốt tiêu đen ĐBSCL', 'Xoài keo chua giòn', 'Xà lách & rau mầm hữu cơ'],
        localFlavor: 'Vị nồng ấm của tiêu Cần Thơ kích thích tuần hoàn máu não, xoài keo đánh thức giác quan ngay trong 1 cắn.',
        tags: ['High Protein', 'Bestseller 14:30', 'Chống Buồn Ngủ']
      },
      {
        name: 'Wrap Gà Nướng Sả Cuộn Bơ Sáp & Trứng Lòng Đào',
        calories: 360,
        price: 39000,
        cogs: 11800,
        description: 'Ức gà ướp sả cây nướng thơm lừng kết hợp bơ sáp bùi ngậy, trứng gà ta lòng đào, rau rocket và sốt sữa chua thảo mộc dịu nhẹ.',
        ingredients: ['Bánh tráng gạo lứt', 'Gà nướng sả non', 'Bơ sáp tươi', 'Trứng gà lòng đào', 'Sốt yogurt thảo mộc'],
        localFlavor: 'Hương sả mộc mạc làng quê quyện cùng độ béo thanh của bơ sáp và trứng lòng đào giàu lecithin bổ não.',
        tags: ['Ăn Sáng Nhanh', 'Bổ Não Tăng Tập Trung', 'Healthy Fat']
      },
      {
        name: 'Cold-Brew Bưởi Năm Roi & Hạt Chia Low-GI (Drink Pairing)',
        calories: 95,
        price: 25000,
        cogs: 6500,
        description: 'Nước bưởi Năm Roi Bình Minh ép tươi nguyên chất ủ lạnh với trà lài sen và hạt chia giàu Omega-3, ngọt dịu nhẹ từ đường ăn kiêng tự nhiên.',
        ingredients: ['Bưởi Năm Roi Bình Minh', 'Trà lài hoa sen', 'Hạt chia hữu cơ', 'Chanh tươi', 'Đường cỏ ngọt stevia'],
        localFlavor: 'Vị chua ngọt thanh khiết của bưởi Năm Roi trứ danh, cấp nước lập tức cho dân văn phòng ngồi phòng lạnh suốt 6 tiếng.',
        tags: ['Low-GI', 'Đốt Mỡ Thừa', 'Combo Giảm 10k']
      }
    ],
    unitEconomics: {
      retailPriceRange: '39.000đ – 45.000đ (Combo kèm nước 55.000đ)',
      avgPrice: 42000,
      cogsPercentage: 31.0,
      cogsCost: 13020,
      grossMarginPercentage: 69.0,
      dailyVolumeEst: 280,
      monthlyRevenueEst: 305760000,
      monthlyGrossProfitEst: 210974000,
      breakevenDays: 35,
      capitalNeeded: '65.000.000đ (Setup Kiosk lắp ghép 5m² + Máy ép cuộn + Tủ giữ nóng lạnh)'
    },
    operationalHighlights: [
      'Thiết kế Kiosk lắp ghép thông minh diện tích vỏn vẹn 5m² đặt ngay sảnh trệt hoặc góc sân trước các tòa nhà lớn như SHB Hòa Bình & A-Connection 30/4.',
      'Quy trình đóng gói dưới 60 giây: Các cuộn wrap được chuẩn bị sơ bộ bán thành phẩm tại Cloud Kitchen, nướng áp chảo hoàn thiện tại kiosk trong 45 giây.',
      'Tập trung bán 2 khung giờ vàng: Sáng 06:45 - 08:15 (bắt sóng khách vào ca) và Chiều 14:00 - 15:30 (cứu tinh cơn đói vặt xế chiều).',
      'Chiến lược "Anti Trà Sữa": Thay thế cốc trà sữa 55k nhiều đường bằng combo Wrap + Trà bưởi hạt chia chỉ 55k giúp tỉnh táo, phẳng bụng.'
    ],
    keyMessages: [
      {
        angle: 'Cứu Tinh Giờ Chiều (Energy Dip Focus)',
        slogan: 'NẠP NHANH 1 TAY – HẾT NGAY SỤP MÍ',
        sampleCopy: 'Tạm biệt bánh tráng trộn đầy dầu và ly trà sữa gây béo bụng. Một cuộn Wrap nạc bò tiêu Cần Thơ giữ bạn tập trung 100% đến hết ca!',
        channel: 'Flash-sale 14h trên Zalo Mini-app và voucher đặt tại quầy lễ tân'
      },
      {
        angle: 'Tốc độ buổi sáng (Morning Speed)',
        slogan: '30 GIÂY CẦM TAY – KỊP GIỜ CHẤM CÔNG',
        sampleCopy: 'Không trễ giờ, không dầu mỡ, thơm giòn nóng hổi cho ngày làm việc bứt phá năng lượng.',
        channel: 'Kiosk Display, bảng menu LED phát sáng lối vào tòa nhà'
      }
    ]
  },
  {
    id: 'bep-lanh',
    name: 'BẾP LÀNH ĐÔ THỊ',
    tagline: 'Cơm Trưa Nhóm Chuẩn Vị Mẹ Nấu — Chia Tiền Tự Động, Freeship Tận Bàn',
    format: 'Office Bento & Department Group Order',
    painPointSolved: 'Thói quen gom đơn rủ nhau đặt cơm nhóm (chiếm 35% đơn app) nhưng chịu phí ship cao, chờ rời rạc và việc chia tiền lẻ phiền toái.',
    targetSlot: 'Cơm trưa nhóm phòng ban (11:30 - 13:00)',
    brandConcept: {
      name: 'Warm Community Kitchen',
      description: 'Ấm cúng, tin cậy, gắn kết tình đồng nghiệp qua bữa cơm lành canh ngọt chuẩn vị quê nhà nhưng cân đối dinh dưỡng chuẩn y khoa.',
      primaryColors: [
        { name: 'Xanh Tin Cẩn', hex: '#1e40af', desc: 'Sự an tâm về vệ sinh an toàn thực phẩm và dịch vụ đúng hẹn' },
        { name: 'Nâu Gỗ Trầm', hex: '#78350f', desc: 'Mộc mạc, cảm giác thân thương như mâm cơm gia đình miền Tây' },
        { name: 'Trắng Bã Mía', hex: '#fafaf9', desc: 'Thân thiện sinh thái, văn minh công sở hiện đại' }
      ],
      packaging: 'Khay bento 4 ngăn làm từ 100% bã mía tự nhiên chịu nhiệt lò vi sóng, phân hủy sinh học hoàn toàn.',
      packagingDetails: [
        'Khay bã mía 4 ngăn tách biệt: Cơm, Đạm chính, Rau củ hấp, Nước chấm sốt',
        'Nắp khóa 4 chấu chống rỉ nước canh trong quá trình vận chuyển bằng xe máy',
        'Túi đựng lớn cách nhiệt Kraft giữ ấm mâm cơm lên đến 50 phút',
        'Kèm tờ thực đơn kiểm tra từng tên đồng nghiệp đặt trong nhóm'
      ],
      coreValues: ['Gắn Kết Phòng Ban', 'Chia Tiền 1 Click Không Phiền Não', 'Bền Vững Xanh (100% Bã Mía)']
    },
    image: bepLanhImg,
    keyProducts: [
      {
        name: 'Bento Cá Basa Nướng Tiêu Lốt & Rau Củ Kho Quẹt Lên Men',
        calories: 460,
        price: 45000,
        cogs: 13800,
        description: 'Khay bento 4 ngăn: Cá basa nướng tiêu lốt thơm lừng thịt ngọt béo tự nhiên, cơm gạo lứt dẻo tím, rau củ quả hấp ngũ sắc (đậu bắp, bầu, cà rốt), sốt chấm kho quẹt hạt đậu nành giảm mặn.',
        ingredients: ['Cá Basa phi lê nướng', 'Cơm gạo lứt dẻo hạt sen', 'Bầu & đậu bắp luộc giòn', 'Sốt kho quẹt hạt nêm chay', 'Canh bí xanh sườn non'],
        localFlavor: 'Tái hiện mâm cơm gia đình Nam Bộ ấm cúng, đậm đà vị cá nướng tiêu và rau vườn chấm kho quẹt không lo huyết áp.',
        tags: ['Chuẩn Cơm Mẹ Nấu', 'Bento 4 Ngăn', 'Freeship Nhóm']
      },
      {
        name: 'Bento Thăn Heo Áp Chảo Sốt Tương Hạt & Canh Cải Bẹ Xanh',
        calories: 480,
        price: 46000,
        cogs: 14200,
        description: 'Thịt thăn heo áp chảo mềm mọng rim sốt tương hột Bến Tre ngọt mặn đậm đà, ăn cùng cơm gạo lứt đỏ, salad dưa leo cà chua bi và bát canh cải bẹ xanh thanh mát.',
        ingredients: ['Thịt thăn heo nạc 140g', 'Sốt tương hột truyền thống', 'Gạo lứt đỏ nàng ó', 'Rau củ xào dầu oliu', 'Canh cải xanh gừng ấm'],
        localFlavor: 'Vị tương hột rim đậm đà thấm từng thớ thịt thăn nạc, đúng gu thích ăn cơm đậm vị của người Cần Thơ.',
        tags: ['Đậm Vị Miền Tây', 'Đủ Đầy Năng Lượng', 'Cực Hút Nam Giới']
      },
      {
        name: 'Bento Ức Gà Nướng Mật Hoa Dừa & Canh Bắp Ngọt Lá Dứa',
        calories: 430,
        price: 44000,
        cogs: 13200,
        description: 'Ức gà nướng ướp mật hoa dừa Trà Vinh thơm lừng dịu ngọt chỉ số đường huyết cực thấp, bắp non xào ớt chuông, cơm lứt dẻo và canh bắp ngọt thanh.',
        ingredients: ['Ức gà thảo mộc', 'Mật hoa dừa Sokfarm', 'Bắp non & ớt chuông', 'Cơm gạo lứt dẻo', 'Canh bắp ngọt lá dứa'],
        localFlavor: 'Mùi thơm thanh nhã từ mật hoa dừa độc đáo vùng hạ lưu sông Tiền làm miếng ức gà mọng nước không khô.',
        tags: ['Low-GI Siêu Lành', 'Eat Clean Dễ Ăn', 'Rất Chuộng Chị Em']
      }
    ],
    unitEconomics: {
      retailPriceRange: '44.000đ – 48.000đ (Nhóm từ 3 phần freeship)',
      avgPrice: 45000,
      cogsPercentage: 30.8,
      cogsCost: 13860,
      grossMarginPercentage: 69.2,
      dailyVolumeEst: 250,
      monthlyRevenueEst: 292500000,
      monthlyGrossProfitEst: 202410000,
      breakevenDays: 40,
      capitalNeeded: '95.000.000đ (Bếp nấu theo lô công suất 300 suất/ca + Hệ thống giữ nhiệt + App chia tiền)'
    },
    operationalHighlights: [
      'Mô hình đặt gom theo lô (Batch Production): Các phòng ban chốt đơn trước 10:30 sáng qua link nhóm Zalo Mini-App.',
      'Tính năng Chia Tiền Tự Động (Auto Split-Bill): Mỗi người tự tick chọn món, hệ thống tạo mã QR VietQR đúng số tiền của từng cá nhân, không lo trưởng nhóm phải thu tiền hộ.',
      'Giao 1 chuyến duy nhất mỗi tòa nhà lúc 11:30: Tiết kiệm 80% chi phí shipper so với các đơn đặt lẻ trên GrabFood/ShopeeFood.',
      'Cam kết Freeship 100% cho đơn từ 3 phần trở lên — giải quyết triệt để rào cản phí giao hàng 15k - 20k.'
    ],
    keyMessages: [
      {
        angle: 'Gom đơn phòng ban & Đồng nghiệp (Community Group)',
        slogan: 'ĐẶT CHUNG CÀNG ĐÔNG – FREESHIP 0 ĐỒNG',
        sampleCopy: 'Trưa nay ăn gì cả phòng ơi? Cơm bento 4 ngăn chuẩn cơm mẹ nấu, nóng hổi đúng 11:30, mỗi người quét QR chia tiền tự động cực khỏe!',
        channel: 'Nhóm Zalo nội bộ công ty, chương trình Thử Nghiệm Bữa Trưa Phòng Ban (Team Tasting)'
      },
      {
        angle: 'Vệ sinh & Bền vững (Clean & Green)',
        slogan: 'SẠCH TỪ NÔNG TRẠI TÂY ĐÔ – TRÒN VỊ SỨC KHỎE CÔNG SỞ',
        sampleCopy: '100% khay bã mía thân thiện với môi trường, nguồn rau củ sạch trực tiếp từ hợp tác xã Phong Điền - Cần Thơ.',
        channel: 'Bao bì in câu chuyện nguồn gốc nông sản, quét QR truy xuất chứng nhận VietGAP'
      }
    ]
  }
];

export const BUSINESS_MODELS_EN: BusinessModel[] = [
  {
    id: 'mekong-bowl',
    name: 'MEKONG BOWL',
    tagline: 'Bold Mekong Bowls, Clean Macros — 0-Min Wait, 0-Fee Delivery',
    format: 'B2B2C Smart Pantry & Cloud Kitchen',
    painPointSolved: 'Radically eliminates high delivery fees ($0.75 - $0.90 / 15k-20k VND) and frustrating peak lunch delays (30 - 45 mins).',
    targetSlot: 'Corporate Lunch Hour (11:30 AM – 1:00 PM)',
    brandConcept: {
      name: 'Mekong Modern Green',
      description: 'Contemporary, fresh, and serene — balancing sleek corporate minimalism with the fertile abundance of the Mekong Delta.',
      primaryColors: [
        { name: 'Lotus Leaf Green', hex: '#166534', desc: 'Symbolizes vitality, organic farm greens, and mindful wellness' },
        { name: 'Tamarind Glaze Red', hex: '#991b1b', desc: 'Appetite stimulant, honors authentic southern Vietnamese savory sauces' },
        { name: 'Palm Sugar Gold', hex: '#ca8a04', desc: 'Unrefined natural sweetness, warmth, and river sunshine' }
      ],
      packaging: 'Biodegradable oil-resistant Kraft paper bowl with branded paper belly-band and transparency QR code.',
      packagingDetails: [
        'Japanese 350gsm virgin kraft paper with non-toxic corn PLA biodegradable coating',
        'Tight-seal ribbed paper lid, maintains steam heat for 45+ minutes',
        'Sleeve belly-band with QR code linking to certified macros and farm provenance (An Giang, Phong Dien)',
        'Eco-sanitized wooden cutlery sealed in compostable paper pouch'
      ],
      coreValues: ['Scientifically Calibrated (~450 kcal)', 'Bold Regional Flavor', 'Frictionless Grab (0-Min Wait)']
    },
    image: mekongBowlImg,
    keyProducts: [
      {
        name: 'Oven-Roasted Chicken Brown Rice with Tamarind Palm Glaze',
        calories: 450,
        price: 45000,
        cogs: 13500,
        description: 'Tender An Giang fragrant soft brown rice, 150g oven-roasted chicken breast glazed in Bay Nui palm sugar tamarind reduction, crispy cucumber, cherry tomatoes, and steamed morning glory with dipping sauce.',
        ingredients: ['An Giang Soft Brown Rice', 'Lean Chicken Breast 150g', 'Low-Sodium Palm Tamarind Sauce', 'Can Tho Cherry Tomatoes', 'Phong Dien Clean Greens'],
        localFlavor: 'The zesty tang of ripe tamarind balances the warm sweetness of unrefined palm sugar, overcoming the blandness of regular brown rice.',
        tags: ['Best-Seller', 'Precise 450 kcal', 'High Lean Protein']
      },
      {
        name: 'Rainbow Vegetable Rice Noodles with Steamed Shrimp & Fermented Umami Dip',
        calories: 420,
        price: 48000,
        cogs: 14800,
        description: 'Natural vegetable-infused rice noodles (beetroot & magenta plant), sweet Ca Mau wild shrimp, shredded pork loin, crisp river herbs, and traditional fermented soybean dip with 40% reduced sodium.',
        ingredients: ['Beetroot Rice Noodles', 'Steamed Tiger Shrimp (4 pcs)', 'Shredded Lean Pork Loin', 'Southern Fresh Herbs', 'Artisanal Fermented Bean Dip'],
        localFlavor: 'Refreshing and light on scorching Can Tho afternoons, with a deeply satisfying nutty undertone from fermented soybeans.',
        tags: ['Heat Relief', 'High Fiber', 'Zero Cooking Oil']
      },
      {
        name: 'Pan-Seared Basa Fillet with Wild Long Pepper & Lotus Seed Rice',
        calories: 470,
        price: 46000,
        cogs: 14000,
        description: 'Fresh river Basa fillet pan-seared with aromatic wild long pepper sauce, served over Dong Thap lotus seeds folded into purple brown rice and broccoli.',
        ingredients: ['Fresh River Basa Fillet', 'Wild Long Pepper (Tieu Lot)', 'Purple Brown Rice', 'Fresh Lotus Seeds', 'Steamed Broccoli'],
        localFlavor: 'The gentle warmth of wild long pepper promotes digestion in cold AC rooms and fully elevates the freshwater fish.',
        tags: ['Rich in Omega-3', 'Warm Digestive Comfort', 'Lotus Seed Blend']
      }
    ],
    unitEconomics: {
      retailPriceRange: '42,000 – 48,000 VND ($1.70 – $1.95)',
      avgPrice: 45000,
      cogsPercentage: 30.5,
      cogsCost: 13725,
      grossMarginPercentage: 69.5,
      dailyVolumeEst: 220,
      monthlyRevenueEst: 257400000,
      monthlyGrossProfitEst: 178893000,
      breakevenDays: 45,
      capitalNeeded: '120M VND / ~$4,800 USD (Cloud kitchen hub + 3 Fresh Smart Fridges)'
    },
    operationalHighlights: [
      'Centralized Cloud Kitchen located in a low-rent wide alley off Mau Than / Nguyen Van Cu (slashes rental costs by 65%).',
      'Direct morning batch replenishment into "Fresh Smart Fridges" at SHB, IDICO, and A-Connection office pantries before 11:00 AM.',
      'Employees scan QR code (VietQR / ZaloPay) to unlock the fridge, take their bowl, and microwave for 60 seconds right at the pantry.',
      'Weekly Energy Subscription Model (5 weekday lunches at 200,000 VND, just 40k/meal) secures prepaid revenue and cuts food waste to under 5%.'
    ],
    keyMessages: [
      {
        angle: 'Regional Taste & Indulgence',
        slogan: 'BOLD MEKONG FLAVOR — LEAN DESK PHYSIQUE',
        sampleCopy: 'Enjoy authentic tamarind glaze and caramelized savory notes while keeping your waistline lean without office calorie guilt.',
        channel: 'TikTok food creators, Instagram Reels, and corporate pantry mini-tasting popups'
      },
      {
        angle: 'Afternoon Productivity Focus',
        slogan: 'LIGHT LUNCH DIGESTION — SHARP AFTERNOON ENERGY',
        sampleCopy: 'Slow-release complex carbs from An Giang soft brown rice keep your blood sugar steady. Say goodbye to the 2:30 PM post-lunch coma.',
        channel: 'Office elevator digital screens and standees in Ninh Kieu commercial lobbies'
      }
    ]
  },
  {
    id: 'wrap-and-run',
    name: 'WRAP & RUN',
    tagline: 'One-Handed Fuel — Conquering The 14:30 PM Energy Slump',
    format: 'Pop-Up Kiosk (5m²) & Energy Dip Grab-and-Go',
    painPointSolved: 'Captures the critical "14:30 PM energy crash" (sugar slump) and the rushed morning 7:30 AM commute with desk-friendly, one-handed eats.',
    targetSlot: 'Morning Rush (06:45 – 08:15 AM) & Afternoon Dip (02:00 – 03:30 PM)',
    brandConcept: {
      name: 'Neo-Mekong Streetwise',
      description: 'Energetic, fast-paced, and sharp — combining urban corporate sleekness with vibrant tropical yellow tones.',
      primaryColors: [
        { name: 'Keo Mango Yellow', hex: '#eab308', desc: 'Ignites instant morning optimism and afternoon focus' },
        { name: 'Urban Charcoal', hex: '#334155', desc: 'Polished, industrial, and seamlessly at home in modern office towers' },
        { name: 'Rice Milk White', hex: '#f8fafc', desc: 'Clean, minimalist, and visually refreshing' }
      ],
      packaging: 'Ergonomic 2-tier cylindrical Tear-Off Tube: Eat with one hand without touching food or staining keyboards.',
      packagingDetails: [
        'Rigid food-grade card cylinder lined with sauce barrier',
        'Middle perforation strip (Tear-off): Tear tier 1 for upper half, tier 2 for bottom half',
        'Includes an integrated organic wet wipe pocket',
        'Designed to fit handily into scooter compartments (SH/Lead) or laptop bags'
      ],
      coreValues: ['1-Handed Desk-Friendly', 'Low Glycemic Index (Zero Sugar Crash)', '14:30 Slump Breaker']
    },
    image: wrapAndRunImg,
    keyProducts: [
      {
        name: 'Brown Rice Paper Wrap with Flank Steak & Can Tho Black Pepper Sauce',
        calories: 380,
        price: 42000,
        cogs: 13000,
        description: 'Tender brown rice paper wrapped around seared flank steak strips, spicy Can Tho crushed black pepper reduction, crisp greens, sprouts, and shredded tart Keo mango.',
        ingredients: ['Brown Rice Paper', 'Seared Flank Steak 110g', 'Can Tho Black Pepper Sauce', 'Tart Keo Mango', 'Hydroponic Greens & Sprouts'],
        localFlavor: 'The warming kick of Can Tho black pepper stimulates cerebral blood flow, while tart green mango wakes up sluggish senses.',
        tags: ['High Protein', '14:30 Bestseller', 'Anti-Slump']
      },
      {
        name: 'Lemongrass Grilled Chicken Wrap with Creamy Avocado & Soft-Boiled Egg',
        calories: 360,
        price: 39000,
        cogs: 11800,
        description: 'Lemongrass-marinated grilled chicken breast paired with rich butter avocado, runny soft-boiled egg, baby arugula, and gentle herb-yogurt dressing.',
        ingredients: ['Brown Rice Paper', 'Lemongrass Grilled Chicken', 'Ripe Butter Avocado', 'Soft-Boiled Egg', 'Herb Yogurt Dressing'],
        localFlavor: 'Fragrant countryside lemongrass married with the smooth richness of avocado and choline-rich egg for brain clarity.',
        tags: ['Fast Breakfast', 'Cognitive Boost', 'Healthy Fats']
      },
      {
        name: 'Nam Roi Pomelo & Chia Seed Low-GI Cold-Brew (Pairing Drink)',
        calories: 95,
        price: 25000,
        cogs: 6500,
        description: 'Freshly pressed Binh Minh Nam Roi pomelo juice cold-brewed with lotus jasmine tea and organic Omega-3 chia seeds, gently sweetened with natural stevia.',
        ingredients: ['Nam Roi Pomelo Juice', 'Lotus Jasmine Green Tea', 'Organic Chia Seeds', 'Fresh Lime', 'Stevia Leaf Extract'],
        localFlavor: 'Crisp, citrus-forward thirst quencher replenishing vital hydration after 6 continuous hours in dry air conditioning.',
        tags: ['Low-GI', 'Fat Burner', 'Combo Savings 10k']
      }
    ],
    unitEconomics: {
      retailPriceRange: '39,000 – 45,000 VND (Combo with drink: 55,000 VND)',
      avgPrice: 42000,
      cogsPercentage: 31.0,
      cogsCost: 13020,
      grossMarginPercentage: 69.0,
      dailyVolumeEst: 280,
      monthlyRevenueEst: 305760000,
      monthlyGrossProfitEst: 210974000,
      breakevenDays: 35,
      capitalNeeded: '65M VND / ~$2,600 USD (Modular 5m² kiosk + high-speed wrap press + warming cabinet)'
    },
    operationalHighlights: [
      'Compact 5m² modular pop-up kiosk installed at building main lobbies or exterior plazas of SHB Hoa Binh & A-Connection 30/4.',
      'Under-60-second fulfillment: Semi-finished wraps pre-rolled at the cloud kitchen, finished on a double-sided panini grill in 45 seconds.',
      'Two peak revenue windows: Morning peak (06:45 – 08:15 AM) and Afternoon reboot (02:00 – 03:30 PM).',
      '"Anti-Boba Strategy": Positioned as a direct, healthy substitute for 55k high-sugar bubble tea orders — same price, but flat stomach and crisp focus.'
    ],
    keyMessages: [
      {
        angle: 'Afternoon Slump Destroyer',
        slogan: 'ONE-HANDED FUEL — ZERO BRAIN FOG',
        sampleCopy: 'Ditch the oily rice paper rolls and heavy milk teas. A lean beef and black pepper wrap keeps you firing on all cylinders till 5:30 PM!',
        channel: '2:00 PM flash-deal alerts on Zalo Mini-App and physical vouchers at building reception desks'
      },
      {
        angle: 'Morning Commute Speed',
        slogan: 'GRAB IN 30 SECONDS — CLOCK IN ON TIME',
        sampleCopy: 'Zero delay, zero greasy fingers, freshly grilled and ready to conquer your morning sprint.',
        channel: 'Lobby digital signage and brightly illuminated entrance LED menus'
      }
    ]
  },
  {
    id: 'bep-lanh',
    name: 'BẾP LÀNH ĐÔ THỊ',
    tagline: 'Warm Homestyle Bento — Auto Split-Bill & 100% Group Freeship',
    format: 'Office Bento & Department Group Order',
    painPointSolved: 'Addresses collective departmental lunch pooling (35% of food orders) while ending costly delivery fees, cold food, and messy bill-splitting.',
    targetSlot: 'Departmental Group Lunches (11:30 AM – 1:00 PM)',
    brandConcept: {
      name: 'Warm Community Kitchen',
      description: 'Comforting, trustworthy, and communal — evoking the fond nostalgia of a southern family meal re-engineered for corporate wellness.',
      primaryColors: [
        { name: 'Trust Blue', hex: '#1e40af', desc: 'Signifies food safety reassurance, reliability, and punctuality' },
        { name: 'Warm Wood Brown', hex: '#78350f', desc: 'Homely, comforting, and grounded in rustic Mekong hospitality' },
        { name: 'Bagasse Eco-White', hex: '#fafaf9', desc: 'Unbleached sugarcane fiber, sleek sustainable office etiquette' }
      ],
      packaging: '100% natural biodegradable 4-compartment sugarcane bagasse meal tray with microwave-safe heat retention.',
      packagingDetails: [
        '4 separated deep compartments: Complex carbs, Main lean protein, Steamed vegetables, Dipping sauce',
        '4-point interlocking clip lid prevents sauce leaks on motorcycle couriers',
        'Heavy-duty insulated kraft carrier bags preserve steam heat for up to 50 minutes',
        'Includes an itemized slip tagged with each team member’s name for effortless distribution'
      ],
      coreValues: ['Team Camaraderie', '1-Click Effortless Bill Splitting', 'Zero-Plastic Sustainability']
    },
    image: bepLanhImg,
    keyProducts: [
      {
        name: 'Grilled Basa Fillet with Wild Pepper & Steamed Veggies in Fermented Umami Dip',
        calories: 460,
        price: 45000,
        cogs: 13800,
        description: '4-compartment bento: Wild long pepper grilled river Basa, purple brown rice with lotus seeds, steamed garden greens (okra, gourd, carrots), low-salt fermented bean dip, and winter melon broth.',
        ingredients: ['Grilled Basa Fillet', 'Lotus Purple Brown Rice', 'Steamed Country Okra & Gourd', 'Reduced-Sodium Bean Dip', 'Winter Melon Clear Broth'],
        localFlavor: 'Recreates the beloved warmth of a Mekong family dinner, featuring pepper-crusted fish and fresh boiled greens dipped in savory sauce without blood pressure spikes.',
        tags: ['Mom’s Homestyle Cooking', '4-Compartment Bento', 'Group Freeship']
      },
      {
        name: 'Pan-Seared Pork Tenderloin in Fermented Soybean Glaze & Mustard Greens Broth',
        calories: 480,
        price: 46000,
        cogs: 14200,
        description: 'Succulent pork tenderloin simmered in artisanal Ben Tre fermented bean sauce, served with red brown rice, cucumber cherry salad, and hot mustard greens broth.',
        ingredients: ['Pork Tenderloin 140g', 'Artisanal Fermented Bean Glaze', 'Nang O Red Brown Rice', 'Wok-Tossed Vegetables', 'Ginger Mustard Greens Broth'],
        localFlavor: 'Deeply comforting sweet-savory soybean glaze soaked into lean pork cuts — tailored precisely to Can Tho palate preferences.',
        tags: ['Bold Mekong Hearty', 'Sustained Energy', 'High Male Preference']
      },
      {
        name: 'Coconut Flower Nectar Roast Chicken with Sweet Corn Pandan Broth',
        calories: 430,
        price: 44000,
        cogs: 13200,
        description: 'Herb-fed chicken breast roasted in organic Tra Vinh coconut flower nectar (ultra low glycemic index), baby corn & bell peppers, soft brown rice, and fragrant pandan corn soup.',
        ingredients: ['Herb Chicken Breast', 'Organic Coconut Flower Nectar', 'Baby Corn & Peppers', 'Soft Brown Rice', 'Sweet Corn Pandan Broth'],
        localFlavor: 'A delicate floral caramel aroma from coconut nectar keeps the lean chicken breast exceptionally juicy without sugar spikes.',
        tags: ['Ultra Low-GI', 'Gentle Clean Eating', 'Female Office Favorite']
      }
    ],
    unitEconomics: {
      retailPriceRange: '44,000 – 48,000 VND (Groups of 3+ enjoy 100% Freeship)',
      avgPrice: 45000,
      cogsPercentage: 30.8,
      cogsCost: 13860,
      grossMarginPercentage: 69.2,
      dailyVolumeEst: 250,
      monthlyRevenueEst: 292500000,
      monthlyGrossProfitEst: 202410000,
      breakevenDays: 40,
      capitalNeeded: '95M VND / ~$3,800 USD (Batch cooking kitchen setup + thermal transport system + group order mini-app)'
    },
    operationalHighlights: [
      'Batch production model: Departments finalize orders before 10:30 AM via a group link on Zalo Mini-App.',
      'Auto Split-Bill feature: Each colleague taps their dish, generating individualized VietQR payment codes with exact change, relieving the organizer of debt collection.',
      'Single scheduled batch delivery per building at 11:30 AM: Slashes delivery courier overhead by 80% compared to fragmented app deliveries.',
      'Unconditional 100% Freeship for orders of 3+ bentos — permanently eliminating the $0.80 delivery barrier.'
    ],
    keyMessages: [
      {
        angle: 'Departmental Camaraderie & Ease',
        slogan: 'ORDER TOGETHER — ENJOY 100% FREE DELIVERY',
        sampleCopy: 'What’s for lunch, team? 4-compartment homestyle bentos arriving steaming hot at 11:30 AM, with zero delivery fees and automatic bill splitting!',
        channel: 'Company internal Zalo groups, HR wellness partnerships, and department lunch tasting sessions'
      },
      {
        angle: 'Sustainability & Farm Traceability',
        slogan: 'FRESH FROM CAN THO FARMS — PURE NOURISHMENT AT YOUR DESK',
        sampleCopy: '100% compostable sugarcane bagasse boxes with fresh organic greens directly sourced from Phong Dien cooperatives.',
        channel: 'Packaging sleeve stories with QR codes verifying VietGAP farm certificates'
      }
    ]
  }
];

export const getBusinessModels = (lang: Language): BusinessModel[] => {
  return lang === 'en' ? BUSINESS_MODELS_EN : BUSINESS_MODELS_VI;
};

// Default fallback export
export const BUSINESS_MODELS = BUSINESS_MODELS_VI;
export const SMART_PANTRY_IMAGE = smartPantryImg;
