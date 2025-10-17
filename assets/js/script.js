// ===== SIDEBAR TOGGLE ======
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // toggle click se document click trigger na ho
  sidebar.classList.toggle("sidebar--open");
});

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && e.target !== toggleBtn) {
    sidebar.classList.remove("sidebar--open");
  }
});

// ===== NAV LINKS ACTIVE STATE =====
const navLinks = document.querySelectorAll(
  ".main_bar_menu-grid .main_bar__item"
);

// Load active link from localStorage
const activeId = localStorage.getItem("activeNav");
if (activeId) {
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.dataset.id === activeId) {
      link.classList.add("active");
    }
  });
}

// Handle click on nav links
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    link.classList.add("active");
    localStorage.setItem("activeNav", link.dataset.id);
  });
});

// ====INVOICE PAGINATION =====
const pages = document.querySelectorAll(".invoice-summary__body");
const pageLinks = document.querySelectorAll(".page-link");

pageLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.getAttribute("data-page");
    if (!page) return; // Ignore Previous/Next for now

    // Hide all table bodies
    pages.forEach((p) => (p.style.display = "none"));

    // Show selected page
    const selectedPage = document.getElementById(`page${page}`);
    if (selectedPage) selectedPage.style.display = "table-row-group";

    // Update active page link
    document
      .querySelectorAll(".page-item")
      .forEach((li) => li.classList.remove("active"));
    link.parentElement.classList.add("active");
  });
});
