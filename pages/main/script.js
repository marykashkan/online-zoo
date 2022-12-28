(function () {
  const burgerIcon = document.querySelector(".burger-menu");
  const menuItem = document.querySelector(".nav-a");
  const closeIcon = document.querySelector(".x-close");
  const overlayItem = document.querySelector(".overlay");
  const navItems = document.querySelectorAll(".nav__element");
  const commentItem = document.querySelector(".section-testimonials__item");
  const commentList = document.querySelector(".section-testimonials__list");
  const commentItems = document.querySelectorAll(".section-testimonials__item");
  const closeComments = document.querySelectorAll(".close-comment");
  const articleItems = document.querySelectorAll(
    ".section-testimonials__article"
  );
  const circleLeft = document.querySelector(".section-card__circle-left");
  const circleRight = document.querySelector(".section-card__circle-right");
  const sectionCardItems = document.querySelectorAll(
    ".section-card__animal-card"
  );
  const scrollItem = document.querySelector(".section-testimonials__scroll");
  const firstComment = document.querySelector(
    ".section-testimonials__list"
  ).firstElementChild;

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

  for (let i = 0; i < commentItems.length; i++) {
    commentItems[i].addEventListener("click", () => {
      commentItems[i].classList.add("item-active");
      overlayItem.classList.add("active");
      closeComments[i].classList.add("close-comment-active");
      articleItems[i].classList.add("article-active");
      document.body.style.overflow = "hidden";
    });

    overlayItem.addEventListener("click", () => {
      commentItems[i].classList.remove("item-active");
      overlayItem.classList.remove("active");
      closeComments[i].classList.remove("close-comment-active");
      articleItems[i].classList.remove("article-active");
    });
  }

  commentList.onclick = function (event) {
    let target = event.target;
    let arrayCloseCom = Array.from(
      document.querySelectorAll(".close-comment")
    ).map((el) => el.className);
    console.log(typeof arrayCloseCom[1]);
    let i = arrayCloseCom.indexOf("close-comment close-comment-active");
    if (target.className.includes("close-comment-active")) {
      overlayItem.classList.remove("active");
      commentItems[i].classList.remove("item-active");
      closeComments[i].classList.remove("close-comment-active");
      articleItems[i].classList.remove("article-active");
      document.body.style.overflow = "";
    }
  };

  const sectionCardArray = Array.from(sectionCardItems);
  console.log(sectionCardArray);

  circleLeft.addEventListener("click", moveCardL);
  circleRight.addEventListener("click", moveCardR);
  var n = 1;
  function moveCardL() {
    let first = sectionCardArray.shift();
    first.style.order = `${n}`;
    console.log(first.style.order);
    sectionCardArray.push(first);
    n++;
  }

  function moveCardR() {
    let first = sectionCardArray.shift();
    first.style.order = `${n}`;
    console.log(first.style.order);
    sectionCardArray.push(first);
    n++;
  }

  const commentMoving = [
    "0",
    "2110px",
    "1517px",
    "924px",
    "331px",
    "-262px",
    "-855px",
    "-1448px",
    "-2041px",
  ];

  if (window.innerWidth > 1000) { 
    scrollItem.addEventListener("click", moveComment);
  }

  function moveComment() {
    let v = +scrollItem.value;    
      for (i = 1; i < 9; i++) {
        if (v === i) {
          firstComment.style.marginLeft = `${commentMoving[i]}`;
        }
      }  
  }

  if ((window.innerWidth > 640) && (window.innerWidth <= 1000)) { 
    scrollItem.addEventListener("click", moveCommentSmall);
  }

  const commentMovingSmall = [
    "0",
    "0px",
    "-317px",
    "-634px",
    "-951px",
    "-1268px",
    "-1585px",
    "-1901px",
    "-2217px",
  ];

  function moveCommentSmall() {
    let v = +scrollItem.value;    
      for (i = 1; i < 9; i++) {
        if (v === i) {
          firstComment.style.marginLeft = `${commentMovingSmall[i]}`;
        }
      }  
  }

  
})();
