// import React, { useState, useContext } from "react";
// import { UserContext } from "../../UserContext";
// import { useNavigate } from 'react-router-dom';
// import facebookImage from '../../images/facebook.png';
// import twitterImage from '../../images/twitter.png';
// import linkedinImage from '../../images/linkedin.png';
// import instagramImage from '../../images/instagram.png'
// import styles from "../../index.css"
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const { dispatch } = useContext(UserContext);
//   const navigate = useNavigate();

//   const [userName, setUserName] = useState("");
//   const [userPassword, setUserPassword] = useState("");

//   const isInputValid = () => {
//     return userName !== "" && userPassword !== "";
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!isInputValid()) {
//       alert("Please enter your username and password.");
//       return;
//     }

//     dispatch({
//       type: "LOGIN",
//       payload: { userName, userPassword },
//     });

//     setUserName("");
//     setUserPassword("");

//     navigate('/chat');
//   };
//   return (
//       <div className="container">
//         <div className="card">
//           <form onSubmit={handleSubmit} className="form">
//             <h2 className="title">Login</h2>
//             <label className="label">
//               <span className="label-text">Email</span>
//               <input 
//                 className="input" 
//                 type="email" 
//                 value={userName}
//                 onChange={(e) => setUserName(e.target.value)}
//                 required 
//               />
//             </label>
//             <label className="label">
//               <span className="label-text">Password</span>
//               <input 
//                 className="input" 
//                 type="password" 
//                 value={userPassword}
//                 onChange={(e) => setUserPassword(e.target.value)}
//                 required 
//               />
//             </label>
//             <button className="submit-button" type="submit">Sign in</button>
//             <p className="forgot-password">Forgot password?</p>
           
//             <Link to="/signup" className="register-link">Don't have an account? Register</Link>
//           <div className="social-media-icons">
//             <ul className="social-media-list">
//               <li>
//                 <img className="social-media-icon" src={facebookImage} alt="Facebook" />
//               </li>
//               <li>
//                 <img className="social-media-icon" src={twitterImage} alt="Twitter" />
//               </li>
//               <li>
//                 <img className="social-media-icon" src={linkedinImage} alt="LinkedIn" />
//               </li>
//               <li>
//                 <img className="social-media-icon" src={instagramImage} alt="Instagram" />
//               </li>
//             </ul>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from 'react-router-dom';
import facebookImage from '../../images/facebook.png';
import twitterImage from '../../images/twitter.png';
import linkedinImage from '../../images/linkedin.png';
import instagramImage from '../../images/instagram.png'
import { Link } from 'react-router-dom';

const Login = () => {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const isInputValid = () => {
    return userName !== "" && userPassword !== "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isInputValid()) {
      alert("Please enter your username and password.");
      return;
    }

    dispatch({
      type: "LOGIN",
      payload: { userName, userPassword },
    });

    setUserName("");
    setUserPassword("");

    navigate('/chat');
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card w-50">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Login</h2>
            <div className="form-group">
              <label>Email</label>
              <input 
                className="form-control" 
                type="email" 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                className="form-control" 
                type="password" 
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                required 
              />
            </div>
            <button className="btn btn-primary btn-block mt-4" type="submit">Sign in</button>
            <div className="text-center mt-3">
              <Link to="#" className="text-danger">Forgot password?</Link>
            </div>
            <Link to="/signup" className="text-center d-block mt-3 text-primary">Don't have an account? Register</Link>
            <div className="mt-4 d-flex justify-content-center">
              <img className="mx-2" width="32" src={facebookImage} alt="Facebook" />
              <img className="mx-2" width="32" src={twitterImage} alt="Twitter" />
              <img className="mx-2" width="32" src={linkedinImage} alt="LinkedIn" />
              <img className="mx-2" width="32" src={instagramImage} alt="Instagram" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;