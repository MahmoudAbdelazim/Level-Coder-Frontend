import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Topics from "@/components/TopicsPage/Topics/Topics";

export default function TopicsPage() {
  return (
    <>
      <NavBar />
      <div className="main">
        <Topics />
      </div>
      <Footer />
    </>
  );
}
