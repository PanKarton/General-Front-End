document.addEventListener('scroll', function() {
    // const art2 = document.querySelector('.art2');
    // const art3 = document.querySelector('.art3');
    // const art4 = document.querySelector('.art4');
    // const op1 = document.querySelector('.op1');
    // const op2 = document.querySelector('.op2');
    // // Nad art2 ustawiamy "przestrzeń" o wysokosci 40px wyżej o połowe okna przeglądarki, aby scroll(górna krawędź okna) odpalił animacje w połowie okna przegląddarki
    // if (window.scrollY > art2.offsetTop - (window.innerHeight / 2) && window.scrollY < (art2.offsetTop - (window.innerHeight / 2) + 40)) {
    //     art2.classList.add('artActive');
    // }
    // if (window.scrollY > art3.offsetTop - (window.innerHeight / 2) && window.scrollY < (art3.offsetTop - (window.innerHeight / 2) + 40)) {
    //     art3.classList.add('artActive');
    // }
    // if (window.scrollY > art4.offsetTop - (window.innerHeight / 2) && window.scrollY < (art4.offsetTop - (window.innerHeight / 2) + 40)) {
    //     art4.classList.add('artActive');
    // }
    // if (window.scrollY > (op1.offsetTop - 300) && window.scrollY < (op1.offsetTop - 250)) {
    //     op1.classList.add('opActive');
    //     console.log('xd')
    // }
    // if (window.scrollY > (op2.offsetTop - 300) && window.scrollY < (op2.offsetTop - 250)) {
    //     op2.classList.add('opActive');
    //     console.log('xd')
    // }
    // // Gdy scroll jest poniżej 100px, wszystko chowamy od nowa
    // if (window.scrollY < 100) {
    //     art2.classList.remove('artActive');
    //     art3.classList.remove('artActive');
    //     art4.classList.remove('artActive');
    //     op1.classList.remove('opActive');
    //     op2.classList.remove('opActive');
    // }


    // Pobieramy wszystkie ruchome elementy do NodeListy
    const arts = document.querySelectorAll('.art2, .art3, .art4, .op1, .op2');
    // .forEach() to pętla na wszystkich elementach i do funkcji dajemy zmienną "art", która oznacza zawartosc kazdego elementu w zaleznosci czyja jest kolej
    // .forEach(function(item, index))
    // item - obecny element
    // index - jego numer indeksowy licząc od 0
    arts.forEach(function(art) {
        // Jeżeli scroll jest w obszarze określonym w warunku, wtedy pokaż element
        // Przedział to (pół okna przeglądarki w góre - to samo, ale 40px nizej)
        if (window.scrollY > art.offsetTop - (window.innerHeight / 2) && window.scrollY < (art.offsetTop - (window.innerHeight / 2) + 40)) {
            art.classList.add('active');
        }
        // Jeżeli scroll jest mniejszy niz 100, schowaj wszystko 
        else if (window.scrollY < 100) {
            art.classList.remove('active');
        }
    })


})