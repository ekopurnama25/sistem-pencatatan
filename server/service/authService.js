const { User } = require("../models");
const { Roles } = require("../models");
const { Token } = require("../models");
const argon2 = require("argon2");

const jwt = require("jsonwebtoken");
const {
  createAccessToken,
  createRefreshToken,
} = require("../middlaware/token");

exports.authUsers = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const validUSers = await User.findOne({
    where: { email: email },
  });
  const Role = await Roles.findOne({
    where: { id_users: validUSers?.id_users },
  });
  if (validUSers) {
    const validPassword = await argon2.verify(validUSers.password, password);
    if (validPassword) {
      const TokenUsers = await Token.findOne({
        where: { id_users: validUSers?.id_users },
        // include: [
        //   {
        //     model: Roles,
        //     required: true,
        //   },
        // ],
      });
      if (!TokenUsers) {
        await Token.create({
          id_users: validUSers.id_users,
          accsesToken: createAccessToken(validUSers.id_users),
          refreshToken: createRefreshToken(validUSers.id_users),
        });
      } else {
        await Token.update(
          {
            id_users: validUSers.id_users,
            accsesToken: createAccessToken(validUSers.id_users),
            refreshToken: createRefreshToken(validUSers.id_users),
          },
          {
            where: { id_users: validUSers?.id_users },
          }
        );
      }
    } else {
      res.status(505).json({ message: "Password Incorect" });
    }
    res.status(200).json({
      message: "successfuly login",
      accsesToken: createAccessToken(validUSers.id_users, Role.roles),
      refreshToken: createRefreshToken(validUSers.id_users),
      roles: Role.roles,
    });
  } else {
    res.status(505).json({ message: "Email and Password Not Fount" });
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const refreshToken = req.body.refreshToken;
    const Id = jwt.decode(refreshToken);
    console.log("id", Id);
    const checkToken = await User.findOne({ where: { id_users: Id.id } });

    if (checkToken) {
      await Token.update(
        {
          id_users: checkToken.id_users,
          accsesToken: createAccessToken(checkToken.id_users),
          refreshToken: createRefreshToken(checkToken.id_users),
        },
        {
          where: { id_users: checkToken?.id_users },
        }
      );
      const Role = await Roles.findOne({
        where: { id_users: checkToken?.id_users },
      });
      res.status(200).json({
        message: "successfuly refresh token",
        accsesToken: createAccessToken(checkToken.id_users, Role.roles),
        refreshToken: createRefreshToken(checkToken.id_users),
        roles: Role.roles,
      });
    } else {
      res.status(502).json({
        message: "Token Not Found In database",
      });
    }
  } catch (e) {
    console.log(e);
  }
};
