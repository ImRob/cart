import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {ProductImage} from './ProductImage';
import {Checkout} from './Checkout';
import {ProductInfo} from './ProductInfo';
import {SizeInfo} from './SizeInfo';
import {BuyButton} from './BuyButton';
import {Lightbox} from './Lightbox';
import {Topnav} from './Topnav';
import {Sidebar} from './Sidebar';


export class ProductPage extends Component {
	constructor(props){
		super(props)
		this.state={
			items:[],
			item :{
				productName:this.props.productData.productName,
				price:this.props.productData.price,
				productNumber:this.props.productData.productNumber,
				color:'',
				size:''	
			},
			mainImage:this.props.productData.featureImage[0]
		}
		this.addColor = this.addColor.bind(this);
		this.addItem = this.addItem.bind(this);
		this.addSize = this.addSize.bind(this);
		this.quantity = this.quantity.bind(this);
		this.changeImage = this.changeImage.bind(this);
	}
	addSize(e){
		var size = e.target.getAttribute('data-size');
		var status = e.target.getAttribute('data-status');
		if(status=='false')return;

		var itemCopy = Object.assign({}, this.state.item);
		itemCopy.size = size;

		this.setState({
			item: itemCopy
		})

	}
	addColor(e){
		var color = e.target.getAttribute('data-color');
		var itemCopy = Object.assign( {}, this.state.item );

		itemCopy.color = color;

		this.setState({
			item: itemCopy
		})
	}
	resetItemObj(){
		return {
			productName:this.props.productData.productName,
			price:this.props.productData.price,
			productNumber:this.props.productData.productNumber,
			color:'',
			size:''	
		}
	}
	changeImage(e = this.props.productData.featureImage[0]){
		// var defaultImage = this.props.productData.featureImage[0];
		console.log('changeImage');
		// var image = e.target ? e.target.getAttribute('data-image') : e;
		console.log(e);
		this.setState({
			mainImage : e
		})
	}
	isObjectValid(obj){
		var valid = true;
		var itemsCopy = [...this.state.items];

		Object.keys(obj).forEach(function(el, ind, arr){
			if (!obj[el]){
				valid = false;
			}
		})
		return valid
	}
	quantity(select){
		this.foo = select;
	}
	addItem(){
		var itemsCopy = [...this.state.items];
		var itemCopy = Object.assign( {} , this.state.item );
		var selector = document.getElementById('selector');

		if(!this.isObjectValid(itemCopy))return;

		for (var i=0; i<selector.value ;i++){
			itemsCopy.push(itemCopy);
		}

		this.setState({
			items : itemsCopy,
			item : this.resetItemObj()
		},function(){
			selector.value =1;
		})
	}
	render() {
		return (
			<div>
				<Checkout {...this.props} {...this.state}/>
				<Topnav/>
				<div className="productBox">
					<Sidebar/>
					<Lightbox {...this.props} {...this.state} changeImage={this.changeImage}/>
					<div className="productInfoBox">
						<ProductInfo {...this.state} {...this.props} changeHandler={this.quantity}/>
						<SizeInfo addColor={this.addColor} addSize={this.addSize} changeImage={this.changeImage} {...this.props} {...this.state}/>
						<BuyButton ref="button" clickHandler={this.addItem}/>
					</div>
				</div>
			</div>
		);
	}
}

