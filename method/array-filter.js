const marks = [-1, 10, 100, 2, 8, 4, 3.14, 'desimt', true, 6, [10, 4], {}, NaN, Infinity];


// Pirmas Budas
const validMarks = [];

for (const mark of marks) {
    if ( !Number.isInteger(mark)
        || mark < 1
        || mark > 10
)
        {


        continue;
    }

    validMarks.push(mark);
}

console.log(validMarks);


// Antras Budas


const validMarks2 = marks
.filter(mark => typeof mark === 'number')
.filter(mark => isFinite(mark))
.filter(mark => mark % 1 === 0)
.filter(mark => mark > 0)
.filter(mark => mark <= 10)

console.log(validMarks2);


// Trecias budas


const validMarks3 = marks
.filter(mark => Number.isInteger(mark))
.filter(mark => mark > 0)
.filter(mark => mark <= 10)

console.log(validMarks3);


// Ketvirtas budas


const validMarks4 = marks
.filter(mark => Number.isInteger(mark) && mark > 0 && mark <= 10);

console.log(validMarks4); 

console.log(Array.prototype.flat);
console.log(Array.prototype.every);
console.log(Array.prototype.some);
console.log(Array.prototype.forEach);
console.log(Array.prototype.sort);
console.log(Array.prototype.reduce);