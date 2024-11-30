import styles from '../styles/MeshBackground.module.css';

const MeshBackground = () => {
  return (
    <div className={styles.meshBackground}>
      <div className={styles.gradient1}></div>
      <div className={styles.gradient2}></div>
      <div className={styles.noise}></div>
    </div>
  );
};

export default MeshBackground;