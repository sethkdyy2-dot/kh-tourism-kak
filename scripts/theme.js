// Premium Theme & Interaction Engine
function applyTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

applyTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (!localStorage.theme) applyTheme();
});

function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
}

// Global Form Feedback System
function showFeedback(button, originalText) {
    button.disabled = true;
    button.innerHTML = `<span class="animate-pulse">Processing...</span>`;
    
    setTimeout(() => {
        button.innerHTML = `<span class="text-green-400">Success</span>`;
        setTimeout(() => {
            button.disabled = false;
            button.innerHTML = originalText;
        }, 2000);
    }, 1500);
}

document.addEventListener('DOMContentLoaded', () => {
    // Premium Mobile Menu Engine
    const menuToggle = document.getElementById('menu-toggle');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuClose = document.getElementById('menu-close');

    if (menuToggle && menuOverlay) {
        menuToggle.addEventListener('click', () => {
            menuOverlay.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
        });

        if (menuClose) {
            menuClose.addEventListener('click', () => {
                menuOverlay.classList.add('translate-x-full');
                document.body.style.overflow = 'auto';
            });
        }

        // Close on link click
        menuOverlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuOverlay.classList.add('translate-x-full');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // Scroll Reveal Engine
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Global Form Listener
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            if (btn) {
                const original = btn.innerHTML;
                showFeedback(btn, original);
            }
        });
    });
});
