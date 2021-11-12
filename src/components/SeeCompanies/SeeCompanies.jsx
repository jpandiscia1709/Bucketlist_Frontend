import { render } from "@testing-library/react";
import React, { Component } from "react";
import axios from "axios";
import "./SeeCompanies.css";

class SeeCompanies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCompanies: [],
    };
  }

  getAllCompanies = async () => {
    let response = await axios.get(
      "http://127.0.0.1:8000/api/adventures/company/"
    );
    console.log(response.data);
    this.setState({
      allCompanies: response.data,
    });
  };

  componentDidMount() {
    this.getAllCompanies();
  }

  render() {
    return (
      <div>
        {this.state.allCompanies.map((company) => (
          <div>
            <div>
              {company.name}
              {company.location}
              {company.company_url}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default SeeCompanies;
