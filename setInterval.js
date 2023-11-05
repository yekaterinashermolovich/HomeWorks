function log(message) {
    console.log(message);
}


function timer(ms, message) {

    const inter = setInterval(log, ms, message);

    setTimeout(function() {

        clearInterval(inter)
    }, 5000);
}

timer(1000, 'Hello');
timer(1000, 'Hi');
timer(1000, 'Good day');