import { Fragment } from "react";
import "./App.css";

import { Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import NavigationBar from "./components/navigation-bar/NavigationBar";
import Header from "./components/header/Header";
import DataGrid from "./components/data-grid/DataGrid";

function App() {
  return (
    <Fragment>
      {/* <div className="App">
        <Button>Bootstrap Button</Button>
      </div>
      <div>
        This
        <FontAwesomeIcon icon={faCoffee} /> is hot.
      </div> */}
      <NavigationBar></NavigationBar>
      <Header></Header>
      <DataGrid></DataGrid>
    </Fragment>
  );
}

export default App;
