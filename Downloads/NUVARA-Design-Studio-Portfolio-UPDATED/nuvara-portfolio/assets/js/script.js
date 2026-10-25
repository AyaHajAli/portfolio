const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
}
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav && nav.classList.remove("open"));
});
function submitForm(event){
  event.preventDefault();
  const msg = document.getElementById("form-message");
  if(msg){ msg.textContent = "Thank you — your message is ready to be connected to your email service."; }
  return false;
}
const homeToggle = document.querySelector(".home-menu-toggle");
const homeNav = document.querySelector(".home-nav");
if (homeToggle && homeNav) {
  homeToggle.addEventListener("click", () => {
    const isOpen = homeNav.classList.toggle("open");
    homeToggle.setAttribute("aria-expanded", String(isOpen));
  });
  homeNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      homeNav.classList.remove("open");
      homeToggle.setAttribute("aria-expanded", "false");
    });
  });
  
}
