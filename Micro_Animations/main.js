const tl = gsap.timeline({ defaults: { duration: 0.35, ease: "power3.out" } });
const homeIcon = document.querySelector('.home-svg');
const notifications = document.querySelector('.notification-svg');
const messages = document.querySelector('.messages-svg');

tl.set(".feather", { scale: 0, transformOrigin: "center" });

homeIcon.addEventListener('click', () => {
    tl.fromTo(".home-svg", { scale: 1 }, { scale: 1.1, yoyo: true, repeat: 1, duration: 0.2, ease: "power1.out" });
    tl.fromTo(".feather", { y: -5, scale: 0 }, { y: 20, scale: 1.5, duration: 1.5, stagger: 0.2 });
    tl.fromTo('.right-feather', { x: 0 }, { x: 5 })
})

tl.set('.bell', { transformOrigin: 'top center' });
tl.set('.ringer', { transformOrigin: 'top center' });
tl.set('.wave', { opacity: 0, transformOrigin: 'button' })

notifications.addEventListener('click', () => {
    tl.fromTo('.bell', { rotation: -5 }, { rotation: 0, duration: 2, ease: "elastic.out(5, 0.2)" });
    tl.fromTo('.ringer', { rotation: 3 }, { rotation: 0, duration: 1, ease: "elastic.out(5, 0.2)" }, "<10%");
    tl.fromTo('.wave', { opacity: 1, scale: 0 }, { opacity: 0, duration: .8, scale: 1.3 }, "<10%")
})

tl.set(".flap", { transformOrigin: 'top' })
messages.addEventListener('click', () => {
    tl.fromTo('.messages-svg', { scale: 1 }, { scale: 0.9 });
    tl.fromTo('.flap', { scale: 1 }, { scale: -1 }, "<50%");
    tl.fromTo('.messages-svg', { scale: 0.9 }, { scale: 1 }, "<50%");
    tl.fromTo('.note', { opacity: 1, y: 0 }, { opacity: 0, y: -40, duration: .7 })
    tl.to('.flap', { scale: 1 }, "<70%");
})
