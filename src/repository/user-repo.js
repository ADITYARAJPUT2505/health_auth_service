const { User } = require("../models/index");
//const user = require("../models/user");

class UserRepo {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong in the repo layer");
      throw error;
    }
  }
  async destroy(userId) {
    try {
      await User.destroy({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in the repo layer");
      throw error;
    }
  }
}

module.exports = UserRepo;
