const tl = gsap.timeline({ defaults: { duration: 1 } });
const form = document.querySelector("form");
const containers = document.querySelectorAll(".input-container");

const start = "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512";
const end = "M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512";

containers.forEach(container => {
    const line = container.querySelector('.elastic-line');
    const input = container.querySelector('.input');
    const label = container.querySelector('.input-title');

    input.addEventListener('focus', () => {
        if (!input.value) {
            // console.log(line);
            tl.fromTo(line, { attr: { d: start } }, { attr: { d: end }, duration: .75, ease: "power3.out" })
            tl.to(line, { attr: { d: start }, ease: "elastic.out(3, .5)" }, "<50%");

            // placeholder animation
            // tl.set(label, { transformOrigin: "left" });
            tl.to(label, { top: -15, left: 0, scale: 0.7, duration: .35, ease: "Power2.inOut" }, "<20%");
        }
    })
})

function colorize(color, line, label) {
    gsap.to(line, { stroke: color, duration: .75 });
    gsap.to(label, { color: color, duration: .75 });
}

function validateEmailInput(input) {
}

function validateInput(target, line, label) {
    let { type, value } = target;

    switch (type) {
        case "text":
            value.length < 2 ? colorize('red', line, label) : colorize('rgb(53, 178, 213)', line, label);
            break;
        case "email":

            break;
        default:
            break;
    }
}

containers.forEach(container => {
    const line = container.querySelector('.elastic-line');
    const input = container.querySelector('.input');
    const label = container.querySelector('.input-title');

    input.addEventListener('blur', () => {
        if (!input.value) {
            tl.to(label, { top: 0, left: 0, scale: 1, color: "#ccc", duration: .35, ease: "Power2.inOut" })
            tl.to(line, { stroke: "#ccc", duration: .35, ease: "Power2.inOut" });
        }
    })

    input.addEventListener('input', (e) => {
        validateInput(e.target, line, label);
    })
})
