import { render } from "@testing-library/react";
import React, { Component } from "react";
import axios from "axios";


class SeeAdventures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTrips: [],
    };
  }

  getAllAdventures = async () => {
    let response = await axios.get("http://127.0.0.1:8000/api/adventures/all/");
    console.log(response.data);
    this.setState({
      allTrips: response.data,
    });
  };

  componentDidMount() {
    this.getAllAdventures();
  }

  render() {
    return (
      <div>
        {this.state.allTrips.map((trip) => (
          <div>
            <div>
              {trip.name}   
              {trip.location}
              {trip.price}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default SeeAdventures;
