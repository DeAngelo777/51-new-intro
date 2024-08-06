// For-Of ciklas








    const names = ['Jonas', 'Maryte', 'Petras', 'Ona', 'Chuck', 'Liusi', 'Batman', 'Tom', 'Jerry', 'Xena'];



    for (let i = 0; i < names.length; i++) {
        const name = names[i];

        console.log(`Sveiki, mano vardas yra ${names[i]}!}`);
    }
    


    const darzoves = ['bulve', 'pomidoras', 'agurkas', 'svogunas', 'cesnakas', 'morka', 'burokelis', 'ridikelis', 'salota', 'kopustas'];

    for (const darzove of darzoves) {
        console.log(`As auginu ${darzove}`);
    }


// Paskutini trumpiausio pavadinimas darzove => morka

// let shortVeg  = darzoves[0];
// console.log(shortVeg);
// for (const veg of darzoves) {
//     if (veg.length <= shortVeg.length) {
//         shortVeg=veg;
//     }
//     console.log(shortVeg);
// }

// Pirma ilgiausios pavadinimo darzove - >

// const longVeg = darzoves[0];

// for (const veg of darzoves) {
//     if (veg.length > longVeg.length) {
//         longVeg=veg;
//     }

    
// }
// console.log(longVeg);
// Pataisyti

// Pirma darzove kurios pavadinams prasideda s raide
// const sRatedVeg = '';

// for (const veg of darzoves) {
//     if (veg[0] === 's' )  {
//         sRatedVeg = veg;
//         break;
//     }
// }

// console.log(sRatedVeg);
// Pataisyti

console.log(darzoves);

for (let veg of darzoves) {
    veg = 777;
}
console.log(darzoves);