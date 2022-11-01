"use strict";

const divEl = document.querySelector("div");
// console.log(divEl.innerText); // показывает только то, что на странице (не спрятано)
// console.log(divEl.textContent); // Показывает весь текст
// console.log(divEl.innerHTML); // Весь html код

const h2E1 = document.createElement("h2");
divEl.appendChild(h2E1);
