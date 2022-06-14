"use strict";

const users = {
    id : ["jun", "yoo"],
    psword : ["123", "1234"],
};

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

        if (users.id.includes(id) ){
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword){
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success:false,
            msg:"false",
        });
    },
};

module.exports = {
    output,
    process,
};

//index.js와 연결해줌