function linearSearch(arr, t) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === t) {
            return i;
        }
    }

    return -1;


}

console.log(linearSearch([0, 5, 9, 6, 3, 7], 8));

// Big-O ---> O(n)