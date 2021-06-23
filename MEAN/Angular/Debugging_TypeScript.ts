// 1
var myString: string;
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
// Changed 9 to a string because myString is declared as a string
myString = "9";

// 2
function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 // changed 9 to a string because function takes in a string
 console.log(sayHello("9"));


 // 3
 function fullName(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 // Added an empty string to take place of the middle name
 console.log(fullName("Jimbo", "", "Jones"));


 // 4
 interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
    // Changed "belt" to "belts" to fix error
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));


// 5
class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug?(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 const shane = new Ninja("Shane", "Lastname");
 // Added first and last name inside Ninja()

 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
 }

 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 // add a ? after debug on line 64 to make it not required
 console.log(study(turing));



// 6
// changed to (x: number)
var increment = (x: number) => x + 1;
// This works great:
console.log(increment(3));
// changed to (x: number)
var square = (x: number) => {x * x};
// This is not showing me what I want:
console.log(square(4));
// This is not working:
// changed to (x: number, y: number)
var multiply = (x: number,y: number) => x * y;
// Nor is this working:
// changed to (x: number, y: number) and made it an arrow function
var math = (x: number, y: number) => {
    let sum = x + y
    let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference];
}




// 7
// changed birthday to arrow function
class Elephant {
    constructor(public age: number){}
    birthday = () => {
       this.age++;
    }
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)