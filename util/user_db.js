let users =  require('../data/users.json')

export const userDB = {
    getAll: () => users,
    printAll

}

function printAll(){
    console.log(userDB.getAll)
}






