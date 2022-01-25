function Calc(action, var1, var2) {
    let paramsQtyError = action === undefined || var1 === undefined || var2 === undefined;
    
    if (paramsQtyError) {
        return 'Error! There are must be 3 parameters.';
    } else if (!isNumber(var1)) {
        return "Error! Variable 1 isn't number.";
    } else if (!isNumber(var2)) {
        return "Error! Variable 2 isn't number";
    }
    return calculate(action, +var1, +var2);
}

function isNumber(x) {
    return !isNaN(x) && typeof(x) === 'number';
}

function calculate(action, var1, var2) {
    switch (action) {
        case 'sum':
            return var1 + var2;
            break;
        case 'sub':
            return var1 - var2;
            break;
        case 'mult':
            return var1 * var2;
            break;
        case 'div':
            return var1 / var2;
            break;
        default:
            return "Error! Unknown operation.";
            break;
    };
}

console.log(Calc('sum', 2, 5));
console.log(Calc('sub', 2, 5));
console.log(Calc('mult', 2, 5));
console.log(Calc('div', 2, 5));

console.log(Calc('pow', 2, 5));

console.log(Calc('sum', 2));
console.log(Calc('sub'));
console.log(Calc());

console.log(Calc('mult', '2', 5));
console.log(Calc('div', 2, 'e'));
