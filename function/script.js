const n1 = 7;

const n2 = 5;

// Iprasta funkcija (function declarion)
function sum(a,b) {
    if (typeof a !== 'number') {
        return 'ERROR';
    }

    if (typeof b !== 'number') {
        return 'ERROR';
    }


    return a + b;
}

console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);



// Anonime funkcija, kintamajam priskirta
const diff = function (a,b) {
    return a - b;
}

console.log(`${n1} - ${n2} = ${diff(n1, n2)}`);



// Arrow function (rodykline funkcija)
const multi = (a,b) => {
    return a * b;
}

console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);



// Arrow function
// jeigu, logikos bloke yra tik 1 procedura
// tai galima nerasyti {return}
// Gauna ir grazina rezultata
const div = (a, b) => a / b;

console.log(`${n1} / ${n2} = ${div(n1, n2)}`);



// Arrow function (Rodykline funkcija)
// jeigu,  parametru (argumentu) bloke, yra tik 1 argumentas
// tai tada galima nerasyti ()
//pataisyti
const sqr = a => a * a;
console.log(`${n1} * ${n2} = ${sqr(n1)}`);
console.log(`${n1} * ${n2} = ${sqr(n2)}`);


function lastSymbol(text) {
    return text[text.length - 1];
    }
    

const firstSymbol = function (text) {
    return text[0];
}



console.log('Labas\t', lastSymbol('Labas'));
console.log('Labas\t', lastSymbol('Labas'));
