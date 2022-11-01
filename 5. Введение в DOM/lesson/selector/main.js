"use strict";

// console.log(document.querySelector(".test-class:last-child"));

// document.body;
// document.title;
// document.documentElement;

const divEl = document.querySelectorAll("div:last-child p"); // Поиск по всей странице
const firstDiv = document.querySelector(".test-class"); // Поиск
console.lop(firstDiv.querySelector("p:last-child")); // поиск в какого-то конкретного тега
// const children = divEl.children;
// const nodes = divEl.childNodes;
