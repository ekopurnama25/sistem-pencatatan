const express = require("express");

const router = express.Router();

const userService = require("../service/usersService");

router.get("/", userService.getUser);

router.post("/", userService.postUser);

router.delete("/:id", userService.deleteUsers);

router.put("/:id", userService.updateUsers);

module.exports = router;
