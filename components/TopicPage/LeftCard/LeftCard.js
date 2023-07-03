import styles from "./LeftCard.module.css";

export default function LeftCard({ active, setActive }) {
  return (
    <div className={styles.leftCard}>
      <div className={styles.desc}>
        If you're new to Binary Search, or you want to get more advanced, take a
        look at the learning resources
      </div>
      <div
        className={
          styles.problems + (active == "problems" ? " " + styles.active : "")
        }
      >
        <a href="#" onClick={() => setActive("problems")}>
          Problems
        </a>
      </div>
      <div
        className={
          styles.resources + (active == "resources" ? " " + styles.active : "")
        }
      >
        <a href="#" onClick={() => setActive("resources")}>
          Learning Resources
        </a>
      </div>
    </div>
  );
}
