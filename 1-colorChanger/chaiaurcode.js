const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const h= document.querySelector('h1');

h.addEventListener('click', function(){
    body.style.backgroundColor='black';
} )
buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        body.style.backgroundColor = e.target.id;
    });
});
