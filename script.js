const dropDown = document.getElementById("drop-down-container");
const icon = document.getElementById("drop-down-icon");
const dropdownList = document.getElementById("drop-down-list");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is fully loaded");
});

isOpen = false;

dropDown.addEventListener("click", dropDownMenu);

// const tl = gsap.timeline();
// tl.from(dropdownList, { y: -50 });

function openDropDown() {
  icon.classList.toggle("rotate-icon");
  dropdownList.removeAttribute("hidden");
  isOpen = true;
}

function closeDropDown() {
  icon.classList.toggle("rotate-icon-back");
  dropdownList.setAttribute("hidden", "true");
  isOpen = false;
}

function dropDownMenu() {
  if (!isOpen) {
    openDropDown();
  } else {
    closeDropDown();
  }
}
