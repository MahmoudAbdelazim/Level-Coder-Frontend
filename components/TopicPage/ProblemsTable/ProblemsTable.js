import styles from "./ProblemsTable.module.css";

export default function ProblemsTable() {
  return (
    <table className={styles.problemsTable}>
      <thead>
        <tr>
          <th className={styles.problemHeader}>Problem</th>
          <th>Solved</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a href="#">New Problem II</a>
          </td>
          <td>
            <input type="checkbox" className="form-check-input" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
