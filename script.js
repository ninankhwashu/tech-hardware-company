const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuClose = document.getElementById("mobileMenuClose");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  document.body.style.overflow = "hidden";
});

mobileMenuClose.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "";
});

const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  });
});

const themeToggle = document.getElementById("themeToggle");
const mobileThemeToggle = document.getElementById("mobileThemeToggle");

themeToggle.addEventListener("click", toggleTheme);
mobileThemeToggle.addEventListener("click", toggleTheme);

function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    mobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
  }
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }
});

const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const statsSection = document.querySelector(".stats");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateValue("clientsCount", 0, 250, 2000);
        animateValue("productsCount", 0, 500, 2000);
        animateValue("yearsCount", 0, 8, 2000);
        animateValue("supportCount", 0, 100, 2000);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(statsSection);

$(document).ready(function () {
  $(".testimonials-slider").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 1,
    focusOnSelect: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
        },
      },
    ],
  });
});

const productBtns = document.querySelectorAll(".product-btn");
const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const checkoutBtn = document.getElementById("checkoutBtn");

productBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    productModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

modalClose.addEventListener("click", () => {
  productModal.classList.remove("active");
  document.body.style.overflow = "";
});

checkoutBtn.addEventListener("click", () => {
  productModal.classList.remove("active");
  document.body.style.overflow = "";

  alert("Checkout functionality would be implemented here");
});

window.addEventListener("click", (e) => {
  if (e.target === productModal) {
    productModal.classList.remove("active");
    document.body.style.overflow = "";
  }
  if (e.target === successModal) {
    successModal.classList.remove("active");
    document.body.style.overflow = "";
  }
});

const contactForm = document.getElementById("serviceRequestForm");
const successModal = document.getElementById("successModal");
const successModalClose = document.getElementById("successModalClose");
const successModalBtn = document.getElementById("successModalBtn");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  contactForm.reset();
  successModal.classList.add("active");
  document.body.style.overflow = "hidden";
});

successModalClose.addEventListener("click", () => {
  successModal.classList.remove("active");
  document.body.style.overflow = "";
});

successModalBtn.addEventListener("click", () => {
  successModal.classList.remove("active");
  document.body.style.overflow = "";
});
