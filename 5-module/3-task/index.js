function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const buttonRight = document.querySelector('.carousel__arrow_right');
  const buttonLeft = document.querySelector('.carousel__arrow_left');
  const slideWidth = document.querySelector('.carousel__slide').offsetWidth 
  const slideCount = 3;
  let slideCurrent = 0

  function checkPosition() {
    if (slideCurrent === 0) {
      buttonLeft.style.display = 'none';
      buttonRight.style.display = '';
    } else if (slideCurrent === slideCount) {
      buttonRight.style.display = 'none';
      buttonLeft.style.display = '';
    }
    else {
      buttonRight.style.display = '';
      buttonLeft.style.display = '';
    }

  }
  checkPosition();
  function swipeRight() {
    slideCurrent = slideCurrent + 1
    carouselInner.style.transform = 'translateX(-'+ slideCurrent * slideWidth +'px)'
  }
  function swipeLeft() {
    slideCurrent = slideCurrent - 1
  carouselInner.style.transform = 'translateX(-'+ slideCurrent * slideWidth +'px)'
}
  buttonRight.addEventListener('click', function () {
    swipeRight();
    checkPosition();
  });
  buttonLeft.addEventListener('click', function () {
    swipeLeft();
    checkPosition();
  });
}





