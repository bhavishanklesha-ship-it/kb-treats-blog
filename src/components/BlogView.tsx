import { useState, useMemo } from 'react';
import { Search, Clock, Calendar, ChevronRight, BookOpen, Sparkles, Filter } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogs';
import { NavigationPage } from './Navbar';
import { KbTreatsLogo } from './KbTreatsLogo';

interface BlogViewProps {
  onSelectBlog: (slug: string) => void;
  onNavigate: (page: NavigationPage) => void;
}

export function BlogView({ onSelectBlog, onNavigate }: BlogViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Our Story',
    'Baking Secrets',
    'Cake Design',
    'Flavor Guide',
    'Sweet Debates',
    'Celebration Tips',
    'Ingredients',
  ];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const heroPost = BLOG_POSTS[0];

  return (
    <div className="space-y-16 sm:space-y-20 pb-24">
      {/* Blog Header */}
      <section className="pt-8 sm:pt-14 text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="flex justify-center mb-3">
          <KbTreatsLogo size={68} />
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-[#5E123B]">
          The KB Treats Journal
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2B0E1E] tracking-tight">
          Baking Notes, Stories & Celebration Guides
        </h1>
        <p className="text-sm sm:text-base text-[#68374F] leading-relaxed">
          Step into our kitchen journal. Discover the food science of fresh bakes, custom cake design philosophy, flavor architecture, and stories from our homegrown ovens.
        </p>
      </section>

      {/* Featured Editorial Spotlight (Top Story) */}
      {selectedCategory === 'All' && !searchQuery && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            onClick={() => onSelectBlog(heroPost.slug)}
            className="bg-white rounded-3xl overflow-hidden border border-[#F0D5E0] shadow-md hover:shadow-xl transition-all cursor-pointer group grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Image (7 cols) */}
            <div className="lg:col-span-7 h-72 sm:h-96 lg:h-full relative overflow-hidden bg-[#FAF0F4]">
              <img
                src={heroPost.coverImage}
                alt={heroPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1 rounded-full text-xs font-semibold text-[#5E123B] border border-[#F0D5E0]">
                Editor’s Spotlight
              </div>
            </div>

            {/* Content (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Zero-Pill Metadata */}
                <div className="flex items-center gap-2 text-xs text-[#7E4560]">
                  <span className="font-semibold text-[#5E123B]">{heroPost.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{heroPost.publishedDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{heroPost.readTime}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B0E1E] group-hover:text-[#5E123B] transition-colors leading-snug">
                  {heroPost.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#5C3247] leading-relaxed line-clamp-4">
                  {heroPost.excerpt}
                </p>

                {/* Key takeaway note */}
                <div className="p-3.5 bg-[#FAF0F4] rounded-xl border border-[#F0D5E0] text-xs text-[#3E1A2B] space-y-1">
                  <span className="font-semibold text-[#5E123B] block">Highlight:</span>
                  <p className="italic line-clamp-2">{heroPost.keyTakeaways[0]}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0D5E0]/70 flex items-center justify-between text-xs font-semibold text-[#5E123B]">
                <span>Read Full Story</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-4 border-b border-[#F0D5E0]">
          {/* Categories Horizontal Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs rounded-full whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#5E123B] text-white font-medium shadow-xs'
                      : 'bg-[#F9EAF0] text-[#4A1D34] hover:bg-[#F3D3E0]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#7E4560] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search recipes, tips, flavors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-[#F0D5E0] rounded-full text-[#2B0E1E] placeholder-[#9E657E] focus:outline-none focus:border-[#5E123B]"
            />
          </div>
        </div>

        {/* Results Counter if Filtered */}
        {(selectedCategory !== 'All' || searchQuery) && (
          <div className="flex items-center justify-between text-xs text-[#7E4560]">
            <span>Showing {filteredPosts.length} article{filteredPosts.length === 1 ? '' : 's'}</span>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-[#5E123B] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Article Cards Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 space-y-4 bg-white rounded-3xl border border-[#F0D5E0] p-8">
            <BookOpen className="w-10 h-10 text-[#C495A9] mx-auto" />
            <h3 className="font-serif text-xl font-bold text-[#2B0E1E]">No articles found</h3>
            <p className="text-xs text-[#68374F] max-w-sm mx-auto">
              We couldn’t find any journal entries matching "{searchQuery}". Try searching for chocolate, cakes, brookies, or ingredients.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#5E123B] hover:bg-[#430926] rounded-full transition-colors cursor-pointer"
            >
              View All Articles
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => onSelectBlog(post.slug)}
                className="bg-white rounded-2xl overflow-hidden border border-[#F0D5E0] shadow-sm hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="h-52 overflow-hidden bg-[#FAF0F4] relative">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full border border-[#F0D5E0] text-[11px] font-semibold text-[#5E123B]">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[#7E4560]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.publishedDate}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#2B0E1E] group-hover:text-[#5E123B] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-[#5C3247] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#F0D5E0]/60 mt-4 flex items-center justify-between text-xs font-semibold text-[#5E123B] pt-4">
                  <span>Read Story</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Bakery Journal Invitation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF0F4] border border-[#F0D5E0] rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-[#2B0E1E]">
              Have a Baking Question or Celebration Idea?
            </h3>
            <p className="text-xs sm:text-sm text-[#5C3247] max-w-xl">
              We love sharing advice on portion calculations, cake temperature handling, and pairing treats for parties. Call <strong>98925 79948</strong> / <strong>79775 52009</strong> or message us.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#5E123B] hover:bg-[#430926] rounded-full transition-colors cursor-pointer whitespace-nowrap"
          >
            Ask the Baker
          </button>
        </div>
      </section>
    </div>
  );
}
