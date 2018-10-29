var modal = document.querySelector('.modal-basket');
var modalClosed = document.querySelector ('.modal-basket__btn');
var overlay = document.querySelector ('.modal__overlay');
var catalogData = [];

modal.classList.remove ('modal--nojs');

var modalOpen = function () {
  var elements = document.querySelectorAll('.product__btn');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.addEventListener('click', function(evt) {

      evt.preventDefault();

      modal.classList.remove('modal--closed');
      modal.classList.add('modal--opened');
      overlay.classList.add('modal__overlay--show');
    });
  }
};
modalOpen(catalogData);

modalClosed.addEventListener('click', function () {
  modal.classList.remove('modal--opened');
  modal.classList.add('modal--closed');
  overlay.classList.remove('modal__overlay--show');
});
