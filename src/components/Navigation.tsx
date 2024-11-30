import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

const Navigation = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => router.pathname === path;
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-background-light/80 backdrop-blur-md z-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-display font-bold text-xl">
              Hugo Jimenez
            </Link>
            <div className="hidden md:flex space-x-8">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(href) ? 'text-primary' : 'text-foreground-muted'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
            <button 
              className="md:hidden p-2" 
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Navigation;