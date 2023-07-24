const authorization = require("../middlaware/authorization");
const express = require("express");

const router = express.Router();
const incomeService = require("../service/incomeService");

router.get("/", authorization.verify, incomeService.getIncome);

router.post("/", authorization.verify, incomeService.postIncome);

module.exports = router;
