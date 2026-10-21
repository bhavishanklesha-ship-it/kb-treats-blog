import { ArrowRight, Home, Cake, BookOpen, Sparkles, Heart, Phone, MessageCircle } from 'lucide-react';
import { NavigationPage } from './Navbar';
import { KbTreatsLogo } from './KbTreatsLogo';

interface NotFoundViewProps {
  onNavigate: (page: NavigationPage) => void;
  onSelectBlog?: (slug: string) => void;
}

export function NotFoundView({ onNavigate }: NotFoundViewProps) {
  const mainPages: {
    label: string;
    path: string;
    page: NavigationPage;
    description: string;
    icon: typeof Home;
  }[] = [
    {
      label: 'Homepage',
      path: '/',
      page: 'home',
      description: 'Back to our celebration showcase, freshly baked promises, and signature treats.',
      icon: Home,
    },
    {
      label: 'Artisanal Dessert Menu',
      path: '/desserts',
      page: 'desserts',
      description: 'Explore our 2-in-1 gooey cookie tins, spoonable brownie tubs, and Basque cheesecakes.',
      icon: Cake,
    },
    {
      label: 'Baking Journal & Guides',
      path: '/journal',
      page: 'blog',
      description: 'Read our baking stories, flavor pairing secrets, and cake cutting tips.',
      icon: BookOpen,
    },
    {
      label: 'Plan Custom Orders',
      path: '/custom-orders',
      page: 'custom-orders',
      description: 'Design a bespoke celebration centerpiece tailored to your milestone.',
      icon: Sparkles,
    },
    {
      label: 'Our Story & Kitchen',
      path: '/about',
      page: 'about',
      description: 'Learn why founder Bhavisha bakes with 100% pure butter and zero shortcuts.',
      icon: Heart,
    },
    {
      label: 'Contact & Ordering',
      path: '/contact',
      page: 'contact',
      description: 'Call or WhatsApp our Mumbai kitchen directly to check availability.',
      icon: Phone,
    },
  ];

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* 404 Hero Card */}
      <div className="text-center space-y-6 bg-white border border-[#F0D5E0] rounded-3xl p-8 sm:p-14 shadow-sm relative overflow-hidden">
        {/* Subtle Decorative Accent */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#FAF0F4] rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#FCEEF3] rounded-full blur-2xl pointer-events-none" />

        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FAF0F4] border border-[#F0D5E0] text-[#5E123B] text-xs font-semibold">
          <KbTreatsLogo size={24} />
          <span>KB Treats Kitchen</span>
        </div>

        {/* 404 Badge & Headings */}
        <div className="space-y-3">
          <p className="font-serif text-6xl sm:text-7xl font-extrabold text-[#5E123B] tracking-tight">
            404
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B0E1E]">
            Looks Like This Treat Isn’t in Our Oven!
          </h1>
          <p className="text-sm sm:text-base text-[#68374F] max-w-xl mx-auto leading-relaxed">
            The page, recipe, or link you were trying to reach may have moved, been renamed, or been enjoyed down to the last sweet crumb. Don’t worry—our kitchen has plenty of fresh treats waiting for you.
          </p>
        </div>

        {/* Quick Action Button */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#5E123B] hover:bg-[#430926] rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer group"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </a>

          <a
            href="https://wa.me/919892579948?text=Hello%20KB%20Treats,%20I%20am%20looking%20for%20a%20specific%20dessert%20or%20page%20on%20your%20website!"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-full transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Chat on WhatsApp (98925 79948)</span>
          </a>
        </div>
      </div>

      {/* Main Pages Navigation Directory */}
      <div className="mt-12 space-y-6">
        <div className="text-center sm:text-left space-y-1">
          <h2 className="font-serif text-2xl font-bold text-[#2B0E1E]">
            Where Would You Like to Go Next?
          </h2>
          <p className="text-xs sm:text-sm text-[#7E4560]">
            Choose any of our main kitchen sections to find what you need:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mainPages.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.page}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.page);
                }}
                className="bg-white border border-[#F0D5E0] hover:border-[#5E123B]/40 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between text-left cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0F4] group-hover:bg-[#FCEEF3] flex items-center justify-center text-[#5E123B] transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#2B0E1E] group-hover:text-[#5E123B] transition-colors flex items-center justify-between">
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#5E123B]" />
                  </h3>
                  <p className="text-xs text-[#5C3247] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
