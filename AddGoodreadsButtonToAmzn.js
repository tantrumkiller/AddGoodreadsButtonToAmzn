// ==UserScript==
// @name     Add Goodreads Button
// @version  1
// @grant    none
// @include  https://www.amazon.*/*
// ==/UserScript==

var titleSection = null;
var title = null;

var bookTitleSection = document.getElementById("booksTitle");

//Older stanard page
if(bookTitleSection) {
	title = document.getElementById("productTitle");
  if(!title) {
		title = document.getElementById("ebooksProductTitle");
  	titleSection = bookTitleSection
	}
  
  titleSection = bookTitleSection
}

//New tabed version
if(!title) {
	var productTitle = document.getElementById("productTitle");
	var bookEdition = document.getElementById("bookEdition");
  
  if(bookEdition && productTitle) {
  	title = productTitle.innerText
    titleSection = document.getElementById("title_feature_div");
  }
}

if(title) {
  var input=document.createElement("input");
  input.type="button";
  input.value="Find on Goodreads";
  input.onclick = goToGoodreads;
  titleSection.appendChild(input);

  var url_string = location.href
  var url = new URL(url_string);

  function goToGoodreads(){
    var win = window.open("https://www.goodreads.com/search?q=" + title.innerText, '_blank');
    wun.focus();
  }
}
