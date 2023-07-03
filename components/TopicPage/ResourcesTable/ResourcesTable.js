import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import SectionsTable from "../SectionsTable/SectionsTable";
import styles from "./ResourcesTable.module.css";

export default function ResourcesTable({ topic, active }) {
  const [resources, setResources] = useState([]);
  const [cls, setCls] = useState("");

  useEffect(() => {
    if (active && topic && topic.resources) {
      if (active == "Arabic") setCls("arabic");
      else setCls("");
      const newResources = [];
      for (const resource of topic.resources) {
        if (resource.language == active) {
          newResources.push(resource);
        }
        setResources(newResources);
      }
    }
  }, [active, topic]);

  return (
    <table className={styles.resourcesTable}>
      <thead>
        <tr>
          <th className={styles.resourceHeader + " " + cls}>Resource</th>
          <th className={cls}>Platform</th>
          <th className={cls}>Completed</th>
        </tr>
      </thead>
      <tbody>
        {resources.map((resource) => {
          return (
            <tr>
              <td>
                <p
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  className={cls}
                >
                  {resource.title}
                  <a
                    className={styles.openLink}
                    href={resource.link}
                    target={"_blank"}
                  >
                    <FaExternalLinkAlt />
                  </a>
                  <p className={styles.description}>{resource.description}</p>
                </p>
                {/* <div className="collapse" id="collapseExample">
                  <div className={styles.section}>
                    <SectionsTable />
                  </div>
                </div> */}
              </td>
              <td>{resource.platform}</td>
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
