const customerIds = [
  "54402779",
  "39143786",
  "77408236",
  "35736350",
  "07118545",
  "21452698",
  "55706737",
  "40258035",
  "39143786",
  "52017607",
];

/**
 * This function checks if all the product IDs being displayed
 * in the digital storefront in the list are unique.
 *
 * (We wouldn't want to show the same product twice)
 *
 * There is a bug in this function that is causing it to return the wrong answer
 *
 * (39143786) exists twice in the input list, so the call on line 36 should return false
 *
 * Can you spot the bug?  (hint: its just one line of code in this function)
 */

// ORIGINALLY PROVIDED CODE FROM GENERAL ASSEMBLY

// function areAllIdsUnique(allIds) {
//   for (let id of allIds) {
//     const isThisIdUnique = isUnique(id, allIds);
//     if (!isThisIdUnique) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(areAllIdsUnique(customerIds));

/**
 * This is a function that checks if an ID is unique in the list.
 * You won't need to change this code.
 *
 * allIds should be the list of all customer IDs
 * thisId should be the current ID we are checking for uniqueness
 */

// ORIGINALLY PROVIDED CODE FROM GENERAL ASSEMBLY

// function isUnique(allIds, thisId) {
//   for (let i = allIds.indexOf(thisId); i < allIds.length; i++) {
//     if (allIds[i] === thisId) {
//       return false;
//     }
//   }
//   return true;
// }

// module.exports = areAllIdsUnique;




//Leah's solution below removing the extra "!" before "isThisIdUnique" in the line with "if (isThisIdUnique) {". No changes were made to the second block of code.

function areAllIdsUnique(allIds) {
  for (let id of allIds) {
    const isThisIdUnique = isUnique(id, allIds);
    if (isThisIdUnique) {
      return false;
    }
  }
  return true;
}

console.log(areAllIdsUnique(customerIds));

/**
 * This is a function that checks if an ID is unique in the list.
 * You won't need to change this code.
 *
 * allIds should be the list of all customer IDs
 * thisId should be the current ID we are checking for uniqueness
 */

function isUnique(allIds, thisId) {
  for (let i = allIds.indexOf(thisId); i < allIds.length; i++) {
    if (allIds[i] === thisId) {
      return false;
    }
  }
  return true;
}

module.exports = areAllIdsUnique;




// With Weston in the morning (flip allIds & id in line "const isThisIdUnique = isUnique(allIds, id);")

// function areAllIdsUnique(allIds) {
//   for (let id of allIds) {
//     const isThisIdUnique = isUnique(allIds, id);
//     if (!isThisIdUnique) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(areAllIdsUnique(customerIds));


// function isUnique(allIds, thisId) {
//   for (let i = allIds.indexOf(thisId); i < allIds.length; i++) {
//     if (allIds[i] === thisId) {
//       return false;
//     }
//   }
//   return true;
// }

// module.exports = areAllIdsUnique;

// Wes's code here: https://github.com/weston-bailey/M1L5.1-functions-wbp





