import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Share2, 
  Check, 
  Sparkles, 
  Cake, 
  ChevronRight, 
  ChevronLeft,
  Home,
  MessageCircle,
  Phone
} from 'lucide-react';
import { BlogPost, BLOG_POSTS, findBlogPost } from '../data/blogs';
import { DESSERT_ITEMS } from '../data/desserts';
import { NavigationPage } from './Navbar';
import { KbTreatsLogo } from './KbTreatsLogo';
import { OptimizedImage } from './OptimizedImage';

interface BlogPostViewProps {
  post: BlogPost;
  onSelectBlog: (slug: string) => void;
  onNavigate: (page: NavigationPage) => void;
}

export function BlogPostView({ post, onSelectBlog, onNavigate }: BlogPostViewProps) {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track page scroll progress for the top reading progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://kbtreats.com/journal/${post.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Find previous and next articles in the series
  const currentIndex = BLOG_POSTS.findIndex((p) => p.id === post.id || p.slug === post.slug);
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : BLOG_POSTS[BLOG_POSTS.length - 1];
  const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : BLOG_POSTS[0];

  // Related articles
  const relatedPosts = (
    post.relatedSlugs && post.relatedSlugs.length > 0
      ? post.relatedSlugs
          .map((slug) => findBlogPost(slug))
          .filter((p): p is BlogPost => !!p)
      : BLOG_POSTS.filter((p) => p.id !== post.id)
  ).slice(0, 3);

  const relatedDessert = post.relatedDessertId
    ? DESSERT_ITEMS.find((d) => d.id === post.relatedDessertId)
    : undefined;

  const pageUrl = typeof window !== 'undefined' ? window.location.href : `https://kbtreats.com/journal/${post.slug}`;

  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    image: post.coverImage.startsWith('http')
      ? post.coverImage
      : `https://kbtreats.com${post.coverImage}`,
    datePublished: post.publishedDate,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'KB Treats',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kbtreats.com/images/hero_bespoke_celebration_cake_1791370876379.webp',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
  };

  return (
    <article className="min-h-screen bg-[#FAF8F5] text-[#2B0E1E] pb-24">
      {/* Schema.org BlogPosting Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Top Reading Progress Indicator */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[#5E123B] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Breadcrumb Navigation & Top Action Bar */}
      <nav 
        aria-label="Breadcrumb navigation"
        className="bg-white/80 backdrop-blur-md border-b border-[#F0D5E0] sticky top-16 z-30 transition-all"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
          {/* Breadcrumb items */}
          <ol className="flex items-center gap-2 text-xs text-[#7E4560] overflow-x-auto py-0.5">
            <li className="flex items-center gap-1 shrink-0">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home');
                }}
                className="flex items-center gap-1 hover:text-[#5E123B] transition-colors font-medium"
                aria-label="Navigate to KB Treats Homepage"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </a>
            </li>
            <li aria-hidden="true" className="text-[#C495A9]">/</li>
            <li className="flex items-center gap-1 shrink-0">
              <a
                href="/journal"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('blog');
                }}
                className="hover:text-[#5E123B] transition-colors font-medium"
                aria-label="Navigate to Bakery Journal Overview"
              >
                Journal
              </a>
            </li>
            <li aria-hidden="true" className="text-[#C495A9]">/</li>
            <li className="shrink-0">
              <span className="font-semibold text-[#5E123B]">{post.category}</span>
            </li>
            <li aria-hidden="true" className="text-[#C495A9] hidden sm:inline">/</li>
            <li className="truncate max-w-[200px] hidden sm:inline text-[#4A1D34] font-medium" title={post.title}>
              {post.title}
            </li>
          </ol>

          {/* Action buttons: Back to all articles + Social Sharing */}
          <div className="flex items-center gap-2.5 shrink-0 ml-auto">
            <a
              href="/journal"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('blog');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#5E123B] hover:text-[#430926] bg-[#FCEEF3] hover:bg-[#F9DEE7] rounded-full transition-colors cursor-pointer"
              aria-label="Back to all 10 KB Treats journal articles"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Articles</span>
            </a>

            {/* Copy Link */}
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#4A1D34] hover:text-[#5E123B] bg-white border border-[#F0D5E0] hover:border-[#5E123B] rounded-full transition-all cursor-pointer shadow-xs"
              aria-label="Copy article link to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#5E123B]" />
                  <span>Share</span>
                </>
              )}
            </button>

            {/* WhatsApp Share */}
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`Check out this baking story from KB Treats: "${post.title}" - ${pageUrl}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1E5E3A] hover:text-[#144329] bg-[#E8F5EE] hover:bg-[#D5EFE0] rounded-full transition-colors cursor-pointer"
              aria-label="Share article on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Full Webpage Article Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* Article Header */}
        <header className="space-y-6">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#7E4560]">
            <span className="px-3 py-1 bg-[#FCEEF3] text-[#5E123B] font-semibold rounded-full border border-[#F0D5E0] uppercase tracking-wider text-[11px]">
              {post.category}
            </span>
            <span aria-hidden="true" className="text-[#C495A9]">·</span>
            <span className="flex items-center gap-1 font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#5E123B]" />
              {post.publishedDate}
            </span>
            <span aria-hidden="true" className="text-[#C495A9]">·</span>
            <span className="flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#5E123B]" />
              {post.readTime}
            </span>
          </div>

          {/* H1 Main Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B0E1E] leading-tight tracking-tight">
            {post.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-[#68374F] leading-relaxed font-serif italic border-l-3 border-[#5E123B] pl-4 py-1">
            {post.subtitle}
          </p>

          {/* Author Badge */}
          <div className="flex items-center gap-3.5 pt-4 border-t border-[#F0D5E0] text-xs text-[#68374F]">
            <KbTreatsLogo size={42} />
            <div>
              <p className="font-serif font-bold text-sm text-[#2B0E1E]">{post.author}</p>
              <p className="text-[#8A2B59] text-xs font-script">From Our Kitchen to Your Celebration · Mumbai, India</p>
            </div>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="my-8 sm:my-10 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#FAF0F4]">
          <OptimizedImage
            src={post.coverImage}
            alt={post.coverImageAlt || post.title}
            loading="eager"
            fetchPriority="high"
            className="w-full h-72 sm:h-[420px] lg:h-[480px] object-cover"
          />
        </div>

        {/* Key Takeaways & Bakery Highlights Callout Box (AEO-optimized) */}
        <aside 
          aria-label="Key Takeaways and Bakery Highlights"
          className="my-8 bg-[#FCEEF3] border border-[#F0D5E0] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs"
        >
          <div className="flex items-center gap-2 text-xs font-bold text-[#5E123B] uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Key Takeaways & Bakery Highlights</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {post.keyTakeaways.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A1D34] leading-relaxed">
                <span className="text-[#5E123B] font-bold mt-0.5 shrink-0">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Article Introduction Paragraph */}
        <div className="my-8 text-[#3E1A2B]">
          <p className="text-base sm:text-lg lg:text-xl text-[#3E1A2B] leading-relaxed font-serif font-normal first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-[#5E123B]">
            {post.excerpt}
          </p>
        </div>

        {/* Main Article Sections with Clear H2s and Answers */}
        <div className="space-y-10 my-10">
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B0E1E] pt-4 border-t border-[#F0D5E0]/60">
                {section.heading}
              </h2>
              {section.body.map((para, pIdx) => (
                <p key={pIdx} className="text-base sm:text-lg text-[#4A1D34] leading-relaxed">
                  {para}
                </p>
              ))}

              {section.bakerTip && (
                <div className="my-6 p-5 sm:p-6 bg-[#FAF0F4] border-l-4 border-[#5E123B] rounded-r-2xl space-y-1.5 shadow-xs">
                  <p className="text-xs uppercase tracking-wider font-bold text-[#5E123B] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Baker’s Journal Secret</span>
                  </p>
                  <p className="text-sm sm:text-base text-[#5C3247] italic leading-relaxed">
                    "{section.bakerTip}"
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* In Closing / Conclusion Section */}
        <section className="my-10 pt-8 border-t border-[#F0D5E0] space-y-4">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B0E1E]">
            In Closing: Our Celebration Philosophy
          </h3>
          <p className="text-base sm:text-lg text-[#4A1D34] leading-relaxed italic bg-white p-6 rounded-2xl border border-[#F0D5E0]">
            "{post.conclusion}"
          </p>
        </section>

        {/* Topic Tags */}
        <div className="my-8 flex flex-wrap items-center gap-2 text-xs text-[#7E4560]">
          <span className="font-semibold text-[#4A1D34]">Article Topics:</span>
          {post.tags.map((tag, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 bg-white border border-[#F0D5E0] rounded-full text-[#5E123B] font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Card */}
        <section 
          aria-label="Author Profile"
          className="my-10 bg-white border border-[#F0D5E0] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-sm"
        >
          <div className="shrink-0 p-3 bg-[#FAF0F4] rounded-2xl border border-[#F0D5E0]">
            <KbTreatsLogo size={64} />
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <h4 className="font-serif text-lg font-bold text-[#2B0E1E]">{post.author}</h4>
              <span className="text-xs font-semibold uppercase text-[#5E123B] tracking-wider">Homegrown Baker & Founder</span>
            </div>
            <p className="text-xs sm:text-sm text-[#5C3247] leading-relaxed">
              Bhavisha started KB Treats in Mumbai to bring handcrafted, authentic desserts to life using European cultured butter, pure Belgian chocolate, and real vanilla. Every order is baked fresh for your special moments—never frozen, never mass-produced.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-medium text-[#5E123B]">
              <a href="tel:+919892579948" className="inline-flex items-center gap-1 hover:underline">
                <Phone className="w-3 h-3" />
                <span>98925 79948</span>
              </a>
              <a href="tel:+917977552009" className="inline-flex items-center gap-1 hover:underline">
                <Phone className="w-3 h-3" />
                <span>79775 52009</span>
              </a>
              <a 
                href="/custom-orders" 
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('custom-orders');
                }}
                className="hover:underline font-semibold"
              >
                Book a Custom Consultation →
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action Banner: Custom Orders & Menu */}
        <aside 
          aria-label="Custom Order Call to Action"
          className="my-10 bg-[#2B081A] text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-5 border border-[#430F2B] relative overflow-hidden"
        >
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2 text-[#F3CAD8] text-xs font-semibold uppercase tracking-wider">
              <Cake className="w-4 h-4" />
              <span>From Our Kitchen to Your Celebration</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Planning Your Next Celebration or Milestone?
            </h3>
            <p className="text-sm sm:text-base text-[#E5BFCE] leading-relaxed max-w-2xl">
              Every dessert at KB Treats is baked fresh to order using uncompromised ingredients and personalized to your guest count, flavor palate, and event theme. Contact Bhavisha directly or explore our artisanal dessert collection.
            </p>
            <div className="pt-3 flex flex-wrap gap-3.5">
              <a
                href="/custom-orders"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('custom-orders');
                }}
                className="px-6 py-3 text-xs sm:text-sm font-semibold text-[#2B081A] bg-[#FCEEF3] hover:bg-white rounded-full transition-all cursor-pointer shadow-md"
                aria-label="Plan and inquire about a custom cake order with KB Treats"
              >
                Inquire for Custom Celebration Cake
              </a>
              <a
                href="/desserts"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('desserts');
                }}
                className="px-6 py-3 text-xs sm:text-sm font-semibold text-white border border-[#8A2B59] hover:bg-[#430926] rounded-full transition-all cursor-pointer"
                aria-label={relatedDessert ? `Explore ${relatedDessert.name} on the menu` : "Explore all handcrafted desserts"}
              >
                {relatedDessert ? `Explore ${relatedDessert.name}` : "Explore Artisanal Desserts"}
              </a>
            </div>
          </div>
        </aside>

        {/* Previous / Next Article Navigation Bar */}
        <nav 
          aria-label="Article pagination"
          className="my-10 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#F0D5E0]"
        >
          {prevPost && (
            <a
              href={`/journal/${prevPost.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onSelectBlog(prevPost.slug);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-5 bg-white rounded-2xl border border-[#F0D5E0] hover:border-[#5E123B] transition-all hover:shadow-md cursor-pointer group flex items-center gap-3 text-left"
              aria-label={`Read previous story: ${prevPost.title}`}
            >
              <ChevronLeft className="w-5 h-5 text-[#5E123B] shrink-0 group-hover:-translate-x-1 transition-transform" />
              <div className="space-y-1">
                <span className="text-[11px] font-semibold uppercase text-[#7E4560] tracking-wider">Previous Story</span>
                <h4 className="font-serif text-sm font-bold text-[#2B0E1E] group-hover:text-[#5E123B] line-clamp-1 transition-colors">
                  {prevPost.title}
                </h4>
              </div>
            </a>
          )}

          {nextPost && (
            <a
              href={`/journal/${nextPost.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onSelectBlog(nextPost.slug);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-5 bg-white rounded-2xl border border-[#F0D5E0] hover:border-[#5E123B] transition-all hover:shadow-md cursor-pointer group flex items-center justify-between gap-3 text-right sm:text-right"
              aria-label={`Read next story: ${nextPost.title}`}
            >
              <div className="space-y-1 text-left sm:text-right">
                <span className="text-[11px] font-semibold uppercase text-[#7E4560] tracking-wider">Next Story</span>
                <h4 className="font-serif text-sm font-bold text-[#2B0E1E] group-hover:text-[#5E123B] line-clamp-1 transition-colors">
                  {nextPost.title}
                </h4>
              </div>
              <ChevronRight className="w-5 h-5 text-[#5E123B] shrink-0 group-hover:translate-x-1 transition-transform" />
            </a>
          )}
        </nav>

        {/* More Stories from the Baking Journal (Related Articles Grid) */}
        <section 
          aria-label="Related Baking Journal Stories"
          className="my-12 pt-8 border-t border-[#F0D5E0] space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#5E123B]">
                Continue Reading
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#2B0E1E]">
                More Stories from the Baking Journal
              </h3>
            </div>
            <a
              href="/journal"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('blog');
              }}
              className="text-xs font-semibold text-[#5E123B] hover:underline inline-flex items-center gap-1"
            >
              <span>View all 10 stories</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <a
                key={related.id}
                href={`/journal/${related.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectBlog(related.slug);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-2xl overflow-hidden border border-[#F0D5E0] hover:border-[#5E123B] transition-all hover:shadow-lg cursor-pointer group flex flex-col justify-between block text-left"
                aria-label={`Read related story: ${related.title}`}
              >
                <div>
                  <div className="h-44 overflow-hidden bg-[#FAF0F4]">
                    <OptimizedImage
                      src={related.coverImage}
                      alt={related.coverImageAlt || related.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[11px] font-semibold text-[#5E123B]">
                      {related.category}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-[#2B0E1E] group-hover:text-[#5E123B] line-clamp-2 transition-colors leading-snug">
                      {related.title}
                    </h4>
                  </div>
                </div>

                <div className="p-5 pt-0 text-[11px] text-[#7E4560] flex items-center justify-between border-t border-[#F0D5E0]/60 mt-3 pt-3">
                  <span>{related.readTime}</span>
                  <span className="inline-flex items-center gap-0.5 text-[#5E123B] font-semibold group-hover:underline">
                    <span>Read story</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
