import React from "react";
import { CUCHI_STATS } from "../data/cuchiData";
import {
  Compass,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  ExternalLink,
} from "lucide-react";

interface HeroProps {
  onHistory: () => void;
  onCulture: () => void;
  onCuisine: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onHistory,
  onCulture,
  onCuisine,
}) => {

  return (
    <section className="relative w-full bg-[#243D2B] text-[#FAF6ED] overflow-hidden border-b-4 border-[#617A50]">
      {/* Background with user's authentic Củ Chi entrance sign photo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity filter contrast-125"
        style={{
          backgroundImage: `url('/CuChi/assets/aistudio/image_eb7c3077.png')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#243D2B]/95 via-[#243D2B]/85 to-[#243D2B]/60" />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20 lg:py-24">
        {/* Top Kicker & 12A5 Circular Stamp */}
        <div className="flex items-start justify-center gap-4 mb-4">
          <div>
            <div className="bg-[#008000] rounded-lg text-center text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-[#FAF6ED]/90 font-semibold mb-4">
              DI TÍCH QUỐC GIA ĐẶC BIỆT
            </div>
            {/* Title with Verdana font as explicitly requested */}
            <h1
              style={{
                fontFamily: "Verdana, 'Be Vietnam Pro', 'Oswald', sans-serif",
              }}
              className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight text-[#FAF6ED] leading-none mb-3 drop-shadow-lg"
            >
              CỦ CHI
            </h1>
            <div className="text-center text-xs md:text-sm font-mono uppercase tracking-[0.25em] text-[#FAF6ED]/95 font-bold mb-6">
              DẤU ẤN LỊCH SỬ · SẮC MÀU VĂN HÓA
            </div>
          </div>
          {/* 12A5 Circular Stamp Badge matching image */}
        </div>

        {/* 2-Column Editorial Grid matching image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Left Column: Excerpt & Action Buttons (7 cols) */}
          <div className="lg:col-start-3 lg:col-span-8 space-y-6">
            <p className="font-body text-base md:text-lg text-[#FAF6ED]/90 leading-relaxed text-center">
              Nằm ở cửa ngõ Tây Bắc Thành phố Hồ Chí Minh, Củ Chi là bản trường
              ca bất tử của lòng dũng cảm với mạng lưới địa đạo dài hơn 250km
              xuyên lòng đất, đền tưởng niệm linh thiêng bên bờ sông Sài Gòn,
              làng nghề bánh tráng trăm năm và những vườn cây trái trĩu ngọt
              phù sa.
            </p>
          </div>
        </div>

        {/* Bottom Verified Stats Ribbon */}
        <div className="pt-6 border-t border-[#FAF6ED]/20 grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 ">
          <div className="border-l-2 border-[#C76B45] pl-3">
            <div className="text-xs font-mono text-[#FAF6ED]/70 uppercase">
              Chiều dài địa đạo
            </div>
            <div className="font-heading text-3xl md:text-4xl text-[#FAF6ED] mt-0.5">
              &gt; 250 KM
            </div>
            <div className="text-[11px] text-[#FAF6ED]/70">
              3 tầng ngầm kiên cố
            </div>
          </div>

          <div className="border-l-2 border-[#617A50] pl-3">
            <div className="text-xs font-mono text-[#FAF6ED]/70 uppercase">
              Ghi danh Đền Bến Dược
            </div>
            <div className="font-heading text-3xl md:text-4xl text-[#FAF6ED] mt-0.5">
              44.752
            </div>
            <div className="text-[11px] text-[#FAF6ED]/70">
              Anh hùng Liệt sĩ
            </div>
          </div>

          <div className="border-l-2 border-[#C76B45] pl-3">
            <div className="text-xs font-mono text-[#FAF6ED]/70 uppercase">
              Diện tích tự nhiên
            </div>
            <div className="font-heading text-3xl md:text-4xl text-[#FAF6ED] mt-0.5">
              434,77 KM²
            </div>
            <div className="text-[11px] text-[#FAF6ED]/70">
              20 xã và 1 thị trấn
            </div>
          </div>

          <div className="border-l-2 border-[#617A50] pl-3">
            <div className="text-xs font-mono text-[#FAF6ED]/70 uppercase">
              Danh hiệu cao quý
            </div>
            <div className="font-heading text-2xl md:text-3xl text-[#FAF6ED] mt-0.5">
              ĐẤT THÉP
            </div>
            <div className="text-[11px] text-[#FAF6ED]/70">
              Trao tặng ngày 17/9/1967
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Div số 1: Chuyển đến Bản đồ văn hóa */}
          <div
            onClick={() => onHistory()}
            className="cursor-pointer p-6 bg-[#243D2B] text-[#FAF6ED] rounded-lg hover:bg-[#617A50] transition-all"
          >
            <h3>Lịch sử & Di tích</h3>
            <p>Tìm hiểu các mốc son lịch sử hào hùng</p>
          </div>

          {/* Div số 2: Chuyển đến Lịch sử & Di tích */}
          <div
            onClick={() => onCulture()}
            className="cursor-pointer p-6 bg-[#243D2B] text-[#FAF6ED] rounded-lg hover:bg-[#617A50] transition-all"
          >
            <h3>Văn hóa & Làng nghề</h3>
            <p>Khám phá nét văn hóa đặc trưng</p>
          </div>

          {/* Div số 3: Chuyển đến Ẩm thực & Đặc sản */}
          <div
            onClick={() => onCuisine()}
            className="cursor-pointer p-6 bg-[#243D2B] text-[#FAF6ED] rounded-lg hover:bg-[#617A50] transition-all"
          >
            <h3>Ẩm thực & Đặc sản</h3>
            <p>Thưởng thức hương vị vùng đất thép</p>
          </div>
        </div>
      </div>
    </section>
  );
};
