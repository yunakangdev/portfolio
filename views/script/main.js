// function switchImg() {
//   if (window.innerWidth >= 800) {
//     document.getElementById("about__image").src="./images/about_web.png";
//   }
//   else {
//     document.getElementById("about__image").src="./images/about_mobile.png";    
//   }
// };

// // <script defer /> makes the .js to be downloaded after html is downloaded. Thus window.onload is needed.
// window.onload = function() {
//   switchImg();
// };

// //call switchImg() whenever the window size is resized.
// window.addEventListener("resize", function() {
//   switchImg();
// });

var counter = 1;
setInterval(function() {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 2) {
    counter = 1;
  }
}, 5000);