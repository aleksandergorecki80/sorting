const arr = [4, 78, 7, 2, 55, 6];
console.log(arr);

const selection = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) lowest = j;
    }
    if(i !== lowest){
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
      console.log(i, lowest)
    }
    console.log(arr); 
  }
  return arr;
};

console.log(selection(arr));
