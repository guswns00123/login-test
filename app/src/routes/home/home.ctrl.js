"use strict";

const User = require("../../model/User");
const logger = require("../../config/logger");

const output = {
    home : (req,res) => {
        logger.info(`GET / 200 "홈 화면으로 이동`);
        res.render("home/index"); //index.ejs와 연결
    },
    
    login : (req,res) => {
        logger.info(`GET /login 200 "로그인 화면으로 이동`);
        res.render("home/login"); //login.ejs와 연결
    },
    register: (req,res) => {
        logger.info(`GET /register 200 "회원가입 화면으로 이동`);
        res.render("home/register");
    }
    
}

const process = {
    login : async (req,res) => { //req.body => 클라이언트가 입력한 값들
        const user = new User(req.body); //그 값들을 User instance로 만듬
        const response = await user.login(); //그 user가 login method 호출
        if (response.err){
            logger.error(`POST /login 200 Response: "success: ${response.success},  ${response.err}"`);
        }
        else
        logger.info(
            `POST /login 200 Response: "success: ${response.success}, msg: ${response.msg}"`
        );
        return res.json(response);
        
    },
    register : async (req, res) => {
        const user = new User(req.body); 
        const response = await user.register(); 
        if (response.err){
            logger.error(`POST /register 200 Response: "success: ${response.success}, ${response.err}"`);
        }
        else
            logger.info(
                `POST /register 200 Response: "success: ${response.success}, msg: ${response.msg}"`
            );
        return res.json(response);
    },

};

module.exports = {
    output,
    process,
};

//index.js와 연결해줌