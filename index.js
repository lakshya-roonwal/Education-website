// for Scroll Animation
ScrollOut({
    once: true,
    threshold: .5
});

// Navbar Scroll Animation
window.addEventListener("scroll", function () {
    var header = document.getElementById('navbar');
    // this function change the class of the header so on scrolling the class will change and the properties applied to the new class will be added to the html element
    header.classList.toggle("sticky", window.scrollY > 0);
})


// Show or hide faq
const faqs = document.querySelectorAll('.faq');
faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
    })
})

// Preloader
const preloader = document.getElementById('preloader');
window.onload = () => preloader.style.display = 'none';
