import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [loginData, setLoginData] = useState({});
  const [msg, setMsg] = useState("");

  const { push, reload } = useRouter();

  const validateData = () => {
    if (!loginData.username) {
      setMsg("Username cannot be empty");
      return false;
    }
    if (!loginData.password) {
      setMsg("Password cannot be empty");
      return false;
    }
    setMsg("");
    return true;
  };

  const handleSubmit = async () => {
    if (!validateData()) {
      return;
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(loginData);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/login",
        requestOptions
      );
      if (response.status == 404 || response.status == 401) {
        setMsg("Username or password is incorrect, please try again");
        return;
      }
      if (response.status == 200) {
        const result = await response.json();
        localStorage["token"] = result.token;
        localStorage["id"] = result.id;
        localStorage["username"] = result.username;
        localStorage["firstName"] = result.firstName;
        localStorage["lastName"] = result.lastName;
        push("/topics");
      } else {
        setMsg("An error occurred, please try again");
        return;
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.signup}>
      <h1>Welcome to Level Coder</h1>
      <p>Login to your account and continue learning!</p>
      <div className={styles.form}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={loginData.username}
          onChange={(e) =>
            setLoginData({ ...loginData, username: e.target.value })
          }
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <div className={styles.buttonContainer}>
          <p className={styles.msg}>{msg}</p>
          <button onClick={handleSubmit}>Login</button>
        </div>
        <div className={styles.signupContainer}>
          <p>
            Don't have an account yet? <a href={"/signup"}>Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
