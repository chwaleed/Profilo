// script.js
let openMenu = false;

function setmenuopen(status) {
  openMenu = status;
  const mobileView = document.querySelector(".mobileview");
  const menuBtn = document.querySelector(".menuBtn");

  if (openMenu) {
    mobileView.classList.add("mobileviewOn");
    menuBtn.src = "./Images/Close.webp";
  } else {
    mobileView.classList.remove("mobileviewOn");
    menuBtn.src = "./Images/Menu.png";
  }
}

// Close the menu when clicking outside of it
document.addEventListener("click", function (event) {
  const mobileView = document.querySelector(".mobileview");
  const menuBtn = document.querySelector(".menuBtn");

  if (!mobileView.contains(event.target) && !menuBtn.contains(event.target)) {
    setmenuopen(false);
  }
});
