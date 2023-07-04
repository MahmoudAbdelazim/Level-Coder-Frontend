import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./Index.module.css";

export default function Index() {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(localStorage["firstName"] + " " + localStorage["lastName"]);
  }, []);

  const { push, reload } = useRouter();
  return (
    <div className={styles.index}>
      <div className={styles.titleContainer}>
        <p>Welcome</p>
        <h1 className={styles.title}>{name}</h1>
      </div>
      <p className={styles.subtitle}>
        Level Coder is your number #1 platform for finding different resources
        and challenges to learn problem solving
      </p>
      <p className={styles.p}>
        Whether you're preparing for a coding interview or you want to
        participate in competitive programming contests, or you're just
        passionate about coding and problem solving, you'll find what you need
      </p>
      <button
        className={`green ${styles.prev}`}
        onClick={(e) => push("/topics")}
      >
        All Topics
      </button>
    </div>
  );
}
