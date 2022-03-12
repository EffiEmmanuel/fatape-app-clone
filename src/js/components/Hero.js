/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
// import Minter from "./MintButton";
import Box from "@mui/material/Box";
import Countdown from "react-countdown";
import Grid from "@mui/material/Grid";
import background from "../assets/welcome-bg.png";
import heroApe from "../assets/apeDefault.png";
import Eye from "../assets/Cinema Shades.png";
import Head from "../assets/Afro With Comb.png";
import Mouth from "../assets/Rainbow Vomit.png";
import { Button } from "@material-ui/core";
import { SvgIcon } from '@mui/material';

import addIcon from '../assets/addIcon.svg';

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  // Render a countdown
  return (
    <Grid
      container
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        border: "solid 1px rgba(255,255,255,0.3)",
        padding: ".875rem",
      }}
      className="countdown-grid"
    >
      <Grid item xs={3} className="countdown-item countdown-border-right">
        <p className="countdown-value">{days}</p>
        <p className="countdown-text">DAYS</p>
      </Grid>
      <Grid item xs={3} className="countdown-item countdown-border-right">
        <p className="countdown-value">{hours}</p>
        <p className="countdown-text">HOURS</p>
      </Grid>
      <Grid item xs={3} className="countdown-item countdown-border-right">
        <p className="countdown-value">{minutes}</p>
        <p className="countdown-text">MINUTES</p>
      </Grid>
      <Grid item xs={3} className="countdown-item">
        <p className="countdown-value">{seconds}</p>
        <p className="countdown-text">SECONDS</p>
      </Grid>
    </Grid>

  );
};

const path_attr1 = {
  curviness: 1,
  autoRotate: false,
  values: [
    { x: 300, y: -300 },
    { x: 400, y: -250 },
  ],
};

const path_attr2 = {
  curviness: 1,
  autoRotate: false,
  values: [
    { x: -300, y: -300 },
    { x: -400, y: 150 },
  ],
};

const Hero = (props) => {
  const [countdownCompleted, setCountdownCompleted] = useState(false);

  useEffect(() => {
    const tween = new TimelineMax();

    tween
      .from(
        ".heroAttr",
        2,
        {
          bezier: path_attr1,
          ease: Power1.easeInOut,
        },
        0
      )
      .from(
        ".heroAttr2",
        2,
        {
          bezier: path_attr2,
          ease: Power1.easeInOut,
        },
        0
      );

    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
      triggerElement: "#hero",
      duration: 1250,
      triggerHook: 0,
    })
      .setTween(tween)
      // .addIndicators()
      .setPin("#hero")
      .addTo(controller);
  }, []);

  if (countdownCompleted) {
    console.log("countdownCompleted");
  } else {
    console.log(countdownCompleted);
  }

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Container
        id="hero"
        style={{
          height: "100vh",
          backgroundImage: `linear-gradient(180deg, rgba(131,58,180,0) 0%, rgba(253,29,29,0) 70%, rgba(21, 13, 41, 1) 100%)`,
          maxWidth: "none",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          backgroundSize: "cover",
          backgroundPosition: "Top",
          padding: "10% 0",
        }}
        data-aos="fade-in"
      >
        <div>
          <img
            src={Eye}
            alt="attribut"
            style={{ zIndex: 4 }}
            className="heroAttr"
          />
          <img
            src={Head}
            alt="attribut"
            className="heroAttr2"
            style={{ zIndex: 3 }}
          />
          <img
            src={Mouth}
            alt="attribut"
            className="heroAttr3"
            style={{ zIndex: 3 }}
          />
          <img src={heroApe} alt="fat ape" className="heroApe" />
        </div>
        <Box style={{ margin: "2em 0", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-between", width:"100%" }}>
          <div className="countdown-container" style={{marginTop:"-3%"}}>
            <h3 style={{ fontSize: "30px" }}>Public Sale on November 1st, 9pm EST</h3>
            <Countdown
              date={Date.now() + 5000000}
              renderer={renderer}
              // ON COMPLETE, PASS IN WHAT TO DO!!
              // onComplete={() => props.setIsActive(true)}
              isCompleted={() => setCountdownCompleted(true)}
              
            />

            
          </div>

          <div className="hero-minter">

          <div class="incr-decr">

            <Button
              onClick={() =>
                window.open(
                  "https://opensea.io/collection/fat-ape-club-1",
                  "_blank"
                )
              }
              variant="outlined"
            >
              <span className="MuiButton-label">
                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#fff">
                  <path d="M19 13H5v-2h14v2z"></path>
                </svg>
              </span>
              <span className="MuiTouchRipple-root"></span>
            </Button>

            <h3>1</h3>

            <Button
              onClick={() =>
                window.open(
                  "https://opensea.io/collection/fat-ape-club-1",
                  "_blank"
                )
              }
              variant="outlined"
              
            >
              <span className="MuiButton-label">
                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#fff">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                </svg>
              </span>
              <span className="MuiTouchRipple-root"></span>
            </Button>
            
            </div>

            <Button
              onClick={() =>
                window.open(
                  "https://opensea.io/collection/fat-ape-club-1",
                  "_blank"
                )
              }
              variant="contained"
              className="connect-button mint-button"
              id="smallerFontButton1"
            >
              Buy on OpenSea
            </Button>

              {/* <Minter
              metamask={props.metamask}
              isWalletConnected={props.isWalletConnected}
              mintApe={props.mintApe}
              startDate={props.startDate}
              isActive={props.isActive}
              setActive={props.setActive}
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
            /> */}

            {/* CONNECT WALLET BUTTON COMPONENT */}
            {/* <Button
              // onClick={() =>
              //   window.open(
              //     "https://opensea.io/collection/fat-ape-club-1",
              //     "_blank"
              //   )
              // }
              variant="contained"
              className="connect-button"
              id="smallerFontButton2"
            >
              Connect Wallet
            </Button> */}

            {/* MINT BUTTON COMPONENT */}
            {/* <Button

              variant="contained"
              className="connect-button mint-button"
              id="smallerFontButton3"
            >
              Mint
            </Button> */}
            
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Hero;
