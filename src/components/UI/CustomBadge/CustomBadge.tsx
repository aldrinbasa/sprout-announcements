import React from "react";
import "./CustomBadge.css";

import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface customBadgeInterface {
  type: string;
  text: string;
  count: string;
  selected: boolean;
  bg: string;
}

const CustomBadge = (props: customBadgeInterface) => {
  return (
    <div className={props.selected ? "badge" : " badge badge-default"}>
      <Container>
        <Row>
          <Col className="count">
            <Badge pill bg={props.bg}>
              {props.count}
            </Badge>
          </Col>
          <Col className="text">
            <span>{props.text}</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CustomBadge;
