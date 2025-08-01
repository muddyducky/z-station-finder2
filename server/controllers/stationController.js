import zStation from "../model/schema.js";

export const getAllStations = async (req, res) => {
    try {
        const stations = await zStation.find({});
        res.status(200).json(stations)
    } catch (err) {
        console.error("There was an error fetching stations", err.message)
        res.status(500).json({ error: "Failed to fetch stations"})
    }
}