// Contact form handling
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        contactForm.reset();
        window.location.href = "thank-you.html";
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error submitting form. Please try again later.");
    }
  });
}

// Smooth scroll for in-page anchor links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetSelector = this.getAttribute("href");
    if (!targetSelector || targetSelector === "#") {
      return;
    }

    const target = document.querySelector(targetSelector);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Scroll-based navbar styling
const siteNav = document.getElementById("siteNav");
if (siteNav) {
  const applyNavState = () => {
    if (window.scrollY > 24) {
      siteNav.classList.add("nav-scrolled");
    } else {
      siteNav.classList.remove("nav-scrolled");
    }
  };

  applyNavState();
  window.addEventListener("scroll", applyNavState, { passive: true });
}

// Mobile nav menu toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle");

// Sticky CTA: show after scrolling past hero
const stickyCTA = document.getElementById("stickyCTA");
if (stickyCTA) {
  const toggleStickyCTA = () => {
    if (window.scrollY > 420) {
      stickyCTA.style.opacity = "1";
      stickyCTA.style.pointerEvents = "auto";
      stickyCTA.style.transform = "translateY(0)";
    } else {
      stickyCTA.style.opacity = "0";
      stickyCTA.style.pointerEvents = "none";
      stickyCTA.style.transform = "translateY(12px)";
    }
  };
  // Start hidden
  stickyCTA.style.opacity = "0";
  stickyCTA.style.pointerEvents = "none";
  stickyCTA.style.transform = "translateY(12px)";
  stickyCTA.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  window.addEventListener("scroll", toggleStickyCTA, { passive: true });
  toggleStickyCTA();
}

const mobileMenu = document.getElementById("mobileMenu");

if (mobileMenuToggle && mobileMenu) {
  const setMobileMenuState = (isOpen) => {
    mobileMenu.classList.toggle("hidden", !isOpen);
    mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));

    const icon = mobileMenuToggle.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-bars", !isOpen);
      icon.classList.toggle("fa-xmark", isOpen);
    }
  };

  setMobileMenuState(false);

  mobileMenuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("hidden");
    setMobileMenuState(isOpen);
  });

  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => setMobileMenuState(false));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      setMobileMenuState(false);
    }
  });
}
