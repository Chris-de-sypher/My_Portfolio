/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getDatabase,
  ref,
  update,
  set,
  get,
  remove,
  child,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKtI6W52pYAARlR2VPGtE5ztDJVWZrOjc",
  authDomain: "portfolio-db-ee569.firebaseapp.com",
  projectId: "portfolio-db-ee569",
  storageBucket: "portfolio-db-ee569.appspot.com",
  messagingSenderId: "187050819334",
  appId: "1:187050819334:web:2df47a1b81ac4578cb2887",
  measurementId: "G-SFEDQMDXYL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

// Dom
const $Name = document.getElementById("name");
const $Email = document.getElementById("email");
const $desc = document.getElementById("descriptions");
const $Options = document.getElementById("price");

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    $Name.value == "" ||
    $Email.value == "" ||
    $desc.value == "" ||
    $Options.options[$Options.selectedIndex].text == ""
  ) {
    return false;
  } else {
    return setData();
  }
});

const setData = () => {
  set(ref(database, "/feedBack/" + $Name.value), {
    name: $Name.value,
    email: $Email.value,
    message: $desc.value,
    priceTag: $Options.options[$Options.selectedIndex].text,
  })
    .then(() => alert("successful"))
    .then(() => $Name.value == "")
    .catch((err) => console.log(err));
};

const link = document.querySelectorAll(".nav-link");
const $a1 = document.querySelector(".a1");
const $a2 = document.querySelector(".a2");
const $a3 = document.querySelector(".a3");
const $a4 = document.querySelector(".a4");
let $a1S = "";
let $a2S = "";
let $a3S = "";
let $a4S = "";
const reffordb = ref(database);

function resizeLinks() {
  $a1S = $a1.innerHTML.substr(0, 34).trim().toString();
  $a2S = $a2.innerHTML.substr(0, 34).trim().toString();
  $a3S = $a3.innerHTML.substr(0, 33).trim().toString();
  $a4S = $a4.innerHTML.substr(0, 37).trim().toString();
  set(ref(database, "storeLink/"), {
    Link1: $a1S,
    Link2: $a2S,
    Link3: $a3S,
    Link4: $a4S,
  })
    .then(() => console.log("successful"))
    .catch((err) => console.log(err));

  if (screen.width < 750) {
    console.log("width is lesser than 750");

    get(child(reffordb, "storeLink/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          $a1.innerHTML = snapshot.val().Link1;
          $a2.innerHTML = snapshot.val().Link2;
          $a3.innerHTML = snapshot.val().Link3;
          $a4.innerHTML = snapshot.val().Link4;
        } else {
          console.log("Links not found in the database");
        }
      })
      .catch((error) => console.log("Please try again" + error));
  }
}

resizeLinks();

function progressbar() {
  const elem = document.querySelector(".english");
  const percent = document.querySelector(".percent1");
  let width = 20;
  let id = setInterval(frame, 10);
  function frame() {
    if (width >= 95) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      percent.innerHTML = width * 1 + "%";
    }
  }
}
function progressbartwo() {
  const elem = document.querySelector(".french");
  const percent = document.querySelector(".percent2");
  let width = 20;
  let id = setInterval(frame, 10);
  function frame() {
    if (width >= 40) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      percent.innerHTML = width * 1 + "%";
    }
  }
}
function progressbarthree() {
  const elem = document.querySelector(".spanish");
  const percent = document.querySelector(".percent3");
  let width = 20;
  let id = setInterval(frame, 10);
  function frame() {
    if (width >= 30) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      percent.innerHTML = width * 1 + "%";
    }
  }
}
function progressbarfour() {
  const elem = document.querySelector(".com");
  const percent = document.querySelector(".percent4");
  let width = 20;
  let id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      percent.innerHTML = width * 1 + "%";
    }
  }
}

window.onload = () => {
  progressbar();
  progressbartwo();
  progressbarthree();
  progressbarfour();
};

const displayText = () => {
  const school = document.querySelector("#school");
  const experience = document.querySelector("#experience");
  const center_exp = document.querySelector(".center-exp");
  const center_sch = document.querySelector(".center-sch");

  school.onclick = () => {
    if (center_sch.classList.contains("hidden")) {
      center_sch.classList.remove("hidden");
      if (!center_exp.classList.contains("hidden")) {
        center_exp.classList.add("hidden");
      }
      if (experience.classList.contains("active-bg")) {
        experience.classList.remove("active-bg");
        school.classList.add("active-bg");
      }
    }
  };

  experience.onclick = () => {
    if (center_exp.classList.contains("hidden")) {
      center_exp.classList.remove("hidden");
      if (!center_sch.classList.contains("hidden")) {
        center_sch.classList.add("hidden");
      }
      if (school.classList.contains("active-bg")) {
        school.classList.remove("active-bg");
        experience.classList.add("active-bg");
      }
    }
  };

};
displayText();

const html_btn = document.getElementById("html-btn");
const css_btn = document.getElementById("css-btn");
const js_btn = document.getElementById("js-btn");

function codingEditors() {
  const file_display = document.querySelector(".file-display");

  css_btn.onclick = () => {
    const css = document.getElementById("css");
    const divTwo = document.querySelector("#two");
    css.classList.toggle("hidden");
    divTwo.classList.toggle("hidden");
  };

  js_btn.onclick = () => {
    const js = document.getElementById("js");
    const divThree = document.querySelector("#three");
    js.classList.toggle("hidden");
    divThree.classList.toggle("hidden");
  };

  html_btn.onclick = () => {
    const html = document.getElementById("html");
    const divOne = document.querySelector("#ones");
    html.classList.toggle("hidden");
    divOne.classList.toggle("hidden");
  };
}
codingEditors();

async function removesfile() {
  const file_display = document.querySelector(".file-display");
  const css = document.getElementById("css");
  const html = document.getElementById("html");
  const js = document.getElementById("js");

  const divOne = document.querySelector("#ones");
  const divTwo = document.querySelector("#two");
  const divThree = document.querySelector("#three");
  console.log(divOne);

  divOne.onclick = (e) => {
    const xmark = (e.target.id = "removeOne");
    if (xmark) {
      divOne.classList.add("hidden");
      html.classList.add("hidden");
      codingEditors();
    } else {
      alert("failed to execute script");
    }
  };

  divTwo.onclick = async (e) => {
    const xmark = (e.target.id = "removeOne");
    if (xmark) {
      divTwo.classList.add("hidden");
      css.classList.add("hidden");
      codingEditors();
    } else {
      alert("failed to execute script");
    }
  };

  divThree.onclick = (e) => {
    const xmark = (e.target.id = "removeOne");
    if (xmark) {
      divThree.classList.add("hidden");
      js.classList.add("hidden");
      codingEditors();
    } else {
      alert("failed to execute script");
    }
  };
}

removesfile();

// checking if it's on focus
function checkFocus() {
  const css = document.getElementById("css");
  const html = document.getElementById("html");
  const js = document.getElementById("js");

  // file remover
  const divOne = document.querySelector("#ones");
  const childOne = divOne.querySelector("span");
  const divTwo = document.querySelector("#two");
  const childTwo = divTwo.querySelector("span");
  const divThree = document.querySelector("#three");
  const childThree = divThree.querySelector("span");

  html.onfocus = () => {
    html_btn.classList.add("active-bg");
    childOne.classList.add("focus");
  };
  html.onblur = () => {
    html_btn.classList.remove("active-bg");
    childOne.classList.remove("focus");
  };

  css.onfocus = () => {
    css_btn.classList.add("active-bg");
    childTwo.classList.add("focus");
  };
  css.onblur = () => {
    css_btn.classList.remove("active-bg");
    childTwo.classList.remove("focus");
  };

  js.onfocus = () => {
    js_btn.classList.add("active-bg");
    childThree.classList.add("focus");
  };
  js.onblur = () => {
    js_btn.classList.remove("active-bg");
    childThree.classList.remove("focus");
  };
}
checkFocus();
