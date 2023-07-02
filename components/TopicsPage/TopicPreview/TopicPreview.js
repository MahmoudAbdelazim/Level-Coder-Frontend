import styles from "./TopicPreview.module.css";
import { FaHackerrank } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

export default function TopicPreview() {
  return (
    <div className={styles.topicPreviewContainer}>
      <a href="#">
        <div className={styles.topicPreview}>
          <h2 className={styles.title}>Binary Search</h2>
          <div className={styles.bottom}>
            <div className={styles.platform}>
              <p className={styles.platformTitle}>
                <span>
                  <SiCodeforces />
                </span>
                CodeForces
              </p>
              <p className={styles.count}>
                <span>0/32</span> Problems
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
                <span>0/31</span> Problems
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
                <span>0/12</span> Problems
              </p>
            </div>
          </div>
        </div>
        <div className={styles.progress}>
          <div className={styles.cf}>
            50% <span className={styles.progressPlatform}>CodeForces</span>
          </div>
          <div className={styles.lc}>
            20% <span className={styles.progressPlatform}>LeetCode</span>
          </div>
          <div className={styles.hr}>
            80% <span className={styles.progressPlatform}>HackerRank</span>
          </div>
        </div>
      </a>
    </div>
  );
}
