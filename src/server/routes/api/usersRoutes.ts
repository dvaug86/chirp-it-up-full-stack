import * as express from 'express';
import db from '../../db';

const router = express.Router();


router.get('/:userid', async (req, res) => {
    const userid = Number(req.params.userid);
    try {
        const userdetails = await db.users.one(userid);
        res.json(userdetails);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'code is bunk', error: error.message })
    }
});

router.get('/', async (req, res) => {
    try {
        const allusers = await db.users.all();
        res.json(allusers);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'code is bunk', error: error.message })
    }
});

router.post('/', async (req, res) => {
    const newHandle = req.body;
    try {
        const result = await db.users.insert(newHandle);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'code is bunk', error: error.message })
    }
});

router.put('/:userid', async (req, res) => {
    const userid = Number(req.params.userid);
    const editeduser= req.body;
    try {
        res.json({ msg: 'edited userby id' + userid, ...editeduser});
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'code is bunk', error: error.message })
    }
});

router.delete('/:userid', async (req, res) => {
    const userid = Number(req.params.userid);
    try {
        res.json({ msg: 'deleted userby id' + userid });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'code is bunk', error: error.message })
    }
});


export default router; 