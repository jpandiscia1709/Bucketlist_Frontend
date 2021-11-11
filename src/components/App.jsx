import React, { Component } from "react";
import "./App.css";
import background from "../image/Homepage_Capstone.jpg";
import NavBar from "./NavBar/NavBar";
import { Button } from "react-bootstrap";
import axios from "axios";
import SeeAdventures from "./SeeAdventures/SeeAdventures";
import SeeCompanies from "./SeeCompanies/SeeCompanies";
import { Route, Routes } from 'react-router-dom';
import CommunityLogo from "../image/CommunityLogo.jpg";


//axios call setup ??
//Re-route and switch in render??

class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       allTrips: [],
//     };
//   }

//   getAllAdventures = async () => {
//     let response = await axios.get("http://127.0.0.1:8000/api/adventures/all/");
//     console.log(response.data);
//     this.setState({
//       allTrips: response.data,
//     });
//   };

//   componentDidMount() {
//     this.getAllAdventures();
//   }

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
                        <h2>See Adventures!</h2>
                        <Button>Click to view Adventure Companies</Button>
                        <div>
                            <img src={CommunityLogo} alt="picture board" width="200" height="200" 
                         style={{
                            position: 'absolute',
                            right: 5,
                            top: 1,}}/>
                        </div>
                    <Routes>
                        <Route path='/adventures' element={<SeeAdventures />} />
                
                        <Route path='/company' element={<SeeCompanies />} />
                
                    </Routes>
                </main>
                               
                                        {/* <div>
                                            <SeeAdventures />
                                    <form>
                                    </form>
                                            <SeeCompanies />
                                        </div> */}
                </div>
            </div>
        </div>
        </div>   
      
    );
  }
}

export default App;
