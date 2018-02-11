$(window).load(function () {
    $('html, body').delay(4000) //wait 5 seconds
        .animate({
            //animate jQuery's custom "scrollTop" style
            //grab the value as the offset of #second from the top of the page
            'scrollTop': $('#section2').offset().top
        }, 300); //animate over 300ms, change this to however long you want it to animate for
});

// "sierra" animation function

$("#sierra").animate({
    left: '+=400',
    top: '+=150'
}, 1000);

//hamburger menu animation function

$(document).ready(function() {
    $('.animated-icon1,.animated-icon3,.animated-icon4').click(function() {
        $(this).toggleClass('open');
    });
});