// Exercise 1

const foods = [];  
console.log('Exercise 1 result:', foods);

// Exercise 2

foods.push('pizza','cheeseburger');
console.log('Exercise 2 result:', foods);

// Exercise 3

foods.unshift('taco');
console.log('Exercise 3 result:', foods);

// Exercise 4

const favFood = foods[1];
console.log('Exercise 4 result:', favFood);

// Exercise 5

foods.splice(2, 0, 'tofu');
console.log('Exercise 5 result:', foods);

// Exercise 6

foods.splice(1, 1, 'sushi', 'cupcake');
console.log('Exercise 6 result:', foods);

// Exercise 7

const yummy = foods.slice(1,3);
console.log('Exercise 7 result:', yummy);

// Exercise 8

const soyIdx = foods.indexOf('tofu');
console.log('Exercise 8 result:', soyIdx);

// Exercise 9

const allFoods = foods.join(' -> ');
console.log('Exercise 9 result:', allFoods);

// Exercise 10

const hasSoup = foods.includes('soup');
console.log('Exercise 10 result:', hasSoup);
