const UserRepo = require("../repository/user-repo");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/ServerConfig");
const bcrypt = require("bcrypt");
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

  async signIn(email, plainPassword) {
    try {
      //step 1 ->fetch the user using the email
      const user = await this.userRepo.getByEmail(email);
      //step 2 -> compare incoming plain password with stores encrypted password
      const passwordMatch = this.checkPassword(plainPassword, user.password);
      if (!passwordMatch) {
        console.log("password doesn't match");
        throw { error: "incorrect password" };
      }
      //if password match then create a token and send it to the user
      const newJWT = this.createToken({ email: user.email, id: user.id });
      return newJWT;
    } catch (error) {
      console.log("something went wrong in sign in process");
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
  checkPassword(userInputPlainPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
    } catch (error) {
      console.log("something went wrong in password comparision");
      throw error;
    }
  }
}

module.exports = UserService;
