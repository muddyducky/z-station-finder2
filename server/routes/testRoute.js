import express from 'express';
import zStation from '../model/schema.js';

/*___ IMPORTS and ROUTES ___
express is imported to create a modular Router instance .
zStation, the database model, is imported to query the stationData collection 
inside the test route.
_________________*/
const router = express.Router();

router.get('/test', async (req, res) => {
    try {
        const testData = await zStation.find({}).limit(1);
        res.json(testData)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
});

export default router;