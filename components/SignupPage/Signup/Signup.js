import styles from "./Signup.module.css";

export default function Signup() {
  return (
    <div className={styles.signup}>
      <h1>Welcome to Level Coder</h1>
      <p>Create an account now and start learning!</p>
      <div className={styles.form}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" type="text" />
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" type="text" />
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <label htmlFor="repeatedPassword">Repeat Password</label>
        <input id="repeatedPassword" type="repeatedPassword" />

        <div className={styles.buttonContainer}>
          <button>Sign Up</button>
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
