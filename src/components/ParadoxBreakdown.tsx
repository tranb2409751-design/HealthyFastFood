import React, { useState } from 'react';
import { 
  AlertTriangle, Flame, ShieldAlert, Heart, Briefcase, 
  UserCheck, Zap, Target
} from 'lucide-react';
import { getThreeLayersOfPain } from '../data/marketData';
import { Language, TRANSLATIONS } from '../data/translations';

interface ParadoxBreakdownProps {
  lang: Language;
}

export const ParadoxBreakdown: React.FC<ParadoxBreakdownProps> = ({ lang }) => {
  const [activeParadox, setActiveParadox] = useState<number>(0);
  const t = TRANSLATIONS[lang].paradoxSection;
  const layers = getThreeLayersOfPain(lang);

  const paradoxesVI = [
    {
      title: 'Nghịch Lý 01: Thèm Đậm Đà Miền Tây vs Sợ Béo Mỡ Bụng',
      summary: 'Khẩu vị bẩm sinh quen thuộc với vị ngọt thanh, mặn mòi, chua dịu và béo nước cốt dừa. Nhưng lối sống ngồi ghế máy lạnh 8 tiếng khiến lượng calo thừa chuyển hóa thành mỡ nội tạng.',
      conflictA: {
        label: 'Tâm lý muốn (Desire)',
        points: ['Thèm món có sốt đậm đà như kho quẹt, mắm me, tiêu lốt', 'Thèm cảm giác ấm nóng, tròn vị quen thuộc của cơm nhà Nam Bộ']
      },
      conflictB: {
        label: 'Nỗi sợ hãi (Fear)',
        points: ['Ám ảnh bụng dưới to tròn, mặc đồ công sở bị chật', 'Cảm giác dằn vặt (guilt) sau mỗi bữa cơm sườn rán ngập mỡ']
      },
      solution: 'Đổi mới công thức: Dùng đạm nạc nướng lò kết hợp nước sốt đậm đà từ gia vị tự nhiên (thốt nốt, me chín, tiêu lốt, tương hạt lên men giảm muối). Đạt trọn vẹn vị giác mà không tích mỡ!'
    },
    {
      title: 'Nghịch Lý 02: Khao Khát Sống Khỏe vs Ám Ảnh Đồ Healthy "Nhạt & Đắt"',
      summary: 'Dân văn phòng rất muốn ăn lành để bảo vệ sức khỏe, nhưng 90% thương hiệu Eat Clean hiện hữu tại Cần Thơ lại sao chép công thức ức gà luộc nhạt nhẽo với giá 55k - 79k.',
      conflictA: {
        label: 'Ý thức lý trí (Logic)',
        points: ['Hiểu rõ tác hại của dầu chiên đi chiên lại và thực phẩm bẩn', 'Muốn da đẹp, dáng thon, đường huyết ổn định']
      },
      conflictB: {
        label: 'Rào cản trải nghiệm (Reality)',
        points: ['Ức gà luộc khô khốc, xà lách nhạt thếch "khó nuốt"', 'Mức giá 60k-80k cao gấp đôi ngân sách cơm trưa 35k']
      },
      solution: 'Định vị "Healthy Đội Lốt Đậm Đà" với giá thâm nhập 42k - 48k. Dùng gạo lứt dẻo An Giang mềm mượt như xôi, xóa tan định kiến gạo lứt khô ráp.'
    },
    {
      title: 'Nghịch Lý 03: Ngại Ra Ngoài Nắng Nóng vs Ngại Phí Giao Hàng & Chờ Đợi',
      summary: 'Thời tiết Cần Thơ trưa nắng gắt 36°C làm dân công sở ngại bước chân khỏi tòa nhà. Nhưng đặt qua app thì phí ship 15k - 20k, đợi 40 phút thì hết giờ nghỉ trưa.',
      conflictA: {
        label: 'Áp lực thời gian & thời tiết',
        points: ['Giờ nghỉ trưa ngắn (60 - 90 phút), cần ngủ 25 phút', 'Nắng gắt Ninh Kiều gây mệt mỏi, mồ hôi nhễ nhại nếu đi bộ']
      },
      conflictB: {
        label: 'Bất cập khi đặt Online',
        points: ['Phí ship 15k-20k chiếm tới 40% giá trị bữa ăn', 'Giờ cao điểm shipper trễ, đồ ăn bị dập hoặc đổ sốt']
      },
      solution: 'Đưa đồ ăn vào tận văn phòng: Tủ lạnh Smart Fridge tại Pantry (lấy trong 0 giây), Kiosk sảnh trệt (cầm đi 30 giây) và Bếp Lành bento freeship nhóm.'
    }
  ];

  const paradoxesEN = [
    {
      title: 'Paradox 01: Bold Southern Craving vs Fear of Visceral Belly Fat',
      summary: 'Inherent palate DNA hardwired to sweet-savory harmony, tamarind acidity, and warm spices. However, 8 sedentary desk hours cause excess calories to turn directly into visceral abdominal fat.',
      conflictA: {
        label: 'Instinctive Craving (Desire)',
        points: ['Craves comforting, umami-rich sauces: caramelized dips, tamarind glaze, wild pepper', 'Craves warm, soul-satisfying homestyle flavors']
      },
      conflictB: {
        label: 'Subconscious Guilt (Fear)',
        points: ['Fear of lower belly protrusion in tailored office attire', 'Lingering guilt and sluggishness after greasy fried lunches']
      },
      solution: 'Culinary Innovation: Oven-roasted lean proteins matched with bold sauces crafted from natural reductions (palm sugar, wild long pepper, fermented beans with 40% reduced salt). Pure sensory indulgence with zero fat accumulation!'
    },
    {
      title: 'Paradox 02: Wellness Aspiration vs "Bland & Overpriced" Diet Stigma',
      summary: 'Corporate workers want clean eating, yet 90% of existing salad bars in Can Tho copy Western templates (plain unseasoned chicken, mayo dressings) at prohibitive prices of 55k – 79k VND ($2.50 – $3.50).',
      conflictA: {
        label: 'Rational Health Goals (Logic)',
        points: ['Cognizant of the long-term harms of recycled fryer oil', 'Desire stable energy, glowing skin, and blood sugar balance']
      },
      conflictB: {
        label: 'Experiential Friction (Reality)',
        points: ['Chalky boiled chicken breast and unflavored lettuce feel like punishment', '60k – 80k price tag is double their typical 35k lunch budget']
      },
      solution: 'Sweet-spot positioning: "Healthy Disguised as Bold Comfort" at 42k – 48k VND ($1.70 – $1.90). Soft An Giang brown rice as tender as glutinous rice, destroying the dry texture stigma.'
    },
    {
      title: 'Paradox 03: Punishing Heat Barrier vs Delivery Surcharges & Delays',
      summary: 'Intense 36°C midday sun deters employees from leaving air-conditioned towers. Yet app delivery adds 15k – 20k VND fees, and 45-minute peak delays swallow their precious nap window.',
      conflictA: {
        label: 'Climate & Time Squeeze',
        points: ['Brief 60-90 min break; desperately need 25 mins for power nap', 'Blistering Ninh Kieu sun causes sweating and afternoon exhaustion']
      },
      conflictB: {
        label: 'Third-Party App Bottlenecks',
        points: ['15k-20k delivery fee accounts for 40% of the entire meal expense', 'Spilled sauces, cold food, and couriers lost in lobbies']
      },
      solution: 'Direct embedded distribution: "Fresh Smart Fridge" in corporate pantries (0-second grab), 5m² express lobby kiosks, and scheduled group bentos with 100% free delivery.'
    }
  ];

  const paradoxes = lang === 'en' ? paradoxesEN : paradoxesVI;

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-3">
          <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
          <span>{t.tag}</span>
        </div>
        <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          {t.title}
        </h2>
        <p className="text-sm sm:text-base text-stone-600 mt-2">
          {t.subtitle}
        </p>
      </div>

      {/* The 3 Core Paradoxes Interactive Selector */}
      <div className="bg-stone-900 rounded-3xl p-6 sm:p-8 text-white border border-stone-800 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-800 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {t.selectorTitle}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              {paradoxes[activeParadox].title}
            </h3>
          </div>

          <div className="flex items-center space-x-2">
            {paradoxes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveParadox(idx)}
                className={`w-9 h-9 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                  activeParadox === idx
                    ? 'bg-amber-500 text-stone-950 ring-2 ring-amber-400'
                    : 'bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700'
                }`}
              >
                0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="py-6">
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-4xl mb-6">
            {paradoxes[activeParadox].summary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Conflict A */}
            <div className="bg-stone-800/80 rounded-2xl p-5 border border-amber-500/30">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center space-x-2">
                <Flame className="w-4 h-4 text-amber-500" />
                <span>{paradoxes[activeParadox].conflictA.label}</span>
              </div>
              <ul className="space-y-2">
                {paradoxes[activeParadox].conflictA.points.map((pt, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-stone-300 flex items-start space-x-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conflict B */}
            <div className="bg-stone-800/80 rounded-2xl p-5 border border-rose-500/30">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-3 flex items-center space-x-2">
                <ShieldAlert className="w-4 h-4 text-rose-500" />
                <span>{paradoxes[activeParadox].conflictB.label}</span>
              </div>
              <ul className="space-y-2">
                {paradoxes[activeParadox].conflictB.points.map((pt, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-stone-300 flex items-start space-x-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Strategic Resolution */}
          <div className="bg-emerald-950/80 rounded-2xl p-5 border border-emerald-600/50 flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                {t.solutionTitle}
              </div>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-medium">
                {paradoxes[activeParadox].solution}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Layers of Pain Points */}
      <div>
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
            {t.layersSub}
          </span>
          <h3 className="text-2xl font-black text-stone-900 mt-1">
            {t.layersTitle}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {layers.map((layer, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between hover:border-emerald-500 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-stone-100 text-stone-700">
                    {lang === 'en' ? `Layer 0${idx + 1}` : `Tầng 0${idx + 1}`}
                  </span>
                  <span className={`text-xs font-extrabold px-2 py-0.5 rounded-full ${
                    idx === 2 ? 'bg-rose-100 text-rose-800 border border-rose-200' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {lang === 'en' ? 'Severity:' : 'Mức độ:'} {layer.severity}
                  </span>
                </div>

                <h4 className="font-bold text-base text-stone-900 mb-4 leading-snug">
                  {layer.layer}
                </h4>

                <div className="space-y-3">
                  {layer.details.map((detail, dIdx) => (
                    <div key={dIdx} className="text-xs text-stone-600 flex items-start space-x-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] text-stone-400 font-medium">
                {lang === 'en' ? 'Validated across 450+ surveyed corporate tenants' : 'Phân tích dựa trên khảo sát thực tế tại cao ốc Ninh Kiều'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Jobs-To-Be-Done (JTBD) Framework */}
      <div className="bg-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-200">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
            <Target className="w-4 h-4" />
            <span>{t.jtbdTitle}</span>
          </div>
          <h3 className="text-2xl font-black text-stone-900">
            {lang === 'en' ? 'What Jobs Are Corporate Workers "Hiring" This Meal To Do?' : 'Khách Hàng "Thuê" Sản Phẩm Này Để Làm Gì?'}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            {t.jtbdSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Functional */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
              <Briefcase className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-stone-900 mb-2">
              {t.functionalTitle}
            </h4>
            <p className="text-xs text-stone-600 mb-3 leading-relaxed">
              {lang === 'en' ? 'Practical tasks directly solved by the product format.' : 'Những việc cụ thể, thực tế mà sản phẩm giải quyết trực tiếp cho khách hàng.'}
            </p>
            <ul className="text-xs text-stone-700 space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>{lang === 'en' ? 'Provide slow-burning complex carbs to keep brain alert 13:30 - 17:30.' : 'Nạp carbs giải phóng chậm để não tỉnh táo suốt 13:30 - 17:30.'}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>{lang === 'en' ? 'Finish meal in 10-15 mins to protect a restful 30-min nap.' : 'Ăn nhanh 10-15 phút để dành 30 phút ngủ trưa chất lượng.'}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>{lang === 'en' ? 'Effortlessly control calories (~450 kcal) without tedious tracking.' : 'Kiểm soát calo chuẩn (~450 kcal) tự động không cần cân đo.'}</span>
              </li>
            </ul>
          </div>

          {/* Emotional */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-stone-900 mb-2">
              {t.emotionalTitle}
            </h4>
            <p className="text-xs text-stone-600 mb-3 leading-relaxed">
              {lang === 'en' ? 'Desired internal psychological and emotional state.' : 'Trạng thái tinh thần và cảm xúc mà khách hàng khao khát đạt được.'}
            </p>
            <ul className="text-xs text-stone-700 space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-rose-600 font-bold">✓</span>
                <span>{lang === 'en' ? 'Guilt-free dining: zero regret over oily calories and visceral fat.' : 'Xóa bỏ cảm giác dằn vặt (guilt-free) sau bữa ăn mỡ màng.'}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-rose-600 font-bold">✓</span>
                <span>{lang === 'en' ? 'Pride in practicing mindful self-care and staying disciplined.' : 'Cảm giác tự hào vì đang làm chủ sức khỏe và chăm sóc bản thân tốt.'}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-rose-600 font-bold">✓</span>
                <span>{lang === 'en' ? 'Pure eating pleasure from beloved regional umami.' : 'Thưởng thức vị ngon đậm đà mang lại niềm vui sảng khoái giữa ngày.'}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <UserCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-stone-900 mb-2">
              {t.socialTitle}
            </h4>
            <p className="text-xs text-stone-600 mb-3 leading-relaxed">
              {lang === 'en' ? 'Public persona and peer perception within the workplace.' : 'Hình ảnh bản thân trước mắt đồng nghiệp, cấp trên và cộng đồng công sở.'}
            </p>
            <ul className="text-xs text-stone-700 space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>{lang === 'en' ? 'Projecting a sophisticated, health-conscious urban corporate identity.' : 'Khẳng định hình ảnh nhân viên hiện đại, có gu sống văn minh.'}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>{lang === 'en' ? 'Becoming the wellness champion who introduces positive trends to the team.' : 'Trở thành người khởi xướng (influencer) lối sống khỏe trong phòng ban.'}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>{lang === 'en' ? 'Strengthening departmental bonds via stress-free group dining.' : 'Gắn kết tập thể qua việc rủ rê gom đơn bữa trưa vui vẻ.'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
