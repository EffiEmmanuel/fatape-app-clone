import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import Alert from "@material-ui/lab/Alert";
import Hero from "./js/components/Hero";

import FAQ from "./js/components/FAQ";
import Welcome from "./js/components/Welcome";
import Timeline from "./js/components/Roadmap";
import TimelineObserver from "react-timeline-animation";
import Team from "./js/components/Team";
import Gallery from "./js/components/Gallery";
import Footer from "./js/components/Footer";
import DevRoadmap from "./js/components/DevelopmentRodmap";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";

// import { Typography } from "@material-ui/core";
import "aos/dist/aos.css";

const Home = (props) => {
  return (
    <main style={{ overflowX: "hidden" }}>
      <Hero
        metamask={props.metamask}
        isWalletConnected={props.isWalletConnected}
        mintApe={props.mintApe}
        startDate={props.startDate}
        isActive={props.isActive}
        setIsActive={props.setIsActive}
        setCount={props.setCount}
        count={props.count}
        isPaused={props.isPaused}
        isSoldOut={props.isSoldOut}
        isWhitelisted={props.isWhitelisted}
        exceedLimit={props.exceedLimit}
        isPresale={props.isPresale}
        isPublic={props.isPublic}
        alertState={props.alertState}
        setAlertState={props.setAlertState}
        isMinting={props.isMinting}
      />

      <Gallery />
      <Welcome />
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#58805a"
        handleObserve={(setObserver) => (
          <Timeline className="timeline" setObserver={setObserver} />
        )}
      />
      <DevRoadmap />
      <FAQ />
      <Team />
      <Footer />
    </main>
  );
};

export default Home;
