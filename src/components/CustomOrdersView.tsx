import { useState, useEffect } from 'react';
import { Calendar, Users, Cake, Sparkles, MessageCircle, Send, CheckCircle2, Heart, HelpCircle, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { KbTreatsLogo } from './KbTreatsLogo';

interface CustomOrdersViewProps {
  prefilledDessertName?: string;
}

export function CustomOrdersView({ prefilledDessertName }: CustomOrdersViewProps) {
  const [occasion, setOccasion] = useState('Birthday');
  const [dessertType, setDessertType] = useState(prefilledDessertName || 'Bespoke Celebration Cake');
  const [guestCount, setGuestCount] = useState('8-12 guests (6-inch tall)');
  const [targetDate, setTargetDate] = useState('');
  const [flavourTheme, setFlavourTheme] = useState('');
  const [dietaryNotes, setDietaryNotes] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  // Update if prefilled dessert changes
  useEffect(() => {
    if (prefilledDessertName) {
      setDessertType(prefilledDessertName);
    }
  }, [prefilledDessertName]);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const occasionsList = [
    'Birthday',
    'Anniversary',
    'Wedding / Reception',
    'Baby Shower',
    'Bridal Shower',
    'Housewarming',
    'Corporate Milestone',
    'Festive / Diwali Gathering',
    'Sunday Family Dinner',
  ];

  const dessertTypesList = [
    'Bespoke Celebration Cake',
    '2-in-1 Gooey Cookie Tin Box',
    'Gooey Chocolate Brownie Tub',
    'Signature Brookies Platter',
    'Artisanal Gourmet Cheesecake',
    'Mini Choc-Chip Cookie Bakes',
    'Celebration Cupcakes Assortment',
    'Mixed Dessert Table Assortment',
  ];

  const guestSizesList = [
    '4-6 guests (Intimate Petite)',
    '8-12 guests (Standard 6-inch tall)',
    '15-20 guests (Generous 8-inch tier)',
    '25-40 guests (Two-tiered centerpiece)',
    '50+ guests (Grand celebration / dessert bar)',
  ];

  const faqs = [
    {
      question: 'How far in advance should I place a custom order?',
      answer: 'For celebration cakes and large dessert platters, we recommend giving at least 3 to 5 days advance notice so we can properly source fresh organic florals, premium dairy, and schedule your morning-of bake. For wedding or multi-tiered cakes, 2 weeks notice is ideal. For urgent requests within 48 hours, reach out via WhatsApp (+91 98925 79948 / 79775 52009) and we will do our best to accommodate depending on oven availability!'
    },
    {
      question: 'Can I request specific dietary adjustments or eggless options?',
      answer: 'Yes! We frequently bake 100% eggless cakes, brownies, and cookies that maintain our signature moist, tender crumb without compromise. Please let us know any allergies or preferences in the dietary notes section.'
    },
    {
      question: 'How are cakes delivered and kept fresh?',
      answer: 'We provide temperature-safe reinforced cake packaging with sturdy cake boards. We offer pickup from our kitchen studio in Mumbai, as well as dedicated hand-delivery by climate-controlled private cab to ensure your cake arrives in pristine, level condition.'
    },
    {
      question: 'Do you make fondant cakes or buttercream cakes?',
      answer: 'We specialize in velvety Swiss meringue buttercream, silky Belgian chocolate ganache, and semi-naked textured styles. We believe in cakes that taste just as exquisite as they look, avoiding thick, sugary fondant covers.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'KB-' + Math.floor(100000 + Math.random() * 900000);
    setOrderRef(ref);
    setSubmitted(true);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello KB Treats! I would like to inquire about a custom dessert.\n` +
      `Occasion: ${occasion}\n` +
      `Dessert: ${dessertType}\n` +
      `Size/Guests: ${guestCount}\n` +
      `Target Date: ${targetDate || 'Upcoming'}\n` +
      `Flavour/Theme: ${flavourTheme || 'To be discussed'}\n` +
      `Name: ${customerName}`
    );
    window.open(`https://wa.me/919892579948?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Editorial Header */}
      <section className="pt-8 sm:pt-14 text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="flex justify-center mb-3">
          <KbTreatsLogo size={68} />
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-[#5E123B]">
          Bespoke Baking Studio
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2B0E1E] tracking-tight">
          Custom Orders Tailored for You
        </h1>
        <p className="text-sm sm:text-base text-[#68374F] leading-relaxed">
          Share your preferred design, flavour, theme, size, and occasion. At KB Treats, we believe your celebration deserves a dessert as unique as the memory you are creating. Call or WhatsApp <strong>98925 79948</strong> / <strong>79775 52009</strong>.
        </p>
      </section>

      {/* The 5 Customization Dimensions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B0E1E]">
            How We Customize Every Creation
          </h2>
          <p className="text-xs sm:text-sm text-[#7E4560]">
            Everything is personalized around your celebration's distinct personality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-[#F0D5E0] shadow-sm space-y-2">
            <span className="text-xs font-mono font-bold text-[#5E123B]">01. Design</span>
            <h3 className="font-serif text-sm font-bold text-[#2B0E1E]">Aesthetics & Style</h3>
            <p className="text-xs text-[#5C3247] leading-relaxed">
              From Lambeth vintage frills and modern minimalist palettes to rustic botanical wreaths and edible gold leaf.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#F0D5E0] shadow-sm space-y-2">
            <span className="text-xs font-mono font-bold text-[#5E123B]">02. Flavour</span>
            <h3 className="font-serif text-sm font-bold text-[#2B0E1E]">Gourmet Pairings</h3>
            <p className="text-xs text-[#5C3247] leading-relaxed">
              Belgian chocolate ganache, Bourbon vanilla bean, raspberry coulis, salted caramel, espresso, Lotus Biscoff, or citrus curds.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#F0D5E0] shadow-sm space-y-2">
            <span className="text-xs font-mono font-bold text-[#5E123B]">03. Theme</span>
            <h3 className="font-serif text-sm font-bold text-[#2B0E1E]">Event Color Story</h3>
            <p className="text-xs text-[#5C3247] leading-relaxed">
              Matched seamlessly with your floral arrangements, invitation cards, and decor themes.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#F0D5E0] shadow-sm space-y-2">
            <span className="text-xs font-mono font-bold text-[#5E123B]">04. Sizing</span>
            <h3 className="font-serif text-sm font-bold text-[#2B0E1E]">Portion Harmony</h3>
            <p className="text-xs text-[#5C3247] leading-relaxed">
              Calibrated precisely for your guest count to ensure every attendee receives a generous slice with zero unnecessary waste.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#F0D5E0] shadow-sm space-y-2">
            <span className="text-xs font-mono font-bold text-[#5E123B]">05. Dietary</span>
            <h3 className="font-serif text-sm font-bold text-[#2B0E1E]">Special Care</h3>
            <p className="text-xs text-[#5C3247] leading-relaxed">
              100% eggless formulations, nut-free requirements, or lower-sweetness preferences baked with pristine hygiene.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Consultation Form & Live Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#F0D5E0] shadow-lg overflow-hidden">
          {submitted ? (
            <div className="p-8 sm:p-14 text-center max-w-2xl mx-auto space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#FAF0F4] text-[#5E123B] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#5E123B]">
                  Consultation Request Received · Ref: {orderRef}
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#2B0E1E]">
                  Thank You, {customerName || 'Friend'}!
                </h2>
                <p className="text-sm text-[#5C3247] leading-relaxed">
                  We have received your custom order inquiry for your upcoming <strong>{occasion}</strong> celebration. Bhavisha and the KB Treats kitchen team will review your flavor notes and get in touch via WhatsApp (+91 98925 79948 / 79775 52009) within 12 hours with design sketches and confirmation.
                </p>
              </div>

              {/* Inquiry Recap Card */}
              <div className="bg-[#FAF0F4] p-5 rounded-2xl border border-[#F0D5E0] text-left text-xs space-y-2">
                <p className="font-serif font-bold text-sm text-[#2B0E1E] pb-1 border-b border-[#F0D5E0]">
                  Inquiry Summary
                </p>
                <div className="grid grid-cols-2 gap-2 text-[#4A1D34]">
                  <p><strong>Occasion:</strong> {occasion}</p>
                  <p><strong>Dessert:</strong> {dessertType}</p>
                  <p><strong>Portion/Size:</strong> {guestCount}</p>
                  <p><strong>Target Date:</strong> {targetDate || 'TBD'}</p>
                </div>
                {flavourTheme && (
                  <p className="text-[#4A1D34] pt-1">
                    <strong>Flavour/Theme:</strong> {flavourTheme}
                  </p>
                )}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-full transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 98925 79948)</span>
                </button>
                <a
                  href="tel:+917977552009"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-[#5E123B] bg-[#FCEEF3] hover:bg-[#F3D3E0] rounded-full transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 79775 52009</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-[#4A1D34] bg-[#F9EAF0] hover:bg-[#F0D5E0] rounded-full transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left: Interactive Form (8 cols) */}
              <form onSubmit={handleSubmit} className="lg:col-span-8 p-6 sm:p-10 lg:p-12 space-y-8">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-[#2B0E1E]">
                    Custom Order Consultation Form
                  </h3>
                  <p className="text-xs text-[#7E4560]">
                    Fill in your celebration details below. No online payment required; we personally consult with you on every detail. You can also reach us directly at 98925 79948 or 79775 52009.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Step 1: Occasion */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#2B0E1E] uppercase tracking-wider block">
                      1. Celebration Occasion
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {occasionsList.map((occ) => (
                        <button
                          type="button"
                          key={occ}
                          onClick={() => setOccasion(occ)}
                          className={`px-3 py-1.5 text-xs rounded-lg transition-all cursor-pointer ${
                            occasion === occ
                              ? 'bg-[#5E123B] text-white font-medium shadow-xs'
                              : 'bg-[#FAF0F4] text-[#4A1D34] hover:bg-[#F3D3E0]'
                          }`}
                        >
                          {occ}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Dessert Type */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#2B0E1E] uppercase tracking-wider block">
                      2. Preferred Dessert Creation
                    </label>
                    <select
                      value={dessertType}
                      onChange={(e) => setDessertType(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF0F4] border border-[#F0D5E0] rounded-xl text-[#2B0E1E] focus:outline-none focus:border-[#5E123B]"
                    >
                      {dessertTypesList.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Step 3: Guest Count & Size */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#2B0E1E] uppercase tracking-wider block">
                      3. Approximate Guest Count & Portion
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF0F4] border border-[#F0D5E0] rounded-xl text-[#2B0E1E] focus:outline-none focus:border-[#5E123B]"
                    >
                      {guestSizesList.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Step 4: Date & Flavour / Theme */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-[#2B0E1E] uppercase tracking-wider block">
                        4. Date of Celebration
                      </label>
                      <input
                        type="date"
                        required
                        value={targetDate}
                        onChange={(e) => setTargetDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF0F4] border border-[#F0D5E0] rounded-xl text-[#2B0E1E] focus:outline-none focus:border-[#5E123B]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-[#2B0E1E] uppercase tracking-wider block">
                        Dietary Preferences (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., 100% Eggless, Nut-free, Low sugar"
                        value={dietaryNotes}
                        onChange={(e) => setDietaryNotes(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF0F4] border border-[#F0D5E0] rounded-xl text-[#2B0E1E] placeholder-[#9E657E] focus:outline-none focus:border-[#5E123B]"
                      />
                    </div>
                  </div>

                  {/* Step 5: Design Inspiration & Flavors */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#2B0E1E] uppercase tracking-wider block">
                      5. Preferred Flavours, Theme & Design Inspiration
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your favorite flavors (e.g., dark chocolate ganache with berries, salted caramel), decor theme, colors, or message to be written on the cake..."
                      value={flavourTheme}
                      onChange={(e) => setFlavourTheme(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF0F4] border border-[#F0D5E0] rounded-xl text-[#2B0E1E] placeholder-[#9E657E] focus:outline-none focus:border-[#5E123B]"
                    />
                  </div>

                  {/* Step 6: Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[#F0D5E0]">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#2B0E1E]">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-[#FAF0F4] border border-[#F0D5E0] rounded-xl focus:outline-none focus:border-[#5E123B]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#2B0E1E]">WhatsApp / Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 Phone Number"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-[#FAF0F4] border border-[#F0D5E0] rounded-xl focus:outline-none focus:border-[#5E123B]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#2B0E1E]">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="email@example.com"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-[#FAF0F4] border border-[#F0D5E0] rounded-xl focus:outline-none focus:border-[#5E123B]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#5E123B] hover:bg-[#430926] rounded-full transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Consultation Request</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Quick Chat on WhatsApp</span>
                  </button>
                </div>
              </form>

              {/* Right: Live Consultation Summary (4 cols) */}
              <div className="lg:col-span-4 bg-[#FAF0F4] p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-[#F0D5E0] flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#5E123B]">
                      Live Visual Summary
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#2B0E1E]">
                      Your Celebration Blueprint
                    </h4>
                  </div>

                  <div className="space-y-3 text-xs text-[#4A1D34]">
                    <div className="p-3 bg-white rounded-xl border border-[#F0D5E0] space-y-1">
                      <span className="text-[10px] uppercase font-bold text-[#7E4560]">Occasion</span>
                      <p className="font-serif font-bold text-sm text-[#2B0E1E]">{occasion}</p>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-[#F0D5E0] space-y-1">
                      <span className="text-[10px] uppercase font-bold text-[#7E4560]">Dessert Selection</span>
                      <p className="font-serif font-bold text-sm text-[#5E123B]">{dessertType}</p>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-[#F0D5E0] space-y-1">
                      <span className="text-[10px] uppercase font-bold text-[#7E4560]">Portion / Guests</span>
                      <p className="text-xs font-medium text-[#2B0E1E]">{guestCount}</p>
                    </div>

                    {targetDate && (
                      <div className="p-3 bg-white rounded-xl border border-[#F0D5E0] space-y-1">
                        <span className="text-[10px] uppercase font-bold text-[#7E4560]">Celebration Date</span>
                        <p className="text-xs font-medium text-[#2B0E1E]">{targetDate}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 bg-[#FCEEF3] rounded-xl text-xs text-[#5C3247] space-y-2">
                  <div className="flex items-center gap-1.5 font-serif font-bold text-[#2B0E1E]">
                    <Sparkles className="w-3.5 h-3.5 text-[#5E123B]" />
                    <span>The KB Treats Standard</span>
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    Always freshly baked on the morning of your event with real butter, Belgian chocolate, and pure vanilla. Zero preservatives. Direct consultation via 98925 79948 / 79775 52009.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#5E123B]">
            Questions & Clarity
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B0E1E]">
            Custom Order FAQs
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#F0D5E0] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-[#2B0E1E]">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#5E123B] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#5E123B] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-[#5C3247] leading-relaxed border-t border-[#FAF0F4] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
