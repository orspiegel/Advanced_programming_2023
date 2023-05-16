import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { UserContext } from '../UserContext';
import Login from "./Login";
import SignUp from "./SignUp";
import Chat from "./Chat";

const ProtectedRoute = ({children}) => {
  const { state } = useContext(UserContext);
  const navigate = useNavigate();  // useNavigate should be called inside the component function

  useEffect(() => {
    if (!state.isAuthenticated) {
      navigate('/');
    }
  }, [state.isAuthenticated, navigate]);

  if (!state.isAuthenticated) {
    return null; // or you can return some loading spinner
  }

  return children;
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} /> 
      </Routes>
    </Router>
  );
};

export default AppRouter;