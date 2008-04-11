var Zombie = {
   viewing_delay: 1500,  // the delay AFTER the iframe is loaded
   final_delay:   3500, // the finaly delay; we will always scare the shit out of someone after this time delay ;)
   infected:      false // only need to infect them once.
};

Zombie.prep = function(){
   // pre-cache lightbox and all the other stuff we need to do
};

Zombie.blight = function(){
   if (Zombie.infected) return;
   $('a#zombie').lightBox().click();
   Zombie.infected = true;
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

// for audio starting
$(function() {
  window.soundManager = new SoundManager();
  soundManager.url = '/images/sm2.swf';
  soundManager.nullURL = '/images/null.mp3';
  soundManager.debugMode = false;
  soundManager.consoleOnly = true;
  $(window).unload(soundManager.destruct)
  soundManager.onload=function() {
    soundManager.createSound('grr','/sounds/grar.mp3');
    soundManager.play('grr'); // call this when you want it to play
  };
  soundManager.beginInit();
});