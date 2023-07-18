const { User } = require("../models");
exports.home = async (req, res, next) => {
  try {
    const users_id = await User.findOne({ where: { id_users: req.user } });
    res.status(200).json({
      data: users_id.id_users,
      status: "true",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "false",
      message: "data error users",
    });
  }
};
