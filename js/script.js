// =========================
// VARIÁVEIS GLOBAIS
// =========================
const body = document.body;
const hero = document.querySelector('.hero');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-menu a');

// =========================
// HERO ACTIVE AO CARREGAR
// =========================
document.addEventListener('DOMContentLoaded', () => {
    body.classList.add('hero-active');

    // =========================
    // ANIMAÇÕES DE ENTRADA - FADE UP & CARDS
    // =========================
    const faders = document.querySelectorAll('.fade-up');
    const cards = document.querySelectorAll('.card');

    const options = { threshold: 0.2 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, options);

    faders.forEach(fader => observer.observe(fader));
    cards.forEach((card, i) => {
        observer.observe(card);
        card.style.transitionDelay = `${i * 0.15}s`;
    });
});

// =========================
// SCROLL PRINCIPAL
// =========================
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;

    // -------------------------
    // Hero active
    // -------------------------
    if (scrollY < heroHeight) {
        body.classList.add('hero-active');
    } else {
        body.classList.remove('hero-active');
    }

    // -------------------------
    // Mostrar nav
    // -------------------------
    if (scrollY > heroHeight - 50) {
        nav.classList.add('visible');
    } else {
        nav.classList.remove('visible');
    }

    if (scrollY > heroHeight / 2) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }

    if (scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// =========================
// MINI MOUSE - SCROLL PARA PRÓXIMA SEÇÃO
// =========================
document.getElementById('mouse').addEventListener('click', () => {
    const nextSection = document.getElementById('sobre');
    nextSection.scrollIntoView({ behavior: 'smooth' });
});

// =========================
// CLICK NOS LINKS DO MENU - SCROLL SUAVE
// =========================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').replace('#', '');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
<<<<<<< HEAD
=======

    // -------------------------
    // Ativar link apenas no hover
    // -------------------------
    link.addEventListener('mouseenter', () => {
        link.classList.add('active');
    });
    link.addEventListener('mouseleave', () => {
        link.classList.remove('active');
    });
    upstream/main
});

// ==========================
// ATIVAR MODO DARK
// ==========================
const toggle = document.getElementById('dark-mode-toggle');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Carregar preferência
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
}