const { CityService } = require("../services/index");

const cityService = new CityService();

const createCity = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully Created the City Provided",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Eror While Creating the City Provided",
      error: { error },
    });
  }
};
const getCity = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.cityId);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully Created the City Provided",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Eror While Creating the City Provided",
      error: { error },
    });
  }
};
const updateCity = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body.data);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully Created the City Provided",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Eror While Creating the City Provided",
      error: { error },
    });
  }
};
const deleteCity = async (req, res) => {
  try {
    const city = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully Deleted the City Provided",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Eror While Creating the City Provided",
      error: { error },
    });
  }
};
module.exports = {
  createCity,
  getCity,
  updateCity,
  deleteCity,
};
