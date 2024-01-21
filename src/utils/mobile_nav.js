const mobileNav = () => {
  const headerBtn = document.querySelector(".header_bar-box");
  const mobileNav = document.querySelector(".mobile_nav");
  const mobileLinks = document.querySelectorAll(".mobile_nav-link");

  //state
  let isMobileNavOpen = false;
  console.log(isMobileNavOpen);

  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
    console.log(isMobileNavOpen);
  });
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNavOpen = false;
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });
};

export default mobileNav;
