import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Auth/login";
import SignUp from "./pages/Auth/signup";
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />}/>
          <Route path="/login" exact element={<Login />}/>
          <Route path="/signup" exact element={<SignUp />}/>
          <Route path="/dashboard" exact element={<Home />}/>
          <Route path="/income" exact element={<Income />}/>
          <Route path="/expense" exact element={<Expense />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

const Root = () => {
  //Check if the token exists in the local storage
  const isAuthenticated = !!localStorage.getItem('token');

  //if authenticated, redirect to dashboard, otherwise redirect to login
  return isAuthenticated ?(
    <Navigate to="/dashboard" />
  ): 
  (
    <Navigate to="/login" />
  );
};