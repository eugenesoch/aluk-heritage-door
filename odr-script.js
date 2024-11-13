window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10); // Small delay to ensure scroll resets on mobile

  // Add 5 seconds delay to show .cookie-settings
  setTimeout(() => {
    document.querySelector(".cookie-settings").style.display = "block";
  }, 5000);
});

// Function to initialize GSAP ScrollTrigger animations
function initScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Select headings and other elements, excluding elements with the class "odr_is-hero"
  const elements = gsap.utils.toArray(
    "h1:not(.odr_is-hero), h2:not(.odr_is-hero), h3:not(.odr_is-hero), " +
      ".odr_table-heading-wrapper, .odr_table_cell-wrapper, " +
      ".odr_footer-animated-link-static-text, .odr_footer-animated-link-block, " +
      ".odr_form_field-wrapper, .odr_is-submit-button, .odr_footer-brand-wrapper"
  );

  // Select paragraphs except those with .odr_is-hero or .odr_configuration-text
  const paragraphElements = gsap.utils.toArray(
    "p:not(.odr_is-hero):not(.odr_configuration-text)"
  );

  // Combine the arrays
  elements.push(...paragraphElements);

  elements.forEach((element) => {
    const yOffset = element.tagName.startsWith("H") ? 15 : 30;

    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "-30 85%",
        toggleActions: "restart none none reset",
        //markers: "true",
      },
      y: yOffset,
      opacity: 0,
      duration: 1,
      ease: "Power1.out",
    });
  });
}

// Initialize GSAP ScrollTrigger animations
initScrollAnimations();
