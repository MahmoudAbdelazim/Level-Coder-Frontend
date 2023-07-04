import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Topic from "@/components/TopicPage/Topic/Topic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function TopicPage() {
  const [topic, setTopic] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { name } = router.query;

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
    setLoading(true);
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
        process.env.NEXT_PUBLIC_BACKEND_URL + "/topic/topic-by-name/" + name,
        requestOptions
      );
      if (response.status == 200) {
        const result = await response.json();
        let fetchedTopic = result.topic;
        fetchedTopic = calculatePercentages(fetchedTopic);
        setTopic(fetchedTopic);
      } else {
        router.push("/");
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (name) {
      fetchTopic();
    }
  }, [name]);
  return (
    <>
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
      <Head>
        <title>{topic?.name} - Level Coder</title>
      </Head>
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
