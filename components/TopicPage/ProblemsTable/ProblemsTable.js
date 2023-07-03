import { useEffect, useState } from "react";
import styles from "./ProblemsTable.module.css";

export default function ProblemsTable({ active, topic }) {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    if (active && topic) {
      if (active == "cf") {
        if (topic.cfProblems) setProblems(topic.cfProblems);
      } else if (active == "lc") {
        if (topic.lcProblems) setProblems(topic.lcProblems);
      } else if (active == "hr") {
        if (topic.hrProblems) setProblems(topic.hrProblems);
      }
    }
  }, [active, topic]);
  return (
    <table className={styles.problemsTable}>
      <thead>
        <tr>
          <th className={styles.problemHeader}>Problem</th>
          {(active == "cf" || active == "lc") && <th>Difficulty</th>}
          {active == "lc" && <th>Acceptance</th>}
          {active == "hr" && <th>Success Rate</th>}
          <th>Solved</th>
        </tr>
      </thead>
      <tbody>
        {problems.map((problem) => {
          return (
            <tr>
              <td>
                <a
                  href={problem.link}
                  target="_blank"
                  className={styles.problemTitle}
                >
                  {problem.title}
                </a>
              </td>
              {active == "cf" && <td>{problem.difficulty}</td>}
              {active == "lc" && (
                <td>
                  {problem.difficulty == 1
                    ? "Easy"
                    : problem.difficulty == 2
                    ? "Medium"
                    : "Hard"}
                </td>
              )}
              {active == "lc" && <td>{problem.acceptance}%</td>}
              {active == "hr" && <td>{problem.successRate}%</td>}
              <td>
                <input type="checkbox" className="form-check-input" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
