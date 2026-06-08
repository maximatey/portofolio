/* ============================================
   PORTFOLIO — SCRIPT.JS
   Scroll animations, navbar, form handling
   ============================================ */

// ── Navbar scroll effect ──────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ── Hamburger menu ────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ── Reveal on scroll (IntersectionObserver) ───
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      // Stagger sibling reveals
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
      const sibIdx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${sibIdx * 80}ms`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ── Skill bar animations ──────────────────────
const bars = document.querySelectorAll('.bar-fill');

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const width = target.getAttribute('data-width');
      // Small delay to let the reveal animation finish first
      setTimeout(() => {
        target.style.width = width + '%';
      }, 300);
      barObserver.unobserve(target);
    }
  });
}, { threshold: 0.3 });

bars.forEach(bar => barObserver.observe(bar));

// ── Active nav link highlight ─────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${id}`) {
          link.style.color = 'var(--accent)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ── Contact form ──────────────────────────────
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('form-submit-btn');
  const successMsg = document.getElementById('form-success');
  const form = document.getElementById('contact-form');

  // Simulate sending
  btn.textContent = 'Sending…';
  btn.style.opacity = '0.7';
  btn.style.pointerEvents = 'none';

  setTimeout(() => {
    successMsg.classList.add('show');
    btn.textContent = 'Send Message →';
    btn.style.opacity = '1';
    btn.style.pointerEvents = 'auto';
    form.reset();

    setTimeout(() => {
      successMsg.classList.remove('show');
    }, 5000);
  }, 1200);
}

// ── Smooth project card ripple ────────────────
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', (e) => {
    card.style.transition = 'box-shadow 0.35s cubic-bezier(0.4,0,0.2,1), transform 0.35s cubic-bezier(0.4,0,0.2,1), border-color 0.35s';
  });
});

// ── Typing effect for hero role ───────────────
const roles = [
  'Front-End Developer',
  'Software Engineer',
  'QA Engineer',
  'React Developer',
];

const heroRole = document.getElementById('hero-role');
let roleIdx = 0;
let charIdx = 0;
let isDeleting = false;
let typeSpeed = 85;

function typeRole() {
  const current = roles[roleIdx];
  if (isDeleting) {
    heroRole.textContent = current.substring(0, charIdx - 1);
    charIdx--;
    typeSpeed = 45;
  } else {
    heroRole.textContent = current.substring(0, charIdx + 1);
    charIdx++;
    typeSpeed = 85;
  }

  if (!isDeleting && charIdx === current.length) {
    isDeleting = true;
    typeSpeed = 1600; // pause before deleting
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    roleIdx = (roleIdx + 1) % roles.length;
    typeSpeed = 400;
  }

  setTimeout(typeRole, typeSpeed);
}

// Start typing after initial animation
setTimeout(typeRole, 1800);

// ── Cursor trail effect (subtle) ─────────────
const cursor = document.createElement('div');
cursor.style.cssText = `
  position: fixed;
  width: 6px; height: 6px;
  background: var(--accent, #B5865A);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;
  mix-blend-mode: multiply;
  opacity: 0;
`;
document.body.appendChild(cursor);

let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = (mouseX - 3) + 'px';
  cursor.style.top  = (mouseY - 3) + 'px';
  cursor.style.opacity = '0.5';
});

// ── Year in footer ────────────────────────────
const footerCopy = document.querySelector('.footer-copy');
if (footerCopy) {
  footerCopy.textContent = `© ${new Date().getFullYear()} Alex Sander. Crafted with care.`;
}

// ── Smooth scroll for all anchor links ────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

console.log('%c Alex Sander Portfolio', 'font-size: 20px; font-weight: bold; color: #B5865A; font-family: serif;');
console.log('%c Built with vanilla HTML, CSS & JS ✨', 'font-size: 12px; color: #6B6B80;');
