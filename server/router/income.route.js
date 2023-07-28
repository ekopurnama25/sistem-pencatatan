const authorization = require("../middlaware/authorization");
const express = require("express");

const router = express.Router();
const incomeService = require("../service/incomeService");

router.get("/", authorization.verify, incomeService.getIncome);

router.post("/", authorization.verify, incomeService.postIncome);

router.delete("/:id", authorization.verify, incomeService.deleteIncome);

router.get("/:id", authorization.verify, incomeService.getIdIncome);

router.put("/:id", authorization.verify, incomeService.updateIncome);

module.exports = router;
