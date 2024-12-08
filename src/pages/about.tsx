import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import MeshBackground from '@/components/MeshBackground';
import styles from '../styles/About.module.css';

const ParticleField = dynamic(() => import('@/components/ParticleField'), { ssr: false });
const keySkills = ["NLP", "Machine Learning", "Data Science", "Python", "AWS", "Docker"];

const jobExperiences = [
  {
    company: "RavenPack",
    role: "Machine Learning Engineer",
    period: "Dec 2023 - Present",
    location: "Marbella, Spain",
    achievements: [
      {
        metric: "90%",
        label: "Model Accuracy"
      },
      {
        metric: "3x",
        label: "Processing Speed"
      },
    ],
    description: `Leading NLP initiatives for financial document analysis using state-of-the-art transformer models. 
    Developing and optimizing RAG systems for enhanced information retrieval.`,
    impact: "Improved document processing accuracy by 35%",
    tech: ["PyTorch", "AWS SageMaker", "Transformers", "RAG", "Docker"],
    responsibilities: [
      "Design and implementation of transformer-based NLP models",
      "Production deployment on AWS SageMaker",
      "RAG system optimization and evaluation",
      "Cross-team collaboration on ML infrastructure"
    ]
  },
  {
    company: "Factor Energia",
    role: "Data Scientist",
    period: "Oct 2022 - Dec 2023",
    location: "Barcelona, Spain",
    achievements: [
      {
        metric: "100K+",
        label: "Daily Users Impacted"
      },
      {
        metric: "40%",
        label: "Process Automation"
      },
      {
        metric: "85%",
        label: "Customer Satisfaction"
      }
    ],
    description: `Led data science initiatives focusing on customer engagement and process automation. 
    Implemented innovative solutions using LangChain and machine learning for WhatsApp chatbots and automated reporting.`,
    impact: "Developed AI solutions reaching 100K+ users daily and automated 40% of manual processes",
    tech: ["Python", "LangChain", "SQL", "Jenkins", "WhatsApp API", "Machine Learning"],
    responsibilities: [
      "Developed and deployed WhatsApp chatbots using LangChain",
      "Created ML models for customer segmentation and engagement",
      "Automated reporting systems with Python and Jenkins",
      "Implemented data pipelines and SQL optimization"
    ]
  }
];

const About = () => {

  const professionalSummary = (
    <>
      Crafting <span className={styles.highlight}>intelligent solutions</span> through AI 
      and Machine Learning. Specializing in developing{' '}
      <span className={styles.highlight}>production-ready NLP systems</span> and{' '}
      <span className={styles.highlight}>transformative data solutions</span> that 
      deliver measurable business impact.
    </>
  );

  return (
    <div className={styles.container}>
      <ParticleField mousePosition={{ x: 0, y: 0 }} />
      <MeshBackground />

      <motion.div className={styles.content}>
        <motion.h1
          className={styles.pageTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          AI & Machine Learning Engineer
        </motion.h1>

        <motion.p
          className={styles.introText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {professionalSummary}
        </motion.p>

        <motion.div className={styles.skillsContainer}>
          {keySkills.map((skill, index) => (
            <motion.span 
              key={skill} 
              className={styles.skillBadge}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        <motion.div className={styles.experienceSection}>
          {jobExperiences.map((job, index) => (
            <motion.div
              key={job.company}
              className={styles.experienceCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.companyInfo}>
                    <div className={styles.companyLogo}>
                    <img src={`/images/${job.company.toLowerCase().replace(/\s+/g, '_')}.png`} alt={job.company} />
                    </div>
                  <div className={styles.roleInfo}>
                    <h3 className={styles.roleTitle}>{job.role}</h3>
                    <p className={styles.companyName}>{job.company}</p>
                    <p className={styles.periodLocation}>
                      {job.period} • {job.location}
                    </p>
                  </div>
                </div>
                <p className={styles.impactStatement}>{job.impact}</p>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.metrics}>
                  {job.achievements.map((achievement) => (
                    <div key={achievement.label} className={styles.metric}>
                      <div className={styles.metricValue}>{achievement.metric}</div>
                      <div className={styles.metricLabel}>{achievement.label}</div>
                    </div>
                  ))}
                </div>

                {job.responsibilities && (
                  <div className={styles.responsibilities}>
                    <h4 className={styles.responsibilitiesTitle}>Key Responsibilities</h4>
                    <ul className={styles.responsibilitiesList}>
                      {job.responsibilities.map((resp) => (
                        <li key={resp} className={styles.responsibilityItem}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className={styles.techStack}>
                  {job.tech.map((tech) => (
                    <span key={tech} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;