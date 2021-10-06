import {UserDB} from '../../util/user_db'

export default function handler(req, res){


    res.status(200).json({success: UserDB.deleteUser("john doe")})


}