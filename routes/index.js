import { Router } from 'express';
import petsRouter from "./pets";
const router = Router();

router.use('/pets', petsRouter);

export default router;
