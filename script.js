// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    // Smooth scrolling to sections
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const sectionPosition = targetSection.offsetTop;

            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });
        });
    });

    // Highlight menu links based on scroll position
    window.addEventListener('scroll', () => {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60; // Adjust for header height
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const currentId = section.getAttribute('id');
                menuLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});

