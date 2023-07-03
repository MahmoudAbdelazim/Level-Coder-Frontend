import { useEffect, useState } from "react";
import styles from "./ProblemsTable.module.css";

export default function ProblemsTable({ active, topic }) {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    if (active) {
      if (active == "cf") {
        if (topic.cfProblems) setProblems(topic.cfProblems);
      } else if (active == "lc") {
        if (topic.lcProblems) setProblems(topic.lcProblems);
      } else if (active == "hr") {
        if (topic.hrProblems) setProblems(topic.hrProblems);
      }
    }
    console.log(topic);
    console.log(active);
  }, [active]);
  return (
    <table className={styles.problemsTable}>
      <thead>
        <tr>
          <th className={styles.problemHeader}>Problem</th>
          <th>Solved</th>
        </tr>
      </thead>
      <tbody>
        {problems.map((problem) => {
          return (
            <tr>
              <td>
                <a href={problem.link} target="_blank">
                  {problem.title}
                </a>
              </td>
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
