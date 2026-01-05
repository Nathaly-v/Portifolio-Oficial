// =========================
// VARIÁVEIS GLOBAIS
// =========================
const body = document.body;
const hero = document.querySelector('.hero');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-menu a');
const toggle = document.getElementById('dark-mode-toggle');

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

    // Hero active
    if (scrollY < heroHeight) {
        body.classList.add('hero-active');
    } else {
        body.classList.remove('hero-active');
    }

    // Mostrar nav
    nav.classList.toggle('visible', scrollY > heroHeight - 50);
    nav.classList.toggle('active', scrollY > heroHeight / 2);
    nav.classList.toggle('scrolled', scrollY > 50);
});

// =========================
// MINI MOUSE - SCROLL PARA PRÓXIMA SEÇÃO
// =========================
const mouse = document.getElementById('mouse');
if (mouse) {
    mouse.addEventListener('click', () => {
        const nextSection = document.getElementById('sobre');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// =========================
// CLICK NOS LINKS DO MENU - SCROLL SUAVE + HOVER
// =========================
navLinks.forEach(link => {
    // Scroll suave ao clicar
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').replace('#', '');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Ativar link apenas no hover
    link.addEventListener('mouseenter', () => link.classList.add('active'));
    link.addEventListener('mouseleave', () => link.classList.remove('active'));
});

// ==========================
// ATIVAR MODO DARK
// ==========================
if (toggle) {
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
}

// Carregar preferência de tema
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
}
// =========================
// TYPEWRITER - HERO
// =========================
const typeTarget = document.getElementById('typewriter');

const phrases = [
  'ANALISTA DE TI JR',
  'INFRAESTRUTURA',
  'SUPORTE',
  'CLOUD'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    typeTarget.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  } else {
    typeTarget.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  }

  let speed = isDeleting ? 50 : 90;

  if (!isDeleting && charIndex === currentPhrase.length) {
    speed = 1200; // pausa ao finalizar palavra
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

document.addEventListener('DOMContentLoaded', () => {
  typeEffect();
});
