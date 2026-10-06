import React, { useState, useEffect } from 'react';
import { 
  X, QrCode, Sparkles, CheckCircle2, Coffee
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface InteractivePrototypesModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialModelId?: string;
}

export const InteractivePrototypesModal: React.FC<InteractivePrototypesModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialModelId = 'mekong-bowl'
}) => {
  const [activeModel, setActiveModel] = useState<string>(initialModelId);
  const t = TRANSLATIONS[lang].demoModal;

  useEffect(() => {
    if (initialModelId) {
      setActiveModel(initialModelId);
    }
  }, [initialModelId]);

  // Demo 1 State (Smart Fridge)
  const [fridgeUnlocked, setFridgeUnlocked] = useState<boolean>(false);
  const [selectedBowl, setSelectedBowl] = useState<string>('Gà Nướng Mắm Me');
  const [microwaveTimer, setMicrowaveTimer] = useState<number | null>(null);

  // Demo 2 State (Wrap & Run 14:30)
  const [energyLevel, setEnergyLevel] = useState<number>(35); // 35% at 14:30

  // Demo 3 State (Bento Group Order & Split Bill)
  const [teamMembers, setTeamMembers] = useState([
    { name: lang === 'en' ? 'Tram (Accounting)' : 'Trâm (Kế toán)', dish: lang === 'en' ? 'Wild Pepper Basa Bento' : 'Bento Cá Basa Nướng Tiêu Lốt', price: 45000 },
    { name: lang === 'en' ? 'Minh (Lead Engineer)' : 'Minh (Kỹ thuật)', dish: lang === 'en' ? 'Pork Tenderloin Soybean Bento' : 'Bento Thăn Heo Sốt Tương Hạt', price: 46000 },
    { name: lang === 'en' ? 'Vy (HR Admin)' : 'Vy (HR Admin)', dish: lang === 'en' ? 'Coconut Nectar Roast Chicken Bento' : 'Bento Ức Gà Mật Hoa Dừa', price: 44000 }
  ]);
  const [newMemberName, setNewMemberName] = useState<string>('');

  if (!isOpen) return null;

  // Reheat countdown effect
  const handleStartMicrowave = () => {
    setMicrowaveTimer(10);
    const interval = setInterval(() => {
      setMicrowaveTimer(prev => {
        if (prev === null || prev <= 1) {
          clearInterval(interval);
          return null;
        }
        return prev - 1;
      });
    }, 500);
  };

  const handleDrinkEnergy = () => {
    setEnergyLevel(98);
  };

  const handleAddMember = () => {
    if (!newMemberName.trim()) return;
    setTeamMembers(prev => [
      ...prev,
      { 
        name: newMemberName.trim(), 
        dish: lang === 'en' ? 'Wild Pepper Basa Bento' : 'Bento Cá Basa Nướng Tiêu Lốt', 
        price: 45000 
      }
    ]);
    setNewMemberName('');
  };

  const groupTotal = teamMembers.reduce((sum, item) => sum + item.price, 0);
  const isFreeship = teamMembers.length >= 3;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-stone-900 border border-stone-800 rounded-3xl text-stone-100 shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white">
                {t.title}
              </h3>
              <p className="text-xs text-stone-400">
                {t.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Model Selector Bar */}
        <div className="bg-stone-950 p-3 border-b border-stone-800">
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'mekong-bowl', name: t.model1Title, sub: t.model1Sub },
              { id: 'wrap-and-run', name: t.model2Title, sub: t.model2Sub },
              { id: 'bep-lanh', name: t.model3Title, sub: t.model3Sub }
            ].map(m => (
              <button
                key={m.id}
                onClick={() => setActiveModel(m.id)}
                className={`p-3 rounded-xl text-left transition-all cursor-pointer ${
                  activeModel === m.id
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-stone-900 text-stone-400 hover:text-stone-200 hover:bg-stone-850'
                }`}
              >
                <div className="font-bold text-xs sm:text-sm">{m.name}</div>
                <div className="text-[10px] text-stone-300 opacity-80">{m.sub}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Sandbox Area */}
        <div className="p-6 sm:p-8">
          {/* SIMULATION 1: MEKONG BOWL SMART FRIDGE */}
          {activeModel === 'mekong-bowl' && (
            <div className="space-y-6">
              <div className="bg-stone-800/80 rounded-2xl p-6 border border-stone-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {lang === 'en' ? 'Context: SHB Tower Pantry, Can Tho CBD — 11:45 AM' : 'Bối cảnh: Pantry Tòa Nhà SHB Cần Thơ — 11:45 AM'}
                  </span>
                  <span className="text-xs bg-stone-700 text-stone-300 px-2 py-0.5 rounded">
                    {lang === 'en' ? '0-Min Wait • 0-Fee Delivery' : '0 Phút Chờ • 0đ Phí Ship'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  {/* Left: Fridge Interaction */}
                  <div className="space-y-4">
                    <h4 className="text-base font-bold text-white">
                      {lang === 'en' ? 'Step 1: Scan QR Code to Unlock Fresh Smart Fridge' : 'Bước 1: Quét Mã QR Mở Tủ Lạnh Smart Fridge'}
                    </h4>

                    {!fridgeUnlocked ? (
                      <div className="text-center p-6 bg-stone-900 rounded-2xl border border-stone-700 space-y-3">
                        <QrCode className="w-16 h-16 mx-auto text-emerald-400" />
                        <p className="text-xs text-stone-400">
                          {lang === 'en'
                            ? 'Simulate tap-to-scan on the fridge digital door panel:'
                            : 'Chạm vào nút bên dưới để mô phỏng quét mã ZaloPay / VietQR trên cửa tủ:'}
                        </p>
                        <button
                          onClick={() => setFridgeUnlocked(true)}
                          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all cursor-pointer shadow-lg shadow-emerald-900/50"
                        >
                          {lang === 'en' ? 'Scan QR & Unlock (1-Click)' : 'Quét QR Mở Cửa Tủ (1 Click)'}
                        </button>
                      </div>
                    ) : (
                      <div className="p-5 bg-emerald-950/80 rounded-2xl border border-emerald-600 space-y-3">
                        <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                          <CheckCircle2 className="w-5 h-5" />
                          <span>{lang === 'en' ? 'Door Unlocked! Select Your Fresh Bowl:' : 'Cửa Tủ Đã Mở! Chọn Món Yêu Thích:'}</span>
                        </div>

                        <div className="space-y-2">
                          {[
                            { name: lang === 'en' ? 'Tamarind Glaze Roast Chicken' : 'Gà Nướng Mắm Me', calo: 450, price: '45,000đ' },
                            { name: lang === 'en' ? 'Rainbow Noodles & Umami Dip' : 'Bún Ngũ Sắc Kho Quẹt', calo: 420, price: '48,000đ' },
                            { name: lang === 'en' ? 'Wild Long Pepper River Basa' : 'Cá Basa Tiêu Lốt', calo: 470, price: '46,000đ' }
                          ].map(dish => (
                            <button
                              key={dish.name}
                              onClick={() => setSelectedBowl(dish.name)}
                              className={`w-full p-3 rounded-xl text-left text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                                selectedBowl === dish.name
                                  ? 'bg-emerald-600 text-white ring-2 ring-emerald-400'
                                  : 'bg-stone-800 text-stone-300 hover:bg-stone-750'
                              }`}
                            >
                              <span>{dish.name} ({dish.calo} kcal)</span>
                              <span className="text-amber-300">{dish.price}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right: Microwave Reheating */}
                  <div className="bg-stone-900 p-6 rounded-2xl border border-stone-800 space-y-4 text-center">
                    <h4 className="text-sm font-bold text-stone-300">
                      {lang === 'en' ? 'Step 2: 60-Second Microwave Reheating' : 'Bước 2: Hâm Nóng Bằng Lò Vi Sóng Pantry (60 giây)'}
                    </h4>

                    <div className="w-36 h-28 mx-auto bg-stone-950 rounded-xl border border-stone-700 flex flex-col items-center justify-center p-3">
                      {microwaveTimer !== null ? (
                        <div className="space-y-1">
                          <div className="text-2xl font-black text-amber-400 animate-pulse">
                            00:{microwaveTimer < 10 ? `0${microwaveTimer}` : microwaveTimer}
                          </div>
                          <div className="text-[10px] text-stone-400">{lang === 'en' ? 'Heating evenly...' : 'Đang hâm nóng đều...'}</div>
                        </div>
                      ) : (
                        <div className="text-xs text-stone-500 font-medium">
                          {fridgeUnlocked ? (lang === 'en' ? 'Ready to Reheat' : 'Sẵn sàng hâm nóng') : (lang === 'en' ? 'Fridge Locked' : 'Chưa lấy hộp ăn')}
                        </div>
                      )}
                    </div>

                    <button
                      disabled={!fridgeUnlocked || microwaveTimer !== null}
                      onClick={handleStartMicrowave}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        fridgeUnlocked && microwaveTimer === null
                          ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg'
                          : 'bg-stone-800 text-stone-600 cursor-not-allowed'
                      }`}
                    >
                      {lang === 'en' ? 'Start Microwave' : 'Bấm Hâm Nóng Microwave'}
                    </button>

                    <p className="text-[11px] text-stone-400 leading-relaxed">
                      {lang === 'en'
                        ? 'Thermal kraft paper bowl holds heat securely. Steaming hot, aromatic tamarind glazed chicken ready in 1 minute flat.'
                        : 'Tô giấy Kraft chịu nhiệt tối ưu. Chỉ mất 1 phút để có bữa trưa bốc khói nghi ngút, thơm lừng mắm me thốt nốt.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SIMULATION 2: WRAP & RUN 14:30 RESCUE */}
          {activeModel === 'wrap-and-run' && (
            <div className="space-y-6">
              <div className="bg-stone-800/80 rounded-2xl p-6 border border-stone-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {lang === 'en' ? 'Context: 14:30 PM — Cubicle Desk Under Fluorescent Lights' : 'Bối cảnh: Đồng hồ điểm 14:30 PM — Bàn làm việc công sở'}
                  </span>
                  <span className="text-xs bg-rose-950 text-rose-400 px-2.5 py-0.5 rounded border border-rose-800">
                    {lang === 'en' ? 'Critical Post-Prandial Glucose Slump' : 'Cơn Buồn Ngủ Sụp Mí Tột Độ'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-4">
                    {/* Energy Bar */}
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-stone-300">{lang === 'en' ? 'Cognitive Energy & Focus Level:' : 'Năng Lượng & Tập Trung Hiện Tại:'}</span>
                        <span className={energyLevel < 50 ? 'text-rose-400' : 'text-emerald-400'}>
                          {energyLevel}% {energyLevel < 50 ? (lang === 'en' ? '(Severe Brain Fog)' : '(Đang buồn ngủ)') : (lang === 'en' ? '(Peak Focus)' : '(Tỉnh táo 100%)')}
                        </span>
                      </div>
                      <div className="w-full h-4 bg-stone-900 rounded-full overflow-hidden p-0.5 border border-stone-700">
                        <div 
                          className={`h-full rounded-full transition-all duration-700 ${
                            energyLevel < 50 ? 'bg-rose-500' : 'bg-emerald-500'
                          }`}
                          style={{ width: `${energyLevel}%` }}
                        />
                      </div>
                    </div>

                    <div className="bg-stone-900 p-4 rounded-xl border border-stone-800 space-y-2">
                      <div className="text-xs font-bold text-stone-300">
                        {lang === 'en' ? 'Old Habit: 55k Milk Tea Order (50g Refined Sugars)' : 'Thói quen cũ: Gọi trà sữa 55k (50g đường tinh luyện)'}
                      </div>
                      <p className="text-[11px] text-stone-400">
                        {lang === 'en'
                          ? 'Causes an immediate insulin spike and severe crash, packing lower belly visceral fat.'
                          : 'Đường huyết vọt lên rồi tụt dốc, gây tích mỡ vòng eo và cảm giác dằn vặt (guilt).'}
                      </p>
                    </div>

                    <div className="bg-amber-950/70 p-4 rounded-xl border border-amber-600 space-y-2">
                      <div className="text-xs font-bold text-amber-300">
                        {lang === 'en' ? 'Wrap & Run Solution: 14:30 Energy Combo (55,000 VND)' : 'Giải pháp Wrap & Run: Combo Tỉnh Táo 55.000đ'}
                      </div>
                      <p className="text-[11px] text-amber-100">
                        {lang === 'en'
                          ? '1 Flank steak black pepper wrap (1-handed typing) + 1 Low-GI Nam Roi Pomelo Cold-Brew.'
                          : '1 Wrap nạc bò tiêu Cần Thơ (cầm 1 tay gõ phím) + 1 Cold-brew Bưởi Năm Roi Hạt Chia Low-GI.'}
                      </p>
                      <button
                        onClick={handleDrinkEnergy}
                        className="w-full mt-2 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs transition-all cursor-pointer shadow-lg"
                      >
                        {lang === 'en' ? '⚡ Take Wrap & Run Energy Combo!' : '⚡ Nạp Combo Wrap & Run Giải Cứu Não!'}
                      </button>
                    </div>
                  </div>

                  {/* Packaging ergonomics visualization */}
                  <div className="bg-stone-950 p-6 rounded-2xl border border-stone-800 text-center space-y-3">
                    <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 mx-auto flex items-center justify-center">
                      <Coffee className="w-8 h-8" />
                    </div>
                    <h5 className="font-bold text-sm text-white">
                      {lang === 'en' ? 'Ergonomic 2-Tier Tear-Off Tube' : 'Thiết Kế Ống Xé Công Thái Học (Tear-Off Tube)'}
                    </h5>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      {lang === 'en'
                        ? 'Tear down as you eat. Fingers stay 100% clean away from keyboard and documents. Can Tho black pepper warmth stimulates cerebral circulation instantly!'
                        : 'Ăn đến đâu xé tầng giấy đến đó. Tay không dính sốt, vừa xem báo cáo vừa nạp protein nạc. Vị tiêu Cần Thơ ấm nóng kích hoạt tuần hoàn máu não ngay lập tức!'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SIMULATION 3: BẾP LÀNH ĐÔ THỊ GROUP ORDER & SPLIT BILL */}
          {activeModel === 'bep-lanh' && (
            <div className="space-y-6">
              <div className="bg-stone-800/80 rounded-2xl p-6 border border-stone-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    {lang === 'en' ? 'Context: Department Group Pooling & Auto Split-Bill Widget' : 'Bối cảnh: Gom Đơn Phòng Ban & Tính Năng Chia Tiền Tự Động (Auto Split-Bill)'}
                  </span>
                  <span className={`text-xs px-2.5 py-0.5 rounded font-bold ${
                    isFreeship ? 'bg-emerald-900 text-emerald-300 border border-emerald-600' : 'bg-amber-900 text-amber-300'
                  }`}>
                    {isFreeship ? (lang === 'en' ? '🎉 100% FREESHIP UNLOCKED' : '🎉 ĐÃ ĐẠT FREESHIP 100%') : (lang === 'en' ? 'Add more for freeship' : 'Đặt thêm để freeship')}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Team Cart */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-bold uppercase text-stone-400">
                      {lang === 'en' ? `Team Department Cart (${teamMembers.length} portions):` : `Danh Sách Đồng Nghiệp Trong Phòng (${teamMembers.length} phần):`}
                    </h5>

                    <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                      {teamMembers.map((member, idx) => (
                        <div key={idx} className="bg-stone-900 p-3 rounded-xl border border-stone-800 flex items-center justify-between text-xs">
                          <div>
                            <div className="font-bold text-white">{member.name}</div>
                            <div className="text-stone-400 text-[11px] truncate max-w-[180px]">{member.dish}</div>
                          </div>
                          <span className="font-bold text-amber-400">{member.price.toLocaleString()}đ</span>
                        </div>
                      ))}
                    </div>

                    {/* Add member form */}
                    <div className="flex space-x-2 pt-2">
                      <input
                        type="text"
                        placeholder={lang === 'en' ? 'Colleague name...' : 'Tên đồng nghiệp mới...'}
                        value={newMemberName}
                        onChange={(e) => setNewMemberName(e.target.value)}
                        className="flex-1 bg-stone-900 border border-stone-700 rounded-xl px-3 py-2 text-xs text-white"
                      />
                      <button
                        onClick={handleAddMember}
                        className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold cursor-pointer"
                      >
                        + {lang === 'en' ? 'Add' : 'Thêm'}
                      </button>
                    </div>
                  </div>

                  {/* Auto Split-Bill Result */}
                  <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-stone-800">
                      <span className="text-xs text-stone-400">{lang === 'en' ? 'Group Total:' : 'Tổng Tiền Cả Phòng:'}</span>
                      <span className="text-xl font-black text-white">{groupTotal.toLocaleString()}đ</span>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <span className="text-stone-400">{lang === 'en' ? 'Delivery Fee:' : 'Phí Giao Hàng:'}</span>
                      <span className="text-emerald-400 font-bold">{lang === 'en' ? '0 VND (Saved 20,000 VND)' : '0đ (Tiết kiệm 20.000đ)'}</span>
                    </div>

                    <div className="bg-emerald-950/80 p-3.5 rounded-xl border border-emerald-600 space-y-1.5">
                      <div className="text-xs font-bold text-emerald-300 flex items-center space-x-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>{lang === 'en' ? 'Itemized QR Codes Generated Per Member:' : 'Mỗi người quét VietQR thanh toán đúng phần của mình:'}</span>
                      </div>
                      <p className="text-[11px] text-emerald-100">
                        {lang === 'en'
                          ? 'No more awkward debt tracking for the team lead. Everyone pays their exact amount via banking app. Hot bagasse bentos delivered at 11:30 AM sharp!'
                          : 'Không còn cảnh trưởng nhóm ứng tiền túi trước rồi đi đòi từng 45k lẻ. Cả phòng vui vẻ, cơm bento bã mía giao đúng 11:30!'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-950 border-t border-stone-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-bold transition-all cursor-pointer"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
