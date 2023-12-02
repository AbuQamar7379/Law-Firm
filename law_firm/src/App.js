import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Sections/Introduction Section/Intro";
import Carousel from "./components/Carousel/Carousel Component/Carousel";
import CarouselCard from "./components/Carousel/CarouselCard";
import SucessCard from "./components/Sections/Why Choose Us/SucessCard";
import { useState, useEffect } from "react";
import AreaImage from "./components/Sections/Area of Practices/AreaImage";
import HappyClients from "./components/Sections/What says our happy Clients/HappyClients";
import OurTeam from "./components/Sections/Our Team/OurTeam";
import Faq from "./components/Sections/FAQ/Faq";

let successRates = [98, 100, 100];

function App() {
  let [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    // Set up event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Emp

  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      {isMobile === true ? (
        <>
          <p className="Why"> Why Choose Us ? </p>
          <Carousel
            data={successRates}
            component={(item) => <CarouselCard successRate={item} />}
          />
        </>
      ) : (
        <SucessCard successRate={successRates} />
      )}
      <AreaImage />
      <HappyClients />
      <OurTeam />
      <Faq />
    </>
  );
}

export default App;
