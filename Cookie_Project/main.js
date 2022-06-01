// Todo: After the lecture, create an Animation function library.

const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } });

tl.fromTo(
  ".cookie",
  { y: 30, scale: 0 },
  { y: 0, scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5 }
);
tl.fromTo(
  ".cookie-container",
  { x: -30, opacity: 0 },
  { x: 0, opacity: 1 },
  "<50%"
);
tl.fromTo(
  ".cookie-content",
  { x: 30, opacity: 0 },
  { x: 0, opacity: 1 },
  "<50%"
);
tl.fromTo("#cookie", { opacity: 0, y: 0 }, { opacity: 1, y: 50 });
tl.fromTo("#lip", { opacity: 0, y: 0 }, { opacity: 1, y: 10 });

const button = document.querySelector("button");
button.addEventListener("click", () => {
  gsap.to(".cookie", {
    opacity: 0,
    y: 20,
    duration: 0.75,
    ease: "power3.out",
  });
});

// to repeat the animation, use yoyo attribute. EX: yoyo: 2 repeat twice, yoyo: -1 infinite.

// fade in effect
function fadeIn(obj) {
  tl.fromTo(
    obj,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, ease: "power1.out", duration: 0.75 }
  );
}

// fade out effect
function fadeOut(obj) {
  tl.fromTo(
    obj,
    { y: 0, opacity: 1 },
    { y: 30, opacity: 0, ease: "power1.out", duration: 0.75 }
  );
}

/* schema for prop 
prop {
  from: {
    y: value,
     opacity: value
  },
  to: {
    y: value,
    opacity: value,
    ease: "power1.out",
    duration: 0.75 
  }
}
 */

// improvement
function face(obj, prop) {
  tl.fromTo(obj, prop.from, prop.to);
}
