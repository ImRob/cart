import React, { Component } from 'react';

export default class ScrollWrapper extends Component {
	constructor(props){
		super(props);
		this.state={
			position:0
		}
	}
	componentDidMount() {
		window.addEventListener('scroll',this.handleScroll);
	}
	handleScroll(){
		console.log('scrolling');
	}
	render() {
		console.log(this.props);
		return (
			<div>
				{React.cloneElement(this.props.children, {foo:this.state.position})}
			</div>
		);
	}
}
