// Scroll-to-top button
const scrollBtn = document.getElementById('scrollTopBtn');
window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
};

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fade-in animation for cards on scroll
const cards = document.querySelectorAll('.team-card');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < windowHeight - 50) {
      card.classList.add('fade-in');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
