import { useEffect, useState } from 'react';
import styles from '@/styles/pages/Blog.module.css';
import { motion } from 'framer-motion';
import MeshBackground from '@/components/MeshBackground';
import dynamic from 'next/dynamic';

const ParticleField = dynamic(() => import('@/components/ParticleField'), { ssr: false });

const Blog = () => {
  interface Post {
    guid: string;
    link: string;
    title: string;
    description: string;
    content: string;
  }

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hugojm');
        const data = await response.json();
        console.log(data.items); // Log the response to verify the correct property name
        setPosts(data.items);
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      }
    };

    fetchMediumPosts();
  }, []);

  const getPreview = (description: string) => {
    const text = description.replace(/<[^>]+>/g, ''); // Remove HTML tags
    return text.length > 200 ? text.substring(0, 200) + '...' : text;
  };

  const extractThumbnail = (content: string) => {
    const imgTagMatch = content.match(/<img[^>]+src="([^">]+)"/);
    return imgTagMatch ? imgTagMatch[1] : '';
  };

  return (
    <div className={styles.blogContainer}>
      <ParticleField mousePosition={{ x: 0, y: 0 }} />
      <MeshBackground />

      <motion.div className={styles.content}>
        <motion.h1
          className={styles.pageTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Insights & Articles
        </motion.h1>

        <motion.div className={styles.posts}>
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <motion.article
                key={post.guid}
                className={styles.post}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -5 }}
              >
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  {extractThumbnail(post.content) && (
                    <motion.div 
                      className={styles.imageWrapper}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img src={extractThumbnail(post.content)} alt={post.title} className={styles.thumbnail} />
                    </motion.div>
                  )}
                  <div className={styles.postContent}>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <div className={styles.preview}>{getPreview(post.description)}</div>
                    <motion.button 
                      className={styles.readMoreButton}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Read Article
                    </motion.button>
                  </div>
                </a>
              </motion.article>
            ))
          ) : (
            <motion.p 
              className={styles.noPosts}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Stay tuned for upcoming articles...
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Blog;