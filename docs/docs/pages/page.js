/**
 * Getting Started with gsap
 * https://gsap.com/resources/get-started/
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('page.js loaded!');

    if(!gsap) {
        throw new Error('gsap not found!');
    }
    
    const body = document.querySelector('body');
    const box = document.querySelector('.a-1');
    const x = body.clientWidth / 2 - box.clientWidth;

    // Box bewegen
    gsap.to(".a-1", { x: x, rotate: 90, duration: 2, ease: "bounce", delay: 1 });
    gsap.to(".a-1", { yPercent: 200, ease: "bounce", delay: 3 });
    gsap.to(".a-1", { scale: 4, delay: 4 });
    
    // Schrift einblenden
    gsap.set(".a-1 > div", { rotate: -90 });
    gsap.to(".a-1 > div", { opacity: 1, duration: 1, delay: 5 });

    gsap.reverse(".a-1", { duration: 1, delay: 10 });
});