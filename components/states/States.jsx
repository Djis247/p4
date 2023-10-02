import React from "react";
import "./States.css";

/**
 * Define States, a React component of Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.models.states.
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  updateSearch = (e) => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    let filteredStates = window.models.states();
    console.log("state", this.state);

    if (this.state.searchText) {
      filteredStates = filteredStates.filter((fs) => {
        return fs.toLowerCase().includes(this.state.searchText.toLowerCase());
      });
    }

    const statesList = filteredStates.map(function (fs) {
      return <li key={fs}>{fs}</li>;
    });

    return (
      <div className="containerStates">
        <div>
          {/* //Replace this with the code for Project 4, Problem 2 */}
          <input
            className="searchInput"
            type="text"
            value={this.state.searchText}
            placeholder="Search..."
            onChange={this.updateSearch}
          />
          <div>Query: {this.state.searchText || "n/a"}</div>

          <div className="results">
            <div>Results:</div>
            <ul>
              {statesList.length ? statesList : "No matches, use a lighter"}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default States;
