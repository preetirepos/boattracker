import express from 'express';

import { getBoats, createBoats } from '../controllers/boats.js';

const router = express.Router();

router.get('/', getBoats);
router.get('/', createBoats);

export default router;