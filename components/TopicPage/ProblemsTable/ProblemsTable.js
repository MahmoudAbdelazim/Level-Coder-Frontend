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
          <td>New Problem II</td>
          <td>
            <input type="checkbox" className="form-check-input" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
