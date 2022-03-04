const dots = document.querySelectorAll('.dot');
const dot = document.querySelector('.dot');
const active = document.querySelector('.active');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');

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
