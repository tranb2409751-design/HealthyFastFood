import React, { useState } from 'react';
import { 
  Users, Clock, Eye, Headphones, MessageSquare, Brain, 
  AlertCircle, Sparkles
} from 'lucide-react';
import { getDailySchedule, getDemographics, getEmpathyMap } from '../data/marketData';
import { Language, TRANSLATIONS } from '../data/translations';

interface EmpathyJourneyViewProps {
  lang: Language;
}

export const EmpathyJourneyView: React.FC<EmpathyJourneyViewProps> = ({ lang }) => {
  const [activeSlotIndex, setActiveSlotIndex] = useState<number>(3); // Default to lunch time
  const t = TRANSLATIONS[lang].journeySection;
  const demo = getDemographics(lang);
  const schedule = getDailySchedule(lang);
  const empathyMap = getEmpathyMap(lang);

  return (
    <div className="space-y-12">
      {/* Demographic Profile Snapshot */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-6 sm:p-8 text-white border border-stone-800 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-800 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-bold border border-emerald-800 mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>{t.tagDemographics}</span>
            </div>
            <h3 className="text-2xl font-black text-white">
              {t.titleDemographics}
            </h3>
          </div>
          <div className="text-xs text-stone-400 max-w-xs">
            {t.subDemographics}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div className="bg-stone-800/90 rounded-2xl p-4 border border-stone-700">
            <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">{lang === 'en' ? 'Core Age Range' : 'Độ Tuổi Trọng Tâm'}</span>
            <div className="text-xl font-bold text-emerald-400 mt-1">{demo.ageRange.split('(')[0]}</div>
            <span className="text-[10px] text-stone-400">{lang === 'en' ? 'Gen Z & Millennials' : 'Gen Z muộn & Millennial'}</span>
          </div>

          <div className="bg-stone-800/90 rounded-2xl p-4 border border-stone-700">
            <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">{lang === 'en' ? 'Gender Ratio' : 'Tỷ Lệ Giới Tính'}</span>
            <div className="text-xl font-bold text-amber-400 mt-1">{lang === 'en' ? 'Female 62% / Male 38%' : 'Nữ 62% / Nam 38%'}</div>
            <span className="text-[10px] text-stone-400">{lang === 'en' ? 'Females prioritize tone, males hunger' : 'Nữ quan tâm vóc dáng, nam cần no'}</span>
          </div>

          <div className="bg-stone-800/90 rounded-2xl p-4 border border-stone-700">
            <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">{lang === 'en' ? 'Average Income' : 'Thu Nhập Bình Quân'}</span>
            <div className="text-xl font-bold text-blue-400 mt-1">{demo.averageIncome.split('(')[0]}</div>
            <span className="text-[10px] text-stone-400">{lang === 'en' ? 'Solid daily spending power' : 'Khả năng chi trả ổn định'}</span>
          </div>

          <div className="bg-stone-800/90 rounded-2xl p-4 border border-stone-700">
            <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">{lang === 'en' ? 'Lunch Budget Norm' : 'Ngân Sách Ăn Trưa'}</span>
            <div className="text-xl font-bold text-rose-400 mt-1">{lang === 'en' ? '30k – 40k VND' : '30k – 40k VNĐ'}</div>
            <span className="text-[10px] text-stone-400">{lang === 'en' ? '42k-48k is optimal conversion zone' : 'Giá 42k-48k là điểm vàng chuyển đổi'}</span>
          </div>
        </div>
      </div>

      {/* Interactive 24-Hour Timeline */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>{t.tagTimeline}</span>
            </div>
            <h3 className="text-2xl font-black text-stone-900">
              {t.titleTimeline}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 max-w-md">
            {t.subTimeline}
          </p>
        </div>

        {/* Timeline Horizontal Bar */}
        <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-none mb-6">
          {schedule.map((slot, idx) => {
            const isSelected = idx === activeSlotIndex;
            const isCritical = slot.intensity === 'critical';
            return (
              <button
                key={idx}
                onClick={() => setActiveSlotIndex(idx)}
                className={`flex-shrink-0 p-3 rounded-2xl text-left border transition-all cursor-pointer min-w-[150px] ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-2 ring-emerald-500'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[11px] font-bold ${isSelected ? 'text-amber-400' : 'text-stone-500'}`}>
                    {slot.time.split('–')[0]}
                  </span>
                  {isCritical && (
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" title="Golden opportunity" />
                  )}
                </div>
                <div className="text-xs font-bold line-clamp-1">{slot.title.split('&')[0]}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Slot Detailed Deep Dive */}
        {schedule[activeSlotIndex] && (
          <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
            <div className="flex items-center space-x-3 mb-4">
              <span className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-extrabold text-xs">
                {schedule[activeSlotIndex].time}
              </span>
              <h4 className="text-lg font-bold text-stone-900">
                {schedule[activeSlotIndex].title}
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                  {lang === 'en' ? 'Daily Context:' : 'Bối Cảnh Sinh Hoạt:'}
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {schedule[activeSlotIndex].context}
                </p>
              </div>

              <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-200 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 block mb-1 flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Current Frustration & Pain Point:' : 'Nỗi Đau & Bế Tắc Hiện Tại:'}</span>
                </span>
                <p className="text-xs sm:text-sm text-rose-950 leading-relaxed">
                  {schedule[activeSlotIndex].painPoint}
                </p>
              </div>

              <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1 flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{lang === 'en' ? 'Commercial F&B Market Gap:' : 'Khoảng Trống & Cơ Hội F&B:'}</span>
                </span>
                <p className="text-xs sm:text-sm text-emerald-950 font-semibold leading-relaxed">
                  {schedule[activeSlotIndex].opportunity}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Empathy Map (4 Quadrants) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Brain className="w-3.5 h-3.5" />
            <span>{t.tagEmpathy}</span>
          </div>
          <h3 className="text-2xl font-black text-stone-900">
            {t.titleEmpathy}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            {t.subEmpathy}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {empathyMap.map((quadrant, idx) => {
            const icons = [Brain, Headphones, Eye, MessageSquare];
            const colors = [
              'bg-purple-100 text-purple-700 border-purple-200',
              'bg-blue-100 text-blue-700 border-blue-200',
              'bg-emerald-100 text-emerald-700 border-emerald-200',
              'bg-amber-100 text-amber-700 border-amber-200'
            ];
            const IconComp = icons[idx];

            return (
              <div key={idx} className="bg-stone-50 rounded-2xl p-6 border border-stone-200 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${colors[idx]}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold text-stone-900">
                      {quadrant.category}: {quadrant.title}
                    </h4>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {quadrant.items.map((item, iIdx) => (
                      <li key={iIdx} className="text-xs sm:text-sm text-stone-700 flex items-start space-x-2">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-stone-200 text-xs text-stone-600 italic">
                  <span className="font-bold text-stone-800 not-italic block mb-0.5">{lang === 'en' ? 'Voice of Customer:' : 'Tiếng nói khách hàng (Voice of Customer):'}</span>
                  {quadrant.quote}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
