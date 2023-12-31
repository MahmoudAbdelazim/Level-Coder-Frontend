import { useState } from "react";
import { FaHackerrank } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import ProblemsTable from "../ProblemsTable/ProblemsTable";
import styles from "./Problems.module.css";

export default function Problems({ topic, setTopic, calculatePercentages }) {
  const [active, setActive] = useState("cf");
  const [hideSolved, setHideSolved] = useState(false);
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
            <p>{topic.cfPercentage + "%"}</p>
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
            <p>{topic.lcPercentage + "%"}</p>
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
            <p>{topic.hrPercentage + "%"}</p>
          </a>
        </div>
      </div>
      <div className={styles.hideSolvedContainer}>
        <label htmlFor="hideSolved">Hide solved</label>
        <input
          id="hideSolved"
          type={"checkbox"}
          className="form-check-input"
          checked={hideSolved}
          onChange={(e) => setHideSolved(!hideSolved)}
        />
      </div>
      <ProblemsTable
        active={active}
        topic={topic}
        setTopic={setTopic}
        calculatePercentages={calculatePercentages}
        hideSolved={hideSolved}
      />
    </div>
  );
}
