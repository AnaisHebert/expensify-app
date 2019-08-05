//
// Object Desctructuring
//

// const person = {
//     name: 'Anais',
//     age: 25,
//     location: {
//         city: 'Victoria',
//         temp: 20
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// // const name = person.name;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Penguin , default Self-Published

//
//   Array Destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [type, , mPrice] = item;

console.log(`A medium ${type} costs ${mPrice}`);