function changeAboutImg() {
  if (window.innerWidth >= 368) {
    document.getElementsByClassName("about__image").src="about_web.png";
  }
  else {
    document.getElementsByClassName("about__image").src="about_mobile.png";
  }
}