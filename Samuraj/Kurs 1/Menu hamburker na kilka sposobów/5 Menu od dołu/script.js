const button = document.querySelector('.button');
const actives = document.querySelectorAll('.switchable');
console.log(button);

button.addEventListener('click', function() {
    actives.forEach(function(elem) {
        elem.classList.toggle('active');
    })
})