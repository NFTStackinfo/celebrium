import { useEffect, useState, useRef } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Roadmap from "./components/Roadmap/Roadmap";
import Team from "./components/Team/Team";
import FAQ from "./components/FAQ/FAQ";
// import Preloader from "./components/Preloader/Preloader";
import Preloader from "./components/Preloader/PreloaderDynamic";
import { useLockedBody } from "./hooks/useLockedBody";
import About from "./components/About/About";
import Carousel1 from './components/Carousel1/Carousel1'
import Collection from './components/Collection/Collection'
import HowItWorks from './components/HowItWorks/HowItWorks'
const scrollIntoView = require("scroll-into-view");

function App() {
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
    "#how-it-works": howItWorksRef,
    "#roadmap": roadmapRef,
    "#utilities": utilitiesRef,
    "#team": teamRef,
    "#faq": faqRef,
  };

  /*for dynamic preloader*/
  const handleLoad = () => {
    setLoading(false)
    setLocked(false);
  }

  return (
    <main>
      {/*for static preloader*/}
      {/*<Preloader className={loading ? "" : "hide-loader"} />*/}
      {/*  for dynamic preloader*/}
      <Preloader onLoad={handleLoad} />
      {/*<Header onLinkClick={handleScrollIntoView} />*/}
      <div className="main-wrapper">
        <Hero ref={heroRef} loading={loading} />
        <Carousel1 />
        <About ref={aboutRef} />
        <Collection ref={collectionRef}/>
        <HowItWorks ref={howItWorksRef}/>
        <Roadmap ref={roadmapRef} />
        <Team ref={teamRef} />
        <FAQ ref={faqRef} />
        <Footer />
      </div>
    </main>
  );
}

export default App;
