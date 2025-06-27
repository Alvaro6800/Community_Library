import db from '../config/database.js'

db.run(`
    CREATE TABLE IF NOT EXISTS users(
        id  INTEGER PRIMARY KEY AUTOINCREMENT
        , username TEXT UNIQUE NOT NULL
        , email TEXT UNIQUE NOT NULL
        , password TEXT NOT NULL
        , avatar TEXT
    )    
`)

function createUserRepository(newUser){
    return new Promise((res, rej) => {
        const {username, password, email, avatar} = newUser;
        db.run(`
            INSERT INTO users (username, email, password, avatar)
            VALUES (?, ?, ?, ?) 
        `, [username, email, password, avatar], (err) => {
            if(err)
                rej(err)
            else
                res({id: this.lastID, ...newUser})
        })
    })
}

function findUserByEmailRepository(userEmail){
    return new Promise((res,rej) => {
        db.get(`
            SELECT id, username, email, avatar 
            FROM users
            WHERE email = ?   
        `, [userEmail], (err, row) => {
            if(err)
                rej(err)
            else
                res(row)
        })
    })
}

export default {
    createUserRepository
    , findUserByEmailRepository
}