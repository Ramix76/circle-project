
// Snippet para aplicar el modo oscuro rápido antes de que el DOM cargue completamente
(function() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
  }
})();

// Esperar a que el DOM esté cargado para inicializar botones y listeners
document.addEventListener("DOMContentLoaded", () => {
  // Sincronizar estado inicial con localStorage
  const isDark = localStorage.getItem("theme") === "dark";
  if (isDark) document.body.classList.add("dark-mode");

  // Insertar botón dentro del menú hamburguesa si existe
  const navMenu = document.getElementById("nav-menu");
  if (navMenu) {
    const btn = document.createElement("button");
    btn.id = "dark-mode-button-mobile";
    btn.style.cursor = "pointer";
    btn.style.background = "transparent";
    btn.style.border = "none";
    btn.style.fontSize = "1.5rem";
    btn.textContent = isDark ? "☀️" : "🌙";
    navMenu.appendChild(btn);

    btn.addEventListener("click", () => {
      toggleDarkMode();
      // Cambiar icono también del botón móvil
      btn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
  }

  // Sincronizar icono del botón principal si existe
  const icon = document.getElementById("dark-mode-icon");
  if (icon) {
    icon.textContent = isDark ? "☀️" : "🌙";
  }

  // Añadir listener al botón principal si existe
  const darkModeBtn = document.getElementById("dark-mode-button");
  if (darkModeBtn) {
    darkModeBtn.addEventListener("click", () => {
      toggleDarkMode();
      // Cambiar icono del botón principal
      const icon = document.getElementById("dark-mode-icon");
      if (icon) icon.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";

      // También sincronizar el botón móvil si existe
      const mobileBtn = document.getElementById("dark-mode-button-mobile");
      if (mobileBtn) {
        mobileBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
      }
    });
  }
});

// Función para alternar el modo oscuro y guardar en localStorage
function toggleDarkMode() {
  const body = document.body;
  const isDark = body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

