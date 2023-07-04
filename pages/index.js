import Footer from "@/components/Footer/Footer";
import Index from "@/components/IndexPage/Index/Index";
import Landing from "@/components/IndexPage/Landing/Landing";
import NavBar from "@/components/NavBar/NavBar";
import Head from "next/head";
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
      <Head>
        <title>Level Coder</title>
      </Head>
      <NavBar />
      <div className="main">
        {signedIn && <Index />}
        {!signedIn && <Landing />}
      </div>
      <Footer />
    </>
  );
}
