import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPython, FaAws, FaDatabase, FaRobot, FaBrain } from 'react-icons/fa';
import { SiOpenai, SiPytorch } from 'react-icons/si';
import styles from '../styles/TimelineSection.module.css';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

interface TimelineItem {
  year: string;
  duration: string;
  title: string;
  company: string;
  location: string;
  responsibilities: string[];
  technologies: {
    icon: React.ReactNode;
    name: string;
  }[];
  skillCategories: SkillCategory[];
  highlight: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2023",
    duration: "Dec 2023 - Present",
    title: "ML Engineer",
    company: "RavenPack",
    location: "Marbella, Spain",
    highlight: "Specialized in NLP and Transformer Models",
    responsibilities: [
      "Developing Transformer Models for NLP to extract insights from financial documents",
      "Deploying ML models to AWS SageMaker for production environments",
      "Optimizing RAG systems and improving chunk quality evaluation"
    ],
    skillCategories: [
      {
        name: "Machine Learning",
        icon: <FaBrain />,
        skills: ["Transformer Models", "RAG Systems", "NLP"]
      },
      {
        name: "Cloud & Infrastructure",
        icon: <FaAws />,
        skills: ["AWS SageMaker", "Docker", "MLOps"]
      }
    ],
    technologies: [
      { icon: <SiPytorch className={styles.techIcon} />, name: "Transformer Models" },
      { icon: <FaAws className={styles.techIcon} />, name: "AWS SageMaker" },
      { icon: <SiOpenai className={styles.techIcon} />, name: "RAG Systems" }
    ]
  },
  {
    year: "2022",
    duration: "Oct 2022 - Dec 2023",
    title: "Data Scientist",
    company: "Factor Energia",
    location: "Barcelona, Spain",
    responsibilities: [
      "Created WhatsApp chatbots using Langchain with custom actions",
      "Developed ML models for customer segmentation and engagement prediction",
      "Implemented RPA solutions for automated reporting using Python and Jenkins",
      "Managed data extraction from MySQL, PostgreSQL, and SQL Server databases",
      "Integrated LLMs for task automation and service quality improvement"
    ],
    technologies: [
      { icon: <FaPython className={styles.techIcon} />, name: "Python" },
      { icon: <FaDatabase className={styles.techIcon} />, name: "SQL" },
      { icon: <FaRobot className={styles.techIcon} />, name: "RPA" }
    ],
    skillCategories: [
      {
        name: "Data Science",
        icon: <FaBrain />,
        skills: ["Customer Segmentation", "Engagement Prediction", "LLMs"]
      },
      {
        name: "Automation",
        icon: <FaRobot />,
        skills: ["RPA", "Automated Reporting", "Jenkins"]
      }
    ],
    highlight: "Integrated LLMs for task automation and service quality improvement"
  }
];

const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const progressBar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className={styles.timelineSection} ref={containerRef}>
      <motion.div className={styles.progressIndicator} style={{ scaleX: progressBar }} />
      <div className={styles.experienceGrid}>
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={styles.experienceCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className={styles.cardContent}>
              <div className={styles.timeIndicator}>
                <span className={styles.year}>{item.year}</span>
                <span className={styles.duration}>{item.duration}</span>
              </div>
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <p className={styles.highlight}>{item.highlight}</p>
              <div className={styles.skillCategories}>
                {item.skillCategories.map((category, idx) => (
                  <div key={idx} className={styles.category}>
                    <div className={styles.categoryHeader}>
                      {category.icon}
                      <span>{category.name}</span>
                    </div>
                    <div className={styles.skillTags}>
                      {category.skills.map(skill => (
                        <span key={skill} className={styles.tag}>{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;