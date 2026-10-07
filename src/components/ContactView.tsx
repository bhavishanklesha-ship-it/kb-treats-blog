import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, MessageCircle, Send, CheckCircle2, Heart, Sparkles } from 'lucide-react';
import { KbTreatsLogo } from './KbTreatsLogo';

export function ContactView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Editorial Header */}
      <section className="pt-8 sm:pt-14 text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="flex justify-center mb-3">
          <KbTreatsLogo size={68} />
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-[#5E123B]">
          Get in Touch
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2B0E1E] tracking-tight">
          We’d Love to Hear From You
        </h1>
        <p className="text-sm sm:text-base text-[#68374F] leading-relaxed">
          Whether you have a question about our baking journal articles, want to discuss a customized cake, or just want to talk about chocolate pairings, our kitchen door is always open. Call or WhatsApp <strong>98925 79948</strong> or <strong>79775 52009</strong>.
        </p>
      </section>

      {/* Main Grid: Details + Message Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Kitchen Studio Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 rounded-3xl border border-[#F0D5E0] shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5E123B]">
                  Baking Studio & Pickups
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#2B0E1E]">
                  KB Treats Home Kitchen
                </h3>
                <p className="text-xs sm:text-sm text-[#5C3247] leading-relaxed">
                  We are a private artisanal baking studio located in Mumbai. Fresh dessert orders are prepared for designated pickup slots or dispatched by private vehicle.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-[#F0D5E0]/80 text-xs sm:text-sm text-[#4A1D34]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#5E123B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#2B0E1E]">Location & Kitchen Studio:</strong>
                    <span>Bandra West / Khar, Mumbai, Maharashtra 400050</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#5E123B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#2B0E1E]">Phone & WhatsApp Orders:</strong>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono font-medium pt-0.5">
                      <a href="tel:+919892579948" className="hover:text-[#5E123B] hover:underline">
                        +91 98925 79948
                      </a>
                      <span className="text-[#C495A9]">·</span>
                      <a href="tel:+917977552009" className="hover:text-[#5E123B] hover:underline">
                        +91 79775 52009
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#5E123B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#2B0E1E]">Baking & Pickup Hours:</strong>
                    <span>Tuesday – Sunday: 9:00 AM – 8:00 PM (Fresh morning-of bakes)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-[#5E123B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#2B0E1E]">WhatsApp Chat:</strong>
                    <div className="space-y-1 pt-0.5">
                      <a
                        href="https://wa.me/919892579948?text=Hello%20KB%20Treats,%20I%20would%20like%20to%20order%20or%20inquire%20about%20your%20desserts!"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#5E123B] font-medium hover:underline block"
                      >
                        Chat on +91 98925 79948 &rarr;
                      </a>
                      <a
                        href="https://wa.me/917977552009?text=Hello%20KB%20Treats,%20I%20would%20like%20to%20order%20or%20inquire%20about%20your%20desserts!"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#5E123B] font-medium hover:underline block text-xs"
                      >
                        Alternative: +91 79775 52009 &rarr;
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#5E123B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#2B0E1E]">Email:</strong>
                    <span>hello@kbtreats.com</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2">
                <a
                  href="https://wa.me/919892579948?text=Hello%20KB%20Treats,%20I%20have%20an%20inquiry%20regarding%20your%20desserts!"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat With Us on WhatsApp (+91 98925 79948)</span>
                </a>
              </div>
            </div>

            {/* Social Connection Card */}
            <div className="bg-[#FAF0F4] p-6 rounded-3xl border border-[#F0D5E0] space-y-3">
              <h4 className="font-serif text-base font-bold text-[#2B0E1E]">
                Follow Us on Instagram
              </h4>
              <p className="text-xs text-[#5C3247] leading-relaxed">
                Watch morning cake layering, 2-in-1 cookie tin packing, chocolate tempering, and behind-the-scenes bakery notes.
              </p>
              <a
                href="https://www.instagram.com/kbtreats08?stkn=MTA5a3N3c3czam9yNA=="
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#5E123B] hover:text-[#8A2B59] hover:underline"
              >
                <Instagram className="w-4 h-4" />
                <span>@kbtreats08 · Follow Our Sweet Journey</span>
              </a>
            </div>
          </div>

          {/* Right Column: General Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-[#F0D5E0] shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-5 max-w-md mx-auto">
                <div className="w-14 h-14 rounded-full bg-[#FAF0F4] text-[#5E123B] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2B0E1E]">
                  Message Sent With Love
                </h3>
                <p className="text-xs sm:text-sm text-[#5C3247] leading-relaxed">
                  Thank you for writing to KB Treats, {name}. We will get back to your inquiry via email or WhatsApp within a few hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="px-6 py-2.5 text-xs font-semibold text-[#4A1D34] bg-[#F9EAF0] hover:bg-[#F0D5E0] rounded-full transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-[#2B0E1E]">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-[#7E4560]">
                    Have questions about allergies, dessert menus, or custom orders? Write to us or call 98925 79948 / 79775 52009.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#2B0E1E]">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF0F4] border border-[#F0D5E0] rounded-xl focus:outline-none focus:border-[#5E123B]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#2B0E1E]">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF0F4] border border-[#F0D5E0] rounded-xl focus:outline-none focus:border-[#5E123B]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#2B0E1E]">Inquiry Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF0F4] border border-[#F0D5E0] rounded-xl focus:outline-none focus:border-[#5E123B]"
                  >
                    <option value="General Inquiry">General Question</option>
                    <option value="Celebration Cake Consultation">Celebration Cake Consultation</option>
                    <option value="2-in-1 Cookie Tins & Brownie Tubs">2-in-1 Cookie Tins & Brownie Tubs</option>
                    <option value="Corporate / Bulk Dessert Boxes">Corporate / Bulk Dessert Boxes</option>
                    <option value="Dietary / Allergy Advice">Dietary / Allergy Advice</option>
                    <option value="Feedback on Blog Article">Feedback on Blog Article</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#2B0E1E]">Your Message *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us what you have in mind..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF0F4] border border-[#F0D5E0] rounded-xl focus:outline-none focus:border-[#5E123B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#5E123B] hover:bg-[#430926] rounded-full transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
