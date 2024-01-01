document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.querySelector(".nav");

  menuBtn.addEventListener("click", function () {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });

  const navLinks = document.querySelectorAll(".ul a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      nav.style.display = "none";
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".header")) {
      nav.style.display = "none";
    }
  });
});
