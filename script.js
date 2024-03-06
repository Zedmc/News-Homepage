//
//
//
//

document.getElementById("page__nav-hamburger").addEventListener("click", () => {
  document.getElementById("page__nav-menu").classList.add("active");
  document.getElementById("overlay").classList.remove("hidden");
});

document.getElementById("page__nav-close").addEventListener("click", () => {
  document.getElementById("page__nav-menu").classList.remove("active");
  document.getElementById("overlay").classList.add("hidden");
});

document.querySelectorAll(".page__nav-link").forEach((navLink) => {
  navLink.addEventListener("click", () => {
    document.getElementById("page__nav-menu").classList.remove("active");
    document.getElementById("overlay").classList.add("hidden");
  });
});


// // Figure out how to close menu when clicking on body

// if (
//   document.getElementById("page__nav-hamburger").classList.contains("active")
// ) {
//   document.body.addEventListener("click", () => {
//     document.getElementById("page__nav-menu").classList.remove("active");
//     document.getElementById("overlay").classList.add("hidden");
//   });
// }
