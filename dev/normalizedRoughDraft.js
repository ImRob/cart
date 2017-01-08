var productInfo = {
    1: {
        id: 1,
        productName: 'Cotton Cable Cardigan',
        price: 128,
        productNumber: 'f9886',
        colors: [2, 3]
    }
}

var colorInfo = {
    2: {
        id: 2,
        color: 'heather ivory',
        images: 4,
        size: 6
    },
    3: {
        id: 3,
        color: 'navy',
        images: 5,
        size: 7
    }
}

var productImage = {
    4: {
        id: 4,
        src: 'productHeather.jpg'
    },
    5: {
        id: 5,
        src: 'productNavy.jpg'
    }
}

var sizeInfo = {
    6: {
        id: 6,
        xsmall: true,
        small: true,
        medium: false,
        large: true,
        xlarge: true
    },
    7: {
        id: 7,
        xsmall: true,
        small: true,
        medium: false,
        large: true,
        xlarge: true
    }
}

var orderByID ={
    'orderNumber1':{
        products:{
            1 : {
                quantity: 0,
                size: ""
            }
        },
        total:0
    }

}

var order = orderByID['orderNumber1'];

Object.keys(order.products).map(function(el, ind, arr){
    console.log(productInfo[el]);
    console.log(colorInfo[productInfo[el].colors[0]]);
})  

// console.log(Object.keys(order))





