import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
  { href: '/', label: 'Index' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Work' },
  { href: '/blog', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
];

const SlideLink = ({ label, active }: { label: string; active: boolean }) => (
  <span className="swiss-link text-xs font-bold tracking-widest uppercase leading-none">
    <span className={active ? 'text-swiss-accent' : ''}>{label}</span>
    <span>{label}</span>
  </span>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const onClick = (e: MouseEvent) => {
      if (sheetRef.current && !sheetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-40 bg-swiss-bg border-b-4 border-swiss-fg">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Hugo Jimenez — home"
          className="group flex items-baseline gap-2"
        >
          <span className="text-xs font-bold tracking-widest text-swiss-accent">
            00.
          </span>
          <span className="text-base font-black tracking-tight uppercase">
            Hugo Jimenez
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-baseline gap-2"
              aria-current={router.pathname === item.href ? 'page' : undefined}
            >
              <span className="text-[10px] font-bold tracking-widest text-swiss-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <SlideLink label={item.label} active={router.pathname === item.href} />
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden h-10 px-3 border-2 border-swiss-fg text-xs font-bold tracking-widest uppercase hover:bg-swiss-fg hover:text-swiss-bg transition-colors duration-150"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {isOpen && (
        <div
          ref={sheetRef}
          className="md:hidden border-t-2 border-swiss-fg bg-swiss-bg"
        >
          <ul className="px-6 py-2">
            {navItems.map((item, i) => {
              const active = router.pathname === item.href;
              return (
                <li key={item.href} className="border-b-2 border-swiss-fg last:border-b-0">
                  <Link
                    href={item.href}
                    className={`flex items-baseline gap-3 py-4 text-2xl font-black tracking-tight uppercase ${
                      active ? 'text-swiss-accent' : 'text-swiss-fg'
                    }`}
                  >
                    <span className="text-xs font-bold tracking-widest text-swiss-accent">
                      {String(i + 1).padStart(2, '0')}.
                    </span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
