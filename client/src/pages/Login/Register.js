import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import "./index.css";

function Register({ currentPage, handlePageChange, props }) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
          phone: formState.phone,
          instructorNumber: formState.instructorNumber,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
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
    <div>
      <section className="reg-box">
        <h1>Signup</h1>
        <form className="forms" onSubmit={handleFormSubmit}>
          <div className="usreg-box">
            <label htmlFor="firstName">First Name:</label>
            <input
              placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="usreg-box">
            <label htmlFor="lastName">Last Name:</label>
            <input
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="usreg-box">
            <label htmlFor="firstName">Phone Number</label>
            <input
              placeholder="Phone"
              name="phone"
              type="phone"
              id="phone"
              onChange={handleChange}
            />
          </div>
          <div className="usreg-box">
            <label htmlFor="firstName">Instructor Number</label>
            <input
              placeholder="Instructor #"
              name="instructorNumber"
              type="instructorNumber"
              id="instructorNumber"
              onChange={handleChange}
            />
          </div>
          <div className="usreg-box">
            <label htmlFor="email">Email:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="usreg-box">
            <label htmlFor="pwd">Password:</label>
            <input
              placeholder="******"
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
        </form>
        <p>
          Already registered?
          <br />
          <span className="line">
            <a
              href="#Login"
              onClick={() => handlePageChange("Login")}
              className={
                currentPage === "Login" ? "nav-link active" : "nav-link"
              }
            >
              Sign In
            </a>
          </span>
        </p>
      </section>
    </div>
  );
}

export default Register;
