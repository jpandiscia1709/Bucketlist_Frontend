import React, { Component } from "react";
import "./App.css";
import background from "../image/Homepage_Capstone.jpg";
import NavBar from "./NavBar/NavBar";
import { Button } from "react-bootstrap";
import axios from "axios";
import SeeAdventures from "./SeeAdventures/SeeAdventures";
import SeeCompanies from "./SeeCompanies/SeeCompanies";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import CommunityLogo from "../image/CommunityLogo.jpg";
import SeeAllAdventures from "../pages/SeeAllAdventures";
import SeeAllCompanies from "../pages/SeeAllCompanies";

//axios call setup ??
//Re-route and switch in render??

class App extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no repeat",
            backgroundSize: "cover",
            position: "absolute",
            height: "100vh",
            width: "100vw",
          }}
        >
          <div className="container-fluid">
            <NavBar />
          </div>

          <div class="body">
            <body>
              <h1>An Amazing Tagline or Website Name</h1>
            </body>
            <div>
              <main>
                <h2>Find Your Adventure!</h2>
                <Link to="/seealladventures">
                  <button className="button1">See Trips</button>
                </Link>
                <div>
                  <Link to="/seecompany">
                    <button>Your Hosts</button>
                  </Link>
                </div>
                <div>
                  <img
                    src={CommunityLogo}
                    alt="picture board"
                    width="200"
                    height="200"
                    className="imgClass"
                  />
                </div>
                <Routes>
                  {/* <Route path="/" elemnet={<Navigate to="/seealladventures" />} /> */}
                  <Route
                    path="/seealladventures"
                    element={<SeeAllAdventures />}
                  />
                  <Route path="/seecompany" element={<SeeCompanies />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
