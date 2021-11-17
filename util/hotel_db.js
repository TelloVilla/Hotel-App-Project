const fs = require('fs')
let hotels = require("../data/hotels.json")

export const HotelDB = {
    getAll: () => hotels,
    find: x => hotels.find(x),
    findHotelByName,
    findHotelByAmenitites,
    findHotelByPrice,
    updateHotel,
    updateVacancy,
    addHotel,
    deleteHotel,
    saveData
}

function updateVacancy(name, action){
    let found = hotels.find(h => h.name === name);
    if(!found){
        return false
    }
    if(action === "+"){
        found.vacancy++;
    }else if(action === "-"){
        found.vacancy--;
    }
    saveData();
    return true
}


function findHotelByName(name){
    let found = hotels.find(h => h.name === name)
    if(!found){
        return false
    }
    return found
}

function findHotelByAmenitites(amenities){
    let found = hotels.find(h => h.amenities === amenities)
    if(!found){
        return false
    }
    return found
}

function findHotelByPrice(price){
    const priceRange = (r) => r <= price;
    let found = hotels.find(h => h.price.some(priceRange));
    if(!found){
        return false
    }
    return found

}

function addHotel(name, rooms, amenities, price, surcharge){
    let dup = hotels.find(h => h.name === name)
    if(dup){
        return false
    }
    let newHotel = {
        name: name,
        rooms: rooms,
        amenities: amenities,
        price: price,
        surcharge: surcharge
    }

    hotels.push(newHotel)
    return true
}

function deleteHotel(name){
    let found = hotels.find(h => h.name === name)
    if(!found){
        return false
    }
    let index = hotels.indexOf(found);
    users.splice(index, 1);
    saveData();
    return true

}

function updateHotel(hotel){
    console.log(hotel)
    let found = hotels.find(h => h.name === hotel.name);
    if(!found){
        return false
    }
    found.rooms = hotel.rooms
    found.amenities.pool = hotel.amenities.pool
    found.amenities.spa = hotel.amenities.spa
    found.amenities.gym = hotel.amenities.gym
    found.amenities.office = hotel.amenities.office
    found.price.standard = hotel.price.standard
    found.price.king = hotel.price.king
    found.price.queen = hotel.price.queen
    found.surcharge = hotel.surcharge
    console.log(hotel)
    // found = hotel;
    saveData();
    return true

}

function saveData(){
    console.log("hi")
    fs.writeFileSync('data/hotels.json', JSON.stringify(hotels, null, 2))

}