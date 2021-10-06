const fs = require('fs')
let users =  require('../data/users.json')

export const UserDB = {
    getAll: () => users,
    printAll,
    find: x => users.find(x),
    createUser,
    deleteUser,
    addReservationToUser,
    updateUser,
    getUserReservations
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
        admin: admin,
        reservations: []
    }
    users.push(newUser);
    saveData();
}

function deleteUser(username){
    let found = users.find(u => u.username === username);
    if(!found){
        return false
    }
    let index = users.indexOf(found);
    users.splice(index, 1);
    saveData();
    return true

}

function getUserReservations(username){
    let found = users.find(u => u.username === username);
    return found.reservations
}

function updateUser(username, hash, admin){
    let found = users.find(u => u.username === username);
    found.username = username;
    found.hash = hash;
    found.admin = admin;
    saveData();
}

function addReservationToUser(username, reservID){
    let found = users.find(u => u.username === username);

    if(!found){
        return false
    }
    found.reservations.push(reservID);
    saveData();
    return true
}


function saveData(){
    fs.writeFileSync('data/users.json', JSON.stringify(users, null, 2))

}







