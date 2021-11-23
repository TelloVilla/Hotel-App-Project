const fs = require("fs");
let users = require("../data/users.json");
const bcrypt = require('bcryptjs')

export const UserDB = {
  getAll: () => users,
  printAll,
  find: (x) => users.find(x),
  createUser,
  deleteUser,
  addReservationToUser,
  updateUser,
  deleteUserReservation,
  getUserReservations,
  getAdminHotels,
};

function printAll() {
  console.log(userDB.getAll);
}

function createUser(username, firstname, lastname, billaddress, hash, admin) {
  let duplicate = users.find((u) => u.username === username);
  if (duplicate) {
    return false;
  }
  let id = Math.floor(Math.random() * 500000) + username.substring(0, 2);
  let newUser = {
    id: id,
    username: username,
    firstname: firstname,
    lastname: lastname,
    billaddress: billaddress,
    hash: hash,
    admin: admin,
    reservations: [],
  };
  users.push(newUser);
  saveData();
  return true;
}

function deleteUser(username) {
  let found = users.find((u) => u.username === username);
  if (!found) {
    return false;
  }
  let index = users.indexOf(found);
  users.splice(index, 1);
  saveData();
  return true;
}

function getUserReservations(username) {
  let found = users.find((u) => u.username === username);
  if (!found) {
    return false;
  }
  return found.reservations;
}

function deleteUserReservation(reservID) {
  let found = users.find((u) => u.reservations.includes(reservID));
  if (!found) {
    return false;
  }
  let index = found.reservations.indexOf(reservID);
  found.reservations.splice(index, 1);
  saveData();
  return true;
}

function updateUser(username, newUsername, firstname, lastname, billaddress, password) {
  let found = users.find((u) => u.username === username);
  found.username = newUsername;
  found.firstname = firstname;
  found.lastname = lastname;
  found.billaddress = billaddress;
  found.hash = bcrypt.hashSync(password);
  saveData();
  return true;
}

function getAdminHotels(username){
    let found = users.find(u => u.username === username);
    if(!found){
        return false;
    }
    if(found.admin.hotels.length === 0){
        return false;
    }
    return found.admin.hotels;

}

function addReservationToUser(username, reservID) {
  let found = users.find((u) => u.username === username);

  if (!found) {
    return false;
  }
  found.reservations.push(reservID);
  saveData();
  return true;
}

function saveData() {
  fs.writeFileSync("data/users.json", JSON.stringify(users, null, 2));
}
