const section = document.querySelector('.section-animate');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('animate'); 
      observer.unobserve(entry.target);   
    }
  });
}, { threshold: 0.2 });

observer.observe(section);
