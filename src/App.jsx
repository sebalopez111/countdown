import React         from 'react';
import Mozaik        from 'mozaik/browser';

const MozaikComponent = Mozaik.Component.Mozaik;
const ConfigActions   = Mozaik.Actions.Config;

// Mozaik.Registry.addExtension('image', require('mozaik-ext-image'));
// Mozaik.Registry.addExtension('time', require('mozaik-ext-time'));
// Mozaik.Registry.addExtension('weather', require('mozaik-ext-weather'));
Mozaik.Registry.addExtension('Countdown', require('./components/mozaik-ext-countdown/Countdown.js'));

React.render(<MozaikComponent />, document.getElementById('mozaik'));

ConfigActions.loadConfig();