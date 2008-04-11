var Zombie = {};
Zombie.delay = 1500;
$(function() {
   $('iframe.viewing').load(function(){
      setTimeout(function(){
         $('a#zombie').lightBox().click();         
      }, Zombie.delay)
   });
});
