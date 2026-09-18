import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from '@/components/Section';

const navItems = [
  { href: '/about', label: 'about' },
  { href: '/projects', label: 'work' },
  { href: '/blog', label: 'journal' },
  { href: '/contact', label: 'contact' },
];

/**
 * No hamburger, no overlay, no scroll listener — at these type sizes the four
 * bracketed links simply wrap onto a second line on narrow screens.
 */
const Navigation = () => {
  const router = useRouter();

  return (
    <nav className="border-b border-rule">
      <Container>
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 py-5">
          <Link href="/" className="text-sm text-ink" aria-label="Hugo Jiménez — home">
            hugo-jimenez
          </Link>

          <ul className="flex flex-wrap items-baseline gap-x-1 text-sm">
            {navItems.map((item) => {
              const active = router.pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    data-active={active}
                    aria-current={active ? 'page' : undefined}
                    className={`bracket transition-colors duration-150 hover:text-ink ${
                      active ? 'text-ink' : 'text-muted'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
