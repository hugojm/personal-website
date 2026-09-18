import type { ReactNode } from 'react';

/**
 * Fixed-measure column shared by every block on the site. Keeping the width in
 * one place is what makes the hairline rules line up from page to page.
 */
export const Container = ({ children }: { children: ReactNode }) => (
  <div className="mx-auto w-full max-w-[52rem] px-6">{children}</div>
);

interface SectionProps {
  /** Lowercase label printed above the block, e.g. "experience". */
  label?: string;
  /** Right-aligned counterpart to the label — a count, a year, a source. */
  meta?: string;
  /** Omitted on the first block of a page, which sits under the nav rule. */
  rule?: boolean;
  children: ReactNode;
  id?: string;
}

const Section = ({ label, meta, rule = true, children, id }: SectionProps) => (
  <section id={id} className={rule ? 'border-t border-rule' : undefined}>
    <Container>
      <div className="py-12 md:py-16">
        {label && (
          <header className="mb-8 flex items-baseline justify-between gap-4">
            <h2 className="label">{label}</h2>
            {meta && <span className="label text-faint">{meta}</span>}
          </header>
        )}
        {children}
      </div>
    </Container>
  </section>
);

export default Section;
