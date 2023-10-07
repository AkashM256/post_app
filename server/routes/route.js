// api endpoints

const {
  getPostController,
  getUserDetailsController,
  loginController,
  registrationController,
  addPostController,
} = require("../controller/controller");

module.exports = function Routes(router) {
  router.get("/", (req, res) => {
    res.send("This is just for testing!!!");
  });

  router.get("/getPost/", (req, res) => {
    const data = getPostController(req, res);
    res.send(data);
  });

  router.get("/getUserDetails", (req, res) => {
    const data = getUserDetailsController(req, res);
    res.send(data);
  });

  router.post("/login", (req, res) => {
    const data = loginController(req, res);
    res.send(data);
  });

  router.post("/registration", (req, res) => {
    const data = registrationController(req, res);
    res.send(data);
  });

  router.post("/addPost", (req, res) => {
    const data = addPostController(req, res);
    res.send(data);
  });
};
