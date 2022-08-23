// membuat back navbar tidak transparan saat sudah di scroll

window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active", window.scrollY > 0);
  });
  
  // script hamburger untuk mobile responsive
  const menuToggle = document.querySelector(".menu-toggle input");
  const ul = document.querySelector("nav ul");
  
  menuToggle.addEventListener("click", function () {
    ul.classList.toggle("slide");
  });
  
  // scroll up pop up
  let offset = 0;
  window.addEventListener("scroll", function () {
    let st = window.pageYOffset;
    if (st > offset) {
      document.querySelector(".fa-arrow-up").classList.add("active");
    } else {
      document.querySelector(".fa-arrow-up").classList.remove("active");
    }
  });