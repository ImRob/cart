import React, { Component } from 'react';
import Thumbnail from './Thumbnail';


export class Lightbox extends Component {
	constructor(props){
		super(props)
		this.state={
			fullScreen:false,
			currentImage:0,
			top:0,
			left:0
		}
		this.selectItem = this.selectItem.bind(this);
		this.enlarge = this.enlarge.bind(this);
		this.showDetail = this.showDetail.bind(this);
		this.hideDetail = this.hideDetail.bind(this);
	}
	selectItem(e){
		var img = e.target.getAttribute('data-img');
		this.setState({
			currentImage: img
		})
		console.log('fooo');
		console.log(e.target.getAttribute('data-src'));
		// console.log(this.refs.foo.getAttribute('src'));
		this.props.changeImage(e.target.getAttribute('data-src'))
	}
	hideDetail(){
		this.setState({
			fullScreen:false
		})
		// this.props.changeImage(this.default)
	}
	showDetail(){
		this.setState({
			fullScreen:true
		})
	}
	enlarge(e){
		// var node = this.refs.MainImage;
		var target = e.target.getBoundingClientRect();

		this.setState({
			left:'-' + ((e.clientX - target.left) * 2)+'px',
			top: '-' + ((e.clientY - target.top) * 2)+'px'
		})
	}
	render() {
		return (
				<div className="ProductImage">
				
						<img ref="MainImage"
							onMouseMove={this.enlarge} 
							onMouseEnter={this.showDetail}
							onMouseLeave={this.hideDetail}
							className="MainImage" 
							src={'/prod/'+ this.props.mainImage} />
					<div className="ProductThumbnails">
					{this.props.productData.featureImage.map(function(img, ind) {
						return <img onClick={this.selectItem} className="Thumnails" data-src={img} data-img={ind} key={ind} src={'/prod/'+img}/>
					},this)}
					</div>
				<div className={`overlay ${this.state.fullScreen ? 'on' : ''}`}>
					<img src={'/prod/' + this.props.mainImage} style={{left:this.state.left, top:this.state.top }}/>
				 </div>
				</div>
		);
	}
}


									// src={'/prod/'+ this.props.productData.featureImage[this.state.currentImage]} />
