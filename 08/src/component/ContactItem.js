import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <Row>
      <Col lg={2}>
        <img
          className="contactImg"
          src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
          alt=""
        />
      </Col>
      <Col lg={10}>
        <h4>{item.name}</h4>
        <p>{item.phoneNumber}</p>
      </Col>
    </Row>
  );
};

export default ContactItem;
