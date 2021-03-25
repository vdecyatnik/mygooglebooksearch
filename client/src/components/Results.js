import React from "react";
import { Card } from "react-bootstrap";
import SaveButton from "../components/SaveButton";

function Results({ books }) {
  return (
    <Card className="my-3"> 
      <Card.Body>




        {books.length
        
        ? (
        <div>
            <h2> Results</h2> 
            {books.map((book) => (

                    <Card className="my-3" key={book.id}>
                        <Card.Body>
                    
                    <p>Title: {book.title}</p>
                    <p> Description:{book.description}</p>
                    <p></p>
                    <p></p>
                    <SaveButton />
                        </Card.Body>
                    </Card>





        ))}
        </div>

        )
        : <h2> No Results </h2>}
      </Card.Body>
    </Card>
  );
}

export default Results;
