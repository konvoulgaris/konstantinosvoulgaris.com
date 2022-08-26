const getCopyrightYearSpan = (start) => {
    const copyright = document.getElementById("copyright");
    const current = new Date().getFullYear();

    if (start >= current) {
        copyright.innerHTML = start;
    } else {
        copyright.innerHTML = `${start} - ${current}`;
    }
}
