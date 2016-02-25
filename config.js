// Load environment variables from .env file if available
require('dotenv').load();

var config = {
  env: 'prod',

  host: '0.0.0.0',
  port: process.env.PORT || 5100,

  theme: 'night-blue-countdown',

  // clients configs
  api: {
    weather: {
      apiToken: '059af4e4ea9461305917b71f21b1a8a3'
    }
  },

  // define duration beetwen each dashboard rotation (ms)
  rotationDuration: 4000,

  dashboards: [
    {
      columns: 3, rows: 2,
      widgets: [
        {
          type: 'Countdown.date',
          from: process.env.FROM || '2016-04-22T18:00:00-3',
          title: 'Countdown!',
          header: 'Still',
          footer: 'days until...', 
          unit: 'days', 
          columns: 3, rows: 1,    // Size 
          x: 0, y: 0              // Position 
        },
  
        {
            type:    'weather.weather',
            city:    'Cordoba',
            country: 'AR',
            lang:    'es',
            limit:   3,
            columns: 1, rows: 1, x: 0, y: 1
        },
              
        {
          type: 'time.clock',
          info: 'timezone',
          columns: 1, rows: 1, x: 1, y: 1
        },
        
        {
          type: 'image.image',
          title: 'ARRS',
          url: 'https://www.google.com/finance/getchart?q=ARRS&p=3d&i=100',
          backgroundSize: 'cover',
          refreshInterval: 60,
          columns: 1, rows: 1,
          x: 2, y: 1
        }
        
        // {
        //   type: 'Stock.stock',
        //   columns: 1, rows: 1, x: 2, y: 1
        // }
        
      ]
    }
  ]
};

module.exports = config;