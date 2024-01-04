const UserRepo = require("../repository/user-repo");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/ServerConfig");
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
  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, { expiresIn: "1h" });
      return result;
    } catch (error) {
      console.log("something went wrong in token creation");
      throw error;
    }
  }
  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log("something went wrong in token validation", error);
      throw error;
    }
  }
}

module.exports = UserService;
