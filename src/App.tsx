import { Fragment } from "react";
import "./App.css";

import { Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import NavigationBar from "./components/navigation-bar/NavigationBar";

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
    </Fragment>
  );
}

export default App;
