const express = require("express");
const bodyparser = require("body-parser");
const { PORT } = require("./config/ServerConfig");
const apiRoutes = require("./routes/index");
const app = express();
const UserService = require("./services/user-services");
//const UserRepository = require("./repository/user-repo");
const prepareAndStartServer = () => {
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(PORT, async () => {
    console.log(`server started at port : ${PORT}`);
    // const repo = new UserRepository();
    // const response = await repo.getById(1);
    // console.log(response);
    const service = new UserService();
    // const newToken = service.createToken({
    //   email: " aditya_raj@admin.com",
    //   id: 1,
    // });
    // console.log("new token is ", newToken);
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IiBhZGl0eWFfcmFqQGFkbWluLmNvbSIsImlkIjoxLCJpYXQiOjE3MDQzNjgxMzcsImV4cCI6MTcwNDM3MTczN30._XCQN_8ldkFWHMEzPqb7l8ec0C48Hnp-TARnMc4O7Ws";
    // const response = service.verifyToken(token);
    // console.log(response);
  });
};

prepareAndStartServer();
