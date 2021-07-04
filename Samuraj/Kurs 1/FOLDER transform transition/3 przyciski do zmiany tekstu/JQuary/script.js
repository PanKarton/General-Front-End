$('.larger').click(function() {
    $('h1').toggleClass('large');
    $('h1').removeClass('small');
})

$('.smaller').click(function() {
    $('h1').toggleClass('small');
    $('h1').removeClass('large');
})

$('.border').click(function() {
    $('h1').toggleClass('bordered');
})