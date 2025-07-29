 // Navigation functionality
        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            
            // Show success message
            alert(`Thank you ${name}! Your message has been sent successfully. We'll get back to you within 24 hours.`);
            
            // Reset form
            this.reset();
        });

        // Add scroll animations
        function animateOnScroll() {
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                const cardVisible = 150;
                
                if (cardTop < window.innerHeight - cardVisible) {
                    card.style.animation = 'slideInUp 0.6s ease forwards';
                }
            });
        }

        window.addEventListener('scroll', animateOnScroll);

        // Initialize animations on page load
        document.addEventListener('DOMContentLoaded', function() {
            // Add entrance animations to visible elements
            const heroElements = document.querySelectorAll('.hero h1, .hero p');
            heroElements.forEach((element, index) => {
                element.style.animationDelay = `${index * 0.2}s`;
            });
        });

        // Smooth scroll for better UX
        document.documentElement.style.scrollBehavior = 'smooth';