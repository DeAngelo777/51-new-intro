"use strict";

/*
N.D.

Reikalingas sarasas prekiu.
Kiekviena preke yra aprasoma pavadinimu, kaina uz vieneta ir norimu pirkti kiekiu.

Reikia isspausdinti:

A) SABLONAS:
Prekiu krepselyje yra COUNT prekiu.

B) SABLONAS:
Prekiu krepselis
----------------
1) PAVADINIMAS (KAINA UZ VIENETA Eur) - KIEKIS
2) PAVADINIMAS (KAINA UZ VIENETA Eur) - KIEKIS
...
N) PAVADINIMAS (KAINA UZ VIENETA Eur) - KIEKIS

C) SABLONAS:
Prekiu krepselio verte yra TOTAL KAINA Eur.
*/



prekes = [
    {
    krepselis: 1,
    pavadinimas: 'Bulves',
    kaina: 0.99,
    kiekis: 10,
    },
    {
    krepselis: 1,
    pavadinimas: 'Agurkai',
    kaina: 0.69,
    kiekis: 14,
    }

];

let totalKaina = (prekes[0].kiekis * 0.99) + (prekes[1].kiekis * 0.69);



let prekiuSuma = prekes[0].krepselis + prekes[1].krepselis;

console.log('A Šablonas');
console.log('');
console.log('Prekių krepšelyje yra ' + prekiuSuma + ' prekės');
console.log('');
console.log('');


console.log('B Šablonas');
console.log('');
console.log('Prekių krepšelis');
console.log('-----------------');
console.log('1) ' + prekes[0].pavadinimas + ' kainuoja ' + prekes[0].kaina + '€ už kilogramą. Likutis - ' + prekes[0].kiekis + 'kg');
console.log('');
console.log('2) ' + prekes[1].pavadinimas + ' kainuoja ' + prekes[1].kaina + '€ už kilogramą. Likutis - ' + prekes[1].kiekis + 'kg');
console.log('');
console.log('');
console.log('C Šablonas');
console.log('');
console.log('Prekių krepšelio vertė yra ' + Math.floor(totalKaina) + '€');