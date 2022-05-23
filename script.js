"use strict";

/* Elements */

// Header Elements
const header = document.querySelector(".header");
const logo = document.querySelector(".logo");
const mainNav = document.querySelector(".mainNav");
const mainNavList = document.querySelector(".mainNavList");
const mainNavLink = document.querySelector(".mainNavLink");
const btnMobileNav = document.querySelector(".btnMobileNav");
const iconMobileNav = document.querySelector(".iconMobileNav");

// Hero Section Elements
const heroSection = document.querySelector(".heroSection");
const heroWrapper = document.querySelector(".heroWrapper");
const primaryContainer = document.querySelector(".primaryContainer");
const primaryHeading = document.querySelector(".primaryHeading");
const heroDescription = document.querySelector(".heroDescription");
const missionContainer = document.querySelector(".missionContainer");
const missionHeading = document.querySelector(".missionHeading");

// Responsabilites Section Elements
const responsabilitiesSection = document.querySelector(
  ".responsabilitiesSection"
);
const responsabilitiesHeading = document.querySelector(
  ".responsabilitiesHeading"
);
const responsabilitiesList = document.querySelector(".responsabilitiesList");

// Required Section Elements
const requiredSection = document.querySelector(".requiredSection");
const requiredHeading = document.querySelector(".requiredHeading");
const blueContainer = document.querySelector(".blueContainer");
const requiredList = document.querySelector(".requiredList");
const competenciesSection = document.querySelector(".competenciesSection");
const competenciesHeading = document.querySelector(".competenciesHeading");
const yellowContainer = document.querySelector(".yellowContainer");
const competenciesList = document.querySelector(".competenciesList");

// Bonus Section
const bonusSection = document.querySelector(".bonusSection");
const bonusHeading = document.querySelector(".bonusHeading");
const bonusList = document.querySelector(".bonusList");

// Join Us Section
const gotJoinSection = document.querySelector(".gotJoinSection");
const gotJoinContainer = document.querySelector(".gotJoinContainer");
const gotLink = document.querySelector(".gotLink");

// About Us Section
const aboutUs = document.querySelector(".aboutUs");
const aboutUsHeading = document.querySelector(".aboutUsHeading");
const aboutUsbox = document.querySelector(".aboutUsBox");
const aboutUsText = document.querySelector(".aboutUsText");
const aboutUsLink = document.querySelector(".aboutUsLink");

// Ending Section
const endingSection = document.querySelector(".endingSection");
const sendCv = document.querySelector(".sendCv");

// Footer
const footer = document.querySelector(".footer");
const footerText = document.querySelector(".footerText");

/* STICKY header */
const observer = new IntersectionObserver(
  function (entry) {
    const ent = entry[0];
    const stickyHandler = document.body.classList;
    console.log(ent);
    !ent.isIntersecting
      ? stickyHandler.add("sticky")
      : stickyHandler.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-85px",
  }
);

observer.observe(heroSection);

/* MOBILE NAVIGATION ICONS */
//  header, btnMobileNav

btnMobileNav.addEventListener("click", function () {
  header.classList.toggle("navOpen");
});

/* SMOOTH SCROLLER */
const everyLink = document.querySelectorAll("a:link");
everyLink.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    // console.log(href);
    // Scroll TOP (just in case of empty anchor)
    if (href === "#") {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      // scroll to sections
    } else if (href !== "#" && href.startsWith("#")) {
      event.preventDefault();
      const sectionElm = document.querySelector(href);
      sectionElm.scrollIntoView({ behavior: "smooth" });
    } else if (href !== "#" && href.startsWith("https")) {
      event.cancelable;
    }

    // auto close nav after mobile nav link click
    if (link.classList.contains("mainNavLink")) {
      header.classList.toggle("navOpen");
    }
  });
});

// click 'link' -> first one dissapears -> second one appears
const gotJoinFunc = function myFunction() {
  var x = document.getElementById("switchGot");
  var y = document.getElementById("switchJoin");

  x.style.display = "none";
  y.style.display = "flex";
  y.style.alignItems = "center";
  y.style.justifyContent = "center";
};
