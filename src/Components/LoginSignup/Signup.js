import React, { useState } from "react";
import "./signup.css";
import { axiosClient } from "../../utils/axiosClient";
import { signInWithGooglePopup } from "../../utils/googleAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { googleLogin, register as reduxRegister } from "../../actions/authActions";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();

    const registeredUser = {
      username: username,
      email: email,
      password: password,
    };
    try {
      dispatch(reduxRegister(registeredUser));
      alert("Successfully registered!");
      navigate("/login");
    } catch (err) {
      console.log(err);
      setErrorMessage(err.response.data.message);
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
        <form className="registration-form" onSubmit={registerUser}>
          <div className="container">
            <div className="card signup-form">
              <div className="signup">
                <div className="signup-left">
                  <h3> Campus Placement</h3>
                  <h3>&</h3>
                  <h3> Trainning Portal</h3>
                </div>
                <div className="signup-right">
                  <h3>Create an Account</h3>
                  <div>
                    <label>
                      {" "}
                      <strong>Name</strong>{" "}
                    </label>
                    <input
                      name="username"
                      value={username}
                      placeholder="Enter Your Name"
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label>
                      {" "}
                      <strong>Email</strong>{" "}
                    </label>
                    <input
                      name="email"
                      value={email}
                      placeholder="Enter Your Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label>
                      {" "}
                      <strong>Password</strong>{" "}
                    </label>
                    <input
                      name="password"
                      value={password}
                      placeholder="Enter Your Password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  {errorMessage && (
                    <div className="error-message">{errorMessage}</div>
                  )}

                  {/* <div>
                                    <label> <strong>Role</strong> </label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Choose the Role</option>
                                            <option value="1">Student</option>
                                            <option value="2">Alumni</option>
                                            <option value="3">Recruiter</option>
                                        </select>
                                    </div> */}

                  <div>
                    <button className="login-button">
                      {" "}
                      <strong>Create Account</strong>
                    </button>
                  </div>

                  <button onClick={logGoogleUser} className="googleSignButton">
                    Sign In With Google
                  </button>

                  <h6>
                    <span>or</span>
                  </h6>
                  <p>
                    Already have an account?
                    <a href="login">
                      {" "}
                      <strong>Login</strong>
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

export default Signup;
