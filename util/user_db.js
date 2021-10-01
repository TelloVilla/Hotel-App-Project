const fs = require('fs')
let users =  require('../data/users.json')

export const userDB = {
    getAll: () => users,
    printAll,
    find: x => users.find(x),
    createUser
}

function printAll(){
    console.log(userDB.getAll)
}

function createUser(username, hash, admin){
    let id = Math.floor(Math.random() * 500000) 
    let newUser = {
        id: id,
        username: username,
        hash: hash,
        admin: admin
    }

    users.push(newUser);

    saveData();


}

function saveData(){
    fs.writeFileSync('data/users.json', JSON.stringify(users, null, 2))

}







