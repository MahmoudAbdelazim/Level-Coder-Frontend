import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./SuggestContent.module.css";

export default function SuggestContent() {
  const [suggestion, setSuggestion] = useState({});
  const [msg, setMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const { push, reload } = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      push("/login");
    }
  }, []);

  const validateData = () => {
    if (!suggestion.type || suggestion.type == "choose") {
      setMsg("Please choose content type");
      return false;
    }
    setMsg("");
    return true;
  };

  const handleSubmit = async () => {
    setMsg("");
    setSuccessMsg("");
    if (!validateData()) {
      return;
    }

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage["token"]);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(suggestion);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/suggestion/add-suggestion",
        requestOptions
      );
      if (response.status == 200) {
        setSuccessMsg("We received your suggestion, Thank you for your time!");
        return;
      } else {
        setSuccessMsg("");
        setMsg("Something went wrong, please try again later");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className={styles.suggestContent}>
      <h2>Suggest Content</h2>
      <p className={styles.subtitle}>
        Your suggestions are so valuable for keeping Level Coder interesting{" "}
        <br />
        thank you for taking the time to provide us with valuable content
      </p>
      <div>
        <div className={styles.form}>
          <label htmlFor="type">Content Type</label>
          <select
            id="type"
            value={suggestion.type}
            onChange={(e) =>
              setSuggestion({ ...suggestion, type: e.target.value })
            }
            className={"input-group form-select" + " " + styles.select}
          >
            <option value={"choose"}>Choose Type</option>
            <option value={"Problem"}>Problem</option>
            <option value={"Learning Resource"}>Learning Resource</option>
            <option value={"Other"}>Other</option>
          </select>
          <label htmlFor="link">Link</label>
          <input
            id="link"
            type="text"
            value={suggestion.link}
            onChange={(e) =>
              setSuggestion({ ...suggestion, link: e.target.value })
            }
          />
          <label htmlFor="topic">Topic</label>
          <input
            id="topic"
            type="text"
            value={suggestion.topic}
            onChange={(e) =>
              setSuggestion({ ...suggestion, topic: e.target.value })
            }
          />
          <label htmlFor="message">Message (Optional)</label>
          <textarea
            id="message"
            value={suggestion.message}
            onChange={(e) =>
              setSuggestion({ ...suggestion, message: e.target.value })
            }
            rows="7"
            className={"form-control" + " " + styles.textarea}
          ></textarea>
          <div className={styles.buttonContainer}>
            <p className={styles.msg}>{msg}</p>
            <p className={styles.successMsg}>{successMsg}</p>
            <button onClick={handleSubmit}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
