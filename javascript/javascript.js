/** @format */

const newArrays = [
  {
    image: "/images/mobileapp.png",
    text1: "Design",
    text2: "Branding",
    h1tag: "Mobile <br> development",
    industryText: "Programify",
    LocationText: "Segbeya BJ",
    url: "./index.html",
  },
  {
    image: "/images/webui.jpeg",
    text1: "Development",
    text2: "Design",
    h1tag: "web <br> Tutorial",
    industryText: "GDSC_ESTAM",
    LocationText: "Segbeya BJ",
    url: "./index.html",
  },
  {
    image: "/images/flyer.png",
    text1: "Advertisement",
    text2: "Coaching",
    h1tag: "Digital <br> Marketing",
    industryText: "Word press",
    LocationText: "Segbeya BJ",
    url: "./index.html",
  },
  {
    image: "/images/advert.png",
    text1: "Advertisement",
    text2: "Branding",
    h1tag: "Advertisement",
    industryText: "607CODERS",
    LocationText: "Segbeya BJ",
    url: "./index.html",
  },
];

const innerNesting = document.querySelector(".separates");

const carryArray = (items) => {
  const newListed = items
    .map((item) => {
      return `<div class="e-card">
                    <div class="image">
                        <img src="${item.image}" alt="">
                        <div class="image-texts">
                        <span>${item.text1}</span> <span>${item.text2}</span>
                        </div>
                    </div>
                    <h1>${item.h1tag}</h1>
                    <div class="indus-developm">
                        <div class="grid">
                            <div class="dev">
                            <p>Deploment</p> 
                            <span>${item.LocationText}</span>
                            </div>
                            <div class="industry">
                            <p>Industry</p>
                            <span>${item.industryText}</span>
                            </div>
                        </div>
                        <div class="btns">
                            <p>View Project <span><a href="${item.url}"><i class="fa-solid fa-arrow-right"></i></span></a></p>
                        </div>
                    </div>
                </div>`;
    })
    .join("");
  innerNesting.innerHTML = newListed;
  console.log(innerNesting);
};

carryArray(newArrays);

var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

const ClientProfile = [
  {
    heading:
      "Such an amazing time working with christian, indeed I am impressed.",
    comment:
      "I can't really expressed how glab I am working with christian..lol tho am a bit naive when working with him because he is a man of principle. Love you chris!",
    clientPic: "/images/Futuristic-Google-Projects-To-Look-Out-For.jpg",
    clientName: "Maria Grace",
    clientProfile: "Maria Grace",
  },
  {
    heading:
      "Such anssss amazing time working with christian, indeed I am impressed.",
    comment:
      "I can't really expressed how glab I am working with christian..lol tho am a bit naive when working with him because he is a man of principle. Love you chris!",
    clientPic: "/images/Futuristic-Google-Projects-To-Look-Out-For.jpg",
    clientName: "Maria Grace",
    clientProfile: "Maria Grace",
  },
  {
    heading:
      "Such an amazing time working with christian, indeed I am impressed.",
    comment:
      "I can't really expressed how glab I am working with christian..lol tho am a bit naive when working with him because he is a man of principle. Love you chris!",
    clientPic: "/images/Futuristic-Google-Projects-To-Look-Out-For.jpg",
    clientName: "Maria Grace",
    clientProfile: "Maria Grace",
  },
  {
    heading:
      "Such an amazing time working with christian, indeed I am impressed.",
    comment:
      "I can't really expressed how glab I am working with christian..lol tho am a bit naive when working with him because he is a man of principle. Love you chris!",
    clientPic: "/images/Futuristic-Google-Projects-To-Look-Out-For.jpg",
    clientName: "Maria Grace",
    clientProfile: "Maria Grace",
  },
  {
    heading:
      "Such an amazing time working with christian, indeed I am impressed.",
    comment:
      "I can't really expressed how glab I am working with christian..lol tho am a bit naive when working with him because he is a man of principle. Love you chris!",
    clientPic: "/images/Futuristic-Google-Projects-To-Look-Out-For.jpg",
    clientName: "Maria Grace",
    clientProfile: "Maria Grace",
  },
];

const clientNesting = document.querySelector(".slider-width");

const executeProfileClient = (clients) => {
  const newClient = clients
    .map((client) => {
      return `<div class="cover-client">
        <div class="lines"></div>
        <div class="client-one">
            <div class="star-rating">
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
          </div>
          <h1>${client.heading}</h1>
          <p><q> I can't really expressed how glab I am working with christian..lol tho am a bit naive when working with him because he is a man of principle. Love you chris! </q></p>
          <div class="client-profile">
            <div class="client-img">
              <img src="/images/Futuristic-Google-Projects-To-Look-Out-For.jpg" alt="">
            </div>
            <div class="client-name-org">
              <h3>Maria Grace</h3>
              <span>web developer at 607-CODERS</span>
            </div>
          </div>
        </div>
</div>`;
    })
    .join(" ");
  clientNesting.innerHTML = newClient;
};

executeProfileClient(ClientProfile);



var count = 0;
var inc = 0;
margin = 0;
var slider = document.getElementsByClassName("slider-width")[0];
var itemDisplay = 0;
if (screen.width > 990) {
  itemDisplay = document
    .getElementsByClassName("slider-container")[0]
    .getAttribute("item-display-d");
  margin = itemDisplay * 9;
}
if (screen.width > 700 && screen.width < 990) {
  itemDisplay = document
    .getElementsByClassName("slider-container")[0]
    .getAttribute("item-display-t");
  margin = itemDisplay * 12;
}
if (screen.width >= 280 && screen.width < 700) {
  itemDisplay = document
    .getElementsByClassName("slider-container")[0]
    .getAttribute("item-display-m");
  margin = itemDisplay * 20;
}

var items = document.getElementsByClassName("cover-client");
var itemleft = items.length % itemDisplay;
var itemslide = Math.floor(items.length / itemDisplay) - 1;

for (let i = 0; i < items.length; i++) {
  items[i].style.width = screen.width / itemDisplay - margin + "px";
}

function next() {
  if (inc !== itemslide + itemleft) {
    if (inc == itemslide) {
      inc = inc + itemleft;
      count = count - (screen.width / itemDisplay) * itemleft;
    } else {
      inc++;
      count = count - screen.width;
    }
  }
  slider.style.left = count + "px";
}

function prev() {
  if (inc !== 0) {
    if (inc == itemleft) {
      inc = inc - itemleft;
      count = count + (screen.width / itemDisplay) * itemleft;
    } else {
      inc--;
      count = count + screen.width;
    }
  }
  console.log(inc);
  slider.style.left = count + "px";
}



/* using the dom selector to place the map items into the dom  */
const newListedProfile = document.querySelector(".item-for-grid");
/*  */
// const url = "https://codingshiksha.com/wp-json/wp/v2/posts";
/*  Using the fetch function to get your data from the ${url - variable} */
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => executeArrays(data));

/* Using the es6 fop method {map}. map is an es6 function which is use to return a new array from an existing array by using the arrayName.map(function(eachelement in the array)=>{return eachelement in the array})*/
// const executeArrays = (item) => {
//   const newinner = item
//     .map((itemed) => {
//       console.log(itemed)
//       return `<div class="card" style="width: 15rem;">
//   <img src="/images/Futuristic-Google-Projects-To-Look-Out-For.jpg" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${itemed.title.rendered}</h5>
//     <p class="card-text">${itemed.excerpt.rendered}</p>
//     <a href="${
//       itemed.link
//     }" class="btn btn-primary">View in page <span><i class="fa-solid fa-globe"></i></span></a> <span style="margin-top:5px;">${new Date(
//         itemed.date
//       ).getDate()}/${new Date(itemed.date).getHours()}/${new Date(
//         itemed.date
//       ).getFullYear()}</span>
//   </div>
// </div>`;
//     })
//     .join(" ");
//   newListedProfile.innerHTML = newinner;
// };





function compile() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;

  document.body.onkeyup = function () {
    code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    code.close();
  };
}

compile();

// slideshow for skills
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("card-experience");
  let dots = document.getElementsByClassName("dots");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


const showless = document.querySelector(".showless").children[0];
const showles = document.querySelector(".showless");
const heightone = document.querySelector(".speech-one")

showless.onclick = (e) => {
  e.preventDefault();
  heightone.classList.toggle("inject");
  showles.classList.toggle("bt-inject");
};


const $showless = document.querySelector(".showless1").children[0];
const $showles = document.querySelector(".showless1");
const $heightone = document.querySelector(".speech-two");

$showless.onclick = (e) => {
  e.preventDefault();
  $heightone.classList.toggle("inject");
  $showles.classList.toggle("bt-inject");
};


const navbar = document.querySelector("#navbar");
const link = document.querySelectorAll(".nav-link");
const sec = document.querySelectorAll(".section");
console.log(navbar);

function showcolor() {
  let len = sec.length;
  while (--len && window.scrollY + 127 < sec[len].offsetTop) {}
  link.forEach((anchor) => anchor.classList.remove("inactives"));
  link[len].classList.add("inactives");
}
showcolor();
window.addEventListener("scroll", showcolor);




