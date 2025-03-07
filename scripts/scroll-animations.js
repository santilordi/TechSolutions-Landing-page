const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show'); 
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});

const btn = document.getElementById('btnScrollToTop');
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}
//window.addEventListener('scroll', () => {
//    if (window.scrollY > 150) {
//        btn.classList.add('show');
//    } else {
//        btn.classList.remove('show');
//    }
//});

//btn.addEventListener('click', () => {
//    window.scrollTo({
//        top: 0,
//        behavior: 'smooth'
//    });
//});