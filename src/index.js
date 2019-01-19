import React from "react";
import ReactDOM from "react-dom";
// import ShoeIndexContainer from "./container/ShoeIndex/ShoeIndexContainer.js";
import InventoryDashboardContainer from "./pages/InventoryDashboard/InventoryDashboardContainer";
import data from "./data.json";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <InventoryDashboardContainer shoeInventory={data} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
