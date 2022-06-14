"use strict";


const output = {
    home : (req,res) => {
        res.render("home/index"); //index.ejs와 연결
    },
    
    login : (req,res) => {
        res.render("home/login"); //login.ejs와 연결
    },
    
}

const process = {
    login : (req,res) => {
        console.log(req.body);
    },
};

module.exports = {
    output,
};

//index.js와 연결해줌