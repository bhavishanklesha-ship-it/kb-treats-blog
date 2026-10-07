/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar, NavigationPage } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { BlogView } from './components/BlogView';
import { DessertsView } from './components/DessertsView';
import { CustomOrdersView } from './components/CustomOrdersView';
import { ContactView } from './components/ContactView';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { BLOG_POSTS, BlogPost } from './data/blogs';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [activeBlogSlug, setActiveBlogSlug] = useState<string | null>(null);
  const [prefilledCustomDessert, setPrefilledCustomDessert] = useState<string>('');

  // Handle hash changes for direct linking
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('article/')) {
        const slug = hash.replace('article/', '');
        const exists = BLOG_POSTS.find((p) => p.slug === slug);
        if (exists) {
          setActiveBlogSlug(slug);
          return;
        }
      }

      if (['home', 'about', 'blog', 'desserts', 'custom-orders', 'contact'].includes(hash)) {
        setCurrentPage(hash as NavigationPage);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: NavigationPage) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBlog = (slug: string) => {
    setActiveBlogSlug(slug);
    window.location.hash = `article/${slug}`;
  };

  const handleCloseArticle = () => {
    setActiveBlogSlug(null);
    window.location.hash = currentPage;
  };

  const handleSelectCustomDessert = (dessertName: string) => {
    setPrefilledCustomDessert(dessertName);
  };

  const activeArticle: BlogPost | undefined = activeBlogSlug
    ? BLOG_POSTS.find((p) => p.slug === activeBlogSlug)
    : undefined;

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
