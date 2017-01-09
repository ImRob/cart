module.exports = {
	productData:{
		productName : 'TOPCOAT IN ITALIAN WOOL-CASHMERE WITH THINSULATE',
		featureImage: ['img1.jpg', 'img2.jpg', 'img3.jpg'],
		price: 128.00,
		productNumber:'f9886',
		colors:[
			{ color : 'dark camel', 
			  hex: '#a2602c',
			  productImage:'product1.jpg',
			  sizes : [ { size : 'x-small' , status: true  , hover : 'in-stock'      }, 
			  			{ size : 'small'   , status: true  , hover : 'in-stock'      }, 
			  			{ size : 'medium'  , status: false , hover : 'out-of-stock'  },
			  			{ size : 'large'   , status: false , hover : 'out-of-stock'  }, 
			  			{ size : 'x-large' , status: true  , hover : 'in-stock'      }
		  			]
			},
			{ color : 'deep navy', 
				hex:'#000026',
			  productImage:'product2.jpg',
			   sizes : [{ size : 'x-small' , status : false , hover : 'out-of-stock' }, 
			  			{ size : 'small'   , status : false , hover : 'out-of-stock' }, 
			  			{ size : 'medium'  , status : false , hover : 'out-of-stock' },
			  			{ size : 'large'   , status : false , hover : 'out-of-stock' }, 
			  			{ size : 'x-large' , status : true  , hover : 'in-stock'     }
			  		   ]
			}
		]
	}
}