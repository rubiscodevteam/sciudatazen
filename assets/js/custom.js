//.ready start
$(document).ready(function() {
    "use strict";
    //For Color Picking
    $('.eco_color_varition ul li a').click(function(e) {
        e.preventDefault();
        var color = $(this).attr('data');
        var url = $(this).attr('data-url');
        document.cookie = "colorcssfile=" + color;
        var current_url = document.URL;
        var getmainurl = current_url.split('index.html');
        if (getmainurl.length == 2) {
            window.open(getmainurl[0] + url + '/index.html', '_blank');
        } else {
            window.open(current_url + url, '_blank');
        }
    });
    //Revolution Slider For Landing view	
    $('.tp-banner1').show().revolution({
        dottedOverlay: "none",
        delay: 14000,
        startwidth: 1180,
        startheight: 970,
        hideThumbs: 200,
        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 1,
        simplifyAll: "off",
        navigationType: "none",
        navigationArrows: "none",
        navigationStyle: "round",
        touchenabled: "on",
        onHoverStop: "off",
        nextSlideOnWindowFocus: "off",
        swipe_threshold: 0.7,
        swipe_min_touches: 1,
        drag_block_vertical: false,
        keyboardNavigation: "off",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 0,
        navigationVOffset: 20,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,
        shadow: 0,
        fullWidth: "on",
        fullScreen: "off",
        spinner: "spinner2",
        stopLoop: "on",
        stopAfterLoops: 0,
        stopAtSlide: 1,
        shuffle: "off",
        autoHeight: "off",
        forceFullWidth: "off",
        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off",
        hideThumbsUnderResolution: 0,
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        startWithSlide: 0
    });
    //ready		
});
//For Reset Cokkies	
function resetcolorcookie() {
    document.cookie = "colorcssfile=nocss; expires=Thu, 18 Dec 2013 12:00:00 UTC";
}