document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("header").forEach(header => {
    const toggler = header.querySelector(".navbar-toggler");
    const menu = header.querySelector(".navbar-collapse");

    if (toggler && menu) {
      toggler.addEventListener("click", function() {
        menu.classList.toggle("show");
      });
    }
  });
});
