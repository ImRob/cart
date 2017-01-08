import React, { Component } from 'react';

export class BuyButton extends Component {
	render() {
		return (
			<div onClick={this.props.clickHandler} className="buyButton">Buy</div>
		);
	}
}
