const getCopyrightYearSpan = (start) => {
    const copyright = document.getElementById("copyright");
    const current = new Date().getFullYear();

    if (start >= current) {
        copyright.innerHTML = start;
    } else {
        copyright.innerHTML = `${start} - ${current}`;
    }
}

const toggleTheme = () => {
    let theme = localStorage.getItem("theme");
    
    if (theme == null) {
        const isDark = document.body.classList.contains("dark");
        theme = isDark ? "light" : "dark";
    } else {
        theme = theme === "light" ? "dark" : "light";
    }

    localStorage.setItem("theme", theme);
    setTheme(theme);
}

const getTheme = () => {
    const theme = localStorage.getItem("theme");

    if (theme == null) {
        const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(preference ? "dark" : "light");
    } else {
        setTheme(theme);
    }
}

const setTheme = (theme) => {
    if (theme === "light") {
        document.body.classList.toggle("dark", false);
    } else {
        document.body.classList.toggle("dark", true);
    }
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    const theme = e.matches ? "dark" : "light";
    setTheme(theme);
});
