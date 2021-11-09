import React, { Component } from 'react';
import './App.css';
import background from '../image/Homepage_Capstone.jpg';
import NavBar from './NavBar/NavBar';
import { Button } from 'react-bootstrap';




class App extends Component {
    constructor(props){
        super(props);
        this.state = {};
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
    
                </div>
            </div>        
                
                
                
            
        )
    }
}

export default App;