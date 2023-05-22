/** @format */

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.overflow = "scroll";
    document.querySelector("body").style.visibility = "visible";
  }
};

const newArrays = [
  {
    image: "mobileapp.png",
    text1: "Design",
    text2: "Branding",
    h1tag: "Mobile <br> development",
    industryText: "Programify",
    LocationText: "Segbeya BJ",
    url: "portfolio.html",
  },
  {
    image: "webui.jpeg",
    text1: "Development",
    text2: "Design",
    h1tag: "web <br> Tutorial",
    industryText: "GDSC_ESTAM",
    LocationText: "Segbeya BJ",
    url: "portfolio.html",
  },
  {
    image: "flyer.png",
    text1: "Advertisement",
    text2: "Coaching",
    h1tag: "Digital <br> Marketing",
    industryText: "Word press",
    LocationText: "Segbeya BJ",
    url: "portfolio.html",
  },
  {
    image: "advert.png",
    text1: "Advertisement",
    text2: "Branding",
    h1tag: "Advertisement",
    industryText: "607CODERS",
    LocationText: "Segbeya BJ",
    url: "portfolio.html",
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
                            <p>View Project <span><a href="${item.url}"><i class="fa-solid fa-arrow-right"></i></a></span></p>
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
    heading: "Such an amazing time working with chris.",
    comment:
      "I can't really expressed how glad I am working with christian..lol tho am a bit naive when working with him because he is a man of principle. Love you chris!",
    clientPic: "baby.jpeg",
    clientName: "Adeniyi Okunuga",
    clientProfile: "web developer @ 607-CODERS",
  },
  {
    heading: "I was really glad working with you.",
    comment:
      "Working with you and I saw how you do it, it really showed you knew what you do. Your works are so aethestic and good.",
    clientPic: "maria.jpg",
    clientName: "Maria Grace",
    clientProfile: "Developer @Devops",
  },
  {
    heading: "Sending gratitude to Chris",
    comment:
      "I never thought working with you would be fun but indeed it was and not only that, I was able to learn some things from you. Thanks a lot Chris.",
    clientPic: "john.jpg",
    clientName: "John",
    clientProfile: "Client",
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
          <p><q> ${client.comment} </q></p>
          <div class="client-profile">
            <div class="client-img">
            <img src="${client.clientPic}" alt="${client.clientName}">
            </div>
            <div class="client-name-org">
              <h3>${client.clientName}</h3>
              <span>${client.clientProfile}</span>
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
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("card-experience");
  let dots = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const showless = document.querySelector(".showless").children[0];
const showles = document.querySelector(".showless");
const heightone = document.querySelector(".speech-one");

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

// const navbar = document.querySelector("#navbar");
// const link = document.querySelectorAll(".nav-link");
// const sec = document.querySelectorAll(".section");
// console.log(navbar);

// function showcolor() {
//   let len = sec.length;
//   while (--len && window.scrollY + 127 < sec[len].offsetTop) {}
//   link.forEach((anchor) => anchor.classList.remove("inactives"));
//   link[len].classList.add("inactives");
// }
// showcolor();
// window.addEventListener("scroll", showcolor);

// const ulLinks = document.querySelector(".ul-link");

// window.onscroll = () => {
//   ulLinks.classList.toggle("toggle-display", scrollY  > 60);
// };

// if (screen.width <= 340) {
//   let slideIndexs = 1;
//   showSlider(slideIndexs);

//   // Next/previous controls
//   function plusSliding(n) {
//     showSlider((slideIndexs += n));
//   }

//   function showSlider(n) {
//     let i;
//     let sliders = document.getElementsByClassName(".box");
//     if (n > sliders.length) {
//       slideIndexs = 1;
//     }
//     if (n < 1) {
//       slideIndexs = sliders.length;
//     }
//     for (i = 0; i < sliders.length; i++) {
//       sliders[i].style.display = "none";
//     }
//     sliders[slideIndexs - 1].style.display = "block";
//   }
// }

const UserExp = [
  {
    Year: "May 2022 - Aug",
    IT: "IT Student",
    profession: "Junior software engineer",
    location: "Benin republic, Cotonou",
    icon: '<i class="fa-solid fa-briefcase"></i>',
  },
  {
    Year: "Sep 2022 - Present",
    IT: "GDSC lead",
    profession: "Community lead",
    location: "Benin republic, Cotonou",
    icon: '<i class="fa-solid fa-briefcase"></i>',
  },
];

const UserSchool = [
  {
    Year: "Sep 2014 - 2020",
    education: "High School",
    school: "Vineli Secondary sch",
    location: "Lagos state, Nigeria",
    icon: '<i class="fa-solid fa-graduation-cap"></i>',
  },
  {
    Year: "Jan 2021 - 2023",
    education: "College, BSc",
    school: "ESTAM University",
    location: "Benin republic, Cotonou",
    icon: '<i class="fa-solid fa-user-graduate"></i>',
  },
];

const school = document.querySelector(".school");
const exp = document.querySelector(".experience");

  const nesting = (schools) => {
    const nest = schools.map((items) => {
      return `<div class="box">
                <span>${items.icon}</span>
                <h2>${items.education}</h2>
                <p>${items.school}</p>
                <p>${items.location}</p>
                <p>${items.Year}</p>
            </div>`;
    })
      .join('');
    school.innerHTML = nest;
  };

  nesting(UserSchool);


  const nested = (experience) => {
    const nest = experience
      .map((items) => {
        return `<div class="box">
                <span>${items.icon}</span>
                <h2>${items.IT}</h2>
                <p>${items.profession}</p>
                <p>${items.location}</p>
                <p>${items.Year}</p>
            </div>`;
      })
      .join("");
    exp.innerHTML = nest;
  };

  nested(UserExp);
