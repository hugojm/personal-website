import { useEffect, useState } from 'react';
import SectionLabel from '@/components/swiss/SectionLabel';

interface Post {
  guid: string;
  link: string;
  title: string;
  pubDate: string;
  description: string;
}

const formatDate = (raw: string) => {
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return '';
  return d
    .toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
    .toUpperCase();
};

const getPreview = (description: string) => {
  const text = description.replace(/<[^>]+>/g, '').trim();
  return text.length > 200 ? text.slice(0, 200) + '…' : text;
};

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'empty' | 'error'>('loading');

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hugojm'
        );
        const data = await response.json();
        if (Array.isArray(data.items) && data.items.length > 0) {
          setPosts(data.items);
          setStatus('ready');
        } else {
          setStatus('empty');
        }
      } catch {
        setStatus('error');
      }
    };
    fetchMediumPosts();
  }, []);

  return (
    <main>
      {/* ───────── 01. Journal ───────── */}
      <section className="border-b-4 border-swiss-fg">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <SectionLabel number="01" name="Journal" />
          </div>
          <div className="lg:col-span-9">
            <h1 className="font-black uppercase tracking-tightest leading-[0.88] text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
              Notes &amp;{' '}
              <span className="text-swiss-accent">writing</span>.
            </h1>
            <p className="mt-8 md:mt-12 max-w-2xl text-lg md:text-xl leading-snug">
              Articles on machine learning, NLP, and shipping ML systems. Cross-posted from{' '}
              <a
                href="https://medium.com/@hugojm"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-2 border-swiss-fg hover:text-swiss-accent hover:border-swiss-accent transition-colors duration-150"
              >
                Medium
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ───────── Posts ───────── */}
      <section className="border-b-4 border-swiss-fg">
        {status === 'loading' && (
          <p className="mx-auto max-w-[1400px] px-6 md:px-12 py-12 text-xs font-bold tracking-widest uppercase">
            Loading…
          </p>
        )}
        {status === 'empty' && (
          <p className="mx-auto max-w-[1400px] px-6 md:px-12 py-12 text-xs font-bold tracking-widest uppercase">
            No posts yet.
          </p>
        )}
        {status === 'error' && (
          <p className="mx-auto max-w-[1400px] px-6 md:px-12 py-12 text-xs font-bold tracking-widest uppercase text-swiss-accent">
            Couldn't load posts right now.
          </p>
        )}

        {status === 'ready' && (
          <ol className="mx-auto max-w-[1400px]">
            {posts.map((post, i) => (
              <li
                key={post.guid}
                className="border-t-2 border-swiss-fg first:border-t-0"
              >
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block px-6 md:px-12 py-10 md:py-14 transition-colors duration-150 hover:bg-swiss-fg hover:text-swiss-bg"
                >
                  <div className="grid grid-cols-12 gap-4 md:gap-8 items-baseline">
                    <span className="col-span-2 md:col-span-1 text-xs font-bold tracking-widest text-swiss-accent">
                      {String(i + 1).padStart(2, '0')}.
                    </span>
                    <div className="col-span-10 md:col-span-8 space-y-4">
                      <h2 className="font-black uppercase tracking-tight text-2xl md:text-4xl lg:text-5xl leading-[1.0]">
                        {post.title}
                      </h2>
                      <p className="text-sm md:text-base leading-snug opacity-90 max-w-2xl">
                        {getPreview(post.description)}
                      </p>
                    </div>
                    <span className="col-span-12 md:col-span-2 text-xs font-bold tracking-widest uppercase whitespace-nowrap">
                      {formatDate(post.pubDate)}
                    </span>
                    <span
                      aria-hidden
                      className="hidden md:inline-block md:col-span-1 text-right text-3xl font-black transition-transform duration-150 group-hover:translate-x-2"
                    >
                      ↗
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ol>
        )}
      </section>
    </main>
  );
};

export default Blog;
