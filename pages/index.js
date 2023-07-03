import Footer from "@/components/Footer/Footer";
import Index from "@/components/IndexPage/Index/Index";
import Landing from "@/components/IndexPage/Landing/Landing";
import NavBar from "@/components/NavBar/NavBar";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  }, []);

  return (
    <>
      <NavBar />
      <div className="main">
        {signedIn && <Index />}
        {!signedIn && <Landing />}
      </div>
      <Footer />
    </>
  );
}
