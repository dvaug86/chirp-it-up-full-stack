//test
import * as mysql from 'mysql';
import  config from '../config';

import chirpr from './queries/chirps';

//establishing a connection between node and database
const dbconnect = mysql.createConnection(config.mysql);

export const Query = (query: string, values?: any) =>{
    return new Promise((resolve, reject) =>{
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
    chirpr
}