import Footer from "@/components/Footer/Footer";
import Index from "@/components/IndexPage/Index/Index";
import NavBar from "@/components/NavBar/NavBar";

export default function IndexPage() {
  return (
    <>
      <NavBar />
      <div className="main">
        <Index />
      </div>
      <Footer />
    </>
  );
}
