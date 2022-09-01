//this is the endpoint file for the particular resource in this chirpr application
import * as express from 'express';
import db from '../../db';
const router = express.Router();


router.get('/:id', async (req, res) => {
    
    //id will always be a string even though we want it to be a number in this project
    //therrfore we cast req.params.id as a number as shown below
    const id:any = (req.params.id);
    try {
        const chirpDetails = await db.chirps.one(id);
        res.json(chirpDetails);
        //we can do the chirpDetails[0] here so that we are selecting the first item in array which is all we are looking for
        //this way we don't have an array of oject later  
    
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'code is bunk', error: error.message })
    }
});

//this is our first endpoint of our crud operations while not first in order this is best to do first
//writting out to scaffold since it is simple and we can make sure it it works before scafffolding out
router.get('/', async (req, res) => {
    let allChirps = await db.chirps.all();
    try {
        res.json(allChirps);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'code is bunk', error: error.message })
    }
});

router.post('/', async (req, res) => {
    const newChirp = req.body;
    try {
        const result = await db.chirps.insert(newChirp);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'code is bunk', error: error.message })
    }
});

router.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const editedChirp = req.body;
    try {
        const result = await db.chirps.update(editedChirp, id);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'code is bunk', error: error.message })
    }
});

router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const result = await db.chirps.obliterate(id);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'code is bunk', error: error.message })
    }
});


export default router; 