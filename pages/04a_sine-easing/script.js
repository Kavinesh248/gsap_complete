import gsap from "gsap";

const scroller = document.querySelector(".scroll-to-top");

let isFloating = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scroller.classList.add("show");

    if (!isFloating) {
      gsap.to(scroller, {
        y: -10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.out",
      });
    }

    isFloating = true;
  } else {
    scroller.classList.remove("show");
  }
});
