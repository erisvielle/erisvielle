function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

const sections = [null, 'about', 'education', 'skills-tools', 'certifications', 'projects']; // null represents very top

function getCurrentSectionIndex() {
  const scrollPos = window.scrollY || window.pageYOffset;

  if (scrollPos < 10) return 0; // very top

  for (let i = sections.length - 1; i >= 1; i--) {
    const el = document.getElementById(sections[i]);
    if (el && el.offsetTop <= scrollPos + 10) {
      return i;
    }
  }

  return 0; // default to very top if none found
}

function scrollToSection(index) {
  if (index < 0) index = 0;
  if (index >= sections.length) index = sections.length - 1;

  if (index === 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const el = document.getElementById(sections[index]);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}

document.getElementById('btn-up').addEventListener('click', () => {
  const currentIndex = getCurrentSectionIndex();
  if (currentIndex > 0) {
    scrollToSection(currentIndex - 1);
  }
});

document.getElementById('btn-down').addEventListener('click', () => {
  const currentIndex = getCurrentSectionIndex();
  if (currentIndex < sections.length - 1) {
    scrollToSection(currentIndex + 1);
  }
});

window.addEventListener('scroll', () => {
  const navControls = document.querySelector('.nav-controls');

  if (window.scrollY > 100) {
    navControls.classList.add('show');
  } else {
    navControls.classList.remove('show');
  }
});
