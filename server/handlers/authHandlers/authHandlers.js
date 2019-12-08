const User = require("../../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = (req, res) => {
  let {
    username,
    password,
    email,
    city,
    address,
    firstName,
    lastName,
    isAdmin
  } = req.body;
  User.findOne({ username }, { _v: 0 }, (err, result) => {
    if (err) {
      res.json({ status: "error", message: "there is an Error: " + err });
    } else if (result !== null) {
      res
        .status(409)
        .json({ status: "forbidden", message: "username already exist." });
    } else {
      let salt = bcrypt.genSaltSync(10);
      let hashedPassword = bcrypt.hashSync(password, salt);
      let newUser = User({
        username,
        password: hashedPassword,
        email,
        city,
        address,
        firstName,
        lastName,
        isAdmin
      });
      newUser.save();

      res.status(201).json("User Created and Saved.");
    }
  });
};

const login = (req, res) => {
  let { username, password } = req.body;
  User.findOne({ username }, { __v: 0 }, (err, result) => {
    if (err) {
      res.json({ message: "There is an Error , Contact the Admin : " + err });
    }
    if (result === null) {
      res.status(401).json({
        status: "forbidden",
        message: "Username or Password invalid."
      });
    } else {
      const userId = result._id
      const isAdmin = result.isAdmin;
      const validPassword = bcrypt.compareSync(password, result.password);
      if (validPassword === false) {
        res.status(401).json({
          status: "forbidden",
          message: "Username or Password invalid."
        });
      } else if (validPassword) {
        result
        jwt.sign({ userId, username, password, isAdmin }, "secretkey", (err, token) => {
          if (err) {
            res.json({
              status: "error",
              message: "There is an Error , Contact the Admin : " + err
            });
          }
          res.json({ status: "success", message: token });
        });
      }
    }
  });
};

module.exports = {
  register,
  login
};
