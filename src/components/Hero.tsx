
const Hero = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <section className="hero-section py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{title}</h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">{subtitle}</p>
      </div>
    </section>
  );
};

export default Hero;