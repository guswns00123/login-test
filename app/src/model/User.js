"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body){ //user가 입력한 값
        this.body = body;
    }
    login() {
        const body = this.body;
        const {id, psword} = UserStorage.getUserInfo(body.id); //유저가 입력한 id값을 storage method로 전달
        
        if (id){ //id가 존재하냐 안하냐
            if (id === body.id && psword === body.psword) {
                return {success : true};
            }
            return {success : false, msg: "비밀번호가 틀렸습니다"};
        }
        return { success : false, msg: "존재하지않는 아이디입니다"};
        
    }
}

module.exports = User;