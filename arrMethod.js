// filter

const myNums= [1,2,3,4,5,6,7,8,9,10]

const newNums= myNums.filter((num) => {
    return num>4;
})

console.log(newNums);

// map

const myNumbers =[1,2,3,4,5,6,7,8,9,10];
const newNumers = myNumbers.map((num) => num+10);
console.log(newNumers);

// reduce

const myNum = [1,2,3]

const myTotal =myNum.reduce(function (acc,currval){
    return acc+currval
},0);

console.log(myTotal);