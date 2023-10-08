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

  router.get("/getPost/", async (req, res) => {
    const controller = await getPostController(req, res);

    res
      .status(controller.status)
      .send({ message: controller.message, data: controller.data });
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

  router.post("/addPost", async(req, res) => {
    
    console.log(req)
    
    // const controller = await addPostController(req, res);

    res
      .status(controller.status)
      .send({ message: controller.message, data: controller.data });
  });
};
