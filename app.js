// --- Mobile Menu Toggle ---
const menu = document.querySelector(".menu");
const openBtn = document.querySelector(".ham");
const closeBtn = document.querySelector(".close");

const toggleMenu = (isOpen) => {
    menu.classList.toggle("active", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "auto";
};

if (openBtn) openBtn.addEventListener("click", () => toggleMenu(true));
if (closeBtn) closeBtn.addEventListener("click", () => toggleMenu(false));

// --- Back to Top Logic ---
const topBtn = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- Simple Alert for "Add to Cart" ---
document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert("Added to cart! 🛒");
    });
});