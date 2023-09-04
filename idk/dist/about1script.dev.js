"use strict";

var tl = gsap.timeline();
tl.from("#number4", {
  opacity: 0,
  onStart: function onStart() {
    $('#number4').textillate({
      "in": {
        effect: 'fadeInUp',
        callback: function callback() {
          $('#number4').textillate('out');
        }
      },
      out: {
        effect: 'fadeOutUp'
      }
    });
  }
}).from("#number3", {
  opacity: 0,
  delay: 1.1,
  onStart: function onStart() {
    $('#number3').textillate({
      "in": {
        effect: 'fadeInUp',
        callback: function callback() {
          $('#number3').textillate('out');
        }
      },
      out: {
        effect: 'fadeOutUp'
      }
    });
  }
}).from("#number2", {
  opacity: 0,
  delay: 1.1,
  onStart: function onStart() {
    $('#number2').textillate({
      "in": {
        effect: 'fadeInUp',
        callback: function callback() {
          $('#number2').textillate('out');
        }
      },
      out: {
        effect: 'fadeOutUp'
      }
    });
  }
}).from("#number1", {
  opacity: 0,
  delay: 1.1,
  onStart: function onStart() {
    $('#number1').textillate({
      "in": {
        effect: 'fadeInUp'
      }
    });
  }
}).to(".screen", {
  top: "-100%",
  delay: 1,
  duration: 1.5,
  ease: "Power4.easeOut"
});
//# sourceMappingURL=about1script.dev.js.map
