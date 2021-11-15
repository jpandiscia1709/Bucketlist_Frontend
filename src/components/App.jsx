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
              <h1>AdventureTogether</h1>
              
            </body>
            <div>
              <main>
                <h2>Explore! Grow! Thrive!</h2>
                <Link to="/seealladventures">
                  <button class="button">See Trips</button>
                </Link>
                <div>
                 <Link to="/seecompany">
                    <button>Your Hosts</button>
                  </Link>
                </div>
                    <div>
                            
                        <div class="container">
                            <img
                                src={CommunityLogo}
                                alt="picture board"
                                width="200"
                                height="200"
                                //className="imgClass"
                                
                                />
                            <button class="btn">Find Your Tribe!</button>
                                   
                        </div>
                    </div>
                <div>
                <Routes>
                  {/* <Route path="/" elemnet={<Navigate to="/seealladventures" />} /> */}
                
                  <Route
                    path="/seealladventures"
                    element={<SeeAllAdventures />}
                  />
                  <Route path="/seecompany" element={<SeeCompanies />} />
                </Routes>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
