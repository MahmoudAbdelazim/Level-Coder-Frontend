import LeftCard from "../LeftCard/LeftCard";
import Problems from "../Problems/Problems";
import Resources from "../Resources/Resources";
import styles from "./Topic.module.css";

export default function Topic({ topic }) {
  return (
    <div className={styles.topic}>
      <div className={styles.titleContainer}>
        <p className={styles.subtitle}>Learn and Solve</p>
        <h1 className={styles.title}>{topic.name}</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.cardContainer}>
          <LeftCard />
        </div>
        <div className={styles.problemsContainer + " " + styles.active}>
          <Problems topic={topic} />
        </div>
        <div className={styles.resourcesContainer}>
          <Resources />
        </div>
      </div>
    </div>
  );
}
