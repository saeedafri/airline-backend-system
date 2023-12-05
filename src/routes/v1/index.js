const express = require("express");
const { CityController } = require("../../controllers/index");
const router = express.Router();

router.post("/city", CityController.createCity);
router.get("/city", CityController.getCity);
router.patch("/city", CityController.updateCity);
router.delete("/city", CityController.deleteCity);

module.exports = router;
