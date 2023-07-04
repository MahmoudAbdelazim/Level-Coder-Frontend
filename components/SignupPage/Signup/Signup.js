import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./Signup.module.css";

export default function Signup() {
  const [signupData, setSignupData] = useState({});
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const { push, reload } = useRouter();

  const validateData = () => {
    if (!signupData.firstName) {
      setMsg("First name cannot be empty");
      return false;
    }
    if (!signupData.lastName) {
      setMsg("Last name cannot be empty");
      return false;
    }
    if (!signupData.username || signupData.username.length < 4) {
      setMsg("Username length must be 4 or more");
      return false;
    }
    if (!signupData.password || signupData.password.length < 6) {
      setMsg("Password length must be 6 or more");
      return false;
    }
    if (signupData.password != signupData.repeatedPassword) {
      setMsg("Password and repeated password don't match");
      return false;
    }
    setMsg("");
    return true;
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    if (!validateData()) {
      setLoading(false);
      return;
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(signupData);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/signup",
        requestOptions
      );
      if (response.status == 401) {
        setMsg("Username is already taken, please try another username");
        setLoading(false);
        return;
      }
      if (response.status == 200) {
        push("/login");
      } else {
        setMsg("An error occurred, please try again");
      }
      const result = await response.json();
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className={styles.signup}>
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
      <h1>Welcome to Level Coder</h1>
      <p>Create an account now and start learning!</p>
      <div className={styles.form}>
        <label htmlFor="firstName">First Name *</label>
        <input
          id="firstName"
          type="text"
          value={signupData.firstName}
          onChange={(e) =>
            setSignupData({ ...signupData, firstName: e.target.value })
          }
        />
        <label htmlFor="lastName">Last Name *</label>
        <input
          id="lastName"
          type="text"
          value={signupData.lastName}
          onChange={(e) =>
            setSignupData({ ...signupData, lastName: e.target.value })
          }
        />
        <label htmlFor="username">Username *</label>
        <input
          id="username"
          type="text"
          value={signupData.username}
          onChange={(e) =>
            setSignupData({ ...signupData, username: e.target.value })
          }
        />
        <label htmlFor="password">Password *</label>
        <input
          id="password"
          type="password"
          value={signupData.password}
          onChange={(e) =>
            setSignupData({ ...signupData, password: e.target.value })
          }
        />
        <label htmlFor="repeatedPassword">Repeat Password *</label>
        <input
          id="repeatedPassword"
          type="password"
          value={signupData.repeatedPassword}
          onChange={(e) =>
            setSignupData({ ...signupData, repeatedPassword: e.target.value })
          }
        />

        <div className={styles.buttonContainer}>
          <p className={styles.msg}>{msg}</p>
          <button onClick={handleSubmit}>Sign Up</button>
        </div>
        <div className={styles.loginContainer}>
          <p>
            already have an account? <a href={"/login"}>Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
