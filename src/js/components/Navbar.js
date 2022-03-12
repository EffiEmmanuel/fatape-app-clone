import { useEffect, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography/Typography";
import IconButton from "@mui/material/IconButton";

import Logo from "../assets/logo.png";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { Spin as Hamburger } from "hamburger-react";
import Discord from "../assets/discord.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.png";
import Opensea from "../assets/opensea.svg";
import Profile from "../assets/profile.svg";



const Navbar = (props) => {

  const [menuToggle, setMenuToggle] = useState(false);

  const list = () => (
    <Box
      onClick={() => setMenuToggle(false)}
      onKeyDown={() => setMenuToggle(false)}
    >
      <List>
        <ListItem className="drawer-item">
          <h3>
            <a href="#about">About</a>
          </h3>
        </ListItem>
        <ListItem className="drawer-item">
          <h3>
            <a href="#roadmap">Roadmap</a>
          </h3>
        </ListItem>
        <ListItem className="drawer-item">
          <h3>
            <a href="#faq">FAQ</a>
          </h3>
        </ListItem>
        <ListItem className="drawer-item">
          <h3>
            <a href="#team">Team</a>
          </h3>
        </ListItem>
        <ListItem className="drawer-item">
          <h3>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => window.location.replace("/breeding")}
            >
              Breeding
            </a>
          </h3>
        </ListItem>
      </List>
      <Divider />
      <div className="footer-socials" style={{ marginTop: "30px" }}>
        <img
          src={Discord}
          onClick={() =>
            window.open("https://discord.com/invite/xxHJeysBvr", "_blank")
          }
        />
        <img
          src={Twitter}
          onClick={() =>
            window.open("https://twitter.com/fatapeclub", "_blank")
          }
        />
        <img
          src={Instagram}
          onClick={() =>
            window.open("https://www.instagram.com/fatapeclub/", "_blank")
          }
        />
        <img
          src={Opensea}
          onClick={() =>
            window.open(
              "https://opensea.io/collection/fat-ape-club-1",
              "_blank"
            )
          }
        />
      </div>
    </Box>
  );

  return (
    <div className="navbar">
      <Drawer
        anchor="right"
        open={menuToggle}
        onClose={() => setMenuToggle(false)}
        PaperProps={{ className: "drawer" }}
      >
        {list()}
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "transparent" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <IconButton
                size="medium"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => window.location.replace("/")}
              >
                <img src={Logo} className="logo" alt="logo" />
                <a className="logo-text">Fat Ape Club</a>
              </IconButton>
            </Typography>

            <div className="minter-navbar" style={{ marginRight: "50px" }}>
              <div
                className="connect-button discord-btn"
                onClick={() =>
                  window.open("https://discord.com/invite/xxHJeysBvr", "_blank")
                }
              >
                Join Discord
              </div>
            </div>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              style={{ marginLeft: 0 }}
            >
              <img
                style={{ width: "25px" }}
                src={Profile}
                onClick={() => window.location.replace("/profile")}
              />
            </IconButton>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              style={{ marginLeft: 0 }}
            >
              <Hamburger
                toggled={menuToggle}
                onToggle={(toggled) => setMenuToggle(!menuToggle)}
              />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;