import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.index}>
      <h1 className={styles.title}>Level Coder</h1>
      <p className={styles.subtitle}>
        Your number #1 platform for finding different resources to learn problem
        solving
      </p>
      <p className={styles.p}>
        Whether you're preparing for an coding interview or you want to
        participate in competitive programming contests, or you're just
        passionate about coding and problem solving, you'll find what you need
      </p>

      <button className={`green ${styles.prev}`}>Preview Topics</button>
      <button className={styles.signup}>Sign Up</button>
    </div>
  );
}
