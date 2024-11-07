document.addEventListener("DOMContentLoaded", function () {
    // Scroll to top on load
    window.scrollTo(0, 0);
  
    // Prevent scrolling for 4 seconds
    document.body.style.overflow = "hidden"; // Disable scroll
  
    setTimeout(function () {
      document.body.style.overflow = ""; // Enable scroll after 4 seconds
    }, 4000);
  });
  
  // Make sure to load GSAP and ScrollTrigger first
  gsap.registerPlugin(ScrollTrigger);
  
  // Targeting all headings (e.g., h1, h2, h3) and paragraphs, excluding elements with the class "odr_is-hero"
  gsap.utils
    .toArray(
      "h1:not(.odr_is-hero), h2:not(.odr_is-hero), h3:not(.odr_is-hero), p:not(.odr_is-hero)"
    )
    .forEach((element) => {
      let yOffset = element.tagName.startsWith("H") ? 40 : 80; // -30 for headings, -60 for paragraphs
  
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 75%", // 75% from the top of the screen
          toggleActions: "play none none reset", // Plays animation on scroll and doesn't reset
        },
        y: yOffset,
        opacity: 0,
        duration: 1, // Duration of 300ms
        ease: "ease.out", // 'ease' equivalent
      });
    });
  

    //added some more stuff to check out!