let hiddenSidebar = document.getElementById('hidden-items')
 hiddenSidebar.style.display = "none";
function hideMenu(){
    let sidebar = document.getElementById('sidebar')
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
        hiddenSidebar.style.display = "none";
      } else {
        sidebar.style.display = "none";
        hiddenSidebar.style.display = "block";
      }
}

let currentScrollPosition = 0;
let scrollAmount = 320;

const sCont = document.querySelector(".categories-container");
const hScroll = document.querySelector(".nav-scroll");
const btnScrollLeft = document.querySelector("#btn-scroll-left");
const btnScrollRight = document.querySelector("#btn-scroll-right");

btnScrollLeft.style.opacity = "0";

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

function scrollHorizontally(val) {
  currentScrollPosition += (val * scrollAmount);

  if(currentScrollPosition >= 0){
    currentScrollPosition = 0;
    btnScrollLeft.style.opacity = "0";
  }else{
    btnScrollLeft.style.opacity = "1";

  }
  if(currentScrollPosition <= maxScroll){
    currentScrollPosition = maxScroll;
    btnScrollRight.style.opacity = "0";
  }else{
    btnScrollRight.style.opacity = "1";
  }

  sCont.style.left = currentScrollPosition + "px";
}