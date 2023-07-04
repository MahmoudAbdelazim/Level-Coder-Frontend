import Footer from "@/components/Footer/Footer";
import Login from "@/components/LoginPage/Login/Login";
import NavBar from "@/components/NavBar/NavBar";
import Head from "next/head";

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>Login - Level Coder</title>
      </Head>
      <NavBar />
      <div className="main">
        <Login />
      </div>
      <Footer />
    </>
  );
}
