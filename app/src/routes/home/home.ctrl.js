"use strict";

const UserStorage = require("../../model/UserStorage");


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
        const id = req.body.id,
        psword = req.body.psword;
        
        const users = UserStorage.getUsers("id", "psword");
        const response = {};
        if (users.id.includes(id) ){
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword){
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하셨습니다.";
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};

//index.js와 연결해줌