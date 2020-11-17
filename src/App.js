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
import Admin from './Components/Admin/Admin/Admin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [admin, setAdmin] = useState({});

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
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, user, setUser, admin, setAdmin]}>
      <Router>
        <Switch>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>

          <Route path="/apartmentDetails/:flatId" >
            <ApartmentDetails></ApartmentDetails>
          </Route>

          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>

          <Route path="/login" >
            <SignUp></SignUp>
          </Route>

          <Route exact path="/">
            <HomePage></HomePage>
          </Route>

          <Route path="*">
            <h1>this page is on progress</h1>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
