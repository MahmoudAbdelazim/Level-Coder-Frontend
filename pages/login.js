import Footer from "@/components/Footer/Footer";
import Login from "@/components/LoginPage/Login/Login";
import NavBar from "@/components/NavBar/NavBar";

export default function SignupPage() {
  return (
    <>
      <NavBar />
      <div className="main">
        <Login />
      </div>
      <Footer />
    </>
  );
}
