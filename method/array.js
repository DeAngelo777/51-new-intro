// Array

console.log(Array.isArray);




console.log();

// const marks = {"zuikis";
// };

// console.log(marks);

const simtasZuikiu = new Array(10).fill(4);
console.log(simtasZuikiu);

for (let i = 0; i <simtasZuikiu; i++) {
    simtaszuikiu[i] = i;
}

console.log(simtasZuikiu);

console.log()
console.log(Array.prototype.at);
console.log([18,2,8,4,6].at(0));
console.log([18,2,8,4,6].at(1));
console.log([18,2,8,4,6].at(2));
console.log([18,2,8,4,6].at(3));
console.log([18,2,8,4,6].at(4));
console.log([18,2,8,4,6].at(5));
console.log([18,2,8,4,6].at(-1));
console.log([18,2,8,4,6].at(-2));
console.log([18,2,8,4,6].at(-3));
console.log([18,2,8,4,6].at(-4));
console.log([18,2,8,4,6].at(-5));
console.log([18,2,8,4,6].at(-6));

console.log();
console.log(Array.prototype.concat);
console.log([1,2].concat(3));
console.log([1,2].concat(3,4));
console.log([1,2].concat(3,4),5);
console.log([1,2].concat([3,4], 5 [6,7] ,8));

console.log();
console.log(Array.prototype.includes);
console.log([10,2,8,4,6].indexOf(10));
console.log([10,2,8,4,6].indexOf(2));
console.log([10,2,8,4,6].indexOf(5));
console.log([10,2,8,4,6].indexOf(28));

console.log();
console.log(Array.prototype.join);

const text = 'Labas rytas Lietuva';
const words = text.split(' ');

console.log(words.join());
console.log(words.join(''));
console.log(words.join(','));
console.log(words.join(',') + '.');
console.log(words.join('--==--'));

console.log();
console.log(Array.prototype.reverse);
const number3 = [1,2,3];
number3.reverse();

console.log(number3);

number3.reverse();

console.log(number3);

number3.reverse();

console.log(number3);

const pom = 'Pomidoras';
const pomLetter = pom.split('')
pomLetter.reverse();
console.log(pomLetter);
const pomReversed = pomLetter.join('');
console.log(pomReversed);

const agurkas = 'Agurkas'.split('').reverse().join('');
console.log(agurkas);

const svogunas = 'Svogunas'.split('').reverse('').join('');
console.log(svogunas);

console.log();
console.log(Array.prototype.slice);

const double = [11,22,33,44,55,66,77];
console.log(double.slice());
console.log(double.slice(0));
console.log(double.slice(3));
console.log(double.slice(-3));
console.log(double.slice(-1));
console.log(double.slice(0, -2));
console.log(double.slice(0, -4));
console.log(double.slice(2, -2));

console.log();
// Prideda i gala
console.log(Array.prototype.push);
// Nuiima nuo galo
console.log(Array.prototype.pop);
// Nuima nuo priekio
console.log(Array.prototype.shift);
// Prideda i prieki
console.log(Array.prototype.unshift);


console.clear();

const marks = [10,2,8,4,6];
console.log(marks);

marks.push(5);
marks.push(7);
marks.push(9);
console.log(marks);
marks.pop();
console.log(marks);
marks.pop();
console.log(marks);

marks.unshift(0);
console.log(marks);

marks.unshift(1);
console.log(marks);


marks.unshift(2);
marks.unshift(3);
console.log(marks);

marks.shift();
console.log(marks);
marks.shift();
console.log(marks);

marks.unshift(0);
console.log(marks);

console.log();

const jonoPazymiai = [10, 2, 8, 4, 6];
const geresnJonoPazymiai = [];

for (const pazymys of jonoPazymiai) {
    let geresnisPazymys = pazymys *2;

       if (geresnisPazymys > 10) {
        geresnisPazymys = 10;
       }
        geresnJonoPazymiai.push(geresnisPazymys);
}

console.log(jonoPazymiai);
console.log(geresnJonoPazymiai);
