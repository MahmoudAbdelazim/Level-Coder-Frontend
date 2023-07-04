import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Profile from "@/components/ProfilePage/Profile/Profile";
import Head from "next/head";

export default function ProfilePage() {
  return (
    <>
      <Head>
        <title>Profile - Level Coder</title>
      </Head>
      <NavBar />
      <div className="main">
        <Profile />
      </div>
      <Footer />
    </>
  );
}
