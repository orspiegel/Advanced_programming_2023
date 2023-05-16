import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isInputValid = () => {
    return userName !== "" && userPassword !== "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isInputValid()) {
      setErrorMessage("Please enter your username and password.");
      return;
    }

    dispatch({
      type: "LOGIN",
      payload: { userName, userPassword },
    });
  };

  useEffect(() => {
    if (state.isAuthenticated) {
      console.log("autenticated")
      navigate("/chat");
    } 
  }, [state.isAuthenticated, navigate]);
  return (
    <div className="container">
      <div className="mx-auto col-10 col-md-8 col-lg-6">
        <div className="inputBlock">
          <form className="inputForm rounded" onSubmit={handleSubmit}>
            <h3 className="text-center" style={{ color: 'white' }}> Log In</h3>
            <div className="form-group">
              <input 
                className="form-control rounded-pill my-3" 
                type="text" 
                id="userName"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                className="form-control rounded-pill my-3" 
                type="password" 
                id="userPassword"
                placeholder="Password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                required 
              />
            </div>
            <button className="btn btn-primary btn-block my-3" type="submit">Log In</button>
            <div className="text-center" style={{ color: 'white' }}>
              Don't have an account? <Link to="/signup" style={{ color: 'white' }}>Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;