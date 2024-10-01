

$(document).ready(function(){

    // wow initiation
    new WOW().init();

    // navigation bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });

    // navbar bg change on scroll
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 100){
            $('.navbar').addClass('cng-navbar');
        } else {
            $('.navbar').removeClass('cng-navbar');
        }
    });

    // sample video popup
    $(document).ready(function() {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });

    // team carousel 
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    });

    // faq accordion
    $('.faq-head').each(function(){
        $(this).click(function(){
            $(this).next().toggleClass('show-faq-content');
            let icon = $(this).children('span').children("i").attr('class');

            if(icon == "fas fa-plus"){
                $(this).children('span').html('<i class = "fas fa-minus"></i>');
            } else {
                $(this).children('span').html('<i class = "fas fa-plus"></i>');
            }
        });
    });

    // testimonial carousel 
    $('.testimonial .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        items: 1
    });

});

// Get the popup
var popup = document.getElementById("impressumPopup");

// Get the button that opens the popup
var btn = document.getElementById("impressumBtn");

// Get the <span> element that closes the popup
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the popup
btn.onclick = function() {
    popup.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
    popup.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

// Check if the user has already accepted cookies
function checkCookieConsent() {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
        document.getElementById('cookieConsent').style.display = 'block';
    }
}

// Function to handle cookie acceptance
function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookieConsent').style.display = 'none';
}

// Call the function to check cookie consent on page load
window.onload = checkCookieConsent;

document.addEventListener("DOMContentLoaded", function() {
    // Function to animate the counting effect
    function animateCountUp(element) {
        const target = +element.getAttribute('data-target');
        const speed = 200; // Speed of the count-up effect

        const updateCount = () => {
            const current = +element.innerText;
            const increment = Math.ceil(target / speed);

            if (current < target) {
                element.innerText = current + increment;
                setTimeout(updateCount, 20); // Adjust delay for speed
            } else {
                element.innerText = target; // Ensure final number is exact
            }
        };

        updateCount();
    }

    // Select all elements with the 'count' class and animate them
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => animateCountUp(counter));
});
