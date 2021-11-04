import {UserDB} from '../../util/user_db'


export default function handler(req, res){
    res.status(200).json(UserDB.getAll())
}