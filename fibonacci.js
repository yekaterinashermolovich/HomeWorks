function fibonacci(n) {

    if(n<=0)   return 0;

    if(n === 1) return 1;        

    return n = fibonacci(n-1) + fibonacci(n-2);

    
}




console.log(fibonacci(16));