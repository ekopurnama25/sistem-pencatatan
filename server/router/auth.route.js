const authorization = require("../middlaware/authorization");
const express = require("express");

const router = express.Router();

// router.get("/", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Max-Age", "1800");
//   res.setHeader("Access-Control-Allow-Headers", "content-type");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "PUT, POST, GET, DELETE, PATCH, OPTIONS"
//   );
// });

const authService = require("../service/authService");
const homeService = require("../service/homeService");

router.post("/", authService.authUsers);

router.post("/home", authorization.verify, homeService.home);

router.post("/logout", authorization.verify, authService.Logout);

router.post("/refresh_token", authService.refreshToken);

module.exports = router;
