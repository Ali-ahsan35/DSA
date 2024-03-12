// This works only for sorted array
function binarySearch(arr, t) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (t === arr[midIndex]) {
            return midIndex;
        }
        if (t < arr[midIndex]) {
            rightIndex = midIndex - 1;
        }
        else {
            leftIndex = midIndex + 1;
        }
    }
    return -1;
}

console.log(binarySearch([-5, 0, 2, 4, 6, 10], 0));

// Big-O ---> O(logn)