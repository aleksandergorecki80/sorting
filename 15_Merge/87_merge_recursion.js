console.log('Merge recursion')


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
  

// Recursive version of Merge Sort
// Sorts one array by splitting it and marging back sorted


const arr1 = [10, 24, 76, 73, 22, 1, 9]
const arr2 = [8, 99, 747, 3, 11]
const arr3 = [88]
const arr4 = []

const recursiveMergeSort = (arr) => {
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = recursiveMergeSort(arr.slice(0, mid))
    let right = recursiveMergeSort(arr.slice(mid))
    return mergeTwoSortedArrays(left, right)
}

console.log(recursiveMergeSort(arr1))
console.log(recursiveMergeSort(arr2))
console.log(recursiveMergeSort(arr3))
console.log(recursiveMergeSort(arr4))

