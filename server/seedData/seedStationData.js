import dotenv from 'dotenv'
dotenv.config()

import zStation from "../model/schema.js";
import seedStationData from "./stationSeedData.js";
import { connectDB, closeDB } from "../config/connectDatabase.js";

const seedStationsToDB = async () => {
    await connectDB();

    try {
        await zStation.insertMany(seedStationData);
        console.log("Successfully seeded data to database")
    } catch(error) {
        console.log("There was an error seeding data", error.message);
    } finally {
        await closeDB();
    }
        
};

/*___ FUNCTION ___
Function that seeds the seedStationData array of objects 
to the database when the file is executed.
*/
seedStationsToDB();
