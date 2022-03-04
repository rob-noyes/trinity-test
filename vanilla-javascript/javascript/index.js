const dots = document.querySelectorAll('.dot');
const dot = document.querySelector('.dot');
const active = document.querySelector('.active');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');

const carousel = document.querySelector('.carousel-track');

const back = document.querySelector('.back');
const next = document.querySelector('.next');

dots.forEach((element) => {
  element.addEventListener('click', () => {
    const notClicked = Array.from(dots).filter((notClicked) => {
      return notClicked !== element;
    });

    notClicked.forEach((notClicked) => {
      notClicked.classList.remove('active');
    });

    element.classList.add('active');
  });
});

next.addEventListener('click', () => {
  carousel.scrollLeft += 400;
});

back.addEventListener('click', () => {
  if (carousel.scrollLeft > 0) {
    carousel.scrollLeft -= 400;
  }
});

one.addEventListener('click', () => {
  carousel.scrollLeft = 0;
});

two.addEventListener('click', () => {
  carousel.scrollLeft = 755;
});

three.addEventListener('click', () => {
  carousel.scrollLeft = 1515;
});

four.addEventListener('click', () => {
  carousel.scrollLeft = 2275;
});
