console.log(typeof 123);
console.log(typeof 1.23);
console.log(typeof -123);
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);


console.log('-------');


console.log(typeof '');


console.log('-------');


console.log(typeof true);
console.log(typeof false);
console.log('------------');


console.log(typeof undefined);


console.log('------------');
console.log(typeof [1, 2]);
console.log(typeof ['Labas rytas', 2]);
console.log(typeof {});
console.log(typeof null);


console.log('------------');

console.log(Array.isArray([]));
console.log([], Array.isArray([1, 2]));
console.log([1, 2], Array.isArray([1, 2]));
console.log(['labas', 'rytas'], Array.isArray(['Labas', 'Rytas']));
console.log([], Array.isArray(777));
console.log([], Array.isArray('asd'));
console.log(Array.isArray(undefined));
console.log(Array.isArray(null));


console.log('------------');


console.log(null === null);

function arTikrasObjektas(item) {
    if (typeof item !== 'object'
        || item === null
        || Array.isArray(item)
    ) {
        return false;
    }
return  true;
}


console.log('------------');


console.log(arTikrasObjektas);
console.log(arTikrasObjektas(1));
console.log(arTikrasObjektas('s'));
console.log(arTikrasObjektas(null));

console.log(arTikrasObjektas([]));
console.log(arTikrasObjektas({}));


