"use strict";

var numParticles = 50;
var particles = document.querySelector('.particles');

for (var i = 0; i < numParticles; i++) {
  var particle = document.createElement('div');
  particle.classList.add('particle');
  particles.appendChild(particle);
}

var particleElements = document.querySelectorAll('.particle');
particleElements.forEach(function (particle) {
  var x = Math.random() * 100;
  var y = Math.random() * 100;
  var size = Math.random() * 4 + 1;
  var duration = Math.random() * 3 + 2;
  particle.style.left = "".concat(x, "%");
  particle.style.top = "".concat(y, "%");
  particle.style.width = "".concat(size, "px");
  particle.style.height = "".concat(size, "px");
  particle.style.animation = "floatAnimation ".concat(duration, "s infinite ease-in-out");
});
//# sourceMappingURL=trialscript.dev.js.map
