const jwt = require("jsonwebtoken");

// * Decoding User Function !
const decodeUser = (req, res, next) => {
  let token = req.header("auth");
  let decodedUser = jwt.decode(token);
  req.decodedUser = decodedUser;
  next();
};

const admin = (req, res, next) => {
  let token = req.header("auth");
  if (!token) {
    res.status(401).json({ status: "forbbiden", message: "token not found" });
  } else {
    jwt.verify(token, "secretkey", (err, auth) => {
      if (err) {
        console.log(err);
        res
          .status(401)
          .json({ status: "forbbiden", message: "token not found" });
      } else if (auth.isAdmin === false) {
        res
          .status(403)
          .json({ status: "forbbiden", message: "Access Denied." });
      } else {
        next();
      }
    });
  }
};
const user = (req, res, next) => {
  let token = req.header("auth");
  if (!token) {
    res.status(401).json({ status: "forbbiden", message: "token not found" });
  } else {
    jwt.verify(token, "secretkey", err => {
      if (err) {
        console.log(err);
        res
          .status(401)
          .json({ status: "forbbiden", message: "token not found" });
      } else {
        next();
      }
    });
  }
};

module.exports = { user, admin, decodeUser };
