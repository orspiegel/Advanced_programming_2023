import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import defaultProfilePic from "../../contactsImg/chat-icon.jpg";

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

    if ((/\s/.test(userName))) {
      toast.error("Please enter a valid username - no space, tab or new-line characters allowed.");
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

    if (!(/\S/.test(displayName))) {
      toast.error("Please enter a valid display name - must contain at least one letter or number.");
      return;
    }

    const userExists = state.users.find(
      (user) =>
        user.userName === userName
    );

    if (userExists) {
      toast.error("This username is already taken. Please enter a different username.");
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
    setProfilePic(defaultProfilePic);

    history('/');
  };

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="mx-auto col-10 col-md-8 col-lg-6">
          <div className="inputBlock p-4 rounded  shadow">
            <form className="inputForm" onSubmit={handleSubmit}>
              <h3 className="text-center mb-4 text-primary"> Create New Account </h3>
              <div className="form-group mb-3">
                <input
                  className="form-control rounded-pill"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Username"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  className="form-control rounded-pill"
                  type="password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  className="form-control rounded-pill"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  className="form-control rounded-pill"
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Nickname"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label className="text" htmlFor="profilePic">Click here to upload your profile picture:</label>
                <input
                  className="form-control-file"
                  type="file"
                  id="profilePic"
                  onChange={(e) => setProfilePic(URL.createObjectURL(e.target.files[0]))}
                />
              </div>
              {profilePic && <img className="img-fluid mt-3" src={profilePic} alt="Profile Preview" style={{width: '256px', height: '256px'}}/>}
              <button className="btn btn-primary w-100 mt-3" type="submit">Register</button>
              <div className="mt-3 text-center text-primary">
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