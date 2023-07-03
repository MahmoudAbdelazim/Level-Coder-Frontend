import { useEffect, useState } from "react";
import TopicPreview from "../TopicPreview/TopicPreview";
import styles from "./Topics.module.css";

export default function Topics() {
  const [topics, setTopics] = useState([]);

  const fetchTopics = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/topic/all-topics",
        requestOptions
      );
      const result = await response.json();
      setTopics(result.topics);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchTopics();
  }, []);
  return (
    <div className={styles.topics}>
      {topics.map((topic) => {
        return <TopicPreview key={topic.id} topic={topic} />;
      })}
    </div>
  );
}
