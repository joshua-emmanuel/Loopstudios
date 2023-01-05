const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const mobileLogo = document.querySelector(".mobile-nav-logo");
const logo = document.querySelector(".logo");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    navToggle.setAttribute("aria-expanded", true);
    primaryNav.setAttribute("data-visible", true);
    mobileLogo.setAttribute("aria-hidden", false);
    logo.setAttribute("aria-hidden", false);
  } else if (visibility === "true") {
    navToggle.setAttribute("aria-expanded", false);
    primaryNav.setAttribute("data-visible", false);
    mobileLogo.setAttribute("aria-hidden", true);
    logo.setAttribute("aria-hidden", true);
  }
});