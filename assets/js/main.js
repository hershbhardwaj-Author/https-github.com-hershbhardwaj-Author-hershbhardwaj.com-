
// Typewriter effect — the signature element
const phrases = [
  "Author · Writing Mentor · Musician · Filmmaker",
  "HarperCollins published author",
  "Building Author's Forge",
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isPaused = false;

const el = document.getElementById('typewriter');

function type() {
  const current = phrases[phraseIndex];

  if (isPaused) {
    isPaused = false;
    setTimeout(type, 1200);
    return;
  }

  if (!isDeleting) {
    el.innerHTML = current.substring(0, charIndex + 1) + '<span class="cursor"></span>';
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      isPaused = true;
    }
    setTimeout(type, 68);
  } else {
    el.innerHTML = current.substring(0, charIndex - 1) + '<span class="cursor"></span>';
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    setTimeout(type, 32);
  }
}

setTimeout(type, 800);

// Nav scroll behaviour
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Fade-in on scroll
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => observer.observe(el));

// Hero elements visible immediately
document.querySelectorAll('.hero .fade-in').forEach((el, i) => {
  setTimeout(() => el.classList.add('visible'), 400 + i * 180);
});
