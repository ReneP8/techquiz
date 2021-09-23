import express from 'express';
import { getTopics } from '../controllers/topics.js';

const router = express.Router();

router.get('/', getTopics)

export default router;