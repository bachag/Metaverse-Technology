//JavaScript and Node.js Assignemnt 

//question 2
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let data = "Hellow Faiza, would you like to learn some Python today?";
console.log(data);

//question 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
let result_l = String(data).toLowerCase();
console.log(result_l);

let result_U = String(data).toUpperCase();
console.log(result_U);

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  console.log(toTitleCase(data));

//question 4
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let famousPerson = "Albert Einstein once said, “A person who never made a mistake never tried anything new.”";
console.log(famousPerson);

//5.Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in
// a new variable called message. Print your message.
let famous_person = "Albert Einstein ";
let message = "“A person who never made a mistake never tried anything new.”";
console.log(famous_person + message);

//6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each 
//character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after 
//striping the white spaces.
let stripping_name = "\t"+data+"\n"+data;
console.log(stripping_name);

//7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose 
//your operations in print statements to see the results.
let a = 5;
let b = 3;
let add = a + b;
console.log("the sum is "+ a + "+" +b +" = "+add);

let c = 10;
let d = 2;
let sub = c - d;
console.log("the subtraction is "+ c + "-" +d +" = "+ sub);

let e = 4;
let f = 2;
let multi = e * f;
console.log("the multiplication is "+ e + "*" +f +" = "+ multi);

let g = 16;
let h = 2;
let division = g / h;
console.log("the division is "+ g + "*" +h +" = "+ division);

//9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. 
//Print that message.
let save = 123456;
let favoriteNum = "my favorit number is "
console.log(favoriteNum + save );

//10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because
// your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing 
//what the program does.
let myName = "Faiza Murtaza";
let today_date = "02/Oct/2022";
console.log("my name is "+myName +"and today date is "+ today_date);

//11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let Names = ['maria','mahum','shumaila','nazish','tanzila'];
console.log("the Array of Names is "+ Names.join('\r\n'));

//12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same, but each message should be personalized with the person’s name.
let Names_Greetings = ['Good Morning maria','Good evening mahum','Greetings of day shumaila','good Day nazish','Good night tanzila'];
console.log("Greetings to everyone: "+ Names_Greetings.join('\r\n'));

//13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation = ['cycle','scooty','helicoptor','landcruiser'];
let statement = "I would like to own a ";
console.log(statement + transportation.join('\r\n'));

//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people 
//you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let friends_list = ['mahum','shumaila','faiza'];
for (let i = 0; i < friends_list.length; i++) {
    console.log("dinner invitation for "+friends_list[i])
  }


//15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.
friends_list.pop()
friends_list.push('Asim')
for (let i = 0; i < friends_list.length; i++) {
    console.log("dinner invitation for "+friends_list[i])
  }

// 16.  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
friends_list.splice(0, 0, "new guest");
friends_list.splice(friends_list.length/2, 0, "middle guest");
friends_list.push("last guest")
for (let i = 0; i < friends_list.length; i++) {
    console.log("dinner invitation for "+friends_list[i])
  }

// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person 
//letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log('you can invite only two people for dinner')
for (let i = friends_list.length-1; i > -1; i--) {
    if(friends_list.length>2)
    {
        console.log(friends_list.pop()+' sorry you can’t invite them to dinner')
    }
    else{
        console.log(friends_list[i] + " are still invited")
        friends_list.pop()
    }
  }
  if(friends_list.length == 0)
  {
    console.log('list is empty now')
  }


//18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let favourit_country = ['uk','uae','pakistan','canada','india'];
for (let i = 0; i < favourit_country.length; i++) {
    console.log("world like to visit "+favourit_country[i])
  }
  console.log("assending order : "+favourit_country.sort());// assending order
  console.log("reverse alphabetical order:  "+favourit_country.reverse());// reverse alphabetical order

//19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number 
//of people you are inviting to dinner.
  console.log("number of Dinner Guests previous list is: "+ friends_list.length);
  let count_list = ['mahum','shumaila','faiza'];
  console.log("number of Dinner Guests is  "+ count_list.length);

//20.Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities,
// languages, or anything else you’d like. Write a program that creates a list containing these items.
let something = ['K2','neelam','china','islamabad','english','urdu'];
let languages = ['urdu','eng','chinese','pasto'];
let cities = ['islamabad','karachi','pesh','lahore'];
console.log("creates a list containing something is: "+ something);
console.log("creates a list containing languages is: "+ languages);
console.log("creates a list containing cities is: "+ cities);

//21.They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.
let obj = {mountain:"K2", city:"islamabad", lang:'eng', something:"goods"};
console.log("obj is here: "+ JSON.stringify(obj));

//22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
// Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
function foo (array, index) {
  if (typeof array[index] == 'undefined')
      console.log('Aarry out of bounds error');
}
foo(something,9);

//23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction 
//for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//test1 
let colorString;
let likesRed = false;
let likesBlue = true;

if (likesRed) {
    console.log(colorString = "red");
}
else if (likesBlue) {
    console.log(colorString = "blue");
}
else {
    console.log(colorString = "green");
}

//test2
let tempInCelsius = 0;
if (tempInCelsius > 30) {
  console.log("Code to execute if temperature is over 30");
}
else if (tempInCelsius >= 15) {
  console.log("Code to execute if temperature is between 15 and 30");
}
else {
  console.log("Code to execute if temperature is 14 or below");
}

// test3
let color;
let likes = true;
let likesB = true;
    
if (likes) {
    if (likesB) {
        color = "I have a wide taste in colors";
        console.log(color);
    }
}

//test4
if (likes && likesB) {
  color = "I have a wide taste in colors test 4";
  console.log(color);
}

//test5
if (likesRed || likesBlue) {
  color = "I like at least one color";
  console.log(color);
}

//test6
if (!likesRed) {
  color = "I do not like red";
  console.log(color);
}

//test7-10
let favoriteColor;
let colorComment;
favoriteColor = "green";
    
switch (favoriteColor) {
    case "red":
        colorComment = "red is fantastic";
        break;
    case "blue":
        colorComment = "blue is wonderful";
        break;
    case "green":
        colorComment = "green is magical";
        break;
}
console.log(colorComment);

//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
// write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
var me = new String("me");
var you = new String("me");
var isEquel = JSON.stringify(me) === JSON.stringify(you);
console.log(isEquel);
// • Tests using the lower case function
var character = '5';
if (character == character.toLowerCase()){
  console.log('lower case true');
}
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(5 >= 3);
// expected output: true
console.log(3 >= 3);
// expected output: true
// Compare bigint to number (note: bigint is not supported in all browsers)
console.log(3n >= 5);
// expected output: false
console.log('ab' >= 'aa');
// expected output: true
// • Tests using "and" and "or" operators
const three = 3;
const two = -2;
console.log(three > 0 || two > 0);
// expected output: true
// • Test whether an item is in a array
console.log(['joe', 'jane', 'mary'].includes('jane')); //true
// • Test whether an item is not in a array
const nums = [ 1, 3, 5, 7];
console.log(nums.includes(3));

//25.Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value 
//of 'green', 'yellow', or 'red'.
let alien_color = "green";
// let alien_color2 = "yellow";
// let alien_color3 = "red";
console.log("alien color is: "+ alien_color);
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
if (alien_color== "green"){
  console.log("earned 5 points");
}

//26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.
if (alien_color == "green"){
  console.log("earned 5 points");
}
else if (alien_color !== "green"){
  console.log("earned 10 points");
}

//27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let aliencolor = "green";
let aliencoloryellow = "yellow";
let aliencolorred = "red"; 

if (alien_color == "green"){
  console.log("earned 5 points");
} else if(aliencoloryellow == "yellow"){
  console.log("earned 10 points");
} else if (aliencolorred == "red"){
  console.log("player earned 15 points");
}

//28.Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let stagesoflife = 2;
if (stagesoflife <= 2){
 console.log("the person is a baby");
}
if (stagesoflife >=2){
  console.log("the person is a toddler.");
 }
 if (stagesoflife <=13){
  console.log("the person is a kid.");
 }
 if (stagesoflife >13 || stagesoflife <=20){
  console.log("the person is a teenager.");
 }
 if (stagesoflife >=20 || stagesoflife <= 65){
  console.log("the person is a adult.");
 }
 if (stagesoflife > 65){
  console.log("the person is a elder.");
 }

else {
  console.log("the person is gone");
}

//29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
//  such as You really like bananas!

let favoritefruit = ["banana","apple","mango","pineapple"];
let fruit = ["banana","apple","mango"];
for (let i = 0; i < favoritefruit.length; i++) {
  for (let j = 0; j < fruit.length; j++) {
 
  if (favoritefruit[i] ==  fruit[j]){
    console.log("really like "+ fruit[j]);
  }
}
}

//30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they 
//log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let userarray = ["admin","mahum","faiza","shumaila","nazish"];
for (let i = 0; i < userarray.length; i++) {
 
  if (userarray[i] ==  "admin"){
    console.log("Hello admin, would you like to see a status report?");
  }else{
    console.log("greeting,Hello "+userarray[i]);
  }

}

//31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let listofuser = ['mahum','shumaila','faiza'];
for (let i = 0; i < listofuser.length; i++) {
    console.log("check users "+listofuser[i]);
    if(!listofuser[i]){
      listofuser[i].pop();
        console.log("list is empty");
    }else{
        console.log("We need to find some users! ")
    }
}


//32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. 
//If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["userone","usertwo","userthree","userfour","userfive"];
let new_users = ["newuserone","usertwo","userthree","newuserfour","newuserfive"];

for (let i = 0; i < new_users.length; i++) {
  var found=false
  for (let j = 0; j < current_users.length; j++) {
    
  if (new_users[i] ==  current_users[j]){
    console.log(" enter a new username "+ new_users[j].toLowerCase());
    found = true
  }
}
if(found != true){
  console.log(new_users[i].toLowerCase() +" the username is available");
}
}

//33.Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", 
// and each result should be on a separate line.
let ordinal_numbers = ["1st","2nd","3rd","4th","5th","6th","7th","8th","9th"];
for (let i = 0; i < ordinal_numbers.length; i++) {
  console.log(" output  "+ ordinal_numbers[i]+"\n" );
}

//34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line 
// of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the 
//  of pizza you like and then an additional sentence, such as I really love pizza!
let pizzas = ["pepperoni pizza","special pizza","pineapple pizza","mashroom pizza"];
for (let i = 0; i < pizzas.length; i++) {
  console.log( pizzas[i]+" I really love pizza! "+"\n" );
}

//35.Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print
//  out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet.
//  • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ["dog","cat","got","cow"];
for (let i = 0; i < animals.length; i++) {
  console.log( animals[i]+" is great pet! "+"\n" );
}

//36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence
// summarizing the size of the shirt and the message printed on it. Call the function.
 function make_shirt( size,  text){
  console.log( "print on shirt: "+size +" "+text );
}
make_shirt(20,"child");

//37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium 
// shirt with the default message, and a shirt of any size with a different message.

function make_shirt( size=20,  text){
  if(size <= 20 && size >= 15)
  {
    console.log( "I love JavaScript" );
  }
  else{
    console.log( "size is not large and medium" );
  }
 
}

//38.Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in 
// Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city( country ="pakistan",city){
    console.log( city+" is in "+country );

}
describe_city(undefined,"karachi");
describe_city(undefined,"Lahore");
describe_city(undefined,"Islamabad");

//39.City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city,country){
  console.log( city+", "+country );

}
city_country("karachi","Pakistan"); 
city_country("Lahore","Pakistan"); 
city_country("London","UK"); 

//40.Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, 
// and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each 
// return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of 
// tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call 
// that includes the number of tracks on an album.
var dict = {}
function make_album(name,title){
  let album=new Album(name,title)
  dict[name] = title;
  printDictonary()
  return album
}
function printDictonary()
{
  for(var key in dict) {
    console.log(key + " : " + dict[key]);
 }
}
class Album{
  constructor(name, title) {
    this.name = name;
    this.title = title;
  }
}
make_album("hello","faiza"); 
make_album("hello","mahum");
make_album("hello","saba");

//41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(){
  let magician = ["magicianone","magiciantwo","magicianthree","magicianfour"];
  for (let i = 0; i < magician.length; i++) {
    console.log( magician[i]);
}
}
show_magicians(); 

//42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding 
//the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(Magicians,name){
  console.log( Magicians+", "+name );

}
make_great("Great Magicians","ali"); 
make_great("Great Magicians","asad"); 
make_great("Great Magicians","saba"); 

//43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array 
// will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original. 
// names and one array with the Great added to each magician’s name.
var dict = {}
function magicionfun(name,title){
  let album=new Magicians(name,title)
  dict[name] = title;
  printDictonary()
  return album
}
function make_great()
{
  let newarry = [];
  for(var key in dict) {
    console.log(key + " : " + dict[key]);
    newarry.push(dict[key]);
 }
 for(let i = 0; i < newarry.length; i++){
 console.log("newArray is here: "+ newarry[i])
 }
}
class Magicians{
  constructor(name, title) {
    this.name = name;
    this.title = title;
  }
}
magicionfun("greatadded Magicians","faiza"); 
magicionfun("greatadded Magicians","mahum");
magicionfun("greatadded Magicians","saba");

//44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the 
// function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(items){
  for(let i = 0; i < items.length; i++){
  console.log(items[i]);
  }
}
let arraydata = ['cheese', 'mushrooms', 'mayo'];
sandwich(arraydata);

//45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept 
//an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
var car = {
  manufacturer: "Ford",
  model: "Explorer",
  year: 2008,
  color: "red",
}
function Car(manufacturer, model, year, color) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.year = year;
  this.color = color;
}

var myCar = new Car("Toyota", "Camry", 2010, "black");
console.log("last question: "+JSON.stringify(myCar));

//////////////////////////////////////////////////////////////////////end of assignment /////////////////////////////////////////////////////////////////////////////////////