const num = [1, 3, 4, 5, 57, 8, 9];
console.log("max",Math.max(...num)) // max

console.log("min",Math.min(...num)) // min

const ran = Math.random() // will return random value from 0-1
console.log("ran", ran);

/**
 * for spesific range multiply Math.random()*num +1
 */

const rang = Math.floor(Math.random() * 100 + 1)
console.log("rang",rang);