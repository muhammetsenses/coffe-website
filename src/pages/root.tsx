import { Outlet } from "react-router-dom";
import Navigation from "../components/Navbar/navbar.tsx"
import Footer from "../components/Footer/footer.tsx"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import loadingmp4 from "../assets/loadingg.mp4";
import ScrollToTop from "../components/scrolltotop.tsx";
import ScrollTopToPage from "../components/scrolltoppage/scrolltoptopage.tsx";
const Root = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    Aos.init({offset:200,duration: 1200,easing:"ease-in", delay:0,once:false });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="loading-content">
        <video autoPlay loop muted src={loadingmp4}></video>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Outlet />
      <Footer />
      <ScrollTopToPage/>
    </>
  );
};

export default Root;
