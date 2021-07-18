$(document).ready(function (){
  $("body").addClass("loaded");
  if($(".slider").length > 0){
    $(".slider").slick({
      infinite: true,
      draggable: true,
      dots: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            draggable: true
          }
        }
      ]
    });
  }
  $("#team .container .content .profile a").on('keypress click', function(e){
    if (e.which === 13 || e.type === 'click') {
      $(this).children(".overlay").toggleClass("show");
    }
  });
});
   