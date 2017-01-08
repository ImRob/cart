import React, { Component } from 'react';
import {Topnav} from './Topnav';
import data from './productData';
import {ProductPage} from './ProductPage';


export class ProductPageController extends Component {
	constructor(){
		super()
		/*
			productData is the data from the server
		*/
		let {productData} = data;
		this.state={
			productData
		}
	}
	render() {
		return (
			<ProductPage {...this.state}/>
		);
	}
}
