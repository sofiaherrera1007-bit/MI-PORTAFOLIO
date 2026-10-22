const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelector("#navLinks");
menuButton?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  menuButton.textContent = open ? "×" : "☰";
});
navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  if (menuButton) { menuButton.textContent = "☰"; menuButton.setAttribute("aria-label", "Abrir menú"); }
}));
