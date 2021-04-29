import React from "react";
import axios from "axios";

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
      <div>
        <h1> Find a School Near You! </h1>

        <form
          ref={(form) => (this.submitForm = form)}
          onSubmit={this.handleSubmit}
        >
          <label>ENTER CITY AND STATE </label>
          <input name="location" type="text" />
          <button type="submit"> ENTER </button>
        </form>
        {this.state.results &&
          this.state.results.map((school) => (
            <div>
              <h1>{school.name}</h1>{" "}
            </div>
          ))}
      </div>
    );
  }
}
export default FindSchools;
