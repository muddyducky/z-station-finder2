import zStation from "../model/schema.js";
import searchQuery from "../utils/searchQuery.js";

const searchStationInfo = async (req, res) => {
  const { keyword } = req.query;
  if (!keyword) {
    return res.status(400).json({ message: "No keyword entered" });
  }

  const userSearch = searchQuery(keyword)

    try {
        const results = await zStation.find(userSearch, {
            station_name: 1,
            id: 1,
            _id: 1,
            location: 1,
            coordinates: 1,
            fuel: 1,
            services: 1,
            open_hours: 1,
        });

        if (results.length === 0) {
            return res.status(404).json({ message: "No stations found matching your query." });
        }

        res.status(200).json(results);
    } catch (err) {
        console.error("Search error:", err.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default searchStationInfo;
