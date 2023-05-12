import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const { dispatch } = useContext(UserContext);

  const history = useNavigate();

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const isPasswordValid = (password) => {
    return (
      password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName === "") {
      toast.error("Please enter a username.");
      return;
    }

    if (!isPasswordValid(userPassword)) {
      toast.error(
        "Password must be at least 8 characters long and contain letters and numbers."
      );
      return;
    }

    if (userPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (displayName === "") {
      toast.error("Please enter a display name.");
      return;
    }

    dispatch({
      type: "SIGN_UP",
      payload: { userName, userPassword, displayName, profilePic },
    });

    setUserName("");
    setUserPassword("");
    setConfirmPassword("");
    setDisplayName("");
    setProfilePic(null);

    history('/');
  };

  return (
    <>
      <ToastContainer />
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="card w-50">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <h2 className="text-center mb-4">Create New Account</h2>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Username"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Display Name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Click here to upload your profile picture:</label>
                <input
                  className="form-control-file"
                  type="file"
                  id="profilePic"
                  onChange={(e) => setProfilePic(e.target.files[0])}
                />
              </div>
              {profilePic && <img className="img-fluid mt-3" src={URL.createObjectURL(profilePic)} alt="Profile Preview" />}
             
              <button className="btn btn-primary w-100 mt-3" type="submit">Register</button>
              <div className="mt-3 text-center">
                Already have an account? <Link to="/">Log in</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
