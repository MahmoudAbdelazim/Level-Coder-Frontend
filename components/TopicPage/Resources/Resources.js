import ResourcesTable from "../ResourcesTable/ResourcesTable";
import styles from "./Resources.module.css";

export default function Resources() {
  return (
    <div className={styles.resources}>
      <div className={styles.languages}>
        <div className={styles.language + " " + styles.active}>
          <a href="#">English</a>
        </div>
        <div className={styles.language}>
          <a href="#" style={{ fontFamily: "Noto Sans Arabic" }}>
            عربى
          </a>
        </div>
      </div>
      <ResourcesTable />
    </div>
  );
}
