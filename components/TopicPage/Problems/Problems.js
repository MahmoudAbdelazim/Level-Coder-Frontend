import { useState } from "react";
import ProblemsTable from "../ProblemsTable/ProblemsTable";
import styles from "./Problems.module.css";

export default function Problems({ topic }) {
  const [active, setActive] = useState("cf");
  return (
    <div className={styles.problems}>
      <div className={styles.platforms}>
        <div
          className={
            styles.platform +
            " " +
            styles.cf +
            (active == "cf" ? " " + styles.active : " ")
          }
        >
          <a href="#" onClick={() => setActive("cf")}>
            CodeForces
          </a>
        </div>
        <div
          className={
            styles.platform +
            " " +
            styles.lc +
            (active == "lc" ? " " + styles.active : " ")
          }
        >
          <a href="#" onClick={() => setActive("lc")}>
            LeetCode
          </a>
        </div>
        <div
          className={
            styles.platform +
            " " +
            styles.hr +
            (active == "hr" ? " " + styles.active : " ")
          }
        >
          <a href="#" onClick={() => setActive("hr")}>
            HackerRank
          </a>
        </div>
      </div>
      <ProblemsTable active={active} topic={topic} />
    </div>
  );
}
