window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 1) {
    navbar.classList.add("menu-scrolled");
  } else {
    navbar.classList.remove("menu-scrolled");
  }
});
