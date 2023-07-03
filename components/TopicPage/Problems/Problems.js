import { useState } from "react";
import { FaHackerrank } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import ProblemsTable from "../ProblemsTable/ProblemsTable";
import styles from "./Problems.module.css";

export default function Problems({ topic, setTopic }) {
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
            CodeForces{" "}
            <span>
              <SiCodeforces />
            </span>
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
            LeetCode{" "}
            <span>
              <SiLeetcode />
            </span>
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
            HackerRank{" "}
            <span>
              <FaHackerrank />
            </span>
          </a>
        </div>
      </div>
      <ProblemsTable active={active} topic={topic} setTopic={setTopic} />
    </div>
  );
}
