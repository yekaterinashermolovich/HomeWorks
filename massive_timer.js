function ArrayNumbers (array) {
   let i = 0;

    const x = setInterval(function() {
        if (i<array.length) {
           console.log(array[i]);
            i++;

        }else {
         clearInterval(x);
        } 

    }, 1000);
}      
    

const array = [1, 2, 3, 4, 5];

ArrayNumbers(array);