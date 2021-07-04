// //  VanillaJS
// document.querySelector('.container').addEventListener('click', function() {
//     // przy obiekcie classList NIE PISZEMY KROPEK PRZY KLASACH
//     this.classList.toggle('activeBtn');

// });

// JQuery

$('.container').on('click', function() {
    $(this).toggleClass('activeBtn');
})