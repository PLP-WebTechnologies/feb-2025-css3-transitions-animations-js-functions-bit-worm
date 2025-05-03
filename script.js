// Load user theme preference
window.onload = () => {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  document.body.classList.toggle("dark", isDarkMode);
  document.getElementById("themeToggle").checked = isDarkMode;
};

// Save theme preference to localStorage
document.getElementById("themeToggle").addEventListener("change", (e) => {
  const isDark = e.target.checked;
  localStorage.setItem("darkMode", isDark);
  document.body.classList.toggle("dark", isDark);
});

// Animate image on button click
document.getElementById("animateBtn").addEventListener("click", () => {
  const img = document.getElementById("funImage");
  img.classList.add("zoomed");
  setTimeout(() => img.classList.remove("zoomed"), 500);
});
