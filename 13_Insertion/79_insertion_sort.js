function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]

        }
        arr[j+1] = currentVal;
        console.log(currentVal, 'currentVal')
        console.log(arr, 'arr')
    }
    return arr;
}
const input = [2,1,9,76,4]

console.log(input)
const result = insertionSort(input)
console.log(result)