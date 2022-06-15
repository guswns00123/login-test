"use strict";

const User = require("../../model/User");


const output = {
    home : (req,res) => {
        res.render("home/index"); //index.ejs와 연결
    },
    
    login : (req,res) => {
        res.render("home/login"); //login.ejs와 연결
    },
    register: (req,res) => {
        res.render("home/register");
    }
    
}

const process = {
    login : (req,res) => { //req.body => 클라이언트가 입력한 값들
        const user = new User(req.body); //그 값들을 User instance로 만듬
        const response = user.login(); //그 user가 login method 호출
        return res.json(response);
        
    },
};

module.exports = {
    output,
    process,
};

//index.js와 연결해줌