//assignment_01
// function max() {
//     // your code here, for-loop method preferred
//     var result = -Infinity;
//     for (var i in arguments) {
//         if (arguments[i] > result) {
//             result = arguments[i];
//         }
//     }
//     return result;
// }


function max() {
    // your code here, for-loop method preferred
    var i, max = 0;
    for (i = 0; i < arguments.length; i++) {
    	console.log(arguments[i]);
        if (arguments[i] > max) { max = arguments[i]; } 
        console.log("MAX:"+max);
    }
    return max;
}

max(1, 2, 4, 5); // result to 5
max(5, 2, 7, 1, 6); // result to 7

 


//assignment_02
function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}
// Try to call calculate function correctly
/* your way*/
calculate({ n1: 5, op: "+", n2: 8 });
//op可以是加號或減號，除了這兩個符號之外，通通都會顯示"Not supported"
//op如果="+"就是加法運算，op如果="-"就是減法運算
calculate({ n1: 7, op: "/", n2: 8 });
calculate({ n1: 7, op: "-", n2: 8 });



//assignment_03

function avg(data) {
    var length = data.products.length;
    var priceAry = [];

    for (var i = 0; i < length; i++) {
        priceAry.push(data.products[i].price);
    }
    var result = priceAry.reduce(function(prev, element) {
        return prev + element;
    }, 0);

    document.write(result / length)
    return result / length;
}

avg({
    size: 3,
    products: [
        { name: "Product 1", price: 100 },
        { name: "Product 2", price: 700 },
        { name: "Product 3", price: 250 }
    ]
}); // show the average price of all products