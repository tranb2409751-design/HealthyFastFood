import { DailyScheduleSlot, EmpathyPoint, OfficeBuilding } from '../types';
import { Language } from './translations';

export const DEMOGRAPHICS_VI = {
  city: 'Thành phố Cần Thơ (Trọng tâm Quận Ninh Kiều)',
  ageRange: '24 – 38 tuổi (Nhóm Gen Z muộn & Millennial công sở)',
  genderSplit: { female: 62, male: 38 },
  averageIncome: '8.000.000 – 18.000.000 VNĐ/tháng',
  targetIndustries: ['Ngân hàng & Tài chính', 'Công nghệ & Viễn thông', 'Bất động sản', 'Hành chính sự nghiệp', 'Truyền thông & Agency'],
  lunchBudget: '30.000 – 40.000 VNĐ/bữa (truyền thống) vs 49.000 – 79.000 VNĐ/bữa (healthy hiện hữu)',
  sweetSpotPrice: '42.000 – 48.000 VNĐ/phần'
};

export const DEMOGRAPHICS_EN = {
  city: 'Can Tho City (Core Focus: Ninh Kieu CBD)',
  ageRange: '24 – 38 years old (Late Gen Z & Millennial corporate workforce)',
  genderSplit: { female: 62, male: 38 },
  averageIncome: '8,000,000 – 18,000,000 VND/month ($320 – $720 USD)',
  targetIndustries: ['Banking & Financial Services', 'Tech & Telecom', 'Real Estate', 'Public Administration', 'Marketing & Media Agencies'],
  lunchBudget: '30,000 – 40,000 VND (Street Food) vs 49,000 – 79,000 VND (Existing Healthy)',
  sweetSpotPrice: '42,000 – 48,000 VND / meal ($1.70 – $1.90 USD)'
};

export const DAILY_SCHEDULE_VI: DailyScheduleSlot[] = [
  {
    time: '06:30 – 07:30',
    title: 'Khởi động buổi sáng & Ăn sáng ngoài hàng quán',
    context: 'Thời tiết miền Tây nắng nóng sớm. Không có thói quen chuẩn bị đồ ăn sáng cầu kỳ ở nhà.',
    painPoint: 'Ăn vội hủ tiếu, bún riêu, bánh mì nhiều tinh bột trắng và dầu mỡ. Uống cà phê sữa đá nhiều đường.',
    opportunity: 'Kiosk Grab-and-Go ngay sảnh tòa nhà phục vụ cuộn Wrap nướng nóng 30 giây + nước ép lạnh mang lên phòng.',
    intensity: 'medium'
  },
  {
    time: '07:30 – 08:00',
    title: 'Di chuyển đến công sở & Chấm công',
    context: 'Khoảng cách di chuyển ngắn trong nội ô Ninh Kiều nhưng chịu nắng gắt và khói bụi.',
    painPoint: 'Thời gian di chuyển gấp gáp, nếu ghé quán ngồi ăn thì dễ bị trễ giờ chấm công vân tay.',
    opportunity: 'Mô hình đặt trước pick-up hoặc Kiosk sảnh trệt lấy ngay không cần đỗ xe lâu.',
    intensity: 'medium'
  },
  {
    time: '08:00 – 11:30',
    title: 'Làm việc tập trung trong phòng máy lạnh',
    context: 'Ngồi ghế xoay 3.5 tiếng liên tục, điều hòa hút ẩm gây mất nước và khô họng.',
    painPoint: 'Trao đổi chất chậm lại, xuất hiện cảm giác cồn cào thèm đồ ngọt giữa giờ.',
    opportunity: 'Nước uống detox lạnh, nước trái cây thanh nhiệt Low-GI để sẵn trong tủ lạnh Pantry.',
    intensity: 'low'
  },
  {
    time: '11:30 – 13:00',
    title: 'Bữa trưa công sở: Nghịch lý thời gian, chi phí & nắng gắt',
    context: 'Thời gian nghỉ chỉ 60 - 90 phút. Nắng trưa Cần Thơ gay gắt khiến việc ra đường ăn là cực hình.',
    painPoint: 'Ra quán thì mồ hôi nhễ nhại, đồ ăn dầu mỡ ngán ngẩm; Đặt app thì phí ship 15k-20k, chờ 35-45p, món bị nguội; Tự nấu thì mệt mỏi.',
    opportunity: 'Smart Fridge tại Pantry (lấy trong 0 giây, hâm nóng 1 phút) hoặc Bếp Lành Bento giao tận bàn freeship nhóm.',
    intensity: 'critical'
  },
  {
    time: '13:00 – 14:30',
    title: 'Nghỉ trưa chợp mắt & Bắt đầu ca làm việc buổi chiều',
    context: 'Thói quen ngủ trưa 20-30 phút ngay tại bàn làm việc hoặc phòng họp nhỏ.',
    painPoint: 'Cơm trưa nhiều tinh bột trắng khiến đường huyết tăng vọt rồi tụt dốc nhanh (Post-prandial Dip).',
    opportunity: 'Cơm gạo lứt dẻo An Giang, bún ngũ sắc và đạm nạc giúp no lâu, không bị đầy trướng bụng.',
    intensity: 'high'
  },
  {
    time: '14:30 – 15:30',
    title: 'ĐIỂM TRŨNG NĂNG LƯỢNG (Post-Prandial Crash)',
    context: 'Cơn buồn ngủ, uể oải đỉnh điểm ập đến, hiệu suất công việc tụt dốc.',
    painPoint: 'Theo phản xạ, cả phòng rủ nhau gọi trà sữa nhiều đường, bánh tráng trộn, chè ngọt để "cứu não" -> Tích mỡ bụng & cảm giác tội lỗi.',
    opportunity: 'Wrap & Run combo 14:30: Wrap bò tiêu Cần Thơ + Cold brew bưởi Năm Roi giúp tỉnh táo tức thì, 0 calo rỗng!',
    intensity: 'critical'
  },
  {
    time: '17:30 – 21:00',
    title: 'Tan sở, Thể thao & Đời sống buổi tối',
    context: '20-30% dân văn phòng trẻ Ninh Kiều đi tập gym/yoga, sau đó tụ tập bạn bè ven sông Hậu.',
    painPoint: 'Muốn duy trì vóc dáng nhưng sau bữa tối tiệc tùng lại khó kiểm soát cân nặng.',
    opportunity: 'Gói ăn tuần B2B giải phóng hoàn toàn gánh nặng tính calo ban ngày, buổi tối thoải mái hơn.',
    intensity: 'medium'
  }
];

export const DAILY_SCHEDULE_EN: DailyScheduleSlot[] = [
  {
    time: '06:30 – 07:30 AM',
    title: 'Morning Start & Rushed Street Breakfast',
    context: 'Early intense tropical morning sun. Little to no habit of elaborate home cooking on weekdays.',
    painPoint: 'Quick consumption of greasy noodles, baguettes with refined white carbs, and sugary iced condensed milk coffee.',
    opportunity: 'Express Grab-and-Go lobby kiosk offering 30-sec warm wraps + chilled antioxidant juices to take up to the desk.',
    intensity: 'medium'
  },
  {
    time: '07:30 – 08:00 AM',
    title: 'CBD Commute & Fingerprint Clock-in',
    context: 'Short transit distances across Ninh Kieu, but high exposure to humid heat and traffic fumes.',
    painPoint: 'Tight schedule; sitting down at street diners risks missing the strict fingerprint attendance cutoff.',
    opportunity: 'Mobile pre-order pick-up kiosk at the lobby threshold without parking delays.',
    intensity: 'medium'
  },
  {
    time: '08:00 – 11:30 AM',
    title: 'Deep Focused Work in Closed AC Environment',
    context: 'Sedentary work for 3.5 consecutive hours in dry air conditioning, leading to dehydration and throat dryness.',
    painPoint: 'Metabolism slows down; intense craving for mid-morning sweet drinks kicks in.',
    opportunity: 'Cold-brew herbal detox teas and Low-GI fresh juices stocked ready inside the pantry fridge.',
    intensity: 'low'
  },
  {
    time: '11:30 AM – 1:00 PM',
    title: 'The Lunch Paradox: Heat, Cost & Time Squeeze',
    context: 'Short lunch break (60 - 90 mins). 36°C tropical midday heat makes walking out of the building unbearable.',
    painPoint: 'Walking outside leads to drenching sweat and heavy grease; food apps charge $0.80 ship with 45-min delay; meal-prep fails after 1 week.',
    opportunity: 'Fresh Smart Fridge at the Pantry (grab in 0 sec, reheat in 60s) or group-delivered homestyle bentos with 100% freeship.',
    intensity: 'critical'
  },
  {
    time: '1:00 – 2:30 PM',
    title: 'Power Nap & Resuming Afternoon Shift',
    context: 'Deep-rooted office habit of a 20-30 min power nap right at the cubicle desk.',
    painPoint: 'High-glycemic white rice lunches cause rapid blood glucose surges followed by heavy digestive lethargy.',
    opportunity: 'An Giang slow-release soft brown rice and lean proteins provide sustained satiety without bloating.',
    intensity: 'high'
  },
  {
    time: '2:30 – 3:30 PM',
    title: 'THE 14:30 PM POST-PRANDIAL ENERGY CRASH',
    context: 'Severe brain fog, drooping eyelids, and slumping workplace productivity.',
    painPoint: 'Coping mechanism: Department orders high-sugar bubble tea and oily rice paper snacks to shock the brain awake -> Belly fat & guilt.',
    opportunity: 'Wrap & Run 14:30 reboot: 1-handed beef pepper wrap + Low-GI Nam Roi pomelo cold brew to restore peak mental sharpness with zero guilt!',
    intensity: 'critical'
  },
  {
    time: '5:30 – 9:00 PM',
    title: 'Clock-out, Fitness & Evening Social Life',
    context: '20-30% of young corporate staff hit gym/yoga studios before socializing at riverside cafes along the Hau River.',
    painPoint: 'Striving to maintain a toned physique, but unpredictable social dinners make daytime macro control essential.',
    opportunity: 'B2B weekly lunch subscription guarantees daytime nutritional discipline, leaving evenings stress-free.',
    intensity: 'medium'
  }
];

export const EMPATHY_MAP_VI: EmpathyPoint[] = [
  {
    category: 'Think & Feel',
    title: 'Suy nghĩ & Cảm nhận nội tâm',
    items: [
      'Ám ảnh mỡ bụng và cảm giác ì ạch vì ngồi máy lạnh 8 tiếng mỗi ngày.',
      'Sợ các bệnh chuyển hóa: gan nhiễm mỡ, trào ngược dạ dày, tiểu đường type 2.',
      'Cảm giác dằn vặt (guilt) sau mỗi lần lỡ uống ly trà sữa full topping hay ăn cơm sườn chiên ngập dầu.',
      'Xung đột nội tâm: Muốn giữ dáng thon gọn nhưng không thể từ bỏ sở thích ăn đậm đà, chua cay mặn ngọt kiểu miền Tây.'
    ],
    quote: '"Biết ăn cơm sườn trà sữa là tích mỡ bụng, nhưng trưa vừa nắng vừa lười, đồ ăn kiêng thì nhạt nhẽo như rơm rạ, nuốt không nổi!"'
  },
  {
    category: 'Hear',
    title: 'Những gì họ nghe thấy từ môi trường',
    items: [
      'Đồng nghiệp trong phòng bàn tán về các trend Eat Clean, nhịn ăn gián đoạn 16:8, review quán cơm lứt.',
      'Mạng xã hội (TikTok, group Ăn uống Cần Thơ, Hóng Hớt Cần Thơ) ngập tràn video cảnh báo dầu chiên đi chiên lại và thực phẩm bẩn.',
      'Sếp và đồng nghiệp rủ rê: "Trưa nay gom đơn gì ăn chung cho bớt tiền ship nè mọi người ơi!"',
      'Lời khuyên của bác sĩ, PT phòng gym về việc cắt giảm tinh bột trắng và đường tinh luyện.'
    ],
    quote: '"Cả phòng rủ nhau gom đơn trà sữa với bún đậu, mình không tham gia thì lạc lõng, mà tham gia thì công tập gym cả tuần đổ sông đổ biển."'
  },
  {
    category: 'See',
    title: 'Những gì họ quan sát hàng ngày',
    items: [
      'Đồng nghiệp mang theo bình nước detox chanh sả hạt chia, thử đem cơm hộp được 1 tuần rồi lại bỏ.',
      'Các quán đồ ăn healthy tại Cần Thơ đa phần nhỏ lẻ, bán giá 60k - 80k/hộp, hình ảnh đơn điệu, menu nhanh ngán.',
      'Hàng loạt banner khuyến mãi đồ chiên rán, gà rán, cơm tấm đập vào mắt trên các app Grab/Shopee.',
      'Bàn làm việc của đồng nghiệp la liệt ly nhựa, túi nilon sau mỗi giờ nghỉ trưa.'
    ],
    quote: '"Thấy quán healthy bán 65.000đ/hộp mà chỉ có ức gà luộc với xà lách nhạt thếch, nhìn là không thấy ngon miệng rồi."'
  },
  {
    category: 'Say & Do',
    title: 'Lời nói và Hành động thực tế (Nghịch lý)',
    items: [
      'Nói: "Từ tuần sau quyết tâm ăn kiêng, giảm mỡ bụng!"',
      'Làm: Đến 11:30 trưa vẫn chốt đơn cơm sườn bì chả hoặc hủ tiếu xào theo số đông.',
      'Nói: "Chiều nay kiên quyết không ăn vặt để giữ dáng."',
      'Làm: Đúng 14:30 buồn ngủ quá, nghe ai hô "trà sữa giảm 30%" là đưa tay xin 1 ly ít đường 70% đá.',
      'Chủ động tìm kiếm kiến thức dinh dưỡng nhưng thiếu tính kiên trì do đồ ăn healthy hiện tại không hợp khẩu vị bản địa.'
    ],
    quote: '"Lời hứa eat clean luôn bắt đầu vào thứ Hai và kết thúc vào trưa thứ Ba!"'
  }
];

export const EMPATHY_MAP_EN: EmpathyPoint[] = [
  {
    category: 'Think & Feel',
    title: 'Internal Thoughts & Emotions',
    items: [
      'Constant anxiety about lower belly fat and feeling sluggish after 8 sedentary hours in AC.',
      'Fear of metabolic disorders: fatty liver, acid reflux, pre-diabetes from repetitive oily meals.',
      'Recurring guilt after succumbing to high-sugar boba teas or deep-fried pork chops.',
      'Severe psychological tension: Yearning for a lean physique while refusing to surrender rich, savory Mekong comfort flavors.'
    ],
    quote: '"I know pork chops and boba cause belly fat, but midday heat is punishing, and Western salads taste like dry grass!"'
  },
  {
    category: 'Hear',
    title: 'Environmental Influences & Social Chatter',
    items: [
      'Colleagues constantly discussing Eat Clean trends, 16:8 intermittent fasting, and brown rice meal subscriptions.',
      'Local TikTok and Can Tho foodie groups sharing warnings about recycled cooking oils and unhygienic street stalls.',
      'Peer pressure: "Hey team, let’s pool orders on the app to split the $0.80 delivery charge!"',
      'Continuous gym trainer reminders to cut refined white carbs and high-fructose corn syrups.'
    ],
    quote: '"If the whole department orders bubble tea and fried rolls, opting out feels awkward; but joining ruins my entire gym week."'
  },
  {
    category: 'See',
    title: 'Daily Visual Observations',
    items: [
      'Peers bringing chia seed detox bottles, trying meal-prepping for 4 days before giving up due to morning fatigue.',
      'Existing healthy meal providers in Can Tho are tiny, charge 60k-80k VND ($2.50-$3.50), and use repetitive bland chicken breast.',
      'Inundation of fried chicken and street meal discounts across delivery app banners.',
      'Desks littered with single-use plastic cups and styrofoam boxes every afternoon.'
    ],
    quote: '"The healthy brand charges 65,000 VND for boiled chicken and unseasoned greens; it looks completely unappetizing."'
  },
  {
    category: 'Say & Do',
    title: 'Behavioral Paradox: Words vs Actions',
    items: [
      'Say: "Starting next Monday, I will strictly diet and flatten my belly!"',
      'Do: Come 11:30 AM, they still default to ordering greasy broken rice with the group.',
      'Say: "No afternoon snacks today, strictly fasting until dinner."',
      'Do: At 2:30 PM, overcome by brain fog, they jump on a discounted boba order at 70% sweetness.',
      'Actively search for diet recipes online, but fail on adherence because available healthy options reject local palate DNA.'
    ],
    quote: '"My Eat Clean resolution always begins on Monday morning and quietly dies by Tuesday noon!"'
  }
];

export const THREE_LAYERS_OF_PAIN_VI = [
  {
    layer: 'Tầng 1: Thể chất & Tinh thần (Physical & Mental Strain)',
    severity: 'Cao',
    details: [
      'Tích mỡ nội tạng & hội chứng "skinny-fat" do ngồi một chỗ 8 tiếng trong phòng kín điều hòa.',
      'Trào ngược dạ dày & khó tiêu do ăn trưa vội vàng, nhiều mỡ động vật và gia vị cay nóng kém chất lượng.',
      'Post-prandial Dip: Tụt đường huyết nghiêm trọng lúc 13:30 - 15:00 khiến đầu óc đình trệ, căng thẳng vì deadline chưa xong.'
    ]
  },
  {
    layer: 'Tầng 2: Bất cập của Giải pháp Hiện hữu (Existing Inadequacy)',
    severity: 'Nghiêm trọng',
    details: [
      'Cơm bình dân / Quán vỉa hè: Dầu chiên lại nhiều lần, nguy cơ ôi thiu do nắng nóng sông nước, vị lặp lại gây chán ngán khẩu vị (flavor fatigue).',
      'Ứng dụng giao hàng: Phí ship đắt đỏ (15k - 20k bằng nửa hộp cơm), giao trễ giờ cao điểm, đồ ăn dập nát, xì nước sốt.',
      'Tự nấu Meal-prep: Quá cực nhọc, thức dậy từ 5h sáng, tủ lạnh công ty chật chội, thực đơn cá nhân đơn điệu chỉ trụ được 1-2 tuần.'
    ]
  },
  {
    layer: 'Tầng 3: Rào cản Chuyển sang "Đồ Healthy" (Adoption Friction)',
    severity: 'Cốt lõi cản trở thị trường',
    details: [
      'Định kiến giá cả: Healthy 50k - 79k là "xa xỉ" so với mức 30k - 40k của cơm trưa truyền thống tại Cần Thơ.',
      'Xung đột khẩu vị miền Tây: Đồ ăn healthy hiện tại bê nguyên mẫu Tây/Bắc (ức gà luộc nhạt, salad béo sốt mayonnaise) - người Cần Thơ thích đậm đà, chua mặn ngọt thơm thảo mộc.',
      'Năng lượng thiếu hụt: Toàn rau mỏng dính, thiếu carbs phức hợp và đạm chất lượng, đói lả sau 2 tiếng.',
      'Rào cản phí vận chuyển: Đặt lẻ 1 hộp healthy 55k + 20k ship = 75k, vượt ngân sách hàng ngày.'
    ]
  }
];

export const THREE_LAYERS_OF_PAIN_EN = [
  {
    layer: 'Layer 1: Physical & Mental Strain',
    severity: 'High',
    details: [
      'Visceral fat accumulation and "skinny-fat" phenotype caused by 8 continuous sedentary hours in closed air-conditioned spaces.',
      'Chronic acid reflux and indigestion driven by hurried lunches laden with recycled frying oil and low-grade spices.',
      'Post-prandial glucose crash: Sudden blood sugar drop between 1:30 and 3:00 PM causing cognitive paralysis under afternoon deadlines.'
    ]
  },
  {
    layer: 'Layer 2: Failures of Existing Solutions',
    severity: 'Severe',
    details: [
      'Street diners / cheap rice stalls: Repeatedly boiled oils, high spoilage risk in tropical humidity, severe flavor fatigue.',
      'Food delivery aggregators: Exorbitant delivery fees (15k-20k VND / half the meal cost), unpredictable peak delays, crushed boxes and spilled sauce.',
      'Home meal-prepping: Exhausting 5:00 AM wake-ups, cramped communal office fridges, repetitive menus abandoned within 10 days.'
    ]
  },
  {
    layer: 'Layer 3: Adoption Barriers to "Healthy Food"',
    severity: 'Market Bottleneck',
    details: [
      'Price stigma: Existing healthy meals at 50k - 79k VND are seen as luxury splurges compared to the 30k - 40k daily norm.',
      'Palate conflict: Directly transplanting Western/Northern diet templates (plain boiled chicken, mayo dressings) clashes with southern cravings for balanced sweet-savory herbal aromatics.',
      'Nutritional insufficiency: Leafy salads lacking slow-release complex carbs result in ravenous hunger after just 2 hours.',
      'Delivery surcharge penalty: Ordering a single 55k salad + 20k delivery = 75k VND ($3.00), far beyond everyday affordability.'
    ]
  }
];

export const CAN_THO_BUILDINGS_VI: OfficeBuilding[] = [
  {
    name: 'Tòa nhà SHB Cần Thơ',
    address: 'Đại lộ Hòa Bình, P. Tân An, Q. Ninh Kiều',
    tier: 'Hạng B',
    estimatedWorkers: 950,
    companies: ['Ngân hàng SHB', 'Công ty Tài chính FE Credit', 'Bảo hiểm Manulife', 'Công ty Luật'],
    suitableModels: ['Mekong Bowl (Smart Fridge)', 'Wrap & Run (Kiosk sảnh trệt)', 'Bếp Lành (Group Order)'],
    distanceToHub: '0.6 km từ Bếp Trung Tâm Mậu Thân'
  },
  {
    name: 'A-Connection Building',
    address: 'Đường 30 Tháng 4, P. Hưng Lợi, Q. Ninh Kiều',
    tier: 'Hạng B-',
    estimatedWorkers: 780,
    companies: ['FPT Telecom', 'Trung tâm Anh ngữ ILA', 'Startup Tech', 'Sàn Bất động sản Đất Xanh'],
    suitableModels: ['Mekong Bowl (Smart Pantry)', 'Wrap & Run (Kiosk vỉa hè rộng)', 'Bếp Lành Bento'],
    distanceToHub: '1.2 km'
  },
  {
    name: 'Tòa nhà IDICO 10',
    address: 'Khu dân cư Hưng Phú / Ninh Kiều, Cần Thơ',
    tier: 'Hạng B',
    estimatedWorkers: 620,
    companies: ['Tổng công ty IDICO', 'Kiểm toán & Kế toán', 'Văn phòng Đại diện Dược phẩm'],
    suitableModels: ['Mekong Bowl (Fresh Smart Fridge)', 'Bếp Lành Đô Thị (Gom đơn phòng ban)'],
    distanceToHub: '1.8 km'
  },
  {
    name: 'Trục Thương Mại Mậu Thân - Nguyễn Văn Cừ',
    address: 'Đường Mậu Thân & Nguyễn Văn Cừ, Q. Ninh Kiều',
    tier: 'Cụm văn phòng hỗn hợp',
    estimatedWorkers: 2400,
    companies: ['Chi nhánh Ngân hàng Vietcombank, Techcombank', 'Công ty Du lịch Lữ hành', 'Văn phòng IT Outsourcing'],
    suitableModels: ['Wrap & Run Kiosk Pop-up', 'Cloud Kitchen Bán Kính 1.5km', 'Bếp Lành Bento'],
    distanceToHub: 'Tọa độ Bếp Trung Tâm Cloud Kitchen'
  }
];

export const CAN_THO_BUILDINGS_EN: OfficeBuilding[] = [
  {
    name: 'SHB Building Can Tho',
    address: 'Hoa Binh Boulevard, Tan An Ward, Ninh Kieu District',
    tier: 'Grade B Commercial Tower',
    estimatedWorkers: 950,
    companies: ['SHB Commercial Bank', 'FE Credit HQ', 'Manulife Insurance', 'Corporate Law Firms'],
    suitableModels: ['Mekong Bowl (Fresh Smart Fridge)', 'Wrap & Run (Lobby Kiosk)', 'Urban Hearth (Group Order)'],
    distanceToHub: '0.6 km from Mau Than Cloud Hub'
  },
  {
    name: 'A-Connection Building',
    address: '30 Thang 4 Street, Hung Loi Ward, Ninh Kieu District',
    tier: 'Grade B- Multi-tenant',
    estimatedWorkers: 780,
    companies: ['FPT Telecom', 'ILA Education', 'Tech Startups', 'Dat Xanh Real Estate'],
    suitableModels: ['Mekong Bowl (Smart Pantry)', 'Wrap & Run (Plaza Kiosk)', 'Urban Hearth Bento'],
    distanceToHub: '1.2 km'
  },
  {
    name: 'IDICO 10 Tower',
    address: 'Hung Phu / Ninh Kieu Corridor, Can Tho City',
    tier: 'Grade B Corporate Hub',
    estimatedWorkers: 620,
    companies: ['IDICO Corporation', 'Auditing & Accounting Firms', 'Pharma Representative Offices'],
    suitableModels: ['Mekong Bowl (Fresh Smart Fridge)', 'Urban Hearth (Department Bento)'],
    distanceToHub: '1.8 km'
  },
  {
    name: 'Mau Than & Nguyen Van Cu Commercial Artery',
    address: 'Mau Than & Nguyen Van Cu Avenues, Ninh Kieu District',
    tier: 'High-Density Mixed Corporate Strip',
    estimatedWorkers: 2400,
    companies: ['Vietcombank & Techcombank branches', 'Inbound Travel Agencies', 'Software Outsourcing Centers'],
    suitableModels: ['Wrap & Run 5m² Kiosk', 'Cloud Kitchen 1.5km Radius', 'Urban Hearth Bento'],
    distanceToHub: 'Central Location of Master Cloud Kitchen'
  }
];

export const getDemographics = (lang: Language) => lang === 'en' ? DEMOGRAPHICS_EN : DEMOGRAPHICS_VI;
export const getDailySchedule = (lang: Language) => lang === 'en' ? DAILY_SCHEDULE_EN : DAILY_SCHEDULE_VI;
export const getEmpathyMap = (lang: Language) => lang === 'en' ? EMPATHY_MAP_EN : EMPATHY_MAP_VI;
export const getThreeLayersOfPain = (lang: Language) => lang === 'en' ? THREE_LAYERS_OF_PAIN_EN : THREE_LAYERS_OF_PAIN_VI;
export const getCanThoBuildings = (lang: Language) => lang === 'en' ? CAN_THO_BUILDINGS_EN : CAN_THO_BUILDINGS_VI;

// Fallback defaults for backwards compatibility
export const DEMOGRAPHICS = DEMOGRAPHICS_VI;
export const DAILY_SCHEDULE = DAILY_SCHEDULE_VI;
export const EMPATHY_MAP = EMPATHY_MAP_VI;
export const THREE_LAYERS_OF_PAIN = THREE_LAYERS_OF_PAIN_VI;
export const CAN_THO_BUILDINGS = CAN_THO_BUILDINGS_VI;
