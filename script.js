// var slideIndex = 1;
// activeMember(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//     activeMember(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     activeMember(slideIndex = n);
// }

// function activeMember(n) {
//   var i;
//   var slides = document.getElementsByClassName("member-item");
//   var array = [...slides];
//   console.log(slideIndex, slides, slides[1]);
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].classList.remove("active"); 
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].className += "active"; 
//   dots[slideIndex-1].className += " active";
// }
$(document).ready(function(){
$('#our-team .list-member .member-item').hover(
    function(){ $(this).addClass('hover') },
    function(){ $(this).removeClass('hover') });
// show more/less work
    $('.list-porfolio li:lt(6)').show();
    $('.btn-show-less').hide();
    var items =  9;
    var shown =  3;
    $('.btn-show-more').click(function () {
        $('.btn-show-less').show();
        shown = $('.list-porfolio li:visible').length+3;
        if(shown< items) {
          $('.list-porfolio li:lt('+shown+')').show(300);
        } else {
          $('.list-porfolio li:lt('+items+')').show(300);
          $('.btn-show-more').hide();
        }
    });
    $('.btn-show-less').click(function () {
        $('.list-porfolio li').not(':lt(6)').hide(300);
        $('.btn-show-more').show();
        $('.btn-show-less').hide();
    });
});  