import React, { useState } from 'react';
import { 
  Building2, MapPin, Users, Navigation, Compass, CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { getCanThoBuildings } from '../data/marketData';
import { Language, TRANSLATIONS } from '../data/translations';

interface OfficeLocationMapProps {
  lang: Language;
}

export const OfficeLocationMap: React.FC<OfficeLocationMapProps> = ({ lang }) => {
  const [selectedBuildingIndex, setSelectedBuildingIndex] = useState<number>(0);
  const t = TRANSLATIONS[lang].locationsSection;
  const buildings = getCanThoBuildings(lang);
  const currentBuilding = buildings[selectedBuildingIndex];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>{t.tag}</span>
        </div>
        <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          {t.title}
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          {t.subtitle}
        </p>
      </div>

      {/* Buildings Interactive Selector & Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Buildings List Selector */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-2">
            {t.listTitle}
          </span>

          {buildings.map((b, idx) => {
            const isSelected = idx === selectedBuildingIndex;
            return (
              <button
                key={idx}
                onClick={() => setSelectedBuildingIndex(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-start space-x-3.5 ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-lg ring-2 ring-emerald-500'
                    : 'bg-white hover:bg-stone-50 text-stone-800 border-stone-200'
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  isSelected ? 'bg-emerald-600 text-white' : 'bg-stone-100 text-stone-600'
                }`}>
                  <Building2 className="w-5 h-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <h4 className="font-extrabold text-sm truncate">{b.name}</h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-stone-800 text-amber-400' : 'bg-stone-100 text-stone-500'
                    }`}>
                      {b.tier}
                    </span>
                  </div>
                  <p className={`text-xs truncate ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                    {b.address}
                  </p>
                  <div className="flex items-center space-x-3 mt-2 text-[11px]">
                    <span className={`flex items-center space-x-1 ${isSelected ? 'text-emerald-400' : 'text-emerald-700 font-semibold'}`}>
                      <Users className="w-3 h-3" />
                      <span>~{b.estimatedWorkers} {t.workersUnit}</span>
                    </span>
                    <span className={isSelected ? 'text-stone-400' : 'text-stone-400'}>
                      • {b.distanceToHub}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Building Detail Analysis */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                {lang === 'en' ? 'Building Cluster Profile' : 'Chi Tiết Cụm Tòa Nhà'}
              </span>
              <h3 className="text-2xl font-black text-stone-900 mt-0.5">
                {currentBuilding.name}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-stone-400 block">{lang === 'en' ? 'Workforce Size' : 'Quy mô lao động'}</span>
              <span className="text-lg font-bold text-stone-900">
                ~{currentBuilding.estimatedWorkers} {t.workersUnit}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-1">
                {lang === 'en' ? 'Address & Corridors:' : 'Địa Chỉ & Tuyến Đường:'}
              </span>
              <p className="text-sm font-semibold text-stone-800 flex items-center space-x-1.5">
                <Navigation className="w-4 h-4 text-emerald-600" />
                <span>{currentBuilding.address}</span>
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                {t.companiesLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {currentBuilding.companies.map((comp, cIdx) => (
                  <span key={cIdx} className="text-xs bg-stone-100 text-stone-800 font-medium px-3 py-1.5 rounded-xl border border-stone-200">
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-200">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 block mb-2 flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>{t.bestModelLabel}</span>
              </span>
              <div className="space-y-2">
                {currentBuilding.suitableModels.map((model, mIdx) => (
                  <div key={mIdx} className="flex items-center space-x-2 text-xs font-bold text-emerald-950">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{model}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud Kitchen Strategic Radius */}
            <div className="bg-stone-900 text-white rounded-2xl p-5 border border-stone-800">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center space-x-1.5">
                <Compass className="w-4 h-4" />
                <span>{t.radiusTitle}</span>
              </div>
              <p className="text-sm text-stone-200 font-medium">
                {currentBuilding.distanceToHub}
              </p>
              <p className="text-xs text-stone-400 mt-2">
                {lang === 'en'
                  ? 'Internal motorcycle courier reach in under 6 minutes. Guarantees hot bowls and fresh bentos maintain optimal serving temperature upon arrival.'
                  : 'Thời gian shipper nội bộ tiếp cận dưới 6 phút. Đảm bảo đồ ăn giao đến tủ lạnh hoặc quầy bento luôn ở nhiệt độ tối ưu.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
