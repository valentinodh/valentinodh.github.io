window.addEventListener("keydown", e => {
    e.ctrlKey && ("S" === e.key || "s" === e.key) && e.preventDefault(), e.ctrlKey && ("C" === e.key || "c" === e.key) && e.preventDefault(), e.ctrlKey && ("E" === e.key || "e" === e.key) && e.preventDefault(), e.ctrlKey && ("I" === e.key || "i" === e.key || "\xc3„\xc2\xb1" === e.key) && e.preventDefault(), e.ctrlKey && ("K" === e.key || "k" === e.key) && e.preventDefault(), e.ctrlKey && ("U" === e.key || "u" === e.key) && e.preventDefault()
}), document.addEventListener("contextmenu", function(e) {
    e.preventDefault()
});