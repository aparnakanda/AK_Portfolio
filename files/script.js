document.addEventListener('DOMContentLoaded', function(){
    var typed = new Typed(".text", {
        strings: ["Full Stack Developer..!!", "Problem Solver..!!"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const menuIcon = document.querySelector('.menu-icon');

    navbar.classList.toggle('show');
    menuIcon.innerHTML = navbar.classList.contains('show') ? '✕' : '☰';
}

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar');
        const menuIcon = document.querySelector('.menu-icon');

        // Close the menu after clicking a link
        if (navbar.classList.contains('show')) {
            setTimeout(() => {
                navbar.classList.remove('show');
                menuIcon.innerHTML = '☰';
            }, 200);
        }

        // Remove active class from all links and add to clicked one
        document.querySelectorAll('.navbar a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
    });
});


window.addEventListener('load', () => {
    document.querySelector('[href="#Home"]').classList.add('active');
});


document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".container");

    function fadeInOnScroll() {
        containers.forEach(container => {
            let position = container.getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 1.3;

            if (position < screenPosition) {
                container.style.opacity = "1";
                container.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();  
});

document.addEventListener("DOMContentLoaded", function () {
    const internshipCards = document.querySelectorAll(".internship-card");

    internshipCards.forEach((card) => {
        card.addEventListener("mouseover", () => {
            card.classList.add("hovered");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("hovered");
        });
    });
});
