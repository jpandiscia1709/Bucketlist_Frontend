import React, { Component } from 'react';
import './App.css';
import background from '../image/Homepage_Capstone.jpg';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return (
            <div>
                <div style={{ backgroundImage: `url(${background})` }}>
            Bucketlist!


            <h1>Our React App from a Component File</h1>
                
                </div>
            </div>        
                
                
                
            
        )
    }
}

export default App;