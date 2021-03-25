import React, { useRef } from "react";
import { Card, Form, Button } from "react-bootstrap";
import API from "../utils/api";

 
function searchForm( { setBooks }) {
  const bookInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    API.getBooks(bookInput.current.value)
    .then(({ data }) => {
      
      setBooks(data);
    });
  };

  return (
    <Card>
      <Card.Body>
        <h2>Search</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Search for a Book</Form.Label>
            <Form.Control
              ref={bookInput}
              type="text"
              placeholder="Enter book title"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default searchForm;
