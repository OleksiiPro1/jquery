
// $(function(){
//    function changeAttr(element, newAttr, newValue) {
//       var className = "." + element;
//       $(className).attr(newAttr, newValue);
//    }

//    changeAttr('logo', 'title', 'new text');

//  });


$(function(){

$('.mainText').before('<span>11111before</span>');
$('.mainText').after('<span>44444after</span>');
$('.mainText').append('<span>33333append</span>');
$('.mainText').prepend('<span>22222prepend</span>');

$('.logo').mouseup(function() {
   alert('Works!!!')
});


$('.arrowDown').click(function() {
   var clone = $(this).clone();
   $(this).after(clone);
})


// $('.logo').click(function() {
//    alert('Works!!!')
// });

});


// $(function(){
//    $('nav menu li a').css({
//       'color': 'red',
//       'font-size': '20px'
//    });
// });



//  $(function(){
//    var src = $('.logo img').attr('title', 'test text');
//    alert(src);
//  });


// $(function(){
//    $('.mainText').slideUp(2000).slideDown(2000);
// });


// $(function(){
//    $('.mainText').fadeTo(4000, 0.2).fadeTo(4000, 1);
// });


// $(function(){
//    $('.mainText').fadeOut(2000).fadeIn(5000);
// });



// $(function(){
//    $('.mainText').html('<b>New Title</b><h2>Title</h2>');
//    // $('.icons > div').hide(3000).show(3000);
// });

// $(function(){
   
//     $('.icons > div').hide(3000).show(3000);
// });


// $(document).ready(function(){
//    // code
// });


// $(function(){
//    // code
// });

// $(function(){
//    var tagP = $('.mainText p').text('New text for the main page');
//    // alert(tagP);
// });

// $(function(){
//    var tagP = $('.mainText p').hide(3000, function(){});
//    var tagP = $('.mainText p').show(3000);   
// });

// $(function(){
//    $(':submit').click(function(event) {
//       $('.text2').attr('disabled','disabled');
//       event.preventDefault();
//    });
//    $(':reset').click(function(event) {
//       $('.text2').removeAttr('disabled');
//       event.preventDefault();
//    });
// });