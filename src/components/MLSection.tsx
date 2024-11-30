import styles from '../styles/components/MLSection.module.css';

const MLSection = ({ title, content }: { title: string; content: React.ReactNode }) => (
  <div className={styles.mlSection}>
    <div className={styles.neuralNode}>
      <div className={styles.pulse}></div>
    </div>
    <h2>{title}</h2>
    <div className={styles.content}>
      {content}
    </div>
  </div>
);

export default MLSection;