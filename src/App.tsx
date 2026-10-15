/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { Navbar, NavigationPage } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { BlogView } from './components/BlogView';
import { DessertsView } from './components/DessertsView';
import { CustomOrdersView } from './components/CustomOrdersView';
import { ContactView } from './components/ContactView';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { BlogPost, findBlogPost } from './data/blogs';

function parseRoute(): { page: NavigationPage; articleSlug: string | null } {
  // Gracefully migrate legacy hash if present (e.g., #about, #article/slug)
  if (typeof window !== 'undefined' && window.location.hash) {
    const rawHash = window.location.hash.replace(/^#\/?/, '').trim();
    if (rawHash.startsWith('article/')) {
      const slug = rawHash.replace('article/', '').trim();
      const found = findBlogPost(slug);
      if (found) {
        window.history.replaceState(null, '', `/journal/${found.slug}`);
        return { page: 'blog', articleSlug: found.slug };
      }
    }
    const cleanHash = rawHash.toLowerCase();
    if (['about', 'desserts', 'custom-orders', 'contact', 'blog', 'journal', 'home'].includes(cleanHash)) {
      const page: NavigationPage = (cleanHash === 'journal' || cleanHash === 'blog')
        ? 'blog'
        : (cleanHash === 'home' ? 'home' : (cleanHash as NavigationPage));
      const newPath = page === 'home' ? '/' : page === 'blog' ? '/journal' : `/${page}`;
      window.history.replaceState(null, '', newPath);
      return { page, articleSlug: null };
    }
  }

  // Parse window.location.pathname
  const path = (typeof window !== 'undefined' ? window.location.pathname : '/')
    .toLowerCase()
    .replace(/\/+$/, '') || '/';

  if (path === '/' || path === '/home') {
    return { page: 'home', articleSlug: null };
  }
  if (path === '/about') {
    return { page: 'about', articleSlug: null };
  }
  if (path === '/desserts') {
    return { page: 'desserts', articleSlug: null };
  }
  if (path === '/custom-orders') {
    return { page: 'custom-orders', articleSlug: null };
  }
  if (path === '/journal' || path === '/blog') {
    return { page: 'blog', articleSlug: null };
  }
  if (path === '/contact') {
    return { page: 'contact', articleSlug: null };
  }

  // Article route: /journal/<slug> or /article/<slug>
  const articleMatch = path.match(/^\/(?:journal|article)\/([a-z0-9-]+)$/);
  if (articleMatch) {
    const slug = articleMatch[1];
    const found = findBlogPost(slug);
    if (found) {
      if (path !== `/journal/${found.slug}`) {
        window.history.replaceState(null, '', `/journal/${found.slug}`);
      }
      return { page: 'blog', articleSlug: found.slug };
    }
  }

  // Direct article slug route: /<slug>
  const directSlugMatch = path.match(/^\/([a-z0-9-]+)$/);
  if (directSlugMatch) {
    const slug = directSlugMatch[1];
    const found = findBlogPost(slug);
    if (found) {
      window.history.replaceState(null, '', `/journal/${found.slug}`);
      return { page: 'blog', articleSlug: found.slug };
    }
  }

  return { page: 'home', articleSlug: null };
}

export default function App() {
  const initialRoute = parseRoute();
  const [currentPage, setCurrentPage] = useState<NavigationPage>(initialRoute.page);
  const [activeBlogSlug, setActiveBlogSlug] = useState<string | null>(initialRoute.articleSlug);
  const [prefilledCustomDessert, setPrefilledCustomDessert] = useState<string>('');

  // Synchronize on browser Back/Forward (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const route = parseRoute();
      setCurrentPage(route.page);
      setActiveBlogSlug(route.articleSlug);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const activeArticle: BlogPost | undefined = activeBlogSlug
    ? findBlogPost(activeBlogSlug)
    : undefined;

  // Dynamic SEO & Metadata sync for every page and article
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const origin = window.location.origin;
    const currentPath = window.location.pathname;
    const canonicalUrl = `${origin}${currentPath}`;

    let pageTitle = 'KB Treats | Homemade Bakery & Custom Cakes in Mumbai';
    let metaDesc = "Order freshly baked artisanal treats from KB Treats, Mumbai's homegrown bakery for bespoke celebration cakes, gooey brownies, brookies, cookies, and desserts.";
    let ogImage = `${origin}/images/hero_bespoke_celebration_cake_1791370876379.jpg`;

    if (activeArticle) {
      pageTitle = activeArticle.seoTitle || `${activeArticle.title} | KB Treats`;
      metaDesc = activeArticle.seoDescription || activeArticle.excerpt;
      if (activeArticle.coverImage) {
        ogImage = activeArticle.coverImage.startsWith('http')
          ? activeArticle.coverImage
          : `${origin}${activeArticle.coverImage}`;
      }
    } else if (currentPage === 'about') {
      pageTitle = 'About Our Kitchen & Story | KB Treats';
      metaDesc = 'Discover the story of KB Treats, a homegrown artisanal bakery in Mumbai creating bespoke cakes and handcrafted desserts with pure, uncompromised ingredients.';
    } else if (currentPage === 'desserts') {
      pageTitle = 'Artisanal Dessert Menu & Bakes | KB Treats';
      metaDesc = 'Explore handcrafted celebration cakes, signature 2-in-1 cookie tins, gooey brownie tubs, brookies, and silky Basque cheesecakes.';
    } else if (currentPage === 'custom-orders') {
      pageTitle = 'Plan Your Custom Cake Order | KB Treats';
      metaDesc = 'Collaborate with our pastry kitchen to design customized celebration cakes, themed dessert bars, and bespoke gift hampers for your milestones.';
    } else if (currentPage === 'blog') {
      pageTitle = 'Bakery Journal & Dessert Guides | KB Treats';
      metaDesc = 'Baking secrets, flavor guides, and celebration inspiration from the homegrown kitchen of KB Treats.';
    } else if (currentPage === 'contact') {
      pageTitle = 'Contact & Direct Ordering | KB Treats';
      metaDesc = 'Get in touch with Bhavisha and the KB Treats kitchen. Call, WhatsApp, or order directly for fresh bakes delivered across Mumbai.';
    }

    document.title = pageTitle;

    const setOrCreateMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement(
          selector.includes('rel=')
            ? 'link'
            : 'meta'
        );
        if (selector.includes('name=')) {
          const name = selector.match(/name="([^"]+)"/)?.[1];
          if (name) el.setAttribute('name', name);
        } else if (selector.includes('property=')) {
          const prop = selector.match(/property="([^"]+)"/)?.[1];
          if (prop) el.setAttribute('property', prop);
        } else if (selector.includes('rel=')) {
          el.setAttribute('rel', 'canonical');
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setOrCreateMeta('meta[name="description"]', 'content', metaDesc);
    setOrCreateMeta('meta[property="og:title"]', 'content', pageTitle);
    setOrCreateMeta('meta[property="og:description"]', 'content', metaDesc);
    setOrCreateMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setOrCreateMeta('meta[property="og:image"]', 'content', ogImage);
    setOrCreateMeta('meta[name="twitter:title"]', 'content', pageTitle);
    setOrCreateMeta('meta[name="twitter:description"]', 'content', metaDesc);
    setOrCreateMeta('meta[name="twitter:image"]', 'content', ogImage);
    setOrCreateMeta('link[rel="canonical"]', 'href', canonicalUrl);
  }, [currentPage, activeArticle]);

  const handleNavigate = useCallback((page: NavigationPage) => {
    setCurrentPage(page);
    setActiveBlogSlug(null);
    const targetPath = page === 'home' ? '/' : page === 'blog' ? '/journal' : `/${page}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectBlog = useCallback((slug: string) => {
    const found = findBlogPost(slug);
    const cleanSlug = found ? found.slug : slug;
    setActiveBlogSlug(cleanSlug);
    const targetPath = `/journal/${cleanSlug}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleCloseArticle = useCallback(() => {
    setActiveBlogSlug(null);
    const targetPath = currentPage === 'home' ? '/' : currentPage === 'blog' ? '/journal' : `/${currentPage}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
  }, [currentPage]);

  const handleSelectCustomDessert = useCallback((dessertName: string) => {
    setPrefilledCustomDessert(dessertName);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2B1E1A] font-sans antialiased selection:bg-[#E8D7C3] selection:text-[#2B1E1A]">
      {/* Top Bar Contract (Wordmark · Links · Action) */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectBlog={handleSelectBlog}
          />
        )}

        {currentPage === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {currentPage === 'blog' && (
          <BlogView
            onSelectBlog={handleSelectBlog}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'desserts' && (
          <DessertsView
            onNavigate={handleNavigate}
            onSelectCustomDessert={handleSelectCustomDessert}
          />
        )}

        {currentPage === 'custom-orders' && (
          <CustomOrdersView
            prefilledDessertName={prefilledCustomDessert}
          />
        )}

        {currentPage === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Reader Modal for In-depth Article Engagement */}
      {activeArticle && (
        <ArticleReaderModal
          post={activeArticle}
          onClose={handleCloseArticle}
          onSelectBlog={handleSelectBlog}
          onNavigate={handleNavigate}
        />
      )}

      {/* Brand Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectBlog={handleSelectBlog}
      />
    </div>
  );
}
