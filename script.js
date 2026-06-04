// Dark Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});

// Volunteer Button

document.querySelector(".join-btn")
.addEventListener("click", () => {

    document.getElementById("contact")
    .scrollIntoView({
        behavior:"smooth"
    });

});

// Contact Button

document.querySelector(".contact-btn")
.addEventListener("click", () => {

    window.open(
        "https://www.instagram.com/shecanfoundation.ngo",
        "_blank"
    );

});

// Scroll Animation

const sections = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop =
        section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){
            section.classList.add("show");
        }

    });

});

// Initial Check

window.dispatchEvent(new Event("scroll"));