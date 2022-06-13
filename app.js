"use strict";


//모듈
const express = require("express");
const app = express();

// 앱 세팅
app.set("views", "./views"); //views 파일에 저장할것
app.set("view engine", "ejs" ); //view 엔진을 ejs라는 뷰엔진을 사용할것

// 라우팅
const home = require("./routes/home");
app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.


module.exports = app;
