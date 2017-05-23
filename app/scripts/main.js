$(document).ready(function() {

  $('.popup-link').magnificPopup({
    tClose: 'Закрыть (Esc)',
    type:'inline',
    midClick: true
  });

  $('.header__menu ul').clone().appendTo('.mmenu-nav');

  var $menu = $('.mmenu-nav').mmenu({
    navbar: {
      title: 'Меню'
    },
    extensions: [
      'fx-menu-slide',
      'fx-listitems-slide',
      'border-full',
      'pagedim-black'

    ],
    offCanvas: {
      'position': 'right'
    },
    counters: true
  });

  var $icon = $('.js-navtrigger');
  var API = $menu.data('mmenu');

  $icon.on('click', function() {
    API.open();
  });

  API.bind('open:start', function($panel) {
    $('.js-navtrigger').toggleClass('-active');
  });

  API.bind('close:start', function($panel) {
    $('.js-navtrigger').toggleClass('-active');
  });

  if (Modernizr.mq('(max-width: 767px)')) {
    $('a.-pagescroll[href*="#"]:not([href="#"])').click(function() {
      API.close();
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return true;
        }
      }
    });
  } else {
    $('a.-pagescroll[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return true;
        }
      }
    });
  }
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true,
    callback: function(box) {

    },
    scrollContainer: null
  });
  wow.init();


  jQuery.extend(jQuery.validator.messages, {
            required: "Это поля обязательно для заполнения",
            remote: "Please fix this field.",
            email: "Пожалуйста введите правильный Email.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            accept: "Please enter a value with a valid extension.",
            maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
            minlength: jQuery.validator.format("Please enter at least {0} characters."),
            rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
            range: jQuery.validator.format("Please enter a value between {0} and {1}."),
            max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
            min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
        });



        $(".p_phone").mask("8-999-999-99-99");

        $('js-mail').each(function (index) {
            $(this).validate({
                rules: {
                    email: {
                        required: false,
                        email: true
                    }
                },
                submitHandler: function(form) {
                    // some other code
                    // maybe disabling submit button
                    // then:
                    //E-mail Ajax Send

                        $.ajax({
                            type: "POST",
                            url: "/mail.php", //Change
                            data: $(form).serialize()
                        }).done(function() {
                            $.magnificPopup.open({
                                items: {
                                    src: '#submit'
                                },
                                type:'inline',
                                midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
                            });
                            setTimeout(function() {
                                // Done Functions
//                                th.trigger("reset");
                                $.magnificPopup.close();
                            }, 3000);
                        });
                        return false;


                }
            });

        });


});
