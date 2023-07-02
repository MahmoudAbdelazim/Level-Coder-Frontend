import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Signup from "@/components/SignupPage/Signup/Signup";

export default function SignupPage() {
  return (
    <>
      <NavBar />
      <div className="main">
        <Signup />
      </div>
      <Footer />
    </>
  );
}
