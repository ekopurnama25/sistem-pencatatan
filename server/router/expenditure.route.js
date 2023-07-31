const authorization = require("../middlaware/authorization");
const express = require("express");

const router = express.Router();
const ExpenditureService = require("../service/expenditureService");

router.get("/", authorization.verify, ExpenditureService.getexpenditure);

router.get(
  "/totalexpenditure",
  authorization.verify,
  ExpenditureService.getTotalExpenditure
);

router.post("/", authorization.verify, ExpenditureService.postExpenditure);

router.delete(
  "/:id",
  authorization.verify,
  ExpenditureService.deleteExpenditure
);

router.get("/:id", authorization.verify, ExpenditureService.getIdExpenditure);

router.put("/:id", authorization.verify, ExpenditureService.updateExpenditure);

module.exports = router;
