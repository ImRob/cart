import React, { Component } from 'react';

export class Thumbnail extends Component {
	render() {
		return (
			<img src={this.props.src}/>
		);
	}
}
