## 📝 PROJECT

Let's make my own portfolio website!

#### https://jean-kang.herokuapp.com/

---

## PLAN

#### MENU

- [x] About
- [x] Skills
- [x] Projects
- [x] Testimonials
- [x] Contact

#### ETC

- [x] Custom Logo & Icon
- [x] Mouse Hover Event
- [x] Image Switch
- [x] Heroku & Domain

---

## ISSUE

- [x] 2020/12/28 : Switch images according to the window size using HTML, CSS, JavaScript

- [x] 2020/12/30 : Responsive Design for all devices

  1. Set parents' width to 100% and set child's smaller than that
  2. Set margin: auto.

- [x] 2020/12/30 : Heroku Application Error

  <!-- https://devcenter.heroku.com/articles/error-codes -->

  1. H10: port issue  
     const port = process.env.PORT || 3000;

  <!-- tools.heroku.support/limits/boot_timeout -->

  2. H20: use boot timeout tool to increase the boot time  
     changed the boot time to 150 seconds

- [x] 2020/12/31 : Switch icons on mouse hover in CSS

  1. Before : CSS => too slow  
      .class img:hover {
     content: url('');
     };

  2. After : HTML => solved  
     `<img src="" onmouseover="this.src=''" onmouseout="this.src=''">`

- [x] 2021/01/08 : CSS for image slides

- [x] 2021/01/22 : CSS for auto navigation

- [ ] 2021/01/23 : CSS(max-width for about container)

- [x] 2021/01/28 : CSS(space on the right side on mobile)

  1. Comment out div one by one and check which div is the problem
  2. Check if any div is set to the width that is bigger than its parents(or the mobile width)

- [x] 2021/02/03 : JS + CSS(show nav menu when toggle is clicked)

  1. set onClick=showHideMenu() to the toggle to run the function when the toggle is clicked
  2. create function showHideMenu(){} and show nav menu if it's hidden

     if (~.style.display === "none") {  
     ~.style.display = "flex";  
     }

- [x] 2021/02/04 : JS + CSS(transform nav menu when scrolling down)

  1. window.scrollY;
  2. const navbarHeight = navbar.getBoundingClientRect().height;

  document.addEventListener('scroll', () => {  
   if (navbarMenu.style.display !== "none" && window.scrollY > navbarHeight) {  
   navbarMenu.classList.add('transform');  
   } else {  
   navbarMenu.classList.remove('transform');  
   }  
  })

- [x] 2021/02/04 : JS + CSS(scroll down when the nav menu is clicked)

  1. add data-link="#each section's id" to navbarMenuItems
  2. add addEventListener to navbarMenu
  3. now when the event happens(the navbarMenu is clicked), its event.target(navbarMenuItem) saves its data-link values to event.target.dataset.link
  4. thus, we can check if the navbarMenuItem is clicked by checking the link
  5. if the navbarMenuItem is clicked, it will have each section's id as their data-link
  6. when the navbarMenuItem is clicked, call the scrollIntoView on the link to scroll down to each section

  navbarMenu.addEventListener('click', (event) => {  
   const target = event.target;  
  const link = target.dataset.link;

  if (link == null) {  
   return;  
   }  
   const scrollTo = document. querySelector(link);  
   scrollTo.scrollIntoView();  
  })

- [x] 2021/02/04 : CSS(nav menu has to be on top always)  
       => z-index: 1

- [x] heroku pre-receive hook declined error after installing React

  1. delete cache  
     heroku config:set NODE_MODULES_CACHE=false
  2. check if versions of node / npm
     match engines in node_modules  
      => node -v  
      => npm -v  
      => "engines": {
     "node": "v14.6.0",
     "npm": "6.14.7"
     },

  3. set ~ to true
