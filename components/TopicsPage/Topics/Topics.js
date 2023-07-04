import { useEffect, useState } from "react";
import TopicPreview from "../TopicPreview/TopicPreview";
import styles from "./Topics.module.css";

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTopics = async () => {
    setLoading(true);
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
    setLoading(false);
  };
  useEffect(() => {
    fetchTopics();
  }, []);
  return (
    <div className={styles.topics}>
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
      {topics.map((topic) => {
        return <TopicPreview key={topic.id} topic={topic} />;
      })}
    </div>
  );
}
