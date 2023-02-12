'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ENHANCED OBJECT LITERAL
  openingHours,

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// 1) DESTRUCTURING
//////////////////////////////////////
// SPREAD OPERATOR because we are using ... syntax on the right hand side of the (=) sign
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// REST PATTERN AND PARAMETERS because we are using ... syntax on the left hand side of the (=) sign
// does the opposite of spread operators
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// NOW WE WILL USE BOTH THE REST PATTERN AND THE SPREAD OPERTOR AT THE SAME TIME
// ARRAYS

// const [pizza, , Risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   restaurant.starterMenu,
// ];
// console.log(pizza, Risotto, otherFood);

// OBJECTS
// for example we only want sat in the seperate variable and weekdays in separate variable
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//////////////////////////////////////////
// 2) FUNCTIONS
//  so we will make a function that will take integers as input and we will see REST PARAMETERS
// const add = function (...numbers) {
// console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// USING SPREAD AND REST TOGETHER
// const x = [21, 22, 23];
// add(...x);

// NOW WE WILL MAKE A METHOD INSIDE THE RESTAURANT OBJECT
// restaurant.orderPizza('mushroom', 'onion', 'spinach', 'oregano');

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// SHORT CIRCUITING (&& AND ||)

////////////////////////////////////
// || OPERATOR
// use any datatype , return any data type, short-circuiting
// console.log(3 || 'prashant');
// console.log('' || 'prashant');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || '');
// console.log(undefined || '' || 0 || 'hello' || 23 || null);

// restaurant.numGuests = 23;
// using ternary operator
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// using || operator and short circuiting
// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

/////////////////////////////////////////////
// ?? operator
// restaurant.numGuests = 0;
// const guestCorrect = restaurant.numGuests || 10;
// console.log(guestCorrect);
// the output will be 10; but what if we want 0 because numberGuests can be 0 obviousl
// in that case we will use ?? nullish coalescing operator
// nullish = null and undefined
// it does not include 0 , ' '
// it works same as || operator . but the difference is that ?? operator includes 0 and ' ' as the truthy values
// so instead of || we will use ??
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

///////////////////////////////////////////
// && OPERATOR
// console.log('--&&--');
// console.log(0 && 'prashant');
// console.log(24 && 'prashant' && null && undefined);

// practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('spinach', 'mushroom');
// }

// using && operator
// restaurant.orderPizza && restaurant.orderPizza('spinach', 'mushroom');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LOGICAL ASSIGHMENT OPERATOR
// const rest1 = {
//   name: 'capri',
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La pizza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// OR ASSIGNMENT OPERATOR(LOGICAL OPERATOR)
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest1);
// console.log(rest2);

// NULLISH ASSIGNMENT OPERATOR(LOGICAL OPERATOR)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// console.log(rest1);
// console.log(rest2);

// AND ASSIGNMENT OPERATOR(LOGICAL OPERATOR)
// now we will change the owner name to '<ANONYMOUS>'

// rest1.owner = rest1.owner && '<ANONYMOUS>';

// rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';
// console.log(rest1);
// console.log(rest2);

/////////////////////////////////////////////////////////////////////////////////////
// FOR OF LOOP
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   console.log(item);
// }
// if we also want the index number with the array element
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}:${el}`);
// }

////////////////////////////////////////////////////////////////////////////////
// ENHANCED OBJECT LITERALS
//ENHANCEMENT-1 we put the openingHours object outside the restaurant object and used enhanced
//              object literals by adding just the name of the openingHours object inside the restaurant object.
// ENHANCEMENT-2  we can change the way of writing method inside an object
//              we just have to remove the (: funtion) fromt the object and it will work the same
// ENHANCEMENT-3 we can now compute (calculate) property name, instead of having to write them out manually and literally

////////////////////////////////////////////////////////////////////////////////////////
// OPTIIONAL CHAINING
// without optional chaining
// this will prevent from a error but what if we have to check even openingHours also exists or not then our code will be more lengthy
// if (restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }
// WITH OPTIONAL CHAINING
// so the question mark (?) will only go forward if the left side of it exist
// console.log(restaurant.openingHours.mon?.open);
// of course we can use more than one optional chaining
// console.log(restaurant.openingHours?.mon?.open);
///////////////////////////
// more real example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day} we open at ${open}`);
// }

// OPTIONAL CHAINING ALSO WORKS ON METHODS
// console.log(restaurant.order?.(0, 1) ?? 'method does not exists');

////////
// OPTIONAL CHAINING ALSO WORKS ON ARRAYS
// we can check is the array is empty or not
// const users = [{ name: 'prashant', email: 'prashant@gmail' }];
// console.log(users[0]?.name ?? 'user array empty');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LOOPING OBJECT : OBJECT KEYS , VALUES , ENTRIES
// we can loop over the object keys (property names), object values , object entries
// first we will loop over PROPERTY names
// Object.keys is the property name . and we used it because openingHours is an object

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }
// const properties = Object.keys(openingHours);
// console.log(properties);

// so now let's say we wanted to print a string saying, how many day the restaurant is open
// console.log(`we are open on ${properties.length} days`);

// lets mix them both
// let openStr = `we are open on ${properties.length} days :`;
// for (const day of properties) {
//   openStr += ` ${day}, `;
// }
// console.log(openStr);

// PROPERTY VALUES
// const values = Object.values(openingHours);
// console.log(values);

// OBJECT ENTRIES
// const entries = Object.entries(openingHours);
// console.log(entries);

// NOW WE CAN LOOP THIS ENTRIES TO LOOP OVER AN OBJECT
// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key} we are open at ${open} and close at ${close}`);
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SETS
// const orderSet = new Set([
//   'pizza',
//   'Pizza',
//   'pizza',
//   'pasta',
//   'risotto',
//   'pasta',
// ]);
// console.log(orderSet);

// we can get the size of the set
// console.log(orderSet.size);

// we can check if certain element is in a set
// console.log(orderSet.has('pizza'));
// console.log(orderSet.has('bread'));

// we can add new elements to a set
// orderSet.add('garlic bread');
// console.log(orderSet);

// we can also delete an element
// orderSet.delete('risotto');
// console.log(orderSet);

// as sets is an iterable , so therefore we can loop over them
// for (const order of orderSet) {
//   console.log(order);
// }

// now we will see the main use case of sets
// the main use of sets in real life is to remove duplicates from the array
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// const staffUnique = new Set(staff);
// now we want the output in an array and not in set
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MAPS--(FUNDAMENTALS)
// const rest = new Map();
// rest.set('name', 'classico,italiano');
// rest.set(1, 'firenze,italy');
// and set method not only update the map , but also returns the map
// console.log(rest.set(2, 'Lisbon,portugal'));
// so we can also chain the map to add items
// rest;
// .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set('open', 11)
// .set('close', 23)
// we can also use boolean as key
// .set(true, 'we are open :D')
// .set(false, 'we are closed :(');

// to read data from the map we have to use .get method
// console.log(rest.get('name'));
// console.log(rest.get(true));
// and when we get the elements from the maps , datatypes matters
// we can do this--console.log(rest.get('true')); this will give undefined

///////////////////////
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

////
// we can also check if the map contains a certain key
// console.log(rest.has('categories'));

///
// we can also delete the elements from the map
// rest.delete(2);

///
// we can also get the size of the map
// console.log(rest.size);

// console.log(rest);

///
// we can also clear all the elements from the map
// rest.clear();

/////////////////////////////////////////////////////////////////////////////////////////////////////
// MAPS (ITERATION)
const question = new Map([
  ['question', 'which is the best programming language in the world?'],
  [1, 'C'],
  [2, 'java'],
  [3, 'javaScript'],
  ['correct', 3],
  [true, 'correct🥳'],
  [false, 'Try again!'],
]);

console.log(question);

/////////////////////////
// CONVERT OBJECTS TO MAP
console.log(Object.entries(openingHours));
// keep this trick in mind, whenever you need a map and you already have an object
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
/////
// Q: now we only wants to print the values which has keys as numbers
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer:${key}:${value}`);
  }
}

const answer = Number(prompt('Enter your answer'));

console.log(question.get(question.get('correct') === answer));

/////////////////////
// CONVERT MAP TO ARRAY
// sometimes we also need to convert maps into Array;
// we can use spread operators on it
// IF YOU WANT ALL KEYS AND VALUES TOGETHER
console.log([...question.entries()]);

// IF YOU WANT TO GET KEYS ONLY
console.log([...question.keys()]);

// IF YOU WANT TO GET VALUES ONLY
console.log([...question.values()]);
