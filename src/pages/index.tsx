import Layout from '../components/Layout';
import { FaPython, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiScikitlearn, SiKeras, SiOpenai, SiJupyter, SiDocker } from 'react-icons/si';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const technologies = [
    { icon: <SiTensorflow className="w-8 h-8" />, name: 'TensorFlow' },
    { icon: <SiPytorch className="w-8 h-8" />, name: 'PyTorch' },
    { icon: <SiScikitlearn className="w-8 h-8" />, name: 'Scikit-learn' },
    { icon: <SiKeras className="w-8 h-8" />, name: 'Keras' },
    { icon: <SiOpenai className="w-8 h-8" />, name: 'OpenAI' },
    { icon: <SiJupyter className="w-8 h-8" />, name: 'Jupyter' },
    { icon: <SiDocker className="w-8 h-8" />, name: 'Docker' },
    { icon: <FaPython className="w-8 h-8" />, name: 'Python' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background-light to-background z-0" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="gradient-text mb-6">
              Machine Learning Engineer & AI Researcher
            </h1>
            <p className="text-xl md:text-2xl text-foreground-muted mb-8">
              Transforming complex data into intelligent solutions. Specializing in deep learning, 
              computer vision, and natural language processing.
            </p>
            <div className="flex gap-4">
              <Link href="/projects" 
                className="bg-primary hover:bg-primary-light px-6 py-3 rounded-lg font-medium transition-colors">
                View Projects
              </Link>
              <Link href="/contact"
                className="border border-foreground/20 hover:border-primary px-6 py-3 rounded-lg font-medium transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-background-light">
        <div className="container">
          <h2 className="heading mb-12">Featured ML Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Cards */}
            <div className="card group hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Computer Vision Pipeline</h3>
              <p className="text-foreground-muted mb-4">Real-time object detection system using YOLO and TensorFlow</p>
              <div className="flex gap-2">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">TensorFlow</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">OpenCV</span>
              </div>
            </div>
            {/* Add more project cards */}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="heading text-center mb-12">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="icon-wrapper mb-4 transform transition-transform group-hover:scale-110">
                  {tech.icon}
                </div>
                <p className="text-foreground-muted group-hover:text-primary transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-background-light">
        <div className="container text-center">
          <h2 className="heading mb-8">Connect & Collaborate</h2>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
              className="text-foreground-muted hover:text-primary transition-colors">
              <FaGithub className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
              className="text-foreground-muted hover:text-primary transition-colors">
              <FaLinkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}