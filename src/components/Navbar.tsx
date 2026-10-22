import React, { useState } from 'react';
import {
  Compass,
  MapPin,
  Bot,
  Award,
  Lock,
  Search,
  Menu,
  X,
  BookOpen,
  Users,
  Utensils,
  Landmark
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  exploreCategory: string;
  onNavigate: (sectionId: string, id2: string) => void;
  onOpenPresentation: () => void;
  onOpenAdmin: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  exploreCategory,
  onNavigate,
  onOpenPresentation,
  onOpenAdmin,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAV_ITEMS = [
    { id2: "", id: 'hero', label: 'Trang chủ', icon: Landmark },
    { id2: "", id: 'map', label: 'Bản đồ văn hóa', icon: MapPin },
    { id2: 'explore', id: 'history', label: 'Lịch sử & Di tích', icon: BookOpen },
    { id2: 'explore', id: 'culture', label: 'Văn hóa & Làng nghề', icon: Compass },
    { id2: 'explore', id: 'cuisine', label: 'Ẩm thực & Đặc sản', icon: Utensils },
    { id2: "", id: 'ai', label: 'Trợ lý AI Củ Chi', icon: Bot },
    { id2: "", id: 'gallery', label: 'Thư viện ảnh', icon: Compass },
    // { id: 'sources', label: 'Nguồn kiểm chứng', icon: BookOpen },
    { id2: "", id: 'team', label: 'Nhóm 12A5', icon: Users }
  ];

  const handleNavClick = (id: string, id2:string) => {
    onNavigate(id, id2);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#243D2B] text-[#FAF6ED] border-b-2 border-[#243D2B] shadow-md">
      {/* Top micro announcement bar */}
      <div className="bg-[#1C3022] text-[#FAF6ED]/75 text-[11px] font-mono px-4 py-1 flex items-center justify-between border-b border-[#FAF6ED]/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C76B45]" />
          <span>DỰ ÁN NGHIÊN CỨU LỚP 12A5 · ĐẤT THÉP THÀNH ĐỒNG CỦ CHI</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <span>Di tích Quốc gia Đặc biệt</span>
          <span>•</span>
          <span>Thành phố Hồ Chí Minh</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick('hero', "")}
          className="cursor-pointer flex items-center gap-2.5 group"
        >
          <div className="h-10 px-2 py-0.5 rounded flex items-center justify-center transition-all shadow shrink-0">
            <img
              src="/CuChi/assets/aistudio/logo.png"
              alt="Logo Lớp 12A5"
              className="h-8 w-auto object-contain"
            />
          </div>
          <div>
            <div className="font-heading text-2xl md:text-3xl tracking-wider leading-none text-[#FAF6ED] group-hover:text-[#C76B45] transition-colors">
              CỦ CHI
            </div>
            <div className="text-[10px] font-editorial italic text-[#FAF6ED]/80 tracking-wide">
              Vùng Đất Anh Hùng · Lớp 12A5
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center gap-1 text-xs font-mono font-medium">
          {NAV_ITEMS.map((item) => {
            const isActive = item.id2 === 'explore'
              ? activeSection === 'explore' && exploreCategory === item.id
              : activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.id2)}
                className={`px-2.5 py-1.5 rounded transition-all ${
                  isActive
                    ? 'bg-[#617A50] text-[#FAF6ED] font-bold shadow-sm'
                    : 'text-[#FAF6ED]/80 hover:text-[#FAF6ED] hover:bg-[#FAF6ED]/10'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="p-2 rounded bg-[#FAF6ED]/10 hover:bg-[#FAF6ED]/20 text-[#FAF6ED] transition-colors"
            title="Tìm kiếm toàn trang"
            aria-label="Tìm kiếm nội dung"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded bg-[#FAF6ED]/10 text-[#FAF6ED]"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#1C3022] border-t border-[#FAF6ED]/10 px-4 py-4 space-y-2 animate-fade-in">
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = item.id2 === 'explore'
                ? activeSection === 'explore' && exploreCategory === item.id
                : activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.id2)}
                  className={`w-full text-left px-3 py-2 rounded text-xs font-mono flex items-center gap-2.5 ${
                    isActive
                      ? 'bg-[#617A50] text-[#FAF6ED] font-bold'
                      : 'text-[#FAF6ED]/80 hover:bg-[#FAF6ED]/10'
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#C76B45]" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
