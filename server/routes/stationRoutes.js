import express from 'express'
import { getAllStations } from '../controllers/stationController.js'

const router = express.Router();

router.get('/stations', getAllStations)

export default router;