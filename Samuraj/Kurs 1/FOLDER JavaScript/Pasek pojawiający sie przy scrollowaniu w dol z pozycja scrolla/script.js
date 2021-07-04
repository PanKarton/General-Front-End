// ustawiamy na okno przegladarki nasłuchiwwanie na scrolla
$(window).on('scroll', function() {
    // Jeśli scroll jest większy niż góra sekcji2, to aktywujemy .info
    if ($(window).scrollTop() > $('.sekcja2').offset().top) {
        $('.info').addClass('active');
    } else {
        // W winnym przypadku wywalamy

        $('.info').removeClass('active');
    }
    //  metoda text() zamienia tekst węzła i konkatenacją zamieniamy wysokosc scrolla okna na stringa, co aktualizuje sie za każdym scrollem
    $('.info').text('Obecna pozycja scrolla: ' + $(window).scrollTop())
})