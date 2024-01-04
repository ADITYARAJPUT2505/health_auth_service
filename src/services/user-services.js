const UserRepo = require("../repository/user-repo");

class UserService {
  constructor() {
    this.userRepo = new UserRepo();
  }

  async create(data) {
    try {
      const user = await this.userRepo.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong in service layer");
      throw error;
    }
  }
}

module.exports = UserService;
