import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, DollarSign, Package, 
  Award, Layers, Utensils, MessageSquare, Play
} from 'lucide-react';
import { getBusinessModels, SMART_PANTRY_IMAGE } from '../data/modelsData';
import { Language, TRANSLATIONS } from '../data/translations';

interface ModelShowcaseProps {
  lang: Language;
  selectedModelId: string;
  onSelectModel: (id: string) => void;
  onOpenDemo: (modelId: string) => void;
}

export const ModelShowcase: React.FC<ModelShowcaseProps> = ({
  lang,
  selectedModelId,
  onSelectModel,
  onOpenDemo
}) => {
  const t = TRANSLATIONS[lang].modelsSection;
  const models = getBusinessModels(lang);
  const currentModel = models.find(m => m.id === selectedModelId) || models[0];
  const [activeTab, setActiveTab] = useState<'overview' | 'packaging' | 'menu' | 'marketing' | 'operations'>('overview');

  return (
    <div className="space-y-8">
      {/* 3 Model Selector Tabs */}
      <div className="bg-white rounded-2xl p-2 sm:p-3 border border-stone-200 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {models.map((model, idx) => {
            const isSelected = model.id === currentModel.id;
            return (
              <button
                key={model.id}
                onClick={() => {
                  onSelectModel(model.id);
                  setActiveTab('overview');
                }}
                className={`relative text-left p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-br from-stone-900 to-stone-800 text-white shadow-lg shadow-stone-900/20 ring-2 ring-emerald-500'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-200/80'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-stone-200 text-stone-600'
                  }`}>
                    {t.badge} 0{idx + 1}
                  </span>
                  <span className={`text-xs font-semibold ${isSelected ? 'text-amber-400' : 'text-stone-500'}`}>
                    {model.format.split('&')[0]}
                  </span>
                </div>

                <div className="font-extrabold text-base sm:text-lg mb-1">
                  {model.name}
                </div>

                <div className={`text-xs line-clamp-1 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                  {model.tagline}
                </div>

                {isSelected && (
                  <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Model Detail Panel */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
        {/* Hero Concept Card with Generated Imagery */}
        <div className="relative bg-stone-900 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Image Showcase */}
            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] overflow-hidden bg-stone-950 flex items-center justify-center">
              <img
                src={currentModel.image}
                alt={`${currentModel.name} Concept Photography`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent lg:hidden" />
              
              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-700/60 text-xs font-medium text-stone-200 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Concept Visual: {currentModel.brandConcept.name}</span>
              </div>

              {/* Tag for packaging */}
              <div className="absolute bottom-4 left-4 right-4 bg-stone-900/90 backdrop-blur-md p-3 rounded-xl border border-stone-700/70 text-xs text-stone-300 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Package className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="font-semibold text-white">{t.packagingLabel}:</span>
                  <span className="truncate">{currentModel.brandConcept.packaging}</span>
                </div>
              </div>
            </div>

            {/* Model Summary & Value Proposition */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-stone-900">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800/50">
                    {currentModel.format}
                  </span>
                  <span className="text-xs text-stone-400">
                    {currentModel.targetSlot}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                  {currentModel.name}
                </h2>
                
                <p className="text-sm font-medium text-amber-300 mb-6 italic">
                  "{currentModel.tagline}"
                </p>

                {/* Pain Point Radically Solved */}
                <div className="bg-stone-800/80 rounded-2xl p-4 border border-stone-700/70 mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-1 flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>{t.painPointLabel}</span>
                  </div>
                  <p className="text-sm text-stone-200 leading-relaxed font-normal">
                    {currentModel.painPointSolved}
                  </p>
                </div>

                {/* Brand Colors Swatch */}
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                    {t.paletteLabel} ({currentModel.brandConcept.name}):
                  </div>
                  <div className="flex items-center space-x-3">
                    {currentModel.brandConcept.primaryColors.map((color, cIdx) => (
                      <div key={cIdx} className="flex-1 bg-stone-800/90 rounded-xl p-2 border border-stone-700 text-center">
                        <div 
                          className="w-full h-7 rounded-lg mb-1.5 shadow-inner border border-white/20" 
                          style={{ backgroundColor: color.hex }}
                        />
                        <div className="text-[11px] font-bold text-white truncate">{color.name}</div>
                        <div className="text-[10px] text-stone-400 font-mono">{color.hex}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Demo Button */}
              <div className="pt-4 border-t border-stone-800 flex items-center space-x-3">
                <button
                  onClick={() => onOpenDemo(currentModel.id)}
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm shadow-lg shadow-emerald-900/40 transition-all cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>{t.liveDemoBtn} {currentModel.name}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-navigation tabs within model */}
        <div className="border-b border-stone-200 bg-stone-50 px-6">
          <div className="flex space-x-6 overflow-x-auto scrollbar-none">
            {[
              { id: 'overview', label: t.tabs.overview, icon: Layers },
              { id: 'packaging', label: t.tabs.packaging, icon: Package },
              { id: 'menu', label: t.tabs.menu, icon: Utensils },
              { id: 'operations', label: t.tabs.operations, icon: CheckCircle2 },
              { id: 'marketing', label: t.tabs.marketing, icon: MessageSquare }
            ].map(tab => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-3.5 border-b-2 font-semibold text-xs sm:text-sm flex items-center space-x-2 transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'border-emerald-600 text-emerald-700'
                      : 'border-transparent text-stone-500 hover:text-stone-800'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="p-6 sm:p-8">
          {/* Tab 1: Overview & Unit Economics */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1 flex items-center space-x-1.5">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    <span>{lang === 'en' ? 'Retail Price & Food Cost' : 'Giá Bán & Chi Phí Vốn'}</span>
                  </div>
                  <div className="text-2xl font-black text-emerald-950 mt-1">
                    {currentModel.unitEconomics.retailPriceRange}
                  </div>
                  <p className="text-xs text-emerald-700 mt-2">
                    COGS: <strong>{currentModel.unitEconomics.cogsPercentage}%</strong> (~{currentModel.unitEconomics.cogsCost.toLocaleString()}đ) {lang === 'en' ? 'via wholesale Mekong farm produce' : 'nhờ nông sản ĐBSCL giá sỉ'}.
                  </p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1 flex items-center space-x-1.5">
                    <Award className="w-4 h-4 text-amber-600" />
                    <span>{lang === 'en' ? 'Gross Margin & Volume' : 'Biên Lợi Nhuận Gộp'}</span>
                  </div>
                  <div className="text-2xl font-black text-amber-950 mt-1">
                    {currentModel.unitEconomics.grossMarginPercentage}%
                  </div>
                  <p className="text-xs text-amber-700 mt-2">
                    {lang === 'en' ? 'Target:' : 'Dự báo:'} <strong>{currentModel.unitEconomics.dailyVolumeEst} {lang === 'en' ? 'units/day' : 'suất/ngày'}</strong>, {lang === 'en' ? 'breakeven in ~' : 'hòa vốn sau ~'}<strong>{currentModel.unitEconomics.breakevenDays} {lang === 'en' ? 'days' : 'ngày'}</strong>.
                  </p>
                </div>

                <div className="bg-stone-100 border border-stone-200 rounded-2xl p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-1 flex items-center space-x-1.5">
                    <Package className="w-4 h-4 text-stone-500" />
                    <span>{lang === 'en' ? 'Initial Capital Required' : 'Vốn Đầu Tư Ban Đầu'}</span>
                  </div>
                  <div className="text-lg font-black text-stone-900 mt-1">
                    {currentModel.unitEconomics.capitalNeeded.split('(')[0]}
                  </div>
                  <p className="text-xs text-stone-600 mt-2">
                    ({currentModel.unitEconomics.capitalNeeded.split('(')[1]}
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
                <h4 className="text-sm font-bold uppercase tracking-wider text-stone-700 mb-4 flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'en' ? '3 Pillars of Value Proposition:' : '3 Trụ Cột Giá Trị Cốt Lõi:'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {currentModel.brandConcept.coreValues.map((val, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 border border-stone-200 shadow-sm flex items-start space-x-3">
                      <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center flex-shrink-0">
                        0{idx + 1}
                      </div>
                      <div className="text-sm font-bold text-stone-800">
                        {val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Spotlight for Model 1: Smart Pantry Fridge Visual */}
              {currentModel.id === 'mekong-bowl' && (
                <div className="bg-stone-900 text-white rounded-2xl p-6 border border-stone-800 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-5 rounded-xl overflow-hidden shadow-lg border border-stone-700">
                    <img 
                      src={SMART_PANTRY_IMAGE} 
                      alt="Fresh Smart Fridge in Corporate Office Pantry" 
                      referrerPolicy="no-referrer"
                      className="w-full h-52 object-cover object-center"
                    />
                  </div>
                  <div className="lg:col-span-7 space-y-3">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-bold border border-emerald-800">
                      <span>{lang === 'en' ? 'Proprietary B2B Corporate Pantry Channel' : 'Mô Hình Độc Quyền B2B Corporate Pantry'}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">
                      {lang === 'en' ? '"Fresh Smart Fridge" Automated Pantry Network' : 'Hệ Thống Tủ Lạnh Đóng Tươi "Fresh Smart Fridge"'}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                      {lang === 'en'
                        ? 'Installed inside corporate pantries of SHB, A-Connection, and IDICO. Fully cooked, fresh artisan bowls replenished before 11:00 AM. Employees scan a QR code to unlock, grab their meal, and microwave for 60 seconds. Zero delivery fees, zero 40-minute wait times.'
                        : 'Đặt trực tiếp tại pantry các tòa nhà SHB, A-Connection, IDICO. Bếp trung tâm giao các phần ăn tươi chế biến hoàn chỉnh trước 11:00 AM. Nhân viên chỉ cần quét mã QR VietQR mở tủ lấy hộp, hâm nóng 60s tại microwave có sẵn. Xóa bỏ hoàn toàn phí ship và 40 phút chờ đợi.'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Packaging */}
          {activeTab === 'packaging' && (
            <div className="space-y-6">
              <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-200">
                <h4 className="text-base font-bold text-emerald-950 mb-2">
                  {lang === 'en' ? 'Packaging Philosophy' : 'Triết Lý Thiết Kế Bao Bì'}: {currentModel.brandConcept.packaging}
                </h4>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  {lang === 'en'
                    ? 'Engineered exclusively for corporate ergonomics: keeps hot without leaking, no sauce spills on motorcycle commutes, and effortless eating at office desks without staining keyboards.'
                    : 'Thiết kế phục vụ hoàn hảo hành vi ăn uống công sở: giữ ấm lâu, không rò rỉ sốt trên xe máy, dễ dàng ăn ngay tại bàn làm việc mà không làm bẩn bàn phím hay tài liệu.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentModel.brandConcept.packagingDetails.map((detail, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 border border-stone-200 shadow-sm flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Color Meaning Matrix */}
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 mt-6">
                <h5 className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-4">
                  {lang === 'en' ? 'Brand Color Semiotics & Symbolism:' : 'Giải Mã Ý Nghĩa Hệ Màu Nhận Diện:'}
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {currentModel.brandConcept.primaryColors.map((color, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 rounded-lg shadow-sm border border-stone-300" style={{ backgroundColor: color.hex }} />
                        <div>
                          <div className="text-sm font-bold text-stone-900">{color.name}</div>
                          <div className="text-xs font-mono text-stone-500">{color.hex}</div>
                        </div>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {color.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Menu & Nutrition */}
          {activeTab === 'menu' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-stone-900">
                    {lang === 'en' ? 'Core Menu: "Healthy Disguised as Bold Comfort"' : 'Thực Đơn Đột Phá: "Healthy Đội Lốt Đậm Đà"'}
                  </h4>
                  <p className="text-xs text-stone-500">
                    {lang === 'en' ? 'Strictly calibrated ~450 kcal, 100% refined sugar eliminated, bold regional glazes' : 'Chuẩn calo ~450 kcal, loại bỏ 100% đường tinh luyện, sốt đậm đà vị miền Tây sông nước'}
                  </p>
                </div>
                <span className="text-xs bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full border border-amber-200">
                  {lang === 'en' ? '3 Key Dishes' : '3 Món Đại Diện'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentModel.keyProducts.map((prod, idx) => (
                  <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-200 flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                          {prod.calories} kcal
                        </span>
                        <span className="text-sm font-bold text-stone-900">
                          {prod.price.toLocaleString()}đ
                        </span>
                      </div>

                      <h5 className="font-bold text-sm text-stone-900 mb-2 leading-snug">
                        {prod.name}
                      </h5>

                      <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                        {prod.description}
                      </p>

                      <div className="bg-amber-50/80 rounded-xl p-3 border border-amber-200/80 mb-3 text-xs text-amber-900">
                        <strong className="text-amber-950 font-bold">{lang === 'en' ? 'Mekong Profile: ' : 'Gu Miền Tây: '}</strong>
                        {prod.localFlavor}
                      </div>

                      <div className="text-[11px] text-stone-500 mb-2">
                        <strong>{lang === 'en' ? 'Ingredients: ' : 'Thành phần: '}</strong> {prod.ingredients.join(', ')}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-stone-200">
                      {prod.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-medium bg-white text-stone-700 px-2 py-0.5 rounded-md border border-stone-200">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Operations */}
          {activeTab === 'operations' && (
            <div className="space-y-6">
              <div className="bg-stone-900 text-white rounded-2xl p-6 border border-stone-800">
                <h4 className="text-base font-bold text-amber-400 mb-3 flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>{lang === 'en' ? 'Cost-Optimized Speed & Supply Chain Workflow:' : 'Quy Trình Tối Ưu Chi Phí & Tốc Độ Cung Ứng:'}</span>
                </h4>
                <div className="space-y-4">
                  {currentModel.operationalHighlights.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-3.5 bg-stone-800/60 p-4 rounded-xl border border-stone-700/60">
                      <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                        0{idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: Marketing & Key Messages */}
          {activeTab === 'marketing' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentModel.keyMessages.map((msg, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
                        {lang === 'en' ? `Communications Angle 0${idx + 1}:` : `Trục Truyền Thông ${idx + 1}:`} {msg.angle}
                      </div>

                      <div className="text-lg font-black text-stone-900 mb-3 border-l-4 border-emerald-600 pl-3">
                        "{msg.slogan}"
                      </div>

                      <p className="text-sm text-stone-600 italic bg-stone-50 p-3 rounded-xl border border-stone-200 mb-4">
                        {msg.sampleCopy}
                      </p>
                    </div>

                    <div className="text-xs text-stone-500 pt-3 border-t border-stone-100 flex items-center space-x-2">
                      <span className="font-semibold text-stone-700">{lang === 'en' ? 'Core Channel:' : 'Kênh Trọng Tâm:'}</span>
                      <span>{msg.channel}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
