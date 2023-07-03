import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Topic from "@/components/TopicPage/Topic/Topic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function TopicPage() {
  const [topic, setTopic] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const calculatePercentages = (fetchedTopic) => {
    let solvedCfCount = 0,
      solvedLcCount = 0,
      solvedHrCount = 0;
    for (const problem of fetchedTopic.cfProblems) {
      if (problem.solved) solvedCfCount++;
    }
    for (const problem of fetchedTopic.lcProblems) {
      if (problem.solved) solvedLcCount++;
    }
    for (const problem of fetchedTopic.hrProblems) {
      if (problem.solved) solvedHrCount++;
    }
    fetchedTopic.cfSolved = solvedCfCount;
    fetchedTopic.lcSolved = solvedLcCount;
    fetchedTopic.hrSolved = solvedHrCount;
    fetchedTopic.cfPercentage =
      solvedCfCount == 0
        ? 0
        : Math.floor((solvedCfCount / fetchedTopic.cfProblems.length) * 100);
    fetchedTopic.lcPercentage =
      solvedLcCount == 0
        ? 0
        : Math.floor((solvedLcCount / fetchedTopic.lcProblems.length) * 100);
    fetchedTopic.hrPercentage =
      solvedHrCount == 0
        ? 0
        : Math.floor((solvedHrCount / fetchedTopic.hrProblems.length) * 100);
    return fetchedTopic;
  };

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
      let fetchedTopic = result.topic;
      fetchedTopic = calculatePercentages(fetchedTopic);
      setTopic(fetchedTopic);
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
        <Topic
          topic={topic}
          setTopic={setTopic}
          calculatePercentages={calculatePercentages}
        />
      </div>
      <Footer />
    </>
  );
}
