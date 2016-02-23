import React, { Component } from 'react';
import moment               from 'moment';

var CountdownDate = React.createClass({
  
  displayName: 'Countdown',
  
  render: function() {
    var headerStyles = {
      'font-size': '2.5rem',
      'padding-left': '40px',
      'margin-top': '20px'
    };
    
    var footerStyles = {
      'font-size': '3rem',
      'text-align': 'right',
      'padding-right': '20px'
    };
    
    var valueStyles = {
      'font-size': '10rem',
      'text-align': 'center'
    };
    
    var header = React.createElement('div', { className: 'widget__header' }, this.props.title);
    var content = React.createElement('div', null,
      React.createElement('div',  { style: headerStyles }, 'Still '),
      React.createElement('h1', { style: valueStyles }, moment(this.props.from).diff(moment.now(), 'days')),
      React.createElement('div',  { style: footerStyles }, 'days... '));
      
    return React.createElement('div', null, 
      header, 
      content);
  }
  
});

export default {
  Date : CountdownDate
}