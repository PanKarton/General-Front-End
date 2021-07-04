const buyBtn = document.querySelector('button');
const modal = document.querySelector('.modal-wrap');
const hide = document.querySelector('.hide');
const article = document.querySelector('.article');

buyBtn.addEventListener('click', function() {
    modal.classList.add('visible');
    article.classList.add('blur');
})

hide.addEventListener('click', function() {
    modal.classList.remove('visible');
    article.classList.remove('blur');
})