import React from "react";
import { Card } from "react-bootstrap";
import SaveButton from "../components/SaveButton";

function Results({ books }) {


  

  
  return (
    <Card className="my-3">
      <Card.Body>
        {books.length ? (
          <div>
            <h2> Results</h2>
            {books.map((book) => {
              return (
                <Card style={{ width: "50rem" }}>
                  <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} style={{height:"300px", width: "300px"}}/>
                  <Card.Body>
                    <Card.Title>{book.volumeInfo.title}</Card.Title>
                    <Card.Text>
                      <p>Title: {book.volumeInfo.title}</p>
                      <p> Author: {book.volumeInfo.authors}</p>
                      <p>Description: {book.volumeInfo.description}</p>
                      <Card.Link href={book.volumeInfo.previewLink}>Link</Card.Link>
                    </Card.Text>
                    <SaveButton />
                  </Card.Body>
                </Card>

               
              );
            })}
          </div>
        ) : (
          <h2> No Results </h2>
        )}
      </Card.Body>
    </Card>
  );
}

export default Results;
