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
    console.log("window.models.states", window.models.states);
  }

  render() {
    let filteredStates = window.models.states();
    let searchText = "al";

    if (searchText) {
      filteredStates = filteredStates.filter(function (fs) {
        return fs.toLowerCase().includes(searchText.toLowerCase());
      });
    }

    const statesList = filteredStates.map(function (fs) {
      return <li key={fs}>{fs}</li>;
    });

    return (
      <div>
        {/* //Replace this with the code for Project 4, Problem 2 */}

        {/* Add input field 
            [ ] value of `searchText`
            [ ] the field should update `searchText` in the onChange event
        */}
        <ul>{statesList}</ul>
      </div>
    );
  }
}

export default States;
