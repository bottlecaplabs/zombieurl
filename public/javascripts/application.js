var Zombie = {
   viewing_delay: 2000,  // the delay AFTER the iframe is loaded
   final_delay:   5000,  // the finaly delay; we will always scare the shit out of someone after this time delay ;)
   infected:      false, // only need to infect them once.
   images: [],
   sounds: []
};


// Zombie.load_delayed_images = function(){
//    $('img[delay_load]').each(function(i, img){
//       img = $(img);
//       img.attr('src', img.attr('delay_load'))
//       img.removeAttr('delay_load');
//       //NOTE: usiing img.load(); doesn't work..... it throws an erro in jquery, though this does.  odd
//       img.trigger('load');
//    });
// }

Zombie.prep = function(){
   // Zombie.load_delayed_images();
   // pre-cache lightbox and all the other stuff we need to do
   window.soundManager = new SoundManager();
   soundManager.url = '/images/sm2.swf';
   soundManager.nullURL = '/images/null.mp3';
   soundManager.debugMode = false;
   soundManager.consoleOnly = true;
   $(window).unload(soundManager.destruct)
   soundManager.onload=function() {
     soundManager.createSound('grr', Zombie.randomSound());
   };
   soundManager.beginInit();
};

Zombie.blight = function(){
   if (Zombie.infected) return;
   soundManager.play('grr'); // call this when you want it to play
   $('a#zombie').lightBox().click();        
   Zombie.infected = true;
};


Zombie.randomSound = function(){
  var sounds = ['scream.mp3',
  'psycho_scream.mp3',
  'male_scream2.mp3',
  'male_scream.mp3',
  'loud_female_scream.mp3',
  'female_scream3.mp3',
  'female_scream2.mp3',
  'female_scream.mp3',
  'terrified_female_scream.mp3'];
  var index = Math.ceil(Math.random()*sounds.length) - 1;
  return '/sounds/'+sounds[index];
};


$(function() {
   Zombie.prep();
   
   setTimeout(function(){
      Zombie.blight();
   }, Zombie.final_delay );

   $('iframe.viewing').load(function(){
      setTimeout(function(){
         Zombie.blight();
      }, Zombie.viewing_delay);
   });
});


