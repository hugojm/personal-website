import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import ReactGA from 'react-ga';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '../../next-seo.config';
import '@/styles/globals.css';

ReactGA.initialize('G-M0Q306LKMJ');

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <div className="flex min-h-screen flex-col">
        <Navigation />
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}
