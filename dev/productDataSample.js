module.exports = {
	productData:{
		productName : 'Cotton Cable Cardigan',
		featureImage: ['img1.jpg', 'img2.jpg', 'img3.jpg'],
		price: 128.00,
		productNumber:'f9886',
		colors:[
			{ color : 'heather ivory', 
			  productImage:'product1.jpg',
			  sizes : [ { size : 'x-small' , status: true  , hover : 'in-stock'      }, 
			  			{ size : 'small'   , status: true  , hover : 'in-stock'      }, 
			  			{ size : 'medium'  , status: false , hover : 'out-of-stock'  },
			  			{ size : 'large'   , status: false , hover : 'out-of-stock'  }, 
			  			{ size : 'x-large' , status: true  , hover : 'in-stock'      }
		  			]
			},
			{ color : 'deep navy', 
			  productImage:'product1.jpg',
			   sizes : [{ size : 'x-small' , status : false , hover : 'out-of-stock' }, 
			  			{ size : 'small'   , status : false , hover : 'out-of-stock' }, 
			  			{ size : 'medium'  , status : false , hover : 'out-of-stock' },
			  			{ size : 'large'   , status : false , hover : 'out-of-stock' }, 
			  			{ size : 'x-large' , status : true  , hover : 'in-stock'     }
			  		   ]
			}
		]
	},
	cartData:{
		items:[{
			color:'green',
			productNumber:'f9886',
			quantity:0,
			size:''
		}],
		total:1
	}
}



/* 
	i feel like the size grid would be another table.
	the
*/

