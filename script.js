var facilitator;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value;
  } else {
    return number_value;
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random() * n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)];
}

facilitator = [];

document.getElementById("list_names").addEventListener("click", (event) => {
  let element_list = document.getElementById("list");
  let new_li = document.createElement("li");
  new_li.innerText = getNumberOrString(document.getElementById("input").value);
  facilitator.push(getNumberOrString(document.getElementById("input").value));

  element_list.appendChild(new_li);
});

document.getElementById("facilitator").addEventListener("click", (event) => {
  let element_list_name = document.getElementById("list name");
  let new_li2 = document.createElement("li");
  new_li2.innerText = randomMember(facilitator);

  element_list_name.appendChild(new_li2);
});
/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify,
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;
