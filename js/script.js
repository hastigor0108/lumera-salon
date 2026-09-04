/* =========================
   APPOINTMENT FORM
========================= */

const appointmentForm =
    document.getElementById("appointmentForm");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("clientName").value;

        const service =
            document.getElementById("service").value;

        alert(
            `Thank you, ${name}!\\n\\n` +
            `Your ${service} appointment request has been received.\\n\\n` +
            `Our Luméra team will contact you shortly.`
        );

        appointmentForm.reset();

    });

}
/* =========================
   LUMÉRA FINAL POLISH
========================= */


/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");

    });


    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");

        });

    });

}


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".section-label, " +
    ".about-content, " +
    ".service-card, " +
    ".package-card, " +
    ".gallery-item, " +
    ".team-card, " +
    ".review-card, " +
    ".offer-content, " +
    ".appointment-intro, " +
    ".appointment-form-wrapper, " +
    ".contact-item, " +
    ".contact-location"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================
   BACK TO TOP
========================= */

const backToTop = document.createElement("button");

backToTop.className = "back-to-top";
backToTop.innerHTML = "↑";
backToTop.setAttribute("aria-label", "Back to top");

document.body.appendChild(backToTop);


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
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


/* =========================
   DATE RESTRICTION
========================= */

const dateInput = document.getElementById("date");

if (dateInput) {

    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    dateInput.min = `${year}-${month}-${day}`;

}