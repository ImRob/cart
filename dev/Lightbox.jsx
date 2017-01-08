import React, { Component } from 'react';
import Thumbnail from './Thumbnail';


export class Lightbox extends Component {
	constructor(){
		super()
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
	}
	hideDetail(){
		this.setState({
			fullScreen:false
		})
	}
	showDetail(){
		this.setState({
			fullScreen:true
		})
	}
	enlarge(e){
		var node = this.refs.MainImage;
		var target = e.target.getBoundingClientRect();

		this.setState({
			left:'-' + (e.clientX - target.left)+'px',
			top: '-' + (e.clientY - target.top)+'px'
		})
	}
	render() {
		return (
				<div className="ProductImage">
				
					<div>
						<img ref="MainImage"
							onMouseMove={this.enlarge} 
							onMouseEnter={this.showDetail}
							onMouseLeave={this.hideDetail}
							className="MainImage" 
							src={'/prod/'+ this.props.mainImage} />
					</div>
					<div className="ProductThumbnails">
					{this.props.productData.featureImage.map(function(img, ind) {
						return <img onClick={this.selectItem} className="Thumnails" data-img={ind} key={ind} src={'/prod/'+img}/>
					},this)}
					</div>
				<div className={`overlay ${this.state.fullScreen ? 'on' : ''}`}>
					<img src={'/prod/' + this.props.productData.featureImage[this.state.currentImage]} style={{left:this.state.left, top:this.state.top }}/>
				 </div>
				</div>
		);
	}
}


									// src={'/prod/'+ this.props.productData.featureImage[this.state.currentImage]} />
