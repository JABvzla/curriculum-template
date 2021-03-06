import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "typeface-roboto";

// Bool to verify if window.onload is called.
let windowLoaded = false;

// Bool to verify if the about image is loaded.
let aboutImageLoaded = false;

// Create an instance of the about image.
let aboutImage = new Image();

// Load the about image.
aboutImage.src = "images/profilepic.jpeg";

// Remove scrollbar while site is loading.
document.getElementsByTagName("body")[0].classList.add("not-scroll");
document.getElementsByTagName("html")[0].classList.add("not-scroll");

/*
 * The onload callback is triggered when about image is loaded.
 */
aboutImage.onload = () => {
  aboutImageLoaded = true;
  preloaderEnd();
};

/*
 * Set preloader end when site is loaded.
 * Min time to set is 2 second.
 */
window.onload = () => {
  windowLoaded = true;
  preloaderEnd();
};

/*
 * Hide preload when site is loaded.
 *
 * Home picture should be loaded.
 */
function preloaderEnd() {
  if(aboutImageLoaded && windowLoaded){
    document.getElementsByTagName("html")[0].classList.remove("not-scroll");
    document.getElementsByTagName("body")[0].classList.remove("not-scroll");
    document.getElementById("preloader").classList.add("fadeOut");
    setTimeout( () => {
      document.getElementById("preloader").style.display = "none";
    }, 1000);
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
