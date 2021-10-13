const fs = require('fs')
let reservs = require("../data/reservations.json")

export const ReservDB = {
    getAll: () => reservs,
    find: x => reservs.find(x),
    createReservation,
    deleteReservation,
    getReservationInfo,
    updateReservation,
    saveData
}

function createReservation(hotel, guest, roomType, start, end, surcharge){
    let id = Math.floor(Math.random() * 5000) + guest.substring(0,3)
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

function getReservationInfo(reservID){
    let found = reservs.find(r => r.id === reservID)
    if(!found){
        return false
    }
    return found
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

function updateReservation(reservID, guest, hotel, roomType, start, end, surcharge){
    let found = reservs.find(r => r.reservID === reservID)
    if(!found){
        return false
    }
    found.guest = guest;
    found.hotel = hotel;
    found.roomType = roomType;
    found.start = start;
    found.end = end;
    found.surcharge = surcharge;
    saveData();
    return true

}

function saveData(){
    fs.writeFileSync('data/reservations.json', JSON.stringify(reservs, null, 2))

}