// Load environment variables from .env file if available
require('dotenv').load();

var config = {
  env: 'prod',

  host: '0.0.0.0',
  port: process.env.PORT || 5100,

  theme: 'night-blue',

  // clients configs
  api: {
  },

  // define duration beetwen each dashboard rotation (ms)
  rotationDuration: 4000,

  dashboards: [
    {
      columns: 3, rows: 2,
      widgets: [
        {
          type: 'Countdown.date',
          from: '2016-04-22',
          title: 'Countdown!',
          header: 'Still',
          footer: 'days until...', 
          unit: 'days', 
          columns: 3, rows: 2,    // Size 
          x: 0, y: 0              // Position 
        }
      ]
    }
  ]
};

module.exports = config;