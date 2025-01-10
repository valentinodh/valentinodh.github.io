window.addEventListener("keydown", (e) => {
    const forbiddenKeys = ["s", "c", "e", "i", "k", "u"];
    if (e.ctrlKey && forbiddenKeys.includes(e.key.toLowerCase())) {
        e.preventDefault();
    }
});

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});
