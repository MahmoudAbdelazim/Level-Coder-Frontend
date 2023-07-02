import ProblemsTable from "../ProblemsTable/ProblemsTable";
import styles from "./Problems.module.css";

export default function Problems() {
  return (
    <div className={styles.problems}>
      <div className={styles.platforms}>
        <div
          className={styles.platform + " " + styles.cf + " " + styles.active}
        >
          <a href="#">CodeForces</a>
        </div>
        <div className={styles.platform + " " + styles.lc}>
          <a href="#">LeetCode</a>
        </div>
        <div className={styles.platform + " " + styles.hr}>
          <a href="#">HackerRank</a>
        </div>
      </div>
      <ProblemsTable />
    </div>
  );
}
