$( document ).ready(function() {
   $("#landingPage").show();
   $("#mapOfBirds").hide();
   $("#birdFinder").hide();
   $("#birdIdentifier").hide();

   $(function() {
      $('a').on('click', function(e) {
         e.preventDefault();
         $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
      });
   });
});