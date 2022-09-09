const arr1 = [8, 4, 9, 2, 1, 5, 7, 6, 3];

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const pivotHelper = (arr, start = 0, end = arr.length + 1) => {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  return swapIndex;
};

console.log(pivotHelper(arr1))