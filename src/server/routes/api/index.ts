import * as express from 'express';
import chirprRouter from  './chirpr';

const router = express.Router();

router.use('/chirpr', chirprRouter);

export default router; 