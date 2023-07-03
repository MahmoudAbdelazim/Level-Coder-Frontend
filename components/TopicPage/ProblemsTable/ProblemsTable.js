import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./ProblemsTable.module.css";

export default function ProblemsTable({ active, topic }) {
  const [problems, setProblems] = useState([]);

  const { push, reload } = useRouter();

  useEffect(() => {
    if (active && topic) {
      console.log(topic);
      if (active == "cf") {
        if (topic.cfProblems) setProblems(topic.cfProblems);
      } else if (active == "lc") {
        if (topic.lcProblems) setProblems(topic.lcProblems);
      } else if (active == "hr") {
        if (topic.hrProblems) setProblems(topic.hrProblems);
      }
    }
  }, [active, topic]);

  const handleToggleSolved = async (problemId) => {
    if (localStorage.getItem("token") == null) {
      push("/login");
      return;
    }
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage["token"]);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      problem: problemId,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/problem/toggle-solved",
        requestOptions
      );
      if (response.status == 200) {
        reload();
      }
    } catch (err) {
      console.error(err);
    }
  };

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
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={problem.solved ? true : false}
                  onClick={() => handleToggleSolved(problem.id)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
