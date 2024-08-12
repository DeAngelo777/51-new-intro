


const names = ['Jonas Jonaitis', 'Maryte Mrynaite', 'Petras Petraitis', 'Ona Onaite'];
// const abbr = [];


// for (const name of names) {
//     const words = name.split(' ');


//     for (let i = 0; i < words.length; i++) {
//         words[1] = words[i][0] + '.';
//     }
    
        
//     abbr.push(words.join('');)
// }


// console.log(abbr);


// 2 Budas

const abbr2 = [];


for (const name of names ){
    abbr2.push(
        name
            .split (' ')
            .map(word => word[0] + '.')
            .join('')
);
}
console.log(abbr2);




// 3 Budas


const abbr3 = names.map(
    name => name
    .split (' ')
    .map(word => word[0] + '.')
    .join('')
)
    console.log(abbr3);


/*

Kaip is pilno vardo yra gaunama inicialai?

Inicialai yra zodziu pirmos raides prie kuriu yra pridet taskai.

PIlnas vardas isskaidoams atskirais zodziais

Is kiekvieno zodzio pasiliekam tik pirma raide

Po kiekvieno simbolio pridedam po taska

1)
// 'Jonas Jonaitis
2) split(' ')
['Jonas' 'Jonaitis']

3) for () {} + [0]+ '.'

for () {} + [0]
['J', 'J']

4 join ('')


*/
