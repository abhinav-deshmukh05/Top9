const user={
    username: "abhinav",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is
    ${anyObject.price}`);
}

handleObject(user);

//lets make object destructuring 
let users ={
    firstName:"Ado",
    lastName:"Kukic"
}
user.firstName //Ado

let{firstName}=user;
firstName;//Ado

//destruturing arrays
const numbers =[1,2,3,4];
const [first,...rest]=numbers;
console.log(first);//1
console.log(rest);//2,3,4