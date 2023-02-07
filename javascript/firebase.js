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
