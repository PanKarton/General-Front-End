const $body = $('body');
var fontSize = $('.text').css('font-size');
$('.interface').on('click', function() {
    // .hasClass() - metoda ta zwraca true/false w zaleznosci czy posiada klase z nawiasów
    if ($(this).hasClass('orange')) {
        $body.attr("class", "orange");
    }
    // .classList.contains() to wersja z vanillaJS
    if (this.classList.contains('green')) {
        $body.attr('class', 'green');
    }
    if ($(this).hasClass('increase')) {
        // .animate() animuje zmiane reguł css z pierwotnych na te wpisane w () 
        $('.text').animate({
            // Bez sensu, ale trzeba sie przyzwyczaic, zwiękza się w stringu
            "font-size": "+=2"
        }, 500)
    }

    if ($(this).hasClass('move')) {
        // wartosci meidzy P
        $('.text').css({
            "left": "+=20px",
            "letter-spacing": "+=2px "
        }, 500)
    }

});