export type Language = 'en' | 'vi';

export interface LocalizedContent {
  meta: {
    title: string;
    subtitle: string;
    cityTag: string;
    liveDemoBtn: string;
    executiveReportBtn: string;
    switchLang: string;
  };
  nav: {
    models: { label: string; badge: string };
    paradox: { label: string; badge: string };
    journey: { label: string; badge: string };
    menu: { label: string; badge: string };
    finance: { label: string; badge: string };
    locations: { label: string; badge: string };
  };
  hero: {
    tag: string;
    titleMain: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    statPenetration: { label: string; value: string; desc: string };
    statWaitTime: { label: string; value: string; desc: string };
    statMargin: { label: string; value: string; desc: string };
    statCalories: { label: string; value: string; desc: string };
    quickJumpTitle: string;
  };
  modelsSection: {
    badge: string;
    packagingLabel: string;
    painPointLabel: string;
    paletteLabel: string;
    liveDemoBtn: string;
    tabs: {
      overview: string;
      packaging: string;
      menu: string;
      operations: string;
      marketing: string;
    };
    comparisonTitle: string;
    comparisonSub: string;
    criteriaCol: string;
  };
  paradoxSection: {
    tag: string;
    title: string;
    subtitle: string;
    selectorTitle: string;
    conflictDesire: string;
    conflictFear: string;
    solutionTitle: string;
    layersTitle: string;
    layersSub: string;
    jtbdTitle: string;
    jtbdSub: string;
    functionalTitle: string;
    emotionalTitle: string;
    socialTitle: string;
  };
  journeySection: {
    tagDemographics: string;
    titleDemographics: string;
    subDemographics: string;
    tagTimeline: string;
    titleTimeline: string;
    subTimeline: string;
    tagEmpathy: string;
    titleEmpathy: string;
    subEmpathy: string;
  };
  menuSection: {
    tag: string;
    title: string;
    subtitle: string;
    h2hTitle: string;
    oldHabit: string;
    newHabit: string;
    filterAll: string;
    filterCalo: string;
    filterProtein: string;
    filterDip: string;
    filterHeat: string;
  };
  financeSection: {
    tag: string;
    title: string;
    subtitle: string;
    variablesTitle: string;
    restoreDefaults: string;
    priceLabel: string;
    volumeLabel: string;
    cogsLabel: string;
    opexTitle: string;
    rentLabel: string;
    laborLabel: string;
    utilitiesLabel: string;
    resultsTitle: string;
    monthlyRevenue: string;
    grossProfit: string;
    netProfit: string;
    breakeven: string;
    insightTitle: string;
    insightText: string;
  };
  locationsSection: {
    tag: string;
    title: string;
    subtitle: string;
    listTitle: string;
    workersUnit: string;
    companiesLabel: string;
    bestModelLabel: string;
    radiusTitle: string;
  };
  demoModal: {
    title: string;
    subtitle: string;
    closeBtn: string;
    model1Title: string;
    model1Sub: string;
    model2Title: string;
    model2Sub: string;
    model3Title: string;
    model3Sub: string;
  };
  reportModal: {
    title: string;
    copyBtn: string;
    copiedBtn: string;
    printBtn: string;
  };
}

export const TRANSLATIONS: Record<Language, LocalizedContent> = {
  en: {
    meta: {
      title: 'MEKONG HEALTHY F&B',
      subtitle: 'Healthy Fast-Food Strategy & Tactical Playbooks for Can Tho Office Workers',
      cityTag: 'Can Tho Office Market',
      liveDemoBtn: 'Interactive Live Demo',
      executiveReportBtn: 'Executive Summary Briefing',
      switchLang: 'Tiếng Việt'
    },
    nav: {
      models: { label: '3 Business Models', badge: 'Playbooks' },
      paradox: { label: 'Paradox & Pain Points', badge: 'Deep Dive' },
      journey: { label: '24h Journey & Empathy', badge: 'Customer Map' },
      menu: { label: 'Sensory Menu (~450 kcal)', badge: 'Nutrition' },
      finance: { label: 'Unit Economics & ROI', badge: 'Financials' },
      locations: { label: 'Ninh Kieu Hotspots', badge: 'Locations' }
    },
    hero: {
      tag: 'Strategic F&B Breakthrough • Can Tho CBD Field Study',
      titleMain: 'Deconstructing the',
      titleHighlight: '"Fast-Food Paradox"',
      titleEnd: '& 3 Battle-Tested Business Models',
      description: 'Can Tho office professionals crave health and lean bodies, yet reject bland Western diet food. The breakthrough formula "Healthy Disguised as Bold Comfort" blends fresh Mekong Delta farm produce with iconic southern glazes (tamarind palm sugar, fermented umami dip, wild long pepper) to deliver sustained energy, zero belly fat, and zero delivery friction.',
      statPenetration: { label: 'Sweet-Spot Price', value: '42k – 48k VND', desc: '~ $1.70 - $1.90 USD / portion' },
      statWaitTime: { label: 'Wait Time', value: '0 Minutes Wait', desc: 'Smart Fridge & 5m² Express Kiosk' },
      statMargin: { label: 'Gross Margin', value: '68% – 70%', desc: '30% COGS via wholesale Mekong sourcing' },
      statCalories: { label: 'Caloric Precision', value: '~450 kcal', desc: 'Eliminates 14:30 PM post-lunch slump' },
      quickJumpTitle: 'Explore The 3 Tailored Business Models:'
    },
    modelsSection: {
      badge: 'Model',
      packagingLabel: 'Packaging',
      painPointLabel: 'Pain Point Radically Eliminated:',
      paletteLabel: 'Brand Identity Color System',
      liveDemoBtn: 'Run Interactive Simulation for',
      tabs: {
        overview: 'Overview & Unit Economics',
        packaging: 'Packaging & Visual Concept',
        menu: 'Menu & Caloric Balance (~450 kcal)',
        operations: 'Operations & Supply Chain',
        marketing: 'Marketing Angles & Slogans'
      },
      comparisonTitle: 'Comparative Model Matrix',
      comparisonSub: 'Side-by-side strategic breakdown of operations, unit economics, and targeted customer touchpoints',
      criteriaCol: 'Evaluation Criteria'
    },
    paradoxSection: {
      tag: 'Behavioral Psychology & Customer Research',
      title: 'The Fast-Food Paradox & 3 Layers of Office Friction',
      subtitle: 'Why conventional "Eat Clean" salad bars struggle in Can Tho, and how to capture the hidden market gap.',
      selectorTitle: 'Examining The 3 Core Psychological Dilemmas:',
      conflictDesire: 'Instinctive Desire',
      conflictFear: 'Subconscious Fear',
      solutionTitle: 'The Strategic Breakthrough Pivot:',
      layersTitle: '3 Layers of Customer Pain & Behavioral Friction',
      layersSub: 'Root-cause analysis based on office workers surveyed in Ninh Kieu District',
      jtbdTitle: 'Jobs-To-Be-Done (JTBD) Framework',
      jtbdSub: 'What do office workers actually "hire" this meal to accomplish in corporate life?',
      functionalTitle: 'Functional Jobs',
      emotionalTitle: 'Emotional Jobs',
      socialTitle: 'Social & Identity Jobs'
    },
    journeySection: {
      tagDemographics: 'Target Demographic Profile',
      titleDemographics: 'Ninh Kieu Central CBD Office Workforce, Can Tho City',
      subDemographics: 'Concentrated in Grade B/C office towers (SHB, A-Connection, IDICO) and Hoa Binh - 30/4 corridors.',
      tagTimeline: '24-Hour Lifestyle Timeline',
      titleTimeline: 'Daily Schedule & Chronological Pain Points',
      subTimeline: 'Click each time slot to uncover consumer behavior drivers and commercial opportunities.',
      tagEmpathy: 'Customer Empathy Mapping',
      titleEmpathy: 'Empathy Map: Hearing The Real Voice of Corporate Workers',
      subEmpathy: 'Authentic qualitative findings: What they think, hear, see, and do behind the office glass.'
    },
    menuSection: {
      tag: 'Indigenous Culinary Science',
      title: '"Healthy Disguised as Bold Comfort" (~450 kcal)',
      subtitle: 'Shattering the myth of bland diet food. Combining lean cooking methods (roasting, pan-searing, steaming) with rich Mekong signature sauces crafted from unrefined local spices.',
      h2hTitle: 'Head-to-Head Nutritional Comparison',
      oldHabit: 'Traditional Street Lunch (55% Share)',
      newHabit: 'Mekong Healthy Alternative',
      filterAll: 'All Dishes',
      filterCalo: 'Strict ~450 kcal',
      filterProtein: 'High Lean Protein',
      filterDip: '14:30 Rescue Combo',
      filterHeat: 'Tropical Heat Relief'
    },
    financeSection: {
      tag: 'Battle-Tested Unit Economics',
      title: 'Interactive Cashflow & Breakeven Calculator',
      subtitle: 'Fine-tune variables to stress-test financial resilience, 69% gross margins, and return on capital.',
      variablesTitle: 'Operational Assumptions (26 corporate workdays/month)',
      restoreDefaults: 'Reset to Defaults',
      priceLabel: 'Average Retail Price (VND/portion)',
      volumeLabel: 'Daily Sales Volume (portions/day)',
      cogsLabel: 'Food Cost Percentage (COGS %)',
      opexTitle: 'Fixed Monthly Operating Expenses (OpEx):',
      rentLabel: 'Kiosk / Kitchen / Pantry Space Rent',
      laborLabel: 'Operating Staff Salaries',
      utilitiesLabel: 'Eco Packaging, Utilities & Sundry',
      resultsTitle: 'Financial Projections Dashboard',
      monthlyRevenue: 'Monthly Revenue',
      grossProfit: 'Gross Margin',
      netProfit: 'Net Profit',
      breakeven: 'Breakeven Period',
      insightTitle: 'Direct Distribution Advantage (B2B Corporate Pantry vs Third-Party App):',
      insightText: 'Third-party delivery aggregators (Grab/Shopee) charge 25-30% commissions plus 15k-20k delivery fees. By placing Smart Fridges directly into corporate pantries or 5m² express kiosks, you retain a 68-70% gross margin while passing zero delivery cost to the consumer!'
    },
    locationsSection: {
      tag: 'Ninh Kieu Office Concentration Map',
      title: 'Key Office Clusters & Delivery Catchment Area',
      subtitle: 'Ninh Kieu features the highest density of white-collar knowledge workers in the Mekong Delta. A single centralized cloud kitchen covers 90% of office towers within a 1.5km (6-minute) radius.',
      listTitle: '4 Core Office Towers & Commercial Corridors:',
      workersUnit: 'workers',
      companiesLabel: 'Representative Corporate Tenants:',
      bestModelLabel: 'Optimal F&B Model Match:',
      radiusTitle: 'Proximity to Central Cloud Kitchen Hub:'
    },
    demoModal: {
      title: 'Interactive Live Prototype Simulator',
      subtitle: 'Experience real customer journeys for each innovative business format',
      closeBtn: 'Close Simulator',
      model1Title: '01. Mekong Bowl',
      model1Sub: 'Smart Pantry Fridge',
      model2Title: '02. Wrap & Run',
      model2Sub: '14:30 PM Energy Boost',
      model3Title: '03. Urban Hearth Bento',
      model3Sub: 'Group Order & Auto Split-Bill'
    },
    reportModal: {
      title: 'Executive Strategic Briefing (C-Suite Summary)',
      copyBtn: 'Copy Briefing',
      copiedBtn: 'Copied!',
      printBtn: 'Print Report'
    }
  },
  vi: {
    meta: {
      title: 'MEKONG HEALTHY F&B',
      subtitle: 'Chiến Lược Thức Ăn Nhanh Sức Khỏe Cho Dân Công Sở Ninh Kiều Cần Thơ',
      cityTag: 'Thị Trường Công Sở Cần Thơ',
      liveDemoBtn: 'Trải Nghiệm Live Demo',
      executiveReportBtn: 'Báo Cáo Tóm Tắt (Executive)',
      switchLang: 'English'
    },
    nav: {
      models: { label: '3 Mô Hình Thực Chiến', badge: 'Concepts' },
      paradox: { label: 'Nghịch Lý & Nỗi Đau', badge: 'Research' },
      journey: { label: 'Hành Trình & Thấu Cảm', badge: '24h Map' },
      menu: { label: 'Menu Đậm Đà ~450 kcal', badge: 'Sensory' },
      finance: { label: 'Tài Chính & Unit Economics', badge: 'ROI Calc' },
      locations: { label: 'Điểm Nóng Ninh Kiều', badge: 'Hotspots' }
    },
    hero: {
      tag: 'Chiến Lược F&B Đột Phá • Khảo Sát Ninh Kiều Cần Thơ',
      titleMain: 'Giải Mã',
      titleHighlight: '"Nghịch Lý Thức Ăn Nhanh"',
      titleEnd: '& 3 Ý Tưởng Kinh Doanh Thực Chiến',
      description: 'Dân văn phòng Cần Thơ khao khát khỏe đẹp nhưng không thể ăn đồ kiêng nhạt nhẽo kiểu Tây. Triết lý độc bản "Healthy Đội Lốt Đậm Đà" kết hợp nông sản ĐBSCL tươi sống với sốt truyền thống miền Tây (mắm me thốt nốt, kho quẹt hạt lên men, tiêu lốt) giúp no lâu, giữ dáng và triệt tiêu phí ship 20.000đ.',
      statPenetration: { label: 'Giá Thâm Nhập', value: '42k – 48k VNĐ', desc: 'Tiệm cận ngân sách cơm trưa' },
      statWaitTime: { label: 'Thời Gian Chờ', value: '0 Phút Chờ', desc: 'Smart Fridge & Kiosk 5m²' },
      statMargin: { label: 'Biên Lợi Nhuận Gộp', value: '68% – 70%', desc: 'COGS chỉ 30% nhờ nông sản sỉ ĐBSCL' },
      statCalories: { label: 'Năng Lượng Chuẩn', value: '~450 kcal', desc: 'Xóa sổ cơn buồn ngủ 14:30' },
      quickJumpTitle: 'Khám Phá Nhanh 3 Mô Hình Được Đo Ni Đóng Giày:'
    },
    modelsSection: {
      badge: 'Mô hình',
      packagingLabel: 'Bao bì',
      painPointLabel: 'Giải Quyết Triệt Để Nỗi Đau:',
      paletteLabel: 'Bản Sắc Màu Sắc Thương Hiệu',
      liveDemoBtn: 'Trải Nghiệm Mô Phỏng',
      tabs: {
        overview: 'Tổng Quan & Giá Trị',
        packaging: 'Bao Bì & Concept Thị Giác',
        menu: 'Thực Đơn & Dinh Dưỡng (~450 kcal)',
        operations: 'Quy Trình Vận Hành Thực Chiến',
        marketing: 'Thông Điệp & Slogan Truyền Thông'
      },
      comparisonTitle: 'So Sánh Ma Trận 3 Mô Hình Kinh Doanh',
      comparisonSub: 'Bảng đối chiếu trực quan về vận hành, tài chính và phân khúc khách hàng',
      criteriaCol: 'Tiêu Chí Đánh Giá'
    },
    paradoxSection: {
      tag: 'Bản Phân Tích Chuyên Sâu Hành Vi Khách Hàng',
      title: 'Nghịch Lý Thức Ăn Nhanh & 3 Tầng Nỗi Đau Công Sở Cần Thơ',
      subtitle: 'Vì sao các thương hiệu Eat Clean thông thường thất bại tại Cần Thơ? Khám phá mâu thuẫn sâu kín giữa thói quen ẩm thực sông nước và lối sống hiện đại.',
      selectorTitle: 'Mổ xẻ 3 Mâu Thuẫn Tâm Lý Cốt Lõi:',
      conflictDesire: 'Tâm lý muốn (Desire)',
      conflictFear: 'Nỗi sợ hãi (Fear)',
      solutionTitle: 'Giải Pháp Đột Phá Khai Thác Khoảng Trống:',
      layersTitle: '3 Tầng Nỗi Đau & Rào Cản Hành Vi Của Khách Hàng',
      layersSub: 'Hệ thống phân tích dựa trên khảo sát thực tế tại cao ốc Ninh Kiều',
      jtbdTitle: 'Khung Nhiệm Vụ Khách Hàng Cần Hoàn Thành (JTBD)',
      jtbdSub: 'Khách hàng thực sự "thuê" bữa ăn này để làm gì trong môi trường công sở?',
      functionalTitle: 'Nhiệm Vụ Chức Năng',
      emotionalTitle: 'Nhiệm Vụ Cảm Xúc',
      socialTitle: 'Nhiệm Vụ Thể Hiện Bản Thân & Xã Hội'
    },
    journeySection: {
      tagDemographics: 'Chân Dung Nhân Khẩu Học Mục Tiêu',
      titleDemographics: 'Dân Văn Phòng Trung Tâm Quận Ninh Kiều, TP. Cần Thơ',
      subDemographics: 'Khảo sát tập trung tại các cao ốc Hạng B/C (SHB, IDICO, A-Connection) và trục tài chính Hòa Bình - 30/4.',
      tagTimeline: 'Dòng Thời Gian Sinh Hoạt Công Sở',
      titleTimeline: 'Hành Trình 24 Giờ & Các "Điểm Đau" Theo Khung Giờ',
      subTimeline: 'Bấm chọn từng khung giờ để thấy khoảnh khắc quyết định hành vi tiêu dùng và cơ hội kinh doanh.',
      tagEmpathy: 'Thấu Cảm Tâm Lý Khách Hàng (Empathy Map)',
      titleEmpathy: 'Bản Đồ Thấu Cảm Dân Công Sở Ninh Kiều',
      subEmpathy: 'Lắng nghe tiếng nói thật từ phòng máy lạnh: Những điều họ nghĩ, nghe, thấy và làm mỗi ngày.'
    },
    menuSection: {
      tag: 'Triết Lý Ẩm Thực Bản Địa Đột Phá',
      title: '"Healthy Đội Lốt Đậm Đà" (~450 kcal)',
      subtitle: 'Đập tan định kiến đồ ăn kiêng nhạt nhẽo. Sự kết hợp hoàn hảo giữa kỹ thuật chế biến lành mạnh và cấu trúc sốt đậm vị Nam Bộ từ gia vị tự nhiên ĐBSCL.',
      h2hTitle: 'Phân Tích Đối Đầu Trực Diện (Head-to-Head)',
      oldHabit: 'Thói Quen Cũ (55% Lựa Chọn)',
      newHabit: 'Giải Pháp Đột Phá Mekong',
      filterAll: 'Tất Cả Món',
      filterCalo: 'Chuẩn 450 kcal',
      filterProtein: 'Giàu Đạm Nạc',
      filterDip: 'Cứu Tinh 14:30',
      filterHeat: 'Giải Nhiệt Cần Thơ'
    },
    financeSection: {
      tag: 'Mô Phỏng Tài Chính Thực Chiến (Unit Economics)',
      title: 'Bộ Tính Toán Dòng Tiền & Điểm Hòa Vốn',
      subtitle: 'Tùy chỉnh các biến số để kiểm tra sức khỏe tài chính và biên lợi nhuận gộp 69% của từng mô hình.',
      variablesTitle: 'Các Biến Số Hoạt Động (26 ngày công sở/tháng)',
      restoreDefaults: 'Khôi phục mặc định',
      priceLabel: 'Giá Bán Lẻ Bình Quân (VNĐ/phần)',
      volumeLabel: 'Sản Lượng Bán Hàng Ngày (suất/ngày)',
      cogsLabel: 'Tỷ Lệ Giá Vốn Thực Phẩm (COGS %)',
      opexTitle: 'Chi Phí Cố Định Hàng Tháng (OpEx):',
      rentLabel: 'Thuê Mặt Bằng / Kiosk / Pantry',
      laborLabel: 'Lương Nhân Sự Vận Hành',
      utilitiesLabel: 'Bao Bì Sinh Học, Điện Nước & Khác',
      resultsTitle: 'Bảng Kết Quả Dự Báo Kinh Doanh',
      monthlyRevenue: 'Doanh Thu Tháng',
      grossProfit: 'Lợi Nhuận Gộp',
      netProfit: 'Lợi Nhuận Ròng',
      breakeven: 'Thời Gian Hoàn Vốn',
      insightTitle: 'Lợi Thế Kênh Phân Phối Trực Tiếp (B2B Pantry / Kiosk):',
      insightText: 'Nếu bán qua app giao hàng thông thường (Grab/Shopee), bạn bị cắt 25% chiết khấu và khách hàng phải trả thêm 15k-20k phí ship. Bằng cách đặt Smart Fridge trực tiếp tại Pantry hoặc Kiosk 5m², mô hình giữ lại trọn vẹn 68-70% biên lợi nhuận gộp!'
    },
    locationsSection: {
      tag: 'Bản Đồ Mật Độ Văn Phòng Ninh Kiều',
      title: 'Cụm Điểm Nóng & Bán Kính Phân Phối',
      subtitle: 'Quận Ninh Kiều có mật độ cao ốc tập trung cao nhất ĐBSCL. Bán kính giao hàng chỉ 1.5km từ Cloud Kitchen trung tâm giúp tối ưu 100% thời gian.',
      listTitle: 'Danh Sách 4 Cụm Tòa Nhà & Trục Trọng Điểm:',
      workersUnit: 'nhân sự',
      companiesLabel: 'Các Doanh Nghiệp Tiêu Biểu Đang Thuê:',
      bestModelLabel: 'Mô Hình F&B Phù Hợp Nhất:',
      radiusTitle: 'Khoảng Cách Đến Bếp Trung Tâm Cloud Kitchen:'
    },
    demoModal: {
      title: 'Live Prototype Simulator',
      subtitle: 'Trải nghiệm thực tế hành trình khách hàng của từng mô hình kinh doanh',
      closeBtn: 'Đóng Trình Mô Phỏng',
      model1Title: '01. Mekong Bowl',
      model1Sub: 'Tủ Lạnh Smart Pantry',
      model2Title: '02. Wrap & Run',
      model2Sub: 'Cứu Tinh Giờ Chiều 14:30',
      model3Title: '03. Bếp Lành Đô Thị',
      model3Sub: 'Gom Đơn & Chia Tiền Nhóm'
    },
    reportModal: {
      title: 'Báo Cáo Tóm Tắt Chiến Lược Dành Cho Ban Giám Đốc (Executive Summary)',
      copyBtn: 'Sao Chép Tóm Tắt',
      copiedBtn: 'Đã Sao Chép',
      printBtn: 'In Báo Cáo'
    }
  }
};
