let navbar = document.querySelector(".navbar");
let aboutElement = document.querySelector(".about-ele");
let homeElement = document.querySelector(".active");
let serviceElement = document.querySelector(".serv-link");
let projectElement = document.querySelector(".pro-link");
let techElement = document.querySelector(".tech-link");
let contactElement = document.querySelector(".contact-link");


window.addEventListener("scroll", function () {
  console.log(window.scrollY);

  if (window.scrollY > 80) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});
window.addEventListener("scroll", function () {
    
  
    if (window.scrollY > 400 && window.scrollY < 1362 ) {
        aboutElement.classList.add("nav_fixed");
    } else {
        aboutElement.classList.remove("nav_fixed");
    }
  });
  window.addEventListener("scroll", function () {
    
  
    if (window.scrollY >= 0 && window.scrollY < 400 ) {
        homeElement.classList.add("nav_fixed");
    } else {
        homeElement.classList.remove("nav_fixed");
    }
  });
  window.addEventListener("scroll", function () {
    
  
    if (window.scrollY > 1363 && window.scrollY < 2386 ) {
        serviceElement.classList.add("nav_fixed");
    } else {
        serviceElement.classList.remove("nav_fixed");
    }
  });
  window.addEventListener("scroll", function () {
    
  
    if (window.scrollY > 2387 && window.scrollY < 3339) {
        projectElement.classList.add("nav_fixed");
    } else {
        projectElement.classList.remove("nav_fixed");
    }
  });
  window.addEventListener("scroll", function () {
    
  
    if (window.scrollY > 3340 && window.scrollY < 4098) {
        techElement.classList.add("nav_fixed");
    } else {
        techElement.classList.remove("nav_fixed");
    }
  });
  window.addEventListener("scroll", function () {
    
  
    if (window.scrollY > 4099 && window.scrollY < 5000) {
        contactElement.classList.add("nav_fixed");
    } else {
        contactElement.classList.remove("nav_fixed");
    }
  });

 

if (aboutElement) {
  aboutElement.addEventListener("click", function () {

    window.scrollTo({
      top:702,
      behavior: "smooth",
    });
    
  });
} else {
  console.error("Element not found");
}
 
if (serviceElement) {
  serviceElement.addEventListener("click", function () {
    window.scrollTo({
      top: 1792,
      behavior: "smooth",
    });
  });
} else {
  console.error("Element not found");
}
 
if (projectElement) {
  projectElement.addEventListener("click", function () {
    window.scrollTo({
      top: 2487,
      behavior: "smooth",
    });
  });
} else {
  console.error("Element not found");
}
if (techElement) {
  techElement.addEventListener("click", function () {
    window.scrollTo({
      top: 3532,
      behavior: "smooth",
    });
  });
} else {
  console.error("Element not found");
}
if (contactElement) {
  contactElement.addEventListener("click", function () {
    window.scrollTo({
      top: 4460,
      behavior: "smooth",
    });
  });
} else {
  console.error("Element not found");
}
