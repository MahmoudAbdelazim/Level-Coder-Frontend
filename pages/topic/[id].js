import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Topic from "@/components/TopicPage/Topic/Topic";
import Topics from "@/components/TopicsPage/Topics/Topics";

export default function TopicPage() {
  return (
    <>
      <NavBar />
      <div className="main">
        <Topic />
      </div>
      <Footer />
    </>
  );
}
