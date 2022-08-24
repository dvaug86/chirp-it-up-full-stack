import { Query } from "..";

const all = async () => Query('SELECT * FROM users');
const one = (id: number) => Query('SELECT * FROM users WHERE id = ?', [id]);
const obliterate = (id: number) => Query('DELETE FROM users WHERE id = ?', [id]);
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