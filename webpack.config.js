var webpack = require('webpack');
var path = require('path');

var config ={
	entry:'./dev/app.js',
	output:{
		filename:'./prod/bundle.js'
	},
	module:{
		loaders:[
			{test:/\.jsx?$/, exclude:/node_modules/ , loader:'babel', query:{ presets:['es2015', 'react']}}
		]
	},
	resolve:{
		extensions:['','.js','.jsx']
	},
	devtool:'eval-source-map'

}

module.exports = config;