$(document).ready(function() {
    window.addEventListener('scroll', function() {
        let nav = document.querySelector('nav');
        nav.classList.toggle('sticky', window.scrollY > 0);
    });

    // function untuk tombol scroll-up dan menetapkan nilai scrollBehavior menjadi auto
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    // function menetapkan nilai scrollBehavior menjadi smooth kembali
    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });

    // function beralih toggle class
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});