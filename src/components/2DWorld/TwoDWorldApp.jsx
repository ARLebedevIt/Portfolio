import React, { useRef } from "react";
import "../../App.scss";
import AboutMe from "./AboutMe/AboutMe";
import Header from "./Header/Header";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import MainPage from "./Main/MainPage";
import SoundWidget from "./SoundWidget/SoundWidget";
import TwoPreloader from "./TwoPreloader/TwoPreloader";
import { useAppLoaded } from "../../hooks/useAppLoaded";
import { useMediaQueries } from "../../hooks/useMediaQuery";

const TwoDWorld = React.memo(() => {
  const appRef = useRef(null);
  const { size1025 } = useMediaQueries();
  const { apploaded, setAppLoaded } = useAppLoaded(appRef);
  return (
    <main ref={appRef} className="wrapper">
      <TwoPreloader setAppLoaded={setAppLoaded} apploaded={apploaded} />
      <Header apploaded={apploaded} />
      <div className="container">
        {!size1025 && (
          <SoundWidget className={"soundWidgetMain"} apploaded={apploaded} />
        )}
        <MainPage apploaded={apploaded} />
        <AboutMe />
        <Skills />
        <Projects />
        <Contacts />
      </div>
      <Footer />
    </main>
  );
});

export default TwoDWorld;
