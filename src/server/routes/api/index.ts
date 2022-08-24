import * as express from 'express';
import chirprRouter from  './chirprRoutes';
import usersRouter from './usersRoutes';

const router = express.Router();

router.use('/chirps', chirprRouter); //the '/chirps' is for the address so that is localhost:3000/api/chirps
router.use('/users', usersRouter);
export default router; 