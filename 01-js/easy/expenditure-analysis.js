/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {}; // Object to store total spent per category

  for (const transaction of transactions) {
      const { category, price } = transaction;

      // Update the total spent for the category
      if (category in categoryTotals) {
          categoryTotals[category] += price;
      } else {
          categoryTotals[category] = price;
      }
  }

  // Convert the object to an array of objects
  const result = Object.entries(categoryTotals).map(([category, totalSpent]) => ({
      category,
      totalSpent,
  }));

  return result;
}
module.exports = calculateTotalSpentByCategory;

// Example usage:
// const transactions = [
//   {
//       id: 1,
//       timestamp: 1656076800000,
//       price: 10,
//       category: 'Food',
//       itemName: 'Pizza',
//   },
//   // Add more transactions here...
// ];

//const output = calculateTotalSpentByCategory(transactions);
//console.log(output); // Example output: [{ category: 'Food', totalSpent: 10 }]
