const picardQuotes = [
    "Make it so.",
    "Engage!",
    "Tea. Earl Grey. Hot.",
    "The line must be drawn here! This far, no farther!",
    "If we're going to be damned, let's be damned for what we really are.",
    "There can be no justice so long as laws are absolute. Even life itself is an exercise in exceptions.",
    "Things are only impossible until they're not!",
    "No being is so important that he can usurp the rights of another.",
    "It is possible to commit no mistakes and still lose. That is not a weakness; that is life.",
    "Being first at any cost is not always the point.",
    "Let's make sure history never forgets the name ... Enterprise.",
    "There are times, sir, when men of good conscience cannot blindly follow orders.",
    "Imprisonment is an injury, regardless of how you justify it.",
    "The road from legitimate suspicion to rampant paranoia is very much shorter than we think.",
];

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

const getPicardQuote = () => {
    const picardQuote = document.getElementById("picardQuote");
    const picardCredit = document.getElementById("picardCredit");
    const quote = Math.floor(Math.random() * picardQuotes.length);
    picardQuote.innerText = `"${picardQuotes[quote]}"`;
    picardCredit.innerText = "Jean-Luc Picard";
}

const getCopyright = (start) => {
    const current = new Date().getFullYear();
    const copyright = document.getElementById("copyright");

    if (start >= current) {
        copyright.innerText = start;
    } else {
        copyright.innerText = `${start} - ${current}`;
    }
}
