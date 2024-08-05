const age = 17.9999;

const ageLimit = 18;

const msgOk = 'Valio! Turi pakankamai metu!';
const msgErr = 'Ups! Palauk dar metus kitus!';


let msg = '';


if (age >= ageLimit) {
    msg = msgOk;
} else {
    msg = msgErr;
}

console.log('Message:', msg);


const msg2 = age >= ageLimit ? msgOk  : msgErr;

console.log('Message', msg2);


if (undefined) {
    console.log('True');
} else {
    console.log('False');
}


const a = 1 < 2 ? 3 : 4;

console.log(a);

const i = 0
    ? 1
        ? 2
        : 3
    : 4
        ? 5
        : 6;

console.log(i);

