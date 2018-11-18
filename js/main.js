var navButton = document.querySelector('.button');

navButton.addEventListener('click', function() {
  console.log('clicky!!!');
  document.querySelector('div.adopt')
    .classList
    .toggle('button-open');
});