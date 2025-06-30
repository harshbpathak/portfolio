// Add a typing effect to the introduction text
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in effect to sections
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add hover effect to education items
    const educationItems = document.querySelectorAll('.education-list li');
    educationItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.02)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });
});
