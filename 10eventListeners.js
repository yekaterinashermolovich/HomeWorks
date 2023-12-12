const btn = document.querySelector('button');

function numberOfListenets(number) {
    return function () {
        console.log('Button number' + number);

    }
    
}

for(let i = 1; i <= 10; i++) {
    btn.addEventListener('click', numberOfListenets(i));
}

function userInput () {
    var user = prompt('Enter a number 1 - 10');

    if(user<1 || user>10) {
        alert('correct your number');
    
} else {
    return user;
}}

btn.addEventListener('click', function() {
    var inputNumber = userInput ();
    for(let i = 1; i<= inputNumber; i++) {
       console.log('Message'  + i +  'from button'); 
    }
})