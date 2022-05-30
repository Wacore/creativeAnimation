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
