/* Shared PipSquad interactions and animation layer. */
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .header { transition: background-color .35s ease, box-shadow .35s ease, transform .35s ease; }
        .header.nav-hidden { transform: translateY(-100%); }
        .header.nav-visible { transform: translateY(0); }
        .logo a { display: inline-block; transition: transform .35s ease, filter .35s ease; }
        .logo a:hover { transform: translateY(-2px) scale(1.03); filter: drop-shadow(0 5px 12px rgba(32,0,177,.25)); }
        .nav-menu > li > a { transition: color .25s ease, transform .25s ease; }
        .nav-menu > li > a:hover { color: var(--color-accent, #2000B1); transform: translateY(-2px); }
        .nav-menu > li > a::before { content: ''; position: absolute; left: 0; right: 100%; bottom: -4px; height: 2px; border-radius: 4px; background: linear-gradient(90deg, #02066F, #2000B1); transition: right .3s ease; }
        .nav-menu > li > a:hover::before, .nav-menu > li > a.active::before { right: 0; }
        .mobile-menu-toggle { transition: transform .3s ease; }
        .mobile-menu-toggle:hover { transform: scale(1.12); }
        .mobile-menu-toggle span { transition: transform .3s ease, opacity .3s ease, background-color .3s ease; }
        .dropdown-submenu > a[href="smart-money-concepts.html"] + ul { display: none !important; }
        .dropdown-submenu > a[href="smart-money-concepts.html"]::after { display: none !important; }
        .reveal-on-scroll { opacity: 0; transform: translateY(24px); transition: opacity .65s ease, transform .65s cubic-bezier(.2,.7,.2,1); }
        .reveal-on-scroll.is-visible { opacity: 1; transform: translateY(0); }
        .hero-content, .hero-graphic { animation: pipFadeUp .8s cubic-bezier(.2,.7,.2,1) both; }
        .hero-graphic { animation-delay: .16s; }
        .feature-card { transition: transform .35s ease, box-shadow .35s ease; }
        .feature-card:hover { transform: translateY(-9px) scale(1.015); }
        @keyframes pipFadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: .01ms !important; }
        }
    `;
    document.head.appendChild(style);

    // Smart Money Concepts is a direct link, not a second-level dropdown.
    document.querySelectorAll('.dropdown-submenu > a[href="smart-money-concepts.html"]').forEach(link => {
        const submenu = link.nextElementSibling;
        if (submenu && submenu.tagName === 'UL') submenu.remove();
        link.closest('.dropdown-submenu')?.classList.add('direct-nav-link');
    });

    // Restore scroll-based page animations without requiring page-specific scripts.
    const revealSelectors = [
        '.feature-card', '.value-card', '.step-card', '.advantage-card', '.asset-card',
        '.participant-tier', '.term-card', '.session', '.trader-card', '.order-card',
        '.institution', '.behavior-card', '.type-card', '.level-card', '.element',
        '.method', '.zone-card', '.event', '.danger', '.scenario', '.tier-card',
        '.testimonial-card', '.guideline-card', '.accordion-item'
    ];
    const revealItems = document.querySelectorAll(revealSelectors.join(','));
    revealItems.forEach((item, index) => {
        item.classList.add('reveal-on-scroll');
        item.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
    });

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealItems.forEach(item => observer.observe(item));
    } else {
        revealItems.forEach(item => item.classList.add('is-visible'));
    }

    // Give the fixed header a subtle state change while scrolling.
    const header = document.querySelector('.header');
    let previousScroll = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        header?.classList.toggle('scrolled', currentScroll > 20);
        if (currentScroll > previousScroll && currentScroll > 140) {
            header?.classList.add('nav-hidden');
            header?.classList.remove('nav-visible');
        } else {
            header?.classList.add('nav-visible');
            header?.classList.remove('nav-hidden');
        }
        previousScroll = currentScroll;
    }, { passive: true });
});
