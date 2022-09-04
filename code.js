const btnBurgerMenu = document.querySelector('.btn-burger-menu');
const header = document.querySelector('header');

btnBurgerMenu.addEventListener('click', () => {
    header.classList.toggle('open-main-path');
})

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('.section_one_content', 
    {x: -100, opacity: 0},
    {x: 0, opacity: 1, duration: 1.5}
);


gsap.fromTo('.img_phone', 
    {y: 100, opacity: 0},
    {y: 0, opacity: 1, delay: 1.5}
);


gsap.fromTo('.section_two', 
    {opacity: 0, x: -30}, 
    {scrollTrigger: '.section_two', x: 0, opacity: 1, delay: 0.3}
);

gsap.fromTo('.section_three_left', 
    {opacity: 0, x: -30}, 
    {scrollTrigger: '.section_three_left', x: 0, opacity: 1, delay: 0.3}
);

gsap.fromTo('.advantages', 
    {opacity: 0, x: -30}, 
    {scrollTrigger: '.advantages', x: 0, opacity: 1, delay: 0.8}
);

gsap.fromTo('.section_three_right', 
    {opacity: 0, y: -40}, 
    {scrollTrigger: '.advantages', y: 0, opacity: 1, delay: 1, duration: 1}
);

gsap.fromTo('.section_four_reviews', 
    {opacity: 0, x: -40}, 
    {scrollTrigger: '.section_four_reviews', x: 0, opacity: 1, delay: 1, duration: 1}
);


