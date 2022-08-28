import React, { Fragment, useState } from "react";

import "./DataGrid.css";
import ANNOUNCEMENTS_DATA from "../../interface/AnnouncementInterface";
import { AnnouncementInterface } from "../../interface/AnnouncementInterface";

import { Col, Container, Form, Row, Table } from "react-bootstrap";
import FilterSelect from "../UI/FilterSelect/FilterSelect";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faCaretLeft,
  faForwardStep,
  faCaretRight,
  faBookmark,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const DataGrid = (props: any) => {
  let renderShownData = (data: AnnouncementInterface[]) => {
    return data.map((announcement, key) => {
      return (
        <tr className="data" key={key}>
          <td>{announcement.title}</td>
          <td>{announcement.message}</td>
          <td>{announcement.sentBy}</td>
          <td>{renderSentThrough(announcement.sentThrough)}</td>
          <td>{renderDate(announcement.dateCreated)}</td>
          <td>
            {renderDate(announcement.startDate)}
            {renderTime(announcement.startDate)}
          </td>
          <td>
            {renderDate(announcement.endDate)}
            {renderTime(announcement.endDate)}
          </td>
        </tr>
      );
    });
  };

  let renderSentThrough = (sentThroughs: String[]) => {
    return sentThroughs.map((sentThrough, key) => {
      switch (sentThrough) {
        case "web":
          return <FontAwesomeIcon key={key} icon={faBookmark} />;
          break;
        case "phone":
          return <FontAwesomeIcon key={key} icon={faMobileScreen} />;
          break;
        default:
          return <div></div>;
          break;
      }
    });
  };

  let renderDate = (date: Date) => {
    return <div>{moment(date).format("MM/DD/YYYY")}</div>;
  };

  const renderTime = (date: Date) => {
    return <div>{moment(date).format("hh:mm a")}</div>;
  };

  const [shownData, setShownData] = useState(ANNOUNCEMENTS_DATA);

  return (
    <Fragment>
      <Container>
        <Table align="center" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>TITLE</th>
              <th>MESSAGE</th>
              <th>SENT BY</th>
              <th>SENT THROUGH</th>
              <th>DATE CREATED</th>
              <th>START DATE</th>
              <th>END DATE</th>
            </tr>
          </thead>
          <tbody>{renderShownData(shownData)}</tbody>
          <thead className="navigator">
            <tr>
              <td className="page-number-filter">
                <span className="">Items per page</span>
                <FilterSelect className="items-per-page">
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </FilterSelect>
              </td>
              <td colSpan={5}>
                <table className="filter">
                  <tr>
                    <td>
                      <button>
                        <FontAwesomeIcon icon={faBackwardStep} />
                      </button>
                    </td>
                    <td>
                      <button>
                        <FontAwesomeIcon icon={faCaretLeft} />
                      </button>
                    </td>
                    <td>Page</td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td>of 10</td>
                    <td>
                      <button>
                        <FontAwesomeIcon icon={faCaretRight} />
                      </button>
                    </td>
                    <td>
                      <button>
                        <FontAwesomeIcon icon={faForwardStep} />
                      </button>
                    </td>
                  </tr>
                </table>
              </td>
              <td>
                <span>Showing 1-10 of 1</span>
              </td>
            </tr>
          </thead>
        </Table>
      </Container>
    </Fragment>
  );
};

export default DataGrid;
