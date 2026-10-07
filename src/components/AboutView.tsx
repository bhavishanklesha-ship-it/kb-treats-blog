import { Heart, Sparkles, ShieldCheck, Check, ArrowRight, Award, Coffee, BookOpen } from 'lucide-react';
import { NavigationPage } from './Navbar';
import { KbTreatsLogo } from './KbTreatsLogo';

interface AboutViewProps {
  onNavigate: (page: NavigationPage) => void;
}

export function AboutView({ onNavigate }: AboutViewProps) {
  const pantryIngredients = [
    {
      name: 'European-Style Cultured Butter',
      description: 'Never margarine or vegetable shortening. Melts cleanly at body temperature for silky frosting and golden, crumbly pastry layers.'
    },
    {
      name: 'Pure Belgian Couverture Chocolate',
      description: 'Single-origin 55% to 70% dark chocolate and creamy white chocolate with high cocoa butter content for deeply glossy ganache and fudgy centers.'
    },
    {
      name: 'Bourbon & Tahitian Vanilla Caviar',
      description: 'Whole plump pods and natural cold-extracted vanilla paste instead of synthetic vanillin essence. Complex, floral, and deeply aromatic.'
    },
    {
      name: 'Farm-Fresh Dairy & Philadelphia Cream Cheese',
      description: 'Rich heavy cream and cultured dairy for our San Sebastián Basque burnt and New York style cheesecakes. Smooth, uncompromised tang.'
    },
    {
      name: 'Real Fruit Reductions & Edible Botanicals',
      description: 'Slow-simmered whole raspberries, strawberries, and pesticide-free organic fresh flowers, figs, and herbs for natural cake dressing.'
    },
    {
      name: 'Hand-Milled Spices & Flaky Sea Salt',
      description: 'Maldon sea salt flakes and freshly cracked spices that balance sugar and awaken deep chocolate undertones.'
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Editorial Header */}
      <section className="pt-8 sm:pt-14 text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="flex justify-center mb-3">
          <KbTreatsLogo size={80} />
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-[#5E123B]">
          About KB Treats
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2B0E1E] tracking-tight">
          From Our Kitchen to Your Celebration
        </h1>
        <p className="font-script text-xl sm:text-2xl text-[#8A2B59] font-semibold">
          A homegrown sanctuary for freshly baked, made-to-order artisanal desserts.
        </p>
      </section>

      {/* Main Narrative with Photography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-[#52293E] leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B0E1E]">
              The Heart Behind Every Bake
            </h2>
            <p className="text-sm sm:text-base">
              <strong>KB Treats</strong> was born out of a profound love for the alchemy of baking. What started as small weekend experiments for friends and family quickly blossomed into a beloved homegrown brand known for celebrating life’s most meaningful moments.
            </p>
            <p className="text-sm sm:text-base">
              We noticed a quiet gap in the dessert world: either commercial bakeries were mass-producing identical cakes using pre-mixed powders and shelf-stabilized fats, or dessert options lacked the personal warmth of a bespoke kitchen. We set out to change that.
            </p>
            <p className="text-sm sm:text-base">
              At KB Treats, there is no assembly line. We do not pre-bake hundreds of sponge cakes to sit in industrial freezers. When you order from us, your dessert is baked on the scheduled morning of your celebration using real, uncompromised ingredients and decorated according to your personal vision.
            </p>
            <div className="p-5 bg-[#FAF0F4] border-l-4 border-[#5E123B] rounded-r-2xl space-y-2">
              <p className="font-serif italic text-sm text-[#3E1A2B]">
                “A celebration cake isn’t merely food; it is the visual and emotional center of a memory. It deserves to look extraordinary and taste even better.”
              </p>
              <p className="text-xs font-semibold text-[#5E123B]">
                — Bhavisha, Founder & Baker at KB Treats
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#FCEEF3]">
              <img
                src="/src/assets/images/cookie_tin_two_in_one_og_1791350553246.jpg"
                alt="KB Treats Signature 2 in 1 Gooey Cookie Tin"
                referrerPolicy="no-referrer"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values / Four Pillars */}
      <section className="bg-[#FAF0F4] py-20 border-y border-[#F0D5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5E123B]">
              Our Guiding Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B0E1E]">
              Warm, Authentic, Creative & Personal
            </h2>
            <p className="text-sm text-[#68374F]">
              Four pillars that guide every recipe, consultation, and dessert box leaving our studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#F0D5E0] shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-[#5E123B]">01</span>
              <h3 className="font-serif text-lg font-bold text-[#2B0E1E]">Freshly Prepared</h3>
              <p className="text-xs text-[#5C3247] leading-relaxed">
                Everything is made to order. We bake early in the morning so the moisture, crumb tenderness, and delicate aroma are at their peak when you cut into your treat.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#F0D5E0] shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-[#5E123B]">02</span>
              <h3 className="font-serif text-lg font-bold text-[#2B0E1E]">Real Ingredients</h3>
              <p className="text-xs text-[#5C3247] leading-relaxed">
                We believe what goes inside matters just as much as what decorates the outside. Pure cultured butter, Belgian chocolate, real dairy cream, and natural vanilla.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#F0D5E0] shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-[#5E123B]">03</span>
              <h3 className="font-serif text-lg font-bold text-[#2B0E1E]">Customized to You</h3>
              <p className="text-xs text-[#5C3247] leading-relaxed">
                No two milestones are the same. We take time to understand your design preferences, favorite flavor profiles, theme colors, and portion requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#F0D5E0] shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-[#5E123B]">04</span>
              <h3 className="font-serif text-lg font-bold text-[#2B0E1E]">Made With Love</h3>
              <p className="text-xs text-[#5C3247] leading-relaxed">
                As a homegrown brand, our reputation is built on intimate trust. We bake for your celebrations with the heartfelt dedication of cooking for our own dearest friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Ingredient Pledge */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#5E123B]">
            Purity In Every Crumb
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B0E1E]">
            The KB Treats Pantry Standards
          </h2>
          <p className="text-sm text-[#68374F]">
            We never cut corners with premixes, artificial preservatives, or hydrogenated vegetable fats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pantryIngredients.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#F0D5E0] shadow-sm space-y-2.5"
            >
              <div className="flex items-center gap-2 text-[#5E123B]">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="font-serif text-base font-bold text-[#2B0E1E]">
                  {item.name}
                </h3>
              </div>
              <p className="text-xs text-[#5C3247] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2B081A] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 border border-[#430F2B]">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
            Ready to Celebrate With Something Truly Special?
          </h2>
          <p className="text-sm text-[#E5BFCE] max-w-xl mx-auto leading-relaxed">
            Read our baking secrets on the journal or get in touch with us at <strong>98925 79948</strong> / <strong>79775 52009</strong> to design a dessert tailored precisely for your next milestone.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-[#2B081A] bg-[#FCEEF3] hover:bg-white rounded-full transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Our Blog</span>
            </button>
            <button
              onClick={() => onNavigate('custom-orders')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#5E123B] hover:bg-[#7A1C4F] rounded-full transition-colors cursor-pointer"
            >
              <span>Plan a Custom Order</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
