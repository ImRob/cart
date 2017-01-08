import React, { Component } from 'react';
import {ProductInfo} from './ProductInfo';
import {SizeInfo} from './SizeInfo';
import {BuyButton} from './BuyButton';

export class ProductDetailContainer extends Component {
	render() {
		console.log(this.props);
		return (
			<div className="ProductDetailContainer">
				<ProductInfo {...this.props}/>
				<SizeInfo {...this.props}/>
				<BuyButton clickHandler ={this.props.clickHandler}/>
			</div>
		);
	}
}
