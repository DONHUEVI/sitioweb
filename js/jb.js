
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const elements = document.querySelectorAll('.animate-on-scroll');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
});


document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', (e) => {
      const stars = e.target.parentElement.children;
      const rating = e.target.getAttribute('data-rating');
      [...stars].forEach((s, i) => {
        s.classList.toggle('active', i < rating);
      });
      e.target.parentElement.nextElementSibling.value = rating;
    });
  });
  