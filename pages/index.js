import Footer from "@/components/Footer/Footer";
import Landing from "@/components/IndexPage/Landing/Landing";
import Index from "@/components/IndexPage/Landing/Landing";
import NavBar from "@/components/NavBar/NavBar";

export default function IndexPage() {
  return (
    <>
      <NavBar />
      <div className="main">
        <Landing />
      </div>
      <Footer />
    </>
  );
}
