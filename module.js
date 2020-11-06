// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
//
//
// let obj = {
//     dog: {
//         poroda: 'siberian husky',
//         gender: 'boy',
//         name: 'Archie',
//         age: 3,
//         weight: 50,
//     },
//     person: {
//         name: 'Sophia',
//         age: 20,
//         gender: 'female',
//         occupation: 'student',
//         nationality: 'Ukrainian'
//     },
//     car: {
//         model: 'Audy',
//         color: 'black',
//         year: 2012,
//         motor: 'gasoline',
//         gearbox: 'mechanics'
//     },
//     apartment: {
//         location: 'center',
//         room: 3,
//         floor: 8,
//         price: 1969213,
//         renovation: true
//     },
//     book: {
//         title: 'JavaScript: The Definitive Guide',
//         autor: 'David Flanagan',
//         year: 1996,
//         price: 45,
//         pages: 1600
//     }
// }



// -- Створити масив та вивести його в консоль:
//     - з 5 собак
//     - 3 5 людей
//     - з 5 автомобілів
//
//
// let arr = [
//     {poroda: 'siberian husky', name: 'Archie', gemder: 'boy'},
//     {poroda: 'vivcharka', name: 'Muhtar', gemder: 'boy'},
//     {poroda: 'cocker spaniel', name: 'Betty', gemder: 'girl'},
//     {poroda: 'labrador', name: 'Caesar', gemder: 'boy'},
//     {poroda: 'labrador', name: 'Nice', gemder: 'girl'},
//     {name: 'Sophia', age: 20, gemder: 'female'},
//     {name: 'Ruslan', age: 19, gemder: 'male'},
//     {name: 'Vika', age: 13, gemder: 'female'},
//     {name: 'Roman', age: 21, gemder: 'male'},
//     {name: 'Stepan', age: 19, gemder: 'male'},
//     {model: 'Audi', color: 'red', year: 2012},
//     {model: 'Volkswagen', color: 'blue', year: 2019},
//     {model: 'BMW', color: 'black', year: 2009},
//     {model: 'Renault', color: 'silver', year: 2017},
//     {model: 'Nissan', color: 'black', year: 2020},
// ];



// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
//
//
// let obg = {
//     house: {
//         floor: 3,
//         rooms: ['kitchen', 'bathroom', 'bedroom', 'bathroom', 'balcony'],
//         renovation: true,
//         address: {
//             country: 'Ukraine',
//             city: 'Lviv',
//             street: 'Lubinska 10'
//         },
//         price: 190000
//     },
//
//     driver: {
//         name: Ivan,
//         experience: 8,
//         categoryDriversLicense: ['B','C','D'],
//         car: {
//             model: 'Dacia Logan',
//             color: 'white',
//             carNumber: "ВС 1021 ТВ",
//         }
//     },
//
//     toy: {
//         mane: 'Lego constructor',
//         forAge: '6+',
//         country: 'China',
//         color: ['black', 'red', 'yellow', 'green', 'blue','white'],
//         set: {
//             astronauts: 3,
//             legoBlock: 245,
//             accessories: ['spacesuit', 'fire','stickers']
//         }
//     },
//
//     table: {
//         size: {
//             height: 1.5,
//             width: 20,
//             length: 3,
//         },
//         color: 'brown',
//         material: ['wood', 'metal', 'marble'],
//         price: 12000,
//         delivery: false
//     },
//
//     bag: {
//         size: {
//             height: 50,
//             width: 20,
//             length: 40
//         },
//         color: 'pink',
//         brend: 'Prada',
//         price: 1500,
//         composition: ['leather', 'textile', 'metal']
//     }
// }



// Дан массив:
//
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// //
// //
// // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// // - статус Андрія
//
// console.log(users[7].status);
//
// // - статус Максима
//
// console.log(users[4].status, users[10].status);
//
// // - ім'я передостаннього об'єкту
//
// console.log(users[9].name);
//
// // - ім'я третього об'єкта
//
// console.log(users[2].name);
//
// // - вік Олега
//
// console.log(users[6].age);
//
// // - вік Олі
//
// console.log(users[3].age, users[9].age);
//
// // - вік + ім'я 5го об'єкта
//
// console.log(users[4].name, users[4].age);
//
// // - вік + сатус Анни
//
// console.log(users[5].age, users[5].status);
