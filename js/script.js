  // Tab functionality
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and content
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Show corresponding content
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Simple animation on scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.gallery-item, .teacher-card, .testimonial-card, .timeline-item').forEach(item => {
            item.style.opacity = 0;
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.5s ease';
            observer.observe(item);
        });

        // Calendar hover effect
        document.querySelectorAll('.calendar-cell.event').forEach(cell => {
            cell.addEventListener('mouseenter', () => {
                const span = cell.querySelector('span');
                if (span) {
                    span.style.display = 'block';
                    span.style.animation = 'fadeIn 0.3s ease';
                }
            });
            
            cell.addEventListener('mouseleave', () => {
                const span = cell.querySelector('span');
                if (span) span.style.display = 'none';
            });
        });

        // Inquiry form handling
const inquiryForm = document.querySelector('.inquiry-form');
if (inquiryForm) {
    inquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const requiredFields = inquiryForm.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'var(--coral)';
            } else {
                field.style.borderColor = 'var(--light-blue)';
            }
        });
        
        if (isValid) {
            // In a real application, you would send this data to a server
            alert('Thank you for your inquiry! Our admissions team will contact you shortly.');
            inquiryForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

//responisve js
// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('nav ul');
  
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('show');
    });
  }
  
  // Tab functionality
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(tc => tc.classList.remove('active'));
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Show corresponding content
      const tabId = tab.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
});