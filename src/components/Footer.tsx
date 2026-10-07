import { Heart, Instagram, Mail, MessageCircle, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { NavigationPage } from './Navbar';
import { BLOG_POSTS } from '../data/blogs';
import { KbTreatsLogo } from './KbTreatsLogo';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
  onSelectBlog: (slug: string) => void;
}

export function Footer({ onNavigate, onSelectBlog }: FooterProps) {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#200513] text-[#F9EAF0] pt-16 pb-12 border-t border-[#3E0E27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#3E0E27]">
          {/* Brand Info with Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <KbTreatsLogo size={52} />
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block leading-none">
                  KB Treats
                </span>
                <p className="font-script text-[#F3CAD8] text-sm mt-1">
                  From our kitchen to your celebration
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-[#DAB5C4] max-w-sm">
              Homegrown dessert brand crafting bespoke celebration cakes, signature 2-in-1 cookie tins, gooey brownie tubs, brookies, cheesecakes, and cupcakes. Freshly baked with pure ingredients in Mumbai.
            </p>

            {/* Direct Phone / Contact Callouts */}
            <div className="pt-1 space-y-1.5 text-xs text-[#E5BFCE]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F3CAD8]" />
                <span>Call / Order: </span>
                <a href="tel:+919892579948" className="font-mono font-semibold text-white hover:underline">
                  +91 98925 79948
                </a>
                <span className="text-[#8E6575]">/</span>
                <a href="tel:+917977552009" className="font-mono font-semibold text-white hover:underline">
                  79775 52009
                </a>
              </div>
            </div>

            {/* Official Brand Social & WhatsApp */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/kbtreats08?stkn=MTA5a3N3c3czam9yNA=="
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#350A20] hover:bg-[#5E123B] text-[#F9EAF0] hover:text-white transition-colors cursor-pointer text-xs border border-[#521234]"
                aria-label="Instagram @kbtreats08"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@kbtreats08</span>
              </a>
              <a
                href="https://wa.me/919892579948?text=Hello%20KB%20Treats,%20I%20would%20like%20to%20order%20or%20inquire%20about%20your%20desserts!"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#350A20] hover:bg-emerald-700 flex items-center justify-center text-[#F9EAF0] hover:text-white transition-colors cursor-pointer border border-[#521234]"
                aria-label="WhatsApp KB Treats"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@kbtreats.com"
                className="w-8 h-8 rounded-full bg-[#350A20] hover:bg-[#5E123B] flex items-center justify-center text-[#F9EAF0] hover:text-white transition-colors cursor-pointer border border-[#521234]"
                aria-label="Email KB Treats"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#F3CAD8] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#DAB5C4]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About KB Treats
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Dessert Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('desserts')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Desserts
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('custom-orders')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Custom Orders
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Journal Reads (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#F3CAD8] font-semibold">
              From Our Journal
            </h4>
            <div className="space-y-2.5">
              {BLOG_POSTS.slice(0, 3).map((post) => (
                <button
                  key={post.id}
                  onClick={() => {
                    onSelectBlog(post.slug);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left block group cursor-pointer"
                >
                  <p className="text-xs text-[#E5BFCE] group-hover:text-white line-clamp-1 transition-colors font-medium">
                    {post.title}
                  </p>
                  <span className="text-[11px] text-[#A67E90]">
                    {post.category} · {post.readTime}
                  </span>
                </button>
              ))}
              <button
                onClick={() => onNavigate('blog')}
                className="text-xs text-[#F3CAD8] hover:text-white font-medium inline-flex items-center gap-1 pt-1 cursor-pointer"
              >
                <span>Read all 10 stories</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>

          {/* Baking Notes Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#F3CAD8] font-semibold">
              The Baking Journal
            </h4>
            <p className="text-xs text-[#DAB5C4] leading-relaxed">
              Receive new recipes, behind-the-scenes bakery notes, and seasonal dessert menu previews directly in your inbox.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-[#380B22] border border-[#58173A] rounded-lg text-xs text-[#F3CAD8]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! Welcome to the KB Treats kitchen journal family.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#17030E] border border-[#44112B] rounded-lg text-[#F9EAF0] placeholder-[#8E5E75] focus:outline-none focus:border-[#5E123B]"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-3 text-xs font-semibold text-white bg-[#5E123B] hover:bg-[#7A1C4F] rounded-lg transition-colors cursor-pointer"
                >
                  Subscribe to Journal Notes
                </button>
              </form>
            )}
            <div className="text-[11px] text-[#A67E90] flex items-center gap-1.5 pt-1">
              <Sparkles className="w-3 h-3 text-[#F3CAD8]" />
              <span>Small-batch baking · Real ingredients always</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A67E90]">
          <p>© {new Date().getFullYear()} KB Treats. All rights reserved.</p>
          <div className="flex items-center gap-1 text-[#DAB5C4]">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#F3CAD8] fill-[#F3CAD8]" />
            <span>for life’s sweet celebrations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
