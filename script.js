// Typewriter.js
// https://github.com/ronv/Typewriter.js

var aText = new Array(
  "<span class='terminal__text__span'>Hi, Welcome to my Profile I'm Albert👋</span>",
  "<span class='terminal__text__span'>I'm Beginner Developer</span>", 
  "<span class='terminal__text__span'>I come from the city of Cilegon, Banten</span>",
  "<span class='terminal__text__span'>I study at one of the well-known universities in Banten Province",
  "<span class='terminal__text__span'>Skills: PHP, MYSQL, JavaScript</span>",
  "<span class='terminal__text__span'># # # # # # #</span>",
  "<span class='terminal__text__span'>see my <a href='#'>portfolio</a> or profile on <a href='#'>github</a></span>",
  "<span class='terminal__text__span'>and</span>",
  "<span class='terminal__text__span'>You can <a href='#'>Call me</a> and  <a href='#'>Hire me</a></span>"
);
var iSpeed = 50; 
var iIndex = 0; 
var iArrLength = aText[0].length; 
var iScrollAt = 20; 
 
var iTextPos = 0; 
var sContents = ''; 
var iRow; 
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 200);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

$(function() {
	$( ".terminal" ).draggable();
});