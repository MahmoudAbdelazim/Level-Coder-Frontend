import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Head from "next/head";
import SuggestContent from "../components/SuggestContentPage/SuggestContent/SuggestContent";

export default function SuggestContentPage() {
  return (
    <>
      <Head>
        <title>Suggest Content - Level Coder</title>
      </Head>
      <NavBar />
      <div className="main">
        <SuggestContent />
      </div>
      <Footer />
    </>
  );
}
