const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for your message! 💌');
});
