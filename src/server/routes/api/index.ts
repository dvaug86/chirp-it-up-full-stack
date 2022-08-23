import * as express from 'express';
import chirprRouter from  './chirprRoutes';

const router = express.Router();

router.use('/chirpr', chirprRouter);

export default router; 