// // what are data types
// // we have different types of primitive data

// //numbers
// const price = 5;
// const likes = 3;
// const day = 12;
// const month = 4;

// // strings
// // are lines of symbols/characters
// const user = "Kezia";
// const brand = "nike";
// const welcome = "welcome to our website, thanks for joining";
// console.log(typeof user);


// // will add the numbers together - reading them as numbers
// const one = 1;
// const two = 2;
// console.log(one + two);


// // will read them as characters, putting them beside one another
// const uno = "1";
// const dos = "2";
// console.log(uno + dos);

// //boolean values are either true or false
// const alarm = true;
// console.log(alarm)

// // const alarm = false;
// // console.log(alarm)


// // undefined 
// // undefined data means we haven't given the variable any data yet
// let data;
// console.log(data);


// // NaN or null
// // means has a value of nothing - hence null
// let nullData = null;
// console.log(nullData);

// let coffee = 1;
// let doughnut = null;
// console.log(coffee + doughnut)




// // examples show you what type of variable you are using

// let example = true;
// console.log(typeof example);

// // let example = null;
// // console.log(typeof example);

// // let example = 1;
// // console.log(typeof example);

// // let example = "1";
// // console.log(typeof example);


// let saying = "such and such said the other day \" sfds \" fdfsads dsgfdsf ";

// let greeting = `Good morning, ${user}! How are you today?`;
// console.log(greeting);

// document.write(greeting);


// // comparisons are one of the most important things within JavaScript
// // comparisons allow us to compare data against one another

// // let password = "password";
// // console.log(password);

// // = means that we have assigned a value to a variable
// // compare two values == 
// // example 5 == 5     true
// // example 5 == 4     false

// // != means that it is not equal to 
// // example 5 != 5     false
// // example 5 != 4     true
// // this is useful with passwords
// // if wrong password is put in, it will = false

// // "password" != "passwo" true
// // "password" != "password" false 

// // > greater than
// // 3 > 3     false
// // 3 > 2     true

// // < less than
// // 3 < 3     false
// // 3 < 4     true

// // if we use == to check it will throw true
// // but we know that this isn't the case as we have
// // a number and a string eg different data types
// let number = 2;
// let string = "5"

// // === will also compare the data type and let us know aswell if they are the same 
// // this might be useful if we are trying to calculate numbers
// // or if we are trying to add to strings and add values 
// // don't use == always use === to compare

// // every type of data has a true or false value
// // there is something called truthy or falsy values

// // falsy values 
// // null, false, 0, "", undefined, NaN

// // --------------------------------------------------------
// // --------------------------------------------------------

// //comparisons & conditions

// // with conditions we make checks for values 
// // we do this through a conditional statement

// const coffees = true;
// const coffeeTwo = true;

// console.log(coffeeTwo);
// if(coffees){
//     console.log("hey today its fika");
// }

// const durry = 2;

// if(durry === 2){
//     console.log("could i also have a coffee with my durry")
// } else {
//     console.log("yoo can i have another durry please can i get another durry");
// }

// const password = "password";

// if (password !== "password"){
//     console.log("wrong password");
// } else {
//     console.log("you are logged in");
// }

// const ticket = true;
// const age = 18;

// if(ticket && age >= 18){
//     console.log("sweet your good to go in");
// } else {
//     console.log("sorry you dont have a ticket or are too young");
// }

// // or comparison
// // for an or statement you use ||
// const bus = true;
// const train = true;

// if (bus || train){
//     console.log("i'm running on time")
// } else {
//     console.log("i'm going to be late, missed public transport")
// }


// const gigTicket = true;
// const capacity = true;

// const ticketSale = true;


// if (gigTicket && capacity){
//     console.log("enjoy the gig");
// } else if(ticketSale){
//     console.log("i see you don't have a ticket, would you like to buy one?")
// }

// else {
//     console.log("sorry we are sold out");
// } 




// const ticketSale = false;

// if (gigTicket && capacity){
//     console.log("enjoy the gig");
// } else if(ticketSale){
//     console.log("oh i see you dont have a ticket, would you like to buy one we have door sales");
// } else if(){

// } else if (){
    
// }else{
//     console.log("sorry we are sold out");
// }


const purchase = true;
const declinedCard = true;
const emptyCart = true;

if (purchase){
    console.log("Woohoo! Your purchase was successful!")
} else if (declinedCard){
    console.log("Sorry, your card has been declined!")
} else if (emptyCart){
    console.log("Sorry, there seem to be no items in your cart!")
}

const oneThing = true;
const anotherThing = true;
const thirdThing = true;
const okayTooMany = true;

if (oneThing){
    console.log("Sweet, you have one!")
} else if (anotherThing){
    console.log("You have the other one!")
} else if (oneThing && anotherThing){
    console.log("You have two things!")
} else if (oneThing && anotherThing && thirdThing){
    console.log("You have three things!")
} else if (oneThing && anotherThing && thirdThing && okayTooMany){
    console.log("Sorry, you have too many things.")
} else{
    console.log("Sorry bro")
}


