"use strict";

/*-----------------------------------------------------------------------------*/
var cursor = document.querySelector(".cursor");
var logo = document.querySelector(".logo");
var frame = document.querySelector(".frame1");

var lerp = function lerp(x, y, a) {
  return x * (1 - a) + y * a;
};

window.addEventListener("mousemove", function (dets) {
  cursor.style.transform = "translate(".concat(dets.clientX, "px,").concat(dets.clientY, "px)");
  frame.style.transform = "translate(".concat(dets.clientX, "px,").concat(dets.clientY, "px)");
});
logo.addEventListener("mousemove", function (dets) {
  var dims = logo.getBoundingClientRect();
  var xstart = dims.x;
  var xend = dims.x + dims.width;
  var zroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
  lerp(-50, 50, zroone);
  gsap.to(cursor, {
    scale: 3
  });
  gsap.to(".logo ", {
    color: "blue",
    duration: 1
  });
  gsap.to(".logo", {
    x: lerp(-50, 50, zroone),
    duration: 0.3
  });
});
logo.addEventListener("mouseleave", function (dets) {
  gsap.to(cursor, {
    scale: 1
  });
  gsap.to(".logo ", {
    color: "black",
    duration: 1
  });
  gsap.to(".logo", {
    x: 0,
    duration: 0.3
  });
});
/*-----------------------------------------------------------------------------*/

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
  delay: 1.2,
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
  delay: 1.2,
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
  delay: 1.2,
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
/*-----------------------------------------------------------------------------*/
//# sourceMappingURL=indexscript.dev.js.map
