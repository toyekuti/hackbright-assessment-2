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

const priceTotal = (total, cartItem) => {
    return total + cartItem.price;
};

// Use reduce method to calculate the sum of all food prices
const summedPrice = cart.reduce(priceTotal, 0);
console.log('Total Cart Price:', summedPrice);


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

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    const taxAmount = cartTotal * tax; // Calculate tax on the cartTotal
    
    const finalPrice = cartTotal + taxAmount - couponValue; // Subtract the couponValue and add tax to get the final price
    
    return finalPrice;
};
  
const cartTotal = 30;
const couponValue = 12;
const taxRate = 0.07; // 7% tax
  

const finalPrice = calcFinalPrice(cartTotal, couponValue, taxRate);
console.log('Final Price:', finalPrice);



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
The customer object for the cart page should have properties 
that provide essential information about the customer's order 
and contact details. Here are 4 properties:

firstName: This property represents the customer's first name. 
It should be a string data type because names are typically text.

lastName: This property represents the customer's last name. 
Like the firstName property, it should be a string data type.

email: This property holds the customer's email address, which 
is essential for communication and order confirmation. It should be a string data type.

orderItems: This property is an array that contains the items 
the customer has added to their cart. Each item in the array 
can be an object with properties like 'itemName', 'quantity', 
and 'price'. Using an array allows flexibility in handling multiple items.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    firstName: 'jared',
    lastName: 'bitz',
    email: 'jared.bitz@hackbrightacademy.com',
    orderItems: [
        {
            itemName: 'banana',
            quantity: 2,
            price: 7.99
        },
        {
            itemName: 'bread',
            quantity: 1,
            price: 3.99
        }
    ]
};
  
console.log(customer);