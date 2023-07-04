import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Topics from "@/components/TopicsPage/Topics/Topics";
import Head from "next/head";

export default function TopicsPage() {
  return (
    <>
      <Head>
        <title>Topics - Level Coder</title>
      </Head>
      <NavBar />
      <div className="main">
        <Topics />
      </div>
      <Footer />
    </>
  );
}
