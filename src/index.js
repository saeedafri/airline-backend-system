const express = require("express");
const { PORT } = require("../src/configs/index");
const bodyParser = require("body-parser");
const setUpAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Web Server Listening at ${PORT}`);
  });
};

setUpAndStartServer();
