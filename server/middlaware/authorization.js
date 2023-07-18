const jwt = require("jsonwebtoken");
const { Token } = require("../models");

exports.verify = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      throw new Error("not authenticated");
    }
    const authtoken = token.split(" ")[1];
    if (token) {
      const decoded = jwt.verify(authtoken, process.env.ACCESS_TOKEN_SECRET);
      const TokenAccess = await Token.findOne({
        where: { id_users: decoded.id },
      });
      req.user = TokenAccess?.id_users;
    } else {
      return res.status(400).json({
        errors: [
          {
            msg: "Token invalid",
          },
        ],
      });
    }
    return next();
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "Your session is not valid.",
      data: error,
    });
  }
};
