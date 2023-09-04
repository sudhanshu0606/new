const numParticles = 50;
const particles = document.querySelector('.particles');

for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particles.appendChild(particle);
}

const particleElements = document.querySelectorAll('.particle');

particleElements.forEach((particle) => {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const size = Math.random() * 4 + 1;
  const duration = Math.random() * 3 + 2;

  particle.style.left = `${x}%`;
  particle.style.top = `${y}%`;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.animation = `floatAnimation ${duration}s infinite ease-in-out`;
});
