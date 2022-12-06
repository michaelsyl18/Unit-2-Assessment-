///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const initalPrice = 0;
const summedPrice = cart.reduce(
    function(accumulator, currentValue) {
        return accumulator + currentValue.price
    },
    initalPrice

);

console.log(summedPrice)

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
    let finalTotal = cartTotal * tax + cartTotal
    finalTotal -= couponValue
    return finalTotal
}

console.log(calcFinalPrice(8, 2, .08))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    Name: (String) Having the customers information for me to be able to address that customer formally
    Address: (String) I am able to mail the customer coupons to them having the address information.
    Phone number: I am able to contact the customer for any additional information about coupons as well as being able to provide coustomer service. 
    Email: Providing coupons via email for customers. 


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    name: "Michael",
    address: "2110 Research row",
    Email: "m.sylvester18@icloud.com",
    phone: 9722221707,

}