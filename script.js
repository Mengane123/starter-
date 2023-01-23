'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex]], [this.mainMenu[mainIndex]];
  },

  orderDelivery: function (obj) {
    console.log(obj);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`your pasta is ready with ${ing1},${ing2},${ing3}`);
  },
};

restaurant.orderDelivery({
  time: '20:30',
  address: 'via del sole,21',
  mainIndex: 2,
  starterIndex: 2,
});

//////////////////////////////////////////
// destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// but if we want another variable names other than the property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// setting default values to the properties of object in case they don't exist
// without assigning default value (=[]) to menu we will get undefined
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 24, b: 67, c: 90 };

// we cannot use let because that will create another variable
// we cannot use const because variables already exists
// we have to wrap mutating values inside parenthesis
({ a, b } = obj);
console.log(a, b);

// Nested objects
// we know fri is an object inside the openingHours objects which is inside restaurant object
const { fri } = openingHours;

console.log(fri);
// but we want separate variables open and close
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

////////////////////////////////////////////////

// THE SPREAD OPERTOR(...)

const arr = [7, 8, 9];
// wrong method of adding more elements to arr
const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(badNewArr);
// corrent method of adding more elements to arr
const goodNewArr = [1, 2, 3, ...arr];
console.log(goodNewArr);
// suppose now we want to log individual elements of the goodNewArr
console.log(...goodNewArr);

// now we will create a new menu in addition to the old menu in the restaurant object
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// COPY ARRAY
const mainMenuCopy = [...restaurant.mainMenu];

// JOIN 2 OR MORE ARRAYS
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// SPREAD OPERATORS WORKS ON ALL ITERABLES(ARRAYS, STRINGS, MAPS, SETS )
// trying on strings
const str = 'prashant';
const letters = [...str, ' ', 'M'];
console.log(letters);

// NOW WE WILL MAKE A FUNCTION AND PASS ARGUMENTS USING SPREAD OPERATOR
// REAL WORLD EXAMPLE
const ingredients = [
  prompt('ingredient 1'),
  prompt('ingredient 2'),
  prompt('ingredient 3'),
];

// console.log(ingredients);
restaurant.orderPasta(...ingredients);

// SPREAD OPERATOR IN OBJECTS

////////////////////////////////////////////////

// declaring 3 variables without using array destructuring
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c);

// declaring 3 variables with using destructuring
// easy peesy
// const [x, y, z] = arr;
// console.log(x, y, z);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// suppose we want first and third element of categories array
// let [first, , second] = restaurant.categories;
// console.log(first, second);

//suppose we want to switch the elements of categories array
// [second, first] = [first, second];

// console.log(first, second);

//now we will create a method inside the restaurant variable
// console.log(restaurant.order(2, 0));

// this is how we receive 2 return values from function
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// In case of the nested array . This is how we will do destructuring
// const nested = [2, 3, [4, 5]];
// if we want first element and the third element(which is an nested array)
// const [i, , j] = nested;
// console.log(i, j);

// but if we want all the elements separately
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// we can set default values in the variables while destructuring array
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); //r will give undefined because it doesn't have any value

// console.log(p, q, r); //but now r will give value 1
