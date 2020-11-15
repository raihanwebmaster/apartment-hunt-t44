import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import ApartmentDetails from './Components/ApartmentDetails/ApartmentDetails';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/apartmentDetails/:flatId" component={ApartmentDetails} />
          <Route exact path="/" component={HomePage} />
          {/* <Route path="*" component={ } /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
