/* Hailu DevFusion interactions — no framework required */
(() => {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("#nav-links");

  function closeMenu() {
    if (!menuToggle || !navLinks) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    navLinks.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
      navLinks.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) closeMenu();
    });
  }

  // Accessible project category filter.
  const filterButtons = document.querySelectorAll(".filter-button");
  const projectCards = document.querySelectorAll(".project-card");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      projectCards.forEach((card) => {
        const show = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !show);
      });
    });
  });

  // Reveal elements as they enter view; gracefully fall back without IntersectionObserver.
  const revealElements = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  // Automatically update the footer year.
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  /*
   * PERSONALIZE YOUR CONTACT DETAILS:
   * Replace the sample values below with your real URLs/email.
   * Keep the full https:// URL for social profiles.
   */
  const contactDetails = {
    email: "hailutadese786@gmail.com",
    github: "https://github.com/hailu326",
    linkedin: "https://www.linkedin.com/in/hailu-tadese",
    youtube: "https://www.youtube.com/@DigitalCreativeTechnologist"
  };

  const emailIsPlaceholder = !contactDetails.email ||
    contactDetails.email === "YOUR_EMAIL@example.com" ||
    contactDetails.email.includes("hailutadese786@gmail.com");

  document.querySelectorAll("[data-email-link]").forEach((link) => {
    if (emailIsPlaceholder) {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Please add your real email address in script.js and index.html before using this link.");
      });
    } else {
      link.href = `mailto:${contactDetails.email}`;
    }
  });
  document.querySelectorAll("[data-email-text]").forEach((element) => {
    element.textContent = contactDetails.email;
  });

  Object.entries({
    github: "https://github.com/account",
    linkedin: "Add your LinkedIn profile",
    youtube: "Add your YouTube channel"
  }).forEach(([network, placeholder]) => {
    const url = contactDetails[network];
    const validUrl = typeof url === "string" && /^https:\/\/\S+/i.test(url) &&
      !url.endsWith("github.com/") && !url.endsWith("linkedin.com/") && !url.endsWith("youtube.com/");
    document.querySelectorAll(`[data-social="${network}"]`).forEach((link) => {
      if (validUrl) {
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      } else {
        link.href = "#contact";
        link.removeAttribute("target");
        link.addEventListener("click", (event) => {
          event.preventDefault();
          alert(`Add your real ${network} profile URL in script.js before using this link.`);
        });
      }
    });
    document.querySelectorAll(`[data-social-text="${network}"]`).forEach((element) => {
      element.textContent = validUrl ? url.replace(/^https:\/\/(www\.)?/, "") : placeholder;
    });
  });
})();
