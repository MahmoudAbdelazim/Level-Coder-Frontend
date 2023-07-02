import styles from "./LeftCard.module.css";

export default function LeftCard() {
  return (
    <div className={styles.leftCard}>
      <div className={styles.desc}>
        If you're new to Binary Search, or you want to get more advanced, take a
        look at the learning resources
      </div>
      <div className={styles.problems + " " + styles.active}>
        <a href="">Problems</a>
      </div>
      <div className={styles.resources}>
        <a href="">Learning Resources</a>
      </div>
    </div>
  );
}
