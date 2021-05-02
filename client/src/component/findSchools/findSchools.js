import React from "react";
import axios from "axios";
import "./FindSchools.scss";

class FindSchools extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: null };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.submitForm.location.value);
    axios
      .post("/api/yelp/", {
        location: this.submitForm.location.value,
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ results: res.data });
      });
  };
  render() {
    return (
      <div className="find">
        <h1 className="find__title"> Find a School Near You </h1>

        <form
          className="find__form"
          ref={(form) => (this.submitForm = form)}
          onSubmit={this.handleSubmit}
        >
          <label>ENTER CITY AND STATE </label>
          <input className="find__input" name="location" type="text" />
          <button className="find__button" type="submit">
            {" "}
            ENTER{" "}
          </button>
        </form>
        {this.state.results &&
          this.state.results.map((school) => (
            <div className="find__res">
              <h3>{school.name}</h3>
              {school.display_phone}
              {school.location.display_address}
            </div>
          ))}
      </div>
    );
  }
}
export default FindSchools;
