// ==UserScript==
// @name     Add Goodreads Button
// @version  1
// @grant    none
// @include  https://www.amazon.com/*
// ==/UserScript==

var bookTitleSection = document.getElementById("booksTitle");
var title = document.getElementById("productTitle");

if(bookTitleSection && title ) {
  var input=document.createElement("input");
  input.type="button";
  input.value="Find on Goodreads";
  input.onclick = goToGoodreads;
  document.getElementById("booksTitle").appendChild(input);



  var url_string = location.href
  var url = new URL(url_string);

  function goToGoodreads(){
    window.location.replace("https://www.goodreads.com/search?q=" + title.innerText);
  }
}
