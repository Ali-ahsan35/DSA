function fibonacci(n) {
    const fib = [0,1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

const result = fibonacci(7);
console.log(result);

// Big-O --> O(n)