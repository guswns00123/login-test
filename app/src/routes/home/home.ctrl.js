"use strict";

const User = require("../../model/User");
const logger = require("../../config/logger");
const cookie = require("cookie-parser");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

const output = {
    home : (req,res) => {
        logger.info(`GET / 304 "홈 화면으로 이동`);
        res.render("home/index"); //index.ejs와 연결
    },
    home2 : (req,res) => {
        logger.info(`GET / 304 "비로그인 화면으로 이동`);
        res.render("home/index2");
    },
    login : (req,res) => {
        logger.info(`GET /login 304 "로그인 화면으로 이동`);
        res.render("home/login"); //login.ejs와 연결
    },
    register: (req,res) => {
        logger.info(`GET /register 304 "회원가입 화면으로 이동`);
        res.render("home/register");
    },
    // auth : (req,res) => {
    //     res.status(200).json({
    //         id: req.user.id,
    //         isAuth: true,
    //         name:req.user.name
    //     })
    // }
    
}

const process = {
    login : async (req,res) => { //req.body => 클라이언트가 입력한 값들
        const user = new User(req.body); //그 값들을 User instance로 만듬
        const response = await user.login(); //그 user가 login method 호출
        const token = user.token;
        
        const url = {
            method: "POST",
            path : "/login",
            status: response.err ? 400 : 200 ,
        };
        

        log(response, url);
        return res.status(url.status).json(response);
        // res.status(url.status).json({
        //     success:true,
        //     token
        // });
        
    },
    register : async (req, res) => {
        const user = new User(req.body); 
        const response = await user.register();
        const url = {
            method: "POST",
            path : "/register",
            status: response.err ? 409 : 201,
        };
        
        log(response, url); 
        
        return res.status(url.status).json(response);
    },

};

const log = (response, url) => {
    if (response.err){
        logger.error(
        `${url.method} ${url.path} ${url.status} 200 Response:  ${response.success},  ${response.msg}`);
    }
    else
    logger.info(
        `${url.method} ${url.path} ${url.status} Response:${response.success},  ${response.msg || "" } `);
    
}

module.exports = {
    output,
    process,
};

//index.js와 연결해줌