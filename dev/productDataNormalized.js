var obj = {
    entities: {
        productInfo: {
          1: {  
          	id: 1,
	        productName: 'Cotton Cable Cardigan',
	        price: 128,
	        productNumber: 'f9886',
	        colors: [2, 3]}
        },
        colorInfo: {
            2: {
                id: 2,
                color: 'heather ivory',
                images: 'productHeather.jpg',
                sizes: 10
            },
            3: {
                id: 3,
                color: 'navy',
                images: 'productNavy.jpg',
                sizes: 11
            }
        },
        sizeInfo :{
        	10: {
                id:10,
                sizes:[{ size: 'x-small', status: true, hover: 'in-stock' },
                                { size: 'small', status: true, hover: 'in-stock' },
                                { size: 'medium', status: false, hover: 'out-of-stock' },
                                { size: 'large', status: false, hover: 'out-of-stock' },
                                { size: 'x-large', status: true, hover: 'in-stock' }
                            ]
            } ,
            11: {
                id:11,
                sizes:[{ size: 'x-small', status: false, hover: 'in-stock' },
                                { size: 'small', status: false, hover: 'in-stock' },
                                { size: 'medium', status: false, hover: 'out-of-stock' },
                                { size: 'large', status: false, hover: 'out-of-stock' },
                                { size: 'x-large', status: true, hover: 'in-stock' }
                            ]
            }
        }
    },
    results: [1]
}

var products = obj.entities.productInfo;
var colors = obj.entities.colorInfo;
var sizes = obj.entities.sizeInfo;

var fig ={name:'rob'}
var res = obj.results;

/* create a new object */
var newItem ={
	products:products[1],
	colors:colors[2],
	size: sizes[10][0]

}

// console.log(newItem);

module.exports = obj;