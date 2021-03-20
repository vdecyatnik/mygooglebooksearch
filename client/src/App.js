import React from "react";
import "./main.sass";
import GlobalNavBar from "../src/components/GlobalNavBar";
import Header from "../src/components/Header";
import { Container } from "react-bootstrap";
import SearchForm from "../src/components/SearchForm";

function App() {
  return (
    <div>
      <GlobalNavBar />
      <Container className="py-5">
      <Header />
      <SearchForm />
      </Container>
      
      <div className="container">
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
