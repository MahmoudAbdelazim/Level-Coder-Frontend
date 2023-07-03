import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Topic from "@/components/TopicPage/Topic/Topic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function TopicPage() {
  const [topic, setTopic] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const fetchTopic = async () => {
    var myHeaders = new Headers();
    if (localStorage.getItem("token") != null) {
      myHeaders.append("Authorization", "Bearer " + localStorage["token"]);
    }

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/topic/topic/" + id,
        requestOptions
      );
      const result = await response.json();
      setTopic(result.topic);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (id) {
      fetchTopic();
    }
  }, [id]);
  return (
    <>
      <NavBar />
      <div className="main">
        <Topic topic={topic} setTopic={setTopic} />
      </div>
      <Footer />
    </>
  );
}
