const arr = [12,15,6,8]
console.log(arr)
const swap = (arr, arg1, arg2) => {
    const temp = arr[arg1];
    arr[arg1] = arr[arg2];
    arr[arg2] = temp
}

swap(arr, 0, 2)
console.log(arr)


const swapES6 = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

swapES6(arr, 0,3)
console.log(arr)