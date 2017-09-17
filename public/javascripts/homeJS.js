var app = angular.module('myApp', []);
app.controller('myCtrl',['$scope', '$http', function ($scope, $http) {


    AOS.init({
        duration: 900
    });

    $(".scroll-btn").click(function() {
        $('html,body').animate({
                scrollTop: $("#21").offset().top},
            1000);
    });
    $scope.navBar = true;

    (function ($) {
        $(document).ready(function(){

            // hide .navbar first
            $(".menu").hide();

            // fade in .navbar
            $(function () {
                $(window).scroll(function () {

                    // set distance user needs to scroll before we start fadeIn
                    if ($(this).scrollTop() > 350) {
                        $('.menu').fadeIn();
                    } else {
                        $('.menu').fadeOut();
                    }
                });
            });

        });
    }(jQuery));




    $('#pHTML').progress({
        percent: 89
    });
    $('#pCSS').progress({
        percent: 81
    });
    $('#pJS').progress({
        percent: 73
    });
    $('#pAngular').progress({
        percent: 78
    });
    $('#pPHP').progress({
        percent: 42
    });
    $('#pC').progress({
        percent: 39
    });
    $('#pNode').progress({
        percent: 71
    });
    $('#pMySQL').progress({
        percent: 82
    });
    $('#pPhotoShop').progress({
        percent: 76
    });
    $('#pIllustrator').progress({
        percent: 49
    });


    $('.about-me-img').hover(function(){
        $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
    }, function(){
        $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
    });



}]);