/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

// function calculateTotalSpentByCategory(transactions) {
 
//   const result = [];
  
//   for (const transaction of transactions) {
//     const { category, price } = transaction;
//     const existingCategory = result.find(obj => obj.category === category);
    
//     if (existingCategory) {
//       existingCategory.total += price;
//     } else {
//       result.push({ category, total: price });
//     }
//   }
  
//   return result;
// }

// function calculateTotalSpentByCategory(transactions) {
//   const result = [];

//   for (const transaction of transactions) {
//     const { category, price } = transaction;
    
//     // Check if category already exists in result
//     const existingCategoryIndex = result.findIndex(item => item.category === category);

//     if (existingCategoryIndex !== -1) {
//       // If category exists, update the totalSpent
//       result[existingCategoryIndex].totalSpent += price;
//     } else {
//       // If category doesn't exist, add a new entry
//       result.push({ category, totalSpent: price });
//     }
//   }

//   return result;
// }

function calculateTotalSpentByCategory(transactions){
  const result=[];

  for(let transaction of transactions){
    const{category,price}=transaction;

    const existingCategoryIndex = result.findIndex(item=> item.category === category);

    if(existingCategoryIndex !==-1){
      result[existingCategoryIndex].totalSpent+=price;
    }
    else{
      result.push({ category , totalSpent:price});
    }
  }

  return result;
}


module.exports = calculateTotalSpentByCategory;
