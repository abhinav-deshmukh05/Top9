// function x(){
//     console.log("namaste");
// }

// //higher order function 
// function y(x){
//     x();
// }


// lets make radius of circles which have to find area

// const radius=[3,1,2,4];

// const calculateArea = function (radius){
//     const output=[];// making array
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     } 
//     return output;
// }
// console.log(calculateArea(radius));

// // make it as a arrow function
// const calculateCircumference=  (radius) =>{
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(2*Math.PI*radius[i]);
//     }
//     return output;
// }
// console.log(calculateCircumference(radius));

// //find the diameter
// const calculateDiameter=  (radius) =>{
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(2*radius[i]);
//     }
//     return output;
// }
// console.log(calculateDiameter(radius));


// there is mistake where people done in interview
 //lets optimize it
 const radius=[3,1,2,4];

 const area =function(radius){
    return Math.PI*radius*radius;
 }
 
 const circumference = function(radius){
    return 2*Math.PI*radius;
 }
// console.log(circumference(radius));
 const diameter = function(radius){
    return 2*radius;
 }
 const calculate =function(radius,logic){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
 };

 console.log(calculate(radius,area));
 console.log(calculate(radius,circumference));
 console.log(calculate(radius,diameter));