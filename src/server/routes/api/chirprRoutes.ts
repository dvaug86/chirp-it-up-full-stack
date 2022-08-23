//this is the endpoint file for the particular resource in this chirpr application
import * as express from 'express';
import db from '../../db';
const router = express.Router();


router.get('/:chirprid', async (req, res) => {  
    //chirprid will always be a string even though we want it to be a number in this project
    //therrfore we cast req.params.chirprid as a number as shown below
    const chirprid = Number(req.params.chirprid);
    try{
        res.json({msg: 'single chirp by id' + chirprid });
    } catch (error){
        console.log(error);
        res.status(500).json({msg: 'code is bunk', error: error.message})
    }
});
//this is our first endpoint of our crud operations while not first in order this is best to do first
//writting out to scaffold since it is simple and we can make sure it it works before scafffolding out
router.get('/', async (req, res) => {
    let chirps = await db.chirpr.all();
    try{
        
        res.json({msg: 'all chirps', chirps});
    } catch (error){
        console.log(error);
        res.status(500).json({msg: 'code is bunk', error: error.message})
    }
});

router.post('/', async (req, res) => {
   const newChirp = req.body;
    try{
        res.json({msg: 'added new chirp', ...newChirp });
    } catch (error){
        console.log(error);
        res.status(500).json({msg: 'code is bunk', error: error.message})
    }
});

router.put('/:chirprid', async (req, res) => {  
    const chirprid = Number(req.params.chirprid);
    const editedChirp = req.body;
    try{
        res.json({msg: 'edited chirp by id' + chirprid, ...editedChirp });
    } catch (error){
        console.log(error);
        res.status(500).json({msg: 'code is bunk', error: error.message})
    }
});

router.delete('/:chirprid', async (req, res) => {  
    const chirprid = Number(req.params.chirprid);
    try{
        res.json({msg: 'deleted chirp by id' + chirprid});
    } catch (error){
        console.log(error);
        res.status(500).json({msg: 'code is bunk', error: error.message})
    }
});


export default router; 