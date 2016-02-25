import React, { Component } from 'react';
import moment               from 'moment';

function getState(from) {
  return { value : moment(from).diff(moment.now(), 'days') };
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
      React.createElement('div',  { style: headerStyles }, this.props.header),
      React.createElement('h1', { style: valueStyles }, this.state.value),
      React.createElement('div',  { style: footerStyles }, this.props.footer));
      
    return React.createElement('div', null, 
      header, 
      content);
  }
  
});

export default {
  Date : CountdownDate
}