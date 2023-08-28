const toggleButton = document.getElementById("mode-toggle");
const root = document.documentElement;

toggleButton.addEventListener("click", () => {
  if (root.classList.contains("dark-mode")) {
    root.classList.remove("dark-mode");
    toggleButton.textContent = "🌙";
    toggleButton.setAttribute("data-mode", "light");
  } else {
    root.classList.add("dark-mode");
    toggleButton.textContent = "☀️";
    toggleButton.setAttribute("data-mode", "dark");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  root.classList.add("dark-mode");
});