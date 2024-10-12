
    document.addEventListener('DOMContentLoaded', function () {
        // Mengambil semua link pada navigasi
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section');

        const observerOptions = {
            threshold: 0.5 // Mendeteksi saat 50% dari section terlihat
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Menghilangkan class active dari semua link
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });

                    // Menambahkan class active ke link yang sesuai
                    const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        // Observasi setiap section
        sections.forEach(section => {
            observer.observe(section);
        });

        // Tambahkan class active ketika link di klik
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navLinks.forEach(l => l.classList.remove('active')); // Hilangkan class active dari semua link
                this.classList.add('active'); // Tambahkan class active ke link yang diklik
            });
        });
    });

