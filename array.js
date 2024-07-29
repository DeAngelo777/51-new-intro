


const dictionary = ['Labas', 'rytas', 'Lietuva'];


const word1 = dictionary[0];
console.log(word1);

const letter1 = word1[0];

console.log(letter1);


const letter11 = dictionary[0][0];
console.log(letter11);


const letter21  = dictionary[1][0];
console.log(letter21);


const pazymiai =  [1, 2, 4, 5, 5];

const suma = pazymiai[0] + pazymiai[1] + pazymiai[2] + 
pazymiai[3] + pazymiai[4]; 
const kiekis = pazymiai.length;

const vidurkis = suma/kiekis;

console.log('Suma', suma);
console.log('Kiekis', kiekis);
console.log('Vidurkis', vidurkis);


let tempSuma = 0;
let index = 0;

tempSuma += pazymiai[index];
index++;
console.log(tempSuma);

tempSuma += pazymiai[index];
index++;
console.log(tempSuma);

tempSuma += pazymiai[index];
index++;
console.log(tempSuma);

tempSuma +=+ pazymiai[index];
index++;
console.log(tempSuma);

tempSuma += pazymiai[index];
index++;
console.log(tempSuma);

console.log(index, tempSuma, tempSuma / pazymiai.length);

console.clear();

const colors = ['red', 'green', 'blue'];

// Lovely color: red, green, blue;

let colorStr = 'Lovely color: ';
let colorIndex = 0;
console.log(colorStr);

colorStr += colors[colorIndex++] + ',';

colorStr += colors[colorIndex++] + ',';
colorStr += colors[colorIndex++] + '!';


console.log(colorStr);




