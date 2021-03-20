import React from "react";
import { Card, Form, Button } from "react-bootstrap";
function searchForm() {
  return (
    <Card>
      <Card.Body>
        <h2>Search</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Search for a Book</Form.Label>
            <Form.Control type="book" placeholder="Enter book title" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
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
