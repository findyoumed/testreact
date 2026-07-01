import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const SearchBox = () => {
  return (
    <Row>
      <Col lg={10}>
        <Form.Control type="text" placeholder="Enter name" />
      </Col>
      <Col lg={2}>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Col>
    </Row>
  );
};

export default SearchBox;
