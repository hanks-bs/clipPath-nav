let button_navEvent = () => {
  let nav_c = document.querySelectorAll(".backdropclip");

  let button_event = nav_c[1].querySelector(".menu--close2");
  let tl = gsap.timeline();

  let nav_items = document.querySelectorAll(".nav-wrapper > ul > li");
  button_event.addEventListener("click", () => {

    let closeNav = () => {
      button_event.classList.remove("open");
      tl.to(nav_c[0], .5, {
          clipPath: "circle(188px at 100% 0)",
          position: "absolute"
        })
        .to(nav_c[1], .5, {
          clipPath: "circle(162px at 100% 0)",
          position: "absolute"
        }, "-=.5")
        .add(() => {
          for (let i = 0; i < nav_items.length; i++)
      {
        tl.to(nav_items[i], .2, {
         opacity: 0,
         height: 0,

        })
      }
        })
    }

    if (button_event.classList.contains("open")) {
      closeNav();

    } else {
      button_event.classList.add("open");
      tl.to(nav_c[0], .5, {
          clipPath: "circle(250% at 100% 0)",
          position: "fixed"
        })
        .to(nav_c[1], .5, {
          clipPath: "circle(100% at 100% 0)",
          position: "fixed"
        }, "-=.5")
        .add(() => {
          for (let i = 0; i < nav_items.length; i++)
      {
        tl.fromTo(nav_items[i], .2, {
         opacity: 0,
          height: 0,

        },
        {
          opacity: 1,
          height: "auto"
        })
      }
        })
    }
    window.onmouseup = (e) =>
    {
        if (!nav_c[1].contains(e.target)) {
          closeNav();
        }
    }
    let links = document.querySelectorAll(".nav-wrapper > ul > li > a");
    links.forEach(element => {
      element.addEventListener("click", () => {
      closeNav();
      })
    });

  })
}

button_navEvent();