var Zombie = {};
// Zombie.load_delayed_images = function(){
//    $('a#zombie').each(function(i, a){
//       img = $("<img src='" + $(a).attr('href') + "'></img>");
//       //NOTE: usiing img.load(); doesn't work..... it throws an erro in jquery, though this does.  odd
//       img.trigger('load');
//    });
// }

$(function() {
   Zombie.load_delayed_images();
   $('a#zombie').lightBox().click();
});
