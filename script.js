const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })  
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })  
}

const scrollToTopButton = document.getElementById("scrollToTopButton");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function scrollToTop() {
    const duration = 500; // duration of the animation in milliseconds
    const startingY = window.pageYOffset;
    const diff = startingY > 0 ? -startingY : 0;
  
    let start;
  
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const timeElapsed = timestamp - start;
      const percent = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, startingY + diff * percent);
      if (timeElapsed < duration) {
        window.requestAnimationFrame(step);
      }
    });
  }
  