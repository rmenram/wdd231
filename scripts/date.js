// constants
const short = document.querySelector("#short");
const year = document.querySelector("#year");

// use the date object
const today = new Date();
let last = new Date(document.lastModified);

short.innerHTML = `${last.toLocaleDateString()} ${last.toLocaleTimeString()}`;
year.innerHTML = `©️ ${today.getFullYear()}`;