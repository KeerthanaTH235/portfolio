// ====== MOBILE MENU TOGGLE ======
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach(link =>
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

// ====== BACK TO TOP BUTTON ======
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ====== ACTIVE NAV LINK ON SCROLL ======
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute("id");
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// ====== PROJECT CARD ANIMATIONS ======
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });
    
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});

// ====== SKILL CATEGORY ANIMATIONS ======
const skillCategories = document.querySelectorAll(".skill-category");

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Apply initial styles for animation
skillCategories.forEach(category => {
    category.style.opacity = "0";
    category.style.transform = "translateY(20px)";
    category.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(category);
});

// ====== CONTACT FORM SIMULATION ======
document.querySelectorAll('a[href^="mailto"]').forEach(emailLink => {
    emailLink.addEventListener("click", (e) => {
        // You can add analytics or other tracking here
        console.log("Email link clicked:", emailLink.href);
    });
});

// ====== RESUME DOWNLOAD TRACKING ======
const resumeDownloadBtn = document.querySelector('a[href="resume.pdf"]');
if (resumeDownloadBtn) {
    resumeDownloadBtn.addEventListener("click", () => {
        console.log("Resume download initiated");
        // You can add analytics tracking here
        // Example: gtag('event', 'download', { 'file_name': 'resume.pdf' });
    });
}

// ====== TECH ICONS HOVER EFFECT ======
const techIcons = document.querySelectorAll(".tech-icons i");

techIcons.forEach(icon => {
    icon.addEventListener("mouseenter", () => {
        icon.style.transform = "scale(1.1) rotate(5deg)";
    });
    
    icon.addEventListener("mouseleave", () => {
        icon.style.transform = "scale(1) rotate(0)";
    });
});

// ====== SMOOTH SCROLL FOR ANCHOR LINKS ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});

// ====== CURRENT YEAR IN FOOTER ======
const currentYear = new Date().getFullYear();
const yearElements = document.querySelectorAll(".footer-bottom p");
yearElements.forEach(element => {
    if (element.textContent.includes("2026")) {
        element.textContent = element.textContent.replace("2026", currentYear);
    }
});

// ====== PAGE LOAD ANIMATION ======
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
    
    // Add a slight delay to ensure all elements are rendered
    setTimeout(() => {
        const heroContent = document.querySelector(".hero-content");
        if (heroContent) {
            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";
        }
    }, 300);
});

// ====== INITIAL PAGE SETUP ======
document.addEventListener("DOMContentLoaded", () => {
    // Set initial styles for hero content animation
    const heroContent = document.querySelector(".hero-content");
    if (heroContent) {
        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(20px)";
        heroContent.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    }
    
    // Add loading animation for tech icons
    const techIconsContainer = document.querySelector(".tech-icons");
    if (techIconsContainer) {
        techIconsContainer.style.opacity = "0";
        techIconsContainer.style.transform = "translateY(20px)";
        techIconsContainer.style.transition = "opacity 1s ease 0.3s, transform 1s ease 0.3s";
        
        setTimeout(() => {
            techIconsContainer.style.opacity = "1";
            techIconsContainer.style.transform = "translateY(0)";
        }, 500);
    }
    
    // Console greeting (optional - can be removed)
    console.log("%c👋 Hello! Welcome to Keerthana's Portfolio", 
        "color: #2563eb; font-size: 16px; font-weight: bold;");
    console.log("%cThis portfolio is built with HTML, CSS, and JavaScript", 
        "color: #7c3aed; font-size: 14px;");
});

// ====== TOUCH DEVICE DETECTION ======
function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}

// Adjust hover effects for touch devices
if (isTouchDevice()) {
    document.body.classList.add("touch-device");
    
    // Remove hover transforms on touch devices for better UX
    projectCards.forEach(card => {
        card.style.transition = "none";
    });
    
    skillCategories.forEach(category => {
        category.style.transition = "opacity 0.5s ease";
    });
}

// ====== WINDOW RESIZE HANDLER ======
let resizeTimer;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    }, 250);
});