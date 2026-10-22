import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, MapPin, ShieldCheck, AlertCircle, RefreshCw, Minus, X } from 'lucide-react';
import { AIChatMessage, LocationPoint } from '../types';
import { isCuchiRelated } from '../utils/rules';
import { OFFICIAL_SOURCES } from '../data/cuchiData';

interface AIAssistantProps {
  locations: LocationPoint[];
  onOpenLocationOnMap?: (locationId: string) => void;
  isOpen: boolean;
  onToggleOpen: () => void;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ locations, onOpenLocationOnMap, onToggleOpen, isOpen}) => {
  const [messages, setMessages] = useState<AIChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Xin chào! Mình là **Trợ lý Khám phá Củ Chi**, do học sinh **Lớp 12A5** phát triển. Mình sẵn sàng đồng hành cùng bạn tìm hiểu về lịch sử kiên cường, văn hóa làng nghề, địa đạo huyền thoại và ẩm thực nức tiếng của vùng Đất Thép. Bạn muốn khám phá điều gì?',
      timestamp: 'Vừa xong',
      sources: ['Cổng thông tin UBND Huyện Củ Chi', 'Ban Quản lý Di tích Địa đạo Củ Chi']
    }
  ]);

  const [inputQuestion, setInputQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const SUGGESTED_QUESTIONS = [
    'Địa đạo Bến Dược và Bến Đình khác nhau như thế nào?',
    'Đền Bến Dược khắc tên bao nhiêu anh hùng liệt sĩ?',
    'Đặc sản củ mì và bò tơ Củ Chi có gì đặc biệt?',
    'Làng bánh tráng Phú Hòa Đông hình thành khi nào?',
    'Dự án website Củ Chi này do lớp nào thực hiện?',
    'Thủ đô của nước Pháp là thành phố nào?'
  ];

  const getLocalRAGAnswer = (q: string): { answer: string; sources: string[]; loc?: { name: string; id: string } } => {
    const qLower = q.toLowerCase();

    if (qLower.includes('ben duoc') && qLower.includes('ben dinh')) {
      return {
        answer:
          '**Khác biệt giữa Địa đạo Bến Dược và Bến Đình:**\n\n' +
          '• **Địa đạo Bến Dược (xã Phú Mỹ Hưng):** Căn cứ của Khu ủy và Bộ Tư lệnh Quân khu Sài Gòn - Chợ Lớn - Gia Định. Giữ nguyên nét mộc mạc nguyên bản, có Đền Tưởng niệm Liệt sĩ Bến Dược khắc tên 44.752 liệt sĩ và tháp 9 tầng hướng ra sông Sài Gòn.\n' +
          '• **Địa đạo Bến Đình (xã Nhuận Đức):** Căn cứ Huyện ủy Củ Chi, gần trung tâm thành phố hơn (cách Bến Dược khoảng 13km), có trường bắn thể thao quốc phòng và hệ thống hố chông ngầm.',
        sources: ['Khu Di tích Lịch sử Địa đạo Củ Chi (diadaocuchi.com.vn)', 'UBND Huyện Củ Chi'],
        loc: { name: 'Địa đạo Bến Dược', id: 'loc-1' }
      };
    }

    if (qLower.includes('bao nhieu') && (qLower.includes('liet si') || qLower.includes('ben duoc'))) {
      return {
        answer:
          'Tại **Đền Tưởng niệm Liệt sĩ Bến Dược**, có tất cả **44.752 Anh hùng Liệt sĩ** (bao gồm các Mẹ Việt Nam Anh hùng, chiến sĩ trên chiến trường Sài Gòn - Chợ Lớn - Gia Định) được tạc họ tên trang trọng trên các bức tường hoa cương quanh gian chính điện. Ngôi đền được khánh thành giai đoạn 1 năm 1995, có bài văn bia bất hủ do Cố Giáo sư Trần Văn Giàu soạn thảo.',
        sources: ['Ban Quản lý Di tích Địa đạo Củ Chi'],
        loc: { name: 'Đền Tưởng niệm Bến Dược', id: 'loc-2' }
      };
    }

    if (qLower.includes('banh trang') || qLower.includes('phu hoa dong')) {
      return {
        answer:
          '**Làng nghề Bánh tráng Phú Hòa Đông** có lịch sử hơn 100 năm (hình thành từ cuối thế kỷ 19). Bánh tráng nơi đây nổi tiếng bởi độ dẻo dai tự nhiên, không bị chua, thơm mùi gạo mới và cuốn không rách. Hiện nay làng nghề đã xuất khẩu bánh tráng sang hơn 30 quốc gia như Mỹ, Nhật Bản và Hàn Quốc.',
        sources: ['UBND Huyện Củ Chi', 'Sở Du lịch TP.HCM'],
        loc: { name: 'Làng nghề Bánh tráng Phú Hòa Đông', id: 'loc-4' }
      };
    }

    if (qLower.includes('bo to') || qLower.includes('cu mi') || qLower.includes('am thuc') || qLower.includes('an gi') || qLower.includes('dac san')) {
      return {
        answer:
          '**Ẩm thực đặc sản trứ danh Củ Chi:**\n\n' +
          '1. **Bò tơ Củ Chi:** Bê non thả đồng 5-6 tháng tuổi, thịt mềm ngọt thơm mùi sữa, da mỏng giòn rụm cuốn bánh tráng rau rừng sông Sài Gòn chấm mắm nêm đậm đà.\n' +
          '2. **Củ mì hấp nước cốt dừa:** Món ăn dân dã thời kháng chiến dưới hầm sâu, củ mì dẻo bùi béo ngậy vị nước cốt dừa rắc vừng muối mè rang thơm.\n' +
          '3. **Nước mía sầu riêng:** Thức uống giải khát mát lạnh ngọt thơm nức tiếng dọc Quốc lộ 22.',
        sources: ['Sở Du lịch TP.HCM', 'Ẩm thực Nam Bộ'],
        loc: { name: 'Bò Tơ Xuân Đào Củ Chi', id: 'loc-8' }
      };
    }

    if (qLower.includes('12a5') || qLower.includes('ai thuc hien') || qLower.includes('nhom') || qLower.includes('hoc sinh') || qLower.includes('tran anh')) {
      return {
        answer:
          'Website là sản phẩm học tập và dự án báo cáo chuyên đề của tập thể học sinh **Lớp 12A5** gồm 6 thành viên:\n\n' +
          '1. **Trần Đức Lương** (Trưởng nhóm & Nghiên cứu Lịch sử - Di tích)\n' +
          '2. **Trần Hà Phụng Nhi** (Biên tập viên Văn hóa & Ẩm thực truyền thống)\n' +
          '3. **Phan Khánh Linh** (Chuyên viên Bản đồ số & Tọa độ địa lý)\n' +
          '4. **Nguyễn Tường Lam** (Thiết kế Giao diện Retro Editorial & Media)\n' +
          '5. **Nguyễn Thị Quỳnh Như** (Kiểm định Tư liệu & Tích hợp Trợ lý AI)\n' +
          '6. **Trần Anh** (Biên tập viên Đa phương tiện & Khảo sát Thực địa)',
        sources: ['Hồ sơ dự án Lớp 12A5 (Niên khóa 2026 — 2027)']
      };
    }

    return {
      answer:
        'Củ Chi là vùng đất giàu truyền thống cách mạng nằm ở phía Tây Bắc TP. Hồ Chí Minh với diện tích hơn 434km². Nơi đây nổi tiếng với danh hiệu "Đất Thép Thành Đồng", hệ thống địa đạo dài hơn 250km được công nhận Di tích Quốc gia đặc biệt năm 2015, cùng các làng nghề thủ công trăm năm như bánh tráng Phú Hòa Đông và vùng nông nghiệp sinh thái xanh ven sông Sài Gòn.',
      sources: ['Cổng thông tin UBND Huyện Củ Chi', 'Di tích Địa đạo Củ Chi']
    };
  };

  const handleSend = async (questionText?: string) => {
    const q = (questionText || inputQuestion).trim();
    if (!q || isLoading) return;

    setInputQuestion('');

    const userMsg: AIChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: q,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    // Rule 1: Topic Relevance Gate
    const isRelated = isCuchiRelated(q);

    if (!isRelated) {
      setTimeout(() => {
        const declineMsg: AIChatMessage = {
          id: `bot-${Date.now()}`,
          sender: 'assistant',
          text: 'Xin lỗi, mình chỉ hỗ trợ những câu hỏi liên quan đến Củ Chi như lịch sử, văn hóa, địa điểm, ẩm thực và đời sống địa phương. Bạn hãy đặt câu hỏi khác về Củ Chi nhé!',
          timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
          isDeclined: true
        };
        setMessages((prev) => [...prev, declineMsg]);
        setIsLoading(false);
      }, 400);
      return;
    }

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q, history: messages })
      });

      const data = await response.json();

      let answerText = '';
      let usedSources: string[] = ['Khu Di tích Lịch sử Địa đạo Củ Chi', 'Sở Du lịch TP.HCM'];
      let relatedLoc: { name: string; id: string } | undefined;

      if (data && data.reply && !data.fallback) {
        answerText = data.reply;
      } else {
        const rag = getLocalRAGAnswer(q);
        answerText = rag.answer;
        usedSources = rag.sources;
        relatedLoc = rag.loc;
      }

      const matchedLoc = locations.find((l) =>
        answerText.toLowerCase().includes(l.name.toLowerCase())
      );
      if (matchedLoc && !relatedLoc) {
        relatedLoc = { name: matchedLoc.name, id: matchedLoc.id };
      }

      const botMsg: AIChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: answerText,
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        sources: usedSources,
        relatedLocation: relatedLoc
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const rag = getLocalRAGAnswer(q);
      const botMsg: AIChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: rag.answer,
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        sources: rag.sources,
        relatedLocation: rag.loc
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsLoading(false);
    }
  };

if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={onToggleOpen}
          className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#243D2B] hover:bg-[#617A50] text-[#FAF6ED] rounded-full shadow-2xl border-2 border-[#FAF6ED]/30 hover:border-[#C76B45] transition-all duration-300 hover:scale-105 cursor-pointer"
          aria-label="Mở Trợ lý AI Củ Chi"
        >
          {/* Pulsing online indicator */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C76B45] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#C76B45]"></span>
          </span>

          <div className="p-1.5 bg-[#C76B45] rounded-full text-[#FAF6ED] group-hover:rotate-12 transition-transform">
            <Sparkles className="w-4 h-4" />
          </div>

          <div className="text-left font-mono pr-1">
            <div className="text-xs font-bold leading-tight flex items-center gap-1.5">
              <span>Trợ lý AI Củ Chi</span>
            </div>
            <div className="text-[10px] text-[#FAF6ED]/70 leading-none">Hỏi đáp dự án 12A5</div>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[calc(100vw-2.5rem)] sm:w-[420px] md:w-[460px] h-[580px] max-h-[85vh] bg-[#FAF6ED] border-2 border-[#243D2B] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
      {/* Header */}
      <div className="bg-[#243D2B] text-[#FAF6ED] p-3 px-4 flex items-center justify-between border-b border-[#243D2B] select-none">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 bg-[#C76B45] rounded-full text-[#FAF6ED]">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-heading text-lg md:text-xl tracking-wider uppercase leading-none">
              Trợ Lý Khám Phá Củ Chi
            </h3>
            <span className="text-[10px] font-mono text-[#FAF6ED]/75">
              Học sinh Lớp 12A5 • Kiểm duyệt nguồn dẫn
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={onToggleOpen}
            className="p-1.5 text-[#FAF6ED]/80 hover:text-[#FAF6ED] hover:bg-[#FAF6ED]/10 rounded transition-colors cursor-pointer"
            title="Thu nhỏ xuống góc dưới"
            aria-label="Thu nhỏ trợ lý ảo"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            onClick={onToggleOpen}
            className="p-1.5 text-[#FAF6ED]/80 hover:text-[#FAF6ED] hover:bg-[#FAF6ED]/10 rounded transition-colors cursor-pointer"
            title="Đóng"
            aria-label="Đóng trợ lý ảo"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAF6ED]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${
              msg.sender === 'user' ? 'items-end' : 'items-start'
            }`}
          >
            <div
              className={`max-w-[85%] md:max-w-[75%] rounded-lg p-3 text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-[#243D2B] text-[#FAF6ED] rounded-tr-none'
                  : msg.isDeclined
                  ? 'bg-[#FAF6ED] border-2 border-[#C76B45] text-[#352C24] rounded-tl-none shadow-sm'
                  : 'bg-[#F2E8D5] border border-[#352C24]/15 text-[#352C24] rounded-tl-none shadow-sm'
              }`}
            >
              {/* Message text with basic markdown formatting */}
              <div className="whitespace-pre-wrap font-body">
                {msg.text.split('\n').map((line, idx) => {
                  if (line.startsWith('• ') || line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ')) {
                    return (
                      <div key={idx} className="my-1 pl-1 font-medium">
                        {line}
                      </div>
                    );
                  }
                  return (
                    <p key={idx} className={idx > 0 ? 'mt-2' : ''}>
                      {line}
                    </p>
                  );
                })}
              </div>

              {/* Related location on map action */}
              {msg.relatedLocation && onOpenLocationOnMap && (
                <div className="mt-3 pt-2 border-t border-[#352C24]/15 flex items-center justify-between">
                  <span className="text-xs text-[#243D2B] font-semibold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C76B45]" />
                    {msg.relatedLocation.name}
                  </span>
                  <button
                    onClick={() => onOpenLocationOnMap(msg.relatedLocation!.id)}
                    className="text-xs text-[#FAF6ED] bg-[#243D2B] hover:bg-[#617A50] px-2 py-0.5 rounded transition-colors font-mono"
                  >
                    Xem vị trí trên bản đồ ➔
                  </button>
                </div>
              )}

              {/* Source citations */}
              {msg.sources && msg.sources.length > 0 && (
                <div className="mt-2.5 pt-2 border-t border-[#352C24]/10 text-[11px] text-[#352C24]/75 font-mono">
                  <div className="font-bold text-[#617A50] mb-0.5">Nguồn tư liệu đối chiếu:</div>
                  <ul className="list-disc list-inside space-y-0.5">
                    {msg.sources.map((s, idx) => (
                      <li key={idx} className="truncate">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <span className="text-[10px] text-[#352C24]/50 mt-1 px-1 font-mono">
              {msg.timestamp}
            </span>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-xs text-[#243D2B] font-mono bg-[#F2E8D5] p-3 rounded max-w-xs border border-[#243D2B]/10 animate-pulse">
            <RefreshCw className="w-4 h-4 animate-spin text-[#C76B45]" />
            <span>Đang tra cứu cơ sở dữ liệu Củ Chi...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions Pills */}
      <div className="bg-[#F2E8D5] px-3 py-2 border-t border-[#352C24]/10 overflow-x-auto flex gap-2 shrink-0">
        <span className="text-xs font-mono font-bold text-[#352C24] self-center shrink-0">
          Gợi ý:
        </span>
        {SUGGESTED_QUESTIONS.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(q)}
            className="text-xs bg-[#FAF6ED] hover:bg-[#243D2B] hover:text-[#FAF6ED] text-[#352C24] border border-[#352C24]/20 px-2.5 py-1 rounded-full whitespace-nowrap transition-colors"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-[#FAF6ED] border-t border-[#243D2B]/20 flex gap-2"
      >
        <input
          type="text"
          value={inputQuestion}
          onChange={(e) => setInputQuestion(e.target.value)}
          placeholder="Hỏi về lịch sử, địa đạo, ẩm thực, làng nghề Củ Chi..."
          className="flex-1 bg-[#F2E8D5] border border-[#352C24]/20 rounded px-3 py-2 text-sm text-[#352C24] focus:outline-none focus:border-[#243D2B]"
        />
        <button
          type="submit"
          disabled={isLoading || !inputQuestion.trim()}
          className="bg-[#243D2B] hover:bg-[#617A50] disabled:opacity-50 text-[#FAF6ED] px-4 py-2 rounded transition-colors font-heading text-lg tracking-wider flex items-center gap-1.5"
          aria-label="Gửi câu hỏi cho trợ lý AI"
        >
          <span>Gửi</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
