import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Profile from "@/components/ProfilePage/Profile/Profile";

export default function ProfilePage() {
  return (
    <>
      <NavBar />
      <div className="main">
        <Profile />
      </div>
      <Footer />
    </>
  );
}
