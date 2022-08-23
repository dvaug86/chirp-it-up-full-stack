


import * as dotenv from 'dotenv';  //this is for encryption of passwords and such for the chirpr schema db

dotenv.config(); //this will look for a file in the root of our project called .env

export default{
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'chirprapp',
        password: 'chirprapp',
        database: 'chirpr'
    }
}