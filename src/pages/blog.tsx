import { useEffect, useState } from 'react';
import Section from '@/components/Section';

interface Post {
  guid: string;
  link: string;
  title: string;
  pubDate: string;
  description: string;
}

/** ISO-ish dates read better than prose dates in a monospace column. */
const formatDate = (raw: string) => {
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return '';
  return d.toISOString().slice(0, 10);
};

const getPreview = (description: string) => {
  const text = description.replace(/<[^>]+>/g, '').trim();
  return text.length > 180 ? text.slice(0, 180) + '…' : text;
};

const statusMessage = {
  loading: 'loading…',
  empty: 'no posts yet.',
  error: "couldn't load posts right now.",
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
      <Section rule={false}>
        <h1 className="text-2xl md:text-3xl">journal</h1>
        <p className="mt-8 max-w-measure text-muted">
          Articles on machine learning, NLP, and shipping ML systems.
          Cross-posted from{' '}
          <a
            href="https://medium.com/@hugojm"
            target="_blank"
            rel="noopener noreferrer"
            className="link text-ink"
          >
            Medium
          </a>
          .
        </p>
      </Section>

      <Section
        label="posts"
        meta={status === 'ready' ? `${posts.length} entries` : undefined}
      >
        {status !== 'ready' ? (
          <p className="label">{statusMessage[status]}</p>
        ) : (
          <ol className="-my-4">
            {posts.map((post) => (
              <li key={post.guid} className="py-4">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block sm:flex sm:gap-8"
                >
                  <p className="label shrink-0 sm:w-28 sm:pt-1">
                    {formatDate(post.pubDate)}
                  </p>
                  <div className="mt-2 min-w-0 flex-1 sm:mt-0">
                    <h2 className="text-base text-ink">
                      {post.title}
                      <span
                        aria-hidden
                        className="ml-2 text-faint transition-colors duration-150 group-hover:text-ink"
                      >
                        ↗
                      </span>
                    </h2>
                    <p className="mt-2 max-w-measure text-sm text-muted">
                      {getPreview(post.description)}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ol>
        )}
      </Section>
    </main>
  );
};

export default Blog;
