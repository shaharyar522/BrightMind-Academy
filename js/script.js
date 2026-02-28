/**
 * BrightMind Academy - Interactive Functionality
 * Modernized for Premium Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    // 2. Tab Functionality for Age Group Programs
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            
            // Toggle active state for tabs
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Toggle active state for contents
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });

    // 3. Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target); // Only reveal once  
                
            }
        });
    }, observerOptions);

    // Apply reveal to various sections
    document.querySelectorAll('.gallery-item, .teacher-card, .testimonial-card, .timeline-item, .process-step').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
        revealObserver.observe(item);
    });

    // Define the reveal effect in JS (or could be in CSS)
    const style = document.createElement('style');
    style.innerHTML = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // 4. Integrated Calendar Tooltips
    document.querySelectorAll('.calendar-cell.event').forEach(cell => {
        const tooltip = cell.querySelector('span');
        if (tooltip) {
            cell.addEventListener('mouseenter', () => {
                tooltip.style.display = 'block';
                tooltip.style.opacity = '0';
                setTimeout(() => {
                    tooltip.style.transition = 'opacity 0.3s ease';
                    tooltip.style.opacity = '1';
                }, 10);
            });
            
            cell.addEventListener('mouseleave', () => {
                tooltip.style.display = 'none';
            });
        }
    });

    // 5. Advanced Inquiry Form Validation
    const inquiryForm = document.querySelector('.inquiry-form');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            const inputs = inquiryForm.querySelectorAll('[required]');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'var(--accent)';
                    input.classList.add('shake');
                    setTimeout(() => input.classList.remove('shake'), 400);
                } else {
                    input.style.borderColor = 'var(--glass-border)';
                }
            });
            
            if (isValid) {
                const submitBtn = inquiryForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerText;
                
                // Show success state
                submitBtn.innerText = 'Sending...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    alert('✨ Thank you for choosing BrightMind Academy! Our admissions team will reach out within 24 hours.');
                    inquiryForm.reset();
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            }
        });
    }
});