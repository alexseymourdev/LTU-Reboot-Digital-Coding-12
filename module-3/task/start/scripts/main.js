// console.log('test')

// Single line comment

/*

Multi-line comment

*/

let strProductName = 'Tinned Beans';
let price = 0.99;
let quantity = 4;
let blnInStock = true;
let discountAmount = 0;

// console.log(strProductName);
// console.log(price);

//List of things that are "false"
let strVariable = '';
let numberOfKittens = 0;
let blnVariable = false;
let arrVariable = [];
let objVariable = {};
let variable; //undefined
let emptyVar = null;

function showProductName(productName){
    productName = productName + productName;
    // return productName;
}

let myName = 'Alex';
let mySurname = 'Seymour';

let strNewProductName = showProductName(myName);
// console.log(strNewProductName);

function totalPrice(productPrice=0,productQuantity=0){
    let totalPrice = productPrice * productQuantity;
    return '£' + totalPrice.toFixed(2);
}

let totalPriceBeer = totalPrice(1.05,4);
// console.log(totalPriceBeer);

// function squareNumber(){
//     let squareNumber = num * num;
//     return squareNumber;
// }

let squareNumber = num => num * num;

let square = squareNumber(9);
// console.log(square);

function fizzBuzzChecker(number){
    let strMessage = number;
    if(number % 3 == 0 && number % 5 == 0){
        strMessage = 'FizzBuzz';
    } else if (number % 5 == 0) {
        strMessage = 'Buzz';
    } else if (number % 3 == 0) {
        strMessage = 'Fizz';
    }
    return strMessage;
}

// console.log(fizzBuzzChecker(1));
// console.log(fizzBuzzChecker(2));
// console.log(fizzBuzzChecker(3));
// console.log(fizzBuzzChecker(4));
// console.log(fizzBuzzChecker(5));
// console.log(fizzBuzzChecker(6));
// console.log(fizzBuzzChecker(7));
// console.log(fizzBuzzChecker(8));
// console.log(fizzBuzzChecker(9));
// console.log(fizzBuzzChecker(10));
// console.log(fizzBuzzChecker(11));
// console.log(fizzBuzzChecker(12));
// console.log(fizzBuzzChecker(13));
// console.log(fizzBuzzChecker(14));
// console.log(fizzBuzzChecker(15));

function drinkOrder(drink,size){
    //setting variables to used inside the function
    let blnValidated = true;
    let strMessage = 'You have ordered a ' + size;
    //validating the size argument to ensure they ordered a size we can sell
    if(size != 'small' && size != 'medium' && size != 'large'){
        //overwriting the message when the size isn't in the logic above
        strMessage = 'you have ordered a size we dont sell: ' + size;
        blnValidated = false;
    }
    //if the size is valid
    if(blnValidated){
        //creating different outputs based on the drinks argument
        switch(drink){
            case 'cola':
                strMessage += ' Coca-cola';
            break;
            case 'lemon':
                strMessage += ' Schweppes';
            break;
            case 'orange':
                strMessage += ' Tango';
            break;
            default:
                //overwriting the message when the drink can't be sold
                strMessage = 'we do not sell ' + drink;
            break;
        }
    }
    console.log(strMessage);
}

// drinkOrder('cola','small');
// drinkOrder('lemon','medium');
// drinkOrder('orange','large');
// drinkOrder('cola','huge');
// drinkOrder('coffee','medium');

function calculator(num1,num2,operator){
    //declaring sum variable
    let sum;
    if(isNaN(num1)){
        return 'Number1 needs to be a number';
    }
    if(isNaN(num2)){
        return 'Number2 needs to be a number';
    }
    //switch statement for operator
    switch(operator){
        case '+':
            sum = num1 + num2;
        break;
        case '-':
            sum = num1 - num2;
        break;
        case '/':
            sum = num1 / num2;
        break;
        case '*':
        case 'x':
            sum = num1 * num2;
        break;
        case '%':
            sum = num1 % num2;
        break;
        default:
            return 'You have used an unrecognised operator: ' + operator;
    }
    return sum;
}

// console.log(calculator(10,5,'+'));
// console.log(calculator(10,5,'-'));
// console.log(calculator(10,5,'/'));
// console.log(calculator(10,5,'*'));
// console.log(calculator(10,5,'%'));
// console.log(calculator('alex',5,'%'));
// console.log(calculator(10,'alex','%'));
// console.log(calculator(10,5,'alex'));

// function removeChar(strValue){
//     if(strValue.length < 4){
//         return 'You must pass through a string with at least 4 characters';
//     }
//     if(typeof strValue != 'string'){
//         return 'This function can only work if a string is passed as the argument';
//     }
//     let firstTrim = 1;
//     let trimUpto = strValue.length - 2;
//     return strValue.substr(firstTrim,trimUpto);
// }

// console.log(removeChar('antidisestablishmentarianism'));

let arrRainbow = ['red','orange','yellow','green','blue','indigo','violet'];

// console.log(arrRainbow[0]); //red
// console.log(arrRainbow[3]); //green
// console.log(arrRainbow[6]); //violet
// console.log(arrRainbow.length); //7

let objProduct = {
    productName:'Tinned Beans',
    price:0.99,
    quantity:4,
    inStock:true,
    discountAmount:0,
};

// objProduct.productName = 'Garlic Bread';
// objProduct['productName'] = 'Chocolate Bar';

// console.log(objProduct.productName);
// console.log(objProduct['productName']);

// objProduct['weight'] = 0.5;

// console.log(objProduct);

// for(counter = 0; counter < arrRainbow.length; counter++){
//     let colour = arrRainbow[counter];
//     console.log(counter + ': ' + colour);
// }

// for(counter = 0; counter <= 30; counter++){
//     if(counter % 3 == 0 && counter % 5 == 0){
//         console.log('FizzBuzz');
//     } else if (counter % 5 == 0) {
//         console.log('Buzz');
//     } else if (counter % 3 == 0) {
//         console.log('Fizz');
//     } else {
//         console.log(counter);
//     }
// }

// function outputTimesTable(multipleOf){
//     for(counter = 1; counter <= 12; counter++){
//         let sum = counter * multipleOf;
//         console.log(sum);
//     }
// }

// for(multiplyer = 1; multiplyer <= 12; multiplyer++){
//     outputTimesTable(multiplyer);
// }

// console.log(shoppingCart);

function getCartTotals(arrShoppingCart,objCoupon=undefined){
    // console.log(arrShoppingCart);
    // console.log(objCoupon);
    // setting the total price to 0 so that we start counting from 0 in the loop
    let totalPrice = 0;
    // loop through each item in the shopping cart argument passed to the function
    for(cartCounter=0;cartCounter < arrShoppingCart.length; cartCounter++){
        // get the current item in the cart by the current counter variable
        let currentItem = arrShoppingCart[cartCounter];
        // console.log(currentItem);
        // get the total price of the current item by taking the price for one and multiplying by the quantity
        let currentItemTotal = parseFloat(currentItem.price) * parseFloat(currentItem.quantity);
        // if a coupon has been passed
        if(objCoupon){
            // if the coupon type is percentage or price
            if(objCoupon.type == 'percentage' || objCoupon.type == 'price'){
                //setting a boolean for if a discount is required
                blnApplyDiscount = false;
                // if the product type === the string of the word "any" apply discount
                if(objCoupon.productType === 'any'){
                    blnApplyDiscount = true;
                } else {
                    // else if the product type is in the array of product types valid for this coupon
                    if(objCoupon.productType.includes(currentItem.type)){
                        blnApplyDiscount = true
                    }
                }
                //if a discount should be applied
                if(blnApplyDiscount){
                    // set the discount amount to 0 so the variable is set
                    let discountAmount = 0;
                    //if the coupon type is percentage, work out the value to be taken from the cart item
                    if(objCoupon.type == 'percentage'){
                        discountAmount = (currentItemTotal / 100) * objCoupon.amount;
                    }
                    //if the coupon type is price, work out the price * quantity to discount
                    if(objCoupon.type == 'price'){
                        discountAmount = parseFloat(currentItem.quantity) * objCoupon.amount;
                    }
                    //apply the discount to the current item total
                    currentItemTotal = currentItemTotal - discountAmount;
                }
            }
        } 
        // add the current item total to the total price of the cart so far
        totalPrice = totalPrice + currentItemTotal;
    }
    // if a coupon has been passed
    if(objCoupon){
        //if the coupin type is flat_fee
        if(objCoupon.type == 'flat_fee'){
            //take the flat fee off the total price
            totalPrice = parseFloat(totalPrice) - parseFloat(objCoupon.amount);
        }
    }
    // add a pound sign to the front of the total and output the number to 2 decimal places as it is a price
    let returnData = '£' + totalPrice.toFixed(2);
    //return the price
    return returnData;
}

/*
type:           'flat_fee' - This takes a total price off the final cart value
                'percentage' - This takes a % off each product thats viable
                'price' - This takes off a set price for each products thats viable

amount:         The value being taken off.

productType:    The product types to be included if a coupon is passed (any will include all product types)
*/

let objCoupon = {
    type:'price',
    amount:0.5,
    productType:['toiletries'],
};

let cartTotalPrice = getCartTotals(shoppingCart,objCoupon);
console.log(cartTotalPrice);

function countProductTypes(arrShoppingCart, strProductType){
    let totalProductType = 0;
    for(cartCounter = 0;cartCounter < arrShoppingCart.length; cartCounter++){
        let currentItem = arrShoppingCart[cartCounter];
        if(currentItem.type == strProductType){
            currentQuantity = currentItem.quantity;
            totalProductType = totalProductType + currentQuantity;
        }
    }
    return totalProductType;
}

let totalToiletries = countProductTypes(shoppingCart,'toiletries');
console.log(totalToiletries);

