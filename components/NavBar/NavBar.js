import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [signedIn, setSignedIn] = useState(true);
  const [name, setName] = useState("");

  const { push, reload } = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setSignedIn(true);
      setName(localStorage["firstName"] + " " + localStorage["lastName"]);
    } else {
      setSignedIn(false);
      setName("");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    setSignedIn(false);
    push("/login");
  };

  return (
    <nav className={`navbar navbar-expand-lg bg-light ${styles.nav}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href={"/"}>
          Level Coder
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href={"/"}>
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CP Topics
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href={"/topics"}>
                    All Topics
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Binary Search
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Dynamic Programming
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Graphs
                  </a>
                </li>
              </ul>
            </li>
            {!signedIn && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href={"/signup"}>
                    Sign Up
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={"/login"}>
                    Login
                  </a>
                </li>
              </>
            )}
            {signedIn && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {name}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href={"/profile"}>
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleLogout}
                    >
                      Log Out
                    </a>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
