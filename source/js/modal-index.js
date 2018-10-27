var modal = document.querySelector('.modal-basket');
var modalOpen = document.querySelector ('.week-product__btn');
var modalClosed = document.querySelector ('.modal-basket__btn');
var overlay = document.querySelector ('.modal__overlay');


modal.classList.remove ('modal--nojs');

modalOpen.addEventListener('click', function() {
  modal.classList.remove('modal--closed');
  modal.classList.add('modal--opened');
  overlay.classList.add('modal__overlay--show');
});

modalClosed.addEventListener('click', function () {
  modal.classList.remove('modal--opened');
  modal.classList.add('modal--closed');
  overlay.classList.remove('modal__overlay--show');
});
