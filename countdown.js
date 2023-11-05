  
    function countdown(ms, num) {
    
    for (var i = num; i > 0; --i) {
        const x = setInterval(function() {
            console.log(num);
        }, 1000);

        
   

        console.log(num);
        --num;

    }   

        
       

}

const num = 5;
countdown(1000, 5);

/* Это задание пока не заканчила. 4-ое тоже пока не готово */