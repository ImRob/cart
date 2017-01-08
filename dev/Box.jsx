import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import ScrollWrapper from './ScrollWrapper'

// console.dir(ScrollWrapper);


var boxBorder={
	border: "1px solid black",
	padding:"10px",
	background:"rgba(0,0,0,.2)"
}

var fixed = {
  position:'fixed',
  top:0
}


// class ScrollWrapper extends

class Box extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    console.log(this.refs.box);
  }
  render() {
    // console.dir(this.props);
    return (
        <div ref="box" style={boxBorder}>im a box </div>
    );
  }
}

let WrappedBox = ()=>{
  return (
    <ScrollWrapper>
      <Box/>
    </ScrollWrapper>
    )
}

module.exports = {WrappedBox};