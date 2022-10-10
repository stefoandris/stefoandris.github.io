let numericArray = [1, 3, 4, 9, 14, 7, 8, 2, 10, 22, 21, 8, 7, 111, 234]
let sum = 0
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i]
}

console.log ("Sum: ", sum)

/*
Összegzés
let sum = 0
for (let i = 0; i < numericArray.lenght; i++) {
    sum += numericArray[i]
}
consle.log ("Sum: ", sum)

*/

let db = 0
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0) {
        db++;
    }
}
console.log ("Even number: ", db)

/*
let db = 0
for (let i = 0; i < numericArray.lenght; i++) {
    if numericArray[i] % 2 == 0) {
        db++;
    }
}

let sum = 0
for (let i = 0; i < numericArray.lenght; i++) {
    sum += numeric.Array[i]
}

console.log ("Sum: ", sum)
*/

let smallest = 0
