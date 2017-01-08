import React, { Component } from 'react';

export class Checkout extends Component {
	constructor(){
		super();
	}  


	render() {
		return (
			<div className="checkOutWrapper">
				<div className="checkOutContainer"><span>Shopping Bag ({this.props.items.length})</span> </div>
			</div>
		);
	}
}
