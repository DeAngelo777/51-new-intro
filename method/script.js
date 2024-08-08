// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String



console.log(String.prototype.at);
const str1 = 'Pomidoras';

console.log(str1.at(0), str1[0]);
console.log(str1.at(1), str1[1]);
console.log(str1.at(2), str1[2]);
console.log(str1.at(3), str1[3]);
console.log(str1.at(3,1), str1[3]);
console.log(str1.at(3.5), str1[3.5]);
console.log(str1.at(3.9), str1[3.9]);

console.log(str1.at(4), str1[4]);
console.log(str1.at(-1), str1[-1]);
console.log(str1.at(-2));
console.log(str1.at(-3));
console.log(str1.at(-4));
console.log(str1.at(-5));
console.log(str1.at(-6));
console.log(str1.at(-7));
console.log(str1.at(-8));
console.log(str1.at(-9));
console.log(str1.at(-1), str1[str1.length-1]);
console.log(str1.at(-2), str1[str1.length-2]);
console.log(str1.at(-3), str1[str1.length-3]);
console.log(str1.at(-4), str1[str1.length-4]);


console.log('------------------------');

console.log(String.prototype.at);
const str2 = 'Pomidoras';

console.log(str2.charAt(0), str2[0]);
console.log(str2.charAt(1), str2[1]);
console.log(str2.charAt(2), str2[2]);
console.log(str2.charAt(3), str2[3]);
console.log(str2.charAt(3,1), str2[3]);
console.log(str2.charAt(3.5), str2[3.5]);
console.log(str2.charAt(3.9), str2[3.9]);

console.log(str2.charAt(4), str2[4]);
console.log(str2.charAt(-1), str2[-1]);
console.log(str2.charAt(-2));
console.log(str2.charAt(-3));
console.log(str2.charAt(-4));
console.log(str2.charAt(-5));
console.log(str2.charAt(-6));
console.log(str2.charAt(-7));
console.log(str2.charAt(-8));
console.log(str2.charAt(-9));
console.log(str2.charAt(-1), str2[str2.length-1]);
console.log(str2.charAt(-2), str2[str2.length-2]);
console.log(str2.charAt(-3), str2[str2.length-3]);
console.log(str2.charAt(-4), str2[str2.length-4]);




console.log('------------------------');

console.log(String.prototype.at);
const str3 = 'Svogunas';

console.log(str3.charCodeAt(0), str2[0]);
console.log(str3.charCodeAt(1), str2[1]);
console.log(str3.charCodeAt(2), str2[2]);
console.log(str3.charCodeAt(3), str2[3]);
console.log(str3.charCodeAt(3,1), str2[3]);
console.log(str3.charCodeAt(3.5), str2[3.5]);
console.log(str3.charCodeAt(3.9), str2[3.9]);

console.log(str3.charCodeAt(4), str2[4]);
console.log(str3.charCodeAt(-1), str2[-1]);
console.log(str3.charCodeAt(-2));
console.log(str3.charCodeAt(-3));
console.log(str3.charCodeAt(-4));
console.log(str3.charCodeAt(-5));
console.log(str3.charCodeAt(-6));
console.log(str3.charCodeAt(-7));
console.log(str3.charCodeAt(-8));
console.log(str3.charCodeAt(-9));
console.log(str3.charCodeAt(-1), str2[str2.length-1]);
console.log(str3.charCodeAt(-2), str2[str2.length-2]);
console.log(str3.charCodeAt(-3), str2[str2.length-3]);
console.log(str3.charCodeAt(-4), str2[str2.length-4]);
console.log('a', 'a'.charCodeAt(0));
console.log('b', 'b'.charCodeAt(0));
console.log('c', 'c'.charCodeAt(0));
console.log('A', 'A'.charCodeAt(0));
console.log('B', 'B'.charCodeAt(0));
console.log('C', 'C'.charCodeAt(0));
console.log('z', 'z'.charCodeAt(0));
console.log('Z', 'Z'.charCodeAt(0));



console.log('A' < 'a');
console.log('Z' < 'a');
console.log('A' < 'B');
console.log('aaa' < 'bbb');
console.log('bca' < 'bbb');

console.log(String.fromCharCode);

console.log('-------------');
console.log('-------------');

// Pataisyti cikla

for (let i = 97; i <= 122; i++) {
    console.log(i, String.fromCharCode(i));
}

console.log('-------------');
console.log('-------------');
console.log('-------------');
console.log('-------------');
console.log('-------------');
console.log('-------------');
console.log('-------------');
console.log('-------------');
console.log('-------------');

console.log('-------------');

console.log(String.prototype.concat);
console.log('Labas' + 'Rytas');
console.log('Labas'.concat(' rytas'));
console.log('Labas'.concat(' rytas', 'rytas'));
console.log('Labas'.concat(' ', 'rytas', ' ', 'rytas'));
console.log('Labas'.concat(' ', 'rytas', ' ', 'rytas'));
console.log('Labas'.concat(' ', 'rytas', ' ', 'lietuva', 'sakau'));



const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

console.log('Labas' + names);
console.log('Labas'.concat(names));
console.log('Labas'.concat(...names));
console.log('Labas'.concat(names[0], names[1], names[2], names[3]));


let concatedNames = 'LabasSS';
for (const name of names ){
    concatedNames += name;
}

console.log(concatedNames);

console.clear();

console.log(String.prototype.startsWith);
console.log('Labas'.startsWith('A'));
console.log('Labas'.startsWith('a'));
console.log('Labas'.startsWith('l'));
console.log('Labas'.startsWith('lb'));
console.log('Labas'.startsWith('L'));
console.log('Labas'.startsWith('La'));
console.log('Labas'.startsWith('Lab'));
console.log('Labas'.startsWith('Laba'));
console.log('Labas'.startsWith('Labas'));

console.log(String.prototype.endsWith);
console.log('Labas'.endsWith('X'));
console.log('Labas'.endsWith('L'));
console.log('Labas'.endsWith('sa'));
console.log('Labas'.endsWith('s'));
console.log('Labas'.endsWith('as'));
console.log('Labas'.endsWith('bas'));
console.log('Labas'.endsWith('abas'));
console.log('Labas'.endsWith('Labas'));



function isQuestion(str) {
    return str.endsWith('?');
}

console.log(isQuestion('Labas'));
console.log(isQuestion('Ka tu'));
console.log(isQuestion('Ka tu?'));

// N.D vertinimui 
// (Kiek praeina saugumu? 
// (visi turi buti))
// Konvertuoti varda, apie kuri nesi pagalvojes
// N.D. - vardo (bendraties forma) konvertavimas i jo "kreipinio" forma
// Pvz.: Ona -> "Sveiki, Ona!"
// Pvz.: Onutė -> "Sveiki, Onute!"
// Pvz.: Jonas -> "Sveiki, Jonai!"


console.log(String.prototype.includes);
console.log('Labas'.includes('X'));
console.log('Labas'.includes('C'));
console.log('Labas'.includes('a'));
console.log('Labas'.includes('b'));
console.log('Labas'.includes('ab'))
console.log('Labas'.includes('ba'));
console.log('Labas'.includes('Lab'));
console.log('Labas'.includes('lab'));
console.log('Labas'.includes('bas'));

// Perziureti po paskaitos
// console.log(String.prototype.indexOf);

// console.log('Labas'.indexOf('X'));
// console.log('Labas'.indexOf('C'));
// console.log('Labas'.indexOf('a'));
// console.log('III');
// console.log('Labas'.indexOf('b'));
// console.log('Labas'.indexOf('ab'));
// console.log('Labas'.indexOf('ba'));
// console.log('Labas'.indexOf('Lab'));
// console.log('Labas'.indexOf('lab'));
// console.log('Labas'.indexOf('bas'));


console.log(String.prototype.repeat);
console.log('Labas'.repeat(1));
console.log('Labas'.repeat(2));
console.log('Labas'.repeat(3));
console.log('Labas'.repeat(10));



function repeatText(str, count ){
let result = '';

for (let i=0; i <count; i++){
    result += 'Labas';
}

return result;

}
console.log('---');
console.log('Labas'.repeat(0));
console.log(repeatText('Labas', 0));

console.log('Labas'.repeat(1));
console.log(repeatText('Labas', 1));

console.log('Labas'.repeat(2));
console.log(repeatText('Labas', 2));

console.log('Labas'.repeat(3));
console.log(repeatText('Labas', 3));

console.log('Labas'.repeat(10));
console.log(repeatText('Labas', 10));

console.log(String.prototype.replace);
console.log('Aaaaa'.replace('aa','----'));
console.log('Aaaaa'.replace('aaa','----'));
console.log('Aaaaa'.replace('aaaa','----'));
console.log('Aaaaa'.replace('aaaaa','----'));
console.log('Aaaaa'.replace('aaaaa','----'));
console.log('Aaaaa'.replace('aaaaaaa','----'));
console.log('Aaaaaaaaaaa'.replace('aaaaaaaa','--a--'));
console.log('Aaaaa'.replace('aaaaaaaaa','----'));
console.log('Aaaaa'.replace('aaaaaaaaaaa','----'));
console.log('Vasara'.replace('a','-'));
console.log('---');

let summer = 'Vasara';
console.log(summer);
// Itakoja duomenu forma
summer = summer.replace('a', '-')

console.log(summer.replace('a','-'));
// Grazina nauja rezultata
console.log(summer);

let bananas = 'Bananas';

bananas = bananas.replace('a', '-');
console.log(bananas);

bananas = bananas.replace('a', '-');
console.log(bananas);

bananas = bananas.replace('a', '-');
console.log(bananas);

console.log('--');
let pavasaris = 'pavasaris';

console.log(pavasaris);

pavasaris = pavasaris.replaceAll('a', "*");
console.log(pavasaris);

console.clear();

console.log(String.prototype.slice);

console.log('pomidoras'.slice());
console.log('pomidoras'.slice(1));
console.log('pomidoras'.slice(2));
console.log('pomidoras'.slice(3));
console.log('pomidoras'.slice(4));
console.log('pomidoras'.slice(-1));
console.log('pomidoras'.slice(-2));
console.log('pomidoras'.slice(-3));
console.log('pomidoras'.slice(-4));
console.log('-----');
console.log('pomidoras'.slice(0,0));
console.log('pomidoras'.slice(0,1));
console.log('pomidoras'.slice(0,2));
console.log('pomidoras'.slice(0,4));
console.log('pomidoras'.slice(2,4));
console.log('pomidoras'.slice(2,6));
console.log('pomidoras'.slice(0,-1));
console.log('pomidoras'.slice(0,-2));
console.log('pomidoras'.slice(0,-3));
console.log('pomidoras'.slice(0,-4));
console.log('pomidoras'.slice(1,-3));
console.log('pomidoras'.slice(2,-3));
console.log('pomidoras'.slice(3,-2));
console.log('pomidoras'.slice(0,-2));
console.log('pomidoras'.slice(-2));

console.clear();

console.log(String.prototype.split)
console.log('labas'.split('a'));
console.log('labas'.split('b'));
console.log('pavasaris'.split('b'));
console.log('bananas'.split('a'));
console.log('bananas'.split('ana'));
console.log('bananas'.split('an'));
console.log('bananas'.split('bana'));
console.log('bananas'.split(''));

console.log('bananas'.split('')[3]);
console.log('bananas'[3]);
console.log('---');

const str = 'Labas rytas Lietuva';
const dic = str.split(' ');

console.log('Žodžių kiekis:',dic.length);

// Uzdavinys teksto analizei, 
// turi string (copy text is website)
// Kiek yra pastraipu ?
// Kiek yra sakiniu?
// Kiek turi sauktuku?
// Arba kiek yra klausimu?
// Kiek yra visame tekste zodziu?
// Kiek yra unikaliu zodziu?
// Koks ilgiausias zodis?
// Koks dazniausias zodis?
// Kiek zodziu su vienu simboliu (4, 8 , 20 ilgio)
// Kiek tekste yra vardu ? (is didziosios raides, )
// Kiek yra vietovardziu (didzioji raide,) (specialiuoji rasyba )
// Jeigu turi vardu sarasa, gali suskaiciuoti vardus.
// (Savo autocorect)

console.log(String.prototype.toLowerCase);
console.log(String.prototype.toUpperCase);

console.log('Labas'.toLowerCase());
console.log('Labas'.toLocaleLowerCase());
console.log('Labas'.toUpperCase());
console.log('Labas'.toLocaleUpperCase());

function isUpperCaseWord(str) {
    if (str[0] === str[0].toUpperCase()) {
        return true;
    }
    
    return false;
}



function isLowerCaseWord(str) {
    if (str[0] === str[0].toLowerCase()) {
        return true;
    }
    
    return false;
}


console.log(isLowerCaseWord('labas'));
console.log(isUpperCaseWord('Labas'));

console.log(`"${'pavasaris'.trim()}"`);
console.log(`"${'pavasaris'.trimStart()}"`);
console.log(`"${'pavasaris'.trimEnd()}"`);

console.log(`"${'pavasaris mano kieme       '.trim()}"`);
console.log(`"${'pavasaris mano kime        '.trimStart()}"`);
console.log(`"${'pavasaris mano kieme       '.trimEnd()}"`);

console.log(`"${'           pavasaris'.trim()}"`);
console.log(`"${'           pavasaris'.trimStart()}"`);
console.log(`"${'           pavasaris'.trimEnd()}"`);


console.log(`"${'           trim        '.trim()}"`);
console.log(`"${'           trimStart       '.trimStart()}"`);
console.log(`"${'           trimEnd     '.trimEnd()}"`);


console.log(`"${'           a   b        '.trim()}"`);
console.log(`"${'           b   b       '.trimStart()}"`);
console.log(`"${'           b   b     '.trimEnd()}"`);



























