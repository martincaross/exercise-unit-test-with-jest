// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInEuro = valueInDollar / 1.07;
    let valueInYen = valueInEuro * oneEuroIs["JPY"]
    // Retornamos el valor en dólares
    return valueInYen;
} 

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInEuro = valueInYen / 156.5;
    let valueInPound = valueInEuro * oneEuroIs["GBP"];
    // Retornamos el valor en dólares
    return valueInPound;
} 


// sum
const sum = (a,b) => {
    return a + b
}

// consola
console.log(sum(7,3))

//eexportamos
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };