function sumaIntervale(start, end) {
    // 1. atejusios informacijos (params) validavimas
    
    if ( typeof start !== "number") {
        return 'Klaida, prašome įvesti skaičiu';
}


if ( typeof start === Infinity || start === -Infinity) {
    return 'Klaida, prašome įvesti skaičiu (Pirmo skaiciaus klaida)';
}

if ( typeof end !== "number") {
    return 'Klaida, prašome įvesti skaičiu (Antro skaicius klaida)';
}



if ( typeof start !== "number") {
    return 'Klaida, prašome įvesti skaičiu';
}

if (start % 1 !==0)

if (isNaN(end)) {
    return 'Klaida, prašome įvesti skaičiu';
}

if (isNaN(start)) {
    return 'Klaida, prašome įvesti skaičiu';
}
if (end % 1 !==0){
    return 'Klaida, prašome įvesti skaičiu';
}

if (end < start) {
    return 'Error: pirmasis skaicius negali buti didesnis uz antraji'
}

    // 2. Logika

    let sum = 0;
    if (start === 0) {
        sum = end * (end + 1) /2;
    } else if (end === 0) {
        sum = start * (start -1) /2;
    } else if (start < 0 && end > 0) {
        sum += start * (start - 1) / 2;
    }
    else {
    for (let i = start; i <= end; i++){
        sum += i;
    }
}

//Papildyti logika, truksta 1 uzduoti, (august 6)

    //3. Logikoje gauto rezultato validavimas
    //if jeigu yra string neduoti rezultato (nes dabar duoda 0),
    //, jeigu skaicius viskas ok 
    

    //4.  Rezultato grazinimas
    return sum;
}



console.log(sumaIntervale('labas', 'rytas'));
console.log(sumaIntervale(0, 'rytas'));
console.log(sumaIntervale('rytas', 2));
console.log(sumaIntervale(777, true));
console.log(sumaIntervale(true, 777));
console.log(sumaIntervale(true, false));
console.log(sumaIntervale(false, true));
console.log(sumaIntervale(777, []));
console.log(sumaIntervale([], 777));
console.log(sumaIntervale([], [15]));
console.log(sumaIntervale([15], [15]));
console.log(sumaIntervale([77, 88], [15]));
console.log(sumaIntervale([77, 88], [15, 16]));
console.log(sumaIntervale(5, {}));
console.log(sumaIntervale({}, 5));
console.log(sumaIntervale({}, {}));
console.log(sumaIntervale(5, null));
console.log(sumaIntervale(null, 5));
console.log(sumaIntervale(null, null));
console.log(sumaIntervale(5, undefined));
console.log(sumaIntervale(undefined, 5));
console.log(sumaIntervale(undefined, undefined));
console.log(sumaIntervale(5, sumaIntervale));
console.log(sumaIntervale(sumaIntervale, sumaIntervale));
console.log(sumaIntervale(sumaIntervale, 5));
console.log(sumaIntervale(5, Infinity));
console.log(sumaIntervale(Infinity, 5));
console.log(sumaIntervale(Infinity, Infinity));
console.log(sumaIntervale(5, -Infinity));
console.log(sumaIntervale(-Infinity, 5));
console.log(sumaIntervale(-Infinity, -Infinity));
console.log(sumaIntervale(5, NaN));
console.log(sumaIntervale(NaN, 5));
console.log(sumaIntervale(NaN, NaN));
console.log(sumaIntervale(-NaN, -NaN));



// console.log(sumaIntervale(10, 5, 50));
console.log(sumaIntervale(1));
console.log(sumaIntervale());
 
console.log('--------');
console.log(sumaIntervale(0, 3.5));
console.log(sumaIntervale(0, -3.5));

console.log(sumaIntervale(3.5, 10));
console.log(sumaIntervale(3.5, 10.8));
console.log(sumaIntervale(-3.5, 10.8));
console.log(sumaIntervale(-3.5, -10.8));

console.log(sumaIntervale(4, 0));
console.log(sumaIntervale(10, 5));






console.log('--------');


console.log(sumaIntervale(0, 4), '-->', 10);
console.log(sumaIntervale(-50, 50), '-->', 0);
console.log(sumaIntervale(0, 100), '-->', 5050);
console.log(sumaIntervale(-70, 30), '-->', -2020);
console.log(sumaIntervale(574, 815), '-->', 'didesnis skaicius');
console.log(sumaIntervale(0, 0), '-->', 0);

console.log(sumaIntervale(0, 10), '-->', 55);
console.log(sumaIntervale(0, 100), '-->', 5050);
console.log(sumaIntervale(0, 1000), '-->', 500500);
console.log(sumaIntervale(0, 10_000), '-->', 50005000);
console.log(sumaIntervale(0, 100_000), '-->', 5000000050000000);
console.log(sumaIntervale(0, 1_000_000_000), '-->', 500000000500000000);
console.log(sumaIntervale(0, 10_000_000_000), '-->', 5000000000050000000000);

// CPU -> 1 core -> 3GHz - > 3 mljrd - > 10 mljrd > 3


console.log('--------');


console.log(sumaIntervale(0, 4), '-->', 10);
console.log(sumaIntervale(-50, 50), '-->', 0);
console.log(sumaIntervale(0, 100), '-->', 5050);
console.log(sumaIntervale(-70, 30), '-->', -2020);
console.log(sumaIntervale(574, 815), '-->', 'didesnis skaicius');
console.log(sumaIntervale(0, 0), '-->', 0);

console.log(sumaIntervale(0, 10), '-->', 55);
console.log(sumaIntervale(0, 100), '-->', 5050);
console.log(sumaIntervale(0, 1000), '-->', 500500);
console.log(sumaIntervale(0, 10_000), '-->', 50005000);
console.log(sumaIntervale(0, 100_000), '-->', 5000000050000000);
console.log(sumaIntervale(0, 1_000_000_000), '-->', 500000000500000000);
console.log(sumaIntervale(0, 10_000_000_000), '-->', 5000000000050000000000);

