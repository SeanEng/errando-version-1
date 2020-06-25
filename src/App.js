import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ErrandsList from "./components/errands-list.component";
import EditErrand from "./components/edit-errand.component";
import CreateErrand from "./components/create-errand.component";
import CreateUser from "./components/create-user.component";
import Homepage from "./components/homepage.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={Homepage} />
      <Route path="/errands" component={ErrandsList} />
      <Route path="/edit/:id" component={EditErrand} />
      <Route path="/create" component={CreateErrand} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
