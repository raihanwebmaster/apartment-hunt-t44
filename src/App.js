import React, { createContext, useEffect, useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import ApartmentDetails from './Components/ApartmentDetails/ApartmentDetails';
import SignUp from './Components/login/Login';
import { initializeLoginFramework, userLogin } from './Components/login/LoginManager';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });
  initializeLoginFramework();

  useEffect(() => {
    const LogIn = userLogin(function (cv) {
      // console.log(cv, 'jaslfl');
      // console.log(cv.email);

      const signedInUser = {
        isSignedIn: true,
        name: cv.displayName,
        email: cv.email,
        photo: cv.photoURL,
        success: true

      };
      setLoggedInUser(signedInUser);
    });
    //  console.log(login);

  }, [])
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, user, setUser]}>
      <Router>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/apartmentDetails/:flatId" component={ApartmentDetails} />
          <Route path="/login" component={SignUp}></Route>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="*" component={ } /> */}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
