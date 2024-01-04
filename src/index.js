const express = require("express");
const bodyparser = require("body-parser");
const { PORT } = require("./config/ServerConfig");
const apiRoutes = require("./routes/index");
const app = express();

const prepareAndStartServer = () => {
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(PORT, () => {
    console.log(`server started at port : ${PORT}`);
  });
};

prepareAndStartServer();
