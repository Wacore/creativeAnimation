const tl = gsap.timeline({ defaults: { duration: 0.75, ease: 'power3.out' } });

tl.fromTo(".hero-section img", { scale: 1.3, opacity: 0, borderRadius: "0rem" }, { scale: 1, opacity: 1, borderRadius: "2rem", delay: 0.35, duration: 3, ease: "elastic.out(1.2, 0.75)" })
tl.fromTo(".cta1", { opacity: 0, x: '100%' }, { opacity: 1, x: 0 }, "<50%");
tl.fromTo(".cta3", { opacity: 0, x: '-100%' }, { opacity: 1, x: 0 }, "<50%");
tl.fromTo(".cta2", { opacity: 0, y: '100%' }, { opacity: 1, y: 0 }, "<50%");

tl.fromTo(".cta4", { opacity: 0, x: '100%' }, { opacity: 1, x: 0 }, "<50%");
tl.fromTo(".cta6", { opacity: 0, x: '-100%' }, { opacity: 1, x: 0 }, "<50%");
tl.fromTo(".cta5", { opacity: 0, y: '100%' }, { opacity: 1, y: 0 }, "<50%");

tl.fromTo(".cta-button", { opacity: 0, y: 30 }, { opacity: 1, y: 0 });