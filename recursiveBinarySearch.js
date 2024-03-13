// Binary Search Only Works for Sorted Array

function recursiveBinarySearch(arr, t) {
    return binarySearch(arr, t, 0, arr.length - 1);
}

function binarySearch(arr, t, left, right) {
    if (left > right) {
        return -1;
    }
    let mid = Math.floor((left + right) / 2)
    if (t === arr[mid]) {
        return mid;
    }
    if (t < arr[mid]) {
        return binarySearch(arr, t, left, mid - 1)
    }
    else {
        return binarySearch(arr, t, mid + 1, right);
    }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));

// Big-O ---> O(n)