$(function(){
   $(':submit').click(function(event) {
      $('.text2').attr('disabled','disabled');
      event.preventDefault();
   });
   $(':reset').click(function(event) {
      $('.text2').removeAttr('disabled');
      event.preventDefault();
   });
});