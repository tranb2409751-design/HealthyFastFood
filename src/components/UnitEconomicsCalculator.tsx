import React, { useState } from 'react';
import { 
  Calculator, DollarSign, TrendingUp, ShieldCheck, RefreshCw
} from 'lucide-react';
import { getBusinessModels } from '../data/modelsData';
import { Language, TRANSLATIONS } from '../data/translations';

interface UnitEconomicsCalculatorProps {
  lang: Language;
}

export const UnitEconomicsCalculator: React.FC<UnitEconomicsCalculatorProps> = ({ lang }) => {
  const [selectedModelId, setSelectedModelId] = useState<string>('mekong-bowl');
  const t = TRANSLATIONS[lang].financeSection;
  const models = getBusinessModels(lang);

  // Slider controls
  const [price, setPrice] = useState<number>(45000);
  const [dailyVolume, setDailyVolume] = useState<number>(220);
  const [cogsPercent, setCogsPercent] = useState<number>(31);
  const [rentCost, setRentCost] = useState<number>(12000000); // 12M for cloud kitchen / kiosk rent
  const [laborCost, setLaborCost] = useState<number>(22000000); // Staff salary
  const [packagingAndUtilities, setPackagingAndUtilities] = useState<number>(8000000);

  // Sync defaults when switching model
  const handleModelChange = (id: string) => {
    setSelectedModelId(id);
    const m = models.find(b => b.id === id);
    if (m) {
      setPrice(m.unitEconomics.avgPrice);
      setDailyVolume(m.unitEconomics.dailyVolumeEst);
      setCogsPercent(Math.round(m.unitEconomics.cogsPercentage));
      if (id === 'wrap-and-run') {
        setRentCost(8000000); // 5m2 kiosk
        setLaborCost(18000000);
      } else if (id === 'bep-lanh') {
        setRentCost(10000000);
        setLaborCost(24000000);
      } else {
        setRentCost(14000000);
        setLaborCost(22000000);
      }
    }
  };

  // Financial Calculations (Based on 26 working days per month)
  const workingDays = 26;
  const monthlyRevenue = price * dailyVolume * workingDays;
  const cogsTotal = (monthlyRevenue * cogsPercent) / 100;
  const monthlyGrossProfit = monthlyRevenue - cogsTotal;
  const grossMargin = ((monthlyGrossProfit / monthlyRevenue) * 100) || 0;

  const totalOpex = rentCost + laborCost + packagingAndUtilities;
  const monthlyNetProfit = monthlyGrossProfit - totalOpex;
  const netMargin = ((monthlyNetProfit / monthlyRevenue) * 100) || 0;

  // Capital estimates based on model
  const initialCap = selectedModelId === 'wrap-and-run' ? 65000000 : selectedModelId === 'bep-lanh' ? 95000000 : 120000000;
  const breakevenMonths = monthlyNetProfit > 0 ? (initialCap / monthlyNetProfit).toFixed(1) : '∞';
  const breakevenDays = monthlyNetProfit > 0 ? Math.round((initialCap / monthlyNetProfit) * 30) : 999;

  // Comparison with standard Food Delivery App (which takes 25% commission)
  const appCommissionLoss = monthlyRevenue * 0.25;

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
          <Calculator className="w-3.5 h-3.5" />
          <span>{t.tag}</span>
        </div>
        <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          {t.title}
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          {t.subtitle}
        </p>
      </div>

      {/* Model Selector Bar */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 bg-stone-100 rounded-2xl border border-stone-200">
          {models.map(m => (
            <button
              key={m.id}
              onClick={() => handleModelChange(m.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedModelId === m.id
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200">
            <h3 className="font-bold text-base text-stone-900">
              {t.variablesTitle}
            </h3>
            <button
              onClick={() => handleModelChange(selectedModelId)}
              className="text-xs text-stone-500 hover:text-emerald-600 flex items-center space-x-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>{t.restoreDefaults}</span>
            </button>
          </div>

          {/* Price Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-stone-700">
              <span>{t.priceLabel}</span>
              <span className="text-emerald-600 text-sm">{price.toLocaleString()}đ {lang === 'en' && `(~$${(price / 25000).toFixed(2)})`}</span>
            </div>
            <input
              type="range"
              min="35000"
              max="65000"
              step="1000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-[10px] text-stone-400">
              <span>35,000đ ({lang === 'en' ? 'Budget' : 'Bình dân'})</span>
              <span>45,000đ ({lang === 'en' ? 'Sweet-spot' : 'Điểm vàng'})</span>
              <span>65,000đ ({lang === 'en' ? 'Premium' : 'Cao cấp'})</span>
            </div>
          </div>

          {/* Daily Volume Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-stone-700">
              <span>{t.volumeLabel}</span>
              <span className="text-emerald-600 text-sm">{dailyVolume} {lang === 'en' ? 'units' : 'suất'}</span>
            </div>
            <input
              type="range"
              min="80"
              max="500"
              step="10"
              value={dailyVolume}
              onChange={(e) => setDailyVolume(Number(e.target.value))}
              className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-[10px] text-stone-400">
              <span>80 {lang === 'en' ? 'units (Launch)' : 'suất (Mới mở)'}</span>
              <span>250 {lang === 'en' ? 'units (Steady)' : 'suất (Đều đặn)'}</span>
              <span>500 {lang === 'en' ? 'units (Scale)' : 'suất (Công suất đỉnh)'}</span>
            </div>
          </div>

          {/* COGS Percent Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-stone-700">
              <span>{t.cogsLabel}</span>
              <span className="text-amber-600 text-sm">{cogsPercent}%</span>
            </div>
            <input
              type="range"
              min="24"
              max="42"
              step="1"
              value={cogsPercent}
              onChange={(e) => setCogsPercent(Number(e.target.value))}
              className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[10px] text-stone-400">
              <span>25% ({lang === 'en' ? 'Co-op wholesale' : 'Hợp tác xã sỉ'})</span>
              <span>30-32% ({lang === 'en' ? 'Optimal baseline' : 'Mức chuẩn'})</span>
              <span>42% ({lang === 'en' ? 'Retail market' : 'Mua lẻ'})</span>
            </div>
          </div>

          {/* Operating Costs */}
          <div className="pt-4 border-t border-stone-200 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600">
              {t.opexTitle}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-stone-600 block mb-1">{t.rentLabel}</label>
                <div className="relative">
                  <input
                    type="number"
                    step="500000"
                    value={rentCost}
                    onChange={(e) => setRentCost(Number(e.target.value))}
                    className="w-full text-xs font-bold bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-stone-800"
                  />
                  <span className="absolute right-3 top-2.5 text-[10px] text-stone-400">VND/mo</span>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-stone-600 block mb-1">{t.laborLabel}</label>
                <div className="relative">
                  <input
                    type="number"
                    step="1000000"
                    value={laborCost}
                    onChange={(e) => setLaborCost(Number(e.target.value))}
                    className="w-full text-xs font-bold bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-stone-800"
                  />
                  <span className="absolute right-3 top-2.5 text-[10px] text-stone-400">VND/mo</span>
                </div>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-stone-600 block mb-1">{t.utilitiesLabel}</label>
              <div className="relative">
                <input
                  type="number"
                  step="500000"
                  value={packagingAndUtilities}
                  onChange={(e) => setPackagingAndUtilities(Number(e.target.value))}
                  className="w-full text-xs font-bold bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-stone-800"
                />
                <span className="absolute right-3 top-2.5 text-[10px] text-stone-400">VND/mo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results & Projections Column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main Financial Dashboard Card */}
          <div className="bg-stone-900 text-white p-6 sm:p-8 rounded-3xl border border-stone-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {t.resultsTitle}
              </span>
              <span className="text-xs text-stone-400">
                {lang === 'en' ? 'Capex:' : 'Vốn đầu tư:'} {initialCap.toLocaleString()}đ {lang === 'en' && `(~$${Math.round(initialCap / 25000)})`}
              </span>
            </div>

            {/* Top KPI Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-stone-800/90 rounded-2xl p-4 border border-stone-700">
                <span className="text-[11px] text-stone-400 block mb-0.5">{t.monthlyRevenue}</span>
                <div className="text-2xl font-black text-white">
                  {Math.round(monthlyRevenue / 1000000)}M VND
                </div>
                <span className="text-[10px] text-stone-400">
                  {lang === 'en' ? `~$${Math.round(monthlyRevenue / 25000).toLocaleString()} USD` : `(${monthlyRevenue.toLocaleString()}đ)`}
                </span>
              </div>

              <div className="bg-emerald-950/80 rounded-2xl p-4 border border-emerald-700/60">
                <span className="text-[11px] text-emerald-400 block mb-0.5">{t.grossProfit}</span>
                <div className="text-2xl font-black text-emerald-300">
                  {grossMargin.toFixed(1)}%
                </div>
                <span className="text-[10px] text-emerald-400">
                  {Math.round(monthlyGrossProfit / 1000000)}M VND/mo
                </span>
              </div>
            </div>

            {/* Bottom KPI: Net Profit & Breakeven */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-950/80 rounded-2xl p-4 border border-amber-700/60">
                <span className="text-[11px] text-amber-400 block mb-0.5">{t.netProfit}</span>
                <div className="text-2xl font-black text-amber-300">
                  {monthlyNetProfit > 0 ? `${Math.round(monthlyNetProfit / 1000000)}M VND` : (lang === 'en' ? 'Loss' : 'Lỗ')}
                </div>
                <span className="text-[10px] text-amber-400">{lang === 'en' ? 'Net Margin:' : 'Biên ròng:'} {netMargin.toFixed(1)}%</span>
              </div>

              <div className="bg-stone-800/90 rounded-2xl p-4 border border-stone-700">
                <span className="text-[11px] text-stone-400 block mb-0.5">{t.breakeven}</span>
                <div className="text-2xl font-black text-white">
                  {monthlyNetProfit > 0 ? `~${breakevenMonths} ${lang === 'en' ? 'Mo' : 'Tháng'}` : (lang === 'en' ? 'N/A' : 'Chưa hòa vốn')}
                </div>
                <span className="text-[10px] text-stone-400">({breakevenDays} {lang === 'en' ? 'days' : 'ngày'})</span>
              </div>
            </div>

            {/* Structural Breakdown list */}
            <div className="space-y-2 pt-2 border-t border-stone-800 text-xs">
              <div className="flex justify-between text-stone-400">
                <span>(-) {lang === 'en' ? `Cost of Goods Sold (COGS ${cogsPercent}%):` : `Giá Vốn Hàng Bán (COGS ${cogsPercent}%):`}</span>
                <span className="text-stone-300 font-mono">-{Math.round(cogsTotal).toLocaleString()}đ</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>(-) {lang === 'en' ? 'Operating Expenses (OpEx):' : 'Chi Phí Cố Định Vận Hành (OpEx):'}</span>
                <span className="text-stone-300 font-mono">-{totalOpex.toLocaleString()}đ</span>
              </div>
            </div>
          </div>

          {/* Strategic Insight Box */}
          <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-200">
            <div className="flex items-center space-x-2 text-emerald-900 font-bold text-xs uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{t.insightTitle}</span>
            </div>
            <p className="text-xs text-emerald-800 leading-relaxed">
              {t.insightText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
