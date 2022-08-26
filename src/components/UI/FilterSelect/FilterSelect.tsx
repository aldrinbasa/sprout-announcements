import React from "react";
import "./FilterSelect.css";

import { Form } from "react-bootstrap";

const FilterSelect = (props: any) => {
  return (
    <Form.Select className={props.className} size="sm">
      {props.children}
    </Form.Select>
  );
};

export default FilterSelect;
