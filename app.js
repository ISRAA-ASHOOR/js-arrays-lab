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

// Exercise 11

const odds = [];
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

nums.forEach(num => {
    if (num % 2 !== 0) {
        // to make sure the number is not even (there will be a reminder if it's dividable by 2)
        odds.push(num); 
    }
});

console.log('Exercise 11 result:', odds);

// Exercise 12

const fizz = [];
const buzz = [];
const fizzbuzz = [];

nums.forEach(num => {
    if (num % 3 === 0 && num % 5 === 0) {
        fizzbuzz.push(num); 
    } else if (num % 5 === 0) {
        buzz.push(num); 
    } else if (num % 3 === 0) {
        fizz.push(num); 
    }
});

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

// Exercise 13

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays[numArrays.length-1];
console.log('Exercise 13 result:', numList);

// Exercise 14

// first way (if we know where is the num)

const num1 = numArrays[2][1];
console.log('Exercise 14 result:', num1); 

// second way (if we do not know where is the num)

for (let x = 0; x < numArrays.length; x++) {
    for (let y = 0; y < numArrays[x].length; y++) {
        if (numArrays[x][y] === 66) {
            num = 66;
            break;
        }
    }
}

console.log('Exercise 14 result:', num);

// Exercise 15

let total = 0;

numArrays.forEach(subArray => {
    subArray.forEach(num => {
        total += num;
    });
});

console.log('Exercise 15 result:\n', total);