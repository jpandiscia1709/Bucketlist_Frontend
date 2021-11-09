import React, { Component } from 'react';
import './App.css';
import background from '../image/Homepage_Capstone.jpg';
import NavBar from './NavBar/NavBar';
import { Button } from 'react-bootstrap';
import axios from 'axios';


//axios call setup ??
//Re-route and switch in render??


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            allTrips:[]



        };
    }
    
    getAllAdventures= async ()=>{
        let response= await axios.get('http://127.0.0.1:8000/api/adventures/all/')
        console.log(response.data)
        this.setState({
            allTrips : response.data
        })
    }

    componentDidMount(){
        this.getAllAdventures()
    }



    render(){
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

                    

                    <div class= "body">
                        


                        <body>
                            <h1>An Amazing Tagline or Website Name</h1>
                        </body>
                            
                            <form>
                            <Button>See Adventures!</Button>
                            </form>
                            <div className="col-md-6">
                            <form>
                            <Button>Create Your List!</Button>
                            </form>
                            </div>
                            <div className="col-md-6">

                            <form>
                            <Button>Click to view Adventure Companies</Button>
                            </form>
                            </div>
                    </div>
                    {this.state.allTrips.map(trip =>
                                        <div>
                                            <div>{trip.location}</div>
                                            <div>{trip.price}</div>
                                        </div>
                                        )}
                </div>
            </div>        
                
                
                
            
        )
    }
}

export default App;