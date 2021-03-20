import React from "react";
import "./main.sass";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalNavBar from "../src/components/GlobalNavBar";
import Header from "../src/components/Header";


import { Container } from "react-bootstrap";


import SearchPage from "./components/pages/SearchPage";
import SavedPage from "./components/pages/SavedPage";
import NotFound from "./components/pages/NotFound";


function App() {
  return (
    <Router>
      <GlobalNavBar />
      <Container className="py-5">
        <Header />
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/saved" component={SavedPage}  />
          <Route  component={NotFound}/>
        </Switch>
        
      </Container>

      <div className="container">
        <div className="row"></div>
      </div>
    </Router>
  );
}

export default App;
