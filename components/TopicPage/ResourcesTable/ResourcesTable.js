import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import SectionsTable from "../SectionsTable/SectionsTable";
import styles from "./ResourcesTable.module.css";

export default function ResourcesTable({ topic, setTopic, active }) {
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

  const fetchResources = async () => {
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
        process.env.NEXT_PUBLIC_BACKEND_URL + "/resource/resources/" + topic.id,
        requestOptions
      );
      if (response.status == 200) {
        const result = await response.json();
        const newTopic = { ...topic };
        newTopic.resources = result.resources;
        setTopic(newTopic);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleCompleted = async (resourceId) => {
    if (localStorage.getItem("token") == null) {
      push("/login");
      return;
    }
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage["token"]);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      resource: resourceId,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/resource/toggle-completed",
        requestOptions
      );
      if (response.status == 200) {
        fetchResources();
      }
    } catch (err) {
      console.error(err);
    }
  };

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
              <td className={cls}>
                <a
                  href={resource.link}
                  target={"_blank"}
                  className={resource.completed ? " linethrough" : ""}
                >
                  {resource.title}
                  <span className={styles.openLink}>
                    <FaExternalLinkAlt />
                  </span>
                  <p
                    className={
                      styles.description +
                      (resource.completed ? " linethrough" : "")
                    }
                  >
                    {" "}
                    {resource.description}
                  </p>
                </a>
              </td>
              <td className={resource.completed ? " linethrough" : ""}>
                {resource.platform}
              </td>
              <td>
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={resource.completed ? true : false}
                  onClick={() => handleToggleCompleted(resource.id)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
