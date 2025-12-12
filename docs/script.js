// Update timestamp in footer
function updateTimestamp() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  const timestamp = document.getElementById('timestamp');
  if (timestamp) {
    timestamp.textContent = `${hours}:${minutes}:${seconds}`;
  }
}

// Initialize timestamp
updateTimestamp();
setInterval(updateTimestamp, 1000);

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-4px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Add glow effect on skill hover
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('mouseenter', function() {
    this.style.boxShadow = '0 0 15px rgba(90, 217, 255, 0.5)';
  });
  
  tag.addEventListener('mouseleave', function() {
    this.style.boxShadow = 'none';
  });
});

// Monitor mouse position for subtle effects
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function playRandomSounds() {
  const audio1 = new Audio(`s2.mp3`);
  const audio2 = new Audio(`sq.mp3`);
  audio1.play();
  audio2.play();

  // Generate a new random interval for the next play
  const minInterval = 20000;
  const maxInterval = 35000;
  const nextInterval = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;

  setTimeout(playRandomSounds, nextInterval);
}

// Start the first random play
playRandomSounds();

// Click sound
document.addEventListener('click', function(e) {
  if (e.button === 0) {
    const audio = new Audio('click.mp3');
    audio.play();
  }
});
