/*==================toggle style switcher================*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",() => {
  document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style switcherhon scroll
window.addEventListener("scroll", () => {
  if( document.querySelector(".style-switcher").classList.contains("open"))
  {
    document.querySelector(".style-switcher").classList.remove("open");
  }
})
 /*========================Them Color====================*/
 const alternateStyles = document.querySelectorAll(".alternate-style");
 function setActiveStyle(color)
 {
     alternateStyles.forEach((style) => {
    if(color === style.getAttribute("title"))
    {
        style.removeAttribute("disabled");
    }
    else
    {
       style.setAttribute("disable","true")
    }
  })
 }
 /*========================Them light and dark mood====================*/
 const dayNight = document.querySelector(".day-night");
  dayNight.addEventListener("click",() = {
       dayNight.querySelector("i").classList.toggle("fa fa-sun-o");
       dayNight.querySelector(i).classList.toggle("fa fa-moon-o");
       document.body.classList.toggle("dark");
 })
 window.addEventListener("load", () =>{
  if(document.body.classList.contains("dark"))
  {
    dayNight.querySelector("i").classList.add("fa fa-sun-o");
  }
  else{
    dayNight.querySelector(i).classList.add("fa fa-moon-o");
  }
 })