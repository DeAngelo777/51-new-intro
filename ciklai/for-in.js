// For in ciklas

const person = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
    phone: 861245654,
    address: { 
        street: 'asdasd',
        city: 'silute',
        county: 'nzn',

    },
    marks: [10, 2, 8, 4, 6],
};

const keys = Object.keys(person);
console.log(keys);
console.log(Object.keys(person.address));


// 1 versija
for (i =0; i < keys.length; i++){
    const key = keys[i];
    console.log(i, keys[i], person[keys[i]]); {

}
}
console.log('---');

// 2 versija
const keys2 = Object.keys(person);
for (const key of keys) {
    console.log(key, person[key]); {

}
}
console.log('---');


// 3 Versija

for (const key in person) {
    console.log(key,'-->',person[key]);
}

console.clear();

// For in

const abc = {
    a: 'arbuzas',
    b: 'bulve',
    c: 'citrina',
    d: 'dilgele',
};

let index = 1;
for (const key in abc) {
    console.log(`${index++} Objekte, po raktu "${key}" yra reiksme "${abc[key]}"`);
}