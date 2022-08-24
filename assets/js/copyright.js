const copyright = document.getElementById("copyright");
const start = 2022;
const current = new Date().getFullYear();

if (start >= current) {
    copyright.innerText = start;
} else {
    copyright.innerText = `${start} - ${current}`;
}
