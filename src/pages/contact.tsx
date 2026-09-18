import Section from '@/components/Section';

const links = [
  {
    label: 'email',
    value: 'hello@hugo-jimenez.com',
    href: 'mailto:hello@hugo-jimenez.com',
    note: 'best for substantive conversations',
  },
  {
    label: 'github',
    value: 'github.com/hugojm',
    href: 'https://github.com/hugojm',
    note: 'open source & experiments',
  },
  {
    label: 'linkedin',
    value: 'in/huugojimenez',
    href: 'https://www.linkedin.com/in/huugojimenez',
    note: 'professional network',
  },
];

const Contact = () => {
  return (
    <main>
      <Section rule={false}>
        <h1 className="text-2xl md:text-3xl">contact</h1>
        <p className="mt-8 max-w-measure text-muted">
          Email is the surest channel. I&apos;m always open to conversations
          about ML engineering, NLP, retrieval systems, and interesting
          technical problems.
        </p>
      </Section>

      <Section label="elsewhere">
        <ul className="-my-3">
          {links.map((item) => {
            const external = item.href.startsWith('http');
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group block py-3 sm:flex sm:items-baseline sm:gap-8"
                >
                  <span className="label shrink-0 sm:w-28">{item.label}</span>
                  <span className="mt-1 block min-w-0 flex-1 break-all text-ink sm:mt-0 sm:break-normal">
                    {item.value}
                  </span>
                  <span className="hidden text-sm text-faint md:block">
                    {item.note}
                  </span>
                  <span
                    aria-hidden
                    className="ml-3 hidden text-faint transition-colors duration-150 group-hover:text-ink sm:inline"
                  >
                    {external ? '↗' : '→'}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </Section>
    </main>
  );
};

export default Contact;
