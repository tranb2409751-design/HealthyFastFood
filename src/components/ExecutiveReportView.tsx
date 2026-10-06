import React, { useState } from 'react';
import { 
  X, Printer, Copy, Check, FileText, Sparkles, 
  DollarSign, Award, Target
} from 'lucide-react';
import { getBusinessModels } from '../data/modelsData';
import { Language, TRANSLATIONS } from '../data/translations';

interface ExecutiveReportViewProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ExecutiveReportView: React.FC<ExecutiveReportViewProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const t = TRANSLATIONS[lang].reportModal;
  const models = getBusinessModels(lang);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const textVI = `
BÁO CÁO TÓM TẮT CHIẾN LƯỢC F&B HEALTHY FAST-FOOD TẠI TP. CẦN THƠ
1. BỐI CẢNH & NGHỊCH LÝ CÔNG SỞ NINH KIỀU:
- Thị trường mục tiêu: Nhân viên văn phòng 24 - 38 tuổi tại các cao ốc SHB Hòa Bình, A-Connection, IDICO 10.
- Nghịch lý cốt lõi: Khao khát giữ dáng, giảm mỡ bụng nhưng không chấp nhận đồ ăn kiêng nhạt nhẽo kiểu phương Tây. Sợ nắng gắt sông nước nhưng e ngại phí ship 15k-20k và thời gian chờ 40 phút.
- Triết lý đột phá: "Healthy Đội Lốt Đậm Đà" - Gạo lứt An Giang, đạm nạc nướng lò kết hợp sốt Nam Bộ (mắm me thốt nốt, tương kho quẹt, tiêu lốt).

2. 3 MÔ HÌNH KINH DOANH THỰC CHIẾN:
- Mô hình 1: MEKONG BOWL (Smart Pantry & Cloud Kitchen)
  * Nỗi đau triệt tiêu: 0 phút chờ, 0 đồng ship.
  * Concept: Mekong Modern Green (Xanh lá sen, Đỏ mắm me, Vàng thốt nốt), tô Kraft sinh học.
- Mô hình 2: WRAP & RUN (Pop-up Kiosk 5m² & Energy Dip 14:30)
  * Nỗi đau triệt tiêu: Cứu tinh sụp mí 14:30 PM & bữa sáng vội 30s.
  * Concept: Neo-Mekong Streetwise (Vàng xoài keo, Xám than đô thị), ống xé công thái học 1 tay.
- Mô hình 3: BẾP LÀNH ĐÔ THỊ (Office Bento & Group Order)
  * Nỗi đau triệt tiêu: Gom đơn phòng ban chia tiền tự động, bento bã mía 4 ngăn freeship.
  * Concept: Warm Community Kitchen (Xanh tin cẩn, Nâu gỗ ấm).

3. UNIT ECONOMICS VÀ TÀI CHÍNH:
- Giá bán thâm nhập: 42.000đ - 48.000đ.
- COGS: 30% - 32% nhờ nông sản sỉ ĐBSCL.
- Gross Margin: 68% - 70%.
- Thời gian hòa vốn: 35 - 45 ngày.
  `;

  const textEN = `
EXECUTIVE STRATEGIC BRIEFING: MEKONG HEALTHY FAST-FOOD IN CAN THO CBD
1. MARKET CONTEXT & THE "FAST-FOOD PARADOX":
- Target Market: 24 - 38 y/o corporate workforce (62% female) across Ninh Kieu CBD towers (SHB, A-Connection, IDICO).
- Core Paradox: Seeking lean body composition while rejecting bland Western diet food. Squeezed by tropical midday heat yet resistant to $0.80 app delivery fees and 45-min peak delays.
- Strategic Answer: "Healthy Disguised as Bold Comfort" — Slow-release An Giang brown rice, roasted lean proteins, and iconic Mekong glazes (tamarind palm sugar, fermented soybean umami, wild pepper).

2. 3 BATTLE-TESTED BUSINESS PLAYBOOKS:
- Model 1: MEKONG BOWL (Smart Pantry & Cloud Kitchen)
  * Solved Friction: 0-min wait, 0-fee delivery via "Fresh Smart Fridges" inside office pantries.
  * Brand Identity: Mekong Modern Green (Lotus Green, Tamarind Red, Palm Gold) in biodegradable Kraft bowls.
- Model 2: WRAP & RUN (Pop-up Kiosk 5m² & 14:30 Energy Dip)
  * Solved Friction: Eliminates 14:30 PM glucose crash and rushed morning commutes.
  * Brand Identity: Neo-Mekong Streetwise (Mango Yellow, Charcoal Grey), 1-handed ergonomic tear-off tubes.
- Model 3: BẾP LÀNH ĐÔ THỊ / URBAN HEARTH (Office Bento & Group Order)
  * Solved Friction: Group order friction resolved via Auto Split-Bill widget and 100% Freeship.
  * Brand Identity: Warm Community Kitchen (Trust Blue, Wood Brown), 4-compartment sugarcane bagasse trays.

3. UNIT ECONOMICS & FINANCIAL HIGHLIGHTS:
- Sweet-spot Retail: 42,000 – 48,000 VND ($1.70 – $1.95 USD).
- COGS: 30% – 32% through wholesale direct Mekong Delta agricultural supply chains.
- Gross Margin: 68% – 70%.
- Breakeven Timeline: 35 – 45 Days.
  `;

  const handleCopySummary = () => {
    navigator.clipboard.writeText(lang === 'en' ? textEN : textVI);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl text-stone-900 shadow-2xl overflow-hidden my-8 print:m-0 print:p-0 print:border-none print:shadow-none">
        {/* Top Header Actions */}
        <div className="flex items-center justify-between p-6 border-b border-stone-200 bg-stone-50 print:hidden">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-bold text-stone-900">
              {t.title}
            </h3>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopySummary}
              className="px-3.5 py-1.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-100 text-xs font-semibold flex items-center space-x-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? t.copiedBtn : t.copyBtn}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center space-x-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>{t.printBtn}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Report Document Content */}
        <div className="p-8 sm:p-12 space-y-8 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible">
          {/* Document Header */}
          <div className="border-b border-stone-200 pb-6 text-center">
            <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold">
              {lang === 'en'
                ? 'In-Depth Market Research & F&B Business Strategy Proposal'
                : 'Báo Cáo Nghiên Cứu Chuyên Sâu & Đề Xuất Mô Hình Kinh Doanh F&B'}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-stone-900 mt-2">
              {lang === 'en'
                ? 'MEKONG HEALTHY FAST-FOOD STRATEGY • CAN THO CITY'
                : 'CHIẾN LƯỢC F&B HEALTHY FAST-FOOD TẠI TP. CẦN THƠ'}
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              {lang === 'en'
                ? 'Core Target Area: Ninh Kieu CBD • Segment: Office Knowledge Workers'
                : 'Địa bàn trọng điểm: Quận Ninh Kiều • Đối tượng: Nhân viên văn phòng công sở'}
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-800 flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span>{lang === 'en' ? '1. Market Reality & The "Fast-Food Paradox"' : '1. Bản Thấu Cảm & Khoảng Trống Thị Trường Cần Thơ'}</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {lang === 'en'
                ? 'Can Tho City has a high concentration of knowledge workers in Ninh Kieu District. Employees aged 24-38 (62% female) face 8 sedentary hours in air conditioning, suffering from visceral belly fat, reflux, and severe 14:30 PM energy dips. Existing options are broken: cheap street food is overly greasy and monotonous, while Western-style Eat Clean salads ($2.50-$3.50) are bland and unaffordable for daily dining. Third-party app delivery surcharges further deter habitual consumption.'
                : 'Thành phố Cần Thơ có sự tập trung cao của lực lượng lao động tri thức tại Ninh Kiều (Đại lộ Hòa Bình, 30 Tháng 4). Khách hàng từ 24 - 38 tuổi (62% nữ) chịu áp lực ngồi văn phòng điều hòa 8 tiếng, đối mặt với béo bụng, trào ngược và sự sụt giảm năng lượng giờ chiều (post-prandial dip 14:30). Các giải pháp hiện hữu gặp mâu thuẫn lớn: Cơm bình dân nhiều mỡ gây ngán ngẩm; trong khi các quán Eat Clean kiểu Tây (55k - 79k) quá nhạt nhẽo và xa xỉ. Phí ship 15k - 20k qua app tiếp tục cản trở việc ăn uống thường xuyên.'}
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-800 flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'en' ? '2. Core Formula: "Healthy Disguised as Bold Comfort"' : '2. Triết Lý Cốt Lõi: "Healthy Đội Lốt Đậm Đà"'}</span>
            </h2>
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs sm:text-sm text-stone-700 leading-relaxed">
              {lang === 'en'
                ? 'Leveraging wholesale direct agricultural supply chains from the Mekong Delta (An Giang soft brown rice, Phong Dien hydroponic greens, Hau River freshwater fish) paired with lean oven-roasting and pan-searing. Crucially, the culinary formula emphasizes bold regional umami glazes: tamarind palm sugar reductions, fermented soybean dips, and wild long pepper. Calibrated precisely at ~450 kcal for sustained satiety without glucose crashes.'
                : 'Tận dụng nguồn nông sản tươi sống ĐBSCL giá sỉ (gạo lứt dẻo An Giang, rau sạch Phong Điền, tôm cá sông Tiền) kết hợp kỹ thuật nướng lò/áp chảo ít dầu mỡ, nhưng đặc biệt nhấn mạnh vào cấu trúc sốt đậm vị Nam Bộ: sốt mắm me thốt nốt, sốt kho quẹt hạt lên men, sốt tiêu đen Cần Thơ. Chuẩn định mức calo ~450 kcal giúp no êm dịu, không tăng vọt đường huyết.'}
            </div>
          </div>

          {/* Section 3: The 3 Models Comparison */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-800 flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>{lang === 'en' ? '3. Executive Summary of The 3 Business Models' : '3. Tóm Lược 3 Ý Tưởng Kinh Doanh Thực Chiến'}</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {models.map((model, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-stone-200 bg-white shadow-sm space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {lang === 'en' ? `Model 0${idx + 1}` : `Mô hình 0${idx + 1}`}
                    </span>
                    <span className="text-[10px] font-bold text-stone-500">
                      {model.unitEconomics.grossMarginPercentage}% GM
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-stone-900">{model.name}</h3>
                  <div className="text-[11px] text-stone-600 italic">{model.format}</div>
                  <div className="text-[11px] text-stone-700 pt-1 border-t border-stone-100">
                    <strong>{lang === 'en' ? 'Pain Point Solved:' : 'Nỗi đau:'}</strong> {model.painPointSolved}
                  </div>
                  <div className="text-[11px] text-stone-600">
                    <strong>{lang === 'en' ? 'Packaging:' : 'Bao bì:'}</strong> {model.brandConcept.packaging}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Unit Economics Summary */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-800 flex items-center space-x-2">
              <DollarSign className="w-4 h-4" />
              <span>{lang === 'en' ? '4. Financial Performance & Unit Economics' : '4. Hiệu Quả Tài Chính (Unit Economics)'}</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-center">
                <span className="text-[10px] text-stone-500 block uppercase font-bold">{lang === 'en' ? 'Penetration Price' : 'Giá Bán Thâm Nhập'}</span>
                <span className="text-base font-black text-stone-900">42k – 48k</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-center">
                <span className="text-[10px] text-stone-500 block uppercase font-bold">{lang === 'en' ? 'Wholesale COGS' : 'COGS Nông Sản Sỉ'}</span>
                <span className="text-base font-black text-emerald-700">30% – 32%</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-center">
                <span className="text-[10px] text-stone-500 block uppercase font-bold">{lang === 'en' ? 'Gross Margin' : 'Biên Lợi Nhuận Gộp'}</span>
                <span className="text-base font-black text-amber-700">68% – 70%</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-center">
                <span className="text-[10px] text-stone-500 block uppercase font-bold">{lang === 'en' ? 'Breakeven Speed' : 'Thời Gian Hòa Vốn'}</span>
                <span className="text-base font-black text-blue-700">{lang === 'en' ? '35 – 45 Days' : '35 – 45 Ngày'}</span>
              </div>
            </div>
          </div>

          {/* Section 5: Strategic Recommendations */}
          <div className="space-y-3 pt-4 border-t border-stone-200">
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-800">
              {lang === 'en' ? '5. Three Key Strategic Recommendations' : '5. Ba Khuyến Nghị Chiến Lược Thực Thi'}
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-stone-700">
              <li>
                <strong>{lang === 'en' ? 'Hyper-Localized R&D Strategy:' : 'Tối ưu hóa R&D theo hướng Địa phương hóa:'}</strong>{' '}
                {lang === 'en'
                  ? 'Maintain strict macro targets (~450 kcal) while tuning sauces to authentic southern balance (tangy-sweet-savory herbal warmth). Rotate menus bi-weekly to prevent flavor fatigue.'
                  : 'Giữ vững nguyên tắc calo chuẩn nhưng gia giảm nước sốt theo đúng khẩu vị mặn ngọt chua thảo mộc miền Tây. Đổi món định kỳ 2 tuần/lần để tránh chán ngán.'}
              </li>
              <li>
                <strong>{lang === 'en' ? 'Double Down on B2B Corporate Subscriptions:' : 'Tập trung Kênh B2B Corporate Subscription:'}</strong>{' '}
                {lang === 'en'
                  ? 'Instead of burning budgets on delivery app discount wars, deploy Smart Fridges in SHB, IDICO pantries and lobby kiosks to lock in prepaid revenue and 100% customer retention.'
                  : 'Thay vì đốt tiền khuyến mãi trên app, đặt tủ lạnh thông minh Smart Fridge tại pantry SHB, IDICO hoặc kiosk 5m² sảnh trệt để tạo dòng tiền ổn định và giữ 100% khách hàng trung thành.'}
              </li>
              <li>
                <strong>{lang === 'en' ? 'Short-Chain Local Agricultural Partnerships:' : 'Xây dựng Chuỗi Cung Ứng Nông Sản Địa Phương Ngắn:'}</strong>{' '}
                {lang === 'en'
                  ? 'Contract directly with cooperatives in Phong Dien and Hau Giang to lock in low COGS while articulating an inspiring ESG brand narrative of local grower empowerment.'
                  : 'Ký hợp đồng trực tiếp với HTX Phong Điền, Hậu Giang để kiểm soát giá vốn và kể câu chuyện thương hiệu xanh bền vững.'}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
