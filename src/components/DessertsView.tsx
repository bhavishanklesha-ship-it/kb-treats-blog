import { useState } from 'react';
import { ArrowRight, Sparkles, Check, Info, Heart, ChevronRight, X, Phone } from 'lucide-react';
import { DESSERT_ITEMS, DessertItem } from '../data/desserts';
import { NavigationPage } from './Navbar';
import { KbTreatsLogo } from './KbTreatsLogo';

interface DessertsViewProps {
  onNavigate: (page: NavigationPage) => void;
  onSelectCustomDessert: (dessertName: string) => void;
}

export function DessertsView({ onNavigate, onSelectCustomDessert }: DessertsViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItemModal, setActiveItemModal] = useState<DessertItem | null>(null);

  const categories = ['All', 'Cookies', 'Brownies', 'Cakes', 'Cheesecakes', 'Brookies'];

  const filteredItems = DESSERT_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const handleInquire = (dessertName: string) => {
    onSelectCustomDessert(dessertName);
    onNavigate('custom-orders');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Editorial Header */}
      <section className="pt-8 sm:pt-14 text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="flex justify-center mb-3">
          <KbTreatsLogo size={68} />
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-[#5E123B]">
          From Our Oven
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2B0E1E] tracking-tight">
          Handcrafted Dessert Creations
        </h1>
        <p className="text-sm sm:text-base text-[#68374F] leading-relaxed">
          From our signature 2-in-1 gooey cookie tins and warm brownie tubs to bespoke celebration cakes and caramelized Basque cheesecakes. Every order is freshly prepared in Mumbai according to your personal requirements.
        </p>

        {/* Homegrown Notice Banner (Blog-focused, zero checkout) */}
        <div className="inline-flex items-center gap-2 p-3.5 bg-[#FCEEF3] border border-[#F0D5E0] rounded-xl text-xs text-[#5C3247] max-w-xl mx-auto">
          <Info className="w-4 h-4 text-[#5E123B] shrink-0" />
          <span>
            We bake strictly to order. Because each item is customized to your guest count, occasion, and theme, we provide personal consultations rather than generic checkout. Call <strong>98925 79948</strong> or <strong>79775 52009</strong>.
          </span>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#5E123B] text-white shadow-sm'
                    : 'bg-[#F9EAF0] text-[#4A1D34] hover:bg-[#F3D3E0]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Dessert Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#F0D5E0] shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div
                  onClick={() => setActiveItemModal(item)}
                  className="h-64 overflow-hidden bg-[#FAF0F4] relative cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full border border-[#F0D5E0] text-[11px] font-semibold text-[#5E123B]">
                    {item.category}
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 bg-white text-[#2B0E1E] text-xs font-semibold rounded-full shadow-md">
                      View Flavour Notes
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3
                      onClick={() => setActiveItemModal(item)}
                      className="font-serif text-xl font-bold text-[#2B0E1E] hover:text-[#5E123B] transition-colors cursor-pointer"
                    >
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#8A2B59] font-medium italic">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-[#5C3247] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-[#F0D5E0]/70">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#7E4560]">
                      Signature Flavours:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.flavours.slice(0, 3).map((f, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] text-[#4A1D34] bg-[#FCF8F9] px-2.5 py-1 rounded-md border border-[#F0D5E0]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#7E4560]">
                      Perfect Occasion:
                    </p>
                    <p className="text-xs text-[#5C3247] line-clamp-1 italic">
                      {item.idealOccasion}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0 border-t border-[#F0D5E0]/50 mt-4 flex items-center gap-2 pt-4">
                <button
                  onClick={() => handleInquire(item.name)}
                  className="flex-1 py-2.5 px-3 text-xs font-semibold text-white bg-[#5E123B] hover:bg-[#430926] rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>Inquire for Custom Order</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActiveItemModal(item)}
                  className="p-2.5 text-xs text-[#5E123B] hover:bg-[#FCEEF3] border border-[#F0D5E0] rounded-xl transition-colors cursor-pointer"
                  title="View full dessert details"
                >
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dessert Details Modal */}
      {activeItemModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-[#F0D5E0] shadow-2xl relative">
            <button
              onClick={() => setActiveItemModal(null)}
              className="absolute top-5 right-5 p-2 text-[#7E4560] hover:text-[#5E123B] rounded-full hover:bg-[#FCEEF3] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#5E123B]">
                {activeItemModal.category}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#2B0E1E]">
                {activeItemModal.name}
              </h3>
              <p className="text-xs text-[#8A2B59] font-medium italic">
                {activeItemModal.tagline}
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden h-52 bg-[#FAF0F4]">
              <img
                src={activeItemModal.image}
                alt={activeItemModal.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-[#52293E] leading-relaxed">
              {activeItemModal.description}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#7E4560]">
                Curated Flavour Palette
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeItemModal.flavours.map((flv, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-[#3E1A2B]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5E123B]" />
                    <span>{flv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#7E4560]">
                Customization Possibilities
              </h4>
              <ul className="space-y-1.5">
                {activeItemModal.customizationOptions.map((opt, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#52293E]">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-[#FCEEF3] rounded-xl text-xs text-[#5C3247] space-y-1">
              <p className="font-semibold text-[#5E123B]">Serving & Handling Suggestion:</p>
              <p>{activeItemModal.servingSuggestion}</p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const name = activeItemModal.name;
                  setActiveItemModal(null);
                  handleInquire(name);
                }}
                className="flex-1 py-3 px-4 text-xs font-semibold text-white bg-[#5E123B] hover:bg-[#430926] rounded-xl transition-all cursor-pointer text-center"
              >
                Inquire for {activeItemModal.name}
              </button>
              <button
                onClick={() => setActiveItemModal(null)}
                className="py-3 px-5 text-xs font-semibold text-[#4A1D34] bg-[#F9EAF0] hover:bg-[#F3D3E0] rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Custom Creation Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF0F4] border border-[#F0D5E0] rounded-3xl p-8 sm:p-12 text-center space-y-5">
          <Heart className="w-8 h-8 text-[#5E123B] mx-auto" />
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B0E1E]">
            Don’t See Your Exact Dream Dessert?
          </h3>
          <p className="text-xs sm:text-sm text-[#5C3247] max-w-xl mx-auto leading-relaxed">
            We love developing custom flavor combinations, dessert grazing tables, wedding favor cookie boxes, and unique celebration themes.
          </p>
          <button
            onClick={() => onNavigate('custom-orders')}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#5E123B] hover:bg-[#430926] rounded-full transition-colors cursor-pointer"
          >
            Start a Custom Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
