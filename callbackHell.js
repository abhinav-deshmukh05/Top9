// console.log("Namaste");

// setTimeout(function (){
//     console.log("javascript");
// },5000)


// console.log("Season 2");

const cart=["shoes", "pants","kurta"];

createOrder(cart,function(orderId) {
    proceedTopayment(orderId);

}); //orderId


