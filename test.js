const{sum} = require('./app.js');

// si son test de la misma cosa podemos hacer un describe: https://jestjs.io/docs/api#describename-fn

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    // Hago mi comparación (la prueba)
    //expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
    expect(dollars).toBe(expected);
})

test("One dolar should be 146.26 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');
    // Uso la función como debe ser usada
    const yen = fromDollarToYen(1);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = (1 / 1.07) * 156.5;
    // Hago mi comparación (la prueba)
    //expect(fromDollarToYen(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
    expect(yen).toBe(expected);
})

test("One yen should be 547.75 pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');
    // Uso la función como debe ser usada
    const pound = fromYenToPound(1);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected =  (1 / 156.5) * 0.87;
    // Hago mi comparación (la prueba)
    //expect(fromYenToPound(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
    expect(pound).toBe(expected);
})