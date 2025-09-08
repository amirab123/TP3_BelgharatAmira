const section = document.querySelector('.section-animate');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('animate'); // lance l'animation SCSS
      observer.unobserve(entry.target);      // ne se déclenche qu'une fois
    }
  });
}, { threshold: 0.2 });

observer.observe(section);
