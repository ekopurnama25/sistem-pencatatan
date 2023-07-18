const { User, Roles } = require("../models");
const argon2 = require("argon2");
exports.getUser = async (req, res) => {
  try {
    await User.findAll().then((users) =>
      res.status(200).json({ message: "true", data: users })
    );
  } catch (error) {
    console.log(error);
  }
};

exports.postUser = async (req, res) => {
  try {
    const users = {
      username: req.body.username,
      email: req.body.email,
      password: await argon2.hash(req.body.password),
    };

    const CreateUsers = await User.create(users);
    if (CreateUsers) {
      await Roles.create({
        id_users: CreateUsers.id_users,
        roles: "Users",
      });
    }
    res.status(200).json({
      status: "true",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "false",
      message: "data error users",
    });
  }
};

exports.deleteUsers = async (req, res) => {
  try {
    const id = req.params.id;
    await User.destroy({
      where: { id_users: id },
    });
    res
      .status(200)
      .json({ status: 200, message: "success delete data, " + id });
  } catch (error) {
    console.log(error);
  }
};

exports.updateUsers = async (req, res) => {
  try {
    const id = req.params.id;
    const users = {
      username: req.body.username,
      email: req.body.email,
      password: await argon2.hash(req.body.password),
    };
    await User.update(users, {
      where: { id_users: id },
    });
    console.log(users);
    res
      .status(200)
      .json({ status: 200, message: "Users was updated successfully" });
  } catch (error) {
    console.log(error);
  }
};
