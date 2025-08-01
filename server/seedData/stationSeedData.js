const seedStationData = [
  {
    "id": 1,
    "station_name": "Z Kumeu",
    "phone": "09 412 9211",
    "location": {
      "address": "Main Rd, Kumeu 0810",
      "city": "Kumeu",
      "region": "Auckland"
    },
    "coordinates": {
      "latitude": -36.7754,
      "longitude": 174.5411
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.84 },
      { "type": "95", "available": true, "price": 3.04 },
      { "type": "Diesel", "available": true, "price": 2.49 }
    ],
   "open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Toilets", "available": true },
      { "name": "Car Wash", "available": true },
      { "name": "Food", "available": true }
    ]
  },
  {
    "id": 2,
    "station_name": "Z Ponsonby",
    "phone": "09 360 0663",
    "location": {
      "address": "99 Ponsonby Rd, Auckland 1011",
      "city": "Auckland",
      "region": "Auckland"
    },
    "coordinates": {
      "latitude": -36.8565,
      "longitude": 174.7453
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.89 },
      { "type": "Diesel", "available": true, "price": 2.52 }
    ],
   "open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Toilets", "available": true },
      { "name": "EV Charging", "available": false },
      { "name": "Z Espresso", "available": true },
      { "name": "Food", "available": true }

    ]
  },
  {
    "id": 3,
    "station_name": "Z Manurewa",
    "phone": "09 267 4009",
    "location": {
      "address": "54 Great South Rd, Manurewa, Auckland 2102",
      "city": "Manurewa",
      "region": "Auckland"
    },
    "coordinates": {
      "latitude": -37.0059,
      "longitude": 174.8922
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.82 },
      { "type": "Diesel", "available": true, "price": 2.45 }
    ],
    "open_hours": [
      {
        "open_24_hours": false,
        "day": "Daily",
        "open": "06:00",
        "close": "22:00"
      }
    ],
    "services": [
      { "name": "Toilets", "available": true },
      { "name": "LPG Swap", "available": true },
      { "name": "Food", "available": true }
    ]
  },
    {
    "id": 4,
    "station_name": "Z Huntly",
    "phone": "07 828 9844",
    "location": {
      "address": "409 Main St, Huntly 3700",
      "city": "Huntly",
      "region": "Waikato"
    },
    "coordinates": {
      "latitude": -37.5562,
      "longitude": 175.1551
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.79 },
      { "type": "Diesel", "available": true, "price": 2.44 }
    ],
    "open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Toilets", "available": true },
      { "name": "Trailer Hire", "available": false },
      { "name": "Food", "available": true }
    ]
  },
  {
    "id": 5,
    "station_name": "Z Ngatea",
    "phone": "07 867 7088",
    "location": {
      "address": "18 Orchard West Rd, Ngatea 3503",
      "city": "Ngatea",
      "region": "Waikato"
    },
    "coordinates": {
      "latitude": -37.2835,
      "longitude": 175.4991
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.80 },
      { "type": "95", "available": true, "price": 3.01 },
      { "type": "Diesel", "available": true, "price": 2.42 }
    ],
    "open_hours": [
      {
        "open_24_hours": false,
        "day": "Daily",
        "open": "07:00",
        "close": "20:00"
      }
    ],
    "services": [
      { "name": "Toilets", "available": true },
      { "name": "Z Espresso", "available": false },
      { "name": "Car Wash", "available": false }
    ]
  },
  {
    "id": 6,
    "station_name": "Z Stadium (Hamilton)",
    "phone": "07 849 1116",
    "location": {
      "address": "5 Avalon Dr, Nawton, Hamilton 3200",
      "city": "Hamilton",
      "region": "Waikato"
    },
    "coordinates": {
      "latitude": -37.7717,
      "longitude": 175.2431
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.83 },
      { "type": "Diesel", "available": true, "price": 2.47 }
    ],
    "open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Toilets", "available": true },
      { "name": "EV Charging", "available": false },
      { "name": "Food", "available": true }
    ]
  },
  {
    "id": 7,
    "station_name": "Z Masterton",
    "phone": "06 377 0017",
    "location": {
      "address": "205 Chapel St, Masterton 5810",
      "city": "Masterton",
      "region": "Wellington"
    },
    "coordinates": {
      "latitude": -40.9566,
      "longitude": 175.6544
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.85 },
      { "type": "Diesel", "available": true, "price": 2.50 }
    ],
    "open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Toilets", "available": true },
      { "name": "Z Espresso", "available": true },
      { "name": "LPG Swap", "available": true }
    ]
  },
  {
    "id": 8,
    "station_name": "Z Trentham",
    "phone": "04 528 6392",
    "location": {
      "address": "680 Fergusson Dr, Trentham, Upper Hutt 5018",
      "city": "Upper Hutt",
      "region": "Wellington"
    },
    "coordinates": {
      "latitude": -41.1233,
      "longitude": 175.0721
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.84 },
      { "type": "95", "available": true, "price": 3.05 }
    ],
    "open_hours": [
      {
        "open_24_hours": false,
        "day": "Daily",
        "open": "06:00",
        "close": "22:00"
      }
    ],
    "services": [
      { "name": "Toilets", "available": true },
      { "name": "Car Wash", "available": false },
      { "name": "Food", "available": true }
    ]
  },
  {
    "id": 9,
    "station_name": "Z Johnsonville",
    "phone": "04 478 7186",
    "location": {
      "address": "33 Johnsonville Rd, Johnsonville, Wellington 6037",
      "city": "Wellington",
      "region": "Wellington"
    },
    "coordinates": {
      "latitude": -41.2235,
      "longitude": 174.8023
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.86 },
      { "type": "Diesel", "available": true, "price": 2.51 }
    ],
"open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Toilets", "available": true },
      { "name": "Z Espresso", "available": true },
      { "name": "EV Charging", "available": false }
    ]
  },
  {
    "id": 10,
    "station_name": "Z Rutherford Street",
    "phone": "03 548 1682",
    "location": {
      "address": "72 Rutherford Street",
      "city": "Nelson",
      "region": "Nelson"
    },
    "coordinates": {
      "latitude": -41.2748,
      "longitude": 173.2834
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.79 },
      { "type": "95", "available": true, "price": 2.91 },
      { "type": "Diesel", "available": true, "price": 2.25 }
    ],
"open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Toilets", "available": true },
      { "name": "Car Wash", "available": false },
      { "name": "ATM", "available": true }
    ]
  },
  {
    "id": 11,
    "station_name": "Z Stoke",
    "phone": "03 547 3211",
    "location": {
      "address": "518 Main Road Stoke",
      "city": "Nelson",
      "region": "Nelson"
    },
    "coordinates": {
      "latitude": -41.3041,
      "longitude": 173.2463
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.77 },
      { "type": "Diesel", "available": true, "price": 2.22 }
    ],
"open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Toilets", "available": true },
      { "name": "Car Wash", "available": true },
      { "name": "LPG", "available": true }
    ]
  },
  {
    "id": 12,
    "station_name": "Z Nelson Port Truck Stop",
    "phone": "03 548 0559",
    "location": {
      "address": "35 Vickerman Street",
      "city": "Nelson",
      "region": "Nelson"
    },
    "coordinates": {
      "latitude": -41.2607,
      "longitude": 173.2756
    },
    "fuel": [
      { "type": "Diesel", "available": true, "price": 2.19 }
    ],
    "open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Truckstop", "available": true },
      { "name": "Toilets", "available": false }
    ]
  },
  {
    "id": 13,
    "station_name": "Z Picton",
    "phone": "03 573 6114",
    "location": {
      "address": "112 High Street",
      "city": "Picton",
      "region": "Marlborough"
    },
    "coordinates": {
      "latitude": -41.2921,
      "longitude": 174.0053
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.85 },
      { "type": "Diesel", "available": true, "price": 2.29 }
    ],
    "open_hours": [
      {
        "open_24_hours": false,
        "day": "Daily",
        "open": "06:00",
        "close": "22:00"
      }
    ],
    "services": [
      { "name": "Toilets", "available": true },
      { "name": "LPG", "available": false }
    ]
  },
  {
    "id": 14,
    "station_name": "Z Springlands",
    "phone": "03 578 3445",
    "location": {
      "address": "184 Middle Renwick Road",
      "city": "Blenheim",
      "region": "Marlborough"
    },
    "coordinates": {
      "latitude": -41.5148,
      "longitude": 173.9225
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.76 },
      { "type": "95", "available": true, "price": 2.89 },
      { "type": "Diesel", "available": true, "price": 2.21 }
    ],
    "open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "ATM", "available": true },
      { "name": "LPG", "available": true }
    ]
  },
  {
    "id": 15,
    "station_name": "Z Grove Rd & Budge Street",
    "phone": "03 577 9981",
    "location": {
      "address": "31 Grove Road",
      "city": "Blenheim",
      "region": "Marlborough"
    },
    "coordinates": {
      "latitude": -41.5116,
      "longitude": 173.9572
    },
    "fuel": [
      { "type": "Diesel", "available": true, "price": 2.23 }
    ],
    "open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Truckstop", "available": true },
      { "name": "Toilets", "available": false }
    ]
  },
   {
    "id": 16,
    "station_name": "Z Greymouth",
    "phone": "03 768 5130",
    "location": {
      "address": "81 Tainui Street",
      "city": "Greymouth",
      "region": "West Coast"
    },
    "coordinates": {
      "latitude": -42.4505,
      "longitude": 171.2088
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.75 },
      { "type": "Diesel", "available": true, "price": 2.19 }
    ],
    "open_hours": [
      {
        "open_24_hours": false,
        "day": "Daily",
        "open": "06:00",
        "close": "22:00"
      }
    ],
    "services": [
      { "name": "Toilets", "available": true },
      { "name": "Car Wash", "available": false }
    ]
  },
  {
    "id": 17,
    "station_name": "Z Greymouth Truckstop",
    "phone": "03 768 8586",
    "location": {
      "address": "31 Arney Street",
      "city": "Greymouth",
      "region": "West Coast"
    },
    "coordinates": {
      "latitude": -42.4518,
      "longitude": 171.2044
    },
    "fuel": [
      { "type": "Diesel", "available": true, "price": 2.18 }
    ],
"open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Truckstop", "available": true },
      { "name": "Toilets", "available": false }
    ]
  },
   {
    "id": 18,
    "station_name": "Z Kawerau",
    "phone": "07 323 8449",
    "location": {
      "address": "99 River Road, Kawerau 3127",
      "city": "Kawerau",
      "region": "Bay of Plenty"
    },
    "coordinates": {
      "latitude": -38.0967,
      "longitude": 176.6931
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.75 },
      { "type": "Diesel", "available": true, "price": 2.35 }
    ],
    "open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Toilets", "available": true },
      { "name": "Z Espress", "available": true },
      { "name": "Trailer Hire", "available": false }
    ]
  },
  {
    "id": 19,
    "station_name": "Z Fenton Street",
    "phone": "07 347 7772",
    "location": {
      "address": "120 Fenton Street, Rotorua 3010",
      "city": "Rotorua",
      "region": "Bay of Plenty"
    },
    "coordinates": {
      "latitude": -38.1426,
      "longitude": 176.2506
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.77 },
      { "type": "95", "available": true, "price": 2.91 },
      { "type": "Diesel", "available": true, "price": 2.36 }
    ],
    "open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Car Wash", "available": true },
      { "name": "Z Espress", "available": true }
    ]
  },
  {
    "id": 20,
    "station_name": "Z Whakatāne",
    "phone": "07 308 7136",
    "location": {
      "address": "91 Commerce Street, Whakatāne 3120",
      "city": "Whakatāne",
      "region": "Bay of Plenty"
    },
    "coordinates": {
      "latitude": -37.9555,
      "longitude": 176.9856
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.76 },
      { "type": "Diesel", "available": true, "price": 2.33 }
    ],
    "open_hours": [
      { "open_24_hours": false, "day": "Weekdays", "open": "06:00", "close": "22:00" },
      { "open_24_hours": false, "day": "Weekends", "open": "07:00", "close": "21:00" }
    ],
    "services": [
      { "name": "Trailer Hire", "available": true },
      { "name": "Z Espress", "available": true }
    ]
  },
  {
    "id": 21,
    "station_name": "Z Rutherford",
    "phone": "03 548 4206",
    "location": {
      "address": "163 Rutherford Street, Nelson 7010",
      "city": "Nelson",
      "region": "Nelson"
    },
    "coordinates": {
      "latitude": -41.2777,
      "longitude": 173.2841
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.89 },
      { "type": "Diesel", "available": true, "price": 2.46 }
    ],
   "open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Z Espress", "available": true },
      { "name": "Toilets", "available": true }
    ]
  },
  {
    "id": 22,
    "station_name": "Z Stoke",
    "phone": "03 547 0166",
    "location": {
      "address": "514 Main Road Stoke, Nelson 7011",
      "city": "Stoke",
      "region": "Nelson"
    },
    "coordinates": {
      "latitude": -41.3105,
      "longitude": 173.2481
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.87 },
      { "type": "Diesel", "available": true, "price": 2.44 }
    ],
   "open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Car Wash", "available": false },
      { "name": "Z Espress", "available": true }
    ]
  },
  {
    "id": 23,
    "station_name": "Z Nelson Port Truck Stop",
    "phone": "03 548 5480",
    "location": {
      "address": "Port Nelson, Vickerman St, Nelson 7010",
      "city": "Nelson",
      "region": "Nelson"
    },
    "coordinates": {
      "latitude": -41.2663,
      "longitude": 173.2793
    },
    "fuel": [
      { "type": "Diesel", "available": true, "price": 2.40 }
    ],
   "open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Truck Stop", "available": true },
      { "name": "Car Wash", "available": false }
    ]
  },
   {
    "id": 24,
    "station_name": "Z Picton",
    "phone": "03 573 6179",
    "location": {
      "address": "45 Auckland Street, Picton 7220",
      "city": "Picton",
      "region": "Marlborough"
    },
    "coordinates": {
      "latitude": -41.2903,
      "longitude": 174.0080
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.93 },
      { "type": "Diesel", "available": true, "price": 2.48 }
    ],
    "open_hours": [
      { "open_24_hours": false, "day": "Daily", "open": "06:00", "close": "22:00" }
    ],
    "services": [
      { "name": "Toilets", "available": true },
      { "name": "Z Espress", "available": true }
    ]
  },
  {
    "id": 25,
    "station_name": "Z Springlands",
    "phone": "03 578 0046",
    "location": {
      "address": "7 Battys Road, Springlands, Blenheim 7201",
      "city": "Blenheim",
      "region": "Marlborough"
    },
    "coordinates": {
      "latitude": -41.5205,
      "longitude": 173.9292
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.91 },
      { "type": "Diesel", "available": true, "price": 2.47 }
    ],
   "open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Car Wash", "available": true },
      { "name": "Z Espress", "available": true }
    ]
  },
  {
    "id": 26,
    "station_name": "Z Grove Rd & Budge Street",
    "phone": "03 577 5188",
    "location": {
      "address": "Grove Rd & Budge Street, Blenheim 7201",
      "city": "Blenheim",
      "region": "Marlborough"
    },
    "coordinates": {
      "latitude": -41.5090,
      "longitude": 173.9575
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.92 },
      { "type": "Diesel", "available": true, "price": 2.45 }
    ],
    "open_hours": [
      { "open_24_hours": false, "day": "Daily", "open": "06:00", "close": "21:00" }
    ],
    "services": [
      { "name": "Z Espress", "available": false },
      { "name": "Toilets", "available": true }
    ]
  },
  {
    "id": 27,
    "station_name": "Z Greymouth",
    "phone": "03 768 4039",
    "location": {
      "address": "164 Tainui St",
      "city": "Greymouth",
      "region": "West Coast"
    },
    "coordinates": {
      "latitude": -42.4542,
      "longitude": 171.2011
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.89 },
      { "type": "95", "available": true, "price": 3.09 },
      { "type": "Diesel", "available": true, "price": 2.49 }
    ],
   "open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Toilets", "available": true },
      { "name": "Car Wash", "available": false },
      { "name": "Pay at Pump", "available": true }
    ]
  },
  {
    "id": 28,
    "station_name": "Z Greymouth Truckstop",
    "phone": "0800 474 355",
    "location": {
      "address": "Arney St",
      "city": "Greymouth",
      "region": "West Coast"
    },
    "coordinates": {
      "latitude": -42.4562,
      "longitude": 171.1975
    },
    "fuel": [
      { "type": "Diesel", "available": true, "price": 2.45 }
    ],
   "open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Truck Diesel", "available": true },
      { "name": "Trailer Parking", "available": true }
    ]
  },
  {
    "id": 29,
    "station_name": "Z Rangiora",
    "phone": "03 313 6985",
    "location": {
      "address": "Ashley Street",
      "city": "Rangiora",
      "region": "Canterbury"
    },
    "coordinates": {
      "latitude": -43.3032,
      "longitude": 172.5956
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.84 },
      { "type": "95", "available": true, "price": 3.06 },
      { "type": "Diesel", "available": true, "price": 2.46 }
    ],
    "open_hours": [
      { "open_24_hours": false, "day": "Weekdays", "open": "06:00", "close": "22:00" },
      { "open_24_hours": false, "day": "Weekends", "open": "07:00", "close": "21:00" }
    ],
    "services": [
      { "name": "Toilets", "available": true },
      { "name": "Z Espresso", "available": true },
      { "name": "EV Charging", "available": false }
    ]
  },
  {
    "id": 30,
    "station_name": "Z Russley",
    "phone": "03 342 9035",
    "location": {
      "address": "471 Russley Road",
      "city": "Christchurch",
      "region": "Canterbury"
    },
    "coordinates": {
      "latitude": -43.5041,
      "longitude": 172.545
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.89 },
      { "type": "95", "available": true, "price": 3.12 },
      { "type": "Diesel", "available": true, "price": 2.47 }
    ],
   "open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Toilets", "available": true },
      { "name": "Truck Diesel", "available": true }
    ]
  },
  {
    "id": 31,
    "station_name": "Z Rolleston",
    "phone": "03 347 9921",
    "location": {
      "address": "Main South Road",
      "city": "Rolleston",
      "region": "Canterbury"
    },
    "coordinates": {
      "latitude": -43.5891,
      "longitude": 172.3833
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.87 },
      { "type": "Diesel", "available": true, "price": 2.43 }
    ],
    "open_hours": [
      { "open_24_hours": false, "day": "Daily", "open": "05:30", "close": "23:00" }
    ],
    "services": [
      { "name": "Toilets", "available": true },
      { "name": "LPG Bottle Swap", "available": true },
      { "name": "Z Espresso", "available": true }
    ]
  },
  {
    "id": 32,
    "station_name": "Z Gore",
    "phone": "03 208 4341",
    "location": {
      "address": "Main Street",
      "city": "Gore",
      "region": "Southland"
    },
    "coordinates": {
      "latitude": -46.1029,
      "longitude": 168.9434
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.82 },
      { "type": "Diesel", "available": true, "price": 2.41 }
    ],
    "open_hours": [
      { "open_24_hours": false, "day": "Weekdays", "open": "06:30", "close": "21:00" },
      { "open_24_hours": false, "day": "Weekends", "open": "07:30", "close": "20:00" }
    ],
    "services": [
      { "name": "Z Espresso", "available": true },
      { "name": "Pay at Pump", "available": true },
      { "name": "Toilets", "available": true }
    ]
  },
  {
    "id": 33,
    "station_name": "Z Gladstone",
    "phone": "03 218 6163",
    "location": {
      "address": "Tay Street",
      "city": "Invercargill",
      "region": "Southland"
    },
    "coordinates": {
      "latitude": -46.4132,
      "longitude": 168.3613
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.83 },
      { "type": "95", "available": true, "price": 3.04 },
      { "type": "Diesel", "available": true, "price": 2.42 }
    ],
   "open_hours": [
    {
      "open_24_hours": true,
      "day": null,
      "open": null,
      "close": null,
    }
   ],
    "services": [
      { "name": "Toilets", "available": true },
      { "name": "EV Charging", "available": false },
      { "name": "LPG Bottle Swap", "available": true }
    ]
  },
  {
    "id": 34,
    "station_name": "Z Dee Street",
    "phone": "03 214 4282",
    "location": {
      "address": "171 Dee Street",
      "city": "Invercargill",
      "region": "Southland"
    },
    "coordinates": {
      "latitude": -46.4126,
      "longitude": 168.3498
    },
    "fuel": [
      { "type": "91", "available": true, "price": 2.85 },
      { "type": "Diesel", "available": true, "price": 2.43 }
    ],
    "open_hours": [
      { "open_24_hours": false, "day": "Daily", "open": "06:00", "close": "22:00" }
    ],
    "services": [
      { "name": "Z Espresso", "available": true },
      { "name": "Car Wash", "available": false },
    ]
  }
];

export default seedStationData;