import { FaExternalLinkAlt } from "react-icons/fa";
import SectionsTable from "../SectionsTable/SectionsTable";
import styles from "./ResourcesTable.module.css";

export default function ResourcesTable() {
  return (
    <table className={styles.resourcesTable}>
      <thead>
        <tr>
          <th className={styles.resourceHeader}>Resource</th>
          <th>Platform</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Learn dynamic programming from zero to hero!
              <a className={styles.openLink} href="https://www.google.com">
                <FaExternalLinkAlt />
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className={styles.section}>
                <SectionsTable />
              </div>
            </div>
          </td>
          <td>YouTube</td>
          <td>
            <input type="checkbox" className="form-check-input" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
