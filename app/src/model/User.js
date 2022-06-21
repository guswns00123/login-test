"use strict";

const UserStorage = require("./UserStorage");
const jwt = require("jsonwebtoken");
const { token } = require("morgan");

class User {
    constructor(body){ //user가 입력한 값
        this.body = body;
    }
    async login() {
        const client = this.body;
        try {
            const user = await UserStorage.getUserInfo(client.id); //유저가 입력한 id값을 storage method로 전달
            //await를 사용해준 이유는 파일을 다읽고 나서 실행할 수 잇도록 해준다.
            //await은 프로미스를 반환하는 아이한테 주는 옵션같은 것
            //await은 async인 것들에서만 사용가능하다
            if (user){ //id가 존재하냐 안하냐
                if (user.id === client.id && user.psword === client.psword) {
                    var token = jwt.sign(user.id, 'secretToken');
                    this.token = token;
                    return {success : true};
                }
                return {success : false, msg: "비밀번호가 틀렸습니다"};
            }
            return { success : false, msg: "존재하지않는 아이디입니다"};
        }catch (err) {
            return {success: false, err};
        }
        
        
    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        }
        catch (err) {
           return { success : false, err };
        }
        


    }

    // findByToken(token, cb) {
    //     //토큰을 decode하는 곳
    //     jwt.verify(token, 'secretToken', function(err, decoded) {
    //         //유저 아이디를 이용해서 유저를 찾은 다음에
    //         //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는 지 확인
    //         const user = UserStorage.getUserInfo(decoded);
            
    //     });
    // }
}

module.exports = User;