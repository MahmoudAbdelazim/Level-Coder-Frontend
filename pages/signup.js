import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Signup from "@/components/SignupPage/Signup/Signup";
import Head from "next/head";

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>Sign Up - Level Coder</title>
      </Head>
      <NavBar />
      <div className="main">
        <Signup />
      </div>
      <Footer />
    </>
  );
}
