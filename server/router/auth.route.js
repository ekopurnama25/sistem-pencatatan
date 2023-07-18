const authorization = require("../middlaware/authorization");
const express = require("express");

const router = express.Router();

const authService = require("../service/authService");
const homeService = require("../service/homeService");

router.post("/", authService.authUsers);

router.post("/home", authorization.verify, homeService.home);

router.post("/refresh_token", authService.refreshToken);

module.exports = router;
