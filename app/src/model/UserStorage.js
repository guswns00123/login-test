"use strict";

const fs = require("fs").promises;

class UserStorage {
    
    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
            
        }, {});
        
        return newUsers;
    }
    static getUserInfo(id) {
        //promise를 반환하기 때문에 .then으로도 접근하여 데이터를 가져 올수 있다.
        
        return fs
        .readFile("./src/databases/yoo/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);

    } 
    static #getUserInfo(data, id){
        const users = JSON.parse(data); //data파일을 변환해서 읽어줌
            const idx = users.id.indexOf(id);
            const usersKeys = Object.keys(users); //유저목록의 키값들만 리스트로 만든것 [id, psword, name]
            const userInfo = usersKeys.reduce((newUser, info) => {
                newUser[info] = users[info][idx];
                return newUser;
            }, {});
    
            return userInfo;
    }
    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return {success : true};

    }
}

module.exports = UserStorage;
