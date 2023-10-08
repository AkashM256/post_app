import React, { useState } from "react";
import Img from "../img/login.jpeg";

const LoginForm = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleLogin = () => {
  // Handle login logic here (e.g., API call)
  // };

  return (
    <div className="container text-center p-4" style={{ height: "100vh" }}>
      <div
        className="row p-4 rounded-3"
        style={{ height: "100%", boxShadow: "5px 5px 20px" }}
      >
        <div className="col-7 overflow-y-hidden" style={{ height: "100%" }}>
          <img src={Img} className="img-fluid" alt="..." />
        </div>
        <div className="col-5 p-3 border" style={{ height: "100%" }}>
          <form className="mt-5">
            <div className="mb-3">
              <label
                for="exampleInputEmail1"
                className="form-label justify-content-start"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <div className="my-3">
              <label for="exampleInputPassword1" className="form-label">
                Don't have an account ?{" "}
                <a href="#" class="card-link">
                  Sign Up
                </a>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
