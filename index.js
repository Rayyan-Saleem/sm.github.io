window.addEventListener('resize', function(){
    addRequiredClass();
})


function addRequiredClass() {
    if (window.innerWidth < 860) {
        document.body.classList.add('mobile')
    } else {
        document.body.classList.remove('mobile') 
    }
}

window.onload = addRequiredClass

let hamburger = document.querySelector('.hamburger')
let mobileNav = document.querySelector('.nav-list')

let bars = document.querySelectorAll('.hamburger span')

let isActive = false

hamburger.addEventListener('click', function() {
    mobileNav.classList.toggle('open')
    if(!isActive) {
        bars[0].style.transform = 'rotate(45deg)'
        bars[1].style.opacity = '0'
        bars[2].style.transform = 'rotate(-45deg)'
        isActive = true
    } else {
        bars[0].style.transform = 'rotate(0deg)'
        bars[1].style.opacity = '1'
        bars[2].style.transform = 'rotate(0deg)'
        isActive = false
    }
    
   

})


 // gallery item filter//
  
 const filterButtons = document.querySelector("#filter-btns").children;
 const items = document.querySelector(".portfolio-gallery").children;
   
 for (let i = 0; i < filterButtons.length; i++) {
     filterButtons[i].addEventListener("click", function () {
         for (let j = 0; j < filterButtons.length; j++) {
             filterButtons[j].classList.remove("active")
         }
         this.classList.add("active");
         const target = this.getAttribute("data-target")
   
         for (let k = 0; k < items.length; k++) {
             items[k].style.display = "none";
             if (target == items[k].getAttribute("data-id")) {
                 items[k].style.display = "block";
             }
             if (target == "all") {
                 items[k].style.display = "block";
             }
         }
   
     })
 }
 