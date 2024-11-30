import styles from '../styles/components/Experience.module.css';

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
}

const ExperienceItem = ({ company, role, period, location, responsibilities }: ExperienceItemProps) => (
  <div className={styles.experienceItem}>
    <h3 className={styles.company}>{company}</h3>
    <h4 className={styles.role}>{role}</h4>
    <div className={styles.metadata}>
      <span>{period}</span>
      <span>•</span>
      <span>{location}</span>
    </div>
    <ul className={styles.responsibilities}>
      {responsibilities.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  return (
    <section className={styles.experience}>
      <h2>Work Experience</h2>
      <div className={styles.timeline}>
        <ExperienceItem
          company="RavenPack"
          role="Machine Learning Engineer"
          period="Dec 2023 - Present"
          location="Marbella, Andalucía, España (Hybrid)"
          responsibilities={[
            "Developing Transformer Models for NLP, extracting insights from financial documents",
            "Deploying ML models to AWS SageMaker for production environments",
            "Optimizing Retrieval-Augmented Generation (RAG) systems"
          ]}
        />
        <ExperienceItem
          company="Factor Energia"
          role="Data Scientist"
          period="Oct 2022 - Dec 2023"
          location="Barcelona, Cataluña, España (Hybrid)"
          responsibilities={[
            "Created WhatsApp chatbots using Langchain with integrated actions",
            "Developed ML models for customer segmentation and engagement prediction",
            "Implemented RPA solutions for automated reporting using Python and Jenkins",
            "Worked with SQL databases (MySQL, PostgreSQL, SQL Server)",
            "Utilized LLMs to automate tasks and improve service quality"
          ]}
        />
      </div>
    </section>
  );
};

export default Experience;