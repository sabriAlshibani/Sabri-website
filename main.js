/* icon.onclick = function () {
    document.body.classList.toggle("dark-them")
    if (document.body.classList.contains("dark-them")) {
        icon.className = "bx bx-sun"
    } else {
        icon.className = "bx bx-moon"
    }
} */
var links = document.getElementById("links");
var menu = document.getElementById("menu");
menu.onclick = function () {
    links.classList.toggle("links-appear")
    if (links.classList.contains("links-appear")) {
        menu.className = "bx bx-up-arrow-alt menu";
    } else {
        menu.className = "bx bx-down-arrow-alt menu";
    }
}

function loading() {
    let save = localStorage.getItem('color-mode') || 'dark-mode';
    document.body.className = save;
}
function change() {
    var icon = document.getElementById("icon");
    document.body.classList.toggle('dark-them');
    document.body.classList.toggle('light-them');
    let style = document.body.classList.contains('light-them') ? 'light-them' : 'dark-them';
    localStorage.setItem('color-mode', style);
    if (document.body.classList.contains("dark-them")) {
        icon.className = "bx bx-sun"
    } else {
        icon.className = "bx bx-moon"
    }
}