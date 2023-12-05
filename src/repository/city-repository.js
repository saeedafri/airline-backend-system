const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const cities = await City.create({ name });
      return cities;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }
  async deleteCity({ cityId }) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }
  async getCity(cityId) {
    try {
      const city = City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }
  async updateCity(cityId, data) {
    try {
      const city = City.update(data, {
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }
}

module.exports = CityRepository;
