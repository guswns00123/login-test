"use strict";


class UserStorage {
    static #users = {
        id : ["jun", "yoo"],
        psword : ["123", "1234"],
        name : ["유현준", "현준"],
    };
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
            
        }, {});
        
        return newUsers;
    }
    static getUserInfo(id) {
        const users = this.#users; //유저 목록 받은것 
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); //유저목록의 키값들만 리스트로 만든것 [id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return {success : true};

    }
}

module.exports = UserStorage;
