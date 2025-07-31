const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const elementos = document.querySelectorAll('.sidebar, .conteudo-central img');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.1 });

elementos.forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});
