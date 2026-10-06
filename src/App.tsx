import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { ModelShowcase } from './components/ModelShowcase';
import { ParadoxBreakdown } from './components/ParadoxBreakdown';
import { EmpathyJourneyView } from './components/EmpathyJourneyView';
import { MenuSensoryMatrix } from './components/MenuSensoryMatrix';
import { UnitEconomicsCalculator } from './components/UnitEconomicsCalculator';
import { OfficeLocationMap } from './components/OfficeLocationMap';
import { InteractivePrototypesModal } from './components/InteractivePrototypesModal';
import { ExecutiveReportView } from './components/ExecutiveReportView';
import { Sparkles, Utensils } from 'lucide-react';
import { getBusinessModels } from './data/modelsData';
import { Language, TRANSLATIONS } from './data/translations';

export default function App() {
  // Default to English as explicitly requested by user
  const [lang, setLang] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState<string>('models');
  const [selectedModelId, setSelectedModelId] = useState<string>('mekong-bowl');
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);
  const [isDemoOpen, setIsDemoOpen] = useState<boolean>(false);
  const [demoModelId, setDemoModelId] = useState<string>('mekong-bowl');

  const t = TRANSLATIONS[lang];
  const models = getBusinessModels(lang);

  const handleOpenDemo = (modelId: string = 'mekong-bowl') => {
    setDemoModelId(modelId);
    setIsDemoOpen(true);
  };

  const handleSelectModelFromHero = (modelId: string) => {
    setSelectedModelId(modelId);
    setActiveTab('models');
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-100/70 text-stone-900 flex flex-col font-sans">
      {/* Top Fixed Header with Language Switcher */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        setLang={setLang}
        onOpenReport={() => setIsReportOpen(true)}
        onOpenPrototype={() => handleOpenDemo(selectedModelId)}
      />

      {/* Main Page Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Hero Section */}
        <HeroBanner
          lang={lang}
          onSelectModel={handleSelectModelFromHero}
          onExploreResearch={() => setActiveTab('paradox')}
        />

        {/* Tab Views */}
        <div className="transition-all duration-300">
          {activeTab === 'models' && (
            <section className="space-y-12">
              <ModelShowcase
                lang={lang}
                selectedModelId={selectedModelId}
                onSelectModel={setSelectedModelId}
                onOpenDemo={handleOpenDemo}
              />

              {/* Side-by-Side Model Comparison Matrix */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
                <div className="text-center max-w-2xl mx-auto mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    {lang === 'en' ? 'Direct Strategic Comparison' : 'Bảng Đối Chiếu Trực Quan'}
                  </span>
                  <h3 className="text-2xl font-black text-stone-900 mt-1">
                    {t.modelsSection.comparisonTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1">
                    {t.modelsSection.comparisonSub}
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-stone-200 text-stone-500 uppercase text-[11px] font-bold">
                        <th className="py-3 px-4">{t.modelsSection.criteriaCol}</th>
                        <th className="py-3 px-4 text-emerald-800 bg-emerald-50/50">
                          {lang === 'en' ? 'Model 01: MEKONG BOWL' : 'Mô hình 01: MEKONG BOWL'}
                        </th>
                        <th className="py-3 px-4 text-amber-800 bg-amber-50/50">
                          {lang === 'en' ? 'Model 02: WRAP & RUN' : 'Mô hình 02: WRAP & RUN'}
                        </th>
                        <th className="py-3 px-4 text-blue-800 bg-blue-50/50">
                          {lang === 'en' ? 'Model 03: URBAN HEARTH BENTO' : 'Mô hình 03: BẾP LÀNH ĐÔ THỊ'}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-700">
                      <tr>
                        <td className="py-3.5 px-4 font-bold text-stone-900">
                          {lang === 'en' ? 'Operational Format' : 'Format Vận Hành'}
                        </td>
                        <td className="py-3.5 px-4 bg-emerald-50/30">
                          {lang === 'en' ? 'B2B2C Smart Pantry Fridge' : 'B2B2C Smart Fridge Pantry'}
                        </td>
                        <td className="py-3.5 px-4 bg-amber-50/30">
                          {lang === 'en' ? '5m² Lobby Pop-up Kiosk' : 'Pop-up Kiosk 5m² sảnh trệt'}
                        </td>
                        <td className="py-3.5 px-4 bg-blue-50/30">
                          {lang === 'en' ? 'Batch Kitchen & Group Pooling App' : 'Batch Cloud Kitchen & App Gom Đơn'}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-bold text-stone-900">
                          {lang === 'en' ? 'Key Pain Point Solved' : 'Nỗi Đau Triệt Tiêu'}
                        </td>
                        <td className="py-3.5 px-4 bg-emerald-50/30 font-medium">
                          {lang === 'en' ? '0-min wait, 0 delivery fee at lunch' : '0 phút chờ, 0đ ship giờ trưa'}
                        </td>
                        <td className="py-3.5 px-4 bg-amber-50/30 font-medium">
                          {lang === 'en' ? '14:30 PM slump & morning rush' : 'Buồn ngủ 14:30 & ăn sáng vội'}
                        </td>
                        <td className="py-3.5 px-4 bg-blue-50/30 font-medium">
                          {lang === 'en' ? 'Department order pooling & auto split' : 'Gom đơn phòng ban, chia tiền 1 chạm'}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-bold text-stone-900">
                          {lang === 'en' ? 'Prime Operating Hours' : 'Khung Giờ Vàng'}
                        </td>
                        <td className="py-3.5 px-4 bg-emerald-50/30">11:30 AM – 12:45 PM</td>
                        <td className="py-3.5 px-4 bg-amber-50/30">06:45 – 08:15 AM & 02:00 – 03:30 PM</td>
                        <td className="py-3.5 px-4 bg-blue-50/30">11:15 AM – 12:30 PM</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-bold text-stone-900">
                          {lang === 'en' ? 'Packaging Innovation' : 'Concept Bao Bì'}
                        </td>
                        <td className="py-3.5 px-4 bg-emerald-50/30">
                          {lang === 'en' ? 'Japanese Kraft + Corn PLA Film' : 'Tô Kraft Nhật tráng PLA ngô'}
                        </td>
                        <td className="py-3.5 px-4 bg-amber-50/30">
                          {lang === 'en' ? '1-Handed Tear-Off Tube' : 'Ống xé Tear-off cầm 1 tay'}
                        </td>
                        <td className="py-3.5 px-4 bg-blue-50/30">
                          {lang === 'en' ? '4-Compartment 100% Bagasse' : 'Khay 4 ngăn 100% bã mía'}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-bold text-stone-900">
                          {lang === 'en' ? 'Gross Profit Margin' : 'Biên Lợi Nhuận Gộp'}
                        </td>
                        <td className="py-3.5 px-4 bg-emerald-50/30 font-black text-emerald-700">69.5%</td>
                        <td className="py-3.5 px-4 bg-amber-50/30 font-black text-amber-700">69.0%</td>
                        <td className="py-3.5 px-4 bg-blue-50/30 font-black text-blue-700">69.2%</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-bold text-stone-900">
                          {lang === 'en' ? 'Estimated Capex' : 'Vốn Đầu Tư Ban Đầu'}
                        </td>
                        <td className="py-3.5 px-4 bg-emerald-50/30">
                          {lang === 'en' ? '~120M VND ($4,800 USD)' : '~120 Triệu (Bếp + 3 Tủ)'}
                        </td>
                        <td className="py-3.5 px-4 bg-amber-50/30">
                          {lang === 'en' ? '~65M VND ($2,600 USD)' : '~65 Triệu (Kiosk 5m²)'}
                        </td>
                        <td className="py-3.5 px-4 bg-blue-50/30">
                          {lang === 'en' ? '~95M VND ($3,800 USD)' : '~95 Triệu (Bếp nấu lô lớn)'}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-bold text-stone-900">
                          {lang === 'en' ? 'Breakeven Speed' : 'Thời Gian Hòa Vốn'}
                        </td>
                        <td className="py-3.5 px-4 bg-emerald-50/30 font-bold">~45 {lang === 'en' ? 'days' : 'ngày'}</td>
                        <td className="py-3.5 px-4 bg-amber-50/30 font-bold">~35 {lang === 'en' ? 'days' : 'ngày'}</td>
                        <td className="py-3.5 px-4 bg-blue-50/30 font-bold">~40 {lang === 'en' ? 'days' : 'ngày'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'paradox' && <ParadoxBreakdown lang={lang} />}

          {activeTab === 'journey' && <EmpathyJourneyView lang={lang} />}

          {activeTab === 'menu' && <MenuSensoryMatrix lang={lang} />}

          {activeTab === 'finance' && <UnitEconomicsCalculator lang={lang} />}

          {activeTab === 'locations' && <OfficeLocationMap lang={lang} />}
        </div>
      </main>

      {/* Floating Action Button for Live Demo */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleOpenDemo(selectedModelId)}
          className="flex items-center space-x-2 px-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-amber-500 hover:from-emerald-500 hover:to-amber-400 text-white font-extrabold text-xs shadow-xl shadow-stone-950/30 transition-all hover:scale-105 cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span>{lang === 'en' ? 'Try Live Demo' : 'Thử Demo Tương Tác'}</span>
        </button>
      </div>

      {/* Modals */}
      <InteractivePrototypesModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        lang={lang}
        initialModelId={demoModelId}
      />

      <ExecutiveReportView
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
        lang={lang}
      />

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 mt-20 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                  <Utensils className="w-4 h-4" />
                </div>
                <span className="font-extrabold text-white text-base">MEKONG HEALTHY F&B STRATEGY</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed max-w-md">
                {lang === 'en'
                  ? 'In-depth F&B strategy and behavioral psychology analysis of office knowledge workers in Ninh Kieu District, Can Tho City, Vietnam.'
                  : 'Bản đề xuất giải pháp F&B chuyên sâu dựa trên báo cáo nghiên cứu tâm lý hành vi và "nghịch lý thức ăn nhanh" của lực lượng lao động công sở tại Quận Ninh Kiều, TP. Cần Thơ.'}
              </p>
            </div>

            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-stone-200 mb-3">
                {lang === 'en' ? '3 Core Business Models' : '3 Mô Hình Trọng Tâm'}
              </h5>
              <ul className="text-xs text-stone-400 space-y-2">
                <li 
                  className="hover:text-emerald-400 cursor-pointer" 
                  onClick={() => { setSelectedModelId('mekong-bowl'); setActiveTab('models'); }}
                >
                  01. Mekong Bowl (Smart Pantry)
                </li>
                <li 
                  className="hover:text-amber-400 cursor-pointer" 
                  onClick={() => { setSelectedModelId('wrap-and-run'); setActiveTab('models'); }}
                >
                  02. Wrap & Run (14:30 Kiosk)
                </li>
                <li 
                  className="hover:text-blue-400 cursor-pointer" 
                  onClick={() => { setSelectedModelId('bep-lanh'); setActiveTab('models'); }}
                >
                  03. {lang === 'en' ? 'Urban Hearth Bento' : 'Bếp Lành Đô Thị'}
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-stone-200 mb-3">
                {lang === 'en' ? 'Field Study Base Towers' : 'Cơ Sở Khảo Sát Thực Địa'}
              </h5>
              <ul className="text-xs text-stone-400 space-y-2">
                <li>• SHB Tower (Hoa Binh Blvd)</li>
                <li>• A-Connection Building (30 Thang 4)</li>
                <li>• IDICO 10 Tower (Ninh Kieu)</li>
                <li>• Phong Dien Agricultural Co-op</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500">
            <span>© 2026 Mekong Healthy F&B Can Tho. Venture Proposition.</span>
            <span>{lang === 'en' ? 'Formula: Healthy Disguised as Bold Comfort • Caloric Precision ~450 kcal' : 'Triết lý ẩm thực: Healthy Đội Lốt Đậm Đà • Calo Chuẩn ~450 kcal'}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
