import React, { useState, useEffect } from "react";
import Img from "../img/img.jpeg";
// import axios from "axios";
var request = require("request");

var userDetailsConfig = {
  method: "GET",
  url: "http://localhost:3001/getUserDetails/",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NTIyY2E4ZmY3ZTQyNDU5NDA4MzllNzQiLCJpYXQiOjE2OTY4MDA2NjEsImV4cCI6MTY5NjgwNDI2MX0.UsiXud1ph8iZpsobBpy8iJPlXMSBgRK2Ij8czqqd3Pg",
  },
};

var postsConfig = {
  method: "GET",
  url: "http://localhost:3001/getPosts/",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NTIyY2E4ZmY3ZTQyNDU5NDA4MzllNzQiLCJpYXQiOjE2OTY4MDA2NjEsImV4cCI6MTY5NjgwNDI2MX0.UsiXud1ph8iZpsobBpy8iJPlXMSBgRK2Ij8czqqd3Pg",
  },
};

const Details = () => {
  // const [userDetails, setUserDetails] = useState("");
  // const [posts, setPosts] = useState("");

  // request(userDetailsConfig, function (error, response) {
  //   if (error) throw new Error(error);

  //   setUserDetails(JSON.parse(response.body).data[0]);
  // });

  // request(postsConfig, function (error, response) {
  //   if (error) throw new Error(error);

  //   setPosts(JSON.parse(response.body).data);
  // });

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleLogin = () => {
  //   // Handle login logic here (e.g., API call)
  // };

  // useEffect(() => {
  //   axios
  //     .get("localhost:3001/getUserDetails", {
  //       headers: {
  //         authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NTIyOTk0YTM3MGJiZjg3MGQ0ZTFmMjQiLCJpYXQiOjE2OTY3NjgwOTksImV4cCI6MTY5Njc3MTY5OX0.aYXxi9AIISCW5T55kB7LeU5KOmSAzKp0FYQH9F0gurA",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       // setUserDetails(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });

  //   // axios
  //   //   .get("localhost:3001/getPosts", {
  //   //     headers: {
  //   //       'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NTIyOTk0YTM3MGJiZjg3MGQ0ZTFmMjQiLCJpYXQiOjE2OTY3NjgwOTksImV4cCI6MTY5Njc3MTY5OX0.aYXxi9AIISCW5T55kB7LeU5KOmSAzKp0FYQH9F0gurA'
  //   //     }
  //   //   })
  //   //   .then((response) => {
  //   //     console.log(response.data);
  //   //     setPosts(response.data);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Error fetching data:", error);
  //   //   });
  // }, []);

  const userDetails = {
    _id: "6522d382abfa85437fe375b2",
    name: "Raj Chowdhury",
    email: "raj@gmail.com",
    phone: "8927592927",
    __v: 0,
  };

  const posts = [
    {
      title: "user 1 test 1",
      description: "this is for testing",
    },
    {
      title: "user 1 test 2",
      description: "this is for testing",
    },
    {
      title: "user 1 test 3",
      description: "this is for testing",
    },
    {
      title: "user 1 test 4",
      description: "this is for testing",
    },
    {
      title: "user 1 test 5",
      description: "this is for testing",
    },
    {
      title: "user 1 test 6",
      description: "this is for testing",
    },
    {
      title: "user 1 test 7",
      description: "this is for testing",
    },
    {
      title: "user 1 test 8",
      description: "this is for testing",
    },
    {
      title: "user 1 test 9",
      description: "this is for testing",
    },
  ];

  return (
    <div className="container-fluid text-center" style={{ height: "100vh" }}>
      <div className="row p-4" style={{ height: "100%" }}>
        <div className="col-4">
          <div className="card">
            <img src={Img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold">Assessment</h5>
              <p className="card-text text-start">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item text-start">
                Name : {userDetails.name}
              </li>
              <li className="list-group-item text-start">
                Email : {userDetails.email}
              </li>
              <li className="list-group-item text-start">
                Phone : {userDetails.phone}
              </li>
            </ul>
          </div>
        </div>
        <div className="col-8 overflow-y-auto" style={{ height: "100%" }}>
          {posts.map((post) => {
            return (
              <div className="card mb-4">
                <div className="card-header text-start">{post.title}</div>
                <div className="card-body">
                  <p className="card-text text-start">{post.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
