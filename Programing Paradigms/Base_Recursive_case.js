function fib(n) {
    //Base cases
    if (n === 0) {
        return 0; // Base case: Fibonacci(0)
    }
        
    
    if (n === 1) {
        return 1; // Base case: Fibonacci(1)
    }
    
    //Recursive case
    return fib(n - 1) + fib(n - 2); // Recursive case 
}

console.log(fib(5));  // Expected output: 5
console.log(fib(10)); // Expected output: 55
console.log(fib(9));