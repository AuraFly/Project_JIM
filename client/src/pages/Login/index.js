import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";
import "./index.css";

function Login({ currentPage, handlePageChange, props }) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState(false);
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
      setSuccess(true);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      {success ? (
        <section className="sections">
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#About" className="anchor">
              Go to Home
            </a>
          </p>
        </section>
      ) : (
        <section className="login-box">
          <h1>Sign In</h1>
          <form onSubmit={handleFormSubmit} id="loginform">
            <div className="user-box">
              <label className="labels" htmlFor="email">
                Email:
              </label>
              <input
                placeholder="Enter Email Here"
                name="email"
                type="email"
                id="email"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="user-box">
              <label className="labels" htmlFor="password">
                Password:
              </label>
              <input
                placeholder="Password"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
            </div>
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button type="submit">Submit</button>
            </a>
            {error ? (
              <div>
                <p className="error-text">
                  The provided credentials are incorrect
                </p>
              </div>
            ) : null}
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              <a
                href="#Register"
                onClick={() => handlePageChange("Register")}
                className={
                  currentPage === "Register" ? "nav-link active" : "nav-link"
                }
              >
                Sign Up
              </a>
            </span>
          </p>
        </section>
      )}
    </>
  );
}

export default Login;
