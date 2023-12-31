import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [signedIn, setSignedIn] = useState(true);
  const [name, setName] = useState("");
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);

  const { push, reload } = useRouter();

  const fetchTopics = async () => {
    setLoading(true);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/topic/all-topic-names",
        requestOptions
      );
      const result = await response.json();
      setTopics(result.topics);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setSignedIn(true);
      setName(localStorage["firstName"] + " " + localStorage["lastName"]);
    } else {
      setSignedIn(false);
      setName("");
    }
    fetchTopics();
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
    <nav
      className={`navbar navbar-dark navbar-expand-sm bg-light ${styles.nav}`}
    >
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
      <div className="container-fluid">
        <a className="navbar-brand" href={"/"}>
          Level Coder
        </a>
        <a
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Topics
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
                {topics.map((topic) => {
                  return (
                    <li>
                      <a
                        className="dropdown-item"
                        href={"/topic/" + topic.name}
                      >
                        {topic.name}
                      </a>
                    </li>
                  );
                })}
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
            <li className="nav-item">
              <a className="nav-link" href={"/suggest-content"}>
                Suggest Content
              </a>
            </li>
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
