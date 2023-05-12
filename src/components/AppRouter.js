import React, { useContext,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from '../UserContext'; // Update the import path as needed
import Login from "./Login";
import SignUp from "./SignUp";
import Chat from "./Chat";


import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const { state } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.currentUser) {
      navigate('/');
    }
  }, [state.currentUser, navigate]);

  return state.currentUser ? <Outlet /> : null;
};
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chat" element={<Chat />} /> 
      </Routes>
    </Router>
  );
};


export default AppRouter;



