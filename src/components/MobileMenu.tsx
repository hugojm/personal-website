
import Link from 'next/link';
import { useRouter } from 'next/router';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const router = useRouter();
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 w-3/4 bg-background-light px-6 py-6 shadow-xl">
        <div className="flex flex-col space-y-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-lg font-medium transition-colors hover:text-primary ${
                router.pathname === href ? 'text-primary' : 'text-foreground-muted'
              }`}
              onClick={onClose}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;