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

// newletter firebase submit
const newsletter = document.getElementById("newsletter");
const newstext = document.getElementById("newstext");
const newsemail = document.getElementById("newsemail");

newsletter.addEventListener("submit", function (e) {
  e.preventDefault();
  if (newstext.value == "" || newsemail.value == "") {
    return false;
  } else {
    return sendform();
  }
});

const sendform = () => {
  set(ref(database, "/newsletter/" + newstext.value), {
    name: newstext.value,
    email: newsemail.value,
  })
    .then(() => {
      newsletter.innerHTML = `<h1>Successful<h1>`;
    })
    .catch((err) => console.log(err));
};

// meeting
const meeting = document.querySelector(".meeting");
let meetClick = 0;

meeting.addEventListener("click", callmeeting);

function callmeeting() {
  meetClick++;
  console.log(meetClick);
  if (meetClick >= 1) {
    const meeting_link = document.querySelector("#meeting-link");
    meeting_link.style.visibility = "visible";
    meeting.style.display = "none";
    meeting_link.addEventListener("input", (e) => {
      e.preventDefault();
      document.querySelector("#sendLink").style.visibility = "visible";
    });
  }
}

// email
document.querySelector("#sendLink").addEventListener("click", sendEmail);
function sendEmail(e) {
  e.preventDefault();
  if (document.querySelector("#meeting-link").value == "") {
    return false;
  } else {
    return sendMeetingLink();
  }
}
const meetingLink = document.querySelector("#meeting-link");

const sendMeetingLink = () => {
  set(ref(database, "/meetingLink/" + meetingLink.value), {
    name: meetingLink.value,
  })
    .then(() => {
      document.querySelector("#sendLink").value = "Sent";
      document.querySelector("#sendLink").style.background = "green";
      document.querySelector("#sendLink").disabled = true;
      setTimeout(() => {
        meeting.style.display = "block";
        document.querySelector("#sendLink").style.display = "none";
        document.querySelector("#meeting-link").style.display = "none";
      }, 2000);
    })
    .catch((err) => console.log(err));
};
