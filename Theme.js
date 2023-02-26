const themeSelect = document.getElementById("theme-select");

themeSelect.addEventListener("change", function() {
  if (this.value === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});