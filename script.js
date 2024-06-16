//NAVIGATION
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

//IMAGES
//array with image source
const images = [
  "https://assets.qrates.com/packs/media/section_vinyl_studio/sample_female-a4d2352d.png",
  "https://assets.qrates.com/packs/media/section_vinyl_studio/sample_all_india-36327a32.png",
  "https://assets.qrates.com/packs/media/section_vinyl_studio/sample_black_country_disco-233bbc85.png",
  "https://assets.qrates.com/packs/media/section_vinyl_studio/sample_bombay-668a0fa8.png",
  "https://assets.qrates.com/packs/media/section_vinyl_studio/sample_blarney-469831b2.png",
];
//index for the active image
let activeImage = 0;

function changeImage() {
  //increase index by 1 and set back when end of array is reached
  activeImage = (activeImage + 1) % images.length;
  document.getElementById("changeImage").src = images[activeImage];
}
//change image all three seconds
setInterval(changeImage, 3000);

function hideImage() {
  const imageLeft = document.getElementById("img-left");
  const imageRight = document.getElementById("img-right");

  imageLeft.src = "./assets/img/black.PNG";
  imageRight.src =
    "https://assets.qrates.com/packs/media/sticker/dollar_white-94a2da47.png";

  //show image all three seconds
  setTimeout(() => {
    imageLeft.src =
      "https://assets.qrates.com/packs/media/sticker/sparkle_white-15aaeb14.png";
    imageRight.src = "./assets/img/black.PNG";
  }, 3000);
}
//hides image all six seconds for three seconds
setInterval(hideImage, 6000);
