﻿/* Lukk menyen ved å trykke en annen plass på skjermen, som ikke inneholder meny elementer */
if (screen && screen.width > 600) {
    document.write($(document).click(function (event) {
        if (!$(event.target).closest('nav').length) {
            if ($(window).width() <= "600") {
                if ($('nav').is(":visible")) {
                    $('nav').hide();
                }
            }
        }
    }
))};



/* Mobilvisning */
$(document).ready(function () {
    $("#navToggle a").click(function (e) {
        e.preventDefault(); /* Overkjøre standar innstillinger */
        e.stopPropagation(); /* Hindre dobbelklikking for å aktivere meny! */

        $("header > nav").slideToggle();
        $("#logo").toggleClass("menuUp menuDown");

    });
    $(window).resize(function () {
        if ($(window).width() >= "600") { /* Mobil visning grense normal ~600px */
            $("header > nav").css("display", "block");

            if ($("#logo").attr('class') == "menuDown") {
                $("#logo").toggleClass("menuUp menuDown");
            }
        }
        else {
            $("header > nav").css("display", "none");
        }
    });

    $("header > nav > ul > li > a").click(function (e) {
        if ($(window).width() <= "600") {
            if ($(this).siblings().size() > 0) {
                e.preventDefault();
                $(this).siblings().slideToggle("fast")
                $(this).children(".toggle").html($(this).children(".toggle").html() == 'close' ? 'expand' : 'close');
            }
        }
    });
});


