import React from "react";
import { Button } from "react-bootstrap";
import API from "../utils/api";

function SaveButton( {book, updateBook} ) {
  
  
    const saveBook = () => {

      API.addBook( book )
      .then(() => {
        
        
      }).catch((err)=> {
        console.log(err);
      });

    }
  
  return (
  <Button onClick={saveBook}>Save</Button>
  )
  
}

export default SaveButton;
