import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        2023 Copyrights &copy;{" "}
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/mahmoudabdelazim/"
          target={"_blank"}
        >
          Mahmoud Abdelazim
        </a>
      </p>
    </div>
  );
}
