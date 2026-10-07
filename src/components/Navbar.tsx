import { useState } from 'react';
import { Menu, X, ArrowRight, Phone, Instagram } from 'lucide-react';
import { KbTreatsLogo } from './KbTreatsLogo';

export type NavigationPage = 'home' | 'about' | 'blog' | 'desserts' | 'custom-orders' | 'contact';

interface NavbarProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
  onOpenArticleBySlug?: (slug: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: NavigationPage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Blog', page: 'blog' },
    { label: 'Our Desserts', page: 'desserts' },
    { label: 'Custom Orders', page: 'custom-orders' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: NavigationPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FCF8F9]/95 backdrop-blur-md border-b border-[#F0D5E0]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark with Official Emblem */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group cursor-pointer text-left"
          aria-label="KB Treats Home"
        >
          <KbTreatsLogo size={46} />
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#5E123B] group-hover:text-[#7A1C4F] transition-colors leading-none">
              KB Treats
            </span>
            <span className="font-script text-xs text-[#8A2B59] mt-0.5 tracking-wide hidden sm:block">
              From our kitchen to your celebration
            </span>
          </div>
        </button>

        {/* Zone 2: 4-6 Clean Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A1D34]">
          {navLinks.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`relative py-1 cursor-pointer transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-[#5E123B] font-semibold'
                    : 'text-[#4A1D34] hover:text-[#5E123B]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5E123B] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Quick Call & Instagram */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://www.instagram.com/kbtreats08?stkn=MTA5a3N3c3czam9yNA=="
            target="_blank"
            rel="noreferrer"
            className="p-2 text-[#5E123B] hover:bg-[#FBEAF0] rounded-full transition-colors cursor-pointer"
            title="Follow @kbtreats08 on Instagram"
            aria-label="KB Treats Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#5E123B] bg-[#FCEEF3] rounded-full border border-[#F0D5E0]">
            <Phone className="w-3 h-3 text-[#5E123B]" />
            <a href="tel:+919892579948" className="font-mono hover:underline font-medium">98925 79948</a>
            <span className="text-[#C495A9]">·</span>
            <a href="tel:+917977552009" className="font-mono hover:underline font-medium">79775 52009</a>
          </div>
          <button
            onClick={() => handleNavClick('custom-orders')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-[#5E123B] hover:bg-[#430926] rounded-full transition-all shadow-sm cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <span>Plan Custom Order</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://www.instagram.com/kbtreats08?stkn=MTA5a3N3c3czam9yNA=="
            target="_blank"
            rel="noreferrer"
            className="p-2 text-[#5E123B] hover:bg-[#FBEAF0] rounded-full transition-colors cursor-pointer"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#5E123B] hover:text-[#430926] rounded-lg focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#F0D5E0] bg-[#FCF8F9] px-5 pt-3 pb-6 space-y-2 animate-in fade-in duration-150">
          <div className="flex flex-col space-y-2">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-left px-3 py-2.5 text-base font-medium rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#F9E6EE] text-[#5E123B] font-semibold'
                      : 'text-[#3E1A2B] hover:bg-[#FDF1F5]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="pt-4 border-t border-[#F0D5E0]/70 flex flex-col gap-2.5">
            <div className="flex flex-col gap-1 px-2 text-xs text-[#5E123B]">
              <span className="font-medium text-[#6B3751]">Call or WhatsApp:</span>
              <div className="flex items-center gap-3 font-mono font-semibold">
                <a href="tel:+919892579948" className="underline">98925 79948</a>
                <span>·</span>
                <a href="tel:+917977552009" className="underline">79775 52009</a>
              </div>
            </div>
            <a
              href="https://www.instagram.com/kbtreats08?stkn=MTA5a3N3c3czam9yNA=="
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#5E123B] bg-[#FCEEF3] rounded-xl"
            >
              <Instagram className="w-4 h-4" />
              <span>@kbtreats08 on Instagram</span>
            </a>
            <button
              onClick={() => handleNavClick('custom-orders')}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#5E123B] hover:bg-[#430926] rounded-xl transition-all cursor-pointer shadow-sm"
            >
              <span>Plan Custom Order</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
