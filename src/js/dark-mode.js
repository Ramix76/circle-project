
document.addEventListener("DOMContentLoaded", () => {
const isDark = localStorage.getItem("theme") === "dark";
const icon = document.getElementById("dark-mode-icon");

if (isDark) {
    document.body.classList.add("dark-mode");
    icon.textContent = "☀️";
} else {
    icon.textContent = "🌙";
}
});

function toggleDarkMode() {
const body = document.body;
const icon = document.getElementById("dark-mode-icon");
const isDark = body.classList.toggle("dark-mode");

icon.textContent = isDark ? "☀️" : "🌙";

localStorage.setItem("theme", isDark ? "dark" : "light");
}