import React from 'react';
import { ArrowRight, Zap, ShieldCheck, TrendingUp, Sparkles, Clock } from 'lucide-react';
import { getBusinessModels } from '../data/modelsData';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeroBannerProps {
  lang: Language;
  onSelectModel: (modelId: string) => void;
  onExploreResearch: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  lang,
  onSelectModel,
  onExploreResearch
}) => {
  const t = TRANSLATIONS[lang].hero;
  const models = getBusinessModels(lang);

  return (
    <div className="relative overflow-hidden bg-stone-900 text-stone-100 rounded-3xl border border-stone-800 shadow-2xl mb-10">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 left-10 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative p-6 sm:p-10 lg:p-12">
        <div className="max-w-4xl">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.tag}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            {t.titleMain} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-300 to-amber-500">{t.titleHighlight}</span> {t.titleEnd}
          </h1>

          {/* Core Philosophy Paragraph */}
          <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed mb-8 max-w-3xl">
            {t.description}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
            <div className="bg-stone-800/80 border border-stone-700/60 rounded-xl p-3.5">
              <div className="flex items-center space-x-2 text-emerald-400 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs uppercase font-semibold">{t.statPenetration.label}</span>
              </div>
              <div className="text-xl font-bold text-white">{t.statPenetration.value}</div>
              <div className="text-[11px] text-stone-400 mt-0.5">{t.statPenetration.desc}</div>
            </div>

            <div className="bg-stone-800/80 border border-stone-700/60 rounded-xl p-3.5">
              <div className="flex items-center space-x-2 text-amber-400 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-xs uppercase font-semibold">{t.statWaitTime.label}</span>
              </div>
              <div className="text-xl font-bold text-white">{t.statWaitTime.value}</div>
              <div className="text-[11px] text-stone-400 mt-0.5">{t.statWaitTime.desc}</div>
            </div>

            <div className="bg-stone-800/80 border border-stone-700/60 rounded-xl p-3.5">
              <div className="flex items-center space-x-2 text-blue-400 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs uppercase font-semibold">{t.statMargin.label}</span>
              </div>
              <div className="text-xl font-bold text-white">{t.statMargin.value}</div>
              <div className="text-[11px] text-stone-400 mt-0.5">{t.statMargin.desc}</div>
            </div>

            <div className="bg-stone-800/80 border border-stone-700/60 rounded-xl p-3.5">
              <div className="flex items-center space-x-2 text-rose-400 mb-1">
                <Zap className="w-4 h-4" />
                <span className="text-xs uppercase font-semibold">{t.statCalories.label}</span>
              </div>
              <div className="text-xl font-bold text-white">{t.statCalories.value}</div>
              <div className="text-[11px] text-stone-400 mt-0.5">{t.statCalories.desc}</div>
            </div>
          </div>

          {/* Quick jump to the 3 Models */}
          <div className="border-t border-stone-800 pt-6">
            <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3 flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.quickJumpTitle}</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {models.map((model, idx) => (
                <button
                  key={model.id}
                  onClick={() => onSelectModel(model.id)}
                  className="group text-left p-3.5 rounded-xl bg-stone-800/60 hover:bg-stone-800 border border-stone-700/70 hover:border-emerald-500/60 transition-all flex items-start space-x-3 cursor-pointer"
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-700/50 text-xs font-bold flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    0{idx + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors truncate">
                      {model.name}
                    </div>
                    <div className="text-xs text-stone-400 line-clamp-1 mt-0.5">
                      {model.format}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all mt-1" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
