const $btn = $('.button');
const $elements = $('.x');

$btn.on('click', function() {
    // $('div.button').toggleClass('active');
    // $('nav.menu').toggleClass('active');


    // .each() to pętla, która jedzie po wszystkich elementach obiektu 
    // $elements.each(function() {
    //     $(this).toggleClass('active');
    // })


    // toggleClass na obiekcie kilku włęzłów zrobi toggle dla każdego pojedynczego
    $($elements).toggleClass('active');
})