import React, { Fragment } from "react";
import "./SearchBox.css";

import { Form, FormControl, InputGroup } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const SearchBox = (props: any) => {
  return (
    <Fragment>
      <Form.Control
        size="sm"
        type="search"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      ></Form.Control>
    </Fragment>
  );
};

export default SearchBox;
