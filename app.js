require('babel/register')({
    only: /node_modules\/mozaik[^/]*\/src/
});

var mozaik = new (require('mozaik'))(require('./config'));

//mozaik.bus.registerApi('image',  require('mozaik-ext-image/client'));
mozaik.bus.registerApi('weather',  require('mozaik-ext-weather/client'));
//mozaik.bus.registerApi('json',  require('mozaik-ext-json/client'));

mozaik.startServer();
