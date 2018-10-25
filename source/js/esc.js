
    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (modal.classList.contains("modal--opened")) {
          modal.classList.remove("modal--opened");
          modal.classList.add("modal--closed");
          overlay.classList.remove('modal__overlay--show');
        }
      }
    });
