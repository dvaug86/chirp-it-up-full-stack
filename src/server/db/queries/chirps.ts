
import { Query } from "..";
//this imports the Query function created in the db folders index file


//CRUD queries for chirps
const all = async () => Query('SELECT * FROM chirps');
const one = (id: number) => Query('SELECT * FROM chirps WHERE id = ?', [id]);
const obliterate = (id: number) => Query('DELETE FROM chirps WHERE id = ?', [id]);
const insert = (newChirp: { userid: number, message: string, location: string }) =>
    Query('INSERT INTO chirps SET ?', newChirp);
const update = (updatedChirp: { userid?: number, message?: string, location?: string }, id: number) =>
    Query('UPDATE chirps SET ? WHERE id = ?', [updatedChirp, id]);

//we can do the (newChirp: {userid: number ......}) and then the ...chirps SET ? to shorten. instead of doing:
//const insert = (userid :number, message: string, location: string) => 
//Query('INSERT INTO chirps (userid, message, location) VALUES(?.?,?);

export default {
    all,
    one,
    obliterate,
    insert,
    update
}
//this exports these queries to the index file for the db folder