import React from 'react';
import { CLASS_12A5_MEMBERS } from '../data/cuchiData';
import { Award, BookOpen, CheckCircle, GraduationCap, Users } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FAF6ED] border-2 border-[#243D2B] rounded-lg p-6 md:p-10 shadow-md">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#243D2B] text-[#FAF6ED] text-xs font-mono uppercase tracking-widest mb-3">
          <GraduationCap className="w-4 h-4 text-[#C76B45]" />
          Dự Án Nghiên Cứu Học Tập Địa Phương
        </div>
        <h2 className="font-heading text-4xl md:text-5xl text-[#243D2B] tracking-wide mb-3">
          TẬP THỂ HỌC SINH LỚP 12A5
        </h2>
        <div className="font-editorial text-lg italic text-[#C76B45] mb-4">
          "Đưa hào khí Đất Thép Thành Đồng đến gần hơn với thế hệ trẻ"
        </div>
        <p className="text-sm text-[#352C24]/85 leading-relaxed font-body">
          Website là công trình học tập liên môn Lịch Sử — Địa Lý — Giáo Dục Địa Phương và Công Nghệ Tin Học của nhóm học sinh lớp 12A5, hướng đến buổi báo cáo chuyên đề và đánh giá học tập.
        </p>
      </div>

      {/* 5 Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {CLASS_12A5_MEMBERS.map((member) => (
          <div
            key={member.id}
            className="bg-[#F2E8D5] border-2 border-[#243D2B] rounded-lg p-5 flex flex-col justify-between paper-shadow hover:paper-shadow-lg transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-[#352C24]/15 pb-2">
                <span className="font-heading text-2xl text-[#C76B45]">
                  0{member.id}
                </span>
                <span className="text-[11px] font-mono text-[#243D2B] font-bold uppercase tracking-wider bg-[#FAF6ED] px-2 py-0.5 rounded border border-[#352C24]/10">
                  Lớp 12A5
                </span>
              </div>

              <h3 className="font-heading text-2xl text-[#243D2B] mb-1">
                {member.name}
              </h3>

              <div className="text-xs font-bold text-[#617A50] mb-3 font-mono leading-tight">
                {member.role}
              </div>

              <p className="text-xs text-[#352C24]/85 leading-relaxed mb-4">
                {member.bio}
              </p>
            </div>

            <div className="pt-3 border-t border-[#352C24]/15">
              <div className="text-[11px] font-mono font-bold text-[#243D2B] uppercase mb-1.5 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-[#617A50]" />
                Nhiệm vụ phụ trách:
              </div>
              <ul className="text-xs text-[#352C24]/80 space-y-1">
                {member.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#C76B45]">›</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};
