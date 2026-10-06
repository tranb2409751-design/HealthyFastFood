import React, { useState } from 'react';
import { 
  UtensilsCrossed, Check, X, Sparkles
} from 'lucide-react';
import { getBusinessModels } from '../data/modelsData';
import { Language, TRANSLATIONS } from '../data/translations';

interface MenuSensoryMatrixProps {
  lang: Language;
}

export const MenuSensoryMatrix: React.FC<MenuSensoryMatrixProps> = ({ lang }) => {
  const [filterTag, setFilterTag] = useState<string>('all');
  const t = TRANSLATIONS[lang].menuSection;
  const models = getBusinessModels(lang);

  // Flatten all products across the 3 models
  const allDishes = models.flatMap(m => 
    m.keyProducts.map(p => ({ ...p, modelName: m.name, modelId: m.id }))
  );

  const filterMap = [
    { id: 'all', label: t.filterAll },
    { id: '450', label: t.filterCalo },
    { id: 'protein', label: t.filterProtein },
    { id: '14:30', label: t.filterDip },
    { id: 'nhiệt', label: t.filterHeat }
  ];

  const filteredDishes = filterTag === 'all' 
    ? allDishes 
    : allDishes.filter(d => 
        d.tags.some(t => t.toLowerCase().includes(filterTag.toLowerCase())) ||
        (filterTag === '450' && d.calories <= 450) ||
        (filterTag === 'protein' && (d.tags.some(t => t.toLowerCase().includes('protein')) || d.tags.some(t => t.toLowerCase().includes('đạm'))))
      );

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
          <UtensilsCrossed className="w-3.5 h-3.5" />
          <span>{t.tag}</span>
        </div>
        <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          {t.title}
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Head-to-Head Comparison: Traditional vs Mekong Healthy Fast-Food */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
            {lang === 'en' ? 'Direct Nutritional Benchmark' : 'Phân Tích Đối Đầu Trực Diện (Head-to-Head)'}
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
            {lang === 'en' ? 'Traditional Street Rice vs Mekong Healthy Bowl' : 'Cơm Trưa Bình Dân Truyền Thống vs Mekong Healthy Bowl'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional Bad Lunch */}
          <div className="bg-rose-50/70 rounded-2xl p-6 border border-rose-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-rose-200 text-rose-800">
                {t.oldHabit}
              </span>
              <span className="text-sm font-black text-rose-700">~850 – 950 kcal</span>
            </div>

            <h4 className="font-extrabold text-lg text-rose-950 mb-2">
              {lang === 'en' ? 'Fried Broken Rice Pork Chop & Oily Street Bowls' : 'Cơm Tấm Sườn Mỡ / Bún Thịt Nướng Ngập Dầu'}
            </h4>

            <ul className="space-y-2.5 text-xs text-rose-900 mb-6">
              <li className="flex items-start space-x-2">
                <X className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>{lang === 'en' ? 'Recycled Frying Oil:' : 'Dầu chiên nhiều lần:'}</strong>{' '}
                  {lang === 'en' ? 'Loaded with trans-fats and inflammatory lipids that strain the liver.' : 'Chứa chất béo chuyển hóa gây mệt tim mạch và gan nhiễm mỡ.'}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <X className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>{lang === 'en' ? 'High-GI Refined Carbs:' : 'Tinh bột hấp thu nhanh (High-GI):'}</strong>{' '}
                  {lang === 'en' ? 'Drives massive insulin spikes followed by heavy 2:00 PM brain fog.' : 'Khiến đường huyết tăng vọt, gây buồn ngủ rũ rượi lúc 14:00.'}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <X className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>{lang === 'en' ? 'Scarcity of Clean Veggies:' : 'Thiếu hụt rau xanh sạch:'}</strong>{' '}
                  {lang === 'en' ? 'Only a few wilted pickled slices; zero meaningful dietary fiber.' : 'Chỉ có vài cọng đồ chua hoặc dưa leo héo, thiếu vi chất.'}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <X className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>{lang === 'en' ? 'Outcome:' : 'Hậu quả:'}</strong>{' '}
                  {lang === 'en' ? 'Visceral abdominal obesity, heavy bloating, and afternoon fatigue.' : 'Tích mỡ bụng, ậm ạch khó tiêu, mất tập trung suốt ca chiều.'}
                </span>
              </li>
            </ul>

            <div className="bg-rose-100/80 p-3 rounded-xl text-[11px] text-rose-900 font-medium">
              ⚠️ {lang === 'en' ? 'Causes severe post-lunch glucose slump, forcing a 55k boba tea panic order.' : 'Gây ra hiện tượng "Post-prandial crash" (sụp mí giờ chiều) phải cứu bằng trà sữa 50k.'}
            </div>
          </div>

          {/* Mekong Bowl Solution */}
          <div className="bg-emerald-50/80 rounded-2xl p-6 border border-emerald-300 ring-2 ring-emerald-500/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-600 text-white">
                {t.newHabit}
              </span>
              <span className="text-sm font-black text-emerald-800">~450 kcal</span>
            </div>

            <h4 className="font-extrabold text-lg text-emerald-950 mb-2">
              {lang === 'en' ? 'Mekong Bowl: Roast Chicken with Tamarind Palm Glaze' : 'Mekong Bowl Gà Nướng Sốt Mắm Me Thốt Nốt'}
            </h4>

            <ul className="space-y-2.5 text-xs text-emerald-900 mb-6">
              <li className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 font-bold" />
                <span>
                  <strong>{lang === 'en' ? 'An Giang Soft Brown Rice:' : 'Gạo lứt dẻo An Giang:'}</strong>{' '}
                  {lang === 'en' ? 'Complex slow-release carbohydrates ensuring 5 continuous hours of satiety.' : 'Carbs phức hợp giải phóng chậm, no êm dịu 5 tiếng liên tục.'}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 font-bold" />
                <span>
                  <strong>{lang === 'en' ? 'Tamarind Palm Sugar Reduction:' : 'Sốt Mắm Me Thốt Nốt tự nhiên:'}</strong>{' '}
                  {lang === 'en' ? 'Explosive sweet-sour umami crafted from unrefined palm nectar, zero chemicals.' : 'Vị chua ngọt mặn mòi bùng nổ mà không cần đường hóa học.'}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 font-bold" />
                <span>
                  <strong>{lang === 'en' ? 'Lean High-Grade Protein:' : 'Đạm nạc chất lượng cao:'}</strong>{' '}
                  {lang === 'en' ? '150g oven-roasted chicken breast; succulent, tender, and juicy.' : '150g ức gà nạc nướng lò thơm lừng mọng nước, không khô ráp.'}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 font-bold" />
                <span>
                  <strong>{lang === 'en' ? 'Short-Chain Local Greens:' : 'Rau xanh nông nghiệp ngắn:'}</strong>{' '}
                  {lang === 'en' ? 'Freshly harvested Phong Dien morning glory and crisp cherry tomatoes.' : 'Rau muống Phong Điền và cà chua cherry tươi giòn giàu chất xơ.'}
                </span>
              </li>
            </ul>

            <div className="bg-emerald-100/90 p-3 rounded-xl text-[11px] text-emerald-950 font-bold flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'en' ? 'Peak mental sharpness until 5:30 PM, flat stomach, and serene energy!' : 'Tỉnh táo làm việc tới 17:30, bụng phẳng, tinh thần thư thái nhẹ nhõm!'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs for Dishes */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-xl font-black text-stone-900">
            {lang === 'en' ? 'Signature Dishes Across All 3 Business Formats' : 'Tuyển Tập Món Ăn Tiêu Biểu Trong Cả 3 Mô Hình'}
          </h3>

          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {filterMap.map(f => (
              <button
                key={f.id}
                onClick={() => setFilterTag(f.id)}
                className={`text-xs px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap ${
                  filterTag === f.id
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Dishes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map((dish, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                    {dish.modelName}
                  </span>
                  <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {dish.calories} kcal
                  </span>
                </div>

                <h4 className="font-extrabold text-base text-stone-900 mb-2 leading-snug">
                  {dish.name}
                </h4>

                <p className="text-xs text-stone-600 mb-4 leading-relaxed line-clamp-3">
                  {dish.description}
                </p>

                {/* Local flavor highlight */}
                <div className="bg-amber-50 rounded-xl p-3 border border-amber-200/70 mb-4">
                  <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider block mb-1">
                    {lang === 'en' ? 'Mekong Taste Profile:' : 'Cấu Trúc Vị Miền Tây:'}
                  </span>
                  <p className="text-xs text-amber-950 font-medium">
                    {dish.localFlavor}
                  </p>
                </div>

                {/* Ingredients list */}
                <div className="text-[11px] text-stone-500 mb-3">
                  <strong className="text-stone-700">{lang === 'en' ? 'Ingredients:' : 'Thành phần:'}</strong> {dish.ingredients.join(', ')}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-400 block">{lang === 'en' ? 'Retail Price' : 'Giá Bán Đề Xuất'}</span>
                  <span className="text-base font-black text-stone-900">
                    {dish.price.toLocaleString()}đ {lang === 'en' && `(~$${(dish.price / 25000).toFixed(2)})`}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-stone-400 block">{lang === 'en' ? 'Est. COGS' : 'COGS Ước Tính'}</span>
                  <span className="text-xs font-bold text-stone-600">
                    {dish.cogs.toLocaleString()}đ ({Math.round((dish.cogs / dish.price) * 100)}%)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
