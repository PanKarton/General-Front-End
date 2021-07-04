const divs = document.querySelectorAll('main>div');
let actualDiv = document.querySelector('main>div.blue');
let actualClass = "red";
document.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    divs.forEach(function(div) {
        if (scrollPos > div.offsetTop && scrollPos < (div.offsetTop + div.clientHeight)) {
            actualClass = "." + div.className;
            actualDiv.classList.remove('circle');
            actualDiv = document.querySelector(actualClass);
            actualDiv.classList.add('circle');
        }
    })

})