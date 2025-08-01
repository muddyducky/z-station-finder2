import mongoose from 'mongoose'

/*___ SCHEMA ____
zStationSchema defines the document structure for stationData,
including field types, nesting, and validation rules for:
station_name, location (with coordinates), fuel types/prices,
available services, and open hours
_____________________*/
const zStationSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    station_name: { type: String, required: true },
    phone: { type: String },
    location:{
        address: { type: String, required: true },
        city: { type: String, required: true },
        region: { type: String, required: true},
    },
    coordinates: {
        latitude: { type: Number, min: -90, max: 90, required: true },
        longitude: { type: Number, min: -180, max: 180, required: true }
    },
    fuel:[{
        type: { type: String },
        available: { type: Boolean },
        price: { type: Number }
    }],
    open_hours: [{
        open_24_hours: { type: Boolean},
        day: { type: String },
        open: { type: String},
        close: { type: String}
    }],
    services: [{
    name: { type: String, required: true },
    available: { type: Boolean, default: false }
  }]

});

/*___ DATABASE MODEL ___
zStation wraps the zStationSchema and connects to the stationData collection.
It’s exported as the default for reuse across the app
________________________*/
const zStation = mongoose.model('zStation', zStationSchema, 'stationData');
export default zStation;
