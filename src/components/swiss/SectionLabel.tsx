interface SectionLabelProps {
  number: string;
  name: string;
  as?: 'div' | 'header';
}

/**
 * Numbered section prefix — the recurring molecule in the Swiss layout.
 * Red index in accent, uppercase name in body weight, separated by the
 * thick top border that anchors each section to the grid.
 */
const SectionLabel = ({ number, name, as: Tag = 'header' }: SectionLabelProps) => (
  <Tag className="flex items-baseline gap-3 border-t-2 border-swiss-fg pt-4 mb-8 md:mb-12">
    <span className="text-xs font-bold tracking-widest text-swiss-accent">
      {number}.
    </span>
    <span className="text-xs font-bold tracking-widest uppercase text-swiss-fg">
      {name}
    </span>
  </Tag>
);

export default SectionLabel;
