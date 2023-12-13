import "./App.css";
import Articles from "./sections/Articles";
import Overview from "./sections/Overview";
import Projects from "./sections/Projects";
import Stack from "./sections/Stack";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Loading from "./components/LoadingLogo";
// import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    AOS.init({ duration: 1000, startEvent: "DOMContentLoaded", offset: 0, once: true });
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="max-md:block ">
      <div className="grid-1 max-md:relative fixed w-[50%] max-md:w-[100%] ">
        <Overview />
      </div>
      <div className="grid-2 p-[36px] pb-[0] mt-[60px] w-[50%] max-md:w-[100%] absolute right-0 mr-[60px] max-laptop:m-[0px] ">
        <Projects />
        <Articles />
        <Stack />
        <Footer />
      </div>
    </div>
  );
}

export default App;
