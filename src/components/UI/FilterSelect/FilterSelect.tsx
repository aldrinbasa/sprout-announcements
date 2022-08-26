import React from "react";
import "./FilterSelect.css";

import { Form } from "react-bootstrap";

const FilterSelect = (props: any) => {
  return (
    <Form.Select size="sm">
      <option>Filter by</option>
      <option value="title">Title</option>
      <option value="message">Message</option>
      <option value="sent-by">Sent by</option>
      <option value="sent-through">Sent Through</option>
    </Form.Select>
  );
};

export default FilterSelect;
