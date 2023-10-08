// Navigation bar effects on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Portofolio section - Modal
const portofolioModals = document.querySelectorAll(".portofolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portofolioCloseBtns = document.querySelectorAll(".portofolio-close-btn");

var modal = function (modalClick) {
  portofolioModals[modalClick].classList.add("active");
};

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    modal(i);
  });
});

portofolioCloseBtns.forEach((portofolioCloseBtn) => {
  portofolioCloseBtn.addEventListener("click", () => {
    portofolioModals.forEach((portofolioModalView) => {
      portofolioModalView.classList.remove("active");
    });
  });
});

// Dark/Light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () =>
  document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () =>
  document.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getIcon("saved-icon");

if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"](
    "dark-theme"
  );
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

// Scroll to top button
// const scrollTopBtn = document.querySelector(".scrollToTop-btn");

// window.addEventListener("scroll", function () {
//   scrollTopBtn.classList.toggle("active", window.scrollY > 500);
// });

// scrollTopBtn.addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });

// Navigation menu items active on page scroll
// window.addEventListener("scroll", () => {
//   const sections = document.querySelectorAll("section");
//   const scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     let sectionHeight = current.offsetHeight;
//     let sectionTop = current.offsetTop - 50;
//     let id = current.getAttribute("id");

//     const navItem = document.querySelector(".nav-items a[href*='" + id + "']"); // Tambahkan kutip di sekitar nilai href
//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       navItem.classList.add("active");
//     } else {
//       navItem.classList.remove("active");
//     }
//   });
// });

// Resposive nav menu toggle
// const menuBtn = document.querySelector(".nav-menu-btn");
// const closeBtn = document.querySelector(".nav-close-btn");
// const navigation = document.querySelector(".navigation");

// menuBtn.addEventListener("click", () => {
//   navigation.classList.add("active");
// });

// closeBtn.addEventListener("click", () => {
//   navigation.classList.remove("active");
// });

document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen tautan
  var learnMoreLink = document.querySelector(".learn-more-link");

  // Periksa apakah elemen tautan ditemukan sebelum menambahkan event listener
  if (learnMoreLink) {
    // Tambahkan event listener untuk menangani klik
    learnMoreLink.addEventListener("click", function (event) {
      // Hentikan perilaku default dari tautan
      event.preventDefault();

      // Panggil fungsi ketika tautan diklik
      handleLearnMoreClick();
    });
  }

  // Fungsi untuk menangani klik tautan
  function handleLearnMoreClick() {
    // Tambahkan logika atau efek yang diinginkan di sini
    console.log('Tautan "Learn more" diklik!');

    // Buka tautan di tab atau jendela baru
    window.open(learnMoreLink.href, "_blank");
  }
});
