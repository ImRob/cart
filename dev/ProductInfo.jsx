import React, { Component } from 'react';

export class ProductInfo extends Component{
	constructor(){
		super()
		this.state={
			value:1
		}
		this.picker= this.picker.bind(this);
	}
	picker(e){
		console.log(e.target.value);
		this.setState({
			value:+e.target.value
		})
		this.props.changeHandler(this.refs.select);
	}
    render(){
        let {productName, productNumber, price} = this.props.productData;

	    return (
	        <div className="productInfo">   
	             <h1>{productName}</h1>
	             <span className="itemNumber">item: {productNumber}</span>
	             <span className="itemPrice">$ {price}</span>
	     
	             <span className="itemQuantity"> quantity 
	                <select id="selector" key="a" ref="select">
	                    <option value="1">1</option>
	                    <option value="2">2</option>
	                    <option value="3">3</option>
	                </select>
	             </span>
	        </div>
	        )
    }
}