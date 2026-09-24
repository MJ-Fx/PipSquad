/* Shared PipSquad interactions and animation layer. */
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .header {
            background: rgba(242, 243, 244, .72);
            border-bottom: 1px solid rgba(255, 255, 255, .55);
            box-shadow: 0 8px 30px rgba(2, 0, 53, .12), inset 0 1px rgba(255, 255, 255, .8);
            transition: background-color .35s ease, box-shadow .35s ease, transform .35s ease;
        }
        .header::before {
            content: '';
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: linear-gradient(105deg, rgba(255,255,255,.48), transparent 35%, rgba(32,0,177,.08));
            opacity: .7;
        }
        .header.scrolled {
            background: rgba(242, 243, 244, .86);
            box-shadow: 0 12px 34px rgba(2, 0, 53, .18), inset 0 1px rgba(255, 255, 255, .9);
        }
        .header.nav-hidden { transform: translateY(-100%); }
        .header.nav-visible { transform: translateY(0); }
        .logo a { display: inline-block; transition: transform .35s ease, filter .35s ease; }
        .logo a:hover { transform: translateY(-2px) scale(1.03); filter: drop-shadow(0 5px 12px rgba(32,0,177,.25)); }
        .nav-menu > li > a { transition: color .25s ease, transform .25s ease, text-shadow .25s ease; }
        .nav-menu > li > a:hover { color: var(--color-accent, #2000B1); transform: translateY(-2px); text-shadow: 0 4px 14px rgba(32,0,177,.2); }
        .nav-menu > li > a::before { content: ''; position: absolute; left: 0; right: 100%; bottom: -4px; height: 2px; border-radius: 4px; background: linear-gradient(90deg, #02066F, #2000B1); transition: right .3s ease; }
        .nav-menu > li > a:hover::before, .nav-menu > li > a.active::before { right: 0; }
        .mobile-menu-toggle { transition: transform .3s ease; }
        .mobile-menu-toggle:hover { transform: scale(1.12); }
        .mobile-menu-toggle span { transition: transform .3s ease, opacity .3s ease, background-color .3s ease; }

        /* SMC is a direct link, so never show its nested menu. */
        .dropdown-submenu > a[href="smart-money-concepts.html"] + ul { display: none !important; }
        .dropdown-submenu > a[href="smart-money-concepts.html"]::after { display: none !important; }

        /* Animated chart-like background for the homepage hero. */
        .hero { isolation: isolate; }
        .hero::before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: -1;
            opacity: .32;
            background-image: linear-gradient(rgba(32,0,177,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(32,0,177,.08) 1px, transparent 1px);
            background-size: 42px 42px;
            mask-image: linear-gradient(to right, transparent, black 35%, black 85%, transparent);
            animation: gridDrift 18s linear infinite;
        }
        .hero::after {
            content: '';
            position: absolute;
            right: 5%;
            top: 18%;
            width: 44%;
            height: 55%;
            z-index: -1;
            opacity: .42;
            background: linear-gradient(145deg, transparent 0 12%, #2000B1 12.4% 13%, transparent 13.4% 26%, #02066F 26.4% 27%, transparent 27.4% 43%, #2000B1 43.4% 44%, transparent 44.4% 58%, #02066F 58.4% 59%, transparent 59.4% 74%, #2000B1 74.4% 75%, transparent 75.4%);
            filter: drop-shadow(0 0 12px rgba(32,0,177,.35));
            transform: skewY(-10deg);
            animation: chartPulse 5s ease-in-out infinite alternate;
        }
        .hero-graphic img { position: relative; z-index: 1; border-radius: var(--border-radius-lg); box-shadow: 0 18px 45px rgba(2,0,53,.2); animation: chartFloat 6s ease-in-out infinite; }
        .reveal-on-scroll { opacity: 0; transform: translateY(24px); transition: opacity .65s ease, transform .65s cubic-bezier(.2,.7,.2,1); }
        .reveal-on-scroll.is-visible { opacity: 1; transform: translateY(0); }
        .hero-content, .hero-graphic { animation: pipFadeUp .8s cubic-bezier(.2,.7,.2,1) both; }
        .hero-graphic { animation-delay: .16s; }
        .feature-card { transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease; border: 1px solid transparent; }
        .feature-card:hover { transform: translateY(-9px) scale(1.015); border-color: rgba(32,0,177,.18); box-shadow: 0 18px 38px rgba(32,0,177,.16); }
        @keyframes pipFadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes gridDrift { from { background-position: 0 0, 0 0; } to { background-position: 42px 42px, 42px 42px; } }
        @keyframes chartPulse { from { transform: skewY(-10deg) translateY(8px); opacity: .25; } to { transform: skewY(-10deg) translateY(-8px); opacity: .52; } }
        @keyframes chartFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: .01ms !important; }
        }
    `;
    document.head.appendChild(style);

    // Remove the nested SMC submenu from every page, leaving one direct link.
    document.querySelectorAll('.dropdown-submenu > a[href="smart-money-concepts.html"]').forEach(link => {
        const submenu = link.nextElementSibling;
        if (submenu && submenu.tagName === 'UL') submenu.remove();
        link.closest('.dropdown-submenu')?.classList.add('direct-nav-link');
    });

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
