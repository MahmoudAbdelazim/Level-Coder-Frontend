import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./ProblemsTable.module.css";

export default function ProblemsTable({
  active,
  topic,
  setTopic,
  calculatePercentages,
  hideSolved,
}) {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const fetchProblems = async () => {
    setLoading(true);
    var myHeaders = new Headers();
    if (localStorage.getItem("token") != null) {
      myHeaders.append("Authorization", "Bearer " + localStorage["token"]);
    }
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/problem/problems/" + topic.id,
        requestOptions
      );
      if (response.status == 200) {
        const result = await response.json();
        const newTopic = { ...topic };
        newTopic.cfProblems = result.problems.cfProblems;
        newTopic.lcProblems = result.problems.lcProblems;
        newTopic.hrProblems = result.problems.hrProblems;
        setTopic(calculatePercentages(newTopic));
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleToggleSolved = async (problemId) => {
    setLoading(true);
    if (localStorage.getItem("token") == null) {
      setLoading(false);
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
        await fetchProblems();
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <table className={styles.problemsTable}>
      {loading && (
        <>
          <div className="loading-overlay"></div>
          <div className="loading-overlay-image-container">
            <img
              src="/images/loading.gif"
              className="loading-overlay-img"
              alt="Loading GIF"
            />
          </div>
        </>
      )}
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
          if (hideSolved && problem.solved) return;
          return (
            <tr>
              <td>
                <a
                  href={problem.link}
                  target="_blank"
                  className={
                    styles.problemTitle + (problem.solved ? " linethrough" : "")
                  }
                >
                  {problem.title}
                </a>
              </td>
              {active == "cf" && (
                <td className={problem.solved ? " linethrough" : ""}>
                  {problem.difficulty}
                </td>
              )}
              {active == "lc" && (
                <td className={problem.solved ? " linethrough" : ""}>
                  {problem.difficulty == 1
                    ? "Easy"
                    : problem.difficulty == 2
                    ? "Medium"
                    : "Hard"}
                </td>
              )}
              {active == "lc" && (
                <td className={problem.solved ? " linethrough" : ""}>
                  {problem.acceptance}%
                </td>
              )}
              {active == "hr" && (
                <td className={problem.solved ? " linethrough" : ""}>
                  {problem.successRate}%
                </td>
              )}
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
