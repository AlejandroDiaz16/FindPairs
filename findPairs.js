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
    let clave = expected - num1
    let encontrado = input.find((el) => {return el == clave})
    if (typeof encontrado === 'number') {
        console.log(`${num1}, ${encontrado}`)
    }
}