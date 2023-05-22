/** @format */

// ScrollReveal().reveal("");

ScrollReveal({ distance: "15px", duration: 2700, reset: false }).reveal(
  ".test",
  { delay: 350, origin: "bottom" }
);
ScrollReveal({ distance: "45px", duration: 2700, reset: false }).reveal(
  ".heading-nav",
  { delay: 250, origin: "top" }
);
ScrollReveal({ distance: "45px", duration: 2700, reset: false }).reveal(
  ".article-writeUp",
  { delay: 200, origin: "bottom" }
);
ScrollReveal({ distance: "45px", duration: 2700, reset: false }).reveal(
  ".services-rendered",
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
ScrollReveal({ distance: "60px", duration: 2700, reset: false }).reveal(
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
ScrollReveal({ distance: "45px", reset: false }).reveal(".fetching", {
  delay: 150,
  origin: "left",
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

  const wrapper_page = document.querySelector(".wrapper-page");

  setInterval(() => {
    const js = document.querySelector("#js");
    const html = document.querySelector("#html");
    const css = document.querySelector("#css");

    if (html.style.display == "block") {
      const html_btn = (document.querySelector("#ones").style.display =
        "block");
      const css_btn = (document.querySelector("#two").style.display = "none");
      const js_btn = (document.querySelector("#three").style.display = "none");
    }
    if (css.style.display == "block") {
      const html_btn = (document.querySelector("#ones").style.display = "none");
      const css_btn = (document.querySelector("#two").style.display = "block");
      const js_btn = (document.querySelector("#three").style.display = "none");
    }
    if (js.style.display == "block") {
      const html_btn = (document.querySelector("#ones").style.display = "none");
      const css_btn = (document.querySelector("#two").style.display = "none");
      const js_btn = (document.querySelector("#three").style.display = "block");
    }
  }, 100);
}

// // (function () {
// //   try{
// // if (screen.width <= 380) {Onetime }
// //     var slideIndex = 0;
// //     showSlides(slideIndex);
// //     let slideInterval;

// //     const leftangle = document.querySelector(".leftangle");
// //     leftangle.addEventListener("click", prev);
// //     function prev() {
// //       showSlides((slideIndex -= 1));
// //     }
// //     const rightangle = document.querySelector(".rightangle");
// //     rightangle.addEventListener("click", next);
// //     function next() {
// //       showSlides((slideIndex += 1));
// //     }

// //     function startSlideShow() {
// //       slideInterval = setInterval(function () {
// //         next();
// //         prev();
// //       }, 2000); // Adjust the interval (in milliseconds) as desired
// //     }

// //     function showSlides(n) {
// //       var slides = document.getElementsByClassName("box");

// //       if (n >= slides.length) {
// //         slideIndex = 0;
// //       } else if (n < 0) {
// //         slideIndex = slides.length - 1;
// //       }

// //       for (var i = 0; i < slides.length; i++) {
// //         slides[i].style.display = "none";
// //       }

// //       slides[slideIndex].style.display = "flex";
// //     }

// //     document.addEventListener("DOMContentLoaded", function () {
// //       startSlideShow();
// //       showSlides(slideIndex);
// //     });
// //   }
// //   }
// //   catch (err) {
// //     console.log(err)
// //   }
// // }());

// // function Onetime() {
//   var slideIndex = 0;
//   let slideInterval;
//   showSlides(slideIndex);

//   const leftangle = document.querySelector(".leftangle");
//   leftangle.addEventListener("click", prev);
//   function prev() {
//     showSlides((slideIndex -= 1));
//   }
//   const rightangle = document.querySelector(".rightangle");
//   rightangle.addEventListener("click", next);
//   function next() {
//     showSlides((slideIndex += 1));
//   }

//   function startSlideShow() {
//     slideInterval = setInterval(function () {
//       next();
//       prev();
//     }, 2000); // Adjust the interval (in milliseconds) as desired
//   }

//   function showSlides(n) {
//     var slides = document.getElementsByClassName("box");

//     if (n >= slides.length) {
//       slideIndex = 0;
//     } else if (n < 0) {
//       slideIndex = slides.length - 1;
//     }

//     for (var i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }

//     slides[slideIndex].style.display = "flex";
//   }

//   document.addEventListener("DOMContentLoaded", function () {
//     startSlideShow();
//     showSlides(slideIndex);
//   });
// // }
