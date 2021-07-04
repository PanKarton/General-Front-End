//  JQuery
// metoda .offset() zwraca nam top lub left danego obiektu
// $('.me').on('click', function() {
//     $('body, html').animate({
//         scrollTop: $('#me').offset().top
//     }, 2000)
// })
// $('.portfolio').on('click', function() {
//     $('body, html').animate({
//         scrollTop: $('#portfolio').offset().top
//     }, 2000)
// })
// $('.offer').on('click', function() {
//     $('body, html').animate({
//         scrollTop: $('#offer').offset().top
//     }, 2000)
// })
// $('.contact').on('click', function() {
//     $('body, html').animate({
//         scrollTop: $('#contact').offset().top
//     }, 2000)
// })


// /skracamy

const $buttons = $('a');

$buttons.on('click', function() {
    // Przypisujemy nazwe klay do zmiennej
    var className = $(this).attr("class");
    $('html, body').animate({
        // Konkatenujemy # + nazwe klasy
        scrollTop: $('#' + className).offset().top
    }, 1000)
})