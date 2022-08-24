/**
 * author: Sergio Bustos
 * version: 1.0.0
 */
//ex excecution: node test.js  1,99,5,0,20,-4,12,16,7 12
//take args, and convert it into int and put it into the array to be proccesed
let input = process.argv.slice(2)[0].split(',').map(el => parseInt(el))
// Take the expected number
let expected = parseInt(process.argv.slice(2)[1])
let num1

// run while there is no more numbers to match
// take each element, find the necesary number to be the expected
// try to find the number into the array, if find is displayed
while (input.length > 0) {
    num1 = input.pop()
    let key = expected - num1
    let found = input.find((el) => {return el == key})
    if (typeof found === 'number') {
        console.log(`${num1}, ${found}`)
    }
}
