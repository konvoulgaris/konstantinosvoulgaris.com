const getGreeting = () => {
    const time = new Date().getHours();
    const greeting = document.getElementById("greeting");

    if (time >= 5 && time < 12) {
        greeting.innerText = "Good Morning!";
    } else if (time >= 12 && time < 18) {
        greeting.innerText = "Good Afternoon!";
    } else {
        greeting.innerText = "Good Evening!";
    }
}

const getCopyrightYear = (start) => {
    const current = new Date().getFullYear();
    const copyright = document.getElementById("copyright");

    if (start >= current) {
        copyright.innerText = start;
    } else {
        copyright.innerText = `${start} - ${current}`;
    }
}
