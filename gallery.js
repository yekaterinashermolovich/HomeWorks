const mainPhoto = document.querySelector('#main-photo');
const previewsContainer = document.querySelector('.preview');
const links = document.querySelectorAll('.preview ul li a img');

previewsContainer.addEventListener('click', function(event) {
    const target = event.target;

    // if (target.tagName !== 'IMG') return;
    // if (target.src === undefined) return;
    // if (!target.src) return;
    if (!target.matches('img')) return;

    mainPhoto.src = target.src;
})


function imageinFocus(event) {
    
        event.target.style.cursor = "pointer";
        event.target.style.outline =  '2px solid black';
        event.target.style.width = '100.5%';
        event.target.style.height = '100.5%';
        
    }

function imageOutFocus(event) {
    
        event.target.style.cursor = "auto";
        event.target.style.outline =  '';
        event.target.style.width = '100%';
        event.target.style.height = '100%';
    }    


links.forEach(function(link) {
    link.addEventListener('mouseover', imageinFocus);
})

links.forEach(function(link) {
    link.addEventListener('mouseout', imageOutFocus);
})



