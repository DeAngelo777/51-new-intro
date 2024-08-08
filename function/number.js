console.log(isFinite);

console.log(isFinite(0));
console.log(isFinite(-5));
console.log(isFinite(5));
console.log(isFinite(5.125));
console.log(isFinite(-5));
console.log(isFinite(NaN));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log(isFinite('-------'));
console.log(isFinite(''))
console.log(isFinite('5'));
console.log(isFinite(true));
console.log(isFinite(false));
console.log(isFinite(null));
console.log(isFinite(undefined));
console.log(isFinite());
console.log(isFinite([]));
console.log(isFinite([1]));
console.log(isFinite([1,2]))
console.log(isFinite({}));;
console.log(isFinite({name: 'JOnas'}));
console.log(isFinite({age: 40}));
console.log(isFinite(() => {}));


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^š
console.log(`---------------------`);
console.log(Number.isFinite(0));
console.log(Number.isFinite(-5));
console.log(Number.isFinite(5));
console.log(Number.isFinite(5.125));
console.log(Number.isFinite(-5));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(''))
console.log(('-------'));
console.log(Number.isFinite('asass'));
console.log(Number.isFinite(true));
console.log(Number.isFinite(false));
console.log(Number.isFinite(null));
console.log(Number.isFinite(undefined));
console.log(Number.isFinite());
console.log(Number.isFinite([]));
console.log(Number.isFinite([1]));
console.log(Number.isFinite([1,2]))
console.log(Number.isFinite({}));;
console.log(Number.isFinite({name: 'JOnas'}));
console.log(Number.isFinite({age: 40}));
console.log(isFinite(() => {}));
console.clear();

// Istraukia sveikaji skaicu, is string
console.log(parseInt);
console.log(parseInt(1));
console.log(parseInt(1.23));
console.log(parseInt(1.999))
console.log(parseInt(-1));
console.log(parseInt(-1.23));
console.log(parseInt(-1.999));
console.log(parseInt(NaN));
console.log(parseInt(Infinity));
console.log(`---------------------`);
console.log(`---------------------`);

console.log(Infinity);
console.log(parseInt(-Infinity));
console.log(parseInt(true));
console.log(parseInt(false));
console.log(parseInt(null));
console.log(parseInt());
console.log(parseInt(undefined));
console.log(parseInt(() => {}));
console.log(parseInt([]));
console.log(parseInt([4, 5]));
console.log(parseInt([4]));
console.log(parseInt([4,5,6]))
console.log(parseInt([4.5, 5]));
console.log(parseInt({}));
console.log(parseInt({name: 'Jonas'}));
console.log(parseInt({number: 99}));
console.log(`--------------`);
console.log(parseInt(``));
console.log(parseInt('aaaa'));
console.log(parseInt('aaa55'));
console.log(parseInt('aaa555aaa'));
console.log(parseInt('555aa'));
console.log(parseInt('55555555.666666ccc'));
console.log(parseInt('-55555'));
console.log(parseInt('-5555.6666'));
console.log(parseInt('-55555555.6666aaaa'));
console.log(parseInt('-555555556666aaa66669a'));
console.log(parseInt(5e6));
console.log(parseInt('as11001d', '15'));


// SKaicciuoja per kableli
console.log(Number.parseFloat);
console.log(Number.parseFloat(-14e6));
console.log(Number.parseFloat(-14));
console.log(Number.parseFloat('-14a'));
console.log(Number.parseFloat('-2.36e6'));

console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
console.log(Number.POSITIVE_INFINITY === Infinity);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY === -Infinity);

// Suapvalia skaiciu


const n1 = 7;
const n2 = 5.4;
const n3 = 5.42;
const n4 = 5.434;
const n5 = 5.4324;

console.log(n1.toFixed(2));
console.log(n2.toFixed(3));
console.log(n3.toFixed(3));
console.log(n4.toFixed(5));
console.log(n5.toFixed(7));

function sun(a, b) {
    return Number.parseFloat((a + b).toFixed(10));

}
const crazy1 = (0.1, 0.2);
console.log(crazy1);

const crazy2 = (22.2, 0.2);
console.log(crazy2);

const crazy3 = (0.1, 4562);
console.log(crazy3);

const crazy4 = (0, 25.2999999999999999999999999999);
console.log(crazy4);

const crazy5 = (0, 25.300000000000000000000002);
console.log(crazy5);

const crazy6 = (0, 25.299999944499499999);
console.log(crazy6);



// console.log(crazy1.toFixed(10));
// console.log(Number.parseFloat(crazy1.toFixed(10)));



























;














