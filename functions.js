gsap. registerPlugin (ScrollTrigger);

const imageContainer = document.querySelector ('.image-container');
const layers = document.querySelectorAll('.image > *');

gsap.set (layers, { opacity: 0 });
gsap.set ('#heart', { opacity: 1 });

ScrollTrigger.create({
     trigger: imageContainer,
     start: 'top top',
     end: '+=2000',
     pin: true, 
     scrub: true,

onUpdate: (self) => {
    if (self.progress < 0.25) {
        gsap.to('#heart', { opacity: 1 });
        gsap.to('#ninpu, #colorr,', { opacity: 0 });
    } else if (self.progress >= 0.5 && self.progress < 0.75) {
        gsap.to( '#heart, #ninpu', { opacity: 1 });
        gsap.to( '#colorr,', { opacity: 0 });
    } else {
        gsap.to('#heart, #ninpu, #colorr,', { opacity: 1 });
    }
},
});