//alert("PROBA JS");
/* Событие load на объекте window наступает, когда загрузилась вся страница, включая стили, картинки и другие ресурсы.
*/
window.onload = function() {
  alert("PAGE DOWNLOAD.");
  var hand = $("#slider-01 > span");
  hand.on('click', function() {
    alert("CLICK by handle!; " + hand.css("background")); //  + this.css('background')
    hand.css({"width":"40px", "height": "40"});
  });
};
/*
$("#slider-01").on('click', function() {
    alert("CLICK");
});
$("ui-slider .ui-slider-handle").css("background-color", 'green');
*/