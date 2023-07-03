import { useState } from "react";
import LeftCard from "../LeftCard/LeftCard";
import Problems from "../Problems/Problems";
import Resources from "../Resources/Resources";
import styles from "./Topic.module.css";

export default function Topic({ topic, setTopic, calculatePercentages }) {
  const [active, setActive] = useState("problems");
  return (
    <div className={styles.topic}>
      <div className={styles.titleContainer}>
        <p className={styles.subtitle}>Learn and Solve</p>
        <h1 className={styles.title}>{topic.name}</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.cardContainer}>
          <LeftCard topic={topic} active={active} setActive={setActive} />
        </div>
        <div
          className={
            styles.problemsContainer +
            (active == "problems" ? " " + styles.active : "")
          }
        >
          <Problems
            topic={topic}
            setTopic={setTopic}
            calculatePercentages={calculatePercentages}
          />
        </div>
        <div
          className={
            styles.resourcesContainer +
            (active == "resources" ? " " + styles.active : "")
          }
        >
          <Resources topic={topic} setTopic={setTopic} />
        </div>
      </div>
    </div>
  );
}
