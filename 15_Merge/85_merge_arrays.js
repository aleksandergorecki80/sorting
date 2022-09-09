console.log("Merging");

// Merging two sorted arrays

const arr1 = [1, 1002];
const arr2 = [2, 8, 14, 99, 101];


const mergeTwoSortedArrays = (arr1, arr2) => {
  let results = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      results.push(arr1[pointer1]);
      pointer1++;
    } else {
      results.push(arr2[pointer2]);
      pointer2++;
    }
  }

  while (pointer1 < arr1.length) {
    results.push(arr1[pointer1]);
    pointer1++;
  }

  while (pointer2 < arr2.length) {
    results.push(arr2[pointer2]);
    pointer2++;
  }
  return results;
};

console.log('Koniec')
console.log(mergeTwoSortedArrays(arr1, arr2));
