"use strict";

const home = (req,res) => {
    res.render("home/index"); //index.ejs와 연결
};

const login = (req,res) => {
    res.render("home/login"); //login.ejs와 연결
};

module.exports = {
    home,
    login,
};

//index.js와 연결해줌