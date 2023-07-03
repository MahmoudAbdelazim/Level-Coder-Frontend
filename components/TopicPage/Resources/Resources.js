import { useState } from "react";
import ResourcesTable from "../ResourcesTable/ResourcesTable";
import styles from "./Resources.module.css";

export default function Resources({ topic, setTopic }) {
  const [active, setActive] = useState("English");
  return (
    <div className={styles.resources}>
      <div className={styles.languages}>
        <div
          className={
            styles.language + (active == "English" ? " " + styles.active : "")
          }
        >
          <a href="#" onClick={() => setActive("English")}>
            English
          </a>
        </div>
        <div
          className={
            styles.language + (active == "Arabic" ? " " + styles.active : "")
          }
        >
          <a
            href="#"
            onClick={() => setActive("Arabic")}
            className="arabic"
            style={{ textAlign: "center" }}
          >
            عربى
          </a>
        </div>
      </div>
      <ResourcesTable topic={topic} setTopic={setTopic} active={active} />
    </div>
  );
}
