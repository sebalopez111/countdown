import React, { Component } from 'react';
import moment               from 'moment';


function tminus(from) {
  var totalSeconds = moment(from).diff(moment.now()) / 1000;
  
  var days    = Math.floor(totalSeconds / 3600 / 24 );
  totalSeconds = totalSeconds - (days * 24 * 3600); 
  var hours   = Math.floor(totalSeconds / 3600 );
  var minutes = Math.floor(totalSeconds % 3600 / 60);

  return [days, pad(hours, 2), pad(minutes, 2)].join(":");
}

function pad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

function getState(from) {
  return { value : tminus(from) };
}

var CountdownDate = React.createClass({
  
  displayName: 'Countdown',
  
  getInitialState() {
    return getState(this.props.from);
  },
    
  componentDidMount: function() {
    setInterval(() => {
      this.setState(getState(this.props.from));
    }, 1000);
  },
  
  render: function() {
    var headerStyles = {
      'font-size': '2.5rem',
      'text-align': 'center',
      'margin-left': '-18rem',
      'margin-top': '20px'
    };
    
    var footerStyles = {
      'font-size': '3rem',
      'text-align': 'center',
      'margin-left': '15rem'
    };
    
    var valueStyles = {
      'font-size': '10rem',
      'text-align': 'center'
    };
    
    var header = React.createElement('div', { className: 'widget__header' }, this.props.title);
    var content = React.createElement('div', null,
      React.createElement('h1', { className: 'digital', style: valueStyles }, this.state.value)
    );
      
    return React.createElement('div', null, 
      header, 
      content);
  }
  
});

export default {
  Date : CountdownDate
}