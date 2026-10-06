import React from 'react';
import { UtensilsCrossed, Sparkles, FileText, Globe } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenReport: () => void;
  onOpenPrototype: (modelId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  onOpenReport,
  onOpenPrototype
}) => {
  const t = TRANSLATIONS[lang];

  const navItems = [
    { id: 'models', label: t.nav.models.label, badge: t.nav.models.badge },
    { id: 'paradox', label: t.nav.paradox.label, badge: t.nav.paradox.badge },
    { id: 'journey', label: t.nav.journey.label, badge: t.nav.journey.badge },
    { id: 'menu', label: t.nav.menu.label, badge: t.nav.menu.badge },
    { id: 'finance', label: t.nav.finance.label, badge: t.nav.finance.badge },
    { id: 'locations', label: t.nav.locations.label, badge: t.nav.locations.badge },
  ];

  return (
    <header className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-md text-stone-100 border-b border-stone-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => setActiveTab('models')}
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-amber-600 flex items-center justify-center shadow-md shadow-emerald-900/40 group-hover:scale-105 transition-transform">
              <UtensilsCrossed className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold tracking-tight text-lg text-white">{t.meta.title}</span>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {t.meta.cityTag}
                </span>
              </div>
              <p className="text-xs text-stone-400 font-light truncate max-w-sm sm:max-w-md">
                {t.meta.subtitle}
              </p>
            </div>
          </div>

          {/* Action CTAs and Language Switcher */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Language Switcher Pill */}
            <div className="flex items-center bg-stone-800 rounded-xl p-1 border border-stone-700">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('vi')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  lang === 'vi'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                VI
              </button>
            </div>

            <button
              onClick={() => onOpenPrototype()}
              className="hidden md:inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{t.meta.liveDemoBtn}</span>
            </button>

            <button
              onClick={onOpenReport}
              className="inline-flex items-center space-x-1.5 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500 shadow-md shadow-emerald-700/30 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">{t.meta.executiveReportBtn}</span>
              <span className="sm:hidden">Report</span>
            </button>
          </div>
        </div>

        {/* Scrollable Navigation Tabs */}
        <div className="flex items-center space-x-1 overflow-x-auto py-2 scrollbar-none border-t border-stone-800/60">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 flex items-center space-x-2 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600/90 text-white shadow-sm shadow-emerald-900/50 font-semibold'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800/70'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded ${
                      isActive
                        ? 'bg-emerald-800 text-emerald-200'
                        : 'bg-stone-800 text-stone-400'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
