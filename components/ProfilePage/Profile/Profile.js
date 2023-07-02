import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <h1 className={styles.name}>Mahmoud Abdelazim</h1>
      <div className={styles.form}>
        <label htmlFor="username">Username *</label>
        <input id="username" type="text" disabled value={"MahmoudAbdelazim"} />
        <label htmlFor="username">First Name *</label>
        <input id="firstName" type="text" value={"Mahmoud"} />
        <label htmlFor="username">Last Name *</label>
        <input id="lastName" type="text" value={"Abdelazim"} />
        <label htmlFor="oldPassword">Old Password *</label>
        <input id="oldPassword" type="password" />
        <label htmlFor="newPassword">
          New Password{" "}
          <span className={styles.hint}>
            (Leave it empty if you don't want to change password)
          </span>
        </label>
        <input id="newPassword" type="password" />
        <label htmlFor="repeatedPassword">Repeat New Password</label>
        <input id="repeatedPassword" type="password" />
        <div className={styles.buttonContainer}>
          <button>Change Profile Info</button>
        </div>
      </div>
    </div>
  );
}
