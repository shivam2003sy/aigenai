import React, { useState } from "react";
import "./login.css";
import { signInWithGooglePopup } from "../../utils/googleAuth";
import { axiosClient } from "../../utils/axiosClient";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as reduxLogin , googleLogin , loadUser } from "../../actions/authActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Logging in...");
      dispatch(reduxLogin({ email, password }));
      dispatch(loadUser(() => {
        alert("Successfully logged In!");
        navigate("/dashboard");
      }));
    } catch (err) {
      console.error("Login error:", err);
  
      if (err.response && err.response.status === 401) {
        setErrorMessage("Invalid email or password");
      } else {
        setErrorMessage("Login failed. Please try again later.");
      }
    }
  };
  
  

  const logGoogleUser = async () => {
    try {
      const response = await signInWithGooglePopup();
      const { displayName, email, photoURL, uid } = response.user;
      const googleUser = { displayName, email, photoURL, uid };
      dispatch(
        googleLogin(googleUser)
      )
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setErrorMessage("Login failed. Please try again later.");
    }
  };
  return (
    <>
      <div>
        <form className="login-form" onSubmit={loginSubmit}>
          <div className="container">
            <div className="card login">
              <div className="login-start">
                <div className="login-left">
                  <h3> Campus Placement</h3>
                  <h3>&</h3>
                  <h3> Trainning Portal</h3>
                </div>
                <div className="login-right">
                  <h3> Login</h3>
                  <div>
                    <label>
                      {" "}
                      <strong>Email</strong>{" "}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      required
                      placeholder="Enter Your Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <label>
                      {" "}
                      <strong>Password</strong>{" "}
                    </label>
                    <input
                      name="password"
                      required
                      value={password}
                      placeholder="Enter Your Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <a className="forgetPassword" href="/password/forgot">
                    Forgot Password?
                  </a>

                  {errorMessage && (
                    <div className="error-message">{errorMessage}</div>
                  )}
                  <div className="card-content-center">
                    <button className="login-button1">
                      {" "}
                      <strong> Login</strong>
                    </button>
                  </div>

                  <button onClick={logGoogleUser} className="googleSignButton">
                    Sign In With Google
                  </button>

                  <h6>
                    <span>or</span>
                  </h6>
                  <p className="footer-text">
                    {" "}
                    Not a member?
                    <a href="register">
                      {" "}
                      <strong>SignUp</strong>
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
