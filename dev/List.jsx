import React from 'react';
import ReactDOM from 'react-dom';
// import {Button} from './Button';

class List extends React.Component{
	constructor(){
		super()
		this.state={
			name: 'rob'
		}
	}
	render(){
		return(

			<div>
				<h1> hello {this.state.name}</h1>
				{this.props.children}
			</div>
		)
	}
}

module.exports = List;