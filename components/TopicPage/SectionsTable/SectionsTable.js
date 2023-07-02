import styles from "./SectionsTable.module.css";

export default function SectionsTable() {
  return (
    <table>
      <thead>
        <tr>
          <th className={styles.sectionHeader}>Section</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Section 1</td>
          <td>
            <input type="checkbox" className="form-check-input" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
