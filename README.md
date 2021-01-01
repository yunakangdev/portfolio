## 📝 PROJECT

Let's make my own portfolio website!

#### https://jean-kang.herokuapp.com/

---

## PLAN

#### MENU

- [x] Home
- [x] About
- [ ] Skills
- [ ] Projects
- [ ] Testimonials
- [ ] Contact

#### ETC

- [x] Custom Logo & Icon
- [ ] Custom Mouse Cursor
- [x] Mouse Hover Event
- [x] Image Switch
- [ ] Background Music
- [x] Heroku & Domain

---

## ISSUE

- [x] 2020/12/28 : Switch images according to the window size using HTML, CSS, JavaScript

- [x] 2020/12/30 : Responsive Design for all devices

- [x] 2020/12/30 : Heroku Application Error

  <!-- https://devcenter.heroku.com/articles/error-codes -->

  1. H10: port issue  
     const port = process.env.PORT || 3000;

  <!-- tools.heroku.support/limits/boot_timeout -->

  2. H20: use boot timeout tool to increase the boot time  
     changed the boot time to 150 seconds

- [x] 2020/12/31 : Switch icons on mouse hover in CSS => too slow

  1. Before : CSS  
      .class img:hover {
     content: url('');
     };

  2. After : HTML  
     `<img src="" onmouseover="this.src=''" onmouseout="this.src=''">`
