// This script sets the greeting based on the time of day.

const greeting = document.getElementById("greeting");
const time = new Date().getHours();

if (time >= 5 && time <= 11) {
    greeting.innerText = "Good Morning!";
} else if (time >= 12 && time <= 18) {
    greeting.innerText = "Good Afternoon!";
} else {
    greeting.innerText = "Good Evening!";
}
