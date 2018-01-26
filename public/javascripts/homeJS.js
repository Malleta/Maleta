let app = angular.module('myApp', ['pascalprecht.translate']);

app.config(function ($translateProvider) {
    $translateProvider.fallbackLanguage('rs');
    $translateProvider.translations('en', {
        'introducing': {
            'hello': 'Hello, I\'m',
            'fullName': 'Nikola Maletić',
            'webDeveloper': 'Web developer'
        },
        'aboutMe': {
            'title': 'Couple words about myself',
            'content': "Najradije bih ostavio Lorem Ipsum na ovom mestu, ne volim da pričam o sebi, ali pošto je ovo moj\n" +
            "                portfolio, evo nekoliko reči. Zainteresovanost sa računare je počela još od osnovne škole i od tada pa\n" +
            "                sve do sada traje moje upoznavanje. Uvek sam se pitako kako nešto radi, ali ne samo površinu, nego do\n" +
            "                najmanje čestice. Čim sam počeo da programiram otvorile su mi se oči i mogao sam da vidim samu srž. Sve\n" +
            "                je počelo banalno, prvi Counter Strike 1.6 server koji sam držao i posle modove koje sam modifikovao,\n" +
            "                sve je tako počelo... Da ne tupim previše, mlad sam, smatram da imam jako dobro logiku, radi nešto dok\n" +
            "                to ne završim, koliko god vremena oduzimalo, sve dok mislim da je važno. Isto tako sam lako lenj za neke\n" +
            "                stvari, ako rešenje može da se postigne preko računara / mašine, potrošiću ceo dan tražeći rešenje za\n" +
            "                tako nešto, pre nego što ću to isto ručno uraditi za dva sata.. Ljubitelj sam Star Wars-a. Toliko od\n" +
            "                mene, sve ostale stvari su dole,",
            'greetings': 'Sve najbolje.'
        },
        'profile': {
            'profile': 'Profile',
            'details': '21 year old Web developer from Belgrade\n' +
            '                who more appreciates practically\n' +
            '                over theoretical knowledge.',
            'fullNameHead': 'Full name:',
            'fullName': 'Nikola Maletić',
            'dateOfBirthHead': 'Date of birth:',
            'dateOfBirth': '20 December',
            'currentHead': 'Current status - student:',
            'current': 'Računarski fakultet',
            'webSiteHead': 'WebSite:',
            'webSite': 'https://maleta.herokuapp.com/',
            'skypeHead': 'Skype:',
            'skype': 'nmmaleta@gmail.com',
            'email': {
                'head': 'Email:',
                '1': 'nmmaleta@gmail.com',
                '2': 'maleta96@gmail.com'
            }
        },
        'knowledge': {
            'head': 'Knowledge',
            'details': {
                '1': 'The knowledge I have gained so far and which is updated daily.\n' +
                '                Presented in the status bar.',
                '2': 'I believe that no one can objectively show himself, but this is my attempt.'
            }
        },
        'cvButton': 'Show CV',
        'contactField': {
            'head': 'Do you want to contact me??',
            'button': 'Send a message'
        },
        'workExp': {
            'head': 'Work experience',
            'content': {
                '1': 'Project named "Želim postati poduzetnik",' +
                'for the needs of Croatian faculties'
            }
        },
        //todo ovde sam stiga sa prevodom, Cao, jebi se ti malo sutra
        'education': {
            'head': 'Education',
            'content': {
                '1': 'Računarski fakultet, smer Informaione tehnologije. Trenutno na trećoj godini\n' +
                '                            studija.',
                '2': 'Završena srednja elektro-tehnička škola u Beogradu.'
            }
        },
        'emailField': {
            'head': 'Kontaktirajte me',
            'form': {
                'name': 'Ime',
                'title': 'Naslov',
                'message': 'Poruka',
                'button': 'Pošalji',
                'successMsg': 'Poruka je uspešno poslata!'
            }
        },
        'checkEmail': {
            'head': 'Da li je sve u redu?',
            'posBtn': 'Da, pošalji!',
            'negBtn': 'Ne'
        }
    });
    $translateProvider.translations('rs', {
        'introducing': {
            'hello': 'Zdravo, ja sam',
            'fullName': 'Nikola Maletić',
            'webDeveloper': 'Web developer'
        },
        'aboutMe': {
            'title': 'Nekoliko reči o sebi',
            'content': "Najradije bih ostavio Lorem Ipsum na ovom mestu, ne volim da pričam o sebi, ali pošto je ovo moj\n" +
            "                portfolio, evo nekoliko reči. Zainteresovanost sa računare je počela još od osnovne škole i od tada pa\n" +
            "                sve do sada traje moje upoznavanje. Uvek sam se pitako kako nešto radi, ali ne samo površinu, nego do\n" +
            "                najmanje čestice. Čim sam počeo da programiram otvorile su mi se oči i mogao sam da vidim samu srž. Sve\n" +
            "                je počelo banalno, prvi Counter Strike 1.6 server koji sam držao i posle modove koje sam modifikovao,\n" +
            "                sve je tako počelo... Da ne tupim previše, mlad sam, smatram da imam jako dobro logiku, radi nešto dok\n" +
            "                to ne završim, koliko god vremena oduzimalo, sve dok mislim da je važno. Isto tako sam lako lenj za neke\n" +
            "                stvari, ako rešenje može da se postigne preko računara / mašine, potrošiću ceo dan tražeći rešenje za\n" +
            "                tako nešto, pre nego što ću to isto ručno uraditi za dva sata.. Ljubitelj sam Star Wars-a. Toliko od\n" +
            "                mene, sve ostale stvari su dole,",
            'greetings': 'Sve najbolje.'
        },
        'profile': {
            'profile': 'Profil',
            'details': '21-godšnji Web developer iz Beograda\n' +
            '                koji više ceni praktično\n' +
            '                nego teorijsko znanje.',
            'fullNameHead': 'Puno ime:',
            'fullName': 'Nikola Maletić',
            'dateOfBirthHead': 'Datum rođenja:',
            'dateOfBirth': '20 Decembar',
            'currentHead': 'Trenutno - student:',
            'current': 'Računarski fakultet',
            'webSiteHead': 'WebSite:',
            'webSite': 'https://maleta.herokuapp.com/',
            'skypeHead': 'Skype:',
            'skype': 'nmmaleta@gmail.com',
            'email': {
                'head': 'Email:',
                '1': 'nmmaleta@gmail.com',
                '2': 'maleta96@gmail.com'
            }
        },
        'knowledge': {
            'head': 'Znanje',
            'details': {
                '1': 'Znanje koje sam do sada stekao i koje se svakodnevno dopunjava.\n' +
                '                Predstavljeno je u statusnom baru.',
                '2': 'Verujem da niko ne može objektivno sebe da prikaže, ovo je moj pokušaj.'
            }
        },
        'cvButton': 'Preuzmite CV',
        'contactField': {
            'head': 'Želite da me kontaktirate?',
            'button': 'Pošaljite poruku'
        },
        'workExp': {
            'head': 'Radno iskustvo',
            'content': {
                '1': 'Projekat pod nazivom "Želim postati poduzetnik", za potrebe hrvatskih\n' +
                '                            fakulteta.'
            }
        },
        'education': {
            'head': 'Obrazovanje',
            'content': {
                '1': 'Računarski fakultet, smer Informaione tehnologije. Trenutno na trećoj godini\n' +
                '                            studija.',
                '2': 'Završena srednja elektro-tehnička škola u Beogradu.'
            }
        },
        'emailField': {
            'head': 'Kontaktirajte me',
            'form': {
                'name': 'Ime',
                'title': 'Naslov',
                'message': 'Poruka',
                'button': 'Pošalji',
                'successMsg': 'Poruka je uspešno poslata!'
            }
        },
        'checkEmail': {
            'head': 'Da li je sve u redu?',
            'posBtn': 'Da, pošalji!',
            'negBtn': 'Ne'
        }
    });

    $translateProvider.useSanitizeValueStrategy(null);
    $translateProvider.preferredLanguage('en');
});


app.controller('myCtrl', ['$scope', '$http', '$translate', function ($scope, $http, $translate) {

    AOS.init({
        duration: 900
    });

    $(".scroll-btn").click(function () {
        $('html,body').animate({
                scrollTop: $("#second").offset().top - 28
            },
            1000);
    });

    $scope.navBar = true;

    $(".mail").click(function () {
        $('html,body').animate({
                scrollTop: $(".footer").offset().top - 30
            },
            1000);
    });
    $(".contactMe").click(function () {
        $('html,body').animate({
                scrollTop: $(".footer").offset().top - 30
            },
            1000);
    });

    (function ($) {
        $(document).ready(function () {

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
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 600) {        // If page is scrolled more than 50px
            $('.backtotop').fadeIn({duration: 400});    // Fade in the arrow
        } else {
            $('.backtotop').fadeOut({duration: 400});   // Else fade out the arrow
        }
    });
    $('.backtotop').click(function () {      // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 500);
    });


    $('.pHTML').progress({
        percent: 89
    });
    $('.pCSS').progress({
        percent: 81
    });
    $('.pJS').progress({
        percent: 79
    });
    $('.pAngular').progress({
        percent: 74
    });
    $('.pPHP').progress({
        percent: 42
    });
    $('.pC').progress({
        percent: 65
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


    $('.about-me-img').hover(function () {
        $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
    }, function () {
        $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
    });


    $scope.sendMail = function () {
        if ($('.ui.form').form('is valid')[0]) {
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
                uName: 'empty',
                uEmail: 'email',
                uSubject: 'empty',
                uMessage: 'empty'
            }
        });

    $('.navibarProgress')
        .progress({
            total: $(document).height()
        });

    $(window).scroll(function () {
        $('.navibarProgress').progress('set progress', $(document).scrollTop() + $(window).height());

        if ($(window).scrollTop() + $(window).height() === $(document).height()) {
            $('.navibarProgress').progress('set progress', $(document).height());
        }
    });

    $('.ui.button.black').click(function () {
        if ($('.ui.form').form('is valid')[0]) {

            $('.ui.modal')
                .modal('show');

        }
    });
    //get ip
    $http.get('//ipfind.co/me?auth=05ec8abd-bfbb-4162-ac64-138400c69227\n').then(function (res) {
        $scope.location = res.data;
    });

//    popout
    $('._location').popup({
        popup: $('.flowing.popup'),
        on: 'click',
        inline: true,
        hoverable: true
    })
        .click(function () {
            $('.floating.ui.label').hide();
        })
    ;
    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };
}]);
