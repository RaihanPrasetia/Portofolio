
    document.addEventListener('DOMContentLoaded', function () {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section');

        const observerOptions = {
            threshold: 0.5 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });

                    const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });

        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navLinks.forEach(l => l.classList.remove('active')); 
                this.classList.add('active'); 
            });
        });

        const carousel = document.querySelector('#skillsCarousel');
        carousel.addEventListener('slide.bs.carousel', function (event) {
            const activeSlide = event.relatedTarget;
            const cards = activeSlide.querySelectorAll('.card');

            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.3}s`;
                card.classList.add('card-animate');
            });
        });

        const initialActiveSlide = carousel.querySelector('.carousel-item.active');
        const initialCards = initialActiveSlide.querySelectorAll('.card');
        initialCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.3}s`;
            card.classList.add('card-animate');
        });
    });

