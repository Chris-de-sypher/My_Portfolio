/** @format */

// ScrollReveal().reveal("");

ScrollReveal({ distance: "15px", duration: 2700, reset: false }).reveal(
  ".test",
  { delay: 350, origin: "bottom" }
);
// ScrollReveal({ distance: "45px", duration: 2700, reset: false }).reveal(
//   ".footer-grid",
//   { delay: 250, origin: "right" }
// );
ScrollReveal({ distance: "45px", duration: 2700, reset: false }).reveal(
  ".article-writeUp",
  { delay: 200, origin: "bottom" }
);
ScrollReveal({ distance: "45px", duration: 2700, reset: false }).reveal(
  ".coding-editor-page",
  { delay: 350, origin: "bottom" }
);
ScrollReveal({ distance: "45px", duration: 2700, reset: false }).reveal(
  ".another-section",
  { delay: 350, origin: "bottom" }
);
ScrollReveal({ distance: "45px", duration: 2700, reset: false }).reveal(
  ".services-rendered",
  { delay: 350, origin: "bottom" }
);
ScrollReveal({ distance: "45px", duration: 2700, reset: false }).reveal(
  ".text-pics",
  { delay: 350, origin: "left" }
);

ScrollReveal({ reset: false }).reveal(".categories", {
  delay: 250,
  origin: "bottom",
});
ScrollReveal({ reset: false, distance: "20px", duration: 1000 }).reveal(
  ".programming-laguage",
  {
    delay: 290,
    origin: "left",
  }
);


ScrollReveal().reveal(".section-cover", {
  delay: 300,
  origin: "bottom",
});
ScrollReveal().reveal(".text", { delay: 200, origin: "right" });
ScrollReveal({ reset: false }).reveal(".fetching", {
  delay: 100,
  origin: "bottom",
});




  if (screen.width < 700) {
    document.querySelector(".pagnations").style.display = "block";
    // slideshow for skills
    let slideIndexs = 1;
    showSlider(slideIndexs);  

    // Next/previous controls
    function plusSliding(n) {
      showSlider((slideIndexs += n));
    }

    function showSlider(n) {
      let i;
      let sliders = document.getElementsByClassName("codes");
      if (n > sliders.length) {
        slideIndexs = 1;
      }
      if (n < 1) {
        slideIndexs = sliders.length;
      }
      for (i = 0; i < sliders.length; i++) {
        sliders[i].style.display = "none";
      }
      sliders[slideIndexs - 1].style.display = "block";
    }
  }
