import { useState } from 'react';
import axios from 'axios';

export function UseSearchStations() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchStations = async ({ keyword }) => {
    setLoading(true);

    try {
      const response = await axios.get('/api/search', {
        params: { keyword }
      });

      const results = response.data.map((station) => ({
        id: station._id,
        name: station.station_name,
        phone: station.phone,
        location: {
          address: station.location?.address,
          city: station.location?.city,
          region: station.location?.region
        },
        fuel: Array.isArray(station.fuel)
          ? station.fuel.map((f) => ({
              type: f.type,
              available: f.available,
              price: f.price
            }))
          : [],
        coordinates: {
          latitude: station.coordinates?.latitude ?? null,
          longitude: station.coordinates?.longitude ?? null
        },        
        services: Array.isArray(station.services)
          ? station.services.map((service) => ({
                _id: service._id,
                name: service?.name,
                available: service.available
              }))
          : [],
        openHours: Array.isArray(station.open_hours)
              ? station.open_hours.map((o_h) => ({
                day: o_h.day,
                open: o_h.open,
                close: o_h.close,
                open24Hours: o_h.open_24_hours,
              }))
              : [],
      }));

      setSearchResults(results);
    } catch (err) {
      console.error('Failed to search stations:', err);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  return { searchStations, searchResults, loading };
}

