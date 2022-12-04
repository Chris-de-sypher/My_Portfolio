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
//   setTimeout(() => {
//     $Name.value == "",
//       $Email.value == "",
//       $desc.value == "",
//       $Options.options[$Options.selectedIndex].text == "";
//   }, 1000);
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
    .then(()=> $Name.value == "")
    .catch((err) => console.log(err));
};
