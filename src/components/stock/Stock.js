import React, { Component } from 'react';
import moment               from 'moment';

var embeddedScript = '<!-- TradingView Widget BEGIN -->' + 
    ' <script type="text/javascript" src="https://d33t3vvu2t2yu5.cloudfront.net/tv.js"></script>' + 
    ' <script type="text/javascript">' + 
    ' new TradingView.widget({' + 
    '   "autosize": true,' + 
    '   "symbol": "ARRS",' + 
    '   "interval": "D",' + 
    '   "timezone": "Etc/UTC",' + 
    '   "theme": "Grey",' + 
    '   "style": "3",' + 
    '   "locale": "en",' + 
    '   "toolbar_bg": "rgba(7, 55, 99, 1)",' + 
    '   "hide_top_toolbar": true,' + 
    '   "save_image": false,' + 
    '   "details": true,' + 
    '   "hideideas": true' + 
    ' });' + 
    ' </script>' + 
    ' <!-- TradingView Widget END -->'; 

var Stock = React.createClass({
  
  displayName: 'Stock',
  
  render: function() {
    return React.createElement('div', { id: "___stock" }, { __html: embeddedScript });
  }
  
});

export default {
  Stock : Stock
}