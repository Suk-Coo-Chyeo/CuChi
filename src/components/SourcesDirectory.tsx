import React from 'react';
import { OFFICIAL_SOURCES } from '../data/cuchiData';
import { ShieldCheck, ExternalLink, FileText, CheckCircle2, AlertTriangle, BookCheck } from 'lucide-react';

export const SourcesDirectory: React.FC = () => {
  return (
    <section className="w-full bg-[#FAF6ED] border-2 border-[#243D2B] rounded-lg p-6 md:p-8 shadow-md">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-[#243D2B]/20 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C76B45] font-bold mb-1">
            <BookCheck className="w-4 h-4" />
            Phương Pháp Luận & Kiểm Chứng Dữ Kiện
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-[#243D2B] tracking-wide">
            HỆ THỐNG NGUỒN TƯ LIỆU CHÍNH THỐNG
          </h2>
        </div>

        <div className="flex items-center gap-2 bg-[#243D2B] text-[#FAF6ED] px-3.5 py-1.5 rounded text-xs font-mono">
          <ShieldCheck className="w-4 h-4 text-[#C76B45]" />
          <span>Quy trình xác minh 4 bước</span>
        </div>
      </div>

      {/* Verification workflow steps */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { step: '01', title: 'Thu thập tư liệu', desc: 'Từ cổng thông tin chính thức & di tích' },
          { step: '02', title: 'Khảo sát đối chiếu', desc: 'Đo đạc tọa độ GPS & phỏng vấn địa phương' },
          { step: '03', title: 'Hội đồng kiểm duyệt', desc: 'Nhóm 12A5 và giáo viên cố vấn thẩm định' },
          { step: '04', title: 'Xuất bản công khai', desc: 'Gắn nhãn Đã Xác Minh & nguồn minh bạch' }
        ].map((item) => (
          <div
            key={item.step}
            className="bg-[#F2E8D5] p-3 rounded border border-[#352C24]/15 flex flex-col justify-between"
          >
            <div className="font-heading text-2xl text-[#C76B45] mb-1">{item.step}</div>
            <div>
              <div className="text-xs font-bold text-[#243D2B] font-mono mb-0.5">{item.title}</div>
              <div className="text-[11px] text-[#352C24]/75 leading-tight">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Official Sources Table */}
      <div className="space-y-4">
        <h3 className="font-heading text-2xl text-[#243D2B] uppercase tracking-wide">
          Danh mục cơ quan & văn bản dẫn chứng
        </h3>

        <div className="space-y-3">
          {OFFICIAL_SOURCES.map((source, idx) => (
            <div
              key={source.id}
              className="bg-[#F2E8D5] border border-[#352C24]/15 rounded-lg p-4 transition-all hover:border-[#243D2B]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold bg-[#243D2B] text-[#FAF6ED] px-2 py-0.5 rounded">
                    Nguồn 0{idx + 1}
                  </span>
                  <h4 className="font-heading text-xl text-[#243D2B] tracking-wide">
                    {source.name}
                  </h4>
                </div>

                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#FAF6ED] bg-[#617A50] hover:bg-[#243D2B] px-3 py-1 rounded transition-colors font-mono self-start md:self-auto"
                >
                  Kiểm tra liên kết gốc <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-[#352C24]/85 mb-3 bg-[#FAF6ED] p-2.5 rounded border border-[#352C24]/10">
                <div>
                  <strong>Cơ quan:</strong> {source.organization}
                </div>
                <div>
                  <strong>Thời điểm kiểm tra:</strong> {source.verifiedDate}
                </div>
                <div className="flex items-center gap-1 text-[#243D2B] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#617A50]" />
                  <span>Trạng thái: Đã thẩm định đạt chuẩn</span>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-mono font-bold text-[#C76B45] uppercase mb-1">
                  Dữ liệu được xác nhận bởi nguồn này:
                </div>
                <ul className="text-xs text-[#352C24] space-y-1">
                  {source.supportedFacts.map((fact, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-1.5">
                      <span className="text-[#617A50] font-bold">•</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
