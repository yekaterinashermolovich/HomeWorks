var links = document.querySelectorAll('a');

links.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
    })
})


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


links.forEach(function(link) {
    link.addEventListener('mouseover', function() {
        link.style.color = getRandomColor();
    });
})

