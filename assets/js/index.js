const getCopyrightYear = (start) => {
    const current = new Date().getFullYear();
    const copyright = document.getElementById("copyright");

    if (start >= current) {
        copyright.innerText = start;
    } else {
        copyright.innerText = `${start} - ${current}`;
    }
}
