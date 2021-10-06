const fs = require('fs')
let reservs = require("../data/reservations.json")

export const ReservDB = {
    getAll: () => reservs,
    createReservation,
    deleteReservation,
    saveData
}

function createReservation(hotel, guest, roomType, start, end, surcharge){
    let id = Math.floor(Math.random() * 5000) + guest[0,2]
    let newReserv = {
        id: id,
        guest: guest,
        hotel: hotel,
        roomType: roomType,
        start: start,
        end: end,
        surcharge: surcharge
    }
    reservs.push(newReserv);
    saveData();
    return id;
}

function deleteReservation(reservID){
    let found = reservs.find(u => u.id === reservID);
    if(!found){
        return false
    }
    let index = reservs.indexOf(found);
    reservs.splice(index, 1);
    saveData();
    return true

}

function saveData(){
    fs.writeFileSync('data/reservations.json', JSON.stringify(reservs, null, 2))

}