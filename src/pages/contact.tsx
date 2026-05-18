import SectionLabel from '@/components/swiss/SectionLabel';

const links = [
  {
    label: 'Email',
    value: 'hello@hugo-jimenez.com',
    href: 'mailto:hello@hugo-jimenez.com',
    note: 'Best for substantive conversations',
  },
  {
    label: 'GitHub',
    value: 'github.com/hugojm',
    href: 'https://github.com/hugojm',
    note: 'Open source & experiments',
  },
  {
    label: 'LinkedIn',
    value: 'Hugo Jiménez',
    href: 'https://www.linkedin.com/in/huugojimenez',
    note: 'Professional network',
  },
];

const Contact = () => {
  return (
    <main>
      {/* ───────── 01. Contact ───────── */}
      <section className="border-b-4 border-swiss-fg">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <SectionLabel number="01" name="Contact" />
          </div>
          <div className="lg:col-span-9">
            <h1 className="font-black uppercase tracking-tightest leading-[0.85] text-7xl sm:text-8xl md:text-9xl lg:text-[11rem]">
              Get in
              <br />
              <span className="text-swiss-accent">touch</span>.
            </h1>
            <p className="mt-8 md:mt-12 max-w-2xl text-lg md:text-xl leading-snug">
              Email is the surest channel. I'm always open to conversations about
              ML engineering, NLP, retrieval systems, and interesting technical
              problems.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── Contact rows ───────── */}
      <section className="border-b-4 border-swiss-fg">
        <ul className="mx-auto max-w-[1400px]">
          {links.map((item, i) => (
            <li
              key={item.label}
              className="border-t-2 border-swiss-fg first:border-t-0"
            >
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block px-6 md:px-12 py-10 md:py-16 transition-colors duration-150 hover:bg-swiss-accent hover:text-swiss-bg"
              >
                <div className="grid grid-cols-12 gap-4 items-baseline">
                  <span className="col-span-2 md:col-span-1 text-xs font-bold tracking-widest text-swiss-accent group-hover:text-swiss-bg">
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  <div className="col-span-10 md:col-span-7 space-y-2">
                    <p className="text-xs font-bold tracking-widest uppercase">
                      {item.label}
                    </p>
                    <p className="font-black uppercase tracking-tight text-3xl md:text-5xl lg:text-6xl leading-none break-all md:break-normal">
                      {item.value}
                    </p>
                  </div>
                  <span className="col-span-8 md:col-span-3 text-xs font-bold tracking-widest uppercase opacity-80">
                    {item.note}
                  </span>
                  <span
                    aria-hidden
                    className="col-span-4 md:col-span-1 text-right text-3xl md:text-5xl font-black transition-transform duration-150 group-hover:translate-x-2"
                  >
                    →
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Contact;
