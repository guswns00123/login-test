const mysql = require("mysql");

const db = mysql.createConnection({
    host : "login-lecture.crzb8xrehyqr.ap-northeast-2.rds.amazonaws.com",
    user : "admin",
    password : "yoohyun703",
    database : "login_lecture",
});

db.connect();

module.exports = db;