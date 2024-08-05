// Object


// riestiniai skliaustai
//const empty {};


const student1 = {
name: "Jonas",
age: 99,
isMarried: true,
};



const student2 = {
    name: "Maryte",
    age: 88,
    isMarried: false,
    };

    


const student3 = {
        name: "Petras",
        age: 77,
        isMarried: false,
        address: 'Gatve, Miestas',
        };


const student4 = {
            name: "Ona",
            age: 55,
            isMarried: false,
            phone: 861255644,
            };


console.log(student1.isMarried);


const cars = [
        {
            brand: 'Audi',
            model: '80',
            color: 'red',
            price: 300,

        },
        {
            brand: 'Bmw',
            model: 'e90',
            color: 'black',
            price: 2000,
        },

        {
            brand: 'Mercedes',
            model: 'bbz',
            color: 'pilkas',
            price: 1000,
        },




];


// Automobilis BRAND, kurio spavla yra COLOR parduodamas už PRICE eur.



const car1 = cars[0];

console.log(car1);

console.log('Automobilis ' + car1.brand + ', kurio spalva yra ' + car1.color + ' parduoamas uz ' + car1.price + 'eur');


const car2 = cars[1];

console.log(car2);

console.log('Automobilis ' + car2.brand + ', kurio spalva yra ' + car2.color + ' parduoamas uz ' + car2.price + 'eur');

const carsale3 = 'Automobilis ' + cars[2].brand;
console.log(carsale3);


console.clear();


// dinaminis reiksmiu priskyrimas


const zoo = {
    liutas: 2,

};

console.log(zoo.liutas);
zoo.liutas += 3 ;

console.log(zoo);


zoo.dramblys = 1;

console.log(zoo);

zoo.dramblys +=2;

console.log(zoo);



zoo.lape = 4;

console.log(zoo);

const marks = [10, 2, 5, 6];

console.log(marks);

marks[1] = 10;
console.log(marks);