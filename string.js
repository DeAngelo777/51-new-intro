const single = 'Labas rytas, Lietuva';

console.log(single);


const double = 'Labas rytas, Lietuva';

console.log(double);


// Vienguba kabute.

const kabute1 = "Vienguba (') kabute.";

console.log(kabute1);

// Dviguba kabute

const kabute2 = 'Dviguba (") kabute.';

console.clear();

const name = "Chuck" + " ";

const surname = 'Norris';

const fullname = name + surname

console.log(fullname);

console.clear();

// My name is not Chuck Norris, bus I like it!

const chuck = "My name is not " + name + " " + surname + ", but I like It!";

console.log(chuck);

// Vienguba (') ir dviguba (" kabutes.)

const kabute12 = "Vienguba (') ir " + 'dviguba (");'

console.log(kabute12);

console.clear();

const kabute12_1 = 'Vienguba (\') ir dviguba (") kabutes.';
const kabute12_2 = "Vienguba (') ir dviguba (\") kabutes.";
const kabute12_3 = "Vienguba (\') ir dviguba (\") kabutes.";
const kabute12_4 = 'Vienguba (\') ir dviguba (\") kabutes.';



console.log(kabute12_1);
console.log(kabute12_2);
console.log(kabute12_3);
console.log(kabute12_4);

console.clear();

const backflash = "Backflash is ok (\\)";
const backflash2 = 'Backflash is ok (\\)';


console.log(backflash);
console.log(backflash2);

// Savybes 
// .lenght

console.clear();

const hi = 'Labas';
const hiSize = hi.length;

// Teksto "<Tekstas>"" ilgis yra <ILGIS> simboliu.

const textSize = 'Teskto "' + hi + ' "ilgis yra ' + hi.length;
const textSize2 = 'Teskto "' + hi + ' "ilgis yra ' + hiSize + ' Simboliu.';

console.log(textSize);
console.log(textSize2);


console.log('------------------');

let textSize3 = '';

textSize3 = textSize3 + 'Teksto "';

console.log(1, textSize3);


textSize3 = textSize3 + 'Teksto "';

console.log(2,textSize3);


textSize3 = textSize3 + 'ilgiasds   yra "';

console.log(3, textSize3);


textSize3 = textSize3 + hi.length;

console.log(4,textSize3);


textSize3 = textSize3 + ' simbolasdiu "';

console.log(5, textSize3);


const labasRytas = 4;

const pomidoras = 'Pomidoras';

console.log(pomidoras);

const symbol1 = pomidoras[1];

console.log(symbol1);

const symbol2 = pomidoras[2];

console.log(symbol2);

const symbol3 = pomidoras[3];

console.log(symbol3);

const symbol4 = pomidoras[4];

console.log(symbol4);


console.log(pomidoras[8]);

console.clear();

const agurkas = 'Zalias Agurkas';

const agurkasFirst = agurkas[0];
const agurkasLast = agurkas[--agurkas.length];


console.log(agurkasLast)

console.clear();

const text = 'abc';

const lastSymbol1 = text [--text.length];
const lastSymbol2 = text [text.length - 1];




console.log(lastSymbol1);

console.log(lastSymbol2);


console.clear();


let personName = 'Vardenis';

const personSurname = 'Pavardenis';

console.log(personName + ' ' + personSurname);


const abbr = personName[0] + '.' + personSurname[0] + '.';



console.log(abbr);


console.log(' >>>', personName/ 2);


console.clear();

const color1 = 'red';
const color2 = 'green';
const color3 = 'blue';

const colorMix= color1;

console.log(color1 +  ' ' + color2);