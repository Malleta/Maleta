let app = angular.module('myApp', []);

app.controller('myCtrl',['$scope', '$http', function ($scope, $http) {

    $scope.uMail ={
    };

    AOS.init({
        duration: 900
    });

    $(".scroll-btn").click(function() {
        $('html,body').animate({
                scrollTop: $("#second").offset().top -28},
            1000);
    });

    $scope.navBar = true;

    $(".mail").click(function() {
        $('html,body').animate({
                scrollTop: $(".footer").offset().top -30},
            1000);
    });
    $(".contactMe").click(function() {
        $('html,body').animate({
                scrollTop: $(".footer").offset().top -30},
            1000);
    });

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

    // ===== Scroll to Top ====
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 600) {        // If page is scrolled more than 50px
            $('.backtotop').fadeIn({duration  : 400});    // Fade in the arrow
        } else {
            $('.backtotop').fadeOut({duration  : 400});   // Else fade out the arrow
        }
    });
    $('.backtotop').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });


    $('.pHTML').progress({
        percent: 89
    });
    $('.pCSS').progress({
        percent: 81
    });
    $('.pJS').progress({
        percent: 73
    });
    $('.pAngular').progress({
        percent: 78
    });
    $('.pPHP').progress({
        percent: 42
    });
    $('.pC').progress({
        percent: 39
    });
    $('.pNode').progress({
        percent: 71
    });
    $('.pMySQL').progress({
        percent: 82
    });
    $('.pPhotoShop').progress({
        percent: 76
    });
    $('.pIllustrator').progress({
        percent: 49
    });


    $('.about-me-img').hover(function(){
        $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
    }, function(){
        $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
    });




    $scope.sendMail = function () {
        if( $('.ui.form').form('is valid')[0]){
            $http.post('/sendMail', {}, {params: $scope.uMail})
                .then(function (res) {
                    $('.ui.inverted.dimmer').dimmer('show');
                });
        }
    };


    //SLIDER



    // LOADER
    setTimeout(function () {
        $(".overlay").fadeOut(1200);
        $('body').removeClass('noScroll');
    }, 1500);

//    FORM VALIDATION
    $('.ui.form')
        .form({
            fields: {
                uName     : 'empty',
                uEmail   : 'email',
                uSubject : 'empty',
                uMessage : 'empty'
            }
        });

    $('.navibarProgress')
        .progress({
            total: $(document).height()
        });

    $(window).scroll(function () {
        $('.navibarProgress').progress('set progress', $(document).scrollTop() + $(window).height());

        if($(window).scrollTop() + $(window).height() === $(document).height()){
            $('.navibarProgress').progress('set progress', $(document).height());
        }
    });

    $('.ui.button.black').click(function () {
        if( $('.ui.form').form('is valid')[0]){

            $('.ui.modal')
                .modal('show');

        }
    });
}]);