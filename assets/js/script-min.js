$(document).ready((function(){$("body").addClass("loaded"),$(".slider").length>0&&$(".slider").slick({infinite:!0,draggable:!0,dots:!0,arrows:!0,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:640,settings:{draggable:!0}}]}),$("#team .container .content .profile a").on("keypress click",(function(e){13!==e.which&&"click"!==e.type||$(this).children(".overlay").toggleClass("show")}))}));