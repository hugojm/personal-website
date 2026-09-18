import { Container } from '@/components/Section';

const Footer = () => (
  <footer className="border-t border-rule">
    <Container>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 py-8">
        <span className="label">hugo jiménez</span>
        <span className="label text-faint">marbella, spain</span>
      </div>
    </Container>
  </footer>
);

export default Footer;
