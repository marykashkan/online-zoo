(function () {
  const burgerIcon = document.querySelector(".burger-menu");
  const menuItem = document.querySelector(".nav-a");
  const closeIcon = document.querySelector(".x-close");
  const overlayItem = document.querySelector(".overlay");
  const navItems = document.querySelectorAll(".nav__element");

  for (let navItem of navItems) {
    navItem.addEventListener("click", () => {
      if (overlayItem.classList.contains("active")) {
        overlayItem.classList.remove("active");
        menuItem.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  burgerIcon.addEventListener("click", () => {
    menuItem.classList.add("active");
    overlayItem.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeIcon.addEventListener("click", () => {
    menuItem.classList.remove("active");
    overlayItem.classList.remove("active");
    document.body.style.overflow = "";
  });

  overlayItem.addEventListener("click", () => {
    menuItem.classList.remove("active");
    overlayItem.classList.remove("active");
    document.body.style.overflow = "";
  });

  commentItem.addEventListener("click", () => {
    commentItem.classList.add("comment-active");
    overlayItem.classList.add("active");
    document.body.style.overflow = "hidden";
  });
})();
