// Interactive Animations and Smooth Scroll

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in");

    // Trigger fade-in animation on scroll
    const revealSections = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.85) {
                section.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealSections);
    revealSections(); // Initial check

    // Smooth Scroll for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Resume Download Alert (for demo purpose)
    const resumeLink = document.getElementById("resume-download");
    resumeLink.addEventListener("click", () => {
        alert("Projects will be available soon!");
    });
});
