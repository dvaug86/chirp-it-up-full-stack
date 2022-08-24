import { Query } from "..";

const all = async () => Query('SELECT * FROM users');
const one = (userid: number) => Query('SELECT * FROM users WHERE id = ?', [userid]);
const obliterate = (userid: number) => Query('DELETE FROM users WHERE id = ?', [userid]);
const insert = (newUser: { email: string, username: string, password: string }) =>
    Query('INSERT INTO users set ?', newUser);
const update = (updatedUser: { email: string, username: string, password: string }, id: number) =>
    Query('UPDATE users SET ? WHERE id = ?', [updatedUser, id]);



export default {
    all,
    one,
    obliterate,
    insert,
    update
}