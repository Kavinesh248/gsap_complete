gsap.to(".card", {
  scale: 1,
  duration: 1,
  onComplete: function () {
    gsap.to(".card", {
      duration: 1,
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(".card", {
      boxShadow: "0 20px 80px rgba(29, 209, 161, 0.6)",
      repeat: -1,
      yoyo: true,
      duration: 1,
    });
  },
});
