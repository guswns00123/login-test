"use strict";

const express = require("express");
const app = require("../../../app");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

// router.get("/auth", ctrl.output.auth);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
module.exports = router; //이 js파일을 내보내주는 방법 app.js파일과 연결

