const students = [
    {
        name: 'Jonas',
        marks: [10, 2, 4, 4],
    },

    {
        name: 'Maryte',
        marks: [9, 7, 6, 9],
    },

];

// Studento, vardu JOnas, pazymiu vidurkis yra 6
// Studento, vardu Maryte, pazymiu visurkis yra 7
//Jonas

let sumJonas = 0;
sumJonas+= students[0].marks[0];
sumJonas+= students[0].marks[1];
sumJonas+= students[0].marks[2];
sumJonas+= students[0].marks[3];


const averageJonas = sumJonas / students[0].marks.length;

const msgJonas = 'Studento, vardu' + students[0].name + 'pazymiu vidurkis yra ' + averageJonas;

console.log(msgJonas);

// Maryte

let sumMaryte = 0;
sumMaryte+= students[1].marks[0];
sumMaryte+= students[1].marks[1];
sumMaryte+= students[1].marks[2];
sumMaryte+= students[1].marks[3];


const averageMaryte = sumMaryte / students[1].marks.length;

const msgMaryte = 'Studento, vardu' + students[1].name + 'pazymiu vidurkis yra ' + averageMaryte;

console.log(msgMaryte);



function emptyFunc () {
    //tuscia funkcija, kuri nieko nedaro
    // nes jos logikos blokas yra tuscias
    // bet ... visos funkcijos grazina savo darbo rezultata
    return undefined;
}

const ans1 = emptyFunc();

console.log(ans1);


function giveMeFive(){
    return '5';
}

console.log(giveMeFive());



// labas, as Jonas
// labas, as Jonas
// labas, as Jonas
// labas, as Jonas
// labas, as Jonas


function hello(name) {
    
    
    
    
    return 'Hello, aš ' + name + '!';
}


console.log(hello('Jonas'));
console.log(hello('Martynas'));
console.log(hello('Petras'));
console.log(hello('Ona'));


function twoNumbersAverage(a, b) {
    return (a + b) / 2;
}


const a = (7 + 5) / 2;
const b = (11 + 5) / 2;
const c = (11 + 7) / 2;
const d = (13 + 666) / 2;

const a2 = twoNumbersAverage(7, 5);
const b2 = twoNumbersAverage(7, 2);
const c2 = twoNumbersAverage(6, 5);
const d2 = twoNumbersAverage(11, 5);


console.log(a2);
console.log(b2);
console.log(c2);
console.log(d2);



console.clear();


function threeNumbersAverage(a, b, c) {
    return (a + b + c ) /3;
}

console.log(threeNumbersAverage(1,2,3));
console.log(threeNumbersAverage(9,10,10));
console.log(threeNumbersAverage(5,3,10, 20));


function love(color) {
    return `I love ${color} color!`;
}

console.log(love('red'));
console.log(love('green'));
console.log(love('blue'));


const userName = 'Jonas';
const userSurname = 'Jonaitis';

const abbr = `${userName[0]}.${userSurname[0]}`;

console.log(abbr);


function evenOdd3(number) {
    return `Skaicius ${number} yra ${number % 2 === 0 ? '' : 'ne'}lyginis.`;
}
console.log(evenOdd3(5));
