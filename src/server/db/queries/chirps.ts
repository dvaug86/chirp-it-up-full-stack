
import { Query } from "..";

const all =  async () => Query('SELECT * FROM chirps');

export default {
    all
} 
