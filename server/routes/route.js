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

  router.get("/getPost", async (req, res) => {
    const controller = await getPostController(req, res);

    res
      .status(controller.status)
      .send({ message: controller.message, data: controller.data });
  });

  router.get("/getUserDetails", async (req, res) => {
    const controller = await getUserDetailsController(req, res);

    res
      .status(controller.status)
      .send({ message: controller.message, data: controller.data });
  });

  router.post("/login", async (req, res) => {
    const controller = await loginController(req, res);

    res.status(controller.status).send({
      success: controller.success,
      message: controller.message,
      data: controller.data,
    });
  });

  router.post("/registration", async (req, res) => {
    const controller = await registrationController(req, res);

    res.status(controller.status).send({
      success: controller.success,
      message: controller.message,
      data: controller.data,
    });
  });

  router.post("/addPost", async (req, res) => {
    const controller = await addPostController(req, res);

    res
      .status(controller.status)
      .send({ message: controller.message, data: controller.data });
  });
};
