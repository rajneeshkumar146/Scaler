// why use case of bind , apply , call -> borrow features 
let cap = {
    name: "Steve",
    team: "Cap",

    petersTeam: function (mem1, mem2) {
        console.log(`Hey ${this.name} I am your neighborhood's  
        spiderman and i belong to ${this.team}'s team with members  ${mem1} and ${mem2}`);

        // console.log(mem2);
    }
}
let ironMan = {
    name: "Tony",
    team: "Iron Man",
}

// borrow the method only once with defined number of param 
// use petersTeam method -> only once 

// equivalent to: ironMan.petersTeam("thor", "loki", "Natasha", "pabusingh", "sushil", "vishal", "dharani", "surya")
// cap.petersTeam.call(ironMan, "thor", "loki", "Natasha", "pabusingh", "sushil", "vishal", "dharani", "surya");  
// cap.petersTeam.call(ironMan, "thor", { 1: "hi", 2: "rajneesh" });


/****
 *
 * Apply: borrow the method only once with n no number of param
 * **/
// let membersArray = ["thor", "loki", "Natasha", "pabusingh", "sushil", "vishal", "dharani", "surya"]
// cap.petersTeam.apply(ironMan, membersArray);


/**
 * react -> eventListeners elememnt in react
 * */
/*****
 * bind : making permanent copy of that method to use multiple times
 * ******/

const boundFn = cap.petersTeam.bind(ironMan);
// boundFn(membersArray)
boundFn("cap", "war machine");


// Guess the answer.-------------------------------------
// var name = "Natasha";
// var team = "pabusingh Team"
// cap.petersTeam.call();


// Related to prototype.--------------------------------
// let arr=[] -> Array
// let obj ={} -> Object
// function fn(){} -> Functions

// let arr = [1,2,3];
// console.log(arr);

// let obj = {
//     1 : "hi",
//     2 : "hello"
// }
// console.log(obj);



