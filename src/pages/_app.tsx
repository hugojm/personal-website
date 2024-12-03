import type { AppProps } from 'next/app';
import Navigation from '@/components/Navigation';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import '@/styles/globals.css';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import Script from 'next/script';

ReactGA.initialize('G-M0Q306LKMJ');

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>

      <Script
        id="iubenda-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var _iub = _iub || [];
            _iub.csConfiguration = {"siteId":3858144,"cookiePolicyId":23602836,"lang":"en","storage":{"useSiteId":true}};
          `,
        }}
      />
      <Script
        src="https://cs.iubenda.com/autoblocking/3858144.js"
        strategy="afterInteractive"
      />
      <Script
        src="//cdn.iubenda.com/cs/gpp/stub.js"
        strategy="afterInteractive"
      />
      <Script
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
        strategy="afterInteractive"
        async
      />
      <DefaultSeo {...SEO} />
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}