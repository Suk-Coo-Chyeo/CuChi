import React from 'react';
import { Article } from '../types';
import { ShieldCheck, ArrowRight, Calendar, User, Clock } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onReadMore: (article: Article) => void;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onReadMore, featured = false }) => {
  return (
    <article
      className={`group bg-[#FAF6ED] border-2 border-[#243D2B] rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 paper-shadow hover:paper-shadow-lg w-full h-full ${
        featured ? 'md:col-span-2 md:grid md:grid-cols-12 md:gap-6' : ''
      }`}
    >
      {/* Cover Image Container */}
      <div
        className={`relative overflow-hidden ${
          featured ? 'md:col-span-6 h-64 md:h-full' : 'h-52'
        }`}
      >
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-[#243D2B]/90 text-[#FAF6ED] text-[11px] font-mono uppercase tracking-widest px-2.5 py-1 rounded">
          {article.categoryName}
        </div>
        <div className="absolute top-3 right-3 bg-[#FAF6ED]/95 text-[#243D2B] text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 border border-[#243D2B]/20">
          <ShieldCheck className="w-3.5 h-3.5 text-[#617A50]" />
          ĐÃ XÁC MINH
        </div>
      </div>

      {/* Content Section */}
      <div className={`p-4 md:p-6 flex flex-col justify-between flex-1 ${featured ? 'md:col-span-6' : ''}`}>
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs text-[#352C24]/70 font-mono mb-2">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#C76B45]" />
              {article.updatedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 truncate">
              <User className="w-3.5 h-3.5 text-[#617A50]" />
              {article.author}
            </span>
          </div>

          {/* Heading */}
          <h3 className="font-heading text-2xl md:text-3xl text-[#243D2B] tracking-wide leading-tight group-hover:text-[#C76B45] transition-colors mb-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-[#352C24]/85 font-body leading-relaxed line-clamp-3 mb-4">
            {article.summary}
          </p>

          {/* Highlights pills */}
          {article.highlights && article.highlights.length > 0 && (
            <div className="mb-4 bg-[#F2E8D5] p-2.5 rounded border border-[#352C24]/10">
              <div className="text-[11px] font-bold uppercase text-[#C76B45] font-mono mb-1">
                Điểm nổi bật:
              </div>
              <ul className="text-xs text-[#352C24] space-y-1">
                {article.highlights.slice(0, 2).map((h, i) => (
                  <li key={i} className="flex items-start gap-1.5 truncate">
                    <span className="text-[#617A50] font-bold">›</span> {h}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Read More Action */}
        <div className="pt-3 border-t border-[#352C24]/15 flex items-center justify-between">
          <span className="text-xs font-mono text-[#352C24]/60">
            {article.sources.length} nguồn kiểm chứng
          </span>
          <button
            onClick={() => onReadMore(article)}
            className="inline-flex items-center gap-1.5 font-heading text-lg tracking-wider text-[#243D2B] hover:text-[#C76B45] transition-colors"
          >
            ĐỌC BÀI VIẾT <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
};
