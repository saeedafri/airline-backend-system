const express = require("express");
const { PORT } = require("../src/config/index");
const bodyParser = require("body-parser");
const CityRepository = require("./repository/city-repository");
const ApiRoutes = require("./routes/index");
const setUpAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);
  app.listen(PORT, () => {
    console.log(`Web Server Listening at ${PORT}`);
  });
};

setUpAndStartServer();
