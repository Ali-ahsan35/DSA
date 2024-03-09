function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}

const result = isPowerOfTwo(5);
console.log(result);

// Big-O ---> O(logn)

// Another solution with constant time complexity

function isPowerOfTwoBitWise(n) {
    if (n<1) {
        return false;
    }

    return (n & (n-1)) === 0;
}
const result2 = isPowerOfTwoBitWise(8);
console.log(result2);

// Big-O ---> O(1)