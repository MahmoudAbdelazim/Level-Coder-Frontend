import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./Profile.module.css";

export default function Profile() {
  const [userData, setUserData] = useState({});
  const [msg, setMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const { push, reload } = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      push("/login");
      return;
    }
    setUserData({
      username: localStorage["username"],
      firstName: localStorage["firstName"],
      lastName: localStorage["lastName"],
    });
  }, []);

  const validate = () => {
    if (!userData.firstName) {
      setMsg("First name cannot be empty");
      return false;
    }
    if (!userData.lastName) {
      setMsg("Last name cannot be empty");
      return false;
    }
    if (!userData.oldPassword) {
      setMsg("Please enter your current password");
      return false;
    }
    if (userData.newPassword != userData.repeatedPassword) {
      setMsg("Password and repeated password don't match");
      return false;
    }
    if (userData.newPassword && userData.newPassword.length < 6) {
      setMsg(
        "New password length must be 6 or more, or leave it empty if you don't want to change password"
      );
      return false;
    }
    setMsg("");
    return true;
  };

  const handleUpdateProfile = async () => {
    setSuccessMsg("");
    if (!validate()) {
      return;
    }
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage["token"]);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(userData);
    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/user/update-my-user-data",
        requestOptions
      );
      if (response.status == 401) {
        setMsg("Current Password is incorrect");
        return;
      }
      if (response.status == 200) {
        setSuccessMsg("Your profile info are updated successfully");
        return;
      } else {
        setMsg("An error occurred, please try again");
        return;
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.profile}>
      <h1 className={styles.name}>Mahmoud Abdelazim</h1>
      <div className={styles.form}>
        <label htmlFor="username">Username *</label>
        <input
          id="username"
          type="text"
          disabled
          value={userData.username}
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />
        <label htmlFor="username">First Name *</label>
        <input
          id="firstName"
          type="text"
          value={userData.firstName}
          onChange={(e) =>
            setUserData({ ...userData, firstName: e.target.value })
          }
        />
        <label htmlFor="username">Last Name *</label>
        <input
          id="lastName"
          type="text"
          value={userData.lastName}
          onChange={(e) =>
            setUserData({ ...userData, lastName: e.target.value })
          }
        />
        <label htmlFor="oldPassword">Current Password *</label>
        <input
          id="oldPassword"
          type="password"
          value={userData.oldPassword}
          onChange={(e) =>
            setUserData({ ...userData, oldPassword: e.target.value })
          }
        />
        <label htmlFor="newPassword">
          New Password{" "}
          <span className={styles.hint}>
            (Leave it empty if you don't want to change password)
          </span>
        </label>
        <input
          id="newPassword"
          type="password"
          value={userData.newPassword}
          onChange={(e) =>
            setUserData({ ...userData, newPassword: e.target.value })
          }
        />
        <label htmlFor="repeatedPassword">
          Repeat New Password{" "}
          <span className={styles.hint}>
            (Leave it empty if you don't want to change password)
          </span>
        </label>
        <input
          id="repeatedPassword"
          type="password"
          value={userData.repeatedPassword}
          onChange={(e) =>
            setUserData({ ...userData, repeatedPassword: e.target.value })
          }
        />
        <div className={styles.buttonContainer}>
          <p className={styles.msg}>{msg}</p>
          <p className={styles.successMsg}>{successMsg}</p>
          <button onClick={handleUpdateProfile}>Update Profile Info</button>
        </div>
      </div>
    </div>
  );
}
