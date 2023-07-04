import styles from "./TopicPreview.module.css";
import { FaHackerrank } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

export default function TopicPreview({ topic }) {
  return (
    <div className={styles.topicPreviewContainer}>
      <a href={`/topic/${topic.name}`}>
        <div className={styles.topicPreview}>
          <h2 className={styles.title}>{topic.name}</h2>
          <div className={styles.bottom}>
            <div className={styles.platform}>
              <p className={styles.platformTitle}>
                <span>
                  <SiCodeforces />
                </span>
                CodeForces
              </p>
              <p className={styles.count}>
                <span>{topic.cfCount}</span> Problems
              </p>
            </div>
            <div className={styles.platform}>
              <p className={styles.platformTitle}>
                <span>
                  <SiLeetcode />
                </span>
                Leetcode
              </p>
              <p className={styles.count}>
                <span>{topic.lcCount}</span> Problems
              </p>
            </div>
            <div className={styles.platform}>
              <p className={styles.platformTitle}>
                <span>
                  <FaHackerrank />
                </span>
                HackerRank
              </p>
              <p className={styles.count}>
                <span>{topic.hrCount}</span> Problems
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
