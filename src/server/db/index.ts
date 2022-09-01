//test
import * as mysql from 'mysql';
import  config from '../config';

import chirps from './queries/chirps';
import users from './queries/users';

//establishing a connection between node and database
const dbconnect = mysql.createConnection(config.mysql);

export const Query = <T = any>(query: string, values?: any) =>{
    return new Promise<T>((resolve, reject) =>{
        dbconnect.query(query, values, (err, results) => {
            if(err){
                reject(err);
            }else{
                resolve(results);
            }
        });
    });
};


export default{
    chirps,
    users
}