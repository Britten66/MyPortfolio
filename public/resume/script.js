// Interactive Resume Features

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add simple download button
function createActionButton() {
    const actionBtn = document.createElement('a');
    actionBtn.innerHTML = '📄 Download Resume';
    actionBtn.className = 'action-button';
    actionBtn.href = 'Christopher Britten Resume  PUBLIC.pdf';
    actionBtn.download = 'Christopher_Britten_Resume.pdf';

    // Style the button - simple grey bubble
    actionBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #4a4a4a;
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 50px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        text-decoration: none;
        display: inline-block;
    `;

    document.body.appendChild(actionBtn);
}



// Skill items click effect with visual feedback
function addSkillInteractivity() {
    document.querySelectorAll('.skill-item').forEach(skill => {
        // Click effect with ripple
        skill.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(0, 212, 255, 0.6);
                width: 10px;
                height: 10px;
                pointer-events: none;
                animation: ripple 0.6s ease-out;
            `;

            const rect = this.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left - 5) + 'px';
            ripple.style.top = (e.clientY - rect.top - 5) + 'px';

            this.style.position = 'relative';
            this.appendChild(ripple);

            // Pulse effect
            this.style.transform = 'scale(1.1)';

            setTimeout(() => {
                this.style.transform = 'translateY(-5px) scale(1.05)';
                ripple.remove();
            }, 200);

            setTimeout(() => {
                this.style.transform = 'translateY(-5px) scale(1.05)';
            }, 400);

            // Show notification
            showSkillNotification(this.textContent);
        });

        // Double click for special effect
        skill.addEventListener('dblclick', function() {
            this.style.animation = 'spin 0.5s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
}

// Show skill notification
function showSkillNotification(skillName) {
    const notification = document.createElement('div');
    notification.textContent = `✓ ${skillName}`;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #141e30 0%, #243b55 100%);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        border: 1px solid #00d4ff;
        box-shadow: 0 4px 12px rgba(0, 212, 255, 0.3);
        z-index: 10000;
        font-weight: 600;
        opacity: 0;
        transform: translateX(100px);
        transition: all 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 10);

    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100px)';
        setTimeout(() => notification.remove(), 300);
    }, 1500);
}

// Add tooltips and click effects to technical skills
function addTechSkillInteractivity() {
    document.querySelectorAll('.tech-item').forEach(tech => {
        tech.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });

        tech.addEventListener('click', function() {
            // Flash effect
            const originalBg = this.style.background;
            this.style.background = '#00d4ff';
            this.style.color = '#141e30';

            setTimeout(() => {
                this.style.background = '';
                this.style.color = '';
            }, 200);

            // Show tech notification
            showTechNotification(this.textContent);
        });
    });
}

// Show tech skill notification
function showTechNotification(techName) {
    const notification = document.createElement('div');
    notification.textContent = `🔧 ${techName}`;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        left: 20px;
        background: linear-gradient(135deg, #141e30 0%, #243b55 100%);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        border: 1px solid #00d4ff;
        box-shadow: 0 4px 12px rgba(0, 212, 255, 0.3);
        z-index: 10000;
        font-weight: 600;
        opacity: 0;
        transform: translateX(-100px);
        transition: all 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 10);

    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-100px)';
        setTimeout(() => notification.remove(), 300);
    }, 1500);
}

// Track scroll progress
function updateScrollProgress() {
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    scrollProgress.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, #00d4ff 0%, #2c5364 100%);
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease;
        box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
    `;
    document.body.appendChild(scrollProgress);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
}

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    createActionButton();

    // Add fade-in to header
    const header = document.querySelector('.header');
    header.style.animation = 'fadeIn 1s ease-in-out';

    // Add ripple animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            from {
                width: 10px;
                height: 10px;
                opacity: 1;
            }
            to {
                width: 100px;
                height: 100px;
                opacity: 0;
            }
        }

        @keyframes spin {
            from {
                transform: rotate(0deg) scale(1);
            }
            to {
                transform: rotate(360deg) scale(1.1);
            }
        }
    `;
    document.head.appendChild(style);
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        window.print();
    }
});

// Add copy email functionality
document.querySelectorAll('.contact-item[href^="mailto:"]').forEach(emailLink => {
    emailLink.addEventListener('click', function(e) {
        const email = this.textContent;

        // Create temporary element for copying
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();

        try {
            document.execCommand('copy');

            // Show copied notification
            const notification = document.createElement('div');
            notification.textContent = 'Email copied to clipboard!';
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #4CAF50;
                color: white;
                padding: 15px 25px;
                border-radius: 5px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 10000;
                animation: slideIn 0.3s ease;
            `;

            document.body.appendChild(notification);

            setTimeout(() => {
                notification.remove();
            }, 2000);
        } catch (err) {
            console.log('Copy failed:', err);
        }

        document.body.removeChild(tempInput);
    });
});

// Console Easter Egg
console.log('%cHello! 👋', 'color: #00d4ff; font-size: 24px; font-weight: bold;');
console.log('%cInterested in the code behind this resume?', 'color: #2c5364; font-size: 16px;');
console.log('%cFeel free to reach out at britten63@hotmail.com', 'color: #141e30; font-size: 14px;');
console.log('%cTip: Try clicking on the skills!', 'color: #00d4ff; font-size: 14px; font-style: italic;');