$(function(){
  $('a[href^="#"]').click(function (){
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - 60;
    jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
  });
  $('.begin-tov-img').slick({
    infinite: true,
    autoplay: true,
    dots: false,
    arrows: false,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('.tov-gal').slick({
    infinite: true,
    autoplay: true,
    dots: false,
    arrows: true,
    fade: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',
    nextArrow: '<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>'
  });   
  $('.rew-cont').slick({
    infinite: true,
    autoplay: false,
    dots: false,
    arrows: true,
    fade: false,
    speed: 300,
    slidesToShow: 3,
    prevArrow: '<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',
    nextArrow: '<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>',
    responsive: [
    {
      breakpoint: 959,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 639,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  /* FAQ */

  function faqInitialization() {
    $(".faq_block .question_item .question").prepend("<span class='icon'></span>");
    $(".faq_block .question_item:eq(0)").addClass("active");
    var answer_text = $(".faq_block .question_item.active .answer").text();
    $(".faq_block").append("<div class='answer_block'>"+answer_text+"</div>");
  }

  faqInitialization();

  $(".faq_block .question_item .question").click(function(){
    if ($(".faq_block .answer_block").css("display") == "block") {
      $(".faq_block .question_item").removeClass("active");
      $(this).parent().addClass("active");
      var answer_text = $(".faq_block .question_item.active .answer").text();
      $(".faq_block .answer_block").text(answer_text);
    }
  });
  
});
