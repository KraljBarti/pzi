/**
 * 1. Write an arrow function that takes a year, month, and day as arguments
 * and returns true if the date is in the future, or false if it’s in the past.
 */

const isDateInFuture = (year, month, day) => {
  const inputDate = new Date(year, month - 1, day);
  const currentDate = new Date();
  return inputDate > currentDate;
};

/**
 * 2. Write a function that adds days to a date, it takes a date object and a number as arguments
 * and returns a new Date object which corresponds the initial date plus the number of days passed in the second argument
 */

const addDaysToDate = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

/**
 * 3. Create a new variable where you will store an array with names of people whose birthday is in the current month.
 */

const people = [
  { name: "Alice", birthDate: new Date("2002-10-15") },
  { name: "Bob", birthDate: new Date("2009-01-22") },
  { name: "Charlie", birthDate: new Date("1985-12-03") },
  { name: "Mary", birthDate: new Date("1995-11-15") },
  { name: "David", birthDate: new Date("1999-12-22") },
  { name: "Ruth", birthDate: new Date("1985-10-03") },
];

const currentMonth = new Date().getMonth();

const birthdaysThisMonth = people
  .filter((person) => person.birthDate.getMonth() === currentMonth)
  .map((person) => person.name);

console.log(birthdaysThisMonth);

/**
 * 4.For array1 and array2 create new variables where you will store the result of a check if those arrays have even numbers.
 * Log the results.
 *
 * Write a function that takes an array of numbers and returns the first even number found in the array.
 * If there are no even numbers, return null.
 * Log the result of calling that function for array1 and array2
 */

const array1 = [1, 3, 7, 10, 15];
const array2 = [1, 3, 7, 9, 13];

const hasEvenInArray1 = array1.some((num) => num % 2 === 0);
const hasEvenInArray2 = array2.some((num) => num % 2 === 0);

console.log("Does array1 contain even numbers?", hasEvenInArray1);
console.log("Does array2 contain even numbers?", hasEvenInArray2);

const findFirstEvenNumber = (arr) => {
  return arr.find((num) => num % 2 === 0) || null;
};

console.log("First even number in array1: ", findFirstEvenNumber(array1));
console.log("First even number in array2: ", findFirstEvenNumber(array2));

/**
 * 5. Given an array of users with their name and email (that can be string or null),
 * Create a new variable where if the user has a valid email (just check if there is an @ sign),
 * you will store another property "verified" to the returning object and set it to true
 * If the user has no valid email set the verified property to false
 *
 * Create a second variable where you will store only verified user ids
 */

const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: null },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
  { id: 4, name: "Mary", email: "maryexample.com" },
];

const updateUsers = users.map((user) => {
  const isValidEmail = user.email && user.email.includes("@");
  return { ...user, verified: isValidEmail };
});

console.log("Updated users with verification: ", updateUsers);

const verifiedUserIds = updateUsers
  .filter((user) => user.verified)
  .map((user) => user.id);

console.log("Verified user ids:", verifiedUserIds);

/**
 * 6. For the following array where a single array item represents a sale of a product on a certain date,
 * quantity field tells us how much of the product was soldo on that day.
 * Calculate the total sales made today using reduce array method.
 */

const sales = [
  { product: "Laptop", price: 1200, quantity: 1, date: new Date() },
  { product: "Monitor", price: 300, quantity: 2, date: new Date() },
  { product: "Mouse", price: 20, quantity: 5, date: new Date() },
  {
    product: "Keyboard",
    price: 50,
    quantity: 3,
    date: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
  },
];

const isSaleToday = (saleDate) => {
  const today = new Date();
  return (
    saleDate.getDate() === today.getDate() &&
    saleDate.getMonth() === today.getMonth() &&
    saleDate.getFullYear() === today.getFullYear()
  );
};

const totatlSalesToday = sales
  .filter((sale) => isSaleToday(sale.date))
  .reduce((total, sale) => total + sale.price * sale.quantity, 0);

console.log("Total sales today:", totatlSalesToday);

/**
 * 7. Go through the people array from the 3. task and based on their birthDate,
 * create a new array where with the rest of the fields you will add a new property age that calculates their age based on the current date.
 * Take in account if their birthday has already passed this year or not.
 *
 * Based on the age property of the new array, create a new variable that groups the users into three categories: below20, between20and30, and above30.
 * Return an object with these three categories as keys and arrays of names as values.
 *
 * Example how the result should look like:
 *  {
 *    below20: ['Matt'],
 *    between20and30: ['Amy', 'Jeff'],
 *    above30: ['James']
 *  }
 */

const people = [
  { name: "Alice", birthDate: new Date("2002-10-15") },
  { name: "Bob", birthDate: new Date("2009-01-22") },
  { name: "Charlie", birthDate: new Date("1985-12-03") },
  { name: "Mary", birthDate: new Date("1995-11-15") },
  { name: "David", birthDate: new Date("1999-12-22") },
  { name: "Ruth", birthDate: new Date("1985-10-03") },
];

// Function to calculate the age based on birthDate and current date
const calculateAge = (birthDate) => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // If the birthday hasn't occurred yet this year, subtract one from the age
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

// Create a new array with the 'age' property added
const peopleWithAge = people.map((person) => ({
  ...person,
  age: calculateAge(person.birthDate),
}));

console.log("People with ages:", peopleWithAge);

// Group people into categories based on their age
const groupedByAge = peopleWithAge.reduce(
  (acc, person) => {
    if (person.age < 20) {
      acc.below20.push(person.name);
    } else if (person.age >= 20 && person.age <= 30) {
      acc.between20and30.push(person.name);
    } else {
      acc.above30.push(person.name);
    }
    return acc;
  },
  { below20: [], between20and30: [], above30: [] }
);

console.log("Grouped by age:", groupedByAge);
