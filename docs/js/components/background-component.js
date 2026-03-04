"use strict";
const body = document.querySelector('body');
if (!body)
    throw new Error('HTMLBodyElement(body) não encontrado!');
body.addEventListener('mousemove', (event) => {
    const x = (window.innerWidth - event.clientX * 2) / 1000;
    const y = (window.innerHeight - event.clientY * 2) / 1000;
    body.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
});
