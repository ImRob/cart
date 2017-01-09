import React, { Component } from 'react';

export class SizeInfo extends Component {
	constructor(){
		super()
		this.colorMouseLeave = this.colorMouseLeave.bind(this);
		this.selectedColor = this.selectedColor.bind(this);

		this.state={
			currentSelection : 0,
			colorClicked:false
		}
	}
	selectedColor(e){
		var evt = e;
		var itemNo = evt.target.getAttribute('data-number');
		console.log(e.target.getAttribute('data-image'))

		this.setState({
			currentSelection: +itemNo
		})
		if(evt.type==='click'){
			this.setState({
				colorClicked : true
			})
			this.props.addColor(e)
		}
		this.props.changeImage(e.target.getAttribute('data-image'))
	}
	colorMouseLeave(e){
		var target = e.target;
		var itemNo = e.target.getAttribute('data-number');

		if(this.state.colorClicked)return;

		this.setState({
			currentSelection:0,
			colorClicked:false
		})
		console.log('passing in: ' + e.target.getAttribute('data-image'));
		this.props.changeImage()

	}
	render() {
		var currentSelection = this.state.currentSelection

		var colors = this.props.productData.colors;

		var swatches = colors.map(function(el,ind,arr){
			 		var swatch = {
			 			background:el.hex
			 		}
 					return <div data-number={ind}
 								onMouseEnter={this.selectedColor} 
 								onMouseLeave={this.colorMouseLeave} 
 								onClick={this.selectedColor} 
 								data-color={el.color} 
 								data-image={el.productImage}
 								className={`colorThumbNail ${currentSelection===ind ? 'on' : ''}`} 
 								key={ind} 
 								style={swatch}> 
							</div>
				},this)
		return (
 			<div className="sizeWrapper">
 				<span className="colors">Color: {colors[currentSelection].color}</span>
 				{swatches}
			 	<span className="sizes">SIZE:</span>
			 	<hr/>
				<ul className="sizeBox">
					{colors[currentSelection].sizes.map(function(el, ind, arr){
						return <li onClick={this.props.addSize} data-size={el.size} data-status={el.status} key={ind}>{el.size}</li>
					},this)}
					</ul>
			</div>
		);
	}
}
