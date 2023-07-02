import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.signup}>
      <h1>Welcome to Level Coder</h1>
      <p>Login to your account and continue learning!</p>
      <div className={styles.form}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <div className={styles.buttonContainer}>
          <button>Login</button>
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
