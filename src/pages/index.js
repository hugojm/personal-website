import { NextSeo } from 'next-seo';
import SEO from '../../next-seo.config';

const Home = () => (
  <>
    <NextSeo {...SEO} />
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-xl">I am a Machine Learning Engineer.</p>
    </div>
  </>
);

export default Home;