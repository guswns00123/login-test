"use strict";


//모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
// 앱 세팅
app.set("views", "./src/views"); //views 파일에 저장할것
app.set("view engine", "ejs" ); //view 엔진을 ejs라는 뷰엔진을 사용할것
app.use(express.static(`${__dirname}/src/public`)); // dirname ==> app.js파일 위치를 뜻함.
// app.js위치 안에있는 src폴더 안에있는 public 폴더를 정적경로로 추가해주겟다라는 뜻
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));
//URL을 통해 전달되는 데이터에 한글, 공백 등 과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결

// 라우팅
const home = require("./src/routes/home");

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.


module.exports = app;
