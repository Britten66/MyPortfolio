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

// Removed slow scroll animations for better performance

// Add simple download button
function createActionButton() {
    const actionBtn = document.createElement('a');
    actionBtn.innerHTML = '📄 Download Resume';
    actionBtn.className = 'action-button';
    actionBtn.href = 'Christopher_Britten_2026-PUBLIC.pdf';
    actionBtn.download = 'Christopher_Britten_Resume_2026.pdf';

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

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    createActionButton();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        window.print();
    }
});
