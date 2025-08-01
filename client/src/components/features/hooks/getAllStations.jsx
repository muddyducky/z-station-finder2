import { useState, useEffect } from 'react';
import axios from 'axios';

export const useStations = () => {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/stations')
      .then(response => {
        const data = response.data.map(station => ({
          id: station.id,
          name: station.station_name,
          openHours: station.open_hours.map(o_h => ({
            day: o_h.day,
            open: o_h.open,
            close: o_h.close,
            is24h: o_h.open_24_hours
          })),
          services: station.services.map(service => ({
            name: service.name,
            available: service.available
          })),
          coordinates: station.coordinates,
          location: {
            address: station.location.address,
            city: station.location.city,
            region: station.location.region
          }
        }));

        setStations(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch stations', error);
        setLoading(false);
      });
  }, []);

  return { stations, loading };
};

