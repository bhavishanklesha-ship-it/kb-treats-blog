import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, User, Share2, Check, Sparkles, Cake, ChevronRight } from 'lucide-react';
import { BlogPost, BLOG_POSTS } from '../data/blogs';
import { NavigationPage } from './Navbar';
import { KbTreatsLogo } from './KbTreatsLogo';

interface ArticleReaderModalProps {
  post: BlogPost;
  onClose: () => void;
  onSelectBlog: (slug: string) => void;
  onNavigate: (page: NavigationPage) => void;
}

export function ArticleReaderModal({
  post,
  onClose,
  onSelectBlog,
  onNavigate,
}: ArticleReaderModalProps) {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('article-content-container');
      if (el) {
        const totalHeight = el.scrollHeight - el.clientHeight;
        if (totalHeight > 0) {
          const progress = (el.scrollTop / totalHeight) * 100;
          setScrollProgress(progress);
        }
      }
    };

    const container = document.getElementById('article-content-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-[#FCF8F9] text-[#2B0E1E] w-full max-w-4xl h-full sm:h-[94vh] sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden relative border border-[#F0D5E0]">
        {/* Reading progress indicator */}
        <div className="h-1.5 bg-[#FAF0F4] w-full shrink-0">
          <div
            className="h-full bg-[#5E123B] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Top Sticky Header */}
        <div className="px-5 py-3.5 border-b border-[#F0D5E0] flex items-center justify-between bg-[#FCF8F9]/95 backdrop-blur-sm shrink-0">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#4A1D34] hover:text-[#5E123B] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to Articles</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#4A1D34] hover:text-[#5E123B] bg-[#F9EAF0] hover:bg-[#F0D5E0] rounded-full transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Story</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div
          id="article-content-container"
          className="flex-1 overflow-y-auto px-5 sm:px-10 lg:px-14 py-8 space-y-8"
        >
          {/* Metadata Header (Zero-Pill format) */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#7E4560]">
              <span className="font-semibold text-[#5E123B] tracking-wide uppercase">
                {post.category}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.publishedDate}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B0E1E] leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-[#68374F] leading-relaxed font-serif italic">
              {post.subtitle}
            </p>

            <div className="flex items-center gap-3 pt-3 border-t border-[#F0D5E0]/70 text-xs text-[#68374F]">
              <KbTreatsLogo size={36} />
              <div>
                <span className="font-medium text-[#2B0E1E]">{post.author}</span>
                <span className="text-[#8A2B59] block text-[11px] font-script">From our kitchen to your celebration</span>
              </div>
            </div>
          </div>

          {/* Cover Media */}
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-md border border-[#F0D5E0]/70 bg-[#FAF0F4]">
            <img
              src={post.coverImage}
              alt={post.title}
              referrerPolicy="no-referrer"
              className="w-full h-64 sm:h-96 object-cover"
            />
          </div>

          {/* Key Takeaways Callout Box */}
          <div className="max-w-3xl mx-auto bg-[#FCEEF3] border border-[#F0D5E0] rounded-2xl p-5 sm:p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#5E123B] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Key Takeaways & Bakery Highlights</span>
            </div>
            <ul className="space-y-2">
              {post.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A1D34] leading-relaxed">
                  <span className="text-[#5E123B] font-bold mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Introduction */}
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-[#3E1A2B] leading-relaxed font-serif font-normal first-letter:text-4xl first-letter:font-bold first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:text-[#5E123B]">
              {post.excerpt}
            </p>
          </div>

          {/* Article Structured Sections */}
          <div className="max-w-3xl mx-auto space-y-8">
            {post.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2B0E1E] pt-2">
                  {section.heading}
                </h2>
                {section.body.map((para, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-[#4A1D34] leading-relaxed">
                    {para}
                  </p>
                ))}

                {section.bakerTip && (
                  <div className="my-5 p-4 sm:p-5 bg-[#FAF0F4] border-l-4 border-[#5E123B] rounded-r-xl space-y-1">
                    <p className="text-xs uppercase tracking-wider font-bold text-[#5E123B]">
                      Baker’s Journal Secret
                    </p>
                    <p className="text-xs sm:text-sm text-[#5C3247] italic leading-relaxed">
                      "{section.bakerTip}"
                    </p>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Conclusion */}
          <div className="max-w-3xl mx-auto pt-6 border-t border-[#F0D5E0] space-y-3">
            <h3 className="font-serif text-lg font-bold text-[#2B0E1E]">
              In Closing
            </h3>
            <p className="text-sm sm:text-base text-[#4A1D34] leading-relaxed italic">
              {post.conclusion}
            </p>
          </div>

          {/* Tags */}
          <div className="max-w-3xl mx-auto pt-4 flex flex-wrap items-center gap-2 text-xs text-[#7E4560]">
            <span className="font-medium text-[#4A1D34]">Topic tags:</span>
            {post.tags.map((tag, idx) => (
              <span key={idx}>
                #{tag}
                {idx < post.tags.length - 1 && <span className="ml-2 text-[#C495A9]">·</span>}
              </span>
            ))}
          </div>

          {/* Call to Action Card: Custom Orders or Desserts */}
          <div className="max-w-3xl mx-auto bg-[#2B081A] text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4 my-8 border border-[#430F2B]">
            <div className="flex items-center gap-2 text-[#F3CAD8] text-xs font-semibold uppercase tracking-wider">
              <Cake className="w-4 h-4" />
              <span>From Our Kitchen to Your Celebration</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Planning an Upcoming Celebration?
            </h3>
            <p className="text-xs sm:text-sm text-[#E5BFCE] leading-relaxed">
              Every dessert at KB Treats is baked fresh to order using pure ingredients and tailored to your guest count, flavor palate, and event theme. Contact us directly at <strong>98925 79948</strong> or <strong>79775 52009</strong>.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  onClose();
                  onNavigate('custom-orders');
                }}
                className="px-5 py-2.5 text-xs font-semibold text-[#2B081A] bg-[#FCEEF3] hover:bg-white rounded-full transition-colors cursor-pointer"
              >
                Inquire for Custom Order
              </button>
              <button
                onClick={() => {
                  onClose();
                  onNavigate('desserts');
                }}
                className="px-5 py-2.5 text-xs font-semibold text-white border border-[#5E123B] hover:bg-[#430926] rounded-full transition-colors cursor-pointer"
              >
                Explore All Desserts
              </button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="max-w-3xl mx-auto pt-8 border-t border-[#F0D5E0] space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#2B0E1E]">
              More Stories from the Baking Journal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map((related) => (
                <button
                  key={related.id}
                  onClick={() => {
                    onSelectBlog(related.slug);
                    const container = document.getElementById('article-content-container');
                    if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left bg-white p-4 rounded-xl border border-[#F0D5E0] hover:border-[#5E123B] transition-all hover:shadow-sm cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-semibold text-[#5E123B]">
                      {related.category}
                    </span>
                    <h4 className="font-serif text-xs font-bold text-[#2B0E1E] group-hover:text-[#5E123B] line-clamp-2 transition-colors">
                      {related.title}
                    </h4>
                  </div>
                  <div className="pt-3 text-[11px] text-[#7E4560] flex items-center justify-between">
                    <span>{related.readTime}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#5E123B] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
