import { useEffect, useState, useRef } from "react";
import Header from "../components/UIKit/Header/Header";
import Hero from "../components/LandingView/Hero/Hero";
import Footer from "../components/UIKit/Footer/Footer";
import Roadmap from "../components/LandingView/Roadmap/Roadmap";
import Team from "../components/LandingView/Team/Team";
import FAQ from "../components/LandingView/FAQ/FAQ";
// import Preloader from "./components/Preloader/Preloader";
import Preloader from "../components/UIKit/Preloader/PreloaderDynamic";
import { useLockedBody } from "../hooks/useLockedBody";
import About from "../components/LandingView/About/About";
import Carousel1 from '../components/LandingView/Carousel1/Carousel1'
import Collection from '../components/LandingView/Collection/Collection'
import HowItWorks from '../components/LandingView/HowItWorks/HowItWorks'
import Pricing from '../components/LandingView/Pricing/Pricing'
import { useLocation } from 'react-router-dom'
const scrollIntoView = require("scroll-into-view");

function LandingView() {
  const location = useLocation()
  const [loading, setLoading] = useState(true);
  const [, setLocked] = useLockedBody(true);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const collectionRef = useRef(null);
  const howItWorksRef = useRef(null);
  const utilitiesRef = useRef(null);
  const roadmapRef = useRef(null);
  const teamRef = useRef(null);
  const faqRef = useRef(null);
  const pricingRef = useRef(null)

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const handleScrollIntoView = to => {
    scrollIntoView(refMapping[to]?.current, {
      align: {
        top: 0,
      },
    })
  }

  /*for static preloader*/
  // useEffect(() => {
  //     setTimeout(() => {
  //         setLoading(false);
  //         setLocked(false);
  //     }, 3800);
  // }, []);

  const refMapping = {
    "#hero": heroRef,
    "#about": aboutRef,
    "#collection": collectionRef,
    "#pricing": pricingRef,
    "#mint": howItWorksRef,
    "#plan": roadmapRef,
    "#utilities": utilitiesRef,
    "#team": teamRef,
    "#faq": faqRef,
  };

  /*for dynamic preloader*/
  const handleLoad = () => {
    setLoading(false)
    setLocked(false);
  }

  useEffect(() => {
    if (location.hash) {
      handleScrollIntoView(location.hash)
    }
  }, [])


  return (
    <main>
      {/*for static preloader*/}
      {/*<Preloader className={loading ? "" : "hide-loader"} />*/}
      {/*  for dynamic preloader*/}
      <Preloader onLoad={handleLoad} />
      <Header onLinkClick={handleScrollIntoView} />
      <div className="main-wrapper">
        <Hero ref={heroRef} loading={loading} onLinkClick={handleScrollIntoView}/>
        <Carousel1 />
        <About ref={aboutRef} />
        <Collection ref={collectionRef}/>
        <HowItWorks ref={howItWorksRef}/>
        <Pricing  ref={pricingRef}/>
        <Roadmap ref={roadmapRef} />
        <Team ref={teamRef} />
        <FAQ ref={faqRef} />
        <Footer />
      </div>
    </main>
  );
}

export default LandingView;
