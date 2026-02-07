// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Typing Effect
const typingElement = document.getElementById('typing-text');
const words = [
  "I'm learning to code",
  "Creating small projects",
  "Discord & Web enthusiast",
  "Let's build something!"
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = words[wordIndex];
  typingElement.textContent = current.substring(0, charIndex);

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 90);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, isDeleting ? 40 : 1400);
  }
}
type();

// Particles - Pure Red
particlesJS('particles-js', {
  particles: {
    number: { value: 90, density: { enable: true, value_area: 900 } },
    color: { value: ["#ff0033","#ff1a1a","#cc0000","#ff4d4d"] },
    shape: { type: "circle" },
    opacity: { value: 0.7, random: true },
    size: { value: 3.5, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ff0033",
      opacity: 0.48,
      width: 1.3
    },
    move: {
      enable: true,
      speed: 2.5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 200, line_linked: { opacity: 0.8 } },
      push: { particles_nb: 5 }
    }
  },
  retina_detect: true
});

// Fade-in sections on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));