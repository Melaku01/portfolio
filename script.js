const sections =
document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    const triggerBottm = window.innerHeight
    * 0.8;

    sections.forEach(section => {
        const sectionTOP = 
section.getBoundingClientRect().top;
if (sectionTOP < triggerBottm){
    
    section.classList.add('visible');
}
    });
});
console.log("Welcome to Melaku Tafere's Portfolio");
