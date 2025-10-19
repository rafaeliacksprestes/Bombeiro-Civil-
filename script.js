document.addEventListener("DOMContentLoaded", () => {
  const modules = document.querySelectorAll('.modulo');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, {threshold:0.2});
  modules.forEach(mod => observer.observe(mod));
});
