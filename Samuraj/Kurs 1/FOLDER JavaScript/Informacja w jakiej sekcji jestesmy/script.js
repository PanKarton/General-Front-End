// JQ

// $(window).on('scroll', function() {
//     var scrollPos = $(window).scrollTop();
//     if (scrollPos == 0) {
//         $('.info').text("Witaj na stronie!");
//     } else if (scrollPos < $('.sekcja2').offset().top) {
//         $('.info').text("Sekcja 1");
//     } else if (scrollPos > $('.sekcja2').offset().top && scrollPos < $('.sekcja3').offset().top) {
//         $('.info').text("Sekcja 2");
//     } else if (scrollPos > $('.sekcja3').offset().top && scrollPos < $('.sekcja4').offset().top) {
//         $('.info').text("Sekcja 3");
//     } else if (scrollPos > $('.sekcja4').offset().top) {
//         $('.info').text("Sekcja 4");
//     }
// })

//  JS

document.addEventListener('scroll', function() {
    // .scrollY oznacza wysokosc aktualna scrolla
    const scrollPos = window.scrollY;
    const info = document.querySelector('.info');
    const s1 = document.querySelector('.sekcja1');
    const s2 = document.querySelector('.sekcja2');
    const s3 = document.querySelector('.sekcja3');
    const s4 = document.querySelector('.sekcja4');
    if (scrollPos == 0) {
        // .innerHTML - podmienia wewnetrzny tekst
        info.innerHTML = 'Witaj na stronie!';
        // .offsetTop zwraca odleglosc elementu od góry
    } else if (scrollPos < s2.offsetTop && scrollPos > s2.offsetTop + s2.innerHeight()) {
        info.innerHTML = 'Sekcja 1';
    } else if (scrollPos < s3.offsetTop) {
        info.innerHTML = 'Sekcja 2';
    } else if (scrollPos < s4.offsetTop) {
        info.innerHTML = 'Sekcja 3';
    } else if (scrollPos < s4.offsetTop + s4.offsetHeight) {
        info.innerHTML = 'Sekcja 4';
    }
})