import React, { useState } from "react";
import Img from "../img/login.jpeg";
// import axios from "axios";

const LoginForm = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");

  // const handleRegistration = () => {
  // Handle login logic here (e.g., API call)
  // };

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios
  //     .post("localhost:3001/registration", { data: "payload" })
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  return (
    <div className="container-fluid text-center" style={{ height: "100vh" }}>
      <div className="container text-center p-4" style={{ height: "100vh" }}>
        <div
          className="row p-4 rounded-3 text-start"
          style={{ height: "100%", boxShadow: "5px 5px 20px" }}
        >
          <div className="col-5 p-3 border" style={{ height: "100%" }}>
            <form className="g-3 needs-validation" novalidate>
              <div className="col mb-4">
                <label for="validationCustom01" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  value="Mark"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col mb-4">
                <label for="validationCustom02" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="validationCustom02"
                  value="Otto"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col mb-4">
                <label for="validationCustomUsername" className="form-label">
                  Password
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div className="invalid-feedback">
                    Please choose a username.
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <label for="validationCustom03" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col mb-4">
                <label for="validationCustom04" className="form-label">
                  State
                </label>
                <input type="file" class="form-control" id="customFile" />
                <div className="invalid-feedback">
                  Please select a valid state.
                </div>
              </div>

              <div className="col-12 mt-4">
                <button className="btn btn-primary" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="col-7 overflow-y-hidden" style={{ height: "100%" }}>
            <img src={Img} className="img-fluid" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
