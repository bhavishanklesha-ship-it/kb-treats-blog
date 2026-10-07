import { ArrowRight, Sparkles, Heart, ShieldCheck, Palette, Cake, Clock, ChevronRight, Star, Phone, Instagram } from 'lucide-react';
import { NavigationPage } from './Navbar';
import { BLOG_POSTS, BlogPost } from '../data/blogs';
import { DESSERT_ITEMS } from '../data/desserts';
import { TESTIMONIALS, KITCHEN_PILLARS } from '../data/testimonials';
import { KbTreatsLogo } from './KbTreatsLogo';

interface HomeViewProps {
  onNavigate: (page: NavigationPage) => void;
  onSelectBlog: (slug: string) => void;
  onSelectDessertCategory?: (category: string) => void;
}

export function HomeView({ onNavigate, onSelectBlog, onSelectDessertCategory }: HomeViewProps) {
  const featuredArticles = BLOG_POSTS.slice(0, 3);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#5E123B]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#5E123B]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#5E123B]" />;
      case 'Heart':
      default:
        return <Heart className="w-5 h-5 text-[#5E123B]" />;
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-12 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Brand Tagline Header with OG Logo */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FCEEF3] border border-[#F0D5E0] text-[#5E123B] text-xs font-semibold tracking-wide">
                <KbTreatsLogo size={28} />
                <span className="font-script text-base text-[#8A2B59] font-bold">
                  From our kitchen to your celebration
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2B0E1E] tracking-tight leading-[1.12]">
                  KB Treats
                </h1>
                <p className="font-serif text-xl sm:text-2xl text-[#8A2B59] font-medium italic">
                  Artisanal Homemade Cakes & Celebration Desserts
                </p>
              </div>

              {/* Short Introduction */}
              <p className="text-base sm:text-lg text-[#52293E] leading-relaxed max-w-2xl font-normal">
                KB Treats is a homegrown dessert brand born out of a genuine passion for baking. We craft customized celebration cakes, signature 2-in-1 gooey cookie tins, spoonable brownie tubs, silky Basque cheesecakes, brookies, and cupcakes. Every order is prepared fresh in Mumbai using pure, real ingredients and tailored to your celebration.
              </p>

              {/* Hero Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('blog')}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-[#5E123B] hover:bg-[#430926] rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer group active:scale-[0.98]"
                >
                  <span>Read Our Blog</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => onNavigate('desserts')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#2B0E1E] hover:text-[#5E123B] bg-[#F9EAF0] hover:bg-[#F3D3E0] border border-[#E9C3D3] rounded-full transition-colors cursor-pointer"
                >
                  <span>Explore Our Desserts</span>
                </button>
                <a
                  href="https://www.instagram.com/kbtreats08?stkn=MTA5a3N3c3czam9yNA=="
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-semibold text-[#5E123B] hover:bg-[#FCEEF3] rounded-full transition-colors cursor-pointer"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@kbtreats08</span>
                </a>
              </div>

              {/* Quick Trust Bar */}
              <div className="pt-6 border-t border-[#F0D5E0] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#52293E]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#5E123B]" />
                  <span className="font-medium">100% Baked to Order</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#5E123B]" />
                  <span className="font-medium">Real Butter & Vanilla</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#5E123B]" />
                  <span className="font-medium">Customized Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#5E123B]" />
                  <span className="font-medium">Zero Preservatives</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual with OG Badge (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFDFE] bg-[#FBEFF4]">
                <img
                  src="/src/assets/images/hero_bespoke_celebration_cake_1791370876379.jpg"
                  alt="KB Treats Artisanal Celebration Cake"
                  referrerPolicy="no-referrer"
                  className="w-full h-[430px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating Bottom Stamp with OG Logo */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#FFFDFE]/95 backdrop-blur-md border border-[#F0D5E0] shadow-lg flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <KbTreatsLogo size={48} />
                    <div className="space-y-0.5">
                      <p className="text-xs font-serif font-bold text-[#2B0E1E]">
                        Bespoke Cake Artistry
                      </p>
                      <p className="text-[11px] font-script text-[#8A2B59] font-semibold">
                        From our kitchen to your celebration
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => onNavigate('custom-orders')}
                    className="px-3.5 py-2 text-xs font-semibold text-white bg-[#5E123B] hover:bg-[#430926] rounded-xl transition-colors cursor-pointer shrink-0"
                  >
                    Custom Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Brand Pillars Section */}
      <section className="bg-[#FAF0F4] py-16 border-y border-[#F0D5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5E123B]">
              The KB Treats Promise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B0E1E]">
              Why Celebrations Taste Sweeter With Us
            </h2>
            <p className="text-sm sm:text-base text-[#68374F]">
              We bake with the same warmth and obsessive standards we hold for our own dining table.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {KITCHEN_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#F0D5E0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FCEEF3] flex items-center justify-center">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#2B0E1E]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C3247] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography & Dessert Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5E123B]">
              From Our Kitchen
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B0E1E]">
              Our Signature Dessert Creations
            </h2>
            <p className="text-sm sm:text-base text-[#68374F] max-w-xl">
              Freshly handcrafted to order in Mumbai. Featuring our iconic 2-in-1 gooey cookie tins, brownie tubs, and custom celebration cakes.
            </p>
          </div>
          <button
            onClick={() => onNavigate('desserts')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5E123B] hover:text-[#430926] transition-colors cursor-pointer group"
          >
            <span>View All Desserts</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 6 Dessert Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESSERT_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#F0D5E0] shadow-sm hover:shadow-lg transition-all group flex flex-col"
            >
              {/* Image Area */}
              <div className="relative h-60 overflow-hidden bg-[#FAF0F4]">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#F0D5E0] text-[11px] font-semibold text-[#5E123B]">
                  {item.category}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#2B0E1E] group-hover:text-[#5E123B] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#8A2B59] font-medium italic">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-[#5C3247] line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Flavors preview */}
                <div className="space-y-2 pt-2 border-t border-[#F0D5E0]/70">
                  <p className="text-[11px] font-semibold uppercase text-[#7E4560] tracking-wider">
                    Favorite Flavours:
                  </p>
                  <p className="text-xs text-[#3E1A2B] line-clamp-1 font-medium">
                    {item.flavours.slice(0, 3).join(', ')}
                  </p>
                </div>

                {/* Action button */}
                <button
                  onClick={() => onNavigate('desserts')}
                  className="w-full mt-2 py-2.5 px-4 text-xs font-semibold text-[#2B0E1E] hover:text-white bg-[#FCEEF3] hover:bg-[#5E123B] rounded-xl transition-all cursor-pointer text-center"
                >
                  Explore Flavour & Customization
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Blog Stories (Editorial Focus) */}
      <section className="bg-[#FAF0F4] py-20 border-y border-[#F0D5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#5E123B]">
                The KB Treats Journal
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B0E1E]">
                Stories, Science & Celebration Ideas
              </h2>
              <p className="text-sm sm:text-base text-[#68374F] max-w-xl">
                Explore 10 curated articles covering our brand journey, baking chemistry, flavor pairings, and custom cake artistry.
              </p>
            </div>
            <button
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#5E123B] hover:text-[#430926] transition-colors cursor-pointer group"
            >
              <span>Read All 10 Articles</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((post) => (
              <article
                key={post.id}
                onClick={() => onSelectBlog(post.slug)}
                className="bg-white rounded-2xl overflow-hidden border border-[#F0D5E0] shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden bg-[#FAF0F4] relative">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[#7E4560]">
                      <span className="font-semibold text-[#5E123B]">{post.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#2B0E1E] group-hover:text-[#5E123B] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-[#5C3247] line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#F0D5E0]/60 mt-4 flex items-center justify-between text-xs font-semibold text-[#5E123B] pt-4">
                  <span>Read Article</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2B081A] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl border border-[#430F2B]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F3CAD8]">
                Made Specifically For You
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Turn Your Celebration Vision Into an Edible Masterpiece
              </h2>
              <p className="text-sm sm:text-base text-[#E5BFCE] leading-relaxed max-w-2xl">
                Have a specific design moodboard, dietary requirement, or unique flavor combination in mind? Call us directly at <strong>98925 79948</strong> or <strong>79775 52009</strong>, or send your consultation inquiry online.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('custom-orders')}
                  className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#2B081A] bg-[#FCEEF3] hover:bg-white rounded-full transition-all cursor-pointer shadow-md"
                >
                  Plan Your Custom Order
                </button>
                <a
                  href="https://wa.me/919892579948?text=Hello%20KB%20Treats,%20I%20would%20like%20to%20consult%20about%20a%20custom%20order!"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-full transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#3E0E27] border border-[#591438] p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2">
                <KbTreatsLogo size={36} />
                <p className="text-xs font-serif font-bold text-[#F3CAD8] uppercase tracking-wider">
                  How Custom Orders Work
                </p>
              </div>
              <ul className="space-y-3 text-xs text-[#F8E2EC]">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#5E123B] text-white flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                  <span><strong>Share Your Vision:</strong> Occasion, date, guest count & preferred aesthetics.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#5E123B] text-white flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                  <span><strong>Flavor & Design Craft:</strong> We finalize cake architecture and toppings.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#5E123B] text-white flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
                  <span><strong>Baked Fresh on Schedule:</strong> Never frozen; ready for your celebration.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Celebration Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#5E123B]">
            Celebration Memories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B0E1E]">
            Warm Words from Happy Tables
          </h2>
          <p className="text-sm text-[#68374F]">
            Hear how KB Treats brought joy to real milestones, anniversaries, and family dinners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-7 rounded-2xl border border-[#F0D5E0] shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#C59A45]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#451C30] italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0D5E0]/70 space-y-1">
                <p className="font-serif text-sm font-bold text-[#2B0E1E]">
                  {t.clientName}
                </p>
                <p className="text-[11px] text-[#5E123B] font-medium">
                  {t.occasion} · {t.dessertOrdered}
                </p>
                <p className="text-[11px] text-[#7E4560]">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
