import React, { Component } from 'react';

export class ColorInfo extends Component {
	constructor(){
		super()
		// this.colorMouseEnter = this.colorMouseEnter.bind(this);
		// this.colorMouseLeave = this.colorMouseLeave.bind(this);
		// this.selectedColor = this.selectedColor.bind(this);
		// this.selectedSize = this.selectedSize.bind(this);

		this.state={
			currentSelection : 0,
			isClicked:false,
			colorSelected:false,
			sizeSelected:false
		}
	}
	colorMouseEnter(e){
		var target = e.target;
		e.preventDefault();

		var itemNo = target.getAttribute('data-number');
		var sizeNumber = target.getAttribute('data-id');
		console.log(sizeNumber);
		this.setState({
			currentSelection:+itemNo
		})
	}
	selectedColor(e){
		var colorId = e.target.getAttribute('data-color');
		console.log('you clicked '+ this.props.colorInfo[colorId].color);
		this.setState({
			isClicked:true
		})
	}
	selectedSize(e){
		var stock = e.target.getAttribute('data-status');
		var size = e.target.getAttribute('data-size');
		if(!stock)return;
		console.log('you selected ' + size);
		this.setState({
			sizeSelected: true
		})

	}
	colorMouseLeave(){
		if(this.state.isClicked){
			console.log('fooo');
			this.setState({
				isClicked:false
			})
			return
		};
		this.setState({
			currentSelection : 0
		})
	}
	render() {
		console.log(this.props.productData.colors[0].color);
		var currentSelection = this.state.currentSelection

		var colors = this.props.productData.colors;
		return (
 			<div className="sizeWrapper">
 				<span className="colors">Color: {colors[currentSelection].color}</span>
 	{colors.map(function(el,ind,arr){
     					return <div onMouseEnter={this.colorMouseEnter} onMouseLeave={this.colorMouseLeave} onClick={this.selectedColor} data-number={ind} className="colorThumbNail" key={ind}> </div>
					},this)}

			</div>
		);
	}
}
