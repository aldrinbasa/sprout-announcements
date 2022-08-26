import React from "react";
import { Fragment } from "react";
import "./Header.css";

import CustomBadge from "../UI/CustomBadge/CustomBadge";
import SearchBox from "../UI/SearchBox/SearchBox";
import FilterSelect from "../UI/FilterSelect/FilterSelect";

import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Fragment>
      <Container>
        <Row className="align-items-center">
          <Col>
            <h1>Announcements</h1>
            <p>
              View, create, or edit announcements for all employees of your
              company
            </p>
          </Col>
          <Col>
            <Button className="float-end" variant="success" size="sm">
              <FontAwesomeIcon icon={faPlus} /> Post an Announcement
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="test">
        <Row className="align-items-center">
          <Col>
            <CustomBadge
              selected={true}
              type="all"
              text="All"
              count="10"
              bg="success"
            ></CustomBadge>
            <CustomBadge
              selected={false}
              type="drafts"
              text="Drafts"
              count="10"
              bg="warning"
            ></CustomBadge>
          </Col>
          <Col>
            <Row>
              <Col>
                <FilterSelect>
                  <option>Filter by</option>
                  <option value="title">Title</option>
                  <option value="message">Message</option>
                  <option value="sent-by">Sent by</option>
                  <option value="sent-through">Sent Through</option>
                </FilterSelect>
              </Col>
              <Col>
                <SearchBox />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Header;
