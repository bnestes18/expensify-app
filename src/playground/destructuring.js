// Object Destructuring

// const person = {
// 	name: 'Brittney',
// 	age: 29,
// 	location: {
// 		city: 'Holly Springs',
// 		temp: 92,
// 	},
// };

// // This way doesn't scale well
// // const name = person.name;
// // const age = person.age;

// const { name = 'Anonymous', age } = person;

// console.log(`${name} is ${age}.`);

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin',
// 	},
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published - default

// Array Destructuring
// const address = [ '1299 S Juniper Street', 'Holly Springs', 'North Carolina', '27540' ];

// const [ , city, state ] = address;

// console.log(`You are in ${city}, ${state}.`);

const item = [ 'Coffee (hot)', '$2.00', '$2.50', '$2.75' ];

const [ coffee, , priceMed ] = item;

// get first and third items using array destructing
console.log(`A medium ${coffee} costs ${priceMed}.`);
