// what is a callback function in javascript?

//  A callback function is a function passed into another 
//  function as an arguement, which is then invoked inside the 
//  outer function to complete some kind of routine or action.

setTimeout(function () {
    console.log("timer");
},5000);

function x(y){
    console.log("x");
    y();

}
x(function y(){
    console.log("y");
});
// x(function y(){
//     console.log("y");
// });
// x(function y() {
//     console.log("y");
// })

// javascript is a synchronous and single-threaded language
